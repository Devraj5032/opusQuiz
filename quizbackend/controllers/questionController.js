const database = require("../db");

// const addDataToTable = (req , res) => {
//     database.query(`SELECT * questions `)
// }

// POST method route for inserting a new question with answer
const addQuestionToTable = (req, res) => {
  const { question, options, answer } = req.body;

  // Insert the answer into the answers table
  const answerQuery = "INSERT INTO answers (answer_text) VALUES (?)";
  database.query(answerQuery, [answer], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting new answer");
      return;
    }

    // Get the ID of the newly inserted answer
    const answerId = result.insertId;

    // Insert the question into the questions table
    const questionQuery =
      "INSERT INTO questions (question, option1, option2, option3, option4, answer_id) VALUES (?, ?, ?, ?, ?, ?)";
    database.query(
      questionQuery,
      [question, options[0], options[1], options[2], options[3], answerId],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error inserting new question");
        } else {
          res.send("New question added with ID " + result.insertId);
        }
      }
    );
  });
};

// GET method route for fetching all questions with answers and options
const getQuestions = (req, res) => {
  const query = `
      SELECT q.id AS question_id, q.question, q.option1, q.option2, q.option3, q.option4, a.answer_text
      FROM questions AS q
      INNER JOIN answers AS a ON q.answer_id = a.id
    `;

  database.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching questions");
    } else {
      const questions = results.map((row) => {
        return {
          id: row.question_id,
          question: row.question,
          options: [row.option1, row.option2, row.option3, row.option4],
          answer: row.answer_text,
        };
      });
      res.json(questions);
    }
  });
};

module.exports = { addQuestionToTable, getQuestions };

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Flex,
} from "@chakra-ui/react";
import "./App.css";
import { Container, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [options, setOptions] = useState([
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
  ]);
  const [answer, setAnswer] = useState("");

  const submitData = async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const data = await axios.post(
      "http://localhost:5000/questions",
      {
        question,
        options,
        answer,
      },
      config
    );
  };

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      flexDir="column"
      gap={2}
    >
      <FormControl>
        <FormLabel>Question</FormLabel>
        <Input
          type="text"
          placeholder="Write question"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Option 1</FormLabel>
        <Input
          type="text"
          placeholder="Option 1"
          onChange={(e) =>
            setOptionOne(
              e.target.value,
              setOptions([optionOne, optionTwo, optionThree, optionFour])
            )
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Option 2</FormLabel>
        <Input
          type="text"
          placeholder="Qption 2"
          onChange={(e) =>
            setOptionTwo(
              e.target.value,
              setOptions([optionOne, optionTwo, optionThree, optionFour])
            )
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Option 3</FormLabel>
        <Input
          type="text"
          placeholder="Option 3"
          onChange={(e) =>
            setOptionThree(
              e.target.value,
              setOptions([optionOne, optionTwo, optionThree, optionFour])
            )
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Option 4</FormLabel>
        <Input
          type="text"
          placeholder="Option 4"
          onChange={(e) =>
            setOptionFour(
              e.target.value,
              setOptions([optionOne, optionTwo, optionThree, optionFour])
            )
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Write Answer</FormLabel>
        <Input
          type="text"
          placeholder="Answer"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={submitData}>
        Submit
      </Button>
    </Container>
  );
}

export default App;

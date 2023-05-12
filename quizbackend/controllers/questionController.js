const express = require("express");
const database = require('../db')

const getDataFromProfile = async (req, res) => {
  database.query("SELECT * from profile", (error, result) => {
    console.log(result);
  });
};


module.exports = {getDataFromProfile}
const express = require("express");

// Request Logger Middleware
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

//  Unknown Middleware
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// Error Handler Middleware
const errorHandler = (req, res, next) => {
  const err = {
    code: 404,
    message: "Not Found",
  };
  res.status(err.code).json(err.message);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};

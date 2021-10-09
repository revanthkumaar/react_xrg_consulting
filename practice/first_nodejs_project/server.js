const express = require("express"); //importing express library
const secondserver = express(); //assigning fun to variable
const path = require("path");
secondserver.get("/calculatorHome", (req, res) => {
  console.log(" home page accessed");
  res.sendFile(path.join(__dirname, "/server.html"));
});

secondserver.listen(8000, () => {
  //creating a server which listenes;8000 is port number
  console.log("the server is active");
});

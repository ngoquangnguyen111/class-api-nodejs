const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const classRoutes = require("./routes/classRoutes");
 
const app = express();
app.use(express.json()); 
 
app.use("/api/students", studentRoutes); 
app.use("/api/classes", classRoutes); 

app.use((req, res) => { 
  res.status(404).json({ error: "API Not Found" }); 
}); 

module.exports = app; 
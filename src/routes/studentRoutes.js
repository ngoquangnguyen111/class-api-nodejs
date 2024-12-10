const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.createStudent); 
router.put("/:id", studentController.updateStudent); 
router.delete("/:id", studentController.deleteStudent); 
router.get("/", studentController.getAllStudents); 
router.get("/:id", studentController.getStudentById); 
router.get("/search/name", studentController.searchStudentsByName); 
router.get("/search/class", studentController.getStudentsByClassName); 


module.exports = router;
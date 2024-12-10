const studentModel = require("../models/students");
const classModel = require("../models/classes");
const { v4: uuidv4 } = require("uuid");

exports.createStudent = (req, res) => {
  const { name, className } = req.body;

  if (!name || !className) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (studentModel.findStudentsByName(name).length > 0) {
    return res.status(400).json({ error: "Student name already exists" });
  }

  const classData = classModel.findClassByName(className);
  if (!classData) {
    return res.status(400).json({ error: "Class not found" });
  }

  const newStudent = {
    id: uuidv4(),
    name,
    className,
  };

  studentModel.addStudent(newStudent);
  res.status(201).json(newStudent);
};

exports.getAllStudents = (req, res) => {
  res.json(studentModel.getAllStudents());
};

exports.getStudentById = (req, res) => {
  const student = studentModel.findStudentById(req.params.id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(student);
};

exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;

  const student = studentModel.findStudentById(studentId);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  studentModel.deleteStudent(studentId);
  res.json({ message: "Student deleted successfully" });
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { name, className } = req.body;

  if (!name || !className) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const student = studentModel.updateStudent(studentId, { name, className });
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
};

exports.searchStudentsByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }

  const students = studentModel.findStudentsByName(name);
  if (students.length === 0) {
    return res.status(404).json({ error: "No students found" });
  }

  res.json(students);
};
exports.getStudentsByClassName = (req, res) => {
  const { className } = req.query;

  if (!className) {
    return res.status(400).json({ error: "Class name is required" });
  }

  const students = studentModel.findStudentsByClassName(className);
  if (students.length === 0) {
    return res.status(404).json({ error: "No students found in this class" });
  }

  res.json(students);
};
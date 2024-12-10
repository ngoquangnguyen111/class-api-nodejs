const classModel = require("../models/classes");
const studentModel = require("../models/students");
const { v4: uuidv4 } = require("uuid");

exports.createClass = (req, res) => {
  const { className } = req.body;

  if (!className) {
    return res.status(400).json({ error: "Missing class name" });
  }

  if (classModel.findClassByName(className)) {
    return res.status(400).json({ error: "Class name already exists" });
  }

  const newClass = {
    id: uuidv4(),
    className,
  };

  classModel.addClass(newClass);
  res.status(201).json(newClass);
};
exports.updateClass = (req, res) => {
  const classId = req.params.id;
  const { className } = req.body;

  if (!className) {
    return res.status(400).json({ error: "Class name is required" });
  }

  const existingClass = classModel.findClassByName(className);
  if (existingClass && existingClass.id !== classId) {
    return res.status(400).json({ error: "Class name already exists" });
  }

  const updatedClass = classModel.updateClass(classId, { className });
  if (!updatedClass) {
    return res.status(404).json({ error: "Class not found" });
  }

  res.json(updatedClass);
};
exports.deleteClass = (req, res) => {
  const classId = req.params.id;
  const classData = classModel.findClassById(classId);

  if (!classData) {
    return res.status(404).json({ error: "Class not found" });
  }

  const studentsInClass = studentModel.findStudentsByClassName(
    classData.className
  );
  if (studentsInClass.length > 0) {
    return res.status(400).json({ error: "Class still has students" });
  }

  classModel.deleteClass(classId);
  res.json({ message: "Class deleted successfully" });
};

exports.getClassById = (req, res) => {
  const classId = req.params.id;
  const classData = classModel.findClassById(classId);

  if (!classData) {
    return res.status(404).json({ error: "Class not found" });
  }

  res.json(classData);
};
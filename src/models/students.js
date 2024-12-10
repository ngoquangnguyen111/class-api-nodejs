let students = [];

const addStudent = (student) => students.push(student);

const updateStudent = (id, newInfo) => {
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...newInfo };
    return students[index];
  }
  return null;
};

const deleteStudent = (id) => {
  students = students.filter((s) => s.id !== id);
};

const findStudentById = (id) => students.find((s) => s.id === id);

const findStudentsByName = (name) =>
  students.filter((s) => s.name.toLowerCase().includes(name.toLowerCase()));

const findStudentsByClassName = (className) =>
  students.filter((s) => s.className.toLowerCase() === className.toLowerCase());

const getAllStudents = () => students;

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  findStudentById,
  findStudentsByName,
  findStudentsByClassName,
  getAllStudents,
};
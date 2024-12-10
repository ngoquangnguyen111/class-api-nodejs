let classes = [];

const addClass = (newClass) => classes.push(newClass);

const updateClass = (id, newInfo) => {
  const index = classes.findIndex((c) => c.id === id);
  if (index !== -1) {
    classes[index] = { ...classes[index], ...newInfo };
    return classes[index];
  }
  return null;
};

const deleteClass = (id) => {
  classes = classes.filter((c) => c.id !== id);
};

const findClassById = (id) => classes.find((c) => c.id === id);

const findClassByName = (name) =>
  classes.find((c) => c.className.toLowerCase() === name.toLowerCase());

const getAllClasses = () => classes;

module.exports = {
  addClass,
  updateClass,
  deleteClass,
  findClassById,
  findClassByName,
  getAllClasses,
};
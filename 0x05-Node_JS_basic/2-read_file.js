// CSV file path using child_process
const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8').trim().split('\n');
  const headers = data[0].split(',');
  const studentPropNames = headers.slice(0, headers.length - 1);
  const StudentsGroupedbyfield = {};

  for (const line of data.slice(1)) {
    const student = line.split(',');
    const studentProp = student.slice(0, student.length - 1);
    const field = student[student.length - 1];
    if (!Object.keys(StudentsGroupedbyfield).includes(field)) {
      StudentsGroupedbyfield[field] = [];
    }
    const studentEntries = studentPropNames.map((val, ind) => [val, studentProp[ind]]);
    StudentsGroupedbyfield[field].push(Object.fromEntries(studentEntries));
  }

  const totalnumber = Object
    .values(StudentsGroupedbyfield)
    .reduce((prev, curr) => (prev || []).length + curr.length);
  console.log(`Number of students: ${totalnumber}`);
  for (const [field, group] of Object.entries(StudentsGroupedbyfield)) {
    const studentNameList = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNameList}`);
  }
}

module.exports = countStudents;

// CSV file path using child_process
const fs = require('fs');

const countStudents = (path) => new Promise((res, reject) => {
  if (!fs.existsSync(path)) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const effictiveData = data.toString('utf-8').trim().split('\n');
      const headers = effictiveData[0].split(',');
      const studentPropNames = headers.slice(0, headers.length - 1);
      const StudentsGroupedbyfield = {};

      for (const line of effictiveData.slice(1)) {
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
      res(true);
    }
  });
});

module.exports = countStudents;

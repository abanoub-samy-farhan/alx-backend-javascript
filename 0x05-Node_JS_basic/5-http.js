const http = require('node:http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const app = http.createServer();

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
      const returnValues = [];

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
      returnValues.push(`Number of students: ${totalnumber}`);
      for (const [field, group] of Object.entries(StudentsGroupedbyfield)) {
        const studentNameList = group.map((student) => student.firstname).join(', ');
        returnValues.push(`Number of students in ${field}: ${group.length}. List: ${studentNameList}`);
      }
      res(returnValues.join('\n'));
    }
  });
});

const SERVER_REQUESTS_LIST = [
  {
    request: '/',
    handler(req, res) {
      const responseMsg = 'Hello ALX!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseMsg.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseMsg));
    },
  },
  {
    request: '/students',
    handler(req, res) {
      const responseMsg = ['This is the list of our students'];
      countStudents(DB_FILE).then((data) => {
        responseMsg.push(data);
        const responseValue = responseMsg.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseValue.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseValue));
      }).catch((err) => {
        responseMsg.push(err instanceof Error ? err.message : err.toString());
        const responseValue = responseMsg.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseValue.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseValue));
      });
    },
  },
];

app.on('request', (req, res) => {
  for (const route of SERVER_REQUESTS_LIST) {
    if (route.request === req.url) {
      route.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});

module.exports = app;

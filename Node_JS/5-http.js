const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

const database = 'database.csv';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n')
    countStudents(database)
        .then(() => {
            return fs.promises.readFile(database, 'utf-8');
        })
        .then((data) => {
            const lines = data.split('\n').filter(line => line.trim() !== '');
            const headers = lines[0].split(',');
            const students = lines.slice(1).map(line => line.split(','));
            const totalStudents = students.length;

            res.write(`Number of students: ${totalStudents}\n`);
            const fields = {};
            for (const student of students) {
                const field = student[headers.length - 1];
                const firstName = student[0];
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstName);
            }
            for (const [field, names] of Object.entries(fields)) {
                res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`)
            }
            res.end();
        })
        .catch(() => {
            res.end('Cannot load the database');
        });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;

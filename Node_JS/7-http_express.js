const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');

  try {
    const data = await fs.promises.readFile(database, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(','));

    let responseText = 'This is the list of our students\n';
    responseText += `Number of students: ${students.length}\n`;

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
      responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(responseText.trim());
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;

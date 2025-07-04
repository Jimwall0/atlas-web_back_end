const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      const headers = lines[0].split(',');
      const fieldIndex = headers.length - 1;
      const students = lines.slice(1).map(line => line.split(','));

      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};

      for (const student of students) {
        const field = student[fieldIndex];
        const firstName = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;

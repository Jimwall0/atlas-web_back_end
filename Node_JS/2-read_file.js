const fs = require('node:fs');

const countStudent = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        console.log(`Number of students: ${data.firstname}`);
    } catch (err) {
        console.error(err);
        console.log('Cannot load the database')
    }
}
module.exports = countStudent;

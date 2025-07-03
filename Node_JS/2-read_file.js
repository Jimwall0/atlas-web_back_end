const fs = require('node:fs');

const countStudent = (path) => {
    const columnName = "firstname";
    const columnfield = "field";
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split("\n");
        const headers = lines[0].split(",");
        const colIndex = headers.indexOf(columnName);
        const colfield = headers.indexOf(columnfield);
        let SWElist = [];
        let CElist = [];
        const columnValues = lines.slice(1).map(line => {
            const values = line.split(',');
            return values[colIndex];
        });
        lines.slice(1).forEach(line => {
            const values = line.split(',');
            if (values[colfield] === 'CS'){
                CElist.push(values[colIndex]);
            }
            if (values[colfield] === 'SWE'){
                SWElist.push(values[colIndex]);
            }
        })
        console.log(`Number of students: ${columnValues.length}`);
        console.log(`Number of students in CE: ${CElist.length}. List: ${CElist.join(', ')}`)
        console.log(`Number of students in SWE: ${SWElist.length}. List: ${SWElist.join(', ')}`)
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}
module.exports = countStudent;

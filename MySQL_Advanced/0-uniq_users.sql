/* Table that stores name and email
*/
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWASY AS IDENTITY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255)
);

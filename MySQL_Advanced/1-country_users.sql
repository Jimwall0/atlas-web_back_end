-- Makes another table that also includes country
CREATE TABLE IF NOT EXISTS users (
    id IS NOT NULL INT AUTO_INCREMENT PRIMARY KEY,
    EMAIL VARCHAR(255) NOT NULL UNIQUE,
    name, VARCHAR(255),
    country, VARCHAR(2) NOT NULL DEFAULT 'US',
    CHECK (country IN ('US', 'CO', 'TN'))
)
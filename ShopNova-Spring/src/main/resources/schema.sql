
CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    brand VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(255),
    release_date DATE,
    available BOOLEAN,
    quantity INT
);
-- Create Tables for Products



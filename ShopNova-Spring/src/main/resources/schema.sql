-- Create the product table if it doesn't exist
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

-- Create the product_images table to store multiple image URLs for each product
CREATE TABLE IF NOT EXISTS product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255),
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
);

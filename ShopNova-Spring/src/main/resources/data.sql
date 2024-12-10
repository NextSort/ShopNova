
-- Insert Products Data

-- Laptops
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple MacBook Pro 16-inch', '16-inch Retina display, M1 Pro chip, 32GB RAM, 1TB SSD', 'Apple', 2499.99, 'Laptops', '2022-10-18', TRUE, 50),
    ('Dell XPS 13', '13.4-inch FHD+ display, Intel Core i7, 16GB RAM, 512GB SSD', 'Dell', 1099.99, 'Laptops', '2022-01-15', TRUE, 40);

-- Smartphones
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple iPhone 15 Pro', '6.1-inch display, A17 Bionic chip, 128GB storage', 'Apple', 999.99, 'Smartphones', '2023-09-22', TRUE, 150),
    ('Samsung Galaxy S23', '6.2-inch display, Snapdragon 8 Gen 2, 128GB storage', 'Samsung', 799.99, 'Smartphones', '2023-02-17', TRUE, 200);

-- Home Appliances
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Dyson V11 Torque Drive', 'Cordless vacuum cleaner with powerful suction', 'Dyson', 599.99, 'Home Appliances', '2021-05-10', TRUE, 70),
    ('iRobot Roomba i7+', 'Robot vacuum with smart mapping and automatic dirt disposal', 'iRobot', 799.99, 'Home Appliances', '2020-09-30', TRUE, 90);


-- Sports & Outdoors
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Adidas Performance Running Shoes', 'Comfortable running shoes for all-day wear', 'Adidas', 79.99, 'Sports & Outdoors', '2021-09-12', TRUE, 150),
    ('Coleman 4-Person Tent', 'Easy to set up 4-person camping tent', 'Coleman', 69.99, 'Sports & Outdoors', '2020-06-22', TRUE, 80);

-- Books
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('The Midnight Library', 'A book about second chances and alternate realities', 'Matt Haig', 12.99, 'Books', '2020-08-13', TRUE, 200),
    ('The Silent Patient', 'Psychological thriller about a woman who never speaks', 'Alex Michaelides', 9.99, 'Books', '2019-02-05', TRUE, 150);


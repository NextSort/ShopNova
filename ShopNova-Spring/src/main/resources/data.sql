
-- Insert Products Data

-- Laptops
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple MacBook Pro 16-inch', '16-inch Retina display, M1 Pro chip, 32GB RAM, 1TB SSD', 'Apple', 2499.99, 'Laptops', '2022-10-18', TRUE, 50),
    ('Dell XPS 13', '13.4-inch FHD+ display, Intel Core i7, 16GB RAM, 512GB SSD', 'Dell', 1099.99, 'Laptops', '2022-01-15', TRUE, 40);

-- Smartphones
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple iPhone 15 Pro', '6.1-inch display, A17 Bionic chip, 128GB storage', 'Apple', 999.99, 'Smartphones', '2023-09-22', TRUE, 150),
    ('Samsung Galaxy S23', '6.2-inch display, Snapdragon 8 Gen 2, 128GB storage', 'Samsung', 799.99, 'Smartphones', '2023-02-17', TRUE, 200);

-- Tablets
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple iPad Air', '10.9-inch display, A14 Bionic chip, 64GB storage', 'Apple', 599.99, 'Tablets', '2022-03-08', TRUE, 120),
    ('Samsung Galaxy Tab S8', '11-inch display, Snapdragon 8 Gen 1, 128GB storage', 'Samsung', 649.99, 'Tablets', '2022-02-09', TRUE, 80);

-- Headphones
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Sony WH-1000XM5', 'Wireless noise-canceling headphones, 30 hours battery life', 'Sony', 349.99, 'Headphones', '2022-06-14', TRUE, 60),
    ('Bose QuietComfort 45', 'Noise-canceling headphones with up to 24 hours of battery life', 'Bose', 329.99, 'Headphones', '2021-09-15', TRUE, 90);

-- Smartwatches
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Apple Watch Series 8', 'GPS + Cellular, 41mm, with heart rate monitor and ECG', 'Apple', 399.99, 'Smartwatches', '2022-09-16', TRUE, 200),
    ('Samsung Galaxy Watch 5', '40mm GPS, health tracking, 60+ workout modes', 'Samsung', 279.99, 'Smartwatches', '2022-08-10', TRUE, 150);

-- Cameras
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Canon EOS R6', 'Full-frame mirrorless camera with 4K video recording', 'Canon', 2499.99, 'Cameras', '2021-07-15', TRUE, 40),
    ('Sony Alpha a7 III', 'Full-frame mirrorless camera with 4K video recording and fast autofocus', 'Sony', 1998.00, 'Cameras', '2018-02-27', TRUE, 30);

-- Gaming Consoles
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('PlayStation 5', 'Next-gen gaming console with 4K support and high-speed SSD', 'Sony', 499.99, 'Gaming Consoles', '2020-11-12', TRUE, 300),
    ('Xbox Series X', 'Powerful gaming console with 4K and 120fps support', 'Microsoft', 499.99, 'Gaming Consoles', '2020-11-10', TRUE, 250);

-- Televisions
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('LG OLED C1 Series', 'OLED 4K smart TV, 120Hz refresh rate', 'LG', 1799.99, 'Televisions', '2021-03-25', TRUE, 80),
    ('Samsung QLED 4K', 'QLED smart TV with Quantum Processor 4K and HDR', 'Samsung', 999.99, 'Televisions', '2021-02-14', TRUE, 100);

-- Home Appliances
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Dyson V11 Torque Drive', 'Cordless vacuum cleaner with powerful suction', 'Dyson', 599.99, 'Home Appliances', '2021-05-10', TRUE, 70),
    ('iRobot Roomba i7+', 'Robot vacuum with smart mapping and automatic dirt disposal', 'iRobot', 799.99, 'Home Appliances', '2020-09-30', TRUE, 90);

-- Kitchen Gadgets
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Instant Pot Duo 7-in-1', 'Multi-functional pressure cooker with 7 cooking programs', 'Instant Pot', 89.99, 'Kitchen Gadgets', '2020-04-15', TRUE, 150),
    ('Ninja Professional Blender', '1000-watt professional blender with total crushing technology', 'Ninja', 99.99, 'Kitchen Gadgets', '2019-07-10', TRUE, 200);

-- Toys & Games
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('LEGO Star Wars Millennium Falcon', 'Detailed LEGO set with 1,351 pieces', 'LEGO', 159.99, 'Toys & Games', '2020-10-12', TRUE, 50),
    ('NERF N-Strike Elite', 'NERF blaster gun with 6 darts', 'NERF', 19.99, 'Toys & Games', '2019-05-20', TRUE, 300);

-- Sports & Outdoors
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Adidas Performance Running Shoes', 'Comfortable running shoes for all-day wear', 'Adidas', 79.99, 'Sports & Outdoors', '2021-09-12', TRUE, 150),
    ('Coleman 4-Person Tent', 'Easy to set up 4-person camping tent', 'Coleman', 69.99, 'Sports & Outdoors', '2020-06-22', TRUE, 80);

-- Books
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('The Midnight Library', 'A book about second chances and alternate realities', 'Matt Haig', 12.99, 'Books', '2020-08-13', TRUE, 200),
    ('The Silent Patient', 'Psychological thriller about a woman who never speaks', 'Alex Michaelides', 9.99, 'Books', '2019-02-05', TRUE, 150);

-- Furniture
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Zinus Memory Foam Mattress', 'Green Tea infused mattress for better sleep', 'Zinus', 299.99, 'Furniture', '2020-11-09', TRUE, 100),
    ('Sauder 5-Shelf Bookcase', 'Modern bookcase with open shelving and simple design', 'Sauder', 119.99, 'Furniture', '2019-05-25', TRUE, 200);

-- Beauty & Personal Care
INSERT INTO product (name, description, brand, price, category, release_date, available, quantity) VALUES
    ('Olay Regenerist Micro-Sculpting Cream', 'Anti-aging moisturizer with hyaluronic acid', 'Olay', 23.99, 'Beauty & Personal Care', '2021-01-12', TRUE, 500),
    ('Philips Sonicare Toothbrush', 'Sonic electric toothbrush with pressure sensor', 'Philips', 79.99, 'Beauty & Personal Care', '2020-06-15', TRUE, 350);


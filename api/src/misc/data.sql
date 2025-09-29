INSERT INTO users (username, password) VALUES ('root', 'math');

-- Insert categories
INSERT INTO categories (name) VALUES
('Electronics'),
('Clothing'),
('Home & Kitchen'),
('Sports & Outdoors');

-- Insert products
INSERT INTO products (name, img_url, price, category_id, user_id) VALUES
('iPhone 15 Pro', '/image/no_image.png', 1299, 1, 1),
('Samsung Galaxy S24', '/image/no_image.png', 999, 1, 1),
('MacBook Air M3', '/image/no_image.png', 1499, 1, 1),
('AirPods Pro', '/image/no_image.png', 249, 1, 1),
('Nike Air Max', '/image/no_image.png', 150, 2, 1),
('Levi''s 501 Jeans', '/image/no_image.png', 89, 2, 1),
('North Face Jacket', '/image/no_image.png', 299, 2, 1),
('Adidas Hoodie', '/image/no_image.png', 79, 2, 1),
('Dyson Vacuum', '/image/no_image.png', 499, 3, 1),
('KitchenAid Mixer', '/image/no_image.png', 379, 3, 1),
('Nespresso Machine', '/image/no_image.png', 199, 3, 1),
('Air Fryer', '/image/no_image.png', 129, 3, 1),
('Yoga Mat', '/image/no_image.png', 35, 4, 1),
('Camping Tent', '/image/no_image.png', 249, 4, 1),
('Mountain Bike', '/image/no_image.png', 899, 4, 1);

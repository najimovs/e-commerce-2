create table categories (
	id serial primary key,
	name varchar(32) not null,
	img_url varchar(255) default '/image/no_image.png'
);

create table products (
	id serial primary key,
	name varchar(255) not null,
	img_url varchar(255) default '/image/no_image.png',
	price float not null,
	c_id int references categories(id) on delete cascade on update cascade
);

-- Insert categories
INSERT INTO categories (name) VALUES
('Electronics'),
('Clothing'),
('Home & Kitchen'),
('Sports & Outdoors');

-- Insert products
INSERT INTO products (name, img_url, price, c_id) VALUES
('iPhone 15 Pro', '/image/no_image.png', 1299, 1),
('Samsung Galaxy S24', '/image/no_image.png', 999, 1),
('MacBook Air M3', '/image/no_image.png', 1499, 1),
('AirPods Pro', '/image/no_image.png', 249, 1),
('Nike Air Max', '/image/no_image.png', 150, 2),
('Levi''s 501 Jeans', '/image/no_image.png', 89, 2),
('North Face Jacket', '/image/no_image.png', 299, 2),
('Adidas Hoodie', '/image/no_image.png', 79, 2),
('Dyson Vacuum', '/image/no_image.png', 499, 3),
('KitchenAid Mixer', '/image/no_image.png', 379, 3),
('Nespresso Machine', '/image/no_image.png', 199, 3),
('Air Fryer', '/image/no_image.png', 129, 3),
('Yoga Mat', '/image/no_image.png', 35, 4),
('Camping Tent', '/image/no_image.png', 249, 4),
('Mountain Bike', '/image/no_image.png', 899, 4);


-- SELECT CATEGORIES
select
	c.name name,
	count(p.c_id) count_of_products
from products p
join categories c on c.id = p.c_id
group by c.id
;


select distinct id from products;

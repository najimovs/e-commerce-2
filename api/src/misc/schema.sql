create table users (
	id serial primary key,
	username varchar(32) not null,
	password varchar(255) not null,
	is_admin boolean default false
);

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
	created_at timestamp default current_timestamp,
	user_id int references users(id) on delete cascade on update cascade,
	category_id int references categories(id) on delete cascade on update cascade
);

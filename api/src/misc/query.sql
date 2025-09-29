-- SELECT CATEGORIES
select
	c.name name,
	count(p.c_id) count_of_products
from products p
join categories c on c.id = p.c_id
group by c.id
;


select distinct id from products;

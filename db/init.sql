create table product(
     product_id serial primary key not null,
    name varchar(40) not null,
    price integer not null,
    image_url text not null
);

insert into product (name, price, image_url) values ($1, $2, $3, $4);

select * from product
where product_id = $1;

select * from product;

update product set description = $2 where product_id = $1

delete from product where product_id = $1
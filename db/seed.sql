select * from users;
select * from lineitems;
select * from orders;
select * from products;

alter table products
add column description varchar(2000);

alter table products
drop column description;

delete from products
where productid = 3;

alter table products
add column dateAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

select * 
from products
where dateadded > (current_date - interval '1' day);

alter table orders
add column status varchar;




# Tables
* CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(200)
)
* CREATE TABLE products (
productID SERIAL PRIMARY KEY,
productName VARCHAR(150),
imageUrl VARCHAR(150),
productPrice DECIMAL,
productSize VARCHAR(180),
productType VARCHAR(180),
category VARCHAR(180),
date DATE,
color VARCHAR(180)
);
* CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    shipname VARCHAR(200),
    billingname VARCHAR(200),
    phonenumber VARCHAR(200),
    total DECIMAL,
    date DATE,
    userid INT REFERENCES users(id)
);
* create table lineitems (
    id SERIAL PRIMARY KEY,
    qty INT,
    orderid INT REFERENCES orders(id),
    productid INT REFERENCES products(productid)
);



# add product
insert into products
(productname, imageurl, productprice, productsize, producttype, category, date, color, description)
values (
'ALL I GOT PRINTED MAXI DRESS IN IVORY COMBO',
'https://cdn.shopify.com/s/files/1/0684/0407/products/160A6618.JPG?v=1499876249',
168.00,
'M',
'dress',
'dress',
'2017-09-27',
'ivory',
'Femme flowy maxi dress featuring a beautiful botanical print and an effortless tie at the waist. '
);

insert into products
(productname, imageurl, productprice, productsize, producttype, category, date, color, description)
values (
'THE MARKIE CARDIGAN IN MOCHA',
'https://cdn.shopify.com/s/files/1/0684/0407/products/052A0119_f52e7f89-dd46-4c17-9e73-72bb3fbbabd3.JPG?v=1506701369',
58.00,
'XS',
'cardigan',
'tops',
'2017-10-16',
'mocha',
'The Markie Cardigan has a classic look with timeless colors that will flatter and fit any trend that comes and goes that you choose to pair with it. This cardigan is long, light weight, layerable, and lovely. You need it, probably in every color.'
);

insert into products
(productname, imageurl, productprice, productsize, producttype, category, date, color, description)
values (
'THE MYLA LINEN BUTTON DOWN STRIPED DRESS IN HUNTER GREEN',
'https://cdn.shopify.com/s/files/1/0684/0407/products/052A6613.JPG?v=1507264988',
46.00,
'M',
'dress',
'dress',
'2017-10-16',
'hunter green',
'The season may be changing but here is a dress you will never want to change out of! The Myla Linen Button Down has subtle striped detailing with a banded collar and a partial button down. With a more fitted top and a flowy bottom that hits above the knee, this dress is perfect for changing baby bumps and changing weather.'
);

insert into products
(productname, imageurl, productprice, productsize, producttype, category, date, color, description)
values (
'PIPER & SCOOT: THE POPPY MOROCCAN MAXI DRESS',
'https://cdn.shopify.com/s/files/1/0684/0407/products/160A5784.JPG?v=1504797039',
48.00,
'S',
'dress',
'dress',
'2017-10-16',
'orange, pink, purple',
'A kaleidoscope of colors that complement the setting sun. The Poppy Moroccan Dress is a maxi dress that has a partial button down, elastic empire waist and tie detail. The slits on both sides create functional & fashionable interest to the dress. Those who see you will be blinded by your beauty.'
);



-- new users table
create table users (
    id
    emain
    auth_id
)
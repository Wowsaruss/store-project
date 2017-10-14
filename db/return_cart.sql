select *
from lineitems
join products on lineitems.productid = products.productid
where orderid = $1;
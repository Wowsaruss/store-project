select *
from lineItems
where productid = $1 and orderid = $2;
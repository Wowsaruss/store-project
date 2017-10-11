update lineItems
set qty = $1
where productid = $2;
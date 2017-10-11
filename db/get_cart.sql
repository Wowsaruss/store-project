select *
from orders
where userid = $1 and status = 'false';
select * 
from products
where dateadded > current_date - interval '5' day;
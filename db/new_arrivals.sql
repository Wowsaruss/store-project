select * 
from products
where dateadded > current_date - interval '14' day;
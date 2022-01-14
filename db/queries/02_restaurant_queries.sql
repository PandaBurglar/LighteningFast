 -- items per order --
 SELECT menu_items.item_name AS name, order_items.order_id AS order_id, order_items.quantity AS quantity from order_items
  JOIN menu_items ON order_items.menu_item_id = menu_items.id
  GROUP BY order_items.order_id, menu_items.item_name, order_items.quantity
  ORDER BY order_items.order_id;


-- update order status --
UPDATE orders
  SET status = 'cancelled'
  WHERE id = 5
RETURNING *;


-- get order by order id --
SELECT status, expected_pickup, from orders WHERE id = 5;


-- check db --
  select status, id from orders Where id = 5 AND status = 'pending';


-- get completed or cancelled orders --
SELECT orders.id AS order_id, orders.status AS order_status, users.phone_number AS phone, users.id, orders.total_price AS total_price,
orders.placed_at AS date
FROM orders
RIGHT JOIN users ON orders.user_id = users.id
WHERE status = 'completed' OR
status = 'cancelled';

-- get pending orders --
  select orders.id AS order_id, orders.status from orders
  RIGHT JOIN users ON orders.user_id = users.id
  WHERE status = 'pending'
  OR status = 'being prepared';

-- ready for pick orders --
SELECT orders.id, users.name, users.phone_number from orders
JOIN users ON orders.user_id = users.id
WHERE orders.status = 'ready for pickup';

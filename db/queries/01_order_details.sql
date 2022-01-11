-- CREATE VIEW order_summary AS
-- SELECT orders.id AS order_id,
-- 	  placed_at AS order_time,
--     status AS order_status,
--     menu_items.id AS item_id,
--     menu_items.item_name AS food_name,
--     count(order_items.quantity) AS total_food_qty,
--     users.id AS user_id,
--     users.name AS customer_name,
--     users.email,
--     users.phone_number,
--     total_cost,
-- 	  to_char(ordered_at at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') AS ordered_at
--   FROM orders
--   JOIN users ON users.id = user_id
--   JOIN order_items ON orders.id = order_id
--   JOIN menu_items ON menu_items.id = menu_items_id
--   GROUP BY orders.id, menu_items.id, users.id
--   ORDER by orders.id;

-- checkout page
SELECT order_id, quantity, total_price as total,
menu_items.item_name as item, menu_items.item_price as unit_price, menu_items.image, users.name as customer
FROM order_items
JOIN orders ON orders.id = order_id
JOIN menu_items ON menu_items.id = order_items.menu_item_id
JOIN users ON users.id = user_id;

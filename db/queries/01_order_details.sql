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
JOIN users ON users.id = 3;


--- orders per user -- 
SELECT * FROM orders
JOIN order_items ON orders.id = order_id
JOIN menu_items ON menu_items.id = orders.user_id
WHERE user_id = 3;


--- items per user -- 
 SELECT * FROM orders 
where user_id = 3;

-- add to orders table with user_id
INSERT INTO orders (user_id)
  VALUES (6)
RETURNING id;

-- add order items table with current order -- 
INSERT INTO order_items (
  menu_item_id,
  order_id, 
  quantity)
  VALUES (1, 5, 1)
RETURNING order_id;


-- get menu items -- 
SELECT *
FROM menu_items;

-- get id and the order status 
SELECT id, status, user_id
FROM orders
WHERE id = 1;


------ FIXING 3 TABLES BELOW ---
-- add total price in orders --- 
INSERT INTO orders 
  (total_price) 
  VALUES (
    SELECT sum(menu_items.item_price * order_items.quantity) as total 
    FROM order_items
    JOIN menu_items ON menu_items.id = order_items.menu_item_id
    WHERE order_items.id = 6 )  
RETURNING  id = 6;

-- update payment method, expected up and placed at in orders --- 
UPDATE orders 
  SET total_price = (
    SELECT sum(menu_items.item_price * order_items.quantity) FROM order_items
    JOIN menu_items ON menu_items.id = order_items.menu_item_id
    WHERE order_id = 6 )  
WHERE id = 6;



-- update order status -- 


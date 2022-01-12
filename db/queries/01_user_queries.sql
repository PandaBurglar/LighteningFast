
-- checkout page
SELECT order_id, quantity, total_price as total,
menu_items.item_name as item, menu_items.item_price as unit_price, menu_items.image, users.name as customer
FROM order_items
JOIN orders ON orders.id = order_id
JOIN menu_items ON menu_items.id = order_items.menu_item_id
JOIN users ON users.id = 3;

--- all order information per user -- 
SELECT * FROM orders
JOIN order_items ON orders.id = order_id
JOIN menu_items ON menu_items.id = orders.user_id
WHERE user_id = 3;


--- items per user -- 
 SELECT * FROM orders 
where user_id = 3;

-- add order items table with current order -- 
INSERT INTO order_items (
  menu_item_id,
  order_id, 
  quantity)
  VALUES (1, 6, 1)
RETURNING order_id;


-- get menu items -- 
SELECT *
FROM menu_items;

-- get id and the order status 
SELECT id, status, user_id
FROM orders
WHERE id = 6;

-- add to orders table with user_id
INSERT INTO orders (user_id)
  VALUES (6)
RETURNING id;

-- add total price in orders --- 
UPDATE orders 
  SET total_price = (
    SELECT sum(menu_items.item_price_cents * order_items.quantity) as total 
    FROM order_items
    JOIN menu_items ON menu_items.id = order_items.menu_item_id
    WHERE order_items.id = 6)
WHERE  id = 6;

-- update payment method -- 
UPDATE orders 
  SET payment_method = 'debit'
WHERE id = 6;

-- update expected pickup -- 
UPDATE orders 
  SET expected_pickup =  '2022-01-11 20:30:00'
WHERE id = 6;


-- update order status -- 
UPDATE orders 
  SET status= 'order confirmed' WHERE id = 6;

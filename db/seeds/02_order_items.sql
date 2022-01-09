-- CREATE TABLE order_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
--   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
--   quantity SMALLINT DEFAULT 0,
--   total_price SMALLINT
-- )


-- INSERT INTO orders (user_id, payment_method_id, placed_at, expected_pickup, status)
-- VALUES (1, 1, '2022-05-22 19:10:25-07', '2022-05-22 19:20:25-07', 'pending'),
-- (2, 1, '2022-06-22 19:11:25-07', '2022-06-22 20:25:25-07', 'being prepared'),
-- (3, 2, '2022-07-22 19:11:25-07', '2022-07-22 20:25:25-07', 'pending'),
-- (4, 3, '2022-08-22 19:15:25-07', '2022-08-22 20:30:25-07', 'ready for pickup'),
-- (5, 2, '2022-09-22 19:25:25-07', '2022-09-22 20:35:25-07', 'order confirmed');

INSERT INTO order_items (menu_item_id, order_id, quantity, total_price)
VALUES (1, 1, 2, 5.5),
(2, 2, 3, 8.25),
(3, 3, 1, 2.75),
(4, 4, 4, 10),
(5, 5, 10, 25);
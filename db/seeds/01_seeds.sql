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


INSERT INTO users (name, email, password, phone_number)
VALUES ('Alice McKay', 'mkkay@gmail.com', 'password', '123456789'),
('Hashim Ahmed', 'hsahmed@gmail.com', 'password', '124576789' ),
('Martin Pham', 'mpham@hotmail.com', 'password', '2893536768' ),
('Zane Bokhari', 'zbokhari@gmail.com', 'password', '6475896758' ),
('Anon myous', 'anonmyous@icloud.com', 'password', '613222457' ),
('Cassie Ken', 'ccsken@gmail.com', 'password', '8987786565' ),
('Homo Sapien', 'homosapien@gmail.com', 'password', '7768987007' ),
('Lilly Singh', 'lillypad@singh.com', 'password', '3432226457' ),
('Git Hub', 'githubiscool@myspace.com', 'password', '999767888' ),
('Apple McPhee', 'mcpheeapple@gmail.com', 'password', '4162893536' );

INSERT INTO menu_items (item_name, item_price, description, image)
VALUES ('Bluebery Danish', 2.75, 'Pastry filled with blueberry jam', '/images/Danishes-Blueberyy.jpg'),
('Cherry Danish', 2.75, 'Flaky pastry filled with cherry jam', '/images/Danishes-Cherry-Cheese.jpg'),
('Plain Croissant', 2.50, 'Flaky, buttery croissant', '/images/Croissant-Plain.jpg'),
('Custard Tart', 2.75, 'Fresh custard tart', '/images/custard.jpg'),
('Sicilian', 3.99, 'Ricotta chocolate chip filling in a fried cannoli shell, topped with candied cherries', '/images/Cannoli-Sicilian.jpg'),
('Rum Baba', 3.99, 'Soft baked pastry sponge soaked in a boiled rum mixture filled with custard and topped with candied cherries', '/images/Rum-Baba.jpg'),
('Whip Cream Eclair', 3.99, 'Baked eclair shell dipped in chocolate filled with whip cream', '/images/Lrg-Pastries-Whip-Cream-Eclair.jpg'),
('Chocolate Cupcake', 3.75, 'Chocolate or vanilla cupcake topped with chocolate buttercream.', 'images/Cupcake-Chocolate.jpg'),
('Chocolate Chip Brownies', 3.50, 'Chocolate brownie, topped with chocolate fudge and chocolate chips', '/images/Brownies-Chocolate-Chip.jpg'),
('Tiramisu', 4.49, 'Ladyfingers soaked in espresso and Khaula, layered with mascarpone filling and chocolate shavings', '/images/Other-Tiramisu-Cup.jpg');


INSERT INTO orders (user_id, placed_at, expected_pickup, status, total_price)
VALUES (1, '2022-05-22 19:10:25-07', '2022-05-22 19:20:25-07', 'pending',  5.50),
(2, '2022-06-22 19:11:25-07', '2022-06-22 20:25:25-07', 'being prepared', 8.25),
(3, '2022-07-22 19:11:25-07', '2022-07-22 20:25:25-07', 'pending', 2.75),
(4, '2022-08-22 19:15:25-07', '2022-08-22 20:30:25-07', 'ready for pickup', 11),
(5, '2022-09-22 19:25:25-07', '2022-09-22 20:35:25-07', 'order confirmed', 39.9),
(6, '2022-09-22 19:25:25-07', '2022-09-22 20:35:25-07', 'cancelled', 39.9),
(7, '2022-09-22 19:25:25-07', '2022-09-22 20:35:25-07', 'completed', 39.9);


INSERT INTO order_items (menu_item_id, order_id, quantity)
VALUES (1, 1, 2),
(2, 2, 3),
(3, 3, 1),
(4, 4, 4),
(5, 5, 10),
(6, 6, 10),
(7, 7, 10);




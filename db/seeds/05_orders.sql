

INSERT INTO orders (user_id, payment_method_id, placed_at, expected_pickup, status)
VALUES (1, 1, '2022-05-22 19:10:25-07', '2022-05-22 19:20:25-07', 'pending'),
(2, 1, '2022-06-22 19:11:25-07', '2022-06-22 20:25:25-07', 'being prepared'),
(3, 2, '2022-07-22 19:11:25-07', '2022-07-22 20:25:25-07', 'pending'),
(4, 3, '2022-08-22 19:15:25-07', '2022-08-22 20:30:25-07', 'ready for pickup'),
(5, 2, '2022-09-22 19:25:25-07', '2022-09-22 20:35:25-07', 'order confirmed');
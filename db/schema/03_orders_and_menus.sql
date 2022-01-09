-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;


CREATE TABLE menu_items(
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_price SMALLINT NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL
);


CREATE TYPE status_update as ENUM ('pending', 'order confirmed', 'ready for pickup', 'being prepared');
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  placed_at TIMESTAMP NOT NULL,
  status status_update NOT NULL, 
  expected_pickup TIMESTAMP NOT NULL,
  payment_method TEXT NOT NULL
);


CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity SMALLINT DEFAULT 0,
  total_price SMALLINT
);      
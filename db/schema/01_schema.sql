-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL
);
CREATE TABLE menu_items(
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_price_cents SMALLINT NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL
);


CREATE TYPE status_update as ENUM ('pending', 'order confirmed', 'ready for pickup', 'being prepared', 'cancelled');
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  placed_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status status_update NOT NULL DEFAULT 'pending',
  expected_pickup TIMESTAMP NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'cash',
  total_price SMALLINT
);


CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity SMALLINT DEFAULT 0
);

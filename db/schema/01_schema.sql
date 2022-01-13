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
  item_price NUMERIC NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  placed_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(30) DEFAULT 'pending',
  expected_pickup VARCHAR(30),
  payment_method TEXT DEFAULT 'cash',
  total_price SMALLINT DEFAULT 0,
  checkout BOOLEAN DEFAULT FALSE
);


CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  quantity SMALLINT DEFAULT 0
);

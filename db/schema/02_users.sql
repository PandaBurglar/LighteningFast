-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL, 
  phone_number SMALLINT NOT NULL
);
                                     
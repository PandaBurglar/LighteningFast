
DROP TABLE IF EXISTS payment_methods CASCADE;

CREATE TYPE payment as ENUM ('cash', 'debit', 'credit');
CREATE TABLE payment_methods(
  id SERIAL PRIMARY KEY NOT NULL,
  payment_type payment
);
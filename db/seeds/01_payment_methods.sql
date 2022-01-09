-- CREATE TYPE payment as ENUM ('cash', 'debit', 'credit');
-- CREATE TABLE payment_methods(
--   id SERIAL PRIMARY KEY NOT NULL,
--   payment_type payment
-- );


INSERT INTO payment_methods (payment)
VALUES 
('cash'), 
('debit'), 
('credit');
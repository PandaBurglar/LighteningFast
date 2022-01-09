-- Drop and recreate Users table (Example)

-- DROP TABLE IF EXISTS notifications CASCADE;
-- CREATE TABLE notifications (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   message VARCHAR(255) NOT NULL,
--   subject VARCHAR(255) NOT NULL 
-- );

-- Users table seeds here (Example)


-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL, 
--   password VARCHAR(255) NOT NULL, 
--   phone_number SMALLINT NOT NULL
-- );
                                     
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

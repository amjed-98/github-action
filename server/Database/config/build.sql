BEGIN;

DROP TABLE IF EXISTS books cascade;

CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  authors VARCHAR(50) NOT NULL,
  category VARCHAR(50),
  reserved VARCHAR(50) DEFAULT 'false'
);


INSERT INTO books (name, authors, category, reserved) VALUES
('A Thousand Splendid Suns', 'Khaled Hosseini', 'Novels', 'false'),
('A Brief History of Humankind', 'Yuval Noah Harari', 'History', 'true'),
('A Short History of Nearly Everything', 'Bill Bryson', 'Science', 'false');

COMMIT;
CREATE DATABASE inventory

CREATE TABLE category(
  category_id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100) NOT NULL
)

CREATE TABLE item(
  item_id SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL,
  item_url VARCHAR(300) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  category INT NOT NULL,
  FOREIGN KEY (category) REFERENCES category(category_id)
)

INSERT INTO item(description, price, stock, item_url, item_name, category)
VALUES ('Nice headphone', 250, 1000, '', 'Astro A50', 1);
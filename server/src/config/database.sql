CREATE DATABASE inventory

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE category(
  category_id uuid DEFAULT uuid_generate_v4 (),
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (category_id)
);

CREATE TABLE item(
  item_id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  category uuid UNIQUE NOT NULL,
  url VARCHAR(300) NOT NULL,
  stock INT NOT NULL,
  PRIMARY KEY (item_id),
  FOREIGN KEY (category) REFERENCES category (category_id)
);

INSERT INTO category(title, description)
VALUES ('headphone', 'Everyone has one');

INSERT INTO item(name, description, price, category, url, stock)
VALUES ('Airpods', 'Apple AirPods', 200, '8f24b8c1-69f2-41f1-ba1d-f4f84dd4dc7d', 'url', 1000);
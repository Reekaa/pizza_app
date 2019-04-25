DROP TABLE PIZZA;
DROP TABLE TOPPING;

CREATE TABLE PIZZA  (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_url VARCHAR(100),
  price    DECIMAL (5,2),
  number_of_likes INTEGER
);

CREATE TABLE TOPPING (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_url VARCHAR(100),
  price    DECIMAL (5,2)
);

INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values( 'Margherita','Margherita.png',10.50,0);
INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values ('Hawaiian','Ham_and_Pineapple.png',12.78,0);
INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values ('Pepperoni','Pepperoni.png',13.50,0);
INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values ('Salami + Peppers','Pepperoni_and_Peppers.png',11.50,0);
INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values ('Vegetarian ','Vegetarian.png',8.50,0);
INSERT INTO PIZZA (name,image_url,price,number_of_likes)  values ('Meat Feast ','Meat_Feast.png',18.50,0);


INSERT INTO TOPPING (name,image_url,price)  values ('Ham','ham-link',1.50);
INSERT INTO TOPPING (name,image_url,price)  values ('Pineapple','pineapple-link',1.50);
INSERT INTO TOPPING (name,image_url,price)  values ('Salami','salami-link',1.50);
INSERT INTO TOPPING (name,image_url,price)  values  ('Mushroom','mush-link',1.25);
INSERT INTO TOPPING (name,image_url,price)  values ('Peppers','corn-link',1.30);

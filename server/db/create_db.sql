DROP TABLE PIZZA;
DROP TABLE TOPPING;

CREATE TABLE PIZZA  (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  image_url VARCHAR(100),
  price    DECIMAL (5,2),
  number_of_likes INTEGER
);

CREATE TABLE TOPPING (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  image_url VARCHAR(100),
  price    DECIMAL (5,2)
);

INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values( 'Margherita','marg-link',10.50,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('Hawaiian','hawaiian-link',12.78,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('Pepperoni','pep-link',13.50,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('Salami + Peppers','pep-link',11.50,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('BBQ Chicken ','bbq-link',16.50,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('Vegetarian ','veg-link',8.50,0);
INSERT INTO PIZZA (description,image_url,price,number_of_likes)  values ('Meat Feast ','feast-link',18.50,0);


INSERT INTO TOPPING (description,image_url,price)  values ('Ham','ham-link',1.50);
INSERT INTO TOPPING (description,image_url,price)  values ('Pineapple','pineapple-link',1.50);
INSERT INTO TOPPING (description,image_url,price)  values ('Salami','salami-link',1.50);
INSERT INTO TOPPING (description,image_url,price)  values  ('Mushroom','mush-link',1.25);
INSERT INTO TOPPING (description,image_url,price)  values ('Peppers','corn-link',1.30);

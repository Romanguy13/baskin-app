-- Users
INSERT INTO member (username, data) VALUES ('molly_member', '{"name":"Molly Member","roles":["member"],"email":"molly@books.com","password":"$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y"}');
INSERT INTO member (username, data) VALUES ('anna_admin', '{"name":"Anna Admin","roles":["member","moderator","admin"],"email":"anna@books.com","password":"$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze"}');
INSERT INTO member (username, data) VALUES ('nobby_nobody', '{"name":"Nobby Nobody","roles":[],"email":"nobby@books.com","password":"$2a$12$ZnrvkMk9jn56NlyJGOyTE.biz5xvJUr1iKIFsWyFWPFF/x3j5fUhm"}');
INSERT INTO member (username, data) VALUES ('mia_moderator', '{"name":"Mia Moderator","roles":["member","moderator"],"email":"mia@books.com","password":"$2a$10$WlW22iG6lADY6EBgHAmhLumx1VadJXuGWIEwgAH/A07EvHBqZtDcO"}');

-- Catergories
INSERT INTO category (slug, data) VALUES ('electronics', '{"name": "Electronics"}');
INSERT INTO category (slug, data) VALUES ('clothing', '{"name": "Clothing"}');
INSERT INTO category (slug, data) VALUES ('sports-equipment', '{"name": "Sports Equipment"}');
INSERT INTO category (slug, data) VALUES ('toys', '{"name": "Toys"}');
INSERT INTO category (slug, data) VALUES ('furniture', '{"name": "Furniture"}');
INSERT INTO category (slug, data) VALUES ('instruments', '{"name": "Instruments"}');
INSERT INTO category (slug, data) VALUES ('office', '{"name": "Office"}');
INSERT INTO category (slug, data) VALUES ('free', '{"name": "Free"}');

-- Products
INSERT INTO product (id, member_username, category_slug, data) VALUES ('038b7e70-a5c0-47e6-80f3-5b1772bb4a0d', 'molly_member', 'clothing', '{"name": "Air Jordan 11", "quantity": 1,"price": 250, "description": "Never worn", "date": "2023-02-09T06:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('5c55a266-a631-4598-9bd5-52bd5ee2d9aa', 'molly_member', 'toys', '{"name": "Honda Civic Toy Car", "quantity": 1,"price": 25, "description": "Great toy car for kids, barely used", "date": "2023-01-21T15:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('2759559e-84f2-4c41-9512-932589163f4f', 'molly_member', 'toys', '{"name": "Baseballs", "quantity": 40,"price": 2, "description": "Used baseball, need to get rid off them", "date": "2022-01-21T15:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('46fd42cf-e976-48a0-9ac2-d97a96e885eb', 'molly_member', 'instruments', '{"name": "Guitar", "quantity": 1,"price": 100, "description": "Old guitar, was used by grandpa, looking for a new owner. Needs strings replaced", "date": "2022-12-05T09:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('83901659-30c8-4b44-abe3-ee110fda259e', 'mia_moderator', 'furniture', '{"name": "Fake Apples", "quantity": 100,"price": 0.50, "description": "Fake apples, first come first serve", "date": "2023-02-09T07:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('72c33826-a3c3-4d1f-8e9a-3e7887d05832', 'mia_moderator', 'clothing', '{"name": "Vintage Disney Hoodie", "quantity": 1,"price": 75, "description": "Vintage Disney Hoodie from 1980s", "date": "2023-01-39T21:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('ba70f276-85c2-4227-91cd-430d5ef36b09', 'mia_moderator', 'electronics', '{"name": "Samsung TV", "quantity": 1,"price": 400, "description": "Brand new tv, still in the box", "date": "2022-07-39T01:00:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('035f4c91-b755-4c4e-994f-1c5338960b7b', 'anna_admin', 'furniture', '{"name": "Painting of Sailboat", "quantity": 1,"price": 30, "description": "Old painting of a sailboat from the 1960s", "date": "2021-05-39T21:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('4951a289-d778-43e8-acfc-75b3b6a31ae9', 'anna_admin', 'clothing', '{"name": "Resistol Cowboy Hat", "quantity": 1,"price": 550.75, "description": "Never worn Resistol cowboy hat, comes in box, size medium", "date": "2020-07-39T11:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('19b2a9dc-b085-41d1-970a-69a2b1cbd8e1', 'anna_admin', 'electronics', '{"name": "Canon EOS R6", "quantity": 1,"price": 1000, "description": "Used but no damage, has about 20,000 shutter count", "date": "2022-01-39T02:43:08.000Z"}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('0ce2da04-d05d-46cf-8602-ae58ab7ec215', 'anna_admin', 'sports-equipment', '{"name": "Surfboard", "quantity": 4,"price": 400, "description": "Brand new custom made surf boards, different size", "date": "2022-02-09T00:15:08.000Z"}');

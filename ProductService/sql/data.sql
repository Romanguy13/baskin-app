-- category
DELETE FROM category;
INSERT INTO category (slug, data) VALUES ('electronics', '{"name": "Electronics"}');
INSERT INTO category (slug, data) VALUES ('clothing', '{"name": "Clothing"}');
INSERT INTO category (slug, data) VALUES ('sports-equipment', '{"name": "Sports Equipment"}');
INSERT INTO category (slug, data) VALUES ('toys', '{"name": "Toys"}');
INSERT INTO category (slug, data) VALUES ('furniture', '{"name": "Furniture"}');
INSERT INTO category (slug, data) VALUES ('instruments', '{"name": "Instruments"}');
INSERT INTO category (slug, data) VALUES ('office', '{"name": "Office"}');
INSERT INTO category (slug, data) VALUES ('free', '{"name": "Free"}');

-- product
DELETE FROM product;
INSERT INTO product (id, member_username, category_slug, data) VALUES ('038b7e70-a5c0-47e6-80f3-5b1772bb4a0d', 'molly_member', 'clothing', '{"name": "Air Jordan 15", "quantity": 1,"price": 250, "discount": 0, "description": "Never worn. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2023-02-09T06:43:08.000Z", "pictures": ["http://localhost:3012/acc44792-f0f3-4970-8dda-d20c0423c305.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('5c55a266-a631-4598-9bd5-52bd5ee2d9aa', 'molly_member', 'toys', '{"name": "Honda Civic Toy Car", "quantity": 1,"price": 25, "discount": 0, "description": "Great toy car for kids, barely used. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2023-01-21T15:43:08.000Z", "pictures": ["http://localhost:3012/3b0664c7-8af6-4747-9775-b92ac9ab395f.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('2759559e-84f2-4c41-9512-932589163f4f', 'molly_member', 'toys', '{"name": "Baseballs", "quantity": 40,"price": 2, "discount": 0.20, "description": "Used baseball, need to get rid off them. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2022-01-21T15:43:08.000Z", "pictures": ["http://localhost:3012/27397fe4-f681-4f8c-960d-97eaaa7f33d6.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('46fd42cf-e976-48a0-9ac2-d97a96e885eb', 'molly_member', 'instruments', '{"name": "Guitar", "quantity": 1,"price": 100, "discount": 0,  "description": "Old guitar, was used by grandpa, looking for a new owner. Needs strings replaced. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2022-12-05T09:43:08.000Z", "pictures": ["http://localhost:3012/2c286dc5-0479-44fa-adce-327495b3ca47.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('83901659-30c8-4b44-abe3-ee110fda259e', 'mia_moderator', 'furniture', '{"name": "Fake Apples", "quantity": 100,"price": 0.50, "discount": 0, "description": "Fake apples, first come first serve. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2023-02-09T07:43:08.000Z", "pictures": ["http://localhost:3012/7f34a30c-a963-440a-8659-afe68ae4ae7b.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('72c33826-a3c3-4d1f-8e9a-3e7887d05832', 'mia_moderator', 'clothing', '{"name": "Vintage Disney Hoodie", "quantity": 1,"price": 75, "discount": 0.15, "description": "Vintage Disney Hoodie from 1980s. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2023-01-21T21:43:08.000Z", "pictures": ["http://localhost:3012/583f3a92-5837-4a07-aa5f-e2bf98f40c92.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('ba70f276-85c2-4227-91cd-430d5ef36b09', 'mia_moderator', 'electronics', '{"name": "Samsung TV", "quantity": 1,"price": 400, "discount": 0, "description": "Brand new tv, still in the box. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2022-07-28T01:00:08.000Z", "pictures": ["http://localhost:3012/c8faf8e2-c855-4eba-816e-b1c20fb14754.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('035f4c91-b755-4c4e-994f-1c5338960b7b', 'anna_admin', 'furniture', '{"name": "Painting of Sailboat", "quantity": 1,"price": 30, "discount": 0, "description": "Old painting of a sailboat from the 1960s. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2021-05-19T21:43:08.000Z", "pictures": ["http://localhost:3012/336b3b2d-1cd0-4650-ae8b-ba7a96976853.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('4951a289-d778-43e8-acfc-75b3b6a31ae9', 'anna_admin', 'clothing', '{"name": "Resistol Cowboy Hat", "quantity": 1,"price": 550.75, "discount": 0, "description": "Never worn Resistol cowboy hat, comes in box, size medium. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2020-07-19T11:43:08.000Z", "pictures": ["http://localhost:3012/bd4e0f00-5494-4d27-ba4f-2b27baaf19a7.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('19b2a9dc-b085-41d1-970a-69a2b1cbd8e1', 'anna_admin', 'electronics', '{"name": "Canon EOS R6", "quantity": 1,"price": 1000, "discount": 0, "description": "Used but no damage, has about 20,000 shutter count. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2022-01-19T02:43:08.000Z", "pictures": ["http://localhost:3012/84bb26c6-1172-4fff-bc34-80cdd697b8f4.jpeg"]}');
INSERT INTO product (id, member_username, category_slug, data) VALUES ('0ce2da04-d05d-46cf-8602-ae58ab7ec215', 'anna_admin', 'sports-equipment', '{"name": "Surfboard", "quantity": 4,"price": 400, "discount": 0, "description": "Brand new custom made surf boards, different size. Ut porta, lectus nec sodales semper, leo est dictum massa, non tristique mi mauris id orci. Pellentesque volutpat dapibus ipsum lobortis convallis. Morbi vel mi non ligula euismod feugiat feugiat sit amet enim. Fusce mattis porta ante, non euismod tortor condimentum eget. Pellentesque dapibus orci cursus purus aliquet, et lobortis tellus faucibus. Nullam eu libero eget tortor euismod ullamcorper. Quisque eget nibh eros. Mauris porttitor tincidunt felis, sed aliquam eros venenatis ultricies.", "date": "2022-02-09T00:15:08.000Z", "pictures": ["http://localhost:3012/6d1dd747-8172-4dd1-88b9-093dde1ba612.jpeg"]}');

-- favorite
DELETE FROM favorite;
INSERT INTO favorite (member_username, product_id) VALUES ('molly_member', '72c33826-a3c3-4d1f-8e9a-3e7887d05832');
INSERT INTO favorite (member_username, product_id) VALUES ('molly_member', '035f4c91-b755-4c4e-994f-1c5338960b7b');
INSERT INTO favorite (member_username, product_id) VALUES ('anna_admin', '038b7e70-a5c0-47e6-80f3-5b1772bb4a0d');
INSERT INTO favorite (member_username, product_id) VALUES ('anna_admin', '5c55a266-a631-4598-9bd5-52bd5ee2d9aa');

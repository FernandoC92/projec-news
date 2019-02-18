CREATE TABLE news (
id_news int not null primary key auto_increment,
title varchar(100),
content text,
summary varchar(180),
author varchar(30),
data_create timestamp default current_timestamp,
date_post date
);
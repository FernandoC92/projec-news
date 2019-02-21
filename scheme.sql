/*step 1*/
CREATE database blog_news;

/*step 2*/
use blog_news;

/*step 3*/
CREATE TABLE news (
id_news int not null primary key auto_increment,
title varchar(30),
content text,
summary varchar(180),
author varchar(30),
data_create timestamp default current_timestamp,
date_post date
);
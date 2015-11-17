# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
address     | text      | not null
phone       | integer   | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
rating      | integer   | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | text      | not null, foreign key, indexed


## taggings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
restaurant_id | integer   | not null, foreign key (references restaurants), indexed, unique [tag_id]
tag_id        | integer   | not null, foreign key (references tags), indexed

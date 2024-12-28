---
title: NoSQL Database Support
subtitle: Connect to MongoDB or Redis, browse or filter JSON document data
icon: mongo.svg
weight: 6
---

DbGate has wide support of MongoDB database. It uses native MongoDB driver, so it is not limited to table-like views like other SQL database tools supporting MongoDB.

Also it supports the most popular key-value database, Redis.

## MongoDB

* Connect to DB - direct connection, with SSH tunnel or customized MongoDB URL (eg. when using MongoDB replica set)
* Browse collection data, table view and JSON view
* Filter and sort collection data, expand JSON structures
* Edit data filter MongoDB shell script preview
* Export and import (to different DB or JSON, CSV or MS Excel file)
* Run MongoDB queries (using nodejs MongoDB API syntax)
* Script collection (drop, find), script current table view

![Mongo](/screenshots/mongosave.png)

## Redis
* Connect to DB - direct connection, with SSH tunnel or customized Redis URL
* View keys in tree
* Execute Redis script
* Generate script from key or from namespace

![Redis](/screenshots/redis.png)

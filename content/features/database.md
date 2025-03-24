---
title: DB Connections
subtitle: Connect to multiple databases simultaneously
description: Connect to multiple databases, directly or through SSH tunnel
icon: database.svg
weight: 1
edition: 'community'
aliases:
  - /features/
---

* Connect to:
  * [MySQL](/database/mysql-client)
  * [PostgreSQL](/database/postgresql-client)
  * [Microsoft SQL Server](/database/mssql-client) (supports Windows authentication)
  * [Oracle](/database/oracle-client)
  * [MongoDB](/database/mongodb-client)
  * [SQLite](/database/sqlite-client) (quick open files with drag & drop)
  * [Amazon Redshift](/database/redshift-client) (Premium)
  * [CockroachDB](/database/cockroachdb-client)
  * [MariaDB](/database/mariadb-client)
  * [Azure CosmosDB](/database/cosmosdb-client) (Premium)
  * [ClickHouse](/database/clickhouse-client)
  * [Redis](/database/redis-client)
  * [Apache Cassandra](/database/cassandra-client)
* Support connection over SSH tunnel, for accessing production databases behind firewall
* Support SSL
* Allows work with multiple database connections simultaneously
* Every opened tab (eg. query, table data, query desinger) is marked with database, to which it belongs
![Tabs](/fragments/dbtabs.png)
* Stored password is encrypted by default
* Browse database structure
* Explore tables, views, stored procedures, functions
* Test connections before save

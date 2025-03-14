---
layout: docs
title: Backup & restore (Premium)
weight: 15
---

**This feature is not yet released**

DbGate uses native tools for backup and restore your databases. This functionality is exclusive for Premium editions.

Supported tools:

- PostgreSQL
  - `pg_dump` and `psql`
- MySQL+MariaDB
  - `mysqldump` and `mysql`

## How to install these tools
You don't have to solve this, if you use Team Premium edition - Docker, AWS or Azure versions. These packages have already bundled all tools needed.

The easiest way is to install the whole database engine to your desktop.
However, for most platforms and databases, there is posibility to install only clients:

- PostgreSQL
  - Windows - download and unpack client from https://www.enterprisedb.com/download-postgresql-binaries
  - Mac: install client with homebrew: `brew install libpq`
- MySQL:
  - Windows - download and unpack ZIP from https://dev.mysql.com/downloads/mysql/
  - Mac: brew install mysql-client
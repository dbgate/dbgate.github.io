---
layout: post
title: Version 4.2.0 - added support of SQLite, Amazon Redshift and CockroachDB
categories: development
date:   2021-05-17 17:00:00
---

Main improvement of this version is adding of SQLite support.

You can open SQLite file with drag & drop, using Open menu command or with standard connection dialog.  
SQLite driver supports or operations supported on other drivers.

Also now is officially supported Amazon Redshift and CockroachDB.

## What's new in version 4.1.10
- ADDED: Support of SQLite database
- ADDED: Support of Amazon Redshift database
- ADDED: Support of CockcroachDB
- CHANGED: DB Model is not auto-refreshed by default, refresh could be invoked from statusbar
- FIXED: Fixed race conditions on startup
- FIXED: Fixed broken style in data grid under strange circumstances
- ADDED: Configure connections with commandline arguments
- CHANGED: Optimalized algorithm of incremental DB model updates
- CHANGED: Loading queries from PostgreSQL doesn't need cursors, using streamed query instead
- ADDED: Disconnect command
- ADDED: Query executed on server has tab marker (formerly it had only "No DB" marker)
- ADDED: Horizontal scroll using shift+mouse wheel
- ADDED: Cosmetic improvements of MariaDB support

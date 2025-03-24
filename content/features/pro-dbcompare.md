---
title: Database compare
subtitle: Compare SQL database structure - tables, columns, views. Deploy changes
icon: compare.svg
edition: 'premium'
weight: 9
external_link: https://dbgate.io/features/database-model/
link_title: Visit dbgate.io
---

Database compare tool allows comparing structure of two databases. Whhich objects are compared:
- tables, columns, primary/foreign keys
- views
- stored procedures
- functions

Although the most used scenario is to compare two databases with the same engine, you could also compare databases with differnet engines, compare single-schema database agains one schema in multi schema-database or compare database model stored in YAML files against real database.

You could also deploy changes from source ta target database.

### Database compare options
- Ignore case or schema name
- Disable drop tables/columns/views. When the object is missing, you could ignore this (the safest variant) or mark object as deleted (eg. rename deleted column "Fax" to "_deleted_Fax")
- Ignore foreign key actions
- Ignore data types

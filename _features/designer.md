---
title: SQL+noSQL query builder (Premium)
subtitle: Visually design query or combine data from SQL or MongoDB databases
icon: designer.svg
layout: feature
features_left: true
# demo_url: https://demo.dbgate.org/#favorite=designer
order: 8
---

There are two tools for visually obtain data from database:
- SQL query designer
  - Runs against one SQL database
  - Generates SQL query with desighned joins
  - The result dataset is flat table
- Perspective query builder
  - Runs against one or more SQL or MongoDB databases
  - The result is hiearchic data set
  - Data from different tables/collections is joined on client-side

![Query designer](/assets/screenshots/querydesigner.png)

## SQL Query designer

- Design query on tables and views
- Join types:
  * INNER JOIN
  * LEFT JOIN
  * RIGHT JOIN
  * FULL OUTER JOIN
  * CROSS JOIN
  * WHERE EXISTS (SEMI JOIN)
  * WHERE NOT EXISTS (ANTI SEMI JOIN)
- GROUP BY, aggregate functions
- Filters
- Ordering
 
## MongoDB query builder + perspective SQL designer

- Design perspective on SQL tables, views and MongoDB collections
- Returns hiearchic structured data
- Joins are based on foreign keys in SQL databases, or on custom joins (drag & drop). Custom join is defined between any table, view or collection added to perspective
- Expand JSON columns into flat table

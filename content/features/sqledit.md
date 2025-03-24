---
title: SQL Editor and SQL Generator
subtitle: Edit SQL queries with auto-complete suggestions
icon: sql.svg
edition: 'community'
weight: 3
---

- Syntax highlighting
- Code completion
- Join wizard - add SQL joins, when you are master of SQL language, but you don't remember all of those tables, which must be joined together
![Join wizard](/fragments/joinwizard.png)

- SQL formatter
- Save to "Saved queries" tab, or save to disk
- SQL generator - script your database structure and data

## SQL generator
SQL Generator allows to create SQL scripts from database. It has following options:
* Tables
  * Create (with or without foreign keys)
  * Drop (if exists)
  * Create/Drop references foreign keys
  * Insert (options: skip autoincrement, omit NULL values, disable constraints)
  * Truncate
* Views, stored procedures, functions
  * Create
  * Drop
You can combine options from all DB objects and generate customized SQL script containing database structure and data

## AI Assistant (Premium)
Use AI service for create and modify your queries. DbGate AI internally uses OpenAI API, but it knows structure if your database, so it could generate queries with right tables and columns.

* Text to SQL - describe your query, DbGate will generate SQL query for you
* Code completion - insert snippet on cursor
* Change query - modify your query from task in natural language

You could use any language, which is supported by OpenAI (almost all languages - English, French, German, Spanish, Portuguese, Italian, Japanese, Chinese, Korean, etc.)



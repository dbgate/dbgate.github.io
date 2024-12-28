---
layout: docs
title: Archives
weight: 4
---

Archives or simply folders with data in JSONL (NDJSON) format.

# JSONL format
DbGate uses JSONL format internally everywhere. JSONL is text file, where every line contains JSON stringified row. DbGate assumes, that first line could contain header (also as JSON), with table structure. When you use JSONL with dynamic structure (without first fixed line), this format is standardized and could be loaded into many other tools. 

# Archive folders
Archive is organized into folders, with JSONL files. It has similar structure as database. You could than export whole database into new archive - every table is exported into one JSON file, thanks to header line, table structure is also persisted.

# View and edit archive files
You could open JSONL files in different modes:
- context menu "Open" - opens data grid, which allows sorting, filtering and editing your JSONL data
- context menu "Open in text editor" - allows manualy editing JSONL file

# Data duplicator
Data duplicator is feature, which allows importing related data in data archives into SQL database. It could be started from data archive context menu, choose "Data duplicator". This menu is visible only when you have selected current database. Data duplicator then shows you settings for duplicating your archive.

![screenshot](/screenshots/data-duplicator.png)

Operations supported:
- Copy row - insert new row into database from data archive. Autoincrement id is used for references to this table.,
- Lookup (find matching row) - nothing is inserted. Duplicator finds matched row (by column defined in "Marched column") and uses it in ther references.
- Insert if not exists - combination of preceding tow options. Lookup, it no row is matched, copy row

# Archives and DB models
Archive folders are also used as storage for DB models. This feature is in experimental state yet. You could export DB model in database context menu, "Export DB model - experimental". You could than edit this model (YAML files for table structure, SQL files for views and stored procedures), compare it with real database and deploy it into database
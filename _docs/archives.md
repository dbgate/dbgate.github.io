---
layout: docs
title: Archives
order: 4
docs_left: true
hide_hero: true
---

Archives or simply folders with data in JSONL format.

# JSONL format
DbGate uses JSONL format internally everywhere. JSONL is text file, where every line contains JSON stringified row. DbGate assumes, that first line contains header (also as JSON), with table structure of with __dynamicStructure marker (this is used in MongoDB, when table structure is not fixed and can differ with every row)

# Archive folders
Archive is organized into folders, with JSONL files. It has similar structure as database. You could than export whole database into new archive - every table is exported into one JSON file, thanks to header line, table structure is also persisted.

# View and edit archive files
You could open JSONL files in different modes:
- context menu "Open in text editor" - allows manualy editing JSONL file
- context menu "Open as data sheet" - open in sheet editor, allows edit data and structure, also supports simple macros. This editor is limited for "small" files (max thousands of rows), as all rows are loaded into memory
- context menu "Open (readonly)" - allows view large JSONL file (there is no size limit)

# Archives and DB models
Archive folders are also used as storage for DB models. This feature is in experimental state yet. You could export DB model in database context menu, "Export DB model - experimental". You could than edit this model (YAML files for table structure, SQL files for views and stored procedures), compare it with real database and deploy it into database
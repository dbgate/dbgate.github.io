---
layout: docs
title: Main window
order: 1
docs_left: true
hide_hero: true
---

DbGate is cross-platform (no)SQL database client.


## Main window
DbGate can have multiple database connections opened simltaneously. But it works with current database, which is indicated on status bar (17)
<img src='/assets/docs/main.png' />

1. Create new query button
2. Toolbar, buttons relative to current tab.
3. Databases widget, shows available connections and content (tables, views) of current database.
4. Files fidget, shows saved SQL files and many other files types, which could be reused
5. History widget - provides access to recently closed tabs and torecently executed queries (query history)
6. Archive widget - shows archive folders and archive files. Also saved DB models are stored in archive folders.
7. Plugins widget - allows install and uninstall third party plugins. Also there is list of installed default plugins.
8. Cell data view - shows data of current cell(s) in selected format
9. Applications - allows to customize behaviour for selected database (eg. define virtualforeign keys)
10. Connection list - shows saved connections and their database. Click to database to change current database.
11. Pinned databases/database object. You could use Pin button for many objects from 10 and 12 for quick access
12. Tables, views and functions of current database
13. Opened tabs. Grouped by database. You could change order tabs or whole database groups by drag & drop. Also there is context menu for while DB group.
14. Column list. You can hide selected columns or expand FK columns and add columns for related tables. Use <<< button to collapse left panel
15. References list. Allows to browse details for selected row(s) in master grid. 
16. Editable data grid
17. Status bar, shows current database, connection and related information. Color buttons allows to change color of database/connection.

Context 14., 15., 16. is dependend on selected tab. In this screen, the most common tab with table data is shows.

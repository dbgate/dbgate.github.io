---
title: NDJSON viewer
subtitle: Powerful viewer for NDJSON/JSON lines format
icon: ndjson.png
weight: 10
---

[NDJSON](http://ndjson.org/) and [JSON lines](https://jsonlines.org/) are formats to store stream data. In fact, NDJSON is text file, containing new-line delimited JSONs objects.

DbGate offers NDJSON/JSON lines viewer, with interesting tool set .

![NDJSON](/screenshots/ndjson.png)

## Filtering data
You can directly type filtering expression (eg. substring, which is searched in column). Or you can use menu, which helps you to create filtering expreesion, if you want to use something less obvious. Also you can filter by choosing values from underlying data set, as you now from MS Excel.

## Expanding nested objects
If your NDJSON contains nested objects (or even arrays), you could expand it into datagrid with more columns.

## Browsing nested arrays
If your NDJSON contains nested arrays, it is possible to open second data grid, which allows comfortable work with nested data.

## Export
NDJSON viewer could use full DbGate import/export capabilities, sou you could export data into Excel, CSV, JSON, or into database table or MongoDB collection.

## Try it online
If you would like to try some of this, but you don't want to install DbGate yet, you could use online demo application [demo.dbgate.org](https://demo.dbgate.org/). Just use you NDJSON file and drag & drop it on demo app.

Attention! File is uploaded do DbGate demo server, although nobody else could access this file, please don't try it witgh any sensitive data.

## Why this is part of database manager?
In fact, DbGate uses NDJSON format internally everywhere. When you browse query result, DbGate uses the same component, as NDSJON viewer. So this feature only makes aceess to viewer component in basic way, without using any database.

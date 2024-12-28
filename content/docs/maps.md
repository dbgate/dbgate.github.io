---
layout: docs
title: Maps
weight: 8
---

# Maps
DbGate supports showing geographic data in maps. 

## Supported map sources
- MySQL: All spatial columns
- MSSQL: GEOGRAPHY columns
- PostGIS: GEOGRAPHY columns
- All data sources: coordinates stored in latitude/longitude columns

## Invoking map view
Map view is invoked from data grid. At first, select cells with desired geographic data. The simplest way is to select GEOGRAPHY or GEOMETRY cell. You could also select multiple rows. Then, click to Cell data widget. You should see map in cell data widget.

![screenshot](/docs/map1.png)

When you have latitude and longitude columns stored, select all data, which you want to have in map. Columns other than latitude or longitude will be shows in marker popups.

![screenshot](/docs/map2.png)

You could alternatively use context menu "Open selection in map" in data grid on selected cells, then new tab with map will be opened.

In map context menu, there is also possibility to export map into standalone HTML file, which could be displayed anywhere, where DbGate is not installed.
---
layout: docs
title: Perspectives
order: 9
docs_left: true
hide_hero: true
---

# Perspectives
Perspective is readonly view of complex nested data. It resembles reports, but perspectives are created simply by adding data to view. You could use perspective desigher, which allows you to join data following other relations than foreign keys.

Perspectives can easily join data together, and show groups.

<img src='/assets/screenshots/perspective1.png' />

# Create perspective
Perspectives could be created from SQL tables and views (MongoDB collections are not yet supported, but this support is planned).
Use context menu of table/view, "Open perspective".

<img src='/assets/docs/perspective-create.png' />

DbGate opens simple perspective, with only one column displayed. This column is choosed by heuristic algorithm, to be the best representation of the whole row.
# Customize perspective
You could define, which columns are available in view. Also you could add referenced data to view. Use expand button for browsing references tree.

# Filtering data
Use context menu in table or in column list on the left side, "Add to filter". You could use the same filter expressions, as in other places in DbGate. Or you can use context menu cokmmand "Filter this value" on table cell.

# Filter parent rows
Assume following perspective. We have master/detail relation, Genre, with related tracks. We want to filter by Track (i tried to search "mix" text). 

<img src='/assets/docs/parentrows1.png' />

As you could see, there are lot of Genre rows without aby track matching search criteria. If you want to filter also Genre rows, use command "Filter parent rows" on table header context menu. Also you could use switch button in filter row.

<img src='/assets/docs/parentrows2.png' />

# Define custom joins
Perspectives works very well with foreign keys. But also when you have DB without foreign keys, you could use this feature. It is possible to define custom join with any condition. You could even define custom join to other database (which could be on different DB server, even with different underlying database engine).

<img src='/assets/docs/customjoin.png' />

You could also drag &amp; drop columns to create join relation.

<img src='/assets/docs/customjoin2.png' />

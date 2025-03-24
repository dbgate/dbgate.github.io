---
title: Data Editor
subtitle: Browse or edit data in your tables or views, filter by column value.
icon: table.svg
edition: 'community'
weight: 2
---

DbGate has very powerful data browser and editor. It allows you to quickly find or modify, what you need, even when using complicated relations. In most cases, using data browser is far more efficient than typing query by hand or use query designer (but you can of course use all these variants in DbGate too).

## Filtering data
You can directly type filtering expression (eg. substring, which is searched in column). Or you can use menu, which helps you to create filtering expreesion, if you want to use something less obvious.

![Tabs](/fragments/filter.png)

## Expanding foreign key columns
Sometimes, it is useful to view directly columns of referenced table. In DbGate, you can achieve this without creating query, referenced columns can be added to view in column manager. You can even filter table by referenced columns.

![Tabs](/fragments/refcolumn.png)

## Form view
Often you could come across very wide tables, with plenty of columns. When you need to see only one row, classic table view is not effective. Form view could help you to solve this situation with elegance. And a nice benefit, you could even expand foreign key columns in form view.

![Tabs](/fragments/formview.png)

## Data editor
DbGate supports also table data editing. None of changes are saved to database immediately, at first you edit table data in similar way as  in Excel, when you are finished, you will press Ctrl+S (or use command in context menu), and after confirming, changes are saved to database.

![Tabs](/fragments/savechange.png)

## Perspectives
Perspectives allow to explore complex relational data in very convenient and intuitive way. Perspective works very well with foreign keys, but when you have database without foreign keys, you could define custom joins and define relations, which you need for the perspective.

It could even combine data from different databases or database servers into one report.

## Other features
That's not all, DbGate has next amazing data view/edit features:

* Master/detail views based on foreign keys
* Foreign key lookups
* One-click group by function
* Group by master/detail view + group by year, month, day
* Free table editor - edit data in JSON lines file, without database
* Batch operations (called macros):
  * Change text case
  * Remove diacritics
  * Current data  
  * Generate UUID

## Try it online
If you would like to try some of this, but you don't want to install DbGate yet, you could use online demo application [demo.dbgate.org](https://demo.dbgate.org/#favorite=master-detail)

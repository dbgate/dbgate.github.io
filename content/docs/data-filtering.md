---
layout: docs
title: Data filtering
weight: 2
redirect: "https://docs.dbgate.io/data-filtering"
---

DbGate has powerful data filtering engine, allowing both very easy data filtering or complex conditions.

Data filters can used in many places in DbGate, but the most common place is filtering data grid.

![screenshot](/docs/filter.png)

1. Write filter here. It could be text, which is searched in given column. If it is green, filter is correctly typed.
2. If red, there is error in filter and filter is  ignored.
3. Create filter from menu here, if you don't want to write it directly. It only helps you to create filtering expression, you can then modify it manually.
4. Choose values, which are used in this table.
5. Clear all filters
6. See active filters in one place (useful for wide tables, when you don't see all columns)

## Filter expressions
Expression syntax depends on column data type

### Examples

| Column type | Filter expression |  Description |
|----------|-------------|------|
| string | canada | column value contains text "canada" |
| string | canada, usa | column value contains text "canada" or "usa" |
| string | canada lake | column value contains text "canada" and "lake" |
| number | >10 | column value is great than 10 |
| number | >=5 <=10 | column value is between 5 and 10 |
| number | 1,2,3 | column value is 1 or 2 or 3 |

### Common filters (for all data types)
- NULL - column value is null
- NOT NULL - column value is not null
- {$$ is null} - SQL condition, written is {} braces. $$ is placeholder for filtered column

### Text filters
Text compare is case insensitive.
- text - column value contains _text_. Could be in 'single quotes' or "double quotes"
- +text - column value contains _text_ (the same os line above)
- ^text - column value starts with _text_
- $text - column value ends with _text_
- !+text - column value doesn't contain _text_ (the same os line above)
- !^text - column value doesn't start with _text_
- !$text - column value doesn't end with _text_
- EMPTY - column value doesn't contain non whitespace character
- NOT EMPTY - column value contains non whitespace character

### Number filters
- number - columns value equals to number
- =number - columns value equals to number
- !=number - columns value doesn't equeal to number
- <>number - columns value doesn't equeal to number
- <number - columns value is less than number
- \>number - columns value is greater than number
- <=number - columns value is less or equal than number
- \>=number - columns value is greater or equal than number

### Datetime filters
- 2021 - year of column value
- 2021-02 - year, month of column value
- 2021-02-15 - year, month, day of column value
- 2021-02-15 23:15 - year, month, day, hour, minute of column value
- 2021-02-15 23:15:51 - year, month, day, hour, minute, second of column value
- Relative filters to current data
  - YESTERDAY
  - TODAY
  - TOMORROW
  - LAST WEEK
  - THIS WEEK
  - NEXT WEEK
  - LAST MONTH
  - THIS MONTH
  - NEXT MONTH
  - LAST YEAR
  - THIS YEAR
  - NEXT YEAR

### Logical (boolean) filters
- TRUE, true, 1 - column value is true/1
- FALSE, false, 0 - column value is false/0

### Combinarions of filters
Filter can be combined together. Space is interpreted as AND operator, comma as OR operator. AND has higher priority than OR.

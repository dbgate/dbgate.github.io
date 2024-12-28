---
layout: docs
title: Scripting
weight: 20
---

# NodeJS scripting
DbGate consists of several [NPM packages](https://www.npmjs.com/search?q=keywords%3Adbgate), which could be used in nodejs scripts

Typically you will need these packages:
* [dbgate-api](https://www.npmjs.com/package/dbgate-api) - implements utility functions
* dbgate-plugin-`engine` - set of connector plugins, implements connection to database and operations specific to given database engine
* dbgate-plugin-`fileformat` - if you use export to CSV or XML, these format providers are implemented as external plugins

[Documentation of API](/docs/apidoc)

## Generating script from DbGate
Lot of DbGate features are internally implemented with scripting interface. So when you are using some export-like operation, there is somewhere "Generate Shell script" button, which generates nodejs script for you.

If you want to use nodejs script for exporting, you could use following steps:
* Right click on table, choose "Export/Export advanced"
* Configure your export
* Choose "Generate script" at the bottom toolbar. Now you could edit the JS script and run it inside DbGate
* If you choose "Copy nodejs script" at the button toolbar, you could save this to js file and run it with [nodejs](https://nodejs.org/) installed on your computer


## Example 1 - export table to CSV
This is simple example, we are using [tableReader](https://dbgate.org/docs/apidoc.html#tableReader) from `dbgateApi` package and writer from `dbgate-plugin-csv`. Also `dbgate-plugin-mysql` is required, because we are using engine parameter `mysql@dbgate-plugin-mysql`
```js
const dbgateApi = require('dbgate-api');
const dbgatePluginMysql = require("dbgate-plugin-mysql");
const dbgatePluginCsv = require("dbgate-plugin-csv");

dbgateApi.registerPlugins(dbgatePluginMysql);

async function run() {
  const reader = await dbgateApi.tableReader({
    connection: { server: 'localhost', engine: 'mysql@dbgate-plugin-mysql', user: 'root', password: 'xxxx', database: 'Chinook' },
    pureName: 'Customer',
  });
  const writer = await dbgatePluginCsv.shellApi.writer({ fileName: 'Customer.csv' });
  await dbgateApi.copyStream(reader, writer);

  console.log('Finished job script');
}
dbgateApi.runScript(run);
```
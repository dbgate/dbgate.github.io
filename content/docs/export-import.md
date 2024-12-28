---
layout: docs
title: Export & import
weight: 2
---

DbGate has flexible export/import system based on plugins and [nodejs streams](https://nodejs.org/api/stream.html).

## Import / export modal
This window is main place when export/import jobs are defined. It can be opened from menu context menus Import/Export, with prefilled default values.


![screenshot](/docs/impexp.png)

1. Source configuration. Can be files to import (CSV, XML, JSON) or database
2. Target configuration. CHoose storage, or use buttons to fill current DB or archive
3. Choose source tables or views, you could add multiple export sources fron one database
4. Set output file names for exported tables. (or when importing into table, you can change improted table name)
5. Start import/export process
6. Generate script. Under the hood, all jobs are at first compiled into scripts and than executed. You could use this, if you want to manually edit generated script
7. Output files. Export files are generated into temporary folder, you can save exported files to your preffered location. This menu differs slightly for web version.
8. Message log of export/import process 

## Quick export
Sometimes, described window is unnecessarily complex. If you want export table/query result/anything into single file, without configuring any options, there is command "Quick export" in context menu. You choose only format and than output file. Also no intermediate folder is used, data are exported directly to output file. This option is available only for classic (electron) app, not for web app.

## Import / export scripts
All import/export jobs in DbGate are at first transpiled into scripts. Follows example of exporting SQLite table into CSV.

```js
// @require dbgate-plugin-sqlite
// @require dbgate-plugin-csv

const var1 = await dbgateApi.tableReader({
    "connection":{"engine":"sqlite@dbgate-plugin-sqlite","databaseFile":"/home/jena/test/chinook/Chinook.db"}
});
const var2 = await dbgatePluginCsv.shellApi.writer({"fileName":"Album.csv"});
await dbgateApi.copyStream(var1, var2);
```

You could also run this script without DbGate. Use context menu in script editor "Copy nodejs script". It will copy following script:

```js

const dbgateApi = require('dbgate-api');
dbgateApi.initializeApiEnvironment();
const dbgatePluginSqlite = require('dbgate-plugin-sqlite');
const dbgatePluginCsv = require('dbgate-plugin-csv');
dbgateApi.registerPlugins(dbgatePluginSqlite,dbgatePluginCsv);

require=null;
async function run() {

const var1 = await dbgateApi.tableReader({
    "connection":{"engine":"sqlite@dbgate-plugin-sqlite","databaseFile":"/home/jena/test/chinook/Chinook.db"}
});
const var2 = await dbgatePluginCsv.shellApi.writer({"fileName":"Album.csv"});
await dbgateApi.copyStream(var1, var2);


await dbgateApi.finalizer.run();
console.log('Finished job script');
}
dbgateApi.runScript(run);
```

After installing used dependencies in folder with script (all packages used in require() function):

```sh
yarn add dbgate-api
yarn add dbgate-plugin-sqlite
yarn add dbgate-plugin-csv
```

You could run this script with command:

```sh
node myExportScript.js
```
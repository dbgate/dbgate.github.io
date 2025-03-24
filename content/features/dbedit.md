---
title: Schema editor and deployer
subtitle: Edit table schema, database compare tool
description: Edit table schema with keys and indexes. Use database compare tool, deploy your DB models.
icon: dbedit.svg
edition: 'community'
weight: 9
---

## Table schema editor
Table structure editor, with SQL previews before save. Supports table recreating when neccessary.
  * Columns
  * Primary key
  * Foreign keys
  * Indexes
  * Uniques

## Database compare tool
Database compare tool is super fast, compare to other DB compare tools, as it uses already cached DB models. You can browse and filter objects by type (table, view, procedure function) and by compare status (equal, changed, added, removed). You can select objects to be synchronized into target database. Deploy script preview is shown to user and must be confirmed before applying.

## Working with database model
DB model coulde be downloaded from database into set of YAML files desccribing table structure (one YAML file for each table) and SQL files describing other database objects (table, view, procedure function). This model could be compare with real dataabse using compare tool or automatically deployed using command line.

## Example of nodejs deploy script
You need [Node.js](https://nodejs.org/) for running this script. Also you will need to install dependencies, eg. with this script.
```sh
cd DIRECTORY_WITH_DEPLOY_SCRIPT
npm install --save dbgate-api
npm install --save dbgate-plugin-postgres
```

Deploy script will look like following:
```js
const path = require('path');
const dbgateApi = require('dbgate-api');
dbgateApi.initializeApiEnvironment();
const dbgatePluginPostgres = require('dbgate-plugin-postgres');
dbgateApi.registerPlugins(dbgatePluginPostgres);

async function run() {
	await dbgateApi.deployDb({
		connection: {
			server: 'localhost',
			engine: 'postgres@dbgate-plugin-postgres',
			password: 'password',
			user: 'postgres',
			port: 5432,
			database: 'my_deployed_db',
		},
		modelFolder: path.join(__dirname, 'folder_with_db_model'),
	});
	await dbgateApi.finalizer.run();
	console.log('Finished job script');
}
dbgateApi.runScript(run);
```

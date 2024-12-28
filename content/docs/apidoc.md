---
layout: docs
title: API documentation
weight: 21
---

# API Documentation

## Functions

<dl>
<dt><a href="#copyStream">copyStream(input, output, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Copies reader to writer. Used for import, export tables and transfer data between tables</p>
</dd>
<dt><a href="#deployDb">deployDb(options)</a></dt>
<dd><p>Deploys database model stored in modelFolder (table as yamls) to database</p>
</dd>
<dt><a href="#dropAllDbObjects">dropAllDbObjects(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Drops all database objects</p>
</dd>
<dt><a href="#executeQuery">executeQuery(options)</a></dt>
<dd><p>Executes SQL query</p>
</dd>
<dt><a href="#generateDeploySql">generateDeploySql(options)</a></dt>
<dd><p>Generates query for deploying model into database</p>
</dd>
<dt><a href="#jsonLinesReader">jsonLinesReader(options)</a> ⇒ <code><a href="#readerType">Promise.&lt;readerType&gt;</a></code></dt>
<dd><p>Reader function, which reads JSNOL file or URL. JSONL format - text file, every line is JSON encoded row.</p>
</dd>
<dt><a href="#jsonLinesWriter">jsonLinesWriter(options)</a> ⇒ <code><a href="#writerType">Promise.&lt;writerType&gt;</a></code></dt>
<dd><p>Returns writer object for <a href="#copyStream">copyStream</a> function. This writer object writes data to JSONL file. JSONL format - text file, every line is JSON encoded row, used eg. by MongoDB.</p>
</dd>
<dt><a href="#jsonReader">jsonReader(options)</a> ⇒ <code><a href="#readerType">Promise.&lt;readerType&gt;</a></code></dt>
<dd><p>Creates reader object for JSON file for <a href="#copyStream">copyStream</a> function.</p>
</dd>
<dt><a href="#jsonWriter">jsonWriter(options)</a> ⇒ <code><a href="#writerType">Promise.&lt;writerType&gt;</a></code></dt>
<dd><p>Returns writer object for <a href="#copyStream">copyStream</a> function. This writer object writes data to JSON file.</p>
</dd>
<dt><a href="#queryReader">queryReader(options)</a> ⇒ <code><a href="#readerType">Promise.&lt;readerType&gt;</a></code></dt>
<dd><p>Returns reader object for <a href="#copyStream">copyStream</a> function. This reader object reads data from query.</p>
</dd>
<dt><a href="#tableReader">tableReader(options)</a> ⇒ <code><a href="#readerType">Promise.&lt;readerType&gt;</a></code></dt>
<dd><p>Creates reader object for <a href="#copyStream">copyStream</a> function. This reader object reads data from table or view.</p>
</dd>
<dt><a href="#tableWriter">tableWriter(options)</a> ⇒ <code><a href="#writerType">Promise.&lt;writerType&gt;</a></code></dt>
<dd><p>Creates writer object for <a href="#copyStream">copyStream</a> function. This writer object writes data to table. Table could be created if not exists.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#readerType">readerType</a> : <code>Object</code></dt>
<dd><p>Reader (input) object for <a href="#copyStream">copyStream</a> function</p>
</dd>
<dt><a href="#writerType">writerType</a> : <code>Object</code></dt>
<dd><p>Writer (output) object for <a href="#copyStream">copyStream</a> function</p>
</dd>
<dt><a href="#engineType">engineType</a> : <code>&#x27;mysql@dbgate-plugin-mysql&#x27;</code> | <code>&#x27;mariadb@dbgate-plugin-mysql&#x27;</code> | <code>&#x27;postgres@dbgate-plugin-postgres&#x27;</code> | <code>&#x27;sqlite@dbgate-plugin-sqlite&#x27;</code> | <code>&#x27;oracle@dbgate-plugin-oracle&#x27;</code> | <code>&#x27;cockroach@dbgate-plugin-postgres&#x27;</code> | <code>&#x27;redshift@dbgate-plugin-postgres&#x27;</code></dt>
<dd><p>Typ uživatelské role.</p>
</dd>
<dt><a href="#connectionType">connectionType</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="copyStream"></a>

## copyStream(input, output, options) ⇒ <code>Promise</code>
Copies reader to writer. Used for import, export tables and transfer data between tables

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | [<code>readerType</code>](#readerType) | reader object |
| output | [<code>writerType</code>](#writerType) | writer object |
| options | <code>object</code> | options |

<a name="deployDb"></a>

## deployDb(options)
Deploys database model stored in modelFolder (table as yamls) to database

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.systemConnection | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| options.driver | <code>object</code> | driver object. If not provided, it will be loaded from connection |
| options.analysedStructure | <code>object</code> | analysed structure of the database. If not provided, it will be loaded |
| options.modelFolder | <code>string</code> | folder with model files (YAML files for tables, SQL files for views, procedures, ...) |
| options.loadedDbModel | <code>Array.&lt;object&gt;</code> | loaded database model - collection of yaml and SQL files loaded into array |
| options.modelTransforms | <code>Array.&lt;function()&gt;</code> | array of functions for transforming model |
| options.dbdiffOptionsExtra | <code>object</code> | extra options for dbdiff |
| options.ignoreNameRegex | <code>string</code> | regex for ignoring objects by name |
| options.targetSchema | <code>string</code> | target schema for deployment |
| options.maxMissingTablesRatio | <code>number</code> | maximum ratio of missing tables in database. Safety check, if missing ratio is highe, deploy is stopped (preventing accidental drop of all tables) |

<a name="dropAllDbObjects"></a>

## dropAllDbObjects(options) ⇒ <code>Promise</code>
Drops all database objects

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.systemConnection | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| options.driver | <code>object</code> | driver object. If not provided, it will be loaded from connection |
| options.analysedStructure | <code>object</code> | analysed structure of the database. If not provided, it will be loaded |

<a name="executeQuery"></a>

## executeQuery(options)
Executes SQL query

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| [options.connection] | [<code>connectionType</code>](#connectionType) | connection object |
| [options.systemConnection] | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| [options.driver] | <code>object</code> | driver object. If not provided, it will be loaded from connection |
| [options.sql] | <code>string</code> | SQL query |
| [options.sqlFile] | <code>string</code> | SQL file |
| [options.logScriptItems] | <code>boolean</code> | whether to log script items instead of whole script |

<a name="generateDeploySql"></a>

## generateDeploySql(options)
Generates query for deploying model into database

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.systemConnection | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| options.driver | <code>object</code> | driver object. If not provided, it will be loaded from connection |
| options.analysedStructure | <code>object</code> | analysed structure of the database. If not provided, it will be loaded |
| options.modelFolder | <code>string</code> | folder with model files (YAML files for tables, SQL files for views, procedures, ...) |
| options.loadedDbModel | <code>Array.&lt;object&gt;</code> | loaded database model - collection of yaml and SQL files loaded into array |
| options.modelTransforms | <code>Array.&lt;function()&gt;</code> | array of functions for transforming model |
| options.dbdiffOptionsExtra | <code>object</code> | extra options for dbdiff |
| options.ignoreNameRegex | <code>string</code> | regex for ignoring objects by name |
| options.targetSchema | <code>string</code> | target schema for deployment |
| options.maxMissingTablesRatio | <code>number</code> | maximum ratio of missing tables in database. Safety check, if missing ratio is highe, deploy is stopped (preventing accidental drop of all tables) |

<a name="jsonLinesReader"></a>

## jsonLinesReader(options) ⇒ [<code>Promise.&lt;readerType&gt;</code>](#readerType)
Reader function, which reads JSNOL file or URL. JSONL format - text file, every line is JSON encoded row.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;readerType&gt;</code>](#readerType) - - reader object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.fileName | <code>string</code> | file name or URL |
| options.encoding | <code>string</code> | encoding of the file |
| options.limitRows | <code>number</code> | maximum number of rows to read |

<a name="jsonLinesWriter"></a>

## jsonLinesWriter(options) ⇒ [<code>Promise.&lt;writerType&gt;</code>](#writerType)
Returns writer object for [copyStream](#copyStream) function. This writer object writes data to JSONL file. JSONL format - text file, every line is JSON encoded row, used eg. by MongoDB.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;writerType&gt;</code>](#writerType) - - writer object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.fileName | <code>string</code> | file name |
| [options.encoding] | <code>string</code> | encoding of the file |
| [options.header] | <code>boolean</code> | whether to write header. Header is JSON describing source table structure. Header is specific to DbGate, if you want eg. to import data to MongoDB, you should not write header. |

<a name="jsonReader"></a>

## jsonReader(options) ⇒ [<code>Promise.&lt;readerType&gt;</code>](#readerType)
Creates reader object for JSON file for [copyStream](#copyStream) function.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;readerType&gt;</code>](#readerType) - - reader object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.fileName | <code>string</code> | file name or URL |
| options.jsonStyle | <code>string</code> | 'object' or 'array' |
| [options.keyField] | <code>string</code> | key field for object style |
| [options.rootField] | <code>string</code> | root field for object style |
| [options.encoding] | <code>string</code> | encoding of the file |
| [options.limitRows] | <code>number</code> | maximum number of rows to read |

<a name="jsonWriter"></a>

## jsonWriter(options) ⇒ [<code>Promise.&lt;writerType&gt;</code>](#writerType)
Returns writer object for [copyStream](#copyStream) function. This writer object writes data to JSON file.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;writerType&gt;</code>](#writerType) - - writer object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.fileName | <code>string</code> | file name |
| [options.jsonStyle] | <code>string</code> | 'object' or 'array' |
| [options.keyField] | <code>string</code> | key field for object style |
| [options.rootField] | <code>string</code> | root field for object style |
| [options.encoding] | <code>string</code> | encoding of the file |

<a name="queryReader"></a>

## queryReader(options) ⇒ [<code>Promise.&lt;readerType&gt;</code>](#readerType)
Returns reader object for [copyStream](#copyStream) function. This reader object reads data from query.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;readerType&gt;</code>](#readerType) - - reader object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.query | <code>string</code> | SQL query |
| [options.queryType] | <code>string</code> | query type |
| [options.sql] | <code>string</code> | SQL query. obsolete; use query instead |

<a name="tableReader"></a>

## tableReader(options) ⇒ [<code>Promise.&lt;readerType&gt;</code>](#readerType)
Creates reader object for [copyStream](#copyStream) function. This reader object reads data from table or view.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;readerType&gt;</code>](#readerType) - - reader object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.systemConnection | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| options.pureName | <code>string</code> | table name |
| options.schemaName | <code>string</code> | schema name |

<a name="tableWriter"></a>

## tableWriter(options) ⇒ [<code>Promise.&lt;writerType&gt;</code>](#writerType)
Creates writer object for [copyStream](#copyStream) function. This writer object writes data to table. Table could be created if not exists.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;writerType&gt;</code>](#writerType) - - writer object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.connection | [<code>connectionType</code>](#connectionType) | connection object |
| options.systemConnection | <code>object</code> | system connection (result of driver.connect). If not provided, new connection will be created |
| options.driver | <code>object</code> | driver object. If not provided, it will be loaded from connection |
| options.pureName | <code>string</code> | table name |
| options.schemaName | <code>string</code> | schema name |
| options.dropIfExists | <code>boolean</code> | drop table if exists |
| options.truncate | <code>boolean</code> | truncate table before insert |
| options.createIfNotExists | <code>boolean</code> | create table if not exists |
| options.commitAfterInsert | <code>boolean</code> | commit transaction after insert |

<a name="readerType"></a>

## readerType : <code>Object</code>
Reader (input) object for [copyStream](#copyStream) function

**Kind**: global typedef  
<a name="writerType"></a>

## writerType : <code>Object</code>
Writer (output) object for [copyStream](#copyStream) function

**Kind**: global typedef  
<a name="engineType"></a>

## engineType : <code>&#x27;mysql@dbgate-plugin-mysql&#x27;</code> \| <code>&#x27;mariadb@dbgate-plugin-mysql&#x27;</code> \| <code>&#x27;postgres@dbgate-plugin-postgres&#x27;</code> \| <code>&#x27;sqlite@dbgate-plugin-sqlite&#x27;</code> \| <code>&#x27;oracle@dbgate-plugin-oracle&#x27;</code> \| <code>&#x27;cockroach@dbgate-plugin-postgres&#x27;</code> \| <code>&#x27;redshift@dbgate-plugin-postgres&#x27;</code>
Typ uživatelské role.

**Kind**: global typedef  
<a name="connectionType"></a>

## connectionType : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| engine | [<code>engineType</code>](#engineType) | 
| server | <code>string</code> | 
| user | <code>string</code> | 
| password | <code>string</code> | 
| database | <code>string</code> | 
| port | <code>string</code> | 


---
layout: docs
title: Environment variables
weight: 6
---

# Environment variables
Configuration via environment variables could be used in docker containers, also when using npm package. NPM package supports .env files.
  * [dbgate-serve](https://www.npmjs.com/package/dbgate-serve) - NPM package for Community edition
  * [dbgate-serve-premium](https://www.npmjs.com/package/dbgate-serve-premium) - NPM package for Premium edition
  * [dbgate/dbgate](https://hub.docker.com/r/dbgate/dbgate) - Docker image for Community edition
  * [dbgate/dbgate-premium](https://hub.docker.com/r/dbgate/dbgate-premium) - Docker image for Premium edition

## Premium vs Community edition
Community (FOSS) edition uses only configuration from environment variables listed below. Premium edition uses database storage for settings with [administration UI](/features/administration), only few basic settings are configured with env variables.

## Premium edition configuration
These variables are available only in Premium edition.
  * STORAGE_SERVER - database server (host name) for storage database
  * STORAGE_USER - database user
  * STORAGE_PASSWORD - database password
  * STORAGE_PORT - database port (optional. of omitted, default port for selected database engine is used)
  * STORAGE_DATABASE - storage database name
  * STORAGE_ENGINE - engine used for storage database. Currectly, MySQL, PostgreSQL, SQL Server and Oracle. Use one of following values:
    * mysql@dbgate-plugin-mysql
    * postgres@dbgate-plugin-postgres
    * mssql@dbgate-plugin-mssql
    * oracle@dbgate-plugin-oracle
  * ADMIN_PASSWORD - password for administrator. Administration is available on URL https://dbgate_url/admin.html. If password is not defined and STORAGE_DATABASE is defined, DbGate asks for admin password at first.
  * DBGATE_LICENSE - license key for DbGate. Please contact sales@dbgate.eu for trial license. If not defined, DbGate Premium asks for license at first. DbGate Community doesn't require any license.

### Additional connection params of storage
  * STORAGE_SOCKET_PATH - socket path for storage connection
  * STORAGE_DATABASE_URL - database URL for storage connection
  * STORAGE_AUTH_TYPE - authentication type for storage connection. Values are the same as for AUTH_TYPE_xxx variable
  * STORAGE_USE_SSL - set value 1 or true, when SSL should be used
  * STORAGE_KEY_FILE - path to key file
  * STORAGE_KEY_FILE_PASSWORD - key file passphrase
  * STORAGE_SSL_CA_FILE - path to CA Cert file
  * STORAGE_SSL_CERT_FILE - path to certificate file
  * STORAGE_SSL_CERT_FILE_PASSWORD - certificate key file password
  * STORAGE_SSL_KEY_FILE - path to key file
  * STORAGE_SSL_KEY_FILE_PASSWORD - key file passphrase
  * STORAGE_SSL_REJECT_UNAUTHORIZED - set value 1 or true if reject unauthorized connections
  * STORAGE_SSL_TRUST_SERVER_CERTIFICATE - set value 1 or true for setting trustServerCertificate MSSQL option

The following variables are available in both Community and Premium edition. However, in Premium edition, prefered way is to use storage database and use administration UI for configuration.

## Web & permission configuration
* WEB_ROOT - if you need to run DbGate in virtual subdirectory (eg. for value /dbadmin , dbgate will be accessible on localhost:3000/dbadmin )
* LOGIN , PASSWORD - credentials for accessing web app
* PERMISSIONS - list of comma separated permissions. See also permission list below
* SHELL_CONNECTION - if true or 1, connections can be defined in shell scripts. Otherwise, only preconfigured connections are allowed. By default, this is not allowed for security reasons.
* SHELL_SCRIPTING - if true or 1, custom JavaScript shell scripts are allowed. By default, this is not allowed for security reasons.
* LOGIN_PASSWORD_[login] - password for specified login
* LOGIN_PERMISSIONS_[login] - list of comma separated permissions for given login. See also permission list below
* TOKEN_LIFETIME - lifetime of access token. After this time, logged user will be redirected to login page. Default is 1d (means 1 day). Possible are values like 3h (3 hours), 10m (10 minutes), 2d (2 days)
* SINGLE_CONNECTION - connection id. If defined, only this connection will be available (must be used with SINGLE_DATABASE)
* SINGLE_DATABASE - database name, only this database will be available. (must be used with SINGLE_CONNECTION)
* BASIC_AUTH - if true or 1 , basic authentization of both web and API is used. Otherwise, login form and JWT token base API authentization is used. Basic authentization cannot be used for OAuth authentization.

## Logging configuration
* LOG_LEVEL - all messages with this log level or bigger will be logged. One of values trace, debug, info, warn, error, fatal. Default is info
* FILE_LOG_LEVEL - log level for logging into log file. For file logging, this has bigger priority than LOG_LEVEL
* CONSOLE_LOG_LEVEL - log level for logging into log file. For console logging, this has bigger priority than LOG_LEVEL

## OAuth configuration (web version only)
* OAUTH_AUTH - authentication endpoint of OAuth protocol
* OAUTH_TOKEN - token endpoint of OAuth protocol
* OAUTH_LOGOUT - logout URL of OAuth provider. User will be redirected to this URL when he requests logging out
* OAUTH_CLIENT_ID - client ID
* OAUTH_CLIENT_SECRET - client secret
* OAUTH_LOGIN_FIELD - field name from payload, which holds login name. For availabe fields, you could inspect dbgate log, payload sent from OAuth provider are logged to console. This login name is used eg. for configuring permissions. It is not neccessary login entered in OAuth. If not specified, all users from OAuth provider will have the same login name.
* OAUTH_ALLOWED_LOGINS - comma separator login names, which will be allowed to login. If not specified, all logins will be allowed to use DbGate app.
* OAUTH_SCOPE - scope, which is sent to OAuth authorize and token endpoint
* OAUTH_GROUP_FIELD - field in payload from OAuth which denotes group
* OAUTH_ALLOWED_GROUPS - comma separated alowed group names

## Active directory/LDAP configuration (web version only)
* AD_URL - URL of LDAP provider (eg ldap://domain.com)
* AD_BASEDN - eg. dc=domain,dc=com
* AD_USERNAME - username to active directory
* AD_PASSWORD - password to acvtive directory
* AD_ALLOWED_LOGINS - comma separator login names, which will be allowed to login. If not specified, all logins will be allowed to use DbGate app.

## Oracle client configuration  
* ORACLE_INSTANT_CLIENT - path to [Oracle instant client](https://www.oracle.com/cz/database/technologies/instant-client/downloads.html)

## Connections configuration
You could configure connection list with env variables, than "Add connection: end "Edit connection" commands will be not available.

* CONNECTIONS - list of preconfigured connection names, comma delimited. In following options, [connection id] is ID from this list
* LABEL_[connection id] - label (display name) of connection. 
* SERVER_[connection id] - server (host name) of connection.
* USER_[connection id] - user name for DB connection.
* PASSWORD_[connection id] - password for DB connection.
* PASSWORD_MODE_[connection id] - determines whether password and user name is stored or must be filled in by used. One of following values:
  * askPassword - DbGate asks for password when connecting
  * askUser - DbGate asks for username and password
* PORT_[connection id] - port for DB connection.
* FILE_[connection id] - database file path (for SQLite).
* URL_[connection id] - database URL (works for MongoDB, PostgreSQL, CockroachDb, Redshift, Oracle).
* SERVICE_NAME_[connection id] - Oracle service name.
* DATABASE_[connection id] - default database name.
* READONLY_[connection id] - connect in readonly mode
* ENGINE_[connection id] - engine of connection (**mandatory**, name of engine with plugin), one of:
  * mssql@dbgate-plugin-mssql - Microsoft SQL Server
  * mysql@dbgate-plugin-mysql - MySQL
  * mariadb@dbgate-plugin-mysql - MariaDB
  * postgres@dbgate-plugin-postgres - PostgreSQL
  * cockroach@dbgate-plugin-postgres - CockroachDB
  * redshift@dbgate-plugin-postgres - Amazon Redshift
  * sqlite@dbgate-plugin-sqlite - SQLite
  * mongo@dbgate-plugin-mongo - MongoDB
  * redis@dbgate-plugin-redis - Redis
* USE_SSH_[connection id] - set value 1 or true, when SSH tunnel should be used
* SSH_HOST_[connection id] - SSH host name
* SSH_PORT_[connection id] - SSH port number
* SSH_MODE_[connection id] - one of following values
  * userPassword - authenticate with user and password
  * agent - authenticate with SSH agent
  * keyFile - authenticate with key file
* SSH_LOGIN_[connection id] - SSH login
* SSH_PASSWORD_[connection id] - SSH password
* SSH_KEY_FILE_[connection id] - full path to key file
* SSH_KEY_FILE_PASSWORD_[connection id] - key file passphrase
* USE_SSL_[connection id] - set value 1 or true, when SSL should be used
* SSL_CA_FILE_[connection id] - path to CA Cert file
* SSL_CERT_FILE_[connection id] - path to certificate file
* SSL_CERT_FILE_PASSWORD_[connection id] - certificate key file password
* SSL_KEY_FILE_[connection id] - path to key file
* SSL_REJECT_UNAUTHORIZED_[connection id] - set value 1 or true if reject unauthorized connections
* SSL_TRUST_CERTIFICATE_[connection id] - set value 1 or true for setting trustServerCertificate MSSQL option
* SETTINGS_[settings key] - preconfigure settings value. Setting key could be listed from source codes, https://github.com/dbgate/dbgate/blob/master/packages/web/src/settings/
* SOCKET_PATH_[connection id] - path to socket file, if connecting via socket
* AUTH_TYPE_[connection id] - authentization type
  * hostPort (default)
  * socket - value is set implicitly, when settings SOCKET_PATH
  * tedious - default portable authentization for MS SQL, using tedious driver
  * sspi - Windows integrated authentization (Windows only, MS SQL), using native MSSQL driver
  * sql - SQL authentization (Windows only, MS SQL), using native MSSQL driver
* ALLOWED_DATABASES_[connection id] - allowed database names for specified connnection, pipe ("|") delimited
* ALLOWED_DATABASES_REGEX_[connection id] - regular expression for allowed database names for specified connnection
* USE_SEPARATE_SCHEMAS_[connection id] - set value 1 or true for load schemas separately. Use this if you have large schemas.
* LOCAL_DATA_CENTER_[connection id] - local data center (for Apache Cassandra)


SettingsModal.svelte , find string "name="/ If you need to define "true", use value "1". If you need "false", use empty string ("0" will not work)

## Permissions
By default, all permissions are available. If you use \~ prefix, permission is revoked.

### Examples
* ~*, widgets/database - all permissions are revoked, only database widget is visible
* ~widgets/*, widgets/database - all widget permissions are revoked, only database widget is visible
* ~connections/*, connections/con1 - all connections except from con1 are hidden and disabled

### Permission list
* settings/change - allows change settings
* plugins/install - allows install plugins
* widgets/[widget_name] - if not granted, widget is hidden. Widget is strip on left side. Available widgets:
  * database
  * file
  * history
  * archive
  * plugins
  * cell-data
  * app
* files/[folder]/read - read files from given folder
* files/[folder]/write - write files to given folder
* apps/write - save to apps content
* archive/write - save to archive content
* connections/[connection_id] - allow to see and use defined connection
* internal-storage = access to internal storage (Premium)
* admin/auth - Administration - Authentication tab (Premium)
* admin/connections - Administration - Connections tab (Premium)
* admin/users - Administration - Users tab (Premium)
* admin/roles - Administration - Roles tab (Premium)
* dbops/sql-template/* - SQL templates (eg. SQL: CREATE TABLE, SQL: SELECT)
* dbops/sql-generator - SQL generator
* dbops/sql-dump/import - Import SQL dump
* dbops/sql-dump/export - Export SQL dump
* dbops/query - Run SQL query
* dbops/import - Import data
* dbops/export - Export data
* dbops/charts - View charts
* dbops/profiler - Database profiler
* dbops/createdb - Create database
* dbops/dropdb - Drop database
* dbops/model/view - View database model (diagrams, JSON)
* dbops/model/edit - Edit database model (create/change tables, views, etc.)
* dbops/model/compare - Compare database models
* dbops/table/rename - Rename table
* dbops/table/truncate - Truncate table
* dbops/table/backup - Create table backup


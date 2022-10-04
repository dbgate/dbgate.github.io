---
layout: docs
title: Environment variables
order: 6
docs_left: true
hide_hero: true
---

# Environment variables
Configuration via environment variables could be used in docker containers, also when using [npm package dbgate-serve](https://www.npmjs.com/package/dbgate-serve). NPM package supports .env files.

## Web & permission configuration
* WEB_ROOT - if you need to run DbGate in virtual subdirectory (eg. for value /dbadmin , dbgate will be accessible on localhost:3000/dbadmin )
* LOGIN , PASSWORD - credentials for accessing web app (obsolete, use LOGINS AND LOGIN_PASSWORD instead)
* PERMISSIONS - list of comma separated permissions. See also permission list below
* SHELL_CONNECTION - if true or 1, connections can be defined in shell scripts. Otherwise, only preconfigured connections are allowed. By default, this is not allowed for security reasons.
* SHELL_SCRIPTING - if true or 1, custom JavaScript shell scripts are allowed. By default, this is not allowed for security reasons.
* LOGINS - comma delimited list of aditional logins
* LOGIN_PASSWORD_[login] - password for specified login
* LOGIN_PERMISSIONS_[login] - list of comma separated permissions for given login. See also permission list below

## Connections configuration
You could configure connection list with env variables, than "Add connection: end "Edit connection" commands will be not available.

* CONNECTIONS - list of preconfigured connection names, comma delimited. In following options, [connection id] is ID from this list
* LABEL_[connection id] - label (display name) of connection. 
* SERVER_[connection id] - server (host name) of connection.
* USER_[connection id] - user name for DB connection.
* PASSWORD_[connection id] - password for DB connection.
* PORT_[connection id] - port for DB connection.
* FILE_[connection id] - database file path (for SQLite).
* URL_[connection id] - database URL (works for MongoDB, PostgreSQL, CockroachDb, Redshift).
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
* SETTINGS_[settings key] - preconfigure settings value. Setting key could be listed from source codes, https://github.com/dbgate/dbgate/blob/master/packages/web/src/settings/
* SOCKET_PATH_[connection id] - path to socket file, if connecting via socket
* AUTH_TYPE_[connection id] - authentization type
  * hostPort (default)
  * socket - value is set implicitly, when settings SOCKET_PATH
  * tedious - default portable authentization for MS SQL, using tedious driver
  * sspi - Windows integrated authentization (Windows only, MS SQL), using native MSSQL driver
  * sql - SQL authentization (Windows only, MS SQL), using native MSSQL driver

SettingsModal.svelte , find string "name="/ If you need to define "true", use value "1". If you need "false", use empty string ("0" will not work)

## Permissions
By deault, all permissions are available. If you use \~ prefix, permission is revoked.

### Examples
* ~*, widgets/database - all permissions are revoked, only database widget is visible
* ~widgets/*, widgets/database - all widget permissions are revoked, only database widget is visible
* ~/connections/*, connections/con1 - all connections except from con1 are hidden and disabled

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

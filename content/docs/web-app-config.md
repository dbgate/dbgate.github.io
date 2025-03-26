---
layout: docs
title: Web app config samples
weight: 10
redirect: "https://docs.dbgate.io/web-app-config"
---

There are lot of configuration layouts, which could be achieved with environment variables configuration.
In this topic, sample configurations web app will be shown.

## Use storage database and administration for settings (Premium)

This configuration layout uses administration for configure database connections and users. All settings are stored into database configured with env variables. Please use [Premium](https://hub.docker.com/r/dbgate/dbgate-premium) docker container for this to work.
```
STORAGE_SERVER: mariadb
STORAGE_USER: root
STORAGE_PASSWORD: <Your password into database>
STORAGE_PORT: 3306
STORAGE_DATABASE: dbgate
STORAGE_ENGINE: mysql@dbgate-plugin-mysql
ADMIN_PASSWORD: <Admin password>
```

![screenshot](/screenshots/authadmin.png)

## More database connections, public access (Community/Premium)
This configuration is used in [DbGate demo app](https://demo.dbgate.org)
```
CONNECTIONS=mysql,postgres

LABEL_mysql=MySql localhost
SERVER_mysql=localhost
USER_mysql=root
PASSWORD_mysql=test
PORT_mysql=3306
ENGINE_mysql=mysql@dbgate-plugin-mysql

LABEL_postgres=Postgres localhost
SERVER_postgres=localhost
USER_postgres=postgres
PASSWORD_postgres=test
PORT_postgres=5432
ENGINE_postgres=postgres@dbgate-plugin-postgres
```

![screenshot](/screenshots/multi-db.png)

## Single server connection (multiple databases), authorize against DB server (Community/Premium)

```
CONNECTIONS=mysql
SINGLE_CONNECTION=mysql
LABEL_mysql=MySql localhost
SERVER_mysql=localhost
PORT_mysql=3306
ENGINE_mysql=mysql@dbgate-plugin-mysql
PASSWORD_MODE_mysql=askUser
```

![screenshot](/screenshots/db-login.png)

## Connection to single MS SQL database in readonly mode, authorize against Active Directory (Community/Premium)

```
AD_URL=ldap://company.com
AD_BASEDN=dc=company,dc=com
AD_USERNAME=company\\ldap-user
AD_PASSWORD=xxxx

CONNECTIONS=mssql

SINGLE_CONNECTION=mssql
SINGLE_DATABASE=Chinook

LABEL_mssql=MsSql localhost
SERVER_mssql=localhost
USER_mssql=sa
PASSWORD_mssql=xxxx
READONLY_mssql=1

```

![screenshot](/screenshots/single-db.png)

## Connection to MySQL server, authorize against OAuth Keycloak server (Community/Premium)

```
CONNECTIONS=mysql
SINGLE_CONNECTION=mysql
LABEL_mysql=MySql localhost
SERVER_mysql=localhost
PORT_mysql=3306
ENGINE_mysql=mysql@dbgate-plugin-mysql
USER_mysql=root
PASSWORD_mysql=test

OAUTH_AUTH=https://keycloak.company.com/realms/dbgate/protocol/openid-connect/auth
OAUTH_TOKEN=https://keycloak.company.com/realms/dbgate/protocol/openid-connect/token
OAUTH_LOGOUT=https://keycloak.company.com/realms/dbgate/protocol/openid-connect/logout
OAUTH_CLIENT_ID=dbgate
OAUTH_CLIENT_SECRET=xxxx
OAUTH_LOGIN_FIELD=given_name
OAUTH_SCOPE=email

```

You have also to configure valid redirect URI parameters on Oauth provider (eg. Keycloak). It should be base address, on which DbGate is running, with trailing slash (eg. "https://dbgate.test.com/")

![screenshot](/screenshots/multi-db.png)

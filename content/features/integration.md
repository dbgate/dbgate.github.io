---
title: Web app configuration, authorization
subtitle: Authorize web app using OAuth or with Active directory
description: Web app authorization using OAuth or with LDAP/Active directory
icon: authentication.svg
edition: 'community'
weight: 12
---

If you operate DbGate as web service for accessing your databases, you have several posibilities, how to configure authorization:
- With public access without authorization (the same way as demo opp https://demo.dbgate.org/ is configured)
- Authorization with user names and password defined in environment variables
- Authorization against Active Directory service
- Authorization against OAuth2 provider (eg. Google, Facebook, Keycloak, ADFS)
- Authorization with database credentials against database server
- Microsoft Entra authorization for Azure SQL (Premium edition only)

Also you have some options, how to configure web access:
- With predefined database connections in environment variables
  - By default, multiple connection layout is used. But you could use single-server or single-database layout, when you want to provider access to only one server/database. Than the app will not contains list of connections, or list of databases
- Web app could be also configured so that user creates custom connections, but this will be probably used only when running web app on localhost

Please use docs for further information:
  - [Web app configuration samples](https://docs.dbgate.io/web-app-config)
  - [Environment variables description](https://docs.dbgate.io/env-variables)
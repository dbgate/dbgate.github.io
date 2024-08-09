---
layout: docs
title: Adminstration (Premium)
order: 11
docs_left: true
hide_hero: true
---

# Administration
Administration tool is available only on Premium edition.

Administration page is available on URL https://your_dbgate_instance/?page=admin . You have to set environment variable ADMIN_PASSWORD to enable this administration.
All configuration from administration is saved into database, use [STORAGE_xxx environment  variables](/docs/env-variables.html) for configure this.

## Authentication tab
<img src='/assets/screenshots/authadmin.png' />

There are several methods of authentication. Use will choose authentication method on login page. If you have only one authentication method enabled and authentication method doesn't require login page, login page is skipped.

- Local authentication method - user is selected from user list in storage database (configured in "Users" tab)
- Anonymous - no credentials are required, user have permissions from "anonymous-user" role
- Use database login - credentials are redirected to database server. User will choose connection from "Connections" tab
- OAuth 2.0 - generic OAuth provider. With some little effort and proper knowledge, could be configured with most of recent identity providers, like Google, Facebook, Keycloak
- Active Directory - AD access via LDAP protocol
- Microsoft Entra - former Azure Active Directory - single sign-on access to Azure databases

## Connections tab
Configure connections available in DbGate. Connections must be mapped to users and roles to be available.

## Users tab
Configure users, passwords, user permissions and user-connection mapping.

## Roles tab
Configure roles, role permissions and role-connection mapping.

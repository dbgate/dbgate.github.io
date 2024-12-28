---
title: Administration (Premium)
subtitle: Administer authentization, users, roles, connections
description: Administration of authentization, users, roles, connections
icon: admin.svg
weight: 13
---

Premium edition uses database storage for storing information about connections, users, roles and configuration.

Predefined roles:
  - superadmin
  - logged user
  - anonymous user

You could create connections and assign them to roles and users.

There is a hiearchic permission system, permissions for user are inherited from roles.

You could also configure several authentication methods:
  - None - web app is available without authentication
  - Local - web app is authorized against the users in user administration
  - Active Directory - web app is authorized against AD / LDAP, optionally logged user must be defined in user administration
  - OAuth 2.0 - web app is authorized with OAuth 2.0 protocol (eg. Google, Facebook, Keycloak), optionally logged user and (or) group must be defined in user (role) administration  
  - Database login - user selects DB server at first and then authentication against DB server is performed (with user/password or Microsoft Entra Azure auth)
  - Microsoft Entra (former Azure Active Directory) - usable for Azure SQL databases

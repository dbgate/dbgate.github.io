---
layout: post
title:  DbGate is released on NPM repository + added SSH tunnelling
date:   2021-02-15 20:00:00
categories: development
# image: /screenshots/connection.png
---

DbGate is now available as [NPM package](https://www.npmjs.com/package/dbgate) . You can install it directly as NPM package. This is way, how to run **WEB** version of DbGate, when you have no Docker available.

Other useful NPM package is [dbgate-api](https://www.npmjs.com/package/dbgate-api), which can be used for running scripts exported from DbGate, eg. exporting table data to CSV or Excel.

## SSH tunnel
Other big improvement of DbGate is SSH tunneling feature. It allows connecting to database eg. on production server, which is not exposed to public internet.

## Connection dialog redesign
Connection dialog is now a bit more user friendly and much more better looking.

## SQL Editor context menu
SQL editor now contains context menu. Some functions where hardly accessible before this small improvement (eg. INSERT SQL JOIN wizard).

## Bugfixes
There were some bugfixes, must important is fixed exports & imports in Linux Snap distribution (and possibly on some nonstandard environments)

See [changelog](https://github.com/dbgate/dbgate/blob/master/CHANGELOG.md) for full list of changes

![screenshot](/screenshots/joinwizard.png)

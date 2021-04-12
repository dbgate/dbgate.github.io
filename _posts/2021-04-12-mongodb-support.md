---
layout: post
title: MongoDB support, released version 4.1.0
categories: development
date:   2021-04-12 17:00:00
---

We are proud to announce new version 4.1.0 with first NoSQL DB supported, MongoDB. Though DbGate was primarily designed to work with fixed schema databases, the architecture was designed with document databases in the mind.

## MongoDB support
Almost all operations, which are possible in DbGate with SQL databases, are implemented also with MongoDB:

* Connect to DB - direct connection, with SSH tunnel or customized mongo URL (eg. when using mongo replica set)
* Browse collection data, table view and JSON view
* Filter and sort collection data, expand JSON structures
* Edit data filter mongo shell script preview
* Export and import (to different DB or JSON, CSV or MS Excel file)
* Run mongo queries (using nodejs mogno API syntax)
* Script collection (drop, find), script current table view

![screenshot](/assets/screenshots/mongosave.png)


## Other improvements
* Configurable keyboard shortcuts
* JSON row cell data view (suitable mostly for Mongo, but usable for any DB)
* Fixed some problems from previous release

![screenshot](/assets/screenshots/keyboard.png)

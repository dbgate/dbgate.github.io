---
layout: post
title: DbGate published at Hacker News + released version 4.1.10
categories: development
date:   2021-04-26 16:00:00
---

On thursday 23, DbGate was published on [Hacker News](https://news.ycombinator.com/item?id=26899100). This action brought lot of great feedback. Today, 2021-04-26, was released version 4.1.10, with many fixed problems reported by HN community.

The most repeated feature request was supporting SQLite database, so this would be main feature of next release.

<!--more--> 

## What's new in version 4.1.10
- ADDED: Default database option in connectin settings (allows connecting to aws redshift)
- FIX: Popup menu placement on smaller displays
- ADDED: Browse table data with SQL Server 2008
- FIX: Prevented malicious origins / DNS rebinding
- ADDED: Handle JSON fields in data editor (eg. jsonb field in Postgres)
- FIX: Fixed crash on Windows with Hyper-V
- ADDED: Show database server version in status bar
- ADDED: Show detailed info about error, when connect to database fails
- FIX: Bundle size optimalization for Windows
- ADDED: Portable ZIP distribution for Windows

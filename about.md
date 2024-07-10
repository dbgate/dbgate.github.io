---
title: About
subtitle: About DbGate and author
layout: page
permalink: /about/
---

I started to develop DbGate at the end of 2019. Main reason was, that I switched from Windows to Linux, where it was quite hard to find any usable database tool.

# DbGate goals

- Free and opensource
- Simple, but powerful. One toolbar, no milions of icons without description. Heavy use of context menu
- Runs everywhere - Windows, Linux, Mac, web browser, maybe also mobile web in future
- Stable and robust. Critical error in one database driver must not influence stability of the app
- Prepared for big databases - never load full table or query result into memory, use streams everywhere
- Scriptable, using dbgate [nodejs packages](https://www.npmjs.com/package/dbgate-api)

# About author

My name is [Jan Prochazka](https://github.com/janproch/), I live in Czech Republic. I was specialized to realtime computation software, which used heavy Miccrosoft SQL Server. Now I work mainly with JavaScript and modern techology stack around it. I am also creating music software for pianists, [PianoHub](https://pianohub.cloud).

# Motivation
I started to create database manager tools in 2010. All my tools developed in past were under commercial license.

My first DB admin tool was [DatAdmin](http://www.jenasoft.com/datadmin).

The second generation was [DbMouse](http://www.jenasoft.com/dbmouse), which was designed only to work only with MS SQL Server. It comes with idea of open-source db engine (called DbShell) implementing low-level operations on DB, on the DbShell gear was built GUI under classical commercial license. It was also rebranded as [SQL database studio](https://sqldatabasestudio.com/), it had slighly better sales performance than DbMouse, but it was not enough.

# DbGate Premium
Primary reason, why I started to develop DbGate, is to survive my know-how about database tools, and substantialize into modern, usable and open-source database tool.
As DbGate growed into mature product, there were some users requesting commercial support and enterprise features. I joined with [Sprinx systems](https://sprinx.com/) company, so that we could offer professional [DbGate Premium](https://dbgate.eu) product on top on opensource DbGate.

# Wrote about us

DbGate was published on [Hacker News](https://news.ycombinator.com/item?id=26899100). You can read large discussion about DbGate and other SQL clients.

You can see, what wrote about DbGate [Softpedia](https://www.softpedia.com/get/Internet/Servers/Database-Utils/DbGate.shtml) software catalog portal

# DbGate technology stack

- DbGate frontend is built with excellent [Svelte](https://svelte.dev) framework. Formerly is was build with React
- Backend uses [node.js](https://nodejs.org/)
- Application uses [electron](https://www.electronjs.org/)
- Web version is distributed as [docker container](https://hub.docker.com/repository/docker/dbgate/dbgate)

# Feedback

Any feedback is welcome, please create issue on [GitHub](https://github.com/dbgate/dbgate/issues/new/choose)

{% include sponsor.html %}

---
title: About
subtitle: About DbGate and author
layout: page
permalink: /about/
---

I started to develop DbGate at the end of 2019. Main reason was, that I switched from Windows to Linux, where it was quite hard to find any usable database tool.

# DbGate goals

- Complete free and open source, no paid enterprise editions
- Simple, but powerful. One toolbar, no milions of icons without description. Heavy use of context menu
- Should runs everywhere - Windows, Linux, Mac, web browser, maybe also mobile web in future
- Stable and robust. Critical error in one database driver must not influence stability of the app
- Prepared for big databases - never load full table or query result into memory, use streams everywhere
- Scriptable, using dbgate [nodejs packages](https://www.npmjs.com/package/dbgate-api)

# About author

My name is [Jan Prochazka](https://github.com/janproch/), I live in Czech Republic. I was specialized to realtime computation software, which used heavy Miccrosoft SQL Server. Now I work mainly with JavaScript and modern techology stack around it.

# Wrote about us

DbGate was published on [Hacker News](https://news.ycombinator.com/item?id=26899100). You can read large discussion about DbGate and other SQL clients.

You can see, what wrote about DbGate [Softpedia](https://www.softpedia.com/get/Internet/Servers/Database-Utils/DbGate.shtml) software catalog portal

# DbGate technology stack

- DbGate frontend is built with excellent [Svelte](https://svelte.dev) framework. Formerly is was build with React
- Backend uses [node.js](https://nodejs.org/)
- Application uses [electron](https://www.electronjs.org/)
- Web version is distributed as [docker container](https://hub.docker.com/repository/docker/dbgate/dbgate)

# Sources of inspiration

I am playing with creating database management tools quite a long time. This software inspired me at most:

- Visual Studio Code - great IDE, simple but powerful
- DatAdmin, DbMouse - DB management tools, which I created in past
- Beekeeper Studio - simple but nice SQL client written in nodejs/electron
- Navicat - and its color scheme in table data browser, which I am using over 10 years

# Feedback

Any feedback is welcome, please create issue on [GitHub](https://github.com/dbgate/dbgate/issues/new/choose)

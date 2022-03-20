---
layout: docs
title: Plugin development
order: 7
docs_left: true
hide_hero: true
---

DbGate supports creating plugins. Thanks plugin to wizard, it is really simple to create masic plugin. DbGate plugins are NPM (JavaScript) packages, they can have dependencies. (but not native dependencies)

Now there are 3 types of plugins:
- Theme plugin
- File format plugin
- Database driver plugin

## Install prerequisites
You need [node.js](https://nodejs.org) installed. 

Also you will need [Yeoman](https://yeoman.io/) and yeoman [DbGate plugin generator](https://www.npmjs.com/package/generator-dbgate):

```sh
npm install -g yo
npm install -g generator-dbgate
```

## Create theme plugin
Theme plugin is the simplest variant, it contains only frontend part.  
Note: theme plugins are supported from version 4.6.1-beta.1.

Run following command in console:

```sh
yo dbgate
```

You have to answer 3 questions:
- Plugin name, should start with dbgate-plugin-, eg. dbgate-plugin-mytheme
- Plugin type, choose eg. "Light theme"
- Package manager, choose npm or yarn, what you prefer. DbGate uses yarn.

## Edit and test plugin
Open some editor, recommended option is [Visual Studio Code](https://code.visualstudio.com/)  . 
Theme plugin contains only one source file, src/index.js. You could modify theme colors, as you wish. Attribute themeName is name, which is shown in DbGate theme chooser.

When you want to see your new theme, run this from console (from plugin directory):
```sh
yarn plugin
```
or if you use npm, than
```sh
npm run plugin
```
This commands installs your plugin in localy installed DbGate instance (or updates it, when you make changes). After DbGate restart, you should see new theme.  
Restart is not neccessary, reload app (menu View/Reload) is enough to use new plugin version after running "yarn plugin"

## Remove plugin
You could unisntall plugin from DbGate plugins widget. Or using following command:
```sh
yarn plugout
```

## Publish plugin
Plugin is normal NPM package, you could publish it to NPM repository. After publishing, it will be available for all DbGate users in "Plugins" widget.
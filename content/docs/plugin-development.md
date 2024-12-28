---
layout: docs
title: Plugin development
weight: 10
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
- Plugin name, must start with dbgate-plugin-, eg. dbgate-plugin-mytheme
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

## Plugin icon
Each plugin is represented with icon in extension list. NPM doesn't support icons for NPM packages, so icon could be in description field in package.json file with following syntax:

```
    "description": "Any description ![icon](https://link_to_icon.svg)",
```

If you use yeoman generator, it will help you with this a little.

## Create database driver plugin
Creating driver plugin is very similar to create, only you select "Database driver plugin". After `yarn plugin` you should be able to define connection using your new driver and see dummy database list and table list.

You could create simple driver with basic functionality very quickly, more complex features could be implemented later.

Creating driver could consist of following steps:
* find appropriate nodejs package (driver). Choose pure JavaScript package if possible. Native packages are big complication, this native package must be added to DbGate distribution, also you could expect probles with build on different platforms. On the other side, pure JavaScript packages works normally without problems on all platforms, without need of change DbGate.
* define fields for connection in frontend/driver.js, function showConnectionField
* implement connect function in backend/driver.js 
* implement getVersion function in backend/driver.js (optional, but when done, now you can test connection with "Test" button on connection tab)
* implement _rynAnalysis method in backend/Analyser.js class. This method should return database structure.
* implement query method in backend/driver.js. After this, you should be able to view table list and browse table data
* implement other methods. Please use other driver plugins for inspiration, the most typical plugin is probably PostgreSQL plugin, https://github.com/dbgate/dbgate/tree/master/plugins/dbgate-plugin-postgres

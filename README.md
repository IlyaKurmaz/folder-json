# Folder Json Builder

---
> Creates a JSON-representation of your directories-files structure
---

# Install 

```
$ npm install folder-json

or if you prefer to use yarn

$ yarn add folder-json
```
---

# Usage

```
const jsonTreeBuilder = require("folder-json/lib");

or Typescript-based
 
import { JsonTreeBuilder } from "folder-json/lib";

const json = new JsonTreeBuilder("Your desired path").buildJson()

```
# Options

You can easilier define tree traversing or json building options

## TreeOptions 

* extensions: RegExp | RegExp[] - Specify pattern for files inside processing diretories
* normalizePath: boolean - If true, windows style paths will be normalized to unix style pathes (/ instead of \).
* exclude: string - A RegExp or an array of RegExp to test for exlusion of directories.
* excludeFiles: boolean - Removing files from json structure. Extentions parameter will be ommited.

## JsonOptions

* emptyDirectorySign: string | null - value that will be placed opposite empty directory
* fileSign: string | null - value that will be placed opposite every file (Will be ommited if excludeFiles option is true)

## Opions Usage

1. Omit files and obtain only directories structure 

```
import { JsonTreeBuilder, TreeOptions } from "folder-json/lib";

const treeOptions: TreeOptions = { excludeFiles: true };

const jsonTreeBuilder = new JsonTreeBuilder("Your desired path", treeOptions).buildJson();

```

2. Process folder with files matched specific pattern 

```
import { JsonTreeBuilder, TreeOptions } from "folder-json/lib";

const treeOptions: TreeOptions = { extensions: /\.(md|js|html|java|py|rb)$/ };

const jsonTreeBuilder = new JsonTreeBuilder("Your desired path", treeOptions).buildJson();

```

3. Customize output with JsonOptions

```
import { JsonTreeBuilder, JsonOptions } from "folder-json/lib";

const treeOptions: TreeOptions = { extensions: /\.(md|js|html|java|py|rb)$/ };

const jsonOptions: JsonOptions = { emptyDirectorySign: null, fileSign: "I am file!" };

const jsonTreeBuilder = new JsonTreeBuilder("Your desired path", treeOptions, jsonOptions).buildJson();

// Optionally you can add identention to prettify your json

const jsonTreeBuilder = new JsonTreeBuilder("Your desired path", treeOptions, jsonOptions).buildJson(4)

```

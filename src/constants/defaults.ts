import { TreeOptions } from "../interfaces/tree.options";
import { None } from "./synthetic";
import { JsonOptions } from "../interfaces/json.options";

export const defaultTreeOptions: TreeOptions = {
    extensions: None,
    normalizePath: true,
    exclude: None,
    excludeFiles: false
}

export const defaultJsonOptions: JsonOptions = {
    emptyDirectorySign: null,
    fileSign: null
}
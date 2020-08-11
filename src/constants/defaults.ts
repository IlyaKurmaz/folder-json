import { None } from "./synthetic";
import { TreeOptions, JsonOptions } from "../interfaces";

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
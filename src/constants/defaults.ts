import { None } from "./synthetic";
import { Internal } from "../interfaces";

export const defaultTreeOptions: Internal.TreeOptions = {
    extensions: None,
    normalizePath: true,
    exclude: None,
    excludeFiles: false
}

export const defaultJsonOptions: Internal.JsonOptions = {
    emptyDirectorySign: null,
    fileSign: null
}
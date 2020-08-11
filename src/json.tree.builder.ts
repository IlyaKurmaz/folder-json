import { validatePath, getInfo } from "./utils/path.utils";
import { defaultTreeOptions, defaultJsonOptions } from "./constants/defaults";
import { TreeOptions, JsonOptions } from "./interfaces";
import { Tree } from "./interfaces/tree";
import { NoneFile } from "./constants/synthetic";

const dirTree = require("directory-tree");

export class JsonTreeBuilder {

    private data: any;

    constructor(
        private readonly rootPath: string,
        private readonly treeOptions: TreeOptions = defaultTreeOptions,
        private readonly jsonOptions: JsonOptions = defaultJsonOptions){}

    get info() {
        return getInfo(this.rootPath);
    }

    public buildJson(indentation?: number){
        const exists = validatePath(this.rootPath);

        if(exists){

            let options: TreeOptions = {};

            if(this.treeOptions.excludeFiles){
                options = { ...this.treeOptions, excludeFiles: undefined, extensions: NoneFile };
            }
            else {
                options = { ...this.treeOptions, excludeFiles: undefined }
            }

            const originTree = dirTree(this.rootPath, options);

            this.processTreeToJson(originTree);
    
            return indentation ? JSON.stringify(this.data, null, indentation) : this.data;
        }
        else {
            throw new Error(`Path: ${this.rootPath} is invalid. Please check the input or provide correct normalization parameters`);
        }
    }

    private processTreeToJson(directory: Tree, state: any = {}){        
        state[directory.name] = {};
    
        if(directory.children && directory.children.length > 0){
    
            for(const children of directory.children){
                this.processTreeToJson(children, state[directory.name]);
            }
        }
        else {

            const type = directory.type;

            state[directory.name] = directory.type === "directory" ? this.jsonOptions?.emptyDirectorySign: this.jsonOptions.fileSign;
        }
        
        this.data = state;
    }
}
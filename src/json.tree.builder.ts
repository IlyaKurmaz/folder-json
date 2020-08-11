import { validatePath, getInfo } from "./utils/path.utils";
import { defaultTreeOptions, defaultJsonOptions } from "./constants/defaults";
import { Internal } from "./interfaces";

const dirTree = require("directory-tree");

export class JsonTreeBuilder {

    private data: any;

    constructor(
        private readonly rootPath: string,
        private readonly treeOptions: Internal.TreeOptions = defaultTreeOptions,
        private readonly jsonOptions: Internal.JsonOptions = defaultJsonOptions){}

    get info() {
        return getInfo(this.rootPath);
    }

    public buildJson(indentation?: number){
        const exists = validatePath(this.rootPath);

        if(exists){
            const originTree = dirTree(this.rootPath, { ...this.treeOptions });

            this.processTreeToJson(originTree);
    
            return indentation ? JSON.stringify(this.data, null, indentation) : this.data;
        }
        else {
            throw new Error(`Path: ${this.rootPath} is invalid. Please check the input or provide correct normalization parameters`);
        }
    }

    private processTreeToJson(directory: Internal.Tree, state: any = {}){        
        state[directory.name] = {};
    
        if(directory.children && directory.children.length > 0){
    
            for(const children of directory.children){
                this.processTreeToJson(children, state[directory.name]);
            }
        }
        else {

            const type = directory.type;

            if(this.treeOptions.excludeFiles && type === "file"){

            }

            state[directory.name] = directory.type === "directory" ? this.jsonOptions?.emptyDirectorySign: this.jsonOptions.fileSign;
        }
        
        this.data = state;
    }
}
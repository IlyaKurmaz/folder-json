import { validatePath, getInfo } from "./utils/path.utils";
import { TreeOptions } from "./interfaces/tree.options";
import { JsonOptions } from "./interfaces/json.options";
import { defaultTreeOptions, defaultJsonOptions } from "./constants/defaults";
import { Tree } from "./interfaces/tree";

const dirTree = require("directory-tree");

export default class JsonTreeBuilder {

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
            const originTree = dirTree(this.rootPath, { ...this.treeOptions });

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

            if(this.treeOptions.excludeFiles && type === "file"){

            }

            state[directory.name] = directory.type === "directory" ? this.jsonOptions?.emptyDirectorySign: this.jsonOptions.fileSign;
        }
        
        this.data = state;
    }
}
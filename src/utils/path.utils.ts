import fs from "fs";
import pathUtils from "path";

import { FileStructureType } from "../types/file.structure.types";
export function validatePath(path: string){
    return fs.existsSync(path);
}
export function getObjectTypeByPath(path: string){
    return fs.lstatSync(path).isFile() ? FileStructureType.File : FileStructureType.Directory;
}

export function getInfo(path: string){
    try { 
        const type = getObjectTypeByPath(path);

        const name = pathUtils.basename(path);
    
        if(type === FileStructureType.Directory) {
            return { 
                name,
                path,
                type
            }
        }
    
        const extension = pathUtils.extname(path);
        const fileSizeInBytes = fs.statSync(path).size;
    
        return { name, path, type, extension, fileSizeInBytes };
    }
    catch(ex){
        throw new Error(`Path: ${path} is invalid. Please check the input or provide correct normalization parameters`);
    }
    
}
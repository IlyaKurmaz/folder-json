export namespace Internal {
    export interface JsonOptions {
        emptyDirectorySign?: string | null;
        fileSign?: string | null;
    }

    export interface TreeOptions {
        extensions?: string;
        normalizePath?: boolean;
        exclude?: string;
        excludeFiles?: boolean;
    }

    export interface Tree {
        name: string;
        type: string;        
        children: Array<Tree>;
    }
}
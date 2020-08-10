export interface Indexable {
    [index: string]: Indexable | null | undefined;
}
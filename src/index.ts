import TreeBuilder from "./tree.builder";

const test = "C:\\Users\\User\\Desktop\\Te";
const test2 = "C:\\Users\\User\\Desktop\\Te\\dva\\photo strana.txt";

const json = new TreeBuilder(test, {}, {}).buildJson(4);

console.log(json);
import JsonTreeBuilder from "./json.tree.builder";

const test = "C:\\Users\\User\\Desktop\\Te";
const test2 = "C:\\Users\\User\\Desktop\\Te\\dva\\photo strana.txt";

const json = new JsonTreeBuilder(test, {}, {}).buildJson(4);

console.log(json);
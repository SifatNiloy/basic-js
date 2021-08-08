let myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
}
myObject.key3 = "changed";
delete myObject.key1;
console.log(myObject);
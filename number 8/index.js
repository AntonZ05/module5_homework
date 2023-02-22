let Mymap = new Map();
myMap.set('key' 'x');
myMap.set('key' 'Y');
myMap.set(true, 123);
console.log(myMap.keys())
console.log(myMap.values())
for (let name of myMap.values()){
console.log('значения свойства',
}
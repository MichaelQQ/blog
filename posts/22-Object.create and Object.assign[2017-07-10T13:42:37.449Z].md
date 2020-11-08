先看一下#Object.create 和#Object.assign 在#MDN 的說明：

>The Object.create() method creates a new object with the specified prototype object and properties.
>
>Syntax: Object.create(proto[, propertiesObject])
>
>— [Object.create() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
>
>The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
>
>Syntax: Object.assign(target, …sources)
>
>— [Object.assign() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

換句話說就是
- Object.create可以用來建立有特定#prototype 的#物件 
- Object.assign可以用來複製多個物件的屬性到目標物件

```js
var car = {
  wheel: 3,
  speed: () => console.log('fast')
}

var car1 = Object.create(car)
var car2 = Object.create(car)
var car3 = Object.assign({}, car)
var car4 = Object.assign(car)

car1.speed()  // fast
car2.speed()  // fast
car3.speed()  // fast
car4.speed()  // fast
console.log(car1) // {__proto__: {speed: (), wheel: 3}}
console.log(car2) // {__proto__: {speed: (), wheel: 3}}
console.log(car3) // {wheel: 3}
console.log(car4) // {wheel: 3}

car.wheel = 2
car.speed = () => console.log('very fast')

car1.speed()  // very fast
car2.speed()  // very fast
car3.speed()  // fast
car4.speed()  // very fast
console.log(car1) // {__proto__: {speed: (), wheel: 2}}
console.log(car2) // {__proto__: {speed: (), wheel: 2}}
console.log(car3) // {wheel: 3}
console.log(car4) // {wheel: 2}
```

由上面的例子可以觀察
1. car1 和 car2 皆由Object.create(car)所建立，所以兩者的prototype皆為car；所以在car修改wheel和speed後，兩者皆輸出very fast。

2. car3 和 car4 使用Object.assign建立，其中car3的目標物件為一個新的物件，而car4的目標物件為car；所以當car被修改時car3不受影響，反之，car4則隨car的修改而改變。

3. car1和car2對比car3的差異在於，使用Object.create所建立的物件為prototype指向car，而使用Object.assign所建立的物件則是直接將car的屬性值複製到目標物件中，如範例中的空物件。

實際上執行上面的#code 時可能會觀察到奇怪的狀況，可以參考[A special output of Chrome console.log Object]()
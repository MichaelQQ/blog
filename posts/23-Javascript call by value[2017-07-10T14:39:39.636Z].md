### Pass primitive type to function

In #Javascript , it always pass a copy of value to the function. For example, we pass a variable ***one***, which is Number type, to function ***changeNumberToTen***. It copy the value of ***one*** variable, 10, then pass to the function.

```js
function changeNumberToTen(num) {
  num = 10;
}

var one = 1;
console.log(one);  // 1

changeNumberToTen(one);
console.log(one);  // 1
```

In memory, it may look like below.

![memory chart1](https://farm5.staticflickr.com/4283/35706196841_cca8f60b72.jpg)

The ***one*** variable’s reference is different from the function argument ***num***. Though ***num*** change the value, it doesn’t change the ***one’s*** value.

### Pass object to function —property change

What if we pass a object to a function and change it? 
We pass ***objA*** to the function ***changeObject*** and the function change the property ***a*** of object. Doesn’t it pass by value? Why does ***objA*** change?

```js
function changeObject(obj) {
  obj.a = 10;
}

var objA = { a: 5 };

console.log(objA);  //  {a:5}

changeObject(objA);
console.log(objA);  //  {a: 10}
```

In memory, it may look like below.

![memory chart2](https://farm5.staticflickr.com/4264/35028668993_6c8b98a87f.jpg)

It’s still pass by value. The ***objA’s*** value is the object’s address and ***obj’s*** value is copy of object’s address. Both point to the same object. Therefore, when function ***changeObject*** change the property ***a*** of object, it affects the objA.

### Pass object to function — fully change

What if we pass a object to the function and fully change it?
We pass ***objA*** to the function ***changeObject*** and the function fully change the object to Object({ b: 10 }). Why does ***objA*** un-change?

```js
function changeObject(obj) {
  obj = { b: 10 };
}

var objA = { a: 5 };

console.log(objA);  //  {a:5}

changeObject(objA);
console.log(objA);  //  {a:5}
```

In memory, it may look like below.

![memory chart3](https://farm5.staticflickr.com/4262/35706196511_ac21ecb80f.jpg)

Actually, it’s not a matter of pass by value here. So, why the ***objA*** doesn’t change? It’s because of ***reassignment***. When we assign new value to a variable, it doesn’t change the existed value in variable but change the variable’s reference to new value. In the example, ***obj*** change its reference to the new value (Object(***{b: 10}***)’ s address) That’s why ***objA*** does not be affected. 

Array is also a object in Javascript, so it’ll perform the same result as object does.

### Conclusion

In Javascript,
1. Always #pass_by_value . (Someone call it pass by sharing when passing Object)
2. #Assigning new value to variable is #reassignment.

### Reference

1. [Javascript by reference vs. by value [duplicate] — nrabinowitz@StackOverflow](http://stackoverflow.com/a/6605700/5593461)
2. [ECMA-262–3 in detail. Chapter 8. Evaluation strategy. — Dmitry Soshnikov](http://dmitrysoshnikov.com/ecmascript/chapter-8-evaluation-strategy/)
3. [Javascript — variables, scope, and memory — 
Farhan Faruque@SlideShare](http://www.slideshare.net/russel_05/javascript-variables-scope-and-memory-2)
There is a surprise output in #chrome #console when I test Object.create demo.

Below is the #code 
```js
var car = {
  wheel: 3,
  speed: () => console.log('fast')
}

var car1 = Object.create(car)
var car2 = Object.create(car)

car1.speed()
car2.speed()

/*
  The output I expected.
  car1: {
    __proto__: {
      wheel: 3,
      speed: ()
    }
  }
  car2: {
    __proto__: {
      wheel: 3,
      speed: ()
    }
  }
  
  The actual output
    car1: {
    __proto__: {
      wheel: 4,
      speed: ()
    }
  }
  car2: {
    __proto__: {
      wheel: 4,
      speed: ()
    }
  }
*/
console.log(car1)
console.log(car2)

car.wheel = 4
car.speed = () => console.log('very fast')

car1.speed()
car2.speed()

/*
  car1: {
    __proto__: {
      wheel: 4,
      speed: ()
    }
  }
  car2: {
    __proto__: {
      wheel: 4,
      speed: ()
    }
  }
*/
console.log(car1)
console.log(car2)
```

The chrome console doesn’t show the #object details immediately. When I click to show the objects’ details, Chrome shows the objects’ detail at that time. In other words, the objects have been changed when I show the details.

There are few ways to solve it.
1. JSON.stringify object when console.log
2. set #breakpoint before object changed and check the value in #debugger at that time.
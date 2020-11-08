最近同事分享了一個#Stackoverflow 上看到的#Javascript 面試題目，原文作者在某間公司面試時，面試官問他 "Is it ever possible that (a ==1 && a== 2 && a==3) could evaluate to true, in JavaScript?"
[Stackoverflow原文網址](https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true)

剛開始看到題目時就覺得蠻有趣的，雖然說在實際情況下不太可能寫出這樣的程式碼(可能有寫過，自己沒發現)。
為了方便觀察結果就把題目稍為改成下面這樣，想辦法讓console可以印出"yo"
```js
if (a == 1 && a == 2 && a == 3) {
  console.log('yo')
}
```

首先，為了可以讓if-statement為true，有兩個可能的做法
1. 每次經過比較後，a的值會加1
2. 每次取出a的值後，a的值會加1

根據[MDN上的表格](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using)
Loose equality comparison會根據兩個operand的type，先經過轉換之後在做比較。
然後，題目中每次比較的operand B是Number type，所以可能的結果如下

| Type of operand A | Undefined | Null  | Number  | String  | Boolean  | Object |
| - | - | - | - | - | - | - |
| result | false | false | A === B | ToNumber(A) === B | ToNumber(A) === B | ToPrimitive(A) == B |

所以有 ToNumber和 ToPrimitive兩個可能改變a的方式，其中，ToNumber的做法類似於+a的方式轉換成Number，而 ToPrimitive則會呼叫 A.valueOf 和 A.toString

所以我們只要在每次比較時呼叫的 valueOf或 toString 修改並回傳a的值就可以讓if statement為true
code如下：
```js
var a = {
  i: 1,
  toString: function () {
    return this.i++;
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log('yo')
}

// or
var b = {
  i: 1,
  valueOf: function () {
    return this.i++;
  }
}

if (b == 1 && b == 2 && b == 3) {
  console.log('yo')
}
```

這樣一來，每次比較時呼叫 toString或 valueOf就會回傳不同的值，讓if為true。

另一種作法則是讓每次get a的值都會改變，所以在一開始宣告a時加上他的getter function，作法如下：
```js
Object.defineProperty(window, 'a', {
  get: (function () {
    var i = 1
    return function () {
      return i++
    }
  })()
})

if (a == 1 && a == 2 && a == 3) {
  console.log('yo')
}
```
這邊我們為了在宣告a的時候同時定義他的getter function，我們使用Object.defineProperty來宣告a

這樣就能讓if為true並印出結果。
這題目看起來蠻有趣的，有很多種解法可以達到題目的要求，也讓我又再次了解Equality comparisons

reference:

[1] [Can (a ==1 && a== 2 && a==3) ever evaluate to true? - Stackoverflow](https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true)

[2] [Loose equality using ==](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using)

[3] [
Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
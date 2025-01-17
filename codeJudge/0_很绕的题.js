//第一题
var name = 'bbb'
var fun = function () {
  //console.log(this.name);//undefined
  this.name = 'aaa';
  //console.log(this.name);//aaa
  return {
    name: 'jack'
  }
}
var p = new fun()
console.log(1,p.name); 

//第二题
var fun2 = function () {
  this.name = 'aaa';//this指向fun2
  return 'jack'
}
var p2 = new fun2();
console.log(2,p2.name);

//第三题
var fun3 = function () { };
fun3.prototype = {
  info: {
    name: 'aaa',
    age: '12'
  }
}
var a = new fun3();
var b = new fun3();
a.info.name = 'tom';
b.info.name = 'jack';
console.log(3, a.info.name, b.info.name);
//jack jack 做错了
//1.先查找构造函数实例里的属性或方法，如果有，就立即返回。
//2.如果构造函数的实例没有，就去它的原型对象里找，如果有，就立即返回
//3.后面的构造函数修改属性会修改原型的属性

//第四题
var fun4 = function () {
  this.info = {
    name: 'aaa'
  }
}
var a2 = new fun4();
var b2 = new fun4();
a2.info.name = 'jack';
b2.info.name = 'tom';
console.log(4, a2.info.name, b2.info.name); 

//第五题
var fun5 = function () { }
fun5.prototype = {
  name: 'peter',
  age: 25
}
var a5 = new fun5();
var b5 = new fun5();
a5.name = 'jack';
b5.name = 'tom';
console.log(5, a5.name, b5.name); 

//第六题
var fun6 = function () {
  this.info = {
    name: 'peter',
    age: 25
  }
}
fun6.prototype = {
  info: {
    name: 'peter',
    age: 25
  }
}
var a6 = new fun6();
var b6 = new fun6();
a6.info.name = 'jack';
b6.info.name = 'tom';
console.log(6, a6.info.name, b6.info.name);
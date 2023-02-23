// function hello () {
//     document.write("my nam is yash")
// }

 
// hello()
 
// document.write("<br><br>")


// const hey = function () {
//     document.write("my name is bhanu")
// }


// hey()

// document.write("<br><br>")





// const Arrow = () => 
// document.write("my name is king")

// Arrow()

// document.write("<br><br>")
// ==================================Arrow function===================================================

// let welcome = (name, age) => {
//     return `hello $ welcome ${name} - ${age}`;
    
// }
// document.write(welcome("yash ", 25));


// // =====================================================================================
// document.write("<br><br>")

// let user = ["tinku",25,"guna","male", 250000];
//   let [name="ashu" , age, city ="indore",gender,selery] = user;

//   document.write(name)
//   document.write("<br><br>")
//   document.write(age)
//   document.write("<br><br>")
//   document.write(city)
//   document.write("<br><br>")
//   document.write(gender)
//   document.write("<br><br>")
//   document.write(selery)

  
// ================================================================================

// let user = ["tinku", 25, "guna","male",25000] 

// let [name = "bhanu", age, city,gender,selery] = user;


// console.log(name)
// console.log(age)
// console.log(city)
// console.log(gender)
// console.log(selery)


// // ==============================================================
// normale function

// function user ([name, age, city,gender,selery]) {

//   console.log(name)
//   console.log(age)
//   console.log(city)
//   console.log(gender)
//   console.log(selery)

// }

// user(["tinku", 25, "guna","male",25000] );




// const user = ([name, age, city,gender,selery]) => {

//   console.log(name)
//   console.log(age)
//   console.log(city)
//   console.log(gender)
//   console.log(selery)
// }

// user(["tinku", 25, "guna","male",25000] );





// const user = () => {

//   return ["tinku", 25, "guna","male",25000];


// }

//  [name, age, city,gender,selery] = user();


// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(selery);


// =============================================================================

// object

// const user = {name: "yash", age: 25, city:"guna",}

// const {name, age, city} = user;

// console.log(name)
// console.log(age)
// console.log(city)



// const user = ({name, age, city}) => {
//           console.log(name)
//           console.log(age)
//           console.log(city)
// }

// user({name: "yash", age: 25, city:"guna",})




// const user = () => {
//   return {name: "yash", age: 25, city:"guna"}
// }

// const {name, age, city} = user();

// console.log(name)
// console.log(age)
// console.log(city)






// if ( 1==1) {

//     var x = "yash"
    
// }

// console.log(x)

// =========Global scope ====================


// if ( 1==1) {

//     let x = "yash"
//     console.log(x)
    
// }


// ==========================block scope ==================

// const x = "yash birthare"
// const y = 25

// document.write("hello and welconme" + x , "what is your age " + y )
// console.log("hello and welconme" + x , "what is your age " + y )

// =============old======================

// const x = "yash birthare"
// const y = 25

// document.write(`hello and welcome ${x} what is your age ${y}`)
// console.log(`hello and welcome ${x} what is your age ${y}`)

// =========Template String ===================







// example 11 1st lecture

// function defaultExample  (a, b )  {
//     if(b === undefined) {
//         b =0
//     }
//     return a + b;
// }
 
// console.log(defaultExample(2))
// // ===================================================================
// // old days

// function defaultExample  (a, b )  {
//    b = b || 2;
//     return a + b;
// }
 
// console.log(defaultExample(2))

// // ===================================================================

// // new

// function defaultExample  (a, b )  {
//     b = b ?? 2;
//      return a + b;
//  }
  
//  console.log(defaultExample(2))

//  // ===================================================================


// Promise
 
// const yash = true;

// const promise = new Promise((resolve, reject)=> {
//     if(yash){
//     resolve("you are right")
//     }else{
//     reject("you are wrong")
//     }
// })

// console.log(promise)




// ===================================================

// function laptop(yash) {

//     return new Promise((resolve, reject)=> {
//         if(yash){
//         resolve("you are right")
//         }else{
//         reject("you are wrong")
//         }
//     })
// }

// console.log(laptop(true))



// ==============================================================



// const one = (complete)  => {
    
// return new Promise(function(resolve, reject){
//     console.log("please wait website is Loading...")
//     setTimeout(() => {
//         if(complete){
//             resolve("you are pass")
//         }else{
//             reject("you are fail")
//         }
//     },3000)

//     })

// }
// const onfulfilment = (result) => {
//  console.log(result)
// }
// const onRejection = (error) => {
//     console.log(error)
// }

// one(true).then(onfulfilment).catch(onRejection);










// setInterval ==============  clearInterval 

// ====================================================================

// var a = 0;

// setInterval(yash, 1000)

// function yash () {
//     a = a + 10;
//    var target = document.getElementById("box22")
//    target.style.marginLeft = a + "px";
// }

// ===============================================================================


// var a = 0;

//  var id =  setInterval(yash, 1000);

// function yash () {
//     a = a + 10;
//     if (a == 200){
//    clearInterval(id);
//     }else{
//         var target = document.getElementById("box22")
//         target.style.marginLeft = a + "px";
//     }

// }


// ========new

// var a = 0;

// var id = setInterval (() => {
//     a = a + 10;
//     if (a == 200){
//    clearInterval(id);
//     }else{
//         var target = document.getElementById("box22")
//         target.style.marginLeft = a + "px";
//     }
// },1000)




//  id = setInterval(() => {
//     console.log("or sab badiya")
// }, 5000)

// const stop = () => {
//     clearInterval(id)
// }

// =============================================================================


// setTimeout ====================== clearTimeout 

// ====old
//  var id = setTimeout(anim, 3000);


//    function anim () {
//     var target = document.getElementById("box22");
//     target.style.width = "200px"
//    }

//    function stop() {
//     clearTimeout(id)
//    }



// =====new

// var id = setTimeout (() => {
    
//     var target = document.getElementById("box22");
//     target.style.width = "200px"
   

// },1000)


// function stop() {
// clearTimeout( id)
// }






// =====================================Syncronous programming===========================================

// const  aaa = prompt("what is your name");
// const  bbb = prompt("what is your age");
// const  ccc = prompt("what is your fev color");

// console.log(aaa +  " is "  + bbb +  " years old and " + ccc + " this is a " + aaa + " fev color ")


// // =========================================Asynchronous programming======================================================      

// const user  = () => {
//     console.log("please wait")

// setTimeout (() => {

//     console.log("yash birthare")

// }, 4000)

// }

// user()






























































































// =============== Array filter===========

// old ====

// const ages = [10 ,15 ,5 , 9, 21,18, 19,];
// console.log(ages);

// const b = ages.filter(yash)
// console.log(b);


// function yash (age) {
//     return age >= 18;
// }








// // // new ===
// const ages = [10 ,15 ,5 , 9, 21,18, 19,];
// console.log(ages)


// const b = ages.filter((age) => {
//     return age >= 18
// })

// console.log(b)








// ============== Array map =============



// =========== old ============

// const numbers = [2 , 5, 6, 3, 10 ,12]
// console.log(numbers)

// const num = numbers.map(yash)

// function yash (num) {
//     return  num + 2
// }

// console.log(num)





// =====================new=============

// const box = [12,23,54,12,54,17,]
// console.log(box)

// const num = box.map( (num) => {
//     return num  + 2
// })

// console.log(num) 






// =====================reduce=========================

// ===old

// const ashu = [12, 42, 14, 78, 43, 35, 21, 87,65,43,21,53,]


// const dar = ashu.reduce(box,0)

// function box (accumulator, currentValue) {
//     return  accumulator + currentValue 
//     }
// console.log(dar)


// ====new

// const ashu = [12, 42, 14, 78, 43, 35, 21, 87,65,43,21,53,]

// const dar = ashu.reduce((acc, curr) => {
//     return acc + curr 
// },0) 

// console.log(dar)










// ============== sort =============== reverse ===============

// const user = ["bhanu", "tinku" , "ashu" , "ajay" ]
// document.write(user + "<br><br>")
// user.sort();
// document.write(user + "<br><br>")
// user.reverse();
// document.write(user + "<br><br>")


// =======================pop ============== push ===========
// const user = ["bhanu", "tinku" , "ashu" , "ajay" ]
// document.write(user + "<br><br>")
// user.pop();
// document.write(user + "<br><br>")
// user.push("deko")
// document.write(user + "<br><br>")


// ========== shift ============ unshift ===========

// const user = ["bhanu", "tinku" , "ashu" , "ajay" ]
// document.write(user + "<br><br>")
// user.shift();
// document.write(user + "<br><br>")
// user.unshift("deko")
// document.write(user + "<br><br>")


// =========================== find ===== findIndex ===================

// old====

// const index  = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(index)
// const fil = index.find(yash)

// function yash(age) {
//     return age > 18
// }

// console.log(fil)




// new======== 

// const index  = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(index)

// const fil = index.find((age) => {
//     return age > 18
// })

// console.log(fil)



// old====

// const index  = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(index)
// const fil = index.findIndex(yash)

// function yash(age) {
//     return age > 18
// }

// console.log(fil)


// new======== 

// const index  = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(index)

// const fil = index.findIndex((age) => {
//     return age > 18
// })

// console.log(fil)



// ==============some ===== every==============

// old========

// const box = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(box)

// const x = box.some(yash)

// function yash (age) {
//     return age > 18
// }

// console.log(x)

// // new===========

// const box = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(box)

// const x = box.some((age) => {
//     return age > 18
// })

// console.log(x)


// old=====

// const box = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(box)

// const x = box.every(yash)

// function yash (age) {
//     return age > 18
// }

// console.log(x)



// new=======


// const box = [15 ,43 , 12, 32, 19, 23, 14, 2, 5, 6, 7]
// console.log(box)

// const x = box.every((age) => {
//     return age > 18
// })

// console.log(x)


// ===========split==============

// const str = "javaScript is  a GREAT Language";

// const box23 = str.split(" ");

// console.log(box23)

// ======================concat============== same as ""join"" 


//  const x = "hello my name is yash "
//  const y = "hello my name is bhanu "
//  const z = "i am from guna "
// const love = x.concat(y,z,);
// console.log(love)




// ===================length========================

// const str = "my name is yash birthare and i am from guna city"
// const a = str.length;
// console.log(a)


// ==================array example========= x
// const str = ["bhanu","raju","raja","ravi"]
// const a = str.length;
// console.log(a)






// ==================splice ========== slice ========

// const str = ["bhanu","raju","raja","ravi","yash","Om"];
// console.log(str)
// const a = str.slice(1 ,4,);

// console.log(a)



// const str = ["bhanu","raju","raja","ravi"];
// console.log(str)

// str.splice(2,0,"rani","pooja")
// console.log(str)







// const num = (num) => {
//     if (num > 0){
//     return ("positive")
//     }else{
//      return ("negitive")
//     }
// }

// console.log(num(3))







// const Nam = (num) => num > 0  ? ("positive") : ("negitive") ;

// console.log(Nam(-12))








// const word = (num) => {
//     if (num.match("a")){
//         return(" include a")
//     }else{
//         return ("dose note include a")
//     }
// }

// console.log(word("ysh"))






// const word = (num) => {
//     if (num.length > 5){
//         return ` more than 5 characters`
//     }else{
//         return `lass tha 5 characters`
//     }
// }

// console.log(word("ysh"))


 
const ashu = (a,b,c) => {
 if (c === undefined){
    c = 4;
 }
return a * b * c;
};


// console.log(ashu2(2,3))

const ashu2= (a,b,c=4)=>  a*b*c

console.log(ashu2(2,3))
// const ashu
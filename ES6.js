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
// // ==================================Arrow function===================================================

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





// =====================================Asynchronous JavaScript===========================================



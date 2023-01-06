var u = "hello"
var v = true
var w = 500
var x = ["HTML" , "CSS" , "JS", "REACT.JS",]
var y = {
    name: "yash birthare",
    city: "guna"
}

document.write(u)
document.write("<br>")
document.write(typeof u)
document.write("<br> <br>")

document.write(v)
document.write("<br>")
document.write(typeof v)
document.write("<br> <br>")

document.write(w)
document.write("<br>")
document.write(typeof w)
document.write("<br> <br>")

document.write(x)
document.write("<br>")
document.write(typeof x)
document.write("<br> <br>")

document.write(y)
document.write("<br>")
document.write(typeof y)
document.write("<br> <br>")

// data type ========================================

// ++++++++++++++++++++++++++++++++++++==============================================++++++++++++++++++++++++++++++++++++++++operators+++++++++++++++++ arithmetic operators
var a = 10;
var b =  3;

var c = (a + b) * 2;

document.write(c);

document.write("<br> <br>");

// wrong
var a = 10;
var b =  3;

var c = a + b * 2;

document.write(c);


// ========================================================================================= assignment operators

document.write("<br> <br>");

var a = 10;
var b = 3;

a +=  b * 2;

document.write(a)


// ===================================================================================== 

var a = 10;
var b = 3;

a %= b

// console.time("texting")
// console.warn("you are wrong");
// console.error("you are wrong");
// console.warn("you are wrong");
// console.error("you are wrong");
// console.warn("you are wrong");
// console.error("you are wrong");
// console.warn("you are wrong");
// console.error("you are wrong");
// console.warn("you are wrong");
// console.error("you are wrong");
// console.warn("you are wrong");
// console.timeEnd("texting")
// console.error("you are wrong");

// console.clear();

// ============================================================================================
document.write("<br><br>")


var x = 10;
var y = 10
 
document.write(  x == y);
document.write("<br><br>");
document.write(  x === y);
document.write("<br><br>");
document.write(x != y);
document.write("<br><br>");
document.write(x !== y);
document.write("<br><br>");

// ===============================================================================================


var x = 20 
var y = 20


if  (x == y) (
    document.write("u are right")
)

// ==================================================================================================
document.write("<br><br>");

var age = 20;
// var b = "10";

if (age >= 18 && age <= 21) {
    document.write("a is greter")
    }

    // ==================================================================================================
document.write("<br><br>");

var age = 22;
// var b = "10";

if (age >= 18 || age <= 21) {
    document.write("a is greter")
    }


// ==========================================================================================    

function yash () {
        console.log("hello and welcome")
    
}


yash()



let bhanu = function () {
    console.log("hello and welcome")
}

yash()


var yash = (name, age) => {
    return `hello and welcome ${name} - ${age}`
   
}


console.log(yash("bhanu" ,25));


// var user = {name:"tinku", 
//             age:25, 
//             city:"guna"};

// var  {name : s, age = 33,  city} = user;


// console.log(s);
// console.log(age);
// console.log(city)






// console.log(pp);


const defaultExample = (a, b=0) => a + b
console.log(defaultExample(2))
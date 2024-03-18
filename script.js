document.getElementById("string").onclick = function (){
    let Message = "Good boy "
    let Name = "Ahmad"
let fullName = Message + " " + Name;

    // console.log(fullName)
    document.getElementById("ahmad").innerHTML= Message + " " + Name;

}


document.getElementById("askNameFromUser").onclick = function(){
let firstName = prompt("Please Enter your name")
let lastName = prompt(" Please Enter your lastName ")
// console.log('firstName',firstName)
// console.log('lastName',lastName)
let fullName = firstName + " " + lastName
console.log(fullName)

}

document.getElementById("Comaparsionoperator").onclick = function(){
    let num1 = 10;
    let num2 = 14;
    
    if(num1 == num2){
        console.log("yes , your condition is true")
    }
    else{
        console.log("No , your condition is false ")
    }
}







document.getElementById("ifElseif").onclick = function(){
    let num1 = 16;
    let num2 = 14;
    console.log(num1 + num2);


    if(num1 > num2){
        console.log("num 1 is equal to num2")
    }
    else if (num1 === num2){
        console.log("num1 is equal num 2  ")
 }
 else if (num1 <= num2 ){
    console.log ("num1 is greater than num 2 ")
 }
 else{
    console.log("num1 is not equal num 2")
 }
}



document.getElementById("TestingSetofCondition").onclick = function(){
let age = +prompt("Enter your age?");
let weight = +prompt("Enter your weight?");

if(age >= 18 && weight <= 60){
console.log("you are a smart man")
}
else if(age >= 18 && weight > 60) {
    console.log("you are a fat guy")
}
else{
    console.log("you are a baby")
}
}



document.getElementById("ifStatementnested").onclick = function(){
let age = +prompt("your age?")

if(age >= 18){
    let weight = +prompt("your weight")

    if (weight<=70){
        console.log("your are smart man")
    }
    else{
        console.log("you are a fat man")
    }
}
else{
    console.log("you are a baby")
}
}


document.getElementById("Login").onclick = function(){
    let userName = prompt("your username")
    let password = prompt("your pass")

    if(userName === "Ahmad" && password === "041"){
        console.log("you are loggined")
    }
    else{
        console.log("your username or password is  incorrect")
    }
}
    
   
 
document.getElementById("Clear").onclick = function(){
    document.getElementById("ahmad").innerHTML = "";
}



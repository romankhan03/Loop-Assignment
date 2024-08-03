// Q1

var div = document.querySelector("div")
for(i = 1 ; i < 6; i++){
    console.log( "hello world" , i);
    div.innerHTML += "helloworld" + i + "</br>"
 }






// // Q2

for(i = 1; i < 11; i++){
    console.log(i)
}



// Q3

var inputNumber = +prompt("enter any number for a table")
var length = +prompt("enter length")
for(var i = 1; i < length; i++){
    console.log(inputNumber + "*" + i + "=" + inputNumber * i  )
    
}


// Q4


var mobile = ["nokia" , "samsung" , "apple" , "huawei"]
for(i=0;i<mobile.length;i++){
    console.log(mobile[i])
}


//Q5

var userinput = +prompt("enter number of items")
var firstitem = prompt("enter first item")
var seconditem = prompt("enter second item")
var thirditem = prompt("enter third item")

console.log("number of items" + userinput)
console.log(firstitem,seconditem,thirditem)





//Q6

for(i=0;i<10;i++){
       console.log(i*2)
}
for(i=0;i>10;i++){
    console.log(i)
}





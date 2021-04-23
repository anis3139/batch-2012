var name='Shakib' 

console.log("I Am" + name)
console.log(name + " go to school")
console.log(name + " is good boy")
console.log(name + " is married")

var x=10 ;

var y=20;
var z=5;

var m=10
var n=10
var result= m+n

//array
var man= ['shakib', 'tamim', 'mashrafi', 20, 50, 60, 80]

for(let i=0; i<man.length; i++){
    console.log(man[i]);
}

//conditional statement

var username="admink"
var password =12345

if (username=="admin") {
    console.log("You are log in")
}else if(password ==12345){
    console.log("password Correct");
}else{
    console.log(" Your Password or username is wrong")
}


var weman={
    name:"maleka",
    age:"30",
    district:"comilla"
}

console.log(weman.name);


//function



function testFunction(x,y) { 
    return x+y
}

var minus=function(x,y){
   return x-y;
}
console.log(testFunction(10,5));

console.log(minus(50,40));

console.log(minus(100,50));

console.log(minus(500,400));

console.log(testFunction(30,50));




var testbtn=document.getElementById('testbtn');
var result=document.getElementById('result');
testbtn.addEventListener("click", function(event){
    event.preventDefault();
    var first=document.getElementById('first').value;
    var second=document.getElementById('second').value;

    var x=parseInt(first);
    var y=parseInt(second);

    var add= function () {
        return x+y;
    }

    result.innerHTML=add();
    
    
})


testC=document.getElementById('first');
testC.addEventListener('keypress',  function () {
    result.innerHTML=testC.value;  
})

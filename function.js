// function declare
function susmoy(){
    console.log("Khub valo Ekta Chele");
    console.log("Kono Kichu te Matha betha nai");
    console.log("Pera Khaitei hobe");
}
// function call
susmoy();


function add(num2,num3){
    console.log("Going to add:",num2,num3);
    num = num2 + num3;
    console.log(num);
} 

add(4,5);


function add(num2,num3){
    console.log("Going to add:",num2,num3);
    num = num2 + num3;
    return num;
} 

add(4,5);
console.log(num);

function getAverage(assingment2 ,assingment3, assingment4){
    var total = assingment2 + assingment3 + assingment4;
    var average = total/3;
    return average;
}
var assingment2 = 48;
var assingment3 = 59;
var assingment4 = 60; 
var myAverage  = getAverage(assingment2,assingment3,assingment4 );
console.log(myAverage); 

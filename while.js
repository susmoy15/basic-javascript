// /while loop
var chocolate = 0;
while(chocolate < 6){
    console.log("Diye Dao");
    console.log (chocolate);
    chocolate++;
}

// for loop
for (var i=0; i<=6; i++ ){
    console.log(i);
    console.log("Shei Tess");
}

// display every elements of an array
var numbers = [3,6,9,8,2,7];
for(var i = 0 ; i<numbers.length ; i++){
    var number = numbers[i];
    console.log(number);
}

// break,continue

var numbers = [30,64,95,84,22,73];
for(var i = 0 ; i<numbers.length ; i++){
    var number = numbers[i];
    if(number < 73){
        continue;       //break
    }
    console.log(number);
}

// Array update
var fruits = ['Apple','Banana','Orange'];
var BananaIndex = fruits.indexOf('Banana');
fruits[BananaIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
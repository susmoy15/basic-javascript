var money_count = [20, 30, 40 ,50];
console.log(money_count.length);

var position = money_count.indexOf(50);
console.log(position);


money_count[2]=90;
console.log(money_count);

var friends=['kalam', 'bless', 'niloy'];
friends.push('laal');
friends.pop();
console.log(friends);


var money=500;
var chicken_fry=900;
if(money>chicken_fry){
    console.log("chicken khamu");
}
else{
    console.log("Fokir ami");
}

// And Or operation:
var money=500;
var chicken=900;
if(chicken=>300 && money>=400){
    console.log("Pera nai chill")
}
else{
    console.log("onek pera!!!")
}

var money=200;
var chicken=500;
if(chicken<300 || money>400){
    console.log("Pera nai chill")
}
else{
    console.log("onek pera!!!")
}

// multi-condition

var cha = 20;
var biri = 23;
var coke =45;
var coffee = 60;
var sorbot = 8;

if(sorbot>coffee){
    console.log("Valo Hoye jao")
}
else if(coke>coffee){
    console.log("Khamu na!!!")
}
else if(biri>sorbot){
    console.log("Loss project")
}
else{
    console.log("Jibon manei Zee Bangla")
}


// nested loop

var math = true;
var bangla = false;
var english = true;
if(math == true && bangla == true){
    if(english == true){
        console.log("Good")
    }
    else{
        console.log("Bad")
    }
}
else{
    console.log("Bolo hori,hori bol")
}
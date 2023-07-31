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
function inchToFeet(inches){
    const feet = inches/12;
    return feet; 
}
const heightFeet = 90;
const Feet = inchToFeet(heightFeet);
console.log(Feet);

const myHeight = 70;
const Height = inchToFeet(myHeight);
console.log(Height);

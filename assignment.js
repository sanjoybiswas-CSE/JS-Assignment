// Assignment-1

function feetToMile(n){
    if(n<=0){
        console.log("Wrong Declearation");
    }
    else{
        feet = (n*0.000189394);
        return feet;
    }
}
var resultOfMile = feetToMile(5);
console.log("Mile = ",resultOfMile);


// Assignment-2

function woodCalculator(chair, table, bed){
    var chair = chair*1;
    var table = table*3;
    var bed = bed*5;
    var totalWood = chair + table + bed;
    return totalWood;
}
var totalWoodNeed = woodCalculator(1,1,1);
console.log("Total wood need = ",totalWoodNeed," pieces");
var totalWoodNeed = woodCalculator(12, 3, 2);
console.log("Total wood need = ",totalWoodNeed," pieces");

// Assignment-3

function brickCalculator(floor){
    if(floor<=10){
        totalBrick = 10*15*1000;
        return totalBrick;
    }
    else if(floor<=20){
        var calculation1 = 10*15*1000;
        var due = floor-10;
        var calculation2 = due*12*1000;
        totalBrick = calculation1 + calculation2;
        return totalBrick;
    }
    else {
        var calculation1 = 10*15*1000;
        var calculation2 = 10*12*1000;
        var due = floor-20;
        var calculation3 = due*10*1000;
        totalBrick = calculation1 + calculation2 + calculation3;
        }
        return totalBrick;
    }
    brickCalculator(8);
    console.log("Total bricks need =",totalBrick,"pieces");
    brickCalculator(15);
    console.log("Total bricks need =",totalBrick,"pieces");
    brickCalculator(25);
    console.log("Total bricks need =",totalBrick,"pieces");


// Assignment-4

function tinyFriend(name){
    shortName = name[0];
    for(var i=0; i<name.length; i++){
        var compareName = name[i];
        if(compareName.length<shortName.length)
        shortName = compareName;
    }
    return shortName;
}
var shortNameIs = tinyFriend(["Jackson", "Rico", "Jon", "Michel", "Jourge"]);
console.log("Tiny name is =",shortNameIs);
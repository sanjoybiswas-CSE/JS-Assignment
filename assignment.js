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





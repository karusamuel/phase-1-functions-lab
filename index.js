// Code your solution in this file!
function distanceFromHqInBlocks(street){
return Math.abs(42-street);
}

function distanceFromHqInFeet(street){

return distanceFromHqInBlocks(street)*264;

}

function distanceTravelledInFeet(start,destination){

 return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start,destination){

 let distance = distanceTravelledInFeet(start,destination)
    if(distance<=400){
        return 0;
    }else if(distance<=2000){
        return Math.abs(distance-400)*0.02;
    }else if(distance<=2500){
        return 25;
    }else{
     
      return 'cannot travel that far';
    }
}


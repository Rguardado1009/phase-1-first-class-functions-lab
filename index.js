const returnFirstTwoDrivers = function(drivers){
   return drivers.slice (0, 2);
}

const returnLastTwoDrivers = function(lastDrivers){
    return lastDrivers.slice (-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function fareMultiplier(fare){
        return fare*integer;
    }

}

const fareDoubler = function(number){
    return number*2;
}

const fareTripler = function(x){
    return x*3;
}


function selectDifferentDrivers(arrayOfDrivers, driving){
        return driving(arrayOfDrivers);

}
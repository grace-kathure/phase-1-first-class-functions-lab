// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function (){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (x){
    return function (fares){
        return fares * x
    }
}
createFareMultiplier()()

const fareDoubler = function(fares){
    return fares * 2
}

const fareTripler =function(fares){
    return fares * 3
}

const selectDifferentDrivers = function (drivers, fun1){
    if(fun1 === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    }else if(fun1 === returnLastTwoDrivers){
        return drivers.slice(2)
    }
    
}
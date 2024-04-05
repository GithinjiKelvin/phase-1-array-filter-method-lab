// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// const driverArray = []
// function findMatching(collection, namefilter){
//     for(const driver of collection){
        
//         if(driver === namefilter){
//             // return driver
//             // console.log(driver)
//             driverArray.push(driver)
            
//         }
//         //  console.log(driverArray)
//     }
//     // return driverArray
//     console.log(driverArray)
// }
//  findMatching(drivers, 'Bobby')
//  findMatching(drivers, 'Sammy')
//  console.log(driverArray)


function findMatching(collection, namefilter){
    return collection.filter(
        (result) => result.toLowerCase() === namefilter.toLowerCase()
    );
}


function fuzzyMatch(collection, nameString){
    return collection.filter((result) => 
    result.toLowerCase().indexOf(nameString.toLowerCase())===0)
}

function matchName(collection, nameDetails){
    return collection.filter((result) => result.name===nameDetails)
}
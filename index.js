// Code your solution here
function findMatching(drivers, name) {
    let matchedDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return matchedDrivers;
}

function fuzzyMatch(drivers, str) {
    let fuzzyMatchedDrivers = drivers.filter(driver => driver.slice(0,2) === str)
    return fuzzyMatchedDrivers;
}

function matchName(drivers, name) {
    let matchedNames = drivers.filter(driver => driver.name === name)
    return matchedNames;
}
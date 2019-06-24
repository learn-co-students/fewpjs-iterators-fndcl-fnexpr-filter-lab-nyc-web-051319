// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => driver[0].toUpperCase() + driver.slice(1) === name)
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver[0] + driver[1, letters.length - 1] === letters)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}

// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(driver => {
    return driver[0].toUpperCase() + driver.slice(1) === string;
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    return driver.slice(0,2) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string;
  });
}

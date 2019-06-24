// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch(drivers, letter){
  return drivers.filter(name => {
    return name.split('').slice(0,2).join('').toLowerCase() === letter.toLowerCase()
  })
}

function matchName(drivers, name){
  return drivers.filter(info => {
    return info.name === name
  });
}

function findMatching (drivers, string) {
  let matching_drivers = drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase();
  })
  return matching_drivers;
}

function fuzzyMatch (drivers, string) {
  let matching_drivers = drivers.filter(name => {
    return name.startsWith(string);
  })
  return matching_drivers;
}

function matchName (drivers, string) {
  let matching_driver = drivers.filter(driver => {
    return driver.name.toLowerCase() === string.toLowerCase();
  })
  return matching_driver;
}

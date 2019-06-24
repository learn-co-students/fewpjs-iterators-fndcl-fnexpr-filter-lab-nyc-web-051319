const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,string) {
  return drivers.filter(person => person.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers,string){
return drivers.filter(person => person.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(drivers, string){
return drivers.filter(person => person.name.toLowerCase()  === string.toLowerCase() )
}

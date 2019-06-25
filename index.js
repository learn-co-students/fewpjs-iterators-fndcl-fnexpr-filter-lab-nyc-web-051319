function findMatching(drivers, string){
    return drivers.filter(el => el.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(el => el.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(drivers, string){
    return drivers.filter(el => el.name.toLowerCase() === string.toLowerCase() )
}
const findTheOldest = function(people) {
    return people.reduce((oldest,person)=>checkOldest(oldest,person),people[0])
} 
const checkOldest= function(oldest, person){ 
    let newAge = getAge(person.yearOfDeath, person.yearOfBirth); 
    let oldestAge = getAge(oldest.yearOfDeath,oldest.yearOfBirth)
    console.log(`${oldest.name}: ${oldestAge}, ${person.name}:${newAge}`)
    if (oldestAge <newAge){ 
        return person; 
    }
    return oldest;
}

const getAge= function(deathYear,birthYear){ 
    const date = new Date();  
    if (!deathYear){
        return date.getFullYear()-birthYear; 
    }
    return deathYear-birthYear; 
}
// Do not edit below this line
module.exports = findTheOldest;

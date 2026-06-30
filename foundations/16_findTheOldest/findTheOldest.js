const findTheOldest = function (arr) {
    let oldest = arr[0];
    for (let person of arr) {
        if (getAge(person) > getAge(oldest))
            oldest = person;
    }
    return oldest;
};

function getAge(person) {
    let yearOfDeath;
    if (person.yearOfDeath == undefined) {
        yearOfDeath = new Date().getFullYear();
    } else yearOfDeath = person.yearOfDeath;
    return (yearOfDeath - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;

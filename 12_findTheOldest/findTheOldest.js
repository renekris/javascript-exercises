const findTheOldest = obj => {
    // const oldest = obj.sort((a, b) => {
    //     if (typeof a.yearOfDeath === 'undefined') { a.yearOfDeath = new Date().getFullYear(); }
    //     if (typeof b.yearOfDeath === 'undefined') { b.yearOfDeath = new Date().getFullYear(); }
    //     const aAge = a.yearOfDeath - a.yearOfBirth;
    //     const bAge = b.yearOfDeath - b.yearOfBirth;
    //     let oldest = aAge > bAge ? -1 : 1;
    //     return oldest;
    // });
    // return oldest.shift();

    return obj.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge < currentAge ? person : oldest;
    })
};

const getAge = (birth, death) => {
    if (!death) { death = new Date().getFullYear(); }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

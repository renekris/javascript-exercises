const findTheOldest = obj => {
    // obj.reduce((oldest, person, index, array) => {
    //     array.sort((a, b) => {

    //     })
    //     return person.yearOfDeath - person.yearOfBirth
    // }, 0);
    const oldest = obj.sort((a, b) => {
        if (typeof a.yearOfDeath === 'undefined') { a.yearOfDeath = new Date().getFullYear(); }
        if (typeof b.yearOfDeath === 'undefined') { b.yearOfDeath = new Date().getFullYear(); }
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        let oldest = aAge > bAge ? -1 : 1;
        return oldest;
    });
    return oldest.shift();
};

// Do not edit below this line
module.exports = findTheOldest;

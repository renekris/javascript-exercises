const getTheTitles = obj => {
    let bookTitles = [];
    obj.forEach(element => {
        bookTitles.push(element['title']);
        // bookTitles.push(element.title); Or like this
    });
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

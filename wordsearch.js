const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    const transpose = letters[0].map((column, element) => letters.map(row => row[element]));
   
    const verticalJoin = transpose.map(ls => ls.join(''));

    if (word.length === 0 || letters.length === 0) {
        return false;
    }

    for (l of horizontalJoin) {
        if (l === word) {
            return true;
        }
        for (l of verticalJoin) {
            if (l === word) {
                return true;
            }
        }
    }   
    return false;
};

module.exports = wordSearch
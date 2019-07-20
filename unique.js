// return true if all values are unique

const unique = str => {
    let isUnique = true;

    // reduce char array to object with chars keys and chars numbers occurancies value 
    str.split('').reduce((obj, current) => {
        if(obj[current]) {
            obj[current] = obj[current] + 1;
            isUnique = false; // this char appear more than 1 time
            return obj;
        } else {
            obj[current] = 1;
            return obj
        }
    }, {})

    return isUnique;
}
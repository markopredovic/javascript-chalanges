// first word with greatest number of repeated letters

// word -> number (max repeated)
const wordRepeatedCount = word => {
    let res = 1;

    const objRepeatedCount = word.split('').reduce((obj, current) => {
        if(obj[current]) {
            obj[current]++;
            return obj;
        } else {
            obj[current] = 1;
            return obj
        }
    }, {})

    for(const prop in objRepeatedCount) {
        if(objRepeatedCount[prop] > res) {
            res = objRepeatedCount[prop];
        }
    }

    return res;
}


const repeatedLetters = sentence => {
    let res = {
        max_count: 0,
        index: -1
    }

    sentence.split(' ').forEach((word, index) => {
        let count = wordRepeatedCount(word);

        if(count > res.max_count) {
            res.max_count = count;
            res.index = index
        }

    });

    return res;
}

// finding longest word in sentence

const longestWord = sentence => {
    const words = sentence.split(' ');

    return words.reduce((res, current) => {
        return current.length > res.length ? current : res
    })
} 
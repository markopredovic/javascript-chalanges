const palindrome = str => {
    // remove white space
    str = str.split(' ').join('');

    let is_palindrome = true;
    const n = str.length;
    const is_even = n % 2 === 0;
    const half = is_even ? n / 2 : (n + 1) / 2; 

    for (let i = 0; i < half; i++) {
        if(str[i] !== str[n - 1 - i]) {
            is_palindrome = false;
            break;
        }
    }

    return is_palindrome;
}
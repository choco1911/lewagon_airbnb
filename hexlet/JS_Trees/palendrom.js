
const isPalendrome = (str) => {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalendrome(str.slice(1,str.length-1 ));
}

const result = isPalendrome('absba');
console.log(result);

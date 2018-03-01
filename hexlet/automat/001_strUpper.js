

// simple imperative way

export default (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++){
        const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i-1] === ' ');
        result += shouldBeBig ? str[i].toUpperCase() : str[i];

    }
    return result;
}

// automat way

export default (str) => {
    let result = '';
    let state = 'outside'; // outside, inside
    for (let i = 0; i < str.length; i++) {
        // state inside or outside word
        switch (state) {
            case 'inside':
                if (str[i] === ' ') {
                        state = 'outside';
                }
                result += str[i];
                break;
            case 'outside':
                if (str[i] !== ' ') {
                    result += str[i].toUpperCase();
                    state = 'inside';
                } else {
                    result += str[i];
                }
                break;
        }
    }
    return result;

};

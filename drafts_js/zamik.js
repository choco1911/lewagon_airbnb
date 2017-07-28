
const getMethod = (x, y) => {

    return (f) => {
        
        const loop = (x, y) => {
            console.log(x);     
            if (x > y) {
                return f(x);
            }
            return loop(x+1, y); 
        };
        return loop(x,y);
        
    };


};


square = getMethod(5,6)((num) => num * num );
console.log(square);

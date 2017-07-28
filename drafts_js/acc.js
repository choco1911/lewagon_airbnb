
const game = (name1, name2) => {
    
    const iter = (health1, name1, health2, name2, order, log) => {
        if (health1 <= 0 ) {
            
            return log + `${name1} ${health1} ${name2} ${health2}`;
        }
        newHealth = health2 - 1; 
                
        //console.log(`'${health1} ${name1} ${health2} ${name2}`);
        const newLog = log + `${name1} ${health1} ${name2} ${health2}\n`;

        return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog );
    }
    const StartHealth = 10 ;
    // const log = `${name1} ${StartHealth} ${name2} ${StartHealth}\n` ;
    const log = ''; 
    return iter(StartHealth, name1, StartHealth, name2, 1, log);

}

console.log(game('Vasya', 'Petya'));

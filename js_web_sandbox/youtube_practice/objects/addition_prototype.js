const food = {
    init: function(type) {
        this.type = type
    },
    eat: function() {
        console.log('you ate the ' + this.type)
    }
}

/*
const  carrot = Object.create(food)
*/

/*
food.eat = function() {
    console.log('YOU TOOOTALLY ATE THE ' + this.type.toUpperCase())
}
*/



const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()
food.type = 'dfdafafsdafsdfsa'
waffle.eat()

/*
carrot.init('carrot')
carrot.eat()
*/

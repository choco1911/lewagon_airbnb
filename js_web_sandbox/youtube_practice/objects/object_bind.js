function talk1(){
    // в данном контексте this ссылается на глобальный объект
    // в браузере это объект window
    // console.log(this);
    console.log(this.sound); // в общем виде возращает undefined
}

// bound - граница, ограничивать

let boromir = {
    sound: 'One does not simply walk inot mordor!'
}

let talkBoundToBoromir = talk1.bind(boromir);
talkBoundToBoromir();
talk1();


// variant 2
let talk = function() {
    console.log(this.sound); // в общем виде возращает undefined
}

let boromir2 = {
//    speak: talk,
    sound: 'One does not simply walk inot mordor!'
}

// boromir2.speak();

boromir.speak = talk.bind(boromir2);
let blabber = boromir.speak;
blabber();



// just example not for production

let boromir4 = {
    blabber: talk,
    sound: 'One does not simply walk inot mordor!'
}

let gollum = {
    jabber: boromir4.blabber,
    sound: 'My precioussss'
}

gollum.jabber();

'use strict';

var formElement = document.forms['searchform'];
var guests = formElement['searchform-guests-number'];
var rooms = formElement['searchform-guests-rooms'];
var btnSub = document.getElementsByClassName('searchform-submit')[0];

//console.log(btnSub);

guests.min = 1;
guests.max = 6;

//console.log(btnSub.getAttribute('disabled'));
//btnSub.setAttribute('disabled','disabled');

var MAX_GUESTS_PER_ROOM = 3;

function setMinAndMaxRooms(roomsElement, guestsNumber) {
    roomsElement.min = Math.ceil(guestsNumber / MAX_GUESTS_PER_ROOM);
    roomsElement.max = guestsNumber;
}

// setting default values on load
guests.value = 2;
setMinAndMaxRooms(rooms, guests.value);
rooms.value = rooms.min;

// onchange reaction
guests.onchange = function() {
    setMinAndMaxRooms(rooms, guests.value);
}


// evt also e - object is event that happend
formElement.onsubmit = function(evt) {

    evt.preventDefault();
}

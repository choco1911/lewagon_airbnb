
// constractor for class Track
var Track = function (params) {
    this.name = params.name;
    this.url = params.url;

// if we using method inside Class instand of prototype 
// We can't change fuction
// There is an empty object in Track.prototype, but we still have this method
// method
//    this.playTrack = function () {
//        console.log('We started plaing', this.name);
//    };
}; 

// using prototype
// if we run Track.prototype - we'll get  - Track { playTrack: function }
// and we can change prototype function, may be later in code 
Track.prototype.playTrack = function () {
        console.log('We started plaing', this.name);
};


var track01 = new Track({
    name: 'track01',
    url: 'track01.mp3'
});

var track02 = new Track({
    name: 'track02',
    url: 'track02.mp3'
});

console.log(track01);
console.log(track02);

console.log(track01.name);
console.log(track01.url);
console.log(track02.name);
console.log(track02.url);

track01.playTrack();
track02.playTrack();




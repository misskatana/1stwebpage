// this is comment tag
var pics = [
    "Backgrounds/Doggo.png",
    "Backgrounds/Ducky.png",
    "Backgrounds/Empire.jpg",
    "Backgrounds/Garden.png",
    "Backgrounds/Home.png",
    "Backgrounds/Hubby.png",
    "Backgrounds/Kids.png",
    "Backgrounds/Library nook.png",
    "Backgrounds/Rig.png",
    "Backgrounds/Standy.png",
    "Backgrounds/Kino_Hermes"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
    if (counter === 11) {
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});
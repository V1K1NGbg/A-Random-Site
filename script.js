var viewport_width = window.innerWidth;
var width;
var nav = false;
var randomcolorset = (Math.floor(Math.random() * 6) + 1);
var randommeme = (Math.floor(Math.random() * 5) + 1);



function size() {
    viewport_width = window.innerWidth;
    if (nav) {
        if (viewport_width <= 900) {
            width = "150px"
        } else {
            width = "15%"
        }
    } else {
        width = "0"
    }
    document.getElementById("nav").style.width = width;
    document.getElementById("main").style.marginLeft = width;
}

var r = document.querySelector(':root');

switch (randomcolorset) {
    case 1:
        r.style.setProperty('--color1', '#33FFFF');
        r.style.setProperty('--color2', '#80FFFF');
        r.style.setProperty('--color3', '#C0FFFF');
        r.style.setProperty('--color4', '#E0FFFF');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
    case 2:
        r.style.setProperty('--color1', '#3333FF');
        r.style.setProperty('--color2', '#8080FF');
        r.style.setProperty('--color3', '#C0C0FF');
        r.style.setProperty('--color4', '#E0E0FF');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
    case 3:
        r.style.setProperty('--color1', '#33FF33');
        r.style.setProperty('--color2', '#80FF80');
        r.style.setProperty('--color3', '#C0FFC0');
        r.style.setProperty('--color4', '#E0FFE0');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
    case 4:
        r.style.setProperty('--color1', '#FF3333');
        r.style.setProperty('--color2', '#FF8080');
        r.style.setProperty('--color3', '#FFC0C0');
        r.style.setProperty('--color4', '#FFE0E0');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
    case 5:
        r.style.setProperty('--color1', '#333333');
        r.style.setProperty('--color2', '#808080');
        r.style.setProperty('--color3', '#C0C0C0');
        r.style.setProperty('--color4', '#E0E0E0');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
    case 6:
        r.style.setProperty('--color1', '#FF33FF');
        r.style.setProperty('--color2', '#FF80FF');
        r.style.setProperty('--color3', '#FFC0FF');
        r.style.setProperty('--color4', '#FFE0FF');
        r.style.setProperty('--color5', '#FFFFFF');
        break;
}

switch (randommeme) {
    case 1:
        document.getElementById("meme").src = "random1.jpg"
        break;
    case 2:
        document.getElementById("meme").src = "random2.jpg"
        break;
    case 3:
        document.getElementById("meme").src = "random3.jpg"
        break;
    case 4:
        document.getElementById("meme").src = "random4.jpg"
        break;
    case 5:
        document.getElementById("meme").src = "random5.jpg"
        break;
}

window.onresize = function () {
    size();
};

function openclose() {
    if (nav) {
        nav = false;
        document.getElementById("navtext").innerHTML = "&#9776; Open"
    } else {
        nav = true;
        document.getElementById("navtext").innerHTML = "&#9776; Close"
    }
    size();
}
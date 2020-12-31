
function weCoders() {
document.getElementById("tag1").textContent= "We are coders!";
}

function weDevelopers() {
document.getElementById("tag1").textContent= "Developers";
}

function addImage() {
    var img = new Image(); 
    img.src = "images/fist.png";
    document.getElementById("tag2").appendChild(img);
    }

function changeTextColor() {
    document.getElementById("tag1").style.color = "blue";
    }

function changeFontSize() {
    document.getElementById("tag1").style.fontSize = '40px';
    }

function hideImage() {
    var img = new Image(); 
    img.src = "images/fist.png";
    document.getElementById("tag2").textContent="";
    }

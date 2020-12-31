function hideMrJeff() {
    document.getElementById("mrJeff").style.visibility = 'hidden';
      }

function meetMrJeff() {
    document.getElementById("mrJeff").style.visibility = 'visible';
}

function changeFont() {
    document.getElementById("mrJeff").style.fontFamily = 'Arial, sans-serif';
}

function changeTextColor() {
    document.getElementById("mrJeff").style.color = "blue";
}

function addImage() {
    var img = new Image(); 
    img.src = "images/fist.png";
    document.getElementById("picture").appendChild(img);
    }
 
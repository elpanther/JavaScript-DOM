function loopThrough() {
var allElements = document.getElementsByTagName("*");  
var allElementsLength = allElements.length;
var contentDivs = document.getElementsByTagName("div");
var allItems = contentDivs.length;


var headerType = contentDivs.childNodes;
var txt = "";
var i;
var c = document.body.childNodes;

for (let i = 0; i < contentDivs.length; i++) {
    let item = contentDivs[i];
    console.log(item);
  }

/*if (c.nodeName == contentDivs){  
    for (i = 0; i < allItems.length; i++) {
          txt = txt + headerType[i].nodeName;
          console.log(headerType[i].nodeName);
        }
        document.write(c.nodeName);
    }*/
   //document.getElementById("demo").innerHTML = txt;


console.log(headerType);
document.write(allElementsLength);
/*
for (var i = 0; i < allElementsLength; i++) {
  document.write(allElements[i].nodeName + "<br>");
}

console.log(allElementsLength);



*/
    
   
}




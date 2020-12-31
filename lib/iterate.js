function loopThrough() {
var contentDivs = document.getElementsByTagName("div");
var tOCList = "";

for (let i = 0; i < contentDivs.length; i++) {
    let item = contentDivs[i];
   tOCList = tOCList + item.innerHTML;
    console.log(item);  
  }

  document.write(tOCList);
  
}




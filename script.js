// if you want to see the document hierarchy in the inspect boxElement
// console.dir(document);   ---- use this
var itemLists = [];
var itemPrices = [];
var itemQuant = [0,0,0,0,0];
document.getElementById("totalButton").disabled = true;
function addCart(itemName, price) {
  var boxElement2 = document.getElementById("checkOut");
  itemLists.push(itemName);
  itemPrices.push(price);
  
  boxElement2.innerHTML += "<p>" + itemName + "  $" + price + "</p>";
  document.getElementById("totalButton").disabled = false;
}


var total=0;
function getTotal() {
  
  var totalPlace = document.getElementById("total");
  for(var i = 0; i < itemPrices.length; i++) {
    //boxElement2.innerHTML += itemLists[i] + "    $" + itemPrices[i];
    
    total += itemPrices[i];
  }
  totalPlace.textContent ="Total: $" + total;
  document.getElementById("totalButton").disabled = true;
 // button[4].javaEnabled = false;
  document.getElementById("button0").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
}


function resetAll() {
  var totalPlace2 = document.getElementById("total");
  for(var i=0; i < itemPrices.length; i++){
    document.getElementById("checkOut").innerHTML = " ";
    
  }
  itemPrices=[];
  itemLists = [];
  document.getElementById("totalButton").disabled = true;
  totalPlace2.textContent = "Total: ";
  total = 0;
  document.getElementById("button0").disabled = false;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
  document.getElementById("button3").disabled = false;
  document.getElementById("button4").disabled = false;
  
}

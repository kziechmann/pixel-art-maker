document.addEventListener("DOMContentLoaded", function(event) {
  // populate a table of pixels
  let table = document.createElement("table")
  table.classList = "table table-bordered"
  let tableBody = document.createElement("tbody")
  table.appendChild(tableBody)

  for(let pixelRows=1;pixelRows<=20;pixelRows++) {
    let rowOfPixels = document.createElement("tr")
    rowOfPixels.scope = "row"
      for(let pixels =1;pixels<=20;pixels++) {
        let pixel = document.createElement("td")
        pixel.classList = "white"
        pixel.height = "2px"
        pixel.width = "2px"
        pixel.addEventListener("click", function(event){
          changePixelColor(event.target)
        });
        rowOfPixels.appendChild(pixel)
      }

    tableBody.appendChild(rowOfPixels)

  }
  // append the table to the document
  console.log(table)
  document.getElementById("tableContainer").appendChild(table)
  console.log(document.getElementById("tableContainer"))

  // Color Selector interactivity
  let pickedColor = "White"
  let red = document.getElementById("red")
  red.addEventListener("click", function(event){
    pickedColor="red"
  });
  let orange = document.getElementById("orange")
  orange.addEventListener("click", function(event){
    pickedColor="orange"
  });
  let yellow = document.getElementById("yellow")
  yellow.addEventListener("click", function(event){
    pickedColor="yellow"
  });
  let green = document.getElementById("green")
  green.addEventListener("click", function(event){
    pickedColor="green"
  });
  let cyan = document.getElementById("cyan")
  cyan.addEventListener("click", function(event){
    pickedColor="cyan"
  });
  let blue = document.getElementById("blue")
  blue.addEventListener("click", function(event){
    pickedColor="blue"
  });
  let purple = document.getElementById("purple")
  purple.addEventListener("click", function(event){
    pickedColor="purple"
  });let black = document.getElementById("black")
  black.addEventListener("click", function(event){
    pickedColor="black"
  });let white = document.getElementById("white")
  white.addEventListener("click", function(event){
    pickedColor="white"
  });

  // Change pixels when clicked
  function changePixelColor(pixelToChange){
    pixelToChange.classList = pickedColor
  }

});

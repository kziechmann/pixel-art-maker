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
  let colors = ["red","orange","yellow","green","cyan","blue","purple","black","white"]
  for(let color = 0; color<colors.length;color++) {
    let currentColor =  document.createElement("div")
    currentColor.style.height = "30px"
    currentColor.style.width = "150px"
    currentColor.style.margin = "0 auto"
    currentColor.classList = colors[color]
    currentColor.addEventListener("click", function(event){
      pickedColor = colors[color]
    });
    document.querySelector("#palette").appendChild(currentColor)
  }
  // Change pixels when clicked
  function changePixelColor(pixelToChange){
    pixelToChange.classList = pickedColor
  }

});

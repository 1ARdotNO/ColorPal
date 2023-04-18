/* script.js */
var colorPaletteElement = document.getElementById('colorPalette');

document.getElementById('generatePaletteButton').addEventListener('click', function() {
  // Clear existing color palette
  colorPaletteElement.innerHTML = '';

  // Generate random RGB values for each color in the palette
  for (var i = 0; i < 5; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var colorBox = document.createElement('div');
    colorBox.className = 'colorBox';
    colorBox.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    colorBox.addEventListener('click', function() {
      // Copy the color code to clipboard when color box is clicked
      var colorCode = this.style.backgroundColor;
      navigator.clipboard.writeText(colorCode).then(function() {
        alert('Color code ' + colorCode + ' copied to clipboard!');
      }).catch(function(err) {
        console.error('Failed to copy color code to clipboard: ', err);
      });
    });
    colorPaletteElement.appendChild(colorBox);
  }
});

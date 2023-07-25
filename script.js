
const elemento = document.getElementById("retangulo")
const colorRange = document.getElementById("line_Color")
const brilhoInput = document.getElementById("line_Bright")
const contrasteInput = document.getElementById("line_Contrast")
const sombraInput = document.getElementById("sombra")

function getGradientColor(value, min, max){
  const percentage = (value - min) / (max - min);
  const colors = [
    "#FF0000",    "#FF4000",    "#FF7F00",    "#FFBF00",    "#FFFF00",   "#BFFF00",    "#7FFF00",    "#40FF00",    "#00FF00",    "#00FF40",    "#00FF7F",    "#00FFBF",    "#00FFFF",    "#00BFFF",    "#007FFF",    "#0040FF",     "#0000FF",    "#4000FF",    "#7F00FF",    "#BF00FF",    "#FF00FF",    "#FF00BF",    "#FF007F",    "#FF0040",    "#FF0000",
  ];

  const index = Math.floor(percentage * (colors.length - 1));
  return colors[index];
}
colorRange.addEventListener("input", function(){
  const hue = this.value;
  const gradientColor = getGradientColor(hue, parseInt(this.min), parseInt(this.max));
  elemento.style.backgroundColor = gradientColor;
  elemento.style.boxShadow = `10px 10px 20px ${gradientColor}`
  });
 
  brilhoInput.addEventListener("input", () => {
    const brilho = brilhoInput.value
    elemento.style.filter = `brightness(${brilho}%)`
  })

  contrasteInput.addEventListener("input", () => {
    const contraste = contrasteInput.value
    elemento.style.filter = `contrast(${contraste}%)`
  })

 

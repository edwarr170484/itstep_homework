function changeColor() {
   let startColor = "pink";
   
   setInterval(function() {
        document.body.style.backgroundColor = startColor;
        startColor = (startColor === "pink") ? "green" : "pink";
   }, 3000);

}
changeColor();
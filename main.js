canvas=
document.getElementById("my_canvas");
ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2 ;
ctx.arc(170, 163, 40, 0, 2*Math.PI);
ctx.stroke();
  




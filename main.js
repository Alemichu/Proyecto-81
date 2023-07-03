Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 10;
ctx.rect(175, 143, 430, 200);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 2;
ctx.arc(290, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(390, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "darkred";
ctx.lineWidth = 2;
ctx.arc(490, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "darkgreen";
ctx.lineWidth = 2;
ctx.arc(440, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "darkorange";
ctx.lineWidth = 2;
ctx.arc(340, 260, 40, 0, 2 * Math.PI);
ctx.stroke();


var Person = function(name) {
  this.name = name;
};

Person.prototype.display = function(greeting) {
  console.log(greeting + " " + this.name);
}


var new_person = new Person('Nate');
new_person.name;  //assign Nate to name
new_person.display("Good morning"); //returns Good morning Nate

//Load the canvas
window.onload = function() {
  animate(canvas, ctx);
};

function animate(canvas, ctx) {

  // Get canvas center
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  // Get delta time for animation normalization
  var now = Date.now(),
    dt = (now - _lastTime) / 1000.0;

  _angle += 30 - dt;



  // Clear context/canvas, right before you draw the new canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // set line color and alpha level
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(100,200);
  ctx.lineTo(300,200);
  ctx.stroke();
  ctx.closePath();

  //Set our lastTime variable which is used to determine the time delta.

  _lastTime = now;


}

//Request new frame
window.requestAnimationFrame(function() {
  animate(canvas, ctx);
});

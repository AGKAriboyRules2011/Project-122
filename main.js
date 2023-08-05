x = 0;
y - 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementsById("status").innerHTML = "System is listening please speak";
    recognition.start(); 
}

recognition.onresult = function(event) {

console.log(event);

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
      for(var i = 1; 1 <= to Number; i++)
      {
        x = Math.floor(Math.random() * 700)
        y = Math.floor(Math.random() * 400)
        image(apple, x, y, 50, 50);
    if(content =="apple")
    {
        x = Math.floor(Math.random() * 700)
        y = Math.floor(Math.random() * 400)
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rect = "set";
    }
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x,y,radius);
    document.getElementsById("status").innerHTML = "applr is drawn. ";
    draw_
  }  
}
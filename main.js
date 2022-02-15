 var speech=speechRecognisation;
 var  Recognisation= new speechRecognisation();
 var camera=document.getElementById("camera");
 function start(){
   document.getElementById(textbook)
 }
 var SpeechRecognisation=window.webkitSpeechRecognisation;
 var recognisation= new SpeechRecognisation();
 var camera=document.getElementById("camera")

 function start(){
    document.getElementById("textbook").innerHTML="";
    recognisation.start();
 }
var recognisation.onresult=function(event){

   var content=event.results[0][0].transcript;
  document.getElementById("textbook").innerHTML=content;
  speak()
  if(content=="take my selfie"){
  speak()
  }
}
function speak(){
var synth= SpeechSynthesis;

speak_data="taking your selfie in five seconds";

var utter= new SpeechSynthesisUtterance(speak_data);

synth.speak(utter);
Webcam.attach(camera)

setTimeout(function(){
take_snapshot()
save();
},3000)
}

Webcam.set({
height:250,
width:360,
image_format:'png',
png_quality:9
})

function take_snapshot(){
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri'">';
  })
}

function Normal_button(){
alert("normalbutton");
}

function setTimeout(){
  setTimeout(function(){
  alert("set Timeout button")
  },3000)
}

function save(){
image=document.getElementById("selfie_image").src;
link=document.getElementById("link");
link_href=image;
image.click()
}
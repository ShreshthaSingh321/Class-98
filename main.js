var SpeachRecognition = window.webkitSpeachRecognition;

var recognition = new SpeachRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.result[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}
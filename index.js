// DEFINING THE VARIABLES AND CONSTANTS
const startBtn = document.querySelector('#start');
const output = document.querySelector('#output');
const assistent = document.querySelector('#assistent');
// INSTANTIATING THE WEBKIT SPEECH RECOGNITION
const recognition = new webkitSpeechRecognition();

// DEFINING THE FUNCTION
function start() {

    // DEFINING THE SPEECH RECOGNITION PROPERTIES
    recognition.interimResults = false;
    recognition.lang = "pt-BR";
    recognition.continuous = true;

    // STARTING THE SPEECH RECOGNITION
    recognition.start();

    // DEFINING THE SPEECH RECOGNITION EVENTS

    // ON SPEECH RECOGNITION START
    recognition.onstart = function() {
        assistent.innerHTML = "Estou te ouvindo...";

        // GETTING THE RECOGNITION RESULT
        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event
                .results[last][0]
                .transcript
                .toLowerCase();
            output.innerHTML = command;

            // CREATING JSON FILE WITH THE RECOGNITION RESULT
            var data = {
                "command": command
            };
            var json = JSON.stringify(data);
            var fs = require('fs');
            fs.writeFile('command.json', json, 'utf8', callback);

            // DEFINING THE CALLBACK FUNCTION



            // ON SPEECH RECOGNITION END
            recognition.onend = function() {
                assistent.innerHTML = "Não estou mais te ouvindo...";
                console.log("Não estou mais te ouvindo...");
            }

            // recognition.onresult = (event) => {
            //     const results = event.results;
            //     const transcript = results[results.length - 1][0].transcript;
            //     output.textContent = transcript;
            //     if (results[results.length - 1].isFinal) {
            //         var audio = document.createElement('audio');
            //         if (transcript === 'Alex' || transcript === 'alex') {
            //             assistent.textContent = 'Diga doutor, diga!';
            //             audio.src = "./audio/diga.ogg";
            //             audio.play();

            //             if (transcript.includes('Bom dia') || transcript.includes('bom dia')) {
            //                 assistent.textContent = 'Bom dia doutor!';
            //                 audio.src = "./audio/bom dia.ogg";
            //                 audio.play();
            //             }
            //         } else {
            //             console.log("Não entendi");
            //         }
            //     }
            // };
        }
    }
}

startBtn.addEventListener('click', start);
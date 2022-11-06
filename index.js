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
    recognition.continuous = false;

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

            // ON SPEECH RECOGNITION END
            recognition.onend = function() {
                assistent.innerHTML = "Não estou mais te ouvindo...";
                console.log("Não estou mais te ouvindo...");
            }

            var audio = document.createElement('audio');
            var commandName = []

            // GETTING THE COMMAND NAME

            for (var i = 0; i < 4; i++) {
                commandName.push(command[i]);
            }

            commandName = commandName.join("");
            command = command.replace(commandName, "");
            if (commandName === "alex" && command === "") {
                audio.src = "audio/diga.ogg";
                audio.play();
            } else if (commandName === "alex" && command.includes("horas")) {
                audio.src = "audio/horas.ogg";
                audio.play();
            } else if (commandName === "alex" && command.includes("dia")) {
                audio.src = "audio/bom dia.ogg";
                audio.play();
            } else if (commandName === "alex" && command.includes("tarde")) {
                audio.src = "audio/boa tarde.ogg";
                audio.play();
            } else if (commandName === "alex" && command.includes("dólar")) {
                
            }
        }
    }
}

startBtn.addEventListener('click', start);
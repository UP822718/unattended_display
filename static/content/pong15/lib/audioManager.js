var
    batSound,
    winSound,

    prepAudio = function() {
        batSound = new Audio('audio/bat.ogg');
        winSound = new Audio('audio/win.ogg');

        document.addEventListener(
            "collision",
            function() {
                batSound.play();
            }
        );

        document.addEventListener(
            "score",
            function() {
                winSound.play();
            }
        );

    };

window.addEventListener("load", prepAudio);

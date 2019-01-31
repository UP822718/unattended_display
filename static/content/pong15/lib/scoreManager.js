var
    players = {};

    registerScore = function(x) {
        var player = document.getElementById(x.detail);
        player.innerHTML = 1+parseInt(player.textContent);
    };


    prepScorer = function() {
        document.addEventListener("score", registerScore);
    };

window.addEventListener("load", prepScorer);

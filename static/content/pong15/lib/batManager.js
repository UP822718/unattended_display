var
    offset=150,
    w=(screen.width / 2),

    updateBatPosition = function(e) {
        var bat;
        bat =  (e.clientX < w) ? things.bats.l : things.bats.r;
        offset = Math.max(0, Math.min(600,e.pageY));
        bat.y = offset;
        bat.elem.setAttribute("y", bat.y);

    },

    prepBats = function() {
        document.addEventListener("mousemove", updateBatPosition);
    };

window.addEventListener("load", prepBats);

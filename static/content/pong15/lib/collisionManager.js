var checkCollisions = function(compare) {

    var currentBall, currentBat;

    for (var ball=compare.balls.length-1; ball>=0; ball--) {
        currentBall = compare.balls[ball];

        //screen top and bottom
        if ((currentBall.y <= 10) || (currentBall.y > 890)) {
            currentBall.yspeed = -currentBall.yspeed;
        }

        //screen left
        if ((currentBall.x <= 10)) {
            document.dispatchEvent(
                new CustomEvent("score", { detail: "p2"})
            );
            currentBall.resetBall();
        }

        //screen right
        if ((currentBall.x >= 1590)) {
            document.dispatchEvent(new CustomEvent("score", { detail: "p1"}));
            currentBall.resetBall();
        }


        for (var c in compare.bats) {
            var currentBat = compare.bats[c];

            if (currentBat.intersectsWith(currentBall.x, currentBall.y)) {
                currentBall.flip();
                currentBall.move();
                document.dispatchEvent(new CustomEvent("collision"));
                console.log("collision");
            }

        }
    }



};

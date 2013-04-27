var fxs = "easeInBounce easeOutBounce easeInOutBounce jswing";

var round = 1;

function setClock() {
    $("#time").countdownui("destroy");
    $("#time").countdownui({
        date: new Date((new Date()).getTime() + 60000*0.5), //Counting up FROM a date
        onComplete: function( event ) {
            nextRound();
        },
        yearsAndMonths: false,
    });
}


function prevRound() {
    round = round - 1;
    resetRound();
}

function nextRound() {
    round = round + 1;
    resetRound();
}

function resetRound() {
    $('#round').html(round);
    setClock();
}

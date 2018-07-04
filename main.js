function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// Date of the meeting
var date = "2018-07-03";

// Member's name and number of referrals on each row
var members = {
    'Alan Law':3,    
    'Alex Shum':5,
    'Alexis Chung':1,
};

var tickets = [];

$("span#date").text(date);

for (var member in members){
    // console.log(member+": "+members[member]);
    for (var i=0; i<members[member]; i++){
        tickets.push(member);
    }
}

function select(pos){
    $(".ticket").removeClass("selected");
    $(".ticket").eq(pos).addClass("selected");
}

for (var ticket of tickets){
    $("#elements").append('<div class="ticket"><span>'+ticket+'</span></div>')
}


var draw = false;

var timer;

$("#shuffle-button").on('click', function(e){
    e.preventDefault();
    shuffle(tickets);
    $('.ticket').remove();
    for (var ticket of tickets){
        $("#elements").append('<div class="ticket"><span>'+ticket+'</span></div>')
    }
});

$("#draw-button").on('click', function(e){
    e.preventDefault();
    draw = !draw;

    if (draw){
        $(this).text('Stop');
        timer = setInterval(function(){
            var seed = Math.floor(Math.random()*tickets.length);
            select(seed);
        },10);
    }
    else {
        $(this).text('Draw');
        clearTimeout(timer);
    }
})

// select(1);
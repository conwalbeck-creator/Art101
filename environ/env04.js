let environmentTitle = "Angel's Weird World";

let count = 0;
let count2 = 0;
let countA = 0;
let countB = 0;

let mainLocation = {
    name: "Porter Dining Hall",
    type: "Dining Hall",
    environmentElements: ["is Porter Dining Hall", "is foggy", "has some grass", "has terrible food", "is home to my friend, Cloud", "lacks joy", "has the worst nachos", "is where my creator lives", "has the market, great stuff there"],
    isMoving: false,
};

let mainEntity = {
    name: "Angel",
    type: "Helpful Entity",
    moods: ["bored", "tired", "sleepy", "listless", "anxious", "restless", "hungry", "irritated", "like you should stop asking questions"],
    isMoving: false,
    favoriteElement: "fog",
};



$("#question1").click(function () {

    count = count + 1;
    countA = countA + 1;

    let arrayPosition = count % mainEntity.moods.length;

    let currentMood = mainEntity.moods[arrayPosition];

    let message = "<p>I am feeling " + currentMood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

$("#question2").click(function () {

    count2 = count2 + 1;
    countA = countA + 1;

    let arrayPosition = count2 % mainLocation.environmentElements.length;

    let currentElement = mainLocation.environmentElements[arrayPosition];

    let message = "<p>This place " + currentElement + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

let rage = " ";

$("#question3").click(function () {


    let message = "<p>You've asked me " + countA + rage + " questions" + ".</p>";

    if (countA < 5) { rage = ""; }
    else if (countA >= 5 && countA < 10) { rage = " annoying"; }
    else if (countA >= 10 && countA < 16) { rage = " frustrating"; }
    else { rage = " stupid"; }

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

function askWeather() {
    let userWeather = prompt("Play God: cloudy, baking, hell, goo, sunny");

    if (!userWeather) return;

    userWeather = userWeather.trim().toLowerCase();

    const overlay = $("#overlay");

    if (userWeather == "cloudy") {
        $("#cloudOutput").html("I like that...");
        overlay.css({
            "background-color": "gray",
            "opacity": "0.3"
        });
    }
    else if (userWeather == "baking") {
        $("#cloudOutput").html("That's meant for cookies...");
        overlay.css({
            "background-color": "orange",
            "opacity": "0.3"
        });
    }
    else if (userWeather == "hell") {
        $("#cloudOutput").html("Too Hot...");
        overlay.css({
            "background-color": "red",
            "opacity": "0.3"
        });
    }
    else if (userWeather == "goo") {
        $("#cloudOutput").html("Ew");
        overlay.css({
            "background-color": "green",
            "opacity": "0.3"
        });
    }
    else if (userWeather == "sunny") {
        $("#cloudOutput").html("blehhh :p");
        overlay.css({
            "background-color": "yellow",
            "opacity": "0.3"
        });
    }
    else {
        $("#cloudOutput").html("What does that mean?");
        overlay.css({
            "background-color": "white",
            "opacity": "0"
        });

    }
}

$("#weatherButton").click(function () {
    askWeather();
});



let following = false;

function isColliding($div1, $div2) {
    const d1Offset = $div1.offset();
    const d1Left = d1Offset.left;
    const d1Top = d1Offset.top;
    const d1Right = d1Left + $div1.outerWidth();
    const d1Bottom = d1Top + $div1.outerHeight();

    const d2Offset = $div2.offset();
    const d2Left = d2Offset.left;
    const d2Top = d2Offset.top;
    const d2Right = d2Left + $div2.outerWidth();
    const d2Bottom = d2Top + $div2.outerHeight();

    return !(d1Right < d2Left || 
             d1Left > d2Right || 
             d1Bottom < d2Top || 
             d1Top > d2Bottom);
}

$("#jerry").hover(
    function () {
        $("#thought").stop(true, true).slideDown(300);
    },
    function () {
        $("#thought").stop(true, true).slideUp(300);
    }
);

$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();

        following = !following;
        $("#jerry").toggleClass("following");
    }
});

$(document).mousemove(function (event) {
    if (following === true) {
        const $jerry = $("#jerry");
        const $scene = $("#scene");
        const $jail = $("#jail");

        const newLeft = event.pageX - $scene.offset().left + 30;
        const newTop = event.pageY - $scene.offset().top + 30;

        $jerry.css({
            left: newLeft,
            top: newTop
        });

        if (isColliding($jerry, $jail)) {
            $("#thought").text("Dude like whats your fucking problem").slideDown(300);
            $("#status").text("yaaaay thank you <3");
        } else {
            $("#thought").text("egh.. go awey...");
            $("#status").text("getting warmer...");
        }
    }
});

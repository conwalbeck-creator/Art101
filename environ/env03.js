let environmentTitle = "Angel's Weird World";

let count = 0;
let count2 = 0;
let countA = 0;

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

    if (countA < 5) {rage = "";}
    else if (countA >= 5 && countA < 10) {rage = " annoying";}
    else if (countA >= 10 && countA < 16) {rage = " frustrating";}
    else {rage = " stupid";}

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

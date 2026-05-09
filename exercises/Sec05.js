let environmentTitle = "friend space";

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

let changePerson = false;

$("#question1").click(function () {

    count1 = count1 + 1;

    let message = "<p>Hangouts: " + count1 + ".</p>";

    $("#output1").html(message);

    let Image = "<p><img src='fsh-spin.gif'width='300' height='200'>" + "</p>";

    $("#outputP").html(Image);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

$("#question2").click(function () {

    count2 = count2 + 1;

    let message = "<p>Hangouts: " + count2 + ".</p>";

    let Image = "<p><img src='images.webp'width='300' height='200'>" + "</p>";

    $("#outputP").html(Image);

    $("#output2").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

$("#question3").click(function () {

    count3 = count3 + 1;

    let message = "<p>Hangouts: " + count3 + ".</p>";

    let Image = "<p><img src='dinobed.webp'width='300' height='200'>" + "</p>";

    $("#outputP").html(Image);

    $("#output3").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

$("#question4").click(function () {

    count4 = count4 + 1;

    let message = "<p>Hangouts: " + count4 + ".</p>";

    $("#output4").html(message);

        let Image = "<p><img src='lib.jpg'width='300' height='200'>" + "</p>";

    $("#outputP").html(Image);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});



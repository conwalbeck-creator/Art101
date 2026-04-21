let count = 0;
$("#needy-button").click( function() {
    count = count + 3;
    $("#needy-button").html("you didn't listen " + count + " times");
});
let count=0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"]; ///adds colors to the button text. this is called a 'shelf'///
let colorsCount;  ///this allows colors to have their own variable, and thus be used to track which color is used when

let pencil={
    color: "yellow",
    isSharp: false,
    eraser: "pink",
};


$("#needy-button").click( function() {

    count=count+1;

    colorCount=count-1;

    $("#needy-button").html("you didn't listen " + count + " times " +
     colors[colorCount] );  ///added a feature to add the 'colors' variable to the button text. before adding the 'background-color' variable, this just added the actual words to the button///

    $("#needy-button").css("background-color", colors[colorCount]); ///this makes the button background be the color that was defined earlier///

    
    
     $("html").css("background-color", colors[colorCount+1]); ///this makes the background be the color after the color that was defined earlier///

    console.log(pencil.color);


});
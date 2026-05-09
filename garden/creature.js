$("#crAdd").click(function () {

    let crName = $("#crName").val();

    if (crName.length > 2) {
        $("#creature-list").append("<div>" + crName + "</div>");
    }
    $("#crName").val("");
    console.log(crName);
});

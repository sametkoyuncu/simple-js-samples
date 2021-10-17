/*
    Author: Samet Koyuncu
    Coded: 16.9.2019
*/
$("#btnPlus").click(function () {
    var plus = $("#btnPlus");
    var arrow = $("#arrow");
    var mail = $("#mail");
    var whatsapp = $("#whatsapp");
    plus.fadeToggle(1500);
    arrow.animate({
        bottom: "100px",
        opacity: "1"
    }, 750);
    mail.animate({
        bottom: "90px",
        right: "90px",
        opacity: "1"
    }, 1250);
    whatsapp.animate({
        right: "100px",
        opacity: "1"
    }, 1750);
});

$("#btnClose").click(function () {
    console.log("close tıklandı");
    var plus = $("#btnPlus");
    var arrow = $("#arrow");
    var mail = $("#mail");
    var whatsapp = $("#whatsapp");
    plus.fadeToggle(1500);
    arrow.animate({
        bottom: "35px",
        opacity: "0"
    }, 1750);
    mail.animate({
        bottom: "35px",
        right: "35px",
        opacity: "0"
    }, 1250);
    whatsapp.animate({
        right: "35px",
        opacity: "0"
    }, 750);
});
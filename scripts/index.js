$(document).ready(function () {
    $(".btn").click(function () {
        $("form").hide();
        $("#panel").show();
    });

    $(".btn-voltar").click(function(){
        $("form").show();
        $("#panel").hide();
    });
});
$(document).on("click","#slmap path",function(){
    $("#slmap path").css("fill","#transparent");
    $(this).css("fill","#9E9E9E");
    $("#select").text("Selected "+$(this).attr("title"));
    $("#distric").text($(this).attr("distric"));
    $("#province").text($(this).attr("province"));
    $("#map_hover").text("");
});
$(document).on("mousemove","#slmap path",function(){
    $("#map_hover").text($(this).attr("title"));
});
$('body').mousemove(function(){
    $("#map_hover").text("");
})

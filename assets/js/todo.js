// check off Specific Todo by clicking 
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
});

// click X to remove the li 
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function (event) {
    if(event.which=== 13){

        var TodoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + TodoText + "</li>").hide().fadeIn(1500);

    }

    
});

    

    

    // change color when click on li
  /*  console.log($(this).css("color"));
    if ($(this).css("color") === "rgb(128, 128, 128)")
        {

        $(this).css({
            color: "black",
            textDecoration: "none"
        });
        } 
        else
        {
            $(this).css({
                color: "gray",
                textDecoration: "line-through"
            });
        } */




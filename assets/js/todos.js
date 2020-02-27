
let FaveTodo=["hi","bye"];
//Check off specific todos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        let todoText = $(this).val();
        //reset input
        $(this).val("");
        //Create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "<i class='far fa-star'></i></li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});

$(".fa-info-circle").click(function(){
   alert("Instructions : 1.write todo in input and press ENTER to add Todo, 2.Press Todo to cross out task, 3.Hover on Todo and press trashcan icon to delete Todo, 4.Press plus to minimize input box")
});

$("ul").on("click", ".fa-star", function(event){
    $(this).toggleClass("favor");
    event.stopPropagation();
});

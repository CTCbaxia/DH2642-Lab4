var DinnerMenuViewController = function(view, model){
  //remove dish function
  $(".removeDish").on("click",function(){
    var id = $(this).attr('id');
    // console.log("I am on click");
    model.removeDishFromMenu(id);
    // model.addDishToPendingMenu(id);
    model.notify("removeDish");
  });

  $("#confirmDinner").on("click",function(){
    console.log("confirm confirmDinner");
    model.notify("confirmDinner");
  });

}


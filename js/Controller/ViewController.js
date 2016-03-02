//ExampleViewController Object constructor
var GuestNumberViewController = function(view, model) {

 view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
 
}
var DinnerMenuViewController = function(view, model){
  //remove dish function
  $(".removeDish").on("click",function(){
    var id = $(this).attr('id');
    console.log(id);
    model.removeDishFromMenu(id);
    // console.log(model.removeDishFromMenu(id));
  })
}

var ListDishesViewController = function(view, model){
  view.selectType.change(function(){
  	var dishType = view.selectType.val();
  	model.setSelectedDish(dishType);

    $(".selectDish").on("click",function(){
        var value = [];
        var selectClass = $(".selectDish");
        var id = $(this).attr('id');
        model.setDishID(id); 
         $(".confirm").attr('id',id);
      });

  });
   
  view.search.click(function(){
  	var filter = view.keyWords.val();
  	model.setFilter(filter);
  });

  $(".selectDish").on("click",function(){
    var value = [];
    var selectClass = $(".selectDish");
    var id = $(this).attr('id');

    model.setDishID(id);
    $(".confirm").attr('id',id);
  });

  $(".confirm").on("click",function(){  
    var id = $(this).attr('id');
    model.addDishToMenu(id);
  });

  // //remove dish function
  // $(".removeDish").on("click",function(){
  //   var id = $(this).attr('id');
  //   console.log(id);
  //   model.removeDishFromMenu(id);
  //   // console.log(model.removeDishFromMenu(id));
  // })


  $("#confirmDinner").on("click",function(){
    console.log("confirm confirmDinner");
    model.notify("confirmDinner");
  })

}

var OverviewController = function(view,model){
  $("#printFullRcp").on("click",function(){
    model.notify("printFullRcp");
  })
}



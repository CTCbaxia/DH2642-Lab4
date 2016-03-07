var SelectDishViewController = function(view, model){

  //   $("#confirmDinner").on("click",function(){
  //   console.log("confirm confirmDinner");
  //   model.notify("confirmDinner");
  // })
  var id;
  $(".confirm").on("click",function(){  
    id = $(this).attr('id');
    model.addDishToMenu(id);

    $(".selectDish").attr("keyDetail",0);
    //console.log($(".selectDish").attr("keyDetail"));
  });

    $(".backToMenu").on("click",function(){  
      model.notify("backToMenu");
      $(".selectDish").attr("keyDetail",0);

  });

}

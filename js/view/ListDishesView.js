var ListDishesView = function (container, model){
	// is a loop, print all dishes in that category
	model.attach(this);
	model.getAllDishes("all");
    this.listAllDishes = container.find("#listAllDishes");
    this.selectType = container.find("#selection");
    this.search = container.find("#search");
    this.keyWords = container.find("#keyWords");

	var alldishesHtml = "";
	var dish = [];
	var dishes = [];

	this.update = function(args){

		if (args == "dish") {

			dish = model.dish;

			dishes = model.dishes;

			 alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
			 				   // "<a href=\'#\' class=\'selectDish\' id=\'"+ dish.RecipeID +"\'>" +
		                       "<div class=\'selectDish\' id=\'"+ dish.RecipeID +"\'>" +
		                       "<div class=\" dish\" id=\'dishID\' > " +
							      "<center>" + "<img src=\'" + dish.ImageURL + "\'></center> " +
							      " <div class=\"dishname\">" + dish.Title + "</div>" +
							   "</div></div>" + 
							   "<div class=\"description\"> " + dish.Description + "</div>" +
					      "</div>";
	    



		} else if (args == "dishType" || args == "filter") {
        	alldishesHtml = ""; // Clear the Html
        	var dishType = model.getSelectedDish();
        	var filter = model.getFilter();
        	var dishes = model.getAllDishes(dishType,filter);
     
 	    };

		this.listAllDishes.html(alldishesHtml);


		//controller for selectDishView
	 	$(".selectDish").on("click",function(){

	    var id = $(this).attr('id');
	    $(this).attr("keyDetail",1);

		model.getLocalDish(id);
	    model.setDishID(id);
	    model.addDishToPendingMenu(id);//add pending to dinnerMenuView
	    $(".confirm").attr('id',id);
	    // $(".backToMenu").attr('id',id);//add id to backToMenu button, so if go back without adding, the dish won't be showed on menu
	    
		
		//show detial page, moved from index.html
	    $("#startPage").hide();
        $("#menuPage").show();
	    $("#menuPage #dishMenu").hide();
	    $("#menuPage #dishView").show();
		$("#overviewPage").hide();
		$("#printPage").hide();
	    
	    // console.log($(this).attr("keyDetail"));
	    });
    }

}


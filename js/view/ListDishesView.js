var ListDishesView = function (container, model){
	// is a loop, print all dishes in that category
	model.attach(this);
	model.getRecipeJson();
    this.listAllDishes = container.find("#listAllDishes");
    this.selectType = container.find("#selection");
    this.search = container.find("#search");
    this.keyWords = container.find("#keyWords");

	// var dishes = [];
	// dishes = model.getAllDishes('all');
	var alldishesHtml = "";
	var dish = [];
	
	this.update = function(args){
		if (args == "dish") {
			 dish = model.dish;
			 alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dish.RecipeID +"\'>" +
		                       "<div class=\" dish\" id=\'dishID\' > " +
							      "<center>" + "<img src=\'" + dish.ImageURL + "\'></center> " +
							      " <div class=\"dishname\">" + dish.Title + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dish.Description + "</div>" +
					      "</div>";
		};

		this.listAllDishes.html(alldishesHtml);
	}

 //     this.update = function(args){
 //        if (args == "dishType" || args == "filter") {
        	
 //        	var dishType = model.getSelectedDish();
 //        	var filter = model.getFilter();
 //        	var dishes = model.getAllDishes(dishType,filter);
     
 //        var alldishesHtml = "";

 //    	for (var i = 0; i < dishes.length; i++) {
	// 		alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
	// 	                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dishes[i].id +"\'><div class=\" dish\" id=\'dishID\' > " +
	// 						     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
	// 						     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
	// 						   "</div></a>" + 
	// 						   "<div class=\"description\"> " + dishes[i].description + "</div>" +
	// 				      "</div>";
	// 	}
 //        this.listAllDishes.html(alldishesHtml);


 // 	};
 // } 
}


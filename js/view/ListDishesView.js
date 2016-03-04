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
	
	this.update = function(args){

		if (args == "dish") {
			 dish = model.dish;

			 alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
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
   
    }
}


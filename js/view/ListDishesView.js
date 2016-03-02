var ListDishesView = function (container, model){
	// is a loop, print all dishes in that category
	model.attach(this);
    this.listAllDishes = container.find("#listAllDishes");
    this.selectType = container.find("#selection");
    this.search = container.find("#search");
    this.keyWords = container.find("#keyWords");
    //console.log(this.selectType.length);
    //var dishType = model.getSelectedDish('starter','eggs');
	//var dishes = model.getAllDishes('starter');
	var dishes = [];
	dishes = model.getAllDishes('all');
	//var dishes = model.getAllDishes(dishType);
	var alldishesHtml = "";

    for (var i = 0; i < dishes.length; i++) {

		alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dishes[i].id +"\'>" +
		                       "<div class=\" dish\" id=\'dishID\' > " +
							      "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							      " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
		// alldishesHtml +=  "<div class=\"col-sm-6 col-md-4\">" +
		// 				    "<div class=\"thumbnail\" class=\'selectDish\' id=\'"+ dishes[i].id +"\'>" +
		// 				      " <img src=\'images/" + dishes[i].image + "\' >" +
		// 				       "<div class=\"caption\"> " +
		// 				        "<h3>" +  dishes[i].name + "</h3>" +
		// 				        "<p>" + dishes[i].description + "</p>" +
		// 				     "</div>" +
		// 				    "</div>" +
		// 				  "</div>" ;
					  }

     this.listAllDishes.html(alldishesHtml);

     this.update = function(args){
        if (args == "dishType" || args == "filter") {
        	
        	var dishType = model.getSelectedDish();
        	var filter = model.getFilter();
        	var dishes = model.getAllDishes(dishType,filter);
        	//console.log(filter);
     
        var alldishesHtml = "";

    	for (var i = 0; i < dishes.length; i++) {
    		//console.log("hi");
			alldishesHtml +=  "<div class=\"col-xs-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dishes[i].id +"\'><div class=\" dish\" id=\'dishID\' > " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
		}
        this.listAllDishes.html(alldishesHtml);


 	};
 } 
}


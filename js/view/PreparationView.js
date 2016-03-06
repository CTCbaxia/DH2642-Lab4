var PreparationView = function (container, model){
	model.attach(this);
	this.printDishes = container.find("#printDishes");
    
    this.update = function(args){
    	if (args == "printFullRcp") {
    		var PrintDishes = "";
    		var fullMenu = model.getFullMenu();
 			//console.log(fullMenu.length);
 			for (var i = 0; i < fullMenu.length; i++) {
			//var price = model.getTotalDishPrice(i);
	        //console.log("i am print");
			PrintDishes += "<div class=\"row\" >" +	               
			               "<div class= \"col-xs-2 printImg\">" +
							  "<div class= \"dish\"> " +
							  "<div><img src=\'" + fullMenu[i].ImageURL + "\'></div>" +
							  "</div>" +
					       "</div>" +
					      "<div class= \"col-xs-4 dishinfo\" >" +
							  "<div class=\"dishpretitle\">" + fullMenu[i].Title + "</div>" +
							  "<div class=\"dishtext\">" + fullMenu[i].Description +
							  "</div>" +
					      "</div>" + 
					          "<div class= \"col-xs-5 dishpre\" >" +
							  "<div class=\"dishpretitle\"> Preparation </div>" +
							  "<div class=\"dishtext\">" + fullMenu[i].Instructions +
							  "</div>" +
					      "</div>" +
					      "</div>"
		};

	    this.printDishes.html(PrintDishes);
    	};
    }
}




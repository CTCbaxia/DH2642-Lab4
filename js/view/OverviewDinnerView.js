var OverviewDinnerView = function (container, model){
	model.attach(this);


	// Get The number of people
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());	

    // Get the full price
   	this.update = function(args){
		if (args == "confirmDinner") {
            // GET The number of people
			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());
			this.listSelectDishes = container.find("#listSelectDishes");
			//this.totalPrice = container.find("#totalPrice");
			var totalPrice = model.getTotalMenuPrice();
    		//this.totalPrice.html(model.getTotalMenuPrice());
			var selectDishes = "";
			var fullMenu = model.getFullMenu();


			for (var i = 0; i < fullMenu.length; i++) {
		    var dishID = fullMenu[i].id;
			var dishPrice = model.getTotalDishPrice(dishID);

			selectDishes += "<div class=\"col-xs-2 col-xs-offset-0\">" +
						    "<div class=\"dish\">" +
						    "<div><img src=\'images/" + fullMenu[i].image + "\' ></div>" +
						    "<div class=\"dishname\">" + fullMenu[i].name + "</div>" +
						    "</div>" +
						    "<div class= \"price\"> " +
							dishPrice + " SEK" +
						    "</div>" +
				        "</div>";
			};
			selectDishes += "<div class=\"col-xs-2\" style=\"border\">" +
				    			"<div class=\"total price\" ><p>Total: " + totalPrice + " SEK" + "</p></div>" +
				    		"</div>";
        	this.listSelectDishes.html(selectDishes);
		};
	}

}


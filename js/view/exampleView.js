//ExampleView Object constructor
var GuestNumberView = function (container,model) {
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 // attach the view to listener
 model.attach(this);

 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 var number = model.getNumberOfGuests();

 this.numberOfGuests.html(number);
 console.log(numberOfGuests);

 this.update = function(args){
 	if (args == "people") {
 		number = model.getNumberOfGuests();
 		this.numberOfGuests.html(number); 
 	}
  }
}

var DinnerMenuView = function(container,model){
	model.attach(this);
	this.dinnerMenu = container.find("#dinnerMenu");
	var menu = model.getFullMenu();
	var menuList = "";
	for (var i = 0; i < menu.length; i++) {
	    //console.log(menu[i]);
	    var id = menu[i].id;
	    var name = menu[i].name;
	    var price = model.getTotalDishPrice(id);
	    var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "delete" + "</button>" +"</td>" +//每列添加了button
					"</tr>" +
				"</table>" ;
	};
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>Total Price is </td>" +
						"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
					"</tr>" +
				"</table>";
	this.dinnerMenu.html(menuList);

	this.update = function(args){
		if (args == "addMenu") {
			this.dinnerMenu = container.find("#dinnerMenu");
			var menu = model.getFullMenu();
			//console.log(menu);
			var menuList = "";
			for (var i = 0; i < menu.length; i++) {
	   		 //console.log(menu[i]);
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "delete" + "</button>" +"</td>" +//每列添加了button
					"</tr>" +
				"</table>" ;
			};

        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>Total Price is </td>" +
						"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
					"</tr>" +
				"</table>";

		this.dinnerMenu.html(menuList);

		}else if (args == "removeDish") {
			this.dinnerMenu = container.find("#dinnerMenu");
			var menu = model.getFullMenu();
			//console.log(menu);
			var menuList = "";
			for (var i = 0; i < menu.length; i++) {
	   		 //console.log(menu[i]);
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 var totalPrice = model.getTotalMenuPrice();

       		 menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>"+ "<button type=\"button\" class=\"removeDish\" id= "+ menu[i].id +">" + "delete" + "</button>" +"</td>" +
					"</tr>" +
				"</table>" ;
			};

        menuList += "<table class=\"table\">" + 
					"<tr>" +
						"<td>Total Price is </td>" +
						"<td style=\"text-align:right;\">" + totalPrice + " SEK</td>" +
					"</tr>" +
				"</table>";

			  //remove dish function
			  $(".removeDish").on("click",function(){
			    var id = $(this).attr('id');
			    console.log(id);
			    model.removeDishFromMenu(id);
			    // console.log(model.removeDishFromMenu(id));
			  })

		this.dinnerMenu.html(menuList);
		};
	}
	//removeMenu update
}

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

		alldishesHtml +=  "<div class=\"col-md-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dishes[i].id +"\'><div class=\" dish\" id=\'dishID\' > " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
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
			alldishesHtml +=  "<div class=\"col-md-3 dishbox\">" + 
		                       "<a href=\'#\' class=\'selectDish\' id=\'"+ dishes[i].id +"\'><div class=\" dish\" id=\'dishID\' > " +
							     "<center>" + " <img src=\'images/" + dishes[i].image + "\' ></center> " +
							     " <div class=\"dishname\">" + dishes[i].name + "</div>" +
							   "</div></a>" + 
							   "<div class=\"description\"> " + dishes[i].description + "</div>" +
					      "</div>";
		}
        this.listAllDishes.html(alldishesHtml);

        $(".confirm").on("click",function(){  
	    var id = $(this).attr('id');
	    model.addDishToMenu(id);
	    });
 	};
 } 
}

var SelectDishView = function (container, model){
    // GET The number of people
	/*
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());
	*/

	// Get the total price of selected dish;
	model.attach(this);
	this.update = function(args){
		if (args == 'dishDetail') {

			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());
			
			var dishID = model.getDishID();	
			var totalPrice = model.getTotalDishPrice(dishID);
		
   			//Get the dish Name
    		this.dishname = container.find("#dishName");
    		var dishName = model.getDishName(dishID);
            this.dishname.html(dishName);

    		//Get the dish img
    		this.dishImg = container.find('#dishImg');
    		var dImg = model.getDishImg(dishID);
            var images = "";
            images = "<img src=\"images/"+dImg+"\">";
            this.dishImg.html(images);

			//Get the dish Introduction
			this.dishInfo = container.find('#dishInfo');
			var dInfo = model.getDishInfo(dishID);
			this.dishInfo.html(dInfo);

			//Get the dish Ingredients
			this.dishIngre = container.find("#dishIngre");
			var allIngre = model.getDishIngredients(dishID);
			var getIngre = "";
			for (var i = 0; i < allIngre.length; i++) {
				getIngre +=  "<tr>" +
						"<td>" + allIngre[i].quantity + "</td>" +
						"<td>" + allIngre[i].unit + "</td>" +
					    "<td style= \"width: 55%;\"> " + allIngre[i].name + "</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + allIngre[i].price + " </td>" +
					 "</tr></br>";
			};
			this.dishIngre.html(getIngre);

    		//Get the total price for this dish
            this.dishPrice = container.find('#dishPrice');
            var printPrice ="";
            printPrice = "<tr>" +
						"<td> </td>" +
						"<td> </td>" +
					    "<td style= \"width: 55%;\">Total Price</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + totalPrice + " </td>" +
					 "</tr></br>";
			this.dishPrice.html(printPrice);
		};
	}

    /*
    var dishID = model.getDishID();
	this.totalDishPrice = container.find("#totalDishPrice");
	var totalPrice = model.getTotalDishPrice(dishID);
	this.totalDishPrice.html(totalPrice);

    //Get the dish Name
    this.dishname = container.find("#dishName");

	//Get the dish Introduction

	//Get the dish Ingredients
	this.dishIngre = container.find("#dishIngre");
	var allIngre = model.getDishIngredients(dishID);
	var getIngre = "";
	for (var i = 0; i < allIngre.length; i++) {
		getIngre +=  "<tr>" +
						"<td>" + allIngre[i].quantity + "</td>" +
						"<td>" + allIngre[i].unit + "</td>" +
					    "<td style= \"width: 55%;\"> " + allIngre[i].name + "</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + allIngre[i].price + " </td>" +
					 "</tr></br>";
	};

	this.dishIngre.html(getIngre + " SEK " + totalPrice);
	*/
}

var OverviewDinnerView = function (container, model){
	model.attach(this);
	this.update = function(args){
		if (args == "confirmDinner") {
			this.totalPrice = container.find("#totalPrice");
    		this.totalPrice.html(model.getTotalMenuPrice());
			//console.log("I am in confirmDinner");
            // GET The number of people
			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());
			this.listSelectDishes = container.find("#listSelectDishes");
			var selectDishes = "";
			var fullMenu = model.getFullMenu();

			this.numberOfPeople = container.find(".numberOfPeople");
			this.numberOfPeople.html(model.getNumberOfGuests());

			for (var i = 0; i < fullMenu.length; i++) {
		    var dishID = fullMenu[i].id;
			var dishPrice = model.getTotalDishPrice(dishID);

			selectDishes += "<div class=\"col-md-2 col-md-offset-0\">" +
						    "<div class=\"dish\">" +
						    "<div><img src=\'images/" + fullMenu[i].image + "\' ></div>" +
						    "<div class=\"dishname\">" + fullMenu[i].name + "</div>" +
						    "</div>" +
						    "<div class= \"price\"> " +
							dishPrice + "SEK" +
						    "</div>" +
				        "</div>";
			};
        	this.listSelectDishes.html(selectDishes);
		};
	}

	// // GET The number of people
	// this.numberOfPeople = container.find(".numberOfPeople");
	// this.numberOfPeople.html(model.getNumberOfGuests());
	// Get the list of the selected dishes in the menu
	this.numberOfPeople = container.find(".numberOfPeople");
	this.numberOfPeople.html(model.getNumberOfGuests());	

    // Get the full price
   

}

var PreparationView = function (container, model){
	model.attach(this);
	this.printDishes = container.find("#printDishes");
    
    this.update = function(args){
    	if (args == "printFullRcp") {
    		var PrintDishes = "";
    		var fullMenu = model.getFullMenu();
 			console.log(fullMenu.length);
 			for (var i = 0; i < fullMenu.length; i++) {
			//var price = model.getTotalDishPrice(i);
	        console.log("i am print");
			PrintDishes += "<div class=\"row\" >" +	               
			               "<div class= \"col-md-2 dishimg\">" +
							  "<div class= \"dish\"> " +
							  "<div><img src=\'images/" + fullMenu[i].image + "\'></div>" +
							  "</div>" +
					       "</div>" +
					      "<div class= \"col-md-4 dishinfo\" >" +
							  "<div class=\"dishpretitle\">" + fullMenu[i].name + "</div>" +
							  "<div class=\"dishtext\">" + fullMenu[i].description +
							  "</div>" +
					      "</div>" + 
					          "<div class= \"col-md-5 dishpre\" >" +
							  "<div class=\"dishpretitle\"> Preparation </div>" +
							  "<div class=\"dishtext\">" + fullMenu[i].description +
							  "</div>" +
					      "</div>" +
					      "</div>"
		};

	    this.printDishes.html(PrintDishes);
    	};
    }
}




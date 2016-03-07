//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
    
    var numberOfGuests = 1;
    var menu = [];
    var pendingmenu = [];
    var dishType = '';
    var filter = '';
    var dishID;
    this.listeners = [];
    this.dish = [];
    this.dishes = [];

    // add an attach function
    // add an notify function
    // if the controller model make some changes, for each func that call of notify
    // and call for the update function in view.js
    
    this.attach = function(listener){
    	this.listeners.push(listener);
    }

  //   this.notifyData = function(dish,args){
  //       for(key in this.listeners){
		// 	this.listeners[key].update(args);
		// 	this.dish = dish;
		// }
  //   }

    this.notify = function(args){
        for(key in this.listeners){
			this.listeners[key].update(args);
		}

    }

	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		if (num < 0) {
           numberOfGuests
		}else{
			numberOfGuests = num;
		};
		//to check where is it
		//console.log($(".selectDish").attr("keyDetail"));
		this.notify("people");
	    
	}

	// should return 
	this.getNumberOfGuests = function () {
		//TODO Lab 2
		//console.log(numberOfGuests);
        return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.setSelectedDish = function(type) {
		//TODO Lab 2
		if ( type == 'starter') {
			dishType = 'appetizer';
		}else if ( type == 'main dish') {
			dishType = 'main';
		}else if ( type == 'dessert') {
			dishType = 'desserts';
		}else if ( type == 'all') {
			dishType = 'all';
		};
		//console.log(dishType);
		this.notify("dishType");
	}

	this.getSelectedDish = function(){
		return dishType;
	}
	//set dish id when clicking specific dish - lab4
	this.setDishID = function(id){
        dishID = id;
        // console.log("setDish id "+ dishID);
        // this.notify("dishDetail");
	}

	this.getDishID = function(){
		//console.log("get id"+dishID);
		return dishID;
	}

	this.setFilter = function(flt){
        filter = flt;
        //console.log("i am " + filter);
        this.notify("filter");
	}

	this.getFilter = function(){
        return filter;
	}

	//Returns all the dishes on the menu.- lab4
	this.getFullMenu = function() {
		//TODO Lab 2
		var dishesOnMenu = [];
		for (var i = 0; i < menu.length; i++) {
			dishesOnMenu.push(this.getLocalDish(menu[i]));

		};
		// console.log(dishesOnMenu);
        return dishesOnMenu;
	}

	this.getFullPendingMenu = function() {
		//TODO Lab 2
		var dishesOnPendingMenu = [];
		for (var i = 0; i < pendingmenu.length; i++) {
			dishesOnPendingMenu.push(this.getDish(pendingmenu[i]));
		};
        return dishesOnPendingMenu;

	}

	//no use in lab4
    this.getDishName = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishName = thisDish.name;
    	return dishName;
    }
    //no use in lab4
    this.getDishImg = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishImg = thisDish.image;
    	return dishImg;
    }
    //no use in lab4
    this.getDishInfo = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishInfo = thisDish.description;
    	return dishInfo;
    }

    //no use in lab4 
	this.getDishIngredients = function(id) {
		var thisDish;
		thisDish = this.getDish(id);

		var ingredients = thisDish.ingredients;
		// var guestNum = this.getNumberOfGuests();
		// for (var i = 0; i < ingredients.length; i++) {
		// 		ingredients[i].quantity = guestNum * ingredients[i].quantity;
		// 		ingredients[i].price = guestNum * ingredients[i].price;
			
		// };
		// console.log(ingredients[0].quantity);

		return ingredients;
	}

	//lab4
	this.getTotalDishPrice = function(id){
		var dish = this.getLocalDish(id);
		var guestNum = this.getNumberOfGuests();
		var dishIngre = dish.Ingredients;
		var totalPrice = 0;
		for (var i = 0; i < dishIngre.length; i++) {
			totalPrice += dishIngre[i].Quantity * guestNum;
		};
		totalPrice = parseFloat(totalPrice.toFixed(2));
		return totalPrice;
	}

	//Returns all ingredients for all the dishes on the menu. - lab 4
	this.getAllIngredients = function() {
		//TODO Lab 2
		var dish;
		var ingredients;
		var allIngreOnMenu = [];
        
		for (var i = 0; i < menu.length; i++) {
			dish = this.getLocalDish(menu[i]);
			ingredients = dish.Ingredients;
			for (var j = 0; j < ingredients.length; j++) {
				allIngreOnMenu.push(ingredients[j]);
			};
		}; 
		// console.log(allIngreOnMenu+"getAllIngredients");
        return allIngreOnMenu;

	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests). - lab 4
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
        // var dish;
        var allIngredients = this.getAllIngredients();
        var guestNum = this.getNumberOfGuests();
        var totalPrice = 0;
       
        //The loop to get all the price and pass the value of the price
        for (var i = 0; i < allIngredients.length; i++) {
        	totalPrice += (allIngredients[i].Quantity * guestNum);
        };       
		totalPrice = parseFloat(totalPrice.toFixed(2));
        return totalPrice;
	}

	this.getTotalPendingPrice = function() {
		//TODO Lab 2
        var totalPendingPrice = 0;

        for (var i = 0; i < pendingmenu.length; i++){
        	totalPendingPrice += this.getTotalDishPrice(pendingmenu[i]);
        }
       
        return totalPendingPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		var dish = this.dish;

		var selectDishType = dish.Category;

		var theSameType = -1;

		if (menu.length == 0) {
			//if there is nothing in the menu, add directly
			menu.push(id); 
		} else{

			for (var i = 0; i< menu.length; i++) {
			//if there is the same type in the menu, assign the value of the theSameType with the array index
				var dishInMenu = this.getLocalDish(menu[i]);
				var dishInMenuType = dishInMenu.Category;
				if (dishInMenuType == selectDishType) {
					theSameType = i				
				};
			};
			if (theSameType != -1) {
				menu[theSameType] = id;
			}else{
				menu.push(id); 
			};
		};
		this.notify("addMenu");
	}

	this.getLocalDish = function(id){
		var localDishes = [];
		localDishes = this.dishes;

	  	for(key in localDishes){
			if(localDishes[key].RecipeID == id) {
				return localDishes[key];
			}
		}
	}


	//add pending to the menu
	this.addDishToPendingMenu = function(id) {
		//TODO Lab 2 
		var selectDish = this.getDish(id);//get all the info of the dish
		var selectDishType = selectDish.type;
		var theSameType = -1;
		
		for(var i = 0; i< menu.length; i++) {
			pendingmenu[i] = menu[i];
		};
		// pendingmenu = menu;


		if (pendingmenu.length == 0) {
			//if there is nothing in the menu, add directly
			pendingmenu.push(id); 
			// console.log(pendingmenu);

		} else{
			for (var i = 0; i< pendingmenu.length; i++) {
			//if there is the same type in the menu, assign the value of the theSameType with the array index
				var dishInMenu = this.getDish(pendingmenu[i]);
				var dishInMenuType = dishInMenu.type;
				if (dishInMenuType == selectDishType) {
					theSameType = i				
				};
			};
			if (theSameType != -1) {
				// pendingmenu[theSameType] = id;
				pendingmenu.splice(theSameType,1);
				pendingmenu.push(id); 
			}else{
				// console.log(theSameType);
				pendingmenu.push(id); 
			};
		};

		this.notify("addPending");
	}
	
	this.syncPendingMenu = function(){
		var lastelement = pendingmenu.length - 1;
		if(menu.length == 0){
					pendingmenu.splice(i,1);
		}else{
		for(var i = 0; i< menu.length; i++) {
				pendingmenu[i] = menu[i];
				pendingmenu.splice(lastelement,1);
			}
		};

		//console.log("ok");
		// console.log(pendingmenu);
		return pendingmenu;
	}

       

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for (var i = 0; i< menu.length; i++) {
			if (menu[i] == id) {
				// console.log(menu[i]);
				menu.splice(i,1);
			};
		};
		//console.log(menu);
		//console.log(pendingmenu);
		this.syncPendingMenu();
		//console.log(menu);
		//console.log(pendingmenu);
		this.notify("removeDish");

	}
	// from pending back to DishListView
	this.pendingBackToList = function(id) {
		if ($(".backToMenu").attr("key") ==1) {
			this.notify("addMenu")

		} else{
			//似乎是没有用
			// for (var i = 0; i< pendingmenu.length; i++) {
			// 	if (pendingmenu[i] == id) {
			// 		pendingmenu.splice(i,1);
			// 	};
			// };
			this.notify("backToMenu");

		};

		$(".backToMenu").attr("key",0);//default as 0
		// console.log(menu);
		// console.log(pendingmenu);


	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	var th = this;
	 var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
	 // var apiKey = "XKEdN82lQn8x6Y5jm3K1ZX8L895WUoXN";
     //var apiKey = "3stL5NVP4s6ZkmK5gt4dci8a4zOQRpD4";
	// var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
	// var apiKey = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6";
	// var apiKey = "r02x0R09O76JMCMc4nuM0PJXawUHpBUL";
	// var apiKey = "H9n1zb6es492fj87OxDtZM9s5sb29rW3";
	this.getAllDishes = function (type,filter) {
		th.dishes = [];

         var url = "";
		if (type == "all") {
			if (filter == null || filter == "") {
                url = "http://api.bigoven.com/recipes" + "?api_key=" + apiKey + "&pg=1&rpp=10";
			}else{
				url = "http://api.bigoven.com/recipes" + "?api_key=" + apiKey + "&pg=1&rpp=10&any_kw=" + filter;
			}
		} else if (filter == null || filter == "") {
			url = "http://api.bigoven.com/recipes" + "?api_key=" + apiKey + "&pg=1&rpp=5&any_kw=" + type;
		} else {
			url = "http://api.bigoven.com/recipes" + "?api_key=" + apiKey + "&pg=1&rpp=5&any_kw=" + type + "&any_kw=" + filter;
		};
		
		$.ajax({
			         type: "GET",
			         dataType: 'json',
			         cache: false,
			         url: url,
			         success: function (data) {
			            rpp = data.Results;
			            var recipeID;
			            // console.log(data);
			            // console.log("data showed");
			            for (var i = 0; i < rpp.length; i++) {
			            	recipeID = rpp[i].RecipeID;
			            	var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key=" + apiKey;
							$.ajax({
					         type: "GET",
					         dataType: 'json',
					         cache: false,
					         url: url,
					         success: function (dish) {
					            //console.log(data.Results[0].RecipeID);
					            //th.notifyData(dish,"dish");
					            th.dish = dish; //Pass the dish to model.dish
					            th.dishes.push(dish);
					            th.notify("dish");
			          			// console.log(dish);
			          			// console.log("dishes showed");
			          			
							}
		         		});
			           };
					}

         		});	
    }

	//function that returns a dish of specific ID
	// this.getDish = function (id) {
	//   for(key in dishes){
	// 		if(dishes[key].id == id) {
	// 			return dishes[key];
	// 		}
	// 	}
	// }

	this.getDish = function(id){
		var recipeID = id;
		//console.log(id);
		// var thisDish = [];
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: url,
         success: function (data) {
 
            // console.log(data);
            th.dish = data;//undefined

            th.notify("select");
            }
         });
		return th.dish;

    }


}
    
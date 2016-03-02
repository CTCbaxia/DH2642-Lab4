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

    // add an attach function
    // add an notify function
    // if the controller model make some changes, for each func that call of notify
    // and call for the update function in view.js
    
    this.attach = function(listener){
    	this.listeners.push(listener);
    }

    this.notify = function(args){
    	/*
    	for (var i = 0; i < this.listeners.length; i++) {
    		this.listeners[i].update(args);
    		//console.log(this.listeners[i]);
       	};
       	*/
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
		console.log($(".selectDish").attr("keyDetail"));
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
			dishType = 'starter';
		}else if ( type == 'main dish') {
			dishType = 'main dish';
		}else if ( type == 'dessert') {
			dishType = 'dessert';
		}else if ( type == 'all') {
			dishType = 'all';
		};
		//console.log(dishType);
		this.notify("dishType");
	}

	this.getSelectedDish = function(){
		return dishType;
	}

	this.setDishID = function(id){
        dishID = id;
        //console.log("set id "+ dishID);
        this.notify("dishDetail");

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

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		var dishesOnMenu = [];
		for (var i = 0; i < menu.length; i++) {
			dishesOnMenu.push(this.getDish(menu[i]));
		};
        return dishesOnMenu;
	}
	this.getFullPendingMenu = function() {
		//TODO Lab 2
		var dishesOnPendingMenu = [];
		for (var i = 0; i < pendingmenu.length; i++) {
			dishesOnPendingMenu.push(this.getDish(pendingmenu[i]));
		};
        return dishesOnPendingMenu;
        console.log(menu);
        console.log(pendingmenu);
	}


    this.getDishName = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishName = thisDish.name;
    	return dishName;
    }

    this.getDishImg = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishImg = thisDish.image;
    	return dishImg;
    }

    this.getDishInfo = function(id){
    	var thisDish;
    	thisDish = this.getDish(id);
    	var dishInfo = thisDish.description;
    	return dishInfo;
    }

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

	this.getTotalDishPrice = function(id){
		var thisDish;
		thisDish = this.getDish(id);
		var ingredients = thisDish.ingredients;
		var guestNum = this.getNumberOfGuests();
		//ingredients = this.getDishIngredients(id);
		var totalPrice = 0;
		for (var i = 0; i < ingredients.length; i++) {
			totalPrice += ingredients[i].price * guestNum;
		};
		return totalPrice;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
		var dish;
		var ingredients;
		var allIngreOnMenu = [];
        
		for (var i = 0; i < menu.length; i++) {
			dish = this.getDish(menu[i]);
			ingredients = dish.ingredients;
			for (var j = 0; j < ingredients.length; j++) {
				allIngreOnMenu.push(ingredients[j]);
			};
		}; 
        return allIngreOnMenu;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
        var dish;
        var allIngredients = this.getAllIngredients();
        var guestNum = this.getNumberOfGuests();
        var totalPrice = 0;
       
        //The loop to get all the price and pass the value of the price
        for (var i = 0; i < allIngredients.length; i++) {
        	totalPrice += (allIngredients[i].price * guestNum);
        };       
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
		var selectDish = this.getDish(id);//get all the info of the dish
		var selectDishType = selectDish.type;
		var theSameType = -1;
		// console.log(selectDish);
		
		if (menu.length == 0) {
			//if there is nothing in the menu, add directly
			menu.push(id); 
			// console.log(menu);
		} else{
			for (var i = 0; i< menu.length; i++) {
			//if there is the same type in the menu, assign the value of the theSameType with the array index
				var dishInMenu = this.getDish(menu[i]);
				var dishInMenuType = dishInMenu.type;
				if (dishInMenuType == selectDishType) {
					theSameType = i				
				};
			};
			if (theSameType != -1) {
				menu[theSameType] = id;
			}else{
				// console.log(theSameType);
				menu.push(id); 
			};
		};
		this.notify("addMenu");
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

		console.log("ok");
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
		console.log(menu);
		console.log(pendingmenu);
		this.syncPendingMenu();
		console.log(menu);
		console.log(pendingmenu);
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
	this.getAllDishes = function (type,filter) {
		//console.log("filter");
	if (type == 'all') {
		//console.log(dishes);
        return dishes;
	}else{
		return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}

	/*
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	  */	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
  
	// the dishes variable contains an array of all the 
	// dishes in the database. each has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'c':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}

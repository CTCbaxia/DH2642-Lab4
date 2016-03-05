var SelectDishView = function (container, model){

	model.attach(this);
	var dish = [];
	// var dishes = [];

	this.update = function(args){
		if (args == "dishDetail"|| args == "people") {
			// this.numberOfPeople = container.find(".numberOfPeople");
			// var guestNum = model.getNumberOfGuests();
			// this.numberOfPeople.html(guestNum);



   // 			//Get the dish Name
   //  		this.dishname = container.find("#dishName");
   //  		var dishName = model.getDishName(dishID);
	
   //          this.dishname.html(dishName);

   //  		//Get the dish img
   //  		this.dishImg = container.find('#dishImg');
   //  		var dImg = model.getDishImg(dishID);
   //          var images = "";
   //          images = "<img src=\"images/"+dImg+"\">";
   //          this.dishImg.html(images);

			// //Get the dish Introduction
			// this.dishInfo = container.find('#dishInfo');
			// var dInfo = model.getDishInfo(dishID);
			// this.dishInfo.html(dInfo);

			//Get the dish Ingredients
			// this.dishIngre = container.find("#dishIngre");
			var allIngre = model.getDishIngredients(dishID);
			var getIngre = "";
			for (var i = 0; i < allIngre.length; i++) {

				getIngre += "<tr>" +
								"<td>" + parseFloat((allIngre[i].quantity * guestNum).toFixed(2)) + "</td>" +
								"<td>" + allIngre[i].unit + "</td>" +
					 		    "<td style= \"width: 55%;\"> " + allIngre[i].name + "</td>" +
								"<td> SEK </td> " + " " +
								"<td> " + (allIngre[i].price * guestNum) + " </td>" +
							"</tr></br>";
			};
			this.dishIngre.html(getIngre);

    		//Get the total price for this dish
            this.dishPrice = container.find('#dishPrice');
            var printPrice ="";
            printPrice = "<tr>" +
						"<td> </td>" +
						"<td> </td>" +
					    "<td style= \"width: 55%;\">Total</td>" +
						"<td> SEK </td> " + " " +
						"<td> " + totalPrice + " </td>" +
					 "</tr></br>";
			this.dishPrice.html(printPrice);


	     //    $(".confirm").on("click",function(){  
		    // var id = $(this).attr('id');
		    // model.addDishToMenu(id);
		    // });


		}else if(args == "select"){
			console.log("hi");
			//get the dish
			dish = model.dish;
			console.log(dish);//got the right dish

			//get the dish name
			this.dishName = container.find("#dishName");
			var dishName = dish.Title;
            this.dishName.html(dishName);

			//get the dish img
			this.dishImg = container.find('#dishImg');
    		var dishImg = dish.ImageURL;
    		var images = "<img src=\'" + dish.ImageURL + "\'>";
    		this.dishImg.html(images);

			//get the dish description
			this.Info = container.find('#dishInfo');
			var dishInfo = dish.Description;
			this.Info.html(dishInfo);


			//get the dish introduction
			this.Info = container.find('#dishIntro');
			var dishIntro = dish.Instructions;
			this.Info.html(dishIntro);

			//get the number of guest
			this.numberOfPeople = container.find(".numberOfPeople");
			var guestNum = model.getNumberOfGuests();
			this.numberOfPeople.html(guestNum);

			//get the dish ingredient
			this.dishIngre = container.find("#dishIngre");
			var dishIngre = dish.Ingredients;
			// console.log(dishIngre[0].Quantity);
			var printIngre = "";
			var totalPrice = model.getTotalDishPrice(dish.RecipeID);

			for (var i = 0; i < dishIngre.length; i++) {
				printIngre +="<tr>" +
								"<td>" + parseFloat((dishIngre[i].Quantity * guestNum).toFixed(2)) + "</td>" +
								"<td>" + dishIngre[i].MetricUnit + "</td>" +
					 		    "<td style= \"width: 55%;\"> " + dishIngre[i].Name + "</td>" +
								"<td> SEK </td> " + " " +
								"<td> " + parseFloat((dishIngre[i].Quantity * guestNum).toFixed(2)) + " </td>" +
							"</tr></br>";
			};
			this.dishIngre.html(printIngre);

			//get the total price
            this.dishPrice = container.find('#dishPrice');
            var printPrice ="";
            printPrice = "<tr>" +
					    "<td style= \"width: 55%;\" >Total</td>" +
					    "<td> </td>" +
					    "<td> </td>" +
						"<td> SEK </td> " + " " +
						"<td> " + totalPrice + " </td>" +
					 "</tr></br>";
			this.dishPrice.html(printPrice);
		};
		// if (args == "select") {
		// 	console.log("hi");
		// } else if(args == "people"){
		// 	console.log("not hi");

		// };
	}

}


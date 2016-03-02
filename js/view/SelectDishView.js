var SelectDishView = function (container, model){

	model.attach(this);
	this.update = function(args){
		if (args == "dishDetail"|| args == "people") {
			this.numberOfPeople = container.find(".numberOfPeople");
			var guestNum = model.getNumberOfGuests();
			this.numberOfPeople.html(guestNum);
			
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


		};
	}

}


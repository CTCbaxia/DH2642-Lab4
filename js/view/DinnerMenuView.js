var DinnerMenuView = function(container,model){
	model.attach(this);
	this.dinnerMenu = container.find("#dinnerMenu #tableBody");
	this.price = container.find("#totalPrice")
	var menu = model.getFullMenu();
	var menuList = "";

    menuList += "<tr>" +
					"<td>pending</td>" +						
					"<td>0</td>" +
				"</tr>" ;

    this.price.html(totalPrice);
	this.dinnerMenu.html(menuList);

	this.update = function(args){

		var keyDetail = $(".selectDish").attr("keyDetail");//check where it is, List or Detail

		// console.log(keyDetail);
		if (args == "addMenu" ||(args =="people" && keyDetail == 0) || (args == "removeDish" && keyDetail == 0)||args == "backToMenu") {

			//this.dinnerMenu = container.find("#dinnerMenu");

			var menu = model.getFullMenu();
			var menuList = "";

			for (var i = 0; i < menu.length; i++) {
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 var totalPrice = model.getTotalMenuPrice();
	    
        menuList += "<tr>" +
						"<td>"+ name +"</td>" +
						"<td style=\"text-align:right;\">" + price + "</td>" +
						"<td>" + "<span class = \"glyphicon glyphicon-remove removeDish\" id="+ menu[i].id +"></span>" +"</td>" +//每列添加了button

					"</tr>" ;
			};

        this.price.html(model.getTotalMenuPrice());


		this.dinnerMenu.html(menuList);
		$(".removeDish").click(removeDishFunction);

		}else if (args == "addPending" || (args =="people" && keyDetail == 1)||(args == "removeDish" && keyDetail == 1) ) {
			//this.dinnerMenu = container.find("#dinnerMenu");

			var menu = model.getFullPendingMenu();
			var menuList = "";
			for (var i = 0; i < menu.length-1; i++) {
	   		 var id = menu[i].id;
	    	 var name = menu[i].name;
	    	 var price = model.getTotalDishPrice(id);
	    	 
	    
       		 menuList += "<tr>" +
							"<td>"+ name +"</td>" +
							"<td style=\"text-align:right;\">" + price + "</td>" +
							"<td>" + "<span class = \"glyphicon glyphicon-remove removeDish\" id="+ menu[i].id +"></span>" +"</td>" +
						"</tr>" ;
			};
			var index = menu.length-1;
			var pendingID = menu[index].id;
			menuList += "<tr class = \" pending\">" +
							"<td>"+ "pending" +"</td>" +
							"<td style=\"text-align:right;\">" + model.getTotalDishPrice(pendingID) + "</td>" +
							"<td>"+ " " +"</td>" +

						// "<td>"+ "<button type=\"button\" class=\"removeDish\" id="+ menu[i].id +">" + "<span class = \"glyphicon glyphicon-remove\"></span>" + "</button>" +"</td>" +//每列添加了button
						"</tr>" ;
			

			var totalPrice = model.getTotalPendingPrice();

        	this.price.html(totalPrice);

	
		 //    $(".removeDish").on("click",function(){
		 //    var id = $(this).attr('id');
		 //    model.removeDishFromMenu(id);
		 //    model.notify("removeDish");
		 //    });
			
		this.dinnerMenu.html(menuList);
		$(".removeDish").click(removeDishFunction);

		};

	}
}


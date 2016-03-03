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


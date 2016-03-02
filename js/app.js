	//We instantiate our model
	var model;

$(function() {

	model = new DinnerModel();

	//And create the needed controllers and views
	var guestNumberView = new GuestNumberView($("#GuestNumberView"),model);
	var guestNumberViewController = new GuestNumberViewController(guestNumberView,model);
    
    var dinnerMenuView = new DinnerMenuView($("#DinnerMenuView"),model);
    var dinnerMenuViewController = new DinnerMenuViewController(dinnerMenuView,model);
 
	var listDishesView = new ListDishesView($("#ListDishesView"),model);
	var listDishesViewController = new ListDishesViewController(listDishesView,model);

    var overviewDinnerView = new OverviewDinnerView($("#overviewPage"),model);
    var overviewController = new OverviewController(overviewDinnerView,model);

    var preparationView = new PreparationView($("#PreparationView"),model);

    var selectDishView = new SelectDishView($("#SelectDishView"),model);
    var selectDishViewController = new SelectDishViewController(selectDishView,model);
});
var UpdateMenuController = function(id, model){
	model.removeDishFromMenu(id);
	model.notify("removeDish")
}

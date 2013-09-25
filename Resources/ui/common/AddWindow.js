function AddFugitiveWindow(){
	
	var self = Ti.UI.createWindow({
		title: "Add a Fugitive",
		modol: true,
		layout: 'vertical'
	});
	
	var name = Ti.UI.createTextField({
		hintText: "Enter Fugitive Name"
	});
	
	var height = Ti.UI.createTextField({
		hintText: "Enter Height"
	});
	
	var weight = Ti.UI.createTextField({
		hintText: "Enter Weight"
	});
	
	self.add(name, height, weight);
	
	
	
	return self;
};

module.exports = AddFugitiveWindow;
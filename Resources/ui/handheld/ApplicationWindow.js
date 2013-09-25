function ApplicationWindow(/*Boolean*/ _captured) {

	var addFugitiveButton = Ti.UI.createButton({
		title: "Add"
	});
	
	addFugitiveButton.addEventListener('click', function(e){
		var addWindow = require('ui/common/Addwindow');
		var addWindow = new AddWindow();
		addWindow.open();
	});

	var self = Titanium.UI.createWindow({
		backgroundColor:'transparent',
		backgroundImage: '/images/grain.png',
		title: (_captured) ? L('captured') : L('fugitives'),
		barColor: '#6d0a0c',
		rightNavButton: addFugitiveButton
	});
	
	var BountyTable = require("ui/common/BountyTable");
	var bountyTable = new BountyTable(_captured);
	
	self.add(bountyTable);
	
	return self;
};

module.exports = ApplicationWindow;

function DetailWindow(/*object*/_person){
	
	var closeBtn = Ti.UI.createButton({
		title: "Close",
		width: Ti.UI.SIZE,
		height: '100dp'
	});
	
	var captureBtn = Ti.UI.createButton({
		title: "Capture!",
		width: Ti.UI.SIZE,
		height: '50dp',
		top: '10dp'
	});
	
	var self = Ti.UI.createWindow({
		title: _person.title,
		modal: true,
		backgroundColor: (_person.captured) ? "blue" : "red",
		barColor: (_person.captured) ? "blue" : "red",
		rightNavButton: closeBtn,
		layout:"vertical"
	});
	
	if(!_person.capture){
		self.add(captureBtn);
	};
	
	closeBtn.addEventListener('click', function(e){
		self.close();
	});
	
	var personName = Ti.UI.createLabel({
		text: _person.title,
		color: "white",
		top: '100dp',
		left: '10dp'
	});
	
	self.add(personName);
	if(!_person.capture){
		self.add(captureBtn);
	};
	
	var captureLabel = Ti.UI.createLabel({
			text: (_person.captured) ? "Behind bars" : "On the run"
	});
	
	self.add(captureLabel);
	
	return self;
};

module.exports = DetailWindow;

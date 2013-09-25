function BountyTable (/*boolean*/ _captured){
	
	var tableData = [
	{title: "Cody Porter", captured: false}, 
	{title: "Shanztan Ferreira", captured : true}, 
	{title: "Kaili Wu", captured : false}, 
	{title: "Hunter Bruno", captured: true},
	{title: "Derek Tanizaki", captured: false} 
	];
	
	var data = [];
	
	if(_captured){
		//Do something if _captured = true
		
		for(var i = 0; i < tableData.length; i++){
			if(tableData[i].captured == true){
				var tableViewRow = Ti.UI.createTableViewRow({
					color: "white",
					title: tableData[i].title,
					hasChild: true,
					captured: tableData[i].captured
				});
				data.push(tableViewRow);
			};//Check if array row capture = true.
		};
	}else{
		//Do something if _captured = false
		for(var i = 0; i < tableData.length; i++){
			if(tableData[i].captured == false){
				var tableViewRow = Ti.UI.createTableViewRow({
					color: "white",
					title: tableData[i].title,
					hasChild: true,
					captured: tableData[i].captured
				});
				data.push(tableViewRow);
			};//Check if array row capture = true.
		};
	};
	
	var self = Ti.UI.createTableView({
		backgroundColor: "transparent",
		data: data
	});
	
	self.addEventListener('click',function(e){
		var DetailWindow = require("ui/common/DetailWindow");
		var detailWindow = new DetailWindow(e.rowData, _captured);
		detailWindow.open();
	});
	
	
	return self;
	
	
};

module.exports = BountyTable;
/**
 * 
 */

var board = function(){
	
	var boardTable = $(".boardTable");
	
	this.init = function(){
		
		callServer();
	};
	
	var callServer = function(){
		
		var param = {"id" : "admin"};
		
		$.ajax({
			url : "/board/boardGetList.json",
			type:"post",
			data : JSON.stringify(param),
			contentType : "application/json",
			success : function(data){
				
				console.log(data);
				
			},
			error : function(xhr){
				console.log(xhr);
			}
			
		});
		
	};
	
	var displayData = function(data){
		
		if(data.length === 0 || data === null){
			
		}else{
			
			var tr = $("<tr></tr>"),
			td = $("<td></td>");
			
			for(var i=0;i<data.length;i++){
				var item = data[i];
				
				var title = td.clone().text(item["title"]),
					name = td.clone().text(item["name"]),
					row = tr.clone().append(title).append(name);
				
				boardTable.append(row);
			}
			
		}
	};
	
	function clone(obj) {
	    if (null == obj || "object" != typeof obj) return obj;
	    var copy = obj.constructor();
	    for (var attr in obj) {
	        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	    }
	    return copy;
	};
};
/**
 * 
 */

var board = function(){
	
	var boardTable = $(".boardTable");
	
	this.init = function(){
		
		retreiveBoard();
	};
	
	var retreiveBoard = function(){
		
		var param = {"id" : "admin"};
		
		$.ajax({
			url : "/board/boardGetList.json",
			type:"post",
			data : JSON.stringify(param),
			contentType : "application/json",
			success : function(data){
				displayData(data);
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
			td = $("<td></td>"),
			seqValue = data.length;
			
			for(var i=0;i<data.length;i++){
				var item = data[i];
				
				var title = td.clone().text(item["title"]),
					name = td.clone().text(item["username"]),
					id = td.clone().text(item["id"]),
					regDate = td.clone().text(item["regDate"]),
					seq = td.clone().text(seqValue--);
					row = tr.clone().append(seq).append(title).append(name).append(regDate);
				
				boardTable.append(row);
			}
			
		}
	};
};
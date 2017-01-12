/**
 * 
 */

var board = function(){
	
	var $boardTable = $(".boardTable tbody"),
		$pagingWrapper = $(".pagingWrapper");
	
	var startPage = "1",
		currentPage = startPage,
		endPage = "10";
	
	this.init = function(){
		retreiveBoard();
		showPaging();
	};
	
	var retreiveBoard = function(currentPage){
		
		var param = {"id" : "admin","currentPage" : currentPage};
		
		$.ajax({
			url : "/board/boardGetList.json",
			type:"post",
			data : JSON.stringify(param),
			contentType : "application/json",
			success : function(data){
				displayData(data.result);
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
				
				$boardTable.append(row);
			}
			
		}
	};
	
	var showPaging = function(){
		var a = $("<a href='#'></a>");
		
		for(var i=0;i<endPage;i++){
			var pageNum = a.clone().text(i+1);
			pageNum.click(function(e){
				e.preventDefault();
				retreiveBoard($(this).text());
			});
			$pagingWrapper.append(pageNum);
		}
	};
};
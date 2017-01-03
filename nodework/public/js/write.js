var write = function(){

	var $writeBtn = $("#writeBtn"),
		$title = $("#title"),
		$content = $("#content");
	
	this.init = function(){
		addEvent();
	};
	
	var addEvent = function(){
		
		$writeBtn.on("click",function(){
			
			var param = {
				id : "admin",
				title : $title.val(),
				username : "admin",
				content : $content.val(),
				regDate : new Date()
			};
			
			$.ajax({
				url : "/board/boardWrite.json",
				type:"post",
				data : JSON.stringify(param),
				contentType : "application/json",
				success : function(data){
					
					
					
				},
				error : function(xhr){
					console.log(xhr);
				}
				
			});
		});
		
	};
	
};
// ajax加载试题
(function a(){
	$.ajax({
		url:"style/psw.json",
		type:"GET",
		dataType:"json",
		success:function(data){
			$("header").empty();
			var html = "";

			$.each(data,function(itemIndex,item){
				html += "<section><h1><b>"+ (itemIndex+1)+ "</b>" + item.title + "(" + "<span></span>" + ")" + "</h1>" 
				+ "<p><span>" + "A" + "</span>" + item.opation.list1 + "</p>" 
				+ "<p><span>" + "B" + "</span>" + item.opation.list2 + "</p>" 
				+ "<p><span>" + "C" + "</span>" + item.opation.list3 + "</p>" 
				+ "<p><span>" + "D" + "</span>" + item.opation.list4 + "</p>" 
				+ "<aside>" + "答案：" + "<span>" + item.opation.list5 + "</span></aside></section>"
			})
			$("header").html(html);
			
			$("header section p").each(function(){
				$(this).on("click",function(){
					var psw = $(this).find("span").text();
					$(this).parent("section").find("h1 span").text(psw);
				})
			})
		}
	})
})();

// 提交答案
$("section button").on("click",function(){
	var pswArr = $(this).parents(".main").find("header section aside span").text();
	var subArr = $(this).parents(".main").find("header section h1 span").text();
	var p = pswArr.length;
	var s = subArr.length;

	if(s < p){
		alert("您还有题目没有做完！")
	}else{
		$(this).parents(".main").find("header section aside").css("display","block");
		if (subArr==pswArr) {
			alert("恭喜你，全对了")
		}else{
			for(var i=0; i<p; i++){
				if($(this).parents(".main").find("header section aside span").eq(i).text() !== $(this).parents(".main").find("header section h1 span").eq(i).text()){
					$(this).parents(".main").find("header section h1 span").eq(i).css("color","red");
				}
			}
		}
	}
})
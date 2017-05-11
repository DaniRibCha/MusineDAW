
$(document).ready(function () {
	
	var url = document.getElementById("url").value;
	
	$("#loadMore").click(function () {
		
		$('#spin').html("<img src='../img/loader.gif'/>");
	        	         	
	            $('#spin').empty()
	            $('#spin').load(url + "#pag");

	})
})

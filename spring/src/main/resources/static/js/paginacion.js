
$(document).ready(function () {
	
	$("#loadMore").click(function () {
		
		$('#spin').html("<img src='../img/loader.gif'/>");
	        $.ajax({
	            url: "/UserFollowing/5?page=1"
	        	//url: "/UserFollowing/5?page=1"
	        }).done(function (data) {
	        	 
	        	
	            $('#spin').empty()
	            //$('#spin').append(data);
	            $('#spin').load("/MyFollowing/5?page=1 #pag");

	           
	        });
	        
	})
})

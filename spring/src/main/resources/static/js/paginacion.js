
$(document).ready(function () {
	
	$("#loadMore").click(function () {
		
		$('#spin').html("<img src='../img/loader.gif'/>");
	        $.ajax({
	            url: "/UserFollowing/"+user+"?page="+nPage
	        	//url: "/UserFollowing/5?page=1"
	        }).done(function (data) {
	        	 
	        	
	            $('#spin').empty()
	            $('#spin').append("<div><h3>ciao</h3></div>");
	            

	           
	        });
	        
	})
})

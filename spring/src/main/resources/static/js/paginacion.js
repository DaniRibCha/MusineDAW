
$(document).ready(function () {
	
	$("#loadMore").click(function () {
		
		$('#spin').html("<img src='../img/loader.gif'/>");
	        
	        $.ajax({
	            url: "/UserFollowing/4?page=1"
	        }).done(function (data) {
	            
	            $('#spin').empty()
	            
	            $('#more').append(data);
	            
	            console.log(JSON.stringify(data));

	            //for (var i = 0; i < data.length; i++) {

	              //  var seguidores = data[i];

	                //$('#more').append("<div><h3>"+ seguidores +"</p></div>");
	            //}
	        });
	        
	})
})

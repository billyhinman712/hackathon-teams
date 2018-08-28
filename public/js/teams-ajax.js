$(document).ready(function() {
	console.log("document ready");

$("#edit-form").on("submit", function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("action");
  	var teamData = $(this).serialize();
  	console.log('url is', teamUrl);
  	console.log('data', teamData);

  	$.ajax({
  		method: "PUT",
  		url: teamUrl,
  		data: teamData
  	}).done(function(data){
  		console.log("success!", data);
  		window.location = teamUrl;
  	}).fail(function(err){
  		console.log("error", err);
  	}); //end of ajax
  }); //end of edit-form submit

$("#delete-btn").click(function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("href");
  	console.log("stuff is working", teamUrl);

  	$.ajax({
  		method: "DELETE",
  		url: teamUrl
  	}).done(function(res){
  		console.log('success', res);
  		window.location = "/teams";
  	}).fail(function(err){
  		console.log("err", err);
  	});

  });

});

var say = function(message){
	console.log(message)
}


$("#homepage").on("pageinit", function(){
	$("#newProjPageBTN").on("click", function(){
		say("hello new Proj")
	});

	$("#projectsPageBTN").on("click", function(){
		say("hello Projects")
	});
	$("#nav").on("click", function(){
		say("hello nav")
	});
});

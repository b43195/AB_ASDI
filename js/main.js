var say = function(message){
	console.log(message)
}


$("#homepage").on("pageinit", function(){

});

$("#addproject").on("pageinit", function(){
	/*$("#addprojform").validate({
		invalidHandler: function(form, validator){},
		submitHandler:function(){
			var projdata = addprojform.serializeArray();
			parsePeepForm(peepData);
		}
	});*/
//add validator plug in to JS folder
});

$("#projectlist").on("pageinit", function(){
	//write JSON and XML data
	// populate list items based on active or complete
});

$("#settings").on("pageinit", function(){
	//write clear storage call
});
$(function(){
	//csvデータの読込
	$.get("data/target.csv", function(csvData){
		for(i=1; i<csvData.length; i++) {
			var row = csvData.split("\n")[i].split(",")[0];
			var row2 = csvData.split("\n")[i].split(",")[1];
			$("#hinmoku").append('<option value="'+row+'">' + row2)
				.change(function() {
					$("#hinmoku2").text($("#hinmoku option:selected").val());
				});
		}
	});
});

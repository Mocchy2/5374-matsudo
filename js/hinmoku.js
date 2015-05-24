$(function(){
	//テキストデータの読込
	$.get("data/target.csv", function(csvData){
		for(i=1; i<csvData.length; i++) {
			var cell = csvData.split("\n")[i].split(",")[0];
			var cell2 = csvData.split("\n")[i].split(",")[1];
			$("#hinmoku").append('<option value="'+cell+'">' + cell2)
					.change(function() {
					        $("#hinmoku2").text($("#hinmoku option:selected").val());
					});
		}
	});
});

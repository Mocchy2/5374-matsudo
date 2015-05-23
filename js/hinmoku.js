$(function(){
	//テキストデータの読込
	$.get("data/target.csv", function(csvData){
		for(i=1; i<csvData.length; i++) {
			var resultArray = csvData.split("\n")[i].split(",")[1];
			var resultArray2 = csvData.split("\n")[i].split(",")[0];
			$("#hinmoku").append('<option value="'+resultArray2+'">' + resultArray);

			$("#hinmoku").change(function() {
			        var myValue = $("#hinmoku option:selected").val();
			        $("#hinmoku2").text(myValue);
			});
		}
	});
});

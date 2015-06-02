$(function(){
	//csvデータの読込
	$.get("data/target.csv", function(csvData){
		var arr1 = [];
		var arr2 = [];
		
		for(var i in csvData) {
			var row1 = csvData.split("\n")[i].split(",")[0];
			var row2 = csvData.split("\n")[i].split(",")[1];
			arr1.push(row1);
			arr2.push(row2);
		}
		
		var s = "<select>";
		for(var j in csvData) {
			s += "<option value='"+arr1[j]+"'>"+arr2[j];
		}
		s += "</select>";
//		$("#hinmoku")
	});
});

/*
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
*/

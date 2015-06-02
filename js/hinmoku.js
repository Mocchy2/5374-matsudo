	$(function() {
		//テキストデータの読込
		$.get("data/target.csv", function(csvData) {
			csvData = csvData.replace("/\r/gm", "");
			var line = csvData.split("\n"),
				ret1 = [],
				ret2 = [],
				s = "<select>";

			for (var i=1; i<line.length; i++) {
				if(line[i].length == 0) continue;

				var row1 = line[i].split(",")[0];
				var row2 = line[i].split(",")[1];
				ret1.push(row1);
				ret2.push(row2);
			}
//			document.write(ret, "<br/>");

			for (var j in ret1) {
				s += "<option value='"+ret1[j]+"'>"+ret2[j];
			}
			s += "</select>"
//			document.write(s, "<br/>");
//			document.getElementById("hinmoku").innerHTML = s;
			$("#hinmoku").html(s);

			$("#hinmoku").change(function() {
				$("#hinmoku2").text($("#hinmoku option:selected").val());
			});

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

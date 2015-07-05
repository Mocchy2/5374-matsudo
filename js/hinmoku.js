$(function() {
  //テキストデータの読込
  $.get("data/target.csv", function(csvData) {
    csvData = csvData.replace("/\r/gm", "");
    var line = csvData.split("\n"),
      ret1 = [], //ごみの種類 配列
      ret2 = [], //ごみ品目　 配列
      ret3 = [], //注意事項　配列
      s = "";

    s += "<option value=''>ごみの種類を選択してください";

    for (var i=1; i<line.length; i++) {
      if(line[i].length == 0) continue; //空行はスキップ

      var row1 = line[i].split(",")[0];
      var row2 = line[i].split(",")[1];
      var row3 = line[i].split(",")[2];
      ret1.push(row1);
      ret2.push(row2);
      ret3.push(row3);
    }

    for (var j in ret1) {
      s += "<option value='"+ret1[j]+"'>"+ret2[j]+" "+ret3[j]; //セレクトボックス作成
    }

    $("#hinmoku").html(s).change(function() { //表示
      // ↓id属性hinmoku2にごみの種類を表示
      $("#hinmoku2").text($("#hinmoku option:selected").val());
    });

  });

});

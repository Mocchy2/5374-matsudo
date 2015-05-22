		var geocoder = new google.maps.Geocoder(); //ジオコーダー
		var latlng = new google.maps.LatLng(0, 0); //緯度経度を示すオブジェクト
		var options = {
			center: latlng, //地図の中心の緯度経度
		}
		var mymap = new google.maps.Map(document.getElementById('map'), options); //地図を作製する

		/*現在地を取得する*/
		function getPosition() {
			if(navigator.geolocation){ //navigator（ブラウザのこと）がgeolocationに対応していた場合
			    navigator.geolocation.getCurrentPosition(function (position) { //現在地の取得
			        mymap.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude)); //取得した緯度経度をもとにマップを移動させる
	
			        geocoder.geocode({ //ジオコーダー
			            'latLng': mymap.getCenter() //リバースジオコーディングしたい場所の緯度経度
			        }, function (result, status) {
			            if (status == google.maps.GeocoderStatus.OK) { //正しく住所から緯度経度などの情報を取得
	
			                var address = result[0].formatted_address;
	
			            		if(address.match(/坂戸市青木/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「青木」です。";
			            		} else if(address.match(/坂戸市赤尾/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「赤尾」です。";
			            		} else if(address.match(/坂戸市浅羽/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「浅羽」です。";
			            		} else if(address.match(/坂戸市浅羽野[1-3]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「浅羽野1-3丁目」です。";		            			 
			            		} else if(address.match(/坂戸市厚川/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「厚川」です。";		            			 
			            		} else if(address.match(/坂戸市芦山町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「芦山町」です。";		            			 
			            		} else if(address.match(/坂戸市石井/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「石井」です。";		            			 
			            		} else if(address.match(/坂戸市伊豆の山町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「伊豆の山町」です。";		            			 
			            		} else if(address.match(/坂戸市泉町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「泉町」です。";		            			 
			            		} else if(address.match(/坂戸市泉町2丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「泉町2丁目」です。";		            			 
			            		} else if(address.match(/坂戸市泉町3丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「泉町3丁目」です。";		            			 
			            		} else if(address.match(/坂戸市今西/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「今西」です。";		            			 
			            		} else if(address.match(/坂戸市欠ノ上/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「欠ノ上」です。";		            			 
			            		} else if(address.match(/坂戸市片柳/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「片柳」です。";		            			 
			            		} else if(address.match(/坂戸市片柳新田/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「片柳新田」です。";		            			 
			            		} else if(address.match(/坂戸市金田/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「金田」です。";		            			 
			            		} else if(address.match(/坂戸市鎌倉町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「鎌倉町」です。";		            			 
			            		} else if(address.match(/坂戸市上吉田/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「上吉田」です。";		            			 
			            		} else if(address.match(/坂戸市藁方/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「藁方」です。";		            			 
			            		} else if(address.match(/坂戸市北浅羽/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「北浅羽」です。";		            			 
			            		} else if(address.match(/坂戸市北大塚/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「北大塚」です。";		            			 
			            		} else if(address.match(/坂戸市北峰/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「北峰」です。";		            			 
			            		} else if(address.match(/坂戸市けやき台/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「けやき台」です。";		            			 
			            		} else if(address.match(/坂戸市紺屋/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「紺屋」です。";		            			 
			            		} else if(address.match(/坂戸市小沼/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「小沼」です。";		            			 
			            		} else if(address.match(/坂戸市小山/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「小山」です。";		            			 
			            		} else if(address.match(/柏市/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「坂戸」です。";		            			 
			            		} else if(address.match(/坂戸市沢木/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「沢木」です。";		            			 
			            		} else if(address.match(/坂戸市三光町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「三光町」です。";		            			 
			            		} else if(address.match(/坂戸市島田/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「島田」です。";		            			 
			            		} else if(address.match(/坂戸市清水町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「清水町」です。";		            			 
			            		} else if(address.match(/坂戸市新ヶ谷/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「新ヶ谷」です。";		            			 
			            		} else if(address.match(/坂戸市成願寺/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「成願寺」です。";		            			 
			            		} else if(address.match(/坂戸市関間[1-4]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「関間1-4丁目」です。";		            			 
			            		} else if(address.match(/坂戸市善能寺/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「善能寺」です。";		            			 
			            		} else if(address.match(/坂戸市多和目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「多和目」です。";		            			 
			            		} else if(address.match(/坂戸市千代田[1-5]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「千代田1-5丁目」です。";		            			 
			            		} else if(address.match(/坂戸市千代田4丁目7番/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「千代田4丁目7番」です。";		            			 
			            		} else if(address.match(/坂戸市塚越/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「塚越」です。";		            			 
			            		} else if(address.match(/坂戸市塚崎/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「塚崎」です。";		            			 
			            		} else if(address.match(/坂戸市鶴舞[1-4]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「鶴舞1-4丁目」です。";		            			 
			            		} else if(address.match(/坂戸市戸口/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「戸口」です。";		            			 
			            		} else if(address.match(/坂戸市中里/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「中里」です。";		            			 
			            		} else if(address.match(/坂戸市仲町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「仲町」です。";		            			 
			            		} else if(address.match(/坂戸市中富町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「中富町」です。";		            			 
			            		} else if(address.match(/坂戸市長岡/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「長岡」です。";		            			 
			            		} else if(address.match(/坂戸市新堀/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「新堀」です。";		            			 
			            		} else if(address.match(/坂戸市西坂戸[1-5]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「西坂戸1-5丁目」です。";		            			 
			            		} else if(address.match(/坂戸市にっさい花みず木[1-8]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「にっさい花みず木1-8丁目」です。";		            			 
			            		} else if(address.match(/坂戸市花影町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「花影町」です。";		            			 
			            		} else if(address.match(/坂戸市東坂戸[1-2]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「東坂戸1-2丁目」です。";		            			 
			            		} else if(address.match(/坂戸市東和田/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「東和田」です。";		            			 
			            		} else if(address.match(/坂戸市日の出町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「日の出町」です。";		            			 
			            		} else if(address.match(/坂戸市堀込/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「堀込」です。";		            			 
			            		} else if(address.match(/坂戸市本町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「本町」です。";		            			 
			            		} else if(address.match(/坂戸市溝端町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「溝端町」です。";		            			 
			            		} else if(address.match(/坂戸市南町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「南町」です。";		            			 
			            		} else if(address.match(/坂戸市森戸/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「森戸」です。";		            			 
			            		} else if(address.match(/坂戸市薬師町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「薬師町」です。";		            			 
			            		} else if(address.match(/坂戸市柳町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「柳町」です。";		            			 
			            		} else if(address.match(/坂戸市八幡[1-2]丁目/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「八幡1-2丁目」です。";		            			 
			            		} else if(address.match(/坂戸市山田町/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「山田町」です。";		            			 
			            		} else if(address.match(/坂戸市横沼/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「横沼」です。";		            			 
			            		} else if(address.match(/坂戸市四日市場/)) {
			            			 document.getElementById("judge").innerHTML = "お使いの地域は「四日市場」です。";		            			 
			            		} else {
			            			alert("範囲外です。");
			            		}
	
			            } else {
			                alert("エラー！");
			            }
			        });
	
			    }, function () {
			        alert('現在地を取得できません！'); //現在地が取得できなかった場合
			    });
	
			} else {
				alert('対応していません！'); //ブラウザが対応していない場合
			}
		}

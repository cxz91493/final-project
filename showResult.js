window.onload = function(){

	var gov_cost;
	var cat_cost;
	var pelican_cost;
	var hct_cost;
	var buffer = 10000;
	var cheapest_price = 0;
	var cheapest;
	var cheapest_company = "";
	var other_company = "";
	var all_invalid = true;

	var cost_array = [];
	var company_array = ["中華郵政", "黑貓宅急便", "台灣宅配通", "新竹貨運"];
	var cheapest_array = [false, false, false, false];

	var gov_cheapest = false;
	var cat_cheapest = false;
	var pelican_cheapest = false;
	var hct_cheapest = false;

	var compare_cost = function(){
		
		// Find the cheapest price
		for(var i=0; i<cost_array.length ; i++){
			if(cost_array[i] != 0){
				if(cost_array[i] < buffer){
					buffer = cost_array[i];
				}
			}
		}
		cheapest_price = buffer;

		//find cheapest company
		for(var i=0; i<cost_array.length ; i++){
			if(cost_array[i]  === cheapest_price){
				cheapest_array[i] = true;
			}
		}

		for(var i=0; i<cost_array.length ; i++){
			if(cost_array[i] === "0"){
				other_company += (company_array[i] + ": 無服務   " );

			}else{

				if(cheapest_array[i]  === true){
					cheapest_company += company_array[i];
					cheapest_company += "   ";
					var img_class = ".img" + i.toString() ;
					var img_class1 = "img" + i.toString() ;


					$(img_class).addClass(function( index, currentClass ) {
						var addedClass;

						if ( currentClass === img_class1 ) {
							addedClass = "alpha";
						}
						return addedClass;
					});


				}else if(cheapest_array[i] === false){
					other_company += (company_array[i] + ":$" + cost_array[i] );
					other_company += " ";
				}
			}
		}
	}

		
	var getValue = function(varname) {// Get value from url 
	     
	    //URL
	    var url = location.href;
	     
	    //取得問號之後的值
	    var temp = url.split("?");
	 
	    //將值再度分開
	    var vars = temp[1].split("&");
	 
	 	for (i=0; i<vars.length; i++)
		{
		    var parts = vars[i].split("=");
		    if (parts[0] == varname)
		    {
			      value = parts[1];
			      break;
		    }
		}
		return value;
	 
	}

	cost_array[0] = getValue("gov");
	cost_array[1] = getValue("cat");
	cost_array[2] = getValue("pelican");
	cost_array[3] = getValue("hct");


	for(var i=0; i<cost_array.length ; i++){
		if(cost_array[i]!=0){
			all_invalid = false;
			break;
		}
	}
	if(all_invalid === false){
		compare_cost();
	}else{
		alert("抱歉,\n您的包裹不符合要求,\n請重新輸入,謝謝");
		window.location.href = "index.html" ;
	}
	

	document.getElementById('show-result1').innerHTML = cheapest_company ;
	document.getElementById('show-price').innerHTML = "花費: $"+cheapest_price ;
	document.getElementById('show_others').innerHTML = other_company ;
	
};


   	






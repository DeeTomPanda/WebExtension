
//To calculate and display ui
//

function testGetCO2(CO2inG) {
    
    // g --> ppm: https://www.unitconverters.net/concentration-solution/gram-liter-to-part-million-ppm.htm
    let CO2inPpm = Math.round(CO2inG * 1001.14);
    CO2inG = CO2inG.toFixed(3);
    CO2inG += " g";
    document.getElementById("currCO2").innerHTML = CO2inG;

    //Convert ppm --> px scale:
        //Range in PPM: 300ish ppm - 500ppm    --> divide into 3: 0px - 175px
        // 300 - 369 | 370 - 429 | 430 - 550 ppm
        // 0 - 59px | 60px - 116 | 117 - 175 px
        // 0.85px = 1 ppm
        //(0.94px = 1ppm) + 60
        //(0.48px = 1ppm) + 117
    let dialPoint = 0;
    if (CO2inPpm <= 369) {
        if (CO2inPpm >= 300) {
            dialPoint = Math.trunc((CO2inPpm - 300) * 0.85);
        }
        else {
            dialPoint = 0;
        }
    }
    else if (CO2inPpm >= 370 && CO2inPpm <= 429) {
        dialPoint = Math.trunc(((CO2inPpm - 370) * 0.94) + 60);
    }
    else {
        if (CO2inPpm <= 550) {
            dialPoint = Math.trunc(((CO2inPpm - 430) * 0.48) + 117);
        }
        else {
            dialPoint = 175;
        }
    }

    dialPoint += "px";
    document.getElementById("dial").style.left = dialPoint;
}

//The main request to server part
var URL;
var port;
let div=document.getElementById('currCO2');
chrome.tabs.query({"active": true,                                                                    
          "lastFocusedWindow": true},async(d)=>{
          let tabs=await d;                                              
          console.log(tabs[0].url);
	  URL=tabs[0].url;
          port = chrome.tabs.connect(tabs[0].id,{name: "channelName"});
          port.postMessage({url:tabs[0].url});
 	
	  div.innerHTML="Loading...";
	
	  fetch("http://localhost:8888/",{
          method:"POST",
          mode:"cors",  
          headers: {    
              'Accept': 'application/json',  //or text/json
              "Content-Type": "application/json" 
            },
	  body:JSON.stringify({URL:URL})
  	})
  	.then(async(res)=>res.json())
  	.then((data)=>{
		testGetCO2(data.co2PerPageview);
	})
  	.catch(err=>console.log(err));
})


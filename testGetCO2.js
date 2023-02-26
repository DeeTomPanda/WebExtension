
testGetCO2();

function testGetCO2() {
    let CO2inKG = 0;
    for (let i = 1; i <= 12; i++) { //random function to "calculate CO2"
        CO2inKG += i;
    }
    CO2inKG += " KG";
    document.getElementById("currCO2").innerHTML = CO2inKG;    

    document.getElementById("dial").style.left = "135px";
    //Range in PPM: 380ish ppm - 450ppm    
    // https://www.co2.earth/daily-co2#:~:text=418.49%20ppm&text=This%20table%20presents%20the%20most,parts%20per%20million%20(ppm
    // https://climate.nasa.gov/climate_resources/24/graphic-the-relentless-rise-of-carbon-dioxide/#:~:text=They%20tell%20us%20that%20levels,see%20fluctuations%20in%20the%20graph
    
}
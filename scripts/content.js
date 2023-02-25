let heading=document.querySelector('h1');		//Selects the header(h1) of th rendered web page
const div=document.createElement("div");		//creates a div
div.textContent="Hello from content.js";		//inserts text
heading.insertAdjacentElement("afterbegin",div);	//inserts the 'div" node after the "header" element


fetch("http://localhost:8888/",{
	method:"GET",
	mode:"cors",
	headers: {
            'Accept': 'application/json'  //or text/json
          }
})
.then(async(res)=>res.json())
.then((data)=>console.log(data))
.catch(err=>console.log(err));

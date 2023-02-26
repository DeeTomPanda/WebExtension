chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "ON",
  });



//For tabs
/*
chrome.tabs.query({"active": true,
	"lastFocusedWindow": true},async(d)=>{
	let tabs=await d;
	console.log(tabs[0].id);
	chrome.action.setBadgeText({
		text:String(tabs[0].id)
	});
	port = chrome.tabs.connect(tabs[0].id,{name: "channelName"});
	port.postMessage({url:tabs[0].url});
	
})

*/
const tabID=100;

//chrome.tabs.sendMessage(tabID,"A message!");
})

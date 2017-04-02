var notify_url      = "https://github.com/notifications";

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({url: notify_url});
	chrome.browserAction.setBadgeText({text : "0"});
});

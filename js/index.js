var notif      = "https://github.com/notifications";

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({url: notif});
});

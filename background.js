// // List of vulnerable or phishing sites to block
// var blockedSites = ["vulnerable.com", "apple.com"];

// // Event listener that monitors web requests
// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     // Check if the requested URL matches any of the blocked sites
//     for (var i = 0; i < blockedSites.length; i++) {
//       if (details.url.includes(blockedSites[i])) {
//         // Block the request
//         return {cancel: true};
//       }
//     }
//   },
//   {urls: ["<all_urls>"]},
//   ["blocking"]
// );


chrome.runtime.onInstalled.addListener(function() {
    chrome.webRequest.onBeforeRequest.addListener(
      function(details) {
        var url = details.url.toLowerCase();
        if (url.includes("vulnerable.com") || url.includes("apple.com")) {
          return {cancel: true};
        }
      },
      {urls: ["<all_urls>"]},
      ["blocking"]
    );
  });
  
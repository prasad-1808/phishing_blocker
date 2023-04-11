document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('#toggle');
  
    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        // Block the vulnerable and phishing sites
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
      } else {
        // Allow all sites
        chrome.webRequest.onBeforeRequest.removeListener();
      }
    });
  });
  
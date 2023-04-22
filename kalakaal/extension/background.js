chrome.window.onload = function () {
    chrome.tabs.executeScript(null, { file: "content.js" });
}
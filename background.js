chrome.tabs.onActivated.addListener(tab => {
    console.log(tab)
})

//chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("I injected "))
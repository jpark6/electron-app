// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const config = require('./config/config')

window.addEventListener('DOMContentLoaded', () => {
  console.log(config);
  if(config.name) {
    document.title = config.name
  }

  if(config.url) {
    const webview = document.createElement('webview')
    webview.id = 'webview'
    webview.setAttribute('src', config.url)
    webview.setAttribute('autosize', 'on')
    setTimeout(() =>{
      document.getElementById("webviewWrapper").appendChild(webview)
      document.getElementById("loading-content").remove();
    }, 1500)
  }
})
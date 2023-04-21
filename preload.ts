// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import config, { name, url } from './config/config.json';

(()=> {
  window.addEventListener('DOMContentLoaded', () => {
    //console.log(config);
    if(name) {
      document.title = name
    }

    if(url) {
      addWebView();
    }
  });

  /**
   * addWebView  
   * 메인 화면에 웹뷰 호출  
   * webviewWrapper Element 못 찾을시 재귀 호출  
   * 웹뷰 호출 후, 로딩 애니메이션 제거 
   */
  const addWebView = () => {
      const webview = document.createElement('webview')
      webview.id = 'webview'
      webview.setAttribute('src', url)
      webview.setAttribute('autosize', 'on')
      const webviewWrapper = document.getElementById("webviewWrapper");
      if(webviewWrapper !== null) {
        webviewWrapper.appendChild(webview);
        removeLoadingContainer();
      } else {
        addWebView();
      }
  }

  /**
   * removeLoadingContainer  
   * 로딩 애니메이션 제거  
   * loading-container Element 못 찾을시 재귀 호출
   */
  const removeLoadingContainer = () => {
      const loadingContainer = document.getElementById("loading-container");

    if(loadingContainer !== null) {
      setTimeout(() => {
        loadingContainer.remove();
      }, 2000);
    } else {
      setTimeout(() => {
        removeLoadingContainer();
      }, 500);
    }
  }
})();
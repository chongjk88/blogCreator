for (const launchDetail of document.querySelectorAll("body")) {
  if (launchDetail.getAttribute('data-page') === 'Blog') {
      addBlog();
  }
};

function addBlog() {
  const iframeWrapper = document.createElement("div");
  const iframeButton = document.createElement("Button");
  const iframeRefresh = document.createElement("div");
  const iframeBlog = document.createElement("iframe");

  document.getElementById("main").appendChild(iframeWrapper);
  iframeWrapper.appendChild(iframeButton);
  iframeWrapper.appendChild(iframeRefresh);
  iframeWrapper.appendChild(iframeBlog);
  iframeWrapper.style.position = "relative";

  iframeButton.textContent = "Close Blog Creator";
  iframeButton.style.display = "block";
  iframeButton.style.width = "200px";
  iframeButton.style.height = "45px";
  iframeButton.style.margin = "auto";
  iframeButton.style.backgroundColor = "#01375B";
  iframeButton.style.textAlign = "center";
  iframeButton.style.color = "white";
  iframeButton.style.cursor = "pointer";

  iframeButton.onclick = function(){
      var x = document.getElementById("iframeBlog");
      if (x.style.display === "none") {
          x.style.display = "block";
          iframeButton.textContent = "Close Blog Creator";
          iframeBlog.height = "1000px";
      } else {
          x.style.display = "none";
          iframeButton.textContent = "Open Blog Creator";
          iframeBlog.height = "0";
      }
  };

  iframeRefresh.textContent = "↻";
  iframeRefresh.style.display = "block";
  iframeRefresh.style.cursor = "pointer";
  iframeRefresh.style.position = "absolute";
  iframeRefresh.style.left = "50%";
  iframeRefresh.style.transform = "translateX(-50%)";
  iframeRefresh.style.fontSize = "20px";
  iframeRefresh.style.top = "60px";

  iframeRefresh.setAttribute("title", "Click to refresh the Blog Creator")
  iframeRefresh.onclick = function(){
      iframeBlog.src += "";
  };

  iframeBlog.id = "iframeBlog";
  iframeBlog.src = "https://reputationmanagement.cdk.com/tab/mvc/publisher/page?requestChannel=WSM&webId=" + ContextManager.webId + "&locale=null";
  iframeBlog.width = "100%";
  iframeBlog.height = "1000px";
  iframeBlog.setAttribute ("frameborder", 0);
  iframeBlog.border = "0";



  var loginMessage = document.createElement("div");
  iframeWrapper.appendChild(loginMessage);
  loginMessage.textContent = "The blog creator is loading..\nIf you are seeing this message for more than 1 minute please make sure you are signed into both Okta & WSM in order to load the iframe.";

  loginMessage.style.position = "absolute";
  loginMessage.style.top = "123px";
  loginMessage.style.left = "50%";
  loginMessage.style.transform = "translate(-50%, -50%)";
  loginMessage.style.zIndex = "-1";
  loginMessage.style.whiteSpace = "pre";
  loginMessage.style.textAlign = "center";
}
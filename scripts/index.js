const domain = window.location.hostname;

if (domain.includes("csdn.net")) {
  hideLoginModal("#csdn-toolbar-profile-nologin");

  // set specific cookie to avoid pop up login
  document.cookie = "unlogin_scroll_step=1668442584858; hide_log=1";
} else if (domain.includes("zhihu.com")) {
  // close zhihu login modal
  closeLoginModal(".Modal-closeButton");
} else if (domain.includes("http://bigerfe.com/")) {
  removeElement(".wxcodebox");
}

// set body bg
document.body.style.setProperty("background-color", "#fafafa", "important");
document.body.style.backgroundColor = "#fafafa";

function closeLoginModal(selector) {
  const closeBtn = document.querySelector(selector);

  if (closeBtn) {
    closeBtn.click();
  }
}

function hideLoginModal(selector) {
  const ele = document.querySelector(selector);
  if (ele) {
    ele.style.display = "none";
  }
}

function removeElement(selector) {
  const ele = document.querySelector(selector);
  if (ele) {
    ele.remove();
  }
}

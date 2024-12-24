function isMobile() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android|iphone|ipod|ipad|mobile|tablet/i.test(userAgent);
}

if (isMobile()) {
  window.document.body.innerHTML = "";
} else {
  console.log("You are not using a mobile browser.");
}

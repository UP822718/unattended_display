let lastTime = Date.now();

async function signOut() {
  await gapi.auth2.getAuthInstance().signOut();
}
async function callServer() {
}

setInterval( function () {
  const currentTime = Date.now();
  if (currentTime > (lastTime + CHECK_DELAY*2)){
    gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
  }
  lastTime = currentTime;

}, 500);

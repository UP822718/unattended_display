function changeScrll() {
  let c = document.querySelector("#scroll");
  console.log("te:" + c.value);
  let url = "backend/v1/text";
  let data = {text: c.value};
  let fetchData = {
    method: 'POST',
    body: JSON.stringify({text:c.value}),
    headers: {
      "Content-type":"application/json; charset=UTF-8"
    } }
  fetch(url, fetchData)


}
window.addEventListener("load", function(event) {
  let c = document.querySelector("#scroll");
  c.addEventListener("change", changeScrll);
});

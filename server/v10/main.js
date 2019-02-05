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
function postImages() {
 console.log("Hello");
 let photo = document.getElementById("file").files[0];
 let formData = new FormData();
formData.append("photo", formData);
fetch('/backend/v2/uploadimage', {method: "POST", body: formData});
}

window.addEventListener("load", function(event) {
  let c = document.querySelector("#scroll");
  c.addEventListener("change", changeScrll);
  let x = document.getElementsByName("uploadFile")[0];;
  console.log(x);
  x.addEventListener("click", postImages);
});

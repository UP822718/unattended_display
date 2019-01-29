
let  count = 0;
function AddOne()
{
  if(Number.MAX_VALUE <= count)
  {
    count = 0;
  }
  count = 1 + count;
}
//SelfUpdate
//S
setInterval( reqListener,30000);
async function reqListener () {

    let c = await fetch(`/backend/v1/getContent`);
    console.log(c);
    let x = await c.json();
    for (let content of x.content) {
      console.log(content);
      let img = document.createElement("img");
      img.src =content;
      let element = document.getElementsByClassName("content")[0];
      element.appendChild(img);
      }
      let textscrool = document.getElementById("text");
      textscrool.innerText = x.text;
      textscrool.style.animationDuration = (x.text.length*70)+"ms";
      textscrool.style.animationTimingFunction = "linear";
}
reqListener ();

setInterval(function(){
  AddOne()
  let docs =document.getElementsByClassName("content")[0];
  for (let i = 0; i < docs.children.length; i++) {
    if(count%docs.children.length == i){
    docs.children[i].style.visibility = "visible";
    }
    else{
    docs.children[i].style.visibility = "hidden";

    }
  }
},3000);

let count = 0;
let setup = true;
function AddOne() {
  if (Number.MAX_VALUE <= count) {
    count = 0;
  }
  count = 1 + count;
}
//SelfUpdate
//S
reqListener();
setInterval(reqListener, 30000);
async function reqListener() {

  let c = await fetch(`/backend/v2/getContent`);
  console.log(c);
  let x = await c.json();
  let element = document.getElementsByClassName("content")[0];
  /// what can i remove form the HTML and what can i Remove and what shuld Not ADD
  for (let child of element.childNodes) {
    let remove = true; // tracs if we conent in the html
    for (let index in x.content) {
      if (child.id === x.content[index].id) {
        x.content.splice(index, 1);
        remove = false;
      }
    }
    if (remove) {
      element.removeChild(child);
    }
  }
  //Add Now suff
  for (let content of x.content) {
    switch (content.type) {
      case "image":
        let img = document.createElement("img");
        img.src = content.url;
        img.id = content.id;
        img.style.visibility = "hidden";
        element.appendChild(img);
        break;
      case "video":
        let video = document.createElement("video");
        video.src = content.url;
        video.controls = true;
        video.muted = true;
        video.autoplay= true;
        video.id = content.id;
        video.addEventListener("ended", next, true);
        video.style.visibility = "hidden";
        element.appendChild(video);
        break;
      default:

    }
  }
  let textscrool = document.getElementById("text");
  textscrool.innerText = x.text;
  textscrool.style.animationDuration = (x.text.length * 70) + "ms";
  textscrool.style.animationTimingFunction = "linear";
  if (setup) {
    setup = false;
    next();
  }
}


function next() {
AddOne();
  let docs = document.getElementsByClassName("content")[0];
  for (let i = 0; i < docs.children.length; i++) {
    if (count % docs.children.length == i) {
      docs.children[i].style.visibility = "visible";
      if (docs.children[i].nodeName == "VIDEO") {
        //Not using .play becase it error if video is dont dowloaded
        docs.children[i].autoplay = true;
        docs.children[i].currentTime = 0;
      } else {
        setTimeout(next, 2000)
      }
    } else {
      docs.children[i].style.visibility = "hidden";

    }
  }
}

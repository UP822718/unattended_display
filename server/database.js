let contentList = [];
const { promisify } = require('util');
const fs = require('fs');
//const rename = promisify(fs.rename);

let nextId = 6;
contentList.push({"id":"6","url":"/content/The-Last-Jedi-Changes.jpeg","type":"image"});
contentList.push({"id":"5","url":"/content/star-wars-movie-posters.jpg","type":"image"});
contentList.push({"id":"4","url":"/content/270px-13amp_fullshot.png","type":"image"});
//contentList.push({"id":"3","url":"/content/tears-of-steel_teaser.mp4","type":"video"});
contentList.push({"id":"2","url":"/content/Agent 327 Operation Barbershop.mp4","type":"video"});
contentList.push({"id":"1","url":"/content/5c475ca9b499e000011032d6-image_8bfea5dc.jpeg","type":"image"});

let text = `Hn a time warp. Keep pressing it. Maybe you'll break free. What's that. The little counter at the bottom keeps going up? Never mind. That's just how many times you have to click before you can leave. Good-bye.`;

function getContentV2() {
  return contentList;
}
function getContentV2() {
  return contentList;
}

function getContentV1() {
  let l =[];
  for (let prop of contentList) {
      if(prop.type == "image"){
        l.push(prop.url);
      }
    }
  return l;
}
function getContentV2() {
  return contentList;
}




function addImage(reqFile) {
    fs.rename(reqFile.path,"./static/content/"+reqFile.filename+".png");
   nextId += 1;
   let con = {"id":nextId,"url":"./static/content/"+reqFile.filename+".png","type":"image"};
   contentList.push(item);
  console.log(contentList);
}

function addVideo(url) {
  contentList.push({"url":url,"type":"video"})
}

function addCanvas(url) {
  contentList.push({"url":url,"type":"canvas"})
}
function addWebGl(url) {
  contentList.push({"url":url,"type":"webgl"})
}

function setText(text_) {
  text = text_;
}


function getText() {
  return text;
}



module.exports={"addImage":addImage,"getContentV2":getContentV2,"getContentV1":getContentV1,"addimage":addImage,"getText":getText,"setText":setText};

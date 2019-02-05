const { promisify } = require('util');
const fs = require('fs');
const config = require('../config.json');
const mysql = require('mysql2/promise');
let connection = "";
async function mainSetup() {
  connection = await mysql.createConnection({  "host":"localhost",  "database": "unattended"  });
}
mainSetup()

function getContentV2() {
  return contentList;
}
async function getContentV2() {
  const [rows, fields] = await connection.execute('SELECT * FROM `content`');
  console.log(rows);
  return {};
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

function addImage(reqFile) {
    fs.rename(reqFile.path,"./static/content/"+reqFile.filename+".png");
   await connection.execute(`INSERT INTO Customers (url, type)VALUES (?,?,?)`, [url, "video"]);
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
  return "";
}



module.exports={"addImage":addImage,"getContentV2":getContentV2,"getContentV1":getContentV1,"addimage":addImage,"getText":getText,"setText":setText};

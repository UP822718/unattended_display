let contentList = [];
const { promisify } = require('util');
const fs = require('fs');

const renameAsync = promisify(fs.rename);
let nextId = 7;
contentList.push({"id":"6","url":"/content/The-Last-Jedi-Changes.jpeg","type":"image"});
contentList.push({"id":"5","url":"/content/star-wars-movie-posters.jpg","type":"image"});
contentList.push({"id":"4","url":"/content/270px-13amp_fullshot.png","type":"image"});
//contentList.push({"id":"3","url":"/content/tears-of-steel_teaser.mp4","type":"video"});
//contentList.push({"id":"2","url":"/content/Agent 327 Operation Barbershop.mp4","type":"video"});
contentList.push({"id":"1","url":"/content/5c475ca9b499e000011032d6-image_8bfea5dc.jpeg","type":"image"});
let text = `Hello, everyone! This is one of the weirdest sites: or your money back! We have ZIM, neopets, music, and much, much, more. E-mail us for questions, comments, complaints and information. Why not click on the Very Weird Stuff link to see more, or click on the music link? We have halloween and christmas pictures on the NeoPics link. Cheese is not a wild thing!!!!!!!!! Now I have decided to go for a world record. I will try to make the longest web page ever, made completely out of text! Won't that be fun? I will just type, and type, and never, ever use copy and paste. Wow...I really must be bored. Just goes to show what boredom can do to you. Any way, that's it for now. Wait, no it isn't, I still have to keep going, and going, and going. Because I do. THE REST OF THE STUFF I TYPE WILL BE COMPLETLY IN CAPS JUST BECAUSE I CAN. THAT IS ALL. SEEYA! Hi, I'm back. So far this is nowhere near the world record. I think. I don't exactly know where it is...oh, well. I'll just have to do the very best that I can. No one is really coming here, anyway. So it doesn't matter. By the way, TAB is a worthwhile, community-service organization. The form link is to a 100% fake TAB registration form that you can fill out just for laughs. I can't believe I'm bothering to do this. I have very low expectations of my site. None ever comes here, I could do this all day long and I still wouldn't have any more hits. This is just a pointless excursive in spelling errors and grammatical imprecision. May your day be shiney! The following is an extremely weird poem-thingy that I wrote when I was in a relatively weird mood:never mind that noise my dear can anyone pass the cheese only if you say pretty please oh, boy do I have to sneeze. why must everyone always rhyme, why I’m a poet and don’t I know it? what I fear comes right after here not this life or the next will I ever be able to pass the test? we’re stuck in here, (alone my dear) and we’ll problem never get out so don’t start to shout. it’s dark and I want to go home is where the heart was where is it now? we’ll never know but oh crap it’s starting to snow and it’s time to show and tell about the well that you found last summer at camp when it was damp it was near the ramp oh god why must this be I liked that tree but now it’s gone, farewell so long I’ll miss you as long as you write but then I’m afraid to say good-night. my dear there’s nothing to fear that’s only a box that’s made of blocks next to the wagon that looks like a dragon why are you shaking it’s your fear that is making you shiver and act all a quiver. don’t you know that you only need be afraid of fear and never anything here and certainly not a post that acts like a ghost?See, very weird. At least it fills up my word quota for the day. Not that I exactly have a word quota for the day. It just sounded very professional to say it. Anyway, I still don't think that anyone is actually coming here. You'd have to be an absolute loser (or really bored) to come here. I'd probley come here, but that isn't much of a surprise. After all, I've been to the Really Really Big Button That Doesn't Do Anything website over 50 times. Pathetic. But, whatever. As long as I'm happy, right. Humor the crazy person, okay? Oh, guess what? According to someone you problem don't know, this is the second most pointless website ever! Next to the Really Big Button, of course. I feel special. Come on everyone, group hug. Okay, now I'm starting to scare myself...I'm gonna quit for today. Seeya. Now I'm back. Is this getting confusing to you? Too bad. Now I want you to go to http://quiz.ravenblack.net/blood.pl?biter=eon" If you do this I'll get points in the game. Come on all you non-existing people! Help me! You know you want to! It's a worthy cause! Honestly, the more time I waste playing the game, the less time I'll work on this site and the less stuff you gotta read. Although why you'd be here if you didn't want to read is beyond me. Maybe you're lost. Okay, if you want to get out, click the little refresh button, okay? Good...what? You say it didn't let you out? Oh, well. You must be caught in a time warp. Keep pressing it. Maybe you'll break free. What's that. The little counter at the bottom keeps going up? Never mind. That's just how many times you have to click before you can leave. Good-bye.`;

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



async function addImage(reqFile) {
  const fileExt = reqFile.mimetype.split('/')[1] || 'png';
  const newFilename = reqFile.filename + '.' + fileExt;
  await renameAsync(reqFile.path, "./static/content" + newFilename);
  const item = {
    id: data.nextId,
    url: newFilename
  };
  contentList.push(item);
  nextId =+1;

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



module.exports={"getContentV2":getContentV2,"getContentV1":getContentV1,"addimage":addImage,"getText":getText,"setText":setText};

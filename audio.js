(()=>{
let current=null,token=0;
function stop(){token++;if(current){current.pause();current=null}if('speechSynthesis' in window)speechSynthesis.cancel()}
function speak(text,rate){return new Promise(res=>{
  if(!text||!('speechSynthesis' in window)){console.warn('No audio for:',text);return res()}
  const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=rate||.85;
  const v=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('fr'));if(v)u.voice=v;
  u.onend=u.onerror=()=>res();speechSynthesis.speak(u)})}
// 先試音檔，失敗就用法語 TTS；播完才 resolve
function one(src,text,rate){return new Promise(res=>{
  let done=false;const fb=()=>{if(done)return;done=true;speak(text,rate).then(res)};
  if(!src)return fb();
  const a=new Audio(src);a.playbackRate=rate||1;current=a;
  a.onended=()=>{done=true;res()};a.onerror=fb;a.play().catch(fb)})}
window.playSeq=async items=>{stop();const t=token;
  for(const it of items){if(t!==token)return;await one(it.src,it.text,it.rate);if(t!==token)return;await new Promise(r=>setTimeout(r,350))}};
window.playFrench=(src,text,rate)=>playSeq([{src,text,rate}]);
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-say]');if(!b)return;
  const w=b.dataset.say,items=[];
  if(b.dataset.pre)items.push({src:b.dataset.preSrc,text:b.dataset.pre});
  items.push({src:b.dataset.src||`assets/audio/words/${encodeURIComponent(w.toLowerCase())}.mp3`,text:w});
  playSeq(items)
});
document.addEventListener('error',e=>{
  const i=e.target;
  if(i.tagName!=='IMG'||i.dataset.failed||!i.src.includes('mouth-diagrams'))return;
  i.dataset.failed='1';
  const name=decodeURIComponent(i.src.split('/').pop());
  i.src='data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="100%" height="100%" fill="#fff3ea" stroke="#e8a77a" stroke-dasharray="6"/><text x="120" y="85" text-anchor="middle" font-size="14" fill="#a5532a">找不到圖片</text><text x="120" y="110" text-anchor="middle" font-size="12" fill="#a5532a">${name}</text></svg>`);
  console.warn('Missing mouth diagram:',name)
},true);
})();

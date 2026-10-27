(()=>{
let current=null;
function stop(){if(current){current.pause();current=null}if('speechSynthesis' in window)speechSynthesis.cancel()}
function speak(text){
  if(!text||!('speechSynthesis' in window)){console.warn('No audio file and no speech synthesis for:',text);return}
  const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.85;
  const v=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('fr'));if(v)u.voice=v;
  speechSynthesis.speak(u)
}
// 先嘗試音檔；找不到就退回瀏覽器法語 TTS
window.playFrench=(src,text)=>{
  stop();
  if(!src)return speak(text);
  const a=new Audio(src);current=a;
  a.onerror=()=>speak(text);
  a.play().catch(()=>speak(text))
};
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-say]');if(!b)return;
  const w=b.dataset.say;
  playFrench(b.dataset.src||`assets/audio/words/${encodeURIComponent(w.toLowerCase())}.mp3`,w)
});
// 口型圖載入失敗時顯示缺少的檔名，方便除錯
document.addEventListener('error',e=>{
  const i=e.target;
  if(i.tagName!=='IMG'||i.dataset.failed||!i.src.includes('mouth-diagrams'))return;
  i.dataset.failed='1';
  const name=decodeURIComponent(i.src.split('/').pop());
  i.src='data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="180"><rect width="100%" height="100%" fill="#fff3ea" stroke="#e8a77a" stroke-dasharray="6"/><text x="120" y="85" text-anchor="middle" font-size="14" fill="#a5532a">找不到圖片</text><text x="120" y="110" text-anchor="middle" font-size="12" fill="#a5532a">${name}</text></svg>`);
  console.warn('Missing mouth diagram:',name)
},true);
})();

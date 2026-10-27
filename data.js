window.FRENCH_DATA=(()=>{
const p=n=>`assets/mouth-diagrams/${n}.png`;
const diagrams={spread:p('front-spread'),front:p('front-rounded'),back:p('back-rounded'),open:p('open-vowel'),neutral:p('mid-neutral'),nasal:p('nasal-open'),nasalRound:p('nasal-rounded'),lips:p('lip-closure'),alveolar:p('alveolar-contact'),velar:p('velar-contact'),fricative:p('sh-zh'),uvular:p('uvular-r'),labiodental:p('lip-teeth')};
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ipas=['/a/','/be/','/se/','/de/','/ə/','/ɛf/','/ʒe/','/aʃ/','/i/','/ʒi/','/ka/','/ɛl/','/ɛm/','/ɛn/','/o/','/pe/','/ky/','/ɛʁ/','/ɛs/','/te/','/y/','/ve/','/dubləve/','/iks/','/igʁɛk/','/zɛd/'];
const steps=[['open'],['lips','spread'],['alveolar','spread'],['alveolar','spread'],['neutral'],['open','labiodental'],['fricative','spread'],['open','fricative'],['spread'],['fricative','spread'],['velar','open'],['open','alveolar'],['open','lips'],['open','alveolar'],['back'],['lips','spread'],['velar','front'],['open','uvular'],['open','alveolar'],['alveolar','spread'],['front'],['labiodental','spread'],['alveolar','back','lips','spread'],['spread','velar','alveolar'],['spread','velar','uvular','open','velar'],['alveolar','open','alveolar']];
const examples=[['ami','avion'],['bonjour','bébé'],['café','cinéma'],['deux','dimanche'],['enfant','été'],['fleur','famille'],['gare','girafe'],['hôtel','homme'],['ici','image'],['jour','jardin'],['kilo','kayak'],['livre','lune'],['maman','merci'],['non','neige'],['orange','rose'],['Paris','père'],['qui','quatre'],['rue','rouge'],['soleil','sœur'],['table','tête'],['une','univers'],['vous','ville'],['wagon','week-end'],['taxi','six'],['yeux','style'],['zéro','zoo']];
const specialTips={A:['嘴巴自然張開。','舌頭平放、聲音放鬆。'],E:['嘴唇與下巴保持放鬆。','聲音短而居中。'],G:['讓帶聲氣流從舌面與上顎間通過。','法文 G /ʒe/ 容易和英文字母 J 的名稱混淆。'],I:['嘴角微微向兩側展開。','舌頭抬高並靠前。'],J:['先發柔和、帶聲的 /ʒ/。','接 /i/；不要套用英文字母 J。'],O:['嘴唇向前收圓。','舌頭抬高並靠後。'],Q:['舌根先短暫接觸軟顎。','發 /y/ 時嘴唇收圓，舌位接近 /i/。'],R:['先發 /ɛ/。','再讓舌後部靠近小舌區域形成摩擦。'],U:['舌頭抬高並靠前，像發 /i/。','保持舌位並把嘴唇向前收圓。'],W:['這是多音節字母名稱。','依序觀察每個音節的主要口型。'],X:['先發 /i/。','結尾依序形成 /k/ 與 /s/。'],Y:['這是多音節字母名稱。','依序發 /i/、/g/、/ʁ/、/ɛ/、/k/。']};
const alphabet=letters.map((letter,i)=>({letter,ipa:ipas[i],tips:specialTips[letter]||['依序做出圖示中的口型與舌位。','保持法文字母名稱的節奏，不套用英語讀法。'],diagrams:steps[i].map(k=>diagrams[k]),diagramNote:steps[i].length>1?'依字母名稱發音順序顯示主要口型步驟。':'主要口型與舌位示意。',examples:examples[i].map(word=>({word,audio:null})),audio:null}));
const mk=(category,tips,key,spellings,words,exception='讀音仍須配合字形、音節與詞彙語境判斷；規則不是無例外的公式。')=>({category,tips,diagram:diagrams[key],spellings,examples:words.map(word=>({word,audio:null})),exception,audio:null});
const sounds={
'/i/':mk('oral',['嘴角微向兩側展開。','舌頭高而靠前，雙唇不圓。'],'spread',[['I','vite'],['Î','île'],['Y','style']],['ici','vite','lit']),
'/y/':mk('oral',['舌位像 /i/ 一樣高而靠前。','保持舌位，再把雙唇向前收圓。'],'front',[['U','tu'],['Û','dû']],['tu','lune','futur']),
'/u/':mk('oral',['嘴唇向前收圓。','舌頭抬高、位置靠後；這是與 /y/ 的主要差異。'],'back',[['OU','vous'],['OU','rouge'],['OÛ','goût'],['OÙ','où']],['vous','rouge','goût']),
'/e/':mk('oral',['嘴巴開度較小。','舌頭靠前，嘴唇不圓。'],'spread',[['É','été'],['ER','parler'],['EZ','nez']],['été','parler','nez']),
'/ɛ/':mk('oral',['下巴比 /e/ 更打開。','舌頭靠前，聲音放鬆。'],'open',[['È','père'],['AI','maison'],['EI','neige']],['père','maison','sel']),
'/a/':mk('oral',['嘴巴自然張開。','舌頭位置低而較前。'],'open',[['A','ami'],['À','là']],['ami','chat','là']),
'/o/':mk('oral',['嘴唇圓起，開度較小。','舌頭靠後。'],'back',[['O','rose'],['AU','chaud'],['EAU','bateau']],['rose','chaud','bateau']),
'/ɔ/':mk('oral',['雙唇微圓。','下巴比 /o/ 更打開。'],'back',[['O','porte'],['AU','Paul']],['porte','fort','sol']),
'/œ/':mk('oral',['舌頭靠前。','嘴唇收圓、下巴稍開。'],'front',[['ŒU','sœur'],['EU','neuf']],['sœur','cœur','neuf']),
'/ə/':mk('oral',['口腔保持放鬆。','在連續語流中可能弱化或省略。'],'neutral',[['E','le'],['E','demain']],['le','petit','demain']),
'/ɑ̃/':mk('nasal',['嘴巴自然張開。','軟顎下降，讓氣流同時經鼻腔共鳴。'],'nasal',[['AN','sans'],['EN','enfant'],['AM','chambre'],['EM','temps']],['sans','enfant','chambre'],'n/m 後接母音或重複 n/m 時通常不形成鼻母音，例如 année。'),
'/ɔ̃/':mk('nasal',['雙唇收圓。','舌頭靠後並加入鼻腔共鳴，不另發 /n/。'],'nasalRound',[['ON','son'],['OM','tomber']],['son','nom','bonjour']),
'/ɛ̃/':mk('nasal',['舌位靠前、口腔較開。','加入鼻腔共鳴。'],'nasal',[['IN','vin'],['AIN','pain'],['EIN','plein']],['pain','matin','vin']),
'/œ̃/':mk('nasal',['舌頭靠前，嘴唇微圓。','保留鼻腔共鳴。'],'nasalRound',[['UN','un'],['UM','parfum']],['un','brun','parfum'],'許多當代口音中，/œ̃/ 可能與 /ɛ̃/ 合流。'),
'/ʃ/':mk('consonant',['舌面靠近硬顎但不完全接觸。','保持無聲摩擦氣流。'],'fricative',[['CH','chat'],['SH','shampoing']],['chat','chercher','bouche']),
'/ʒ/':mk('consonant',['位置接近 /ʃ/，但聲帶振動。','氣流持續，不要完全阻塞。'],'fricative',[['J','jour'],['G + E/I/Y','girafe']],['jour','girafe','neige']),
'/ʁ/':mk('consonant',['舌後部靠近小舌區域。','讓氣流形成輕柔摩擦。'],'uvular',[['R','rue'],['RR','terre']],['rue','rouge','Paris']),
'/g/':mk('consonant',['舌根短暫接觸軟顎。','放開時保持聲帶振動。'],'velar',[['G + A/O/U','gare'],['GU + E/I','guitare']],['gare','gomme','guitare']),
'/k/':mk('consonant',['舌根短暫接觸軟顎。','無聲地迅速放開。'],'velar',[['C + A/O/U','café'],['QU','qui'],['K','kilo']],['café','qui','kilo']),
'/j/':mk('semi',['舌位快速滑向高前位置。','不要拉長成完整 /i/。'],'spread',[['Y','yeux'],['I + vowel','pied'],['ILL','fille']],['yeux','pied','fille']),
'/ɥ/':mk('semi',['先採 /y/ 的前舌圓唇位置。','快速滑向下一個母音。'],'front',[['U + vowel','huit']],['huit','nuit','lui']),
'/w/':mk('semi',['先收圓雙唇。','快速滑向下一個母音。'],'back',[['OU + vowel','oui'],['OI','moi']],['oui','moi','oiseau'])};
const accents=[['é','Accent aigu','常用來標示 /e/，但仍要放在完整單字中判斷。','été · café'],['è','Accent grave','常與較開的 /ɛ/ 有關；也可區分同形詞。','père · très'],['ê','Accent circonflexe','可能影響讀音或保存拼字歷史，不代表單一固定音。','fête · être'],['ç','Cédille','使 c 在 a、o、u 前讀作 /s/。','français · garçon'],['ë','Tréma','提示相鄰母音分開發音。','Noël · Citroën'],['œ','Ligature','常見於 cœur、sœur 等詞，讀音依單字而定。','cœur · sœur']];
const confusions=[['U vs OU','/y/','/u/','兩者都圓唇；/y/ 舌位靠前，/u/ 舌位靠後。'],['/e/ vs /ɛ/','/e/','/ɛ/','/ɛ/ 的下巴開度更大。'],['/ɑ̃/ vs /ɔ̃/','/ɑ̃/','/ɔ̃/','/ɔ̃/ 的雙唇更圓。'],['/ɑ̃/ vs /ɛ̃/','/ɑ̃/','/ɛ̃/','/ɛ̃/ 的舌位更靠前。'],['/ʃ/ vs /ʒ/','/ʃ/','/ʒ/','口腔位置接近；/ʒ/ 有聲帶振動。'],['G vs J spelling','/g/','/ʒ/','j 通常寫 /ʒ/；g 的讀音常受後續字母影響。']].map(([title,left,right,note])=>({title,left,right,note}));
const practiceQuestions=[['m','ai','son',['/e/','/ɛ/','/i/','/a/'],'/ɛ/','maison 中 ai 表示 /ɛ/。'],['t','ou','t',['/y/','/u/','/o/','/ɔ/'],'/u/','tout 中 ou 表示 /u/。'],['l','u','ne',['/u/','/y/','/i/','/œ/'],'/y/','lune 中 u 表示前高圓唇母音 /y/。'],['s','an','s',['/ɑ̃/','/ɔ̃/','/ɛ̃/','/a/'],'/ɑ̃/','sans 中 an 表示鼻母音 /ɑ̃/。']].map(([prefix,target,suffix,options,answer,explanation])=>({prefix,target,suffix,options,answer,explanation,audio:null}));
return{diagrams,alphabet,sounds,categories:[['oral','Oral Vowels'],['nasal','Nasal Vowels'],['consonant','Consonants'],['semi','Semi-vowels']],accents,confusions,practiceQuestions,dictee:{levels:{
A1:{label:'A1',sentences:["Je m'appelle Léa.","J'habite à Marseille.","J'aime le café et le pain.","Le matin, je vais à l'école.","Le soir, je mange avec ma famille."]},
A2:{label:'A2',sentences:["Hier, je suis allée au marché.","J'ai acheté des pommes et du fromage.","Ensuite, j'ai retrouvé une amie au café.","Nous avons parlé de nos vacances.","Il faisait beau, alors nous sommes rentrées à pied."]},
B1:{label:'B1',sentences:["Depuis un mois, j'apprends à cuisiner des plats français.","Malgré quelques erreurs, mes amis ont aimé mon dîner.","Si j'avais plus de temps, je suivrais un cours de pâtisserie.","Il faut que je pratique davantage pour progresser.","Quand j'aurai fini mes études, je voyagerai en France."]},
B2:{label:'B2',sentences:["Bien que la réunion ait été longue, tout le monde est resté attentif.","Le directeur a insisté sur l'importance de respecter les délais.","À moins que nous ne trouvions une solution, le projet sera retardé.","Il est regrettable qu'on n'ait pas consulté les employés plus tôt.","Pourvu que le budget soit approuvé, nous pourrons commencer dès lundi."]}}}};
})();

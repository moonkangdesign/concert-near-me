const TODAY = new Date('2026-11-16T00:00:00');
const COLORS = ['lime','pink','sky','sand','lilac'];
const CV = {lime:'#B8F04F',pink:'#F3A49C',sky:'#7FD0E2',sand:'#E7DDC9',lilac:'#C9B8F2'};

const H = (name,price,walk,rating)=>({name,price,walk,rating});
const CONCERTS = [
 {id:1,title:'바다로 가는 버스',artist:'파도소년',genre:'인디',date:'2026-11-21',time:'19:30',venue:'롤링홀',area:'홍대',km:2.1,pop:82,color:'lilac',
  tiers:[['스탠딩',55000,.22],['지정석',66000,.08]],hotels:[H('스테이 연남 9',89000,6,4.6),H('호텔 와우산',112000,9,4.4)]},
 {id:2,title:'NOVA ROOM: After Dark',artist:'NOVA ROOM',genre:'일렉트로닉',date:'2026-11-21',time:'22:00',venue:'무신사 개러지',area:'홍대',km:1.8,pop:74,color:'sky',
  tiers:[['얼리버드',40000,.0],['일반',50000,.41]],hotels:[H('스테이 연남 9',89000,8,4.6),H('캡슐 홍대 23',42000,4,4.1)]},
 {id:3,title:'겨울 서곡',artist:'서울 윈드 앙상블',genre:'클래식',date:'2026-11-22',time:'17:00',venue:'세종문화회관',area:'광화문',km:6.4,pop:58,color:'sand',
  tiers:[['R석',70000,.35],['S석',50000,.52],['A석',30000,.18]],hotels:[H('호텔 서촌 하우스',134000,11,4.7)]},
 {id:4,title:'기류 단독 콘서트',artist:'MC 기류',genre:'힙합',date:'2026-11-22',time:'18:00',venue:'YES24 라이브홀',area:'광진',km:14.2,pop:91,color:'pink',
  tiers:[['스탠딩 A',88000,.06],['스탠딩 B',88000,.19]],hotels:[H('광나루 리버 스테이',98000,7,4.3),H('호텔 아차산',76000,14,4.0)]},
 {id:5,title:'강 위의 재즈',artist:'모노 트리오',genre:'재즈',date:'2026-11-21',time:'20:00',venue:'노들섬 라이브하우스',area:'용산',km:5.3,pop:67,color:'lilac',
  tiers:[['테이블',60000,.27],['일반',45000,.44]],hotels:[H('용산 리버뷰 호텔',145000,12,4.5)]},
 {id:6,title:'HALO 7 WORLD TOUR [ORBIT]',artist:'HALO 7',genre:'K-POP',date:'2026-11-22',time:'18:00',venue:'KSPO DOME',area:'송파',km:19.5,pop:99,color:'lime',
  tiers:[['VIP',198000,.03],['R석',154000,.11],['S석',132000,.24]],hotels:[H('올림픽 그린 스테이',128000,5,4.4),H('잠실 시티 호텔',109000,15,4.2)]},
 {id:7,title:'철과 꽃',artist:'철제정원',genre:'록',date:'2026-11-28',time:'19:00',venue:'블루스퀘어',area:'한남',km:7.9,pop:79,color:'pink',
  tiers:[['스탠딩',77000,.31],['지정석',88000,.47]],hotels:[H('한남 힐 스테이',118000,9,4.6)]},
 {id:8,title:'흐림 뒤 맑음',artist:'오늘의 날씨',genre:'인디',date:'2026-11-28',time:'18:00',venue:'롤링홀',area:'홍대',km:2.1,pop:63,color:'sky',
  tiers:[['스탠딩',49000,.58]],hotels:[H('스테이 연남 9',89000,6,4.6),H('캡슐 홍대 23',42000,5,4.1)]},
 {id:9,title:'서울 언더그라운드 페스트',artist:'라인업 14팀',genre:'힙합',date:'2026-11-29',time:'14:00',venue:'문화비축기지',area:'상암',km:3.0,pop:88,color:'sand',
  tiers:[['1일권',66000,.29],['양일권',110000,.12]],hotels:[H('상암 미디어 호텔',95000,10,4.3)]},
 {id:10,title:'선셋 세션',artist:'선셋 콰르텟',genre:'재즈',date:'2026-11-29',time:'19:30',venue:'LG아트센터 서울',area:'마곡',km:11.0,pop:55,color:'lime',
  tiers:[['R석',80000,.4],['S석',60000,.66]],hotels:[H('마곡 스퀘어 호텔',87000,4,4.5)]},
 {id:11,title:'RED LINE 2026',artist:'레드 라인',genre:'록',date:'2026-12-05',time:'18:00',venue:'고척스카이돔',area:'구로',km:9.8,pop:94,color:'lilac',
  tiers:[['그라운드',99000,.09],['지정석',121000,.21]],hotels:[H('고척 스타디움 인',79000,8,4.1)]},
 {id:12,title:'첼로의 밤',artist:'이서 첼로 콰르텟',genre:'클래식',date:'2026-12-06',time:'17:00',venue:'롯데콘서트홀',area:'잠실',km:18.1,pop:61,color:'pink',
  tiers:[['R석',90000,.33],['S석',70000,.5]],hotels:[]},
].map(c=>({...c,tiers:c.tiers.map(([name,price,left])=>({name,price,left})),priceMin:Math.min(...c.tiers.map(t=>t[1]))}));

const GENRES = ['전체','인디','힙합','K-POP','재즈','록','일렉트로닉','클래식'];
const DATES = [['all','모든 날짜'],['wk1','이번 주말'],['wk2','다음 주말'],['dec','12월']];
const SORTS = [['rec','추천순'],['near','가까운 순'],['cheap','낮은 가격순'],['soon','날짜 빠른 순'],['hot','인기순']];
const DEF = {maxPrice:200000,maxKm:25,hotelOnly:false};

const S = {q:'',date:'all',genre:'전체',sort:'rec',...DEF,tab:'home',enter:true,me:{genres:[]},spins:0,confirmClear:false,calm:false,stack:null,saved:{},detail:null,pick:{tier:0,hotel:-1}};
try{const raw=localStorage.getItem('lw-saved');if(raw)S.saved=JSON.parse(raw)}catch(e){}
try{const m=localStorage.getItem('lw-me');if(m)S.me={genres:[],...JSON.parse(m)};S.spins=+localStorage.getItem('lw-spins')||0}catch(e){}
const persistMe=()=>{try{localStorage.setItem('lw-me',JSON.stringify(S.me))}catch(e){}};
const persist=()=>{try{localStorage.setItem('lw-saved',JSON.stringify(S.saved))}catch(e){}};

const $=s=>document.querySelector(s);
const won=n=>'₩'+n.toLocaleString('ko-KR');
const WD=['일','월','화','수','목','금','토'];
const MON=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const dt=s=>new Date(s+'T00:00:00');
const dLabel=c=>{const d=dt(c.date);return {day:d.getDate(),mon:MON[d.getMonth()],wd:WD[d.getDay()],md:`${d.getMonth()+1}.${d.getDate()}`}};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const heartSvg='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const heartOut='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>';
const chatSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 12a8 8 0 1 1 3 6.2L4 20l1-3.5A8 8 0 0 1 4 12z"/></svg>';
const swoosh=(w,h,d,sw=34)=>`<svg class="swoosh" style="left:0;top:0" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none"><path d="${d}" pathLength="1" stroke="#fff" stroke-width="${sw}" stroke-linecap="round" opacity=".9"/></svg>`;

function inDate(c,k){
  if(k==='all')return true;
  const t=c.date;
  if(k==='wk1')return t==='2026-11-21'||t==='2026-11-22';
  if(k==='wk2')return t==='2026-11-28'||t==='2026-11-29';
  if(k==='dec')return t.startsWith('2026-12');
}
const recScore=c=>c.pop-c.km*1.5+(S.me.genres.includes(c.genre)?20:0);
function results(st=S){
  const q=st.q.trim().toLowerCase();
  let r=CONCERTS.filter(c=>
    inDate(c,st.date)&&(st.genre==='전체'||c.genre===st.genre)&&c.priceMin<=st.maxPrice&&c.km<=st.maxKm&&(!st.hotelOnly||c.hotels.length)&&
    (!q||[c.title,c.artist,c.venue,c.area,c.genre].join(' ').toLowerCase().includes(q)));
  const f={rec:(a,b)=>recScore(b)-recScore(a),near:(a,b)=>a.km-b.km,cheap:(a,b)=>a.priceMin-b.priceMin,soon:(a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time),hot:(a,b)=>b.pop-a.pop}[st.sort];
  return r.sort(f);
}
const filtersActive=()=>S.maxPrice!==DEF.maxPrice||S.maxKm!==DEF.maxKm||S.hotelOnly;

/* ---------- explore ---------- */
function stackOrder(){
  if(!S.stack) S.stack=CONCERTS.filter(c=>inDate(c,'wk1')).sort((a,b)=>b.pop-a.pop).slice(0,4).map(c=>c.id).reverse();
  return S.stack.map(id=>CONCERTS.find(c=>c.id===id));
}
function renderStack(){
  const cards=stackOrder();
  return cards.map((c,i)=>{
    const front=i===cards.length-1, L=dLabel(c);
    const top=i*40;
    if(!front) return `<button class="scard c-${c.color}" style="top:${top}px;height:200px" data-bring="${c.id}" aria-label="${esc(c.title)} 앞으로 꺼내기">
      <div class="peek"><span class="logo sm">${esc(c.artist[0])}</span><b>${esc(c.title)}</b><span>${L.md} ${L.wd}</span></div></button>`;
    return `<div class="scard front c-${c.color}" style="top:${top}px">
      <div class="row"><span class="logo">${esc(c.artist[0])}</span><span class="ghosts"><i>${chatSvg}</i><button class="heartmini" data-heart="${c.id}" aria-pressed="${!!S.saved[c.id]}" aria-label="저장" style="width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:${S.saved[c.id]?'var(--ink)':'rgba(0,0,0,.08)'};color:${S.saved[c.id]?'#fff':'inherit'}">${S.saved[c.id]?heartSvg:heartOut}</button></span></div>
      <div class="body"><div class="kick">${esc(c.artist)} · ${L.md} ${L.wd} ${c.time}</div><h3>${esc(c.title)}</h3>
      <div class="meta">${won(c.priceMin)}~ · ${esc(c.venue)} ${c.km}km</div>
      <button class="go" data-open="${c.id}">자세히 보기</button></div></div>`;
  }).join('');
}
const ddayTag=c=>{const n=Math.round((dt(c.date)-TODAY)/864e5);return `<span class="dday${n<=7?' soon':''}">${n<=0?'D-DAY':'D-'+n}</span>`};
function cardHTML(c){
  const L=dLabel(c), sv=!!S.saved[c.id];
  return `<div class="card c-${c.color}" role="button" tabindex="0" data-open="${c.id}">
    <div class="d"><b>${L.day}</b><small>${L.mon} · ${L.wd}</small></div>
    <div class="t"><div class="g">${ddayTag(c)}${c.tiers.some(t=>t.left>0&&t.left<.1)?'<span class="hot-tag">매진 임박</span>':''}${esc(c.genre)} · ${c.time}</div><h3>${esc(c.title)}</h3></div>
    <div class="m"><span>${esc(c.artist)}<br>${esc(c.venue)} · ${c.km}km${c.hotels.length?' · 숙소 '+c.hotels.length:''}</span><span class="p">${won(c.priceMin)}~</span></div>
    <button class="heart" data-heart="${c.id}" aria-pressed="${sv}" aria-label="${sv?'저장 취소':'저장'}">${sv?heartSvg:heartOut}</button>
  </div>`;
}
const topRight=()=>`<div class="top-r">${soundBtn()}<span class="tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>마포구</span></div>`;
const savedList=()=>Object.keys(S.saved).map(Number).map(id=>CONCERTS.find(c=>c.id===id)).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date));
const planTotal=c=>{const p=S.saved[c.id],t=c.tiers[p.tier]||c.tiers[0],h=p.hotel>=0?c.hotels[p.hotel]:null;return t.price+(h?h.price:0)};

/* ---------- home ---------- */
function renderHome(){
  const tick=CONCERTS.slice().sort((a,b)=>a.date.localeCompare(b.date)).map(c=>`<span>${esc(c.artist)} · ${dLabel(c).md}</span>`).join('');
  const up=savedList();
  const fav=S.me.genres;
  const genres=[...fav,...GENRES.slice(1).filter(g=>!fav.includes(g))];
  $('#scroll').innerHTML=`<div class="wrap ${S.enter?'enter':''}">
    ${swoosh(390,700,'M330 150 C 420 260, 260 360, 120 330 S -40 470, 60 620',30)}
    <div class="top">
      <div class="hello"><span class="avatar">J</span><div>안녕하세요,<b>이번 주말 비었죠?</b></div></div>
      ${topRight()}
    </div>
    <h1>이번 주말,<br>뭐 들으러<br>갈까?</h1>
    <div class="ticker" aria-hidden="true"><div class="band"><div class="run">${tick}${tick}</div></div></div>
    <div class="sub"><span>서울 마포구 기준 · 11월 21–22일</span></div>

    <button class="lucky" id="openSlot">
      <span class="lucky-txt"><small>뭘 볼지 못 고르겠다면</small><b>운명의 공연 뽑기</b></span>
      <span class="lucky-reels" aria-hidden="true"><i>7</i><i class="note"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 17.2a3.3 3.3 0 1 1-2.4-3.17V5.2L20 2.6v12.6a3.3 3.3 0 1 1-2.4-3.17V7.1l-8.1 1.7z"/></svg></i><i>7</i></span>
    </button>

    <div class="sect-h"><h2>이번 주말 픽<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></h2><span>뒤 카드를 눌러 넘겨보세요</span></div>
    <div class="stack" id="stack">${renderStack()}</div>

    <div class="sect-h"><h2>내 주말</h2>${up.length?`<button class="link-btn" style="margin:0" data-tab="saved">전체 보기</button>`:''}</div>
    ${up.length?`<div class="minis">${up.slice(0,3).map(c=>{const L=dLabel(c);return `<button class="mini" data-open="${c.id}"><span class="sw2" style="background:${CV[c.color]}"></span><span class="mt"><b>${esc(c.title)}</b><small>${L.md} ${L.wd} · ${c.time} · ${esc(c.venue)}</small></span><span class="p">${won(planTotal(c))}</span></button>`}).join('')}</div>`
      :`<div class="empty"><b>아직 담은 공연이 없어요</b>마음에 드는 공연을 찾아 주말 계획에 담아 보세요.<br><button class="link-btn" data-tab="explore">공연 찾으러 가기</button></div>`}

    <div class="sect-h"><h2>장르로 바로 찾기</h2><span>${fav.length?'좋아하는 장르 먼저':'내 정보에서 취향을 골라 보세요'}</span></div>
    <div class="gtiles">${genres.map((g,i)=>{const n=CONCERTS.filter(c=>c.genre===g).length;return `<button class="gtile c-${COLORS[i%COLORS.length]}" data-browse="${g}">${fav.includes(g)?'<span class="fav">MY</span>':''}<b>${g}</b><small>공연 ${n}개</small></button>`}).join('')}<button class="gtile all" data-browse="전체"><b>전체 보기</b><small>공연 ${CONCERTS.length}개</small></button></div>
  </div>`;
}

/* ---------- explore (search & filters) ---------- */
function activeFilters(){
  const a=[];
  if(S.q.trim())a.push(['q',`“${S.q.trim()}” 검색`]);
  if(S.maxPrice<DEF.maxPrice)a.push(['price',`${won(S.maxPrice)} 이하`]);
  if(S.maxKm<DEF.maxKm)a.push(['km',`${S.maxKm}km 이내`]);
  if(S.hotelOnly)a.push(['hotel','숙소 있는 공연']);
  return a;
}
function renderExplore(){
  const r=results(), af=activeFilters(), sortL=SORTS.find(x=>x[0]===S.sort)[1];
  const nFilters=[S.maxPrice<DEF.maxPrice,S.maxKm<DEF.maxKm,S.hotelOnly].filter(Boolean).length;
  $('#scroll').innerHTML=`<div class="wrap ${S.enter?'enter':''} ${S.calm?'calm':''}">
    ${swoosh(390,500,'M360 40 C 430 160, 300 230, 200 200 S 20 260, -20 380',26)}
    <div class="top"><h1 class="page-h">공연 찾기</h1>${topRight()}</div>

    <div class="find">
      <div class="find-row">
        <label class="find-q"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          <input id="q" type="search" placeholder="아티스트, 공연장, 지역" value="${esc(S.q)}" aria-label="공연 검색"></label>
        <button class="find-f" id="openFilter" aria-label="필터 열기"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>${nFilters?`<span class="find-n">${nFilters}</span>`:''}</button>
      </div>
      <div class="seg" role="group" aria-label="날짜">${DATES.map(([k,l])=>`<button class="seg-b" data-date="${k}" aria-pressed="${S.date===k}">${l}</button>`).join('')}</div>
      <p class="find-loc">서울 마포구 기준 · 오늘 11월 16일</p>
    </div>

    <div class="chips gtabs" role="group" aria-label="장르">${GENRES.map(g=>`<button class="gtab" data-genre="${g}" aria-pressed="${S.genre===g}">${g}</button>`).join('')}</div>

    ${af.length?`<div class="af">${af.map(([k,l])=>`<button class="af-c" data-clear="${k}" aria-label="${l} 조건 지우기">${esc(l)}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M7 7l10 10M17 7 7 17"/></svg></button>`).join('')}${af.length>1?'<button class="af-all" data-clear="all">모두 지우기</button>':''}</div>`:''}

    <div class="res-h">
      <div class="res-n"><b>${r.length}</b><span>개 공연</span></div>
      <div class="sort-wrap">
        <button class="sort-btn" id="sortBtn" aria-expanded="${!!S.sortOpen}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M3 16l4 4 4-4M17 20V4M13 8l4-4 4 4"/></svg>${sortL}</button>
        ${S.sortOpen?`<div class="sort-menu" role="menu">${SORTS.map(([k,l])=>`<button role="menuitemradio" aria-checked="${S.sort===k}" data-sort="${k}">${l}${S.sort===k?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>':''}</button>`).join('')}</div>`:''}
      </div>
    </div>
    <div class="list">${r.length?r.map(cardHTML).join(''):`<div class="empty empty-x"><span class="eq big" aria-hidden="true"><i></i><i></i><i></i><i></i></span><b>조건에 맞는 공연이 없어요</b>가격이나 거리 범위를 넓혀 보세요.<br><button class="link-btn" id="resetAll">필터 모두 지우기</button></div>`}</div>
  </div>`;
}

/* ---------- my info ---------- */
// listener level grows with what you do in the app: each saved concert = 2 points, each spin = 1
const LEVELS=[[0,'새내기 리스너'],[3,'주말 탐험가'],[8,'공연 러버'],[15,'페스티벌 마스터'],[30,'전설의 관객']];
function levelOf(pts){
  let k=0;for(let i=0;i<LEVELS.length;i++)if(pts>=LEVELS[i][0])k=i;
  const next=LEVELS[k+1];
  return {n:k+1,name:LEVELS[k][1],next:next?next[1]:null,left:next?next[0]-pts:0,pct:next?Math.round((pts-LEVELS[k][0])/(next[0]-LEVELS[k][0])*100):100};
}
const ICO={
  sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
};
function renderMe(){
  const up=savedList(), budget=up.reduce((a,c)=>a+planTotal(c),0);
  const pts=up.length*2+S.spins, lv=levelOf(pts), fav=S.me.genres;
  $('#scroll').innerHTML=`<div class="wrap ${S.enter?'enter':''}">
    <div class="top"><h1 class="page-h">내 정보</h1></div>

    <section class="me-card c-lime">
      ${swoosh(360,230,'M380 20 C 300 90, 330 160, 220 170 S 60 150, -20 230',22)}
      <div class="me-id">
        <span class="me-ava">J</span>
        <div class="me-name"><span class="lv-chip">LV.${lv.n}</span><b>주말러 J</b><small>${ICO.pin}서울 마포구</small></div>
      </div>
      <div class="lv">
        <div class="lv-top"><b>${lv.name}</b><span>${lv.next?`다음 ‘${lv.next}’까지 ${lv.left}점`:'최고 레벨이에요'}</span></div>
        <div class="lv-bar"><i style="width:${Math.max(lv.pct,4)}%"></i></div>
        <p class="lv-how">공연을 담으면 2점, 운명의 뽑기를 돌리면 1점</p>
      </div>
      ${fav.length?`<div class="me-tags">${fav.map(g=>`<span>#${g}</span>`).join('')}</div>`:''}
    </section>

    <div class="me-stats">
      <div><b>${up.length}</b><small>담은 공연</small></div>
      <div><b>${budget>=10000?(budget/10000).toFixed(1).replace(/\.0$/,'')+'만':budget}<em>원</em></b><small>예상 예산</small></div>
      <div><b>${S.spins}</b><small>뽑기 횟수</small></div>
    </div>

    <div class="sect-h"><h2>좋아하는 장르</h2><span>${fav.length?`${fav.length}개 골랐어요`:'추천순에서 먼저 보여요'}</span></div>
    <div class="fav-grid">${GENRES.slice(1).map((g,i)=>{const on=fav.includes(g);return `<button class="fav-t c-${COLORS[i%COLORS.length]}" data-fav="${g}" aria-pressed="${on}"><span class="fav-ck">${ICO.check}</span>${g}</button>`}).join('')}</div>

    <div class="sect-h"><h2>설정</h2></div>
    <div class="setlist">
      <label class="setrow" for="meSound"><span class="si c-sky">${ICO.sound}</span><span class="st">효과음<small>버튼을 누를 때 짧은 소리</small></span><input type="checkbox" class="sw" id="meSound" ${Sound.on?'checked':''}></label>
      <div class="setrow"><span class="si c-pink">${ICO.pin}</span><span class="st">기준 위치<small>거리와 ‘가까운 순’ 정렬에 쓰여요</small></span><span class="val">서울 마포구</span></div>
    </div>
    <div class="setlist">
      <div class="setrow">${S.confirmClear
        ?`<span class="si danger-bg">${ICO.trash}</span><span class="st">정말 비울까요?<small>담은 공연 ${up.length}개가 지워져요</small></span><span class="cbtns"><button class="mini-btn" id="clearNo">취소</button><button class="mini-btn danger" id="clearYes">비우기</button></span>`
        :`<span class="si danger-bg">${ICO.trash}</span><span class="st danger-t">내 주말 비우기<small>담아 둔 공연과 선택을 모두 지워요</small></span><button class="mini-btn" id="clearAsk" ${up.length?'':'disabled'}>비우기</button>`}</div>
    </div>

    <div class="me-foot"><span class="me-logo" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Loud Weekend · 버전 0.1</div>
  </div>`;
}

/* ---------- saved ---------- */
function renderSaved(){
  const ids=Object.keys(S.saved).map(Number);
  const items=ids.map(id=>CONCERTS.find(c=>c.id===id)).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date));
  let grand=0;
  const rows=items.map(c=>{
    const p=S.saved[c.id], t=c.tiers[p.tier]||c.tiers[0], h=p.hotel>=0?c.hotels[p.hotel]:null, L=dLabel(c);
    const tot=t.price+(h?h.price:0); grand+=tot;
    return `<div class="plan">
      <div class="ph"><span class="sw2" style="background:${CV[c.color]}"></span><div style="flex:1;min-width:0"><div style="font-size:12px;color:var(--muted)">${L.md} ${L.wd} · ${c.time}</div><h3>${esc(c.title)}</h3></div>
      <button class="heart" style="position:static;background:var(--ink);color:#fff" data-heart="${c.id}" aria-pressed="true" aria-label="계획에서 빼기">${heartSvg}</button></div>
      <div class="r"><span>티켓 · ${esc(t.name)}</span><b>${won(t.price)}</b></div>
      <div class="r"><span>숙소 · ${h?esc(h.name)+' 1박':'숙소 없음'}</span><b>${h?won(h.price):'—'}</b></div>
      <div class="tot"><button class="link-btn" style="margin:0" data-open="${c.id}">선택 바꾸기</button><b>${won(tot)}</b></div>
    </div>`;
  }).join('');
  $('#scroll').innerHTML=`<div class="wrap ${S.enter?'enter':''}">
    ${swoosh(390,500,'M-20 120 C 120 40, 300 120, 260 230 S 330 420, 420 380',30)}
    <div class="top"><div class="hello"><span class="avatar">J</span><div>나의<b>주말 계획</b></div></div><span class="tag">${items.length?`공연 ${items.length}개`:"비어 있음"}</span></div>
    <h1>My<br>weekend<br>plan</h1>
    ${items.length?`<div class="grand"><div><div style="font-size:12px;opacity:.7">공연 ${items.length}개 · 티켓+숙소 합계</div></div><b>${won(grand)}</b></div><div class="list">${rows}</div>`
    :`<div class="empty"><b>아직 담은 공연이 없어요</b>공연 상세에서 좌석과 숙소를 고르고<br>‘주말 계획에 담기’를 눌러 보세요.<br><button class="link-btn" data-tab="explore">공연 둘러보기</button></div>`}
  </div>`;
}

function render(){
  ({home:renderHome,explore:renderExplore,saved:renderSaved,me:renderMe}[S.tab]||renderHome)();
  S.enter=false;
  const n=Object.keys(S.saved).length;
  $('#badge').hidden=!n; $('#badge').textContent=n;
  document.querySelectorAll('.nav button').forEach(b=>b.toggleAttribute('aria-current',b.dataset.tab===S.tab));
  document.querySelectorAll('.nav button[aria-current]').forEach(b=>b.setAttribute('aria-current','page'));
}

/* ---------- detail ---------- */
function openDetail(id){
  const c=CONCERTS.find(x=>x.id===id); if(!c)return;
  S.detail=id;
  S.pick=S.saved[id]?{...S.saved[id]}:{tier:0,hotel:c.hotels.length?0:-1};
  const L=dLabel(c);
  const faces=[['M','#fff'],['S','#7FD0E2'],['Y','#F3A49C']];
  const leftAvg=c.tiers.reduce((a,t)=>a+t.left,0)/c.tiers.length;
  // 12 bars = booking trend by week before the show
  const bars=Array.from({length:12},(_,i)=>Math.round(30+((c.id*37+i*53)%60)*(0.5+i/22)));
  const peak=bars.indexOf(Math.max(...bars));
  $('#detail').innerHTML=`
    <div class="hero c-${c.color}">
      ${swoosh(390,520,'M420 60 C 260 120, 330 300, 160 320 S -20 420, 40 560',28)}
      <div class="top" style="position:relative;z-index:1">
        <button class="circle-btn" id="back" aria-label="뒤로"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></button>
        <button class="circle-btn" data-heart="${c.id}" aria-pressed="${!!S.saved[c.id]}" aria-label="저장">${S.saved[c.id]?heartSvg:heartOut}</button>
      </div>
      <div style="position:relative;z-index:1">
        <div class="bignum">${L.day}</div>
        <div class="when">${L.mon} · ${L.wd}요일 · ${c.time}</div>
        <h2>${esc(c.title)}</h2>
        <div class="art">${esc(c.artist)} · ${esc(c.genre)}</div>
        <div class="facts"><span>📍 ${esc(c.venue)} (${esc(c.area)})</span><span>내 위치에서 ${c.km}km</span><span>${won(c.priceMin)}부터</span></div>
        <div class="fans"><div class="faces">${faces.map(([l,b])=>`<i style="background:${b}">${l}</i>`).join('')}<i style="background:var(--ink);color:#fff;font-size:11px">+${(c.pop*47/1000).toFixed(1)}k</i></div>
        <a href="https://map.naver.com/p/search/${encodeURIComponent(c.venue)}" target="_blank" rel="noopener">지도에서 보기</a></div>
      </div>
    </div>

    <div class="dsec">
      <div class="seats">
        <div class="cap"><span>예매 추이 · 최근 12주</span><b>잔여 ${Math.round(leftAvg*100)}%</b></div>
        <div class="bars">${bars.map((v,i)=>`<span class="${i===peak?'hot':''}" style="height:${Math.min(v,100)}%;--i:${i}"></span>`).join('')}</div>
        <div style="font-size:12px">${leftAvg<.2?'곧 매진될 수 있어요. 서두르세요.':'아직 여유가 있어요.'}</div>
      </div>
    </div>

    <div class="dsec">
      <h3>좌석 고르기 <small>잔여석 기준</small></h3>
      ${c.tiers.map((t,i)=>`<label class="opt"><input type="radio" name="tier" value="${i}" ${S.pick.tier===i?'checked':''} ${t.left===0?'disabled':''}>
        <div><div class="n">${esc(t.name)}</div><div class="s">${t.left===0?'매진':'남은 좌석 '+Math.round(t.left*100)+'%'}</div><div class="bar ${t.left<.15?'low':''}"><i style="width:${Math.max(t.left*100,2)}%"></i></div></div>
        <div class="pr">${won(t.price)}</div></label>`).join('')}
    </div>

    <div class="dsec">
      <h3>근처 숙소 <small>1박 · 공연장 도보</small></h3>
      ${c.hotels.map((h,i)=>`<label class="opt"><input type="radio" name="hotel" value="${i}" ${S.pick.hotel===i?'checked':''}>
        <div><div class="n">${esc(h.name)}</div><div class="s">도보 ${h.walk}분 · ★ ${h.rating}</div></div>
        <div class="pr">${won(h.price)}<small>/박</small></div></label>`).join('')}
      <label class="opt"><input type="radio" name="hotel" value="-1" ${S.pick.hotel===-1?'checked':''}>
        <div><div class="n">숙소 없이</div><div class="s">${c.hotels.length?'공연만 보고 돌아올게요':'이 공연장 근처엔 등록된 숙소가 없어요'}</div></div><div class="pr">—</div></label>
    </div>`;
  // first tier that isn't sold out
  if(c.tiers[S.pick.tier].left===0){S.pick.tier=c.tiers.findIndex(t=>t.left>0);const el=$('#detail input[name=tier][value="'+S.pick.tier+'"]');if(el)el.checked=true}
  $('#detail').scrollTop=0;
  $('#detail').classList.add('open');$('#detail').setAttribute('aria-hidden','false');
  $('#sumbar').classList.add('open');
  $('#addPlan').textContent=S.saved[id]?'계획 업데이트':'주말 계획에 담기';
  updateSum();
}
function updateSum(){
  const c=CONCERTS.find(x=>x.id===S.detail); if(!c)return;
  const t=c.tiers[S.pick.tier], h=S.pick.hotel>=0?c.hotels[S.pick.hotel]:null;
  $('#sumTot').textContent=won(t.price+(h?h.price:0));
}
function closeDetail(){
  S.detail=null;$('#detail').classList.remove('open');$('#detail').setAttribute('aria-hidden','true');$('#sumbar').classList.remove('open');render();
}

/* ---------- filter sheet ---------- */
let draft=null;
function openSheet(){
  draft={maxPrice:S.maxPrice,maxKm:S.maxKm,hotelOnly:S.hotelOnly,sort:S.sort,genre:S.genre};
  drawSheet();
  $('#sheet').classList.add('open');$('#scrim').classList.add('open');$('#sheet').setAttribute('aria-hidden','false');
}
function drawSheet(){
  const n=results({...S,...draft}).length;
  $('#sheet').innerHTML=`<div class="grab"></div>
    <h2>필터 <button class="circle-btn" id="closeSheet" aria-label="닫기" style="width:40px;height:40px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></h2>
    <div class="fgroup"><div class="lab">정렬</div><div class="wrapchips">${SORTS.map(([k,l])=>`<button class="chip" data-dsort="${k}" aria-pressed="${draft.sort===k}">${l}</button>`).join('')}</div></div>
    <div class="fgroup"><div class="lab">장르</div><div class="wrapchips">${GENRES.map(g=>`<button class="chip" data-dgenre="${g}" aria-pressed="${draft.genre===g}">${g}</button>`).join('')}</div></div>
    <div class="fgroup"><label class="lab" for="fPrice">최대 티켓 가격 <output id="oPrice">${draft.maxPrice>=200000?'제한 없음':won(draft.maxPrice)}</output></label>
      <input type="range" id="fPrice" min="30000" max="200000" step="10000" value="${draft.maxPrice}"></div>
    <div class="fgroup"><label class="lab" for="fKm">내 위치에서 거리 <output id="oKm">${draft.maxKm>=25?'제한 없음':draft.maxKm+'km 이내'}</output></label>
      <input type="range" id="fKm" min="2" max="25" step="1" value="${draft.maxKm}"></div>
    <label class="toggle" for="fHotel"><span>숙소까지 한 번에<small>도보권 숙소가 있는 공연만 보기</small></span><input type="checkbox" class="sw" id="fHotel" ${draft.hotelOnly?'checked':''}></label>
    <div class="sheet-actions"><button class="reset" id="sheetReset">초기화</button><button class="apply" id="sheetApply">${n?`공연 ${n}개 보기`:'조건에 맞는 공연 없음'}</button></div>`;
}
function closeSheet(){$('#sheet').classList.remove('open');$('#scrim').classList.remove('open');$('#sheet').setAttribute('aria-hidden','true')}

let tt;
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),1900)}

function toggleSave(id){
  const c=CONCERTS.find(x=>x.id===id);
  if(S.saved[id]){delete S.saved[id];toast('내 주말에서 뺐어요')}
  else{S.saved[id]={tier:Math.max(0,c.tiers.findIndex(t=>t.left>0)),hotel:c.hotels.length?0:-1};toast('내 주말에 담았어요')}
  persist();
}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  if(S.sortOpen&&!e.target.closest('.sort-wrap')){S.sortOpen=false;S.calm=true;render();S.calm=false}
  const t=e.target.closest('button,[data-open]'); if(!t)return;
  const d=t.dataset;
  if(d.heart){e.stopPropagation();const id=+d.heart;toggleSave(id);const on=!!S.saved[id];t.setAttribute('aria-pressed',on);t.innerHTML=on?heartSvg:heartOut;render();if(S.detail===id)openDetail(id);return}
  if(d.bring){const id=+d.bring;S.stack=S.stack.filter(x=>x!==id).concat(id);$('#stack').innerHTML=renderStack();return}
  if(d.open){closeSlot();openDetail(+d.open);return}
  if(d.tab){S.tab=d.tab;S.enter=true;S.confirmClear=false;closeDetail();$('#scroll').scrollTop=0;return}
  if(d.browse){S.tab='explore';S.genre=d.browse;S.date='all';S.q='';S.enter=true;render();$('#scroll').scrollTop=0;return}
  if(d.fav){const g=d.fav,a=S.me.genres;S.me.genres=a.includes(g)?a.filter(x=>x!==g):[...a,g];persistMe();render();return}
  if(d.date){S.date=d.date;render();return}
  if(d.genre){S.genre=d.genre;render();return}
  if(d.sort){S.sort=d.sort;S.sortOpen=false;render();return}
  if(d.clear){const k=d.clear;if(k==='q'||k==='all')S.q='';if(k==='price'||k==='all')S.maxPrice=DEF.maxPrice;if(k==='km'||k==='all')S.maxKm=DEF.maxKm;if(k==='hotel'||k==='all')S.hotelOnly=false;render();return}
  if(d.dsort){draft.sort=d.dsort;drawSheet();return}
  if(d.dgenre){draft.genre=d.dgenre;drawSheet();return}
  switch(t.id){
    case 'openFilter':openSheet();break;
    case 'sortBtn':S.sortOpen=!S.sortOpen;S.calm=true;render();S.calm=false;break;
    case 'openSlot':openSlot();break;
    case 'clearAsk':S.confirmClear=true;render();break;
    case 'clearNo':S.confirmClear=false;render();break;
    case 'clearYes':S.saved={};persist();S.confirmClear=false;toast('내 주말을 비웠어요');render();break;
    case 'soundToggle':Sound.on=!Sound.on;try{localStorage.setItem('lw-sound',Sound.on?'on':'off')}catch(e){}
      t.setAttribute('aria-pressed',Sound.on);t.setAttribute('aria-label','효과음 '+(Sound.on?'끄기':'켜기'));t.innerHTML=Sound.on?speakerOn:speakerOff;
      toast(Sound.on?'효과음을 켰어요':'효과음을 껐어요');if(Sound.on)SFX.chip();break;
    case 'closeSlot':closeSlot();break;
    case 'spin':case 'spin2':spin();break;
    case 'closeSheet':closeSheet();break;
    case 'sheetReset':Object.assign(draft,DEF,{sort:'rec',genre:'전체'});drawSheet();break;
    case 'sheetApply':Object.assign(S,draft);closeSheet();render();break;
    case 'resetAll':Object.assign(S,DEF,{q:'',date:'all',genre:'전체'});render();break;
    case 'back':closeDetail();break;
    case 'addPlan':{const had=!!S.saved[S.detail];S.saved[S.detail]={...S.pick};persist();toast(had?'계획을 업데이트했어요':'내 주말에 담았어요');closeDetail();break}
  }
});
$('#scrim').addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.matches('.card[data-open]'))openDetail(+e.target.dataset.open);
  if(e.key==='Escape'){if($('#slot').classList.contains('open'))closeSlot();else if($('#sheet').classList.contains('open'))closeSheet();else if(S.detail)closeDetail()}
});
document.addEventListener('input',e=>{
  const el=e.target;
  if(el.id==='q'){S.q=el.value;const pos=el.selectionStart;S.calm=true;render();S.calm=false;const q=$('#q');q.focus();q.setSelectionRange(pos,pos);return}
  if(el.id==='fPrice'){draft.maxPrice=+el.value;$('#oPrice').textContent=draft.maxPrice>=200000?'제한 없음':won(draft.maxPrice);updApply()}
  if(el.id==='fKm'){draft.maxKm=+el.value;$('#oKm').textContent=draft.maxKm>=25?'제한 없음':draft.maxKm+'km 이내';updApply()}
});
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.id==='fHotel'){draft.hotelOnly=el.checked;updApply()}
  if(el.id==='meSound'){Sound.on=el.checked;try{localStorage.setItem('lw-sound',Sound.on?'on':'off')}catch(e){}if(Sound.on)SFX.chip()}
  if(el.name==='tier'){S.pick.tier=+el.value;updateSum()}
  if(el.name==='hotel'){S.pick.hotel=+el.value;updateSum()}
});
function updApply(){const n=results({...S,...draft}).length;$('#sheetApply').textContent=n?`공연 ${n}개 보기`:'조건에 맞는 공연 없음'}


/* ---------- tiny UI sounds ----------
   Made on the fly with the Web Audio API (no sound files). Each one is a soft,
   very short blip, kept quiet on purpose. People can switch them off; the choice is remembered. */
const Sound={ctx:null,on:true};
try{Sound.on=localStorage.getItem('lw-sound')!=='off'}catch(e){}
function actx(){
  if(!Sound.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;Sound.ctx=new C()}
  if(Sound.ctx.state==='suspended')Sound.ctx.resume();
  return Sound.ctx;
}
function blip(freq,{dur=.06,type='sine',vol=.06,to=null,delay=0}={}){
  if(!Sound.on)return;
  const c=actx();if(!c)return;
  const t=c.currentTime+delay,o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,t);
  if(to)o.frequency.exponentialRampToValueAtTime(to,t+dur);
  g.gain.setValueAtTime(.0001,t);
  g.gain.exponentialRampToValueAtTime(vol,t+.008);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g).connect(c.destination);o.start(t);o.stop(t+dur+.03);
}
const SFX={
  tap:   ()=>blip(620,{to:940,dur:.05,vol:.045}),                                  // bubble pop
  chip:  ()=>blip(900,{to:1350,dur:.04,vol:.04,type:'triangle'}),                  // tiny tick
  open:  ()=>{blip(523,{dur:.05,vol:.045});blip(784,{dur:.07,vol:.045,delay:.045})}, // do-sol
  close: ()=>blip(720,{to:430,dur:.07,vol:.035}),                                  // soft drop
  like:  ()=>{blip(784,{dur:.05,vol:.055,type:'triangle'});blip(1175,{dur:.08,vol:.055,type:'triangle',delay:.055})},
  unlike:()=>{blip(784,{dur:.05,vol:.045,type:'triangle'});blip(523,{dur:.07,vol:.045,type:'triangle',delay:.055})},
  spin:  ()=>blip(260,{to:880,dur:.22,vol:.05,type:'triangle'}),                   // wind-up
  stop:  i=>blip([523,659,784][i],{dur:.09,vol:.06,type:'triangle'}),              // reels: do-mi-sol
  win:   ()=>[1047,1319,1568,2093].forEach((f,i)=>blip(f,{dur:.13,vol:.05,type:'triangle',delay:i*.07})),
};
const speakerOn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
const speakerOff='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9.5l5 5M22 9.5l-5 5"/></svg>';
const soundBtn=()=>`<button class="sound-btn" id="soundToggle" aria-pressed="${Sound.on}" aria-label="효과음 ${Sound.on?'끄기':'켜기'}">${Sound.on?speakerOn:speakerOff}</button>`;

// pick a sound for whatever was tapped (runs before the main click handler)
document.addEventListener('click',e=>{
  const t=e.target.closest('button,[data-open]');if(!t||t.disabled)return;
  const d=t.dataset,id=t.id;
  if(id==='soundToggle'||id==='spin'||id==='spin2')return;
  if(d.heart)return S.saved[+d.heart]?SFX.unlike():SFX.like();
  if(d.open||d.bring||id==='openSlot'||id==='openFilter')return SFX.open();
  if(['back','closeSheet','closeSlot'].includes(id))return SFX.close();
  if(t.classList.contains('chip')||t.classList.contains('seg-b')||t.classList.contains('gtab')||t.classList.contains('fav-t'))return SFX.chip();
  SFX.tap();
},true);
document.addEventListener('change',e=>{if(e.target.matches('input[type=radio],#fHotel'))SFX.chip()});

render();

/* ---------- PWA: offline cache ---------- */
// skipped on localhost so edits show up right away while developing
if('serviceWorker' in navigator && location.protocol!=='file:' && !['localhost','127.0.0.1'].includes(location.hostname)){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})});
}

/* ---------- touch ripple: color spreads from where the finger lands ---------- */
const RIPPLE_TARGETS='.seg-b,.af-c,.sort-btn,.find-f,.fav-t,.gtile,.mini,.lucky,.spin,.again,.card,.scard,.chip,.cta,.apply,.reset,.go,.nav button,.opt,.filter-btn,.circle-btn';
document.addEventListener('pointerdown',e=>{
  const el=e.target.closest(RIPPLE_TARGETS); if(!el)return;
  const r=el.getBoundingClientRect(), s=Math.max(r.width,r.height)*2.2;
  const sp=document.createElement('span');
  sp.className='ripple';
  sp.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;
  el.appendChild(sp);
  setTimeout(()=>sp.remove(),700);
},{passive:true});

/* ---------- 운명의 공연 뽑기: slot machine that picks a concert for you ----------
   Three reels (genre · date · neighbourhood) spin and stop one by one on the picked
   concert's values, then the concert card drops in with confetti.
   It draws from the current search/filters; if nothing matches it uses every concert. */
const REEL_H=64;
let lastPick=null, spinning=false;
const slotPool=()=>{const r=results();return r.length?r:CONCERTS};
const buzz=p=>{try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};

function openSlot(){
  const matched=results().length>0, pool=slotPool();
  const dateL=DATES.find(x=>x[0]===S.date)[1], genreL=S.genre==='전체'?'모든 장르':S.genre;
  $('#slot').innerHTML=`
    <div class="slot-top">
      <button class="circle-btn light" id="closeSlot" aria-label="닫기"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <span class="slot-count">${pool.length}개 중 단 하나</span>
    </div>
    <h2 class="slot-h">오늘 뭐 듣지?<br><em>운명에 맡겨요</em></h2>
    <p class="slot-sub">${matched?`${dateL} · ${genreL} 안에서 골라 드려요`:'지금 조건에 맞는 공연이 없어서 전체 공연에서 골라 드려요'}</p>
    <div class="machine">
      <div class="reels">${['장르','날짜','동네'].map((l,i)=>`<div class="reel"><div class="window"><div class="strip" id="strip${i}"><span>?</span></div></div><span class="rl">${l}</span></div>`).join('')}</div>
    </div>
    <button class="spin" id="spin">SPIN</button>
    <div class="slot-result" id="slotResult" aria-live="polite"></div>`;
  $('#slot').scrollTop=0;
  $('#slot').classList.add('open');$('#slot').setAttribute('aria-hidden','false');
}
function closeSlot(){
  const el=$('#slot'); if(!el.classList.contains('open'))return;
  el.classList.remove('open','won','spinning');el.setAttribute('aria-hidden','true');spinning=false;
}
function spin(){
  if(spinning)return; spinning=true; SFX.spin();
  S.spins++;try{localStorage.setItem('lw-spins',S.spins)}catch(e){}
  const pool=slotPool();
  let pick=pool[Math.floor(Math.random()*pool.length)];
  while(pool.length>1&&pick.id===lastPick) pick=pool[Math.floor(Math.random()*pool.length)];
  lastPick=pick.id;
  const L=dLabel(pick), dateOf=c=>{const l=dLabel(c);return `${l.md} ${l.wd}`};
  const targets=[pick.genre,dateOf(pick),pick.area];
  const decks=[GENRES.slice(1),CONCERTS.map(dateOf),[...new Set(CONCERTS.map(c=>c.area))]];
  const slot=$('#slot');
  slot.classList.remove('won');slot.classList.add('spinning');
  $('#slotResult').innerHTML='';
  const btn=$('#spin');btn.disabled=true;btn.textContent='두근두근';
  const times=[1.5,2.1,2.8];
  targets.forEach((t,i)=>{
    const strip=$('#strip'+i), items=[];
    for(let k=0;k<16+i*6;k++) items.push(decks[i][Math.floor(Math.random()*decks[i].length)]);
    items.push(t);
    strip.style.transition='none';strip.style.transform='translateY(0)';
    strip.innerHTML=items.map(x=>`<span>${esc(x)}</span>`).join('');
    void strip.offsetHeight;
    strip.style.transition=`transform ${times[i]}s cubic-bezier(.12,.7,.18,1.04)`;
    strip.style.transform=`translateY(${-(items.length-1)*REEL_H}px)`;
    setTimeout(()=>{const w=strip.parentElement;w.classList.add('stop');buzz(25);SFX.stop(i);setTimeout(()=>w.classList.remove('stop'),400)},times[i]*1000);
  });
  setTimeout(()=>showWin(pick),times[2]*1000+300);
}
function showWin(c){
  if(!$('#slot').classList.contains('open'))return;
  spinning=false;buzz([40,50,40]);SFX.win();
  const slot=$('#slot');slot.classList.remove('spinning');slot.classList.add('won');
  $('#slotResult').innerHTML=`<p class="win-kick">JACKPOT! 당신의 공연은</p>${cardHTML(c)}
    <div class="win-actions"><button class="cta" data-open="${c.id}">이걸로 갈래</button><button class="again" id="spin2">한 번 더</button></div>`;
  const btn=$('#spin');btn.disabled=false;btn.textContent='다시!';
  confetti();
  setTimeout(()=>slot.scrollTo({top:slot.scrollHeight,behavior:'smooth'}),120);
}
function confetti(){
  const box=$('#confetti'), cols=['#B8F04F','#F3A49C','#7FD0E2','#C9B8F2','#FFFFFF'];
  box.innerHTML=Array.from({length:44},(_,i)=>`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${cols[i%5]};width:${(6+Math.random()*6).toFixed(0)}px;height:${(10+Math.random()*8).toFixed(0)}px;--d:${(Math.random()*.5).toFixed(2)}s;--x:${Math.round(Math.random()*90-45)}px;--r:${Math.round(Math.random()*900-450)}deg"></i>`).join('');
  setTimeout(()=>{box.innerHTML=''},2800);
}

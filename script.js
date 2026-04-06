/* ═══════════════════════════════════════════════════════════════
   ALTAN NEXUS — script.js  (updated)
   ═══════════════════════════════════════════════════════════════ */
'use strict';

const T = {
  en:{
    nav_home:'Home', nav_pf:'Portfolio', nav_contact:'Contact',
    idx_eye:'Architectural Vision Project', idx_sub:'Architecture Project',
    idx_cta:'Explore My Portfolio', idx_scroll:'Scroll',
    pf_hero_title:'Portfolio',
    pf_hero_desc:'A comprehensive architectural presentation across twelve distinct fields of research, design, and technical development.',
    view_btn:'View Project', back_pf:'← Back to Portfolio',
    prev:'Previous', next:'Next', all_sec:'All Sections',
    footer_sub:'Architectural Vision Project',
    footer_cr:'© 2025 Altan Nexus. All rights reserved.',
    footer_tag:'Architecture as Experience.',
    c1:'Concept & Idea',            c1d:'The conceptual origins and design philosophy underpinning the Altan Nexus vision.',
    c3:'Orientation & Atrium',      c3d:'Solar orientation strategies and the central atrium as a spatial and environmental device.',
    c4:'Urban Situation & Planning', c4d:'The project within the broader urban masterplan of Skopje and the Vardar corridor.',
    c5:'Architecture',              c5d:'The full architectural proposition — form, programme, and spatial sequence.',
    c6:'Structure & Statics',       c6d:'Structural system, load paths, and material strategy for the tower ensemble.',
    c8:'Technical Details',         c8d:'Construction details, connection nodes, and bespoke technical solutions.',
    c9:'Design Strategy',           c9d:'The overarching design methodology and strategic design decisions.',
    c10:'Renders',                  c10d:'Photorealistic visualisations of the completed project across all programmes.',
    c12:'Videos',                   c12d:'Cinematic walkthroughs and process films for the Altan Nexus project.',
    c13:'QR Interactive Experience',c13d:'Augmented reality and mobile-accessible project exploration via QR codes.',
    c14:'City Context',             c14d:'The relationship between Altan Nexus and the city of Skopje.',
    c15:'Final Poster Presentation',c15d:'The complete academic and professional presentation poster for the project.',
  },
  sq:{
    nav_home:'Kryefaqja', nav_pf:'Portfolio', nav_contact:'Kontakt',
    idx_eye:'Projekt Vizionar Arkitekturor', idx_sub:'Projekt Arkitekturor',
    idx_cta:'Eksploro Portfolion', idx_scroll:'Lëviz',
    pf_hero_title:'Portfolio',
    pf_hero_desc:'Një prezantim gjithëpërfshirës arkitekturor në dymbëdhjetë fusha të ndryshme të kërkimit, projektimit dhe zhvillimit teknik.',
    view_btn:'Shiko Projektin', back_pf:'← Kthehu te Portfolio',
    prev:'I Mëparshmi', next:'I Ardhshmi', all_sec:'Të Gjitha Seksionet',
    footer_sub:'Projekt Vizionar Arkitekturor',
    footer_cr:'© 2025 Altan Nexus. Të gjitha të drejtat e rezervuara.',
    footer_tag:'Arkitektura si Eksperiencë.',
    c1:'Koncepti & Ideja',            c1d:'Origjina konceptuale dhe filozofia e projektimit që qëndron në themel të vizionit Altan Nexus.',
    c3:'Orientimi & Atriumi',          c3d:'Strategjitë e orientimit solar dhe atriumi qendror si pajisje hapësinore dhe mjedisore.',
    c4:'Situata Urbane & Planifikimi', c4d:'Projekti brenda masterplanit urban të Shkupit dhe korridorit të Vardarit.',
    c5:'Arkitektura',                  c5d:'Propozimi i plotë arkitekturor — forma, programi dhe sekuenca hapësinore.',
    c6:'Struktura & Statika',          c6d:'Sistemi strukturor, rrugët e ngarkesës dhe strategjia e materialeve.',
    c8:'Detajet Teknike',              c8d:'Detajet e ndërtimit, nyjet e lidhjes dhe zgjidhjet teknike bespoke.',
    c9:'Strategjia e Dizajnit',        c9d:'Metodologjia e përgjithshme e dizajnit dhe vendimet strategjike.',
    c10:'Render',                      c10d:'Vizualizime fotorealiste të projektit të përfunduar.',
    c12:'Video',                       c12d:'Ecje kinematike dhe filma procesi për projektin Altan Nexus.',
    c13:'Eksperienca Interaktive QR',  c13d:'Realitet i shtuar dhe eksplorim i projektit i aksesushëm nga celulari.',
    c14:'Konteksti i Qytetit',         c14d:'Marrëdhënia midis Altan Nexus dhe qytetit të Shkupit.',
    c15:'Prezantimi Final Poster',     c15d:'Posteri i plotë akademik dhe profesional i prezantimit.',
  },
  mk:{
    nav_home:'Почетна', nav_pf:'Портфолио', nav_contact:'Контакт',
    idx_eye:'Визионерски Архитектонски Проект', idx_sub:'Архитектонски Проект',
    idx_cta:'Истражи го Портфолиото', idx_scroll:'Скролај',
    pf_hero_title:'Портфолио',
    pf_hero_desc:'Сеопфатна архитектонска презентација во дванаесет различни области на истражување, проектирање и технички развој.',
    view_btn:'Погледни Проект', back_pf:'← Назад кон Портфолио',
    prev:'Претходно', next:'Следно', all_sec:'Сите Секции',
    footer_sub:'Визионерски Архитектонски Проект',
    footer_cr:'© 2025 Алтан Нексус. Сите права задржани.',
    footer_tag:'Архитектурата како Искуство.',
    c1:'Концепт & Идеја',              c1d:'Концептуалните корени и дизајн-филозофијата зад визијата на Алтан Нексус.',
    c3:'Ориентација & Атриум',         c3d:'Стратегии за сончева ориентација и централниот атриум.',
    c4:'Урбана Ситуација & Планирање', c4d:'Проектот во рамките на поширокиот урбан мастерплан на Скопје.',
    c5:'Архитектура',                  c5d:'Целосниот архитектонски предлог — форма, програма и просторна секвенца.',
    c6:'Структура & Статика',          c6d:'Структурен систем, патишта на оптоварување и стратегија на материјали.',
    c8:'Технички Детали',              c8d:'Детали за изградба, конекциски јазли и специфични технички решенија.',
    c9:'Стратегија на Дизајнот',       c9d:'Сеопфатната методологија на дизајнот и стратешките дизајн-одлуки.',
    c10:'Рендери',                     c10d:'Фотореалистични визуелизации на завршениот проект.',
    c12:'Видеа',                       c12d:'Кинематски прошетки и процесни филмови за проектот Алтан Нексус.',
    c13:'QR Интерактивно Искуство',    c13d:'Проширена реалност и мобилно истражување на проектот.',
    c14:'Градски Контекст',            c14d:'Односот меѓу Алтан Нексус и градот Скопје.',
    c15:'Финален Постер',              c15d:'Целосниот академски и професионален презентациски постер.',
  }
};

let lang = localStorage.getItem('an_lang') || 'en';

function applyT(l) {
  lang = l;
  localStorage.setItem('an_lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.dataset.t;
    if (!T[l] || T[l][k] === undefined) return;
    const val = T[l][k];
    const svgs = [...el.querySelectorAll('svg')];
    const tnodes = [...el.childNodes].filter(n => n.nodeType === 3);
    if (tnodes.length) tnodes[0].textContent = val;
    else if (el.tagName === 'SPAN' || el.childNodes.length === 0) el.textContent = val;
    else { el.innerHTML = val; svgs.forEach(s => el.appendChild(s)); }
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
}

function initPreloader() {
  const p = document.getElementById('preloader');
  if (!p) return;
  const min = 1400, start = Date.now();
  window.addEventListener('load', () => {
    const wait = Math.max(0, min - (Date.now() - start));
    setTimeout(() => {
      p.classList.add('gone');
      if (typeof onPageReady === 'function') onPageReady();
      else triggerReveals();
    }, wait);
  });
}

function initCursor() {
  const c = document.getElementById('cursor');
  const r = document.getElementById('cursor-ring');
  if (!c || !r || window.innerWidth <= 768) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; c.style.left=mx+'px'; c.style.top=my+'px'; });
  (function raf(){ rx+=(mx-rx)*.1; ry+=(my-ry)*.1; r.style.left=rx+'px'; r.style.top=ry+'px'; requestAnimationFrame(raf); })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{ c.style.transform='translate(-50%,-50%) scale(1.5)'; r.style.width='48px'; r.style.height='48px'; });
    el.addEventListener('mouseleave',()=>{ c.style.transform='translate(-50%,-50%) scale(1)'; r.style.width='32px'; r.style.height='32px'; });
  });
  document.addEventListener('mouseleave', ()=>{ c.style.opacity=0; r.style.opacity=0; });
  document.addEventListener('mouseenter', ()=>{ c.style.opacity=1; r.style.opacity=1; });
}

function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', ()=> nav.classList.toggle('scrolled', window.scrollY > 60), { passive:true });
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mobMenu');
  if (hbg && mob) {
    hbg.addEventListener('click', ()=>{
      hbg.classList.toggle('open'); mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ hbg.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow=''; }));
  }
  const page = document.body.dataset.page||'';
  nav.querySelectorAll('a').forEach(a=>{
    const href=a.getAttribute('href')||'';
    a.classList.remove('active');
    if(page==='index'&&href.includes('index')) a.classList.add('active');
    if(page==='portfolio'&&href.includes('portfolio')) a.classList.add('active');
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', ()=> applyT(btn.dataset.lang)));
  applyT(lang);
}

function triggerReveals() {
  const els = document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold:0.08, rootMargin:'0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initTransitions() {
  if (!document.getElementById('page-veil')) {
    const v = document.createElement('div'); v.id='page-veil';
    v.style.cssText='position:fixed;inset:0;background:var(--black);z-index:9000;opacity:0;pointer-events:none;transition:opacity .4s cubic-bezier(0.4,0,1,1);';
    document.body.appendChild(v);
  }
  const veil = document.getElementById('page-veil');
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href||href.startsWith('#')||href.startsWith('mailto')||href.startsWith('tel')||href.startsWith('http')) return;
    if (a.target==='_blank') return;
    e.preventDefault();
    veil.style.opacity='1'; veil.style.pointerEvents='all';
    setTimeout(()=>{ window.location.href=href; }, 420);
  });
}

function initParallax() {
  const bg = document.getElementById('heroBg') || document.querySelector('.sp-hero .ph');
  if (!bg||window.innerWidth<=768) return;
  window.addEventListener('scroll', ()=>{
    const y=window.scrollY;
    if(y>window.innerHeight*1.2) return;
    bg.style.transform=`translateY(${y*.28}px)`;
  }, { passive:true });
}

function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el=>{
    const io = new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting) return;
      io.disconnect();
      const target=parseInt(el.dataset.count,10), dur=1800, start=performance.now();
      (function tick(now){ const p=Math.min((now-start)/dur,1), ease=1-Math.pow(1-p,3);
        el.textContent=Math.floor(ease*target).toLocaleString();
        if(p<1) requestAnimationFrame(tick); else el.textContent=target.toLocaleString();
      })(start);
    }, { threshold:.5 });
    io.observe(el);
  });
}

function initLightbox() {
  const items = document.querySelectorAll('[data-lb]');
  if (!items.length) return;
  const lb = document.createElement('div'); lb.id='lb';
  lb.innerHTML=`<button class="lb-x" id="lbX"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="ph" style="max-width:min(1000px,90vw);aspect-ratio:16/9;width:100%;position:relative;"><span class="ph-label" id="lbLbl"></span></div>
    <div style="display:flex;gap:16px;"><button class="btn-ghost" id="lbP">← Prev</button><button class="btn-ghost" id="lbN">Next →</button></div>`;
  lb.style.cssText='position:fixed;inset:0;background:rgba(10,10,10,.97);z-index:2000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s;';
  document.body.appendChild(lb);
  let cur=0;
  const labels=[...items].map(i=>i.dataset.lb);
  const open=i=>{ cur=i; document.getElementById('lbLbl').textContent=labels[i]; lb.style.opacity='1'; lb.style.visibility='visible'; document.body.style.overflow='hidden'; };
  const close=()=>{ lb.style.opacity='0'; lb.style.visibility='hidden'; document.body.style.overflow=''; };
  const nav=d=>{ cur=(cur+d+items.length)%items.length; document.getElementById('lbLbl').textContent=labels[cur]; };
  items.forEach((it,i)=>it.addEventListener('click',()=>open(i)));
  document.getElementById('lbX').addEventListener('click',close);
  document.getElementById('lbP').addEventListener('click',()=>nav(-1));
  document.getElementById('lbN').addEventListener('click',()=>nav(1));
  lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
  document.addEventListener('keydown',e=>{
    if(lb.style.visibility!=='visible') return;
    if(e.key==='Escape') close();
    if(e.key==='ArrowLeft') nav(-1);
    if(e.key==='ArrowRight') nav(1);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initPreloader(); initCursor(); initNav(); initLang();
  initTransitions(); initParallax(); initCounters(); initLightbox(); triggerReveals();
});

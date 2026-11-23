{
// Editable content lives in /content/*.json (change it at /admin).
// The values below are only a fallback if those files can't be loaded.
const fallback={"team": {"members": [{"name": "Daniel Oak", "role": "Founder & CEO", "bio": "Leads strategy and makes sure every client store has a clear plan to profit.", "photo": ""}, {"name": "Sara Bennett", "role": "Head of Paid Ads", "bio": "Runs Meta and TikTok campaigns and scales the ads that bring sales.", "photo": ""}, {"name": "Marco Rossi", "role": "Shopify Developer", "bio": "Builds fast, clean stores and sets up themes, apps and payments.", "photo": ""}, {"name": "Aisha Khan", "role": "Creative Lead", "bio": "Designs brands, product images and ad creatives that stop the scroll.", "photo": ""}]}, "jobs": {"roles": [{"title": "Media buyer (Meta & TikTok)", "type": "Remote · Full time"}, {"title": "Shopify developer", "type": "Remote · Contract"}, {"title": "Graphic & ad designer", "type": "Remote · Part time"}, {"title": "Client success manager", "type": "UK · Full time"}]}, "hire": {"roles": [{"title": "Media buyer", "desc": "Runs and scales your Meta and TikTok ads"}, {"title": "Shopify developer", "desc": "Builds and maintains your store"}, {"title": "Virtual assistant", "desc": "Orders, suppliers and customer emails"}, {"title": "Ad creative designer", "desc": "Images and videos for your ads"}, {"title": "Customer support agent", "desc": "Live chat, email and returns"}]}, "settings": {"email": "irtijaalmumeet@oaklinelivingltd.com", "phone": "+44 7848 495605", "whatsapp": "+39 350 918 6568", "company_number": "", "address": "", "instagram": "", "tiktok": "", "facebook": "", "linkedin": ""}};
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const digits=v=>String(v||'').replace(/[^\d]/g,'');
const $=id=>document.getElementById(id);

// services (fixed)
const ic={
 store:'<path d="M8 18h32l-3-8H11z"/><path d="M10 18v20h28V18"/><path d="M20 38V28h8v10"/>',
 search:'<circle cx="21" cy="21" r="10"/><path d="M29 29l9 9"/>',
 ads:'<path d="M8 20v8h6l12 8V12l-12 8z"/><path d="M32 18c3 3 3 9 0 12"/>',
 brand:'<path d="M12 36l4-12 14-14 6 6-14 14z"/><path d="M26 14l6 6"/>',
 mail:'<rect x="8" y="12" width="32" height="24" rx="4"/><path d="M8 15l16 11 16-11"/>',
 rocket:'<path d="M24 8c8 4 10 14 6 22h-12c-4-8-2-18 6-22z"/><circle cx="24" cy="20" r="3"/><path d="M18 30l-6 6M30 30l6 6M24 32v8"/>'};
const svc=[
 ['store','Shopify store setup','We build your store from scratch: theme, products, pages and payment setup.'],
 ['search','Product research','We find products with real demand so you start with items people already buy.'],
 ['ads','Paid social ads','Facebook, Instagram and TikTok campaigns built to win your first customers.'],
 ['brand','Brand and creative','Logo, branding, product images and scroll-stopping ad creatives.'],
 ['mail','Email marketing setup','Klaviyo abandoned cart flows, welcome sequences and regular campaigns.'],
 ['rocket','Full launch package','Store, products, ads and email in one done-for-you service.',1]];
$('svcs').innerHTML=svc.map(s=>`<article class="svc${s[3]?' big':''}"><svg viewBox="0 0 48 48" fill="none" stroke="var(--oak)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ic[s[0]]}</svg><h3>${s[1]}</h3><p>${s[2]}</p>${s[3]?'<a class="btn" style="border-color:var(--on);color:var(--on);margin-top:auto;align-self:flex-start" href="#contact">Get started</a>':''}</article>`).join('');

const faq=[
 ['Do I need any experience?','No. Oakline is built for complete beginners. We guide you from choosing a niche to your first sale and explain every step.'],
 ['How long until my store is live?','Onboarding takes under 7 days. Most stores are ready to launch ads soon after, depending on products and creatives.'],
 ['Do I own my store and ad accounts?','Yes. Everything is set up in your name and you get full access to your store, ad accounts and analytics.'],
 ['What budget do I need?','We work with budgets from under £500 a month. On the call we suggest a plan that fits what you can spend on ads.'],
 ['Can I just pick one service?','Yes. You can book a single service such as store setup or ads, or choose the full launch package.']];
$('faqs').innerHTML=faq.map((f,i)=>`<details${i?'':' open'}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');

// menu
const m=$('menu'),nav=$('nav');
m.addEventListener('click',()=>{const o=nav.classList.toggle('open');m.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');m.setAttribute('aria-expanded','false')}});

// editable sections
const pal=[['#c99b64','#6e4520'],['#9fb08a','#2b2118'],['#e3bf6c','#4a3424'],['#d98c6a','#2b2118']];
function renderTeam(t){
 const list=(t.members||[]).filter(x=>x&&x.name);
 $('teamg').innerHTML=list.map((x,i)=>OakTeam.card(x,i,'')).join('');
 $('team').hidden=!list.length;
}
const jsel=$('j-role');
function renderJobs(j){
 const list=(j.roles||[]).filter(x=>x&&x.title);
 $('roles').innerHTML=list.length?list.map(r=>`<div class="role"><div><b>${esc(r.title)}</b><br><span>${esc(r.type)}</span></div><button class="btn" type="button" data-r="${esc(r.title)}">Apply</button></div>`).join('')
  :'<div class="role"><div><b>No open roles right now</b><br><span>Send an open application and we will keep you in mind.</span></div></div>';
 jsel.innerHTML='<option value="">Choose a role</option>'+list.map(r=>`<option>${esc(r.title)}</option>`).join('')+'<option>Other / open application</option>';
}
function renderSettings(s){
 const rows=[];
 if(s.whatsapp)rows.push(['WhatsApp',s.whatsapp,`https://wa.me/${digits(s.whatsapp)}`,'Chat now']);
 if(s.phone)rows.push(['Business phone',s.phone,`tel:+${digits(s.phone)}`,'Call us']);
 if(s.email)rows.push(['Email',s.email,`mailto:${s.email}`,'Email us']);
 const cards=rows.map(r=>`<div class="role"><div><b>${r[0]}</b><br><span style="overflow-wrap:anywhere">${esc(r[1])}</span></div><a class="btn" href="${esc(r[2])}">${r[3]}</a></div>`).join('');
 if($('ccontacts'))$('ccontacts').innerHTML=cards;
 $('contacts').innerHTML=rows.map(r=>`<div class="role"><div><b>${r[0]}</b><br><span style="overflow-wrap:anywhere">${esc(r[1])}</span></div><a class="btn" href="${esc(r[2])}">${r[3]}</a></div>`).join('');
 const soc=[['Instagram',s.instagram],['TikTok',s.tiktok],['Facebook',s.facebook],['LinkedIn',s.linkedin]].filter(x=>x[1]);
 $('fcontact').innerHTML=rows.map(r=>`<a href="${esc(r[2])}" style="overflow-wrap:anywhere">${esc(r[1])}</a>`).join('')+soc.map(x=>`<a href="${esc(x[1])}">${x[0]}</a>`).join('');
 $('freg').textContent=[s.company_number?`Company no. ${s.company_number}`:'',s.address||''].filter(Boolean).join(' · ');
 if(s.whatsapp)document.querySelectorAll('a.wa').forEach(a=>a.href=`https://wa.me/${digits(s.whatsapp)}`);
}
$('roles').addEventListener('click',e=>{const b=e.target.closest('button[data-r]');if(!b)return;jsel.value=b.dataset.r;$('jobf').scrollIntoView({behavior:'smooth',block:'start'})});

let settings=fallback.settings;
const load=n=>fetch(`content/${n}.json`,{cache:'no-cache'}).then(r=>r.ok?r.json():fallback[n]).catch(()=>fallback[n]);
renderSettings(settings);
Promise.all(['team','jobs','settings'].map(load)).then(([t,j,s])=>{
 renderTeam(t);renderJobs(j);settings=Object.assign({},fallback.settings,s);renderSettings(settings);
});

// forms -> Google Apps Script (instant email from your own Gmail, CV attached)
// Paste the Web app URL between the quotes after deploying. Empty = falls back to FormSubmit.
const FORM_ENDPOINT='https://script.google.com/macros/s/AKfycbwyZpIYzotLtQhdilw8Ktp9ECSIi8ndd9Iz3Ok0bxZH4rXUH8zas6lN76qOAChNSawrcg/exec';
const labelOf=el=>{const l=document.querySelector(`label[for="${el.id}"]`)||el.closest("label");return (l?l.textContent:el.name||el.id).replace(/\s+/g,' ').trim()};
const readFile=file=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=rej;r.readAsDataURL(file)});
function wire(id,msg,key){
 const f=$(id),ok=f.querySelector('.ok'),btn=f.querySelector('button[type=submit]');
 if(new URLSearchParams(location.search).get('sent')===key){ok.classList.add('show');ok.textContent='Thank you! '+msg}
 f.addEventListener('submit',async e=>{
  let good=true;
  f.querySelectorAll('[required]').forEach(el=>{const w=el.closest('.f');const v=el.type==='checkbox'?el.checked:el.checkValidity()&&el.value.trim()!=='';if(w)w.classList.toggle('bad',!v);if(!v)good=false});
  const cv=f.querySelector('input[type=file]');
  if(cv&&cv.files[0]&&cv.files[0].size>9.5*1024*1024){e.preventDefault();ok.classList.add('show');ok.textContent='Your CV is too large. Please upload a file under 10 MB.';return}
  if(!good){e.preventDefault();ok.classList.add('show');ok.textContent='Please fill in the highlighted fields.';return}
  ok.classList.add('show');ok.textContent='Sending…';btn.disabled=true;
  if(!FORM_ENDPOINT){if(settings.email)f.action='https://formsubmit.co/'+settings.email;return}
  e.preventDefault();
  try{
   const fields={};
   f.querySelectorAll('input,select,textarea').forEach(el=>{
    if(!el.name||el.name.startsWith('_')||el.type==='file'||el.type==='hidden')return;
    if(el.type==='checkbox'){fields[labelOf(el)||el.name]=el.checked?'Yes':'No';return}
    const label=el.id==='j-email'||el.id==='h-email'||el.id==='s-email'?'Email':labelOf(el);
    if(el.value.trim())fields[label]=el.value.trim();
   });
   const payload={_subject:f.querySelector('[name=_subject]').value,_honey:(f.querySelector('[name=_honey]')||{}).value||'',fields};
   if(cv&&cv.files[0])payload.file={name:cv.files[0].name,type:cv.files[0].type,data:await readFile(cv.files[0])};
   const r=await fetch(FORM_ENDPOINT,{method:'POST',body:JSON.stringify(payload)});
   const out=await r.json().catch(()=>({ok:r.ok}));
   if(!out.ok)throw 0;
   const n=(fields['Full name']||fields['Your name']||'').split(' ')[0];
   ok.textContent=`Thank you${n?' '+n:''}! ${msg}`;f.reset();
  }catch(_){
   ok.textContent=`Sorry, that didn't send. Please email us at ${settings.email} or message us on WhatsApp.`;
  }
  btn.disabled=false;
 });
}
wire('jobf','Your application has been received. We review every application and reply within 5 working days.','job');
wire('startf','We will reply within 24 hours with a plan for your store.','store');
}

// Smooth anchor scrolling that follows layout changes (lazy images, loaded content),
// so menu links always land exactly on their section.
(()=>{
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const off=()=>(document.querySelector('header')?.offsetHeight||64)+12;
 let anim=0;
 const stop=()=>cancelAnimationFrame(anim);
 function go(id,push){
  const el=document.getElementById(id);if(!el)return false;stop();
  const target=()=>Math.max(0,Math.min(el.getBoundingClientRect().top+scrollY-off(),document.documentElement.scrollHeight-innerHeight));
  const settle=n=>{const d=target()-scrollY;if(Math.abs(d)>1&&n<30){scrollTo(0,scrollY+d)}if(n<30)anim=requestAnimationFrame(()=>settle(n+1))};
  if(reduce.matches){scrollTo(0,target());settle(0)}
  else{
   const start=scrollY,t0=performance.now(),dur=Math.min(1000,Math.max(450,Math.abs(target()-start)*.3));
   const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
   const step=now=>{const p=Math.min(1,(now-t0)/dur);scrollTo(0,start+(target()-start)*ease(p));anim=requestAnimationFrame(p<1?step:()=>settle(0))};
   anim=requestAnimationFrame(step);
  }
  if(push&&location.hash!=='#'+id)history.pushState(null,'','#'+id);
  return true;
 }
 document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');
  if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const id=decodeURIComponent(a.getAttribute('href').slice(1));
  if(id&&go(id,true))e.preventDefault();
 });
 ['wheel','touchstart','keydown'].forEach(ev=>addEventListener(ev,stop,{passive:true}));
 addEventListener('popstate',()=>{const id=location.hash.slice(1);if(id)go(id,false);else{stop();scrollTo(0,0)}});
 addEventListener('load',()=>{const id=location.hash.slice(1);if(id)go(id,false)});
})();

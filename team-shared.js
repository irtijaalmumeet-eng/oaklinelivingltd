// Shared helpers for team cards and profile pages
window.OakTeam=(function(){
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const slug=n=>String(n||'').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const pal=[['#c99b64','#6e4520'],['#9fb08a','#2b2118'],['#e3bf6c','#4a3424'],['#d98c6a','#2b2118']];
 const src=p=>encodeURI(String(p||'')).replace(/#/g,'%23');
 function pic(x,i,cls){
  if(x.photo)return `<img class="${cls}" src="${esc(src(x.photo))}" alt="${esc(x.name)}" loading="lazy">`;
  const c=pal[i%4];
  return `<svg class="${cls}" viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="200" height="250" fill="var(--sand)"/><circle cx="165" cy="40" r="56" fill="${c[0]}" opacity=".3"/><path d="M30 250c0-52 32-80 70-80s70 28 70 80z" fill="${c[0]}"/><circle cx="100" cy="118" r="40" fill="#e8c9a4"/><path d="M60 114c0-30 18-44 40-44s40 14 40 42c-13-11-29-14-40-14s-27 5-40 16z" fill="${c[1]}"/></svg>`;
 }
 const empId=(x,i)=>x.employee_id||('OAK-EM-'+String(i+1).padStart(4,'0'));
 function card(x,i,base){
  return `<article class="mem"><a class="memlink" href="${base}team/?m=${slug(x.name)}" aria-label="View ${esc(x.name)}'s profile">${pic(x,i,'memph')}</a><div class="membody"><small>${esc(x.role)}</small><h3>${esc(x.name)}</h3><a class="btn memb" href="${base}team/?m=${slug(x.name)}">View profile →</a></div></article>`;
 }
 return {esc,slug,pic,card,empId};
})();

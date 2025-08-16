
async function loadPartials(){
  const headerHost=document.getElementById('site-header');
  const footerHost=document.getElementById('site-footer');
  if(headerHost){const h=await fetch('partials/header.html').then(r=>r.text());headerHost.innerHTML=h;
    const links=document.querySelectorAll('.nav-links a');const curr=(location.pathname.split('/').pop()||'index.html');
    links.forEach(a=>{if(a.getAttribute('href')===curr)a.classList.add('active')});
    document.getElementById('navToggle')?.addEventListener('click',()=>{document.getElementById('menu').classList.toggle('open')});
  }
  if(footerHost){const f=await fetch('partials/footer.html').then(r=>r.text());footerHost.innerHTML=f;
    footerHost.querySelector('#year').textContent=new Date().getFullYear();}
}

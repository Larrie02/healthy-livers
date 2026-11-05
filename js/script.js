document.getElementById('menu').onclick=function(){document.getElementById('links').classList.toggle('open')};
document.querySelectorAll('#links a').forEach(function(a){a.onclick=function(){document.getElementById('links').classList.remove('open')}});
document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('f').onsubmit=function(e){e.preventDefault();document.getElementById('msg').textContent='Thanks '+this.n.value.split(' ')[0]+'! We will call you shortly to confirm your trial.';this.reset()};
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var el=en.target,t=+el.dataset.n,c=0,s=Math.max(1,Math.ceil(t/60));var i=setInterval(function(){c+=s;if(c>=t){c=t;clearInterval(i)}el.textContent=c+'+'},25);io.unobserve(el)})},{threshold:.5});
document.querySelectorAll('[data-n]').forEach(function(el){io.observe(el)});

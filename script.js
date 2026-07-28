const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');const progressBar=document.getElementById('progressBar');const backToTop=document.getElementById('backToTop');menuToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progressBar.style.width=(h>0?window.scrollY/h*100:0)+'%';window.scrollY>500?backToTop.classList.add('visible'):backToTop.classList.remove('visible')});backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Animated professional statistics
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1100;
    const start = performance.now();
    const animate = now => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target) + suffix;
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    observer.unobserve(el);
  });
}, { threshold: .5 });
counters.forEach(counter => counterObserver.observe(counter));

// Static-site enquiry form: opens the visitor's email application
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:farhan.acc365@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

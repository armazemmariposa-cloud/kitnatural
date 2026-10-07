/* ===== Link de compra: altere aqui ===== */
const CHECKOUT_URL = "#checkout";

document.querySelectorAll('.js-buy').forEach(a => a.setAttribute('href', CHECKOUT_URL));

/* Revelar seções ao rolar */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* FAQ acordeão */
document.querySelectorAll('.acc__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.acc__item');
    const open = !item.classList.contains('open');
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
});

/* CTA fixo: aparece após o hero e some no CTA final */
const sticky = document.getElementById('sticky');
const hero = document.querySelector('.hero__cta');
const final = document.getElementById('checkout');
let heroGone = false, finalVisible = false;
const update = () => sticky.classList.toggle('show', heroGone && !finalVisible);
new IntersectionObserver(([e]) => { heroGone = !e.isIntersecting && e.boundingClientRect.top < 0; update(); }).observe(hero);
new IntersectionObserver(([e]) => { finalVisible = e.isIntersecting; update(); }, { threshold: .15 }).observe(final);

/* Indicadores do carrossel */
const car = document.getElementById('carousel');
const dots = [...document.querySelectorAll('#dots i')];
car.addEventListener('scroll', () => {
  const card = car.children[0].getBoundingClientRect().width + 14;
  const i = Math.min(dots.length - 1, Math.round(car.scrollLeft / card));
  dots.forEach((d, n) => d.classList.toggle('on', n === i));
}, { passive: true });

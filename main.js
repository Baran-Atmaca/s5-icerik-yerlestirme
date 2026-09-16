// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const logo = document.getElementById('logo-img');
logo.src = './images/logo.webp';

const ctaBaslik = document.querySelector('.cta-text h1');
ctaBaslik.textContent = siteContent.cta.h1;

const ctaButon = document.querySelector('.cta-text button');
ctaButon.textContent = siteContent.cta.button;

const linkler = document.querySelectorAll('nav a');

linkler[0].textContent = siteContent.nav['nav-item-1'];
linkler[0].classList.add('italic');

linkler[1].textContent = siteContent.nav['nav-item-2'];
linkler[1].classList.add('italic');

linkler[2].textContent = siteContent.nav['nav-item-3'];
linkler[2].classList.add('italic');

linkler[3].textContent = siteContent.nav['nav-item-4'];
linkler[3].classList.add('italic');

linkler[4].textContent = siteContent.nav['nav-item-5'];
linkler[4].classList.add('italic');

const ctaResim = document.getElementById('cta-img');
ctaResim.src = './images/cta-img.webp';


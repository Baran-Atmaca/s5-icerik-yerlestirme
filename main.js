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

const topBasliklar = document.querySelectorAll('.top-content h4');
topBasliklar[0].textContent = siteContent['top-content']['left-h4'];
topBasliklar[1].textContent = siteContent['top-content']['right-h4'];

const topParagraflar = document.querySelectorAll('.top-content p');
topParagraflar[0].textContent = siteContent['top-content']['left-content'];
topParagraflar[1].textContent = siteContent['top-content']['right-content'];

const middleImg = document.getElementById('middle-img');
middleImg.src = './images/graphs.webp';

const botBasliklar = document.querySelectorAll('.bottom-content h4');
botBasliklar[0].textContent = siteContent['bottom-content']['left-h4'];
botBasliklar[1].textContent = siteContent['bottom-content']['middle-h4'];
botBasliklar[2].textContent = siteContent['bottom-content']['right-h4'];

const botParagraflar = document.querySelectorAll('.bottom-content p');
botParagraflar[0].textContent = siteContent['bottom-content']['left-content'];
botParagraflar[1].textContent = siteContent['bottom-content']['middle-content'];
botParagraflar[2].textContent = siteContent['bottom-content']['right-content'];

const contactBaslik = document.querySelector('.contact h4');
contactBaslik.textContent = siteContent.contact['contact-h4'];

const contactParagraflari = document.querySelectorAll('.contact p');

contactParagraflari[0].textContent = siteContent.contact['address'];
contactParagraflari[1].textContent = siteContent.contact['phone'];
contactParagraflari[2].textContent = siteContent.contact['email'];

const footerLink = document.querySelector('footer a');

footerLink.textContent = siteContent.footer['copyright'];
footerLink.classList.add('bold');



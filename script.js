// EFEITO HEADER
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () =>{
    
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    } 

    lastScroll = currentScroll
});

// EFEITO TEXTO INTRO

let ReadmoreIntroBtn = document.querySelector('.read-more-button-intro');
let IntroSection = document.querySelector('.cl-intro-text-wrapper');
let IntroTextFade = document.querySelector('.intro-fade-black-bottom');

ReadmoreIntroBtn.addEventListener ('click', () => {

    IntroSection.classList.toggle('cl-manifesto-wrapper--opened');
    ReadmoreIntroBtn.classList.toggle('read-more-button-intro--up');
    IntroTextFade.classList.toggle('intro-fade-black-bottom--opened');
    
});

// EFEITO TEXTO MANIFESTO

let ReadmoreManifestoBtn = document.querySelector('.read-more-button-manifesto');
let ManifestoSection = document.querySelector('.cl-manifesto-wrapper');
let ManifestoTextFade = document.querySelector('.manifesto-fade-black-bottom');

ReadmoreManifestoBtn.addEventListener ('click', () => {

    ManifestoSection.classList.toggle('cl-manifesto-wrapper--opened');
    ReadmoreManifestoBtn.classList.toggle('read-more-button-manifesto--up');
    ManifestoTextFade.classList.toggle('manifesto-fade-black-bottom--opened');
    
});

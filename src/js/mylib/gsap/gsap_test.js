//  HTML内でjqueryスコープの関数を使用する為の、関数格納配列
//var functions = (jQuery); //[null]; //($);
/*
// Hero section animations
gsap.from('.hero__title', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 0.5,
});
gsap.from('.hero__description', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power4.out',
    delay: 1,
});

// Service section animations
gsap.from('.service__title', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 0.5,
});
gsap.from('.service__item', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power4.out',
    stagger: 0.2,
    delay: 1,
});

// Portfolio section animations
gsap.from('.portfolio__title', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 0.5,
});
gsap.from('.portfolio__item', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power4.out',
    stagger: 0.2,
    delay: 1,
});

// Testimonial section animations
gsap.from('.testimonial__title', {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power4.out',
    delay: 0.5,
});
gsap.from('.swiper-slide', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power4.out',
    stagger: 0.2,
    delay: 1,
});

// Initialize swiper
const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


//---------------------------------------------------------------
// GSAPのTimelineMaxを使う
const tl = new TimelineMax({});

// h1要素を1文字ずつ分割してspan要素で囲む
const heroTitle = document.querySelector('.hero-title');
const chars = heroTitle.innerText.split('');
heroTitle.innerHTML = '';
chars.forEach(char => {
    const span = document.createElement('span');
    span.innerText = char;
    heroTitle.appendChild(span);
});

// h2要素を非表示にする
const heroSubtitle = document.querySelector('.hero-subtitle');
tl.set(heroSubtitle, { opacity: 0 });

// アニメーションを定義する
tl.staggerFromTo(
    '.hero-title span',
    0.5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 },
    0.1
);
tl.to(heroSubtitle, 0.5, { opacity: 1 }, '-=0.2');
*/
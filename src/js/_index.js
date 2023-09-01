import adjustViewport from './function/adjustViewport';
import SmoothScroll from './module/SmoothScroll';
import ScrollAnimation from './module/ScrollAnimation';

// ブレイクポイント
const bp = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
};

const init = () => {

    (() => {
        const smoothScroll = new SmoothScroll({
            targets: 'a[href^="#"]',
            fixHeader: '#js-header',
        });
        smoothScroll.init();
    })();

    (() => {
        const scrollAnimation = new ScrollAnimation();
        scrollAnimation.init();
    })();

};

window.addEventListener('DOMContentLoaded', () => {
    adjustViewport();
    init();
});
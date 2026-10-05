/*--- All Sub Page Hero ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emSubHero = document.querySelector('.em-sub-hero');
    const emSubHeroImageWrap = document.querySelector('.em-sub-hero-image-wrap');
    const emSubHeroImageFrame = document.querySelector('.em-sub-hero-image-frame');
    const emSubHeroImage = document.querySelector('.em-sub-hero-image');
    const emSubHeroParticles = document.getElementById('emSubHeroParticles');
    if (!emSubHero) {
        return;
    }
    /*--- Create Hero Particles ---*/
    function emSubHeroCreateParticles() {
        if (!emSubHeroParticles) {
            return;
        }
        for (let i = 0; i < 24; i++) {
            const emSubHeroParticle = document.createElement('span');
            emSubHeroParticle.className = 'em-sub-hero-particle';
            emSubHeroParticle.style.left = Math.random() * 100 + '%';
            emSubHeroParticle.style.top = Math.random() * 100 + '%';
            emSubHeroParticle.style.animationDelay = Math.random() * 5 + 's';
            emSubHeroParticle.style.animationDuration = 4 + Math.random() * 5 + 's';
            emSubHeroParticles.appendChild(emSubHeroParticle);
        }
    }
    /*--- Mouse Parallax ---*/
    if (emSubHeroImageWrap && emSubHeroImageFrame && window.matchMedia('(min-width: 768px)').matches) {
        emSubHeroImageWrap.addEventListener('mousemove',function (emSubHeroEvent) {
            const emSubHeroRect = emSubHeroImageWrap.getBoundingClientRect();
            const emSubHeroX = emSubHeroEvent.clientX - emSubHeroRect.left;
            const emSubHeroY = emSubHeroEvent.clientY - emSubHeroRect.top;
            const emSubHeroRotateY = ((emSubHeroX / emSubHeroRect.width) - 0.5) * 5;
            const emSubHeroRotateX = ((emSubHeroY / emSubHeroRect.height) - 0.5) * -5;
            emSubHeroImageFrame.style.transform = 'rotate(3deg) perspective(900px) rotateX(' + emSubHeroRotateX + 'deg) rotateY(' + emSubHeroRotateY + 'deg) scale(1.01)';
            if (emSubHeroImage) {
                emSubHeroImage.style.transform = 'scale(1.05) translate(' + (emSubHeroRotateY * -1) + 'px,' + (emSubHeroRotateX * -1) + 'px)';
            }
        });
        emSubHeroImageWrap.addEventListener('mouseleave',function () {
            emSubHeroImageFrame.style.transform = '';
            if (emSubHeroImage) {
                emSubHeroImage.style.transform = '';
            }
        });
    }
    /*--- Hero Scroll Button ---*/
    const emSubHeroScrollButton = document.querySelector('.em-sub-hero-scroll-btn');
    const emSubHeroNext = document.getElementById('em-sub-hero-next');
    if (emSubHeroScrollButton && emSubHeroNext) {
        emSubHeroScrollButton.addEventListener('click',function (emSubHeroEvent) {
            emSubHeroEvent.preventDefault();
            emSubHeroNext.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    /*--- Hero Reveal ---*/
    emSubHero.classList.add('em-sub-hero-ready');
    emSubHeroCreateParticles();
});
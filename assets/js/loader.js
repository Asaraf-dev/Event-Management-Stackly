/*--- Loader ---*/
const emLdrLoader = document.getElementById('emLdrLoader');
const emLdrMessage = document.getElementById('emLdrMessage');
const emLdrParticles = document.getElementById('emLdrParticles');
let emLdrMessageInterval = null;
let emLdrHideTimeout = null;
let emLdrMessageIndex = 0;
/*--- Loader Messages ---*/
const emLdrMessages = [
    'Creating your experience...',
    'Setting the stage...',
    'Preparing unforgettable moments...',
    'Bringing every detail together...',
    'Almost ready...'
];
/*--- Show Loader ---*/
function emShowLoader() {
    if (!emLdrLoader) {
        return;
    }
    clearTimeout(emLdrHideTimeout);
    clearInterval(emLdrMessageInterval);
    emLdrLoader.style.display = 'flex';
    emLdrLoader.classList.remove('em-ldr-hidden','em-ldr-exit');
    emLdrMessageIndex = 0;
    if (emLdrMessage) {
        emLdrMessage.textContent = emLdrMessages[0];
        emLdrMessage.style.opacity = '1';
        emLdrMessage.style.transform = 'translateY(0)';
    }
    emLdrMessageInterval = setInterval(function () {
        emLdrMessageIndex++;
        if (emLdrMessageIndex >= emLdrMessages.length) {
            emLdrMessageIndex = 0;
        }
        if (emLdrMessage) {
            emLdrMessage.style.opacity = '0';
            emLdrMessage.style.transform = 'translateY(8px)';
            setTimeout(function () {
                if (emLdrMessage) {
                    emLdrMessage.textContent = emLdrMessages[emLdrMessageIndex];
                    emLdrMessage.style.opacity = '1';
                    emLdrMessage.style.transform = 'translateY(0)';
                }
            },250);
        }
    },1400);
}
/*--- Hide Loader ---*/
function emHideLoader() {
    if (!emLdrLoader) {
        return;
    }
    clearTimeout(emLdrHideTimeout);
    emLdrHideTimeout = setTimeout(function () {
        clearInterval(emLdrMessageInterval);
        emLdrLoader.classList.add('em-ldr-exit');
        setTimeout(function () {
            if (emLdrLoader) {
                emLdrLoader.classList.add('em-ldr-hidden');
                emLdrLoader.style.display = 'none';
            }
        },800);
    },500);
}
/*--- Create Particles ---*/
function emCreateLoaderParticles() {
    if (!emLdrParticles) {
        return;
    }
    if (emLdrParticles.querySelector('.em-ldr-particle')) {
        return;
    }
    for (let i = 0; i < 30; i++) {
        const emParticle = document.createElement('span');
        emParticle.className = 'em-ldr-particle';
        emParticle.style.left = Math.random() * 100 + '%';
        emParticle.style.top = Math.random() * 100 + '%';
        const emParticleSize = 2 + Math.random() * 3;
        emParticle.style.width = emParticleSize + 'px';
        emParticle.style.height = emParticleSize + 'px';
        emParticle.style.animationDelay = Math.random() * 5 + 's';
        emParticle.style.animationDuration = 4 + Math.random() * 5 + 's';
        emLdrParticles.appendChild(emParticle);
    }
}
/*--- Mouse Glow ---*/
document.addEventListener('mousemove',function (emLdrEvent) {
    if (!emLdrLoader || emLdrLoader.style.display === 'none') {
        return;
    }
    emLdrLoader.style.setProperty('--em-ldr-x',emLdrEvent.clientX + 'px');
    emLdrLoader.style.setProperty('--em-ldr-y',emLdrEvent.clientY + 'px');
});
/*--- Initial Page Load ---*/
document.addEventListener('DOMContentLoaded',function () {
    emCreateLoaderParticles();
    emShowLoader();
});
/*--- Window Loaded ---*/
window.addEventListener('load',function () {
    emHideLoader();
});
/*--- Browser Back / Forward ---*/
window.addEventListener('pageshow',function (emLdrEvent) {
    if (emLdrEvent.persisted) {
        if (emLdrLoader) {
            emLdrLoader.style.display = 'flex';
        }
        emShowLoader();
        emHideLoader();
    }
});
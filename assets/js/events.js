/*--- Event Discovery / Category Filter Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emEvtDiscoveryFilters = document.querySelectorAll('.em-evt-discovery-filter');
    const emEvtDiscoverySearch = document.getElementById('emEvtDiscoverySearch');
    const emEvtDiscoveryCards = document.querySelectorAll('.em-evt-discovery-card');
    const emEvtDiscoveryCount = document.getElementById('emEvtDiscoveryCount');
    const emEvtDiscoveryEmpty = document.getElementById('emEvtDiscoveryEmpty');
    const emEvtDiscoveryReset = document.getElementById('emEvtDiscoveryReset');
    if (!emEvtDiscoveryFilters.length || !emEvtDiscoveryCards.length) {
        return;
    }
    let emEvtDiscoveryCurrentFilter = 'all';
    /*--- Filter Events ---*/
    function emEvtDiscoveryFilterEvents() {
        const emEvtDiscoverySearchValue = emEvtDiscoverySearch ? emEvtDiscoverySearch.value.trim().toLowerCase() : '';
        let emEvtDiscoveryVisibleCount = 0;
        emEvtDiscoveryCards.forEach(function (emEvtDiscoveryCard) {
            const emEvtDiscoveryCategory = emEvtDiscoveryCard.getAttribute('data-category');
            const emEvtDiscoveryTitle = emEvtDiscoveryCard.getAttribute('data-title').toLowerCase();
            const emEvtDiscoveryContent = emEvtDiscoveryCard.textContent.toLowerCase();
            const emEvtDiscoveryCategoryMatch = emEvtDiscoveryCurrentFilter === 'all' || emEvtDiscoveryCategory === emEvtDiscoveryCurrentFilter;
            const emEvtDiscoverySearchMatch = !emEvtDiscoverySearchValue || emEvtDiscoveryTitle.includes(emEvtDiscoverySearchValue) || emEvtDiscoveryContent.includes(emEvtDiscoverySearchValue);
            if (emEvtDiscoveryCategoryMatch && emEvtDiscoverySearchMatch) {
                emEvtDiscoveryCard.classList.remove('is-hidden');
                emEvtDiscoveryCard.style.animation = 'emEvtDiscoveryCardIn .45s ease both';
                emEvtDiscoveryVisibleCount++;
            } else {
                emEvtDiscoveryCard.classList.add('is-hidden');
                emEvtDiscoveryCard.style.animation = '';
            }
        });
        if (emEvtDiscoveryCount) {
            emEvtDiscoveryCount.textContent = emEvtDiscoveryVisibleCount;
        }
        if (emEvtDiscoveryEmpty) {
            emEvtDiscoveryEmpty.classList.toggle('show', emEvtDiscoveryVisibleCount === 0);
        }
    }
    /*--- Category Filter ---*/
    emEvtDiscoveryFilters.forEach(function (emEvtDiscoveryFilter) {
        emEvtDiscoveryFilter.addEventListener('click', function () {
            emEvtDiscoveryCurrentFilter = emEvtDiscoveryFilter.getAttribute('data-filter');
            emEvtDiscoveryFilters.forEach(function (emEvtDiscoveryFilterItem) {
                emEvtDiscoveryFilterItem.classList.remove('active');
            });
            emEvtDiscoveryFilter.classList.add('active');
            emEvtDiscoveryFilterEvents();
        });
    });
    /*--- Event Search ---*/
    if (emEvtDiscoverySearch) {
        emEvtDiscoverySearch.addEventListener('input', function () {
            emEvtDiscoveryFilterEvents();
        });
    }
    /*--- Reset Events ---*/
    if (emEvtDiscoveryReset) {
        emEvtDiscoveryReset.addEventListener('click', function () {
            emEvtDiscoveryCurrentFilter = 'all';
            if (emEvtDiscoverySearch) {
                emEvtDiscoverySearch.value = '';
            }
            emEvtDiscoveryFilters.forEach(function (emEvtDiscoveryFilter) {
                emEvtDiscoveryFilter.classList.toggle('active', emEvtDiscoveryFilter.getAttribute('data-filter') === 'all');
            });
            emEvtDiscoveryFilterEvents();
        });
    }
    /*--- Initial Events ---*/
    emEvtDiscoveryFilterEvents();
});
/*--- Event Card Animation ---*/
const emEvtDiscoveryStyle = document.createElement('style');
emEvtDiscoveryStyle.textContent = '@keyframes emEvtDiscoveryCardIn{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(emEvtDiscoveryStyle);
/*--- Event Discovery / Category Filter Section End ---*/

/*--- How We Bring Events To Life Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emEvtProcess = document.querySelector('.em-evt-process');
    const emEvtProcessSteps = document.querySelectorAll('.em-evt-process-step');
    const emEvtProcessProgress = document.querySelector('.em-evt-process-line-progress');
    if (!emEvtProcess || !emEvtProcessSteps.length || !emEvtProcessProgress) {
        return;
    }
    /*--- Process Scroll Progress ---*/
    function emEvtProcessUpdate() {
        const emEvtProcessRect = emEvtProcess.getBoundingClientRect();
        const emEvtProcessHeight = emEvtProcess.offsetHeight;
        const emEvtProcessViewport = window.innerHeight;
        const emEvtProcessStart = emEvtProcessRect.top;
        const emEvtProcessDistance = emEvtProcessHeight - emEvtProcessViewport;
        const emEvtProcessProgressValue = Math.min(Math.max((-emEvtProcessStart + emEvtProcessViewport * 0.35) / (emEvtProcessHeight * 0.75),0),1);
        emEvtProcessProgress.style.height = emEvtProcessProgressValue * 100 + '%';
    }
    /*--- Active Process Step ---*/
    function emEvtProcessActiveStep() {
        const emEvtProcessTrigger = window.innerHeight * 0.48;
        let emEvtProcessClosestStep = 0;
        let emEvtProcessClosestDistance = Infinity;
        emEvtProcessSteps.forEach(function (emEvtProcessStep,emEvtProcessIndex) {
            const emEvtProcessStepRect = emEvtProcessStep.getBoundingClientRect();
            const emEvtProcessStepCenter = emEvtProcessStepRect.top + emEvtProcessStepRect.height * 0.25;
            const emEvtProcessDistance = Math.abs(emEvtProcessStepCenter - emEvtProcessTrigger);
            if (emEvtProcessDistance < emEvtProcessClosestDistance) {
                emEvtProcessClosestDistance = emEvtProcessDistance;
                emEvtProcessClosestStep = emEvtProcessIndex;
            }
        });
        emEvtProcessSteps.forEach(function (emEvtProcessStep,emEvtProcessIndex) {
            emEvtProcessStep.classList.toggle('active',emEvtProcessIndex === emEvtProcessClosestStep);
        });
    }
    /*--- Process Scroll Event ---*/
    function emEvtProcessScroll() {
        emEvtProcessUpdate();
        emEvtProcessActiveStep();
    }
    emEvtProcessScroll();
    window.addEventListener('scroll',emEvtProcessScroll,{passive:true});
    window.addEventListener('resize',emEvtProcessScroll);
});
/*--- How We Bring Events To Life Section End ---*/

/*--- Event FAQ Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emEvtFaqItems = document.querySelectorAll('.em-evt-faq-item');
    if (!emEvtFaqItems.length) {
        return;
    }
    /*--- FAQ Accordion ---*/
    emEvtFaqItems.forEach(function (emEvtFaqItem) {
        const emEvtFaqQuestion = emEvtFaqItem.querySelector('.em-evt-faq-question');
        if (!emEvtFaqQuestion) {
            return;
        }
        emEvtFaqQuestion.addEventListener('click',function () {
            const emEvtFaqIsActive = emEvtFaqItem.classList.contains('active');
            emEvtFaqItems.forEach(function (emEvtFaqCurrentItem) {
                emEvtFaqCurrentItem.classList.remove('active');
                const emEvtFaqCurrentQuestion = emEvtFaqCurrentItem.querySelector('.em-evt-faq-question');
                if (emEvtFaqCurrentQuestion) {
                    emEvtFaqCurrentQuestion.setAttribute('aria-expanded','false');
                }
            });
            if (!emEvtFaqIsActive) {
                emEvtFaqItem.classList.add('active');
                emEvtFaqQuestion.setAttribute('aria-expanded','true');
            }
        });
    });
});
/*--- Event FAQ Section End ---*/

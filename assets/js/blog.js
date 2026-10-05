/*--- Featured Story Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emBlgFeatured = document.querySelector('.em-blg-featured');
    const emBlgFeaturedVisual = document.querySelector('.em-blg-featured-visual');
    if (!emBlgFeatured || !emBlgFeaturedVisual) {
        return;
    }
    /*--- Featured Story Parallax ---*/
    function emBlgFeaturedParallax() {
        if (window.innerWidth <= 767) {
            emBlgFeaturedVisual.style.transform = 'translateY(0)';
            return;
        }
        const emBlgFeaturedRect = emBlgFeatured.getBoundingClientRect();
        const emBlgFeaturedOffset = (window.innerHeight * 0.5 - (emBlgFeaturedRect.top + emBlgFeaturedRect.height * 0.5)) * 0.025;
        emBlgFeaturedVisual.style.transform = 'translateY(' + emBlgFeaturedOffset + 'px)';
    }
    emBlgFeaturedParallax();
    window.addEventListener('scroll',emBlgFeaturedParallax,{passive:true});
    window.addEventListener('resize',emBlgFeaturedParallax);
});
/*--- Featured Story Section End ---*/

/*--- Latest Insights Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emBlgLatest = document.querySelector('.em-blg-latest');
    const emBlgLatestCards = document.querySelectorAll('.em-blg-latest-card');
    const emBlgLatestFilters = document.querySelectorAll('.em-blg-latest-filter');
    const emBlgLatestSearch = document.getElementById('emBlgLatestSearch');
    const emBlgLatestEmpty = document.getElementById('emBlgLatestEmpty');
    const emBlgLatestReset = document.getElementById('emBlgLatestReset');
    if (!emBlgLatest || !emBlgLatestCards.length) {
        return;
    }
    let emBlgLatestCurrentFilter = 'all';
    /*--- Filter Insights ---*/
    function emBlgLatestFilterInsights() {
        const emBlgLatestSearchValue = emBlgLatestSearch ? emBlgLatestSearch.value.trim().toLowerCase() : '';
        let emBlgLatestVisibleCount = 0;
        emBlgLatestCards.forEach(function (emBlgLatestCard) {
            const emBlgLatestCategory = emBlgLatestCard.getAttribute('data-category') || '';
            const emBlgLatestTitle = (emBlgLatestCard.getAttribute('data-title') || '').toLowerCase();
            const emBlgLatestText = emBlgLatestCard.textContent.toLowerCase();
            const emBlgLatestCategoryMatch = emBlgLatestCurrentFilter === 'all' || emBlgLatestCategory === emBlgLatestCurrentFilter;
            const emBlgLatestSearchMatch = !emBlgLatestSearchValue || emBlgLatestTitle.includes(emBlgLatestSearchValue) || emBlgLatestText.includes(emBlgLatestSearchValue);
            if (emBlgLatestCategoryMatch && emBlgLatestSearchMatch) {
                emBlgLatestCard.classList.remove('hidden');
                emBlgLatestVisibleCount++;
            } else {
                emBlgLatestCard.classList.add('hidden');
            }
        });
        if (emBlgLatestEmpty) {
            emBlgLatestEmpty.classList.toggle('show',emBlgLatestVisibleCount === 0);
        }
    }
    /*--- Category Filter ---*/
    emBlgLatestFilters.forEach(function (emBlgLatestFilter) {
        emBlgLatestFilter.addEventListener('click',function () {
            emBlgLatestFilters.forEach(function (emBlgLatestCurrentButton) {
                emBlgLatestCurrentButton.classList.remove('active');
            });
            emBlgLatestFilter.classList.add('active');
            emBlgLatestCurrentFilter = emBlgLatestFilter.getAttribute('data-filter') || 'all';
            emBlgLatestFilterInsights();
        });
    });
    /*--- Search Insights ---*/
    if (emBlgLatestSearch) {
        emBlgLatestSearch.addEventListener('input',function () {
            emBlgLatestFilterInsights();
        });
    }
    /*--- Reset Insights ---*/
    if (emBlgLatestReset) {
        emBlgLatestReset.addEventListener('click',function () {
            emBlgLatestCurrentFilter = 'all';
            if (emBlgLatestSearch) {
                emBlgLatestSearch.value = '';
            }
            emBlgLatestFilters.forEach(function (emBlgLatestFilter) {
                emBlgLatestFilter.classList.toggle('active',emBlgLatestFilter.getAttribute('data-filter') === 'all');
            });
            emBlgLatestFilterInsights();
        });
    }
    emBlgLatestFilterInsights();
});
/*--- Latest Insights Section End ---*/

/*--- Newsletter / Stay Inspired Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emBlgSubscribeForm = document.getElementById('emBlgSubscribeForm');
    const emBlgSubscribeEmail = document.getElementById('emBlgSubscribeEmail');
    const emBlgSubscribeError = document.getElementById('emBlgSubscribeError');
    const emBlgSubscribeModal = document.getElementById('emBlgSubscribeModal');
    const emBlgSubscribeModalEmail = document.getElementById('emBlgSubscribeModalEmail');
    const emBlgSubscribeModalClose = document.getElementById('emBlgSubscribeModalClose');
    const emBlgSubscribeModalCancel = document.getElementById('emBlgSubscribeModalCancel');
    const emBlgSubscribeModalConfirm = document.getElementById('emBlgSubscribeModalConfirm');
    const emBlgSubscribeModalSuccess = document.getElementById('emBlgSubscribeSuccessClose');
    const emBlgSubscribeModalBackdrop = document.querySelector('.em-blg-subscribe-modal-backdrop');
    if (!emBlgSubscribeForm || !emBlgSubscribeModal) {
        return;
    }
    let emBlgSubscribeCurrentEmail = '';
    /*--- Email Validation ---*/
    function emBlgSubscribeValidateEmail() {
        const emBlgSubscribeValue = emBlgSubscribeEmail.value.trim();
        const emBlgSubscribePattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emBlgSubscribeValue) {
            emBlgSubscribeError.textContent = 'Please enter your email address.';
            emBlgSubscribeEmail.focus();
            return false;
        }
        if (!emBlgSubscribePattern.test(emBlgSubscribeValue)) {
            emBlgSubscribeError.textContent = 'Please enter a valid email address.';
            emBlgSubscribeEmail.focus();
            return false;
        }
        emBlgSubscribeError.textContent = '';
        return true;
    }
    /*--- Open Confirmation Modal ---*/
    function emBlgSubscribeOpenModal() {
        emBlgSubscribeCurrentEmail = emBlgSubscribeEmail.value.trim();
        emBlgSubscribeModalEmail.textContent = emBlgSubscribeCurrentEmail;
        emBlgSubscribeModal.classList.remove('success');
        emBlgSubscribeModal.classList.add('show');
        emBlgSubscribeModal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
    }
    /*--- Close Confirmation Modal ---*/
    function emBlgSubscribeCloseModal() {
        emBlgSubscribeModal.classList.remove('show','success');
        emBlgSubscribeModal.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
    }
    /*--- Submit Subscription ---*/
    emBlgSubscribeForm.addEventListener('submit',function (event) {
        event.preventDefault();
        if (emBlgSubscribeValidateEmail()) {
            emBlgSubscribeOpenModal();
        }
    });
    /*--- Confirm Subscription ---*/
    if (emBlgSubscribeModalConfirm) {
        emBlgSubscribeModalConfirm.addEventListener('click',function () {
            emBlgSubscribeModal.classList.add('success');
        });
    }
    /*--- Cancel Subscription ---*/
    if (emBlgSubscribeModalCancel) {
        emBlgSubscribeModalCancel.addEventListener('click',emBlgSubscribeCloseModal);
    }
    /*--- Close Modal ---*/
    if (emBlgSubscribeModalClose) {
        emBlgSubscribeModalClose.addEventListener('click',emBlgSubscribeCloseModal);
    }
    if (emBlgSubscribeModalBackdrop) {
        emBlgSubscribeModalBackdrop.addEventListener('click',emBlgSubscribeCloseModal);
    }
    /*--- Close Success Modal ---*/
    if (emBlgSubscribeModalSuccess) {
        emBlgSubscribeModalSuccess.addEventListener('click',function () {
            emBlgSubscribeCloseModal();
            emBlgSubscribeForm.reset();
        });
    }
    /*--- Escape Key ---*/
    document.addEventListener('keydown',function (event) {
        if (event.key === 'Escape' && emBlgSubscribeModal.classList.contains('show')) {
            emBlgSubscribeCloseModal();
        }
    });
});
/*--- Newsletter / Stay Inspired Section End ---*/

/*--- Section Start ---*/
/*--- Section End ---*/

/*--- Section Start ---*/
/*--- Section End ---*/

/*--- Section Start ---*/
/*--- Section End ---*/
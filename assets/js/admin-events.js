/*--- Admin Events ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAevGrid = document.getElementById('emAevGrid');
    const emAevCards = document.querySelectorAll('.em-aev-card');
    const emAevSearch = document.getElementById('emAevSearch');
    const emAevCategory = document.getElementById('emAevCategory');
    const emAevStatus = document.getElementById('emAevStatus');
    const emAevResultCount = document.getElementById('emAevResultCount');
    const emAevEmpty = document.getElementById('emAevEmpty');
    const emAevReset = document.getElementById('emAevReset');
    const emAevAddBtn = document.getElementById('emAevAddBtn');
    const emAevViewButtons = document.querySelectorAll('.em-aev-action.view');
    const emAevEditButtons = document.querySelectorAll('.em-aev-action.edit');
    const emAevDeleteButtons = document.querySelectorAll('.em-aev-action.delete');
    if (!emAevGrid || !emAevCards.length) {
        return;
    }
    /*--- Filter Events ---*/
    function emAevFilterEvents() {
        const emAevSearchValue = emAevSearch ? emAevSearch.value.trim().toLowerCase() : '';
        const emAevCategoryValue = emAevCategory ? emAevCategory.value : 'all';
        const emAevStatusValue = emAevStatus ? emAevStatus.value : 'all';
        let emAevVisibleCount = 0;
        emAevCards.forEach(function (emAevCard) {
            const emAevTitle = (emAevCard.getAttribute('data-title') || '').toLowerCase();
            const emAevCategoryData = emAevCard.getAttribute('data-category') || '';
            const emAevStatusData = emAevCard.getAttribute('data-status') || '';
            const emAevText = emAevCard.textContent.toLowerCase();
            const emAevSearchMatch = !emAevSearchValue || emAevTitle.includes(emAevSearchValue) || emAevText.includes(emAevSearchValue);
            const emAevCategoryMatch = emAevCategoryValue === 'all' || emAevCategoryData === emAevCategoryValue;
            const emAevStatusMatch = emAevStatusValue === 'all' || emAevStatusData === emAevStatusValue;
            if (emAevSearchMatch && emAevCategoryMatch && emAevStatusMatch) {
                emAevCard.classList.remove('hidden');
                emAevVisibleCount++;
            } else {
                emAevCard.classList.add('hidden');
            }
        });
        if (emAevResultCount) {
            emAevResultCount.textContent = emAevVisibleCount + (emAevVisibleCount === 1 ? ' Event' : ' Events');
        }
        if (emAevEmpty) {
            emAevEmpty.classList.toggle('show',emAevVisibleCount === 0);
        }
    }
    /*--- Search ---*/
    if (emAevSearch) {
        emAevSearch.addEventListener('input',emAevFilterEvents);
    }
    /*--- Category Filter ---*/
    if (emAevCategory) {
        emAevCategory.addEventListener('change',emAevFilterEvents);
    }
    /*--- Status Filter ---*/
    if (emAevStatus) {
        emAevStatus.addEventListener('change',emAevFilterEvents);
    }
    /*--- Reset Filters ---*/
    if (emAevReset) {
        emAevReset.addEventListener('click',function () {
            if (emAevSearch) {
                emAevSearch.value = '';
            }
            if (emAevCategory) {
                emAevCategory.value = 'all';
            }
            if (emAevStatus) {
                emAevStatus.value = 'all';
            }
            emAevFilterEvents();
        });
    }
    /*--- View Event ---*/
    emAevViewButtons.forEach(function (emAevButton) {
        emAevButton.addEventListener('click',function () {
            const emAevEventName = emAevButton.getAttribute('data-event') || 'Event';
            window.location.href = '404.html';
        });
    });
    /*--- Edit Event ---*/
    emAevEditButtons.forEach(function (emAevButton) {
        emAevButton.addEventListener('click',function () {
            const emAevEventName = emAevButton.getAttribute('data-event') || 'Event';
            window.location.href = '404.html';
        });
    });
    /*--- Delete Event ---*/
    emAevDeleteButtons.forEach(function (emAevButton) {
        emAevButton.addEventListener('click',function () {
            const emAevEventName = emAevButton.getAttribute('data-event') || 'this event';
            const emAevConfirm = window.confirm('Are you sure you want to delete "' + emAevEventName + '"?');
            if (emAevConfirm) {
                const emAevCard = emAevButton.closest('.em-aev-card');
                if (emAevCard) {
                    emAevCard.remove();
                    emAevFilterEvents();
                }
            }
        });
    });
    /*--- Create Event ---*/
    if (emAevAddBtn) {
        emAevAddBtn.addEventListener('click',function () {
            window.location.href = '404.html';
        });
    }
    emAevFilterEvents();
});
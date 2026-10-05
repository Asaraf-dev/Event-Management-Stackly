/*--- Client My Events ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emCevSearch = document.getElementById('emCevSearch');
    const emCevFilters = document.querySelectorAll('.em-cev-filter');
    const emCevCards = document.querySelectorAll('.em-cev-card');
    const emCevEmpty = document.getElementById('emCevEmpty');
    const emCevReset = document.getElementById('emCevReset');
    const emCevResultCount = document.getElementById('emCevResultCount');
    const emCevFavourites = document.querySelectorAll('.em-cev-favourite');
    if (!emCevCards.length) {
        return;
    }
    /*--- Event Filter ---*/
    function emCevFilterEvents() {
        const emCevSearchValue = emCevSearch ? emCevSearch.value.trim().toLowerCase() : '';
        const emCevActiveFilter = document.querySelector('.em-cev-filter.active');
        const emCevFilterValue = emCevActiveFilter ? emCevActiveFilter.getAttribute('data-filter') : 'all';
        let emCevVisibleCount = 0;
        emCevCards.forEach(function (emCevCard) {
            const emCevCategory = emCevCard.getAttribute('data-category') || '';
            const emCevSearchText = emCevCard.getAttribute('data-search') || '';
            const emCevMatchesFilter = emCevFilterValue === 'all' || emCevCategory === emCevFilterValue;
            const emCevMatchesSearch = !emCevSearchValue || emCevSearchText.includes(emCevSearchValue);
            if (emCevMatchesFilter && emCevMatchesSearch) {
                emCevCard.style.display = '';
                emCevVisibleCount++;
            } else {
                emCevCard.style.display = 'none';
            }
        });
        if (emCevResultCount) {
            emCevResultCount.textContent = emCevVisibleCount + (emCevVisibleCount === 1 ? ' Event' : ' Events');
        }
        if (emCevEmpty) {
            emCevEmpty.classList.toggle('show',emCevVisibleCount === 0);
        }
    }
    /*--- Filter Buttons ---*/
    emCevFilters.forEach(function (emCevFilter) {
        emCevFilter.addEventListener('click',function () {
            emCevFilters.forEach(function (emCevCurrentFilter) {
                emCevCurrentFilter.classList.remove('active');
            });
            emCevFilter.classList.add('active');
            emCevFilterEvents();
        });
    });
    /*--- Search ---*/
    if (emCevSearch) {
        emCevSearch.addEventListener('input',emCevFilterEvents);
    }
    /*--- Reset Filters ---*/
    if (emCevReset) {
        emCevReset.addEventListener('click',function () {
            if (emCevSearch) {
                emCevSearch.value = '';
            }
            emCevFilters.forEach(function (emCevCurrentFilter) {
                emCevCurrentFilter.classList.remove('active');
            });
            const emCevAllFilter = document.querySelector('.em-cev-filter[data-filter="all"]');
            if (emCevAllFilter) {
                emCevAllFilter.classList.add('active');
            }
            emCevFilterEvents();
        });
    }
    /*--- Favourite Buttons ---*/
    emCevFavourites.forEach(function (emCevFavourite) {
        emCevFavourite.addEventListener('click',function () {
            emCevFavourite.classList.toggle('active');
            const emCevIcon = emCevFavourite.querySelector('i');
            if (emCevIcon) {
                emCevIcon.className = emCevFavourite.classList.contains('active') ? 'bi bi-heart-fill' : 'bi bi-heart';
            }
        });
    });
    /*--- Initial Filter ---*/
    emCevFilterEvents();
});
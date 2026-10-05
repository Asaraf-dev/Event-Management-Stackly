/*--- Client Bookings ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emCbkSearch = document.getElementById('emCbkSearch');
    const emCbkFilters = document.querySelectorAll('.em-cbk-filter');
    const emCbkRows = document.querySelectorAll('.em-cbk-row');
    const emCbkEmpty = document.getElementById('emCbkEmpty');
    const emCbkReset = document.getElementById('emCbkReset');
    const emCbkResultCount = document.getElementById('emCbkResultCount');
    if (!emCbkRows.length) {
        return;
    }
    /*--- Booking Filter ---*/
    function emCbkFilterBookings() {
        const emCbkSearchValue = emCbkSearch ? emCbkSearch.value.trim().toLowerCase() : '';
        const emCbkActiveFilter = document.querySelector('.em-cbk-filter.active');
        const emCbkFilterValue = emCbkActiveFilter ? emCbkActiveFilter.getAttribute('data-filter') : 'all';
        let emCbkVisibleCount = 0;
        emCbkRows.forEach(function (emCbkRow) {
            const emCbkStatus = emCbkRow.getAttribute('data-status') || '';
            const emCbkSearchText = emCbkRow.getAttribute('data-search') || '';
            const emCbkMatchesFilter = emCbkFilterValue === 'all' || emCbkStatus === emCbkFilterValue;
            const emCbkMatchesSearch = !emCbkSearchValue || emCbkSearchText.includes(emCbkSearchValue);
            if (emCbkMatchesFilter && emCbkMatchesSearch) {
                emCbkRow.style.display = '';
                emCbkVisibleCount++;
            } else {
                emCbkRow.style.display = 'none';
            }
        });
        if (emCbkResultCount) {
            emCbkResultCount.textContent = emCbkVisibleCount + (emCbkVisibleCount === 1 ? ' Booking' : ' Bookings');
        }
        if (emCbkEmpty) {
            emCbkEmpty.classList.toggle('show',emCbkVisibleCount === 0);
        }
    }
    /*--- Booking Filters ---*/
    emCbkFilters.forEach(function (emCbkFilter) {
        emCbkFilter.addEventListener('click',function () {
            emCbkFilters.forEach(function (emCbkCurrentFilter) {
                emCbkCurrentFilter.classList.remove('active');
            });
            emCbkFilter.classList.add('active');
            emCbkFilterBookings();
        });
    });
    /*--- Booking Search ---*/
    if (emCbkSearch) {
        emCbkSearch.addEventListener('input',emCbkFilterBookings);
    }
    /*--- Reset Filters ---*/
    if (emCbkReset) {
        emCbkReset.addEventListener('click',function () {
            if (emCbkSearch) {
                emCbkSearch.value = '';
            }
            emCbkFilters.forEach(function (emCbkCurrentFilter) {
                emCbkCurrentFilter.classList.remove('active');
            });
            const emCbkAllFilter = document.querySelector('.em-cbk-filter[data-filter="all"]');
            if (emCbkAllFilter) {
                emCbkAllFilter.classList.add('active');
            }
            emCbkFilterBookings();
        });
    }
    /*--- Initial Filter ---*/
    emCbkFilterBookings();
});
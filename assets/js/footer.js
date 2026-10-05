/*--- Footer ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emFooterYear = document.getElementById('em-footer-year');
    const emFooterTopBtn = document.getElementById('em-footer-top-btn');
    if (emFooterYear) { emFooterYear.textContent = new Date().getFullYear(); }
    /*--- Back To Top ---*/
    if (emFooterTopBtn) {
        emFooterTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
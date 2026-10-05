/*--- Dashboard ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emDash = document.querySelector('.em-dash');
    const emDashMenuBtn = document.getElementById('emDashMenuBtn');
    const emDashOverlay = document.getElementById('emDashOverlay');
    const emDashLogout = document.getElementById('emDashLogout');
    const emDashEmail = document.getElementById('emDashEmail');
    const emDashMobileEmail = document.getElementById('emDashMobileEmail');
    const emDashDate = document.getElementById('emDashDate');
    if (!emDash) {
        return;
    }
    /*--- Get Login Email ---*/
    const emDashLoginEmail = localStorage.getItem('emRememberedEmail') || sessionStorage.getItem('emLoginEmail') || localStorage.getItem('emRegisteredEmail') || '';
    if (emDashEmail) {
        emDashEmail.textContent = emDashLoginEmail || 'No email available';
    }
    if (emDashMobileEmail) {
        emDashMobileEmail.textContent = emDashLoginEmail || 'No email available';
    }
    /*--- Mobile Menu ---*/
    function emDashOpenMenu() {
        emDash.classList.add('sidebar-open');
        document.body.style.overflow = 'hidden';
    }
    /*--- Close Mobile Menu ---*/
    function emDashCloseMenu() {
        emDash.classList.remove('sidebar-open');
        document.body.style.overflow = '';
    }
    if (emDashMenuBtn) {
        emDashMenuBtn.addEventListener('click',function () {
            if (emDash.classList.contains('sidebar-open')) {
                emDashCloseMenu();
            } else {
                emDashOpenMenu();
            }
        });
    }
    if (emDashOverlay) {
        emDashOverlay.addEventListener('click',emDashCloseMenu);
    }
    /*--- Close Menu On Navigation ---*/
    const emDashNavLinks = document.querySelectorAll('.em-dash-nav-link:not(.em-dash-logout)');
    emDashNavLinks.forEach(function (emDashNavLink) {
        emDashNavLink.addEventListener('click',function () {
            if (window.innerWidth <= 991) {
                emDashCloseMenu();
            }
        });
    });
    /*--- Logout ---*/
    if (emDashLogout) {
        emDashLogout.addEventListener('click',function (event) {
            event.preventDefault();
            sessionStorage.removeItem('emLoginEmail');
            sessionStorage.removeItem('emLoginRole');
            window.location.href = 'login.html';
        });
    }
    /*--- Dashboard Date ---*/
    if (emDashDate) {
        const emDashToday = new Date();
        emDashDate.textContent = emDashToday.toLocaleDateString('en-IN',{
            day:'2-digit',
            month:'short',
            year:'numeric'
        });
    }
    /*--- Dashboard Resize ---*/
    window.addEventListener('resize',function () {
        if (window.innerWidth > 991) {
            emDashCloseMenu();
        }
    });
});
/*--- Navbar ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emNav = document.querySelector('.em-nav');
    const emNavLinks = document.querySelectorAll('.em-nav-link,.em-nav-mobile-link');
    const emNavOffcanvas = document.getElementById('em-nav-offcanvas');
    function emNavScroll() {
        if (window.scrollY > 40) {
            emNav.classList.add('em-nav-scrolled');
        } else {
            emNav.classList.remove('em-nav-scrolled');

        }
    }
    emNavScroll();
    window.addEventListener('scroll', emNavScroll, { passive: true });

    /*--- Active Navigation ---*/
    const emNavCurrentPage = window.location.pathname.split('/').pop() || 'index.html';
    emNavLinks.forEach(function (link) {
        link.classList.remove('active');
    });
    emNavLinks.forEach(function (link) {
        const emNavLinkPage = link.getAttribute('href');
        if (emNavLinkPage === emNavCurrentPage) {
            link.classList.add('active');
        }
    });

    /*--- Mobile Navigation Close ---*/
    if (emNavOffcanvas) {
        const emNavMobileLinks = emNavOffcanvas.querySelectorAll('.em-nav-mobile-link');
        emNavMobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                const emNavOffcanvasInstance = bootstrap.Offcanvas.getInstance(emNavOffcanvas);
                if (emNavOffcanvasInstance) { emNavOffcanvasInstance.hide(); }
            });
        });
    }
});
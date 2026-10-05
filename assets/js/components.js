/*--- Components ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Component Loader ---*/
    const emNavbarContainer = document.getElementById('em-navbar');
    const emFooterContainer = document.getElementById('em-footer');
    /*--- Load Navbar ---*/
    if (emNavbarContainer) {
        fetch('assets/components/navbar.html').then(function (response) {
            if (!response.ok) {
                throw new Error('Navbar component could not be loaded.');
            }
            return response.text();
        }).then(function (data) {
            emNavbarContainer.innerHTML = data;
            emComponentsInitNavbar();
        }).catch(function (error) {
            console.error(error);
        });
    }
    /*--- Load Footer ---*/
    if (emFooterContainer) {
        fetch('assets/components/footer.html').then(function (response) {
            if (!response.ok) {
                throw new Error('Footer component could not be loaded.');
            }
            return response.text();
        }).then(function (data) {
            emFooterContainer.innerHTML = data;
            emComponentsInitFooter();
        }).catch(function (error) {
            console.error(error);
        });
    }
    /*--- Navbar Initialization ---*/
    /*--- Navbar Initialization ---*/
    function emComponentsInitNavbar() {
        const emNav = document.querySelector('.em-nav');
        const emNavLinks = document.querySelectorAll('.em-nav-link,.em-nav-mobile-link');
        const emNavOffcanvas = document.getElementById('em-nav-offcanvas');
        if (!emNav) {
            return;
        }
        /*--- Navbar Scroll ---*/
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
            if (!emNavLinkPage) {
                return;
            }
            const emNavLinkUrl = new URL(emNavLinkPage, window.location.href);
            const emNavLinkPath = emNavLinkUrl.pathname.split('/').pop() || 'index.html';
            if (emNavLinkPath === emNavCurrentPage) {
                link.classList.add('active');
            }
        });
        /*--- Mobile Navigation Close ---*/
        if (emNavOffcanvas) {
            const emNavMobileLinks = emNavOffcanvas.querySelectorAll('.em-nav-mobile-link');
            emNavMobileLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    if (typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
                        const emNavOffcanvasInstance = bootstrap.Offcanvas.getInstance(emNavOffcanvas);
                        if (emNavOffcanvasInstance) {
                            emNavOffcanvasInstance.hide();
                        }
                    }
                });
            });
        }
    }
    /*--- Footer Initialization ---*/
    function emComponentsInitFooter() {
        const emFooterYear = document.getElementById('em-footer-year');
        const emFooterTopBtn = document.getElementById('em-footer-top-btn');
        if (emFooterYear) {
            emFooterYear.textContent = new Date().getFullYear();
        }
        /*--- Back To Top ---*/
        if (emFooterTopBtn) {
            emFooterTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});
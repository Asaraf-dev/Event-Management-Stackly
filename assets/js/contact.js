/*--- Contact Introduction Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emConIntroHighlight = document.querySelector('.em-con-intro-highlight');
    if (!emConIntroHighlight) {
        return;
    }
    /*--- Highlight Card Interaction ---*/
    emConIntroHighlight.addEventListener('mousemove', function (event) {
        if (window.innerWidth <= 767) {
            return;
        }
        const emConIntroRect = emConIntroHighlight.getBoundingClientRect();
        const emConIntroX = ((event.clientX - emConIntroRect.left) / emConIntroRect.width - 0.5) * 3;
        const emConIntroY = ((event.clientY - emConIntroRect.top) / emConIntroRect.height - 0.5) * 3;
        emConIntroHighlight.style.transform = 'translateX(6px) perspective(700px) rotateX(' + -emConIntroY + 'deg) rotateY(' + emConIntroX + 'deg)';
    });
    emConIntroHighlight.addEventListener('mouseleave', function () {
        emConIntroHighlight.style.transform = '';
    });
});
/*--- Contact Introduction Section End ---*/

/*--- Contact Information Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emConInfoCards = document.querySelectorAll('.em-con-info-card');
    if (!emConInfoCards.length) {
        return;
    }
    /*--- Contact Card Interaction ---*/
    emConInfoCards.forEach(function (emConInfoCard) {
        emConInfoCard.addEventListener('mousemove', function (event) {
            if (window.innerWidth <= 767) {
                return;
            }
            const emConInfoRect = emConInfoCard.getBoundingClientRect();
            const emConInfoX = ((event.clientX - emConInfoRect.left) / emConInfoRect.width - 0.5) * 3;
            const emConInfoY = ((event.clientY - emConInfoRect.top) / emConInfoRect.height - 0.5) * 3;
            emConInfoCard.style.transform = 'translateY(-8px) perspective(800px) rotateX(' + -emConInfoY + 'deg) rotateY(' + emConInfoX + 'deg)';
        });
        emConInfoCard.addEventListener('mouseleave', function () {
            emConInfoCard.style.transform = '';
        });
    });
    const ssIndBlogReadButtons = document.querySelectorAll(".e-mail");
    if (ssIndBlogReadButtons.length) {
        ssIndBlogReadButtons.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "mailto:hello@stackly.com";
            });
        });
    }
    const ssIndBlogReadButton = document.querySelectorAll(".phone");
    if (ssIndBlogReadButton.length) {
        ssIndBlogReadButton.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "tel:+919876543210";
            });
        });
    }
    const emIndBlogReadButton = document.querySelectorAll(".map");
    if (emIndBlogReadButton.length) {
        emIndBlogReadButton.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.open("https://www.google.com/maps/search/?api=1&query=MMR+Complex+Chinna+Thirupathi+Salem+Tamil+Nadu+636008", "_blank");
            });
        });
    }

});
/*--- Contact Information Section End ---*/

/*--- Main Contact / Event Enquiry Form Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emConEnquiryForm = document.getElementById('emConEnquiryForm');
    const emConEnquiryName = document.getElementById('emConEnquiryName');
    const emConEnquiryPhone = document.getElementById('emConEnquiryPhone');
    const emConEnquiryModal = document.getElementById('emConEnquiryModal');
    const emConEnquiryModalClose = document.getElementById('emConEnquiryModalClose');
    const emConEnquiryModalDone = document.getElementById('emConEnquiryModalDone');
    const emConEnquiryModalBackdrop = document.querySelector('.em-con-enquiry-modal-backdrop');
    if (!emConEnquiryForm || !emConEnquiryModal) {
        return;
    }
    /*--- Name Validation ---*/
    if (emConEnquiryName) {
        emConEnquiryName.addEventListener('input',function () {
            this.value = this.value.replace(/[^A-Za-z ]/g,'');
        });
    }
    /*--- Phone Validation ---*/
    if (emConEnquiryPhone) {
        emConEnquiryPhone.addEventListener('input',function () {
            this.value = this.value.replace(/[^0-9]/g,'').slice(0,10);
        });
    }
    /*--- Open Confirmation Popup ---*/
    function emConEnquiryOpenModal() {
        emConEnquiryModal.classList.add('show');
        emConEnquiryModal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
    }
    /*--- Close Confirmation Popup ---*/
    function emConEnquiryCloseModal() {
        emConEnquiryModal.classList.remove('show');
        emConEnquiryModal.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
    }
    /*--- Submit Enquiry ---*/
    emConEnquiryForm.addEventListener('submit',function (event) {
        event.preventDefault();
        if (!emConEnquiryForm.checkValidity()) {
            emConEnquiryForm.reportValidity();
            return;
        }
        emConEnquiryOpenModal();
    });
    /*--- Close Popup ---*/
    if (emConEnquiryModalClose) {
        emConEnquiryModalClose.addEventListener('click',emConEnquiryCloseModal);
    }
    /*--- Done Button ---*/
    if (emConEnquiryModalDone) {
        emConEnquiryModalDone.addEventListener('click',function () {
            emConEnquiryCloseModal();
            emConEnquiryForm.reset();
        });
    }
    /*--- Close Popup On Backdrop ---*/
    if (emConEnquiryModalBackdrop) {
        emConEnquiryModalBackdrop.addEventListener('click',emConEnquiryCloseModal);
    }
    /*--- Escape Key ---*/
    document.addEventListener('keydown',function (event) {
        if (event.key === 'Escape' && emConEnquiryModal.classList.contains('show')) {
            emConEnquiryCloseModal();
        }
    });
});
/*--- Main Contact / Event Enquiry Form Section End ---*/

/*--- Map Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emConLocationMap = document.querySelector('.em-con-location-map');
    const emConLocationPin = document.querySelector('.em-con-location-map-pin');
    if (!emConLocationMap || !emConLocationPin) {
        return;
    }
    /*--- Map Pin Interaction ---*/
    emConLocationMap.addEventListener('mousemove',function (event) {
        if (window.innerWidth <= 767) {
            return;
        }
        const emConLocationRect = emConLocationMap.getBoundingClientRect();
        const emConLocationX = ((event.clientX - emConLocationRect.left) / emConLocationRect.width - 0.5) * 8;
        const emConLocationY = ((event.clientY - emConLocationRect.top) / emConLocationRect.height - 0.5) * 8;
        emConLocationPin.style.transform = 'translate(calc(-50% + ' + emConLocationX + 'px),calc(-50% + ' + emConLocationY + 'px))';
    });
    emConLocationMap.addEventListener('mouseleave',function () {
        emConLocationPin.style.transform = 'translate(-50%,-50%)';
    });
});
/*--- Map Section End ---*/

/*--- Quick FAQ Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emConQuickFaqItems = document.querySelectorAll('.em-con-quick-faq-item');
    if (!emConQuickFaqItems.length) {
        return;
    }
    /*--- FAQ Accordion ---*/
    emConQuickFaqItems.forEach(function (emConQuickFaqItem) {
        const emConQuickFaqQuestion = emConQuickFaqItem.querySelector('.em-con-quick-faq-question');
        if (!emConQuickFaqQuestion) {
            return;
        }
        emConQuickFaqQuestion.addEventListener('click',function () {
            const emConQuickFaqIsActive = emConQuickFaqItem.classList.contains('active');
            emConQuickFaqItems.forEach(function (emConQuickFaqCurrentItem) {
                emConQuickFaqCurrentItem.classList.remove('active');
                const emConQuickFaqCurrentQuestion = emConQuickFaqCurrentItem.querySelector('.em-con-quick-faq-question');
                if (emConQuickFaqCurrentQuestion) {
                    emConQuickFaqCurrentQuestion.setAttribute('aria-expanded','false');
                }
            });
            if (!emConQuickFaqIsActive) {
                emConQuickFaqItem.classList.add('active');
                emConQuickFaqQuestion.setAttribute('aria-expanded','true');
            }
        });
    });
    /*--- FAQ Contact Link ---*/
    const emConQuickFaqContact = document.querySelector('.em-con-quick-faq-contact');
    if (emConQuickFaqContact) {
        emConQuickFaqContact.addEventListener('click',function (event) {
            const emConQuickFaqTarget = document.getElementById('emConEnquiryForm');
            if (emConQuickFaqTarget) {
                event.preventDefault();
                emConQuickFaqTarget.scrollIntoView({ behavior:'smooth', block:'start' });
            }
        });
    }
});
/*--- Quick FAQ Section End ---*/

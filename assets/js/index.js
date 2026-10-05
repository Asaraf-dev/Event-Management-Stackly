/*--- Hero Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emIndHero = document.getElementById('em-ind-hero');
    const emIndHeroVisual = document.querySelector('.em-ind-hero-visual');
    const emIndHeroMainImage = document.querySelector('.em-ind-hero-main-image');
    const emIndHeroPlayBtn = document.getElementById('em-ind-hero-play-btn');
    const emIndHeroCounters = document.querySelectorAll('.em-ind-hero-counter');
    if (!emIndHero) {
        return;
    }
    /*--- Hero Mouse Parallax ---*/
    if (emIndHeroVisual && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        emIndHeroVisual.addEventListener('mousemove', function (emIndHeroEvent) {
            const emIndHeroRect = emIndHeroVisual.getBoundingClientRect();
            const emIndHeroX = (emIndHeroEvent.clientX - emIndHeroRect.left) / emIndHeroRect.width - 0.5;
            const emIndHeroY = (emIndHeroEvent.clientY - emIndHeroRect.top) / emIndHeroRect.height - 0.5;
            if (emIndHeroMainImage) {
                emIndHeroMainImage.style.transform = 'rotate(2deg) translate(' + emIndHeroX * 8 + 'px,' + emIndHeroY * 8 + 'px)';
            }
            emIndHeroVisual.style.setProperty('--em-ind-hero-mouse-x', emIndHeroX * 20 + 'px');
            emIndHeroVisual.style.setProperty('--em-ind-hero-mouse-y', emIndHeroY * 20 + 'px');
        });
        emIndHeroVisual.addEventListener('mouseleave', function () {
            if (emIndHeroMainImage) {
                emIndHeroMainImage.style.transform = 'rotate(2deg) translate(0,0)';
            }
        });
    }
    /*--- Hero Counters ---*/
    function emIndHeroAnimateCounter(emIndHeroCounter) {
        const emIndHeroTarget = Number(emIndHeroCounter.getAttribute('data-target'));
        if (!emIndHeroTarget) {
            return;
        }
        const emIndHeroDuration = 1800;
        const emIndHeroStart = performance.now();
        function emIndHeroUpdateCounter(emIndHeroTime) {
            const emIndHeroProgress = Math.min((emIndHeroTime - emIndHeroStart) / emIndHeroDuration, 1);
            const emIndHeroValue = Math.floor((1 - Math.pow(1 - emIndHeroProgress, 3)) * emIndHeroTarget);
            emIndHeroCounter.textContent = emIndHeroValue;
            if (emIndHeroProgress < 1) {
                requestAnimationFrame(emIndHeroUpdateCounter);
            } else {
                emIndHeroCounter.textContent = emIndHeroTarget;
            }
        }
        requestAnimationFrame(emIndHeroUpdateCounter);
    }
    /*--- Counter Observer ---*/
    if (emIndHeroCounters.length) {
        const emIndHeroCounterObserver = new IntersectionObserver(function (emIndHeroEntries, emIndHeroObserver) {
            emIndHeroEntries.forEach(function (emIndHeroEntry) {
                if (emIndHeroEntry.isIntersecting) {
                    emIndHeroCounters.forEach(function (emIndHeroCounter) {
                        emIndHeroAnimateCounter(emIndHeroCounter);
                    });
                    emIndHeroObserver.disconnect();
                }
            });
        }, { threshold: .35 });
        emIndHeroCounterObserver.observe(emIndHero);
    }
    /*--- Story Button ---*/
    if (emIndHeroPlayBtn) {
        emIndHeroPlayBtn.addEventListener('click', function () {
            emIndHeroPlayBtn.classList.toggle('active');
            const emIndHeroIcon = emIndHeroPlayBtn.querySelector('i');
            if (emIndHeroIcon) {
                if (emIndHeroPlayBtn.classList.contains('active')) {
                    emIndHeroIcon.classList.remove('bi-play-fill');
                    emIndHeroIcon.classList.add('bi-pause-fill');
                } else {
                    emIndHeroIcon.classList.remove('bi-pause-fill');
                    emIndHeroIcon.classList.add('bi-play-fill');
                }
            }
        });
    }
    /*--- Hero Scroll Effect ---*/
    window.addEventListener('scroll', function () {
        if (!emIndHeroVisual) {
            return;
        }
        const emIndHeroScroll = window.scrollY;
        if (emIndHeroScroll < 700) {
            emIndHeroVisual.style.transform = 'translateY(' + emIndHeroScroll * 0.035 + 'px)';
        }
    }, { passive: true });

    const ssIndBlogReadButtons = document.querySelectorAll(".em-ind-hero-event-arrow");
    if (ssIndBlogReadButtons.length) {
        ssIndBlogReadButtons.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "404.html";
            });
        });
    }
});
/*--- Hero Section End ---*/

/*--- Event Categories Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emIndCategoryItems = document.querySelectorAll('.em-ind-category-item');
    const emIndCategoryImage = document.getElementById('em-ind-category-image');
    const emIndCategoryTag = document.getElementById('em-ind-category-tag');
    const emIndCategoryTitle = document.getElementById('em-ind-category-title');
    const emIndCategoryDescription = document.getElementById('em-ind-category-description');
    const emIndCategoryCurrent = document.getElementById('em-ind-category-current');
    if (!emIndCategoryItems.length || !emIndCategoryImage) {
        return;
    }
    /*--- Category Data ---*/
    const emIndCategories = {
        wedding: {
            number: '01',
            tag: '01 / CELEBRATIONS',
            title: 'Weddings & Celebrations',
            description: 'Beautifully planned celebrations where every detail comes together to create a day worth remembering forever.',
            image: 'assets/images/category-wedding.webp'
        },
        corporate: {
            number: '02',
            tag: '02 / CORPORATE',
            title: 'Corporate Events',
            description: 'Professional experiences designed to bring teams, clients, and businesses together with purpose and impact.',
            image: 'assets/images/category-corporate.webp'
        },
        concert: {
            number: '03',
            tag: '03 / ENTERTAINMENT',
            title: 'Music & Concerts',
            description: 'High-energy live experiences built around powerful performances, unforgettable atmosphere, and engaged audiences.',
            image: 'assets/images/category-concert.webp'
        },
        conference: {
            number: '04',
            tag: '04 / BUSINESS',
            title: 'Conferences',
            description: 'Well-organized conferences that combine thoughtful planning, seamless execution, and meaningful connections.',
            image: 'assets/images/category-conference.webp'
        },
        workshop: {
            number: '05',
            tag: '05 / LEARNING',
            title: 'Workshops',
            description: 'Interactive and engaging workshops created to make learning, collaboration, and networking more memorable.',
            image: 'assets/images/category-workshop.webp'
        },
        private: {
            number: '06',
            tag: '06 / PRIVATE EVENTS',
            title: 'Private Parties',
            description: 'Personal celebrations crafted around your personality, your people, and the moments you want to remember.',
            image: 'assets/images/category-private.webp'
        }
    };
    /*--- Change Category ---*/
    function emIndChangeCategory(emIndCategoryKey) {
        const emIndCategory = emIndCategories[emIndCategoryKey];
        if (!emIndCategory) {
            return;
        }
        emIndCategoryItems.forEach(function (item) {
            item.classList.remove('active');
        });
        const emIndActiveItem = document.querySelector('[data-category="' + emIndCategoryKey + '"]');
        if (emIndActiveItem) {
            emIndActiveItem.classList.add('active');
        }
        const emIndImageContainer = emIndCategoryImage.closest('.em-ind-category-image');
        if (emIndImageContainer) {
            emIndImageContainer.classList.add('fade');
        }
        setTimeout(function () {
            emIndCategoryImage.src = emIndCategory.image;
            emIndCategoryImage.alt = emIndCategory.title;
            emIndCategoryTag.textContent = emIndCategory.tag;
            emIndCategoryTitle.textContent = emIndCategory.title;
            emIndCategoryDescription.textContent = emIndCategory.description;
            emIndCategoryCurrent.textContent = emIndCategory.number;
            if (emIndImageContainer) {
                emIndImageContainer.classList.remove('fade');
            }
        }, 250);
    }
    /*--- Category Click ---*/
    emIndCategoryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const emIndCategoryKey = item.getAttribute('data-category');
            emIndChangeCategory(emIndCategoryKey);
        });
    });
    /*--- Category Keyboard Support ---*/
    emIndCategoryItems.forEach(function (item) {
        item.addEventListener('keydown', function (emIndEvent) {
            if (emIndEvent.key === 'Enter' || emIndEvent.key === ' ') {
                emIndEvent.preventDefault();
                item.click();
            }
        });
    });
});
/*--- Event Categories Section End ---*/

/*--- What We Create Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const emIndCreateServices = document.querySelectorAll('.em-ind-create-service');
    const emIndCreateFeaturedImage = document.querySelector('.em-ind-create-featured-image img');
    const emIndCreateFeaturedNumber = document.querySelector('.em-ind-create-featured-number');
    const emIndCreateFeaturedCaption = document.querySelector('.em-ind-create-featured-caption');
    const emIndCreateFeaturedLabel = document.querySelector('.em-ind-create-featured-content > span');
    const emIndCreateFeaturedTitle = document.querySelector('.em-ind-create-featured-content h3');
    const emIndCreateFeaturedText = document.querySelector('.em-ind-create-featured-content p');
    if (!emIndCreateServices.length) {
        return;
    }
    /*--- Service Data ---*/
    const emIndCreateData = {
        planning: {
            number: '500+',
            caption: 'Events Created',
            label: '01 / OUR EXPERTISE',
            title: 'Turning Your Vision Into A <strong>Real Experience.</strong>',
            text: 'We handle every detail behind the scenes so you can focus on the moments that matter.',
            image: 'assets/images/create-featured.webp'
        },
        styling: {
            number: '150+',
            caption: 'Spaces Transformed',
            label: '02 / CREATIVE DESIGN',
            title: 'Spaces Designed To <strong>Tell Your Story.</strong>',
            text: 'From elegant celebrations to bold corporate environments, every space is designed with intention.',
            image: 'assets/images/create-styling.webp'
        },
        entertainment: {
            number: '200+',
            caption: 'Live Experiences',
            label: '03 / ENTERTAINMENT',
            title: 'Energy That <strong>Brings People Together.</strong>',
            text: 'We curate performances, music, and entertainment that turn events into unforgettable experiences.',
            image: 'assets/images/create-entertainment.webp'
        },
        hospitality: {
            number: '50K+',
            caption: 'Guests Welcomed',
            label: '04 / GUEST EXPERIENCE',
            title: 'Every Guest Deserves A <strong>Memorable Welcome.</strong>',
            text: 'From arrival to farewell, we design thoughtful experiences that make every guest feel valued.',
            image: 'assets/images/create-hospitality.webp'
        },
        production: {
            number: '100+',
            caption: 'Productions Delivered',
            label: '05 / EVENT PRODUCTION',
            title: 'Every Detail Working <strong>Behind The Scenes.</strong>',
            text: 'Technology, production, lighting, sound, and coordination come together for a seamless event.',
            image: 'assets/images/create-production.webp'
        }
    };
    /*--- Change Featured Service ---*/
    function emIndCreateChangeService(emIndCreateKey) {
        const emIndCreateItem = emIndCreateData[emIndCreateKey];
        if (!emIndCreateItem) {
            return;
        }
        emIndCreateServices.forEach(function (service) {
            service.classList.remove('active');
        });
        const emIndCreateActive = document.querySelector('[data-create="' + emIndCreateKey + '"]');
        if (emIndCreateActive) {
            emIndCreateActive.classList.add('active');
        }
        if (emIndCreateFeaturedImage) {
            emIndCreateFeaturedImage.style.opacity = '0';
            emIndCreateFeaturedImage.style.transform = 'scale(1.04)';
        }
        setTimeout(function () {
            if (emIndCreateFeaturedImage) {
                emIndCreateFeaturedImage.src = emIndCreateItem.image;
                emIndCreateFeaturedImage.alt = emIndCreateItem.caption;
                emIndCreateFeaturedImage.style.opacity = '1';
                emIndCreateFeaturedImage.style.transform = 'scale(1)';
            }
            if (emIndCreateFeaturedNumber) {
                emIndCreateFeaturedNumber.textContent = emIndCreateItem.number;
            }
            if (emIndCreateFeaturedCaption) {
                emIndCreateFeaturedCaption.textContent = emIndCreateItem.caption;
            }
            if (emIndCreateFeaturedLabel) {
                emIndCreateFeaturedLabel.textContent = emIndCreateItem.label;
            }
            if (emIndCreateFeaturedTitle) {
                emIndCreateFeaturedTitle.innerHTML = emIndCreateItem.title;
            }
            if (emIndCreateFeaturedText) {
                emIndCreateFeaturedText.textContent = emIndCreateItem.text;
            }
        }, 250);
    }
    /*--- Service Selection ---*/
    emIndCreateServices.forEach(function (service) {
        service.addEventListener('click', function () {
            const emIndCreateKey = service.getAttribute('data-create');
            emIndCreateChangeService(emIndCreateKey);
        });
    });
});
/*--- What We Create Section End ---*/

/*--- Why Choose Us Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emIndWhyCards = document.querySelectorAll('[data-why-card]');
    if (!emIndWhyCards.length) {
        return;
    }
    /*--- Card Hover Interaction ---*/
    emIndWhyCards.forEach(function (emIndWhyCard) {
        emIndWhyCard.addEventListener('mousemove',function (emIndWhyEvent) {
            if (window.innerWidth <= 767) {
                return;
            }
            const emIndWhyRect = emIndWhyCard.getBoundingClientRect();
            const emIndWhyX = emIndWhyEvent.clientX - emIndWhyRect.left;
            const emIndWhyY = emIndWhyEvent.clientY - emIndWhyRect.top;
            const emIndWhyRotateY = ((emIndWhyX / emIndWhyRect.width) - 0.5) * 2.5;
            const emIndWhyRotateX = ((emIndWhyY / emIndWhyRect.height) - 0.5) * -2.5;
            emIndWhyCard.style.transform = 'translateY(-5px) perspective(1000px) rotateX(' + emIndWhyRotateX + 'deg) rotateY(' + emIndWhyRotateY + 'deg)';
        });
        emIndWhyCard.addEventListener('mouseleave',function () {
            emIndWhyCard.style.transform = '';
        });
    });
});
/*--- Why Choose Us Section End ---*/

/*--- Upcoming / Live Events Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emIndEventItems = document.querySelectorAll('.em-ind-event-item');
    const emIndEventImage = document.getElementById('emIndEventImage');
    const emIndEventCategory = document.getElementById('emIndEventCategory');
    const emIndEventLocation = document.getElementById('emIndEventLocation');
    const emIndEventTitle = document.getElementById('emIndEventTitle');
    const emIndEventDescription = document.getElementById('emIndEventDescription');
    const emIndEventDay = document.getElementById('emIndEventDay');
    const emIndEventMonth = document.getElementById('emIndEventMonth');
    const emIndEventYear = document.getElementById('emIndEventYear');
    if (!emIndEventItems.length) {
        return;
    }
    /*--- Event Data ---*/
    const emIndEventData = {
        music: {
            image: 'assets/images/category-concert.webp',
            category: 'Music & Concerts',
            location: 'Chennai, Tamil Nadu',
            title: 'Rhythm Under The Stars',
            description: 'An immersive evening of live music, lights, energy, and unforgettable moments under an open sky.',
            day: '18',
            month: 'OCT',
            year: '2026'
        },
        corporate: {
            image: 'assets/images/category-conference.webp',
            category: 'Corporate',
            location: 'Bengaluru, Karnataka',
            title: 'Future Leaders Summit',
            description: 'A high-energy corporate gathering connecting ambitious minds, innovative ideas, and future-focused conversations.',
            day: '25',
            month: 'OCT',
            year: '2026'
        },
        conference: {
            image: 'assets/images/category-workshop.webp',
            category: 'Conference',
            location: 'Hyderabad, Telangana',
            title: 'Ideas In Motion',
            description: 'A dynamic conference bringing together creators, professionals, and industry voices to exchange ideas.',
            day: '07',
            month: 'NOV',
            year: '2026'
        },
        celebration: {
            image: 'assets/images/category-wedding.webp',
            category: 'Celebration',
            location: 'Coimbatore, Tamil Nadu',
            title: 'The Grand Celebration',
            description: 'A beautifully curated celebration filled with meaningful moments, elegant details, and unforgettable memories.',
            day: '21',
            month: 'NOV',
            year: '2026'
        }
    };
    /*--- Event Selection ---*/
    emIndEventItems.forEach(function (emIndEventItem) {
        emIndEventItem.addEventListener('click',function () {
            const emIndEventType = emIndEventItem.getAttribute('data-event');
            const emIndEvent = emIndEventData[emIndEventType];
            if (!emIndEvent) {
                return;
            }
            emIndEventItems.forEach(function (item) {
                item.classList.remove('active');
            });
            emIndEventItem.classList.add('active');
            if (emIndEventImage) {
                emIndEventImage.style.opacity = '0';
                emIndEventImage.style.transform = 'scale(1.03)';
                setTimeout(function () {
                    emIndEventImage.src = emIndEvent.image;
                    emIndEventImage.style.opacity = '1';
                    emIndEventImage.style.transform = 'scale(1)';
                },200);
            }
            if (emIndEventCategory) {
                emIndEventCategory.textContent = emIndEvent.category;
            }
            if (emIndEventLocation) {
                emIndEventLocation.textContent = emIndEvent.location;
            }
            if (emIndEventTitle) {
                emIndEventTitle.textContent = emIndEvent.title;
            }
            if (emIndEventDescription) {
                emIndEventDescription.textContent = emIndEvent.description;
            }
            if (emIndEventDay) {
                emIndEventDay.textContent = emIndEvent.day;
            }
            if (emIndEventMonth) {
                emIndEventMonth.textContent = emIndEvent.month;
            }
            if (emIndEventYear) {
                emIndEventYear.textContent = emIndEvent.year;
            }
        });
    });
});
/*--- Upcoming / Live Events Section End ---*/

/*--- Testimonials Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emIndTestItems = document.querySelectorAll('.em-ind-testimonials-nav');
    const emIndTestQuote = document.getElementById('emIndTestQuote');
    const emIndTestName = document.getElementById('emIndTestName');
    const emIndTestRole = document.getElementById('emIndTestRole');
    const emIndTestEvent = document.getElementById('emIndTestEvent');
    const emIndTestImage = document.querySelector('.em-ind-testimonials-client-image img');
    const emIndTestCurrent = document.getElementById('emIndTestCurrent');
    const emIndTestPrev = document.getElementById('emIndTestPrev');
    const emIndTestNext = document.getElementById('emIndTestNext');
    const emIndTestMain = document.querySelector('.em-ind-testimonials-main');
    if (!emIndTestItems.length || !emIndTestQuote) {
        return;
    }
    /*--- Testimonial Data ---*/
    const emIndTestData = [
        {
            quote: 'They did not just organize our event. They understood our vision, elevated it, and delivered an experience that our guests are still talking about.',
            name: 'Arun Kumar',
            role: 'Corporate Event Client',
            event: 'Future Leaders Summit',
            image: 'assets/images/client-1.webp'
        },
        {
            quote: 'Every little detail was handled beautifully. We could actually enjoy our celebration without worrying about what was happening behind the scenes.',
            name: 'Priya Menon',
            role: 'Celebration Client',
            event: 'The Grand Celebration',
            image: 'assets/images/client-2.webp'
        },
        {
            quote: 'From the first planning meeting to the final moment, the entire experience felt effortless. The team brought incredible energy and creativity to the event.',
            name: 'Rahul Sharma',
            role: 'Conference Client',
            event: 'Ideas In Motion',
            image: 'assets/images/client-3.webp'
        },
        {
            quote: 'The atmosphere, production, coordination, and guest experience were all exceptional. They turned a simple idea into something genuinely memorable.',
            name: 'Krishnan',
            role: 'Music Event Client',
            event: 'Rhythm Under The Stars',
            image: 'assets/images/client-4.webp'
        }
    ];
    let emIndTestIndex = 0;
    let emIndTestInterval = null;
    let emIndTestAnimating = false;
    /*--- Update Testimonial ---*/
    function emIndTestUpdate(index,direction) {
        if (emIndTestAnimating || !emIndTestData[index]) {
            return;
        }
        emIndTestAnimating = true;
        const emIndTestItem = emIndTestData[index];
        if (emIndTestMain) {
            emIndTestMain.classList.add(direction === 'next' ? 'em-ind-test-next' : 'em-ind-test-prev');
        }
        setTimeout(function () {
            if (emIndTestQuote) {
                emIndTestQuote.textContent = '"' + emIndTestItem.quote + '"';
            }
            if (emIndTestName) {
                emIndTestName.textContent = emIndTestItem.name;
            }
            if (emIndTestRole) {
                emIndTestRole.textContent = emIndTestItem.role;
            }
            if (emIndTestEvent) {
                emIndTestEvent.textContent = emIndTestItem.event;
            }
            if (emIndTestImage) {
                emIndTestImage.src = emIndTestItem.image;
                emIndTestImage.alt = emIndTestItem.name;
            }
            if (emIndTestCurrent) {
                emIndTestCurrent.textContent = String(index + 1).padStart(2,'0');
            }
            emIndTestItems.forEach(function (item,itemIndex) {
                item.classList.toggle('active',itemIndex === index);
            });
            if (emIndTestMain) {
                emIndTestMain.classList.remove('em-ind-test-next','em-ind-test-prev');
            }
            emIndTestIndex = index;
            emIndTestAnimating = false;
        },180);
    }
    /*--- Navigation ---*/
    function emIndTestGoNext() {
        const emIndTestNextIndex = (emIndTestIndex + 1) % emIndTestData.length;
        emIndTestUpdate(emIndTestNextIndex,'next');
    }
    function emIndTestGoPrev() {
        const emIndTestPrevIndex = (emIndTestIndex - 1 + emIndTestData.length) % emIndTestData.length;
        emIndTestUpdate(emIndTestPrevIndex,'prev');
    }
    /*--- Testimonial Buttons ---*/
    emIndTestItems.forEach(function (emIndTestItem) {
        emIndTestItem.addEventListener('click',function () {
            const emIndTestTarget = Number(emIndTestItem.getAttribute('data-testimonial'));
            const emIndTestDirection = emIndTestTarget > emIndTestIndex ? 'next' : 'prev';
            emIndTestUpdate(emIndTestTarget,emIndTestDirection);
            emIndTestRestart();
        });
    });
    if (emIndTestNext) {
        emIndTestNext.addEventListener('click',function () {
            emIndTestGoNext();
            emIndTestRestart();
        });
    }
    if (emIndTestPrev) {
        emIndTestPrev.addEventListener('click',function () {
            emIndTestGoPrev();
            emIndTestRestart();
        });
    }
    /*--- Auto Rotation ---*/
    function emIndTestStart() {
        clearInterval(emIndTestInterval);
        emIndTestInterval = setInterval(function () {
            emIndTestGoNext();
        },6000);
    }
    function emIndTestRestart() {
        emIndTestStart();
    }
    /*--- Pause On Hover ---*/
    if (emIndTestMain) {
        emIndTestMain.addEventListener('mouseenter',function () {
            clearInterval(emIndTestInterval);
        });
        emIndTestMain.addEventListener('mouseleave',function () {
            emIndTestStart();
        });
    }
    /*--- Start Slider ---*/
    emIndTestStart();
});
/*--- Testimonials Section End ---*/
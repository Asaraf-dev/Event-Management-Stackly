/*--- About Introduction / Our Story Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAbtStoryCounters = document.querySelectorAll('[data-story-count]');
    if (!emAbtStoryCounters.length) {
        return;
    }
    /*--- Counter Animation ---*/
    function emAbtStoryAnimateCounter(emAbtStoryCounter) {
        const emAbtStoryTarget = Number(emAbtStoryCounter.getAttribute('data-story-count'));
        const emAbtStoryDuration = 1800;
        const emAbtStoryStart = performance.now();
        function emAbtStoryUpdate(emAbtStoryTime) {
            const emAbtStoryProgress = Math.min((emAbtStoryTime - emAbtStoryStart) / emAbtStoryDuration,1);
            const emAbtStoryEase = 1 - Math.pow(1 - emAbtStoryProgress,3);
            emAbtStoryCounter.textContent = Math.floor(emAbtStoryEase * emAbtStoryTarget);
            if (emAbtStoryProgress < 1) {
                requestAnimationFrame(emAbtStoryUpdate);
            } else {
                emAbtStoryCounter.textContent = emAbtStoryTarget;
            }
        }
        requestAnimationFrame(emAbtStoryUpdate);
    }
    /*--- Counter Observer ---*/
    const emAbtStoryObserver = new IntersectionObserver(function (emAbtStoryEntries,emAbtStoryObserverInstance) {
        emAbtStoryEntries.forEach(function (emAbtStoryEntry) {
            if (emAbtStoryEntry.isIntersecting) {
                emAbtStoryCounters.forEach(function (emAbtStoryCounter) {
                    emAbtStoryAnimateCounter(emAbtStoryCounter);
                });
                emAbtStoryObserverInstance.disconnect();
            }
        });
    },{ threshold:0.3 });
    const emAbtStoryStats = document.querySelector('.em-abt-story-stats');
    if (emAbtStoryStats) {
        emAbtStoryObserver.observe(emAbtStoryStats);
    }
    /*--- Story Image Parallax ---*/
    const emAbtStoryVisual = document.querySelector('.em-abt-story-visual');
    const emAbtStoryMainImage = document.querySelector('.em-abt-story-image-main');
    if (emAbtStoryVisual && emAbtStoryMainImage && window.matchMedia('(min-width: 768px)').matches) {
        emAbtStoryVisual.addEventListener('mousemove',function (emAbtStoryEvent) {
            const emAbtStoryRect = emAbtStoryVisual.getBoundingClientRect();
            const emAbtStoryX = emAbtStoryEvent.clientX - emAbtStoryRect.left;
            const emAbtStoryY = emAbtStoryEvent.clientY - emAbtStoryRect.top;
            const emAbtStoryRotateY = ((emAbtStoryX / emAbtStoryRect.width) - 0.5) * 3;
            const emAbtStoryRotateX = ((emAbtStoryY / emAbtStoryRect.height) - 0.5) * -3;
            emAbtStoryMainImage.style.transform = 'rotate(-2deg) perspective(900px) rotateX(' + emAbtStoryRotateX + 'deg) rotateY(' + emAbtStoryRotateY + 'deg)';
        });
        emAbtStoryVisual.addEventListener('mouseleave',function () {
            emAbtStoryMainImage.style.transform = '';
        });
    }
});
/*--- About Introduction / Our Story Section End ---*/

/*--- Mission + Vision Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAbtPurposeCards = document.querySelectorAll('.em-abt-purpose-card');
    if (!emAbtPurposeCards.length) {
        return;
    }
    /*--- Card Mouse Interaction ---*/
    emAbtPurposeCards.forEach(function (emAbtPurposeCard) {
        emAbtPurposeCard.addEventListener('mousemove',function (emAbtPurposeEvent) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                return;
            }
            const emAbtPurposeRect = emAbtPurposeCard.getBoundingClientRect();
            const emAbtPurposeX = emAbtPurposeEvent.clientX - emAbtPurposeRect.left;
            const emAbtPurposeY = emAbtPurposeEvent.clientY - emAbtPurposeRect.top;
            const emAbtPurposeRotateY = ((emAbtPurposeX / emAbtPurposeRect.width) - 0.5) * 2;
            const emAbtPurposeRotateX = ((emAbtPurposeY / emAbtPurposeRect.height) - 0.5) * -2;
            emAbtPurposeCard.style.transform = 'translateY(-8px) perspective(1000px) rotateX(' + emAbtPurposeRotateX + 'deg) rotateY(' + emAbtPurposeRotateY + 'deg)';
        });
        emAbtPurposeCard.addEventListener('mouseleave',function () {
            emAbtPurposeCard.style.transform = '';
        });
    });
});
/*--- Mission + Vision Section End ---*/

/*--- What We Believe Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAbtBeliefItems = document.querySelectorAll('.em-abt-beliefs-item');
    const emAbtBeliefTitle = document.getElementById('emAbtBeliefTitle');
    const emAbtBeliefText = document.getElementById('emAbtBeliefText');
    const emAbtBeliefNumber = document.querySelector('.em-abt-beliefs-display-number');
    const emAbtBeliefIcon = document.querySelector('.em-abt-beliefs-display-icon i');
    const emAbtBeliefWord = document.getElementById('emAbtBeliefWord');
    const emAbtBeliefProgress = document.getElementById('emAbtBeliefProgress');
    const emAbtBeliefCounter = document.getElementById('emAbtBeliefCounter');
    if (!emAbtBeliefItems.length || !emAbtBeliefTitle) {
        return;
    }
    /*--- Belief Data ---*/
    const emAbtBeliefsData = [
        {
            label: 'Our First Principle',
            title: 'People Come <span>First.</span>',
            text: 'Every event is ultimately about people. We listen carefully, understand what matters, and design experiences around the people who will live them.',
            icon: 'bi-people',
            word: 'PEOPLE'
        },
        {
            label: 'Our Creative Principle',
            title: 'Ideas Deserve To <span>Be Seen.</span>',
            text: 'We believe every idea has potential. We explore new perspectives, challenge the expected, and turn creative thinking into experiences people can feel.',
            icon: 'bi-lightbulb',
            word: 'IDEAS'
        },
        {
            label: 'Our Detail Principle',
            title: 'Small Details Create <span>Big Moments.</span>',
            text: 'The smallest details can shape the entire experience. From timing and styling to atmosphere and flow, we pay attention to what others might overlook.',
            icon: 'bi-stars',
            word: 'DETAILS'
        },
        {
            label: 'Our Experience Principle',
            title: 'Create Moments, Not Just <span>Events.</span>',
            text: 'An event ends. An experience stays. We focus on creating genuine moments of connection, excitement, emotion, and discovery that remain long after the event.',
            icon: 'bi-heart',
            word: 'EXPERIENCE'
        },
        {
            label: 'Our Growth Principle',
            title: 'There Is Always Room To <span>Evolve.</span>',
            text: 'The event world never stands still. We continuously learn, experiment, adapt, and find better ways to create meaningful experiences for every audience.',
            icon: 'bi-arrow-repeat',
            word: 'EVOLVE'
        }
    ];
    /*--- Belief Content Update ---*/
    function emAbtBeliefUpdate(emAbtBeliefIndex) {
        const emAbtBeliefData = emAbtBeliefsData[emAbtBeliefIndex];
        emAbtBeliefTitle.innerHTML = emAbtBeliefData.title;
        emAbtBeliefText.textContent = emAbtBeliefData.text;
        emAbtBeliefNumber.textContent = String(emAbtBeliefIndex + 1).padStart(2,'0') + ' / 05';
        emAbtBeliefIcon.className = 'bi ' + emAbtBeliefData.icon;
        emAbtBeliefWord.textContent = emAbtBeliefData.word;
        emAbtBeliefCounter.textContent = String(emAbtBeliefIndex + 1).padStart(2,'0');
        emAbtBeliefProgress.style.width = ((emAbtBeliefIndex + 1) / emAbtBeliefsData.length * 100) + '%';
        emAbtBeliefItems.forEach(function (emAbtBeliefItem,emAbtBeliefItemIndex) {
            emAbtBeliefItem.classList.toggle('active',emAbtBeliefItemIndex === emAbtBeliefIndex);
        });
    }
    /*--- Belief Navigation ---*/
    emAbtBeliefItems.forEach(function (emAbtBeliefItem) {
        emAbtBeliefItem.addEventListener('click',function () {
            const emAbtBeliefIndex = Number(emAbtBeliefItem.getAttribute('data-belief'));
            emAbtBeliefUpdate(emAbtBeliefIndex);
        });
    });
    /*--- Initial Belief ---*/
    emAbtBeliefUpdate(0);
});
/*--- What We Believe Section End ---*/

/*--- Our Expertise Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAbtExpertiseItems = document.querySelectorAll('.em-abt-expertise-nav-item');
    const emAbtExpertiseImage = document.getElementById('emAbtExpertiseImage');
    const emAbtExpertiseImageNumber = document.getElementById('emAbtExpertiseImageNumber');
    const emAbtExpertiseLabel = document.getElementById('emAbtExpertiseLabel');
    const emAbtExpertiseIcon = document.getElementById('emAbtExpertiseIcon');
    const emAbtExpertiseTitle = document.getElementById('emAbtExpertiseTitle');
    const emAbtExpertiseText = document.getElementById('emAbtExpertiseText');
    const emAbtExpertiseTags = document.getElementById('emAbtExpertiseTags');
    if (!emAbtExpertiseItems.length || !emAbtExpertiseImage) {
        return;
    }
    /*--- Expertise Data ---*/
    const emAbtExpertiseData = [
        {
            image: 'assets/images/create-featured.webp',
            label: '01 / Event Strategy',
            icon: 'bi-compass',
            title: 'Every Great Event Starts With A <span>Clear Plan.</span>',
            text: 'We transform ideas into structured event strategies, carefully planning every stage from concept and timelines to logistics, budgets, and execution.',
            tags: ['Planning','Strategy','Coordination']
        },
        {
            image: 'assets/images/sub-hero-blog.webp',
            label: '02 / Creative Direction',
            icon: 'bi-palette',
            title: 'Ideas Become Experiences Through <span>Creative Direction.</span>',
            text: 'We develop distinctive concepts, visual identities, themes, styling, and environments that give every event its own personality.',
            tags: ['Concepts','Styling','Design']
        },
        {
            image: 'assets/images/create-production.webp',
            label: '03 / Event Production',
            icon: 'bi-camera-reels',
            title: 'Technology Turns Vision Into <span>Reality.</span>',
            text: 'From lighting and sound to staging, screens, and technical production, we bring every element together for a seamless event experience.',
            tags: ['Production','Technology','AV']
        },
        {
            image: 'assets/images/sub-hero-contact.webp',
            label: '04 / Experiences',
            icon: 'bi-stars',
            title: 'Give People Something <span>To Remember.</span>',
            text: 'We curate entertainment and interactive experiences designed to create energy, emotion, connection, and memorable moments.',
            tags: ['Entertainment','Performances','Engagement']
        },
        {
            image: 'assets/images/create-hospitality.webp',
            label: '05 / Guest Experience',
            icon: 'bi-people',
            title: 'Every Guest Should Feel <span>Considered.</span>',
            text: 'From invitations and registration to hospitality and on-site support, we design thoughtful guest journeys from arrival to departure.',
            tags: ['Hospitality','Registration','Guest Care']
        },
        {
            image: 'assets/images/about-story-detail.webp',
            label: '06 / Execution',
            icon: 'bi-check2-circle',
            title: 'Great Planning Comes Down To <span>Execution.</span>',
            text: 'Our on-ground teams coordinate every moving part with precision, ensuring the plan becomes a smooth and effortless reality.',
            tags: ['Operations','Logistics','Execution']
        }
    ];
    /*--- Expertise Content Update ---*/
    function emAbtExpertiseUpdate(emAbtExpertiseIndex) {
        const emAbtExpertiseDataItem = emAbtExpertiseData[emAbtExpertiseIndex];
        emAbtExpertiseImage.style.opacity = '0';
        setTimeout(function () {
            emAbtExpertiseImage.src = emAbtExpertiseDataItem.image;
            emAbtExpertiseImage.alt = emAbtExpertiseDataItem.label;
            emAbtExpertiseImage.style.opacity = '1';
        },180);
        emAbtExpertiseImageNumber.textContent = String(emAbtExpertiseIndex + 1).padStart(2,'0');
        emAbtExpertiseLabel.textContent = emAbtExpertiseDataItem.label;
        emAbtExpertiseIcon.className = 'bi ' + emAbtExpertiseDataItem.icon;
        emAbtExpertiseTitle.innerHTML = emAbtExpertiseDataItem.title;
        emAbtExpertiseText.textContent = emAbtExpertiseDataItem.text;
        emAbtExpertiseTags.innerHTML = '';
        emAbtExpertiseDataItem.tags.forEach(function (emAbtExpertiseTag) {
            const emAbtExpertiseTagElement = document.createElement('span');
            emAbtExpertiseTagElement.textContent = emAbtExpertiseTag;
            emAbtExpertiseTags.appendChild(emAbtExpertiseTagElement);
        });
        emAbtExpertiseItems.forEach(function (emAbtExpertiseItem,emAbtExpertiseItemIndex) {
            emAbtExpertiseItem.classList.toggle('active',emAbtExpertiseItemIndex === emAbtExpertiseIndex);
        });
    }
    /*--- Expertise Navigation ---*/
    emAbtExpertiseItems.forEach(function (emAbtExpertiseItem) {
        emAbtExpertiseItem.addEventListener('click',function () {
            const emAbtExpertiseIndex = Number(emAbtExpertiseItem.getAttribute('data-expertise'));
            emAbtExpertiseUpdate(emAbtExpertiseIndex);
        });
    });
    /*--- Initial Expertise ---*/
    emAbtExpertiseUpdate(0);
});
/*--- Our Expertise Section End ---*/

/*--- Our Team Section Start ---*/
document.addEventListener('DOMContentLoaded',function () {
    const emAbtTeamCards = document.querySelectorAll('.em-abt-team-card');
    if (!emAbtTeamCards.length) {
        return;
    }
    /*--- Team Card Interaction ---*/
    emAbtTeamCards.forEach(function (emAbtTeamCard) {
        const emAbtTeamImage = emAbtTeamCard.querySelector('.em-abt-team-card-image');
        if (!emAbtTeamImage) {
            return;
        }
        emAbtTeamCard.addEventListener('mousemove',function (emAbtTeamEvent) {
            if (window.matchMedia('(max-width: 767px)').matches) {
                return;
            }
            const emAbtTeamRect = emAbtTeamCard.getBoundingClientRect();
            const emAbtTeamX = emAbtTeamEvent.clientX - emAbtTeamRect.left;
            const emAbtTeamY = emAbtTeamEvent.clientY - emAbtTeamRect.top;
            const emAbtTeamRotateY = ((emAbtTeamX / emAbtTeamRect.width) - 0.5) * 2;
            const emAbtTeamRotateX = ((emAbtTeamY / emAbtTeamRect.height) - 0.5) * -2;
            emAbtTeamImage.style.transform = 'perspective(900px) rotateX(' + emAbtTeamRotateX + 'deg) rotateY(' + emAbtTeamRotateY + 'deg) scale(1.025)';
        });
        emAbtTeamCard.addEventListener('mouseleave',function () {
            emAbtTeamImage.style.transform = '';
        });
    });
});
/*--- Our Team Section End ---*/
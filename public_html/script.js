//HEADER SCROLL EFFECT

window.addEventListener('scroll', function() {
    var header = document.getElementById('body-header');
    var sidebar = document.getElementById('sidebar'); // Adicionado
    if (window.scrollY > 50 || sidebar.classList.contains('open')) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('body-header');
    header.classList.add('transparent');
});

//END HEADER SCROLL EFFECT

//SIDEBAR

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementById('body-header');

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("rotate");
        sidebar.classList.toggle("open");

        if (sidebar.classList.contains('open')) {
            header.classList.remove('transparent');
            header.classList.add('solid');
        } else if (window.scrollY <= 50) {
            header.classList.remove('solid');
            header.classList.add('transparent');
        }
    });
});


//END SIDEBAR

//CAROUSEL CARDS

let currentIndex = 0;
let startX = 0;
let isDragging = false;

function moveCarousel(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 3;
    } else if (currentIndex >= totalCards - 2) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}

function handleMouseOrTouchStart(event) {
    startX = event.type.includes('mouse') ? event.pageX : event.touches[0].pageX;
    isDragging = true;
}

function handleMouseOrTouchMove(event) {
    if (!isDragging) return;

    const x = event.type.includes('mouse') ? event.pageX : event.touches[0].pageX;
    const walk = (x - startX);

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(${walk}px)`;
}

function handleMouseOrTouchEnd(event) {
    isDragging = false;

    const x = event.type.includes('mouse') ? event.pageX : event.changedTouches[0].pageX;
    const walk = (x - startX);
    
    if (walk > 50) {
        moveCarousel(-1);
    } else if (walk < -50) {
        moveCarousel(1);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const contents = document.querySelectorAll(".content");
    const carouselInner = document.querySelector('.carousel-inner');
    let activeContent = null;

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const contentId = this.getAttribute("data-content");
            const contentElement = document.getElementById(contentId);

            if (activeContent && activeContent === contentElement) {
                contentElement.classList.remove("active");
                activeContent = null;
            } else {
                contents.forEach(content => content.classList.remove("active"));
                contentElement.classList.add("active");
                activeContent = contentElement;
            }
        });
    });

    carouselInner.addEventListener('mousedown', handleMouseOrTouchStart);
    carouselInner.addEventListener('mousemove', handleMouseOrTouchMove);
    carouselInner.addEventListener('mouseup', handleMouseOrTouchEnd);
    carouselInner.addEventListener('mouseleave', handleMouseOrTouchEnd);

    carouselInner.addEventListener('touchstart', handleMouseOrTouchStart);
    carouselInner.addEventListener('touchmove', handleMouseOrTouchMove);
    carouselInner.addEventListener('touchend', handleMouseOrTouchEnd);
});


//END CAROUSEL CARDS

//CONTENT CARD OPEN ANIMATION

document.addEventListener("DOMContentLoaded", function() {
    const openingAnimation = document.getElementById('opening-animation');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        openingAnimation.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // 3 sec
});

//END CONTENT CARD OPEN ANIMATION

//CAROUSEL RESTAURANT

let correntIndexRest = 0

function moveRestCarousel(directionrest) {
    const carouselInnerRest = document.querySelector('.carousel-inner-rest');
    const cardRest = document.querySelectorAll('.cardrest');
    const totalCardsRest = cardRest.length;
    const cardRestWidth = cardRest[0].offsetWidth;

    correntIndexRest += directionrest;

    if (correntIndexRest < 0) {
        correntIndexRest = totalCardsRest - 4;
    } else if (correntIndexRest >= totalCardsRest - 3) {
        correntIndexRest = 0;
    }

    const offset = -correntIndexRest * cardRestWidth;
    carouselInnerRest.style.transform = `translateX(${offset}px)`;
}

//END CAROUSEL RESTAURANT

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

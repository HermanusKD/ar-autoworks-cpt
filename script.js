document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
});


function toggleExtraContent() {
    const extraContent = document.querySelector('.extra-content');
    const readMoreLink = document.querySelector('.read-more-link');
    const retractLink = document.querySelector('.retract-link');

    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        readMoreLink.style.display = 'none';
    } else {
        extraContent.style.display = 'none';
        readMoreLink.style.display = 'inline';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    function checkFooterVisibility() {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (footerRect.top <= windowHeight) {
            document.body.classList.add('footer-visible');
        } else {
            document.body.classList.remove('footer-visible');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Initial check
});
const reviewsContainer = document.querySelector('.reviews-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const reviewItems = document.querySelectorAll('.review-item');

let currentIndex = 0;

function showReview(index) {
    reviewsContainer.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = reviewItems.length - 1;
    }
    showReview(currentIndex);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < reviewItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showReview(currentIndex);
});

// Automatic scroll every 2.5 seconds
setInterval(() => {
    if (currentIndex < reviewItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showReview(currentIndex);
}, 2500);

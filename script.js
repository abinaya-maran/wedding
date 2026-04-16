// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Generate animated stars
    generateStars();

    // Generate falling flowers
    generateFlowers();

    // Scroll animation handler
    handleScrollAnimations();
});

// Generate animated stars
function generateStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Generate falling flowers
function generateFlowers() {
    const flowersContainer = document.querySelector('.flowers');
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐'];
    const flowerCount = 20;

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = '-60px';
        flower.style.animationDuration = (10 + Math.random() * 15) + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';
        flowersContainer.appendChild(flower);
    }
}

// Scroll animation handler
function handleScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all map cards
    document.querySelectorAll('.map-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observe map links
    document.querySelectorAll('.map-link').forEach(link => {
        link.addEventListener('click', function(e) {
            this.classList.add('animate__animated', 'animate__pulse');
        });
    });
}



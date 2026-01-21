// ===== GlowUp Beauty - Interactive Features =====

document.addEventListener('DOMContentLoaded', () => {
    // Flash Sale Timer
    const hoursEl = document.querySelector('.timer-block:nth-child(1) .time');
    const minsEl = document.querySelector('.timer-block:nth-child(2) .time');
    const secsEl = document.querySelector('.timer-block:nth-child(3) .time');
    
    let hours = 12, mins = 45, secs = 30;
    
    setInterval(() => {
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; mins = 59; secs = 59; }
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }, 1000);

    // Wishlist Toggle
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
            btn.style.color = btn.classList.contains('active') ? '#e91e63' : '';
        });
    });

    // Add to Cart Animation
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = btn.textContent;
            btn.textContent = '✓ Added!';
            btn.style.background = '#4caf50';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 1500);
        });
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const btn = newsletterForm.querySelector('button');
            btn.textContent = 'Subscribed! ✓';
            btn.style.background = '#4caf50';
            input.value = '';
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.style.background = '';
            }, 2000);
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Search Bar Focus Effect
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.style.boxShadow = '0 0 15px rgba(233, 30, 99, 0.3)';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.style.boxShadow = '';
        });
    }

    // Product Cards Hover Effect Enhancement
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.btn-add-cart').style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('.btn-add-cart').style.transform = '';
        });
    });

    console.log('✨ GlowUp Beauty loaded successfully!');
});

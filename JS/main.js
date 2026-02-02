/* ============================================
   XME - Xaley Magui Ëlëk
   JavaScript Principal - Éléments Communs
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('XME Site - Chargement réussi');
    
    initNavigation();
    initScrollEffects();
    initAnimations();
});

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentLocation.includes(href) && href !== '#') {
            item.parentElement.classList.add('active');
        }
    });
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        window.addEventListener('scroll', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* ============================================
   EFFETS DE SCROLL
   ============================================ */

function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
}

/* ============================================
   ANIMATIONS À L'APPARITION
   ============================================ */

function initAnimations() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        const elementsToAnimate = document.querySelectorAll(
            '.axis-card, .theme-card, .contact-card, .faq-item, .engagement-section'
        );
        
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

/* ============================================
   UTILITAIRES
   ============================================ */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   GESTION D'ERREURS
   ============================================ */

window.addEventListener('error', function(event) {
    console.error('Erreur détectée:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rejet non géré:', event.reason);
});

/* ============================================
   GESTION DE LA PERFORMANCE
   ============================================ */

window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Temps de chargement page: ' + pageLoadTime + 'ms');
    }
});

console.log('✓ XME Site - Scripts communs chargés');


/* ============================================
   XME - Xaley Magui Ëlëk
   JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('XME Site - Chargement réussi');
    
    // Initialiser les fonctionnalités
    initNavigation();
    initFormValidation();
    initScrollEffects();
    initAnimations();
});

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
    // Navigation active highlight
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
        
        // Fermer le menu quand on clique sur un lien
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Fermer le menu au scroll
        window.addEventListener('scroll', function() {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* ============================================
   VALIDATION DE FORMULAIRE
   ============================================ */

function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les champs
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const consent = document.getElementById('consent');
            
            // Valider les champs obligatoires
            let isValid = true;
            
            if (!name.value.trim()) {
                showFieldError(name, 'Veuillez entrer votre nom');
                isValid = false;
            } else {
                clearFieldError(name);
            }
            
            if (!isValidEmail(email.value)) {
                showFieldError(email, 'Veuillez entrer un email valide');
                isValid = false;
            } else {
                clearFieldError(email);
            }
            
            if (!message.value.trim()) {
                showFieldError(message, 'Veuillez entrer un message');
                isValid = false;
            } else {
                clearFieldError(message);
            }
            
            if (!consent.checked) {
                showFieldError(consent, 'Vous devez accepter la politique de confidentialité');
                isValid = false;
            } else {
                clearFieldError(consent);
            }
            
            // Si valide, envoyer le formulaire
            if (isValid) {
                submitForm(this);
            }
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFieldError(field, message) {
    // Ajouter une classe d'erreur
    field.classList.add('error');
    field.style.borderColor = '#d97764';
    
    // Créer un message d'erreur s'il n'existe pas
    let errorMsg = field.parentElement.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#d97764';
        errorMsg.style.fontSize = '0.85rem';
        errorMsg.style.marginTop = '0.25rem';
        errorMsg.style.display = 'block';
        field.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
}

function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    const errorMsg = field.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function submitForm(form) {
    // Désactiver le bouton et afficher un loader
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Envoi en cours...';
    
    // Simuler l'envoi (dans une vraie app, vous le connecteriez à un backend)
    setTimeout(() => {
        // Créer et afficher le message de succès
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">✓</span>
                <div>
                    <strong>Message envoyé avec succès !</strong>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Merci pour votre intérêt. Nous vous répondrons sous peu.</p>
                </div>
            </div>
        `;
        
        // Insérer le message avant le formulaire
        form.parentElement.insertBefore(successMsg, form);
        
        // Scroll vers le message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Réinitialiser le formulaire et le bouton après 4 secondes
        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            successMsg.remove();
        }, 4000);
    }, 1000);
}

/* ============================================
   EFFETS DE SCROLL
   ============================================ */

function initScrollEffects() {
    // Ajouter une classe au header quand on scrolle
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
    // Observer pour animations au scroll (si Intersection Observer est supporté)
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
        
        // Observer les sections et les cartes
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

// Fonction pour copier du texte dans le presse-papiers
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copié dans le presse-papiers');
        });
    }
}

// Fonction pour débouncer (limiter les appels répétés)
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

// Fonction pour throttle (limiter les appels sur une période)
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
   GESTION D'ÉVÉNEMENTS PERSONNALISÉS
   ============================================ */

// Événement personnalisé pour le chargement de page
window.addEventListener('pageshow', function() {
    console.log('Page affichée - XME');
});

// Gérer les liens d'ancre internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/* ============================================
   ACCESSIBILITÉ
   ============================================ */

// Améliorer l'accessibilité du clavier
document.addEventListener('keydown', function(e) {
    // Échap pour fermer les menus (si applicable)
    if (e.key === 'Escape') {
        // Vous pouvez ajouter la logique ici
    }
});

/* ============================================
   DETECTION D'ERREURS
   ============================================ */

// Gestion des erreurs globales
window.addEventListener('error', function(event) {
    console.error('Erreur détectée:', event.error);
});

// Promise rejection non gérée
window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rejet non géré:', event.reason);
});

/* ============================================
   GESTION DE LA PERFORMANCE
   ============================================ */

// Log de performance
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Temps de chargement page: ' + pageLoadTime + 'ms');
    }
});

/* ============================================
   FONCTIONNALITÉS POUR LES PAGES SPÉCIFIQUES
   ============================================ */

// Fonction pour activer les onglets (si vous ajoutez des onglets)
function initTabs() {
    const tabs = document.querySelectorAll('[data-tab]');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');
                const targetContent = document.querySelector(`#${targetId}`);
                
                if (targetContent) {
                    // Masquer tous les contenus
                    document.querySelectorAll('[data-content]').forEach(content => {
                        content.style.display = 'none';
                    });
                    
                    // Afficher le contenu ciblé
                    targetContent.style.display = 'block';
                    
                    // Mettre à jour l'onglet actif
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    }
}

// Initialiser les onglets si présents
initTabs();

console.log('✓ XME Site - Tous les scripts sont chargés et prêts');

/* ============================================
   JS SPÉCIFIQUE - PAGE CONTACT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded');
    initContactForm();
});

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const consent = document.getElementById('consent');
            
            let isValid = true;
            
            // Validation des champs
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
    field.classList.add('error');
    field.style.borderColor = '#d97764';
    
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
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ Envoi en cours...';
    
    setTimeout(() => {
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
        
        form.parentElement.insertBefore(successMsg, form);
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            successMsg.remove();
        }, 4000);
    }, 1000);
}

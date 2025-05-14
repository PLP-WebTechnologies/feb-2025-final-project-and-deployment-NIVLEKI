document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    const formMessage = document.querySelector('.form-message');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            // Simple validation
            if (emailInput.value && emailInput.value.includes('@')) {
                formMessage.textContent = 'Thanks for subscribing!';
                formMessage.style.color = 'green';
                emailInput.value = '';
                
                // Reset message after 3 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            } else {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navList.classList.remove('show');
            }
        });
    });
    
    // Add animation to post cards when they come into view
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.post-card').forEach(card => {
        observer.observe(card);
    });
});
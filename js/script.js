document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Course details toggle
    document.querySelectorAll('.course-details-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const detailsElement = document.getElementById(targetId);
            
            if (detailsElement) {
                detailsElement.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close course details
    document.querySelectorAll('.course-details-close').forEach(button => {
        button.addEventListener('click', function() {
            const detailsElement = this.closest('.course-details');
            if (detailsElement) {
                detailsElement.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close course details when clicking outside
    document.querySelectorAll('.course-details').forEach(details => {
        details.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Form submission handling
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show a success message
            document.getElementById('form-success').classList.remove('hidden');
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('form-success').classList.add('hidden');
            }, 5000);
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show a success message
            document.getElementById('contact-success').classList.remove('hidden');
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('contact-success').classList.add('hidden');
            }, 5000);
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('bg-white/80');
            navbar.classList.add('bg-white');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white');
        }
    });
    
    // Intersection Observer for scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Call the function after a short delay to ensure all elements are loaded
    setTimeout(animateOnScroll, 500);
    
    // Add animate-on-scroll class to sections
    document.querySelectorAll('section').forEach((section, index) => {
        // Skip the first section (hero) which should animate immediately
        if (index > 0) {
            section.classList.add('animate-on-scroll');
            section.style.opacity = '0';
        }
    });
});

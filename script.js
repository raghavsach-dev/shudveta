// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    
    // Open sidebar when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            sidebar.style.width = '250px';
        });
    }
    
    // Close sidebar when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.style.width = '0';
        });
    }
    
    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (sidebar && 
            sidebar.style.width === '250px' && 
            !sidebar.contains(event.target) && 
            !hamburger.contains(event.target)) {
            sidebar.style.width = '0';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close sidebar if it's open
                if (sidebar && sidebar.style.width === '250px') {
                    sidebar.style.width = '0';
                }
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Add current year to copyright text
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
}); 
// main.js - Interacciones para BPM Bajo Perfil Mexa

document.addEventListener('DOMContentLoaded', () => {

    // 0. Entrance Audio Overlay
    document.body.classList.add('no-scroll');
    const enterBtn = document.getElementById('enter-btn');
    const entranceOverlay = document.getElementById('entrance-overlay');
    const bgAudio = document.getElementById('bg-audio');
    
    if (enterBtn && entranceOverlay && bgAudio) {
        enterBtn.addEventListener('click', () => {
            bgAudio.volume = 0.6; // Starts at 60% volume
            bgAudio.play().catch(e => console.log('Audio play failed:', e));
            entranceOverlay.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        });
    }


    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between bars and times
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 3. Parallax Effect Subtlety
    const parallaxSections = document.querySelectorAll('.section-parallax');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        parallaxSections.forEach(section => {
            // Un sutil movimiento parallax en backround
            section.style.backgroundPositionY = `${scrollY * 0.4}px`;
        });
    });

    // 4. Glitch Effect Hover (Optional js enhancements)
    const glitchLinks = document.querySelectorAll('.glitch-link');
    glitchLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('text-glitch');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('text-glitch');
        });
    });

    // 5. Dynamic Navbar Background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});

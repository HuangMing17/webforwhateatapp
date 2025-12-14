// ============================================
// 🎨 Hôm Nay Ăn Gì? - Enhanced JavaScript
// ============================================

(function() {
    'use strict';

    // ============================================
    // Theme Management
    // ============================================
    const Theme = {
        init() {
            this.themeToggle = document.querySelector('.theme-toggle');
            this.html = document.documentElement;
            
            // Load saved theme or detect system preference
            const savedTheme = localStorage.getItem('theme');
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const initialTheme = savedTheme || systemTheme;
            
            this.setTheme(initialTheme, false);
            this.bindEvents();
        },

        bindEvents() {
            if (this.themeToggle) {
                this.themeToggle.addEventListener('click', () => this.toggleTheme());
            }

            // Listen for system theme changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light', true);
                }
            });
        },

        toggleTheme() {
            const currentTheme = this.html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme, true);
        },

        setTheme(theme, save = true) {
            this.html.setAttribute('data-theme', theme);
            
            if (this.themeToggle) {
                this.themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
            }
            
            if (save) {
                localStorage.setItem('theme', theme);
            }
        }
    };

    // ============================================
    // Navigation Management
    // ============================================
    const Navigation = {
        init() {
            this.navbar = document.querySelector('.navbar');
            this.mobileToggle = document.querySelector('.mobile-menu-toggle');
            this.mobileMenu = document.querySelector('.nav-menu');
            this.navLinks = document.querySelectorAll('.nav-link');
            this.overlay = this.createOverlay();
            
            this.bindEvents();
            this.handleScroll();
        },

        createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);
            return overlay;
        },

        bindEvents() {
            // Mobile menu toggle
            if (this.mobileToggle) {
                this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
            }

            // Close menu when clicking overlay
            this.overlay.addEventListener('click', () => this.closeMobileMenu());

            // Close menu when clicking nav links
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                    this.setActiveLink(link);
                });
            });

            // Handle scroll
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = this.navbar ? this.navbar.offsetHeight : 0;
                        const targetPosition = target.offsetTop - offset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

        toggleMobileMenu() {
            const isActive = this.mobileMenu.classList.contains('active');
            
            if (isActive) {
                this.closeMobileMenu();
            } else {
                this.openMobileMenu();
            }
        },

        openMobileMenu() {
            this.mobileMenu.classList.add('active');
            this.mobileToggle.classList.add('active');
            this.overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        closeMobileMenu() {
            this.mobileMenu.classList.remove('active');
            this.mobileToggle.classList.remove('active');
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        },

        handleScroll() {
            if (!this.navbar) return;
            
            const scrolled = window.scrollY > 50;
            this.navbar.setAttribute('data-scrolled', scrolled);
            
            // Update active section
            this.updateActiveSection();
        },

        updateActiveSection() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        },

        setActiveLink(clickedLink) {
            this.navLinks.forEach(link => link.classList.remove('active'));
            clickedLink.classList.add('active');
        }
    };

    // ============================================
    // Back to Top Button
    // ============================================
    const BackToTop = {
        init() {
            this.button = document.querySelector('.back-to-top');
            if (!this.button) {
                this.createButton();
            }
            this.bindEvents();
        },

        createButton() {
            this.button = document.createElement('button');
            this.button.className = 'back-to-top';
            this.button.setAttribute('aria-label', 'Back to top');
            this.button.innerHTML = '<span class="arrow">↑</span>';
            document.body.appendChild(this.button);
        },

        bindEvents() {
            // Show/hide on scroll
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Scroll to top on click
            this.button.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        },

        handleScroll() {
            const scrolled = window.scrollY > 300;
            this.button.classList.toggle('visible', scrolled);
        }
    };

    // ============================================
    // Feature Card 3D Tilt Effect
    // ============================================
    const CardTilt = {
        init() {
            this.cards = document.querySelectorAll('.feature-card');
            if (this.cards.length === 0) return;
            
            // Only apply tilt on desktop
            if (window.innerWidth >= 1024) {
                this.bindEvents();
            }
        },

        bindEvents() {
            this.cards.forEach(card => {
                card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
                card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
            });
        },

        handleMouseMove(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        },

        handleMouseLeave(card) {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    };

    // ============================================
    // Stats Counter Animation
    // ============================================
    const StatsCounter = {
        init() {
            this.stats = document.querySelectorAll('.stat-number');
            if (this.stats.length === 0) return;
            
            this.observeStats();
        },

        observeStats() {
            const options = {
                threshold: 0.5,
                rootMargin: '0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            this.stats.forEach(stat => observer.observe(stat));
        },

        animateCounter(element) {
            const text = element.textContent;
            const number = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            const duration = 2000;
            const steps = 60;
            const increment = number / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                current += increment;
                step++;
                
                if (step >= steps) {
                    current = number;
                    clearInterval(timer);
                }
                
                element.textContent = Math.floor(current) + suffix;
            }, duration / steps);
        }
    };

    // ============================================
    // Swiper Carousel Initialization
    // ============================================
    const Carousel = {
        init() {
            // Check if Swiper is loaded
            if (typeof Swiper === 'undefined') {
                console.warn('Swiper library not loaded');
                return;
            }

            const screenshotsSlider = document.querySelector('.screenshots-slider');
            if (!screenshotsSlider) return;

            new Swiper('.screenshots-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        }
    };

    // ============================================
    // AOS (Animate On Scroll) Initialization
    // ============================================
    const ScrollAnimations = {
        init() {
            // Check if AOS is loaded
            if (typeof AOS === 'undefined') {
                console.warn('AOS library not loaded');
                return;
            }

            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100,
                delay: 0,
                // Disable on mobile for better performance
                disable: function() {
                    return window.innerWidth < 768;
                }
            });
        },

        refresh() {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }
    };

    // ============================================
    // Lazy Loading Images
    // ============================================
    const LazyLoad = {
        init() {
            this.images = document.querySelectorAll('img[loading="lazy"]');
            
            if ('loading' in HTMLImageElement.prototype) {
                // Browser supports native lazy loading
                return;
            }
            
            // Fallback for browsers that don't support lazy loading
            this.observeImages();
        },

        observeImages() {
            const options = {
                root: null,
                rootMargin: '50px',
                threshold: 0.01
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                        }
                        
                        observer.unobserve(img);
                    }
                });
            }, options);

            this.images.forEach(img => observer.observe(img));
        }
    };

    // ============================================
    // Performance Optimizations
    // ============================================
    const Performance = {
        init() {
            // Preload critical resources
            this.preloadCritical();
            
            // Add will-change to animated elements
            this.optimizeAnimations();
            
            // Reduce animations on low-power devices
            this.handleReducedMotion();
        },

        preloadCritical() {
            // Preload hero image if it exists
            const heroImg = document.querySelector('.hero-image img');
            if (heroImg && heroImg.src) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = heroImg.src;
                document.head.appendChild(link);
            }
        },

        optimizeAnimations() {
            const animatedElements = document.querySelectorAll('.hero-content, .feature-card, .timeline-item');
            animatedElements.forEach(el => {
                el.style.willChange = 'transform, opacity';
                
                // Remove will-change after animation
                el.addEventListener('animationend', () => {
                    el.style.willChange = 'auto';
                }, { once: true });
            });
        },

        handleReducedMotion() {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (prefersReducedMotion) {
                document.documentElement.classList.add('reduce-motion');
            }
        }
    };

    // ============================================
    // Console Message
    // ============================================
    const ConsoleMessage = {
        show() {
            const styles = [
                'font-size: 24px',
                'font-weight: bold',
                'color: #667eea',
                'text-shadow: 2px 2px 0 #764ba2'
            ].join(';');

            const styles2 = [
                'font-size: 14px',
                'color: #6b7280'
            ].join(';');

            console.log('%c🍽️ Hôm Nay Ăn Gì?', styles);
            console.log('%cWebsite đang chạy với UI nâng cấp!', styles2);
            console.log('%cMade with ❤️ by your dev team', 'font-size: 12px; color: #9ca3af;');
        }
    };

    // ============================================
    // Main Initialization
    // ============================================
    const App = {
        init() {
            // Initialize all modules
            Theme.init();
            Navigation.init();
            BackToTop.init();
            CardTilt.init();
            StatsCounter.init();
            LazyLoad.init();
            Performance.init();
            
            // Initialize external libraries (with delay to ensure they're loaded)
            window.addEventListener('load', () => {
                setTimeout(() => {
                    ScrollAnimations.init();
                    Carousel.init();
                }, 100);
            });

            // Show console message
            ConsoleMessage.show();

            // Handle window resize
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    this.handleResize();
                }, 250);
            });
        },

        handleResize() {
            // Refresh AOS on resize
            ScrollAnimations.refresh();
            
            // Reinitialize card tilt on desktop only
            if (window.innerWidth >= 1024) {
                CardTilt.init();
            }
        }
    };

    // ============================================
    // Start the application
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => App.init());
    } else {
        App.init();
    }

})();

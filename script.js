// ===== Mobile Menu =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('[data-lucide]');
        if (icon) {
            const isOpen = mobileNav.classList.contains('active');
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            lucide.createIcons();
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('[data-lucide]');
            if (icon) {
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });
}

// ===== Image Slider (Hero) =====
const imageSlider = document.getElementById('imageSlider');
if (imageSlider) {
    const images = imageSlider.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Auto-slide every 4 seconds
    setInterval(showNextImage, 4000);
}

// ===== Testimonials Data =====
const testimonials = [
    {
        id: 1,
        name: 'דוד כהן',
        location: 'רעננה',
        rating: 5,
        text: 'עידן הגיע במהירות רבה כשהיה לנו פיצוץ בצינור המים. עבד בצורה מקצועית ונקייה, תיקן את הבעיה תוך שעה. מאוד מרוצה מהשירות!',
        service: 'תיקון פיצוץ צנרת',
        date: 'ספטמבר 2024'
    },
    {
        id: 2,
        name: 'רחל לוי',
        location: 'כפר סבא',
        rating: 5,
        text: 'שירות מעולה! איתר נזילה נסתרת בקיר שאף אחד לא הצליח למצוא קודם. מקצועי, ישר וזמין. בהחלט נפנה אליו שוב.',
        service: 'איתור נזילות',
        date: 'אוקטובר 2024'
    },
    {
        id: 3,
        name: 'משה אברהם',
        location: 'הרצליה',
        rating: 5,
        text: 'התקין לנו דוד שמש חדש. העבודה הייתה מקצועית, המחיר הוגן ונתן הסבר מפורט על התחזוקה. בהחלט ממליץ!',
        service: 'התקנת דוד שמש',
        date: 'אוגוסט 2024'
    },
    {
        id: 4,
        name: 'שרה גולדברג',
        location: 'ראש העין',
        rating: 5,
        text: 'סתימה קשה בכיור המטבח - עידן פתר את הבעיה תוך חצי שעה עם ציוד מקצועי. נקי, מהיר ויעיל. תודה רבה!',
        service: 'פתיחת סתימות',
        date: 'ספטמבר 2024'
    },
    {
        id: 5,
        name: 'אבי כהן',
        location: 'תל אביב',
        rating: 5,
        text: 'קרא חירום בשבת בלילה - הגיע תוך 40 דקות ופתר בעיה חמורה של הצפה. מקצועיות ברמה הכי גבוהה!',
        service: 'קריאת חירום',
        date: 'יולי 2024'
    },
    {
        id: 6,
        name: 'מירי רוזן',
        location: 'גבעתיים',
        rating: 5,
        text: 'עבודה יסודית בשיפוץ הבית. החליף את כל הברזים והכיורים. זמין לייעוץ גם לאחר העבודה. שירות ברמה גבוהה!',
        service: 'עבודות שיפוץ',
        date: 'יוני 2024'
    }
];

// ===== Testimonials Carousel =====
let currentTestimonialIndex = 0;

function updateMainTestimonial(index) {
    const testimonial = testimonials[index];

    // Update text content
    document.getElementById('mainText').textContent = `"${testimonial.text}"`;
    document.getElementById('mainName').textContent = testimonial.name;
    document.getElementById('mainInfo').textContent = `${testimonial.location} • ${testimonial.date}`;
    document.getElementById('mainService').textContent = testimonial.service;

    // Update rating stars
    const ratingDiv = document.getElementById('mainRating');
    ratingDiv.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.setAttribute('data-lucide', 'star');
        starIcon.className = i < testimonial.rating ? 'star filled' : 'star';
        ratingDiv.appendChild(starIcon);
    }

    // Update active dot
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Update mini cards
    const miniCards = document.querySelectorAll('.testimonial-card');
    miniCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });

    // Recreate icons
    lucide.createIcons();
}

function createDots() {
    const dotsContainer = document.getElementById('dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'dot';
            if (index === currentTestimonialIndex) {
                dot.classList.add('active');
            }
            dot.setAttribute('aria-label', `עבור להמלצה ${index + 1}`);
            dot.addEventListener('click', () => {
                currentTestimonialIndex = index;
                updateMainTestimonial(index);
            });
            dotsContainer.appendChild(dot);
        });
    }
}

function createMiniTestimonials() {
    const gridContainer = document.getElementById('testimonialsGrid');
    if (gridContainer) {
        gridContainer.innerHTML = '';
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            if (index === currentTestimonialIndex) {
                card.classList.add('active');
            }

            card.innerHTML = `
                <div class="rating">
                    ${Array(testimonial.rating).fill('<i data-lucide="star" class="star filled"></i>').join('')}
                </div>
                <p class="testimonial-card-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-card-author">${testimonial.name}</div>
                    <div class="testimonial-card-location">${testimonial.location}</div>
                </div>
            `;

            card.addEventListener('click', () => {
                currentTestimonialIndex = index;
                updateMainTestimonial(index);
            });

            gridContainer.appendChild(card);
        });
        lucide.createIcons();
    }
}

// Initialize testimonials
createDots();
createMiniTestimonials();

// Navigation buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateMainTestimonial(currentTestimonialIndex);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateMainTestimonial(currentTestimonialIndex);
    });
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

// Validation functions
function validatePhone(phone) {
    // Israeli phone format: 050-XXX-XXXX or 05XXXXXXXX
    const phoneRegex = /^0(5[0-9]|[2-4]|[8-9])[0-9]{7,8}$/;
    const cleanPhone = phone.replace(/[-\s]/g, '');
    return phoneRegex.test(cleanPhone);
}

function validateEmail(email) {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sanitizeInput(input) {
    return input.trim().replace(/[<>]/g, '');
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}Error`);

    if (field) {
        field.classList.add('error');
    }
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add('active');
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}Error`);

    if (field) {
        field.classList.remove('error');
    }
    if (errorSpan) {
        errorSpan.classList.remove('active');
    }
}

function clearAllErrors() {
    ['fullName', 'phone', 'email', 'topic'].forEach(clearError);
}

function showFormStatus(message, isSuccess) {
    const statusDiv = document.getElementById('formStatus');
    if (statusDiv) {
        statusDiv.textContent = message;
        statusDiv.className = 'form-status';
        statusDiv.classList.add(isSuccess ? 'success' : 'error');

        // Hide after 5 seconds
        setTimeout(() => {
            statusDiv.className = 'form-status';
        }, 5000);
    }
}

function formatContactFormMessage(formData) {
    const topicMap = {
        'Clog': 'סתימה',
        'Leak': 'נזילה',
        'Installation': 'התקנה',
        'Repair': 'תיקון',
        'Emergency': 'חירום',
        'Consultation': 'ייעוץ',
        'Other': 'אחר'
    };

    const timeMap = {
        'Now': 'עכשיו',
        'Morning': 'בוקר (07:00-12:00)',
        'Noon': 'צהריים (12:00-15:00)',
        'Afternoon': 'אחר הצהריים (15:00-18:00)',
        'Evening': 'ערב (18:00-20:00)',
        'Flexible': 'גמיש'
    };

    let message = `📋 *פנייה חדשה מהאתר*\n\n`;
    message += `👤 *שם:* ${formData.fullName}\n`;
    message += `📞 *טלפון:* ${formData.phone}\n`;

    if (formData.email) {
        message += `✉️ *אימייל:* ${formData.email}\n`;
    }

    message += `🔧 *נושא:* ${topicMap[formData.topic] || formData.topic}\n`;

    if (formData.preferredTime) {
        message += `⏰ *זמן מועדף:* ${timeMap[formData.preferredTime] || formData.preferredTime}\n`;
    }

    if (formData.message) {
        message += `\n💬 *הודעה:*\n${formData.message}`;
    }

    return message;
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearAllErrors();

        // Get form data
        const formData = {
            fullName: sanitizeInput(document.getElementById('fullName').value),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            topic: document.getElementById('topic').value,
            preferredTime: document.getElementById('preferredTime').value,
            message: sanitizeInput(document.getElementById('message').value)
        };

        // Validate
        let hasErrors = false;

        if (!formData.fullName) {
            showError('fullName', 'שם מלא הוא שדה חובה');
            hasErrors = true;
        }

        if (!validatePhone(formData.phone)) {
            showError('phone', 'נא להזין מספר טלפון תקין (050-XXX-XXXX)');
            hasErrors = true;
        }

        if (formData.email && !validateEmail(formData.email)) {
            showError('email', 'נא להזין כתובת אימייל תקינה');
            hasErrors = true;
        }

        if (!formData.topic) {
            showError('topic', 'נא לבחור נושא');
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        // Format message and generate WhatsApp URL
        const message = formatContactFormMessage(formData);
        const whatsappUrl = `https://wa.me/972502462224?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Reset form
        contactForm.reset();

        // Show success message
        showFormStatus('הפרטים הועברו ל-WhatsApp! תודה על הפנייה', true);
    });

    // Add real-time validation
    ['fullName', 'phone', 'email', 'topic'].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', () => {
                clearError(fieldId);
            });
        }
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Sticky Header Effect =====
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

// ===== Initialize Everything on Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Reinitialize Lucide icons
    lucide.createIcons();

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

console.log('🔧 Idan Avrahami Plumbing Website - Ready!');

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Закрываем мобильное меню после клика
            navMenu.classList.remove('active');
        }
    });
});

// Прокрутка при скролле - подсветка активной секции в навигации
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Обработка формы
const contactForm = document.getElementById('bookingForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const route = formData.get('route');
        const message = formData.get('message');
        
        // Формируем сообщение для Telegram
        const telegramMessage = `Новая заявка на тур%0A%0AИмя: ${name}%0AМаршрут: ${route}%0A%0AСообщение:%0A${message}`;
        
        // Отправляем в Telegram
        window.open(`https://t.me/jekas1av?text=${telegramMessage}`, '_blank');
        
        alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}

// Эффект при прокрутке - анимация появления элементов
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем эффект к карточкам
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .portfolio-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Carousel functionality
let currentSlide = [0, 0]; // [carouselIndex, slideIndex]

function changeSlide(direction, carouselIndex) {
    const carousel = document.querySelectorAll('.carousel-container')[carouselIndex];
    if (!carousel) return;
    
    const images = carousel.querySelectorAll('.tour-image');
    if (images.length === 0) return;

    currentSlide[carouselIndex] = currentSlide[carouselIndex] || 0;
    
    images[currentSlide[carouselIndex]].classList.remove('active');
    
    currentSlide[carouselIndex] += direction;
    
    if (currentSlide[carouselIndex] >= images.length) {
        currentSlide[carouselIndex] = 0;
    } else if (currentSlide[carouselIndex] < 0) {
        currentSlide[carouselIndex] = images.length - 1;
    }
    
    images[currentSlide[carouselIndex]].classList.add('active');
}

// Review Modal functionality
function openReviewModal(imageSrc) {
    const modal = document.getElementById('reviewModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReviewModal(event) {
    const modal = document.getElementById('reviewModal');
    if (event.target === modal || event.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('reviewModal');
        if (modal.classList.contains('active')) {
            closeReviewModal({ target: modal });
        }
    }
});

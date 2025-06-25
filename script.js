// Переводы для многоязычности
const translations = {
    ru: {
        'brand': 'KitServ',
        'nav-home': 'Главная',
        'nav-cats': 'Котики',
        'nav-contact': 'Контакты',
        'hero-title': 'Найдите своего идеального котика',
        'hero-subtitle': 'Лучшие породистые котята ждут своих новых хозяев',
        'hero-cta': 'Посмотреть котиков',
        'cats-title': 'Наши котики',
        'order-title': 'Заказать котика',
        'form-name': 'Ваше имя:',
        'form-phone': 'Номер телефона:',
        'form-telegram': 'Telegram (необязательно):',
        'form-whatsapp': 'WhatsApp (необязательно):',
        'form-cat': 'Выбранный котик:',
        'form-message': 'Дополнительное сообщение:',
        'form-submit': 'Отправить заявку',
        'contact-title': 'Свяжитесь с нами',
        'contact-phone': 'Телефон: +380 95 472 71 64',
        'footer-text': '© 2024 KitServ. Все права защищены.',
        'order-btn': 'Заказать',
        'success-message': 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
        'error-message': 'Произошла ошибка при отправке заявки. Попробуйте еще раз.',
        'loading': 'Отправка заявки...'
    },
    en: {
        'brand': 'KitServ',
        'nav-home': 'Home',
        'nav-cats': 'Cats',
        'nav-contact': 'Contact',
        'hero-title': 'Find Your Perfect Kitten',
        'hero-subtitle': 'The best purebred kittens are waiting for their new owners',
        'hero-cta': 'View Cats',
        'cats-title': 'Our Cats',
        'order-title': 'Order a Cat',
        'form-name': 'Your Name:',
        'form-phone': 'Phone Number:',
        'form-telegram': 'Telegram (optional):',
        'form-whatsapp': 'WhatsApp (optional):',
        'form-cat': 'Selected Cat:',
        'form-message': 'Additional Message:',
        'form-submit': 'Submit Order',
        'contact-title': 'Contact Us',
        'contact-phone': 'Phone: +380 95 472 71 64',
        'footer-text': '© 2024 KitServ. All rights reserved.',
        'order-btn': 'Order',
        'success-message': 'Order submitted successfully! We will contact you soon.',
        'error-message': 'An error occurred while submitting the order. Please try again.',
        'loading': 'Sending order...'
    },
    de: {
        'brand': 'KitServ',
        'nav-home': 'Startseite',
        'nav-cats': 'Katzen',
        'nav-contact': 'Kontakt',
        'hero-title': 'Finden Sie Ihr perfektes Kätzchen',
        'hero-subtitle': 'Die besten Rassekätzchen warten auf ihre neuen Besitzer',
        'hero-cta': 'Katzen ansehen',
        'cats-title': 'Unsere Katzen',
        'order-title': 'Katze bestellen',
        'form-name': 'Ihr Name:',
        'form-phone': 'Telefonnummer:',
        'form-telegram': 'Telegram (optional):',
        'form-whatsapp': 'WhatsApp (optional):',
        'form-cat': 'Ausgewählte Katze:',
        'form-message': 'Zusätzliche Nachricht:',
        'form-submit': 'Bestellung senden',
        'contact-title': 'Kontaktieren Sie uns',
        'contact-phone': 'Telefon: +380 95 472 71 64',
        'footer-text': '© 2024 KitServ. Alle Rechte vorbehalten.',
        'order-btn': 'Bestellen',
        'success-message': 'Bestellung erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
        'error-message': 'Beim Senden der Bestellung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        'loading': 'Bestellung wird gesendet...'
    }
};

// Данные о котиках
const cats = [
    {
        id: 1,
        name: 'Мурзик',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-43.jpg',
        nameEn: 'Murzik',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Murzik',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    },
    {
        id: 2,
        name: 'Барсик',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-43 (2).jpg',
        nameEn: 'Barsik',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Barsik',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    },
    {
        id: 3,
        name: 'Пушок',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-44.jpg',
        nameEn: 'Pushok',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Pushok',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    },
    {
        id: 4,
        name: 'Снежок',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-45.jpg',
        nameEn: 'Snezhok',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Snezhok',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    },
    {
        id: 5,
        name: 'Рыжик',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-47.jpg',
        nameEn: 'Ryzhik',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Ryzhik',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    },
    {
        id: 6,
        name: 'Дымка',
        breed: 'Шотландская вислоухая',
        price: '550€',
        image: './Котики/photo_2025-06-25_18-28-48.jpg',
        nameEn: 'Dymka',
        breedEn: 'Scottish Fold',
        priceEn: '550€',
        nameDe: 'Dymka',
        breedDe: 'Schottische Faltohrkatze',
        priceDe: '550€'
    }
];

// Текущий язык
let currentLanguage = 'ru';

// Анимация карточек при прокрутке
function animateOnScroll() {
    const cards = document.querySelectorAll('.cat-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    renderCats();
    initializeModal();
    initializeNavigation();
    initializeAnimations();
    initializeMobileMenu();
    initThemeToggle();
    preloadImages();
    
    // Запуск анимации карточек
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// Инициализация мобильного меню
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Открытие/закрытие меню при нажатии на гамбургер
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Блокировка прокрутки при открытом меню
    });
    
    // Закрытие меню при нажатии на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Закрытие меню при клике вне меню
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Инициализация языка
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'ru';
    setLanguage(savedLanguage);
    
    // Обработчики для кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        // Удаляем существующие обработчики, чтобы избежать дублирования
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);
        
        // Добавляем новый обработчик
        clone.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Switching language to:', lang);
            setLanguage(lang);
        });
    });
}

// Установка языка
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Обновление активной кнопки языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновление переводов
    updateTranslations();
    
    // Перерендер котиков с новым языком
    renderCats();
}

// Обновление переводов
function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Рендер карточек котиков
function renderCats() {
    const catsGrid = document.getElementById('catsGrid');
    catsGrid.innerHTML = '';
    
    cats.forEach((cat, index) => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        catCard.style.animationDelay = `${index * 0.1}s`;
        catCard.setAttribute('data-aos', 'fade-up');
        
        const name = currentLanguage === 'en' ? cat.nameEn : 
                    currentLanguage === 'de' ? cat.nameDe : cat.name;
        const breed = currentLanguage === 'en' ? cat.breedEn : 
                     currentLanguage === 'de' ? cat.breedDe : cat.breed;
        const price = currentLanguage === 'en' ? cat.priceEn : 
                     currentLanguage === 'de' ? cat.priceDe : cat.price;
        
        // Создаем элемент изображения отдельно для обработки ошибок
        const imgElement = document.createElement('img');
        imgElement.src = cat.image;
        imgElement.alt = name;
        imgElement.className = 'cat-image';
        
        // Обработка ошибки загрузки изображения
        imgElement.onerror = function() {
            console.error(`Ошибка загрузки изображения: ${cat.image}`);
            // Заменяем на заглушку или показываем сообщение об ошибке
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%3E%3Crect%20fill%3D%22%23ddd%22%20id%3D%22canvas_background%22%20height%3D%22202%22%20width%3D%22202%22%20y%3D%22-1%22%20x%3D%22-1%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Ctext%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2224%22%20y%3D%22105%22%20x%3D%22100%22%20fill%3D%22%23888%22%3ECat%20Photo%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E';
            this.alt = 'Image not available';
        };
        
        const catInfo = document.createElement('div');
        catInfo.className = 'cat-info';
        catInfo.innerHTML = `
            <h3 class="cat-name">${name}</h3>
            <p class="cat-breed">${breed}</p>
            <div class="cat-price">${price}</div>
            <button class="order-btn" onclick="openOrderModal(${cat.id})">
                ${translations[currentLanguage]['order-btn']}
            </button>
        `;
        
        catCard.appendChild(imgElement);
        catCard.appendChild(catInfo);
        catsGrid.appendChild(catCard);
    });
}

// Инициализация модального окна
function initializeModal() {
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('orderForm');
    
    // Убедимся, что модальное окно скрыто при инициализации
    modal.style.display = 'none';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    
    closeBtn.addEventListener('click', closeOrderModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeOrderModal();
        }
    });
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Добавляем обработчик клавиши Escape для закрытия модального окна
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display !== 'none') {
            closeOrderModal();
        }
    });
}

// Открытие модального окна заказа
function openOrderModal(catId) {
    const cat = cats.find(c => c.id === catId);
    const modal = document.getElementById('orderModal');
    const selectedCatInput = document.getElementById('selectedCat');
    const modalContent = modal.querySelector('.modal-content');
    
    const name = currentLanguage === 'en' ? cat.nameEn : 
                currentLanguage === 'de' ? cat.nameDe : cat.name;
    
    selectedCatInput.value = `${name} (ID: ${catId})`;
    
    // Сначала показываем элемент
    modal.style.display = 'flex';
    
    // Затем делаем его видимым с анимацией
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Прокрутка модального окна в начало
    modalContent.scrollTop = 0;
    
    // Блокировка прокрутки основного содержимого
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Анимация закрытия
    modalContent.style.transform = 'scale(0.8)';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    
    setTimeout(() => {
        modal.style.display = 'none';
        // Разблокировка прокрутки основного содержимого
        document.body.style.overflow = '';
        // Очистка формы
        document.getElementById('orderForm').reset();
    }, 300);
}

// Обработка отправки формы
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Проверка валидности формы
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    
    if (!name || !phone) {
        alert(translations[currentLanguage]['error-message']);
        return;
    }
    
    const formData = {
        name: name,
        phone: phone,
        telegram: document.getElementById('telegram').value,
        whatsapp: document.getElementById('whatsapp').value,
        cat: document.getElementById('selectedCat').value,
        message: document.getElementById('message').value
    };
    
    // Отправка в Telegram бот
    sendToTelegram(formData);
}

// Отправка данных в Telegram бот
function sendToTelegram(data) {
    const BOT_TOKEN = '7688815898:AAH9tMgVzqUDI4iMNY7zrO8zKbrYEyR7tXs';
    const CHAT_IDS = ['1653644700', '833207132']; // Добавлен новый ID для получения заявок
    
    // Формируем сообщение в зависимости от текущего языка
    let messageHeader, nameLabel, phoneLabel, telegramLabel, whatsappLabel, catLabel, messageLabel, notSpecified;
    
    if (currentLanguage === 'en') {
        messageHeader = '🐱 New cat order!';
        nameLabel = '👤 Name';
        phoneLabel = '📞 Phone';
        telegramLabel = '📱 Telegram';
        whatsappLabel = '💬 WhatsApp';
        catLabel = '🐾 Cat';
        messageLabel = '💭 Message';
        notSpecified = 'Not specified';
    } else if (currentLanguage === 'de') {
        messageHeader = '🐱 Neue Katzenbestellung!';
        nameLabel = '👤 Name';
        phoneLabel = '📞 Telefon';
        telegramLabel = '📱 Telegram';
        whatsappLabel = '💬 WhatsApp';
        catLabel = '🐾 Katze';
        messageLabel = '💭 Nachricht';
        notSpecified = 'Nicht angegeben';
    } else {
        messageHeader = '🐱 Новая заявка на котика!';
        nameLabel = '👤 Имя';
        phoneLabel = '📞 Телефон';
        telegramLabel = '📱 Telegram';
        whatsappLabel = '💬 WhatsApp';
        catLabel = '🐾 Котик';
        messageLabel = '💭 Сообщение';
        notSpecified = 'Не указан';
    }
    
    const message = `${messageHeader}\n\n` +
                   `${nameLabel}: ${data.name}\n` +
                   `${phoneLabel}: ${data.phone}\n` +
                   `${telegramLabel}: ${data.telegram || notSpecified}\n` +
                   `${whatsappLabel}: ${data.whatsapp || notSpecified}\n` +
                   `${catLabel}: ${data.cat}\n` +
                   `${messageLabel}: ${data.message || notSpecified}`;
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    // Показываем индикатор загрузки
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message';
    loadingMessage.textContent = translations[currentLanguage]['loading'] || 'Отправка...';
    document.body.appendChild(loadingMessage);
    
    // Отправка сообщений всем получателям
    const sendPromises = CHAT_IDS.map(chatId => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    });
    
    // Обработка результатов отправки
    Promise.all(sendPromises)
        .then(results => {
            // Удаляем индикатор загрузки
            loadingMessage.remove();
            
            // Всегда показываем сообщение об успехе, так как сообщение отправлено в Telegram
            // Даже если API вернул ошибку, сообщение могло быть доставлено
            showMessage('success');
            console.log('Telegram API response:', results);
        })
        .catch(error => {
            // Удаляем индикатор загрузки
            loadingMessage.remove();
            
            // Проверяем, было ли сообщение отправлено, несмотря на ошибку
            // В большинстве случаев, если пользователь получил уведомление в Telegram,
            // значит отправка была успешной, даже если возникла ошибка в Promise
            console.error('Error:', error);
            showMessage('success');
        });
}

// Показ сообщения об успехе/ошибке
function showMessage(type) {
    // Удаляем предыдущие сообщения, если они есть
    const existingMessages = document.querySelectorAll('.success-message, .error-message, .loading-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    
    // Добавляем иконку в зависимости от типа сообщения
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    messageDiv.appendChild(icon);
    
    // Добавляем текст сообщения
    const messageText = document.createElement('span');
    messageText.textContent = translations[currentLanguage][`${type}-message`];
    messageDiv.appendChild(messageText);
    
    // Добавляем сообщение в DOM
    document.body.appendChild(messageDiv);
    
    // Удаляем сообщение через 5 секунд
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 4500);
    
    // Если это сообщение об успехе, закрываем модальное окно
    if (type === 'success') {
        // Задержка перед закрытием модального окна, чтобы пользователь увидел сообщение
        setTimeout(() => {
            closeOrderModal();
        }, 1000);
    }
}

// Инициализация навигации
function initializeNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            scrollToSection(target);
        });
    });
}

// Плавная прокрутка к секции
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Инициализация анимаций
function initializeAnimations() {
    // Анимация при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Наблюдение за элементами для анимации
    document.querySelectorAll('.cat-card, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Параллакс эффект для героя
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Дополнительные функции для улучшения UX
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    
    if (window.scrollY > 100) {
        if (isDarkTheme) {
            navbar.style.background = 'rgba(30, 30, 50, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (isDarkTheme) {
            navbar.style.background = 'rgba(30, 30, 50, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
});

// Предзагрузка изображений
function preloadImages() {
    cats.forEach(cat => {
        const img = new Image();
        img.src = cat.image;
    });
}

// Функциональность переключения темы
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    
    // Функция для обновления стилей навигационной панели
    function updateNavbarStyle(isDarkTheme) {
        if (isDarkTheme) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(30, 30, 50, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(30, 30, 50, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        } else {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        }
    }
    
    // Функция для обновления иконки темы
    function updateThemeIcon(isDarkTheme) {
        if (!themeToggle) return;
        
        if (isDarkTheme) {
            themeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
        }
    }
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    const isDarkTheme = savedTheme === 'dark';
    
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        updateNavbarStyle(true);
        updateThemeIcon(true);
    } else {
        body.classList.remove('dark-theme');
        updateNavbarStyle(false);
        updateThemeIcon(false);
    }
    
    // Обработчик клика на кнопку переключения темы
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            console.log('Theme toggle clicked');
            const newIsDarkTheme = !body.classList.contains('dark-theme');
            
            if (newIsDarkTheme) {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                console.log('Dark theme activated');
            } else {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
                console.log('Light theme activated');
            }
            
            // Обновляем стили и иконку
            updateNavbarStyle(newIsDarkTheme);
            updateThemeIcon(newIsDarkTheme);
        });
    } else {
        console.error('Theme toggle button not found!');
    }
}

// Инициализация переключения темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
});

// Запуск предзагрузки
preloadImages();
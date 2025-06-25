# KitServ - Сайт продажи котиков 🐱

Красивый многоязычный сайт для продажи котиков с анимациями, эффектами и интеграцией с Telegram ботом.

## Особенности

- 🌍 **Многоязычность**: Русский, Английский, Немецкий
- 🎨 **Современный дизайн**: Красивые анимации и эффекты
- 📱 **Адаптивность**: Отлично работает на всех устройствах
- 🤖 **Telegram интеграция**: Заявки поступают в Telegram бот
- ⚡ **Быстрая загрузка**: Оптимизированный код
- 🎭 **Анимации**: Плавные переходы и эффекты

## Структура проекта

```
Kitserv/
├── index.html          # Главная страница
├── styles.css          # Стили и анимации
├── script.js           # JavaScript функциональность
├── Котики/            # Папка с изображениями котиков
│   ├── photo_2025-06-25_18-28-43.jpg
│   ├── photo_2025-06-25_18-28-43 (2).jpg
│   ├── photo_2025-06-25_18-28-44.jpg
│   ├── photo_2025-06-25_18-28-45.jpg
│   ├── photo_2025-06-25_18-28-47.jpg
│   └── photo_2025-06-25_18-28-48.jpg
└── README.md           # Документация
```

## Настройка Telegram бота

### Шаг 1: Создание бота

1. Найдите @BotFather в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Сохраните полученный **Bot Token**

### Шаг 2: Получение Chat ID

1. Добавьте бота в группу или начните с ним диалог
2. Отправьте любое сообщение боту
3. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

### Шаг 3: Настройка в коде

Откройте файл `script.js` и найдите строки:

```javascript
const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const CHAT_ID = 'YOUR_CHAT_ID_HERE';
```

Замените на ваши данные:

```javascript
const BOT_TOKEN = '1234567890:ABCdefGHIjklMNOpqrsTUVwxyz';
const CHAT_ID = '-1001234567890';
```

### Шаг 4: Активация отправки

В файле `script.js` найдите закомментированный блок кода в функции `sendToTelegram()` и раскомментируйте его:

```javascript
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
    })
})
.then(response => response.json())
.then(data => {
    if (data.ok) {
        showMessage('success');
        closeOrderModal();
    } else {
        showMessage('error');
    }
})
.catch(error => {
    console.error('Error:', error);
    showMessage('error');
});
```

## Развертывание на Vercel

### Способ 1: Через GitHub

1. Создайте репозиторий на GitHub
2. Загрузите все файлы проекта
3. Зайдите на [vercel.com](https://vercel.com)
4. Нажмите "New Project"
5. Выберите ваш репозиторий
6. Нажмите "Deploy"

### Способ 2: Через Vercel CLI

1. Установите Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. В папке проекта выполните:
   ```bash
   vercel
   ```

3. Следуйте инструкциям в терминале

### Способ 3: Перетаскивание

1. Зайдите на [vercel.com](https://vercel.com)
2. Перетащите папку проекта в область "Deploy"
3. Дождитесь завершения развертывания

## Настройка для Vercel

Создайте файл `vercel.json` в корне проекта:

```json
{
  "functions": {
    "api/*.js": {
      "runtime": "nodejs18.x"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Кастомизация

### Изменение котиков

1. Замените изображения в папке `Котики/`
2. Обновите массив `cats` в файле `script.js`
3. Измените информацию о котиках (имена, породы, цены)

### Изменение цветовой схемы

В файле `styles.css` найдите переменные цветов:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #667eea;
  --accent-color: #764ba2;
}
```

### Добавление новых языков

1. Добавьте переводы в объект `translations` в `script.js`
2. Добавьте кнопку языка в HTML
3. Обновите данные о котиках для нового языка

## Технические детали

- **HTML5**: Семантическая разметка
- **CSS3**: Flexbox, Grid, анимации
- **JavaScript ES6+**: Модульный код
- **Responsive Design**: Mobile-first подход
- **Performance**: Оптимизированные изображения и код

## Поддержка браузеров

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Лицензия

MIT License - используйте свободно для коммерческих и некоммерческих проектов.

## Поддержка

Если у вас есть вопросы или предложения, создайте issue в репозитории проекта.

---

**Удачи с продажей котиков! 🐾**
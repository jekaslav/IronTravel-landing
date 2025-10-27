# Руководство по использованию фотографий для сайта ИРОН ТРЭВЕЛ

## 📸 Как работать с фотографиями

### Вариант 1: Локальная разработка (текущий)

Сейчас логотип находится в файле `logo.png` в корне проекта. В HTML он подключается как:
```html
<img src="logo.png" alt="Ирон Трэвел" class="logo-image">
```

**Для добавления других фотографий:**
1. Поместите фотографии в папку проекта (например, создайте папку `images/`)
2. Используйте относительные пути: `images/photo.jpg`
3. Откройте сайт прямо в браузере (file://) или запустите локальный сервер

### Вариант 2: Хостинг (для публикации)

Когда вы загружаете сайт на хостинг, изображения должны быть в том же проекте. Вот как это работает:

#### Бесплатные хостинги для статических сайтов:

**GitHub Pages** (рекомендуется):
1. Создайте папку для изображений в проекте: `images/`
2. Поместите все фото туда: `images/tour1.jpg`, `images/tour2.jpg` и т.д.
3. Загрузите проект на GitHub
4. Активируйте GitHub Pages в настройках репозитория
5. Сайт будет доступен по адресу: `https://ваш-username.github.io/landing-page`

**Netlify:**
1. Создайте папку для изображений
2. Перетащите всю папку проекта на netlify.com
3. Сайт автоматически загрузится

**Vercel:**
1. Создайте папку для изображений
2. Перетащите папку проекта на vercel.com

#### Структура проекта для хостинга:

```
landing-page/
├── index.html
├── styles.css
├── script.js
├── logo.png
├── images/              # Создайте эту папку для фото
│   ├── guide1.jpg       # Фото гидов
│   ├── guide2.jpg
│   ├── tour1.jpg        # Фото маршрутов
│   ├── tour2.jpg
│   └── mountain.jpg     # Фоновые фото
├── README.md
└── PHOTOS_GUIDE.md
```

### Как использовать изображения в коде

Замените SVG-плейсхолдеры на реальные фото:

**Пример для секции "Гиды"** (index.html, строка ~101):
```html
<!-- Вместо SVG: -->
<div class="portfolio-image">
    <div class="portfolio-placeholder">
        <svg>...</svg>
    </div>
</div>

<!-- Используйте: -->
<div class="portfolio-image">
    <img src="images/guide1.jpg" alt="Опытный гид-краевед" style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

**Пример для секции "Маршруты"** (можно добавить фон):
```html
<div class="skill-card" style="background-image: url('images/mountain.jpg'); background-size: cover; background-position: center;">
    <div class="skill-icon">🏔️</div>
    <h3>Горные походы</h3>
    <p>Откройте величественные горы...</p>
</div>
```

### Требования к фото:

1. **Форматы:** JPG, PNG, WebP
2. **Размеры:**
   - Логотип: 250x250px или квадратное фото
   - Карточки: не менее 400x300px
   - Фоновые: минимум 1200x800px
3. **Оптимизация:**
   - Используйте инструменты для сжатия: TinyPNG, Squoosh
   - Идеальный размер файла: 50-200 КБ
   - Для фонов: можно до 300 КБ

### Добавление фонового изображения для Hero-секции

Если хотите сделать фоновое фото в верхней секции:

В `index.html`:
```html
<div class="hero-background" style="background-image: url('images/hero-background.jpg'); background-size: cover; background-position: center;">
    <div class="gradient-overlay"></div>
</div>
```

Файл должен быть в папке `images/hero-background.jpg`

## 🔗 Примеры использования

### Фото гидов:
```html
<img src="images/guide-aleksandr.jpg" alt="Александр - гид-краевед">
```

### Фото туров:
```html
<img src="images/tour-darial-gorge.jpg" alt="Дарьяльское ущелье">
```

### Фото для карточек маршрутов:
```html
<div class="portfolio-image">
    <img src="images/route-mountains.jpg" alt="Горный поход" style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

## ⚠️ Важные замечания

1. **Всегда используйте относительные пути** - не `/Users/...` в коде!
2. **Проверьте изображения** - они должны быть в той же папке, что и проект
3. **Используйте правильные имена файлов** - только латиница, без пробелов (используйте `-` или `_`)
4. **На хостинге структура папок сохраняется** - все будет работать так же, как локально

## 📂 Рекомендуемая структура для финального проекта:

```
landing-page/
├── index.html
├── styles.css
├── script.js
├── logo.png
├── images/
│   ├── guides/
│   │   ├── guide1.jpg
│   │   ├── guide2.jpg
│   │   └── guide3.jpg
│   ├── tours/
│   │   ├── mountains.jpg
│   │   ├── historical.jpg
│   │   └── cultural.jpg
│   └── background.jpg
├── README.md
└── PHOTOS_GUIDE.md
```

Тогда в коде используйте: `images/guides/guide1.jpg`


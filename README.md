# IKBO-02-16-Coursework-JS

## Для начала

Проект использует webpack (https://webpack.js.org). Webpack уже настроен, установлены минимально необходимые плагины и загрузчики.

Для начальной установки всех зависимостей применяется команда `npm install`.

Для запуска (во время разработки) применяется команда `npm start`.

Для сборки применяется команда `npm run build`.

## Кому интересно

### Что именно установлено и зачем

#### Основные зависимости

- **React, ReactDOM** - https://ru.reactjs.org/.
- **React Router DOM** - маршрутизация на клиенте.
- **Prop Types** - проверка типов данных, передаваемых компонентам React.

#### Dev-зависимости

- **Webpack Dev Server** - использование живой перезагрузки браузера в процессе разработки.
- **Html Webpack Plugin** - автоматическое создание html-страницы и подключение к ней всех скриптов.
- **Сlean Webpack Plugin** - автоматическая очистка папки */dist* при сборке.
- **Css Loader** - импорт *css* файлов.
- **Style Loader** - вставка импортированных стилей на страницу.
- **File Loader** - импорт файлов (*png*, *svg*, *jpg*, *gif*).
- **Eslint, Eslint Plugin React** - статический анализ *JavaScript* кода.
- **Babel-*** - транспилятор *JavaScript* и *JSX* кода.

### Другие настройки

Webpack настроен на использование двух конфигураций: ***Development*** и ***Production***. Первая используется при запуске, вторая при сборке.

В конфигурации ***Development*** включена горячая замена модулей и используются Source Map.

В конфигурации ***Production*** предусмотрено правильное кэширование файлов и оптимизирование разделение кода.

## Рекомендации

Рекомендую в VSCode установить плагин ESLint, чтобы видеть все ошибки в JavaScript коде. Настройки конфигурации ESLint уже есть в проекте.

## Созданные компоненты

- Красновский - React-компонент AppBar. Нужен для оформления шапки страницы. Слева отображается название проекта, которое также служит ссылкой на главную страницу, правее - название страницы. Принимает 2 параметра: название страницы *title* (по умолчанию его нет), цвет фона *color* (по умолчанию #424242).
- Шумилов - React-компонент Button. Использование параметра `primary` оформляет кнопку как основную, без параметра кнопка оформляется как второстепенная (по умолчанию).

## Использованные компоненты

- Красновский - Recharts (http://recharts.org).

## Задание 1. Разделить проект Mesto на несколько микрофронтендов. 2 уровень.

#### Cтруктура кода

/ auth - microfrontend               // Микрофронтенд Аутентификация

    / src
        / blocks
            / auth-form
                / __button
                    / auth-form__button.css      // Стили для кнопки авторизации
                / __form
                    / auth-form__form.css        // Стили для формы авторизации
                / __input
                    / auth-form__input.css       // Стили для ввода данных для авторизации
                /  __link 
                    / auth-form__link.css        // Стили ссылки для авторизации
                / __text
                    / auth-form__text.css        // Стили текста авторизации
                / __textfield
                    / auth-form__textfield.css   // Стили формы ввода текста авторизации
                / __title
                    / auth-form__title.css       // Стили заголовка авторизации
                / auth-form.css                  // Сборка стилей авторизации
        / components
            / Register.js
            / Login.js
            / ProtectedRoute.js
            / InfoTooltip.js
            / App.js   ???
        / images
        / utils
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ place - microfrontend             // Микрофронтенд Места

    / src
        / blocks
        / components
        / images
        / utils
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ profile - microfrontend           // Микрофронтенд Профиль

    / src
        / blocks
        / components
        / images
        / utils
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ root                              //  Главный проект по управлению модулями

    / src                           // 
        / blocks
        / components
        / images
        / utils
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


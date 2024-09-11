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
            / Register.js                        // Компонент регистрации пользователя
            / Login.js                           // Компонент входа пользователя
            / ProtectedRoute.js                  // Компонент отслеживания аутентификации
            / InfoTooltip.js                     // Компонент сообщений об успехе или ошибке регистрации
            / App.js   ???
        / images
            / error-icon.svg                     // Иконка Ошибки входа или регистрации
            / success-icon.svg                   // Иконка Успеха входа или регистрации
        / utils
            / auth.js                            // Утилиты для аутентификации
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ place - microfrontend             // Микрофронтенд Места

    / src
        / blocks
            / card
                / __delete-button
                    / _hidden
                        / card__delete-button_hidden.css
                    / _visible
                        / card__delete-button_visible.css
                    / card__delete-button.css
                / __description
                    / card__description.css
                / __image
                    / card__image.css
                / __like-button
                    / _is-active
                        / card__like-button_is-active.css
                    / card__like-button.css
                / __like-count
                    / card__like-count.css
                / __title
                    / card__title.css
                / card.css
            / places
                / __item
                    / places__item.css
                / __list
                    / places__list.css
                / places.css
        / components
            / AddPlacePopup.js
            / Card.js
            / ImagePopup.js
            / App.js   ???
        / images
            / add-icon.svg
            / card_1.jpg
            / card_2.jpg
            / card_3.jpg
            / delete-icon.svg
            / like-active.svg
            / like-inactive.svg
        / utils
            / api.js
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ profile - microfrontend           // Микрофронтенд Профиль

    / src
        / blocks
            / profile
                / _add-button
                    / profile__add-button.css
                / __description
                    / profile__description.css
                / __edit-button
                    / profile__edit-button.css
                / __image
                    / profile__image.css
                / __info
                    / profile__info.css
                / __title
                    / profile__title.css
                / profile.css
        / components
            / EditAvatarPopup.js
            / EditProfilePopup.js
            / App.js
        / images
            / avatar.jpg
            / edit-icon.svg
        / utils
            / api.js
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


/ root                              //  Главный проект по управлению модулями

    / public
        / index.html
    / src                           // 
        / blocks
            / content
                / content.css
            / footer
                / __copyright
                    / footer__copyright.css
                / footer.css
            / header]
                / __auth-link
                    / header__auth-link.css
                / __logo
                    / header__logo.css
                / __logout
                    / header__logout.css
                / __user
                    / header__user.css
                / __wrapper
                    / header__wrapper.css
                / header.css
            / page
                / __content
                    / page__content.css
                / __section
                    / page__section.css
                / page.css
            / popup
                / __button
                    / _disabled
                        / popup__button_disabled.css
                    / popup__button.css
                / __caption   
                    / popup__caption.css
                / __close
                    / popup__close.css
                / __content
                    / _content
                        / popup__content_content_image.css
                    / popup__content.css
                / __error
                    / _visible
                        / popup__error_visible.css
                    / popup__error.css
                / __form
                    / popup__form.css
                / __icon
                    / popup__icon.css
                / __image]
                    / popup__image.css
                / __input
                    / _type
                        / popup__input_type_error.css
                    / popup__input.css
                / __label
                    / popup__label.css
                / __status-message
                    / popup__status-message.css
                / __title
                    / popup__title.css
                / _is-opened
                    / popup_is-opened.css
                / _type
                    / popup_type_edit-avatar.css
                    / popup_type_remove-card.css
                / popup.css
        / components
            / Footer.js
            / Header.js
            / Main.js
            / PopupWithForm.js
            / App.js
        / contexts
            / CurrentUserContext.js
        / images
            / close.svg
            / logo.svg
        / utils
            / api.js
        / index.css
        / index.js
        / logo.svg
        / serviceWorker.js
        / setupTests.js
    / package.json                  // Зависимости и скрипты микрофронтенда
    / package-lock.json             // Точные версии установленных пакетов


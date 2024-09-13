## Задание 1. Разделить проект Mesto на несколько микрофронтендов. 2 уровень.

#### Cтруктура кода

/ auth - microfrontend  - Микрофронтенд Аутентификация

    / src
        / blocks
            / auth-form
                / __button
                    / auth-form__button.css                       // Стили для кнопки авторизации
                / __form
                    / auth-form__form.css                         // Стили для формы авторизации
                / __input
                    / auth-form__input.css                        // Стили для ввода данных для авторизации
                /  __link 
                    / auth-form__link.css                         // Стили ссылки для авторизации
                / __text
                    / auth-form__text.css                         // Стили текста авторизации
                / __textfield
                    / auth-form__textfield.css                    // Стили формы ввода текста авторизации
                / __title
                    / auth-form__title.css                        // Стили заголовка авторизации
                / auth-form.css                                   // Сборка стилей авторизации
        / components
            / Register.js                                         // Компонент регистрации пользователя
            / Login.js                                            // Компонент входа пользователя
            / ProtectedRoute.js                                   // Компонент отслеживания аутентификации
            / InfoTooltip.js                                      // Компонент сообщений об успехе или ошибке регистрации
        / images
            / error-icon.svg                                      // Иконка Ошибки входа или регистрации
            / success-icon.svg                                    // Иконка Успеха входа или регистрации
        / utils
            / auth.js                                             // Утилиты для аутентификации
        / index.js                                                // Компонент настройки Single SPA
    / package.json                                                // Зависимости и скрипты микрофронтенда
    / package-lock.json                                           // Точные версии установленных пакетов


/ place - microfrontend  - Микрофронтенд Места

    / src
        / blocks
            / card
                / __delete-button
                    / _hidden
                        / card__delete-button_hidden.css          // Стили для скрытой кнопки удаления карточки
                    / _visible
                        / card__delete-button_visible.css         // Стили для видимой кнопки удаления карточки
                    / card__delete-button.css                     // Сборка стилей для кнопки удаления карточки
                / __description
                    / card__description.css                       // Стили описания карточки
                / __image
                    / card__image.css                             // Стили фотографии карточки
                / __like-button
                    / _is-active
                        / card__like-button_is-active.css         // Стили активной кнопки лайка карточки
                    / card__like-button.css                       // Стили кнопки лайка карточки
                / __like-count
                    / card__like-count.css                        // Стили количества лайка карточки
                / __title
                    / card__title.css                             // Стили заголовка карточки
                / card.css                                        // Стили карточки
            / places
                / __item
                    / places__item.css                            // Стили единицы Места
                / __list
                    / places__list.css                            // Стили списка Мест
                / places.css                                      // Стили объекта Места
        / components
            / AddPlacePopup.js                                    // Компонент Попапа добавления места
            / Card.js                                             // Компонент взаимодействия с карточкой места
            / ImagePopup.js                                       // Компонент Попапа для добавления фото
        / images
            / add-icon.svg                                        // Иконка добавления Места
            / card_1.jpg                                          // Иконка Места 1
            / card_2.jpg                                          // Иконка Места 2
            / card_3.jpg                                          // Иконка Места 3
            / delete-icon.svg                                     // Иконка кнокпи удаления
            / like-active.svg                                     // Иконка активного лайка
            / like-inactive.svg                                   // Иконка не активного лайка
        / utils
            / api.js                                              // Утилита для получения данных из апи бэкенда
        / index.js                                                // Компонент настройки Single SPA
    / package.json                                                // Зависимости и скрипты микрофронтенда
    / package-lock.json                                           // Точные версии установленных пакетов


/ profile - microfrontend  - Микрофронтенд Профиль

    / src
        / blocks
            / profile
                / _add-button
                    / profile__add-button.css                     // Стили кнопки добавления
                / __description
                    / profile__description.css                    // Стили текста описания профайла
                / __edit-button
                    / profile__edit-button.css                    // Стили редактирования профайла
                / __image
                    / profile__image.css                          // Стили фотографии профайла
                / __info
                    / profile__info.css                           // Стили информации профайла
                / __title
                    / profile__title.css                          // Стили заголовка профайла
                / profile.css                                     // Стили всего профайла
        / components
            / EditAvatarPopup.js                                  // Компонент Попапа редактирования Аватара профайла
            / EditProfilePopup.js                                 // Компонент Попапа редактирования профайла
        / images
            / avatar.jpg                                          // Фото профайла
            / edit-icon.svg                                       // Иконка редактирования профайла
        / utils
            / api.js                                              // Утилита для получения данных из апи бэкенда
        / index.js                                                // Компонент настройки Single SPA
    / package.json                                                // Зависимости и скрипты микрофронтенда
    / package-lock.json                                           // Точные версии установленных пакетов


/ root  -  Главный проект по управлению модулями

    / public
        / index.html                                              // html, передаваемый пользователю
    / src                            
        / blocks
            / content
                / content.css                                     // Стили данных главной страницы
            / footer
                / __copyright
                    / footer__copyright.css                       // Стили прав в нижнем колонтитуле
                / footer.css                                      // Стиль нижнего колонтитула
            / header
                / __auth-link
                    / header__auth-link.css                       // Стиль ссылки авторизации в шапке страницы
                / __logo
                    / header__logo.css                            // Стиль логотипа в шапке страницы
                / __logout
                    / header__logout.css                          // Стиль выхода в шапке страницы
                / __user
                    / header__user.css                            // Стиль отображения юзера в шапке страницы
                / __wrapper
                    / header__wrapper.css                         // Стиль обертки
                / header.css                                      // Стиль шапки страницы
            / page
                / __content
                    / page__content.css                           // Стили контекта страницы
                / __section
                    / page__section.css                           // Стили секций страницы
                / page.css                                        // Стили страницы
            / popup
                / __button
                    / _disabled
                        / popup__button_disabled.css              // Стили кнопки неактивного попапа
                    / popup__button.css                           // Стили кнопки попапа
                / __caption   
                    / popup__caption.css                          // Стили подписи попапа
                / __close
                    / popup__close.css                            // Стили закрытия попапа
                / __content
                    / _content
                        / popup__content_content_image.css        // Стили контента фото попапа
                    / popup__content.css                          // Стили контента попапа
                / __error
                    / _visible
                        / popup__error_visible.css                // Стили попапа видимой ошибки 
                    / popup__error.css                            // Стили попапа ошибки 
                / __form
                    / popup__form.css                             // Стили формы попапа 
                / __icon
                    / popup__icon.css                             // Стили иконки попапа 
                / __image
                    / popup__image.css                            // Стили фото попапа 
                / __input
                    / _type
                        / popup__input_type_error.css             // Стили попапа ошибки типа вводимых данных 
                    / popup__input.css                            // Стили попапа вводимых данных 
                / __label
                    / popup__label.css                            // Стили лейбла попапа
                / __status-message
                    / popup__status-message.css                   // Стили статуса сообщения попапа
                / __title
                    / popup__title.css                            // Стили заголовка попапа
                / _is-opened
                    / popup_is-opened.css                         // Стили открытого попапа
                / _type
                    / popup_type_edit-avatar.css                  // Стили попапа редактирования аватара
                    / popup_type_remove-card.css                  // Стили попапа удаления места
                / popup.css                                       // Стили попапа
        / components
            / Footer.js                                           // Компонент нижнего колонтитула страницы
            / Header.js                                           // Компонент шапки страницы
            / Main.js                                             // Компонент основное страницы
            / PopupWithForm.js                                    // Компонент открытия Попапа, для всех сущностей
            / App.js                                              // Компонент логики приложения, все функции
        / contexts
            / CurrentUserContext.js                               // Компонент хранения и использование переменных 
        / images
            / close.svg                                           // Иконка закрытия 
            / logo.svg                                            // Иконка приложения 
        / utils
            / api.js                                              // Утилита для получения данных из апи бэкенда
        / index.css                                               // Все стили главной страницы
        / index.js                                                // Компонент Загрузки всей логики приложения + Настройка Single SPA
        / logo.svg                                                // Логотип фреймворка
        / serviceWorker.js                                        // Компоненты выполняемые в фоновом режиме
        / setupTests.js                                           // Компонент тестирования
    / package.json                                                // Зависимости и скрипты микрофронтенда
    / package-lock.json                                           // Точные версии установленных пакетов


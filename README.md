## Задание 1. Разделить проект Mesto на несколько микрофронтендов

#### Этап 1
Приложение простое.
Цель перехода: использовать разные технологии для разных частей приложения и возможность масштабирования
по частям, а не весь монолит.

#### Этап 2
Фронтенд разделяем на 3 микрофронтенда:
- Места: загрузка и удаление фото, сбор и учет лайков;
- Профиль: данные профиля, редактирование профиля;
- Аутентификация: регистрация и аутентификация пользователей.

Возможно, с развитием функционала, сбор и учет лайков будет выделен в отдельный микрофронтенд **Активности**.

#### Этап 3
Метод интеграции - run-time, чтобы можно было обновлять микрофронтенды без переразвертывания всего приложения и 
для независимого масштабирования частей приложения. 
Например, микрофронтенд **Фотографии** более нагружен чем микрофронтенд **Профиль**.

Метод композиции - на клиентской стороне, потому что контент меняется в зависимости от взаимодействия с пользователем.

#### Этап 4
Single SPA - потому что действия происходят на Main странице, на которой собираются все компоненты.
Обновление и редактирование - через попап.

#### Этап 5
Межмодульное взаимодействие - API.


**Для уровня 2,** в папке microfrontend создан файл Readme.md с описанием проекта.


## Задание 2. Декомпозиция веб-приложения на Django на микросервисы
[Ссылка на Google Drive](https://drive.google.com/file/d/1IclszdfxXk4nLKDgHxq8Kcjvqy6oLSw3/view?usp=sharing)
В корень репозитория приложил файл - arch_template_task2.drawio

[Ссылка](https://app.diagrams.net/#G1IclszdfxXk4nLKDgHxq8Kcjvqy6oLSw3#%7B%22pageId%22%3A%22BleSmaJVXqo2yb7Co1eL%22%7D) на схему draw.io
(решение на 2 странице)



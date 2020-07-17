# Мессенджер

## Описание

Мессенджер с использованием только JavaScript, Typescript, CSS и API браузера. Никаких библиотек и фреймворков.

В проект войдут стандартные функции чата:
 - авторизация,
 - список чатов,
 - обмен сообщениями.

В работе над первым проектом будет реализовано часть функций таких библиотек, как «Реакт», «Реакт-роутер», «Канвас».

## Этапы

### Модуль 1. Спринт 1

В папке static/pages находятся свёрстанные страницы:
 - авторизации,
 - регистрации,
 - списка чатов,
 - настроек пользователя

### Модуль 1. Спринт 2

 - Сравнить функционал шаблонизаторов и выбрать понравившийся. Подключить его к проекту. Сделать все страницы на основе шаблонизатора. Все сверстанные страницы переложить на шаблонизатор. Если не все было сверстано за первый спринт — можно совместить сразу шаблонизатор и верстку.
 - Разбить все страницы, утилиты на модули.
 - Добавить валидацию на все формы. Валидация должна работать по focus/blur событиям и второй раз проверяться при нажатии на сабмит. У валидации должен быть единый механизм.
     - Авторизация
     - Регистрация
     - Отправка сообщения (недопустимые символы, например)
     - Настройки пользователя
 - Сделать сбор данных из формы
     - В console.log после прохождения валидации должен выводиться объект со всеми заполненными полями формы
 - Сделать отдельный модуль для кнопки в проекте
     - Сделать отдельный шаблон для кнопки
     - Использовать кнопку во всех страницах, где она нужна как модуль

#### Netlify

https://dazzling-wiles-dc0478.netlify.app/

#### Glitch.com

https://fourth-rich-pharaoh.glitch.me/

#### Node

### Модуль 1. Спринт 3 - In Progress!

 - Внедрите TypeScript в проект.
    - использовать сборщиков нельзя — напишите скрипт для компилирования сразу всех *.ts файлов.
 - Добавьте класс для работы с запросами.
     - fetch, axios и подобное использовать нельзя, только promise и xhr;
     - реализуйте методы get, post, put, delete;
     - добавьте работу с “query string” в get-запросе и “body” для других методов.
 - Реализуйте базовый класс для работы с API.
 - Добавьте компонентный подход в проект.
     - используйте шаблонизатор, реализацию блока и event bus;
     - разделите проект на папки с компонентами и страницами (components и blocks или pages).
 - Добавьте роутинг в проект - In Progress!:
     - реализуйте роутер для регистрации роутов согласно сигнатуре в уроках;
     - все страницы должны обладать собственным роутом;


Запустить проект: ```npm run start```

```/static/index.html``` - обычная страница

```/static/index-routing.html``` - страница с использования роутинга
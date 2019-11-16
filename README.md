Выполненное тестовое задание загружено на GitHub с помощью [Create React App](https://github.com/facebook/create-react-app).

## Описание тестового задания
Есть 3 кнопки:

    - Success
    - Warning
    - Error

При нажатии на кнопку, справа выскакивает оповещение с соответствующим названием и через 2 секунды исчезает.
Если нажать сразу несколько кнопок или одну несколько раз, оповещения выстраиваются в ряд и каждая через 2 секунды исчезает со сдвигом вверх.

>Как здесь: https://ant.design/components/notification/#header


***

## Варианты запуска

1. Запустить приложение в режиме разработки. (Для просмотра, откройте в браузере [http://localhost:3000](http://localhost:3000))

    ### `npm start`

2. Просмотреть работающее приложение по ссылке:

    ### [NotificationsUsingTypeScript](https://itemka.github.io/NotificationsUsingTypeScript/)

***

## Использованные технологии в проекте

* Проект был создан командой: `npm i create-react-app NotificationsUsingTypeScript --typescript`
* Все данные проверены языком TypeScript
* Использованы как классовые, так и функциональные компоненты
* CSS выполнено ввиде React модулей.<br />
* Reducer создан по методологии **[Ducks](https://github.com/erikras/ducks-modular-redux)**<br />
* Обращение к `state` из компоненты реализовано с помощью HOC (**connect**)<br />
* Добавление/удаление уведомлений реализованы с помощью `thunk`<br />
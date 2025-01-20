document.addEventListener('DOMContentLoaded', () => {
    // Установить начальную тему
    let savedTheme = localStorage.getItem('theme') || 'light';
    let themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) {
        console.warn('Кнопка переключения темы не найдена!');
        return; // Если кнопки нет, завершить выполнение скрипта
    }

    let themeIcon = themeToggle.querySelector('use');

    // Установить начальную тему и иконку
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.setAttribute('href', savedTheme === 'dark' ? 'sprite.svg#icon-dark-mode' : 'sprite.svg#icon-light-mode');

    // Переключение темы
    themeToggle.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Обновить тему
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Обновить иконку
        themeIcon.setAttribute('href', newTheme === 'dark' ? 'sprite.svg#icon-dark-mode' : 'sprite.svg#icon-light-mode');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn"); // Выбираем кнопку по ID

    // Добавляем функцию по клику
    button.addEventListener("click", function() {
        window.location.href = "https://www.youtube.com/shorts/9tIcc7UNqHg?feature=share"; // Укажите нужную ссылку
    });
});

const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger__line');

function toggleBurger() {
  lines.forEach((line) => line.classList.toggle('active'));
}

burger.addEventListener('click', toggleBurger);
document.addEventListener("DOMContentLoaded", function () {
    // Ищем все кнопки "Подробнее" в списке вакансий
    const detailsButtons = document.querySelectorAll('.btn-details');

    // Привязываем обработчик событий для каждой кнопки
    detailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Получаем название вакансии из атрибута data-job
            const jobTitle = button.getAttribute('data-job');

            // Генерируем ссылку на страницу вакансии (в зависимости от названия вакансии)
            let jobPage = '';

            switch(jobTitle) {
                case 'Frontend Developer':
                    jobPage = 'frontend.html';
                    break;
                case 'Backend Developer':
                    jobPage = 'backend.html';
                    break;
                case 'UI/UX Designer':
                    jobPage = 'design.html';
                    break;
            }

            if (jobPage) {
                window.location.href = jobPage;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Обработка кнопки "Вернуться к вакансиям"
    const backToJobsButton = document.querySelector(".btn-back");
    if (backToJobsButton) {
        backToJobsButton.addEventListener("click", function () {
            window.location.href = "job-list.html";
        });
    }

    // Обработка кнопок "Откликнуться"
    const applyButton = document.querySelector(".btn-outline-primary");
    const alreadyAppliedButton = document.querySelector(".already-applied");
    const notification = document.createElement("div");

    notification.id = "notification";
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "#007bff";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.display = "none";
    document.body.appendChild(notification);

    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    const jobTitle = applyButton.getAttribute("data-job");

    // Проверяем, откликнулся ли пользователь на вакансию
    if (appliedJobs.includes(jobTitle)) {
        applyButton.classList.add("d-none");
        alreadyAppliedButton.classList.remove("d-none");
    }

    applyButton.addEventListener("click", function () {
        // Добавляем вакансию в localStorage
        appliedJobs.push(jobTitle);
        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

        // Показываем уведомление
        notification.textContent = `Вы успешно откликнулись на вакансию: ${jobTitle}`;
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);

        // Скрываем кнопку "Откликнуться" и показываем "Вы уже откликнулись"
        applyButton.classList.add("d-none");
        alreadyAppliedButton.classList.remove("d-none");
    });

    alreadyAppliedButton.addEventListener("click", function () {
        alert("Вы уже откликнулись на эту вакансию.");
    });
});
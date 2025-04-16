'use strict'


document.addEventListener('DOMContentLoaded', () => {

    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу

    if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');

        /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем высоту блока/элемента (создание переменной, которая не будет меняться).
        *   3. Проверка условия (навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку): если страница прокручивается.
        *       3.1. Да: Получаем значение насколько прокрутили страницу (создание переменной, которая будет меняться).
        *           3.1.1 Проверка условия (сравниваем высоту элемента и значение прокрученной страницы): если расстояние от верха страницы больше высоты элемента
        *               3.1.1.1. Да: устанавливаем класс модификатора на элемент
        *               3.1.1.2. Нет (если расстояние от верха экрана меньше высоты элемента): удаляем класс модификатора у элемента
        *       3.2. Нет: Конец
        *   4. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */

        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        })

    }



  const favoriteButtons = document.querySelectorAll('.house__favourite');

if (favoriteButtons) {
    console.log('Константа favoriteButtons существует');

    const favoriteCount = document.querySelector('.house__favourite-count');

    favoriteButtons.forEach(button => {
        let isFavorite = false;

        button.addEventListener('click', function () {
            console.log("произошел клик по кнопке избранное");
            isFavorite = !isFavorite;
            
            if (isFavorite) {
                button.classList.add('house__favourite--active');
                // Логика добавления в избранное
                console.log('Добавлено в избранное');
                
            } else {
                button.classList.remove('house__favourite--active');
                // Логика удаления из избранного
                console.log('Удалено из избранного');
            }
        });
    });
}
});


// Получение элементов
const openBtn = document.getElementById('openBooking');
const popup = document.getElementById('bookingForm');
const closeBtn = document.getElementById('closeForm');

// Открытие формы при клике на кнопку
openBtn.addEventListener('click', function(e) {
  e.preventDefault(); // чтобы избежать перехода по ссылке
  popup.style.display = 'flex'; // показываем всплывающее окно
});

// Закрытие формы при клике на кнопку закрытия
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Закрытие формы при клике вне содержимого
window.addEventListener('click', function(e) {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


// Домики
const houseContainer = document.querySelector('.house');
if (houseContainer) {
    // Новый массив цен для домиков (можно менять значения)
    const dataHousePrices = [
        'Цена: 5500 руб./ночь в день рождения -50%',
        'Цена: 8500 руб./ночь',
        'Цена: 12500 руб./ночь'
    ];

    // Находим все элементы с ценами домиков
    const housePrices = houseContainer.querySelectorAll('.house__price-value');
    housePrices.forEach((item, index) => {
        if (dataHousePrices[index]) {
            item.textContent = dataHousePrices[index];
        }
    });
}

// Дополнительные услуги
const servicesContainer = document.querySelector('.additional-services');
if (servicesContainer) {
    // Новый массив цен для дополнительных услуг (можно менять значения)
    const dataServicePrices = [
        'Цена: 3500 руб./час',
        'Цена: 1200 руб./день',
        'Цена: Бесплатно для гостей'
    ];

    // Находим все элементы с ценами услуг
    const servicePrices = servicesContainer.querySelectorAll('.additional-services__price');
    servicePrices.forEach((item, index) => {
        if (dataServicePrices[index]) {
            item.textContent = dataServicePrices[index];
        }
    });
}
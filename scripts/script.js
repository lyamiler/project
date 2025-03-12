'use strict'


document.addEventListener('DOMContentLoaded', () => {
    /* 1. Исключение накладывания контента на хедер при скроле/прокрутке страницы */

    const header = document.querySelector('.header');       // создаем переменную находя блок по классу
    let buttons = document.querySelectorAll('.house__favourite');

    if (header) {                                           // проверяем существование элемента в DOM
        console.log('Константа header существует');


        const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

        document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

            console.log('Страница скролится');

            let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

            if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
                header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
            } else {
                header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
            }

        });
    }



        const favoriteButton = document.querySelector('.house__favourite');

        if (favoriteButton) {
            console.log('Константа favoriteButton существует');

            const favoriteCount = document.querySelector('.house__favourite-count');

            let isFavorite = favoriteButton.classList.contains('house__favourite--active'); // Состояние избранного
            // let count = parseInt(favoriteCount.textContent); // Начальное значение счетчика с приведением строки к числу
            buttons.forEach(button => {
                button.addEventListener('click', function () {
                    console.log("произошел клик по кнопке избранное");
                favoriteButton.classList.add('house__favourite--active'); // Добавляем класс активного состояния

                });
            }
            );
            // Установка начального класса
            // if (isFavorite) {
            //     favoriteButton.classList.add('house__favourite--active'); // Добавляем класс активного состояния
            // } else {
            //     favoriteButton.classList.remove('house__favourite--active'); // Убираем класс активного состояния
            // }
        }
    // Обработчик клика на иконку
    //        favoriteButton.addEventListener('click', () => {
    //            isFavorite = !isFavorite; // Меняем состояние

    //            if (isFavorite) {
    //                count += 1; // Увеличиваем счетчик
    //                favoriteButton.classList.add('house__favourite--active'); // Добавляем класс активного состояния
    //            } else {
    //                count -= 1; // Уменьшаем счетчик
    //                favoriteButton.classList.remove('house__favourite--active'); // Убираем класс активного состояния
    //            }

    //            favoriteCount.textContent = count; // Обновляем счетчик
    //        });
    //    } else {
    //        console.log('Кнопка не найдена');
    //    }

// Получаем все кнопки с классом .house__favourite


const favoriteButtons = document.querySelectorAll('.house__favourite');

// Если кнопки существуют
if (favoriteButtons.length > 0) {
    console.log('Константа favoriteButtons существует');

    // Для каждой кнопки
    favoriteButtons.forEach(button => {
        // Получаем счетчик для этой кнопки (если он существует)
        const favoriteCount = button.closest('.house__favourite').querySelector('.house__favourite-count');

        // Добавляем обработчик события клика
        button.addEventListener('click', function () {
            console.log("произошел клик по кнопке избранное");

            // Проверяем текущее состояние кнопки
            let isFavorite = button.classList.contains('house__favourite--active');

            // Если кнопка не активна, добавляем класс активного состояния
            if (!isFavorite) {
                button.classList.add('house__favourite--active');
            } else {
                // Иначе удаляем класс активного состояния
                button.classList.remove('house__favourite--active');
            }

            
        });
    });
}

});



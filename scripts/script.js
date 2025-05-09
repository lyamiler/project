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
        'Цена: 5500 руб./ночь',
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



// Находим меню
const headerMenu = document.querySelector('.header__menu');

if (headerMenu) {
    // Очищаем текущее меню
    headerMenu.innerHTML = '';

    // Данные для меню
    const menuData = [
        { link: '#about', title: 'О нас' },
        { link: '#hotel', title: 'Наши преимущества' },
        { link: '#house', title: 'Наши услуги' },
        { link: '#booking', title: 'Выбрать дату бронирования' },
        { link: '#reviews', title: 'Отзывы гостей' }
    ];

    // Создаём и добавляем новые пункты меню
    menuData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu__item';
        const a = document.createElement('a');
        a.className = 'menu__link';
        a.href = item.link;
        a.textContent = item.title;
        li.appendChild(a);
        headerMenu.appendChild(li);
    });
}





    const cardsImages = document.querySelector('.images');
    // if (!cardsImages) return;
  
    const cardListImages = cardsImages.querySelector('.images__list');
    // if (!cardListImages) return;
  
    const apiUrl = 'images.json';
  
    // Функция создания карточки с двумя изображениями
    const createCard = (imageUrls, imageAlt, imageWidth) => {
      // Создаём элемент li
      const li = document.createElement('li');
      li.className = 'images__item';
      li.style.cursor = 'pointer';
  
      // Создаём два img
      const img1 = document.createElement('img');
      img1.className = 'images__picture';
      img1.src = imageUrls[0];
      img1.alt = imageAlt;
      img1.width = imageWidth;
  
      const img2 = document.createElement('img');
      img2.className = 'images__picture';
      img2.src = imageUrls[1];
      img2.alt = imageAlt;
      img2.width = imageWidth;
      img2.style.display = 'none';
  
      // Добавляем изображения в li
      li.appendChild(img1);
      li.appendChild(img2);
  
      // Логика переключения изображений по клику
      li.addEventListener('click', () => {
        if (img1.style.display !== 'none') {
          img1.style.display = 'none';
          img2.style.display = '';
        } else {
          img1.style.display = '';
          img2.style.display = 'none';
        }
      });
  
      return li;
    };
  
    // Загрузка данных из images.json
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        return response.json();
      })
      .then(data => {
        // Очищаем список перед добавлением
   
        cardListImages.innerHTML = '';
  
        data.forEach(item => {
        
          // Проверяем, что есть массив URL и минимум 2 изображения
          console.log(item.url && item.url.length >= 2);
          if (item.url && item.url.length >= 2) {
            const alt = item.alt || '';
            const width = item.width || 300; // по умолчанию 300
            const card = createCard(item.url, alt, width);
         
            cardListImages.appendChild(card);
          }
        });
      })
      .catch(error => {
        console.error('Ошибка:', error);
        cardListImages.textContent = 'Не удалось загрузить изображения. Включите Go Live';
      });








    const preloader = document.querySelector(".preloader");
    const content = document.querySelector(".content");
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            // Показываем контент
            content.style.display = "block";

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }





// 3.7


    const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      // Добавьте breakpoints при необходимости
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });



    const list = document.querySelector('.hotel__list');
const items = Array.from(list.querySelectorAll('.hotel__item'));
const swiperWrapper = document.createElement('div');

swiperWrapper.className = 'swiper-wrapper';
items.forEach(item => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = item.innerHTML;
  swiperWrapper.appendChild(slide);
});

list.innerHTML = '';
list.classList.add('swiper');
list.appendChild(swiperWrapper);
list.insertAdjacentHTML('beforeend', '<div class="swiper-pagination"></div>');





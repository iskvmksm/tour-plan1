window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  ymaps.ready(init);
  function init() {
    // Создание карты.
    let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.040590, 73.281057],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16
    }, {
      autoFitToViewport: 'always'
    });
  };

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    watchOverflow: false,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  let menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  let modalButton = $('[data-toggle="modal"]');
  let closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  $(document).on('keyup', function (event) {
    // Проверяем современное свойство key и старое keyCode (для совместимости)
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeModal();
    }
  });

  function openModal() {
    let targetModal = $(this).attr("data-href");
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    if (event && event.type === 'click') {
      event.preventDefault();
    }
    $('.modal__overlay--visible').removeClass('modal__overlay--visible');
    $('.modal__dialog--visible').removeClass('modal__dialog--visible');
  }
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не короче 2 букв",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Телефон обязателен",
        },
      },

    });
  })
});



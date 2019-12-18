
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    grabCursor: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  })

  // To initialize a new excerpt content block, use:
  // Excerpt.init( '.class' || '#id' || '[data-attribute]' );

  if (!window.Excerpt) {
    window.Excerpt = {
      createExcerpt: function createExcerpt (excerpt) {
        var excerptElement = excerpt.querySelector('[data-excerpt-content]');

        if (excerptElement.innerText.length > 250) {
          var contentText = excerptElement.innerHTML;
          var excerptText = excerptElement.innerText.substr(0, 250);

          if (excerptText.charAt(excerptText.length - 1) === '.') {
            excerptText = excerptText.substr(0, excerptText.length - 1);
          }

          excerptText += '...';
          contentText += '<a href="#" data-content-hide>Read Less</a>';

          var contentContainer = document.createElement('h3');
          contentContainer.classList.add('content');
          contentContainer.innerHTML = contentText;

          var excerptContainer = document.createElement('h3');
          excerptContainer.classList.add('excerpt');
          excerptContainer.innerHTML = excerptText;

          excerptElement.innerHTML = '';
          excerptElement.appendChild(excerptContainer);
          excerptElement.appendChild(contentContainer);

          var show = excerpt.querySelector('[data-content-show]');
          var hide = excerpt.querySelector('[data-content-hide]');

          excerpt.setAttribute('data-excerpt', 'hide');
          // we're not using a 'click to read more'
          // show.addEventListener('click', function(event) {
          //   event.preventDefault();
          //   excerpt.setAttribute('data-excerpt', 'show');
          // });

          hide.addEventListener('click', function(event) {
            event.preventDefault();
            excerpt.setAttribute('data-excerpt', 'hide');
          });
        }
      },

      init: function init (selector) {
        var excerpts;

        if (selector) {
          excerpts = this.excerpts = document.querySelectorAll(selector);
        } else {
          excerpts = this.excerpts = document.querySelectorAll('[data-excerpt]');
        }

        for (var i = 0; i < excerpts.length; i++) {
          var excerpt = excerpts[i];
          this.createExcerpt(excerpt);
        }
      }
    }
  }

  Excerpt.init('.truncate');

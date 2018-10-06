    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

const slidePhotos = document.querySelectorAll('.slide-in');

function checkScroll(e) {
    slidePhotos.forEach(slidePhoto => {
        const slideInAt = (window.scrollY + window.innerHeight) - slidePhoto.height / 2;
        const slideBottom = slidePhoto.offsetTop + slidePhoto.height;
        const isHalfShown = slideInAt > slidePhoto.offsetTop;
        const isNotScrolledOver = window.scrollY < slideBottom;
        
        if (isHalfShown && isNotScrolledOver) {
            slidePhoto.classList.add('active');
        } else {
            slidePhoto.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkScroll));
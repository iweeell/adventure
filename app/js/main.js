$(function () {

  $('.about__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg"><path d="M11.4187 0.393799L0.8125 11L11.4187 21.6063L13.1875 19.8388L4.3475 11L13.1875 2.1613L11.4187 0.393799Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg"><path d="M2.58125 21.6062L13.1875 11L2.58125 0.3937L0.8125 2.1612L9.6525 11L0.8125 19.8387L2.58125 21.6062Z"/></svg></button>',
  });


});

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;


      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        animItem.classList.remove('active');
      }
    }
  }
  function offset(e) {
    const rect = e.getBoundingClientRect(),
      scrollLeft = window.pageOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
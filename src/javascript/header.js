let lastScrollTop = 0;
let header = document.querySelector('header');
let menuButton = document.querySelector('.header__content--menu');
let paneMenu = document.querySelector('.header__content--pane-menu');

// Chờ tài liệu DOM tải hoàn toàn trước khi tương tác với nó
document.addEventListener('DOMContentLoaded', () => {
  header = document.querySelector('header');
  menuButton = document.querySelector('.header__content--menu');
  paneMenu = document.querySelector('.header__content--pane-menu');

  if (header && menuButton && paneMenu) {
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Cuộn xuống, ẩn header
        header.classList.add('hide');
      } else {
        // Cuộn lên, hiện header
        header.classList.remove('hide');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh vị trí cuộn âm
    });

    menuButton.addEventListener('click', () => {
      paneMenu.style.left = paneMenu.style.left === '0px' ? '-350px' : '0px';
    });
  } else {
    console.error('Một hoặc nhiều phần tử cần thiết không tìm thấy.');
  }
});

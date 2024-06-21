let lastScrollTop = 0;
const header = document.querySelector('header');

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

// Hiển thị menu khi click
document.querySelector('.header__content--menu').addEventListener('click', () => {
  const paneMenu = document.querySelector('.header__content--pane-menu');
  paneMenu.style.left = paneMenu.style.left === '0px' ? '-350px' : '0px';
});

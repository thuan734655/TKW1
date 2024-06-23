let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document
  .querySelector(".header__content--menu")
  .addEventListener("click", () => {
    const paneMenu = document.querySelector(".header__content--pane-menu");
    paneMenu.style.left = paneMenu.style.left === "0px" ? "-350px" : "0px";
  });

document.addEventListener("DOMContentLoaded", function () {
  const navItemMain = document.querySelector("#Khoa-hoc");
  const dropdownMenu = document.querySelector(".header__content--subNav");
  const navItemPane = document.querySelector("#Khoa-hoc-pane-menu");
  const paneMenu = document.querySelector(".header__content--pane-menu");

  var isHide = false;
  var isActive = false;

  if (navItemMain && dropdownMenu) {
    navItemMain.addEventListener("click", function (event) {
      event.preventDefault();

      if (!isHide) {
        dropdownMenu.style.display = "block";
        isHide = true;
      } else {
        dropdownMenu.style.display = "none";
        isHide = false;
      }
    });
  } else {
    console.error("Element #Khoa-hoc or .header__content--subNav not found");
  }

  function event_pane_menu() {
    if (!isActive) {
      paneMenu.innerHTML =
        '<ul><li><a href="./index_home.html">Trang chủ</a></li><li><a href="#" id="Khoa-hoc-pane-menu">Khóa học</a></li><li><a href="./trangchu_Toan.html">Toán</a></li><li><a href="./trangchu_ly.html">Lý</a></li><li><a href="./trangchu_hoa.html">Hóa</a></li><li><a href="./blog.html">Blog</a></li><li><a href="./quiiz.html">Luyện trắc nhiệm</a></li><li><a href="./index.html">Đăng xuất</a></li></ul>';
      isActive = true;
    } else {
      paneMenu.innerHTML =
        '<ul><li><a href="./index_home.html">Trang chủ</a></li><li><a href="#" id="Khoa-hoc-pane-menu">Khóa học</a></li><li><a href="./blog.html">Blog</a></li><li><a href="./quiiz.html">Luyện trắc nhiệm</a></li><li><a href="./index.html">Đăng xuất</a></li></ul>';
      isActive = false;
    }
    const newNavItemPane = document.querySelector("#Khoa-hoc-pane-menu");
    if (newNavItemPane) {
      newNavItemPane.addEventListener("click", function (event) {
        event.preventDefault();
        event_pane_menu();
      });
    }
  }

  if (navItemPane && paneMenu) {
    navItemPane.addEventListener("click", function (event) {
      event.preventDefault();
      event_pane_menu();
    });
  } else {
    console.error(
      "Element #Khoa-hoc-pane-menu or .header__content--pane-menu not found"
    );
  }
});

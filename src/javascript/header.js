let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Cuộn xuống, ẩn header
    header.classList.add("hide");
  } else {
    // Cuộn lên, hiện header
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh vị trí cuộn âm
});

// Hiển thị menu khi click
document
  .querySelector(".header__content--menu")
  .addEventListener("click", () => {
    const paneMenu = document.querySelector(".header__content--pane-menu");
    paneMenu.style.left = paneMenu.style.left === "0px" ? "-350px" : "0px";
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Select elements for both main nav and pane menu
    const navItemMain = document.querySelector("#Khoa-hoc");
    const dropdownMenu = document.querySelector(".header__content--subNav");
    const navItemPane = document.querySelector("#Khoa-hoc-pane-menu");
    const paneMenu = document.querySelector(".header__content--pane-menu");
  
    // Variables to keep track of visibility states
    var isHide = false;
    var isActive = false;
  
    if (navItemMain && dropdownMenu) {
      navItemMain.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn chuyển hướng trang khi click
  
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
  
    function togglePaneMenu() {
      if (!isActive) {
        paneMenu.innerHTML = '<ul><li><a href="./index.html">Trang chủ</a></li><li><a href="#" id="Khoa-hoc-pane-menu">Khóa học</a></li><li><a href="./toan.html">Toán</a></li><li><a href="./ly.html">Lý</a></li><li><a href="./hoa.html">Hóa</a></li><li><a href="./blog.html">Blog</a></li><li><a href="./quiiz.html">Luyện trắc nhiệm</a></li><li><a href="./login.html">Đăng xuất</a></li></ul>';
        isActive = true;
      } else {
        paneMenu.innerHTML = '<ul><li><a href="./index.html">Trang chủ</a></li><li><a href="#" id="Khoa-hoc-pane-menu">Khóa học</a></li><li><a href="./blog.html">Blog</a></li><li><a href="./quiiz.html">Luyện trắc nhiệm</a></li><li><a href="./login.html">Đăng xuất</a></li></ul>';
        isActive = false;
      }
      // Re-attach the click event to the newly created element
      const newNavItemPane = document.querySelector("#Khoa-hoc-pane-menu");
      if (newNavItemPane) {
        newNavItemPane.addEventListener("click", function (event) {
          event.preventDefault();
          togglePaneMenu();
        });
      }
    }
  
    if (navItemPane && paneMenu) {
      navItemPane.addEventListener("click", function (event) {
        event.preventDefault();
        togglePaneMenu();
      });
    } else {
      console.error("Element #Khoa-hoc-pane-menu or .header__content--pane-menu not found");
    }
  });
  
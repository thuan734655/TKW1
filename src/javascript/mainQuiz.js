var profile = document.querySelector(".section-profile");
var iconProfile = document.querySelector(".header__content--icon-profile");

var isHide = false;

iconProfile.addEventListener("click", () => {
  if (!isHide) {
    profile.style.display = "block";
    isHide = true;
  } else {
    profile.style.display = "none";
    isHide = false;
  }
});

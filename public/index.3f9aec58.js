let e=0;const t=document.querySelector("header");window.addEventListener("scroll",()=>{let n=window.pageYOffset||document.documentElement.scrollTop;n>e?t.classList.add("hide"):t.classList.remove("hide"),e=n<=0?0:n}),document.querySelector(".header__content--menu").addEventListener("click",()=>{let e=document.querySelector(".header__content--pane-menu");e.style.left="0px"===e.style.left?"-350px":"0px"});
//# sourceMappingURL=index.3f9aec58.js.map

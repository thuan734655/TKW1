var listItem = document.querySelectorAll(".animate-home");

listItem.forEach((item) => {
    window.addEventListener("scroll", () => {
        // tra ve khoang cach tu top cua phan tu toi viewport
       var elementTop = item.getBoundingClientRect().top;
       var windowHeight = window.innerHeight;
   
       if (elementTop < windowHeight * 0.85) {
           item.classList.add("slide-up");
       }
    });
}); 

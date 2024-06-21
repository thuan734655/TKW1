 var pane_menu =  document.querySelector('.header__content--pane-menu');
 var checkPerform = false;
document.querySelector('.header__content--menu').addEventListener('click', ()=> {
    if(checkPerform == false) {
        pane_menu.style.left = '0px';
        checkPerform = true;
    }
    else {
        pane_menu.style.left = '-300px';
        checkPerform = false;  
    }
})
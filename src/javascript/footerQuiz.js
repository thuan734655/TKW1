var arrows = document.querySelectorAll('.right-content--iconArrow');
var lists = document.querySelectorAll('.right-content--list');

Array.from(arrows).forEach((arrow, index) => {
    var list = lists[index]; 
    var isHide = false; 

    arrow.addEventListener('click', () => {
        if (!isHide) {
            list.style.display = 'block';
            isHide = true;
        } else {
            list.style.display = 'none';
            isHide = false;
        }
    });
});

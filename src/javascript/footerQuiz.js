var arrows = document.querySelectorAll('.right-content--iconArrow');
var lists = document.querySelectorAll('.right-content--list');

// Sử dụng Array.from để chuyển NodeList thành Array và sau đó sử dụng forEach để lặp qua tất cả các phần tử arrow
Array.from(arrows).forEach((arrow, index) => {
    var list = lists[index]; // Lấy phần tử list tương ứng với arrow hiện tại
    var isHide = false; // Trạng thái riêng cho từng phần tử

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

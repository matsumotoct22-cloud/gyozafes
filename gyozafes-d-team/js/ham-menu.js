// ハンバーガーメニュー
let hamMenu = document.getElementById('ham-menu');
console.log(hamMenu);

let hamMenuBtn = document.querySelector('.ham-menu-btn');
console.log(hamMenuBtn);

hamMenuBtn.addEventListener('click', function () {
    hamMenu.classList.toggle('open');
});


let hamMenuLink = document.querySelectorAll('.ham-menu-cont a');
console.log(hamMenuLink);

hamMenuLink.forEach(function (link) {
    link.addEventListener('click', function () {
        hamMenu.classList.remove('open');
    });
});


$('.move-img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2
        }
    }]
});

$('.move-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1
        }
    }]
});

window.onload = function() {
    function changeBackground() {
        let backgroundImages = ["../img/banners/slide/1010.jpg", "../img/banners/slide/2020.jpg", "../img/banners/slide/3030.jpg"];
        let buttons = document.querySelectorAll('button');
        function initSlide(i) {
            let sectionSlide = document.querySelector('.section-7');
            sectionSlide.style.backgroundImage = `url(${backgroundImages[i]})`;
        };
        buttons.forEach((e, i) => {
            e.addEventListener('click', function() {
                initSlide(i);
            });
        });
    };
    changeBackground();
};
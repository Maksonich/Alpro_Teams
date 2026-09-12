$(function() {
        // burger menu
        $(".burger-menu").on("tap click", function () { 
                $(this).toggleClass("cross");
                $('.burger').toggleClass("cross")
                $('body').toggleClass("");
                $('.nav-left ul').toggleClass("active-menu");
                $('.nav-none').toggleClass("nav-yes");
            });

        //     review slider
        $('#slider-review').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 550,
                    settings: {
                        arrows: false,
                    }
                  },
              
                ]
              });


              // modal window principal title
              $('.popup .close').click(function(){
                $('.popup').removeClass('open');
                $('#wrapper').removeClass('popup');
                });
                $('.popup .blocker').click(function(){
                $('.popup').removeClass('open');
                $('#wrapper').removeClass('popup');
                });
                //homepage fv popup_catalog
                $('#login, #loginTwo').click(function(){
                $('.popup_catalog').addClass('open');
                $('#wrapper').addClass('popup');
                });


                const objects = document.querySelectorAll('.object');

        objects.forEach(object => {

            object.addEventListener('mouseenter', function () {

                // Получаем группу объекта
                const group = this.dataset.group;

                // Находим все объекты этой группы
                const groupObjects = document.querySelectorAll(
                    `.object[data-group="${group}"]`
                );

                // Красим всю группу
                groupObjects.forEach(item => {
                    item.classList.add('active');
                });

            });


            object.addEventListener('mouseleave', function () {

                const group = this.dataset.group;

                const groupObjects = document.querySelectorAll(
                    `.object[data-group="${group}"]`
                );

                // Возвращаем исходный цвет
                groupObjects.forEach(item => {
                    item.classList.remove('active');
                });

            });

        });
});



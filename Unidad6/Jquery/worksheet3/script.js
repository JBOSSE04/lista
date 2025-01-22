window.onload = ()=>{
    //ejer1
    $('td:gt(2)').css('background-color', 'red');
    $('td:lt(2)').css('background-color', 'blue');

    //ejer2
    $('p:contains("eu")').css('background-color', 'red');

     // act2
    $('p:contains("eu")').css('background-color', 'red');

     // act3
    $('td:empty').css('background-color', 'yellow');

    // act4
    $('#foco').click(function() {
         $('#texto').focus();
    });
    $('#nofoco').click(function() {
      $('#texto').blur();
    });
    // act5  + Math.floor(Math.random()*16777215).toString(16)
    $('#color p').click(function() {
        $('#color p').css('color', 'red');
    });
    

    //act6
    let clicks = 0;
    $('#aumento').click(function() {
        if (clicks < 9) {
            let currentSize = parseInt($(this).css('font-size'));
            $(this).css('font-size', (currentSize + 5) + 'px');
            clicks++;
        }
    });

}






   

    

    

    // Ejercicio 7: Cola de animaciones
    $('#startAnimation').click(function() {
        const div = $('#animationDiv');
        div.animate({width: '200px'})
           .animate({height: '200px'})
           .animate({opacity: 0.5})
           .animate({borderRadius: '50%'});
    });
    $('#stopAnimation').click(function() {
        $('#animationDiv').stop(true);
    });

    // Ejercicio 8: Fade con diferentes tiempos
    $('#startFade').click(function() {
        $('.fade-box').eq(0).fadeIn('slow');
        $('.fade-box').eq(1).fadeIn('fast');
        $('.fade-box').eq(2).fadeIn(800);
        $('.fade-box').eq(3).fadeIn(2000);
        $('.fade-box').eq(4).fadeIn(4000);
    });

    // Ejercicio 9: Animación compleja
    $('#startComplexAnim').click(function() {
        $('#animation-box')
            .show()
            .animate({left: '200px'})
            .css('background-color', 'blue')
            .animate({top: '-50px', opacity: 0});
    });
    $('#stopComplexAnim').click(function() {
        $('#animation-box').stop(true).css({
            left: '0',
            top: '0',
            opacity: 1,
            display: 'none'
        });
    });

    // Ejercicio 10: Seguridad de contraseña
    $('#passwordField').on('input', function() {
        const length = $(this).val().length;
        let message = '';
        let color = '';
        
        if (length < 5) {
            message = 'No segura';
            color = 'red';
        } else if (length < 8) {
            message = 'Medianamente segura';
            color = 'orange';
        } else {
            message = 'Segura';
            color = 'green';
        }
        
        $('#passwordStrength').text(message).css('color', color);
    });

    // Ejercicio 11: Sistema de Tips
    $('.tip').hover(
        function() {
            const tipText = $(this).data('tip');
            $(this).find('.tiptext').css('visibility', 'visible');
        },
        function() {
            $(this).find('.tiptext').css('visibility', 'hidden');
        }
    );

    // Ejercicio 12: Menú con efecto persiana
    $('.menu-item').hover(
        function() {
            $(this).animate({backgroundColor: '#ffffff'}, 200);
        },
        function() {
            $(this).animate({backgroundColor: '#f0f0f0'}, 200);
        }
    );

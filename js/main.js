// GIF JS //

$(document) .ready (function() {
   
    // GLOBAL VARIABLES
    var $input = $('#input');
    var $submit = $('#submit');
    var apiKey = 'JKzY4s21Esl1KnHsuVnA7UDY1awMk3Sd';
    var $imgBody = $('.img-body')
    
    // GET INPUT VALUE WHEN THE USER PRESSES SUBMIT
    
    $submit.on('click' , function (event) {
        event.preventDefault();
        $imgBody.empty();
        var inputVal = $input.val();
        getGiphy(inputVal);
        $input.val(' ');
        
    });
    
    // MAKE A GET REQUEST TO THE GIPHY API WITH THE INPUT VALUE
    function getGiphy(inputVal) {
        $.get('http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' + apiKey + '&limit=12')
            .done(function (data) {
                for(var i = 0; i <= 12; i++) {
                var gifImg = data.data[i].images.original.url; 
                createBox(gifImg); 
                }
            });
    };
    
    function createBox(gifImg) {
        var $newImg = $('<img>');
        $newImg.attr('src', gifImg);
        $newImg.addClass('img-box');
        $imgBody.append($newImg);
    
    }
    
    });

// all the other jQuery fun transitions and effects! enjoy :)

// HEARTS BUTTON / HOME PAGE / PORTFOLIO PAGE
$(document).ready(function() {
    $("#slideUp").hover(function() {
    $(this).slideUp(1000).slideDown(1000).fadeOut(1000).fadeIn(1000).toggle;

    },
    function () {
        $(this).hide();
});

});

// Greetings, Salutations!
$(document).ready(function() {
    $("#show").hover(function() {
    $(this).fadeOut(1000).fadeIn(1000);
    },
    function () {
        $(this).hide();
    });
});

// INDEX / HOME PAGE
$(document).ready(function() {
    $("#fadeIn").hover(function() {
    $(this).fadeOut(1000).fadeIn(1000).toggle;

    },
    function() {
     $(this).css("color", "blue");
      //  $(this).slideUp();
    });
});

// HOMEPAGE BUTTON - HELLO GORGEOUS
$(document).ready(function(){
    $("#button").click(function() {
    $(this).css("color", "pink");
        alert ("Hi Gorgeous!");
    });   
   });
   

// ABOUT ME - HELLO BEAUTIFUL
$(document).ready(function() {
    $("#toggle").hover(function() {
    $(this).slideUp(2000).slideDown(2000).fadeOut(1000).fadeIn(1000).toggle;
    $(this).css('color', 'blue');
});
});

// MODULE - GIT HUB PAGE!
$(document).ready(function() {
    $("#fadeOut").hover(function() {
    $(this).css({
    opacity: '0.3',
    color:'black', 
    fontWeight:'bold',
    });
});
   });

// MODULE BORDER WRAP - LIST ITEMS 2020
$(document).ready(function() {
    $('ul#list li:first').css('color','purple');
    $('ul#list li:even').css('background-color', 'plum');
    $('ul#list li:odd').css('color','orangered');
    $('ul#list li:nth-child(2n)').css('list-style', 'none');
});

// COLORED BUTTONS + TEXT-AREA
$(document).ready(function() {
    $(':text').fadeOut(1000).fadeIn(1000)();
    $(':button').fadeOut(1000).fadeIn(1000)();
    $(':submit').toggle();
});

// LINKS TO USER STORIES
$(document).ready(function(){
    $("#UserStories").click(function() {
        $(this).css("color", "paleviolet");
        alert ("user stories");
    });   
   });

// LINKS TO EXTERNAL WEBSITES
$(document).ready(function() {
    $('[href]').css('color','fuschia');
    $('a[href="http://github.com"]').css('color','orange');
    $('a[href="index.html"]').css('color','greenyellow');
});

// wireframe !
$(document).ready(function() {
    $("#sunshine").hover(function() {
    $(this).fadeOut(1000).fadeIn(1000);
    });
});
$(document).ready(function() {
    $("#rainbow").hover(function() {
        $(this).fadeOut(1000).fadeIn(1000);
    });
});

// PORTFOLIO //

$(document).ready(function() {
    $("#portfolio").hover(function() {
    $(this).slideUp(2000).slideDown(2000).fadeOut(1000).fadeIn(1000).toggle;
    $(this).css('color', 'blue');
});
});

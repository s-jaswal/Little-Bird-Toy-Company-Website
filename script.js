// Generate object cards

const products = [
    {
        name: "Blocks",
        rating: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <!-- Font Awesome Icon Library -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Star Rating</title>
      <style>
          .checked {
              color: orange;
          }
           .star-rating {
              display: flex;
              justify-content: flex-start;
              align-items: center;
          }
          .fa-star {
              margin: 0 -2px;
              padding: 0 1px; 
          }
      </style>
  </head>
  <body>
  
      
      <div class="star-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
      </div>
  
  </body>
  </html>
  `,
        name: "Train",
        price: "$9.99",
        images: ["product images/train1.jpg", "product images/train5.jpg", "product images/train7.jpg"],
        id: "toy1",
        description: " Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood.",
        ageRange: "3+",
    },
    {
        name: "Plane",
        rating: "5",
        price: "$4.99",
        ageRange: "Toddlers",
        images: ["product images/plane1.jpg", "product images/plane3.jpg", "product images/plane2.jpg"],
        id: "toy2",
        description: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller.",
        rating: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Font Awesome Icon Library -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Star Rating</title>
          <style>
              .checked {
                  color: orange;
              }
               .star-rating {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
              }
              .fa-star {
                  margin: 0 -2px;
                  padding: 0 1px; 
              }
          </style>
      </head>
      <body>
      
          
          <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
          </div>
      
      </body>
      </html>
      `
    },
    {
        name: "Car",
        rating: "5",
        price: "$9.99",
        ageRange: "All Ages",
        images: ["product images/wooden car.jpg", "product images/car2.jpg", "product images/car4.jpg"],
        id: "toy3",
        description: "Stylish toy car ready for thrilling races and adventurous journeys for young kids.",
        rating: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Font Awesome Icon Library -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Star Rating</title>
          <style>
              .checked {
                  color: orange;
              }
               .star-rating {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
              }
              .fa-star {
                  margin: 0 -2px;
                  padding: 0 1px; 
              }
          </style>
      </head>
      <body>
      
          
          <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
          </div>
      
      </body>
      </html>
      `,

    },
    {
        name: "Boat",
        rating: "5",
        price: "$12.99",
        ageRange: "All ages",
        images: ["product images/boat2.jpg", "product images/boat9.webp", "product images/boat10.jpg"],
        id: "toy4",
        description: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.",
        rating: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Font Awesome Icon Library -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Star Rating</title>
          <style>
              .checked {
                  color: orange;
              }
               .star-rating {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
              }
              .fa-star {
                  margin: 0 -2px;
                  padding: 0 1px; 
              }
          </style>
      </head>
      <body>
      
          
          <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
          </div>
      
      </body>
      </html>
      `
    },
{
    name: "Wooden Block Set",
        rating: "5",
            price: "$67.99",
                ageRange: "3+",
                    images: ["product images/wbs.jpg","product images/wbs8.jpg", "product images/wbs11.avif"],
                        id: "toy5",
                            description: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).",
                                rating: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Font Awesome Icon Library -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Star Rating</title>
          <style>
              .checked {
                  color: orange;
              }
               .star-rating {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
              }
              .fa-star {
                  margin: 0 -2px;
                  padding: 0 1px; 
              }
          </style>
      </head>
      <body>
      
          
          <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
          </div>
      
      </body>
      </html>
      `
},
{
    name: "Wooden Duck",
        rating: "5",
            price: "$9.00",
                ageRange: "1+",
                    images: ["product images/wooden duck.webp", "product images/wdt88.webp", "product images/wdts66.jpg"],
                        id: "toy6",
                            description: "The wooden duck toy is a charming and durable play companion for young children. Handcrafted from smooth, natural wood, it features vibrant colors and a friendly design that sparks imaginative play.",

                                rating: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <!-- Font Awesome Icon Library -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Star Rating</title>
          <style>
              .checked {
                  color: orange;
              }
               .star-rating {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
              }
              .fa-star {
                  margin: 0 -2px;
                  padding: 0 1px; 
              }
          </style>
      </head>
      <body>
      
          
          <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
          </div>
      
      </body>
      </html>
      ` }
];







function generateProductCards() {
    const productCardsContainer = document.getElementById("card");

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4");
        card.classList.add("col-md-6");
        card.classList.add("col-sm-12");
        card.classList.add("mt-3");
        card.classList.add("h-100");

        card.innerHTML = `
              <div class="card border bcolor rounded">
              
  
  
  
  
  
              <div = class="card-img-top">
              <div id="${product.id}" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="0" class="active indicolors" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="1" class= "indicolors" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#${product.id}" data-bs-slide-to="2" class= "indicolors" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="imgsize" src ="${product.images[0]}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img class="imgsize" src="${product.images[1]}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img class="imgsize" src = "${product.images[2]}" class="d-block w-100" alt="...">
                </div>
              </div>
            
             
            </div>
  
              </div>
  
  
  
  
  
  
  
  
                  <div class="card-header color" style="background-color: #7F5539;"> 
                      ${product.name} 
                  </div>
                  <div class="card-body" style="background-color: ;">
                      
                      <p>Rating: ${product.rating}</p>
                      <p>price: ${product.price}</p>
                      <p>Description: ${product.description}</p>
                     <p>Age Range: ${product.ageRange}</p>
                  </div>
              </div>
          `;

        productCardsContainer.appendChild(card);
    });
}

window.onload = generateProductCards;





/*----------------------------------------------------------------------------------------------------------------------*/
/* book an appointment script start */
$(document).ready(function () {

    /*============================================
    Page Preloader
    ==============================================*/

    $(window).load(function () {
        $('#page-loader').fadeOut(500, function () {
            loadGmap();
        });

    })

    /*============================================
    Header
    ==============================================*/

    $('#home').height($(window).height() + 50);

    $.backstretch('assets/images/header-bg.jpg');

    $(window).scroll(function () {
        var st = $(this).scrollTop(),
            wh = $(window).height(),
            sf = 1.2 - st / (10 * wh);

        $('.backstretch img').css({
            'transform': 'scale(' + sf + ')',
            '-webkit-transform': 'scale(' + sf + ')'
        });

        $('#home .container').css({ 'opacity': (1.4 - st / 400) });

        if ($(window).scrollTop() > ($(window).height() + 50)) {
            $('.backstretch').hide();
        } else {
            $('.backstretch').show();
        }

    });

    var st = $(this).scrollTop(),
        wh = $(window).height(),
        sf = 1.2 - st / (10 * wh);

    $('.backstretch img').css({
        'transform': 'scale(' + sf + ')',
        '-webkit-transform': 'scale(' + sf + ')'
    });

    $('#home .container').css({ 'opacity': (1.4 - st / 400) });


    /*============================================
    Navigation Functions
    ==============================================*/
    if ($(window).scrollTop() < ($(window).height() - 50)) {
        $('#main-nav').removeClass('scrolled');
    }
    else {
        $('#main-nav').addClass('scrolled');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() < ($(window).height() - 50)) {
            $('#main-nav').removeClass('scrolled');
        }
        else {
            $('#main-nav').addClass('scrolled');
        }
    });

    /*============================================
    ScrollTo Links
    ==============================================*/
    $('a.scrollto').click(function (e) {
        $('html,body').scrollTo(this.hash, this.hash, { gap: { y: -70 } });
        e.preventDefault();

        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    /*============================================
    Skills
    ==============================================*/
    $('.skills-item').each(function () {
        var perc = $(this).find('.percent').data('percent');

        $(this).data('height', perc);
    })

    $('.touch .skills-item').each(function () {
        $(this).css({ 'height': $(this).data('height') + '%' });
    })

    $('.touch .skills-bars').css({ 'opacity': 1 });

    /*============================================
    Project thumbs - Masonry
    ==============================================*/
    $(window).load(function () {

        $('#projects-container').css({ visibility: 'visible' });

        $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            //columnWidth:370,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 25
        });

        scrollSpyRefresh();
        waypointsRefresh();

    });

    /*============================================
    Filter Projects
    ==============================================*/
    $('#filter-works a').click(function (e) {
        e.preventDefault();

        if ($('#project-preview').hasClass('open')) {
            closeProject();
        }

        $('#filter-works li').removeClass('active');
        $(this).parent('li').addClass('active');

        var category = $(this).attr('data-filter');

        $('.project-item').each(function () {
            if ($(this).is(category)) {
                $(this).removeClass('filtered');
            }
            else {
                $(this).addClass('filtered');
            }

            $('#projects-container').masonry('reload');
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*============================================
    Project Preview
    ==============================================*/
    $('.project-item').click(function (e) {
        e.preventDefault();

        var elem = $(this),
            title = elem.find('.project-title').text(),
            descr = elem.find('.project-description').html(),
            slidesHtml = '<ul class="slides">',
            elemDataCont = elem.find('.project-description');

        slides = elem.find('.project-description').data('images').split(',');

        for (var i = 0; i < slides.length; ++i) {
            slidesHtml = slidesHtml + '<li><img src=' + slides[i] + ' alt=""></li>';
        }

        slidesHtml = slidesHtml + '</ul>';

        $('#project-title').text(title);
        $('#project-content').html(descr);
        $('#project-slider').html(slidesHtml);

        openProject();

    });

    function openProject() {

        $('#project-preview').addClass('open');
        $('.masonry-wrapper').animate({ 'opacity': 0 }, 300);

        setTimeout(function () {
            $('#project-preview').slideDown();
            $('.masonry-wrapper').slideUp();

            $('html,body').scrollTo(0, '#filter-works',
                {
                    gap: { y: -20 },
                    animation: {
                        duration: 400
                    }
                });

            $('#project-slider').flexslider({
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>',
                animation: 'slide',
                slideshowSpeed: 3000,
                useCSS: true,
                controlNav: true,
                pauseOnAction: false,
                pauseOnHover: true,
                smoothHeight: false,
                start: function () {
                    $(window).trigger('resize');
                    $('#project-preview').animate({ 'opacity': 1 }, 300);
                }
            });

        }, 300);

    }

    function closeProject() {

        $('#project-preview').removeClass('open');
        $('#project-preview').animate({ 'opacity': 0 }, 300);

        setTimeout(function () {
            $('.masonry-wrapper').slideDown();
            $('#project-preview').slideUp();

            $('#project-slider').flexslider('destroy');
            $('.masonry-wrapper').animate({ 'opacity': 1 }, 300);


        }, 300);

        setTimeout(function () {
            $('#projects-container').masonry('reload');
        }, 500)
    }

    $('.close-preview').click(function () {
        closeProject();
    })

    /*============================================
    Twitter
    ==============================================*/
    var tweetsLength = $('#twitter-slider').data('tweets-length'),
        widgetID = $('#twitter-slider').data('widget-id');

    twitterFetcher.fetch(widgetID, 'twitter-slider', tweetsLength, true, false, true, '', false, handleTweets);

    function handleTweets(tweets) {

        var x = tweets.length,
            n = 0,
            tweetsHtml = '<ul class="slides">';

        while (n < x) {
            tweetsHtml += '<li>' + tweets[n] + '</li>';
            n++;
        }

        tweetsHtml += '</ul>';
        $('#twitter-slider').html(tweetsHtml);

        $('.twitter_reply_icon').html("<i class='fa fa-reply'></i>");
        $('.twitter_retweet_icon').html("<i class='fa fa-retweet'></i>");
        $('.twitter_fav_icon').html("<i class='fa fa-star'></i>");

        $('#twitter-slider').flexslider({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            slideshowSpeed: 5000,
            useCSS: true,
            controlNav: false,
            pauseOnAction: false,
            pauseOnHover: true,
            smoothHeight: false
        });
    }
    /*============================================
    Contact Map
    ==============================================*/
    function loadGmap() {

        if ($('#gmap').length) {

            var map;
            var mapstyles = [{ "stylers": [{ "saturation": -100 }] }];

            var infoWindow = new google.maps.InfoWindow;

            var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

            var mapOptions = {
                zoom: mapPoint.zoom,
                center: pointLatLng,
                zoomControl: true,
                panControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                overviewMapControl: false,
                scrollwheel: false,
                styles: mapstyles
            }

            map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

            var marker = new google.maps.Marker({
                position: pointLatLng,
                map: map,
                title: mapPoint.linkText,
                icon: mapPoint.icon
            });

            var mapLink = 'https://www.google.com/maps/preview?ll=' + mapPoint.lat + ',' + mapPoint.lng + '&z=14&q=' + mapPoint.mapAddress;

            var html = '<div class="infowin">'
                + mapPoint.infoText
                + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>'
                + '</div>';

            google.maps.event.addListener(marker, 'mouseover', function () {
                infoWindow.setContent(html);
                infoWindow.open(map, marker);
            });

            google.maps.event.addListener(marker, 'click', function () {
                window.open(mapLink, '_blank');
            });

        }
    }
    /*============================================
    Waypoints Animations
    ==============================================*/
    $('#skills').waypoint(function () {

        $('.skills-item').each(function () {
            $(this).css({ 'height': $(this).data('height') + '%' });
        })

        $('.skills-bars').css({ 'opacity': 1 });

    }, { offset: '40%' });

    $('.scrollimation').waypoint(function () {
        $(this).addClass('in');
    }, { offset: '90%' });

    /*============================================
    Resize Functions
    ==============================================*/
    var thumbSize = $('.project-item').width();

    $(window).resize(function () {
        $('#home').height($(window).height() + 50);

        if ($('.project-item').width() != thumbSize) {

            $('#projects-container').masonry('reload');
            thumbSize = $('.project-item').width();
        }

        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*============================================
    Refresh scrollSpy function
    ==============================================*/
    function scrollSpyRefresh() {
        setTimeout(function () {
            $('body').scrollspy('refresh');
        }, 1000);
    }

    /*============================================
    Refresh waypoints function
    ==============================================*/
    function waypointsRefresh() {
        setTimeout(function () {
            $.waypoints('refresh');
        }, 1000);
    }
});

$(document).ready(function () {
    $('#contact-form').submit(function () {

        var buttonCopy = $('#contact-form button').html(),
            errorMessage = $('#contact-form button').data('error-message'),
            sendingMessage = $('#contact-form button').data('sending-message'),
            okMessage = $('#contact-form button').data('ok-message'),
            hasError = false;

        $('#contact-form .error-message').remove();

        $('.requiredField').each(function () {
            if ($.trim($(this).val()) == '') {
                var errorText = $(this).data('error-empty');
                $(this).parent().append('<span class="error-message" style="display:none;">' + errorText + '.</span>').find('.error-message').fadeIn('fast');
                $(this).addClass('inputError');
                hasError = true;
            } else if ($(this).is("input[type='email']") || $(this).attr('name') === 'email') {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test($.trim($(this).val()))) {
                    var invalidEmail = $(this).data('error-invalid');
                    $(this).parent().append('<span class="error-message" style="display:none;">' + invalidEmail + '.</span>').find('.error-message').fadeIn('fast');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });

        if (hasError) {
            $('#contact-form button').html('<i class="fa fa-times"></i>' + errorMessage);
            setTimeout(function () {
                $('#contact-form button').html(buttonCopy);
            }, 2000);
        }
        else {
            $('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>' + sendingMessage);

            var formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function (data) {
                $('#contact-form button').html('<i class="fa fa-check"></i>' + okMessage);

                $('#contact-form')[0].reset();

                setTimeout(function () {
                    $('#contact-form button').html(buttonCopy);
                }, 2000);

            });
        }

        return false;
    });
});
/* end of script for appointment form */
$(document).ready(function() {

  // ---navbar---
  //responsiveness
  $('.toggleMenu').on('click', function(){
    $('.navbar').toggleClass('show');
  });

  //make the navbar close after clicking on a section
  $('.navbar li').on('click', function() {
    $('.navbar').toggleClass('show');
  });

  //hide the navbar in the small screen if the screen is resized to a bigger width
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $('.navbar').removeClass('show');
    };
  });



  // on click on a menu item, highlight that item and scroll (animate) the page
  $('.navbar li').on('click', function(e){
    let goTo;
    e.preventDefault();
    goTo = $(this).attr('data-goTo');
    $('.navbar li').removeClass('active');
    $(this).addClass('active');
    $('html, body').stop().animate({scrollTop: $('#' + goTo).offset().top - 63}, 800);
  });
  //var f=$('#home-img')



  //highlight menu items on page scrolling
  $(window).scroll(function() {
    let currentPosition = $(window).scrollTop()+64;
    let currentSection;
    $('.section').each(function() {
      if (currentPosition >= $(this).offset().top) {
        currentSection = $(this);
      };
      let id = currentSection.attr('id')
      $('.navbar li').removeClass('active');
      $('.navbar [data-goTo=' + id + ']').addClass('active');
    });
  });
  // ---end navbar---



  // ---parallax effect---
  // bugs a little if you scroll fast
  let homeImg = $('#home-img');
  let section3 = $('#section3');
  let $window = $(window);
  let winHeight = $window.height();

  function updateScroll(element, speed) { //the higher the speed parameter, the slower the background
    let yScroll = $window.scrollTop();
    if (element.offset().top < winHeight) {
      element.css('background-position', '0 -' + yScroll/speed + 'px');
    }else if (yScroll >= element.offset().top - winHeight + element.height()) {
      element.css('background-position', '0 -' + (yScroll - (element.offset().top - winHeight + element.height()))/speed + 'px');
    };
  };

    $(window).scroll(function() {
      updateScroll(homeImg, 4);
      updateScroll(section3, 8);
  });
  // ---end parallax effect---



  // ---modal---
  let modal = $('#info-modal');
  let infoBtn = $('#infoBtn');
  let closeBtn = $('#modal-close');

  infoBtn.click(function(){
    //modal.css('display', 'block');
    modal.fadeIn(400);
  });

  closeBtn.click(function() {
    //modal.css('display', 'none');
    modal.fadeOut(400);
  });

  //close the modal by clicking outside of it
  $(window).click(function(event){
    if ($(event.target).is(modal)) {
      //modal.css('display', 'none');
      modal.fadeOut(400);
    };
  });
  // ---end modal---



  // prevent default behaviour of social media links
  $('#social-media a').click(function(e){
    e.preventDefault();
  });

}); //end ready

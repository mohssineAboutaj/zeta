/*
** Template name : Unifox 
** Creation date : 18/03/2018 
** Author        : Mohssine Aboutaj 
** Description   : This is template single page for your portfolio
** Contact Me    : mohssineaboutajtemplates@gmail.com
*/

$(function(){

/* Start customize plugins */

  // TriggerFire the jquery.niceScroll.js plugin and customiz it
  $("body").niceScroll({
    cursorcolor: $('body').attr('data-main-color'),
    cursoropacitymin: 0.5,
    cursorwidth: '5px',
    cursorborder: 'none'
  });

  // Trigger the wow.js library
  new WOW().init();

  // Customize the Bootstrap slider
  $('#whatTheySay .carousel').carousel({interval: 0});

/* End customize plugins */

/* Start my function and codes */

  // Hide navbar on click for any link
  $('nav div#navbarSupportedContent li').on('click', function(){
    $('div#navbarSupportedContent').removeClass('show');
  });

  // Make smothing scroll to element on link clicked
  $('nav a, footer a').on("click", function(){
    // add class Active on active link
    $(this).parent().addClass('active').siblings().removeClass('active');

    // make a smoth scrolling
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });

  // shuffle script
  $('.shuffle .nav-shuffle li').on('click', function(){
    // add class Active on active button categorie
    $(this).addClass('shuffle-active').siblings().removeClass('shuffle-active');

    if ($(this).is(':first-child')){
      // check if this is firstChild and show all
      $('.shuffle .shuffle-content .shuffle-img').css('opacity', 1);
    } else {
      // if this is not firstChild show hidden element by categorie
      $('.shuffle .shuffle-content .shuffle-img').animate({'opacity': 0.1},250);
      $('.shuffle .shuffle-content .shuffle-img.'+ $(this).data('filter')).animate({'opacity': 1},250);
    }
  });

  // change text in button view more
  $('.shuffle .view-more').on('click', function(){
    // shurthand if...else code
    $(this).text() == 'view more' ? $(this).text('view less') : $(this).text('view more');
    // toggle the visibility of hidden element
    $('.shuffle .shuffle-content .image.el-hide').slideToggle();
  });

  // Create a circular progress bar using canvas
  /* Global variables for circular progress */
  var circlularProgress = document.querySelectorAll('.circularProgressMAF');

  // some colors as Default
  var progressColor = ['#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406','#029eff', '#febe02', '#87D37C', '#F89406'];

  // radian
  var rad = Math.PI / 180;

  // Start Arc from top at 12 O'clock
  var startArc = 270;
  var fontSize = 22;
  var i;

  for (i = 0;i < circlularProgress.length;i++) {
    var ctx = circlularProgress[i].getContext('2d');
    var cd = circlularProgress[i].parentElement.clientWidth;
    circlularProgress[i].width = circlularProgress[i].height = cd;
    var progressValue = circlularProgress[i].getAttribute('data-progress-value');
    var endArc = (progressValue / 100) * 360;

    // create the circle
    ctx.arc(cd/2, cd/2, cd/6, startArc * rad,(startArc + endArc) * rad, false);

    // set the colors
    ctx.strokeStyle = progressColor[i];
    ctx.lineWidth = 7;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.font = fontSize + 'px arial';
    ctx.fillText(progressValue + '%', cd/2, (fontSize + cd)/2);
    ctx.stroke();
  }

  // Hide the loading animation if the page finish the loading
  $(function(){
    $('.loadingMAF').hide();
  });
  
/* End my function and codes */

});
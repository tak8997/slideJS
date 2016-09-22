// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


//quick-link1 슬라이드
$(document).ready(function() {
  var aWidth = Number.parseInt($('#quick-link1 .inner-wrapper > a').css('width').split('px'));
  // var $aWidth = $('#quick-link1 a.item').prop('width', '185px');

  //a 태그에 클래스, 속성 설정 
  $('#quick-link1 .inner-wrapper > a').addClass("item");

  //a 태그의 갯수(10개)
  var count = $('#quick-link1 .inner-wrapper > a').length;

  //div.outter-wrapper 태그에 넓이 설정하기
  $('#quick-link1 > div.outter-wrapper').css({
    width: aWidth * count
  });

  //슬라이드 이동
  var currentPage = 0;

  var changePage = function() {
    $('#quick-link1 .inner-wrapper').animate({
      left: -currentPage*aWidth
    }, 600);
  };

  // 슬라이드 버튼1 
  $('#left-button').click(function() {
    if(currentPage > 0) {
      currentPage = currentPage - 1;
      changePage();
    }
  });

  $('#right-button').click(function() {
    if(currentPage < count - 1) {
      currentPage = currentPage + 1;
      changePage();
    }
  });


});


//menu-nav 태그 메뉴
// $('.outer-menu-item').hover(function () {
//   $(this).find('.inner-menu').show();
// }, function () {
//   $(this).find('.inner-menu').hide();
// });     




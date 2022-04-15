// topBanner start
$(document).ready(function(){
  $('.deleteBtn').on('click', function(){
    $(this).parent('.topBanner').slideUp(500)
    // .deleteBtn의 부모인 'topBanner'가 올라가게
  })
})
// topBanner end

// gnb start
$(document).ready(function(){
  var navOffset=$('.gnb').offset().top;
  $(window).scroll(function(){
    var scrollPos=$(window).scrollTop();
    if(scrollPos>=navOffset){
      $('.gnb').addClass('fixed')
      $('.gnb').css({
        'background':'#fff',
        'border-bottom':'1px solid #ddd'
      });
    }else{
      $('.gnb').removeClass('fixed');
      $('.gnb').css({
        'background':'#fff',
        'border-bottom':'none'
      });
    }
  })
})
// gnb 끝

// 더보기 서브메뉴 시작
var timeout;
$(document).ready(function(){
  $('#subMenu').on('click', function(e){
    e.preventDefault();
    $('.sub_menu').fadeToggle()
  })
})
// 더보기 서브메뉴 끝
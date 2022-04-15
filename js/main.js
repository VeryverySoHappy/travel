$(document).ready(function(){
  $('.banner a:gt(0)').hide();
  // 가로 안에 잇는 인덱스 값 보다 큰 것은 숨겨줘
  // 첫번째꺼만 남기고 나머지 숨겨짐
  // position:absolute를 하면 맨 뒤에잇는 사진이 맨 앞으로 옴 이걸 처리
  $('.list a').on('click',function(e){
    e.preventDefault();
    $('.list a.on').removeClass('on');
    // 기존에 있던 on은 제거

    var num =$(this).parent().index();
    // console.log(num)
    // 계속 0만 나옴  li안에 a는 하나밖에 없음
    // 그래서 클릭하는 나의 부모(li)의 인덱스 값을 찾으면 됌 
    
    $('.banner a').hide();
    // a를 몽땅 다 숨기고 내가 선택한 것만 보여줘
    // (선택 안 한건 display:none, 선택한 건 block)
    // 기존에 있던 a는 숨겨줘

    // $('.list a').addClass('on')
    // 이렇게 하면 몽땅 다 빨간색됌
    $(this).addClass('on')
    // 클릭한 나한테만 빨간색 됌
    $('.banner a:eq('+num+')').show();
    // banner 안에 있는 a인데 num번째꺼를 보여줘
  })

  var number=0;
  // 움직이는 동작 만들기 start
  function myset(){
    var currentNum=$('.list a.on').parent().index();
    // 이 값을 number에 넣어줘
    // 멈추고 다른 사진을 클릭하고 다시  시작할 때 제대로 작동시키기 위해
    // number++;
    number=currentNum+1;
    // 클릭한 다음번호로 이동시킬 수 잇게 +1을 함
    if(number>$('.list a').length-1){
      // 한바퀴 다 돌면 다시 0부터 돎
      number=0
    }
    $('.list a.on').removeClass('on');
    $('.banner a').hide();
    // 여기까지는 이미지는 바뀌는거 까지 됌
    $('.list li:eq('+number+') > a').addClass('on')
    $('.banner a:eq('+number+')').show();

    // console.log(number) 1씩 증가하는게 콘솔창에서 보임
  }
  var st=setInterval(myset,3000)
  // 3초 간격으로 myset을 실행해

  $('.stop').on('click',function(e){
    e.preventDefault()
    clearInterval(st)
  })
  $('.play').on('click',function(e){
    e.preventDefault()
    clearInterval(st)
    st = setInterval(myset,3000)
  })

})
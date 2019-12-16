const heros = document.getElementsByClassName('hero')[0];
let position = 50;
// 거기서 더하고 빼야한다. 왜 전역에서 줘야 되고 안에서주면 안될까?
//히로에 이벤트를 주는게 아니라 window에 줘야한다.
//keydown 이벤트로 37누를때나 39누를 때 heros의 backgroundPosition이 달라지게 만든다.
window.addEventListener('keydown', function(event) { //특정버튼에 주는게 아니라 키누르면 무조건 돼야하니까 윈도우에 쓰는거다. 
  if (event.keyCode === 37 && position > -1) {
    heros.style.backgroundPositionX = '-77px'; //먼저 히로에게 이미지 스프라이트값을 준다.
    heros.style.left = position-- + '5px'; //그다음 똑같은 방법으로
    console.log(position); //포지션 몇인지 알아보기
  } else if (event.keyCode === 39 && position < 77) {
    heros.style.backgroundPositionX = '-100px';
    heros.style.left = position++ + '5px';
    this.console.log(position);
  }
});

//&& heros.style.left > '1px' 쟤주면 왜 안될까
//히로 조건주기 이 조건이 아니면 그냥 이벤트를 안주는거지

// window.addEventListener('keydown', function(event) {
//   if (event.keyCode == 37) {
//     heros.style.backgroundPosition = '-77px 0'; //먼저 히로에게 이미지 스프라이트값을 준다.
//     heros.style.position = 'absolute';
//     heros.style.left = '2%'; //그다음 똑같은 방법으로
//   } else if (event.keyCode == 39) {
//     heros.style.backgroundPosition = '-100px 0';
//     heros.style.left = ++position + '%';
//   }
// });

//https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle
/* 키코드 37 왼쪽 39 오른쪽

키다운 true
키업   false


가운데에
fixed 히로가 바텀0 레프트 50퍼

윈도우에 이벤트리스너 붙이기 왼누르면 왼 오른 오
37 39


img sprite로 해서 얼굴하나만 보이게? 해야한다.

뭐냐면 자바스크립트로 스타일 줘서 queryselector.style.backgroundpositiosn


무슨기법

캐시로 가지고있으면 안깜빡

div만들어서 땡겨쓰는거임 -로

css backgroundposoton



이미지 스프라이트에대해 블로깅



그럼 히로 움직임



귀신도 스프라이트당

랜덤함수로 나타나게하면되고

레프트를 랜덤하게


setinterval 검색해서 초설정 해서 같은함수를 계속호출해서 픽셀만큼 증가시켜 ㅊㄴㄴ 주면됨

나타나는걸 감싸는거 2개
엑스를 랜덤하게 주고 y는 초가 지남에 따라 진행되야한다 
*/

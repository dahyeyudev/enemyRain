//랜덤으로 비내리는거 만들고
//셋인터벌로 함수 불러온다

//내가 틀렷던건 뭐냐면

//let fall = 0;
// 랜덤한 수 가져오는 함수
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createEnemy = () => {
  const enemy = document.createElement('div'); //얘를 왜 const로 하는줄앎? 그래도 상관없으니까
  enemy.className = 'enemy'; //스타일은 객체프로퍼티를 바꾸는거다. 그래서 일단 콘스트로 가져와도됨
  let range = (enemy.style.left = getRandomNumber(-1, 740) + 'px'); //랜덤한 픽셀 좌표값
  console.log('tet', enemy); // 랜덤한 left에서 잘 나오고 있다.
  document.getElementById('bg').appendChild(enemy); //div밑에 random한 x좌표값갖는 enemy를 넣는다.

  //일단 탑에 0을 준다. 그리고 y좌표는 setInterval로 계속해서 더해져야한다.
  //이 setinterval이 내부에 있어야 하는 이유는 그 x랜덤하게 된곳에서 이제 내려와야 하기 때문이다.
  let top = 0;
  setInterval(() => {
    //셋인터벌에 이름 없는 함수 넣고 그 함수에 이프문 넣은거다.
    if (top > 92) {
      // 탑이 92가 넘어가면 죽는 것이다.
      enemy.style.backgroundPosition = '-45px -4px'; //죽는 이미지스프라이트
    } else {
      enemy.style.top = top++ + '%'; //그전까진 내려가면서 안죽은 이미지로 탑을 계속 더해간다.
    }
  }, 100);

  //이프로 묶어서 그거 같으면 죽는다 이렇게 하고싶음
  //움직이는 범위

  if (
    heros.style.left - enemy.style.left > 10 &&
    '532px' < top &&
    top < '545px'
  ) {
    return (enemy.style.backgroundPosition = '-45px -4px');
  }
};
//enemy는 랜덤이고 소숫점까지 나온다. 하지만 hero는 5px씩 움직인다.

//  document.getElementById('bg').removeChild(enemy);
// console.log('asdf', heros.style.left);
// console.log('asdfg', top);
//TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
//만약에 닿으면 죽는다고 하면 키는 알 수 있어 근데 닿으면 죽는거니까 x 축 값도 알아야됨
//hero의 x값을 알아야한다. 실시간으로 그럼 그럴 때 마다 enemy의 x값을 알려주는걸 찾는다.
//만약 유령의 중심이 히로 x값과 y값에 닿는 다면 유령은 죽는 모양을 보여줘야한다.
//console.log('etet', position.length); 다른 곳에서 썼던 거 여기서도 인식됨당연히도

//setinterval 함수 만들기
// createEnemy()
setInterval(createEnemy, 2000);

//randomEnemy.style.backgroundPositionY = fall++ + '4%';

// const enemyDiv = document.createElement('div'); //디브를 만들어서

//탑값을 가져와서 귀신이 내려와야한다.
//탑값이 작으면 디브에서 -유령 높이 리무브 엘리먼트를 하면 된다. 이게 셋인터벌에 있어야한다. 탑값이
//셋인터벌을 또 만들어서 쟤를 감싸지는 않는것같다.

/*클래스 연습하려고 만든거다.
클래스는 객체를 만들어 내는 것이다. 귀신 클래스를 만들어서 매번 귀신 객체를 찍어내려고 하는 것이다.
class Enemy {
 constructor () {
   클래스 안에서 하면 this.귀신 만들기해야한다 왜냐면 변수에 넣으면 불러올수없으니까.
   let e = createElement귀신 탑0 레해서 이제 쭉 내려보내야한다.
   ㄷ.style.top
             left
    셋인터벌 해서 탑에 계속 더한다. 근데 이걸 내려보내는걸 빼고싶어서 무브를 밑에 내려좋음 근데
    저 귀신에 못접근하니까
 }
   move()   this.enemy에 넣어야한다.  this는 인스턴스해서 객체를 가지고있다.?
   원래는 e로 해야하는데 이거 렛이로 안하는거다.
}

this는 자기가 속해있는 객체를 말한다.
무브를 빼려고 했지. 근데 그냥 e 부르면 저기서 못해 스코프안되잖아.
그래서 이때 애로우펑션을 해야한다. this.e 하면
주말에 리액트 1-6읽고 답하기. 간단한 개념 물어봄 리액트 개념물어보심. 블로그 딴거 곁들여서 봐도 좋음


셋인터벌 new Enemy()하면 객체 생기는거다.
*/

// function createEnemy() {
//   enemies.style.left = enemyPosition++ getRandomNumber(3, 40);
// }
// console.log(createEnemy());

// const canvas = document.getElementsByClassName('canvas')

// function createEnemy() {
//   let el = document.createElement('enemy');
//   style = el.style;

//   style.top = getRandomNumber(0, window.innerHeight) + 'px';
//   style.left = getRandomNumber(0, window.innerWidth) + 'px';

//   return el;
// }
// console.log(createEnemy());

/*
http://jsfiddle.net/m1erickson/RCLtR/
https://gist.github.com/trentmwillis/2199d6d191000b8d8f40
window.addEventListener('keydown', function(event) {
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
*/

//유령이 내리려면
//히어로는 안죽는다 히어로 안건들여도되고
//
// 랜덤한 x위치 에서 등장한다.
// 등장한 곳에서 내린다. = 셋인터벌로 y값 바뀐다.

// const makeEnemy = () => {
//   좀비를 만들고
//   좀비움직이고
//   만들어진 좀비가 좌우 위치를 랜덤으로 가진다.
// }

//높이만큼 떨어지면 자동으로 죽는다.
//clearinterval로 하고 아니면 컨테이너 안에 죽이면된다.

//디드둣

//움직이는애 class상속해서 둘다 class

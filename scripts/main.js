//変数の定義
const myHeading = document.querySelector('h1');
//textContentプロパティの値を''に変更する
myHeading.textContent = 'Hello JavaScript!';

//イベント処理
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function(){
    alert('ダメ！');
});
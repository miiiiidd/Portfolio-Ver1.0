
////変数の定義
//const myHeading = document.querySelector('h1');
////textContentプロパティの値を''に変更する
//myHeading.textContent = 'Hello JavaScript!';

//イベント処理
let myHTML = document.querySelector('p');
myHTML.addEventListener('click', function(){
    alert('ダメ！');
});

//画像の切り替え
//<img> 要素への参照を変数 myImage に格納
const myImage = document.querySelector('img');
//onclickイベントハンドラープロパティに、名前のない関数（無名関数）を代入
//→この要素がクリックされる毎に以下の処理が実行される
myImage.onclick = () => {
    //画像のsrc属性の値を取得
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/disney-01.jpg'){
        myImage.setAttribute('src','images/disney-02.jpg');
    }else{
        myImage.setAttribute('src','images/disney-01.jpg');
    }
}

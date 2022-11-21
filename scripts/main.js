
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

//パーソナライズされた挨拶メッセージの追加
//変数に格納
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//パーソナライズされた挨拶を設定する関数
function setUserName(){
    //prompt()はalert()とは異なり、ユーザーにデータを入力するよう求め、ユーザーがOKを押した後に変数にそのデータを格納
    const myName = prompt('あなたの名前を入力してください。');
    //ブラウザにデータを格納して後で受け取る(localStorageと呼ばれるAPIを呼び出す)
    localStorage.setItem('name', myName);
    //見出しのtextContentに文字列と新しく格納されたユーザーの名前を設定
    myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
}
//初期コード（最初に読み込んだときにアプリを構造化する）
//nameデータが存在するか
if (!localStorage.getItem('name')){
    //存在しない場合setUserName()関数を実行
    setUserName();
}else{
    //存在する場合格納されている情報を表示
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}
//ユーザーがボタンを押下する毎に、新しい名前を設定する
myButton.onclick = () =>{
    setUserName();
}

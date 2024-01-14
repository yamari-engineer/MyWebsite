//profile画面で【more】ボタンを推した時の処理-------------------

//cssのクラスをそれぞれ取得
const moreButton = document.querySelector('.more-Button');      //moreボタンを取得
const worksMore = document.querySelector('.works-more');    //profile-fore要素全体を取得
const close = document.querySelector('.close');　　             //closeボタンを取得
const worksGrandchildBlock = document.querySelector('.works-grandchild-block'); //profileとmoreボタンを取得


// クリックした時の挙動(スライドイン)
moreButton.addEventListener('click', () => {
    worksMore.classList.toggle('active');
    worksGrandchildBlock.classList.toggle('active');
});

//スライドアウト
close.addEventListener('click', () => {
    worksMore.classList.remove('active');
    worksGrandchildBlock.classList.remove('active');
});

//ナビゲーションメニュー作成
const navigation = document.querySelector('.navigation');
navigation.addEventListener('click', () => {
    navigationIcon();
    navigationView();
});

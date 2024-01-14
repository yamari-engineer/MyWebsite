

//profile画面で【more】ボタンを推した時の処理-------------------

//cssのクラスをそれぞれ取得
const moreButton = document.querySelector('.more-Button');      //moreボタンを取得
const profileMore = document.querySelector('.profile-more');    //profile-fore要素全体を取得
const close = document.querySelector('.close');　　             //closeボタンを取得
const aboutGrandchildBlock = document.querySelector('.about-grandchild-Block'); //profileとmoreボタンを取得


// クリックした時の挙動(スライドイン)
moreButton.addEventListener('click', () => {
    profileMore.classList.toggle('active');
    aboutGrandchildBlock.classList.toggle('active');
});

//スライドアウト
close.addEventListener('click', () => {
    profileMore.classList.remove('active');
    aboutGrandchildBlock.classList.remove('active');
});
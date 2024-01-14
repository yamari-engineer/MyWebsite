//どのファイルにも呼び出す関数作成ファイル

//関数の定義------------------------------------------------------------------

//ナビゲーションアイコン操作関数
function navigationIcon() {
    //子要素を取得
    var navigationChild = navigation.children;
    navigationChild = Array.from(navigationChild);
    navigationChild.forEach(function (value) {
        value.classList.toggle('active');
    });
}

//ナビゲーション要素を表示・非表示
function navigationView() {
    const navigationMenu = document.querySelector('.navigation-menu');
    const nav = document.querySelector('.nav');
    navigationMenu.classList.toggle('active');
    nav.classList.toggle('active');
}
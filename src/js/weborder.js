// Iframeのソースを動的に書き換える関数
function setWeborderIframeSrc(id) {
    let weborder_iframe_src = document.getElementById(id).src;

    // リクエストパラメタを取得
    let search = location.search.substring(1);

    // リクエストパラメタが無いときはここで終了
    if (!search) return;

    weborder_iframe_src += '?' + search;

    document.getElementById(id).src = weborder_iframe_src;
}

// リンクのhrefを動的に書き換える関数
function setWeborderLink(id) {
    let weborder_link = document.getElementById(id).href;

    // リクエストパラメタを取得
    let search = location.search.substring(1);

    // リクエストパラメタが無いときはここで終了
    if (!search) return;

    weborder_link += '?' + search;

    document.getElementById(id).href = weborder_link;
}



console.log("codeengine-test start!");

const axios = require('axios');

main();

function main(params) {

console.log("main start!");

    // 外形監視リクエスト定義
    var get_options = {
        url: 'https://statuscode-generator.herokuapp.com/status?code=400',  // ROKS代替アプリ（任意のステータス指定が可能）
        method: 'GET',
        timeout: 16 * 1000     // タイムアウト指定（16秒）
    };

    // Webhookリクエスト定義
    var post_options = {
        url: 'https://talkapptestyori.us-south.cf.appdomain.cloud/OAuthMainServlet',    // JP1中継サーバ代替アプリ
        method: 'POST',
        data: {
            name: 'functions', message: '外形監視エラー'
        },
        headers: {
            'content-type': 'application/json'
        }
    };

console.log("外形監視リクエスト送信 start!");

    // 外形監視リクエスト送信
    return axios.request(get_options)
        // 正常終了（HTTPステータス 200番台）
        .then(function (response) {
            console.log('Check OK!  STATUS_CODE=' + response.status);
        })
        // エラー処理（HTTPステータス 200番台以外）
        .catch(function (err) {
            // エラー時はLogDNAへエラー内容を出力
            console.log('Check NG!!!!  ERROR_MSG=' + err);

            // エラー時はWebhookリクエスト送信
            return axios.request(post_options)
                // 正常終了（HTTPステータス 200番台）
                .then(function (response) {
                    console.log('Webhook OK!  STATUS_CODE=' + response.status);
                })
                // エラー処理（HTTPステータス 200番台以外）
                .catch(function (err) {
                    console.log('Webhook NG!!!!  ERROR_MSG=' + err);
                });
        });
console.log("main end!");

}
console.log("codeengine-test end!");

console.log("codeengine-test start!");

const axios = require('axios');

main();

function main(params) {

console.log("main start!");

    // �O�`�Ď����N�G�X�g��`
    var get_options = {
        url: 'https://statuscode-generator.herokuapp.com/status?code=200',  // ROKS��փA�v���i�C�ӂ̃X�e�[�^�X�w�肪�\�j
        method: 'GET',
        timeout: 16 * 1000     // �^�C���A�E�g�w��i16�b�j
    };

    // Webhook���N�G�X�g��`
    var post_options = {
        url: 'https://talkapptestyori.us-south.cf.appdomain.cloud/OAuthMainServlet',    // JP1���p�T�[�o��փA�v��
        method: 'POST',
        data: {
            name: 'functions', message: '�O�`�Ď��G���['
        },
        headers: {
            'content-type': 'application/json'
        }
    };

console.log("�O�`�Ď����N�G�X�g���M start!");

    // �O�`�Ď����N�G�X�g���M
    return axios.request(get_options)
        // ����I���iHTTP�X�e�[�^�X 200�ԑ�j
        .then(function (response) {
            console.log('Check OK!  STATUS_CODE=' + response.status);
        })
        // �G���[�����iHTTP�X�e�[�^�X 200�ԑ�ȊO�j
        .catch(function (err) {
            // �G���[����LogDNA�փG���[���e���o��
            console.log('Check NG!!!!  ERROR_MSG=' + err);

            // �G���[����Webhook���N�G�X�g���M
            return axios.request(post_options)
                // ����I���iHTTP�X�e�[�^�X 200�ԑ�j
                .then(function (response) {
                    console.log('Webhook OK!  STATUS_CODE=' + response.status);
                })
                // �G���[�����iHTTP�X�e�[�^�X 200�ԑ�ȊO�j
                .catch(function (err) {
                    console.log('Webhook NG!!!!  ERROR_MSG=' + err);
                });
        });
console.log("main end!");

}
console.log("codeengine-test end!");

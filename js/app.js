var width = 300;
var height = 300;

function submit() {
    width = document.getElementById('input_width').value;
    height = document.getElementById('input_height').value;
    var text = document.getElementById('input_text').value;

    let output = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=${width}x${height}`

    document.getElementById('qr_output').innerHTML = `<a href="${output}.png" download="${output}" target="__BLANK"> <img id="qr_code" src="${output}" alt=""></img></a>`;
}
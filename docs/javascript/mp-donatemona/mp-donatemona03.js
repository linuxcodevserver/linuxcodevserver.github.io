const txHash = window.mpurse.sendAsset('MB56hAzDE9s7KeCmnPfFk7qVe77tq57ZPa', 'MONA', 3, 'plain','test');
console.log("txHash: txHash")
var txdiv = document.getElementById('txid')
var txid = document.createElement('p');
txid.textContent = 'ID: ' + txHash;
var stxid = document.createElement('p');
stxid.textContent = 'IDはコピーしておいてください。';
txdiv.appendChild(txid);
txdiv.appendChild(stxid);
const txHash = window.mpurse.sendAsset('MQ7rWj7bkdjXd3BH3TpwR6Sesgz4vXqexe', 'MONA', 1, 'plain','test');
console.log("txHash:" + txHash)
var txdiv = document.getElementById('txid')
var txid = document.createElement('p');
txid.textContent = 'ID: ' + txHash;
var stxid = document.createElement('p');
stxid.textContent = 'IDはコピーしておいてください。';
txdiv.appendChild(txid);
txdiv.appendChild(stxid);
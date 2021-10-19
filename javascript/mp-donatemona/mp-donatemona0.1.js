function sleep(ms) {
    var time = new Date().getTime() + ms;
    while (new Date().getTime() < time) {}
  }
const txHash = window.mpurse.sendAsset('MB56hAzDE9s7KeCmnPfFk7qVe77tq57ZPa', 'MONA', 0.1, 'plain','test');
console.log("txHash: txHash")
sleep(10000)
history.back()
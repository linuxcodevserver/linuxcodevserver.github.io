async function donate() {
  const address = await window.mpurse.getAddress();
  amount = window.prompt("寄付額を入力してください。");
  const txHash = await window.mpurse.sendAsset('MB56hAzDE9s7KeCmnPfFk7qVe77tq57ZPa', 'MONA', amount, 'plain','test');
  console.log("txHash: " + txHash);
  window.location = "javascript/mp-donatemona/thanks.html?txhash=" + txHash + "&amount=" + amount + "&address=" + address;
}
donate()
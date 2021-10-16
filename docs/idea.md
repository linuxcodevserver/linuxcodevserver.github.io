---
title: アイデア募集
description: ブログのアイデアの募集です。「これを書いてほしいなー」とか、「これやってみて」とかそういうのを書いてください。
---
<style>
    .textlines {
    border: 2px solid #0a0;  /* 枠線 */
    border-radius: 0.67em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color: snow;  /* 背景色 */
    width: 20em;             /* 横幅 */
    font-size: 1em;          /* 文字サイズ */
    line-height: 1.2;        /* 行の高さ */
    size: 80%;
    }
    .submitbutton {
        padding: 0.5em 1em;
        text-decoration: none;
        background: #668ad8;
        color: #FFF
        border-bottom: solid 4px #627295
        border-radius: 3px;
    }
    .submitbutton:active {
        -webkit-transform: translateY(4px;)
        transform: translateY(4px;)
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        border-bottom: none;
    }
</style>
<h2>フォーム</h2>
<form
  action="https://formspree.io/f/mqkwoagl"
  method="POST"
>
  <label>
    メールアドレス<br>
    <input type="email" name="_replyto" class="textlines">
  </label><br>
  <label>
    Discordユーザー名
    <input type="text" name="discordusername" class="textlines">
  <label><br>
    アイデア
    <textarea name="idea" class="textlines"></textarea>
  </label>
  <label><br>
    申請ID
    <input type="number" id="iid" name="iid" readonly></input>
    <script>
      var iid = Math.floor( Math.random() * (9999999 + 1 - 1000000) ) + 1000000 ;
      document.getElementById("iid").setAttribute('value', iid)
    </script>
  </label><br>
  <!-- your other form fields go here -->
  <button type="submit">送信</button>
</form>
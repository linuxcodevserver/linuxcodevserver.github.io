---
title: ブログ投稿
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
ブログに投稿したい人はこのフォームを使ってください。<br>
<form action="https://formspree.io/f/xnqllyaw" method="POST">
  <label>
    メールアドレス<br>
    <input type="email" name="_replyto" class="textlines"></input>
  </label><br>
  <label>
    Discordユーザー名<br>
    <input type="text" name="discordusername" class="textlines"></input>
  </label><br>
  <label>
    記事のタイトル<br>
    <input type="text" name="title" class="textlines"></input>
  </label><br>
  <label>
    記事の概要・導入文<br>
    <input type="text" name="description" class="textlines"></input>
  </label><br>
  <label>
    記事のタグ（スペースで区切る）<br>
    <input type="text" name="tags" class="textlines"></input>
  </label><br>
  <label>
    記事のカテゴリ<br>
    <input type="text" name="categories" class="textlines"></input>
  </label><br>
  <label>
    申請ID<br>
    <input type="number" id="contentid" name="contentid" class="textlines" readonly></input>
    <script>
      var contentid = Math.floor( Math.random() * (9999999 + 1 - 1000000) ) + 1000000 ;
      document.getElementById("contentid").setAttribute('value', contentid)
    </script>
  </label><br>
  <label>
    書いた日<br>
    <input type="date" name="date" class="textlines"></input>
  </label><br>
  <label>
    本文<br>
    <textarea name="main" class="textlines"></textarea>
  </label><br>
  <!-- your other form fields go here -->
  <button type="submit" class="submitbutton">申請</button>
</form>
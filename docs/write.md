---
title: ブログ投稿
---
ブログに投稿したい人はこのフォームを使ってください。<br>
<form action="https://formspree.io/f/xnqllyaw" method="POST">
  <label>
    メールアドレス
    <input type="email" name="_replyto">
  </label>
  <label>
    Discordユーザー名
    <input type="text" name="discordusername"></input>
  </label>
  <label>
    記事のタイトル
    <input type="text" name="title"></input>
  </label>
  <label>
    記事の概要・導入文
    <input type="text" name="description">
  </label>
  <label>
    記事のタグ（スペースで区切る）
    <input type="text" name="tags">
  </label>
  <label>
    記事のカテゴリ
    <input type="text" name="categories">
  </label>
  <label>
    申請ID
    <input type="number" id="contentid" name="contentid" readonly>
    <script>
      var contentid = Math.floor( Math.random() * (9999999 + 1 - 1000000) ) + 1000000 ;
      document.getElementById("contentid").setAttribute('value', contentid)
    </script>
  <label>
    投稿日時
    <input type="date" name="date"></input>
  </label>
  <label>
    本文
    <textarea name="main"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">申請</button>
</form>
---
title: Qiita Organization参加申請
---

<style>
.form{
   width: 100%;
   margin: 0 auto;
   border: 1px solid #9c9c9c;
   padding: 50px;
   box-sizing: border-box;
 }

 .item{
   margin-bottom: 20px;
 }

 .label_left{
   display: inline-block;
   width: 25%;
   border-left: solid 5px #5250e0;
   padding-left: 15px;
   vertical-align: top;
 }

.form input[type="text"],
.form input[type="number"],
.form input[type="email"] ,
.form input[type="password"] {
     padding: 10px;
     width: 65%;
     outline: solid 2px black;
 }

.form textarea{
   padding: 10px;
   height: 100px;
   font-size: 14px;
   width: 65%;
   outline: solid 2px black;
 }
</style>

<h2>フォーム</h2>
<form action="https://formspree.io/f/xrgrndyd" method="POST">
  <div class="item">
    <label class="label_left" for="mail">メールアドレス</label>
    <input id="mail" type="email" placeholder="hogehoge@example.com" name="mail" required><br>
  </div>
  
  <div class="item">
    <label class="label_left" for="name">Discordユーザー名</label>
    <input id="name" type="text" placeholder="形式: ユーザー名#タグ" name="name" required><br>
  </div>

  <div class="item">
    <label class="label_left" for="qiitaname">Qiitaユーザー名</label>
    <input id="qiitaname" type="text" placeholder="形式: @ユーザー名 or https://qiita.com/ユーザー名" name="qiitaname" required><br>
  </div>

  <div class="item">
    <label class="label_left" for="sid">申請ID</label>
    <input id="sid" type="text" placeholder="Javascriptが動いてません。不具合です。無視してください。" name="sid" readonly><br>
  </div>

  <button class=".md-button .md-button--primary" style="height: 1cm; color: white; background-color: #2f40de;" type="submit">Send</button>
</form>
<script>
  var sid = Math.floor(Math.random() * (9999999 + 1 - 1000000)) + 1000000;
  document.getElementsByID("sid").setAttribute('value', sid)
</script>
---
title: 投稿する
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
<!--
<script>
  window.onload = function() { 
  var el = document.getElementById('g-recaptcha-response'); 
  if (el) { 
    el.setAttribute('required', 'required'); 
  } 
}
</script>
<style>
#g-recaptcha-response {
display: block !important;
position: absolute;
margin: -50px 0 0 0 !important;
z-index: -999999;
opacity: 0;
}
</style>
-->
<h2>フォーム</h2>
<form action="https://formspree.io/f/mqkwoagl" method="POST">
  <div class="item">
    <label class="label_left" for="mail">メールアドレス</label>
    <input id="mail" type="email" placeholder="hogehoge@example.com" name="mail" required><br>
  </div>
  
  <div class="item">
    <label class="label_left" for="name">Discordユーザー名</label>
    <input id="name" type="text" placeholder="形式: ユーザー名#タグ" name="name" required><br>
  </div>

  <div class="item">
    <label class="label_left" for="date">日付</label>
    <input id="date" type="date" placeholder="形式: yyyy/mm/dd" name="date" required><br>
  </div>

  <div class="item">
    <label class="label_left" for="msg">本文</label>
    <textarea id="msg" placeholder="なんでも。ちなみに「ここに画像挿入してください」とかそういうのはokaitsが読んで処理するのでそうやって書いておいてください。" name="msg" required></textaria><br>
  </div>

  <div class="item">
    <label class="label_left" for="sid">申請ID</label>
    <input id="sid" type="text" placeholder="形式: ユーザー名#タグ" name="sid" required readonly><br>
  </div>

  <button class=".md-button .md-button--primary" style="height: 1cm; color: white; background-color: #2f40de;" type="submit">Send</button>
</form>
<script>
  var sid = Math.floor(Math.random() * (9999999 + 1 - 1000000)) + 1000000;
  document.getElementsByID("sid").setAttribute('value', sid)
</script>
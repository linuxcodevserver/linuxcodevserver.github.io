---
title: お問い合わせ
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
<form action="https://formspree.io/f/mnqlybkq" method="POST" class="form">
  <div class="item">
    <label class="label_left" for="name">Discordユーザー名</label>
    <input id="name" type="text" placeholder="形式: ユーザー名#タグ" name="name" required><br>
  </div>
  <div class="item">
    <label class="label_left" for="msg">メッセージ</label>
    <textarea id="msg" placeholder="なんでも" name="msg" required></textaria><br>
  </div>
  <div>
    <button class=".md-button .md-button--primary" style="height: 1cm; color: white; background-color: #2f40de;" type="submit">Send</button>
  </div>
</form>
<div class="adservice-pc adservice-sp"></div>

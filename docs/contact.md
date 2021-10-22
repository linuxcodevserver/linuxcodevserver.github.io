---
title: お問い合わせ
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
</style>
<h2>フォーム</h2>
<form
  action="https://formspree.io/f/mnqlybkq"
  method="POST"
>
  <label>
    メールアドレス<br>
    <input type="email" name="email" class="textlines">
  </label><br><br>
  <label>
    内容<br>
    <textarea name="message" class="textlines"></textarea>
  </label><br><br>
  <!-- your other form fields go here -->
  <button type="submit" class=".md-button .md-button--primary">送信</button>
</form>
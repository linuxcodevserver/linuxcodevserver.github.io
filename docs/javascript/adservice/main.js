/* Ask user about cookie. */
try {
  if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieagree'))) {
      console.log('cokieagree.');
      if (document.cookie.split(';').some((item) => item.trim().startsWith('additionalserviceagree'))) {
          console.log('additionalserviceagree.');
      } else if (document.cookie.split(';').some((item) => item.trim().startsWith('additionalservicedisagree'))) {
          console.log('additionalservicedisagree.');
          throw new Error('Additional Service will not run. exiting...');
      } else {
          window.alert('追加サービスを許可しますか？許可するとAlpha Adservice(広告)とIBM(ウィジェット)とGithub(このサイトのすべての元)にブラウザが自動的にアクセスし、ipアドレスが送信される可能性があることを承諾したことになります。');
          if (window.confirm('追加サービスを許可しますか？')) {
              document.cookie = "additionalserviceagree=true";
          } else {
              document.cookie = "additionalservicedisagree=true";
              throw new Error('Additional Service will not run. exiting...');
          }
      }
  } else {
      /* window.alert('Cookieを許可しますか？'); */
      /* window.alert('Cookieを拒否するとAlpha Adservice（広告）とIBM（ウィジェット）とGithub（このサイトのすべての元）にブラウザが自動的にアクセスされる可能性があることを承認したことになります。つまり、ipアドレスをAlpha AdserviceとIBMとGithubに共有してもいいのなら、cokieを拒否しても構いません。なお、このアラートはcokieを拒否した場合仕様上サイトを訪問するたびに表示されます。') */
      if (window.confirm('Cookieを拒否するとAlpha Adservice（広告）とIBM（ウィジェット）とGithub（このサイトのすべての元）にブラウザが自動的にアクセスされる可能性があることを承認したことになります。つまり、ipアドレスをAlpha AdserviceとIBMとGithubに共有してもいいのなら、cokieを拒否しても構いません。なお、このアラートはcokieを拒否した場合仕様上サイトを訪問するたびに表示されます。\nCokieを許可しますか？')) {
          document.cookie = "cookieagree=true";
          location.reload();
      }
  }
  /* Settings */
  /* Set class name */
  const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
  const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */
  /* Set HTML */
  const html = '<script src="https://aas.information-portal.net/tag.php?invid=42"></script>'

  /* Main Code */
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
      for (i = 0; i < adssp.length; i++) {
          console.log("SmartPhone Mode");
          var adstag = document.createElement("iframe");
          adssp[i].appendChild(adstag);
          adstag.style.border = "none";
          adstag.style.overflowY = "hidden";
          adstag.scrolling = "no";
          adstag.style.width = "300px";
          adstag.style.height = "250px";
          adstag.contentWindow.document.open();
          adstag.contentWindow.write(html)
          adstag.contentWindow.close();
      }
  } else {
      for (i=0; i < adspc.length; i++) {
          console.log("PC Mode")
          var adstag = document.createElement("iframe");
          adspc[i].appendChild(adstag);
          adstag.style.border = "none";
          adstag.style.overflowY = "hidden";
          adstag.scrolling = "no";
          adstag.style.width = "300px";
          adstag.style.height = "250px"
          adstag.contentWindow.document.open();
          adstag.contentWindow.document.write(html);
          adstag.contentWindow.document.close();
      }
  }
  /* run insertcode */
  window.globalFunction.insertcode_main();
} catch(e) {
    console.log(e.message)
}

/* Main Code(Disabled)
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
//    adssp.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidsp + '"></script>';  // createElementへの移行により廃止
    for (i = 0; i < adssp.length; i++) {
        var adstag = document.createElement("script");
        adstag.setAttribute("src", "https://aas.information-portal.net/tag.php?invid=" + invidsp);
        adssp[i].appendChild(adstag);
    }
} else {
//    adspc.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidpc + '"></script>'; // createElementへの移行により廃止
    for (i = 0; i < adspc.length; i++) {
        var adstag = document.createElement("script");
        adstag.setAttribute("src", "https://aas.information-portal.net/tag.php?invid=" + invidpc);
        adspc[i].appendChild(adstag);
    }
}
*/
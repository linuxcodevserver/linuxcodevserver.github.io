/* Settings */
/* Set class name */
const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */
/* Set HTML */
const html = '<script src="https://aas.information-portal.net/tag.php?invid=42"></script>'

/* Main Code */
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    for (i = 0; i < adssp.length; i++) {
        var adstag = document.createElement("iframe");
        adssp[i].appendChild(adstag);
    }
} else {
    for (i=0; i < adspc.length; i++) {
        var adstag = document.createElement("iframe");
        adspc[i].appendChild(adstag);
    }
}
adstag.style.border = "none"
adstag.style.height = 300
adstag.style.height = 250
adstag.contentWindow.document.open();
adstag.contentWindow.document.write(html);
adstag.contentWindow.document.close()

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
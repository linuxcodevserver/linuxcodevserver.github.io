/* Settings */
/* Set class name */
const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */

/* Main Code */
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    for (i = 0; i < adssp.length; i++) {
        var adstag = document.createElement("iframe");
        adstag.setAttribute("src", "https://linuxcodevserver.github.io/javascript/adservice/ads.html");
        adssp[i].appendChild(adstag);
    }
} else {
    for (i=0; i < adspc.length; i++) {
        var adstag = document.createElement("iframe");
        adstag.setAttribute("src", "https://linuxcodevserver.github.io/javascript/adservice/ads.html");
        adspc[i].appendChild(adstag);
    }
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
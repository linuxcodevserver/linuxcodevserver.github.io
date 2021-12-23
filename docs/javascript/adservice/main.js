/* Settings */
/* Set class name */
const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */
/* Set Adservice Code */
const invidsp=42;
const invidpc=57;

/* Main Code */
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
//    adssp.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidsp + '"></script>';  // createElementへの移行により廃止
    for (i = 0; i < adssp.length; i++) {
        var adstag = document.createElement();
        adstag.setAttribute("src", "https://aas.information-potal.net/tag.php?invid=" + invidsp);
        var adstag = adssp[i].appendChild(adstag);
    }
} else {
//    adspc.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidpc + '"></script>'; // createElementへの移行により廃止
    for (i = 0; i < adspc.length; i++) {
        var adstag = document.createElement();
        adstag.setAttribute("src", "https://aas.information-potal.net/tag.php?invid=" + invidpc);
        var adstag = adspc[i].appendChild(adstag);
    }
}

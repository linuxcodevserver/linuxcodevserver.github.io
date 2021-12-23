/* Settings */
/* Set class name */
const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */
/* Create new Element */
var adstag = document.createElement('script');
/* Set Adservice Code */
const invidsp=42;
const invidpc=57;

/* Main Code */
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
//    adssp.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidsp + '"></script>';  // createElementへの移行により廃止
    adstag.setAttribute("src", "https://aas.information-potal.net/tag.php?invid=" + invidsp);
    adssp.appendChild(adstag)
} else {
//    adspc.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidpc + '"></script>'; // createElementへの移行により廃止
    adstag.setAttribute("src", "https://aas.information-potal.net/tag.php?invid=" + invidpc);
    adspc.appendChild(adstag);
}

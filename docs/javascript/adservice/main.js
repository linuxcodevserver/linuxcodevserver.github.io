/* Settings */
/* Set class name */
const adssp = document.getElementsByClassName('adservice-sp'); /* for SmartPhone */
const adspc = document.getElementsByClassName('adservice-pc'); /* for PC */
/* Set Adservice Code */
const invidsp=42;
const invidpc=57;

/* Main Code */
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    adssp.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidsp + '"></script>';
} else {
    adspc.innerHTML = '<script src="https://aas.information-portal.net/tag.php?invid=' + invidpc + '"></script>';
}

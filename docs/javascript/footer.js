// Wait loading
window.addEventListener('DOMContentLoaded', ()=>{

// Init
let footerspan = document.getElementById('footer');
var ua = navigator.userAgent;

// For PC
if (!(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 || ua.indexOf('Mobile') > 0 )) {
    // Insert Footer Code for PC
    footerspan.insertAdjacentHTML('beforeend', '<div style=\"background-color: black; color: white;\"><ul class=\"footer-ul\" style=\"display: -webkit-flex; display: flex; -webkit-justify-content: space-around; justify-content: space-around; list-style-type: none;\"><li style=\"text-align: left;\" class=\"footer-li\"><br><br><details style=\"font-size: 110%\"><summary class=\"noselect\">ライセンス</summary><a href=\"http://creativecommons.org/licenses/by-sa/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0; margin-left: 0.3cm;\" src=\"https://i.creativecommons.org/l/by-sa/4.0/88x31.png\" /></a><br><span style=\"margin-left: 0.3cm;\" onclick=\"location.href=\'https://linuxcodevserver.github.io\';\">皆の意見交流所公式サイト</span><span> by </span><span onclick=\"location.href=\'https://discord.com/invite/sUdAE64Zc7\';\">Zect#3279, okaits#7534(皆の意見交流所)</span><span> is licensed under a </span><span onclick=\"location.href=\'http://creativecommons.org/licenses/by-sa/4.0/\';\">Creative Commons Attribution-ShareAlike 4.0 International License</span>.<span style=\"margin-right: 30%;\"></span><br><br></details><details style=\"font-size: 110%\"><summary class=\"noselect\">Github&Discord</summary><a href=\"https://github.com/linuxcodevserver/linuxcodevserver.github.io\" style=\"margin-left: 0.2cm;\"><img src=\"https://linuxcodevserver.github.io/linuxcodevblog/img/github.png\" alt=\"Github\" style=\"width: 2cm;\"></a><br><a href=\"https://discord.com/invite/sUdAE64Zc7\" style=\"margin-left: 0.2cm;\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nfqO4NZWwz5Tg6FYeHMX8O1UUj9bSYNqPw&usqp=CAU\" alt=\"Discord Invite\" style=\"width: 2cm;\"></a><br></details><details style=\"font-size: 110%\"><summary class=\"noselect\">アクセスカウンター</summary><div style=\"margin-left: 0.2cm\">');
    var accesscounter = document.createElement("script");
    accesscounter.setAttribute("src", "https://counter1.fc2.com/counter.php?id=89494694");
    footerspan.appendChild(accesscounter);
    footerspan.insertAdjacentHTML('beforeend', '<noscript><img style=\"margin-left: 0.3cm;\" src=\"//counter1.fc2.com/counter_img.php?id=89494694\" /></noscript></div><br></details></li><li style=\"text-align: right;\" class=\"footer-li\"><label>広告</label><br>');
    var ads = document.createElement("script");
    ads.setAttribute("src", "https://aas.information-portal.net/tag.php?invid=20");
    footerspan.appendChild(ads);
    footerspan.insertAdjacentElement('beforeend', '</li></ul></div>');
};
// For SmartPhone
if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
    // Insert Footer Code for SP
    footerspan.insertAdjacentHTML('beforeend', '<div style=\"background-color: black; color: white;\"><br><br><ul class=\"footer-ul\" style=\"list-style-type: none;\"><li class=\"footer-li\"><details style=\"font-family: \'Noto Sans JP\', sans-serif; font-size: 110%;\"><summary class=\"noselect\">ライセンス</summary><a href=\"http://creativecommons.org/licenses/by-sa/4.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0; margin-left: 0.3cm;\" src=\"https://i.creativecommons.org/l/by-sa/4.0/88x31.png\" /></a><br><span style=\"margin-left: 0.3cm;\" onclick=\"location.href=\'https://linuxcodevserver.github.io\';\">皆の意見交流所公式サイト</span><span> by </span><span onclick=\"location.href=\'https://discord.com/invite/sUdAE64Zc7\';\">Zect#3279, okaits#7534(皆の意見交流所)</span><span> is licensed under a </span><span onclick=\"location.href=\'http://creativecommons.org/licenses/by-sa/4.0/\';\">Creative Commons Attribution-ShareAlike 4.0 International License</span>.<span style=\"margin-right: 30%;\"></span><br><br></details></li><li class=\"footer-li\"><details style=\"font-family: \'Noto Sans JP\', sans-serif; font-size: 110%;\"><summary class=\"noselect\">Github&Discord</summary><a href=\"https://github.com/linuxcodevserver/linuxcodevserver.github.io\" style=\"margin-left: 0.2cm;\"><img src=\"https://linuxcodevserver.github.io/linuxcodevblog/img/github.png\" alt=\"Github\" style=\"width: 2cm;\"></a><br><a href=\"https://discord.com/invite/sUdAE64Zc7\" style=\"margin-left: 0.2cm;\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nfqO4NZWwz5Tg6FYeHMX8O1UUj9bSYNqPw&usqp=CAU\" alt=\"Discord Invite\" style=\"width: 2cm;\"></a><br></details></li><li class=\"footer-li\"><details style=\"font-family: \'Noto Sans JP\', sans-serif; font-size: 110%;\"><summary class=\"noselect\">アクセスカウンター</summary><div style=\"margin-left: 0.2cm\">');
    var accesscounter = document.createElement("script");
    accesscounter.setAttribute("src", "https//counter1.fc2.com/counter.php?id=89494694");
    footerspan.appendChild(accesscounter);
    footerspan.insertAdjacentHTML('beforeend', '<noscript><img style=\"margin-left: 0.3cm;\" src=\"//counter1.fc2.com/counter_img.php?id=89494694\" /></noscript></div><br></details></li><li class=\"footer-li\"><label>広告</label><br>');
    var ads = document.createElement("script");
    ads.setAttribute("src", "https://aas.information-portal.net/tag.php?invid=20");
    footerspan.appendChild(ads);
    footerspan.insertAdjacentElement("</li></ul></div")
};

});
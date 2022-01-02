/* Set class name */
const wcgwidgetteam = document.getElementsByClassName("wcg-widget-team");

/* Set HTML code */
const wcgwidgetteamHTML = '<iframe src="https://www.worldcommunitygrid.org/getDynamicImage.do?teamId=8MMCBZWZG2&mnOn=true&stat=4&imageNum=1&rankOn=true&projectsOn=false&special=true&link=2&memberId=1152102" frameborder="0" name="di" scrolling="no" width="405px" height="145px"></iframe>';

/* Main code */
for (i = 0; i < wcgwidgetteam.length; i++) {
    var wcgwidgetteamtag = document.createElement("iframe");
    wcgwidgetteam[i].appendChild(wcgwidgetteamtag);
    wcgwidgetteamtag.style.border = "none";
    wcgwidgetteamtag.style.overflowY = "hidden";
    wcgwidgetteamtag.scrolling = "no";
    wcgwidgetteamtag.contentWindow.document.open();
    wcgwidgetteamtag.contentWindow.write(wcgwidgetteamHTML);
    wcgwidgetteamtag.contentWindow.close();
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function showCookieQuestion() {
    var cookieelement = document.createElement('div');
    cookieelement.id = 'cookie-consent';
    cookieelement.innerHTML = '    <div style="position:fixed;z-index:200;top:0; left:0; background-color: black; opacity:0.2; width:100vw;height:100vh;"></div><div style="z-index:300;position: fixed; bottom: 0; left:0;background-color: white; width: 100vw;"><div class="cookie-consent-container"><div style="display: flex; flex-direction:column"><div class="footer-header" style="text-align: left; margin-left: 0px;">Vi använder kakor på ClinicWiz</div><div>Vi använder kakor för personligt innehåll och annonser samt för analys av vår trafik. Vi delar information om din användning av tjänsten med våra partners inom sociala medier, annonsering och trafikanalys. Våra partners kan kombinera denna data med information som du delat med dem.</div><span style="margin-top:10px">Läs mer här <a style="text-decoration: underline; margin-top: 5px;" href="/privacy_policy">Privacy Policy</a></span></div><div class="cookie-consent-buttons"><button id="deny-cookie" class="main-button" style="color:darkgray;background-color:lightgray; margin:0px 5px">Avvisa alla</button><button id="allow-cookie" class="main-button" style="color:white;background-color: #4d9669; margin:0px 5px">Tillåt</button></div></div></div>';
    document.body.appendChild(cookieelement);

    document.getElementById('deny-cookie').onclick = function () {
        setCookie('cookie-consent', false, 7);
        document.getElementById('cookie-consent').remove();
    }

    document.getElementById('allow-cookie').onclick = function () {
        setCookie('cookie-consent', true, 365);
        document.getElementById('cookie-consent').remove();
        checkCookieConcent();
    }
}

function checkCookieConcent() {
    var allowCookie = getCookie('cookie-consent');
    if (allowCookie == 'true') {
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=G-35R633862W';
        document.head.appendChild(scriptElement);
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-35R633862W');

    } else if (allowCookie == 'false') {
        //not doing anthing
    } else {
        setTimeout(function () {
            showCookieQuestion();
        }, 1000);

    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkCookieConcent();
});

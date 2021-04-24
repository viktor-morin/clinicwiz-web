$(document).ready(function () {
    $('#clinicwiz-menu-mobile').click(function () {
        var menu = document.getElementById('clinicwiz-menu-mobile');
        var expaned = document.getElementById('clinicwiz-menu-mobile-expanded');
        var main = document.getElementById('main-menu');
        menu.classList.toggle('change');
        main.classList.toggle('main-menu-change');
        if (menu.classList.contains('change')) {
            expaned.style.display = 'grid';
        } else {
            expaned.style.display = 'none';
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 830) {
            var menu = document.getElementById('clinicwiz-menu-mobile');
            var expaned = document.getElementById('clinicwiz-menu-mobile-expanded');
            if (menu && expaned) {
                if (menu.classList.contains('change')) {
                    menu.classList.toggle('change');
                    var main = document.getElementById('main-menu');
                    main.classList.toggle('main-menu-change');
                }
                if (expaned.style.display == 'grid') {
                    expaned.style.display = 'none';
                }
            }
        }
    });

    var footerItems = document.getElementsByClassName('footer-link');
    for (i = 0; i < footerItems.length; i++) {
        footerItems[i].onclick = function () {
            if (this.dataset.url.startsWith('https'))
                window.open(
                    this.dataset.url,
                    '_blank'
                );
            else
                window.location.href = this.dataset.url;
        }
    }
});
(function() {
    const sidebar = document.getElementById('sidebar');
    let menuBtn = document.getElementById("toggle");

    function clicked() {
        var btn = this,
            svg,
            svgTitles,
            svgTitle;

        sidebar.classList.toggle('collapsed');

        requestAnimationFrame(function() {
            btn.setAttribute("aria-pressed", "false" === btn.getAttribute("aria-pressed"));
            svg = btn.getElementsByTagName("svg");
            if (svg) {
                svgTitles = svg[0].getElementsByTagName("title");
                if (svgTitles) {
                    svgTitle = svgTitles[0];
                    if ("false" === btn.getAttribute("aria-pressed")) {
                        svgTitle.textContent = "Open";
                    } else {
                        svgTitle.textContent = "Close";
                    }
                }
            }
        });
    }
    if (menuBtn) {
        menuBtn.addEventListener("click", clicked, false);
    }
}());
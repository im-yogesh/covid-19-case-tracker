/* Covid-19 v1.0.0 by Yogesh. **/

jQuery(function () {
    "use strict";
    var e, a, t, s, o, n, l = $(window), i = $(document), r = $("body"), c = $(".nk-navbar"), d = $(".toggle"), f = $(".nk-navbar-menu"), v = "has-fixed", h = "navbar-overlay", u = "menu-open", g = "mobile-menu", scrolllink = $('.scrollto');
    function m(e, a) {
        $(window).scrollTop() > a.top ? e.hasClass(v) || e.addClass(v) : e.hasClass(v) && e.removeClass(v)
    }
    function p() {
        l.width() < 992 ? f.delay(500).addClass(g) : (f.delay(500).removeClass(g),
            f.removeClass(u))
    }
    !function () {
        var e = $(".is-sticky");
        if (0 < e.length) {
            var a = e.offset();
            m(e, a),
                $(window).on("scroll", function () {
                    m(e, a)
                })
        }
    }(),

        $('a.scrollto[href*="#"]:not([href="#"])').on("click", function () {
            var e = c.hasClass(v) ? c.innerHeight() - 2 : c.innerHeight() - 32;
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var a = this.hash
                    , t = !!this.hash.slice(1) && $("[name=" + this.hash.slice(1) + "]")
                    , s = a.length ? $(a) : t;
                if (s.length)
                    return d.removeClass("active"),
                        f.removeClass(u),
                        $("." + h).remove(),
                        r.removeClass("noscroll"),
                        $("html, body").animate({
                            scrollTop: s.offset().top - 30
                        }, 1e3),
                        !1
            }
        }),

        0 < d.length && d.on("click", function (e) {
            var a = $(this)
                , t = a.data("menu-toggle");
            a.toggleClass("active"),
                $("#" + t).toggleClass(u),
                $("#" + t).after("<div class=" + h + "></div>"),
                f.hasClass(u) || $("." + h).remove(),
                r.toggleClass("noscroll"),
                e.preventDefault()
        }),
        i.on("click", "body", function (e) {
            !d.is(e.target) && 0 === d.has(e.target).length && !f.is(e.target) && 0 === f.has(e.target).length && l.width() < 992 && (d.removeClass("active"),
                f.removeClass(u),
                $("." + h).remove(),
                r.removeClass("noscroll"))
        }),
        p(),
        l.on("resize", function () {
            p()
        }),
        a = $(".toggle-offcanvas"),
        t = $(".nk-offcanvas"),
        0 < a.length && a.on("click", function (e) {
            var a = $(this)
                , t = a.data("offcanvas-toggle");
            a.toggleClass("active"),
                $("#" + t).toggleClass("offcanvas-shown"),
                $("#" + t).after('<div class="offcanvas-overlay"></div>'),
                $("#" + t).hasClass("offcanvas-shown") || $(".offcanvas-overlay").remove(),
                r.toggleClass("noscroll"),
                e.preventDefault()
        }),
        i.on("click", "body", function (e) {
            a.is(e.target) || 0 !== a.has(e.target).length || t.is(e.target) || 0 !== t.has(e.target).length || (a.removeClass("active"),
                t.removeClass("offcanvas-shown"),
                $(".offcanvas-overlay").remove(),
                r.removeClass("noscroll"))
        }),
        0 < (s = $(".nk-menu-toggle")).length && s.on("click", function (e) {
            var a = $(this).parent();
            l.width() < 992 && (a.children(".nk-menu-dropdown").slideToggle(400),
                a.siblings().children(".nk-menu-dropdown").slideUp(400),
                a.toggleClass("nk-menu-opened"),
                a.siblings().removeClass("nk-menu-opened")),
                e.preventDefault()
        }),

        0 < (n = $("[data-covid]")).length && n.each(function () {
            var l = $(this)
                , i = !!l.data("covid-update") && $("#" + l.data("covid-update"));

            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": "https://covid-193.p.rapidapi.com/statistics?country=All",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "dbd734df9dmshdec75273513b267p1d51e4jsn2aa6ba8bedf3"
                },
                success: function (response, status) {
                    if (status == "success") {
                        var a = response;
                        if (a) {

                            var t = l.find(".covid-stats-cases")
                                , s = l.find(".covid-stats-death")
                                , o = l.find(".covid-stats-recovered")
                                , n = l.find(".covid-update-time");

                            function numberWithCommas(number) {
                                var parts = number.toString().split(".");
                                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                return parts.join(".");
                            }

                            function dateFormatter(dateFromApi) {
                                var dateWant = new Date(dateFromApi);
                                var formate = dateWant.toString().replace("(India Standard Time)", "(IST)").slice(4);
                                var addStr = ", ";
                                var position = 11;
                                var output = [formate.slice(0, position), addStr, formate.slice(position)].join('');
                                return output;
                            }

                            a.response[0].cases.total && t.text(numberWithCommas(a.response[0].cases.total)),
                                a.response[0].deaths.total && s.text(numberWithCommas(a.response[0].deaths.total)),
                                a.response[0].cases.recovered && o.text(numberWithCommas(a.response[0].cases.recovered))
                            dateFormatter(a.response[0].time) && (0 < n.length ? n.text(dateFormatter(a.response[0].time)) : i && 0 < i.length && i.text(dateFormatter(a.response[0].time))),
                                l.find(".count").counterUp({
                                    delay: 20,
                                    time: 1000
                                });
                        }
                    }
                },
                error: function () {
                    alert("Unable to load data !!");
                }
            });
        });
}());

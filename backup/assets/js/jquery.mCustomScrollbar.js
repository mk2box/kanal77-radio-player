(function(b) {
    var a = {
            init: function(d) {
                var e = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        alwaysShowScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: {
                            enable: false,
                            scrollType: "continuous",
                            scrollSpeed: "auto",
                            scrollAmount: 40
                        },
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: false,
                            autoExpandHorizontalScroll: false,
                            autoScrollOnFocus: true,
                            normalizeMouseWheelDelta: false
                        },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function() {},
                            onScroll: function() {},
                            onTotalScroll: function() {},
                            onTotalScrollBack: function() {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function() {},
                            onDragStart: function() {},
                            onDragStop: function() {}
                        },
                        theme: "light"
                    },
                    d = b.extend(true, e, d);
                return this.each(function() {
                    var l = b(this);
                    if (l.hasClass("mCustomScrollbar")) {
                        return
                    }
                    if (d.set_width) {
                        l.css("width", d.set_width)
                    }
                    if (d.set_height) {
                        l.css("height", d.set_height)
                    }
                    if (!b(document).data("mCustomScrollbar-index")) {
                        b(document).data("mCustomScrollbar-index", "1")
                    } else {
                        var s = parseInt(b(document).data("mCustomScrollbar-index"));
                        b(document).data("mCustomScrollbar-index", s + 1)
                    }
                    l.wrapInner("<div class='mCustomScrollBox mCS-" + d.theme + "' id='mCSB_" + b(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + b(document).data("mCustomScrollbar-index"));
                    var f = l.children(".mCustomScrollBox");
                    if (d.horizontalScroll) {
                        f.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var j = f.children(".mCSB_h_wrapper");
                        j.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                            width: j.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else {
                        f.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var n = f.children(".mCSB_container");
                    if (b.support.touch) {
                        n.addClass("mCS_touch")
                    }
                    n.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var k = f.children(".mCSB_scrollTools"),
                        g = k.children(".mCSB_draggerContainer"),
                        o = g.children(".mCSB_dragger");
                    if (d.horizontalScroll) {
                        o.data("minDraggerWidth", o.width())
                    } else {
                        o.data("minDraggerHeight", o.height())
                    }
                    if (d.scrollButtons.enable) {
                        if (d.horizontalScroll) {
                            k.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            k.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    f.bind("scroll", function() {
                        if (!l.is(".mCS_disabled")) {
                            f.scrollTop(0).scrollLeft(0)
                        }
                    });
                    l.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: b(document).data("mCustomScrollbar-index"),
                        horizontalScroll: d.horizontalScroll,
                        scrollInertia: d.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: d.mouseWheel,
                        mouseWheelPixels: d.mouseWheelPixels,
                        autoDraggerLength: d.autoDraggerLength,
                        autoHideScrollbar: d.autoHideScrollbar,
                        alwaysShowScrollbar: d.alwaysShowScrollbar,
                        snapAmount: d.snapAmount,
                        snapOffset: d.snapOffset,
                        scrollButtons_enable: d.scrollButtons.enable,
                        scrollButtons_scrollType: d.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: d.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: d.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: d.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: d.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: d.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: d.contentTouchScroll,
                        onScrollStart_Callback: d.callbacks.onScrollStart,
                        onScroll_Callback: d.callbacks.onScroll,
                        onTotalScroll_Callback: d.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: d.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: d.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: d.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: d.callbacks.whileScrolling,
                        onDragStart_Callback: d.callbacks.onDragStart,
                        onDragStop_Callback: d.callbacks.onDragStop,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false,
                        mCSB_resizeTimeout: false,
                        mCSB_onContentResize: false
                    });
                    if (d.horizontalScroll) {
                        if (l.css("max-width") !== "none") {
                            if (!d.advanced.updateOnContentResize) {
                                d.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (l.css("max-height") !== "none") {
                            var r = false,
                                p = parseInt(l.css("max-height"));
                            if (l.css("max-height").indexOf("%") >= 0) {
                                r = p, p = l.parent().height() * r / 100
                            }
                            var i = (l.innerHeight() - l.height());
                            l.css("overflow", "hidden");
                            f.css("max-height", p - i)
                        }
                    }
                    l.mCustomScrollbar("update");
                    if (d.advanced.updateOnBrowserResize) {
                        var h = b(window).width(),
                            t = b(window).height();
                        b(window).bind("resize." + l.data("mCustomScrollbarIndex"), function() {
                            if (l.data("mCSB_resizeTimeout")) {
                                clearTimeout(l.data("mCSB_resizeTimeout"))
                            }
                            l.data("mCSB_resizeTimeout", setTimeout(function() {
                                if (!l.is(".mCS_disabled") && !l.is(".mCS_destroyed")) {
                                    var v = b(window).width(),
                                        u = b(window).height();
                                    if (h !== v || t !== u) {
                                        if (l.css("max-height") !== "none") {
                                            if (r) {
                                                f.css("max-height", (l.parent().height() * r / 100) - i)
                                            } else {
                                                f.css("max-height", (parseInt(l.css("max-height")) - i))
                                            }
                                        }
                                        l.mCustomScrollbar("update");
                                        h = v;
                                        t = u
                                    }
                                }
                            }, 150))
                        })
                    }
                    if (d.advanced.updateOnContentResize) {
                        if (d.horizontalScroll) {
                            var m = n.outerWidth(),
                                q = n.innerWidth()
                        } else {
                            var m = n.outerHeight(),
                                q = n.innerHeight()
                        }
                        l.data("mCSB_onContentResize", setInterval(function() {
                            if (d.horizontalScroll) {
                                if (d.advanced.autoExpandHorizontalScroll) {
                                    n.css({
                                        position: "absolute",
                                        width: "auto"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: (Math.ceil(n[0].getBoundingClientRect().right + 0.4) - Math.floor(n[0].getBoundingClientRect().left)),
                                        position: "relative"
                                    }).unwrap()
                                }
                                var v = n.outerWidth(),
                                    u = n.innerWidth()
                            } else {
                                var v = n.outerHeight(),
                                    u = n.innerHeight()
                            }
                            if (v != m || u != q) {
                                l.mCustomScrollbar("update");
                                m = v;
                                q = u
                            }
                        }, 300))
                    }
                })
            },
            update: function() {
                var m = b(this),
                    j = m.children(".mCustomScrollBox"),
                    p = j.children(".mCSB_container");
                p.removeClass("mCS_no_scrollbar");
                m.removeClass("mCS_disabled mCS_destroyed");
                j.scrollTop(0).scrollLeft(0);
                var x = j.children(".mCSB_scrollTools"),
                    n = x.children(".mCSB_draggerContainer"),
                    l = n.children(".mCSB_dragger");
                if (m.data("horizontalScroll")) {
                    var z = x.children(".mCSB_buttonLeft"),
                        s = x.children(".mCSB_buttonRight"),
                        e = j.width();
                    if (m.data("autoExpandHorizontalScroll")) {
                        p.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: (Math.ceil(p[0].getBoundingClientRect().right + 0.4) - Math.floor(p[0].getBoundingClientRect().left)),
                            position: "relative"
                        }).unwrap()
                    }
                    var y = p.outerWidth()
                } else {
                    var v = x.children(".mCSB_buttonUp"),
                        f = x.children(".mCSB_buttonDown"),
                        q = j.height(),
                        h = p.outerHeight()
                }
                if (h > q && !m.data("horizontalScroll")) {
                    x.css("display", "block");
                    var r = n.height();
                    if (m.data("autoDraggerLength")) {
                        var t = Math.round(q / h * r),
                            k = l.data("minDraggerHeight");
                        if (t <= k) {
                            l.css({
                                height: k
                            })
                        } else {
                            if (t >= r - 10) {
                                var o = r - 10;
                                l.css({
                                    height: o
                                })
                            } else {
                                l.css({
                                    height: t
                                })
                            }
                        }
                        l.children(".mCSB_dragger_bar").css({
                            "line-height": l.height() + "px"
                        })
                    }
                    var A = l.height(),
                        w = (h - q) / (r - A);
                    m.data("scrollAmount", w).mCustomScrollbar("scrolling", j, p, n, l, v, f, z, s);
                    var C = Math.abs(p.position().top);
                    m.mCustomScrollbar("scrollTo", C, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (y > e && m.data("horizontalScroll")) {
                        x.css("display", "block");
                        var g = n.width();
                        if (m.data("autoDraggerLength")) {
                            var i = Math.round(e / y * g),
                                B = l.data("minDraggerWidth");
                            if (i <= B) {
                                l.css({
                                    width: B
                                })
                            } else {
                                if (i >= g - 10) {
                                    var d = g - 10;
                                    l.css({
                                        width: d
                                    })
                                } else {
                                    l.css({
                                        width: i
                                    })
                                }
                            }
                        }
                        var u = l.width(),
                            w = (y - e) / (g - u);
                        m.data("scrollAmount", w).mCustomScrollbar("scrolling", j, p, n, l, v, f, z, s);
                        var C = Math.abs(p.position().left);
                        m.mCustomScrollbar("scrollTo", C, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        j.unbind("mousewheel focusin");
                        if (m.data("horizontalScroll")) {
                            l.add(p).css("left", 0)
                        } else {
                            l.add(p).css("top", 0)
                        }
                        if (m.data("alwaysShowScrollbar")) {
                            if (!m.data("horizontalScroll")) {
                                l.css({
                                    height: n.height()
                                })
                            } else {
                                if (m.data("horizontalScroll")) {
                                    l.css({
                                        width: n.width()
                                    })
                                }
                            }
                        } else {
                            x.css("display", "none");
                            p.addClass("mCS_no_scrollbar")
                        }
                        m.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function(h, p, m, j, z, e, D, v) {
                var k = b(this);
                if (!k.data("bindEvent_scrollbar_drag")) {
                    var n, o, B, w, d;
                    if (b.support.pointer) {
                        B = "pointerdown";
                        w = "pointermove";
                        d = "pointerup"
                    } else {
                        if (b.support.msPointer) {
                            B = "MSPointerDown";
                            w = "MSPointerMove";
                            d = "MSPointerUp"
                        }
                    }
                    if (b.support.pointer || b.support.msPointer) {
                        j.bind(B, function(K) {
                            K.preventDefault();
                            C(false);
                            k.data({
                                on_drag: true
                            });
                            j.addClass("mCSB_dragger_onDrag");
                            k.data("onDragStart_Callback").call(k);
                            var J = b(this),
                                M = J.offset(),
                                I = K.originalEvent.pageX - M.left,
                                L = K.originalEvent.pageY - M.top;
                            if (I < J.width() && I > 0 && L < J.height() && L > 0) {
                                n = L;
                                o = I
                            }
                        });
                        b(document).bind(w + "." + k.data("mCustomScrollbarIndex"), function(K) {
                            K.preventDefault();
                            if (k.data("on_drag")) {
                                var J = j,
                                    M = J.offset(),
                                    I = K.originalEvent.pageX - M.left,
                                    L = K.originalEvent.pageY - M.top;
                                G(n, o, L, I)
                            }
                        }).bind(d + "." + k.data("mCustomScrollbarIndex"), function(x) {
                            k.data({
                                on_drag: false
                            });
                            j.removeClass("mCSB_dragger_onDrag");
                            k.data("onDragStop_Callback").call(k);
                            C(true)
                        })
                    } else {
                        j.bind("mousedown touchstart", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            C(false);
                            var J = b(this),
                                N = J.offset(),
                                I, M;
                            if (K.type === "touchstart") {
                                var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
                                I = L.pageX - N.left;
                                M = L.pageY - N.top
                            } else {
                                k.data({
                                    on_drag: true
                                });
                                j.addClass("mCSB_dragger_onDrag");
                                k.data("onDragStart_Callback").call(k);
                                I = K.pageX - N.left;
                                M = K.pageY - N.top
                            }
                            if (I < J.width() && I > 0 && M < J.height() && M > 0) {
                                n = M;
                                o = I
                            }
                        }).bind("touchmove", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0],
                                J = b(this),
                                M = J.offset(),
                                I = N.pageX - M.left,
                                L = N.pageY - M.top;
                            G(n, o, L, I)
                        });
                        b(document).bind("mousemove." + k.data("mCustomScrollbarIndex"), function(K) {
                            if (k.data("on_drag")) {
                                var J = j,
                                    M = J.offset(),
                                    I = K.pageX - M.left,
                                    L = K.pageY - M.top;
                                G(n, o, L, I)
                            }
                        }).bind("mouseup." + k.data("mCustomScrollbarIndex"), function(x) {
                            k.data({
                                on_drag: false
                            });
                            j.removeClass("mCSB_dragger_onDrag");
                            k.data("onDragStop_Callback").call(k);
                            C(true)
                        })
                    }
                    k.data({
                        bindEvent_scrollbar_drag: true
                    })
                }

                function G(J, K, L, I) {
                    if (k.data("horizontalScroll")) {
                        k.mCustomScrollbar("scrollTo", (j.position().left - (K)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        k.mCustomScrollbar("scrollTo", (j.position().top - (J)) + L, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (b.support.touch && k.data("contentTouchScroll")) {
                    if (!k.data("bindEvent_content_touch")) {
                        var l, E, r, s, u, F, H;
                        p.bind("touchstart", function(x) {
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = b(this);
                            r = E.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            F = s;
                            H = u
                        });
                        p.bind("touchmove", function(x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = b(this).parent();
                            r = E.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            if (k.data("horizontalScroll")) {
                                k.mCustomScrollbar("scrollTo", H - u, {
                                    trigger: "internal"
                                })
                            } else {
                                k.mCustomScrollbar("scrollTo", F - s, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!k.data("bindEvent_scrollbar_click")) {
                    m.bind("click", function(I) {
                        var x = (I.pageY - m.offset().top) * k.data("scrollAmount"),
                            y = b(I.target);
                        if (k.data("horizontalScroll")) {
                            x = (I.pageX - m.offset().left) * k.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            k.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    k.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (k.data("mouseWheel")) {
                    if (!k.data("bindEvent_mousewheel")) {
                        h.bind("mousewheel", function(K, M) {
                            var J, I = k.data("mouseWheelPixels"),
                                x = Math.abs(p.position().top),
                                L = j.position().top,
                                y = m.height() - j.height();
                            if (k.data("normalizeMouseWheelDelta")) {
                                if (M < 0) {
                                    M = -1
                                } else {
                                    M = 1
                                }
                            }
                            if (I === "auto") {
                                I = 100 * Math.round(k.data("scrollAmount"))
                            }
                            if (k.data("horizontalScroll")) {
                                L = j.position().left;
                                y = m.width() - j.width();
                                x = Math.abs(p.position().left);
                                if (I >= h.width()) {
                                    I = h.width() * 0.9
                                }
                            } else {
                                if (I >= h.height()) {
                                    I = h.height() * 0.9
                                }
                            }
                            if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
                                K.preventDefault();
                                K.stopImmediatePropagation()
                            }
                            J = x - (M * I);
                            k.mCustomScrollbar("scrollTo", J, {
                                trigger: "internal"
                            })
                        });
                        k.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }

                function C(x) {
                    var y = p.find("iframe");
                    if (!y.length) {
                        return
                    }
                    var I = !x ? "none" : "auto";
                    y.css("pointer-events", I)
                }
                if (k.data("scrollButtons_enable")) {
                    if (k.data("scrollButtons_scrollType") === "pixels") {
                        if (k.data("horizontalScroll")) {
                            v.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", i, g);
                            k.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!k.data("bindEvent_buttonsPixels_x")) {
                                v.bind("click", function(x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount"))
                                });
                                D.bind("click", function(x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount"))
                                });
                                k.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            e.add(z).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", i, g);
                            k.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!k.data("bindEvent_buttonsPixels_y")) {
                                e.bind("click", function(x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount"))
                                });
                                z.bind("click", function(x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount"))
                                });
                                k.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }

                        function q(x) {
                            if (!j.data("preventAction")) {
                                j.data("preventAction", true);
                                k.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (k.data("horizontalScroll")) {
                            v.add(D).unbind("click");
                            k.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!k.data("bindEvent_buttonsContinuous_x")) {
                                v.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = A();
                                    k.data({
                                        mCSB_buttonScrollRight: setInterval(function() {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var i = function(x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollRight"))
                                };
                                v.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", i);
                                D.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = A();
                                    k.data({
                                        mCSB_buttonScrollLeft: setInterval(function() {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function(x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollLeft"))
                                };
                                D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", g);
                                k.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            e.add(z).unbind("click");
                            k.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!k.data("bindEvent_buttonsContinuous_y")) {
                                e.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = A();
                                    k.data({
                                        mCSB_buttonScrollDown: setInterval(function() {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var t = function(x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollDown"))
                                };
                                e.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", t);
                                z.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = A();
                                    k.data({
                                        mCSB_buttonScrollUp: setInterval(function() {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var f = function(x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollUp"))
                                };
                                z.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", f);
                                k.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }

                        function A() {
                            var x = k.data("scrollButtons_scrollSpeed");
                            if (k.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((k.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (k.data("autoScrollOnFocus")) {
                    if (!k.data("bindEvent_focusin")) {
                        h.bind("focusin", function() {
                            h.scrollTop(0).scrollLeft(0);
                            var x = b(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var J = p.position().top,
                                    y = x.position().top,
                                    I = h.height() - x.outerHeight();
                                if (k.data("horizontalScroll")) {
                                    J = p.position().left;
                                    y = x.position().left;
                                    I = h.width() - x.outerWidth()
                                }
                                if (J + y < 0 || J + y > I) {
                                    k.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        k.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (k.data("autoHideScrollbar") && !k.data("alwaysShowScrollbar")) {
                    if (!k.data("bindEvent_autoHideScrollbar")) {
                        h.bind("mouseenter", function(x) {
                            h.addClass("mCS-mouse-over");
                            c.showScrollbar.call(h.children(".mCSB_scrollTools"))
                        }).bind("mouseleave touchend", function(x) {
                            h.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                c.hideScrollbar.call(h.children(".mCSB_scrollTools"))
                            }
                        });
                        k.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function(d, e) {
                var h = b(this),
                    n = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: h.data("scrollInertia"),
                        scrollEasing: h.data("scrollEasing")
                    },
                    e = b.extend(n, e),
                    o, f = h.children(".mCustomScrollBox"),
                    j = f.children(".mCSB_container"),
                    q = f.children(".mCSB_scrollTools"),
                    i = q.children(".mCSB_draggerContainer"),
                    g = i.children(".mCSB_dragger"),
                    s = draggerSpeed = e.scrollInertia,
                    p, r, l, k;
                if (!j.hasClass("mCS_no_scrollbar")) {
                    h.data({
                        mCS_trigger: e.trigger
                    });
                    if (h.data("mCS_Init")) {
                        e.callbacks = false
                    }
                    if (d || d === 0) {
                        if (typeof(d) === "number") {
                            if (e.moveDragger) {
                                o = d;
                                if (h.data("horizontalScroll")) {
                                    d = g.position().left * h.data("scrollAmount")
                                } else {
                                    d = g.position().top * h.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                o = d / h.data("scrollAmount")
                            }
                        } else {
                            if (typeof(d) === "string") {
                                var u;
                                if (d === "top") {
                                    u = 0
                                } else {
                                    if (d === "bottom" && !h.data("horizontalScroll")) {
                                        u = j.outerHeight() - f.height()
                                    } else {
                                        if (d === "left") {
                                            u = 0
                                        } else {
                                            if (d === "right" && h.data("horizontalScroll")) {
                                                u = j.outerWidth() - f.width()
                                            } else {
                                                if (d === "first") {
                                                    u = h.find(".mCSB_container").find(":first")
                                                } else {
                                                    if (d === "last") {
                                                        u = h.find(".mCSB_container").find(":last")
                                                    } else {
                                                        u = h.find(d)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (u.length === 1) {
                                    if (h.data("horizontalScroll")) {
                                        d = u.position().left
                                    } else {
                                        d = u.position().top
                                    }
                                    o = d / h.data("scrollAmount")
                                } else {
                                    o = d = u
                                }
                            } else {
                                if (typeof(d) === "object") {
                                    var u = b(d);
                                    if (u.length === 1) {
                                        if (h.data("horizontalScroll")) {
                                            d = u.position().left
                                        } else {
                                            d = u.position().top
                                        }
                                        o = d / h.data("scrollAmount")
                                    } else {
                                        o = d = u
                                    }
                                }
                            }
                        }
                        if (h.data("horizontalScroll")) {
                            if (h.data("onTotalScrollBack_Offset")) {
                                r = -h.data("onTotalScrollBack_Offset")
                            }
                            if (h.data("onTotalScroll_Offset")) {
                                k = f.width() - j.outerWidth() + h.data("onTotalScroll_Offset")
                            }
                            if (o < 0) {
                                o = d = 0;
                                clearInterval(h.data("mCSB_buttonScrollLeft"));
                                if (!r) {
                                    p = true
                                }
                            } else {
                                if (o >= i.width() - g.width()) {
                                    o = i.width() - g.width();
                                    d = f.width() - j.outerWidth();
                                    clearInterval(h.data("mCSB_buttonScrollRight"));
                                    if (!k) {
                                        l = true
                                    }
                                } else {
                                    d = -d
                                }
                            }
                            var m = h.data("snapAmount");
                            if (m) {
                                d = Math.round(d / m) * m - h.data("snapOffset")
                            }
                            c.mTweenAxis.call(this, g[0], "left", Math.round(o), draggerSpeed, e.scrollEasing);
                            c.mTweenAxis.call(this, j[0], "left", Math.round(d), s, e.scrollEasing, {
                                onStart: function() {
                                    if (e.callbacks && !h.data("mCS_tweenRunning")) {
                                        t("onScrollStart")
                                    }
                                    if (h.data("autoHideScrollbar") && !h.data("alwaysShowScrollbar")) {
                                        c.showScrollbar.call(q)
                                    }
                                },
                                onUpdate: function() {
                                    if (e.callbacks) {
                                        t("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (e.callbacks) {
                                        t("onScroll");
                                        if (p || (r && j.position().left >= r)) {
                                            t("onTotalScrollBack")
                                        }
                                        if (l || (k && j.position().left <= k)) {
                                            t("onTotalScroll")
                                        }
                                    }
                                    g.data("preventAction", false);
                                    h.data("mCS_tweenRunning", false);
                                    if (h.data("autoHideScrollbar") && !h.data("alwaysShowScrollbar")) {
                                        if (!f.hasClass("mCS-mouse-over")) {
                                            c.hideScrollbar.call(q)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (h.data("onTotalScrollBack_Offset")) {
                                r = -h.data("onTotalScrollBack_Offset")
                            }
                            if (h.data("onTotalScroll_Offset")) {
                                k = f.height() - j.outerHeight() + h.data("onTotalScroll_Offset")
                            }
                            if (o < 0) {
                                o = d = 0;
                                clearInterval(h.data("mCSB_buttonScrollUp"));
                                if (!r) {
                                    p = true
                                }
                            } else {
                                if (o >= i.height() - g.height()) {
                                    o = i.height() - g.height();
                                    d = f.height() - j.outerHeight();
                                    clearInterval(h.data("mCSB_buttonScrollDown"));
                                    if (!k) {
                                        l = true
                                    }
                                } else {
                                    d = -d
                                }
                            }
                            var m = h.data("snapAmount");
                            if (m) {
                                d = Math.round(d / m) * m - h.data("snapOffset")
                            }
                            c.mTweenAxis.call(this, g[0], "top", Math.round(o), draggerSpeed, e.scrollEasing);
                            c.mTweenAxis.call(this, j[0], "top", Math.round(d), s, e.scrollEasing, {
                                onStart: function() {
                                    if (e.callbacks && !h.data("mCS_tweenRunning")) {
                                        t("onScrollStart")
                                    }
                                    if (h.data("autoHideScrollbar") && !h.data("alwaysShowScrollbar")) {
                                        c.showScrollbar.call(q)
                                    }
                                },
                                onUpdate: function() {
                                    if (e.callbacks) {
                                        t("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (e.callbacks) {
                                        t("onScroll");
                                        if (p || (r && j.position().top >= r)) {
                                            t("onTotalScrollBack")
                                        }
                                        if (l || (k && j.position().top <= k)) {
                                            t("onTotalScroll")
                                        }
                                    }
                                    g.data("preventAction", false);
                                    h.data("mCS_tweenRunning", false);
                                    if (h.data("autoHideScrollbar") && !h.data("alwaysShowScrollbar")) {
                                        if (!f.hasClass("mCS-mouse-over")) {
                                            c.hideScrollbar.call(q)
                                        }
                                    }
                                }
                            })
                        }
                        if (h.data("mCS_Init")) {
                            h.data({
                                mCS_Init: false
                            })
                        }
                    }
                }

                function t(v) {
                    if (h.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: j.position().top,
                            left: j.position().left,
                            draggerTop: g.position().top,
                            draggerLeft: g.position().left,
                            topPct: Math.round((100 * Math.abs(j.position().top)) / Math.abs(j.outerHeight() - f.height())),
                            leftPct: Math.round((100 * Math.abs(j.position().left)) / Math.abs(j.outerWidth() - f.width()))
                        };
                        switch (v) {
                            case "onScrollStart":
                                h.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(h, this.mcs);
                                break;
                            case "whileScrolling":
                                h.data("whileScrolling_Callback").call(h, this.mcs);
                                break;
                            case "onScroll":
                                h.data("onScroll_Callback").call(h, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                h.data("onTotalScrollBack_Callback").call(h, this.mcs);
                                break;
                            case "onTotalScroll":
                                h.data("onTotalScroll_Callback").call(h, this.mcs);
                                break
                        }
                    }
                }
            },
            stop: function() {
                var f = b(this),
                    d = f.children().children(".mCSB_container"),
                    e = f.children().children().children().children(".mCSB_dragger");
                c.mTweenAxisStop.call(this, d[0]);
                c.mTweenAxisStop.call(this, e[0])
            },
            disable: function(d) {
                var i = b(this),
                    e = i.children(".mCustomScrollBox"),
                    g = e.children(".mCSB_container"),
                    f = e.children(".mCSB_scrollTools"),
                    h = f.children().children(".mCSB_dragger");
                e.unbind("mousewheel focusin mouseenter mouseleave touchend");
                g.unbind("touchstart touchmove");
                if (d) {
                    if (i.data("horizontalScroll")) {
                        h.add(g).css("left", 0)
                    } else {
                        h.add(g).css("top", 0)
                    }
                }
                f.css("display", "none");
                g.addClass("mCS_no_scrollbar");
                i.data({
                    bindEvent_mousewheel: false,
                    bindEvent_focusin: false,
                    bindEvent_content_touch: false,
                    bindEvent_autoHideScrollbar: false
                }).addClass("mCS_disabled")
            },
            destroy: function() {
                var d = b(this);
                if (d.data("mCSB_resizeTimeout")) {
                    clearTimeout(d.data("mCSB_resizeTimeout"))
                }
                if (d.data("mCSB_onContentResize")) {
                    clearTimeout(d.data("mCSB_onContentResize"))
                }
                if (d.data("mCSB_buttonScrollDown")) {
                    clearTimeout(d.data("mCSB_buttonScrollDown"))
                }
                if (d.data("mCSB_buttonScrollUp")) {
                    clearTimeout(d.data("mCSB_buttonScrollUp"))
                }
                if (d.data("mCSB_buttonScrollLeft")) {
                    clearTimeout(d.data("mCSB_buttonScrollLeft"))
                }
                if (d.data("mCSB_buttonScrollRight")) {
                    clearTimeout(d.data("mCSB_buttonScrollRight"))
                }
                d.removeClass("mCustomScrollbar _mCS_" + d.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                b(document).unbind("mousemove." + d.data("mCustomScrollbarIndex") + " mouseup." + d.data("mCustomScrollbarIndex") + " MSPointerMove." + d.data("mCustomScrollbarIndex") + " MSPointerUp." + d.data("mCustomScrollbarIndex"));
                b(window).unbind("resize." + d.data("mCustomScrollbarIndex"))
            }
        },
        c = {
            showScrollbar: function() {
                if (b(this).css("opacity") == 0) {
                    this.stop().animate({
                        opacity: 1
                    }, "fast")
                }
            },
            hideScrollbar: function() {
                this.stop().animate({
                    opacity: 0
                }, "fast")
            },
            mTweenAxis: function(f, h, g, e, n, x) {
                var x = x || {},
                    u = x.onStart || function() {},
                    o = x.onUpdate || function() {},
                    v = x.onComplete || function() {};
                var m = s(),
                    k, i = 0,
                    q = f.offsetTop,
                    r = f.style;
                if (h === "left") {
                    q = f.offsetLeft
                }
                var l = g - q;
                p();
                d();

                function s() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                }

                function w() {
                    if (!i) {
                        u.call()
                    }
                    i = s() - m;
                    t();
                    if (i >= f._time) {
                        f._time = (i > f._time) ? i + k - (i - f._time) : i + k - 1;
                        if (f._time < i + 1) {
                            f._time = i + 1
                        }
                    }
                    if (f._time < e) {
                        f._id = _request(w)
                    } else {
                        v.call()
                    }
                }

                function t() {
                    if (e > 0) {
                        f.currVal = j(f._time, q, l, e, n);
                        r[h] = Math.round(f.currVal) + "px"
                    } else {
                        r[h] = g + "px"
                    }
                    o.call()
                }

                function d() {
                    k = 1000 / 60;
                    f._time = i + k;
                    _request = (!window.requestAnimationFrame) ? function(y) {
                        t();
                        return setTimeout(y, 0.01)
                    } : window.requestAnimationFrame;
                    f._id = _request(w)
                }

                function p() {
                    if (f._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(f._id)
                    } else {
                        window.cancelAnimationFrame(f._id)
                    }
                    f._id = null
                }

                function j(A, z, E, D, B) {
                    switch (B) {
                        case "linear":
                            return E * A / D + z;
                            break;
                        case "easeOutQuad":
                            A /= D;
                            return -E * A * (A - 2) + z;
                            break;
                        case "easeInOutQuad":
                            A /= D / 2;
                            if (A < 1) {
                                return E / 2 * A * A + z
                            }
                            A--;
                            return -E / 2 * (A * (A - 2) - 1) + z;
                            break;
                        case "easeOutCubic":
                            A /= D;
                            A--;
                            return E * (A * A * A + 1) + z;
                            break;
                        case "easeOutQuart":
                            A /= D;
                            A--;
                            return -E * (A * A * A * A - 1) + z;
                            break;
                        case "easeOutQuint":
                            A /= D;
                            A--;
                            return E * (A * A * A * A * A + 1) + z;
                            break;
                        case "easeOutCirc":
                            A /= D;
                            A--;
                            return E * Math.sqrt(1 - A * A) + z;
                            break;
                        case "easeOutSine":
                            return E * Math.sin(A / D * (Math.PI / 2)) + z;
                            break;
                        case "easeOutExpo":
                            return E * (-Math.pow(2, -10 * A / D) + 1) + z;
                            break;
                        case "mcsEaseOut":
                            var C = (A /= D) * A,
                                y = C * A;
                            return z + E * (0.499999999999997 * y * C + -2.5 * C * C + 5.5 * y + -6.5 * C + 4 * A);
                            break;
                        case "draggerRailEase":
                            A /= D / 2;
                            if (A < 1) {
                                return E / 2 * A * A * A + z
                            }
                            A -= 2;
                            return E / 2 * (A * A * A + 2) + z;
                            break
                    }
                }
            },
            mTweenAxisStop: function(d) {
                if (d._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(d._id)
                } else {
                    window.cancelAnimationFrame(d._id)
                }
                d._id = null
            },
            rafPolyfill: function() {
                var e = ["ms", "moz", "webkit", "o"],
                    d = e.length;
                while (--d > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[e[d] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[e[d] + "CancelAnimationFrame"] || window[e[d] + "CancelRequestAnimationFrame"]
                }
            }
        };
    c.rafPolyfill.call();
    b.support.touch = !!("ontouchstart" in window);
    b.support.pointer = window.navigator.pointerEnabled;
    b.support.msPointer = window.navigator.msPointerEnabled;
    b.fn.mCustomScrollbar = function(d) {
        if (a[d]) {
            return a[d].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof d === "object" || !d) {
                return a.init.apply(this, arguments)
            } else {
                b.error("Method " + d + " does not exist")
            }
        }
    }
})(jQuery);
/**
 * Functions
 */
function isOnPage(e) {
    return !!$(e).length && $(e)
}

function getMousePos(e) {
    var t = 0,
        o = 0;
    return e || (e = window.event), e.pageX || e.pageY ? (t = e.pageX, o = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
        x: t,
        y: o
    }
}

function swipedetect(e, t) {
    var o, n, a, l, s, i, r, c = e,
        u = t || function(e) {};
    c.addEventListener("touchstart", function(e) {
            i = e.changedTouches[0], o = "none", 0, n = i.pageX, r = i.pageY, s = (new Date).getTime()
        }, !1),
        function() {
            if ("function" == typeof window.CustomEvent) return;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var o = document.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }(), c.addEventListener("touchmove", function(e) {}, !1), c.addEventListener("touchend", function(e) {
            i = e.changedTouches[0], a = i.pageX - n, l = i.pageY - r, (new Date).getTime() - s <= 300 && (150 <= Math.abs(a) && Math.abs(l) <= 100 ? o = a < 0 ? "left" : "right" : 150 <= Math.abs(l) && Math.abs(a) <= 100 && (o = l < 0 ? "up" : "down")), u(o)
        }, !1)
}

function onInputFocus() {
    $(this).parent(".el-input").addClass("el-input--filled")
}

function onInputBlur() {
    "" === $(this).val() && $(this).parent(".el-input").removeClass("el-input--filled")
}

function onTextareaFocus() {
    $(this).parent(".el-textarea").addClass("el-textarea--filled")
}

function onTextareaBlur() {
    "" === $(this).val() && $(this).parent(".el-textarea").removeClass("el-textarea--filled")
}

function customInput(t) {
    var o = t.querySelector('[type="file"]'),
        n = t.querySelector("[data-js-label]");
    o.onchange = function() {
        if (o.value) {
            var e = o.value.replace(/^.*[\\\/]/, "");
            t.className += " mod-chosen", n.innerText = e
        }
    }
}

function getPlatformType() {
    return navigator.userAgent.match(/mobile/i) ? "Mobile" : navigator.userAgent.match(/iPad|Android|Touch/i) ? "Tablet" : "Desktop"
}

function extend(e, t) {
    for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
    return e
}

function animNavComponent() {
    var e = new RevealFx(document.querySelector(".js-anim-logo")),
        t = $(".js-anim-email"),
        o = $(".js-anim-btn-menu"),
        n = $(".js-anim-sound"),
        a = $(".js-anim-copyright"),
        l = $(".js-anim-social");
    e.reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 600,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, t.removeAttr("style"), o.removeAttr("style"), n.removeAttr("style"), a.removeAttr("style"), l.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, t.stop(!0, !0).animate({
                opacity: "1"
            }, 300), o.stop(!0, !0).animate({
                opacity: "1"
            }, 300), n.stop(!0, !0).animate({
                opacity: "1"
            }, 300, function() {
                n.removeAttr("style"), $(".page-wrapper").removeClass("js-animate")
            }), a.stop(!0, !0).animate({
                opacity: "1"
            }, 300, function() {
                a.removeAttr("style")
            }), l.stop(!0, !0).animate({
                opacity: "1"
            }, 300, function() {
                l.removeAttr("style")
            })
        }
    })
}

function animModalContent() {
    var t = $(".js-anim-modal-items"),
        o = $(".js-anim-modal-copyr "),
        e = new RevealFx(document.querySelector(".js-anim-modal-btn"));
    new RevealFx(document.querySelector(".js-anim-title-modal")).reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, t.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, t.stop(!0, !0).animate({
                opacity: "1"
            }, 300)
        }
    }), e.reveal({
        bgcolor: "#fff",
        duration: 600,
        delay: 200,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, o.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
        },
        onCover: function(e) {
            e.style.opacity = 1, o.stop(!0, !0).animate({
                opacity: "1"
            }, 300)
        },
        onComplete: function(e) {
            $(e).find(".el-btn").addClass("mod-hover")
        }
    })
}

function progressBtnStart(e) {
    e.addClass("state-loading"), e.attr("disabled", "disabled")
}

function progressBtnCancel(e) {
    e.removeClass("state-loading"), e.removeAttr("disabled")
}

function formClear(e) {
    e.find(".el-text-fel").removeClass("error valid el-input--filled el-textarea--filled"), "FORM" == e.prop("tagName") ? (e.get(0).reset(), e.find("input, textarea").each(function() {
        var e = $(this);
        if ("file" === e.attr("type")) {
            var t = e.closest(".el-file-input").find(".label").attr("data-text");
            e.closest(".el-file-input").removeClass("error valid mod-chosen"), e.closest(".el-file-input").find(".label").text(t), e.removeClass("error").next(".error").remove()
        } else e.closest(".el-text-fel").removeClass("error valid el-input--filled el-textarea--filled"), e.val("").removeClass("error").next(".error").remove()
    })) : e.find("input, textarea").each(function() {
        var e = $(this);
        e.closest(".el-text-fel").removeClass("error valid el-input--filled el-textarea--filled"), e.val("").removeClass("error").next(".error").remove()
    })
}

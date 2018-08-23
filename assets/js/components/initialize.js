svg4everybody();
var Cookies = {
    get: function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    },
    set: function(e, t, o) {
        var n = (o = o || {}).expires;
        if ("number" == typeof n && n) {
            var a = new Date;
            a.setTime(a.getTime() + 1e3 * n), n = o.expires = a
        }
        n && n.toUTCString && (o.expires = n.toUTCString());
        var l = e + "=" + (t = encodeURIComponent(t));
        for (var s in o) {
            l += "; " + s;
            var i = o[s];
            !0 !== i && (l += "=" + i)
        }
        document.cookie = l
    },
    delete: function(e) {
        this.set(e, "", {
            expires: -1
        })
    }
};
$("html,body").animate({
    scrollTop: 0
}, 0);
var black = "#111111",
    grey = "#f7f7f7",
    sunshineYellow = "rgb(240, 255, 50)";
$(document).on("load", function() {
    $(".page-body").height() <= $(".container-center").outerHeight() ? $("body").addClass("disable-container-center") : $("body").removeClass("disable-container-center")
}), $(document).ready(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 0), $(window).on("scroll", function() {
        var e = $(window).scrollTop(),
            t = window.innerHeight,
            o = $(".page-body").outerHeight();
        20 <= e ? $("body").addClass("start-scroll") : $("body").removeClass("start-scroll"), o <= t + e ? $("body").addClass("end-contend") : $("body").removeClass("end-contend")
    }), $(window).on("resize", function() {
        $(".page-body").height() <= $(".container-center").outerHeight() ? $("body").addClass("disable-container-center") : $("body").removeClass("disable-container-center")
    })
});

var music_sound = document.getElementById("music_sound");
1229 < window.innerWidth && !Cookies.get("music_sound_mute") ? (music_sound.volume = .5, music_sound.play()) : ($(".sound").addClass("mute"), music_sound.pause()), $(".sound").click(function(e) {
    e.preventDefault(), $(".sound").toggleClass("mute"), $(this).hasClass("mute") ? (Cookies.set("music_sound_mute", !0), music_sound.pause()) : (Cookies.delete("music_sound_mute"), music_sound.play())
});

var $social = $(".js-social");
isOnPage($social) && ($social.on("mouseover", "a", function() {
    $social.addClass("hovered")
}), $social.on("mouseleave", "a", function() {
    $social.removeClass("hovered")
})), $(document).ready(function(e) {
    e("html,body").animate({
        scrollTop: 0
    }, 0)
});

var animModal = {
    showModal: function(e) {
        e.preventDefault(), $("body").addClass("modal-opened"), $(".modal-content").stop(!0, !0).delay(400).animate({
            opacity: "1"
        }, 600, "easeOutExpo", function() {
            $("html").addClass("no-scroll"), $("body").addClass("no-scroll"), animModalContent()
        })
    },
    hideModal: function(e) {
        e.preventDefault(), $(".modal-content").stop(!0, !0).animate({
            opacity: "0"
        }, 160, "easeOutExpo", function() {
            setTimeout(function() {
                $modalContent.removeAttr("style"), $success.removeAttr("style"), $("html").removeClass("no-scroll"), $("body").removeClass("modal-opened no-scroll"), formClear($form), $(".js-anim-modal-items").removeAttr("style"), $(".js-anim-modal-btn").removeAttr("style"), $(".js-anim-title-modal").removeAttr("style"), $(".js-anim-modal-copyr ").removeAttr("style")
            }, 300)
        })
    }
};

($(document).on("click", ".js-open-modal", animModal.showModal), $(document).on("click", ".js-close-modal", animModal.hideModal), isOnPage($(".modal"))) && ("Tablet" != getPlatformType() && "Mobile" != getPlatformType() || swipedetect(el = document.getElementById("modal"), function(e) {
    "down" == e && $(".modal-content").stop(!0, !0).animate({
        opacity: "0"
    }, 160, "easeOutExpo", function() {
        setTimeout(function() {
            $modalContent.removeAttr("style"), $success.removeAttr("style"), $("html").removeClass("no-scroll"), $("body").removeClass("modal-opened no-scroll"), formClear($form), $(".js-anim-modal-items").removeAttr("style"), $(".js-anim-modal-btn").removeAttr("style"), $(".js-anim-title-modal").removeAttr("style"), $(".js-anim-modal-copyr ").removeAttr("style")
        }, 300)
    })
}));

var $generalMenu = $(".js-general-menu");
isOnPage($generalMenu) && ($generalMenu.on("mouseover", ".el-right-menu__link", function() {
    $generalMenu.addClass("hovered")
}), $generalMenu.on("mouseleave", ".el-right-menu__link", function() {
    $generalMenu.removeClass("hovered")
}));

var el, animMenu = {
    showMenu: function(e) {
        e.preventDefault(), $("body").addClass("general-menu-opened"), setTimeout(function() {
            $("html").addClass("no-scroll"), $("body").addClass("no-scroll")
        }, 100), $(".general-menu-content").stop(!0, !0).delay(400).animate({
            opacity: "1"
        }, 600, "easeOutExpo", function() {}), $(".close-line").stop(!0, !0).delay(400).animate({
            opacity: "1"
        }, 200, "easeOutExpo")
    },
    hideMenu: function(e) {
        e.preventDefault(), $(".close-line").stop(!0, !0).animate({
            opacity: "0"
        }, 160, "easeOutExpo"), $(".general-menu-content").stop(!0, !0).animate({
            opacity: "0"
        }, 160, "easeOutExpo", function() {
            setTimeout(function() {
                $("html").removeClass("no-scroll"), $("body").removeClass("general-menu-opened no-scroll")
            }, 160)
        })
    }
};

($(document).on("click", ".js-open-general-menu", animMenu.showMenu), $(document).on("click", ".js-close-general-menu", animMenu.hideMenu), $(document).on("click", ".js-close-line", animMenu.hideMenu), $(document).on("keyup", function(e) {
    27 === e.keyCode && (animMenu.hideMenu(e), animModal.hideModal(e))
}), "Tablet" == getPlatformType() || "Mobile" == getPlatformType()) && swipedetect(el = document.getElementById("general-menu"), function(e) {
    "left" == e && ($(".close-line").stop(!0, !0).animate({
        opacity: "0"
    }, 160, "easeOutExpo"), $(".general-menu-content").stop(!0, !0).animate({
        opacity: "0"
    }, 160, "easeOutExpo", function() {
        setTimeout(function() {
            $("html").removeClass("no-scroll"), $("body").removeClass("general-menu-opened no-scroll")
        }, 160)
    }))
});

var listVacancies = $(".js-list-vacancies");
listVacancies.length && $(document).on("click", ".js-list-vacancies .list-title", function(e) {
    e.preventDefault();
    var t = $(this).parent("li"),
        o = t.find(".content"),
        n = listVacancies.find("li");
    if (t.hasClass("is-open")) return !1;
    n.each(function() {
        var e = $(this);
        e.hasClass("is-open") && (e.find(".content-wrap").stop(!0, !0).animate({
            opacity: "0"
        }, 100, "easeOutExpo"), e.find(".content").slideUp(300), e.removeClass("is-open"))
    }), t.addClass("is-open"), o.slideToggle(300), t.find(".content-wrap").stop(!0, !0).delay(300).animate({
        opacity: "1"
    }, 500, "easeOutExpo")
});

var caseDetailFirst = $(".case-detail-first");
if (caseDetailFirst.length) {
    var elementWatcher = scrollMonitor.create(caseDetailFirst);
    elementWatcher.enterViewport(function() {
        $("body").removeClass("entered-viewport")
    }), elementWatcher.exitViewport(function() {
        $("body").addClass("entered-viewport")
    }), $(window).scroll(function() {
        var e = $(this).scrollTop();
        $(window).height() / 2 <= e ? $("body").addClass("menu-black") : $("body").removeClass("menu-black")
    })
}

$(".el-input__field").each(function() {
    "" !== $(this).val() && $(this).parent(".el-input").addClass("el-input--filled"), $(this).on("focus", onInputFocus), $(this).on("blur", onInputBlur)
}), $(".el-textarea__field").each(function() {
    "" !== $(this).val() && $(this).parent(".el-textarea").addClass("el-textarea--filled"), $(this).on("focus", onTextareaFocus), $(this).on("blur", onTextareaBlur)
});
for (var inputs = document.querySelectorAll(".el-file-input"), i = 0, len = inputs.length; i < len; i++) customInput(inputs[i]);

if ($(document).on("click", ".js-clear-file", function(e) {
    e.preventDefault(), $(".el-file-input").find("[data-js-label]").text($("[data-js-label]").data("text")), $(".el-file-input").find('[type="file"]').val(), $(".el-file-input").removeClass("mod-chosen"), $(".el-file-input").find("b.error").remove()
}), "Tablet" != getPlatformType() && "Mobile" != getPlatformType() || ($(".js-list-vacancies a.js-anim-items").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 50
    }, 500)
}), $(".general-menu, .case-detail-first").css("max-height", $(window).height()), $(".mod-case-detail").css("padding-top", $(window).height()), $(window).on("resize", function() {
    $(".general-menu, .case-detail-first").css("max-height", $(window).height()), $(".mod-case-detail").css("padding-top", $(window).height())
})), $(window).scroll(function() {
    var t = $(this).scrollTop();
    $(".mouse").length && $(".mouse").css({
        opacity: function() {
            var e = $(this).height();
            return .8 * (1 + (e - t) / e) + .2
        }
    })
}), $(function() {
    $(document).on("click", "a.mouse", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top
        }, 1200), e.preventDefault()
    })
}), $(".rellax").length && 768 <= $(window).height()) var rellax = new Rellax(".rellax");

var validator = {
    init: function() {
        $("form").each(function() {
            var e = $(this),
                t = e.attr("name");
            if (validator.valitatorRules.hasOwnProperty(t) || e.hasClass("js-validate")) {
                var a = validator.valitatorRules[t];
                e.validate({
                    rules: a,
                    errorElement: "b",
                    errorClass: "error",
                    focusInvalid: !0,
                    focusCleanup: !1,
                    errorPlacement: function(e, t) {
                        validator.setError($(t), e)
                    },
                    highlight: function(e, t, a) {
                        var r = validator.defineElement($(e));
                        "file" == $(e).attr("type") ? setTimeout(function() {
                            $(e).parents("label").find("b.error").addClass("file-error"), $(e).parents(".img-load").after($(e).parents("label").find("b.error"))
                        }, 100) : r && r.closest(".el-text-fel").removeClass(a).addClass(t)
                    },
                    unhighlight: function(e, t, a) {
                        var r = validator.defineElement($(e));
                        r && r.closest(".el-text-fel").removeClass(t).addClass(a)
                    },
                    onfocusout: function(e) {},
                    messages: validator.messages
                })
            }
        })
    },
    setError: function(e, t) {
        (e = this.defineElement(e)) && this.domWorker.error(e, t)
    },
    defineElement: function(e) {
        return e
    },
    domWorker: {
        error: function(e, t) {
            e.closest(".el-text-fel").addClass("error"), e.after(t)
        }
    },
    messages: {
        field_test: {
            required: "This field is required."
        }
    },
    valitatorRules: {
        form_test: {
            field_test: {
                required: !0
            }
        }
    }
};

validator.init(),
    function() {
        var e = {
            name: {
                required: !0,
                minlength: 2,
                maxlength: 255,
                messages: {
                    required: "This field is required.",
                    minlength: "Must have at least 2 characters!",
                    maxlength: "No more than 255 characters."
                }
            },
            company: {
                minlength: 2,
                maxlength: 255,
                messages: {
                    required: "This field is required.",
                    minlength: "Must have at least 2 characters!",
                    maxlength: "No more than 255 characters."
                }
            },
            message: {
                minlength: 10,
                maxlength: 500,
                messages: {
                    required: "некорректный вопрос",
                    minlength: "Must have at least 10 characters!",
                    maxlength: "No more than 500 characters."
                }
            },
            email: {
                required: !0,
                email: !0,
                maxlength: 255,
                messages: {
                    required: "This field is required.",
                    email: "Invalid e-mail!",
                    maxlength: "No more than 255 characters."
                }
            },
            file: {
                extension: "jpeg|jpg|png|doc|docx|pdf",
                filesize: 3072e4,
                messages: {
                    extension: "Invalid extension jpeg|jpg|png|doc|docx|pdf",
                    filesize: "File must be less than 30mb."
                }
            }
        };
        for (var t in e) $("[data-valid=" + t + "]").each(function() {
            $(this).rules("add", e[t])
        })
    }(), $.validator.addMethod("email", function(e) {
        if ("" == e) return !0;
        return /[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Zа-яА-ЯёЁ0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?\.)+[a-zA-Zа-яА-ЯёЁ0-9](?:[a-zA-Zа-яА-ЯёЁ0-9-]*[a-zA-Zа-яА-ЯёЁ0-9])?/.test(e)
    }), $.validator.addMethod("letters", function(e, t) {
        return this.optional(t) || /^[^1-9!@#\$%\^&\*\(\)\[\]:;,.?=+_<>`~\\\/"]+$/i.test(e)
    }), $.validator.addMethod("digits", function(e, t) {
        return this.optional(t) || /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/i.test(e)
    }), $.validator.addMethod("valueNotEquals", function(e, t, a) {
        return a != e
    }, "Value must not equal arg."), $.validator.addMethod("extension", function(e, t, a) {
        return a = "string" == typeof a ? a.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp(".(" + a + ")$", "i"))
    }), $.validator.addMethod("filesize", function(e, t, a) {
        return this.optional(t) || t.files[0].size <= a
    }), $.validator.addMethod("require_from_group", function(e, t, a) {
        var r = $(a[1], t.form),
            i = r.eq(0),
            n = i.data("valid_req_grp") ? i.data("valid_req_grp") : $.extend({}, this),
            s = r.filter(function() {
                return n.elementValue(this)
            }).length >= a[0];
        return i.data("valid_req_grp", n), $(t).data("being_validated") || (r.data("being_validated", !0), r.each(function() {
            n.element(this)
        }), r.data("being_validated", !1)), s
    }, $.validator.format("Please fill at least {0} of these fields."));
$(function() {
    var e, o, t;
    $(".page-404").length && (animNavComponent(), e = new RevealFx(document.querySelector(".js-anim-h1")), o = new RevealFx(document.querySelector(".js-anim-btn")), t = $(".js-anim-h3"), e.reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 1e3,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, t.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, t.stop(!0, !0).animate({
                opacity: "1"
            }, 300)
        }
    }), o.reveal({
        bgcolor: black,
        duration: 600,
        delay: 1200,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
        },
        onCover: function(e) {
            e.style.opacity = 1
        },
        onComplete: function(e) {
            $(e).find(".el-btn").addClass("mod-hover")
        }
    }))
});
$(function() {
    if ($(".mod-about").length) {
        t = $(".js-anim-text"), o = $(".js-anim-items"), n = $(".js-number"), a = $(".js-number-1"), i = $(".js-number-2"), e = new RevealFx(document.querySelector(".js-anim-title-section")), l = new RevealFx(document.querySelector(".js-anim-title-about")), s = new RevealFx(document.querySelector(".js-anim-btn")), c = new RevealFx(document.querySelector(".js-anim-title-clients")), r = $(".js-anim-text-clients"), e.reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 600,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, t.stop(!0, !0).animate({
                    opacity: "1"
                }, 300), o.stop(!0, !0).animate({
                    left: "0px",
                    opacity: "1"
                }, 600)
            }
        }), l.reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 1e3,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, n.animate({
                    left: "0px",
                    opacity: "1"
                }, 300, function() {
                    n.find(".text-number").stop(!0, !0).animate({
                        opacity: "1"
                    }, 300)
                }), a.stop(!0, !0).delay(200).animate({
                    left: "0px",
                    opacity: "1"
                }, 300, function() {
                    a.find(".text-number").stop(!0, !0).animate({
                        opacity: "1"
                    }, 300)
                }), i.stop(!0, !0).delay(300).animate({
                    left: "0px",
                    opacity: "1"
                }, 300, function() {
                    i.find(".text-number").stop(!0, !0).animate({
                        opacity: "1"
                    }, 300)
                })
            }
        }), s.reveal({
            bgcolor: black,
            duration: 600,
            delay: 800,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
            },
            onCover: function(e) {
                e.style.opacity = 1
            },
            onComplete: function(e) {
                $(e).find(".el-btn").addClass("mod-hover")
            }
        }), c.reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 1200,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, r.stop(!0, !0).animate({
                    opacity: "1"
                }, 300), $(".list-clients").stop(!0, !0).delay(50).animate({
                    opacity: "1"
                }, 300);
                var t = 1;
                $(".list-clients li").each(function() {
                    console.log($(this)), $(this).stop(!0, !0).delay(60 * t).animate({
                        opacity: "1"
                    }, 300), t++
                })
            }
        })
    }
    var t, o, n, a, i, e, l, s, c, r
});
$(function() {
    var t, n;
    isOnPage(".js-careers") && (t = $(".js-anim-h3"), n = $(".js-anim-items"), new RevealFx(document.querySelector(".js-anim-title-section")).reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 800,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, t.stop(!0, !0).animate({
                opacity: "1"
            }, 200), n.stop(!0, !0).animate({
                left: "0px",
                opacity: "1"
            }, 600, function() {
                n.addClass("is-ready"), setTimeout(function() {
                    $(".js-list-vacancies li.is-open .content").slideDown(300), $(".js-list-vacancies li.is-open").find(".content-wrap").stop(!0, !0).delay(300).animate({
                        opacity: "1"
                    }, 500, "easeOutExpo", function() {
                        var e = $(".page-body").height(),
                            t = $(".container-center").outerHeight;
                        e <= t ? $("body").addClass("disable-container-center") : $("body").removeClass("disable-container-center")
                    })
                }, 200)
            })
        }
    }))
});
$(function() {
    var a, t;

    function i() {
        var e;
        if (!this.isInViewport) return !1;
        if (this.isFullyInViewport) {
            if ((e = $(this.watchItem)).hasClass("container") && !e.hasClass("animated")) {
                var a = new RevealFx(e[0].querySelector(".js-anim-title-case-detail")),
                    t = e.find(".js-anim-text-case-detail"),
                    i = e.find(".js-anim-link-case-detail"),
                    s = e.find(".js-anim-items");
                if (e[0].querySelector(".js-anim-btn")) new RevealFx(e[0].querySelector(".js-anim-btn")).reveal({
                    bgcolor: black,
                    duration: 600,
                    delay: 600,
                    easing: "easeOutExpo",
                    onStart: function(e) {
                        e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
                    },
                    onCover: function(e) {
                        e.style.opacity = 1, $(e).find(".el-btn").addClass("mod-hover")
                    }
                });
                a.reveal({
                    bgcolor: sunshineYellow,
                    duration: 600,
                    delay: 200,
                    easing: "easeOutExpo",
                    onStart: function(e) {
                        e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
                    },
                    onCover: function(e) {
                        e.style.opacity = 1, s.stop(!0, !0).animate({
                            left: "0px",
                            opacity: "1"
                        }), t.stop(!0, !0).delay(100).animate({
                            opacity: "1"
                        }, 300), i.stop(!0, !0).delay(200).animate({
                            opacity: "1"
                        }, 300)
                    }
                }), e.addClass("animated")
            }
        } else this.isAboveViewport ? (e = $(this.watchItem)).hasClass("container-fluid") && (e.hasClass("animated") || (e.find(".img-case").stop(!0, !0).animate({
            opacity: "1"
        }, 300), e.addClass("animated"))) : this.isBelowViewport && (e = $(this.watchItem)).hasClass("container-fluid") && (e.hasClass("animated") || (e.find(".img-case").stop(!0, !0).animate({
            opacity: "1"
        }, 300), e.addClass("animated")))
    }
    $(".mod-case-detail").length && (a = $(".js-anim-title-case"), t = $(".mouse"), new RevealFx(document.querySelector(".js-anim-title-case")).reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 200,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, a.stop(!0, !0).delay(300).animate({
                opacity: "1"
            }, 300), t.stop(!0, !0).delay(300).animate({
                opacity: "1"
            }, 300)
        }
    }), $(".js-case-detail-content .case-detail-section").each(function() {
        var e, a;
        e = $(this), (a = scrollMonitor.create(e)).stateChange(i), i.call(a)
    }))
});
$(function() {
    var e, t;
    if (window.animateCases = {}, $(".mod-cases").length) {
        document.getElementById("container-services");
        new RevealFx(document.querySelector(".js-anim-title-cases")).reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 100,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            },
            onComplete: function() {
                i($(".case-section")[0], 0, function() {})
            }
        }), $(".js-container-cases .case-section").each(function() {
            var e, t;
            e = $(this), (t = scrollMonitor.create(e, -100)).stateChange(n), n.call(t)
        }), (t = function(e, t) {
            this.el = e, this.options = extend({}, this.options), extend(this.options, t), this.DOM = {}, this.DOM.rectangle = this.el.querySelector(".content__rectangle"), this.DOM.line = this.el.querySelector(".content__line"), this._initEvents()
        }).prototype.options = {
            movement: {
                rectangle: {
                    translation: {
                        x: -5,
                        y: -5
                    }
                },
                line: {
                    translation: {
                        x: 10,
                        y: 10
                    }
                }
            }
        }, t.prototype._initEvents = function() {
            this.mouseenterFn = function() {
                anime.remove(this.DOM.rectangle), anime.remove(this.DOM.line)
            }.bind(this), this.mousemoveFn = function(e) {
                requestAnimationFrame(function() {
                    this._layout(e)
                }.bind(this))
            }.bind(this), this.mouseleaveFn = function() {
                requestAnimationFrame(function() {
                    anime({
                        targets: [this.DOM.rectangle, this.DOM.line],
                        duration: 1500,
                        easing: "easeOutElastic",
                        elasticity: 400,
                        translateX: 0,
                        translateY: 0
                    })
                }.bind(this))
            }.bind(this), this.el.addEventListener("mousemove", this.mousemoveFn), this.el.addEventListener("mouseleave", this.mouseleaveFn), this.el.addEventListener("mouseenter", this.mouseenterFn)
        }, t.prototype._layout = function(e) {
            var t = getMousePos(e),
                n = document.body.scrollLeft + document.documentElement.scrollLeft,
                i = document.body.scrollTop + document.documentElement.scrollTop,
                o = this.el.getBoundingClientRect(),
                s = t.x - o.left - n,
                a = t.y - o.top - i,
                l = this.options.movement.rectangle.translation,
                r = this.options.movement.line.translation,
                c = {
                    x: (-1 * l.x - l.x) / o.width * s + l.x,
                    y: (-1 * l.y - l.y) / o.height * a + l.y
                },
                m = {
                    x: (-1 * r.x - r.x) / o.width * s + r.x,
                    y: (-1 * r.y - r.y) / o.height * a + r.y
                };
            this.DOM.rectangle.style.WebkitTransform = this.DOM.rectangle.style.transform = "translateX(" + c.x + "px) translateY(" + c.y + "px)", this.DOM.line.style.WebkitTransform = this.DOM.line.style.transform = "translateX(" + m.x + "px) translateY(" + m.y + "px)"
        }, e = function() {
            Array.from(document.querySelectorAll(".content--layout")).forEach(function(e) {
                new t(e)
            })
        }, 768 <= $(window).height() && e()
    }

    function n() {
        var e, t;
        if (!this.isInViewport) return !1;
        this.isFullyInViewport ? (t = (e = $(this.watchItem)).data("case"), i(e[0], t, function() {})) : this.isAboveViewport || this.isBelowViewport
    }

    function i(e, t, n) {
        var i = window.animateCases[t] || {};
        window.animateCases[t] || (i.status = !0, i.animType = $(e).find(".js-type"), i.animText = $(e).find(".js-anim-text"), i.animLink = $(e).find(".js-anim-link"), i.animLine = new RevealFx(e.querySelector(".line-wrap")), i.animImage = new RevealFx(e.querySelector(".img-wrap")), i.animTitle = new RevealFx(e.querySelector(".js-anim-title"))), i.status && (i.animTitle.reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 200,
            easing: "easeOutExpo",
            direction: "lr",
            onStart: function(e) {
                e.style.opacity = 0, i.animLink.removeAttr("style"), i.animText.removeAttr("style"), i.animType.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, i.animLink.stop(!0, !0).delay(200).animate({
                    opacity: "1"
                }, 300), i.animText.stop(!0, !0).delay(200).animate({
                    opacity: "1"
                }, 300), i.animType.stop(!0, !0).delay(200).animate({
                    opacity: "1"
                }, 300)
            }
        }), i.animLine.reveal({
            bgcolor: black,
            duration: 500,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, i.status = !1
            }
        }), i.animImage.reveal({
            bgcolor: black,
            duration: 500,
            delay: 800,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            },
            onComplete: function() {
                n()
            }
        })), window.animateCases[t] = i
    }
});
$(function() {
    var o, e;
    isOnPage(".js-contact") && (o = $(".js-anim-items"), e = new RevealFx(document.querySelector(".js-anim-btn")), new RevealFx(document.querySelector(".js-anim-title-section")).reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 800,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, o.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, o.stop(!0, !0).animate({
                left: "0px",
                opacity: "1"
            })
        }
    }), e.reveal({
        bgcolor: black,
        duration: 600,
        delay: 1e3,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
        },
        onCover: function(e) {
            e.style.opacity = 1
        },
        onComplete: function(e) {
            $(e).find(".el-btn").addClass("mod-hover")
        }
    }))
});
$(function() {
    var e, t, n = !0,
        o = 0;
    if (window.animateExpertise = {}, $(".mod-expertise").length) {
        if (l(document.querySelector(".mod-design"), 0, function() {
                $(".js-el-right-menu__list").stop(!0, !0).animate({
                    opacity: "1"
                }, 300)
            }), (t = function(e, t) {
                this.el = e, this.options = extend({}, this.options), extend(this.options, t), this.DOM = {}, this.DOM.rectangle = this.el.querySelector(".content__rectangle"), this.DOM.line = this.el.querySelector(".content__line"), this.DOM.line1 = this.el.querySelector(".content__line1"), this.DOM.line2 = this.el.querySelector(".content__line2"), this.DOM.line3 = this.el.querySelector(".content__line3"), this._initEvents()
            }).prototype.options = {
                movement: {
                    rectangle: {
                        translation: {
                            x: -10,
                            y: -10
                        }
                    },
                    line: {
                        translation: {
                            x: 10,
                            y: 10
                        }
                    },
                    line1: {
                        translation: {
                            x: 5,
                            y: 5
                        }
                    },
                    line2: {
                        translation: {
                            x: -3,
                            y: -3
                        }
                    },
                    line3: {
                        translation: {
                            x: 3,
                            y: 3
                        }
                    }
                }
            }, t.prototype._initEvents = function() {
                this.mouseenterFn = function() {
                    anime.remove(this.DOM.rectangle), anime.remove(this.DOM.line), anime.remove(this.DOM.line1), anime.remove(this.DOM.line2), anime.remove(this.DOM.line3)
                }.bind(this), this.mousemoveFn = function(e) {
                    requestAnimationFrame(function() {
                        this._layout(e)
                    }.bind(this))
                }.bind(this), this.mouseleaveFn = function() {
                    requestAnimationFrame(function() {
                        anime({
                            targets: [this.DOM.rectangle, this.DOM.line, this.DOM.line1, this.DOM.line2, this.DOM.line3],
                            duration: 1500,
                            easing: "easeOutElastic",
                            elasticity: 400,
                            translateX: 0,
                            translateY: 0
                        })
                    }.bind(this))
                }.bind(this), this.el.addEventListener("mousemove", this.mousemoveFn), this.el.addEventListener("mouseleave", this.mouseleaveFn), this.el.addEventListener("mouseenter", this.mouseenterFn)
            }, t.prototype._layout = function(e) {
                var t = getMousePos(e),
                    i = document.body.scrollLeft + document.documentElement.scrollLeft,
                    n = document.body.scrollTop + document.documentElement.scrollTop,
                    o = this.el.getBoundingClientRect(),
                    a = t.x - o.left - i,
                    l = t.y - o.top - n,
                    s = this.options.movement.rectangle.translation,
                    r = this.options.movement.line.translation,
                    c = this.options.movement.line1.translation,
                    m = this.options.movement.line2.translation,
                    u = this.options.movement.line3.translation,
                    y = {
                        x: (-1 * s.x - s.x) / o.width * a + s.x,
                        y: (-1 * s.y - s.y) / o.height * l + s.y
                    },
                    d = {
                        x: (-1 * r.x - r.x) / o.width * a + r.x,
                        y: (-1 * r.y - r.y) / o.height * l + r.y
                    },
                    h = {
                        x: (-1 * c.x - c.x) / o.width * a + c.x,
                        y: (-1 * c.y - c.y) / o.height * l + c.y
                    },
                    p = {
                        x: (-1 * m.x - m.x) / o.width * a + m.x,
                        y: (-1 * m.y - m.y) / o.height * l + m.y
                    },
                    f = {
                        x: (-1 * u.x - u.x) / o.width * a + u.x,
                        y: (-1 * u.y - u.y) / o.height * l + u.y
                    };
                this.DOM.rectangle.style.WebkitTransform = this.DOM.rectangle.style.transform = "translateX(" + y.x + "px) translateY(" + y.y + "px)", this.DOM.line.style.WebkitTransform = this.DOM.line.style.transform = "translateX(" + d.x + "px) translateY(" + d.y + "px)", this.DOM.line1.style.WebkitTransform = this.DOM.line1.style.transform = "translateX(" + h.x + "px) translateY(" + h.y + "px)", this.DOM.line2.style.WebkitTransform = this.DOM.line2.style.transform = "translateX(" + p.x + "px) translateY(" + p.y + "px)", this.DOM.line3.style.WebkitTransform = this.DOM.line3.style.transform = "translateX(" + f.x + "px) translateY(" + f.y + "px)"
            }, e = function() {
                Array.from(document.querySelectorAll(".content--layout")).forEach(function(e) {
                    new t(e)
                })
            }, 768 <= $(window).height() && e(), "Desktop" == getPlatformType()) {
            function i() {
                return function(e) {
                    e = window.event || e;
                    var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)),
                        i = $(".js-el-right-menu__list").find(".is-active a").data("expertise");
                    if (n) return 0 < t ? 0 != o && s(c(i), i, function() {
                        0 < o && (o -= 1), $(".js-el-right-menu__list").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu__list").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), r.gotoItem(o), l(c(o), o, function() {})
                    }) : 4 != o && s(c(i), i, function() {
                        o < 4 && (o += 1), $(".js-el-right-menu__list").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu__list").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), r.gotoItem(o), l(c(o), o, function() {})
                    }), n = !1, setTimeout(function() {
                        n = !0
                    }, 4e3), !1
                }
            }
            document.addEventListener ? (document.addEventListener("mousewheel", i(), !1), document.addEventListener("DOMMouseScroll", i(), !1)) : sq.attachEvent("onmousewheel", i())
        }
        if ("Tablet" == getPlatformType() || "Mobile" == getPlatformType()) {
            var a = document.getElementById("swipeexpertise");
            swipedetect(a, function(e) {
                var t = $(".js-el-right-menu__list").find(".is-active a").data("expertise");
                if (n) return "right" == e && 0 != o && s(c(t), t, function() {
                    0 < o && (o -= 1), $(".js-el-right-menu__list").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu__list").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), r.gotoItem(o), l(c(o), o, function() {})
                }), "left" == e && 4 != o && s(c(t), t, function() {
                    o < 4 && (o += 1), $(".js-el-right-menu__list").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu__list").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), r.gotoItem(o), l(c(o), o, function() {})
                }), n = !1, setTimeout(function() {
                    n = !0
                }, 4e3), !1
            })
        }
    }

    function l(e, t, i) {
        var n = window.animateExpertise[t] || {};
        window.animateExpertise[t] || (n.animSkill = $(e).find(".skill-expertise"), n.animText = $(e).find(".text-expertise"), n.animLine1 = new RevealFx(e.querySelector(".line-1")), n.animLine2 = new RevealFx(e.querySelector(".line-2")), n.animLine3 = new RevealFx(e.querySelector(".line-3")), n.animLine4 = new RevealFx(e.querySelector(".line-4")), n.animRectangle = new RevealFx(e.querySelector(".rectangle-yellow-wrap")), n.animTitle = new RevealFx(e.querySelector(".js-anim-title"))), n.animRectangle.reveal({
            bgcolor: black,
            duration: 500,
            delay: 600,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            }
        }), n.animTitle.reveal({
            bgcolor: black,
            duration: 600,
            delay: 1200,
            easing: "easeOutExpo",
            direction: "lr",
            onStart: function(e) {
                e.style.opacity = 0, n.animSkill.removeAttr("style"), n.animText.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, n.animSkill.stop(!0, !0).delay(200).animate({
                    opacity: "1"
                }, 300), n.animText.stop(!0, !0).delay(200).animate({
                    opacity: "1"
                }, 300)
            }
        }), n.animLine1.reveal({
            bgcolor: black,
            duration: 600,
            delay: 600,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            }
        }), n.animLine2.reveal({
            bgcolor: black,
            duration: 300,
            delay: 600,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            }
        }), n.animLine3.reveal({
            bgcolor: black,
            duration: 400,
            delay: 600,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            }
        }), n.animLine4.reveal({
            bgcolor: black,
            duration: 500,
            delay: 1400,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            },
            onComplete: function() {
                i()
            }
        }), window.animateExpertise[t] = n
    }

    function s(e, t, i) {
        var n = window.animateExpertise[t] || {};
        window.animateExpertise[t] || (n.animSkill = $(e).find(".skill-expertise"), n.animText = $(e).find(".text-expertise"), n.animLine1 = new RevealFx(e.querySelector(".line-1")), n.animLine2 = new RevealFx(e.querySelector(".line-2")), n.animLine3 = new RevealFx(e.querySelector(".line-3")), n.animLine4 = new RevealFx(e.querySelector(".line-4")), n.animRectangle = new RevealFx(e.querySelector(".rectangle-yellow-wrap")), n.animTitle = new RevealFx(e.querySelector(".js-anim-title"))), n.animRectangle.reveal({
            bgcolor: black,
            duration: 400,
            delay: 600,
            easing: "easeOutExpo",
            direction: "bt",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0
            },
            onComplete: function() {
                i()
            }
        }), n.animTitle.reveal({
            bgcolor: black,
            duration: 300,
            delay: 200,
            easing: "easeOutExpo",
            direction: "rl",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0, n.animSkill.removeAttr("style"), n.animText.removeAttr("style")
            }
        }), n.animLine1.reveal({
            bgcolor: black,
            duration: 400,
            delay: 300,
            easing: "easeOutExpo",
            direction: "bt",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0
            }
        }), n.animLine2.reveal({
            bgcolor: black,
            duration: 300,
            delay: 400,
            easing: "easeOutExpo",
            direction: "bt",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0
            }
        }), n.animLine3.reveal({
            bgcolor: black,
            duration: 200,
            delay: 300,
            easing: "easeOutExpo",
            direction: "bt",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0
            }
        }), n.animLine4.reveal({
            bgcolor: black,
            duration: 200,
            delay: 200,
            easing: "easeOutExpo",
            direction: "bt",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0
            }
        }), window.animateExpertise[t] = n
    }
    if ($(".morph-animation").length) var r = {
        arrayObjSVG: ["design", "frontend", "backend", "cms", "mobile"],
        isMobile: !1,
        flagMorph: !1,
        reverse: void 0,
        nextCompelte: void 0,
        init: function(e) {
            r.isMobile = e, $(function() {})
        },
        gotoItem: function(e) {
            var t = 1 * e,
                l = r.arrayObjSVG[t];
            $(".item-expertise").hide(), $("." + ("mod-" + l)).css("display", "inline-block"), $(function() {
                var e = "svg-" + l;
                TweenMax.set("#morphcompetences", {});
                var t = new TimelineMax({
                    onComplete: function() {}
                });
                t.pause();
                for (var i = $("#" + e + " path"), n = $("#svg-screen-morph path"), o = 0; o < 10; o++) i.eq(o).length && n.eq(o).length && t && t.to($("#svg-screen-morph path").eq(o)[0], .6, {
                    morphSVG: $("#" + e + " path").eq(o)[0],
                    ease: Expo.easeOut
                }, .01);
                t.play();
                var a = l.length - 1;
                n.each(function(e, t) {
                    a < e ? ($(t).css("fill", "rgba(0,0,0,0)"), $(t).css("display", "none")) : ($(t).css("fill", "#f7f7f7"), $(t).css("display", "block"))
                })
            })
        }
    };

    function c(e) {
        return document.querySelector(".mod-" + r.arrayObjSVG[e])
    }
    $(document).on("click", ".animate-serf", function(e) {
        e.preventDefault();
        var t = this,
            i = $(this).data("expertise"),
            n = $(this).closest(".js-el-right-menu__list").find(".is-active a").data("expertise");
        o = i, s(c(n), n, function() {
            var e = $(t).parent(".el-right-menu__item");
            if (e.hasClass("is-active")) return !1;
            $(".js-el-right-menu__list").find(".is-active").removeClass("is-active"), e.addClass("is-active"), r.gotoItem(i), l(c(i), i, function() {})
        })
    })
});

var $form = $(".form-contact"),
    $modalContent = $(".modal .js-form"),
    $success = $(".success-message");

$form.on("submit", function(e) {
    e.preventDefault(), $form.valid(), $form.validate().checkForm() && $.ajax({
        url: "/contacts/send",
        method: "POST",
        data: new FormData(this),
        processData: !1,
        contentType: !1,
        dataType: "json",
        beforeSend: function() {
            progressBtnStart($(".progress-button")), $form.find("button").prop("disabled", !0)
        },
        success: function(e) {
            $form.find("button").prop("disabled", !1), e.success && ($modalContent.stop(!0, !0).animate({
                opacity: "0"
            }, 160, "easeOutExpo", function() {
                $modalContent.hide(), $success.show()
            }), $success.stop(!0, !0).animate({
                opacity: "1"
            }, 160, "easeOutExpo"), formClear($form), setTimeout(function() {
                $(".modal-content").stop(!0, !0).animate({
                    opacity: "0"
                }, 160, "easeOutExpo", function() {
                    setTimeout(function() {
                        $modalContent.removeAttr("style"), $success.removeAttr("style"), $("body").removeClass("modal-opened"), formClear($form), $(".js-anim-modal-items").removeAttr("style"), $(".js-anim-modal-btn").removeAttr("style"), $(".js-anim-title-modal").removeAttr("style"), $(".js-anim-modal-copyr ").removeAttr("style"), progressBtnCancel($(".progress-button"))
                    }, 300)
                })
            }, 3e3))
        }
    })
});
$(function() {
    var i = !0,
        o = 0;
    window.animateHome = {};
    $(".page-index");
    var t = ["jetup", "design", "web-development", "application", "ecommerce", "startups"];

    function a(e, t, n) {
        var i = window.animateHome[t] || {};
        window.animateHome[t] || (i.animH1 = new RevealFx(e.querySelector(".js-anim-h1")), i.animBtn = new RevealFx(e.querySelector(".js-anim-btn")), i.animH3 = $(e).find(".js-anim-h3"), i.animText = $(e).find(".js-anim-text-home")), i.animH1.reveal({
            bgcolor: sunshineYellow,
            duration: 600,
            delay: 100,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, i.animH3.removeAttr("style"), i.animText.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, i.animH3.stop(!0, !0).animate({
                    opacity: "1"
                }, 300), i.animText.stop(!0, !0).animate({
                    opacity: "1"
                }, 300)
            }
        }), i.animBtn.reveal({
            bgcolor: black,
            duration: 600,
            delay: 300,
            easing: "easeOutExpo",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
            },
            onCover: function(e) {
                e.style.opacity = 1
            },
            onComplete: function(e) {
                $(e).find(".el-btn").addClass("mod-hover"), n()
            }
        }), window.animateHome[t] = i
    }

    function r(e, t, n) {
        var i = window.animateHome[t] || {};
        window.animateHome[t] || (i.animH1 = new RevealFx(e.querySelector(".js-anim-h1")), i.animBtn = new RevealFx(e.querySelector(".js-anim-btn")), i.animH3 = $(e).find(".js-anim-h3"), i.animText = $(e).find(".js-anim-text-home")), i.animH1.reveal({
            bgcolor: sunshineYellow,
            duration: 300,
            delay: 100,
            easing: "easeOutExpo",
            direction: "rl",
            onStart: function(e) {
                e.style.opacity = 1
            },
            onCover: function(e) {
                e.style.opacity = 0, i.animH3.removeAttr("style"), i.animText.removeAttr("style")
            },
            onComplete: function() {
                n()
            }
        }), i.animBtn.reveal({
            bgcolor: black,
            duration: 300,
            delay: 0,
            easing: "easeOutExpo",
            direction: "rl",
            onStart: function(e) {
                e.style.opacity = 1, $(e).find(".el-btn").removeClass("mod-hover")
            },
            onCover: function(e) {
                e.style.opacity = 0
            },
            onComplete: function(e) {
                $(e).find(".el-btn").addClass("mod-hover")
            }
        }), window.animateHome[t] = i
    }

    function s(e) {
        $(".home-item").hide(), $(e).css("display", "inline-block")
    }

    function l(e) {
        return document.querySelector(".mod-" + t[e])
    }
    if (window.animHomeFirst = function() {
            var e = new RevealFx(document.querySelector(".js-anim-h1")),
                t = $(".js-anim-r-menu"),
                n = new RevealFx(document.querySelector(".js-anim-btn")),
                i = $(".js-anim-h3"),
                o = $(".js-anim-text-home");
            e.reveal({
                bgcolor: sunshineYellow,
                duration: 600,
                delay: 800,
                easing: "easeOutExpo",
                onStart: function(e) {
                    e.style.opacity = 0, i.removeAttr("style"), o.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
                },
                onCover: function(e) {
                    e.style.opacity = 1, i.stop(!0, !0).animate({
                        opacity: "1"
                    }, 300), o.stop(!0, !0).animate({
                        opacity: "1"
                    }, 300)
                }
            }), n.reveal({
                bgcolor: black,
                duration: 600,
                delay: 1e3,
                easing: "easeOutExpo",
                onStart: function(e) {
                    e.style.opacity = 0, t.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1), $(e).find(".el-btn").removeClass("mod-hover")
                },
                onCover: function(e) {
                    e.style.opacity = 1, t.stop(!0, !0).animate({
                        opacity: "1"
                    }, 300)
                },
                onComplete: function(e) {
                    $(e).find(".el-btn").addClass("mod-hover")
                }
            })
        }, $(document).on("click", ".animate-home-link", function(e) {
            e.preventDefault();
            var t = this,
                n = $(this).data("home"),
                i = $(this).closest(".js-el-right-menu").find(".is-active a").data("home");
            o = n, r(l(i), i, function() {
                var e = $(t).parent(".el-right-menu__item");
                if (e.hasClass("is-active")) return !1;
                $(".js-el-right-menu").find(".is-active").removeClass("is-active"), e.addClass("is-active"), s(l(n)), a(l(n), n, function() {})
            })
        }), isOnPage(".js-home")) {
        if ("Desktop" == getPlatformType()) {
            function e() {
                return function(e) {
                    e = window.event || e;
                    var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)),
                        n = $(".js-el-right-menu").find(".is-active a").data("home");
                    if (i) return 0 < t ? 0 != o && r(l(n), n, function() {
                        0 < o && (o -= 1), $(".js-el-right-menu").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), s(l(o)), a(l(o), o, function() {})
                    }) : 5 != o && r(l(n), n, function() {
                        o < 5 && (o += 1), $(".js-el-right-menu").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), s(l(o)), a(l(o), o, function() {})
                    }), i = !1, setTimeout(function() {
                        i = !0
                    }, 3e3), !1
                }
            }
            document.addEventListener ? (document.addEventListener("mousewheel", e(), !1), document.addEventListener("DOMMouseScroll", e(), !1)) : sq.attachEvent("onmousewheel", e())
        }
        if ("Tablet" == getPlatformType() || "Mobile" == getPlatformType()) {
            var n = document.getElementById("swipezone");
            swipedetect(n, function(e) {
                var t = $(".js-el-right-menu").find(".is-active a").data("home");
                if (i) return "right" == e && 0 != o && r(l(t), t, function() {
                    0 < o && (o -= 1), $(".js-el-right-menu").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), s(l(o)), a(l(o), o, function() {})
                }), "left" == e && 5 != o && r(l(t), t, function() {
                    o < 5 && (o += 1), $(".js-el-right-menu").find(".el-right-menu__item").removeClass("is-active"), $(".js-el-right-menu").find(".el-right-menu__item:eq(" + o + ")").addClass("is-active"), s(l(o)), a(l(o), o, function() {})
                }), i = !1, setTimeout(function() {
                    i = !0
                }, 2400), !1
            })
        }
    }
    if ($("#animation-visual-canvas").length && 767 < window.innerWidth) {
        var u, d, f, v, h, y = [];

        function p(e) {
            var t = 0,
                n = 0,
                i = function(e) {
                    var t = e.offsetWidth,
                        n = e.offsetHeight,
                        i = 0,
                        o = 0;
                    for (; e;) i += e.offsetLeft, o += e.offsetTop, e = e.offsetParent;
                    return {
                        left: i,
                        top: o,
                        width: t,
                        height: n
                    }
                }(u).top;
            e.pageX || e.pageY ? (t = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), h.x = t, h.y = n - i
        }

        function g() {
            d = u.parentNode.offsetWidth, f = u.parentNode.offsetHeight, u.width = d, u.height = f
        }

        function w(e, t) {
            return Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
        }

        function b(e, t, n) {
            var i = this;
            i.pos = e || null, i.radius = t || null, i.color = n || null, this.draw = function() {
                i.active && (v.beginPath(), v.arc(i.pos.x, i.pos.y, i.radius, 0, 2 * Math.PI, !1), v.fillStyle = "rgba(0, 0, 0, " + i.active + ")", v.fill())
            }
        }

        function x() {
            for (var e in v.clearRect(0, 0, d, f), y) Math.abs(w(h, y[e])) < 4e3 ? (y[e].active = .3, y[e].circle.active = .6) : Math.abs(w(h, y[e])) < 2e4 ? (y[e].active = .1, y[e].circle.active = .3) : Math.abs(w(h, y[e])) < 4e4 ? (y[e].active = .02, y[e].circle.active = .1) : (y[e].active = 0, y[e].circle.active = 0), c(y[e]), y[e].circle.draw();
            requestAnimationFrame(x)
        }

        function c(e) {
            if (e.active)
                for (var t in e.closest) v.beginPath(), v.moveTo(e.x, e.y), v.lineTo(e.closest[t].x, e.closest[t].y), v.strokeStyle = "rgba(0, 0, 0, " + e.active + ")", v.stroke()
        }

        function C(e) {
            TweenLite.to(e, 1 + 1 * Math.random(), {
                x: e.originX - 50 + 100 * Math.random(),
                y: e.originY - 50 + 100 * Math.random(),
                ease: Circ.easeInOut,
                onComplete: function() {
                    C(e)
                }
            })
        }

        window.onload = function() {
            u = document.getElementById("animation-visual-canvas"), g(), v = u.getContext("2d"), h = {
                x: d / 2,
                y: f / 2
            };
            for (var e = 0; e < d; e += d / 20)
                for (var t = 0; t < f; t += f / 20) {
                    var n = e + Math.random() * d / 20,
                        i = t + Math.random() * f / 20;
                    y.push({
                        x: n,
                        originX: n,
                        y: i,
                        originY: i
                    })
                }
            for (var o = 0; o < y.length; o++) {
                for (var a = [], r = y[o], s = 0; s < y.length; s++) {
                    var l = y[s];
                    if (r != l) {
                        for (var c = !1, m = 0; m < 5; m++) c || null == a[m] && (a[m] = l, c = !0);
                        for (m = 0; m < 5; m++) c || w(r, l) < w(r, a[m]) && (a[m] = l, c = !0)
                    }
                }
                r.closest = a
            }
            for (var o in y) y[o].circle = new b(y[o], 2 + 2 * Math.random(), "rgba(0, 0, 0, 0.3)");
            for (var o in "ontouchstart" in window || window.addEventListener("mousemove", p), window.addEventListener("resize", g), x(), y) C(y[o])
        }
    }
});

$(function() {
    var e, t;
    window.animateService = {};
    var n, i = ["mod-design", "mod-web-development", "mod-application", "mod-ecommerce", "mod-startups"];

    function o() {
        var e, t;
        if (!this.isInViewport) return !0;
        this.isFullyInViewport ? "Desktop" == getPlatformType() && (e = $(this.watchItem).data("services"), t = i[e], s(document.querySelector("." + t), e, function() {})) : this.isAboveViewport || this.isBelowViewport && ("Tablet" != getPlatformType() && "Mobile" != getPlatformType() || (e = $(this.watchItem).data("services"), t = i[e], s(document.querySelector("." + t), e, function() {})))
    }

    function s(e, t, n) {
        var i = window.animateService[t] || {};
        window.animateService[t] || (i.status = !0, i.animText = $(e).find(".js-anim-text"), i.animLink = $(e).find(".js-anim-link"), i.animLine = new RevealFx(e.querySelector(".line-wrap")), i.animImage = new RevealFx(e.querySelector(".img-wrap")), i.animTitle = new RevealFx(e.querySelector(".js-anim-title"))), i.status && (i.animImage.reveal({
            bgcolor: sunshineYellow,
            duration: 500,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1
            }
        }), i.animTitle.reveal({
            bgcolor: black,
            duration: 600,
            delay: 200,
            easing: "easeOutExpo",
            direction: "lr",
            onStart: function(e) {
                e.style.opacity = 0, i.animLink.removeAttr("style"), i.animText.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, i.animLink.stop(!0, !0).animate({
                    opacity: "1"
                }, 300), i.animText.stop(!0, !0).animate({
                    opacity: "1"
                }, 300)
            }
        }), i.animLine.reveal({
            bgcolor: black,
            duration: 500,
            delay: 400,
            easing: "easeOutExpo",
            direction: "tb",
            onStart: function(e) {
                e.style.opacity = 0, $(e).closest(".block-revealer").css("opacity", 1)
            },
            onCover: function(e) {
                e.style.opacity = 1, i.status = !1
            },
            onComplete: function() {
                n()
            }
        })), window.animateService[t] = i
    }
    $(".mod-services").length && (n = $(".js-anim-text-services"), new RevealFx(document.querySelector(".js-anim-title-services")).reveal({
        bgcolor: sunshineYellow,
        duration: 600,
        delay: 100,
        easing: "easeOutExpo",
        onStart: function(e) {
            e.style.opacity = 0, n.removeAttr("style"), $(e).closest(".block-revealer").css("opacity", 1)
        },
        onCover: function(e) {
            e.style.opacity = 1, n.stop(!0, !0).animate({
                opacity: "1"
            })
        },
        onComplete: function() {
            s(document.querySelector(".mod-design"), 0, function() {})
        }
    }), $(".js-container-services .js-services-section").each(function() {
        var e, t;
        e = $(this), (t = scrollMonitor.create(e, -100)).stateChange(o), o.call(t)
    }), (t = function(e, t) {
        this.el = e, this.options = extend({}, this.options), extend(this.options, t), this.DOM = {}, this.DOM.rectangle = this.el.querySelector(".content__rectangle"), this.DOM.line = this.el.querySelector(".content__line"), this._initEvents()
    }).prototype.options = {
        movement: {
            rectangle: {
                translation: {
                    x: -10,
                    y: -10
                }
            },
            line: {
                translation: {
                    x: 10,
                    y: 10
                }
            }
        }
    }, t.prototype._initEvents = function() {
        this.mouseenterFn = function() {
            anime.remove(this.DOM.rectangle), anime.remove(this.DOM.line)
        }.bind(this), this.mousemoveFn = function(e) {
            requestAnimationFrame(function() {
                this._layout(e)
            }.bind(this))
        }.bind(this), this.mouseleaveFn = function() {
            requestAnimationFrame(function() {
                anime({
                    targets: [this.DOM.rectangle, this.DOM.line],
                    duration: 1500,
                    easing: "easeOutElastic",
                    elasticity: 400,
                    translateX: 0,
                    translateY: 0
                })
            }.bind(this))
        }.bind(this), this.el.addEventListener("mousemove", this.mousemoveFn), this.el.addEventListener("mouseleave", this.mouseleaveFn), this.el.addEventListener("mouseenter", this.mouseenterFn)
    }, t.prototype._layout = function(e) {
        var t = getMousePos(e),
            n = document.body.scrollLeft + document.documentElement.scrollLeft,
            i = document.body.scrollTop + document.documentElement.scrollTop,
            o = this.el.getBoundingClientRect(),
            s = t.x - o.left - n,
            a = t.y - o.top - i,
            r = this.options.movement.rectangle.translation,
            l = this.options.movement.line.translation,
            c = {
                x: (-1 * r.x - r.x) / o.width * s + r.x,
                y: (-1 * r.y - r.y) / o.height * a + r.y
            },
            m = {
                x: (-1 * l.x - l.x) / o.width * s + l.x,
                y: (-1 * l.y - l.y) / o.height * a + l.y
            };
        this.DOM.rectangle.style.WebkitTransform = this.DOM.rectangle.style.transform = "translateX(" + c.x + "px) translateY(" + c.y + "px)", this.DOM.line.style.WebkitTransform = this.DOM.line.style.transform = "translateX(" + m.x + "px) translateY(" + m.y + "px)"
    }, e = function() {
        Array.from(document.querySelectorAll(".content--layout")).forEach(function(e) {
            new t(e)
        })
    }, 768 <= $(window).height() && e())
});

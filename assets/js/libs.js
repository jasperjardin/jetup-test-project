! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        h = n.hasOwnProperty,
        a = h.toString,
        l = a.call(Object),
        m = {};

    function v(e, t) {
        var n = (t = t || E).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }
    var c = "3.1.0",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        d = /-([a-z])/g,
        y = function(e, t) {
            return t.toUpperCase()
        };

    function x(e) {
        var t = !!e && "length" in e && e.length,
            n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: c,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : s.call(this)
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || k.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = k.isArray(r))) ? (i ? (i = !1, o = n && k.isArray(n) ? n : []) : o = n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === k.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            v(e)
        },
        camelCase: function(e) {
            return e.replace(p, "ms-").replace(d, y)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (x(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (x(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), k.isFunction(e)) return r = s.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, i
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, m, s, c, v, k = "sizzle" + 1 * new Date,
            y = n.document,
            S = 0,
            r = 0,
            p = ae(),
            x = ae(),
            N = ae(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            q = t.push,
            L = t.push,
            H = t.slice,
            F = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            X = new RegExp(I),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                T()
            },
            ie = ye(function(e) {
                return !0 === e.disabled
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(t = H.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (u = J.exec(e)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[e + " "] && (!m || !m.test(e))) {
                    if (1 !== p) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ve(l[o]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return L.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace($, "$1"), t, n, r)
        }

        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[k] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(t) {
            return function(e) {
                return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && !1 === e.disabled && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !ie(e)) !== t)
            }
        }

        function he(a) {
            return se(function(o) {
                return o = +o, se(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = oe.support = {}, i = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = oe.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ue(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], m = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I)
                }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), v = t || Q.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                    if (i === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
                }), C
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < oe(t, C, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), v(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    for (;
                                        (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a !== e)););
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = F(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[k] ? se(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: se(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: se(function(n) {
                        return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = fe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = pe(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return s(e, t, n)
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            }
            }
        }

        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function we(d, h, g, m, v, e) {
            return m && !m[k] && (m = we(m)), v && !v[k] && (v = we(v, e)), se(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? v || (e ? d : l || m) ? [] : t : f;
                if (g && g(f, p, n, r), m)
                    for (i = be(p, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (i = [], o = p.length; o--;)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(a = p[o]) && -1 < (i = v ? F(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : L.apply(t, p)
            })
        }

        function Te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ye(function(e) {
                    return e === i
                }, a, !0), l = ye(function(e) {
                    return -1 < F(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [ye(xe(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                        return we(1 < s && xe(c), 1 < s && ve(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && ve(e))
                    }
                    c.push(t)
                }
            return xe(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = oe.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : x(e, s).slice(0)
        }, f = oe.compile = function(e, t) {
            var n, m, v, y, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Te(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (m = o, y = 0 < (v = i).length, x = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];)
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        y && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        for (a = 0; s = v[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = A.call(r));
                            f = be(f)
                        }
                        L.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, y ? se(r) : r))).selector = e
            }
            return a
        }, g = oe.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && d.getById && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ve(o))) return L.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !E, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(O, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(C);
    k.find = b, k.expr = b.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = b.uniqueSort, k.text = b.getText, k.isXMLDoc = b.isXML, k.contains = b.contains, k.escapeSelector = b.escape;
    var w = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = k.expr.match.needsContext,
        N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function j(e, n, r) {
        if (k.isFunction(n)) return k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return k.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (D.test(n)) return k.filter(n, e, r);
            n = k.filter(n, e)
        }
        return k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r && 1 === e.nodeType
        })
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
        }
    });
    var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && k.isPlainObject(t))
                    for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : k.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, A = k(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function F(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return F(e, "nextSibling")
        },
        prev: function(e) {
            return F(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || k.merge([], e.childNodes)
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (H[r] || k.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var O = /\S+/g;

    function P(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function M(e, t, n) {
        var r;
        try {
            e && k.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && k.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(O) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            k.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== k.type(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = k.isFunction(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && k.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, k.isFunction(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, R, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, R, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, k.isFunction(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, k.isFunction(t) ? t : P)), o[2][3].add(l(0, e, k.isFunction(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject), "pending" === o.state() || k.isFunction(i[t] && i[t].then))) return o.then();
            for (; t--;) M(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && I.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var W = k.Deferred();

    function $() {
        E.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), k.ready()
    }
    k.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? k.readyWait++ : k.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || W.resolveWith(E, [k]))
        }
    }), k.ready.then = W.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === k.type(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, k.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function z() {
        this.expando = k.expando + z.uid++
    }
    z.uid = 1, z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, _(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[k.camelCase(t)] = n;
            else
                for (r in t) i[k.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][k.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    k.isArray(t) ? t = t.map(k.camelCase) : t = (t = k.camelCase(t)) in r ? [t] : t.match(O) || [], n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var X = new z,
        U = new z,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Y(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : V.test(n) ? JSON.parse(n) : n)
                } catch (e) {}
                U.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return U.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return U.access(e, t, n)
        },
        removeData: function(e, t) {
            U.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = U.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--;) a[t] && (0 === (r = a[t].name).indexOf("data-") && (r = k.camelCase(r.slice(5)), Y(o, r, i[r])));
                    X.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                U.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = U.get(o, n))) return t;
                    if (void 0 !== (t = Y(o, n))) return t
                } else this.each(function() {
                    U.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                U.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || k.isArray(n) ? r = X.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        Z = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
        },
        ee = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function te(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +u) && J.exec(k.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", k.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};

    function re(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = X.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Z(r) && (i[o] = (f = l = u = void 0, l = (s = r).ownerDocument, c = s.nodeName, (f = ne[c]) || (u = l.body.appendChild(l.createElement(c)), f = k.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), ne[c] = f)))) : "none" !== n && (i[o] = "none", X.set(r, "display", n)));
        var s, u, l, c, f;
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    k.fn.extend({
        show: function() {
            return re(this, !0)
        },
        hide: function() {
            return re(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Z(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var ie = /^(?:checkbox|radio)$/i,
        oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ae = /^$|\/(?:java|ecma)script/i,
        se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ue(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && k.nodeName(e, t) ? k.merge([e], n) : n
    }

    function le(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td;
    var ce, fe, pe = /<|&#?\w+;/;

    function de(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === k.type(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (pe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (oe.exec(o) || ["", ""])[1].toLowerCase(), u = se[s] || se._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = k.contains(o.ownerDocument, o), a = ue(f.appendChild(o), "script"), l && le(a), n)
            for (c = 0; o = a[c++];) ae.test(o.type || "") && n.push(o);
        return f
    }
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), m.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue;
    var he = E.documentElement,
        ge = /^key/,
        me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ve = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function xe() {
        return !1
    }

    function be() {
        try {
            return E.activeElement
        } catch (e) {}
    }

    function we(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) we(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = xe;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = X.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(he, i), n.guid || (n.guid = k.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(O) || [""]).length; l--;) d = g = (s = ve.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = X.hasData(e) && X.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--;)
                    if (d = g = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (X.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < k(i, this).index(u) : k.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: k.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== be() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === be() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return k.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(e, t)
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && me.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return we(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return we(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ce = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /^true\/(.*)/,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ae(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            U.hasData(e) && (s = U.access(e), u = k.extend({}, s), U.set(t, u))
        }
    }

    function qe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = k.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && Ee.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), qe(t, r, i, o)
        });
        if (f && (t = (e = de(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ue(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ue(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, je), c = 0; c < s; c++) u = a[c], ae.test(u.type || "") && !X.access(u, "globalEval") && k.contains(l, u) && (u.src ? k._evalUrl && k._evalUrl(u.src) : v(u.textContent.replace(Se, ""), l))
        }
        return n
    }

    function Le(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ue(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && le(ue(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = k.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ue(c), r = 0, i = (o = ue(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && ie.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ue(e), a = a || ue(c), r = 0, i = o.length; r < i; r++) Ae(o[r], a[r]);
                else Ae(e, c);
            return 0 < (a = ue(c, "script")).length && le(a, !f && ue(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (_(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[U.expando] && (n[U.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ue(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !se[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ue(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ue(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var He = /^margin/,
        Fe = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        Oe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        };

    function Pe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Oe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !m.pixelMarginRight() && Fe.test(a) && He.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Re(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", he.appendChild(o);
                var e = C.getComputedStyle(a);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, he.removeChild(o), a = null
            }
        }
        var t, n, r, i, o = E.createElement("div"),
            a = E.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), k.extend(m, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return e(), n
            },
            pixelMarginRight: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), i
            }
        }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/,
        Ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        We = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $e = ["Webkit", "Moz", "ms"],
        Be = E.createElement("div").style;

    function _e(e) {
        if (e in Be) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
            if ((e = $e[n] + t) in Be) return e
    }

    function ze(e, t, n) {
        var r = J.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Xe(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += k.css(e, n + K[o], !0, i)), r ? ("content" === n && (a -= k.css(e, "padding" + K[o], !0, i)), "margin" !== n && (a -= k.css(e, "border" + K[o] + "Width", !0, i))) : (a += k.css(e, "padding" + K[o], !0, i), "padding" !== n && (a += k.css(e, "border" + K[o] + "Width", !0, i)));
        return a
    }

    function Ue(e, t, n) {
        var r, i = !0,
            o = Oe(e),
            a = "border-box" === k.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (((r = Pe(e, t, o)) < 0 || null == r) && (r = e.style[t]), Fe.test(r)) return r;
            i = a && (m.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + Xe(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function Ve(e, t, n, r, i) {
        return new Ve.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = k.camelCase(t),
                    u = e.style;
                return t = k.cssProps[s] || (k.cssProps[s] = _e(s) || s), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = J.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = k.camelCase(t);
            return t = k.cssProps[s] || (k.cssProps[s] = _e(s) || s), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, a) {
        k.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Me.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ue(e, a, n) : ee(e, Ie, function() {
                    return Ue(e, a, n)
                })
            },
            set: function(e, t, n) {
                var r, i = n && Oe(e),
                    o = n && Xe(e, a, n, "border-box" === k.css(e, "boxSizing", !1, i), i);
                return o && (r = J.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = k.css(e, a)), ze(0, t, o)
            }
        }
    }), k.cssHooks.marginLeft = Re(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + K[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, He.test(i) || (k.cssHooks[i + o].set = ze)
    }), k.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (k.isArray(t)) {
                    for (r = Oe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = Ve).prototype = {
        constructor: Ve,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ve.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ve.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
        }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ve.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = Ve.prototype.init, k.fx.step = {};
    var Ge, Ye, Qe, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = /queueHooks$/;

    function et() {
        Ye && (C.requestAnimationFrame(et), k.fx.tick())
    }

    function tt() {
        return C.setTimeout(function() {
            Ge = void 0
        }), Ge = k.now()
    }

    function nt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = K[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function rt(e, t, n) {
        for (var r, i = (it.tweeners[t] || []).concat(it.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function it(o, e, t) {
        var n, a, r = 0,
            i = it.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ge || tt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ge || tt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = k.camelCase(n)], o = e[n], k.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = it.prefilters[r].call(l, o, c, l.opts)) return k.isFunction(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(n.stop, n)), n;
        return k.map(c, rt, l), k.isFunction(l.opts.start) && l.opts.start.call(o, l), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    k.Animation = k.extend(it, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, J.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            k.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], it.tweeners[n] = it.tweeners[n] || [], it.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && Z(e),
                m = X.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], Ke.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    d[r] = m && m[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = X.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = k.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                    display: l
                }), o && (m.hidden = !g), g && re([e], !0), p.done(function() {
                    for (r in g || re([e]), X.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = rt(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? it.prefilters.unshift(e) : it.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return k.fx.off || E.hidden ? r.duration = 0 : r.duration = "number" == typeof r.duration ? r.duration : r.duration in k.fx.speeds ? k.fx.speeds[r.duration] : k.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = it(this, k.extend({}, t), o);
                    (i || X.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = X.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Ze.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(nt(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: nt("show"),
        slideUp: nt("hide"),
        slideToggle: nt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (Ge = k.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ge = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), e() ? k.fx.start() : k.timers.pop()
    }, k.fx.interval = 13, k.fx.start = function() {
        Ye || (Ye = C.requestAnimationFrame ? C.requestAnimationFrame(et) : C.setInterval(k.fx.tick, k.fx.interval))
    }, k.fx.stop = function() {
        C.cancelAnimationFrame ? C.cancelAnimationFrame(Ye) : C.clearInterval(Ye), Ye = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, Qe = E.createElement("input"), Je = E.createElement("select").appendChild(E.createElement("option")), Qe.type = "checkbox", m.checkOn = "" !== Qe.value, m.optSelected = Je.selected, (Qe = E.createElement("input")).value = "t", Qe.type = "radio", m.radioValue = "t" === Qe.value;
    var ot, at = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return B(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ot : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ot = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = at[t] || k.find.attr;
        at[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = at[o], at[o] = r, r = null != a(e, t, n) ? o : null, at[o] = i), r
        }
    });
    var st = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return B(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : st.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    });
    var lt = /[\t\r\n\f]/g;

    function ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, ct(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(O) || []; n = this[u++];)
                    if (i = ct(n), r = 1 === n.nodeType && (" " + i + " ").replace(lt, " ")) {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = k.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, ct(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(O) || []; n = this[u++];)
                    if (i = ct(n), r = 1 === n.nodeType && (" " + i + " ").replace(lt, " ")) {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = k.trim(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : k.isFunction(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, ct(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = k(this), r = i.match(O) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = ct(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ct(n) + " ").replace(lt, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        pt = /[\x20\t\r\n\f]+/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = k.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(ft, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : k.trim(k.text(e)).replace(pt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && !n.disabled && (!n.parentNode.disabled || !k.nodeName(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (k.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, m.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || E],
                p = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !dt.test(p + k.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !k.isWindow(n)) {
                    for (s = c.delegateType || p, dt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || E) && f.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : c.bindType || p, (l = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && _(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !_(n) || u && k.isFunction(n[p]) && !k.isWindow(n) && ((a = n[u]) && (n[u] = null), n[k.event.triggered = p](), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), m.focusin = "onfocusin" in C, m.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, r);
                t || e.addEventListener(n, i, !0), X.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, r) - 1;
                t ? X.access(e, r, t) : (e.removeEventListener(n, i, !0), X.remove(e, r))
            }
        }
    });
    var ht = C.location,
        gt = k.now(),
        mt = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var vt = /\[\]$/,
        yt = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        bt = /^(?:input|select|textarea|keygen)/i;

    function wt(n, e, r, i) {
        var t;
        if (k.isArray(e)) k.each(e, function(e, t) {
            r || vt.test(n) ? i(n, t) : wt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== k.type(e)) i(n, e);
        else
            for (t in e) wt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = k.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (k.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) wt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && bt.test(this.nodeName) && !xt.test(e) && (this.checked || !ie.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(yt, "\r\n")
                }
            }).get()
        }
    });
    var Tt = /%20/g,
        Ct = /#.*$/,
        Et = /([?&])_=[^&]*/,
        kt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        St = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        Dt = {},
        jt = {},
        At = "*/".concat("*"),
        qt = E.createElement("a");

    function Lt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(O) || [];
            if (k.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ht(t, i, o, a) {
        var s = {},
            u = t === jt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    qt.href = ht.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ht.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, k.ajaxSettings), t) : Ft(k.ajaxSettings, e)
        },
        ajaxPrefilter: Lt(Dt),
        ajaxTransport: Lt(jt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, m = k.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = kt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), m.url = ((e || m.url || ht.href) + "").replace(Nt, ht.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = qt.protocol + "//" + qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Ht(Dt, m, t, T), h) return T;
            for (i in (g = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !St.test(m.type), f = m.url.replace(Ct, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Tt, "+")) : (o = m.url.slice(f.length), m.data && (f += (mt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Et, ""), o = (mt.test(f) ? "&" : "?") + "_=" + gt++ + o), m.url = f + o), m.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + At + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
            if (u = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Ht(jt, m, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), h) return T;
                m.async && 0 < m.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(m, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, T, i), i ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]), b.fireWith(v, [T, l]), g && (y.trigger("ajaxComplete", [T, m]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return k.isFunction(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (k.isFunction(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return k.isFunction(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = k.isFunction(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ot = {
            0: 200,
            1223: 204
        },
        Pt = k.ajaxSettings.xhr();
    m.cors = !!Pt && "withCredentials" in Pt, m.ajax = Pt = !!Pt, k.ajaxTransport(function(i) {
        var o, a;
        if (m.cors || Pt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = k("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Rt, Mt = [],
        It = /(=)\?(?=&|$)|\?\?/;

    function Wt(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || k.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(It, "$1" + r) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Mt.push(r)), o && k.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), m.createHTMLDocument = ((Rt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = de([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = k.trim(e.slice(s)), e = e.slice(0, s)), k.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), k.isFunction(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect()).width || r.height ? (n = Wt(i = o.ownerDocument), e = i.documentElement, {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === k.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + k.css(e[0], "borderTopWidth", !0),
                    left: r.left + k.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - k.css(n, "marginTop", !0),
                    left: t.left - r.left - k.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || he
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r = Wt(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = Re(m.pixelPosition, function(e, t) {
            if (t) return t = Pe(e, n), Fe.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return k.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var $t = C.jQuery,
        Bt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Bt), e && C.jQuery === k && (C.jQuery = $t), k
    }, e || (C.jQuery = C.$ = k), k
});
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, r) {
    if (r.get || r.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = r.value)
}, $jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(t) {
    return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}, $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }), $jscomp.initSymbolIterator = function() {}
}, $jscomp.arrayIterator = function(t) {
    var e = 0;
    return $jscomp.iteratorPrototype(function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    })
}, $jscomp.iteratorPrototype = function(t) {
    return $jscomp.initSymbolIterator(), (t = {
        next: t
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }, t
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(e, r) {
    $jscomp.initSymbolIterator(), e instanceof String && (e += "");
    var n = 0,
        o = {
            next: function() {
                if (n < e.length) {
                    var t = n++;
                    return {
                        value: r(t, e[t]),
                        done: !1
                    }
                }
                return o.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, o.next()
            }
        };
    return o[Symbol.iterator] = function() {
        return o
    }, o
}, $jscomp.polyfill = function(t, e, r, n) {
    if (e) {
        for (r = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
            var o = t[n];
            o in r || (r[o] = {}), r = r[o]
        }(e = e(n = r[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(r, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}, $jscomp.polyfill("Array.prototype.keys", function(t) {
    return t || function() {
        return $jscomp.iteratorFromArray(this, function(t) {
            return t
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
! function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.anime = e()
}(this, function() {
    function o(t) {
        if (!F.col(t)) try {
            return document.querySelectorAll(t)
        } catch (t) {}
    }

    function $(t, e) {
        for (var r = t.length, n = 2 <= arguments.length ? e : void 0, o = [], a = 0; a < r; a++)
            if (a in t) {
                var i = t[a];
                e.call(n, i, a, t) && o.push(i)
            }
        return o
    }

    function l(t) {
        return t.reduce(function(t, e) {
            return t.concat(F.arr(e) ? l(e) : e)
        }, [])
    }

    function a(t) {
        return F.arr(t) ? t : (F.str(t) && (t = o(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function i(t, e) {
        return t.some(function(t) {
            return t === e
        })
    }

    function u(t) {
        var e, r = {};
        for (e in t) r[e] = t[e];
        return r
    }

    function p(t, e) {
        var r, n = u(t);
        for (r in t) n[r] = e.hasOwnProperty(r) ? e[r] : t[r];
        return n
    }

    function d(t, e) {
        var r, n = u(t);
        for (r in e) n[r] = F.und(t[r]) ? e[r] : t[r];
        return n
    }

    function s(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2]
    }

    function c(t, e) {
        return F.fnc(t) ? t(e.target, e.id, e.total) : t
    }

    function x(t, e) {
        if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function m(t, e) {
        return F.dom(t) && i(k, e) ? "transform" : F.dom(t) && (t.getAttribute(e) || F.svg(t) && t[e]) ? "attribute" : F.dom(t) && "transform" !== e && x(t, e) ? "css" : null != t[e] ? "object" : void 0
    }

    function f(t, e) {
        switch (m(t, e)) {
            case "transform":
                return function(t, r) {
                    var e, n = -1 < (e = r).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0;
                    if (n = -1 < r.indexOf("scale") ? 1 : 0 + n, !(t = t.style.transform)) return n;
                    for (var o = [], a = [], i = [], u = /(\w+)\((.+?)\)/g; o = u.exec(t);) a.push(o[1]), i.push(o[2]);
                    return (t = $(i, function(t, e) {
                        return a[e] === r
                    })).length ? t[0] : n
                }(t, e);
            case "css":
                return x(t, e);
            case "attribute":
                return t.getAttribute(e)
        }
        return t[e] || 0
    }

    function g(t, e) {
        var r = /^(\*=|\+=|-=)/.exec(t);
        if (!r) return t;
        var n = s(t) || 0;
        switch (e = parseFloat(e), t = parseFloat(t.replace(r[0], "")), r[0][0]) {
            case "+":
                return e + t + n;
            case "-":
                return e - t + n;
            case "*":
                return e * t + n
        }
    }

    function y(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function r(t) {
        t = t.points;
        for (var e, r = 0, n = 0; n < t.numberOfItems; n++) {
            var o = t.getItem(n);
            0 < n && (r += y(e, o)), e = o
        }
        return r
    }

    function h(t) {
        if (t.getTotalLength) return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
            case "circle":
                return 2 * Math.PI * t.getAttribute("r");
            case "rect":
                return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
            case "line":
                return y({
                    x: t.getAttribute("x1"),
                    y: t.getAttribute("y1")
                }, {
                    x: t.getAttribute("x2"),
                    y: t.getAttribute("y2")
                });
            case "polyline":
                return r(t);
            case "polygon":
                var e = t.points;
                return r(t) + y(e.getItem(e.numberOfItems - 1), e.getItem(0))
        }
    }

    function w(e, r) {
        function t(t) {
            return t = void 0 === t ? 0 : t, e.el.getPointAtLength(1 <= r + t ? r + t : 0)
        }
        var n = t(),
            o = t(-1),
            a = t(1);
        switch (e.property) {
            case "x":
                return n.x;
            case "y":
                return n.y;
            case "angle":
                return 180 * Math.atan2(a.y - o.y, a.x - o.x) / Math.PI
        }
    }

    function v(t, e) {
        var r, n = /-?\d*\.?\d+/g;
        if (r = F.pth(t) ? t.totalLength : t, F.col(r))
            if (F.rgb(r)) {
                var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
                r = o ? "rgba(" + o[1] + ",1)" : r
            } else r = F.hex(r) ? function(t) {
                t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, r, n) {
                    return e + e + r + r + n + n
                });
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return "rgba(" + (t = parseInt(e[1], 16)) + "," + parseInt(e[2], 16) + "," + (e = parseInt(e[3], 16)) + ",1)"
            }(r) : F.hsl(r) ? function(t) {
                function e(t, e, r) {
                    return r < 0 && (r += 1), 1 < r && --r, r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }
                var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                t = parseInt(r[1]) / 360;
                var n = parseInt(r[2]) / 100,
                    o = parseInt(r[3]) / 100;
                if (r = r[4] || 1, 0 == n) o = n = t = o;
                else {
                    var a = o < .5 ? o * (1 + n) : o + n - o * n,
                        i = 2 * o - a;
                    o = e(i, a, t + 1 / 3), n = e(i, a, t), t = e(i, a, t - 1 / 3)
                }
                return "rgba(" + 255 * o + "," + 255 * n + "," + 255 * t + "," + r + ")"
            }(r) : void 0;
        else o = (o = s(r)) ? r.substr(0, r.length - o.length) : r, r = e && !/\s/g.test(r) ? o + e : o;
        return {
            original: r += "",
            numbers: r.match(n) ? r.match(n).map(Number) : [0],
            strings: F.str(t) || e ? r.split(n) : []
        }
    }

    function b(t) {
        return $(t = t ? l(F.arr(t) ? t.map(a) : a(t)) : [], function(t, e, r) {
            return r.indexOf(t) === e
        })
    }

    function j(t, r) {
        var e = u(r);
        if (F.arr(t)) {
            var n = t.length;
            2 !== n || F.obj(t[0]) ? F.fnc(r.duration) || (e.duration = r.duration / n) : t = {
                value: t
            }
        }
        return a(t).map(function(t, e) {
            return e = e ? 0 : r.delay, t = F.obj(t) && !F.pth(t) ? t : {
                value: t
            }, F.und(t.delay) && (t.delay = e), t
        }).map(function(t) {
            return d(t, e)
        })
    }

    function A(a, i) {
        var u;
        return a.tweens.map(function(t) {
            var e = (t = function(t, e) {
                    var r, n = {};
                    for (r in t) {
                        var o = c(t[r], e);
                        F.arr(o) && 1 === (o = o.map(function(t) {
                            return c(t, e)
                        })).length && (o = o[0]), n[r] = o
                    }
                    return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                }(t, i)).value,
                r = f(i.target, a.name),
                n = u ? u.to.original : r,
                o = (n = F.arr(e) ? e[0] : n, g(F.arr(e) ? e[1] : e, n));
            r = s(o) || s(n) || s(r);
            return t.from = v(n, r), t.to = v(o, r), t.start = u ? u.end : a.offset, t.end = t.start + t.delay + t.duration, t.easing = function(t) {
                return F.arr(t) ? L.apply(this, t) : C[t]
            }(t.easing), t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3, t.isPath = F.pth(e), t.isColor = F.col(t.from.original), t.isColor && (t.round = 1), u = t
        })
    }

    function I(e, t, r, n) {
        var o = "delay" === e;
        return t.length ? (o ? Math.min : Math.max).apply(Math, t.map(function(t) {
            return t[e]
        })) : o ? n.delay : r.offset + n.delay + n.duration
    }

    function n(t) {
        var e, r, n, o, a, i = p(O, t),
            u = p(P, t),
            s = (r = t.targets, (n = b(r)).map(function(t, e) {
                return {
                    target: t,
                    id: e,
                    total: n.length
                }
            })),
            c = [],
            f = d(i, u);
        for (e in t) f.hasOwnProperty(e) || "targets" === e || c.push({
            name: e,
            offset: f.offset,
            tweens: j(t[e], u)
        });
        return a = c, d(i, {
            children: [],
            animatables: o = s,
            animations: t = $(l(o.map(function(n) {
                return a.map(function(t) {
                    var e = m(n.target, t.name);
                    if (e) {
                        var r = A(t, n);
                        t = {
                            type: e,
                            property: t.name,
                            animatable: n,
                            tweens: r,
                            duration: r[r.length - 1].end,
                            delay: r[0].delay
                        }
                    } else t = void 0;
                    return t
                })
            })), function(t) {
                return !F.und(t)
            }),
            duration: I("duration", t, i, u),
            delay: I("delay", t, i, u)
        })
    }

    function M(t) {
        function f() {
            return window.Promise && new Promise(function(t) {
                return v = t
            })
        }

        function l(t) {
            return j.reversed ? j.duration - t : t
        }

        function p(e) {
            for (var t = 0, r = {}, n = j.animations, o = n.length; t < o;) {
                var a = n[t],
                    i = a.animatable,
                    u = (s = a.tweens)[l = s.length - 1];
                l && (u = $(s, function(t) {
                    return e < t.end
                })[0] || u);
                for (var s = Math.min(Math.max(e - u.start - u.delay, 0), u.duration) / u.duration, c = isNaN(s) ? 1 : u.easing(s, u.elasticity), f = (s = u.to.strings, u.round), l = [], p = void 0, d = (p = u.to.numbers.length, 0); d < p; d++) {
                    var m = void 0,
                        g = (m = u.to.numbers[d], u.from.numbers[d]);
                    m = u.isPath ? w(u.value, c * m) : g + c * (m - g);
                    f && (u.isColor && 2 < d || (m = Math.round(m * f) / f)), l.push(m)
                }
                if (u = s.length)
                    for (p = s[0], c = 0; c < u; c++) f = s[c + 1], d = l[c], isNaN(d) || (p = f ? p + (d + f) : p + (d + " "));
                else p = l[0];
                E[a.type](i.target, a.property, p, r, i.id), a.currentValue = p, t++
            }
            if (t = Object.keys(r).length)
                for (n = 0; n < t; n++) S || (S = x(document.body, "transform") ? "transform" : "-webkit-transform"), j.animatables[n].target.style[S] = r[n].join(" ");
            j.currentTime = e, j.progress = e / j.duration * 100
        }

        function d(t) {
            j[t] && j[t](j)
        }

        function m() {
            j.remaining && !0 !== j.remaining && j.remaining--
        }

        function e(t) {
            var e = j.duration,
                r = j.offset,
                n = r + j.delay,
                o = j.currentTime,
                a = j.reversed,
                i = l(t);
            if (j.children.length) {
                var u = j.children,
                    s = u.length;
                if (i >= j.currentTime)
                    for (var c = 0; c < s; c++) u[c].seek(i);
                else
                    for (; s--;) u[s].seek(i)
            }(n <= i || !e) && (j.began || (j.began = !0, d("begin")), d("run")), r < i && i < e ? p(i) : (i <= r && 0 !== o && (p(0), a && m()), (e <= i && o !== e || !e) && (p(e), a || m())), d("update"), e <= t && (j.remaining ? (y = g, "alternate" === j.direction && (j.reversed = !j.reversed)) : (j.pause(), j.completed || (j.completed = !0, d("complete"), "Promise" in window && (v(), b = f()))), h = 0)
        }
        t = void 0 === t ? {} : t;
        var g, y, h = 0,
            v = null,
            b = f(),
            j = n(t);
        return j.reset = function() {
            var t = j.direction,
                e = j.loop;
            for (j.currentTime = 0, j.progress = 0, j.paused = !0, j.began = !1, j.completed = !1, j.reversed = "reverse" === t, j.remaining = "alternate" === t && 1 === e ? 2 : e, p(0), t = j.children.length; t--;) j.children[t].reset()
        }, j.tick = function(t) {
            g = t, y || (y = g), e((h + g - y) * M.speed)
        }, j.seek = function(t) {
            e(l(t))
        }, j.pause = function() {
            var t = T.indexOf(j); - 1 < t && T.splice(t, 1), j.paused = !0
        }, j.play = function() {
            j.paused && (j.paused = !1, y = 0, h = l(j.currentTime), T.push(j), N || X())
        }, j.reverse = function() {
            j.reversed = !j.reversed, y = 0, h = l(j.currentTime)
        }, j.restart = function() {
            j.pause(), j.reset(), j.play()
        }, j.finished = b, j.reset(), j.autoplay && j.play(), j
    }
    var S, O = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        P = {
            duration: 1e3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        k = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
        F = {
            arr: function(t) {
                return Array.isArray(t)
            },
            obj: function(t) {
                return -1 < Object.prototype.toString.call(t).indexOf("Object")
            },
            pth: function(t) {
                return F.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            dom: function(t) {
                return t.nodeType || F.svg(t)
            },
            str: function(t) {
                return "string" == typeof t
            },
            fnc: function(t) {
                return "function" == typeof t
            },
            und: function(t) {
                return void 0 === t
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            col: function(t) {
                return F.hex(t) || F.rgb(t) || F.hsl(t)
            }
        },
        L = function() {
            function l(t, e, r) {
                return (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t
            }
            return function(i, u, s, c) {
                if (0 <= i && i <= 1 && 0 <= s && s <= 1) {
                    var f = new Float32Array(11);
                    if (i !== u || s !== c)
                        for (var t = 0; t < 11; ++t) f[t] = l(.1 * t, i, s);
                    return function(t) {
                        if (i === u && s === c) return t;
                        if (0 === t) return 0;
                        if (1 === t) return 1;
                        for (var e = 0, r = 1; 10 !== r && f[r] <= t; ++r) e += .1;
                        r = e + (t - f[--r]) / (f[r + 1] - f[r]) * .1;
                        var n = 3 * (1 - 3 * s + 3 * i) * r * r + 2 * (3 * s - 6 * i) * r + 3 * i;
                        if (.001 <= n) {
                            for (e = 0; e < 4 && 0 !== (n = 3 * (1 - 3 * s + 3 * i) * r * r + 2 * (3 * s - 6 * i) * r + 3 * i); ++e) {
                                var o = l(r, i, s) - t;
                                r = r - o / n
                            }
                            t = r
                        } else if (0 === n) t = r;
                        else {
                            r = e, e = e + .1;
                            for (var a = 0; 0 < (n = l(o = r + (e - r) / 2, i, s) - t) ? e = o : r = o, 1e-7 < Math.abs(n) && ++a < 10;);
                            t = o
                        }
                        return l(t, u, c)
                    }
                }
            }
        }(),
        C = function() {
            function r(t, e) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
            }
            var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                e = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], r
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function(t, e) {
                            return 1 - r(1 - t, e)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function(t, e) {
                            return t < .5 ? r(2 * t, e) / 2 : 1 - r(-2 * t + 2, e) / 2
                        }
                    ]
                },
                o = {
                    linear: L(.25, .25, .75, .75)
                },
                a = {};
            for (t in e) a.type = t, e[a.type].forEach(function(r) {
                return function(t, e) {
                    o["ease" + r.type + n[e]] = F.fnc(t) ? t : L.apply($jscomp$this, t)
                }
            }(a)), a = {
                type: a.type
            };
            return o
        }(),
        E = {
            css: function(t, e, r) {
                return t.style[e] = r
            },
            attribute: function(t, e, r) {
                return t.setAttribute(e, r)
            },
            object: function(t, e, r) {
                return t[e] = r
            },
            transform: function(t, e, r, n, o) {
                n[o] || (n[o] = []), n[o].push(e + "(" + r + ")")
            }
        },
        T = [],
        N = 0,
        X = function() {
            function n() {
                N = requestAnimationFrame(t)
            }

            function t(t) {
                var e = T.length;
                if (e) {
                    for (var r = 0; r < e;) T[r] && T[r].tick(t), r++;
                    n()
                } else cancelAnimationFrame(N), N = 0
            }
            return n
        }();
    return M.version = "2.2.0", M.speed = 1, M.running = T, M.remove = function(t) {
        t = b(t);
        for (var e = T.length; e--;)
            for (var r = T[e], n = r.animations, o = n.length; o--;) i(t, n[o].animatable.target) && (n.splice(o, 1), n.length || r.pause())
    }, M.getValue = f, M.path = function(t, e) {
        var r = F.str(t) ? o(t)[0] : t,
            n = e || 100;
        return function(t) {
            return {
                el: r,
                property: t,
                totalLength: h(r) * (n / 100)
            }
        }
    }, M.setDashoffset = function(t) {
        var e = h(t);
        return t.setAttribute("stroke-dasharray", e), e
    }, M.bezier = L, M.easings = C, M.timeline = function(n) {
        var o = M(n);
        return o.pause(), o.duration = 0, o.add = function(t) {
            return o.children.forEach(function(t) {
                t.began = !0, t.completed = !0
            }), a(t).forEach(function(t) {
                var e = d(t, p(P, n || {}));
                e.targets = e.targets || n.targets, t = o.duration;
                var r = e.offset;
                e.autoplay = !1, e.direction = o.direction, e.offset = F.und(r) ? t : g(r, t), o.began = !0, o.completed = !0, o.seek(e.offset), (e = M(e)).began = !0, e.completed = !0, e.duration > t && (o.duration = e.duration), o.children.push(e)
            }), o.seek(0), o.reset(), o.autoplay && o.restart(), o
        }, o
    }, M.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, M
});
var detect = {
    screenWidth: function() {
        return window.screen.width
    },
    screenHeight: function() {
        return window.screen.height
    },
    viewportWidth: function() {
        return document.documentElement.clientWidth
    },
    viewportHeight: function() {
        return document.documentElement.clientHeight
    },
    latitude: function(n) {
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
            document.getElementById(n).innerHTML = e.coords.latitude
        }, function(e) {
            switch (e.code) {
                case e.PERMISSION_DENIED:
                    document.getElementById(n).innerHTML = "User denied the request for Geolocation.";
                    break;
                case e.POSITION_UNAVAILABLE:
                    document.getElementById(n).innerHTML = "Location information is unavailable.";
                    break;
                case e.TIMEOUT:
                    document.getElementById(n).innerHTML = "The request to get user location timed out.";
                    break;
                case e.UNKNOWN_ERROR:
                    document.getElementById(n).innerHTML = "An unknown error occurred."
            }
        })
    },
    longitude: function(n) {
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
            document.getElementById(n).innerHTML = e.coords.longitude, longitude = e.coords.longitude
        }, function(e) {
            switch (e.code) {
                case e.PERMISSION_DENIED:
                    document.getElementById(n).innerHTML = "User denied the request for Geolocation.";
                    break;
                case e.POSITION_UNAVAILABLE:
                    document.getElementById(n).innerHTML = "Location information is unavailable.";
                    break;
                case e.TIMEOUT:
                    document.getElementById(n).innerHTML = "The request to get user location timed out.";
                    break;
                case e.UNKNOWN_ERROR:
                    document.getElementById(n).innerHTML = "An unknown error occurred."
            }
        })
    },
    address: function(n) {
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
            $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + e.coords.latitude + "," + e.coords.longitude + "&sensor=false", function(e) {
                document.getElementById(n).innerHTML = e.results[0].formatted_address
            }, "json")
        }, function(e) {
            switch (e.code) {
                case e.PERMISSION_DENIED:
                    document.getElementById(n).innerHTML = "User denied the request for Geolocation.";
                    break;
                case e.POSITION_UNAVAILABLE:
                    document.getElementById(n).innerHTML = "Location information is unavailable.";
                    break;
                case e.TIMEOUT:
                    document.getElementById(n).innerHTML = "The request to get user location timed out.";
                    break;
                case e.UNKNOWN_ERROR:
                    document.getElementById(n).innerHTML = "An unknown error occurred."
            }
        })
    }
};
var ieDetector = {
    ieVersion: null,
    getVersion: function() {
        var e = window.navigator.userAgent,
            i = e.indexOf("MSIE "),
            n = e.indexOf("Trident/"),
            t = e.indexOf("Edge/");
        if (0 < i) return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
        if (0 < n) {
            var s = e.indexOf("rv:");
            return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10)
        }
        return 0 < t && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10)
    },
    addClasses: function() {
        var e = function(e) {
            document.documentElement.classList ? document.documentElement.classList.add(e) : document.documentElement.className += " " + e
        };
        e("ie-" + this.ieVersion), e("lte-ie-" + this.ieVersion);
        for (var i = this.ieVersion + 1; i <= 11; i++) e("lt-ie-" + i)
    },
    init: function() {
        this.ieVersion = this.getVersion(), this.ieVersion && this.addClasses()
    }
};
ieDetector.init();
! function(e) {
    var r, h, s = e.event;
    r = s.special.debounce = {
        setup: function() {
            e(this).on("resize", r.handler)
        },
        teardown: function() {
            e(this).off("resize", r.handler)
        },
        handler: function(e, n) {
            var t = this,
                i = arguments,
                o = function() {
                    e.type = "debounce", s.dispatch.apply(t, i)
                };
            h && clearTimeout(h), n ? o() : h = setTimeout(o, r.threshold)
        },
        threshold: 150
    }
}(jQuery);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, u, a) {
        return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
    },
    easeInQuad: function(n, e, t, u, a) {
        return u * (e /= a) * e + t
    },
    easeOutQuad: function(n, e, t, u, a) {
        return -u * (e /= a) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, u, a) {
        return u * (e /= a) * e * e + t
    },
    easeOutCubic: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, u, a) {
        return -u * ((e = e / a - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, u, a) {
        return u * (e /= a) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, u, a) {
        return u * ((e = e / a - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, u, a) {
        return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
    },
    easeOutSine: function(n, e, t, u, a) {
        return u * Math.sin(e / a * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, u, a) {
        return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
    },
    easeInExpo: function(n, e, t, u, a) {
        return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
    },
    easeOutExpo: function(n, e, t, u, a) {
        return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t
    },
    easeInOutExpo: function(n, e, t, u, a) {
        return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t
    },
    easeInCirc: function(n, e, t, u, a) {
        return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, u, a) {
        return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, u, a) {
        return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t
    },
    easeOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (1 == (e /= a)) return t + u;
        if (i || (i = .3 * a), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t
    },
    easeInOutElastic: function(n, e, t, u, a) {
        var r = 1.70158,
            i = 0,
            s = u;
        if (0 == e) return t;
        if (2 == (e /= a / 2)) return t + u;
        if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
            s = u;
            r = i / 4
        } else r = i / (2 * Math.PI) * Math.asin(u / s);
        return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t
    },
    easeInBack: function(n, e, t, u, a, r) {
        return null == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
    },
    easeOutBack: function(n, e, t, u, a, r) {
        return null == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
    },
    easeInOutBack: function(n, e, t, u, a, r) {
        return null == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t
    },
    easeInBounce: function(n, e, t, u, a) {
        return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
    },
    easeOutBounce: function(n, e, t, u, a) {
        return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, u, a) {
        return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
    }
});
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(d) {
    var c, m, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        g = Array.prototype.slice;
    if (d.event.fixHooks)
        for (var i = e.length; i;) d.event.fixHooks[e[--i]] = d.event.mouseHooks;
    var w = d.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = t.length; e;) this.addEventListener(t[--e], n, !1);
            else this.onmousewheel = n;
            d.data(this, "mousewheel-line-height", w.getLineHeight(this)), d.data(this, "mousewheel-page-height", w.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = t.length; e;) this.removeEventListener(t[--e], n, !1);
            else this.onmousewheel = null;
            d.removeData(this, "mousewheel-line-height"), d.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = d(e),
                i = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
            return i.length || (i = d("body")), parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return d(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };

    function n(e) {
        var t, i = e || window.event,
            n = g.call(arguments, 1),
            o = 0,
            l = 0,
            s = 0,
            a = 0,
            h = 0;
        if ((e = d.event.fix(i)).type = "mousewheel", "detail" in i && (s = -1 * i.detail), "wheelDelta" in i && (s = i.wheelDelta), "wheelDeltaY" in i && (s = i.wheelDeltaY), "wheelDeltaX" in i && (l = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (l = -1 * s, s = 0), o = 0 === s ? l : s, "deltaY" in i && (o = s = -1 * i.deltaY), "deltaX" in i && (l = i.deltaX, 0 === s && (o = -1 * l)), 0 !== s || 0 !== l) {
            if (1 === i.deltaMode) {
                var r = d.data(this, "mousewheel-line-height");
                o *= r, s *= r, l *= r
            } else if (2 === i.deltaMode) {
                var u = d.data(this, "mousewheel-page-height");
                o *= u, s *= u, l *= u
            }
            if (t = Math.max(Math.abs(s), Math.abs(l)), (!m || t < m) && p(i, m = t) && (m /= 40), p(i, t) && (o /= 40, l /= 40, s /= 40), o = Math[1 <= o ? "floor" : "ceil"](o / m), l = Math[1 <= l ? "floor" : "ceil"](l / m), s = Math[1 <= s ? "floor" : "ceil"](s / m), w.settings.normalizeOffset && this.getBoundingClientRect) {
                var f = this.getBoundingClientRect();
                a = e.clientX - f.left, h = e.clientY - f.top
            }
            return e.deltaX = l, e.deltaY = s, e.deltaFactor = m, e.offsetX = a, e.offsetY = h, e.deltaMode = 0, n.unshift(e, o, l, s), c && clearTimeout(c), c = setTimeout(v, 200), (d.event.dispatch || d.event.handle).apply(this, n)
        }
    }

    function v() {
        m = null
    }

    function p(e, t) {
        return w.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    d.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(u) {
    u.extend(u.fn, {
        validate: function(t) {
            if (this.length) {
                var s = u.data(this[0], "validator");
                return s || (this.attr("novalidate", "novalidate"), s = new u.validator(t, this[0]), u.data(this[0], "validator", s), s.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    s.submitButton = t.currentTarget, u(this).hasClass("cancel") && (s.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (s.cancelSubmit = !0)
                }), this.on("submit.validate", function(i) {
                    function t() {
                        var t, e;
                        return s.submitButton && (s.settings.submitHandler || s.formSubmitted) && (t = u("<input type='hidden'/>").attr("name", s.submitButton.name).val(u(s.submitButton).val()).appendTo(s.currentForm)), !s.settings.submitHandler || (e = s.settings.submitHandler.call(s, s.currentForm, i), t && t.remove(), void 0 !== e && e)
                    }
                    return s.settings.debug && i.preventDefault(), s.cancelSubmit ? (s.cancelSubmit = !1, t()) : s.form() ? s.pendingRequest ? !(s.formSubmitted = !0) : t() : (s.focusInvalid(), !1)
                })), s)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, e, i;
            return u(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = u(this[0].form).validate(), this.each(function() {
                (t = e.element(this) && t) || (i = i.concat(e.errorList))
            }), e.errorList = i), t
        },
        rules: function(t, e) {
            var i, s, n, r, a, o, l = this[0];
            if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                if (t) switch (i = u.data(l.form, "validator").settings, s = i.rules, n = u.validator.staticRules(l), t) {
                    case "add":
                        u.extend(n, u.validator.normalizeRule(e)), delete n.messages, s[l.name] = n, e.messages && (i.messages[l.name] = u.extend(i.messages[l.name], e.messages));
                        break;
                    case "remove":
                        return e ? (o = {}, u.each(e.split(/\s/), function(t, e) {
                            o[e] = n[e], delete n[e]
                        }), o) : (delete s[l.name], n)
                }
                return (r = u.validator.normalizeRules(u.extend({}, u.validator.classRules(l), u.validator.attributeRules(l), u.validator.dataRules(l), u.validator.staticRules(l)), l)).required && (a = r.required, delete r.required, r = u.extend({
                    required: a
                }, r)), r.remote && (a = r.remote, delete r.remote, r = u.extend(r, {
                    remote: a
                })), r
            }
        }
    }), u.extend(u.expr.pseudos || u.expr[":"], {
        blank: function(t) {
            return !u.trim("" + u(t).val())
        },
        filled: function(t) {
            var e = u(t).val();
            return null !== e && !!u.trim("" + e)
        },
        unchecked: function(t) {
            return !u(t).prop("checked")
        }
    }), u.validator = function(t, e) {
        this.settings = u.extend(!0, {}, u.validator.defaults, t), this.currentForm = e, this.init()
    }, u.validator.format = function(i, t) {
        return 1 === arguments.length ? function() {
            var t = u.makeArray(arguments);
            return t.unshift(i), u.validator.format.apply(this, t)
        } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = u.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), u.each(t, function(t, e) {
            i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return e
            })
        })), i)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                9 === e.which && "" === this.elementValue(t) || -1 !== u.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : u(t).addClass(e).removeClass(i)
            },
            unhighlight: function(t, e, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : u(t).removeClass(e).addClass(i)
            }
        },
        setDefaults: function(t) {
            u.extend(u.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name"));
                    var e = u.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        s = e.settings;
                    s[i] && !u(this).is(s.ignore) && s[i].call(e, this, t)
                }
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.groups = {};
                u.each(this.settings.groups, function(i, t) {
                    "string" == typeof t && (t = t.split(/\s/)), u.each(t, function(t, e) {
                        s[e] = i
                    })
                }), i = this.settings.rules, u.each(i, function(t, e) {
                    i[t] = u.validator.normalizeRule(e)
                }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(t) {
                var e, i, s = this.clean(t),
                    n = this.validationTargetFor(s),
                    r = this,
                    a = !0;
                return void 0 === n ? delete this.invalid[s.name] : (this.prepareElement(n), this.currentElements = u(n), (i = this.groups[n.name]) && u.each(this.groups, function(t, e) {
                    e === i && t !== n.name && ((s = r.validationTargetFor(r.clean(r.findByName(t)))) && s.name in r.invalid && (r.currentElements.push(s), a = r.check(s) && a))
                }), e = !1 !== this.check(n), a = a && e, this.invalid[n.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(t).attr("aria-invalid", !e)), a
            },
            showErrors: function(e) {
                if (e) {
                    var i = this;
                    u.extend(this.errorMap, e), this.errorList = u.map(this.errorMap, function(t, e) {
                        return {
                            message: t,
                            element: i.findByName(e)[0]
                        }
                    }), this.successList = u.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === u.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var t = this.name || u(this).attr("name");
                    return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = t), !(t in i || !e.objectLength(u(this).rules()) || (i[t] = !0, 0))
                })
            },
            clean: function(t) {
                return u(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = u([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(t) {
                var e, i, s = u(t),
                    n = t.type;
                return "radio" === n || "checkbox" === n ? this.findByName(t.name).filter(":checked").val() : "number" === n && void 0 !== t.validity ? t.validity.badInput ? "NaN" : s.val() : (e = t.hasAttribute("contenteditable") ? s.text() : s.val(), "file" === n ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t, i, s, n, r = u(e).rules(),
                    a = u.map(r, function(t, e) {
                        return e
                    }).length,
                    o = !1,
                    l = this.elementValue(e);
                if ("function" == typeof r.normalizer ? n = r.normalizer : "function" == typeof this.settings.normalizer && (n = this.settings.normalizer), n) {
                    if ("string" != typeof(l = n.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                    delete r.normalizer
                }
                for (i in r) {
                    s = {
                        method: i,
                        parameters: r[i]
                    };
                    try {
                        if ("dependency-mismatch" === (t = u.validator.methods[i].call(this, l, e, s.parameters)) && 1 === a) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, s), !1
                    } catch (t) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method."), t
                    }
                }
                if (!o) return this.objectLength(r) && this.successList.push(e), !0
            },
            customDataMessage: function(t, e) {
                return u(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || u(t).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(t, e) {
                "string" == typeof e && (e = {
                    method: e
                });
                var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, u.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    s = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = u.validator.format(i.replace(s, "{$1}"), e.parameters)), i
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({
                    message: i,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return u(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, e) {
                var i, s, n, r, a = this.errorsFor(t),
                    o = this.idOrName(t),
                    l = u(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(e)) : (i = a = u("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, u(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", o) : 0 === a.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (n = a.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(n) + "\\b")) || (l += " " + n) : l = n, u(t).attr("aria-describedby", l), (s = this.groups[t.name]) && (r = this, u.each(r.groups, function(t, e) {
                    e === s && u("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", a.attr("id"))
                })))), !e && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(t) {
                var e = this.escapeCssMeta(this.idOrName(t)),
                    i = u(t).attr("aria-describedby"),
                    s = "label[for='" + e + "'], label[for='" + e + "'] *";
                return i && (s = s + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(s)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), u(t).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(t) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return u("option:selected", e).length;
                    case "input":
                        if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(t, e) {
                    return !!u(t, e.form).length
                },
                function: function(t, e) {
                    return t(e)
                }
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return !u.validator.methods.required.call(this, e, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, u(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, e) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], u(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, e) {
                return e = "string" == typeof e && e || "remote", u.data(t, "previousValue") || u.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, e) {
            t.constructor === String ? this.classRuleSettings[t] = e : u.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var e = {},
                i = u(t).attr("class");
            return i && u.each(i.split(" "), function() {
                this in u.validator.classRuleSettings && u.extend(e, u.validator.classRuleSettings[this])
            }), e
        },
        normalizeAttributeRule: function(t, e, i, s) {
            /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? t[i] = s : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(t) {
            var e, i, s = {},
                n = u(t),
                r = t.getAttribute("type");
            for (e in u.validator.methods) "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), i = !!i) : i = n.attr(e), this.normalizeAttributeRule(s, r, e, i);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
        },
        dataRules: function(t) {
            var e, i, s = {},
                n = u(t),
                r = t.getAttribute("type");
            for (e in u.validator.methods) i = n.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(s, r, e, i);
            return s
        },
        staticRules: function(t) {
            var e = {},
                i = u.data(t.form, "validator");
            return i.settings.rules && (e = u.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
        },
        normalizeRules: function(s, n) {
            return u.each(s, function(t, e) {
                if (!1 !== e) {
                    if (e.param || e.depends) {
                        var i = !0;
                        switch (typeof e.depends) {
                            case "string":
                                i = !!u(e.depends, n.form).length;
                                break;
                            case "function":
                                i = e.depends.call(n, n)
                        }
                        i ? s[t] = void 0 === e.param || e.param : (u.data(n.form, "validator").resetElements(u(n)), delete s[t])
                    }
                } else delete s[t]
            }), u.each(s, function(t, e) {
                s[t] = u.isFunction(e) && "normalizer" !== t ? e(n) : e
            }), u.each(["minlength", "maxlength"], function() {
                s[this] && (s[this] = Number(s[this]))
            }), u.each(["rangelength", "range"], function() {
                var t;
                s[this] && (u.isArray(s[this]) ? s[this] = [Number(s[this][0]), Number(s[this][1])] : "string" == typeof s[this] && (t = s[this].replace(/[\[\]]/g, "").split(/[\s,]+/), s[this] = [Number(t[0]), Number(t[1])]))
            }), u.validator.autoCreateRanges && (null != s.min && null != s.max && (s.range = [s.min, s.max], delete s.min, delete s.max), null != s.minlength && null != s.maxlength && (s.rangelength = [s.minlength, s.maxlength], delete s.minlength, delete s.maxlength)), s
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var e = {};
                u.each(t.split(/\s/), function() {
                    e[this] = !0
                }), t = e
            }
            return t
        },
        addMethod: function(t, e, i) {
            u.validator.methods[t] = e, u.validator.messages[t] = void 0 !== i ? i : u.validator.messages[t], e.length < 3 && u.validator.addClassRules(t, u.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                if ("select" === e.nodeName.toLowerCase()) {
                    var s = u(e).val();
                    return s && 0 < s.length
                }
                return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(t, e, i) {
                var s = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || i <= s
            },
            maxlength: function(t, e, i) {
                var s = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || s <= i
            },
            rangelength: function(t, e, i) {
                var s = u.isArray(t) ? t.length : this.getLength(t, e);
                return this.optional(e) || s >= i[0] && s <= i[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            step: function(t, e, i) {
                var s, n = u(e).attr("type"),
                    r = "Step attribute on input type " + n + " is not supported.",
                    a = new RegExp("\\b" + n + "\\b"),
                    o = function(t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    l = function(t) {
                        return Math.round(t * Math.pow(10, s))
                    },
                    h = !0;
                if (n && !a.test(["text", "number", "range"].join())) throw new Error(r);
                return s = o(i), (o(t) > s || l(t) % l(i) != 0) && (h = !1), this.optional(e) || h
            },
            equalTo: function(t, e, i) {
                var s = u(i);
                return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    u(e).valid()
                }), t === s.val()
            },
            remote: function(r, a, t, o) {
                if (this.optional(a)) return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var l, e, i, h = this.previousValue(a, o);
                return this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), h.originalMessage = h.originalMessage || this.settings.messages[a.name][o], this.settings.messages[a.name][o] = h.message, t = "string" == typeof t && {
                    url: t
                } || t, i = u.param(u.extend({
                    data: r
                }, t.data)), h.old === i ? h.valid : (h.old = i, (l = this).startRequest(a), (e = {})[a.name] = r, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: e,
                    context: l.currentForm,
                    success: function(t) {
                        var e, i, s, n = !0 === t || "true" === t;
                        l.settings.messages[a.name][o] = h.originalMessage, n ? (s = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(a), l.formSubmitted = s, l.successList.push(a), l.invalid[a.name] = !1, l.showErrors()) : (e = {}, i = t || l.defaultMessage(a, {
                            method: o,
                            parameters: r
                        }), e[a.name] = h.message = i, l.invalid[a.name] = !0, l.showErrors(e)), h.valid = n, l.stopRequest(a, n)
                    }
                }, t)), "pending")
            }
        }
    });
    var s, n = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function(t, e, i) {
        var s = t.port;
        "abort" === t.mode && (n[s] && n[s].abort(), n[s] = i)
    }) : (s = u.ajax, u.ajax = function(t) {
        var e = ("mode" in t ? t : u.ajaxSettings).mode,
            i = ("port" in t ? t : u.ajaxSettings).port;
        return "abort" === e ? (n[i] && n[i].abort(), n[i] = s.apply(this, arguments), n[i]) : s.apply(this, arguments)
    }), u
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var D = Math.PI / 180,
        E = 180 / Math.PI,
        y = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        _ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        u = /[achlmqstvz]/gi,
        o = _gsScope.TweenLite,
        N = function(t) {
            window.console && console.log(t)
        },
        x = function(t, e, r, n, o, a, i, s, h) {
            if (t !== s || e !== h) {
                r = Math.abs(r), n = Math.abs(n);
                var l = o % 360 * D,
                    u = Math.cos(l),
                    c = Math.sin(l),
                    f = (t - s) / 2,
                    g = (e - h) / 2,
                    p = u * f + c * g,
                    d = -c * f + u * g,
                    v = r * r,
                    M = n * n,
                    b = p * p,
                    m = d * d,
                    A = b / v + m / M;
                1 < A && (v = (r = Math.sqrt(A) * r) * r, M = (n = Math.sqrt(A) * n) * n);
                var y = a === i ? -1 : 1,
                    N = (v * M - v * m - M * b) / (v * m + M * b);
                N < 0 && (N = 0);
                var x = y * Math.sqrt(N),
                    P = x * (r * d / n),
                    _ = x * (-n * p / r),
                    S = (t + s) / 2 + (u * P - c * _),
                    z = (e + h) / 2 + (c * P + u * _),
                    w = (p - P) / r,
                    T = (d - _) / n,
                    q = (-p - P) / r,
                    I = (-d - _) / n,
                    C = Math.sqrt(w * w + T * T),
                    G = w,
                    L = (y = T < 0 ? -1 : 1) * Math.acos(G / C) * E;
                C = Math.sqrt((w * w + T * T) * (q * q + I * I)), G = w * q + T * I;
                var R = (y = w * I - T * q < 0 ? -1 : 1) * Math.acos(G / C) * E;
                !i && 0 < R ? R -= 360 : i && R < 0 && (R += 360);
                var B, F, V, Y = function(t, e) {
                        var r, n, o, a, i, s, h = Math.ceil(Math.abs(e) / 90),
                            l = 0,
                            u = [];
                        for (t *= D, r = (e *= D) / h, n = 4 / 3 * Math.sin(r / 2) / (1 + Math.cos(r / 2)), s = 0; s < h; s++) o = t + s * r, a = Math.cos(o), i = Math.sin(o), u[l++] = a - n * i, u[l++] = i + n * a, o += r, a = Math.cos(o), i = Math.sin(o), u[l++] = a + n * i, u[l++] = i - n * a, u[l++] = a, u[l++] = i;
                        return u
                    }(L %= 360, R %= 360),
                    H = u * r,
                    O = c * r,
                    X = c * -n,
                    Q = u * n,
                    j = Y.length - 2;
                for (B = 0; B < j; B += 2) F = Y[B], V = Y[B + 1], Y[B] = F * H + V * X + S, Y[B + 1] = F * O + V * Q + z;
                return Y[Y.length - 2] = s, Y[Y.length - 1] = h, Y
            }
        },
        l = function(t) {
            var e, r, n, o, a, i, s, h, l, u, c, f, g, p = (t + "").match(y) || [],
                d = [],
                v = 0,
                M = 0,
                b = p.length,
                m = 2,
                A = 0;
            if (!t || !isNaN(p[0]) || isNaN(p[1])) return N("ERROR: malformed path data: " + t), d;
            for (e = 0; e < b; e++)
                if (g = a, isNaN(p[e]) ? i = (a = p[e].toUpperCase()) !== p[e] : e--, n = +p[e + 1], o = +p[e + 2], i && (n += v, o += M), 0 === e && (h = n, l = o), "M" === a) v = h = n, M = l = o, s = [n, o], A += m, m = 2, d.push(s), e += 2;
                else if ("C" === a) s || (s = [0, 0]), s[m++] = n, s[m++] = o, i || (v = M = 0), s[m++] = v + 1 * p[e + 3], s[m++] = M + 1 * p[e + 4], s[m++] = v += 1 * p[e + 5], s[m++] = M += 1 * p[e + 6], e += 6;
            else if ("S" === a) "C" === g || "S" === g ? (u = v - s[m - 4], c = M - s[m - 3], s[m++] = v + u, s[m++] = M + c) : (s[m++] = v, s[m++] = M), s[m++] = n, s[m++] = o, i || (v = M = 0), s[m++] = v += 1 * p[e + 3], s[m++] = M += 1 * p[e + 4], e += 4;
            else if ("Q" === a) u = n - v, c = o - M, s[m++] = v + 2 * u / 3, s[m++] = M + 2 * c / 3, i || (v = M = 0), u = n - (v += 1 * p[e + 3]), c = o - (M += 1 * p[e + 4]), s[m++] = v + 2 * u / 3, s[m++] = M + 2 * c / 3, s[m++] = v, s[m++] = M, e += 4;
            else if ("T" === a) u = v - s[m - 4], c = M - s[m - 3], s[m++] = v + u, s[m++] = M + c, u = v + 1.5 * u - n, c = M + 1.5 * c - o, s[m++] = n + 2 * u / 3, s[m++] = o + 2 * c / 3, s[m++] = v = n, s[m++] = M = o, e += 2;
            else if ("H" === a) o = M, s[m++] = v + (n - v) / 3, s[m++] = M + (o - M) / 3, s[m++] = v + 2 * (n - v) / 3, s[m++] = M + 2 * (o - M) / 3, s[m++] = v = n, s[m++] = o, e += 1;
            else if ("V" === a) o = n, n = v, i && (o += M - v), s[m++] = n, s[m++] = M + (o - M) / 3, s[m++] = n, s[m++] = M + 2 * (o - M) / 3, s[m++] = n, s[m++] = M = o, e += 1;
            else if ("L" === a || "Z" === a) "Z" === a && (n = h, o = l, s.closed = !0), ("L" === a || 1 < Math.abs(v - n) || 1 < Math.abs(M - o)) && (s[m++] = v + (n - v) / 3, s[m++] = M + (o - M) / 3, s[m++] = v + 2 * (n - v) / 3, s[m++] = M + 2 * (o - M) / 3, s[m++] = n, s[m++] = o, e += 2), v = n, M = o;
            else if ("A" === a) {
                for (f = x(v, M, 1 * p[e + 1], 1 * p[e + 2], 1 * p[e + 3], 1 * p[e + 4], 1 * p[e + 5], (i ? v : 0) + 1 * p[e + 6], (i ? M : 0) + 1 * p[e + 7]), r = 0; r < f.length; r++) s[m++] = f[r];
                v = s[m - 2], M = s[m - 1], e += 7
            } else N("Error: malformed path data: " + t);
            return d.totalPoints = A + m, d
        },
        M = function(t, e) {
            var r, n, o, a, i, s, h, l, u, c, f, g, p, d, v = 0,
                M = t.length,
                b = e / ((M - 2) / 6);
            for (p = 2; p < M; p += 6)
                for (v += b;.999999 < v;) r = t[p - 2], n = t[p - 1], o = t[p], a = t[p + 1], i = t[p + 2], s = t[p + 3], h = t[p + 4], l = t[p + 5], u = r + (o - r) * (d = 1 / (Math.floor(v) + 1)), u += ((f = o + (i - o) * d) - u) * d, f += (i + (h - i) * d - f) * d, c = n + (a - n) * d, c += ((g = a + (s - a) * d) - c) * d, g += (s + (l - s) * d - g) * d, t.splice(p, 4, r + (o - r) * d, n + (a - n) * d, u, c, u + (f - u) * d, c + (g - c) * d, f, g, i + (h - i) * d, s + (l - s) * d), p += 6, M += 6, v--;
            return t
        },
        a = function(t) {
            var e, r, n, o, a = "",
                i = t.length,
                s = 100;
            for (r = 0; r < i; r++) {
                for (a += "M" + (o = t[r])[0] + "," + o[1] + " C", e = o.length, n = 2; n < e; n++) a += (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n] * s | 0) / s + " ";
                o.closed && (a += "z")
            }
            return a
        },
        b = function(t) {
            for (var e = [], r = t.length - 1, n = 0; - 1 < --r;) e[n++] = t[r], e[n++] = t[r + 1], r--;
            for (r = 0; r < n; r++) t[r] = e[r];
            t.reversed = !t.reversed
        },
        g = function(t) {
            var e, r = t.length,
                n = 0,
                o = 0;
            for (e = 0; e < r; e++) n += t[e++], o += t[e];
            return [n / (r / 2), o / (r / 2)]
        },
        p = function(t) {
            var e, r, n, o = t.length,
                a = t[0],
                i = a,
                s = t[1],
                h = s;
            for (n = 6; n < o; n += 6) a < (e = t[n]) ? a = e : e < i && (i = e), s < (r = t[n + 1]) ? s = r : r < h && (h = r);
            return t.centerX = (a + i) / 2, t.centerY = (s - h) / 2, t.size = (a - i) * (s - h)
        },
        m = function(t, e) {
            return e.length - t.length
        },
        A = function(t, e) {
            var r = t.size || p(t),
                n = e.size || p(e);
            return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r
        },
        P = function(t, e) {
            var r, n, o = t.slice(0),
                a = t.length,
                i = a - 2;
            for (e |= 0, r = 0; r < a; r++) n = (r + e) % i, t[r++] = o[n], t[r] = o[n + 1]
        },
        d = function(t, e, r, n, o) {
            var a, i, s, h, l = t.length,
                u = 0,
                c = l - 2;
            for (r *= 6, i = 0; i < l; i += 6) h = t[a = (i + r) % c] - (e[i] - n), s = t[a + 1] - (e[i + 1] - o), u += Math.sqrt(s * s + h * h);
            return u
        },
        S = function(t, e, r) {
            var n, o, a, i = t.length,
                s = g(t),
                h = g(e),
                l = h[0] - s[0],
                u = h[1] - s[1],
                c = d(t, e, 0, l, u),
                f = 0;
            for (a = 6; a < i; a += 6)(o = d(t, e, a / 6, l, u)) < c && (c = o, f = a);
            if (r)
                for (n = t.slice(0), b(n), a = 6; a < i; a += 6)(o = d(n, e, a / 6, l, u)) < c && (c = o, f = -a);
            return f / 6
        },
        z = function(t, e, r) {
            var n, o, a, i, s = t.length,
                h = 99999999999,
                l = 0;
            for (i = 0; i < s; i += 6) n = t[i] - e, o = t[i + 1] - r, (a = Math.sqrt(n * n + o * o)) < h && (h = a, l = i);
            return l
        },
        w = function(t, e, r) {
            var n, o, a, i, s = e.length,
                h = 0,
                l = .8 * (e[r].size || p(e[r])),
                u = 999999999999,
                c = (t.size || p(t), t.centerX),
                f = t.centerY;
            for (n = r; n < s && !((e[n].size || p(e[n])) < l); n++) o = e[n].centerX - c, a = e[n].centerY - f, (i = Math.sqrt(o * o + a * a)) < u && (h = n, u = i);
            return i = e[h], e.splice(h, 1), i
        },
        i = function(t, e, r, n) {
            var o, a, i, s, h, l = e.length - t.length,
                u = 0 < l ? e : t,
                c = 0 < l ? t : e,
                f = 0,
                g = "complexity" === n ? m : A,
                p = c.length,
                d = "object" == typeof r && r.push ? r.slice(0) : [r],
                v = "reverse" === d[0] || d[0] < 0;
            if (c[0]) {
                if (l) {
                    if (l < 0 && (l = -l), t.sort(g), e.sort(g), g === A)
                        for (p = 0; p < c.length; p++) u.splice(p, 0, w(c[p], u, p));
                    for (u[0].length > c[0].length && M(c[0], (u[0].length - c[0].length) / 6 | 0), p = c.length; f < l;) i = z(c[0], u[p][0], u[p][1]), s = c[0][i], h = c[0][i + 1], c[p++] = [s, h, s, h, s, h, s, h], c.totalPoints += 8, f++
                }
                for (p = 0; p < t.length; p++) o = e[p], a = t[p], (l = o.length - a.length) < 0 ? M(o, -l / 6 | 0) : 0 < l && M(a, l / 6 | 0), v && !a.reversed && b(a), (r = d[p] || 0 === d[p] ? d[p] : "auto") && (a.closed || Math.abs(a[0] - a[a.length - 2]) < .5 && Math.abs(a[1] - a[a.length - 1]) < .5 ? "auto" === r ? (d[p] = r = S(a, o, 0 === p), r < 0 && (v = !0, b(a), r = -r), P(a, 6 * r)) : "reverse" !== r && (p && r < 0 && b(a), P(a, 6 * (r < 0 ? -r : r))) : !v && ("auto" === r && Math.abs(o[0] - a[0]) + Math.abs(o[1] - a[1]) + Math.abs(o[o.length - 2] - a[a.length - 2]) + Math.abs(o[o.length - 1] - a[a.length - 1]) > Math.abs(o[0] - a[a.length - 2]) + Math.abs(o[1] - a[a.length - 1]) + Math.abs(o[o.length - 2] - a[0]) + Math.abs(o[o.length - 1] - a[1]) || r % 2) ? (b(a), d[p] = -1, v = !0) : "auto" === r ? d[p] = 0 : "reverse" === r && (d[p] = -1));
                return d
            }
        },
        c = function(t, e, r) {
            var n = l(t[0]),
                o = l(t[1]);
            i(n, o, e || 0 === e ? e : "auto", r) && (t[0] = a(n), t[1] = a(o))
        },
        s = function(t, e) {
            var r, n, o, a, i, s, h, l = 0,
                u = parseFloat(t[0]),
                c = parseFloat(t[1]),
                f = u + "," + c + " ";
            for (r = .5 * e / (.5 * (o = t.length) - 1), n = 0; n < o - 2; n += 2) {
                if (l += r, s = parseFloat(t[n + 2]), h = parseFloat(t[n + 3]), .999999 < l)
                    for (i = 1 / (Math.floor(l) + 1), a = 1;.999999 < l;) f += (u + (s - u) * i * a).toFixed(2) + "," + (c + (h - c) * i * a).toFixed(2) + " ", l--, a++;
                f += s + "," + h + " ", u = s, c = h
            }
            return f
        },
        r = function(t) {
            var e = t[0].match(_) || [],
                r = t[1].match(_) || [],
                n = r.length - e.length;
            0 < n ? t[0] = s(e, n) : t[1] = s(r, -n)
        },
        f = function(e) {
            return isNaN(e) ? r : function(t) {
                r(t), t[1] = function(t, e) {
                    if (!e) return t;
                    var r, n, o, a = t.match(_) || [],
                        i = a.length,
                        s = "";
                    for ("reverse" === e ? (n = i - 1, r = -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i, r = 2), o = 0; o < i; o += 2) s += a[n - 1] + "," + a[n] + " ", n = (n + r) % i;
                    return s
                }(t[1], parseInt(e, 10))
            }
        },
        h = function(t, e) {
            var r, n, o, a, i, s, h, l, u, c, f, g, p, d, v, M, b, m, A, y, N, x = t.tagName.toLowerCase(),
                P = .552284749831;
            return "path" !== x && t.getBBox ? (s = function(t, e) {
                var r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    n = Array.prototype.slice.call(t.attributes),
                    o = n.length;
                for (e = "," + e + ","; - 1 < --o;) - 1 === e.indexOf("," + n[o].nodeName + ",") && r.setAttributeNS(null, n[o].nodeName, n[o].nodeValue);
                return r
            }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === x ? (a = +t.getAttribute("rx") || 0, i = +t.getAttribute("ry") || 0, n = +t.getAttribute("x") || 0, o = +t.getAttribute("y") || 0, c = (+t.getAttribute("width") || 0) - 2 * a, f = (+t.getAttribute("height") || 0) - 2 * i, a || i ? r = "M" + (M = (d = (p = n + a) + c) + a) + "," + (m = o + i) + " V" + (A = m + f) + " C" + [M, y = A + i * P, v = d + a * P, N = A + i, d, N, d - (d - p) / 3, N, p + (d - p) / 3, N, p, N, g = n + a * (1 - P), N, n, y, n, A, n, A - (A - m) / 3, n, m + (A - m) / 3, n, m, n, b = o + i * (1 - P), g, o, p, o, p + (d - p) / 3, o, d - (d - p) / 3, o, d, o, v, o, M, b, M, m].join(",") + "z" : r = "M" + (n + c) + "," + o + " v" + f + " h" + -c + " v" + -f + " h" + c + "z") : "circle" === x || "ellipse" === x ? ("circle" === x ? l = (a = i = +t.getAttribute("r") || 0) * P : (a = +t.getAttribute("rx") || 0, l = (i = +t.getAttribute("ry") || 0) * P), r = "M" + ((n = +t.getAttribute("cx") || 0) + a) + "," + (o = +t.getAttribute("cy") || 0) + " C" + [n + a, o + l, n + (h = a * P), o + i, n, o + i, n - h, o + i, n - a, o + l, n - a, o, n - a, o - l, n - h, o - i, n, o - i, n + h, o - i, n + a, o - l, n + a, o].join(",") + "z") : "line" === x ? r = "M" + t.getAttribute("x1") + "," + t.getAttribute("y1") + " L" + t.getAttribute("x2") + "," + t.getAttribute("y2") : ("polyline" === x || "polygon" === x) && (r = "M" + (n = (u = (t.getAttribute("points") + "").match(_) || []).shift()) + "," + (o = u.shift()) + " L" + u.join(","), "polygon" === x && (r += "," + n + "," + o + "z")), s.setAttribute("d", r), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t
        },
        v = function(t, e) {
            var r, n;
            return ("string" != typeof t || (t.match(_) || []).length < 3) && ((r = o.selector(t)) && r[0] ? (n = (r = r[0]).nodeName.toUpperCase(), e && "PATH" !== n && (r = h(r, !1), n = "PATH"), t = r.getAttribute("PATH" === n ? "d" : "points") || "") : (N("WARNING: invalid morph to: " + t), t = !1)), t
        },
        T = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
        t = _gsScope._gsDefine.plugin({
            propName: "morphSVG",
            API: 2,
            global: !0,
            version: "0.3.1",
            init: function(t, e, r) {
                var n, o, a, i, s, h, l;
                return "function" == typeof t.setAttribute && (s = "POLYLINE" === (n = t.nodeName.toUpperCase()) || "POLYGON" === n, "PATH" === n || s ? (o = "PATH" === n ? "d" : "points", ("string" == typeof e || e.getBBox) && (e = {
                    shape: e
                }), i = v(e.shape || e.d || e.points || "", "d" === o), s && u.test(i) ? (N("WARNING: a <" + n + "> cannot accept path data. " + T), !1) : (i && (this._target = t, (a = this._addTween(t, "setAttribute", t.getAttribute(o) + "", i + "", "morphSVG", !1, o, "d" === o ? (h = e.shapeIndex, (l = e.map) || h || 0 === h ? function(t) {
                    c(t, h, l)
                } : c) : f(e.shapeIndex))) && (this._overwriteProps.push("morphSVG"), a.end = i, a.endProp = o)), !0)) : (N("WARNING: cannot morph a <" + n + "> SVG element. " + T), !1))
            },
            set: function(t) {
                var e;
                if (this._super.setRatio.call(this, t), 1 === t)
                    for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next
            }
        });
    t.pathFilter = c, t.pointsFilter = r, t.subdivideRawBezier = M, t.pathDataToRawBezier = function(t) {
        return l(v(t, !0))
    }, t.equalizeSegmentQuantity = i, t.convertToPath = function(t, e) {
        "string" == typeof t && (t = o.selector(t));
        for (var r = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], n = r.length; - 1 < --n;) r[n] = h(r[n], !1 !== e);
        return r
    }, t.pathDataToBezier = function(t, e) {
        var r, n, o, a, i, s, h = l(v(t, !0))[0] || [];
        if (a = (e = e || {}).matrix, r = [], o = h.length, a)
            for (e.relative && ((a = a.slice(0))[4] -= h[0], a[5] -= h[1]), n = 0; n < o; n += 2) r.push({
                x: h[n] * a[0] + h[n + 1] * a[2] + a[4],
                y: h[n] * a[1] + h[n + 1] * a[3] + a[5]
            });
        else
            for (i = e.offsetX || 0, s = e.offsetY || 0, e.relative && (i -= h[0], s -= h[1]), n = 0; n < o; n += 2) r.push({
                x: h[n] + i,
                y: h[n + 1] + s
            });
        return r
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
! function(e) {
    "use strict";

    function n(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function t(e, t, n) {
        var i = document.createElement(e);
        return i.className = t || "", i.innerHTML = n || "", i
    }

    function i(e, t) {
        this.el = e, this.options = n({}, this.options), n(this.options, t), this._init()
    }
    i.prototype.options = {
        isContentHidden: !0,
        revealSettings: {
            direction: "lr",
            bgcolor: "#f0f0f0",
            duration: 500,
            easing: "easeInOutQuint",
            coverArea: 0,
            onCover: function(e, t) {
                return !1
            },
            onStart: function(e, t) {
                return !1
            },
            onComplete: function(e, t) {
                return !1
            }
        }
    }, i.prototype._init = function() {
        this._layout()
    }, i.prototype._layout = function() {
        var e = getComputedStyle(this.el).position;
        "fixed" !== e && "absolute" !== e && "relative" !== e && (this.el.style.position = "relative"), this.content = t("div", "block-revealer__content", this.el.innerHTML), this.options.isContentHidden && (this.content.style.opacity = 0), this.revealer = t("div", "block-revealer__element"), this.el.classList.add("block-revealer"), this.el.innerHTML = "", this.el.appendChild(this.content), this.el.appendChild(this.revealer)
    }, i.prototype._getTransformSettings = function(e) {
        var t, n, i;
        switch (e) {
            case "lr":
                t = "scale3d(0,1,1)", n = "0 50%", i = "100% 50%";
                break;
            case "rl":
                t = "scale3d(0,1,1)", n = "100% 50%", i = "0 50%";
                break;
            case "tb":
                t = "scale3d(1,0,1)", n = "50% 0", i = "50% 100%";
                break;
            case "bt":
                t = "scale3d(1,0,1)", n = "50% 100%", i = "50% 0";
                break;
            default:
                t = "scale3d(0,1,1)", n = "0 50%", i = "100% 50%"
        }
        return {
            val: t,
            origin: {
                initial: n,
                halfway: i
            }
        }
    }, i.prototype.reveal = function(e) {
        if (this.isAnimating) return !1;
        this.isAnimating = !0;
        var t = 500,
            n = "easeInOutQuint",
            i = 0,
            r = "#f0f0f0",
            o = "lr",
            a = 0,
            s = (e = e || this.options.revealSettings).direction || o,
            l = this._getTransformSettings(s);
        this.revealer.style.WebkitTransform = this.revealer.style.transform = l.val, this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin = l.origin.initial, this.revealer.style.backgroundColor = e.bgcolor || r, this.revealer.style.opacity = 1;
        var c = this,
            f = {
                complete: function() {
                    c.isAnimating = !1, "function" == typeof e.onComplete && e.onComplete(c.content, c.revealer)
                }
            },
            u = {
                delay: e.delay || i,
                complete: function() {
                    c.revealer.style.WebkitTransformOrigin = c.revealer.style.transformOrigin = l.origin.halfway, "function" == typeof e.onCover && e.onCover(c.content, c.revealer), anime(f)
                }
            };
        u.targets = f.targets = this.revealer, u.duration = f.duration = e.duration || t, u.easing = f.easing = e.easing || n;
        var v = e.coverArea || a;
        "lr" === s || "rl" === s ? (u.scaleX = [0, 1], f.scaleX = [1, v / 100]) : (u.scaleY = [0, 1], f.scaleY = [1, v / 100]), "function" == typeof e.onStart && e.onStart(c.content, c.revealer), anime(u)
    }, e.RevealFx = i
}(window);
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
}(this, function() {
    var c = function(e, t) {
        var f = Object.create(c.prototype),
            r = 0,
            u = 0,
            i = 0,
            m = 0,
            p = [],
            o = !1,
            n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            },
            s = window.transformProp || function() {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t, o = ["Webkit", "Moz", "ms"];
                    for (t in o)
                        if (void 0 !== e.style[o[t] + "Transform"]) return o[t] + "Transform"
                }
                return "transform"
            }();
        f.options = {
            speed: -2,
            center: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            callback: function() {}
        }, t && Object.keys(t).forEach(function(e) {
            f.options[e] = t[e]
        }), e || (e = ".rellax");
        var l = "string" == typeof e ? document.querySelectorAll(e) : [e];
        if (!(0 < l.length)) throw Error("The elements you're trying to select don't exist.");
        f.elems = l;
        var d = function() {
                for (var e = 0; e < p.length; e++) f.elems[e].style.cssText = p[e].style;
                for (p = [], u = window.innerHeight, m = window.innerWidth, w(), e = 0; e < f.elems.length; e++) {
                    var t = f.elems[e],
                        o = t.getAttribute("data-rellax-percentage"),
                        n = t.getAttribute("data-rellax-speed"),
                        r = t.getAttribute("data-rellax-zindex") || 0,
                        i = f.options.vertical && (o || f.options.center) ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0,
                        s = f.options.horizontal && (o || f.options.center) ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                        l = i + t.getBoundingClientRect().top,
                        d = t.clientHeight || t.offsetHeight || t.scrollHeight,
                        a = s + t.getBoundingClientRect().left,
                        c = t.clientWidth || t.offsetWidth || t.scrollWidth;
                    i = o || (i - l + u) / (d + u), o = o || (s - a + m) / (c + m), f.options.center && (i = o = .5), n = n || f.options.speed, i = h(o, i, n), o = "", 0 <= (t = t.style.cssText).indexOf("transform") && (o = t.indexOf("transform"), o = (s = (o = t.slice(o)).indexOf(";")) ? " " + o.slice(11, s).replace(/\s/g, "") : " " + o.slice(11).replace(/\s/g, "")), p.push({
                        baseX: i.x,
                        baseY: i.y,
                        top: l,
                        left: a,
                        height: d,
                        width: c,
                        speed: n,
                        style: t,
                        transform: o,
                        zindex: r
                    })
                }
                g()
            },
            w = function() {
                var e = r,
                    t = i;
                return r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, i = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, !!(e != r && f.options.vertical || t != i && f.options.horizontal)
            },
            h = function(e, t, o) {
                var n = {};
                return e = 100 * o * (1 - e), t = 100 * o * (1 - t), n.x = f.options.round ? Math.round(e) : Math.round(100 * e) / 100, n.y = f.options.round ? Math.round(t) : Math.round(100 * t) / 100, n
            },
            a = function() {
                w() && !1 === o && g(), n(a)
            },
            g = function() {
                for (var e, t = 0; t < f.elems.length; t++) {
                    var o = (e = h((i - p[t].left + m) / (p[t].width + m), (r - p[t].top + u) / (p[t].height + u), p[t].speed)).y - p[t].baseY,
                        n = e.x - p[t].baseX;
                    f.elems[t].style[s] = "translate3d(" + (f.options.horizontal ? n : "0") + "px," + (f.options.vertical ? o : "0") + "px," + p[t].zindex + "px) " + p[t].transform
                }
                f.options.callback(e)
            };
        return f.destroy = function() {
            for (var e = 0; e < f.elems.length; e++) f.elems[e].style.cssText = p[e].style;
            o = !0
        }, d(), window.addEventListener("resize", function() {
            d()
        }), a(), f.refresh = d, f
    };
    return c
});
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("scrollMonitor", [], e) : "object" == typeof exports ? exports.scrollMonitor = e() : t.scrollMonitor = e()
}(this, function() {
    return function(i) {
        function o(t) {
            if (s[t]) return s[t].exports;
            var e = s[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return i[t].call(e.exports, e, e.exports, o), e.loaded = !0, e.exports
        }
        var s = {};
        return o.m = i, o.c = s, o.p = "", o(0)
    }([function(t, e, i) {
        "use strict";
        var o = i(1).isInBrowser,
            s = new(i(2))(o ? document.body : null);
        s.setStateFromDOM(null), s.listenToDOM(), o && (window.scrollMonitor = s), t.exports = s
    }, function(t, e) {
        "use strict";
        e.VISIBILITYCHANGE = "visibilityChange", e.ENTERVIEWPORT = "enterViewport", e.FULLYENTERVIEWPORT = "fullyEnterViewport", e.EXITVIEWPORT = "exitViewport", e.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", e.LOCATIONCHANGE = "locationChange", e.STATECHANGE = "stateChange", e.eventTypes = [e.VISIBILITYCHANGE, e.ENTERVIEWPORT, e.FULLYENTERVIEWPORT, e.EXITVIEWPORT, e.PARTIALLYEXITVIEWPORT, e.LOCATIONCHANGE, e.STATECHANGE], e.isOnServer = "undefined" == typeof window, e.isInBrowser = !e.isOnServer, e.defaultOffsets = {
            top: 0,
            bottom: 0
        }
    }, function(t, e, i) {
        "use strict";

        function h(t) {
            return s ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight
        }

        function c(t) {
            return s ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight
        }

        function a(t) {
            return s ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop
        }
        var o = i(1),
            s = o.isOnServer,
            n = o.isInBrowser,
            l = o.eventTypes,
            p = i(3),
            r = !1;
        if (n) try {
            var u = Object.defineProperty({}, "passive", {
                get: function() {
                    r = !0
                }
            });
            window.addEventListener("test", null, u)
        } catch (t) {}
        var w = !!r && {
                capture: !1,
                passive: !0
            },
            d = function() {
                function r(t, e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var i, o, s, n = this;
                    this.item = t, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = c(t), this.viewportHeight = h(t), this.DOMListener = function() {
                        r.prototype.DOMListener.apply(n, arguments)
                    }, this.eventTypes = l, e && (this.containerWatcher = e.create(t)), this.update = function() {
                        (function() {
                            if (n.viewportTop = a(t), n.viewportBottom = n.viewportTop + n.viewportHeight, n.documentHeight = c(t), n.documentHeight !== i) {
                                for (o = n.watchers.length; o--;) n.watchers[o].recalculateLocation();
                                i = n.documentHeight
                            }
                        })(),
                        function() {
                            for (s = n.watchers.length; s--;) n.watchers[s].update();
                            for (s = n.watchers.length; s--;) n.watchers[s].triggerCallbacks()
                        }()
                    }, this.recalculateLocations = function() {
                        this.documentHeight = 0, this.update()
                    }
                }
                return r.prototype.listenToDOM = function() {
                    n && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener, w) : this.item.addEventListener("scroll", this.DOMListener, w), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function() {
                        window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener, w), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener, w), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener))
                    })
                }, r.prototype.destroy = function() {}, r.prototype.DOMListener = function(t) {
                    this.setStateFromDOM(t)
                }, r.prototype.setStateFromDOM = function(t) {
                    var e = a(this.item),
                        i = h(this.item),
                        o = c(this.item);
                    this.setState(e, i, o, t)
                }, r.prototype.setState = function(t, e, i, o) {
                    var s = e !== this.viewportHeight || i !== this.contentHeight;
                    if (this.latestEvent = o, this.viewportTop = t, this.viewportHeight = e, this.viewportBottom = t + e, this.contentHeight = i, s)
                        for (var n = this.watchers.length; n--;) this.watchers[n].recalculateLocation();
                    this.updateAndTriggerWatchers(o)
                }, r.prototype.updateAndTriggerWatchers = function(t) {
                    for (var e = this.watchers.length; e--;) this.watchers[e].update();
                    for (e = this.watchers.length; e--;) this.watchers[e].triggerCallbacks(t)
                }, r.prototype.createCustomContainer = function() {
                    return new r
                }, r.prototype.createContainer = function(t) {
                    "string" == typeof t ? t = document.querySelector(t) : t && 0 < t.length && (t = t[0]);
                    var e = new r(t, this);
                    return e.setStateFromDOM(), e.listenToDOM(), e
                }, r.prototype.create = function(t, e) {
                    "string" == typeof t ? t = document.querySelector(t) : t && 0 < t.length && (t = t[0]);
                    var i = new p(this, t, e);
                    return this.watchers.push(i), i
                }, r.prototype.beget = function(t, e) {
                    return this.create(t, e)
                }, r
            }();
        t.exports = d
    }, function(t, e, i) {
        "use strict";

        function o(t, e, i) {
            function r(t, e) {
                if (0 !== t.length)
                    for (c = t.length; c--;)(a = t[c]).callback.call(l, e, l), a.isOne && t.splice(c, 1)
            }
            var o, s, n, h, c, a, l = this;
            this.watchItem = e, this.container = t, this.offsets = i ? i === +i ? {
                top: i,
                bottom: i
            } : {
                top: i.top || y.top,
                bottom: i.bottom || y.bottom
            } : y, this.callbacks = {};
            for (var p = 0, u = E.length; p < u; p++) l.callbacks[E[p]] = [];
            this.locked = !1, this.triggerCallbacks = function(t) {
                switch (this.isInViewport && !o && r(this.callbacks[d], t), this.isFullyInViewport && !s && r(this.callbacks[f], t), this.isAboveViewport !== n && this.isBelowViewport !== h && (r(this.callbacks[w], t), s || this.isFullyInViewport || (r(this.callbacks[f], t), r(this.callbacks[v], t)), o || this.isInViewport || (r(this.callbacks[d], t), r(this.callbacks[m], t))), !this.isFullyInViewport && s && r(this.callbacks[v], t), !this.isInViewport && o && r(this.callbacks[m], t), this.isInViewport !== o && r(this.callbacks[w], t), !0) {
                    case o !== this.isInViewport:
                    case s !== this.isFullyInViewport:
                    case n !== this.isAboveViewport:
                    case h !== this.isBelowViewport:
                        r(this.callbacks[I], t)
                }
                o = this.isInViewport, s = this.isFullyInViewport, n = this.isAboveViewport, h = this.isBelowViewport
            }, this.recalculateLocation = function() {
                if (!this.locked) {
                    var t = this.top,
                        e = this.bottom;
                    if (this.watchItem.nodeName) {
                        var i = this.watchItem.style.display;
                        "none" === i && (this.watchItem.style.display = "");
                        for (var o = 0, s = this.container; s.containerWatcher;) o += s.containerWatcher.top - s.containerWatcher.container.viewportTop, s = s.containerWatcher.container;
                        var n = this.watchItem.getBoundingClientRect();
                        this.top = n.top + this.container.viewportTop - o, this.bottom = n.bottom + this.container.viewportTop - o, "none" === i && (this.watchItem.style.display = i)
                    } else this.watchItem === +this.watchItem ? 0 < this.watchItem ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || r(this.callbacks[b], null)
                }
            }, this.recalculateLocation(), this.update(), o = this.isInViewport, s = this.isFullyInViewport, n = this.isAboveViewport, h = this.isBelowViewport
        }
        var s = i(1),
            w = s.VISIBILITYCHANGE,
            d = s.ENTERVIEWPORT,
            f = s.FULLYENTERVIEWPORT,
            m = s.EXITVIEWPORT,
            v = s.PARTIALLYEXITVIEWPORT,
            b = s.LOCATIONCHANGE,
            I = s.STATECHANGE,
            E = s.eventTypes,
            y = s.defaultOffsets;
        o.prototype = {
            on: function(t, e, i) {
                switch (!0) {
                    case t === w && !this.isInViewport && this.isAboveViewport:
                    case t === d && this.isInViewport:
                    case t === f && this.isFullyInViewport:
                    case t === m && this.isAboveViewport && !this.isInViewport:
                    case t === v && this.isInViewport && this.isAboveViewport:
                        if (e.call(this, this.container.latestEvent, this), i) return
                }
                if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + E.join(", "));
                this.callbacks[t].push({
                    callback: e,
                    isOne: i || !1
                })
            },
            off: function(t, e) {
                if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + E.join(", "));
                for (var i, o = 0; i = this.callbacks[t][o]; o++)
                    if (i.callback === e) {
                        this.callbacks[t].splice(o, 1);
                        break
                    }
            },
            one: function(t, e) {
                this.on(t, e, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var t = this.container.watchers.indexOf(this);
                this.container.watchers.splice(t, 1);
                for (var e = 0, i = E.length; e < i; e++) this.callbacks[E[e]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var n = function(i) {
                return function(t, e) {
                    this.on.call(this, i, t, e)
                }
            }, r = 0, h = E.length; r < h; r++) {
            var c = E[r];
            o.prototype[c] = n(c)
        }
        t.exports = o
    }])
});
! function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return e.svg4everybody = t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.svg4everybody = t()
}(this, function() {
    function b(e, t, n) {
        if (n) {
            var i = document.createDocumentFragment(),
                a = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            a && t.setAttribute("viewBox", a);
            for (var r = n.cloneNode(!0); r.childNodes.length;) i.appendChild(r.firstChild);
            e.appendChild(i)
        }
    }

    function h(i) {
        i.onreadystatechange = function() {
            if (4 === i.readyState) {
                var n = i._cachedDocument;
                n || ((n = i._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = i.responseText, i._cachedTarget = {}), i._embeds.splice(0).map(function(e) {
                    var t = i._cachedTarget[e.id];
                    t || (t = i._cachedTarget[e.id] = n.getElementById(e.id)), b(e.parent, e.svg, t)
                })
            }
        }, i.onreadystatechange()
    }

    function p(e) {
        for (var t = e;
            "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
        return t
    }
    return function(e) {
        var s, g = Object(e),
            t = window.top !== window.self;
        s = "polyfill" in g ? g.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && t;
        var l = {},
            f = window.requestAnimationFrame || setTimeout,
            m = document.getElementsByTagName("use"),
            v = 0;
        s && function e() {
            for (var t = 0; t < m.length;) {
                var n = m[t],
                    i = n.parentNode,
                    a = p(i);
                if (a) {
                    var r = n.getAttribute("xlink:href") || n.getAttribute("href");
                    if (!r && g.attributeName && (r = n.getAttribute(g.attributeName)), s)
                        if (!g.validate || g.validate(r, a, n)) {
                            i.removeChild(n);
                            var o = r.split("#"),
                                d = o.shift(),
                                u = o.join("#");
                            if (d.length) {
                                var c = l[d];
                                c || ((c = l[d] = new XMLHttpRequest).open("GET", d), c.send(), c._embeds = []), c._embeds.push({
                                    parent: i,
                                    svg: a,
                                    id: u
                                }), h(c)
                            } else b(i, a, document.getElementById(u))
                        } else ++t, ++v
                } else ++t
            }(!m.length || 0 < m.length - v) && f(e, 67)
        }()
    }
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, l, e, w, x, b, P, g, i, v, O, y, T, f, p, m, s;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(s, _, m) {
            var g = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                v = function(t, e, i) {
                    var s, r, n = t.cycle;
                    for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                    delete t.cycle
                },
                y = function(t, e, i) {
                    m.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = y.prototype.render
                },
                T = 1e-10,
                x = m._internals,
                b = x.isSelector,
                w = x.isArray,
                t = y.prototype = m.to({}, .1, {}),
                P = [];
            y.version = "1.18.0", t.constructor = y, t.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = m.killTweensOf, y.getTweensOf = m.getTweensOf, y.lagSmoothing = m.lagSmoothing, y.ticker = m.ticker, y.render = m.render, t.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), m.prototype.invalidate.call(this)
            }, t.updateTo = function(t, e) {
                var i, s = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && m._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var n = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                } else if (0 < this._time || r) {
                    this._initted = !1, this._init();
                    for (var a, o = 1 / (1 - s), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next
                }
                return this
            }, t.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var s, r, n, a, o, l, h, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    c = this._time,
                    f = this._totalTime,
                    p = this._cycle,
                    d = this._duration,
                    m = this._rawPrevTime;
                if (u <= t ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = d, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === d && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || m < 0 || m === T) && m !== t && (i = !0, T < m && (r = "onReverseComplete")), this._rawPrevTime = _ = !e || t || m === t ? t : T)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === d && 0 < m) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === d && (this._initted || !this.vars.lazy || i) && (0 <= m && (i = !0), this._rawPrevTime = _ = !e || t || m === t ? t : T)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = d + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? this._time = d : this._time < 0 && (this._time = 0)), this._easeType ? (o = this._time / d, (1 === (l = this._easeType) || 3 === l && .5 <= o) && (o = 1 - o), 3 === l && (o *= 2), 1 === (h = this._easePower) ? o *= o : 2 === h ? o *= o * o : 3 === h ? o *= o * o * o : 4 === h && (o *= o * o * o * o), this.ratio = 1 === l ? 1 - o : 2 === l ? o : this._time / d < .5 ? o / 2 : 1 - o / 2) : this.ratio = this._ease.getRatio(this._time / d)), c !== this._time || i || p !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = c, this._totalTime = f, this._rawPrevTime = m, this._cycle = p, x.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / d) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== c && 0 <= t && (this._active = !0), 0 === f && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === d) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== f || s) && this._callback("onUpdate")), this._cycle !== p && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === d && this._rawPrevTime === T && _ !== T && (this._rawPrevTime = 0))
                } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, y.to = function(t, e, i) {
                return new y(t, e, i)
            }, y.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new y(t, e, i)
            }, y.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new y(t, e, s)
            }, y.staggerTo = y.allTo = function(t, e, i, s, r, n, a) {
                s = s || 0;
                var o, l, h, _, u = i.delay || 0,
                    c = [],
                    f = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(a || i.callbackScope || this, n || P)
                    },
                    p = i.cycle,
                    d = i.startAt && i.startAt.cycle;
                for (w(t) || ("string" == typeof t && (t = m.selector(t) || t), b(t) && (t = g(t))), t = t || [], s < 0 && ((t = g(t)).reverse(), s *= -1), o = t.length - 1, h = 0; h <= o; h++) {
                    for (_ in l = {}, i) l[_] = i[_];
                    if (p && v(l, t, h), d) {
                        for (_ in d = l.startAt = {}, i.startAt) d[_] = i.startAt[_];
                        v(l.startAt, t, h)
                    }
                    l.delay = u, h === o && r && (l.onComplete = f), c[h] = new y(t[h], e, l), u += s
                }
                return c
            }, y.staggerFrom = y.allFrom = function(t, e, i, s, r, n, a) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, y.staggerTo(t, e, i, s, r, n, a)
            }, y.staggerFromTo = y.allFromTo = function(t, e, i, s, r, n, a, o) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, y.staggerTo(t, e, s, r, n, a, o)
            }, y.delayedCall = function(t, e, i, s, r) {
                return new y(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, y.set = function(t, e) {
                return new y(t, 0, e)
            }, y.isTweening = function(t) {
                return 0 < m.getTweensOf(t, !0).length
            };
            var n = function(t, e) {
                    for (var i = [], s = 0, r = t._first; r;) r instanceof m ? i[s++] = r : (e && (i[s++] = r), s = (i = i.concat(n(r, e))).length), r = r._next;
                    return i
                },
                u = y.getAllTweens = function(t) {
                    return n(s._rootTimeline, t).concat(n(s._rootFramesTimeline, t))
                };
            y.killAll = function(t, e, i, s) {
                null == e && (e = !0), null == i && (i = !0);
                var r, n, a, o = u(0 != s),
                    l = o.length,
                    h = e && i && s;
                for (a = 0; a < l; a++) n = o[a], (h || n instanceof _ || (r = n.target === n.vars.onComplete) && i || e && !r) && (t ? n.totalTime(n._reversed ? 0 : n.totalDuration()) : n._enabled(!1, !1))
            }, y.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var i, s, r, n, a, o = x.tweenLookup;
                    if ("string" == typeof t && (t = m.selector(t) || t), b(t) && (t = g(t)), w(t))
                        for (n = t.length; - 1 < --n;) y.killChildTweensOf(t[n], e);
                    else {
                        for (r in i = [], o)
                            for (s = o[r].target.parentNode; s;) s === t && (i = i.concat(o[r].tweens)), s = s.parentNode;
                        for (a = i.length, n = 0; n < a; n++) e && i[n].totalTime(i[n].totalDuration()), i[n]._enabled(!1, !1)
                    }
                }
            };
            var r = function(t, e, i, s) {
                e = !1 !== e, i = !1 !== i;
                for (var r, n, a = u(s = !1 !== s), o = e && i && s, l = a.length; - 1 < --l;) n = a[l], (o || n instanceof _ || (r = n.target === n.vars.onComplete) && i || e && !r) && n.paused(t)
            };
            return y.pauseAll = function(t, e, i) {
                r(!0, t, e, i)
            }, y.resumeAll = function(t, e, i) {
                r(!1, t, e, i)
            }, y.globalTimeScale = function(t) {
                var e = s._rootTimeline,
                    i = m.ticker.time;
                return arguments.length ? (t = t || T, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = s._rootFramesTimeline, i = m.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = s._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function(t) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
            }, t.totalProgress = function(t) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
            }, t.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, t.duration = function(t) {
                return arguments.length ? s.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, y
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(_, u, c) {
            var f = function(t) {
                    u.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, i, s = this.vars;
                    for (i in s) e = s[i], m(e) && -1 !== e.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(e));
                    m(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                },
                p = 1e-10,
                t = c._internals,
                e = f._internals = {},
                d = t.isSelector,
                m = t.isArray,
                g = t.lazyTweens,
                v = t.lazyRender,
                a = _gsScope._gsDefine.globals,
                y = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                T = function(t, e, i) {
                    var s, r, n = t.cycle;
                    for (s in n) r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                    delete t.cycle
                },
                n = e.pauseCallback = function() {},
                x = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                i = f.prototype = new u;
            return f.version = "1.18.0", i.constructor = f, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(t, e, i, s) {
                var r = i.repeat && a.TweenMax || c;
                return e ? this.add(new r(t, e, i), s) : this.set(t, i, s)
            }, i.from = function(t, e, i, s) {
                return this.add((i.repeat && a.TweenMax || c).from(t, e, i), s)
            }, i.fromTo = function(t, e, i, s, r) {
                var n = s.repeat && a.TweenMax || c;
                return e ? this.add(n.fromTo(t, e, i, s), r) : this.set(t, s, r)
            }, i.staggerTo = function(t, e, i, s, r, n, a, o) {
                var l, h, _ = new f({
                        onComplete: n,
                        onCompleteParams: a,
                        callbackScope: o,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    u = i.cycle;
                for ("string" == typeof t && (t = c.selector(t) || t), d(t = t || []) && (t = x(t)), (s = s || 0) < 0 && ((t = x(t)).reverse(), s *= -1), h = 0; t.length > h; h++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && T(l.startAt, t, h)), u && T(l, t, h), _.to(t[h], e, l, h * s);
                return this.add(_, r)
            }, i.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, i.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
            }, i.call = function(t, e, i, s) {
                return this.add(c.delayedCall(0, t, e, i), s)
            }, i.set = function(t, e, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new c(t, 0, e), i)
            }, f.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, s, r = new f(t),
                    n = r._timeline;
                for (null == e && (e = !0), n._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = n._time, i = n._first; i;) s = i._next, e && i instanceof c && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay), i = s;
                return n.add(r, 0), r
            }, i.add = function(t, e, i, s) {
                var r, n, a, o, l, h;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof _)) {
                    if (t instanceof Array || t && t.push && m(t)) {
                        for (i = i || "normal", s = s || 0, r = e, n = t.length, a = 0; a < n; a++) m(o = t[a]) && (o = new f({
                            tweens: o
                        })), this.add(o, r), "string" != typeof o && "function" != typeof o && ("sequence" === i ? r = o._startTime + o.totalDuration() / o._timeScale : "start" === i && (o._startTime -= o.delay())), r += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = c.delayedCall(0, t)
                }
                if (u.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (h = (l = this).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(t) {
                if (t instanceof _) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? _._rootFramesTimeline : _._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && m(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, i._remove = function(t, e) {
                u.prototype._remove.call(this, t, e);
                var i = this._last;
                return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, i.insert = i.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, i.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, i.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, i.addPause = function(t, e, i, s) {
                var r = c.delayedCall(0, n, i, s || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, i.removeLabel = function(t) {
                return delete this._labels[t], this
            }, i.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, i._parseTimeOrLabel = function(t, e, i, s) {
                var r;
                if (s instanceof _ && s.timeline === this) this.remove(s);
                else if (s && (s instanceof Array || s.push && m(s)))
                    for (r = s.length; - 1 < --r;) s[r] instanceof _ && s[r].timeline === this && this.remove(s[r]);
                if ("string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                else {
                    if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
                }
                return Number(t) + e
            }, i.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, i.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, i.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, n, a, o, l, h = this._dirty ? this.totalDuration() : this._totalDuration,
                    _ = this._time,
                    u = this._startTime,
                    c = this._timeScale,
                    f = this._paused;
                if (h <= t) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === p) && this._rawPrevTime !== t && this._first && (o = !0, this._rawPrevTime > p && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : p, t = h + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime !== p && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (o = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : p, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (o = !0)
                    } else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (_ <= t)
                            for (s = this._first; s && t >= s._startTime && !l;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (l = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= t && !l;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (l = s), s = s._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== _ && this._first || i || o || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && 0 < t && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= _)
                        for (s = this._first; s && (n = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (l === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                    else
                        for (s = this._last; s && (n = s._prev, !this._paused || f);) {
                            if (s._active || _ >= s._startTime && !s._paused && !s._gc) {
                                if (l === s) {
                                    for (l = s._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = n
                        }
                    this._onUpdate && (e || (g.length && v(), this._callback("onUpdate"))), a && (this._gc || (u === this._startTime || c !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (r && (g.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                }
            }, i._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof f && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, i.getChildren = function(t, e, i, s) {
                s = s || -9999999999;
                for (var r = [], n = this._first, a = 0; n;) s > n._startTime || (n instanceof c ? !1 !== e && (r[a++] = n) : (!1 !== i && (r[a++] = n), !1 !== t && (a = (r = r.concat(n.getChildren(!0, e, i))).length))), n = n._next;
                return r
            }, i.getTweensOf = function(t, e) {
                var i, s, r = this._gc,
                    n = [],
                    a = 0;
                for (r && this._enabled(!0, !0), s = (i = c.getTweensOf(t)).length; - 1 < --s;)(i[s].timeline === this || e && this._contains(i[s])) && (n[a++] = i[s]);
                return r && this._enabled(!1, !0), n
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, i.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, i._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; - 1 < --s;) i[s]._kill(t, e) && (r = !0);
                return r
            }, i.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return _.prototype.invalidate.call(this)
            }, i._enabled = function(t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return u.prototype._enabled.call(this, t, e)
            }, i.totalTime = function() {
                this._forcingPlayhead = !0;
                var t = _.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, t
            }, i.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), s < (i = r._startTime + r._totalDuration / r._timeScale) && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, i.paused = function(t) {
                if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return _.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === _._rootFramesTimeline
            }, i.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, f
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, a, t) {
            var i = function(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                O = 1e-10,
                s = a._internals,
                S = s.lazyTweens,
                k = s.lazyRender,
                o = new t(null, null, 1, 0),
                r = i.prototype = new e;
            return r.constructor = i, r.kill()._gc = !1, i.version = "1.18.0", r.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function(t, e, i, s) {
                return this.add(a.delayedCall(0, t, i, s), e)
            }, r.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); - 1 < --s;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                return this
            }, r.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function(t, e) {
                e = e || {};
                var i, s, r, n = {
                    ease: o,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (s in e) n[s] = e[s];
                return n.time = this._parseTimeOrLabel(t), i = Math.abs(Number(n.time) - this._time) / this._timeScale || .001, r = new a(this, i, n), n.onStart = function() {
                    r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && r._callback("onStart")
                }, r
            }, r.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var s = this.tweenTo(e, i);
                return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
            }, r.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, r, n, a, o, l, h, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    u = this._duration,
                    c = this._time,
                    f = this._totalTime,
                    p = this._startTime,
                    d = this._timeScale,
                    m = this._rawPrevTime,
                    g = this._paused,
                    v = this._cycle;
                if (_ <= t) this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || m < 0 || m === O) && m !== t && this._first && (o = !0, O < m && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : O, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = u) + 1e-4;
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== c || 0 === u && m !== O && (0 < m || t < 0 && 0 <= m) && !this._locked) && (a = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = r = !0, a = "onReverseComplete") : 0 <= m && this._first && (o = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = u || !e || t || this._rawPrevTime === t ? t : O, 0 === t && r)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (r = !1), s = s._next;
                        t = 0, this._initted || (o = !0)
                    } else if (0 === u && m < 0 && (o = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = u - this._time), this._time > u ? t = (this._time = u) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (c <= (t = this._time))
                        for (s = this._first; s && t >= s._startTime && !h;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (h = s), s = s._next;
                    else
                        for (s = this._last; s && s._startTime >= t && !h;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (h = s), s = s._prev;
                    h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== v && !this._locked) {
                    var y = this._yoyo && 0 != (1 & v),
                        T = y === (this._yoyo && 0 != (1 & this._cycle)),
                        x = this._totalTime,
                        b = this._cycle,
                        w = this._rawPrevTime,
                        P = this._time;
                    if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = c, this._rawPrevTime = 0 === u ? m - 1e-4 : m, this._cycle = v, this._locked = !0, c = y ? 0 : u, this.render(c, e, 0 === u), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), T && (c = y ? u + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !g) return;
                    this._time = P, this._totalTime = x, this._cycle = b, this._rawPrevTime = w
                }
                if (this._time !== c && this._first || i || o || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < t && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= c)
                        for (s = this._first; s && (n = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (h === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n;
                    else
                        for (s = this._last; s && (n = s._prev, !this._paused || g);) {
                            if (s._active || c >= s._startTime && !s._paused && !s._gc) {
                                if (h === s) {
                                    for (h = s._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                    h = null, this.pause()
                                }
                                s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                            }
                            s = n
                        }
                    this._onUpdate && (e || (S.length && k(), this._callback("onUpdate"))), a && (this._locked || this._gc || (p === this._startTime || d !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (r && (S.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var s, r, n = [],
                    a = this.getChildren(t, e, i),
                    o = 0,
                    l = a.length;
                for (s = 0; s < l; s++)(r = a[s]).isActive() && (n[o++] = r);
                return n
            }, r.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    s = i.length;
                for (e = 0; e < s; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, r.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (t > e[i].time) return e[i].name;
                return null
            }, r.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, r.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, r.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, r.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), w = 180 / Math.PI, x = [], b = [], P = [], g = {}, i = _gsScope._gsDefine.globals, v = function(t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, O = function(t, e, i, s) {
            var r = {
                    a: t
                },
                n = {},
                a = {},
                o = {
                    c: s
                },
                l = (t + e) / 2,
                h = (e + i) / 2,
                _ = (i + s) / 2,
                u = (l + h) / 2,
                c = (h + _) / 2,
                f = (c - u) / 8;
            return r.b = l + (t - l) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
        }, y = function(t, e, i, s, r) {
            var n, a, o, l, h, _, u, c, f, p, d, m, g, v = t.length - 1,
                y = 0,
                T = t[0].a;
            for (n = 0; n < v; n++) a = (h = t[y]).a, o = h.d, l = t[y + 1].d, r ? (d = x[n], g = .25 * ((m = b[n]) + d) * e / (s ? .5 : P[n] || .5), c = o - ((_ = o - (o - a) * (s ? .5 * e : 0 !== d ? g / d : 0)) + (((u = o + (l - o) * (s ? .5 * e : 0 !== m ? g / m : 0)) - _) * (3 * d / (d + m) + .5) / 4 || 0))) : c = o - ((_ = o - .5 * (o - a) * e) + (u = o + .5 * (l - o) * e)) / 2, _ += c, u += c, h.c = f = _, h.b = 0 !== n ? T : T = h.a + .6 * (h.c - h.a), h.da = o - a, h.ca = f - a, h.ba = T - a, i ? (p = O(a, T, f, o), t.splice(y, 1, p[0], p[1], p[2], p[3]), y += 4) : y++, T = u;
            (h = t[y]).b = T, h.c = T + .4 * (h.d - T), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = T - h.a, i && (p = O(h.a, T, h.c, h.d), t.splice(y, 1, p[0], p[1], p[2], p[3]))
        }, T = function(t, e, i, s) {
            var r, n, a, o, l, h, _ = [];
            if (s)
                for (n = (t = [s].concat(t)).length; - 1 < --n;) "string" == typeof(h = t[n][e]) && "=" === h.charAt(1) && (t[n][e] = s[e] + Number(h.charAt(0) + h.substr(2)));
            if ((r = t.length - 2) < 0) return _[0] = new v(t[0][e], 0, 0, t[r < -1 ? 0 : 1][e]), _;
            for (n = 0; n < r; n++) a = t[n][e], o = t[n + 1][e], _[n] = new v(a, 0, 0, o), i && (l = t[n + 2][e], x[n] = (x[n] || 0) + (o - a) * (o - a), b[n] = (b[n] || 0) + (l - o) * (l - o));
            return _[n] = new v(t[n][e], 0, 0, t[n + 1][e]), _
        }, f = function(t, e, i, s, r, n) {
            var a, o, l, h, _, u, c, f, p = {},
                d = [],
                m = n || t[0];
            for (o in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) d.push(o);
            if (1 < t.length) {
                for (f = t[t.length - 1], c = !0, a = d.length; - 1 < --a;)
                    if (o = d[a], .05 < Math.abs(m[o] - f[o])) {
                        c = !1;
                        break
                    }
                c && (t = t.concat(), n && t.unshift(n), t.push(t[1]), n = t[t.length - 3])
            }
            for (x.length = b.length = P.length = 0, a = d.length; - 1 < --a;) o = d[a], g[o] = -1 !== r.indexOf("," + o + ","), p[o] = T(t, o, g[o], n);
            for (a = x.length; - 1 < --a;) x[a] = Math.sqrt(x[a]), b[a] = Math.sqrt(b[a]);
            if (!s) {
                for (a = d.length; - 1 < --a;)
                    if (g[o])
                        for (u = (l = p[d[a]]).length - 1, h = 0; h < u; h++) _ = l[h + 1].da / b[h] + l[h].da / x[h], P[h] = (P[h] || 0) + _ * _;
                for (a = P.length; - 1 < --a;) P[a] = Math.sqrt(P[a])
            }
            for (a = d.length, h = i ? 4 : 1; - 1 < --a;) l = p[o = d[a]], y(l, e, i, s, g[o]), c && (l.splice(0, h), l.splice(l.length - h, h));
            return p
        }, p = function(t, e, i) {
            for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, d = t.length; - 1 < --d;)
                for (n = (c = t[d]).a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; _ <= i; _++) s = r - (r = ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h), e[f = d * i + _ - 1] = (e[f] || 0) + s * s
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, l = e.values || [],
                    h = {},
                    _ = l[0],
                    u = e.autoRotate || i.vars.orientToBezier;
                for (s in this._autoRotate = u ? u instanceof Array ? u : [
                        ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
                    ] : null, _) this._props.push(s);
                for (n = this._props.length; - 1 < --n;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
                        var s, r, n, a, o, l, h, _, u, c, f, p = {},
                            d = "cubic" === (e = e || "soft") ? 3 : 2,
                            m = "soft" === e,
                            g = [];
                        if (m && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (u in t[0]) g.push(u);
                        for (l = g.length; - 1 < --l;) {
                            for (p[u = g[l]] = o = [], c = 0, _ = t.length, h = 0; h < _; h++) s = null == i ? t[h][u] : "string" == typeof(f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), m && 1 < h && h < _ - 1 && (o[c++] = (s + o[c - 2]) / 2), o[c++] = s;
                            for (_ = c - d + 1, h = c = 0; h < _; h += d) s = o[h], r = o[h + 1], n = o[h + 2], a = 2 === d ? 0 : o[h + 3], o[c++] = f = 3 === d ? new v(s, r, n, a) : new v(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            o.length = c
                        }
                        return p
                    }(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                    var c = function(t, e) {
                        var i, s, r, n, a = [],
                            o = [],
                            l = 0,
                            h = 0,
                            _ = (e = e >> 0 || 6) - 1,
                            u = [],
                            c = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; s < r; s++) l += Math.sqrt(a[s]), c[n = s % e] = l, n === _ && (h += l, u[n = s / e >> 0] = c, o[n] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: u
                        }
                    }(this._beziers, this._timeRes);
                    this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (u = this._autoRotate)
                    for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), n = u.length; - 1 < --n;) {
                        for (a = 0; a < 3; a++) s = u[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                        s = u[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, s, r, n, a, o, l, h, _, u = this._segCount,
                    c = this._func,
                    f = this._target,
                    p = t !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths, _ = this._curSeg, t *= this._length, s = this._li, t > this._l2 && s < u - 1) {
                        for (l = u - 1; s < l && t >= (this._l2 = h[++s]););
                        this._l1 = h[s - 1], this._li = s, this._curSeg = _ = this._segments[s], this._s2 = _[this._s1 = this._si = 0]
                    } else if (this._l1 > t && 0 < s) {
                        for (; 0 < s && (this._l1 = h[--s]) >= t;);
                        0 === s && this._l1 > t ? this._l1 = 0 : s++, this._l2 = h[s], this._li = s, this._curSeg = _ = this._segments[s], this._s1 = _[(this._si = _.length - 1) - 1] || 0, this._s2 = _[this._si]
                    }
                    if (e = s, t -= this._l1, s = this._si, t > this._s2 && _.length - 1 > s) {
                        for (l = _.length - 1; s < l && t >= (this._s2 = _[++s]););
                        this._s1 = _[s - 1], this._si = s
                    } else if (this._s1 > t && 0 < s) {
                        for (; 0 < s && (this._s1 = _[--s]) >= t;);
                        0 === s && this._s1 > t ? this._s1 = 0 : s++, this._s2 = _[s], this._si = s
                    }
                    a = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                } else a = (t - (e = t < 0 ? 0 : 1 <= t ? u - 1 : u * t >> 0) * (1 / u)) * u;
                for (i = 1 - a, s = this._props.length; - 1 < --s;) r = this._props[s], o = (a * a * (n = this._beziers[r][e]).da + 3 * i * (a * n.ca + i * n.ba)) * a + n.a, this._round[r] && (o = Math.round(o)), c[r] ? f[r](o) : f[r] = o;
                if (this._autoRotate) {
                    var d, m, g, v, y, T, x, b = this._autoRotate;
                    for (s = b.length; - 1 < --s;) r = b[s][2], T = b[s][3] || 0, x = !0 === b[s][4] ? 1 : w, n = this._beziers[b[s][0]], d = this._beziers[b[s][1]], n && d && (n = n[e], d = d[e], m = n.a + (n.b - n.a) * a, m += ((v = n.b + (n.c - n.b) * a) - m) * a, v += (n.c + (n.d - n.c) * a - v) * a, g = d.a + (d.b - d.a) * a, g += ((y = d.b + (d.c - d.b) * a) - g) * a, y += (d.c + (d.d - d.c) * a - y) * a, o = p ? Math.atan2(y - g, v - m) * x + T : this._initialRotations[s], c[r] ? f[r](o) : f[r] = o)
                }
            }
        }), s = m.prototype, m.bezierThrough = f, m.cubicToQuadratic = O, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new v(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    f = e._parseToProxy,
                    p = e._setPluginRatio,
                    d = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, i, s, r, n) {
                        e instanceof Array && (e = {
                            values: e
                        }), n = new m;
                        var a, o, l, h = e.values,
                            _ = h.length - 1,
                            u = [],
                            c = {};
                        if (_ < 0) return r;
                        for (a = 0; a <= _; a++) l = f(t, h[a], s, r, n, _ !== a), u[a] = l.end;
                        for (o in e) c[o] = e[o];
                        return c.values = u, (r = new d(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = n, r.setRatio = p, 0 === c.autoRotate && (c.autoRotate = !0), !c.autoRotate || c.autoRotate instanceof Array || (a = !0 === c.autoRotate ? 0 : Number(c.autoRotate), c.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", a, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", a, !1]
                        ]), c.autoRotate && (s._transform || s._enableTransforms(!1), l.autoRotate = s._target._gsTransform), n._onInitTween(l.proxy, c, s._tween), r
                    }
                })
            }
        }, s._roundProps = function(t, e) {
            for (var i = this._overwriteProps, s = i.length; - 1 < --s;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, s._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = s.length; - 1 < --i;) s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, Y) {
            var p, w, B, f, j = function() {
                    n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = j.prototype.setRatio
                },
                h = _gsScope._gsDefine.globals,
                d = {},
                t = j.prototype = new n("css");
            (t.constructor = j).version = "1.18.0", j.API = 2, j.defaultTransformPerspective = 0, j.defaultSkewType = "compensated", j.defaultSmoothOrigin = !0, t = "px", j.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var k, m, g, L, v, O, e, i, R = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                A = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                S = /(?:\d|\-|\+|=|#|\.)*/g,
                C = /opacity *= *([^)]*)/i,
                T = /opacity:([^;]*)/i,
                a = /alpha\(opacity *=.+?\)/i,
                x = /^(rgb|hsl)/,
                o = /([A-Z])/g,
                l = /-([a-z])/gi,
                b = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                u = function(t, e) {
                    return e.toUpperCase()
                },
                c = /(?:Left|Right|Width)/i,
                P = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                E = Math.PI / 180,
                U = 180 / Math.PI,
                z = {},
                F = document,
                s = function(t) {
                    return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t)
                },
                I = s("div"),
                X = s("img"),
                r = j._internals = {
                    _specialProps: d
                },
                N = navigator.userAgent,
                V = (e = N.indexOf("Android"), i = s("a"), g = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === e || 3 < Number(N.substr(e + 8, 1))), v = g && Number(N.substr(N.indexOf("Version/") + 8, 1)) < 6, L = -1 !== N.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(N)) && (O = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                q = function(t) {
                    return C.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                W = function(t) {
                    window.console && console.log(t)
                },
                Z = "",
                G = "",
                $ = function(t, e) {
                    var i, s, r = (e = e || I).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === r[i[s] + t];);
                    return 0 <= s ? (Z = "-" + (G = 3 === s ? "ms" : i[s]).toLowerCase() + "-", G + t) : null
                },
                Q = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                H = j.getStyle = function(t, e, i, s, r) {
                    var n;
                    return V || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Q(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(o, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : q(t)
                },
                K = r.convertToPixels = function(t, e, i, s, r) {
                    if ("px" === s || !s) return i;
                    if ("auto" === s || !i) return 0;
                    var n, a, o, l = c.test(e),
                        h = t,
                        _ = I.style,
                        u = i < 0;
                    if (u && (i = -i), "%" === s && -1 !== e.indexOf("border")) n = i / 100 * (l ? t.clientWidth : t.clientHeight);
                    else {
                        if (_.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;", "%" !== s && h.appendChild && "v" !== s.charAt(0) && "rem" !== s) _[l ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                        else {
                            if (a = (h = t.parentNode || F.body)._gsCache, o = Y.ticker.frame, a && l && a.time === o) return a.width * i / 100;
                            _[l ? "width" : "height"] = i + s
                        }
                        h.appendChild(I), n = parseFloat(I[l ? "offsetWidth" : "offsetHeight"]), h.removeChild(I), l && "%" === s && !1 !== j.cacheWidths && ((a = h._gsCache = h._gsCache || {}).time = o, a.width = n / i * 100), 0 !== n || r || (n = K(t, e, i, s, !0))
                    }
                    return u ? -n : n
                },
                J = r.calculateOffset = function(t, e, i) {
                    if ("absolute" !== H(t, "position", i)) return 0;
                    var s = "left" === e ? "Left" : "Top",
                        r = H(t, "margin" + s, i);
                    return t["offset" + s] - (K(t, e, parseFloat(r), r.replace(S, "")) || 0)
                },
                tt = function(t, e) {
                    var i, s, r, n = {};
                    if (e = e || Q(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;)(-1 === (r = e[i]).indexOf("-transform") || Dt === r) && (n[r.replace(l, u)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Ct === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(l, u)] = e[i]);
                    return V || (n.opacity = q(t)), s = Ut(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, zt && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                },
                et = function(t, e, i, s, r) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(_, "") ? n : 0 : J(t, a), void 0 !== h[a] && (o = new mt(h, a, h[a], o)));
                    if (s)
                        for (a in s) "className" !== a && (l[a] = s[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                it = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                rt = function(t, e, i) {
                    var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = it[e],
                        n = r.length;
                    for (i = i || Q(t, null); - 1 < --n;) s -= parseFloat(H(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(H(t, "border" + r[n] + "Width", i, !0)) || 0;
                    return s
                },
                nt = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i = t.split(" "),
                        s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (2 < i.length ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                },
                at = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                ot = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                lt = function(t, e, i, s) {
                    var r, n, a, o, l;
                    return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : U) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && ((a %= r) !== a % 180 && (a = a < 0 ? a + r : a - r)), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 3599999999640) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && 0 < a && (a = (a - 3599999999640) % r - (0 | a / r) * r)), o = e + a), o < 1e-6 && -1e-6 < o && (o = 0), o
                },
                ht = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                _t = function(t, e, i) {
                    return 0 | 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + 6 * (i - e) * t : t < .5 ? i : 3 * t < 2 ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                ut = j.parseColor = function(t, e) {
                    var i, s, r, n, a, o, l, h, _, u, c;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ht[t]) i = ht[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (r = t.charAt(2)) + r + (n = t.charAt(3)) + n), i = [(t = parseInt(t.substr(1), 16)) >> 16, 255 & t >> 8, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = c = t.match(R), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(A)
                                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, s = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (o + 1) : l + o - l * o), 3 < i.length && (i[3] = Number(t[3])), i[0] = _t(a + 1 / 3, s, r), i[1] = _t(a, s, r), i[2] = _t(a - 1 / 3, s, r);
                            else i = t.match(R) || ht.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        } else i = ht.black;
                    return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, l = ((h = Math.max(s, r, n)) + (_ = Math.min(s, r, n))) / 2, h === _ ? a = o = 0 : (u = h - _, o = .5 < l ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (r < n ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
                },
                ct = function(t, e) {
                    var i, s, r, n = t.match(ft) || [],
                        a = 0,
                        o = n.length ? "" : t;
                    for (i = 0; n.length > i; i++) s = n[i], a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length, 3 === (s = ut(s, e)).length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return o
                },
                ft = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (t in ht) ft += "|" + t + "\\b";
            ft = RegExp(ft + ")", "gi"), j.colorStringFilter = function(t) {
                var e, i = t[0] + t[1];
                ft.lastIndex = 0, ft.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e))
            }, Y.defaultStringFilter || (Y.defaultStringFilter = j.colorStringFilter);
            var pt = function(t, e, n, a) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var o, l = e ? (t.match(ft) || [""])[0] : "",
                        h = t.split(l).join("").match(y) || [],
                        _ = t.substr(0, t.indexOf(h[0])),
                        u = ")" === t.charAt(t.length - 1) ? ")" : "",
                        c = -1 !== t.indexOf(" ") ? " " : ",",
                        f = h.length,
                        p = 0 < f ? h[0].replace(R, "") : "";
                    return f ? o = e ? function(t) {
                        var e, i, s, r;
                        if ("number" == typeof t) t += p;
                        else if (a && M.test(t)) {
                            for (r = t.replace(M, "|").split("|"), s = 0; r.length > s; s++) r[s] = o(r[s]);
                            return r.join(",")
                        }
                        if (e = (t.match(ft) || [l])[0], s = (i = t.split(e).join("").match(y) || []).length, f > s--)
                            for (; f > ++s;) i[s] = n ? i[0 | (s - 1) / 2] : h[s];
                        return _ + i.join(c) + c + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, i, s;
                        if ("number" == typeof t) t += p;
                        else if (a && M.test(t)) {
                            for (i = t.replace(M, "|").split("|"), s = 0; i.length > s; s++) i[s] = o(i[s]);
                            return i.join(",")
                        }
                        if (s = (e = t.match(y) || []).length, f > s--)
                            for (; f > ++s;) e[s] = n ? e[0 | (s - 1) / 2] : h[s];
                        return _ + e.join(c) + u
                    } : function(t) {
                        return t
                    }
                },
                dt = function(h) {
                    return h = h.split(","),
                        function(t, e, i, s, r, n, a) {
                            var o, l = (e + "").split(" ");
                            for (a = {}, o = 0; o < 4; o++) a[h[o]] = l[o] = l[o] || l[(o - 1) / 2 >> 0];
                            return s.parse(t, a, r, n)
                        }
                },
                mt = (r._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT; o;) e = a[o.v], o.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), o.t[o.p] = e, o = o._next;
                    if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = n.firstMPT; o;) {
                            if ((i = o.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, s, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, s && ((s._prev = this)._next = s)
                }),
                gt = (r._parseToProxy = function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u = s,
                        c = {},
                        f = {},
                        p = i._transform,
                        d = z;
                    for (i._transform = null, z = e, s = _ = i.parse(t, e, s, r), z = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                        if (s.type <= 1 && (f[o = s.p] = s.s + s.c, c[o] = s.s, n || (h = new mt(s, "s", o, h, s.r), s.c = 0), 1 === s.type))
                            for (a = s.l; 0 < --a;) l = "xn" + a, f[o = s.p + "_" + l] = s.data[l], c[o] = s[l], n || (h = new mt(s, l, o, h, s.rxp[l]));
                        s = s._next
                    }
                    return {
                        proxy: c,
                        end: f,
                        firstMPT: h,
                        pt: _
                    }
                }, r.CSSPropTween = function(t, e, i, s, r, n, a, o, l, h, _) {
                    this.t = t, this.p = e, this.s = i, this.c = s, this.n = a || e, t instanceof gt || f.push(this.n), this.r = o, this.type = n || 0, l && (this.pr = l, p = !0), this.b = void 0 === h ? i : h, this.e = void 0 === _ ? i + s : _, r && ((this._next = r)._prev = this)
                }),
                vt = function(t, e, i, s, r, n) {
                    var a = new gt(t, e, i, s - i, r, -1, n);
                    return a.b = i, a.e = a.xs0 = s, a
                },
                yt = j.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
                    a = new gt(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i = i || n || "", s), s += "";
                    var _, u, c, f, p, d, m, g, v, y, T, x, b, w = i.split(", ").join(",").split(" "),
                        P = s.split(", ").join(",").split(" "),
                        O = w.length,
                        S = !1 !== k;
                    for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (w = w.join(" ").replace(M, ", ").split(" "), P = P.join(" ").replace(M, ", ").split(" "), O = w.length), O !== P.length && (O = (w = (n || "").split(" ")).length), a.plugin = l, a.setRatio = h, _ = ft.lastIndex = 0; _ < O; _++)
                        if (f = w[_], p = P[_], (g = parseFloat(f)) || 0 === g) a.appendXtra("", g, at(p, g), p.replace(A, ""), S && -1 !== p.indexOf("px"), !0);
                        else if (r && ft.test(f)) x = "," === p.charAt(p.length - 1) ? ")," : ")", b = -1 !== p.indexOf("hsl") && V, f = ut(f, b), p = ut(p, b), (v = 6 < f.length + p.length) && !V && 0 === p[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(P[_]).join("transparent")) : (V || (v = !1), b ? a.appendXtra(v ? "hsla(" : "hsl(", f[0], at(p[0], f[0]), ",", !1, !0).appendXtra("", f[1], at(p[1], f[1]), "%,", !1).appendXtra("", f[2], at(p[2], f[2]), v ? "%," : "%" + x, !1) : a.appendXtra(v ? "rgba(" : "rgb(", f[0], p[0] - f[0], ",", !0, !0).appendXtra("", f[1], p[1] - f[1], ",", !0).appendXtra("", f[2], p[2] - f[2], v ? "," : x, !0), v && (f = f.length < 4 ? 1 : f[3], a.appendXtra("", f, (p.length < 4 ? 1 : p[3]) - f, x, !1))), ft.lastIndex = 0;
                    else if (d = f.match(R)) {
                        if (!(m = p.match(A)) || m.length !== d.length) return a;
                        for (u = c = 0; d.length > u; u++) T = d[u], y = f.indexOf(T, c), a.appendXtra(f.substr(c, y - c), Number(T), at(m[u], T), "", S && "px" === f.substr(y + T.length, 2), 0 === u), c = y + T.length;
                        a["xs" + a.l] += f.substr(c)
                    } else a["xs" + a.l] += a.l ? " " + f : f;
                    if (-1 !== s.indexOf("=") && a.data) {
                        for (x = a.xs0 + a.data.s, _ = 1; a.l > _; _++) x += a["xs" + _] + a.data["xn" + _];
                        a.e = x + a["xs" + _]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                Tt = 9;
            for ((t = gt.prototype).l = t.pr = 0; 0 < --Tt;) t["xn" + Tt] = 0, t["xs" + Tt] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, s, r, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", 0 < o ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new gt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0)) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = r)) : a["xs" + o] += e + (s || ""), a
            };
            var xt = function(t, e) {
                    e = e || {}, this.p = e.prefix && $(t) || t, d[t] = d[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                bt = r._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var s, r = t.split(","),
                        n = e.defaultValue;
                    for (i = i || [n], s = 0; r.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new xt(r[s], e)
                },
                wt = function(t) {
                    if (!d[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        bt(t, {
                            parser: function(t, e, i, s, r, n, a) {
                                var o = h.com.greensock.plugins[l];
                                return o ? (o._cssRegister(), d[i].parse(t, e, i, s, r, n, a)) : (W("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = xt.prototype).parseComplex = function(t, e, i, s, r, n) {
                var a, o, l, h, _, u, c = this.keyword;
                if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && ((_ = e.indexOf(c)) !== (u = i.indexOf(c)) && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                    e = o.join(", "), i = l.join(", ")
                }
                return yt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
            }, t.parse = function(t, e, i, s, r, n) {
                return this.parseComplex(t.style, this.format(H(t, this.p, B, !1, this.dflt)), this.format(e), r, n)
            }, j.registerSpecialProp = function(t, o, l) {
                bt(t, {
                    parser: function(t, e, i, s, r, n) {
                        var a = new gt(t, i, 0, 0, r, 2, i, !1, l);
                        return a.plugin = n, a.setRatio = o(t, e, s._tween, i), a
                    },
                    priority: l
                })
            }, j.useSVGTransformAttr = g || L;
            var Pt, Ot, St, kt, Rt, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ct = $("transform"),
                Dt = Z + "transform",
                Mt = $("transformOrigin"),
                zt = null !== $("perspective"),
                Ft = r.Transform = function() {
                    this.perspective = parseFloat(j.defaultTransformPerspective) || 0, this.force3D = !(!1 === j.defaultForce3D || !zt) && (j.defaultForce3D || "auto")
                },
                It = window.SVGElement,
                Xt = function(t, e, i) {
                    var s, r = F.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
                    return e.appendChild(r), r
                },
                Nt = F.documentElement,
                Lt = (Rt = O || /Android/i.test(N) && !window.chrome, F.createElementNS && !Rt && (Ot = Xt("svg", Nt), kt = (St = Xt("rect", Ot, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, St.style[Mt] = "50% 50%", St.style[Ct] = "scaleX(0.5)", Rt = kt === St.getBoundingClientRect().width && !(L && zt), Nt.removeChild(Ot)), Rt),
                Et = function(t, e, i, s, r) {
                    var n, a, o, l, h, _, u, c, f, p, d, m, g, v, y = t._gsTransform,
                        T = jt(t, !0);
                    y && (g = y.xOrigin, v = y.yOrigin), (!s || (n = s.split(" ")).length < 2) && (u = t.getBBox(), n = [(-1 !== (e = nt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * u.width : parseFloat(e[0])) + u.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * u.height : parseFloat(e[1])) + u.y]), i.xOrigin = l = parseFloat(n[0]), i.yOrigin = h = parseFloat(n[1]), s && T !== Bt && (_ = T[0], u = T[1], c = T[2], f = T[3], p = T[4], a = l * (f / (m = _ * f - u * c)) + h * (-c / m) + (c * (d = T[5]) - f * p) / m, o = l * (-u / m) + h * (_ / m) - (_ * d - u * p) / m, l = i.xOrigin = n[0] = a, h = i.yOrigin = n[1] = o), y && (r || !1 !== r && !1 !== j.defaultSmoothOrigin ? (a = l - g, o = h - v, y.xOffset += a * T[0] + o * T[2] - a, y.yOffset += a * T[1] + o * T[3] - o) : y.xOffset = y.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                },
                Yt = function(t) {
                    return !!(It && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                Bt = [1, 0, 0, 1, 0, 0],
                jt = function(t, e) {
                    var i, s, r, n, a, o = t._gsTransform || new Ft;
                    if (Ct ? s = H(t, Dt, null, !0) : t.currentStyle && (s = (s = t.currentStyle.filter.match(P)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Yt(t)) && (i && -1 !== (t.style[Ct] + "").indexOf("matrix") && (s = t.style[Ct], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Bt;
                    for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], Tt = r.length; - 1 < --Tt;) n = Number(r[Tt]), r[Tt] = (a = n - (n |= 0)) ? (0 | 1e5 * a + (a < 0 ? -.5 : .5)) / 1e5 + n : n;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Ut = r.getTransform = function(t, e, i, s) {
                    if (t._gsTransform && i && !s) return t._gsTransform;
                    var r, n, a, o, l, h, _ = i && t._gsTransform || new Ft,
                        u = _.scaleX < 0,
                        c = zt && (parseFloat(H(t, Mt, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin) || 0,
                        f = parseFloat(j.defaultTransformPerspective) || 0;
                    if (_.svg = !(!t.getBBox || !Yt(t)), _.svg && (Et(t, H(t, Mt, B, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")), Pt = j.useSVGTransformAttr || Lt), (r = jt(t)) !== Bt) {
                        if (16 === r.length) {
                            var p, d, m, g, v, y = r[0],
                                T = r[1],
                                x = r[2],
                                b = r[3],
                                w = r[4],
                                P = r[5],
                                O = r[6],
                                S = r[7],
                                k = r[8],
                                R = r[9],
                                A = r[10],
                                C = r[12],
                                D = r[13],
                                M = r[14],
                                z = r[11],
                                F = Math.atan2(O, A);
                            _.zOrigin && (C = k * (M = -_.zOrigin) - r[12], D = R * M - r[13], M = A * M + _.zOrigin - r[14]), _.rotationX = F * U, F && (p = w * (g = Math.cos(-F)) + k * (v = Math.sin(-F)), d = P * g + R * v, m = O * g + A * v, k = w * -v + k * g, R = P * -v + R * g, A = O * -v + A * g, z = S * -v + z * g, w = p, P = d, O = m), F = Math.atan2(k, A), _.rotationY = F * U, F && (d = T * (g = Math.cos(-F)) - R * (v = Math.sin(-F)), m = x * g - A * v, R = T * v + R * g, A = x * v + A * g, z = b * v + z * g, y = p = y * g - k * v, T = d, x = m), F = Math.atan2(T, y), _.rotation = F * U, F && (y = y * (g = Math.cos(-F)) + w * (v = Math.sin(-F)), d = T * g + P * v, P = T * -v + P * g, O = x * -v + O * g, T = d), _.rotationX && 359.9 < Math.abs(_.rotationX) + Math.abs(_.rotation) && (_.rotationX = _.rotation = 0, _.rotationY += 180), _.scaleX = (0 | 1e5 * Math.sqrt(y * y + T * T) + .5) / 1e5, _.scaleY = (0 | 1e5 * Math.sqrt(P * P + R * R) + .5) / 1e5, _.scaleZ = (0 | 1e5 * Math.sqrt(O * O + A * A) + .5) / 1e5, _.skewX = 0, _.perspective = z ? 1 / (z < 0 ? -z : z) : 0, _.x = C, _.y = D, _.z = M, _.svg && (_.x -= _.xOrigin - (_.xOrigin * y - _.yOrigin * w), _.y -= _.yOrigin - (_.yOrigin * T - _.xOrigin * P))
                        } else if (!(zt && !s && r.length && _.x === r[4] && _.y === r[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === H(t, "display", e))) {
                            var I = 6 <= r.length,
                                X = I ? r[0] : 1,
                                N = r[1] || 0,
                                L = r[2] || 0,
                                E = I ? r[3] : 1;
                            _.x = r[4] || 0, _.y = r[5] || 0, a = Math.sqrt(X * X + N * N), o = Math.sqrt(E * E + L * L), l = X || N ? Math.atan2(N, X) * U : _.rotation || 0, h = L || E ? Math.atan2(L, E) * U + l : _.skewX || 0, 90 < Math.abs(h) && Math.abs(h) < 270 && (u ? (a *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, h += h <= 0 ? 180 : -180)), _.scaleX = a, _.scaleY = o, _.rotation = l, _.skewX = h, zt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = f, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * X + _.yOrigin * L), _.y -= _.yOrigin - (_.xOrigin * N + _.yOrigin * E))
                        }
                        for (n in _.zOrigin = c, _) _[n] < 2e-5 && -2e-5 < _[n] && (_[n] = 0)
                    }
                    return i && ((t._gsTransform = _).svg && (Pt && t.style[Ct] ? Y.delayedCall(.001, function() {
                        Zt(t.style, Ct)
                    }) : !Pt && t.getAttribute("transform") && Y.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), _
                },
                Vt = function(t) {
                    var e, i, s = this.data,
                        r = -s.rotation * E,
                        n = r + s.skewX * E,
                        a = 1e5,
                        o = (0 | Math.cos(r) * s.scaleX * a) / a,
                        l = (0 | Math.sin(r) * s.scaleX * a) / a,
                        h = (0 | Math.sin(n) * -s.scaleY * a) / a,
                        _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                        u = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -h, h = -i, e = c.filter, u.filter = "";
                        var f, p, d = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            g = "absolute" !== c.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                            y = s.x + d * s.xPercent / 100,
                            T = s.y + m * s.yPercent / 100;
                        if (null != s.ox && (y += (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2) - (f * o + (p = (s.oyp ? .01 * m * s.oy : s.oy) - m / 2) * l), T += p - (f * h + p * _)), g ? v += ", Dx=" + ((f = d / 2) - (f * o + (p = m / 2) * l) + y) + ", Dy=" + (p - (f * h + p * _) + T) + ")" : v += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, v) : v + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (g && -1 === v.indexOf("Dx=0, Dy=0") || C.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) {
                            var x, b, w, P = O < 8 ? 1 : -1;
                            for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (l < 0 ? -l : l) * m)) / 2 + y), s.ieOffsetY = Math.round((m - ((_ < 0 ? -_ : _) * m + (h < 0 ? -h : h) * d)) / 2 + T), Tt = 0; Tt < 4; Tt++) w = (i = -1 !== (x = c[b = st[Tt]]).indexOf("px") ? parseFloat(x) : K(this.t, b, parseFloat(x), x.replace(S, "")) || 0) !== s[b] ? Tt < 2 ? -s.ieOffsetX : -s.ieOffsetY : Tt < 2 ? f - s.ieOffsetX : p - s.ieOffsetY, u[b] = (s[b] = Math.round(i - w * (0 === Tt || 2 === Tt ? 1 : P))) + "px"
                        }
                    }
                },
                qt = r.set3DTransformRatio = r.setTransformRatio = function(t) {
                    var e, i, s, r, n, a, o, l, h, _, u, c, f, p, d, m, g, v, y, T, x, b, w, P = this.data,
                        O = this.t.style,
                        S = P.rotation,
                        k = P.rotationX,
                        R = P.rotationY,
                        A = P.scaleX,
                        C = P.scaleY,
                        D = P.scaleZ,
                        M = P.x,
                        z = P.y,
                        F = P.z,
                        I = P.svg,
                        X = P.perspective,
                        N = P.force3D;
                    if (!((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || F || X || R || k) || Pt && I || !zt) S || P.skewX || I ? (S *= E, b = P.skewX * E, w = 1e5, e = Math.cos(S) * A, r = Math.sin(S) * A, i = Math.sin(S - b) * -C, n = Math.cos(S - b) * C, b && "simple" === P.skewType && (g = Math.tan(b), i *= g = Math.sqrt(1 + g * g), n *= g, P.skewY && (e *= g, r *= g)), I && (M += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, z += P.yOrigin - (P.xOrigin * r + P.yOrigin * n) + P.yOffset, Pt && (P.xPercent || P.yPercent) && (p = this.t.getBBox(), M += .01 * P.xPercent * p.width, z += .01 * P.yPercent * p.height), M < (p = 1e-6) && -p < M && (M = 0), z < p && -p < z && (z = 0)), y = (0 | e * w) / w + "," + (0 | r * w) / w + "," + (0 | i * w) / w + "," + (0 | n * w) / w + "," + M + "," + z + ")", I && Pt ? this.t.setAttribute("transform", "matrix(" + y) : O[Ct] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + y) : O[Ct] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + C + "," + M + "," + z + ")";
                    else {
                        if (L && (A < (p = 1e-4) && -p < A && (A = D = 2e-5), C < p && -p < C && (C = D = 2e-5), !X || P.z || P.rotationX || P.rotationY || (X = 0)), S || P.skewX) S *= E, d = e = Math.cos(S), m = r = Math.sin(S), P.skewX && (S -= P.skewX * E, d = Math.cos(S), m = Math.sin(S), "simple" === P.skewType && (g = Math.tan(P.skewX * E), d *= g = Math.sqrt(1 + g * g), m *= g, P.skewY && (e *= g, r *= g))), i = -m, n = d;
                        else {
                            if (!(R || k || 1 !== D || X || I)) return void(O[Ct] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + z + "px," + F + "px)" + (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""));
                            e = n = 1, i = r = 0
                        }
                        h = 1, s = a = o = l = _ = u = 0, c = X ? -1 / X : 0, f = P.zOrigin, p = 1e-6, T = ",", x = "0", (S = R * E) && (d = Math.cos(S), _ = c * (o = -(m = Math.sin(S))), s = e * m, a = r * m, c *= h = d, e *= d, r *= d), (S = k * E) && (g = i * (d = Math.cos(S)) + s * (m = Math.sin(S)), v = n * d + a * m, l = h * m, u = c * m, s = i * -m + s * d, a = n * -m + a * d, h *= d, c *= d, i = g, n = v), 1 !== D && (s *= D, a *= D, h *= D, c *= D), 1 !== C && (i *= C, n *= C, l *= C, u *= C), 1 !== A && (e *= A, r *= A, o *= A, _ *= A), (f || I) && (f && (M += s * -f, z += a * -f, F += h * -f + f), I && (M += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, z += P.yOrigin - (P.xOrigin * r + P.yOrigin * n) + P.yOffset), M < p && -p < M && (M = x), z < p && -p < z && (z = x), F < p && -p < F && (F = 0)), y = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", y += (e < p && -p < e ? x : e) + T + (r < p && -p < r ? x : r) + T + (o < p && -p < o ? x : o), y += T + (_ < p && -p < _ ? x : _) + T + (i < p && -p < i ? x : i) + T + (n < p && -p < n ? x : n), k || R ? (y += T + (l < p && -p < l ? x : l) + T + (u < p && -p < u ? x : u) + T + (s < p && -p < s ? x : s), y += T + (a < p && -p < a ? x : a) + T + (h < p && -p < h ? x : h) + T + (c < p && -p < c ? x : c) + T) : y += ",0,0,0,0,1,0,", y += M + T + z + T + F + T + (X ? 1 + -F / X : 1) + ")", O[Ct] = y
                    }
                };
            (t = Ft.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, s, r, n, a) {
                    if (s._lastParsedTransform === a) return r;
                    s._lastParsedTransform = a;
                    var o, l, h, _, u, c, f, p, d, m, g = t._gsTransform,
                        v = t.style,
                        y = At.length,
                        T = a,
                        x = {},
                        b = "transformOrigin";
                    if (a.display ? (_ = H(t, "display"), v.display = "block", o = Ut(t, B, !0, a.parseTransform), v.display = _) : o = Ut(t, B, !0, a.parseTransform), s._transform = o, "string" == typeof T.transform && Ct)(_ = I.style)[Ct] = T.transform, _.display = "block", _.position = "absolute", F.body.appendChild(I), l = Ut(I, null, !1), F.body.removeChild(I), l.perspective || (l.perspective = o.perspective), null != T.xPercent && (l.xPercent = ot(T.xPercent, o.xPercent)), null != T.yPercent && (l.yPercent = ot(T.yPercent, o.yPercent));
                    else if ("object" == typeof T) {
                        if (l = {
                                scaleX: ot(null != T.scaleX ? T.scaleX : T.scale, o.scaleX),
                                scaleY: ot(null != T.scaleY ? T.scaleY : T.scale, o.scaleY),
                                scaleZ: ot(T.scaleZ, o.scaleZ),
                                x: ot(T.x, o.x),
                                y: ot(T.y, o.y),
                                z: ot(T.z, o.z),
                                xPercent: ot(T.xPercent, o.xPercent),
                                yPercent: ot(T.yPercent, o.yPercent),
                                perspective: ot(T.transformPerspective, o.perspective)
                            }, null != (p = T.directionalRotation))
                            if ("object" == typeof p)
                                for (_ in p) T[_] = p[_];
                            else T.rotation = p;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ot(T.x, o.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ot(T.y, o.yPercent)), l.rotation = lt("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : o.rotation, o.rotation, "rotation", x), zt && (l.rotationX = lt("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : o.rotationX || 0, o.rotationX, "rotationX", x), l.rotationY = lt("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : o.rotationY || 0, o.rotationY, "rotationY", x)), l.skewX = null == T.skewX ? o.skewX : lt(T.skewX, o.skewX), l.skewY = null == T.skewY ? o.skewY : lt(T.skewY, o.skewY), (h = l.skewY - o.skewY) && (l.skewX += h, l.rotation += h)
                    }
                    for (zt && null != T.force3D && (o.force3D = T.force3D, f = !0), o.skewType = T.skewType || o.skewType || j.defaultSkewType, (c = o.force3D || o.z || o.rotationX || o.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == T.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (u = l[i = At[y]] - o[i]) || u < -1e-6 || null != T[i] || null != z[i]) && (f = !0, r = new gt(o, i, o[i], u, r), i in x && (r.e = x[i]), r.xs0 = 0, r.plugin = n, s._overwriteProps.push(r.n));
                    return u = T.transformOrigin, o.svg && (u || T.svgOrigin) && (d = o.xOffset, m = o.yOffset, Et(t, nt(u), l, T.svgOrigin, T.smoothOrigin), r = vt(o, "xOrigin", (g ? o : l).xOrigin, l.xOrigin, r, b), r = vt(o, "yOrigin", (g ? o : l).yOrigin, l.yOrigin, r, b), (d !== o.xOffset || m !== o.yOffset) && (r = vt(o, "xOffset", g ? d : o.xOffset, o.xOffset, r, b), r = vt(o, "yOffset", g ? m : o.yOffset, o.yOffset, r, b)), u = Pt ? null : "0px 0px"), (u || zt && c && o.zOrigin) && (Ct ? (f = !0, i = Mt, u = (u || H(t, i, B, !1, "50% 50%")) + "", (r = new gt(v, i, 0, 0, r, -1, b)).b = v[i], r.plugin = n, zt ? (_ = o.zOrigin, u = u.split(" "), o.zOrigin = (2 < u.length && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, r.xs0 = r.e = u[0] + " " + (u[1] || "50%") + " 0px", (r = new gt(o, "zOrigin", 0, 0, r, -1, r.n)).b = _, r.xs0 = r.e = o.zOrigin) : r.xs0 = r.e = u) : nt(u + "", o)), f && (s._transformType = o.svg && Pt || !c && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), bt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), bt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, s, r) {
                    e = this.format(e);
                    var n, a, o, l, h, _, u, c, f, p, d, m, g, v, y, T, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        b = t.style;
                    for (f = parseFloat(t.offsetWidth), p = parseFloat(t.offsetHeight), n = e.split(" "), a = 0; x.length > a; a++) this.p.indexOf("border") && (x[a] = $(x[a])), -1 !== (h = l = H(t, x[a], B, !1, "0px")).indexOf(" ") && (h = (l = h.split(" "))[0], l = l[1]), _ = o = n[a], u = parseFloat(h), m = h.substr((u + "").length), (g = "=" === _.charAt(1)) ? (c = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), c *= parseFloat(_), d = _.substr((c + "").length - (c < 0 ? 1 : 0)) || "") : (c = parseFloat(_), d = _.substr((c + "").length)), "" === d && (d = w[i] || m), d !== m && (v = K(t, "borderLeft", u, m), y = K(t, "borderTop", u, m), "%" === d ? (h = v / f * 100 + "%", l = y / p * 100 + "%") : "em" === d ? (h = v / (T = K(t, "borderLeft", 1, "em")) + "em", l = y / T + "em") : (h = v + "px", l = y + "px"), g && (_ = parseFloat(h) + c + d, o = parseFloat(l) + c + d)), r = yt(b, x[a], h + " " + l, _ + " " + o, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: pt("0px 0px 0px 0px", !1, !0)
            }), bt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, s, r, n) {
                    var a, o, l, h, _, u, c = "background-position",
                        f = B || Q(t, null),
                        p = this.format((f ? O ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        d = this.format(e);
                    if (-1 !== p.indexOf("%") != (-1 !== d.indexOf("%")) && ((u = H(t, "backgroundImage").replace(b, "")) && "none" !== u)) {
                        for (a = p.split(" "), o = d.split(" "), X.setAttribute("src", u), l = 2; - 1 < --l;)(h = -1 !== (p = a[l]).indexOf("%")) !== (-1 !== o[l].indexOf("%")) && (_ = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, a[l] = h ? parseFloat(p) / 100 * _ + "px" : parseFloat(p) / _ * 100 + "%");
                        p = a.join(" ")
                    }
                    return this.parseComplex(t.style, p, d, r, n)
                },
                formatter: nt
            }), bt("backgroundSize", {
                defaultValue: "0 0",
                formatter: nt
            }), bt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), bt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), bt("transformStyle", {
                prefix: !0
            }), bt("backfaceVisibility", {
                prefix: !0
            }), bt("userSelect", {
                prefix: !0
            }), bt("margin", {
                parser: dt("marginTop,marginRight,marginBottom,marginLeft")
            }), bt("padding", {
                parser: dt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), bt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, s, r, n) {
                    var a, o, l;
                    return O < 9 ? (o = t.currentStyle, l = O < 8 ? " " : ",", a = "rect(" + o.clipTop + l + o.clipRight + l + o.clipBottom + l + o.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(H(t, this.p, B, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, n)
                }
            }), bt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), bt("autoRound,strictUnits", {
                parser: function(t, e, i, s, r) {
                    return r
                }
            }), bt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, s, r, n) {
                    return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", B, !1, "0px") + " " + H(t, "borderTopStyle", B, !1, "solid") + " " + H(t, "borderTopColor", B, !1, "#000")), this.format(e), r, n)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ft) || ["#000"])[0]
                }
            }), bt("borderWidth", {
                parser: dt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), bt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, s, r) {
                    var n = t.style,
                        a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new gt(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                }
            });
            var Wt = function(t) {
                var e, i = this.t,
                    s = i.filter || H(this.data, "filter") || "",
                    r = 0 | this.s + this.c * t;
                100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !H(this.data, "filter")) : (i.filter = s.replace(a, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(C, "opacity=" + r))
            };
            bt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, s, r, n) {
                    var a = parseFloat(H(t, "opacity", B, !1, "1")),
                        o = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === H(t, "visibility", B) && 0 !== e && (a = 0), V ? r = new gt(o, "opacity", a, e - a, r) : ((r = new gt(o, "opacity", 100 * a, 100 * (e - a), r)).xn1 = l ? 1 : 0, o.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = n, r.setRatio = Wt), l && ((r = new gt(o, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(i)), r
                }
            });
            var Zt = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(o, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Gt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Zt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            bt("className", {
                parser: function(t, e, i, s, r, n, a) {
                    var o, l, h, _, u, c = t.getAttribute("class") || "",
                        f = t.style.cssText;
                    if ((r = s._classNamePT = new gt(t, i, 0, 0, r, 2)).setRatio = Gt, r.pr = -11, p = !0, r.b = c, l = tt(t, B), h = t._gsClassPT) {
                        for (_ = {}, u = h.data; u;) _[u.p] = 1, u = u._next;
                        h.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), o = et(t, l, tt(t), a, _), t.setAttribute("class", c), r.data = o.firstMPT, t.style.cssText = f, r.xfirst = s.parse(t, o.difs, r, n)
                }
            });
            var $t = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, s, r, n, a = this.t.style,
                        o = d.transform.parse;
                    if ("all" === this.e) r = !(a.cssText = "");
                    else
                        for (s = (e = this.e.split(" ").join("").split(",")).length; - 1 < --s;) i = e[s], d[i] && (d[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Mt : d[i].p), Zt(a, i);
                    r && (Zt(a, Ct), (n = this.t._gsTransform) && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (bt("clearProps", {
                    parser: function(t, e, i, s, r) {
                        return (r = new gt(t, i, 0, 0, r, 2)).setRatio = $t, r.e = e, r.pr = -10, r.data = s._tween, p = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), Tt = t.length; Tt--;) wt(t[Tt]);
            (t = j.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = i, this._vars = e, k = e.autoRound, p = !1, w = e.suffixMap || j.suffixMap, B = Q(t, ""), f = this._overwriteProps;
                var s, r, n, a, o, l, h, _, u, c = t.style;
                if (m && "" === c.zIndex && (("auto" === (s = H(t, "zIndex", B)) || "" === s) && this._addLazySet(c, "zIndex", 0)), "string" == typeof e && (a = c.cssText, s = tt(t, B), c.cssText = a + ";" + e, s = et(t, s, tt(t)).difs, !V && T.test(e) && (s.opacity = parseFloat(RegExp.$1)), e = s, c.cssText = a), this._firstPT = r = e.className ? d.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (u = 3 === this._transformType, Ct ? g && (m = !0, "" === c.zIndex && (("auto" === (h = H(t, "zIndex", B)) || "" === h) && this._addLazySet(c, "zIndex", 0)), v && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : c.zoom = 1, n = r; n && n._next;) n = n._next;
                    _ = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, n), _.setRatio = Ct ? qt : Vt, _.data = this._transform || Ut(t, B, !0), _.tween = i, _.pr = -1, f.pop()
                }
                if (p) {
                    for (; r;) {
                        for (l = r._next, n = a; n && n.pr > r.pr;) n = n._next;
                        (r._prev = n ? n._prev : o) ? r._prev._next = r: a = r, (r._next = n) ? n._prev = r : o = r, r = l
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function(t, e, i, s) {
                var r, n, a, o, l, h, _, u, c, f, p = t.style;
                for (r in e) h = e[r], (n = d[r]) ? i = n.parse(t, h, r, this, i, s, e) : (l = H(t, r, B) + "", c = "string" == typeof h, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || c && x.test(h) ? (c || (h = (3 < (h = ut(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"), i = yt(p, r, l, h, !0, "transparent", i, 0, s)) : !c || -1 === h.indexOf(" ") && -1 === h.indexOf(",") ? (_ = (a = parseFloat(l)) || 0 === a ? l.substr((a + "").length) : "", ("" === l || "auto" === l) && ("width" === r || "height" === r ? (a = rt(t, r, B), _ = "px") : "left" === r || "top" === r ? (a = J(t, r, B), _ = "px") : (a = "opacity" !== r ? 0 : 1, _ = "")), (f = c && "=" === h.charAt(1)) ? (o = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), o *= parseFloat(h), u = h.replace(S, "")) : (o = parseFloat(h), u = c ? h.replace(S, "") : ""), "" === u && (u = r in w ? w[r] : _), h = o || 0 === o ? (f ? o + a : o) + u : e[r], _ !== u && "" !== u && (o || 0 === o) && a && (a = K(t, r, a, _), "%" === u ? (a /= K(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = a + "%")) : "em" === u || "rem" === u ? a /= K(t, r, 1, u) : "px" !== u && (o = K(t, r, o, u), u = "px"), f && (o || 0 === o) && (h = o + a + u)), f && (o += a), !a && 0 !== a || !o && 0 !== o ? void 0 !== p[r] && (h || "NaN" != h + "" && null != h) ? (i = new gt(p, r, o || a || 0, 0, i, -1, r, !1, 0, l, h)).xs0 = "none" !== h || "display" !== r && -1 === r.indexOf("Style") ? h : l : W("invalid " + r + " tween value: " + e[r]) : (i = new gt(p, r, a, o - a, i, 0, r, !1 !== k && ("px" === u || "zIndex" === r), 0, l, h)).xs0 = u) : i = yt(p, r, l, h, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                return i
            }, t.setRatio = function(t) {
                var e, i, s, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function(t) {
                this._transform = this._transform || Ut(this._target, B, !0), this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qt = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function(t, e, i) {
                var s = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                s.e = i, s.setRatio = Qt, s.data = this
            }, t._linkCSSP = function(t, e, i, s) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._kill = function(t) {
                var e, i, s, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in r = {}, t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return t.className && (e = this._classNamePT) && ((s = e.xfirst) && s._prev ? this._linkCSSP(s._prev, e._next, s._prev._prev) : s === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, s._prev), this._classNamePT = null), n.prototype._kill.call(this, r)
            };
            var Ht = function(t, e, i) {
                var s, r, n, a;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) Ht(t[r], e, i);
                else
                    for (r = (s = t.childNodes).length; - 1 < --r;) a = (n = s[r]).type, n.style && (e.push(tt(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ht(n, e, i)
            };
            return j.cascadeTo = function(t, e, i) {
                var s, r, n, a, o = Y.to(t, e, i),
                    l = [o],
                    h = [],
                    _ = [],
                    u = [],
                    c = Y._internals.reservedProps;
                for (t = o._targets || o.target, Ht(t, h, u), o.render(e, !0, !0), Ht(t, _), o.render(0, !0, !0), o._enabled(!0), s = u.length; - 1 < --s;)
                    if ((r = et(u[s], h[s], _[s])).firstMPT) {
                        for (n in r = r.difs, i) c[n] && (r[n] = i[n]);
                        for (n in a = {}, r) a[n] = h[s][n];
                        l.push(Y.fromTo(u[s], e, a, r))
                    }
                return l
            }, n.activate([j]), j
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        }), l = function(t) {
            for (; t;) t.f || t.blob || (t.r = 1), t = t._next
        }, (e = t.prototype)._onInitAllProps = function() {
            for (var t, e, i, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; - 1 < --n;) a[r[n]] = 1;
            for (n = r.length; - 1 < --n;)
                for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o)), e = i;
            return !1
        }, e._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.5.0",
            init: function(t, e) {
                var i;
                if ("function" != typeof t.setAttribute) return !1;
                for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.2.1",
            API: 2,
            init: function(t, e) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var i, s, r, n, a, o = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (i in e) "useRadians" !== i && (s = (a = (e[i] + "").split("_"))[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = (this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - r, a.length && (-1 !== (s = a.join("_")).indexOf("short") && ((n %= o) !== n % (o / 2) && (n = n < 0 ? n + o : n - o)), -1 !== s.indexOf("_cw") && n < 0 ? n = (n + 9999999999 * o) % o - (0 | n / o) * o : -1 !== s.indexOf("ccw") && 0 < n && (n = (n - 9999999999 * o) % o - (0 | n / o) * o)), (1e-6 < n || n < -1e-6) && (this._addTween(t, i, r, r + n, i), this._overwriteProps.push(i)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
            var e, i, t, s = _gsScope.GreenSockGlobals || _gsScope,
                r = s.com.greensock,
                n = 2 * Math.PI,
                a = Math.PI / 2,
                o = r._class,
                l = function(t, e) {
                    var i = o("easing." + t, function() {}, !0),
                        s = i.prototype = new m;
                    return s.constructor = i, s.getRatio = e, i
                },
                h = m.register || function() {},
                _ = function(t, e, i, s) {
                    var r = o("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new s
                    }, !0);
                    return h(r, t), r
                },
                g = function(t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                u = function(t, e) {
                    var i = o("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = i.prototype = new m;
                    return s.constructor = i, s.getRatio = e, s.config = function(t) {
                        return new i(t)
                    }, i
                },
                c = _("Back", u("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), u("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), u("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                f = o("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                p = f.prototype = new m;
            return p.constructor = f, p.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, f.ease = new f(.7, .7), p.config = f.config = function(t, e, i) {
                return new f(t, e, i)
            }, (p = (e = o("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0)).prototype = new m).constructor = e, p.getRatio = function(t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, p.config = e.config = function(t) {
                return new e(t)
            }, (p = (i = o("easing.RoughEase", function(t) {
                for (var e, i, s, r, n, a, o = (t = t || {}).taper || "none", l = [], h = 0, _ = 0 | (t.points || 20), u = _, c = !1 !== t.randomize, f = !0 === t.clamp, p = t.template instanceof m ? t.template : null, d = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --u;) e = c ? Math.random() : 1 / _ * u, i = p ? p.getRatio(e) : e, "none" === o ? s = d : "out" === o ? s = (r = 1 - e) * r * d : "in" === o ? s = e * e * d : s = .5 * (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * d, c ? i += Math.random() * s - .5 * s : u % 2 ? i += .5 * s : i -= .5 * s, f && (1 < i ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new g(1, 1, null), u = _; - 1 < --u;) n = l[u], a = new g(n.x, n.y, a);
                this._prev = new g(0, 0, 0 !== a.t ? a : a.next)
            }, !0)).prototype = new m).constructor = i, p.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, p.config = function(t) {
                return new i(t)
            }, i.ease = new i, _("Bounce", l("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function(t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), _("Circ", l("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), _("Elastic", (t = function(t, e, i) {
                var s = o("easing." + t, function(t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / n * (Math.asin(1 / this._p1) || 0), this._p2 = n / this._p2
                    }, !0),
                    r = s.prototype = new m;
                return r.constructor = s, r.getRatio = e, r.config = function(t, e) {
                    return new s(t, e)
                }, s
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
            }, .45)), _("Expo", l("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), _("Sine", l("SineOut", function(t) {
                return Math.sin(t * a)
            }), l("SineIn", function(t) {
                return 1 - Math.cos(t * a)
            }), l("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), o("easing.EaseLookup", {
                find: function(t) {
                    return m.map[t]
                }
            }, !0), h(s.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), c
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(f, t) {
        "use strict";
        var e, i, p = f.GreenSockGlobals = f.GreenSockGlobals || f;
        if (!p.TweenLite) {
            var s, r, n, d, m, g = function(t) {
                    var e, i = t.split("."),
                        s = p;
                    for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                    return s
                },
                u = g("com.greensock"),
                v = 1e-10,
                l = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                y = function() {},
                T = (e = Object.prototype.toString, i = e.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
                }),
                x = {},
                b = function(l, h, _, u) {
                    this.sc = x[l] ? x[l].sc : [], (x[l] = this).gsClass = null, this.func = _;
                    var c = [];
                    this.check = function(t) {
                        for (var e, i, s, r, n, a = h.length, o = a; - 1 < --a;)(e = x[h[a]] || new b(h[a], [])).gsClass ? (c[a] = e.gsClass, o--) : t && e.sc.push(this);
                        if (0 === o && _)
                            for (s = (i = ("com.greensock." + l).split(".")).pop(), r = g(i.join("."))[s] = this.gsClass = _.apply(_, c), u && (p[s] = r, !(n = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd ? define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function() {
                                    return r
                                }) : "TweenMax" === l && n && (module.exports = r)), a = 0; this.sc.length > a; a++) this.sc[a].check()
                    }, this.check(!0)
                },
                a = f._gsDefine = function(t, e, i, s) {
                    return new b(t, e, i, s)
                },
                c = u._class = function(t, e, i) {
                    return e = e || function() {}, a(t, [], function() {
                        return e
                    }, i), e
                };
            a.globals = p;
            var o = [0, 0, 1, 1],
                h = [],
                _ = c("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? o.concat(e) : o
                }, !0),
                w = _.map = {},
                P = _.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                        for (n = l[h], r = s ? c("easing." + n, null, !0) : u.easing[n] || {}, a = _.length; - 1 < --a;) o = _[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for ((n = _.prototype)._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : t < .5 ? s / 2 : 1 - s / 2
                }, r = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --r;) n = s[r] + ",Power" + r, P(new _(null, null, 1, r), n, "easeOut", !0), P(new _(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new _(null, null, 3, r), n, "easeInOut");
            w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
            var O = c("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (n = O.prototype).addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, a, o = this._listeners[t],
                    l = 0;
                for (null == o && (this._listeners[t] = o = []), a = o.length; - 1 < --a;)(n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && r > n.pr && (l = a + 1);
                o.splice(l, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== d || m || d.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; - 1 < --i;)
                        if (s[i].c === e) return void s.splice(i, 1)
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; - 1 < --e;)(s = r[e]) && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var S = f.requestAnimationFrame,
                k = f.cancelAnimationFrame,
                R = Date.now || function() {
                    return (new Date).getTime()
                },
                A = R();
            for (r = (s = ["ms", "moz", "webkit", "o"]).length; - 1 < --r && !S;) S = f[s[r] + "RequestAnimationFrame"], k = f[s[r] + "CancelAnimationFrame"] || f[s[r] + "CancelRequestAnimationFrame"];
            c("Ticker", function(t, e) {
                var r, n, a, o, l, h = this,
                    _ = R(),
                    i = !1 !== e && S,
                    u = 500,
                    c = 33,
                    f = function(t) {
                        var e, i, s = R() - A;
                        u < s && (_ += s - c), A += s, h.time = (A - _) / 1e3, e = h.time - l, (!r || 0 < e || !0 === t) && (h.frame++, l += e + (o <= e ? .004 : o - e), i = !0), !0 !== t && (a = n(f)), i && h.dispatchEvent("tick")
                    };
                O.call(h), h.time = h.frame = 0, h.tick = function() {
                    f(!0)
                }, h.lagSmoothing = function(t, e) {
                    u = t || 1e10, c = Math.min(e, u, 0)
                }, h.sleep = function() {
                    null != a && (i && k ? k(a) : clearTimeout(a), n = y, a = null, h === d && (m = !1))
                }, h.wake = function() {
                    null !== a ? h.sleep() : 10 < h.frame && (A = R() - u + 5), n = 0 === r ? y : i && S ? S : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === d && (m = !0), f(2)
                }, h.fps = function(t) {
                    return arguments.length ? (o = 1 / ((r = t) || 60), l = this.time + o, void h.wake()) : r
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), i = t, void h.fps(r)) : i
                }, h.fps(t), setTimeout(function() {
                    i && h.frame < 5 && h.useRAF(!1)
                }, 1500)
            }), (n = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var C = c("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                    m || d.wake();
                    var i = this.vars.useFrames ? Z : G;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            d = C.ticker = new u.Ticker, (n = C.prototype)._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var D = function() {
                m && 2e3 < R() - A && d.wake(), setTimeout(D, 2e3)
            };
            D(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return m || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || h)
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (m || d.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (s < t && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || v, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (m || t || d.wake(), i = (e = s.rawTime()) - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var M = c("core.SimpleTimeline", function(t) {
                C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (n = M.prototype = new C).constructor = M, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return m || d.wake(), this._totalTime
            };
            var z = c("TweenLite", function(t, e, i) {
                    if (C.call(this, e, i), this.render = z.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                    var s, r, n, a = t.jquery || t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType),
                        o = this.vars.overwrite;
                    if (this._overwrite = o = null == o ? W[z.defaultOverwrite] : "number" == typeof o ? o >> 0 : W[o], (a || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                        for (this._targets = n = l(t), this._propLookup = [], this._siblings = [], s = 0; n.length > s; s++)(r = n[s]) ? "string" != typeof r ? r.length && r !== f && r[0] && (r[0] === f || r[0].nodeType && r[0].style && !r.nodeType) ? (n.splice(s--, 1), this._targets = n = n.concat(l(r))) : (this._siblings[s] = H(r, this, !1), 1 === o && 1 < this._siblings[s].length && J(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = n[s--] = z.selector(r)) && n.splice(s + 1, 1) : n.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = H(t, this, !1), 1 === o && 1 < this._siblings.length && J(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -v, this.render(-this._delay))
                }, !0),
                F = function(t) {
                    return t && t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (n = z.prototype = new C).constructor = z, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, z.version = "1.18.0", z.defaultEase = n._ease = new _(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = d, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
                d.lagSmoothing(t, e)
            }, z.selector = f.$ || f.jQuery || function(t) {
                var e = f.$ || f.jQuery;
                return e ? (z.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var I = [],
                X = {},
                N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                E = function(t, e, i, s) {
                    var r, n, a, o, l, h, _, u = [t, e],
                        c = 0,
                        f = "",
                        p = 0;
                    for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(N) || [], n = e.match(N) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; o < l; o++) _ = n[o], f += (h = e.substr(c, e.indexOf(_, c) - c)) || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || o >= r.length ? f += _ : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        r: p && p < 4
                    }), c += _.length;
                    return (f += e.substr(c)) && u.push(f), u.setRatio = L, u
                },
                Y = function(t, e, i, s, r, n, a, o) {
                    var l, h = "get" === i ? t[e] : i,
                        _ = typeof t[e],
                        u = "string" == typeof s && "=" === s.charAt(1),
                        c = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === _,
                            pg: 0,
                            n: r || e,
                            r: n,
                            pr: 0,
                            c: u ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - h || 0
                        };
                    return "number" !== _ && ("function" === _ && "get" === i && (l = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), c.s = h = a ? t[l](a) : t[l]()), "string" == typeof h && (a || isNaN(h)) ? (c.fp = a, c = {
                        t: E(h, s, o || z.defaultStringFilter, c),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0
                    }) : u || (c.c = parseFloat(s) - parseFloat(h) || 0)), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c) : void 0
                },
                B = z._internals = {
                    isArray: T,
                    isSelector: F,
                    lazyTweens: I,
                    blobDif: E
                },
                j = z._plugins = {},
                U = B.tweenLookup = {},
                V = 0,
                q = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                Z = C._rootFramesTimeline = new M,
                G = C._rootTimeline = new M,
                $ = 30,
                Q = B.lazyRender = function() {
                    var t, e = I.length;
                    for (X = {}; - 1 < --e;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            G._startTime = d.time, Z._startTime = d.frame, G._active = Z._active = !0, setTimeout(Q, 1), C._updateRoot = z.render = function() {
                var t, e, i;
                if (I.length && Q(), G.render((d.time - G._startTime) * G._timeScale, !1, !1), Z.render((d.frame - Z._startTime) * Z._timeScale, !1, !1), I.length && Q(), d.frame >= $) {
                    for (i in $ = d.frame + (parseInt(z.autoSleep, 10) || 120), U) {
                        for (t = (e = U[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete U[i]
                    }
                    if ((!(i = G._first) || i._paused) && z.autoSleep && !Z._first && 1 === d._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || d.sleep()
                    }
                }
            }, d.addEventListener("tick", C._updateRoot);
            var H = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (U[n || (t._gsTweenID = n = "t" + V++)] || (U[n] = {
                            target: t,
                            tweens: []
                        }), e && ((s = U[n].tweens)[r = s.length] = e, i))
                        for (; - 1 < --r;) s[r] === e && s.splice(r, 1);
                    return U[n].tweens
                },
                K = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), (a = z.onOverwrite) && (n = a(t, e, i, s)), !1 !== r && !1 !== n
                },
                J = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || 4 <= s) {
                        for (l = r.length, n = 0; n < l; n++)
                            if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, _ = e._startTime + v,
                        u = [],
                        c = 0,
                        f = 0 === e._duration;
                    for (n = r.length; - 1 < --n;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || tt(e, 0, f), 0 === tt(o, h, f) && (u[c++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > _ && ((f || !o._initted) && _ - o._startTime <= 2e-10 || (u[c++] = o)));
                    for (n = c; - 1 < --n;)
                        if (o = u[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !K(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                tt = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return e < (n /= r) ? n - e : i && n === e || !t._initted && n - e < 2 * v ? v : (n += t.totalDuration() / t._timeScale / r) > e + v ? 0 : n - e - v
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== n.lazy, r.startAt = r.delay = null, this._startAt = z.to(this.target, 0, r), l)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (s in 0 !== this._time && (l = !1), i = {}, n) q[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== n.lazy, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof _ ? h : "function" == typeof h ? new _(h, n.easeParams) : w[h] || z.defaultEase : z.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; - 1 < --t;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && z._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(t, e, i, s) {
                var r, n, a, o, l, h;
                if (null == t) return !1;
                for (r in X[t._gsTweenID] && Q(), this.vars.css || t.style && t !== f && t.nodeType && j.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, s = {};
                        for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                        t.css = s
                    }(this.vars, t), this.vars)
                    if (h = this.vars[r], q[r]) h && (h instanceof Array || h.push && T(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                    else if (j[r] && (o = new j[r])._onInitTween(t, this.vars[r], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: o,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: r,
                            pg: 1,
                            pr: o._priority
                        }, n = o._overwriteProps.length; - 1 < --n;) e[o._overwriteProps[n]] = this._firstPT;
                    (o._priority || o._onInitAllProps) && (a = !0), (o._onDisable || o._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                } else e[r] = Y.call(this, t, r, "get", h, r, 0, null, this.vars.stringFilter);
                return s && this._kill(s, t) ? this._initProps(t, e, i, s) : 1 < this._overwrite && this._firstPT && 1 < i.length && J(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), a)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (l <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || h < 0 || h === v && "isPause" !== this.data) && h !== t && (i = !0, v < h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : v);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && 0 < h) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== v || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : v)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var _ = t / l,
                        u = this._easeType,
                        c = this._easePower;
                    (1 === u || 3 === u && .5 <= _) && (_ = 1 - _), 3 === u && (_ *= 2), 1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _), this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, I.push(this), void(this._lazy = [t, e]);
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && 0 <= t && (this._active = !0), 0 === o && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === v && a !== v && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((T(e) || F(e)) && "number" != typeof e[0])
                    for (s = e.length; - 1 < --s;) this._kill(t, e[s], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; - 1 < --s;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if ((u || !t) && !K(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (m || d.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; - 1 < --i;) this._siblings[i] = H(s[i], this, !0);
                    else this._siblings = H(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, z.to = function(t, e, i) {
                return new z(t, e, i)
            }, z.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
            }, z.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new z(t, e, s)
            }, z.delayedCall = function(t, e, i, s, r) {
                return new z(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, z.set = function(t, e) {
                return new z(t, 0, e)
            }, z.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, s, r, n;
                if (t = "string" != typeof t ? t : z.selector(t) || t, (T(t) || F(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; - 1 < --i;) s = s.concat(z.getTweensOf(t[i], e));
                    for (i = s.length; - 1 < --i;)
                        for (n = s[i], r = i; - 1 < --r;) n === s[r] && s.splice(i, 1)
                } else
                    for (i = (s = H(t).concat()).length; - 1 < --i;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = z.getTweensOf(t, e), r = s.length; - 1 < --r;) s[r]._kill(i, t)
            };
            var et = c("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (n = et.prototype, et.version = "1.18.0", et.API = 2, n._firstPT = null, n._addTween = Y, n.setRatio = L, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, z._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, et.activate = function(t) {
                    for (var e = t.length; - 1 < --e;) t[e].API === et.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, a.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, s), this._overwriteProps = r || []
                        }, !0 === t.global),
                        o = a.prototype = new et(i);
                    for (e in (o.constructor = a).API = t.API, n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, et.activate([a]), a
                }, s = f._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in x) x[n].func || f.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            m = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window);

/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,n,r,a,o,l=function(t){var e,s=t.split("."),n=i;for(e=0;s.length>e;e++)n[s[e]]=n=n[s[e]]||{};return n},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},f=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},c=function(s,n,r,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(h){for(var _,u,f,m,d=n.length,v=d;--d>-1;)(_=p[n[d]]||new c(n[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&r)for(u=("com.greensock."+s).split("."),f=u.pop(),m=l(u.join("."))[f]=this.gsClass=r.apply(r,o),a&&(i[f]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return m}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=m)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new c(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var n,r,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(r=l[_],n=s?v("easing."+r,null,!0):h.easing[r]||{},a=u.length;--a>-1;)o=u[a],w[r+"."+o]=w[o+r]=n[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=s.length;--n>-1;)r=s[n]+",Power"+n,P(new y(null,null,1,n),r,"easeOut",!0),P(new y(null,null,2,n),r,"easeIn"+(0===n?",easeNone":"")),P(new y(null,null,3,n),r,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=b.prototype,r.addEventListener=function(t,e,i,s,n){n=n||0;var r,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)r=h[l],r.c===e&&r.s===i?h.splice(l,1):0===_&&n>r.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:n}),this!==a||o||a.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for(e=n.length,i=this._eventTarget;--e>-1;)s=n[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],n=s.length;--n>-1&&!k;)k=t[s[n]+"RequestAnimationFrame"],A=t[s[n]+"CancelAnimationFrame"]||t[s[n]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,n,r,l,h=this,u=S(),m=e!==!1&&k,p=500,c=33,d=function(t){var e,a,o=S()-x;o>p&&(u+=o-c),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=r?.004:r-e),a=!0),t!==!0&&(n=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){p=t||1/_,c=Math.min(e,p,0)},h.sleep=function(){null!=n&&(m&&A?A(n):clearTimeout(n),s=f,n=null,h===a&&(o=!1))},h.wake=function(){null!==n?h.sleep():h.frame>10&&(x=S()-p+5),s=0===i?f:m&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,r=1/(i||60),l=this.time+r,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!n||5>h.frame)&&h.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var C=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=C.ticker=new h.Ticker,r=C.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var R=function(){o&&S()-x>2e3&&a.wake(),setTimeout(R,2e3)};R(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,n=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?s-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),O.length&&M())}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){C.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=D.prototype=new C,r.constructor=D,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},r.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(C.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],n=0;a.length>n;n++)r=a[n],r?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(u(r))):(this._siblings[n]=$(r,this,!1),1===l&&this._siblings[n].length>1&&K(r,this,null,1,this._siblings[n])):(r=a[n--]=I.selector(r),"string"==typeof r&&a.splice(n+1,1)):a.splice(n--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&K(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=I.prototype=new C,r.constructor=I,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=r._lazy=!1,I.version="1.13.1",I.defaultEase=r._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var O=[],L={},N=I._internals={isArray:m,isSelector:E,lazyTweens:O},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=C._rootFramesTimeline=new D,B=C._rootTimeline=new D,M=N.lazyRender=function(){var t=O.length;for(L={};--t>-1;)s=O[t],s&&s._lazy!==!1&&(s.render(s._lazy,!1,!0),s._lazy=!1);O.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),C._updateRoot=I.render=function(){var t,e,i;if(O.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),O.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",C._updateRoot);var $=function(t,e,i){var s,n,r=t._gsTweenID;if(F[r||(t._gsTweenID=r="t"+j++)]||(F[r]={target:t,tweens:[]}),e&&(s=F[r].tweens,s[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return F[r].tweens},K=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;l>r;r++)if((o=n[r])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,f=[],m=0,p=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||H(e,0,p),0===H(o,h,p)&&(f[m++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(f[m++]=o)));for(r=m;--r>-1;)o=f[r],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},H=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return r/=n,r>e?r-e:i&&r===e||!t._initted&&2*_>r-e?_:(r+=t.totalDuration()/t._timeScale/n)>e+_?0:r-e-_};r._init=function(){var t,e,i,s,n,r=this.vars,a=this._overwrittenProps,o=this._duration,l=!!r.immediateRender,h=r.ease;if(r.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={};for(s in r.startAt)n[s]=r.startAt[s];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=l&&r.lazy!==!1,n.startAt=n.delay=null,this._startAt=I.to(this.target,0,n),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{i={};for(s in r)G[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&r.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,r.easeParams):w[h]||I.defaultEase:I.defaultEase,r.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,r.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,n){var r,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(r in this.vars){if(_=this.vars[r],G[r])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(U[r]&&(l=new U[r])._onInitTween(e,this.vars[r],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[r]=h={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pg:!1,pr:0},h.s=h.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return n&&this._kill(n,e)?this._initProps(e,i,s,n):this._overwrite>1&&this._firstPT&&s.length>1&&K(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},r.render=function(t,e,i){var s,n,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(n="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(n="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,f=this._easeType,m=this._easePower;(1===f||3===f&&u>=.5)&&(u=1-u),3===f&&(u*=2),1===m?u*=u:2===m?u*=u*u:3===m?u*=u*u*u:4===m&&(u*=u*u*u*u),this.ratio=1===f?1-u:2===f?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,O.push(this),this._lazy=t,void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this.vars[n].apply(this.vars[n+"Scope"]||this,this.vars[n+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var i,s,n,r,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(n in l)(r=a[n])&&(r.pg&&r.t._kill(l)&&(o=!0),r.pg&&0!==r.t._overwriteProps.length||(r._prev?r._prev._next=r._next:r===this._firstPT&&(this._firstPT=r._next),r._next&&(r._next._prev=r._prev),r._next=r._prev=null),delete a[n]),h&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=this._lazy=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return C.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,n){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,n,r;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(r=s[i],n=i;--n>-1;)r===s[n]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),n=s.length;--n>-1;)s[n]._kill(i,t)};var J=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=J.prototype},!0);if(r=J.prototype,J.version="1.10.1",J.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,n,r){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:n||e,r:r},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},J.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===J.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){J.call(this,i,s),this._overwriteProps=n||[]},t.global===!0),o=a.prototype=new J(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,J.activate([a]),a},s=t._gsQueue){for(n=0;s.length>n;n++)s[n]();for(r in p)p[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");


/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

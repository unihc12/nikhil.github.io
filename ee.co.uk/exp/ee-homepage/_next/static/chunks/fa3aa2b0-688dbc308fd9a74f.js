"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8336], {
        1601: function(r, g, b) {
            var s, t, u, a, c = b(7294),
                v = b(6596),
                w = b(407),
                x = (a = c) && "object" == typeof a && "default" in a ? a : {
                    default: a
                },
                y = function() {
                    return (y = Object.assign || function(d) {
                        for (var a, b = 1, e = arguments.length; b < e; b++)
                            for (var c in a = arguments[b]) Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c]);
                        return d
                    }).apply(this, arguments)
                };

            function z(a) {
                return null !== a && "object" == typeof a && "constructor" in a && a.constructor === Object
            }

            function A(b, a) {
                void 0 === b && (b = {}), void 0 === a && (a = {}), Object.keys(a).forEach(function(c) {
                    void 0 === b[c] ? b[c] = a[c] : z(a[c]) && z(b[c]) && Object.keys(a[c]).length > 0 && A(b[c], a[c])
                })
            }
            var h = {
                body: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return null
                },
                querySelectorAll: function() {
                    return []
                },
                getElementById: function() {
                    return null
                },
                createEvent: function() {
                    return {
                        initEvent: function() {}
                    }
                },
                createElement: function() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                createElementNS: function() {
                    return {}
                },
                importNode: function() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function B() {
                var a = "undefined" != typeof document ? document : {};
                return A(a, h), a
            }
            var C = {
                document: h,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                },
                requestAnimationFrame: function(a) {
                    return "undefined" == typeof setTimeout ? (a(), null) : setTimeout(a, 0)
                },
                cancelAnimationFrame: function(a) {
                    "undefined" != typeof setTimeout && clearTimeout(a)
                }
            };

            function D() {
                var a = "undefined" != typeof window ? window : {};
                return A(a, C), a
            }

            function E(a) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                    return a.__proto__ || Object.getPrototypeOf(a)
                })(a)
            }

            function F(a, b) {
                return (F = Object.setPrototypeOf || function(a, b) {
                    return a.__proto__ = b, a
                })(a, b)
            }

            function G(a, b, c) {
                return (G = ! function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (a) {
                        return !1
                    }
                }() ? function(d, e, b) {
                    var a = [null];
                    a.push.apply(a, e);
                    var c = new(Function.bind.apply(d, a));
                    return b && F(c, b.prototype), c
                } : Reflect.construct).apply(null, arguments)
            }

            function i(a) {
                var b = "function" == typeof Map ? new Map : void 0;
                return (i = function(a) {
                    var d;
                    if (null === a || (d = a, -1 === Function.toString.call(d).indexOf("[native code]"))) return a;
                    if ("function" != typeof a) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== b) {
                        if (b.has(a)) return b.get(a);
                        b.set(a, c)
                    }

                    function c() {
                        return G(a, arguments, E(this).constructor)
                    }
                    return c.prototype = Object.create(a.prototype, {
                        constructor: {
                            value: c,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), F(c, a)
                })(a)
            }
            var j = function(d) {
                var a, b;

                function c(c) {
                    var a, b, e;
                    return e = (b = function(a) {
                        if (void 0 === a) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a
                    }(a = d.call.apply(d, [this].concat(c)) || this)).__proto__, Object.defineProperty(b, "__proto__", {
                        get: function() {
                            return e
                        },
                        set: function(a) {
                            e.__proto__ = a
                        }
                    }), a
                }
                return a = c, b = d, a.prototype = Object.create(b.prototype), a.prototype.constructor = a, a.__proto__ = b, c
            }(i(Array));

            function H(a) {
                void 0 === a && (a = []);
                var b = [];
                return a.forEach(function(a) {
                    Array.isArray(a) ? b.push.apply(b, H(a)) : b.push(a)
                }), b
            }

            function I(a, b) {
                return Array.prototype.filter.call(a, b)
            }

            function k(a, h) {
                var i = D(),
                    e = B(),
                    c = [];
                if (!h && a instanceof j) return a;
                if (!a) return new j(c);
                if ("string" == typeof a) {
                    var b = a.trim();
                    if (b.indexOf("<") >= 0 && b.indexOf(">") >= 0) {
                        var d = "div";
                        0 === b.indexOf("<li") && (d = "ul"), 0 === b.indexOf("<tr") && (d = "tbody"), (0 === b.indexOf("<td") || 0 === b.indexOf("<th")) && (d = "tr"), 0 === b.indexOf("<tbody") && (d = "table"), 0 === b.indexOf("<option") && (d = "select");
                        var f = e.createElement(d);
                        f.innerHTML = b;
                        for (var g = 0; g < f.childNodes.length; g += 1) c.push(f.childNodes[g])
                    } else c = function(a, e) {
                        if ("string" != typeof a) return [a];
                        for (var c = [], d = e.querySelectorAll(a), b = 0; b < d.length; b += 1) c.push(d[b]);
                        return c
                    }(a.trim(), h || e)
                } else if (a.nodeType || a === i || a === e) c.push(a);
                else if (Array.isArray(a)) {
                    if (a instanceof j) return a;
                    c = a
                }
                return new j(function(b) {
                    for (var c = [], a = 0; a < b.length; a += 1) - 1 === c.indexOf(b[a]) && c.push(b[a]);
                    return c
                }(c))
            }
            k.fn = j.prototype;
            var l = {
                addClass: function() {
                    for (var b = arguments.length, c = Array(b), a = 0; a < b; a++) c[a] = arguments[a];
                    var d = H(c.map(function(a) {
                        return a.split(" ")
                    }));
                    return this.forEach(function(b) {
                        var a;
                        (a = b.classList).add.apply(a, d)
                    }), this
                },
                removeClass: function() {
                    for (var b = arguments.length, c = Array(b), a = 0; a < b; a++) c[a] = arguments[a];
                    var d = H(c.map(function(a) {
                        return a.split(" ")
                    }));
                    return this.forEach(function(b) {
                        var a;
                        (a = b.classList).remove.apply(a, d)
                    }), this
                },
                hasClass: function() {
                    for (var b = arguments.length, c = Array(b), a = 0; a < b; a++) c[a] = arguments[a];
                    var d = H(c.map(function(a) {
                        return a.split(" ")
                    }));
                    return I(this, function(a) {
                        return d.filter(function(b) {
                            return a.classList.contains(b)
                        }).length > 0
                    }).length > 0
                },
                toggleClass: function() {
                    for (var b = arguments.length, c = Array(b), a = 0; a < b; a++) c[a] = arguments[a];
                    var d = H(c.map(function(a) {
                        return a.split(" ")
                    }));
                    this.forEach(function(a) {
                        d.forEach(function(b) {
                            a.classList.toggle(b)
                        })
                    })
                },
                attr: function(a, d) {
                    if (1 === arguments.length && "string" == typeof a) return this[0] ? this[0].getAttribute(a) : void 0;
                    for (var b = 0; b < this.length; b += 1)
                        if (2 === arguments.length) this[b].setAttribute(a, d);
                        else
                            for (var c in a) this[b][c] = a[c], this[b].setAttribute(c, a[c]);
                    return this
                },
                removeAttr: function(b) {
                    for (var a = 0; a < this.length; a += 1) this[a].removeAttribute(b);
                    return this
                },
                transform: function(b) {
                    for (var a = 0; a < this.length; a += 1) this[a].style.transform = b;
                    return this
                },
                transition: function(a) {
                    for (var b = 0; b < this.length; b += 1) this[b].style.transitionDuration = "string" != typeof a ? a + "ms" : a;
                    return this
                },
                on: function() {
                    for (var c, l = arguments.length, b = Array(l), e = 0; e < l; e++) b[e] = arguments[e];
                    var m = b[0],
                        n = b[1],
                        i = b[2],
                        d = b[3];

                    function o(a) {
                        var b = a.target;
                        if (b) {
                            var c = a.target.dom7EventData || [];
                            if (0 > c.indexOf(a) && c.unshift(a), k(b).is(n)) i.apply(b, c);
                            else
                                for (var e = k(b).parents(), d = 0; d < e.length; d += 1) k(e[d]).is(n) && i.apply(e[d], c)
                        }
                    }

                    function p(a) {
                        var b = a && a.target && a.target.dom7EventData || [];
                        0 > b.indexOf(a) && b.unshift(a), i.apply(this, b)
                    }
                    "function" == typeof b[1] && (m = b[0], i = b[1], d = b[2], n = void 0), d || (d = !1);
                    for (var f = m.split(" "), j = 0; j < this.length; j += 1) {
                        var a = this[j];
                        if (n)
                            for (c = 0; c < f.length; c += 1) {
                                var g = f[c];
                                a.dom7LiveListeners || (a.dom7LiveListeners = {}), a.dom7LiveListeners[g] || (a.dom7LiveListeners[g] = []), a.dom7LiveListeners[g].push({
                                    listener: i,
                                    proxyListener: o
                                }), a.addEventListener(g, o, d)
                            } else
                                for (c = 0; c < f.length; c += 1) {
                                    var h = f[c];
                                    a.dom7Listeners || (a.dom7Listeners = {}), a.dom7Listeners[h] || (a.dom7Listeners[h] = []), a.dom7Listeners[h].push({
                                        listener: i,
                                        proxyListener: p
                                    }), a.addEventListener(h, p, d)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var m = arguments.length, a = Array(m), i = 0; i < m; i++) a[i] = arguments[i];
                    var n = a[0],
                        j = a[1],
                        e = a[2],
                        f = a[3];
                    "function" == typeof a[1] && (n = a[0], e = a[1], f = a[2], j = void 0), f || (f = !1);
                    for (var o = n.split(" "), k = 0; k < o.length; k += 1)
                        for (var h = o[k], l = 0; l < this.length; l += 1) {
                            var c = this[l],
                                b = void 0;
                            if (!j && c.dom7Listeners ? b = c.dom7Listeners[h] : j && c.dom7LiveListeners && (b = c.dom7LiveListeners[h]), b && b.length)
                                for (var g = b.length - 1; g >= 0; g -= 1) {
                                    var d = b[g];
                                    e && d.listener === e ? (c.removeEventListener(h, d.proxyListener, f), b.splice(g, 1)) : e && d.listener && d.listener.dom7proxy && d.listener.dom7proxy === e ? (c.removeEventListener(h, d.proxyListener, f), b.splice(g, 1)) : e || (c.removeEventListener(h, d.proxyListener, f), b.splice(g, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var f = D(), g = arguments.length, a = Array(g), b = 0; b < g; b++) a[b] = arguments[b];
                    for (var h = a[0].split(" "), i = a[1], d = 0; d < h.length; d += 1)
                        for (var j = h[d], e = 0; e < this.length; e += 1) {
                            var c = this[e];
                            if (f.CustomEvent) {
                                var k = new f.CustomEvent(j, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                c.dom7EventData = a.filter(function(b, a) {
                                    return a > 0
                                }), c.dispatchEvent(k), c.dom7EventData = [], delete c.dom7EventData
                            }
                        }
                    return this
                },
                transitionEnd: function(a) {
                    var b = this;

                    function c(d) {
                        d.target === this && (a.call(this, d), b.off("transitionend", c))
                    }
                    return a && b.on("transitionend", c), this
                },
                outerWidth: function(b) {
                    if (this.length > 0) {
                        if (b) {
                            var a = this.styles();
                            return this[0].offsetWidth + parseFloat(a.getPropertyValue("margin-right")) + parseFloat(a.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(b) {
                    if (this.length > 0) {
                        if (b) {
                            var a = this.styles();
                            return this[0].offsetHeight + parseFloat(a.getPropertyValue("margin-top")) + parseFloat(a.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    var a = D();
                    return this[0] ? a.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        var b = D(),
                            e = B(),
                            a = this[0],
                            c = a.getBoundingClientRect(),
                            d = e.body,
                            f = a.clientTop || d.clientTop || 0,
                            g = a.clientLeft || d.clientLeft || 0,
                            h = a === b ? b.scrollY : a.scrollTop,
                            i = a === b ? b.scrollX : a.scrollLeft;
                        return {
                            top: c.top + h - f,
                            left: c.left + i - g
                        }
                    }
                    return null
                },
                css: function(b, d) {
                    var a, e = D();
                    if (1 === arguments.length) {
                        if ("string" == typeof b) {
                            if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(b)
                        } else {
                            for (a = 0; a < this.length; a += 1)
                                for (var c in b) this[a].style[c] = b[c];
                            return this
                        }
                    }
                    if (2 === arguments.length && "string" == typeof b)
                        for (a = 0; a < this.length; a += 1) this[a].style[b] = d;
                    return this
                },
                each: function(a) {
                    return a && this.forEach(function(b, c) {
                        a.apply(b, [b, c])
                    }), this
                },
                html: function(b) {
                    if (void 0 === b) return this[0] ? this[0].innerHTML : null;
                    for (var a = 0; a < this.length; a += 1) this[a].innerHTML = b;
                    return this
                },
                text: function(b) {
                    if (void 0 === b) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a += 1) this[a].textContent = b;
                    return this
                },
                is: function(a) {
                    var d, c, e = D(),
                        f = B(),
                        b = this[0];
                    if (!b || void 0 === a) return !1;
                    if ("string" == typeof a) {
                        if (b.matches) return b.matches(a);
                        if (b.webkitMatchesSelector) return b.webkitMatchesSelector(a);
                        if (b.msMatchesSelector) return b.msMatchesSelector(a);
                        for (c = 0, d = k(a); c < d.length; c += 1)
                            if (d[c] === b) return !0;
                        return !1
                    }
                    if (a === f) return b === f;
                    if (a === e) return b === e;
                    if (a.nodeType || a instanceof j) {
                        for (c = 0, d = a.nodeType ? [a] : a; c < d.length; c += 1)
                            if (d[c] === b) return !0
                    }
                    return !1
                },
                index: function() {
                    var b, a = this[0];
                    if (a) {
                        for (b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && (b += 1);
                        return b
                    }
                },
                eq: function(a) {
                    if (void 0 === a) return this;
                    var b = this.length;
                    if (a > b - 1) return k([]);
                    if (a < 0) {
                        var c = b + a;
                        return c < 0 ? k([]) : k([this[c]])
                    }
                    return k([this[a]])
                },
                append: function() {
                    for (var a, f = B(), b = 0; b < arguments.length; b += 1) {
                        a = b < 0 || arguments.length <= b ? void 0 : arguments[b];
                        for (var c = 0; c < this.length; c += 1)
                            if ("string" == typeof a) {
                                var d = f.createElement("div");
                                for (d.innerHTML = a; d.firstChild;) this[c].appendChild(d.firstChild)
                            } else if (a instanceof j)
                            for (var e = 0; e < a.length; e += 1) this[c].appendChild(a[e]);
                        else this[c].appendChild(a)
                    }
                    return this
                },
                prepend: function(c) {
                    var a, b, e = B();
                    for (a = 0; a < this.length; a += 1)
                        if ("string" == typeof c) {
                            var d = e.createElement("div");
                            for (d.innerHTML = c, b = d.childNodes.length - 1; b >= 0; b -= 1) this[a].insertBefore(d.childNodes[b], this[a].childNodes[0])
                        } else if (c instanceof j)
                        for (b = 0; b < c.length; b += 1) this[a].insertBefore(c[b], this[a].childNodes[0]);
                    else this[a].insertBefore(c, this[a].childNodes[0]);
                    return this
                },
                next: function(a) {
                    if (this.length > 0) {
                        if (a) return this[0].nextElementSibling && k(this[0].nextElementSibling).is(a) ? k([this[0].nextElementSibling]) : k([]);
                        if (this[0].nextElementSibling) return k([this[0].nextElementSibling])
                    }
                    return k([])
                },
                nextAll: function(d) {
                    var c = [],
                        a = this[0];
                    if (!a) return k([]);
                    for (; a.nextElementSibling;) {
                        var b = a.nextElementSibling;
                        d ? k(b).is(d) && c.push(b) : c.push(b), a = b
                    }
                    return k(c)
                },
                prev: function(b) {
                    if (this.length > 0) {
                        var a = this[0];
                        if (b) return a.previousElementSibling && k(a.previousElementSibling).is(b) ? k([a.previousElementSibling]) : k([]);
                        if (a.previousElementSibling) return k([a.previousElementSibling])
                    }
                    return k([])
                },
                prevAll: function(d) {
                    var c = [],
                        a = this[0];
                    if (!a) return k([]);
                    for (; a.previousElementSibling;) {
                        var b = a.previousElementSibling;
                        d ? k(b).is(d) && c.push(b) : c.push(b), a = b
                    }
                    return k(c)
                },
                parent: function(c) {
                    for (var b = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (c ? k(this[a].parentNode).is(c) && b.push(this[a].parentNode) : b.push(this[a].parentNode));
                    return k(b)
                },
                parents: function(d) {
                    for (var b = [], c = 0; c < this.length; c += 1)
                        for (var a = this[c].parentNode; a;) d ? k(a).is(d) && b.push(a) : b.push(a), a = a.parentNode;
                    return k(b)
                },
                closest: function(b) {
                    var a = this;
                    return void 0 === b ? k([]) : (a.is(b) || (a = a.parents(b).eq(0)), a)
                },
                find: function(e) {
                    for (var c = [], a = 0; a < this.length; a += 1)
                        for (var d = this[a].querySelectorAll(e), b = 0; b < d.length; b += 1) c.push(d[b]);
                    return k(c)
                },
                children: function(d) {
                    for (var e = [], b = 0; b < this.length; b += 1)
                        for (var c = this[b].children, a = 0; a < c.length; a += 1)(!d || k(c[a]).is(d)) && e.push(c[a]);
                    return k(e)
                },
                filter: function(a) {
                    var b = I(this, a);
                    return k(b)
                },
                remove: function() {
                    for (var a = 0; a < this.length; a += 1) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                    return this
                }
            };

            function J(b, a) {
                return void 0 === a && (a = 0), setTimeout(b, a)
            }

            function m() {
                return Date.now()
            }

            function K(a) {
                return "object" == typeof a && null !== a && a.constructor && "Object" === Object.prototype.toString.call(a).slice(8, -1)
            }

            function L(a) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)
            }

            function M() {
                for (var c = Object(arguments.length <= 0 ? void 0 : arguments[0]), i = ["__proto__", "constructor", "prototype"], d = 1; d < arguments.length; d += 1) {
                    var b = d < 0 || arguments.length <= d ? void 0 : arguments[d];
                    if (null != b && !L(b))
                        for (var f = Object.keys(Object(b)).filter(function(a) {
                                return 0 > i.indexOf(a)
                            }), e = 0, h = f.length; e < h; e += 1) {
                            var a = f[e],
                                g = Object.getOwnPropertyDescriptor(b, a);
                            void 0 !== g && g.enumerable && (K(c[a]) && K(b[a]) ? b[a].__swiper__ ? c[a] = b[a] : M(c[a], b[a]) : !K(c[a]) && K(b[a]) ? (c[a] = {}, b[a].__swiper__ ? c[a] = b[a] : M(c[a], b[a])) : c[a] = b[a])
                        }
                }
                return c
            }

            function N(b, a) {
                Object.keys(a).forEach(function(c) {
                    K(a[c]) && Object.keys(a[c]).forEach(function(d) {
                        "function" == typeof a[c][d] && (a[c][d] = a[c][d].bind(b))
                    }), b[c] = a[c]
                })
            }

            function O(a) {
                return void 0 === a && (a = ""), "." + a.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
            }

            function P(d, a, b, c) {
                var e = B();
                return b && Object.keys(c).forEach(function(b) {
                    if (!a[b] && !0 === a.auto) {
                        var f = e.createElement("div");
                        f.className = c[b], d.append(f), a[b] = f
                    }
                }), a
            }

            function Q() {
                if (!s) {
                    var a, b;
                    s = (a = D(), b = B(), {
                        touch: !!("ontouchstart" in a || a.DocumentTouch && b instanceof a.DocumentTouch),
                        pointerEvents: !!a.PointerEvent && "maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints >= 0,
                        observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
                        passiveListener: function() {
                            var b = !1;
                            try {
                                var c = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        b = !0
                                    }
                                });
                                a.addEventListener("testPassiveListener", null, c)
                            } catch (d) {}
                            return b
                        }(),
                        gestures: "ongesturestart" in a
                    })
                }
                return s
            }
            Object.keys(l).forEach(function(a) {
                Object.defineProperty(k.fn, a, {
                    value: l[a],
                    writable: !0
                })
            });

            function R() {
                return (R = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var S = {
                attach: function(d, a) {
                    void 0 === a && (a = {});
                    var b = D(),
                        e = this,
                        c = new(b.MutationObserver || b.WebkitMutationObserver)(function(a) {
                            if (1 === a.length) {
                                e.emit("observerUpdate", a[0]);
                                return
                            }
                            var c = function() {
                                e.emit("observerUpdate", a[0])
                            };
                            b.requestAnimationFrame ? b.requestAnimationFrame(c) : b.setTimeout(c, 0)
                        });
                    c.observe(d, {
                        attributes: void 0 === a.attributes || a.attributes,
                        childList: void 0 === a.childList || a.childList,
                        characterData: void 0 === a.characterData || a.characterData
                    }), e.observer.observers.push(c)
                },
                init: function() {
                    if (this.support.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var b = this.$el.parents(), a = 0; a < b.length; a += 1) this.observer.attach(b[a]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    var a = this;
                    a.observer.observers.forEach(function(a) {
                        a.disconnect()
                    }), a.observer.observers = []
                }
            };

            function T(g) {
                var c = this,
                    h = B(),
                    p = D(),
                    d = c.touchEventsData,
                    b = c.params,
                    f = c.touches;
                if (c.enabled && (!c.animating || !b.preventInteractionOnTransition)) {
                    var a = g;
                    a.originalEvent && (a = a.originalEvent);
                    var e = k(a.target);
                    if ("wrapper" !== b.touchEventsTarget || e.closest(c.wrapperEl).length) {
                        if (d.isTouchEvent = "touchstart" === a.type, (d.isTouchEvent || !("which" in a) || 3 !== a.which) && (d.isTouchEvent || !("button" in a) || !(a.button > 0)) && (!d.isTouched || !d.isMoved)) {
                            b.noSwipingClass && "" !== b.noSwipingClass && a.target && a.target.shadowRoot && g.path && g.path[0] && (e = k(g.path[0]));
                            var j = b.noSwipingSelector ? b.noSwipingSelector : "." + b.noSwipingClass,
                                q = !!(a.target && a.target.shadowRoot);
                            if (b.noSwiping && (q ? function(c, a) {
                                    function b(a) {
                                        return a && a !== B() && a !== D() ? (a.assignedSlot && (a = a.assignedSlot), a.closest(c) || b(a.getRootNode().host)) : null
                                    }
                                    return void 0 === a && (a = this), b(a)
                                }(j, a.target) : e.closest(j)[0])) {
                                c.allowClick = !0;
                                return
                            }
                            if (b.swipeHandler && !e.closest(b.swipeHandler)[0]) return;
                            f.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, f.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                            var i = f.currentX,
                                r = f.currentY,
                                l = b.edgeSwipeDetection || b.iOSEdgeSwipeDetection,
                                n = b.edgeSwipeThreshold || b.iOSEdgeSwipeThreshold;
                            if (l && (i <= n || i >= p.innerWidth - n)) {
                                if ("prevent" !== l) return;
                                g.preventDefault()
                            }
                            if (M(d, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), f.startX = i, f.startY = r, d.touchStartTime = m(), c.allowClick = !0, c.updateSize(), c.swipeDirection = void 0, b.threshold > 0 && (d.allowThresholdMove = !1), "touchstart" !== a.type) {
                                var o = !0;
                                e.is(d.focusableElements) && (o = !1), h.activeElement && k(h.activeElement).is(d.focusableElements) && h.activeElement !== e[0] && h.activeElement.blur();
                                var s = o && c.allowTouchMove && b.touchStartPreventDefault;
                                (b.touchStartForcePreventDefault || s) && !e[0].isContentEditable && a.preventDefault()
                            }
                            c.emit("touchStart", a)
                        }
                    }
                }
            }

            function U(r) {
                var l, p = B(),
                    a = this,
                    b = a.touchEventsData,
                    e = a.params,
                    c = a.touches,
                    s = a.rtlTranslate,
                    t = a.enabled;
                if (t) {
                    var d = r;
                    if (d.originalEvent && (d = d.originalEvent), !b.isTouched) {
                        b.startMoving && b.isScrolling && a.emit("touchMoveOpposite", d);
                        return
                    }
                    if (!b.isTouchEvent || "touchmove" === d.type) {
                        var q = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                            g = "touchmove" === d.type ? q.pageX : d.pageX,
                            h = "touchmove" === d.type ? q.pageY : d.pageY;
                        if (d.preventedByNestedSwiper) {
                            c.startX = g, c.startY = h;
                            return
                        }
                        if (!a.allowTouchMove) {
                            a.allowClick = !1, b.isTouched && (M(c, {
                                startX: g,
                                startY: h,
                                currentX: g,
                                currentY: h
                            }), b.touchStartTime = m());
                            return
                        }
                        if (b.isTouchEvent && e.touchReleaseOnEdges && !e.loop) {
                            if (a.isVertical()) {
                                if (h < c.startY && a.translate <= a.maxTranslate() || h > c.startY && a.translate >= a.minTranslate()) {
                                    b.isTouched = !1, b.isMoved = !1;
                                    return
                                }
                            } else if (g < c.startX && a.translate <= a.maxTranslate() || g > c.startX && a.translate >= a.minTranslate()) return
                        }
                        if (b.isTouchEvent && p.activeElement && d.target === p.activeElement && k(d.target).is(b.focusableElements)) {
                            b.isMoved = !0, a.allowClick = !1;
                            return
                        }
                        if (b.allowTouchCallbacks && a.emit("touchMove", d), !d.targetTouches || !(d.targetTouches.length > 1)) {
                            c.currentX = g, c.currentY = h;
                            var i = c.currentX - c.startX,
                                j = c.currentY - c.startY;
                            if (!(a.params.threshold && Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2)) < a.params.threshold)) {
                                if (void 0 === b.isScrolling && (a.isHorizontal() && c.currentY === c.startY || a.isVertical() && c.currentX === c.startX ? b.isScrolling = !1 : i * i + j * j >= 25 && (l = 180 * Math.atan2(Math.abs(j), Math.abs(i)) / Math.PI, b.isScrolling = a.isHorizontal() ? l > e.touchAngle : 90 - l > e.touchAngle)), b.isScrolling && a.emit("touchMoveOpposite", d), void 0 === b.startMoving && (c.currentX !== c.startX || c.currentY !== c.startY) && (b.startMoving = !0), b.isScrolling) {
                                    b.isTouched = !1;
                                    return
                                }
                                if (b.startMoving) {
                                    a.allowClick = !1, !e.cssMode && d.cancelable && d.preventDefault(), e.touchMoveStopPropagation && !e.nested && d.stopPropagation(), b.isMoved || (e.loop && a.loopFix(), b.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), b.allowMomentumBounce = !1, e.grabCursor && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!0), a.emit("sliderFirstMove", d)), a.emit("sliderMove", d), b.isMoved = !0;
                                    var f = a.isHorizontal() ? i : j;
                                    c.diff = f, f *= e.touchRatio, s && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", b.currentTranslate = f + b.startTranslate;
                                    var n = !0,
                                        o = e.resistanceRatio;
                                    if (e.touchReleaseOnEdges && (o = 0), f > 0 && b.currentTranslate > a.minTranslate() ? (n = !1, e.resistance && (b.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + b.startTranslate + f, o))) : f < 0 && b.currentTranslate < a.maxTranslate() && (n = !1, e.resistance && (b.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - b.startTranslate - f, o))), n && (d.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && b.currentTranslate < b.startTranslate && (b.currentTranslate = b.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && b.currentTranslate > b.startTranslate && (b.currentTranslate = b.startTranslate), a.allowSlidePrev || a.allowSlideNext || (b.currentTranslate = b.startTranslate), e.threshold > 0) {
                                        if (Math.abs(f) > e.threshold || b.allowThresholdMove) {
                                            if (!b.allowThresholdMove) {
                                                b.allowThresholdMove = !0, c.startX = c.currentX, c.startY = c.currentY, b.currentTranslate = b.startTranslate, c.diff = a.isHorizontal() ? c.currentX - c.startX : c.currentY - c.startY;
                                                return
                                            }
                                        } else {
                                            b.currentTranslate = b.startTranslate;
                                            return
                                        }
                                    }
                                    e.followFinger && !e.cssMode && ((e.freeMode || e.watchSlidesProgress || e.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), e.freeMode && (0 === b.velocities.length && b.velocities.push({
                                        position: c[a.isHorizontal() ? "startX" : "startY"],
                                        time: b.touchStartTime
                                    }), b.velocities.push({
                                        position: c[a.isHorizontal() ? "currentX" : "currentY"],
                                        time: m()
                                    })), a.updateProgress(b.currentTranslate), a.setTranslate(b.currentTranslate))
                                }
                            }
                        }
                    }
                }
            }

            function V(F) {
                var a = this,
                    c = a.touchEventsData,
                    b = a.params,
                    G = a.touches,
                    l = a.rtlTranslate,
                    y = a.$wrapperEl,
                    e = a.slidesGrid,
                    i = a.snapGrid,
                    H = a.enabled;
                if (H) {
                    var h = F;
                    if (h.originalEvent && (h = h.originalEvent), c.allowTouchCallbacks && a.emit("touchEnd", h), c.allowTouchCallbacks = !1, !c.isTouched) {
                        c.isMoved && b.grabCursor && a.setGrabCursor(!1), c.isMoved = !1, c.startMoving = !1;
                        return
                    }
                    b.grabCursor && c.isMoved && c.isTouched && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!1);
                    var z = m(),
                        r = z - c.touchStartTime;
                    if (a.allowClick && (a.updateClickedSlide(h), a.emit("tap click", h), r < 300 && z - c.lastClickTime < 300 && a.emit("doubleTap doubleClick", h)), c.lastClickTime = m(), J(function() {
                            a.destroyed || (a.allowClick = !0)
                        }), !c.isTouched || !c.isMoved || !a.swipeDirection || 0 === G.diff || c.currentTranslate === c.startTranslate) {
                        c.isTouched = !1, c.isMoved = !1, c.startMoving = !1;
                        return
                    }
                    if (c.isTouched = !1, c.isMoved = !1, c.startMoving = !1, n = b.followFinger ? l ? a.translate : -a.translate : -c.currentTranslate, b.cssMode) return;
                    if (b.freeMode) {
                        if (n < -a.minTranslate()) {
                            a.slideTo(a.activeIndex);
                            return
                        }
                        if (n > -a.maxTranslate()) {
                            a.slides.length < i.length ? a.slideTo(i.length - 1) : a.slideTo(a.slides.length - 1);
                            return
                        }
                        if (b.freeModeMomentum) {
                            if (c.velocities.length > 1) {
                                var n, s, t, j, u = c.velocities.pop(),
                                    A = c.velocities.pop(),
                                    I = u.position - A.position,
                                    B = u.time - A.time;
                                a.velocity = I / B, a.velocity /= 2, Math.abs(a.velocity) < b.freeModeMinimumVelocity && (a.velocity = 0), (B > 150 || m() - u.time > 300) && (a.velocity = 0)
                            } else a.velocity = 0;
                            a.velocity *= b.freeModeMomentumVelocityRatio, c.velocities.length = 0;
                            var k = 1e3 * b.freeModeMomentumRatio,
                                K = a.velocity * k,
                                d = a.translate + K;
                            l && (d = -d);
                            var v = !1,
                                o = 20 * Math.abs(a.velocity) * b.freeModeMomentumBounceRatio;
                            if (d < a.maxTranslate()) b.freeModeMomentumBounce ? (d + a.maxTranslate() < -o && (d = a.maxTranslate() - o), s = a.maxTranslate(), v = !0, c.allowMomentumBounce = !0) : d = a.maxTranslate(), b.loop && b.centeredSlides && (t = !0);
                            else if (d > a.minTranslate()) b.freeModeMomentumBounce ? (d - a.minTranslate() > o && (d = a.minTranslate() + o), s = a.minTranslate(), v = !0, c.allowMomentumBounce = !0) : d = a.minTranslate(), b.loop && b.centeredSlides && (t = !0);
                            else if (b.freeModeSticky) {
                                for (var p = 0; p < i.length; p += 1)
                                    if (i[p] > -d) {
                                        j = p;
                                        break
                                    }
                                d = -(d = Math.abs(i[j] - d) < Math.abs(i[j - 1] - d) || "next" === a.swipeDirection ? i[j] : i[j - 1])
                            }
                            if (t && a.once("transitionEnd", function() {
                                    a.loopFix()
                                }), 0 !== a.velocity) {
                                if (k = l ? Math.abs((-d - a.translate) / a.velocity) : Math.abs((d - a.translate) / a.velocity), b.freeModeSticky) {
                                    var C = Math.abs((l ? -d : d) - a.translate),
                                        D = a.slidesSizesGrid[a.activeIndex];
                                    k = C < D ? b.speed : C < 2 * D ? 1.5 * b.speed : 2.5 * b.speed
                                }
                            } else if (b.freeModeSticky) {
                                a.slideToClosest();
                                return
                            }
                            b.freeModeMomentumBounce && v ? (a.updateProgress(s), a.setTransition(k), a.setTranslate(d), a.transitionStart(!0, a.swipeDirection), a.animating = !0, y.transitionEnd(function() {
                                a && !a.destroyed && c.allowMomentumBounce && (a.emit("momentumBounce"), a.setTransition(b.speed), setTimeout(function() {
                                    a.setTranslate(s), y.transitionEnd(function() {
                                        a && !a.destroyed && a.transitionEnd()
                                    })
                                }, 0))
                            })) : a.velocity ? (a.updateProgress(d), a.setTransition(k), a.setTranslate(d), a.transitionStart(!0, a.swipeDirection), a.animating || (a.animating = !0, y.transitionEnd(function() {
                                a && !a.destroyed && a.transitionEnd()
                            }))) : (a.emit("_freeModeNoMomentumRelease"), a.updateProgress(d)), a.updateActiveIndex(), a.updateSlidesClasses()
                        } else if (b.freeModeSticky) {
                            a.slideToClosest();
                            return
                        } else b.freeMode && a.emit("_freeModeNoMomentumRelease");
                        (!b.freeModeMomentum || r >= b.longSwipesMs) && (a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses());
                        return
                    }
                    for (var f = 0, w = a.slidesSizesGrid[0], g = 0; g < e.length; g += g < b.slidesPerGroupSkip ? 1 : b.slidesPerGroup) {
                        var x = g < b.slidesPerGroupSkip - 1 ? 1 : b.slidesPerGroup;
                        void 0 !== e[g + x] ? n >= e[g] && n < e[g + x] && (f = g, w = e[g + x] - e[g]) : n >= e[g] && (f = g, w = e[e.length - 1] - e[e.length - 2])
                    }
                    var E = (n - e[f]) / w,
                        q = f < b.slidesPerGroupSkip - 1 ? 1 : b.slidesPerGroup;
                    if (r > b.longSwipesMs) {
                        if (!b.longSwipes) {
                            a.slideTo(a.activeIndex);
                            return
                        }
                        "next" === a.swipeDirection && (E >= b.longSwipesRatio ? a.slideTo(f + q) : a.slideTo(f)), "prev" === a.swipeDirection && (E > 1 - b.longSwipesRatio ? a.slideTo(f + q) : a.slideTo(f))
                    } else {
                        if (!b.shortSwipes) {
                            a.slideTo(a.activeIndex);
                            return
                        }
                        a.navigation && (h.target === a.navigation.nextEl || h.target === a.navigation.prevEl) ? h.target === a.navigation.nextEl ? a.slideTo(f + q) : a.slideTo(f) : ("next" === a.swipeDirection && a.slideTo(f + q), "prev" === a.swipeDirection && a.slideTo(f))
                    }
                }
            }

            function W() {
                var a = this,
                    b = a.params,
                    c = a.el;
                if (!c || 0 !== c.offsetWidth) {
                    b.breakpoints && a.setBreakpoint();
                    var d = a.allowSlideNext,
                        e = a.allowSlidePrev,
                        f = a.snapGrid;
                    a.allowSlideNext = !0, a.allowSlidePrev = !0, a.updateSize(), a.updateSlides(), a.updateSlidesClasses(), ("auto" === b.slidesPerView || b.slidesPerView > 1) && a.isEnd && !a.isBeginning && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0), a.autoplay && a.autoplay.running && a.autoplay.paused && a.autoplay.run(), a.allowSlidePrev = e, a.allowSlideNext = d, a.params.watchOverflow && f !== a.snapGrid && a.checkOverflow()
                }
            }

            function X(a) {
                this.enabled && !this.allowClick && (this.params.preventClicks && a.preventDefault(), this.params.preventClicksPropagation && this.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
            }

            function Y() {
                var e, a = this,
                    b = a.wrapperEl,
                    c = a.rtlTranslate;
                if (a.enabled) {
                    a.previousTranslate = a.translate, a.isHorizontal() ? c ? a.translate = b.scrollWidth - b.offsetWidth - b.scrollLeft : a.translate = -b.scrollLeft : a.translate = -b.scrollTop, -0 === a.translate && (a.translate = 0), a.updateActiveIndex(), a.updateSlidesClasses();
                    var d = a.maxTranslate() - a.minTranslate();
                    (0 === d ? 0 : (a.translate - a.minTranslate()) / d) !== a.progress && a.updateProgress(c ? -a.translate : a.translate), a.emit("setTranslate", a.translate, !1)
                }
            }
            var Z = !1;

            function $() {}
            var _ = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !1,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function aa(d, c) {
                for (var b = 0; b < c.length; b++) {
                    var a = c[b];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(d, a.key, a)
                }
            }
            var n = {
                    modular: {
                        useParams: function(b) {
                            var a = this;
                            a.modules && Object.keys(a.modules).forEach(function(d) {
                                var c = a.modules[d];
                                c.params && M(b, c.params)
                            })
                        },
                        useModules: function(a) {
                            void 0 === a && (a = {});
                            var b = this;
                            b.modules && Object.keys(b.modules).forEach(function(d) {
                                var c = b.modules[d],
                                    e = a[d] || {};
                                c.on && b.on && Object.keys(c.on).forEach(function(a) {
                                    b.on(a, c.on[a])
                                }), c.create && c.create.bind(b)(e)
                            })
                        }
                    },
                    eventsEmitter: {
                        on: function(b, c, d) {
                            var a = this;
                            if ("function" != typeof c) return a;
                            var e = d ? "unshift" : "push";
                            return b.split(" ").forEach(function(b) {
                                a.eventsListeners[b] || (a.eventsListeners[b] = []), a.eventsListeners[b][e](c)
                            }), a
                        },
                        once: function(d, a, e) {
                            var b = this;
                            if ("function" != typeof a) return b;

                            function c() {
                                b.off(d, c), c.__emitterProxy && delete c.__emitterProxy;
                                for (var f = arguments.length, g = Array(f), e = 0; e < f; e++) g[e] = arguments[e];
                                a.apply(b, g)
                            }
                            return c.__emitterProxy = a, b.on(d, c, e)
                        },
                        onAny: function(a, b) {
                            if ("function" != typeof a) return this;
                            var c = b ? "unshift" : "push";
                            return 0 > this.eventsAnyListeners.indexOf(a) && this.eventsAnyListeners[c](a), this
                        },
                        offAny: function(b) {
                            if (!this.eventsAnyListeners) return this;
                            var a = this.eventsAnyListeners.indexOf(b);
                            return a >= 0 && this.eventsAnyListeners.splice(a, 1), this
                        },
                        off: function(b, c) {
                            var a = this;
                            return a.eventsListeners && b.split(" ").forEach(function(b) {
                                void 0 === c ? a.eventsListeners[b] = [] : a.eventsListeners[b] && a.eventsListeners[b].forEach(function(d, e) {
                                    (d === c || d.__emitterProxy && d.__emitterProxy === c) && a.eventsListeners[b].splice(e, 1)
                                })
                            }), a
                        },
                        emit: function() {
                            var b, e, f, c = this;
                            if (!c.eventsListeners) return c;
                            for (var g = arguments.length, a = Array(g), d = 0; d < g; d++) a[d] = arguments[d];
                            return "string" == typeof a[0] || Array.isArray(a[0]) ? (b = a[0], e = a.slice(1, a.length), f = c) : (b = a[0].events, e = a[0].data, f = a[0].context || c), e.unshift(f), (Array.isArray(b) ? b : b.split(" ")).forEach(function(a) {
                                c.eventsAnyListeners && c.eventsAnyListeners.length && c.eventsAnyListeners.forEach(function(b) {
                                    b.apply(f, [a].concat(e))
                                }), c.eventsListeners && c.eventsListeners[a] && c.eventsListeners[a].forEach(function(a) {
                                    a.apply(f, e)
                                })
                            }), c
                        }
                    },
                    update: {
                        updateSize: function() {
                            var a, b, c = this.$el;
                            a = void 0 !== this.params.width && null !== this.params.width ? this.params.width : c[0].clientWidth, b = void 0 !== this.params.height && null !== this.params.height ? this.params.height : c[0].clientHeight, !(0 === a && this.isHorizontal() || 0 === b && this.isVertical()) && (a = a - parseInt(c.css("padding-left") || 0, 10) - parseInt(c.css("padding-right") || 0, 10), b = b - parseInt(c.css("padding-top") || 0, 10) - parseInt(c.css("padding-bottom") || 0, 10), Number.isNaN(a) && (a = 0), Number.isNaN(b) && (b = 0), M(this, {
                                width: a,
                                height: b,
                                size: this.isHorizontal() ? a : b
                            }))
                        },
                        updateSlides: function() {
                            var b = this;

                            function p(a) {
                                return b.isHorizontal() ? a : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[a]
                            }

                            function q(a, b) {
                                return parseFloat(a.getPropertyValue(p(b)) || 0)
                            }
                            var a = b.params,
                                s = b.$wrapperEl,
                                g = b.size,
                                y = b.rtlTranslate,
                                T = b.wrongRTL,
                                G = b.virtual && a.virtual.enabled,
                                U = G ? b.virtual.slides.length : b.slides.length,
                                i = s.children("." + b.params.slideClass),
                                k = G ? b.virtual.slides.length : i.length,
                                c = [],
                                r = [],
                                t = [],
                                z = a.slidesOffsetBefore;
                            "function" == typeof z && (z = a.slidesOffsetBefore.call(b));
                            var A = a.slidesOffsetAfter;
                            "function" == typeof A && (A = a.slidesOffsetAfter.call(b));
                            var V = b.snapGrid.length,
                                W = b.slidesGrid.length,
                                h = a.spaceBetween,
                                d = -z,
                                B = 0,
                                u = 0;
                            if (void 0 !== g) {
                                "string" == typeof h && h.indexOf("%") >= 0 && (h = parseFloat(h.replace("%", "")) / 100 * g), b.virtualSize = -h, y ? i.css({
                                    marginLeft: "",
                                    marginBottom: "",
                                    marginTop: ""
                                }) : i.css({
                                    marginRight: "",
                                    marginBottom: "",
                                    marginTop: ""
                                }), a.slidesPerColumn > 1 && (ab = Math.floor(k / a.slidesPerColumn) === k / b.params.slidesPerColumn ? k : Math.ceil(k / a.slidesPerColumn) * a.slidesPerColumn, "auto" !== a.slidesPerView && "row" === a.slidesPerColumnFill && (ab = Math.max(ab, a.slidesPerView * a.slidesPerColumn)));
                                for (var l = a.slidesPerColumn, H = ab / l, I = Math.floor(k / a.slidesPerColumn), e = 0; e < k; e += 1) {
                                    ac = 0;
                                    var f = i.eq(e);
                                    if (a.slidesPerColumn > 1) {
                                        var n = void 0,
                                            m = void 0,
                                            j = void 0;
                                        if ("row" === a.slidesPerColumnFill && a.slidesPerGroup > 1) {
                                            var v = Math.floor(e / (a.slidesPerGroup * a.slidesPerColumn)),
                                                J = e - a.slidesPerColumn * a.slidesPerGroup * v,
                                                K = 0 === v ? a.slidesPerGroup : Math.min(Math.ceil((k - v * l * a.slidesPerGroup) / l), a.slidesPerGroup);
                                            j = Math.floor(J / K), m = J - j * K + v * a.slidesPerGroup, n = m + j * ab / l, f.css({
                                                "-webkit-box-ordinal-group": n,
                                                "-moz-box-ordinal-group": n,
                                                "-ms-flex-order": n,
                                                "-webkit-order": n,
                                                order: n
                                            })
                                        } else "column" === a.slidesPerColumnFill ? (m = Math.floor(e / l), j = e - m * l, (m > I || m === I && j === l - 1) && (j += 1) >= l && (j = 0, m += 1)) : (j = Math.floor(e / H), m = e - j * H);
                                        f.css(p("margin-top"), 0 !== j ? a.spaceBetween && a.spaceBetween + "px" : "")
                                    }
                                    if ("none" !== f.css("display")) {
                                        if ("auto" === a.slidesPerView) {
                                            var o = getComputedStyle(f[0]),
                                                C = f[0].style.transform,
                                                D = f[0].style.webkitTransform;
                                            if (C && (f[0].style.transform = "none"), D && (f[0].style.webkitTransform = "none"), a.roundLengths) ac = b.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0);
                                            else {
                                                var L = q(o, "width"),
                                                    X = q(o, "padding-left"),
                                                    Y = q(o, "padding-right"),
                                                    N = q(o, "margin-left"),
                                                    O = q(o, "margin-right"),
                                                    P = o.getPropertyValue("box-sizing");
                                                if (P && "border-box" === P) ac = L + N + O;
                                                else {
                                                    var Q = f[0],
                                                        Z = Q.clientWidth,
                                                        $ = Q.offsetWidth;
                                                    ac = L + X + Y + N + O + ($ - Z)
                                                }
                                            }
                                            C && (f[0].style.transform = C), D && (f[0].style.webkitTransform = D), a.roundLengths && (ac = Math.floor(ac))
                                        } else ac = (g - (a.slidesPerView - 1) * h) / a.slidesPerView, a.roundLengths && (ac = Math.floor(ac)), i[e] && (i[e].style[p("width")] = ac + "px");
                                        i[e] && (i[e].swiperSlideSize = ac), t.push(ac), a.centeredSlides ? (d = d + ac / 2 + B / 2 + h, 0 === B && 0 !== e && (d = d - g / 2 - h), 0 === e && (d = d - g / 2 - h), .001 > Math.abs(d) && (d = 0), a.roundLengths && (d = Math.floor(d)), u % a.slidesPerGroup == 0 && c.push(d), r.push(d)) : (a.roundLengths && (d = Math.floor(d)), (u - Math.min(b.params.slidesPerGroupSkip, u)) % b.params.slidesPerGroup == 0 && c.push(d), r.push(d), d = d + ac + h), b.virtualSize += ac + h, B = ac, u += 1
                                    }
                                }
                                if (b.virtualSize = Math.max(b.virtualSize, g) + A, y && T && ("slide" === a.effect || "coverflow" === a.effect) && s.css({
                                        width: b.virtualSize + a.spaceBetween + "px"
                                    }), a.setWrapperSize && s.css(((ae = {})[p("width")] = b.virtualSize + a.spaceBetween + "px", ae)), a.slidesPerColumn > 1 && (b.virtualSize = (ac + a.spaceBetween) * ab, b.virtualSize = Math.ceil(b.virtualSize / a.slidesPerColumn) - a.spaceBetween, s.css(((af = {})[p("width")] = b.virtualSize + a.spaceBetween + "px", af)), a.centeredSlides)) {
                                    ad = [];
                                    for (var w = 0; w < c.length; w += 1) {
                                        var E = c[w];
                                        a.roundLengths && (E = Math.floor(E)), c[w] < b.virtualSize + c[0] && ad.push(E)
                                    }
                                    c = ad
                                }
                                if (!a.centeredSlides) {
                                    ad = [];
                                    for (var x = 0; x < c.length; x += 1) {
                                        var F = c[x];
                                        a.roundLengths && (F = Math.floor(F)), c[x] <= b.virtualSize - g && ad.push(F)
                                    }
                                    c = ad, Math.floor(b.virtualSize - g) - Math.floor(c[c.length - 1]) > 1 && c.push(b.virtualSize - g)
                                }
                                if (0 === c.length && (c = [0]), 0 !== a.spaceBetween) {
                                    var ab, ac, ad, ae, af, R, _ = b.isHorizontal() && y ? "marginLeft" : p("marginRight");
                                    i.filter(function(c, b) {
                                        return !a.cssMode || b !== i.length - 1
                                    }).css(((R = {})[_] = h + "px", R))
                                }
                                if (a.centeredSlides && a.centeredSlidesBounds) {
                                    var aa = 0;
                                    t.forEach(function(b) {
                                        aa += b + (a.spaceBetween ? a.spaceBetween : 0)
                                    });
                                    var ag = (aa -= a.spaceBetween) - g;
                                    c = c.map(function(a) {
                                        return a < 0 ? -z : a > ag ? ag + A : a
                                    })
                                }
                                if (a.centerInsufficientSlides) {
                                    var S = 0;
                                    if (t.forEach(function(b) {
                                            S += b + (a.spaceBetween ? a.spaceBetween : 0)
                                        }), (S -= a.spaceBetween) < g) {
                                        var ah = (g - S) / 2;
                                        c.forEach(function(a, b) {
                                            c[b] = a - ah
                                        }), r.forEach(function(a, b) {
                                            r[b] = a + ah
                                        })
                                    }
                                }
                                M(b, {
                                    slides: i,
                                    snapGrid: c,
                                    slidesGrid: r,
                                    slidesSizesGrid: t
                                }), k !== U && b.emit("slidesLengthChange"), c.length !== V && (b.params.watchOverflow && b.checkOverflow(), b.emit("snapGridLengthChange")), r.length !== W && b.emit("slidesGridLengthChange"), (a.watchSlidesProgress || a.watchSlidesVisibility) && b.updateSlidesOffset()
                            }
                        },
                        updateAutoHeight: function(e) {
                            var b, a = this,
                                c = [],
                                i = a.virtual && a.params.virtual.enabled,
                                d = 0;
                            "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);
                            var f = function(b) {
                                return i ? a.slides.filter(function(a) {
                                    return parseInt(a.getAttribute("data-swiper-slide-index"), 10) === b
                                })[0] : a.slides.eq(b)[0]
                            };
                            if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
                                if (a.params.centeredSlides) a.visibleSlides.each(function(a) {
                                    c.push(a)
                                });
                                else
                                    for (b = 0; b < Math.ceil(a.params.slidesPerView); b += 1) {
                                        var g = a.activeIndex + b;
                                        if (g > a.slides.length && !i) break;
                                        c.push(f(g))
                                    }
                            } else c.push(f(a.activeIndex));
                            for (b = 0; b < c.length; b += 1)
                                if (void 0 !== c[b]) {
                                    var h = c[b].offsetHeight;
                                    d = h > d ? h : d
                                }
                            d && a.$wrapperEl.css("height", d + "px")
                        },
                        updateSlidesOffset: function() {
                            for (var b = this.slides, a = 0; a < b.length; a += 1) b[a].swiperSlideOffset = this.isHorizontal() ? b[a].offsetLeft : b[a].offsetTop
                        },
                        updateSlidesProgress: function(f) {
                            void 0 === f && (f = this && this.translate || 0);
                            var a = this,
                                b = a.params,
                                c = a.slides,
                                j = a.rtlTranslate;
                            if (0 !== c.length) {
                                void 0 === c[0].swiperSlideOffset && a.updateSlidesOffset();
                                var h = -f;
                                j && (h = f), c.removeClass(b.slideVisibleClass), a.visibleSlidesIndexes = [], a.visibleSlides = [];
                                for (var d = 0; d < c.length; d += 1) {
                                    var e = c[d],
                                        l = (h + (b.centeredSlides ? a.minTranslate() : 0) - e.swiperSlideOffset) / (e.swiperSlideSize + b.spaceBetween);
                                    if (b.watchSlidesVisibility || b.centeredSlides && b.autoHeight) {
                                        var g = -(h - e.swiperSlideOffset),
                                            i = g + a.slidesSizesGrid[d];
                                        (g >= 0 && g < a.size - 1 || i > 1 && i <= a.size || g <= 0 && i >= a.size) && (a.visibleSlides.push(e), a.visibleSlidesIndexes.push(d), c.eq(d).addClass(b.slideVisibleClass))
                                    }
                                    e.progress = j ? -l : l
                                }
                                a.visibleSlides = k(a.visibleSlides)
                            }
                        },
                        updateProgress: function(d) {
                            if (void 0 === d) {
                                var i = this.rtlTranslate ? -1 : 1;
                                d = this && this.translate && this.translate * i || 0
                            }
                            var e = this.params,
                                f = this.maxTranslate() - this.minTranslate(),
                                c = this.progress,
                                a = this.isBeginning,
                                b = this.isEnd,
                                g = a,
                                h = b;
                            0 === f ? (c = 0, a = !0, b = !0) : (a = (c = (d - this.minTranslate()) / f) <= 0, b = c >= 1), M(this, {
                                progress: c,
                                isBeginning: a,
                                isEnd: b
                            }), (e.watchSlidesProgress || e.watchSlidesVisibility || e.centeredSlides && e.autoHeight) && this.updateSlidesProgress(d), a && !g && this.emit("reachBeginning toEdge"), b && !h && this.emit("reachEnd toEdge"), (g && !a || h && !b) && this.emit("fromEdge"), this.emit("progress", c)
                        },
                        updateSlidesClasses: function() {
                            var e, f = this.slides,
                                a = this.params,
                                b = this.$wrapperEl,
                                g = this.activeIndex,
                                h = this.realIndex,
                                i = this.virtual && a.virtual.enabled;
                            f.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass), (e = i ? this.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + g + '"]') : f.eq(g)).addClass(a.slideActiveClass), a.loop && (e.hasClass(a.slideDuplicateClass) ? b.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + h + '"]').addClass(a.slideDuplicateActiveClass) : b.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + h + '"]').addClass(a.slideDuplicateActiveClass));
                            var c = e.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
                            a.loop && 0 === c.length && (c = f.eq(0)).addClass(a.slideNextClass);
                            var d = e.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
                            a.loop && 0 === d.length && (d = f.eq(-1)).addClass(a.slidePrevClass), a.loop && (c.hasClass(a.slideDuplicateClass) ? b.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass) : b.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass), d.hasClass(a.slideDuplicateClass) ? b.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass) : b.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(l) {
                            var e, a = this,
                                f = a.rtlTranslate ? a.translate : -a.translate,
                                d = a.slidesGrid,
                                g = a.snapGrid,
                                h = a.params,
                                i = a.activeIndex,
                                m = a.realIndex,
                                n = a.snapIndex,
                                b = l;
                            if (void 0 === b) {
                                for (var c = 0; c < d.length; c += 1) void 0 !== d[c + 1] ? f >= d[c] && f < d[c + 1] - (d[c + 1] - d[c]) / 2 ? b = c : f >= d[c] && f < d[c + 1] && (b = c + 1) : f >= d[c] && (b = c);
                                h.normalizeSlideIndex && (b < 0 || void 0 === b) && (b = 0)
                            }
                            if (g.indexOf(f) >= 0) e = g.indexOf(f);
                            else {
                                var j = Math.min(h.slidesPerGroupSkip, b);
                                e = j + Math.floor((b - j) / h.slidesPerGroup)
                            }
                            if (e >= g.length && (e = g.length - 1), b === i) {
                                e !== n && (a.snapIndex = e, a.emit("snapIndexChange"));
                                return
                            }
                            var k = parseInt(a.slides.eq(b).attr("data-swiper-slide-index") || b, 10);
                            M(a, {
                                snapIndex: e,
                                realIndex: k,
                                previousIndex: i,
                                activeIndex: b
                            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), m !== k && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange")
                        },
                        updateClickedSlide: function(g) {
                            var d, a = this,
                                e = a.params,
                                b = k(g.target).closest("." + e.slideClass)[0],
                                f = !1;
                            if (b) {
                                for (var c = 0; c < a.slides.length; c += 1)
                                    if (a.slides[c] === b) {
                                        f = !0, d = c;
                                        break
                                    }
                            }
                            if (b && f) a.clickedSlide = b, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(k(b).attr("data-swiper-slide-index"), 10) : a.clickedIndex = d;
                            else {
                                a.clickedSlide = void 0, a.clickedIndex = void 0;
                                return
                            }
                            e.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(j) {
                            void 0 === j && (j = this.isHorizontal() ? "x" : "y");
                            var g = this,
                                m = g.params,
                                n = g.rtlTranslate,
                                k = g.translate,
                                q = g.$wrapperEl;
                            if (m.virtualTranslate) return n ? -k : k;
                            if (m.cssMode) return k;
                            var o, h, c, b, i, e, f, d, p, a, l = (o = q[0], void 0 === (h = j) && (h = "x"), e = D(), a = (f = o, (p = D()).getComputedStyle && (d = p.getComputedStyle(f, null)), !d && f.currentStyle && (d = f.currentStyle), d || (d = f.style), d), e.WebKitCSSMatrix ? ((b = a.transform || a.webkitTransform).split(",").length > 6 && (b = b.split(", ").map(function(a) {
                                return a.replace(",", ".")
                            }).join(", ")), i = new e.WebKitCSSMatrix("none" === b ? "" : b)) : c = (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === h && (b = e.WebKitCSSMatrix ? i.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === h && (b = e.WebKitCSSMatrix ? i.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), b || 0);
                            return n && (l = -l), l || 0
                        },
                        setTranslate: function(d, g) {
                            var l, a = this,
                                h = a.rtlTranslate,
                                e = a.params,
                                i = a.$wrapperEl,
                                j = a.wrapperEl,
                                k = a.progress,
                                b = 0,
                                c = 0;
                            a.isHorizontal() ? b = h ? -d : d : c = d, e.roundLengths && (b = Math.floor(b), c = Math.floor(c)), e.cssMode ? j[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -b : -c : e.virtualTranslate || i.transform("translate3d(" + b + "px, " + c + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? b : c;
                            var f = a.maxTranslate() - a.minTranslate();
                            (0 === f ? 0 : (d - a.minTranslate()) / f) !== k && a.updateProgress(d), a.emit("setTranslate", a.translate, g)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(c, b, e, f, j) {
                            void 0 === c && (c = 0), void 0 === b && (b = this.params.speed), void 0 === e && (e = !0), void 0 === f && (f = !0);
                            var a = this,
                                k = a.params,
                                g = a.wrapperEl;
                            if (a.animating && k.preventInteractionOnTransition) return !1;
                            var l = a.minTranslate(),
                                m = a.maxTranslate();
                            if (d = f && c > l ? l : f && c < m ? m : c, a.updateProgress(d), k.cssMode) {
                                var d, h, i = a.isHorizontal();
                                return 0 === b ? g[i ? "scrollLeft" : "scrollTop"] = -d : g.scrollTo ? g.scrollTo(((h = {})[i ? "left" : "top"] = -d, h.behavior = "smooth", h)) : g[i ? "scrollLeft" : "scrollTop"] = -d, !0
                            }
                            return 0 === b ? (a.setTransition(0), a.setTranslate(d), e && (a.emit("beforeTransitionStart", b, j), a.emit("transitionEnd"))) : (a.setTransition(b), a.setTranslate(d), e && (a.emit("beforeTransitionStart", b, j), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(b) {
                                a && !a.destroyed && b.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, e && a.emit("transitionEnd"))
                            }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(a, b) {
                            this.params.cssMode || this.$wrapperEl.transition(a), this.emit("setTransition", a, b)
                        },
                        transitionStart: function(b, f) {
                            void 0 === b && (b = !0);
                            var c = this.activeIndex,
                                e = this.params,
                                d = this.previousIndex;
                            if (!e.cssMode) {
                                e.autoHeight && this.updateAutoHeight();
                                var a = f;
                                if (a || (a = c > d ? "next" : c < d ? "prev" : "reset"), this.emit("transitionStart"), b && c !== d) {
                                    if ("reset" === a) {
                                        this.emit("slideResetTransitionStart");
                                        return
                                    }
                                    this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                                }
                            }
                        },
                        transitionEnd: function(c, f) {
                            void 0 === c && (c = !0);
                            var a = this,
                                d = a.activeIndex,
                                e = a.previousIndex,
                                g = a.params;
                            if (a.animating = !1, !g.cssMode) {
                                a.setTransition(0);
                                var b = f;
                                if (b || (b = d > e ? "next" : d < e ? "prev" : "reset"), a.emit("transitionEnd"), c && d !== e) {
                                    if ("reset" === b) {
                                        a.emit("slideResetTransitionEnd");
                                        return
                                    }
                                    a.emit("slideChangeTransitionEnd"), "next" === b ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
                                }
                            }
                        }
                    },
                    slide: {
                        slideTo: function(d, g, e, o, y) {
                            if (void 0 === d && (d = 0), void 0 === g && (g = this.params.speed), void 0 === e && (e = !0), "number" != typeof d && "string" != typeof d) throw Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof d + "] given.");
                            if ("string" == typeof d) {
                                var w = parseInt(d, 10);
                                if (!isFinite(w)) throw Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + d + "] given.");
                                d = w
                            }
                            var a = this,
                                b = d;
                            b < 0 && (b = 0);
                            var h = a.params,
                                p = a.snapGrid,
                                m = a.slidesGrid,
                                z = a.previousIndex,
                                j = a.activeIndex,
                                q = a.rtlTranslate,
                                i = a.wrapperEl,
                                A = a.enabled;
                            if (a.animating && h.preventInteractionOnTransition || !A && !o && !y) return !1;
                            var x = Math.min(a.params.slidesPerGroupSkip, b),
                                r = x + Math.floor((b - x) / a.params.slidesPerGroup);
                            r >= p.length && (r = p.length - 1), (j || h.initialSlide || 0) === (z || 0) && e && a.emit("beforeSlideChangeStart");
                            var c = -p[r];
                            if (a.updateProgress(c), h.normalizeSlideIndex)
                                for (var f = 0; f < m.length; f += 1) {
                                    var k = -Math.floor(100 * c),
                                        n = Math.floor(100 * m[f]),
                                        s = Math.floor(100 * m[f + 1]);
                                    void 0 !== m[f + 1] ? k >= n && k < s - (s - n) / 2 ? b = f : k >= n && k < s && (b = f + 1) : k >= n && (b = f)
                                }
                            if (a.initialized && b !== j && (!a.allowSlideNext && c < a.translate && c < a.minTranslate() || !a.allowSlidePrev && c > a.translate && c > a.maxTranslate() && (j || 0) !== b)) return !1;
                            if (t = b > j ? "next" : b < j ? "prev" : "reset", q && -c === a.translate || !q && c === a.translate) return a.updateActiveIndex(b), h.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== h.effect && a.setTranslate(c), "reset" !== t && (a.transitionStart(e, t), a.transitionEnd(e, t)), !1;
                            if (h.cssMode) {
                                var t, u, v = a.isHorizontal(),
                                    l = -c;
                                return q && (l = i.scrollWidth - i.offsetWidth - l), 0 === g ? i[v ? "scrollLeft" : "scrollTop"] = l : i.scrollTo ? i.scrollTo(((u = {})[v ? "left" : "top"] = l, u.behavior = "smooth", u)) : i[v ? "scrollLeft" : "scrollTop"] = l, !0
                            }
                            return 0 === g ? (a.setTransition(0), a.setTranslate(c), a.updateActiveIndex(b), a.updateSlidesClasses(), a.emit("beforeTransitionStart", g, o), a.transitionStart(e, t), a.transitionEnd(e, t)) : (a.setTransition(g), a.setTranslate(c), a.updateActiveIndex(b), a.updateSlidesClasses(), a.emit("beforeTransitionStart", g, o), a.transitionStart(e, t), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(b) {
                                a && !a.destroyed && b.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(e, t))
                            }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
                        },
                        slideToLoop: function(a, b, c, e) {
                            void 0 === a && (a = 0), void 0 === b && (b = this.params.speed), void 0 === c && (c = !0);
                            var d = a;
                            return this.params.loop && (d += this.loopedSlides), this.slideTo(d, b, c, e)
                        },
                        slideNext: function(c, d, e) {
                            void 0 === c && (c = this.params.speed), void 0 === d && (d = !0);
                            var a = this,
                                b = a.params,
                                f = a.animating,
                                g = a.enabled;
                            if (!g) return a;
                            var h = a.activeIndex < b.slidesPerGroupSkip ? 1 : b.slidesPerGroup;
                            if (b.loop) {
                                if (f && b.loopPreventsSlide) return !1;
                                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                            }
                            return a.slideTo(a.activeIndex + h, c, d, e)
                        },
                        slidePrev: function(b, c, h) {
                            void 0 === b && (b = this.params.speed), void 0 === c && (c = !0);
                            var d, a = this,
                                e = a.params,
                                i = a.animating,
                                f = a.snapGrid,
                                j = a.slidesGrid,
                                k = a.rtlTranslate,
                                l = a.enabled;
                            if (!l) return a;
                            if (e.loop) {
                                if (i && e.loopPreventsSlide) return !1;
                                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                            }
                            var m = k ? a.translate : -a.translate;

                            function n(a) {
                                return a < 0 ? -Math.floor(Math.abs(a)) : Math.floor(a)
                            }
                            var o = n(m),
                                p = f.map(function(a) {
                                    return n(a)
                                }),
                                g = f[p.indexOf(o) - 1];
                            return void 0 === g && e.cssMode && f.forEach(function(a) {
                                !g && o >= a && (g = a)
                            }), void 0 !== g && (d = j.indexOf(g)) < 0 && (d = a.activeIndex - 1), a.slideTo(d, b, c, h)
                        },
                        slideReset: function(a, b, c) {
                            return void 0 === a && (a = this.params.speed), void 0 === b && (b = !0), this.slideTo(this.activeIndex, a, b, c)
                        },
                        slideToClosest: function(e, f, k, d) {
                            void 0 === e && (e = this.params.speed), void 0 === f && (f = !0), void 0 === d && (d = .5);
                            var a = this,
                                b = a.activeIndex,
                                h = Math.min(a.params.slidesPerGroupSkip, b),
                                c = h + Math.floor((b - h) / a.params.slidesPerGroup),
                                g = a.rtlTranslate ? a.translate : -a.translate;
                            if (g >= a.snapGrid[c]) {
                                var i = a.snapGrid[c];
                                g - i > (a.snapGrid[c + 1] - i) * d && (b += a.params.slidesPerGroup)
                            } else {
                                var j = a.snapGrid[c - 1];
                                g - j <= (a.snapGrid[c] - j) * d && (b -= a.params.slidesPerGroup)
                            }
                            return b = Math.max(b, 0), b = Math.min(b, a.slidesGrid.length - 1), a.slideTo(b, e, f, k)
                        },
                        slideToClickedSlide: function() {
                            var d, a = this,
                                b = a.params,
                                f = a.$wrapperEl,
                                e = "auto" === b.slidesPerView ? a.slidesPerViewDynamic() : b.slidesPerView,
                                c = a.clickedIndex;
                            if (b.loop) {
                                if (a.animating) return;
                                d = parseInt(k(a.clickedSlide).attr("data-swiper-slide-index"), 10), b.centeredSlides ? c < a.loopedSlides - e / 2 || c > a.slides.length - a.loopedSlides + e / 2 ? (a.loopFix(), c = f.children("." + b.slideClass + '[data-swiper-slide-index="' + d + '"]:not(.' + b.slideDuplicateClass + ")").eq(0).index(), J(function() {
                                    a.slideTo(c)
                                })) : a.slideTo(c) : c > a.slides.length - e ? (a.loopFix(), c = f.children("." + b.slideClass + '[data-swiper-slide-index="' + d + '"]:not(.' + b.slideDuplicateClass + ")").eq(0).index(), J(function() {
                                    a.slideTo(c)
                                })) : a.slideTo(c)
                            } else a.slideTo(c)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            var b = this,
                                l = B(),
                                a = b.params,
                                c = b.$wrapperEl;
                            c.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                            var d = c.children("." + a.slideClass);
                            if (a.loopFillGroupWithBlank) {
                                var g = a.slidesPerGroup - d.length % a.slidesPerGroup;
                                if (g !== a.slidesPerGroup) {
                                    for (var h = 0; h < g; h += 1) {
                                        var m = k(l.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                                        c.append(m)
                                    }
                                    d = c.children("." + a.slideClass)
                                }
                            }
                            "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = d.length), b.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), b.loopedSlides += a.loopAdditionalSlides, b.loopedSlides > d.length && (b.loopedSlides = d.length);
                            var i = [],
                                j = [];
                            d.each(function(c, a) {
                                var e = k(c);
                                a < b.loopedSlides && j.push(c), a < d.length && a >= d.length - b.loopedSlides && i.push(c), e.attr("data-swiper-slide-index", a)
                            });
                            for (var e = 0; e < j.length; e += 1) c.append(k(j[e].cloneNode(!0)).addClass(a.slideDuplicateClass));
                            for (var f = i.length - 1; f >= 0; f -= 1) c.prepend(k(i[f].cloneNode(!0)).addClass(a.slideDuplicateClass))
                        },
                        loopFix: function() {
                            var b, a = this;
                            a.emit("beforeLoopFix");
                            var d = a.activeIndex,
                                f = a.slides,
                                c = a.loopedSlides,
                                h = a.allowSlidePrev,
                                i = a.allowSlideNext,
                                j = a.snapGrid,
                                g = a.rtlTranslate;
                            a.allowSlidePrev = !0, a.allowSlideNext = !0;
                            var k = -j[d],
                                e = k - a.getTranslate();
                            d < c ? (b = f.length - 3 * c + d, b += c, a.slideTo(b, 0, !1, !0) && 0 !== e && a.setTranslate((g ? -a.translate : a.translate) - e)) : d >= f.length - c && (b = -f.length + d + c, b += c, a.slideTo(b, 0, !1, !0) && 0 !== e && a.setTranslate((g ? -a.translate : a.translate) - e)), a.allowSlidePrev = h, a.allowSlideNext = i, a.emit("loopFix")
                        },
                        loopDestroy: function() {
                            var b = this.$wrapperEl,
                                a = this.params,
                                c = this.slides;
                            b.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), c.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(b) {
                            if (!this.support.touch && this.params.simulateTouch && (!this.params.watchOverflow || !this.isLocked) && !this.params.cssMode) {
                                var a = this.el;
                                a.style.cursor = "move", a.style.cursor = b ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = b ? "-moz-grabbin" : "-moz-grab", a.style.cursor = b ? "grabbing" : "grab"
                            }
                        },
                        unsetGrabCursor: function() {
                            var a = this;
                            !a.support.touch && (!a.params.watchOverflow || !a.isLocked) && !a.params.cssMode && (a.el.style.cursor = "")
                        }
                    },
                    manipulation: {
                        appendSlide: function(a) {
                            var d = this.$wrapperEl,
                                c = this.params;
                            if (c.loop && this.loopDestroy(), "object" == typeof a && "length" in a)
                                for (var b = 0; b < a.length; b += 1) a[b] && d.append(a[b]);
                            else d.append(a);
                            c.loop && this.loopCreate(), c.observer && this.support.observer || this.update()
                        },
                        prependSlide: function(a) {
                            var c = this.params,
                                d = this.$wrapperEl,
                                e = this.activeIndex;
                            c.loop && this.loopDestroy();
                            var f = e + 1;
                            if ("object" == typeof a && "length" in a) {
                                for (var b = 0; b < a.length; b += 1) a[b] && d.prepend(a[b]);
                                f = e + a.length
                            } else d.prepend(a);
                            c.loop && this.loopCreate(), c.observer && this.support.observer || this.update(), this.slideTo(f, 0, !1)
                        },
                        addSlide: function(d, b) {
                            var a = this,
                                f = a.$wrapperEl,
                                e = a.params,
                                c = a.activeIndex;
                            e.loop && (c -= a.loopedSlides, a.loopDestroy(), a.slides = f.children("." + e.slideClass));
                            var l = a.slides.length;
                            if (d <= 0) {
                                a.prependSlide(b);
                                return
                            }
                            if (d >= l) {
                                a.appendSlide(b);
                                return
                            }
                            for (var h = c > d ? c + 1 : c, i = [], j = l - 1; j >= d; j -= 1) {
                                var m = a.slides.eq(j);
                                m.remove(), i.unshift(m)
                            }
                            if ("object" == typeof b && "length" in b) {
                                for (var g = 0; g < b.length; g += 1) b[g] && f.append(b[g]);
                                h = c > d ? c + b.length : c
                            } else f.append(b);
                            for (var k = 0; k < i.length; k += 1) f.append(i[k]);
                            e.loop && a.loopCreate(), e.observer && a.support.observer || a.update(), e.loop ? a.slideTo(h + a.loopedSlides, 0, !1) : a.slideTo(h, 0, !1)
                        },
                        removeSlide: function(d) {
                            var c, a = this,
                                e = a.params,
                                h = a.$wrapperEl,
                                i = a.activeIndex,
                                g = i;
                            e.loop && (g -= a.loopedSlides, a.loopDestroy(), a.slides = h.children("." + e.slideClass));
                            var b = g;
                            if ("object" == typeof d && "length" in d) {
                                for (var f = 0; f < d.length; f += 1) c = d[f], a.slides[c] && a.slides.eq(c).remove(), c < b && (b -= 1);
                                b = Math.max(b, 0)
                            } else c = d, a.slides[c] && a.slides.eq(c).remove(), c < b && (b -= 1), b = Math.max(b, 0);
                            e.loop && a.loopCreate(), e.observer && a.support.observer || a.update(), e.loop ? a.slideTo(b + a.loopedSlides, 0, !1) : a.slideTo(b, 0, !1)
                        },
                        removeAllSlides: function() {
                            for (var b = [], a = 0; a < this.slides.length; a += 1) b.push(a);
                            this.removeSlide(b)
                        }
                    },
                    events: {
                        attachEvents: function() {
                            var a = this,
                                f = B(),
                                b = a.params,
                                c = a.touchEvents,
                                d = a.el,
                                j = a.wrapperEl,
                                g = a.device,
                                e = a.support;
                            a.onTouchStart = T.bind(a), a.onTouchMove = U.bind(a), a.onTouchEnd = V.bind(a), b.cssMode && (a.onScroll = Y.bind(a)), a.onClick = X.bind(a);
                            var h = !!b.nested;
                            if (!e.touch && e.pointerEvents) d.addEventListener(c.start, a.onTouchStart, !1), f.addEventListener(c.move, a.onTouchMove, h), f.addEventListener(c.end, a.onTouchEnd, !1);
                            else {
                                if (e.touch) {
                                    var i = "touchstart" === c.start && !!e.passiveListener && !!b.passiveListeners && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    d.addEventListener(c.start, a.onTouchStart, i), d.addEventListener(c.move, a.onTouchMove, e.passiveListener ? {
                                        passive: !1,
                                        capture: h
                                    } : h), d.addEventListener(c.end, a.onTouchEnd, i), c.cancel && d.addEventListener(c.cancel, a.onTouchEnd, i), Z || (f.addEventListener("touchstart", $), Z = !0)
                                }(b.simulateTouch && !g.ios && !g.android || b.simulateTouch && !e.touch && g.ios) && (d.addEventListener("mousedown", a.onTouchStart, !1), f.addEventListener("mousemove", a.onTouchMove, h), f.addEventListener("mouseup", a.onTouchEnd, !1))
                            }(b.preventClicks || b.preventClicksPropagation) && d.addEventListener("click", a.onClick, !0), b.cssMode && j.addEventListener("scroll", a.onScroll), b.updateOnWindowResize ? a.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W, !0) : a.on("observerUpdate", W, !0)
                        },
                        detachEvents: function() {
                            var f = B(),
                                b = this.params,
                                a = this.touchEvents,
                                c = this.el,
                                i = this.wrapperEl,
                                d = this.device,
                                e = this.support,
                                g = !!b.nested;
                            if (!e.touch && e.pointerEvents) c.removeEventListener(a.start, this.onTouchStart, !1), f.removeEventListener(a.move, this.onTouchMove, g), f.removeEventListener(a.end, this.onTouchEnd, !1);
                            else {
                                if (e.touch) {
                                    var h = "onTouchStart" === a.start && !!e.passiveListener && !!b.passiveListeners && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    c.removeEventListener(a.start, this.onTouchStart, h), c.removeEventListener(a.move, this.onTouchMove, g), c.removeEventListener(a.end, this.onTouchEnd, h), a.cancel && c.removeEventListener(a.cancel, this.onTouchEnd, h)
                                }(b.simulateTouch && !d.ios && !d.android || b.simulateTouch && !e.touch && d.ios) && (c.removeEventListener("mousedown", this.onTouchStart, !1), f.removeEventListener("mousemove", this.onTouchMove, g), f.removeEventListener("mouseup", this.onTouchEnd, !1))
                            }(b.preventClicks || b.preventClicksPropagation) && c.removeEventListener("click", this.onClick, !0), b.cssMode && i.removeEventListener("scroll", this.onScroll), this.off(d.ios || d.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var a = this,
                                o = a.activeIndex,
                                g = a.initialized,
                                h = a.loopedSlides,
                                b = a.params,
                                f = a.$el,
                                d = b.breakpoints;
                            if (d && (!d || 0 !== Object.keys(d).length)) {
                                var e = a.getBreakpoint(d, a.params.breakpointsBase, a.el);
                                if (e && a.currentBreakpoint !== e) {
                                    var i = e in d ? d[e] : void 0;
                                    i && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(a) {
                                        var b = i[a];
                                        void 0 !== b && ("slidesPerView" === a && ("AUTO" === b || "auto" === b) ? i[a] = "auto" : "slidesPerView" === a ? i[a] = parseFloat(b) : i[a] = parseInt(b, 10))
                                    });
                                    var c = i || a.originalParams,
                                        j = b.slidesPerColumn > 1,
                                        k = c.slidesPerColumn > 1,
                                        l = b.enabled;
                                    j && !k ? (f.removeClass(b.containerModifierClass + "multirow " + b.containerModifierClass + "multirow-column"), a.emitContainerClasses()) : !j && k && (f.addClass(b.containerModifierClass + "multirow"), (c.slidesPerColumnFill && "column" === c.slidesPerColumnFill || !c.slidesPerColumnFill && "column" === b.slidesPerColumnFill) && f.addClass(b.containerModifierClass + "multirow-column"), a.emitContainerClasses());
                                    var m = c.direction && c.direction !== b.direction,
                                        p = b.loop && (c.slidesPerView !== b.slidesPerView || m);
                                    m && g && a.changeDirection(), M(a.params, c);
                                    var n = a.params.enabled;
                                    M(a, {
                                        allowTouchMove: a.params.allowTouchMove,
                                        allowSlideNext: a.params.allowSlideNext,
                                        allowSlidePrev: a.params.allowSlidePrev
                                    }), l && !n ? a.disable() : !l && n && a.enable(), a.currentBreakpoint = e, a.emit("_beforeBreakpoint", c), p && g && (a.loopDestroy(), a.loopCreate(), a.updateSlides(), a.slideTo(o - (void 0 === h ? 0 : h) + a.loopedSlides, 0, !1)), a.emit("breakpoint", c)
                                }
                            }
                        },
                        getBreakpoint: function(f, a, b) {
                            if (void 0 === a && (a = "window"), f && ("container" !== a || b)) {
                                var c = !1,
                                    g = D(),
                                    k = "window" === a ? g.innerHeight : b.clientHeight,
                                    d = Object.keys(f).map(function(a) {
                                        if ("string" == typeof a && 0 === a.indexOf("@")) {
                                            var b = parseFloat(a.substr(1));
                                            return {
                                                value: k * b,
                                                point: a
                                            }
                                        }
                                        return {
                                            value: a,
                                            point: a
                                        }
                                    });
                                d.sort(function(a, b) {
                                    return parseInt(a.value, 10) - parseInt(b.value, 10)
                                });
                                for (var e = 0; e < d.length; e += 1) {
                                    var h = d[e],
                                        i = h.point,
                                        j = h.value;
                                    "window" === a ? g.matchMedia("(min-width: " + j + "px)").matches && (c = i) : j <= b.clientWidth && (c = i)
                                }
                                return c || "max"
                            }
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var a = this,
                                b = a.params,
                                c = a.isLocked,
                                d = a.slides.length > 0 && b.slidesOffsetBefore + b.spaceBetween * (a.slides.length - 1) + a.slides[0].offsetWidth * a.slides.length;
                            b.slidesOffsetBefore && b.slidesOffsetAfter && d ? a.isLocked = d <= a.size : a.isLocked = 1 === a.snapGrid.length, a.allowSlideNext = !a.isLocked, a.allowSlidePrev = !a.isLocked, c !== a.isLocked && a.emit(a.isLocked ? "lock" : "unlock"), c && c !== a.isLocked && (a.isEnd = !1, a.navigation && a.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var c, g, d, b = this.classNames,
                                a = this.params,
                                h = this.rtl,
                                i = this.$el,
                                e = this.device,
                                f = this.support,
                                j = (c = ["initialized", a.direction, {
                                    "pointer-events": f.pointerEvents && !f.touch
                                }, {
                                    "free-mode": a.freeMode
                                }, {
                                    autoheight: a.autoHeight
                                }, {
                                    rtl: h
                                }, {
                                    multirow: a.slidesPerColumn > 1
                                }, {
                                    "multirow-column": a.slidesPerColumn > 1 && "column" === a.slidesPerColumnFill
                                }, {
                                    android: e.android
                                }, {
                                    ios: e.ios
                                }, {
                                    "css-mode": a.cssMode
                                }], g = a.containerModifierClass, d = [], c.forEach(function(a) {
                                    "object" == typeof a ? Object.keys(a).forEach(function(b) {
                                        a[b] && d.push(g + b)
                                    }) : "string" == typeof a && d.push(g + a)
                                }), d);
                            b.push.apply(b, j), i.addClass([].concat(b).join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            var a = this.$el,
                                b = this.classNames;
                            a.removeClass(b.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(d, c, e, f, g, i) {
                            var a, h = D();

                            function b() {
                                i && i()
                            }
                            k(d).parent("picture")[0] || d.complete && g ? b() : c ? ((a = new h.Image).onload = b, a.onerror = b, f && (a.sizes = f), e && (a.srcset = e), c && (a.src = c)) : b()
                        },
                        preloadImages: function() {
                            var b = this;

                            function d() {
                                null != b && b && !b.destroyed && (void 0 !== b.imagesLoaded && (b.imagesLoaded += 1), b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("imagesReady")))
                            }
                            b.imagesToLoad = b.$el.find("img");
                            for (var c = 0; c < b.imagesToLoad.length; c += 1) {
                                var a = b.imagesToLoad[c];
                                b.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, d)
                            }
                        }
                    }
                },
                ab = {},
                d = function() {
                    function b() {
                        for (var g, c, i = arguments.length, d = Array(i), h = 0; h < i; h++) d[h] = arguments[h];
                        if (1 === d.length && d[0].constructor && "Object" === Object.prototype.toString.call(d[0]).slice(8, -1) ? c = d[0] : (g = d[0], c = d[1]), c || (c = {}), c = M({}, c), g && !c.el && (c.el = g), c.el && k(c.el).length > 1) {
                            var l = [];
                            return k(c.el).each(function(a) {
                                var d = M({}, c, {
                                    el: a
                                });
                                l.push(new b(d))
                            }), l
                        }
                        var a = this;
                        a.__swiper__ = !0, a.support = Q(), a.device = function(e) {
                            if (void 0 === e && (e = {}), !t) {
                                var h, i, j, d, f, a, b, k, l, m, c, n, o, g;
                                t = (i = (void 0 === (h = e) ? {} : h).userAgent, j = Q(), f = (d = D()).navigator.platform, a = i || d.navigator.userAgent, b = {
                                    ios: !1,
                                    android: !1
                                }, k = d.screen.width, l = d.screen.height, m = a.match(/(Android);?[\s\/]+([\d.]+)?/), c = a.match(/(iPad).*OS\s([\d_]+)/), n = a.match(/(iPod)(.*OS\s([\d_]+))?/), o = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = "MacIntel" === f, !c && g && j.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(k + "x" + l) >= 0 && ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]), g = !1), m && "Win32" !== f && (b.os = "android", b.android = !0), (c || o || n) && (b.os = "ios", b.ios = !0), b)
                            }
                            return t
                        }({
                            userAgent: c.userAgent
                        }), a.browser = function() {
                            if (!u) {
                                var a, b;
                                u = {
                                    isEdge: !!(a = D()).navigator.userAgent.match(/Edge/g),
                                    isSafari: (b = a.navigator.userAgent.toLowerCase()).indexOf("safari") >= 0 && 0 > b.indexOf("chrome") && 0 > b.indexOf("android"),
                                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
                                }
                            }
                            return u
                        }(), a.eventsListeners = {}, a.eventsAnyListeners = [], void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function(f) {
                            var d = a.modules[f];
                            if (d.params) {
                                var b = Object.keys(d.params)[0],
                                    e = d.params[b];
                                if ("object" != typeof e || null === e || (["navigation", "pagination", "scrollbar"].indexOf(b) >= 0 && !0 === c[b] && (c[b] = {
                                        auto: !0
                                    }), !(b in c && "enabled" in e))) return;
                                !0 === c[b] && (c[b] = {
                                    enabled: !0
                                }), "object" != typeof c[b] || "enabled" in c[b] || (c[b].enabled = !0), c[b] || (c[b] = {
                                    enabled: !1
                                })
                            }
                        });
                        var e, f, j = M({}, _);
                        return a.useParams(j), a.params = M({}, j, ab, c), a.originalParams = M({}, a.params), a.passedParams = M({}, c), a.params && a.params.on && Object.keys(a.params.on).forEach(function(b) {
                            a.on(b, a.params.on[b])
                        }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = k, M(a, {
                            enabled: a.params.enabled,
                            el: g,
                            classNames: [],
                            slides: k(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === a.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === a.params.direction
                            },
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: a.params.allowSlideNext,
                            allowSlidePrev: a.params.allowSlidePrev,
                            touchEvents: (e = ["touchstart", "touchmove", "touchend", "touchcancel"], f = ["mousedown", "mousemove", "mouseup"], a.support.pointerEvents && (f = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, a.touchEventsDesktop = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: a.params.focusableElements,
                                lastClickTime: m(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: a.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), a.useModules(), a.emit("_swiper"), a.params.init && a.init(), a
                    }
                    var c, d, e, a = b.prototype;
                    return a.enable = function() {
                        var a = this;
                        a.enabled || (a.enabled = !0, a.params.grabCursor && a.setGrabCursor(), a.emit("enable"))
                    }, a.disable = function() {
                        var a = this;
                        a.enabled && (a.enabled = !1, a.params.grabCursor && a.unsetGrabCursor(), a.emit("disable"))
                    }, a.setProgress = function(a, b) {
                        a = Math.min(Math.max(a, 0), 1);
                        var c = this.minTranslate(),
                            d = (this.maxTranslate() - c) * a + c;
                        this.translateTo(d, void 0 === b ? 0 : b), this.updateActiveIndex(), this.updateSlidesClasses()
                    }, a.emitContainerClasses = function() {
                        var a = this;
                        if (a.params._emitClasses && a.el) {
                            var b = a.el.className.split(" ").filter(function(b) {
                                return 0 === b.indexOf("swiper-container") || 0 === b.indexOf(a.params.containerModifierClass)
                            });
                            a.emit("_containerClasses", b.join(" "))
                        }
                    }, a.getSlideClasses = function(a) {
                        var b = this;
                        return a.className.split(" ").filter(function(a) {
                            return 0 === a.indexOf("swiper-slide") || 0 === a.indexOf(b.params.slideClass)
                        }).join(" ")
                    }, a.emitSlidesClasses = function() {
                        var a = this;
                        if (a.params._emitClasses && a.el) {
                            var b = [];
                            a.slides.each(function(c) {
                                var d = a.getSlideClasses(c);
                                b.push({
                                    slideEl: c,
                                    classNames: d
                                }), a.emit("_slideClass", c, d)
                            }), a.emit("_slideClasses", b)
                        }
                    }, a.slidesPerViewDynamic = function() {
                        var k = this.params,
                            a = this.slides,
                            j = this.slidesGrid,
                            h = this.size,
                            b = this.activeIndex,
                            c = 1;
                        if (k.centeredSlides) {
                            for (var d, e = a[b].swiperSlideSize, f = b + 1; f < a.length; f += 1) a[f] && !d && (e += a[f].swiperSlideSize, c += 1, e > h && (d = !0));
                            for (var g = b - 1; g >= 0; g -= 1) a[g] && !d && (e += a[g].swiperSlideSize, c += 1, e > h && (d = !0))
                        } else
                            for (var i = b + 1; i < a.length; i += 1) j[i] - j[b] < h && (c += 1);
                        return c
                    }, a.update = function() {
                        var d, a = this;
                        if (a && !a.destroyed) {
                            var c = a.snapGrid,
                                b = a.params;
                            b.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (e(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || e(), b.watchOverflow && c !== a.snapGrid && a.checkOverflow(), a.emit("update")
                        }

                        function e() {
                            var b = Math.min(Math.max(a.rtlTranslate ? -1 * a.translate : a.translate, a.maxTranslate()), a.minTranslate());
                            a.setTranslate(b), a.updateActiveIndex(), a.updateSlidesClasses()
                        }
                    }, a.changeDirection = function(b, c) {
                        void 0 === c && (c = !0);
                        var a = this,
                            d = a.params.direction;
                        return b || (b = "horizontal" === d ? "vertical" : "horizontal"), b === d || "horizontal" !== b && "vertical" !== b || (a.$el.removeClass("" + a.params.containerModifierClass + d).addClass("" + a.params.containerModifierClass + b), a.emitContainerClasses(), a.params.direction = b, a.slides.each(function(a) {
                            "vertical" === b ? a.style.width = "" : a.style.height = ""
                        }), a.emit("changeDirection"), c && a.update()), a
                    }, a.mount = function(b) {
                        var a = this;
                        if (a.mounted) return !0;
                        var c = k(b || a.params.el);
                        if (!(b = c[0])) return !1;
                        b.swiper = a;
                        var f = function() {
                                return "." + (a.params.wrapperClass || "").trim().split(" ").join(".")
                            },
                            d = function() {
                                if (b && b.shadowRoot && b.shadowRoot.querySelector) {
                                    var a = k(b.shadowRoot.querySelector(f()));
                                    return a.children = function(a) {
                                        return c.children(a)
                                    }, a
                                }
                                return c.children(f())
                            }();
                        if (0 === d.length && a.params.createElements) {
                            var e = B().createElement("div");
                            d = k(e), e.className = a.params.wrapperClass, c.append(e), c.children("." + a.params.slideClass).each(function(a) {
                                d.append(a)
                            })
                        }
                        return M(a, {
                            $el: c,
                            el: b,
                            $wrapperEl: d,
                            wrapperEl: d[0],
                            mounted: !0,
                            rtl: "rtl" === b.dir.toLowerCase() || "rtl" === c.css("direction"),
                            rtlTranslate: "horizontal" === a.params.direction && ("rtl" === b.dir.toLowerCase() || "rtl" === c.css("direction")),
                            wrongRTL: "-webkit-box" === d.css("display")
                        }), !0
                    }, a.init = function(b) {
                        var a = this;
                        return a.initialized ? a : (!1 === a.mount(b) || (a.emit("beforeInit"), a.params.breakpoints && a.setBreakpoint(), a.addClasses(), a.params.loop && a.loopCreate(), a.updateSize(), a.updateSlides(), a.params.watchOverflow && a.checkOverflow(), a.params.grabCursor && a.enabled && a.setGrabCursor(), a.params.preloadImages && a.preloadImages(), a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit, !1, !0) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit, !1, !0), a.attachEvents(), a.initialized = !0, a.emit("init"), a.emit("afterInit")), a)
                    }, a.destroy = function(c, d) {
                        void 0 === c && (c = !0), void 0 === d && (d = !0);
                        var f, g, a = this,
                            b = a.params,
                            h = a.$el,
                            i = a.$wrapperEl,
                            e = a.slides;
                        return void 0 === a.params || a.destroyed ? null : (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), b.loop && a.loopDestroy(), d && (a.removeClasses(), h.removeAttr("style"), i.removeAttr("style"), e && e.length && e.removeClass([b.slideVisibleClass, b.slideActiveClass, b.slideNextClass, b.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(b) {
                            a.off(b)
                        }), !1 !== c && (a.$el[0].swiper = null, Object.keys(g = f = a).forEach(function(a) {
                            try {
                                g[a] = null
                            } catch (b) {}
                            try {
                                delete g[a]
                            } catch (c) {}
                        })), a.destroyed = !0, null)
                    }, b.extendDefaults = function(a) {
                        M(ab, a)
                    }, b.installModule = function(a) {
                        b.prototype.modules || (b.prototype.modules = {});
                        var c = a.name || Object.keys(b.prototype.modules).length + "_" + m();
                        b.prototype.modules[c] = a
                    }, b.use = function(a) {
                        return Array.isArray(a) ? (a.forEach(function(a) {
                            return b.installModule(a)
                        }), b) : (b.installModule(a), b)
                    }, c = b, d = null, e = [{
                        key: "extendedDefaults",
                        get: function() {
                            return ab
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return _
                        }
                    }], d && aa(c.prototype, d), e && aa(c, e), b
                }();
            Object.keys(n).forEach(function(a) {
                Object.keys(n[a]).forEach(function(b) {
                    d.prototype[b] = n[a][b]
                })
            }), d.use([{
                name: "resize",
                create: function() {
                    var a = this;
                    M(a, {
                        resize: {
                            observer: null,
                            createObserver: function() {
                                a && !a.destroyed && a.initialized && (a.resize.observer = new ResizeObserver(function(d) {
                                    var b = a.width,
                                        c = a.height,
                                        e = b,
                                        f = c;
                                    d.forEach(function(d) {
                                        var b = d.contentBoxSize,
                                            c = d.contentRect,
                                            g = d.target;
                                        g && g !== a.el || (e = c ? c.width : (b[0] || b).inlineSize, f = c ? c.height : (b[0] || b).blockSize)
                                    }), (e !== b || f !== c) && a.resize.resizeHandler()
                                }), a.resize.observer.observe(a.el))
                            },
                            removeObserver: function() {
                                a.resize.observer && a.resize.observer.unobserve && a.el && (a.resize.observer.unobserve(a.el), a.resize.observer = null)
                            },
                            resizeHandler: function() {
                                a && !a.destroyed && a.initialized && (a.emit("beforeResize"), a.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                a && !a.destroyed && a.initialized && a.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function(a) {
                        var b = D();
                        if (a.params.resizeObserver && void 0 !== D().ResizeObserver) {
                            a.resize.createObserver();
                            return
                        }
                        b.addEventListener("resize", a.resize.resizeHandler), b.addEventListener("orientationchange", a.resize.orientationChangeHandler)
                    },
                    destroy: function(a) {
                        var b = D();
                        a.resize.removeObserver(), b.removeEventListener("resize", a.resize.resizeHandler), b.removeEventListener("orientationchange", a.resize.orientationChangeHandler)
                    }
                }
            }, {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function() {
                    N(this, {
                        observer: R({}, S, {
                            observers: []
                        })
                    })
                },
                on: {
                    init: function(a) {
                        a.observer.init()
                    },
                    destroy: function(a) {
                        a.observer.destroy()
                    }
                }
            }]);
            var o = d,
                ac = {
                    lastScrollTime: m(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    event: function() {
                        return D().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : ! function() {
                            var a = B(),
                                c = "onwheel",
                                b = c in a;
                            if (!b) {
                                var d = a.createElement("div");
                                d.setAttribute(c, "return;"), b = "function" == typeof d[c]
                            }
                            return !b && a.implementation && a.implementation.hasFeature && !0 !== a.implementation.hasFeature("", "") && (b = a.implementation.hasFeature("Events.wheel", "3.0")), b
                        }() ? "mousewheel" : "wheel"
                    },
                    normalize: function(a) {
                        var e = 0,
                            d = 0,
                            b = 0,
                            c = 0;
                        return "detail" in a && (d = a.detail), "wheelDelta" in a && (d = -a.wheelDelta / 120), "wheelDeltaY" in a && (d = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (e = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (e = d, d = 0), b = 10 * e, c = 10 * d, "deltaY" in a && (c = a.deltaY), "deltaX" in a && (b = a.deltaX), a.shiftKey && !b && (b = c, c = 0), (b || c) && a.deltaMode && (1 === a.deltaMode ? (b *= 40, c *= 40) : (b *= 800, c *= 800)), b && !e && (e = b < 1 ? -1 : 1), c && !d && (d = c < 1 ? -1 : 1), {
                            spinX: e,
                            spinY: d,
                            pixelX: b,
                            pixelY: c
                        }
                    },
                    handleMouseEnter: function() {
                        var a = this;
                        a.enabled && (a.mouseEntered = !0)
                    },
                    handleMouseLeave: function() {
                        var a = this;
                        a.enabled && (a.mouseEntered = !1)
                    },
                    handle: function(q) {
                        var c = q,
                            x = !0,
                            a = this;
                        if (a.enabled) {
                            var l = a.params.mousewheel;
                            a.params.cssMode && c.preventDefault();
                            var r = a.$el;
                            if ("container" !== a.params.mousewheel.eventsTarget && (r = k(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !r[0].contains(c.target) && !l.releaseOnEdges) return !0;
                            c.originalEvent && (c = c.originalEvent);
                            var b = 0,
                                s = a.rtlTranslate ? -1 : 1,
                                d = ac.normalize(c);
                            if (l.forceToAxis) {
                                if (a.isHorizontal()) {
                                    if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
                                    b = -d.pixelX * s
                                } else {
                                    if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
                                    b = -d.pixelY
                                }
                            } else b = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * s : -d.pixelY;
                            if (0 === b) return !0;
                            l.invert && (b = -b);
                            var i = a.getTranslate() + b * l.sensitivity;
                            if (i >= a.minTranslate() && (i = a.minTranslate()), i <= a.maxTranslate() && (i = a.maxTranslate()), !a.params.loop && (i === a.minTranslate() || i === a.maxTranslate()) || !a.params.nested || c.stopPropagation(), a.params.freeMode) {
                                var e = {
                                        time: m(),
                                        delta: Math.abs(b),
                                        direction: Math.sign(b)
                                    },
                                    n = a.mousewheel.lastEventBeforeSnap,
                                    t = n && e.time < n.time + 500 && e.delta <= n.delta && e.direction === n.direction;
                                if (!t) {
                                    a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
                                    var g = a.getTranslate() + b * l.sensitivity,
                                        v = a.isBeginning,
                                        w = a.isEnd;
                                    if (g >= a.minTranslate() && (g = a.minTranslate()), g <= a.maxTranslate() && (g = a.maxTranslate()), a.setTransition(0), a.setTranslate(g), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!v && a.isBeginning || !w && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
                                        clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
                                        var f = a.mousewheel.recentWheelEvents;
                                        f.length >= 15 && f.shift();
                                        var p = f.length ? f[f.length - 1] : void 0,
                                            u = f[0];
                                        if (f.push(e), p && (e.delta > p.delta || e.direction !== p.direction)) f.splice(0);
                                        else if (f.length >= 15 && e.time - u.time < 500 && u.delta - e.delta >= 1 && e.delta <= 6) {
                                            var y = b > 0 ? .8 : .2;
                                            a.mousewheel.lastEventBeforeSnap = e, f.splice(0), a.mousewheel.timeout = J(function() {
                                                a.slideToClosest(a.params.speed, !0, void 0, y)
                                            }, 0)
                                        }
                                        a.mousewheel.timeout || (a.mousewheel.timeout = J(function() {
                                            var b = .5;
                                            a.mousewheel.lastEventBeforeSnap = e, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, b)
                                        }, 500))
                                    }
                                    if (t || a.emit("scroll", c), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), g === a.minTranslate() || g === a.maxTranslate()) return !0
                                }
                            } else {
                                var h = {
                                        time: m(),
                                        delta: Math.abs(b),
                                        direction: Math.sign(b),
                                        raw: q
                                    },
                                    j = a.mousewheel.recentWheelEvents;
                                j.length >= 2 && j.shift();
                                var o = j.length ? j[j.length - 1] : void 0;
                                if (j.push(h), o ? (h.direction !== o.direction || h.delta > o.delta || h.time > o.time + 150) && a.mousewheel.animateSlider(h) : a.mousewheel.animateSlider(h), a.mousewheel.releaseScroll(h)) return !0
                            }
                            return c.preventDefault ? c.preventDefault() : c.returnValue = !1, !1
                        }
                    },
                    animateSlider: function(b) {
                        var a = this,
                            c = D();
                        return !(this.params.mousewheel.thresholdDelta && b.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && m() - a.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (!!(b.delta >= 6 && m() - a.mousewheel.lastScrollTime < 60) || (b.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), a.emit("scroll", b.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), a.emit("scroll", b.raw)), a.mousewheel.lastScrollTime = new c.Date().getTime(), !1))
                    },
                    releaseScroll: function(b) {
                        var a = this.params.mousewheel;
                        if (b.direction < 0) {
                            if (this.isEnd && !this.params.loop && a.releaseOnEdges) return !0
                        } else if (this.isBeginning && !this.params.loop && a.releaseOnEdges) return !0;
                        return !1
                    },
                    enable: function() {
                        var a = this,
                            c = ac.event();
                        if (a.params.cssMode) return a.wrapperEl.removeEventListener(c, a.mousewheel.handle), !0;
                        if (!c || a.mousewheel.enabled) return !1;
                        var b = a.$el;
                        return "container" !== a.params.mousewheel.eventsTarget && (b = k(a.params.mousewheel.eventsTarget)), b.on("mouseenter", a.mousewheel.handleMouseEnter), b.on("mouseleave", a.mousewheel.handleMouseLeave), b.on(c, a.mousewheel.handle), a.mousewheel.enabled = !0, !0
                    },
                    disable: function() {
                        var a = this,
                            b = ac.event();
                        if (a.params.cssMode) return a.wrapperEl.addEventListener(b, a.mousewheel.handle), !0;
                        if (!b || !a.mousewheel.enabled) return !1;
                        var c = a.$el;
                        return "container" !== a.params.mousewheel.eventsTarget && (c = k(a.params.mousewheel.eventsTarget)), c.off(b, a.mousewheel.handle), a.mousewheel.enabled = !1, !0
                    }
                };

            function ad() {
                return (ad = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var ae = {
                toggleEl: function(a, b) {
                    a[b ? "addClass" : "removeClass"](this.params.navigation.disabledClass), a[0] && "BUTTON" === a[0].tagName && (a[0].disabled = b)
                },
                update: function() {
                    var c = this.params.navigation,
                        d = this.navigation.toggleEl;
                    if (!this.params.loop) {
                        var e = this.navigation,
                            a = e.$nextEl,
                            b = e.$prevEl;
                        b && b.length > 0 && (d(b, !!this.isBeginning), this.params.watchOverflow && this.enabled && b[this.isLocked ? "addClass" : "removeClass"](c.lockClass)), a && a.length > 0 && (d(a, !!this.isEnd), this.params.watchOverflow && this.enabled && a[this.isLocked ? "addClass" : "removeClass"](c.lockClass))
                    }
                },
                onPrevClick: function(a) {
                    a.preventDefault(), (!this.isBeginning || this.params.loop) && this.slidePrev()
                },
                onNextClick: function(a) {
                    a.preventDefault(), (!this.isEnd || this.params.loop) && this.slideNext()
                },
                init: function() {
                    var c, d, a = this,
                        b = a.params.navigation;
                    a.params.navigation = P(a.$el, a.params.navigation, a.params.createElements, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), (b.nextEl || b.prevEl) && (b.nextEl && (c = k(b.nextEl), a.params.uniqueNavElements && "string" == typeof b.nextEl && c.length > 1 && 1 === a.$el.find(b.nextEl).length && (c = a.$el.find(b.nextEl))), b.prevEl && (d = k(b.prevEl), a.params.uniqueNavElements && "string" == typeof b.prevEl && d.length > 1 && 1 === a.$el.find(b.prevEl).length && (d = a.$el.find(b.prevEl))), c && c.length > 0 && c.on("click", a.navigation.onNextClick), d && d.length > 0 && d.on("click", a.navigation.onPrevClick), M(a.navigation, {
                        $nextEl: c,
                        nextEl: c && c[0],
                        $prevEl: d,
                        prevEl: d && d[0]
                    }), !a.enabled && (c && c.addClass(b.lockClass), d && d.addClass(b.lockClass)))
                },
                destroy: function() {
                    var c = this.navigation,
                        a = c.$nextEl,
                        b = c.$prevEl;
                    a && a.length && (a.off("click", this.navigation.onNextClick), a.removeClass(this.params.navigation.disabledClass)), b && b.length && (b.off("click", this.navigation.onPrevClick), b.removeClass(this.params.navigation.disabledClass))
                }
            };

            function af() {
                return (af = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var ag = {
                update: function() {
                    var a = this,
                        t = a.rtl,
                        b = a.params.pagination;
                    if (b.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                        var h = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                            d = a.pagination.$el,
                            e = a.params.loop ? Math.ceil((h - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length;
                        if (a.params.loop ? ((f = Math.ceil((a.activeIndex - a.loopedSlides) / a.params.slidesPerGroup)) > h - 1 - 2 * a.loopedSlides && (f -= h - 2 * a.loopedSlides), f > e - 1 && (f -= e), f < 0 && "bullets" !== a.params.paginationType && (f = e + f)) : f = void 0 !== a.snapIndex ? a.snapIndex : a.activeIndex || 0, "bullets" === b.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
                            var f, g, i, m, c = a.pagination.bullets;
                            if (b.dynamicBullets && (a.pagination.bulletSize = c.eq(0)[a.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(a.isHorizontal() ? "width" : "height", a.pagination.bulletSize * (b.dynamicMainBullets + 4) + "px"), b.dynamicMainBullets > 1 && void 0 !== a.previousIndex && (a.pagination.dynamicBulletIndex += f - a.previousIndex, a.pagination.dynamicBulletIndex > b.dynamicMainBullets - 1 ? a.pagination.dynamicBulletIndex = b.dynamicMainBullets - 1 : a.pagination.dynamicBulletIndex < 0 && (a.pagination.dynamicBulletIndex = 0)), m = ((i = (g = f - a.pagination.dynamicBulletIndex) + (Math.min(c.length, b.dynamicMainBullets) - 1)) + g) / 2), c.removeClass(b.bulletActiveClass + " " + b.bulletActiveClass + "-next " + b.bulletActiveClass + "-next-next " + b.bulletActiveClass + "-prev " + b.bulletActiveClass + "-prev-prev " + b.bulletActiveClass + "-main"), d.length > 1) c.each(function(d) {
                                var a = k(d),
                                    c = a.index();
                                c === f && a.addClass(b.bulletActiveClass), b.dynamicBullets && (c >= g && c <= i && a.addClass(b.bulletActiveClass + "-main"), c === g && a.prev().addClass(b.bulletActiveClass + "-prev").prev().addClass(b.bulletActiveClass + "-prev-prev"), c === i && a.next().addClass(b.bulletActiveClass + "-next").next().addClass(b.bulletActiveClass + "-next-next"))
                            });
                            else {
                                var n = c.eq(f),
                                    u = n.index();
                                if (n.addClass(b.bulletActiveClass), b.dynamicBullets) {
                                    for (var o = c.eq(g), p = c.eq(i), j = g; j <= i; j += 1) c.eq(j).addClass(b.bulletActiveClass + "-main");
                                    if (a.params.loop) {
                                        if (u >= c.length - b.dynamicMainBullets) {
                                            for (var l = b.dynamicMainBullets; l >= 0; l -= 1) c.eq(c.length - l).addClass(b.bulletActiveClass + "-main");
                                            c.eq(c.length - b.dynamicMainBullets - 1).addClass(b.bulletActiveClass + "-prev")
                                        } else o.prev().addClass(b.bulletActiveClass + "-prev").prev().addClass(b.bulletActiveClass + "-prev-prev"), p.next().addClass(b.bulletActiveClass + "-next").next().addClass(b.bulletActiveClass + "-next-next")
                                    } else o.prev().addClass(b.bulletActiveClass + "-prev").prev().addClass(b.bulletActiveClass + "-prev-prev"), p.next().addClass(b.bulletActiveClass + "-next").next().addClass(b.bulletActiveClass + "-next-next")
                                }
                            }
                            if (b.dynamicBullets) {
                                var v = Math.min(c.length, b.dynamicMainBullets + 4),
                                    w = (a.pagination.bulletSize * v - a.pagination.bulletSize) / 2 - m * a.pagination.bulletSize,
                                    x = t ? "right" : "left";
                                c.css(a.isHorizontal() ? x : "top", w + "px")
                            }
                        }
                        if ("fraction" === b.type && (d.find(O(b.currentClass)).text(b.formatFractionCurrent(f + 1)), d.find(O(b.totalClass)).text(b.formatFractionTotal(e))), "progressbar" === b.type) {
                            y = b.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                            var y, q = (f + 1) / e,
                                r = 1,
                                s = 1;
                            "horizontal" === y ? r = q : s = q, d.find(O(b.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + r + ") scaleY(" + s + ")").transition(a.params.speed)
                        }
                        "custom" === b.type && b.renderCustom ? (d.html(b.renderCustom(a, f + 1, e)), a.emit("paginationRender", d[0])) : a.emit("paginationUpdate", d[0]), a.params.watchOverflow && a.enabled && d[a.isLocked ? "addClass" : "removeClass"](b.lockClass)
                    }
                },
                render: function() {
                    var b = this,
                        a = b.params.pagination;
                    if (a.el && b.pagination.el && b.pagination.$el && 0 !== b.pagination.$el.length) {
                        var e = b.virtual && b.params.virtual.enabled ? b.virtual.slides.length : b.slides.length,
                            d = b.pagination.$el,
                            c = "";
                        if ("bullets" === a.type) {
                            var f = b.params.loop ? Math.ceil((e - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                            b.params.freeMode && !b.params.loop && f > e && (f = e);
                            for (var g = 0; g < f; g += 1) a.renderBullet ? c += a.renderBullet.call(b, g, a.bulletClass) : c += "<" + a.bulletElement + ' class="' + a.bulletClass + '"></' + a.bulletElement + ">";
                            d.html(c), b.pagination.bullets = d.find(O(a.bulletClass))
                        }
                        "fraction" === a.type && (c = a.renderFraction ? a.renderFraction.call(b, a.currentClass, a.totalClass) : '<span class="' + a.currentClass + '"></span> / <span class="' + a.totalClass + '"></span>', d.html(c)), "progressbar" === a.type && (c = a.renderProgressbar ? a.renderProgressbar.call(b, a.progressbarFillClass) : '<span class="' + a.progressbarFillClass + '"></span>', d.html(c)), "custom" !== a.type && b.emit("paginationRender", b.pagination.$el[0])
                    }
                },
                init: function() {
                    var c = this;
                    c.params.pagination = P(c.$el, c.params.pagination, c.params.createElements, {
                        el: "swiper-pagination"
                    });
                    var a = c.params.pagination;
                    if (a.el) {
                        var b = k(a.el);
                        0 === b.length || (c.params.uniqueNavElements && "string" == typeof a.el && b.length > 1 && (b = c.$el.find(a.el)), "bullets" === a.type && a.clickable && b.addClass(a.clickableClass), b.addClass(a.modifierClass + a.type), "bullets" === a.type && a.dynamicBullets && (b.addClass("" + a.modifierClass + a.type + "-dynamic"), c.pagination.dynamicBulletIndex = 0, a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)), "progressbar" === a.type && a.progressbarOpposite && b.addClass(a.progressbarOppositeClass), a.clickable && b.on("click", O(a.bulletClass), function(b) {
                            b.preventDefault();
                            var a = k(this).index() * c.params.slidesPerGroup;
                            c.params.loop && (a += c.loopedSlides), c.slideTo(a)
                        }), M(c.pagination, {
                            $el: b,
                            el: b[0]
                        }), c.enabled || b.addClass(a.lockClass))
                    }
                },
                destroy: function() {
                    var a = this.params.pagination;
                    if (a.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var b = this.pagination.$el;
                        b.removeClass(a.hiddenClass), b.removeClass(a.modifierClass + a.type), this.pagination.bullets && this.pagination.bullets.removeClass(a.bulletActiveClass), a.clickable && b.off("click", O(a.bulletClass))
                    }
                }
            };

            function ah() {
                return (ah = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var ai = {
                getRandomNumber: function(a) {
                    return void 0 === a && (a = 16), "x".repeat(a).replace(/x/g, function() {
                        return Math.round(16 * Math.random()).toString(16)
                    })
                },
                makeElFocusable: function(a) {
                    return a.attr("tabIndex", "0"), a
                },
                makeElNotFocusable: function(a) {
                    return a.attr("tabIndex", "-1"), a
                },
                addElRole: function(a, b) {
                    return a.attr("role", b), a
                },
                addElRoleDescription: function(a, b) {
                    return a.attr("aria-roledescription", b), a
                },
                addElControls: function(a, b) {
                    return a.attr("aria-controls", b), a
                },
                addElLabel: function(a, b) {
                    return a.attr("aria-label", b), a
                },
                addElId: function(a, b) {
                    return a.attr("id", b), a
                },
                addElLive: function(a, b) {
                    return a.attr("aria-live", b), a
                },
                disableEl: function(a) {
                    return a.attr("aria-disabled", !0), a
                },
                enableEl: function(a) {
                    return a.attr("aria-disabled", !1), a
                },
                onEnterOrSpaceKey: function(d) {
                    if (13 === d.keyCode || 32 === d.keyCode) {
                        var a = this,
                            b = a.params.a11y,
                            c = k(d.target);
                        a.navigation && a.navigation.$nextEl && c.is(a.navigation.$nextEl) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? a.a11y.notify(b.lastSlideMessage) : a.a11y.notify(b.nextSlideMessage)), a.navigation && a.navigation.$prevEl && c.is(a.navigation.$prevEl) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? a.a11y.notify(b.firstSlideMessage) : a.a11y.notify(b.prevSlideMessage)), a.pagination && c.is(O(a.params.pagination.bulletClass)) && c[0].click()
                    }
                },
                notify: function(b) {
                    var a = this.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(b))
                },
                updateNavigation: function() {
                    if (!this.params.loop && this.navigation) {
                        var c = this.navigation,
                            a = c.$nextEl,
                            b = c.$prevEl;
                        b && b.length > 0 && (this.isBeginning ? (this.a11y.disableEl(b), this.a11y.makeElNotFocusable(b)) : (this.a11y.enableEl(b), this.a11y.makeElFocusable(b))), a && a.length > 0 && (this.isEnd ? (this.a11y.disableEl(a), this.a11y.makeElNotFocusable(a)) : (this.a11y.enableEl(a), this.a11y.makeElFocusable(a)))
                    }
                },
                updatePagination: function() {
                    var a = this,
                        b = a.params.a11y;
                    a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.bullets.each(function(d) {
                        var c = k(d);
                        a.a11y.makeElFocusable(c), a.params.pagination.renderBullet || (a.a11y.addElRole(c, "button"), a.a11y.addElLabel(c, b.paginationBulletMessage.replace(/\{\{index\}\}/, c.index() + 1)))
                    })
                },
                init: function() {
                    var b, c, a = this,
                        d = a.params.a11y;
                    a.$el.append(a.a11y.liveRegion);
                    var g = a.$el;
                    d.containerRoleDescriptionMessage && a.a11y.addElRoleDescription(g, d.containerRoleDescriptionMessage), d.containerMessage && a.a11y.addElLabel(g, d.containerMessage);
                    var e = a.$wrapperEl,
                        f = e.attr("id") || "swiper-wrapper-" + a.a11y.getRandomNumber(16),
                        h = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
                    a.a11y.addElId(e, f), a.a11y.addElLive(e, h), d.itemRoleDescriptionMessage && a.a11y.addElRoleDescription(k(a.slides), d.itemRoleDescriptionMessage), a.a11y.addElRole(k(a.slides), d.slideRole);
                    var i = a.params.loop ? a.slides.filter(function(b) {
                        return !b.classList.contains(a.params.slideDuplicateClass)
                    }).length : a.slides.length;
                    a.slides.each(function(c, e) {
                        var b = k(c),
                            f = a.params.loop ? parseInt(b.attr("data-swiper-slide-index"), 10) : e,
                            g = d.slideLabelMessage.replace(/\{\{index\}\}/, f + 1).replace(/\{\{slidesLength\}\}/, i);
                        a.a11y.addElLabel(b, g)
                    }), a.navigation && a.navigation.$nextEl && (b = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (c = a.navigation.$prevEl), b && b.length && (a.a11y.makeElFocusable(b), "BUTTON" !== b[0].tagName && (a.a11y.addElRole(b, "button"), b.on("keydown", a.a11y.onEnterOrSpaceKey)), a.a11y.addElLabel(b, d.nextSlideMessage), a.a11y.addElControls(b, f)), c && c.length && (a.a11y.makeElFocusable(c), "BUTTON" !== c[0].tagName && (a.a11y.addElRole(c, "button"), c.on("keydown", a.a11y.onEnterOrSpaceKey)), a.a11y.addElLabel(c, d.prevSlideMessage), a.a11y.addElControls(c, f)), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.on("keydown", O(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey)
                },
                destroy: function() {
                    var a, b;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (a = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (b = this.navigation.$prevEl), a && a.off("keydown", this.a11y.onEnterOrSpaceKey), b && b.off("keydown", this.a11y.onEnterOrSpaceKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", O(this.params.pagination.bulletClass), this.a11y.onEnterOrSpaceKey)
                }
            };

            function aj(a) {
                return "object" == typeof a && null !== a && a.constructor && "Object" === Object.prototype.toString.call(a).slice(8, -1)
            }

            function ak(b, a) {
                var c = ["__proto__", "constructor", "prototype"];
                Object.keys(a).filter(function(a) {
                    return 0 > c.indexOf(a)
                }).forEach(function(c) {
                    void 0 === b[c] ? b[c] = a[c] : aj(a[c]) && aj(b[c]) && Object.keys(a[c]).length > 0 ? a[c].__swiper__ ? b[c] = a[c] : ak(b[c], a[c]) : b[c] = a[c]
                })
            }

            function al(a) {
                return void 0 === a && (a = {}), a.navigation && void 0 === a.navigation.nextEl && void 0 === a.navigation.prevEl
            }

            function am(a) {
                return void 0 === a && (a = {}), a.pagination && void 0 === a.pagination.el
            }

            function an(a) {
                return void 0 === a && (a = {}), a.scrollbar && void 0 === a.scrollbar.el
            }

            function ao(a) {
                void 0 === a && (a = "");
                var b = a.split(" ").map(function(a) {
                        return a.trim()
                    }).filter(function(a) {
                        return !!a
                    }),
                    c = [];
                return b.forEach(function(a) {
                    0 > c.indexOf(a) && c.push(a)
                }), c.join(" ")
            }
            var ap = ["init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_freeModeMomentum", "_freeModeMomentumRatio", "_freeModeMomentumBounce", "_freeModeMomentumBounceRatio", "_freeModeMomentumVelocityRatio", "_freeModeSticky", "_freeModeMinimumVelocity", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "_slidesPerColumn", "_slidesPerColumnFill", "_slidesPerGroup", "_slidesPerGroupSkip", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_watchSlidesVisibility", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function aq(d, a) {
                var e = a.slidesPerView;
                if (a.breakpoints) {
                    var f = o.prototype.getBreakpoint(a.breakpoints),
                        b = f in a.breakpoints ? a.breakpoints[f] : void 0;
                    b && b.slidesPerView && (e = b.slidesPerView)
                }
                var c = Math.ceil(parseFloat(a.loopedSlides || e, 10));
                return (c += a.loopAdditionalSlides) > d.length && (c = d.length), c
            }

            function ar(a) {
                var b = [];
                return x.default.Children.toArray(a).forEach(function(a) {
                    a.type && "SwiperSlide" === a.type.displayName ? b.push(a) : a.props && a.props.children && ar(a.props.children).forEach(function(a) {
                        return b.push(a)
                    })
                }), b
            }

            function as(a, b) {
                return "undefined" == typeof window ? c.useEffect(a, b) : c.useLayoutEffect(a, b)
            }
            var at = ["className", "tag", "wrapperTag", "children", "onSwiper"];

            function au() {
                return (au = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var p = c.forwardRef(function(j, Q) {
                var k, i, e, l, m, n, D, p, q, r, d = void 0 === j ? {} : j,
                    s = d.className,
                    t = d.tag,
                    u = d.wrapperTag,
                    E = d.children,
                    R = d.onSwiper,
                    F = function(c, f) {
                        if (null == c) return {};
                        var a, b, d = {},
                            e = Object.keys(c);
                        for (b = 0; b < e.length; b++) a = e[b], f.indexOf(a) >= 0 || (d[a] = c[a]);
                        return d
                    }(d, at),
                    G = !1,
                    v = c.useState("swiper-container"),
                    H = v[0],
                    S = v[1],
                    w = c.useState(null),
                    y = w[0],
                    I = w[1],
                    z = c.useState(!1),
                    T = z[0],
                    U = z[1],
                    V = c.useRef(!1),
                    A = c.useRef(null),
                    a = c.useRef(null),
                    W = c.useRef(null),
                    X = c.useRef(null),
                    J = c.useRef(null),
                    K = c.useRef(null),
                    L = c.useRef(null),
                    M = c.useRef(null),
                    g = (void 0 === (i = F) && (i = {}), l = {}, m = {}, ak(e = {
                        on: {}
                    }, o.defaults), ak(e, o.extendedDefaults), e._emitClasses = !0, e.init = !1, n = {}, D = ap.map(function(a) {
                        return a.replace(/_/, "")
                    }), Object.keys(i).forEach(function(a) {
                        D.indexOf(a) >= 0 ? aj(i[a]) ? (e[a] = {}, m[a] = {}, ak(e[a], i[a]), ak(m[a], i[a])) : (e[a] = i[a], m[a] = i[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof i[a] ? l["" + a[2].toLowerCase() + a.substr(3)] = i[a] : n[a] = i[a]
                    }), ["navigation", "pagination", "scrollbar"].forEach(function(a) {
                        !0 === e[a] && (e[a] = {}), !1 === e[a] && delete e[a]
                    }), {
                        params: e,
                        passedParams: m,
                        rest: n,
                        events: l
                    }),
                    b = g.params,
                    Y = g.passedParams,
                    N = g.rest,
                    O = g.events,
                    B = (p = E, q = [], r = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    }, x.default.Children.toArray(p).forEach(function(a) {
                        if (a.type && "SwiperSlide" === a.type.displayName) q.push(a);
                        else if (a.props && a.props.slot && r[a.props.slot]) r[a.props.slot].push(a);
                        else if (a.props && a.props.children) {
                            var b = ar(a.props.children);
                            b.length > 0 ? b.forEach(function(a) {
                                return q.push(a)
                            }) : r["container-end"].push(a)
                        } else r["container-end"].push(a)
                    }), {
                        slides: q,
                        slots: r
                    }),
                    f = B.slides,
                    h = B.slots,
                    P = function() {
                        U(!T)
                    };
                if (Object.assign(b.on, {
                        _containerClasses: function(b, a) {
                            S(a)
                        }
                    }), !A.current && (Object.assign(b.on, O), G = !0, a.current = (k = b, new o(k)), a.current.loopCreate = function() {}, a.current.loopDestroy = function() {}, b.loop && (a.current.loopedSlides = aq(f, b)), a.current.virtual && a.current.params.virtual.enabled)) {
                    a.current.virtual.slides = f;
                    var C = {
                        cache: !1,
                        renderExternal: I,
                        renderExternalUpdate: !1
                    };
                    ak(a.current.params.virtual, C), ak(a.current.originalParams.virtual, C)
                }
                a.current && a.current.on("_beforeBreakpoint", P);
                var Z = function() {
                        !G && O && a.current && Object.keys(O).forEach(function(b) {
                            a.current.on(b, O[b])
                        })
                    },
                    $ = function() {
                        O && a.current && Object.keys(O).forEach(function(b) {
                            a.current.off(b, O[b])
                        })
                    };
                return c.useEffect(function() {
                    return function() {
                        a.current && a.current.off("_beforeBreakpoint", P)
                    }
                }), c.useEffect(function() {
                    !V.current && a.current && (a.current.emitSlidesClasses(), V.current = !0)
                }), as(function() {
                    if (Q && (Q.current = A.current), A.current) {
                        var d, e, j, f, g, h, i, c;
                        return d = {
                                el: A.current,
                                nextEl: J.current,
                                prevEl: K.current,
                                paginationEl: L.current,
                                scrollbarEl: M.current,
                                swiper: a.current
                            }, e = b, j = d.el, f = d.nextEl, g = d.prevEl, h = d.paginationEl, i = d.scrollbarEl, c = d.swiper, al(e) && f && g && (c.params.navigation.nextEl = f, c.originalParams.navigation.nextEl = f, c.params.navigation.prevEl = g, c.originalParams.navigation.prevEl = g), am(e) && h && (c.params.pagination.el = h, c.originalParams.pagination.el = h), an(e) && i && (c.params.scrollbar.el = i, c.originalParams.scrollbar.el = i), c.init(j), R && R(a.current),
                            function() {
                                a.current && !a.current.destroyed && a.current.destroy(!0, !1)
                            }
                    }
                }, []), as(function() {
                    Z();
                    var g, q, r, s, t, u, c, v, d, e, k, l, m, n, w, b, h, i, j, o, p, y, x = function(h, e, a, b) {
                        var c = [];
                        if (!e) return c;
                        var d = function(a) {
                                0 > c.indexOf(a) && c.push(a)
                            },
                            f = b.map(function(a) {
                                return a.key
                            }),
                            g = a.map(function(a) {
                                return a.key
                            });
                        return f.join("") !== g.join("") && d("children"), b.length !== a.length && d("children"), ap.filter(function(a) {
                            return "_" === a[0]
                        }).map(function(a) {
                            return a.replace(/_/, "")
                        }).forEach(function(a) {
                            if (a in h && a in e) {
                                if (aj(h[a]) && aj(e[a])) {
                                    var b = Object.keys(h[a]),
                                        c = Object.keys(e[a]);
                                    b.length !== c.length ? d(a) : (b.forEach(function(b) {
                                        h[a][b] !== e[a][b] && d(a)
                                    }), c.forEach(function(b) {
                                        h[a][b] !== e[a][b] && d(a)
                                    }))
                                } else h[a] !== e[a] && d(a)
                            }
                        }), c
                    }(Y, W.current, f, X.current);
                    return W.current = Y, X.current = f, x.length && a.current && !a.current.destroyed && (g = {
                            swiper: a.current,
                            slides: f,
                            passedParams: Y,
                            changedParams: x,
                            nextEl: J.current,
                            prevEl: K.current,
                            scrollbarEl: M.current,
                            paginationEl: L.current
                        }, c = g.swiper, v = g.slides, d = g.passedParams, e = g.changedParams, k = g.nextEl, l = g.prevEl, m = g.scrollbarEl, n = g.paginationEl, w = e.filter(function(a) {
                            return "children" !== a && "direction" !== a
                        }), b = c.params, h = c.pagination, i = c.navigation, j = c.scrollbar, o = c.virtual, p = c.thumbs, e.includes("thumbs") && d.thumbs && d.thumbs.swiper && b.thumbs && !b.thumbs.swiper && (q = !0), e.includes("controller") && d.controller && d.controller.control && b.controller && !b.controller.control && (r = !0), e.includes("pagination") && d.pagination && (d.pagination.el || n) && (b.pagination || !1 === b.pagination) && h && !h.el && (s = !0), e.includes("scrollbar") && d.scrollbar && (d.scrollbar.el || m) && (b.scrollbar || !1 === b.scrollbar) && j && !j.el && (t = !0), e.includes("navigation") && d.navigation && (d.navigation.prevEl || l) && (d.navigation.nextEl || k) && (b.navigation || !1 === b.navigation) && i && !i.prevEl && !i.nextEl && (u = !0), y = function(a) {
                            c[a] && (c[a].destroy(), "navigation" === a ? (b[a].prevEl = void 0, b[a].nextEl = void 0, c[a].prevEl = void 0, c[a].nextEl = void 0) : (b[a].el = void 0, c[a].el = void 0))
                        }, w.forEach(function(a) {
                            if (aj(b[a]) && aj(d[a])) ak(b[a], d[a]);
                            else {
                                var c = d[a];
                                (!0 === c || !1 === c) && ("navigation" === a || "pagination" === a || "scrollbar" === a) ? !1 === c && y(a): b[a] = d[a]
                            }
                        }), e.includes("children") && o && b.virtual.enabled ? (o.slides = v, o.update(!0)) : e.includes("children") && c.lazy && c.params.lazy.enabled && c.lazy.load(), q && p.init() && p.update(!0), r && (c.controller.control = b.controller.control), s && (n && (b.pagination.el = n), h.init(), h.render(), h.update()), t && (m && (b.scrollbar.el = m), j.init(), j.updateSize(), j.setTranslate()), u && (k && (b.navigation.nextEl = k), l && (b.navigation.prevEl = l), i.init(), i.update()), e.includes("allowSlideNext") && (c.allowSlideNext = d.allowSlideNext), e.includes("allowSlidePrev") && (c.allowSlidePrev = d.allowSlidePrev), e.includes("direction") && c.changeDirection(d.direction, !1), c.update()),
                        function() {
                            $()
                        }
                }), as(function() {
                    var b;
                    !(b = a.current) || b.destroyed || !b.params.virtual || b.params.virtual && !b.params.virtual.enabled || (b.updateSlides(), b.updateProgress(), b.updateSlidesClasses(), b.lazy && b.params.lazy.enabled && b.lazy.load(), b.parallax && b.params.parallax && b.params.parallax.enabled && b.parallax.setTranslate())
                }, [y]), x.default.createElement(void 0 === t ? "div" : t, au({
                    ref: A,
                    className: ao("" + H + (s ? " " + s : ""))
                }, N), h["container-start"], al(b) && x.default.createElement(x.default.Fragment, null, x.default.createElement("div", {
                    ref: K,
                    className: "swiper-button-prev"
                }), x.default.createElement("div", {
                    ref: J,
                    className: "swiper-button-next"
                })), an(b) && x.default.createElement("div", {
                    ref: M,
                    className: "swiper-scrollbar"
                }), am(b) && x.default.createElement("div", {
                    ref: L,
                    className: "swiper-pagination"
                }), x.default.createElement(void 0 === u ? "div" : u, {
                    className: "swiper-wrapper"
                }, h["wrapper-start"], b.virtual ? function(b, d, a) {
                    if (!a) return null;
                    var c, e = b.isHorizontal() ? ((c = {})[b.rtlTranslate ? "right" : "left"] = a.offset + "px", c) : {
                        top: a.offset + "px"
                    };
                    return d.filter(function(c, b) {
                        return b >= a.from && b <= a.to
                    }).map(function(a) {
                        return x.default.cloneElement(a, {
                            swiper: b,
                            style: e
                        })
                    })
                }(a.current, f, y) : !b.loop || a.current && a.current.destroyed ? f.map(function(b) {
                    return x.default.cloneElement(b, {
                        swiper: a.current
                    })
                }) : function(c, f, a) {
                    var b = f.map(function(a, b) {
                        return x.default.cloneElement(a, {
                            swiper: c,
                            "data-swiper-slide-index": b
                        })
                    });

                    function k(b, c, d) {
                        return x.default.cloneElement(b, {
                            key: b.key + "-duplicate-" + c + "-" + d,
                            className: (b.props.className || "") + " " + a.slideDuplicateClass
                        })
                    }
                    if (a.loopFillGroupWithBlank) {
                        var d = a.slidesPerGroup - b.length % a.slidesPerGroup;
                        if (d !== a.slidesPerGroup)
                            for (var e = 0; e < d; e += 1) {
                                var g = x.default.createElement("div", {
                                    className: a.slideClass + " " + a.slideBlankClass
                                });
                                b.push(g)
                            }
                    }
                    "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = b.length);
                    var h = aq(b, a),
                        i = [],
                        j = [];
                    return b.forEach(function(c, a) {
                        a < h && j.push(k(c, a, "prepend")), a < b.length && a >= b.length - h && i.push(k(c, a, "append"))
                    }), c && (c.loopedSlides = h), [].concat(i, b, j)
                }(a.current, f, b), h["wrapper-end"]), h["container-end"])
            });
            p.displayName = "Swiper";
            var av = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];

            function aw() {
                return (aw = Object.assign || function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var e = c.forwardRef(function(e, q) {
                var k, b = void 0 === e ? {} : e,
                    f = b.tag,
                    l = b.children,
                    g = b.className,
                    h = void 0 === g ? "" : g,
                    m = b.swiper,
                    d = b.zoom,
                    n = b.virtualIndex,
                    o = function(c, f) {
                        if (null == c) return {};
                        var a, b, d = {},
                            e = Object.keys(c);
                        for (b = 0; b < e.length; b++) a = e[b], f.indexOf(a) >= 0 || (d[a] = c[a]);
                        return d
                    }(b, av),
                    p = c.useRef(null),
                    i = c.useState("swiper-slide"),
                    a = i[0],
                    r = i[1];

                function s(c, a, b) {
                    a === p.current && r(b)
                }
                as(function() {
                    if (q && (q.current = p.current), p.current && m) {
                        if (m.destroyed) {
                            "swiper-slide" !== a && r("swiper-slide");
                            return
                        }
                        return m.on("_slideClass", s),
                            function() {
                                m && m.off("_slideClass", s)
                            }
                    }
                }), as(function() {
                    m && p.current && r(m.getSlideClasses(p.current))
                }, [m]), "function" == typeof l && (k = {
                    isActive: a.indexOf("swiper-slide-active") >= 0 || a.indexOf("swiper-slide-duplicate-active") >= 0,
                    isVisible: a.indexOf("swiper-slide-visible") >= 0,
                    isDuplicate: a.indexOf("swiper-slide-duplicate") >= 0,
                    isPrev: a.indexOf("swiper-slide-prev") >= 0 || a.indexOf("swiper-slide-duplicate-prev") >= 0,
                    isNext: a.indexOf("swiper-slide-next") >= 0 || a.indexOf("swiper-slide-duplicate-next") >= 0
                });
                var j = function() {
                    return "function" == typeof l ? l(k) : l
                };
                return x.default.createElement(void 0 === f ? "div" : f, aw({
                    ref: p,
                    className: ao("" + a + (h ? " " + h : "")),
                    "data-swiper-slide-index": n
                }, o), d ? x.default.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof d ? d : void 0
                }, j()) : j())
            });
            e.displayName = "SwiperSlide";
            /*!
              Copyright (c) 2018 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            var ax = function(b) {
                    var a = {
                        exports: {}
                    };
                    return b(a, a.exports), a.exports
                }(function(a) {
                    ! function() {
                        var c = {}.hasOwnProperty;

                        function b() {
                            for (var d = [], e = 0; e < arguments.length; e++) {
                                var a = arguments[e];
                                if (a) {
                                    var f = typeof a;
                                    if ("string" === f || "number" === f) d.push(a);
                                    else if (Array.isArray(a)) {
                                        if (a.length) {
                                            var h = b.apply(null, a);
                                            h && d.push(h)
                                        }
                                    } else if ("object" === f) {
                                        if (a.toString === Object.prototype.toString)
                                            for (var g in a) c.call(a, g) && a[g] && d.push(g);
                                        else d.push(a.toString())
                                    }
                                }
                            }
                            return d.join(" ")
                        }
                        a.exports ? (b.default = b, a.exports = b) : window.classNames = b
                    }()
                }),
                q = function(a) {
                    var c = a.position,
                        d = a.styleVariant,
                        e = void 0 === d ? "primary" : d,
                        f = a.previousIcon,
                        g = void 0 === f ? "chevron-left" : f,
                        h = a.nextIcon,
                        i = void 0 === h ? "chevron-right" : h,
                        j = a.size,
                        k = void 0 === j ? "xl" : j,
                        l = a.navigationJustifying,
                        b = a.swiper;
                    return w.useRerenderOnResize(), x.default.createElement(x.default.Fragment, null, x.default.createElement("div", {
                        className: ax("lxp-Carousel__navigation", {
                            "lxp-Carousel__navigation--disabled": (null == b ? void 0 : b.isBeginning) && (null == b ? void 0 : b.isEnd)
                        })
                    }, "absolute" === (void 0 === c ? "absolute" : c) ? x.default.createElement(x.default.Fragment, null, x.default.createElement("div", {
                        className: "lxp-Carousel__navigation-prev",
                        id: "swiper-prev"
                    }, x.default.createElement(v.Icon, {
                        styleVariant: e,
                        size: k,
                        iconName: g
                    })), x.default.createElement("div", {
                        className: "lxp-Carousel__navigation-next",
                        id: "swiper-next"
                    }, x.default.createElement(v.Icon, {
                        styleVariant: e,
                        size: k,
                        iconName: i
                    }))) : x.default.createElement("div", {
                        className: "lxp-Carousel__controls-wrapper",
                        style: {
                            justifyContent: void 0 === l ? "center" : l
                        }
                    }, x.default.createElement("div", {
                        id: "swiper-prev"
                    }, x.default.createElement(v.IconButton, {
                        backdrop: "transparent",
                        elementType: "button",
                        iconName: g,
                        label: "Previous slide",
                        styleVariant: "secondary",
                        type: "button",
                        isLabelVisible: !1
                    })), x.default.createElement("div", {
                        id: "swiper-next"
                    }, x.default.createElement(v.IconButton, {
                        backdrop: "transparent",
                        elementType: "button",
                        iconName: i,
                        label: "Next slide",
                        styleVariant: "secondary",
                        type: "button",
                        isLabelVisible: !1
                    })))))
                };
            q.displayName = "CarouselNavigation", o.use([{
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function(a) {
                            return a
                        },
                        formatFractionTotal: function(a) {
                            return a
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function() {
                    N(this, {
                        pagination: af({
                            dynamicBulletIndex: 0
                        }, ag)
                    })
                },
                on: {
                    init: function(a) {
                        a.pagination.init(), a.pagination.render(), a.pagination.update()
                    },
                    activeIndexChange: function(a) {
                        a.params.loop ? a.pagination.update() : void 0 === a.snapIndex && a.pagination.update()
                    },
                    snapIndexChange: function(a) {
                        a.params.loop || a.pagination.update()
                    },
                    slidesLengthChange: function(a) {
                        a.params.loop && (a.pagination.render(), a.pagination.update())
                    },
                    snapGridLengthChange: function(a) {
                        a.params.loop || (a.pagination.render(), a.pagination.update())
                    },
                    destroy: function(a) {
                        a.pagination.destroy()
                    },
                    "enable disable": function(a) {
                        var b = a.pagination.$el;
                        b && b[a.enabled ? "removeClass" : "addClass"](a.params.pagination.lockClass)
                    },
                    click: function(a, c) {
                        var b = c.target;
                        if (a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !k(b).hasClass(a.params.pagination.bulletClass)) {
                            if (a.navigation && (a.navigation.nextEl && b === a.navigation.nextEl || a.navigation.prevEl && b === a.navigation.prevEl)) return;
                            !0 === a.pagination.$el.hasClass(a.params.pagination.hiddenClass) ? a.emit("paginationShow") : a.emit("paginationHide"), a.pagination.$el.toggleClass(a.params.pagination.hiddenClass)
                        }
                    }
                }
            }, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                },
                create: function() {
                    N(this, {
                        mousewheel: {
                            enabled: !1,
                            lastScrollTime: m(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: [],
                            enable: ac.enable,
                            disable: ac.disable,
                            handle: ac.handle,
                            handleMouseEnter: ac.handleMouseEnter,
                            handleMouseLeave: ac.handleMouseLeave,
                            animateSlider: ac.animateSlider,
                            releaseScroll: ac.releaseScroll
                        }
                    })
                },
                on: {
                    init: function(a) {
                        !a.params.mousewheel.enabled && a.params.cssMode && a.mousewheel.disable(), a.params.mousewheel.enabled && a.mousewheel.enable()
                    },
                    destroy: function(a) {
                        a.params.cssMode && a.mousewheel.enable(), a.mousewheel.enabled && a.mousewheel.disable()
                    }
                }
            }, {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group"
                    }
                },
                create: function() {
                    N(this, {
                        a11y: ah({}, ai, {
                            liveRegion: k('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        })
                    })
                },
                on: {
                    afterInit: function(a) {
                        a.params.a11y.enabled && (a.a11y.init(), a.a11y.updateNavigation())
                    },
                    toEdge: function(a) {
                        a.params.a11y.enabled && a.a11y.updateNavigation()
                    },
                    fromEdge: function(a) {
                        a.params.a11y.enabled && a.a11y.updateNavigation()
                    },
                    paginationUpdate: function(a) {
                        a.params.a11y.enabled && a.a11y.updatePagination()
                    },
                    destroy: function(a) {
                        a.params.a11y.enabled && a.a11y.destroy()
                    }
                }
            }, {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                },
                create: function() {
                    N(this, {
                        navigation: ad({}, ae)
                    })
                },
                on: {
                    init: function(a) {
                        a.navigation.init(), a.navigation.update()
                    },
                    toEdge: function(a) {
                        a.navigation.update()
                    },
                    fromEdge: function(a) {
                        a.navigation.update()
                    },
                    destroy: function(a) {
                        a.navigation.destroy()
                    },
                    "enable disable": function(a) {
                        var b = a.navigation,
                            c = b.$nextEl,
                            d = b.$prevEl;
                        c && c[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass), d && d[a.enabled ? "removeClass" : "addClass"](a.params.navigation.lockClass)
                    },
                    click: function(a, g) {
                        var e, f = a.navigation,
                            b = f.$nextEl,
                            c = f.$prevEl,
                            d = g.target;
                        if (a.params.navigation.hideOnClick && !k(d).is(c) && !k(d).is(b)) {
                            if (a.pagination && a.params.pagination && a.params.pagination.clickable && (a.pagination.el === d || a.pagination.el.contains(d))) return;
                            b ? e = b.hasClass(a.params.navigation.hiddenClass) : c && (e = c.hasClass(a.params.navigation.hiddenClass)), !0 === e ? a.emit("navigationShow") : a.emit("navigationHide"), b && b.toggleClass(a.params.navigation.hiddenClass), c && c.toggleClass(a.params.navigation.hiddenClass)
                        }
                    }
                }
            }]);
            var f = function(b) {
                var i = b.children,
                    t = b.containerMessage,
                    u = b.slideLabelMessage,
                    d = b.hasNavigation,
                    e = b.testId,
                    a = b.controls,
                    j = function(b, e) {
                        var d = {};
                        for (var a in b) Object.prototype.hasOwnProperty.call(b, a) && 0 > e.indexOf(a) && (d[a] = b[a]);
                        if (null != b && "function" == typeof Object.getOwnPropertySymbols)
                            for (var c = 0, a = Object.getOwnPropertySymbols(b); c < a.length; c++) 0 > e.indexOf(a[c]) && Object.prototype.propertyIsEnumerable.call(b, a[c]) && (d[a[c]] = b[a[c]]);
                        return d
                    }(b, ["children", "containerMessage", "slideLabelMessage", "hasNavigation", "testId", "controls"]),
                    k = c.useMemo(function() {
                        return {
                            clickable: !0,
                            el: "#swiper-pagination",
                            bulletElement: "button",
                            bulletClass: "lxp-Carousel__pagination__bullet",
                            bulletActiveClass: "lxp-Carousel__pagination__bullet--active"
                        }
                    }, []),
                    l = c.useMemo(function() {
                        return {
                            enabled: !0,
                            containerMessage: t,
                            containerRoleDescriptionMessage: "carousel",
                            slideRole: "group",
                            slideLabelMessage: u + " {{index}} of {{slidesLength}}",
                            itemRoleDescriptionMessage: "slide",
                            paginationBulletMessage: "Go to Position {{index}}"
                        }
                    }, []),
                    m = c.useMemo(function() {
                        return {
                            prevEl: a ? "#swiper-prev button" : "#swiper-prev",
                            nextEl: a ? "#swiper-next button" : "#swiper-next",
                            lockClass: "lxp-Carousel__navigation--lock",
                            disabledClass: "lxp-Carousel__navigation--disabled",
                            hiddenClass: "lxp-Carousel__navigation--lock"
                        }
                    }, []),
                    n = c.useMemo(function() {
                        return d && !0 !== d ? d : {
                            navigationJustifying: (null == a ? void 0 : a.navigationJustifying) || "center",
                            position: a ? "static" : "absolute"
                        }
                    }, [d, a]),
                    o = c.useMemo(function() {
                        return {
                            forceToAxis: !0
                        }
                    }, []),
                    f = (null == a ? void 0 : a.navigationPlacement) || "end",
                    g = "start" === f && (null == a ? void 0 : a.navigationJustifying) === "flex-end" && (null == a ? void 0 : a.carouselTitle) && "boolean" == typeof d,
                    r = g ? {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: (null == a ? void 0 : a.titleSize) || 20
                    } : {},
                    h = c.useState(null),
                    s = h[0],
                    w = h[1];
                return x.default.createElement("div", {
                    className: "lxp-Carousel",
                    "data-testid": void 0 === e ? "" : e
                }, x.default.createElement(p, y({
                    pagination: k,
                    a11y: l,
                    mousewheel: o,
                    role: "region",
                    navigation: !!d && m,
                    onSwiper: function(a) {
                        w(a)
                    }
                }, j), i, !a && x.default.createElement("div", {
                    slot: "container-end",
                    className: "lxp-Carousel__pagination",
                    id: "swiper-pagination"
                }), d && x.default.createElement("div", {
                    slot: "container-" + f,
                    style: r
                }, g && x.default.createElement(v.Heading, {
                    level: "2",
                    size: null == a ? void 0 : a.titleSize
                }, null == a ? void 0 : a.carouselTitle), x.default.createElement(q, y({
                    swiper: s
                }, n)))))
            };
            f.Slide = e, g.l = f
        }
    }
])
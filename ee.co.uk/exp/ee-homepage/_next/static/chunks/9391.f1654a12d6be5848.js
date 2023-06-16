"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9391], {
        9391: function(e, a, b) {
            function f(a) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                    return typeof a
                } : function(a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                })(a)
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var c = function(a, h) {
                if (!h && a && a.__esModule) return a;
                if (null === a || "object" !== f(a) && "function" != typeof a) return {
                    default: a
                };
                var c = g(h);
                if (c && c.has(a)) return c.get(a);
                var d = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var b in a)
                    if ("default" !== b && Object.prototype.hasOwnProperty.call(a, b)) {
                        var e = i ? Object.getOwnPropertyDescriptor(a, b) : null;
                        e && (e.get || e.set) ? Object.defineProperty(d, b, e) : d[b] = a[b]
                    }
                return d.default = a, c && c.set(a, d), d
            }(b(7294));

            function g(a) {
                if ("function" != typeof WeakMap) return null;
                var b = new WeakMap,
                    c = new WeakMap;
                return (g = function(a) {
                    return a ? c : b
                })(a)
            }

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(d) {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
                    }
                    return d
                }).apply(this, arguments)
            }
            var d = c.forwardRef(function(a, b) {
                return c.createElement("svg", h({
                    viewBox: "0 0 32 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: b
                }, a), c.createElement("path", {
                    d: "M13.2422 16.0004L18.9395 21.7044C19.1915 21.9569 19.3331 22.299 19.3331 22.6557C19.3331 23.0125 19.1915 23.3546 18.9395 23.6071C18.8149 23.7319 18.667 23.8309 18.5041 23.8985C18.3412 23.966 18.1665 24.0008 17.9902 24.0008C17.8138 24.0008 17.6392 23.966 17.4763 23.8985C17.3134 23.8309 17.1654 23.7319 17.0409 23.6071L10.3929 16.9511C10.1413 16.6986 10 16.3568 10 16.0004C10 15.644 10.1413 15.3022 10.3929 15.0497L17.0409 8.39374C17.1654 8.26892 17.3134 8.1699 17.4763 8.10234C17.6392 8.03478 17.8138 8 17.9902 8C18.1665 8 18.3412 8.03478 18.5041 8.10234C18.667 8.1699 18.8149 8.26892 18.9395 8.39374C19.1915 8.64621 19.3331 8.98835 19.3331 9.34507C19.3331 9.70178 19.1915 10.0439 18.9395 10.2964L13.2422 16.0004Z"
                }))
            });
            a.default = d
        }
    }
])
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5001], {
        5001: function(e, a, b) {
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
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.7574 16.0004L13.06 10.2964C12.808 10.0439 12.6665 9.70178 12.6665 9.34507C12.6665 8.98835 12.808 8.64621 13.06 8.39374C13.1846 8.26892 13.3326 8.1699 13.4955 8.10234C13.6584 8.03478 13.833 8 14.0094 8C14.1857 8 14.3603 8.03478 14.5232 8.10234C14.6861 8.1699 14.8341 8.26892 14.9587 8.39374L21.6067 15.0497C21.8583 15.3022 21.9996 15.644 21.9996 16.0004C21.9996 16.3568 21.8583 16.6986 21.6067 16.9511L14.9587 23.6071C14.8341 23.7319 14.6861 23.8309 14.5232 23.8985C14.3603 23.966 14.1857 24.0008 14.0094 24.0008C13.833 24.0008 13.6584 23.966 13.4955 23.8985C13.3326 23.8309 13.1846 23.7319 13.06 23.6071C12.808 23.3546 12.6665 23.0125 12.6665 22.6557C12.6665 22.299 12.808 21.9569 13.06 21.7044L18.7574 16.0004Z"
                }))
            });
            a.default = d
        }
    }
])
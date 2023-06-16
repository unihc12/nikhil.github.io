"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [549], {
        549: function(e, a, b) {
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
                    d: "M10.6667 5.33317V26.6665H21.3333V5.33317H10.6667ZM9.33333 2.6665H22.6667C23.0203 2.6665 23.3594 2.80698 23.6095 3.05703C23.8595 3.30708 24 3.64622 24 3.99984V27.9998C24 28.3535 23.8595 28.6926 23.6095 28.9426C23.3594 29.1927 23.0203 29.3332 22.6667 29.3332H9.33333C8.97971 29.3332 8.64057 29.1927 8.39052 28.9426C8.14048 28.6926 8 28.3535 8 27.9998V3.99984C8 3.64622 8.14048 3.30708 8.39052 3.05703C8.64057 2.80698 8.97971 2.6665 9.33333 2.6665ZM16 23.9998C16.3536 23.9998 16.6928 23.8594 16.9428 23.6093C17.1929 23.3593 17.3333 23.0201 17.3333 22.6665C17.3333 22.3129 17.1929 21.9737 16.9428 21.7237C16.6928 21.4736 16.3536 21.3332 16 21.3332C15.6464 21.3332 15.3072 21.4736 15.0572 21.7237C14.8071 21.9737 14.6667 22.3129 14.6667 22.6665C14.6667 23.0201 14.8071 23.3593 15.0572 23.6093C15.3072 23.8594 15.6464 23.9998 16 23.9998Z"
                }))
            });
            a.default = d
        }
    }
])
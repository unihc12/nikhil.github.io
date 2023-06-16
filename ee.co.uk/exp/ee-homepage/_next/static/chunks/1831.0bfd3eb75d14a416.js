"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1831], {
        1831: function(e, a, b) {
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
                    d: "M11.9999 26.6589H19.9999C20.3535 26.6589 20.6927 26.7993 20.9427 27.0494C21.1928 27.2994 21.3333 27.6386 21.3333 27.9922C21.3333 28.3458 21.1928 28.6849 20.9427 28.935C20.6927 29.185 20.3535 29.3255 19.9999 29.3255H11.9999C11.6463 29.3255 11.3072 29.185 11.0571 28.935C10.8071 28.6849 10.6666 28.3458 10.6666 27.9922C10.6666 27.6386 10.8071 27.2994 11.0571 27.0494C11.3072 26.7993 11.6463 26.6589 11.9999 26.6589ZM3.04259 3.99219H28.9573C29.5519 3.99219 29.7666 4.05352 29.9839 4.17085C30.2013 4.28685 30.3719 4.45752 30.4879 4.67485C30.6052 4.89219 30.6666 5.10685 30.6666 5.70152V23.6162C30.6666 24.2109 30.6052 24.4255 30.4879 24.6429C30.3742 24.8576 30.1986 25.0332 29.9839 25.1469C29.7666 25.2642 29.5519 25.3255 28.9573 25.3255H3.04259C2.44792 25.3255 2.23325 25.2642 2.01592 25.1469C1.8012 25.0332 1.62561 24.8576 1.51192 24.6429C1.39459 24.4255 1.33325 24.2109 1.33325 23.6162V5.70152C1.33325 5.10685 1.39459 4.89219 1.51192 4.67485C1.62561 4.46014 1.8012 4.28454 2.01592 4.17085C2.23325 4.05352 2.44792 3.99219 3.04259 3.99219ZM3.99992 6.65885V22.6589H27.9999V6.65885H3.99992Z"
                }))
            });
            a.default = d
        }
    }
])
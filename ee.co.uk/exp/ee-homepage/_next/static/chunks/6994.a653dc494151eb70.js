"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6994], {
        6994: function(e, a, b) {
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
                    d: "M8.37584 2.6665H17.6718C18.0118 2.6665 18.1292 2.6785 18.2585 2.70784C18.3859 2.73613 18.5076 2.78571 18.6185 2.8545C18.7332 2.92384 18.8252 2.99717 19.0692 3.2345L24.7332 8.7465C24.9825 8.9905 25.0598 9.08384 25.1332 9.19984C25.206 9.31258 25.2588 9.43709 25.2892 9.56784C25.3198 9.70117 25.3332 9.82117 25.3332 10.1705V27.6238C25.3332 28.2172 25.2718 28.4318 25.1545 28.6505C25.0406 28.8647 24.865 29.0398 24.6505 29.1532C24.4332 29.2705 24.2185 29.3318 23.6238 29.3318H8.37584C7.78117 29.3318 7.5665 29.2705 7.34917 29.1532C7.13445 29.0395 6.95886 28.8639 6.84517 28.6492C6.72784 28.4318 6.6665 28.2172 6.6665 27.6225V4.37584C6.6665 3.78117 6.72784 3.5665 6.84517 3.34917C6.95886 3.13445 7.13445 2.95886 7.34917 2.84517C7.5665 2.72784 7.78117 2.6665 8.37584 2.6665ZM9.33317 5.33317V26.6665H22.6665V10.4585L17.4025 5.33317H9.33317ZM13.7092 15.9998H18.2905C18.8852 15.9998 19.0998 16.0612 19.3172 16.1785C19.5345 16.2945 19.7052 16.4652 19.8212 16.6825C19.9385 16.8998 19.9998 17.1145 19.9998 17.7092V22.2905C19.9998 22.8852 19.9385 23.0998 19.8212 23.3172C19.7075 23.5319 19.5319 23.7075 19.3172 23.8212C19.0998 23.9385 18.8852 23.9998 18.2905 23.9998H13.7092C13.1145 23.9998 12.8998 23.9385 12.6825 23.8212C12.4678 23.7075 12.2922 23.5319 12.1785 23.3172C12.0612 23.0998 11.9998 22.8852 11.9998 22.2905V17.7092C11.9998 17.1145 12.0612 16.8998 12.1785 16.6825C12.2922 16.4678 12.4678 16.2922 12.6825 16.1785C12.8998 16.0612 13.1145 15.9998 13.7092 15.9998Z"
                }))
            });
            a.default = d
        }
    }
])
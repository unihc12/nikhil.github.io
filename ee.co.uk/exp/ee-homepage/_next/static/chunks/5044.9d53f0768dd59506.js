"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5044], {
        5044: function(e, a, b) {
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
                    d: "M14.6667 26.6665V27.6238C14.6667 28.2185 14.6053 28.4332 14.488 28.6505C14.3743 28.8652 14.1987 29.0408 13.984 29.1545C13.7667 29.2718 13.552 29.3332 12.9573 29.3332H5.70933C5.11467 29.3332 4.9 29.2718 4.68267 29.1545C4.46795 29.0408 4.29235 28.8652 4.17867 28.6505C4.06133 28.4332 4 28.2185 4 27.6238V13.7092C4 13.1145 4.06133 12.8998 4.17867 12.6825C4.29235 12.4678 4.46795 12.2922 4.68267 12.1785C4.9 12.0612 5.11467 11.9998 5.70933 11.9998H9.33333V4.37584C9.33333 3.78117 9.39467 3.5665 9.512 3.34917C9.62569 3.13445 9.80128 2.95886 10.016 2.84517C10.2333 2.72784 10.448 2.6665 11.0427 2.6665H26.2907C26.8853 2.6665 27.1 2.72784 27.3173 2.84517C27.5347 2.96117 27.7053 3.13184 27.8213 3.34917C27.9387 3.5665 28 3.78117 28 4.37584V24.9572C28 25.5518 27.9387 25.7665 27.8213 25.9838C27.7076 26.1986 27.5321 26.3742 27.3173 26.4878C27.1 26.6052 26.8853 26.6665 26.2907 26.6665H14.6667ZM14.6667 23.9998H25.3333V5.33317H12V11.9998H12.9573C13.552 11.9998 13.7667 12.0612 13.984 12.1785C14.2013 12.2945 14.372 12.4652 14.488 12.6825C14.6053 12.8998 14.6667 13.1145 14.6667 13.7092V23.9998ZM6.66667 26.6665H12V14.6665H6.66667V26.6665ZM9.33333 25.3332C8.97971 25.3332 8.64057 25.1927 8.39052 24.9426C8.14048 24.6926 8 24.3535 8 23.9998C8 23.6462 8.14048 23.3071 8.39052 23.057C8.64057 22.807 8.97971 22.6665 9.33333 22.6665C9.68696 22.6665 10.0261 22.807 10.2761 23.057C10.5262 23.3071 10.6667 23.6462 10.6667 23.9998C10.6667 24.3535 10.5262 24.6926 10.2761 24.9426C10.0261 25.1927 9.68696 25.3332 9.33333 25.3332ZM18.6667 22.6665C18.313 22.6665 17.9739 22.526 17.7239 22.276C17.4738 22.0259 17.3333 21.6868 17.3333 21.3332C17.3333 20.9795 17.4738 20.6404 17.7239 20.3904C17.9739 20.1403 18.313 19.9998 18.6667 19.9998C19.0203 19.9998 19.3594 20.1403 19.6095 20.3904C19.8595 20.6404 20 20.9795 20 21.3332C20 21.6868 19.8595 22.0259 19.6095 22.276C19.3594 22.526 19.0203 22.6665 18.6667 22.6665Z"
                }))
            });
            a.default = d
        }
    }
])
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1608], {
        1608: function(e, a, b) {
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
                    d: "M25.3333 19.9998H6.66667V25.3331H25.3333V19.9998ZM20 17.3331V13.3331C20 12.9795 20.1405 12.6404 20.3905 12.3903C20.6406 12.1403 20.9797 11.9998 21.3333 11.9998C21.687 11.9998 22.0261 12.1403 22.2761 12.3903C22.5262 12.6404 22.6667 12.9795 22.6667 13.3331V17.3331H26.6667C27.0203 17.3331 27.3594 17.4736 27.6095 17.7236C27.8595 17.9737 28 18.3128 28 18.6665V26.6665C28 27.0201 27.8595 27.3592 27.6095 27.6093C27.3594 27.8593 27.0203 27.9998 26.6667 27.9998H5.33333C4.97971 27.9998 4.64057 27.8593 4.39052 27.6093C4.14048 27.3592 4 27.0201 4 26.6665V18.6665C4 18.3128 4.14048 17.9737 4.39052 17.7236C4.64057 17.4736 4.97971 17.3331 5.33333 17.3331H20ZM17.3733 11.0705C17.1404 11.2387 16.8549 11.3177 16.5686 11.2933C16.2823 11.2688 16.0143 11.1424 15.8133 10.9371C15.6882 10.8141 15.5913 10.6654 15.5294 10.5012C15.4674 10.337 15.4419 10.1613 15.4546 9.9863C15.4673 9.81128 15.5178 9.64111 15.6028 9.48758C15.6878 9.33405 15.8051 9.20082 15.9467 9.09712C17.3889 8.07571 19.1127 7.52715 20.88 7.52715C22.6473 7.52715 24.3711 8.07571 25.8133 9.09712C26.4133 9.52379 26.4667 10.4171 25.9467 10.9371C25.5333 11.3638 24.88 11.4171 24.4 11.0705C23.3733 10.3419 22.1456 9.9505 20.8867 9.9505C19.6278 9.9505 18.4 10.3419 17.3733 11.0705ZM27.8267 7.59046C23.8133 4.28379 17.96 4.28379 13.9467 7.59046C13.7171 7.77513 13.4265 7.86668 13.1325 7.84692C12.8385 7.82716 12.5628 7.69753 12.36 7.48379C11.84 6.97712 11.8933 6.12379 12.4667 5.65712C17.3733 1.64379 24.5067 1.67046 29.4 5.73712C29.92 6.16379 29.9733 6.92379 29.5067 7.39046L29.3467 7.55046C28.9333 7.96379 28.28 7.96379 27.8267 7.59046Z"
                }))
            });
            a.default = d
        }
    }
])
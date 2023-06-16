"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [566], {
        566: function(e, a, b) {
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
                    viewBox: "0 0 32 33",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: b
                }, a), c.createElement("path", {
                    d: "M15.9997 27.6647C18.8286 27.6647 21.5418 26.5409 23.5421 24.5405C25.5425 22.5401 26.6663 19.827 26.6663 16.998C26.6663 14.1691 25.5425 11.456 23.5421 9.45557C21.5418 7.45519 18.8286 6.33138 15.9997 6.33138C13.1707 6.33138 10.4576 7.45519 8.4572 9.45557C6.45681 11.456 5.33301 14.1691 5.33301 16.998C5.33301 19.827 6.45681 22.5401 8.4572 24.5405C10.4576 26.5409 13.1707 27.6647 15.9997 27.6647ZM15.9997 24.998C13.8779 24.998 11.8431 24.1552 10.3428 22.6549C8.84253 21.1546 7.99967 19.1198 7.99967 16.998C7.99967 14.8763 8.84253 12.8415 10.3428 11.3412C11.8431 9.8409 13.8779 8.99805 15.9997 8.99805C18.1214 8.99805 20.1562 9.8409 21.6565 11.3412C23.1568 12.8415 23.9997 14.8763 23.9997 16.998C23.9997 19.1198 23.1568 21.1546 21.6565 22.6549C20.1562 24.1552 18.1214 24.998 15.9997 24.998ZM12.149 0.998047C11.6103 0.998047 11.413 1.04605 11.213 1.14071C11.012 1.23203 10.8399 1.37686 10.7157 1.55938C10.5903 1.74338 10.5117 1.92871 10.4223 2.46071L9.33301 8.99805H22.6663L21.5757 2.46071C21.4877 1.92871 21.409 1.74338 21.2823 1.55938C21.1557 1.37405 20.9903 1.23405 20.7877 1.14071C20.585 1.04605 20.389 0.998047 19.8503 0.998047H12.149ZM12.149 32.998H19.8503C20.389 32.998 20.585 32.95 20.7877 32.8554C20.9882 32.7639 21.1598 32.619 21.2837 32.4367C21.409 32.2527 21.4877 32.0674 21.577 31.5354L22.6663 24.998H9.33301L10.4237 31.5354C10.5117 32.0674 10.5903 32.2527 10.717 32.4367C10.8405 32.6189 11.0116 32.7637 11.2117 32.8554C11.4143 32.95 11.6103 32.998 12.149 32.998ZM19.0743 3.66471L19.733 7.66471H12.2663L12.925 3.66471H19.0743ZM12.2663 26.3314H19.733L19.0743 30.3314H12.925L12.2663 26.3314ZM16.6663 16.3847L19.6877 19.4047C19.8643 19.5943 19.9605 19.845 19.9559 20.1041C19.9513 20.3631 19.8464 20.6103 19.6632 20.7935C19.48 20.9768 19.2328 21.0817 18.9737 21.0863C18.7146 21.0909 18.4639 20.9947 18.2743 20.818L14.973 17.5194C14.7905 17.3379 14.6854 17.0927 14.6797 16.8354C14.6704 16.779 14.6659 16.7219 14.6663 16.6647V11.998C14.6663 11.8667 14.6922 11.7367 14.7425 11.6154C14.7927 11.494 14.8664 11.3838 14.9592 11.2909C15.0521 11.1981 15.1623 11.1244 15.2837 11.0742C15.405 11.0239 15.535 10.998 15.6663 10.998C15.7977 10.998 15.9277 11.0239 16.049 11.0742C16.1704 11.1244 16.2806 11.1981 16.3734 11.2909C16.4663 11.3838 16.54 11.494 16.5902 11.6154C16.6405 11.7367 16.6663 11.8667 16.6663 11.998V16.3847Z"
                }))
            });
            a.default = d
        }
    }
])
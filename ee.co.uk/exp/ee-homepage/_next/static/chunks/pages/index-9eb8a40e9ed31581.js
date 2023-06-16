(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        4301: function(a, c, b) {
            b(6477), a.exports = self.fetch.bind(self)
        },
        6477: function(b, a) {
            "use strict";
            a.Headers = self.Headers, a.Request = self.Request, a.Response = self.Response, a.fetch = self.fetch
        },
        8312: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(8510)
            }])
        },
        8510: function(g, b, a) {
            "use strict";
            a.r(b), a.d(b, {
                "__N_SSP": function() {
                    return x
                },
                default: function() {
                    return w
                }
            });
            var c = a(7568),
                h = a(828),
                e = a(4051),
                d = a.n(e),
                i = a(5893),
                j = a(7294);
            a(4301);
            var f, k, l = a(1153),
                m = a(2660),
                n = a(3293),
                o = a(8526),
                p = a(1498),
                q = a(3454),
                r = (f = (0, c.Z)(d().mark(function b(c) {
                    var e;
                    return d().wrap(function(b) {
                        for (;;) switch (b.prev = b.next) {
                            case 0:
                                if (b.prev = 0, "enabled" !== q.env.NEXT_PUBLIC_TARGET_MOCKING) {
                                    b.next = 8;
                                    break
                                }
                                return b.next = 5, a.e(3360).then(a.bind(a, 3360));
                            case 5:
                                e = b.sent.stubFeatureTogglesService, b.next = 11;
                                break;
                            case 8:
                                return b.next = 10, Promise.all([a.e(3714), a.e(5800), a.e(5293), a.e(9824)]).then(a.bind(a, 9824));
                            case 10:
                                e = b.sent.realFeatureTogglesService;
                            case 11:
                                return b.next = 13, e.getFeatureToggles(c);
                            case 13:
                                return b.abrupt("return", b.sent);
                            case 16:
                                return b.prev = 16, b.t0 = b.catch(0), console.error(b.t0), b.abrupt("return", {});
                            case 20:
                            case "end":
                                return b.stop()
                        }
                    }, b, null, [
                        [0, 16]
                    ])
                })), function(a) {
                    return f.apply(this, arguments)
                }),
                s = function(b) {
                    var e, a = (0, j.useState)(!1),
                        f = a[0],
                        g = a[1],
                        h = (e = (0, c.Z)(d().mark(function a(b) {
                            return d().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.abrupt("return", r(b));
                                    case 1:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function(a) {
                            return e.apply(this, arguments)
                        });
                    return (0, j.useEffect)(function() {
                        h(m.dy).then(function(d) {
                            var a, c = null === (a = d[m.Ui]) || void 0 === a ? void 0 : a.value;
                            g(!b && ("true" === c || !0 === c))
                        })
                    }, [b]), f
                },
                t = a(4738),
                u = a(6596),
                v = function() {
                    return (0, i.jsx)(u.Button, {
                        onClick: l._H,
                        children: "Exit Preview"
                    })
                };
            (0, c.Z)(d().mark(function a(b) {
                var c, e, f, g, i, j, k, n;
                return d().wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return a.prev = 0, c = b, e = (0, l.g4)(c), f = fetch(m.Xm), g = fetch(m.CN), a.t0 = h.Z, a.next = 8, Promise.all([f, g, (0, p.K)(b), ]);
                        case 8:
                            if (a.t1 = a.sent, j = (i = (0, a.t0)(a.t1, 3))[0], k = i[1], n = i[2], !(!k.ok || !j.ok)) {
                                a.next = 16;
                                break
                            }
                            return b.res.statusCode = 500, a.abrupt("return", {
                                props: {
                                    hasError: !0
                                }
                            });
                        case 16:
                            return b.res.setHeader("Cache-Control", "public, maxage=300"), a.t2 = n, a.next = 20, j.text();
                        case 20:
                            return a.t3 = a.sent, a.next = 23, k.text();
                        case 23:
                            return a.t4 = a.sent, a.t5 = e, a.t6 = {
                                hasError: !1,
                                aem: a.t2,
                                header: a.t3,
                                footer: a.t4,
                                isPreview: a.t5
                            }, a.abrupt("return", {
                                props: a.t6
                            });
                        case 29:
                            return a.prev = 29, a.t7 = a.catch(0), console.error(a.t7), b.res.statusCode = 500, a.abrupt("return", {
                                props: {
                                    hasError: !0
                                }
                            });
                        case 34:
                        case "end":
                            return a.stop()
                    }
                }, a, null, [
                    [0, 29]
                ])
            }));
            var w = function(a) {
                    var b = a.hasError,
                        c = a.aem,
                        d = a.header,
                        e = a.footer,
                        f = a.isPreview,
                        g = s(b);
                    return ((0, j.useEffect)(function() {
                        b ? (0, t.AT)({
                            code: "500",
                            isNce: !0,
                            label: "Error with fallback",
                            withPageView: !0
                        }) : (0, t.RV)({
                            eventName: "viewPage"
                        })
                    }, [b]), !b && c && d && e) ? (0, i.jsxs)(i.Fragment, {
                        children: [f && (0, i.jsx)(v, {}), (0, i.jsx)(n.Z, {
                            aem: c,
                            header: d,
                            footer: e,
                            isKnownUser: g
                        })]
                    }) : (0, i.jsx)(o.Z, {})
                },
                x = !0
        },
        4738: function(c, a, b) {
            "use strict";
            b.d(a, {
                AT: function() {
                    return f
                },
                RV: function() {
                    return d
                }
            });
            var d = function(a) {
                    var b = a.eventName,
                        c = a.data;
                    try {
                        window._exhaust.trigger(b, c)
                    } catch (d) {
                        console.warn("Error sending event to tag manager:\n      ".concat(d))
                    }
                },
                e = {
                    500: "500_INTERNAL_SERVER_ERROR"
                },
                f = function(a) {
                    var b = a.type,
                        c = a.code,
                        g = a.label,
                        h = a.isNce,
                        f = a.withPageView,
                        i = {
                            error: {
                                type: void 0 === b ? "system" : b,
                                code: c,
                                name: e[c],
                                label: g,
                                is_nce: h
                            }
                        };
                    d({
                        eventName: void 0 !== f && f ? "viewPage" : "errorOccurred",
                        data: i
                    })
                }
        }
    },
    function(a) {
        a.O(0, [5405], function() {
            [3714, 5800, 5293, 9824].map(a.E)
        }, 5), a.O(0, [8336, 9555, 3399, 9774, 2888, 179], function() {
            var b;
            return a(a.s = 8312)
        }), _N_E = a.O()
    }
])
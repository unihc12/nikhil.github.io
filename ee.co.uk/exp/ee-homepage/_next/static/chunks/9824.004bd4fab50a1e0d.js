"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9824], {
        9824: function(f, b, a) {
            a.r(b), a.d(b, {
                default: function() {
                    return p
                },
                realFeatureTogglesService: function() {
                    return o
                }
            });
            var g = a(7568),
                h = a(1438),
                i = a(6042),
                j = a(9396),
                d = a(4051),
                k = a.n(d),
                e = a(5834),
                l = a.n(e),
                m = a(1955),
                n = a(2660),
                c = function() {
                    function a() {
                        (0, h.Z)(this, a);
                        var b, c = this;
                        this.getFeatureToggles = (b = (0, g.Z)(k().mark(function a(b) {
                            var d, e, f, g, h, j, n;
                            return k().wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (d = {}, e = m.Z.get("notice_gdpr_prefs"), c.checkGdprPrefs(e), c.isGdprPrefsAccepted) {
                                            a.next = 5;
                                            break
                                        }
                                        return a.abrupt("return", d);
                                    case 5:
                                        return f = m.Z.get(l().TargetCookieName), h = [], (g = b).length > 0 && h.push(c.targetClient.getAttributes(g, {
                                            targetCookie: f
                                        }).catch(function(a) {
                                            return console.warn(a), null
                                        })), a.next = 11, Promise.all(h);
                                    case 11:
                                        return j = a.sent, g.length > 0 && (d = (0, i.Z)({}, d, null === (n = j[j.length - 1]) || void 0 === n ? void 0 : n.asObject())), a.abrupt("return", d);
                                    case 14:
                                    case "end":
                                        return a.stop()
                                }
                            }, a)
                        })), function(a) {
                            return b.apply(this, arguments)
                        }), this.targetClient = l().create((0, j.Z)((0, i.Z)({}, n.wL), {
                            propertyToken: n.Rq
                        }))
                    }
                    return a.prototype.checkGdprPrefs = function(a) {
                        this.isGdprPrefsAccepted = null == a ? void 0 : a.includes("1")
                    }, a
                }(),
                o = new c,
                p = c
        }
    }
])
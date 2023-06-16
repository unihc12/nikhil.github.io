function trackLivePersonEvents(sat, lp) {

    if (!lp || !lp.events || lp.hasOwnProperty("has_exhaust_events")) {
        return;
    }

    lp.has_exhaust_events = true;

    var getChatStateHistory = function(current_state) {

        current_state = current_state || "";

        var obj = sat.getVar("LP_chat");

        if (!obj || !obj.chat || !obj.chat.state_history || current_state === "preChat") {
            return [];
        } else {
            return obj.chat.state_history;
        }
    }

    var prepPayload = function(context, options) {
        options = options || {};
        options.state = options.state || "";

        var prev = sat.getVar("LP_chat") || {
            chat: {}
        };

        state_history = getChatStateHistory(options.state);

        var state = options.state || ((state_history.length > 0) ? state_history[state_history.length - 1] : "");

        var getEngagementTypeFromContext = function() {
            if (context.data && context.data.engagementType) {
                return context.data.engagementType;
            } else if (context.engagementType) {
                return context.engagementType;
            } else if (prev && prev.chat && prev.chat.type) {
                return prev.chat.type;
            }

            return "";
        }

        var getEngagementNameFromContext = function() {
            if (context.data && context.data.engagementName) {
                return context.data.engagementName;
            } else if (context.engagementName) {
                return context.engagementName;
            } else if (prev && prev.chat && prev.chat.skill) {
                return prev.chat.type;
            }

            return "";
        }

        var engagement_name = getEngagementNameFromContext();

        var pl = {
            "supplier": "LP",
            "chat": {
                "category": (/^BT_Service/.test(engagement_name)) ? 'service' : 'sales',
                "type": getEngagementTypeFromContext(),
                "skill": engagement_name,
                "session": {
                    "id": sat.cookie.get("LPSID-" + lp.site)
                },
                "state": state,
                "state_history": state_history,

                "window": options.window || "form"
            },
            "attributes": {
                "library": lp,
                "context": context
            }
        };

        if (pl.chat.state && (pl.chat.state_history.indexOf(pl.chat.state) === -1)) {
            pl.chat.state_history.push(pl.chat.state);
        }

        sat.setVar("LP_chat", pl);

        return pl;
    };


    [{

        "app": "LP_OFFERS",
        "event": "OFFER_IMPRESSION",
        "callback": function(context) {
            _exhaust.trigger("Chat.Invite.shown", prepPayload(context));
        },
        "trigger_once": false

    }, {

        "app": "LP_OFFERS",
        "event": "OFFER_CLICK",
        "callback": function(context) {
            _exhaust.trigger("Chat.Invite.accepted", prepPayload(context));
        },
        "trigger_once": false

    }, {

        "app": "lpUnifiedWindow",
        "event": "conversationInfo",
        "callback": function(context) {

            var chatStateIsRecordable = function(state) {
                var history = getChatStateHistory();
                //  return ( history.indexOf( state ) === -1 );
                return true;
            }

            if (chatStateIsRecordable(context.state)) {
                _exhaust.trigger("Chat.Window.State.changed", prepPayload(context, {
                    "window": "client",
                    "state": context.state
                }));
            }

        },
        "trigger_once": false

    }].forEach(function(task) {

        if (lp.events && "function" === typeof lp.events.bind) {
            lp.events.bind({
                eventName: task.event,
                appName: task.app,
                func: task.callback,
                async: true,
                triggerOnce: task.trigger_once
            });
        }

    });
}


var lp_settings = {};

document.getElementById("livePersonLibrary").src.split("?")[1].split("&").forEach(function(p) {
    kv = p.split("=");
    lp_settings[kv[0]] = kv[1];
});


window.lpTag = window.lpTag || {}, 'undefined' == typeof window.lpTag._tagCount ? (window.lpTag = {
    wl: lpTag.wl || null,
    scp: lpTag.scp || null,
    site: lp_settings.site_id || '',
    section: lpTag.section || '',
    tagletSection: lpTag.tagletSection || null,
    autoStart: lpTag.autoStart !== !1,
    ovr: lpTag.ovr || {},
    _v: '1.10.0',
    _tagCount: 1,
    protocol: 'https:',
    events: {
        bind: function(t, e, i) {
            lpTag.defer(function() {
                lpTag.events.bind(t, e, i)
            }, 0)
        },
        trigger: function(t, e, i) {
            lpTag.defer(function() {
                lpTag.events.trigger(t, e, i)
            }, 1)
        }
    },
    defer: function(t, e) {
        0 === e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 === e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t))
    },
    load: function(t, e, i) {
        var n = this;
        setTimeout(function() {
            n._load(t, e, i)
        }, 0)
    },
    _load: function(t, e, i) {
        var n = t;
        t || (n = this.protocol + '//' + (this.ovr && this.ovr.domain ? this.ovr.domain : 'lptag.liveperson.net') + '/tag/tag.js?site=' + this.site);
        var o = document.createElement('script');
        o.setAttribute('charset', e ? e : 'UTF-8'), i && o.setAttribute('id', i), o.setAttribute('src', n), document.getElementsByTagName('head').item(0).appendChild(o)
    },
    init: function() {
        this._timing = this._timing || {}, this._timing.start = (new Date).getTime();
        var t = this;

        if (lp_settings.enable_exhaust) {
            trackLivePersonEvents(window._satellite, lpTag);
        }

        lpTag.identities = [];

        function identityFn(callback) {
            callback(null);
        }
        lpTag.identities.push(identityFn);

        window.attachEvent ? window.attachEvent('onload', function() {
            t._domReady('domReady')
        }) : (window.addEventListener('DOMContentLoaded', function() {
            t._domReady('contReady')
        }, !1), window.addEventListener('load', function() {
            t._domReady('domReady')
        }, !1)), 'undefined' === typeof window._lptStop && this.load()
    },
    start: function() {
        this.autoStart = !0
    },
    _domReady: function(t) {
        this.isDom || (this.isDom = !0, this.events.trigger('LPT', 'DOM_READY', {
            t: t
        })), this._timing[t] = (new Date).getTime()
    },
    vars: lpTag.vars || [],
    dbs: lpTag.dbs || [],
    ctn: lpTag.ctn || [],
    sdes: lpTag.sdes || [],
    hooks: lpTag.hooks || [],
    identities: lpTag.identities || [],
    ev: lpTag.ev || []
}, lpTag.init()) : window.lpTag._tagCount += 1, trackLivePersonEvents(_satellite, lpTag);
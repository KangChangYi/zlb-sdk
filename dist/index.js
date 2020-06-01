"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n = function () {
    return (n =
      Object.assign ||
      function (n) {
        for (var t, e = 1, r = arguments.length; e < r; e++)
          for (var i in (t = arguments[e]))
            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n;
      }).apply(this, arguments);
  },
  t = [
    "dd.device.location.get",
    "dd.biz.user.getUserType",
    "dd.biz.user.login",
    "dd.biz.user.realAuthentication",
    "dd.biz.util.openLink",
    "dd.biz.util.selectLocalCity",
    "dd.biz.util.selectCity",
    "dd.biz.util.close",
    "dd.biz.navigation.setTitle",
  ],
  e = window.dd;
var r,
  i =
    ((r = !1),
    function () {
      return new Promise(function (n, i) {
        return r
          ? n()
          : e
          ? ((u = t),
            (o = function () {
              (r = !0), n();
            }),
            void e.ready({ usage: u }, o))
          : i("未引入浙里办 jssdk");
        var u, o;
      });
    });
function u(t) {
  var e = t.func,
    r = t.params;
  return new Promise(function (t, i) {
    e(
      n(n({}, r), {
        onSuccess: function (n) {
          return t(n);
        },
        onCancel: function (n) {
          return i(n);
        },
        onFail: function (n) {
          return i(n);
        },
        onError: function (n) {
          return i(n);
        },
      })
    );
  });
}
var o = window.dd;
function c() {
  return i().then(function () {
    return u({ func: o.biz.user.getUserType });
  });
}
var l = {
  zlbRealAuthentication: function (n, t, e) {
    return i().then(function () {
      return u({
        func: o.biz.user.realAuthentication,
        params: { appId: n, certNo: t, certName: e },
      });
    });
  },
  zlbSetTitle: function (n) {
    return i().then(function () {
      return u({ func: o.biz.navigation.setTitle, params: { title: n } });
    });
  },
  zlbCloseWindow: function (n) {
    return i().then(function () {
      return u({ func: o.biz.util.close, params: { title: n } });
    });
  },
  zlbSelectCity: function () {
    return i().then(function () {
      return u({ func: o.biz.util.selectCity });
    });
  },
  zlbGetLocalCity: function () {
    return i().then(function () {
      return u({ func: o.biz.util.selectLocalCity });
    });
  },
  zlbOpenLinkInNewWebView: function (n) {
    return i().then(function () {
      return u({ func: o.biz.util.openLink, params: { url: n } });
    });
  },
  zlbGetLocation: function () {
    return i().then(function () {
      return u({ func: o.device.location.get });
    });
  },
  zlbGoLogin: function () {
    return i().then(function () {
      return u({ func: o.biz.user.login });
    });
  },
  zlbGetUserType: c,
};
(exports.default = l), (exports.zlbGetUserType = c);

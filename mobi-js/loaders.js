!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 8));
})([
  function (t, e) {
    t.exports = name;
  },
  function (t, e, n) {
    t.exports = (function (t) {
      "use strict";
      var e = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      function n(t, e) {
        var n = t[0],
          i = t[1],
          r = t[2],
          s = t[3];
        (i =
          ((((i +=
            ((((r =
              ((((r +=
                ((((s =
                  ((((s +=
                    ((((n =
                      ((((n += (((i & r) | (~i & s)) + e[0] - 680876936) | 0) <<
                        7) |
                        (n >>> 25)) +
                        i) |
                      0) &
                      i) |
                      (~n & r)) +
                      e[1] -
                      389564586) |
                    0) <<
                    12) |
                    (s >>> 20)) +
                    n) |
                  0) &
                  n) |
                  (~s & i)) +
                  e[2] +
                  606105819) |
                0) <<
                17) |
                (r >>> 15)) +
                s) |
              0) &
              s) |
              (~r & n)) +
              e[3] -
              1044525330) |
            0) <<
            22) |
            (i >>> 10)) +
            r) |
          0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & r) | (~i & s)) + e[4] - 176418897) | 0) <<
                          7) |
                          (n >>> 25)) +
                          i) |
                        0) &
                        i) |
                        (~n & r)) +
                        e[5] +
                        1200080426) |
                      0) <<
                      12) |
                      (s >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~s & i)) +
                    e[6] -
                    1473231341) |
                  0) <<
                  17) |
                  (r >>> 15)) +
                  s) |
                0) &
                s) |
                (~r & n)) +
                e[7] -
                45705983) |
              0) <<
              22) |
              (i >>> 10)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & r) | (~i & s)) + e[8] + 1770035416) | 0) <<
                          7) |
                          (n >>> 25)) +
                          i) |
                        0) &
                        i) |
                        (~n & r)) +
                        e[9] -
                        1958414417) |
                      0) <<
                      12) |
                      (s >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~s & i)) +
                    e[10] -
                    42063) |
                  0) <<
                  17) |
                  (r >>> 15)) +
                  s) |
                0) &
                s) |
                (~r & n)) +
                e[11] -
                1990404162) |
              0) <<
              22) |
              (i >>> 10)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & r) | (~i & s)) + e[12] + 1804603682) | 0) <<
                          7) |
                          (n >>> 25)) +
                          i) |
                        0) &
                        i) |
                        (~n & r)) +
                        e[13] -
                        40341101) |
                      0) <<
                      12) |
                      (s >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~s & i)) +
                    e[14] -
                    1502002290) |
                  0) <<
                  17) |
                  (r >>> 15)) +
                  s) |
                0) &
                s) |
                (~r & n)) +
                e[15] +
                1236535329) |
              0) <<
              22) |
              (i >>> 10)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & s) | (r & ~s)) + e[1] - 165796510) | 0) <<
                          5) |
                          (n >>> 27)) +
                          i) |
                        0) &
                        r) |
                        (i & ~r)) +
                        e[6] -
                        1069501632) |
                      0) <<
                      9) |
                      (s >>> 23)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    e[11] +
                    643717713) |
                  0) <<
                  14) |
                  (r >>> 18)) +
                  s) |
                0) &
                n) |
                (s & ~n)) +
                e[0] -
                373897302) |
              0) <<
              20) |
              (i >>> 12)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & s) | (r & ~s)) + e[5] - 701558691) | 0) <<
                          5) |
                          (n >>> 27)) +
                          i) |
                        0) &
                        r) |
                        (i & ~r)) +
                        e[10] +
                        38016083) |
                      0) <<
                      9) |
                      (s >>> 23)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    e[15] -
                    660478335) |
                  0) <<
                  14) |
                  (r >>> 18)) +
                  s) |
                0) &
                n) |
                (s & ~n)) +
                e[4] -
                405537848) |
              0) <<
              20) |
              (i >>> 12)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & s) | (r & ~s)) + e[9] + 568446438) | 0) <<
                          5) |
                          (n >>> 27)) +
                          i) |
                        0) &
                        r) |
                        (i & ~r)) +
                        e[14] -
                        1019803690) |
                      0) <<
                      9) |
                      (s >>> 23)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    e[3] -
                    187363961) |
                  0) <<
                  14) |
                  (r >>> 18)) +
                  s) |
                0) &
                n) |
                (s & ~n)) +
                e[8] +
                1163531501) |
              0) <<
              20) |
              (i >>> 12)) +
              r) |
            0),
          (i =
            ((((i +=
              ((((r =
                ((((r +=
                  ((((s =
                    ((((s +=
                      ((((n =
                        ((((n +=
                          (((i & s) | (r & ~s)) + e[13] - 1444681467) | 0) <<
                          5) |
                          (n >>> 27)) +
                          i) |
                        0) &
                        r) |
                        (i & ~r)) +
                        e[2] -
                        51403784) |
                      0) <<
                      9) |
                      (s >>> 23)) +
                      n) |
                    0) &
                    i) |
                    (n & ~i)) +
                    e[7] +
                    1735328473) |
                  0) <<
                  14) |
                  (r >>> 18)) +
                  s) |
                0) &
                n) |
                (s & ~n)) +
                e[12] -
                1926607734) |
              0) <<
              20) |
              (i >>> 12)) +
              r) |
            0),
          (i =
            ((((i +=
              (((r =
                ((((r +=
                  (((s =
                    ((((s +=
                      (((n =
                        ((((n += ((i ^ r ^ s) + e[5] - 378558) | 0) << 4) |
                          (n >>> 28)) +
                          i) |
                        0) ^
                        i ^
                        r) +
                        e[8] -
                        2022574463) |
                      0) <<
                      11) |
                      (s >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    e[11] +
                    1839030562) |
                  0) <<
                  16) |
                  (r >>> 16)) +
                  s) |
                0) ^
                s ^
                n) +
                e[14] -
                35309556) |
              0) <<
              23) |
              (i >>> 9)) +
              r) |
            0),
          (i =
            ((((i +=
              (((r =
                ((((r +=
                  (((s =
                    ((((s +=
                      (((n =
                        ((((n += ((i ^ r ^ s) + e[1] - 1530992060) | 0) << 4) |
                          (n >>> 28)) +
                          i) |
                        0) ^
                        i ^
                        r) +
                        e[4] +
                        1272893353) |
                      0) <<
                      11) |
                      (s >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    e[7] -
                    155497632) |
                  0) <<
                  16) |
                  (r >>> 16)) +
                  s) |
                0) ^
                s ^
                n) +
                e[10] -
                1094730640) |
              0) <<
              23) |
              (i >>> 9)) +
              r) |
            0),
          (i =
            ((((i +=
              (((r =
                ((((r +=
                  (((s =
                    ((((s +=
                      (((n =
                        ((((n += ((i ^ r ^ s) + e[13] + 681279174) | 0) << 4) |
                          (n >>> 28)) +
                          i) |
                        0) ^
                        i ^
                        r) +
                        e[0] -
                        358537222) |
                      0) <<
                      11) |
                      (s >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    e[3] -
                    722521979) |
                  0) <<
                  16) |
                  (r >>> 16)) +
                  s) |
                0) ^
                s ^
                n) +
                e[6] +
                76029189) |
              0) <<
              23) |
              (i >>> 9)) +
              r) |
            0),
          (i =
            ((((i +=
              (((r =
                ((((r +=
                  (((s =
                    ((((s +=
                      (((n =
                        ((((n += ((i ^ r ^ s) + e[9] - 640364487) | 0) << 4) |
                          (n >>> 28)) +
                          i) |
                        0) ^
                        i ^
                        r) +
                        e[12] -
                        421815835) |
                      0) <<
                      11) |
                      (s >>> 21)) +
                      n) |
                    0) ^
                    n ^
                    i) +
                    e[15] +
                    530742520) |
                  0) <<
                  16) |
                  (r >>> 16)) +
                  s) |
                0) ^
                s ^
                n) +
                e[2] -
                995338651) |
              0) <<
              23) |
              (i >>> 9)) +
              r) |
            0),
          (i =
            ((((i +=
              (((s =
                ((((s +=
                  ((i ^
                    ((n =
                      ((((n += ((r ^ (i | ~s)) + e[0] - 198630844) | 0) << 6) |
                        (n >>> 26)) +
                        i) |
                      0) |
                      ~r)) +
                    e[7] +
                    1126891415) |
                  0) <<
                  10) |
                  (s >>> 22)) +
                  n) |
                0) ^
                ((r =
                  ((((r += ((n ^ (s | ~i)) + e[14] - 1416354905) | 0) << 15) |
                    (r >>> 17)) +
                    s) |
                  0) |
                  ~n)) +
                e[5] -
                57434055) |
              0) <<
              21) |
              (i >>> 11)) +
              r) |
            0),
          (i =
            ((((i +=
              (((s =
                ((((s +=
                  ((i ^
                    ((n =
                      ((((n += ((r ^ (i | ~s)) + e[12] + 1700485571) | 0) <<
                        6) |
                        (n >>> 26)) +
                        i) |
                      0) |
                      ~r)) +
                    e[3] -
                    1894986606) |
                  0) <<
                  10) |
                  (s >>> 22)) +
                  n) |
                0) ^
                ((r =
                  ((((r += ((n ^ (s | ~i)) + e[10] - 1051523) | 0) << 15) |
                    (r >>> 17)) +
                    s) |
                  0) |
                  ~n)) +
                e[1] -
                2054922799) |
              0) <<
              21) |
              (i >>> 11)) +
              r) |
            0),
          (i =
            ((((i +=
              (((s =
                ((((s +=
                  ((i ^
                    ((n =
                      ((((n += ((r ^ (i | ~s)) + e[8] + 1873313359) | 0) << 6) |
                        (n >>> 26)) +
                        i) |
                      0) |
                      ~r)) +
                    e[15] -
                    30611744) |
                  0) <<
                  10) |
                  (s >>> 22)) +
                  n) |
                0) ^
                ((r =
                  ((((r += ((n ^ (s | ~i)) + e[6] - 1560198380) | 0) << 15) |
                    (r >>> 17)) +
                    s) |
                  0) |
                  ~n)) +
                e[13] +
                1309151649) |
              0) <<
              21) |
              (i >>> 11)) +
              r) |
            0),
          (i =
            ((((i +=
              (((s =
                ((((s +=
                  ((i ^
                    ((n =
                      ((((n += ((r ^ (i | ~s)) + e[4] - 145523070) | 0) << 6) |
                        (n >>> 26)) +
                        i) |
                      0) |
                      ~r)) +
                    e[11] -
                    1120210379) |
                  0) <<
                  10) |
                  (s >>> 22)) +
                  n) |
                0) ^
                ((r =
                  ((((r += ((n ^ (s | ~i)) + e[2] + 718787259) | 0) << 15) |
                    (r >>> 17)) +
                    s) |
                  0) |
                  ~n)) +
                e[9] -
                343485551) |
              0) <<
              21) |
              (i >>> 11)) +
              r) |
            0),
          (t[0] = (n + t[0]) | 0),
          (t[1] = (i + t[1]) | 0),
          (t[2] = (r + t[2]) | 0),
          (t[3] = (s + t[3]) | 0);
      }
      function i(t) {
        var e,
          n = [];
        for (e = 0; e < 64; e += 4)
          n[e >> 2] =
            t.charCodeAt(e) +
            (t.charCodeAt(e + 1) << 8) +
            (t.charCodeAt(e + 2) << 16) +
            (t.charCodeAt(e + 3) << 24);
        return n;
      }
      function r(t) {
        var e,
          n = [];
        for (e = 0; e < 64; e += 4)
          n[e >> 2] =
            t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
        return n;
      }
      function s(t) {
        var e,
          r,
          s,
          a,
          o,
          l,
          c = t.length,
          d = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= c; e += 64) n(d, i(t.substring(e - 64, e)));
        for (
          r = (t = t.substring(e - 64)).length,
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            e = 0;
          e < r;
          e += 1
        )
          s[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
        if (((s[e >> 2] |= 128 << (e % 4 << 3)), e > 55))
          for (n(d, s), e = 0; e < 16; e += 1) s[e] = 0;
        return (
          (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
          (o = parseInt(a[2], 16)),
          (l = parseInt(a[1], 16) || 0),
          (s[14] = o),
          (s[15] = l),
          n(d, s),
          d
        );
      }
      function a(t) {
        var n,
          i = "";
        for (n = 0; n < 4; n += 1)
          i += e[(t >> (8 * n + 4)) & 15] + e[(t >> (8 * n)) & 15];
        return i;
      }
      function o(t) {
        var e;
        for (e = 0; e < t.length; e += 1) t[e] = a(t[e]);
        return t.join("");
      }
      function l(t) {
        return (
          /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
        );
      }
      function c(t) {
        var e,
          n = [],
          i = t.length;
        for (e = 0; e < i - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16));
        return String.fromCharCode.apply(String, n);
      }
      function d() {
        this.reset();
      }
      return (
        o(s("hello")),
        "undefined" === typeof ArrayBuffer ||
          ArrayBuffer.prototype.slice ||
          (function () {
            function e(t, e) {
              return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e);
            }
            ArrayBuffer.prototype.slice = function (n, i) {
              var r,
                s,
                a,
                o,
                l = this.byteLength,
                c = e(n, l),
                d = l;
              return (
                i !== t && (d = e(i, l)),
                c > d
                  ? new ArrayBuffer(0)
                  : ((r = d - c),
                    (s = new ArrayBuffer(r)),
                    (a = new Uint8Array(s)),
                    (o = new Uint8Array(this, c, r)),
                    a.set(o),
                    s)
              );
            };
          })(),
        (d.prototype.append = function (t) {
          return this.appendBinary(l(t)), this;
        }),
        (d.prototype.appendBinary = function (t) {
          (this._buff += t), (this._length += t.length);
          var e,
            r = this._buff.length;
          for (e = 64; e <= r; e += 64)
            n(this._hash, i(this._buff.substring(e - 64, e)));
          return (this._buff = this._buff.substring(e - 64)), this;
        }),
        (d.prototype.end = function (t) {
          var e,
            n,
            i = this._buff,
            r = i.length,
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (e = 0; e < r; e += 1)
            s[e >> 2] |= i.charCodeAt(e) << (e % 4 << 3);
          return (
            this._finish(s, r),
            (n = o(this._hash)),
            t && (n = c(n)),
            this.reset(),
            n
          );
        }),
        (d.prototype.reset = function () {
          return (
            (this._buff = ""),
            (this._length = 0),
            (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
            this
          );
        }),
        (d.prototype.getState = function () {
          return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice(),
          };
        }),
        (d.prototype.setState = function (t) {
          return (
            (this._buff = t.buff),
            (this._length = t.length),
            (this._hash = t.hash),
            this
          );
        }),
        (d.prototype.destroy = function () {
          delete this._hash, delete this._buff, delete this._length;
        }),
        (d.prototype._finish = function (t, e) {
          var i,
            r,
            s,
            a = e;
          if (((t[a >> 2] |= 128 << (a % 4 << 3)), a > 55))
            for (n(this._hash, t), a = 0; a < 16; a += 1) t[a] = 0;
          (i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)),
            (r = parseInt(i[2], 16)),
            (s = parseInt(i[1], 16) || 0),
            (t[14] = r),
            (t[15] = s),
            n(this._hash, t);
        }),
        (d.hash = function (t, e) {
          return d.hashBinary(l(t), e);
        }),
        (d.hashBinary = function (t, e) {
          var n = o(s(t));
          return e ? c(n) : n;
        }),
        (d.ArrayBuffer = function () {
          this.reset();
        }),
        (d.ArrayBuffer.prototype.append = function (t) {
          var e,
            i = (function (t, e, n) {
              var i = new Uint8Array(t.byteLength + e.byteLength);
              return (
                i.set(new Uint8Array(t)),
                i.set(new Uint8Array(e), t.byteLength),
                n ? i : i.buffer
              );
            })(this._buff.buffer, t, !0),
            s = i.length;
          for (this._length += t.byteLength, e = 64; e <= s; e += 64)
            n(this._hash, r(i.subarray(e - 64, e)));
          return (
            (this._buff =
              e - 64 < s
                ? new Uint8Array(i.buffer.slice(e - 64))
                : new Uint8Array(0)),
            this
          );
        }),
        (d.ArrayBuffer.prototype.end = function (t) {
          var e,
            n,
            i = this._buff,
            r = i.length,
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (e = 0; e < r; e += 1) s[e >> 2] |= i[e] << (e % 4 << 3);
          return (
            this._finish(s, r),
            (n = o(this._hash)),
            t && (n = c(n)),
            this.reset(),
            n
          );
        }),
        (d.ArrayBuffer.prototype.reset = function () {
          return (
            (this._buff = new Uint8Array(0)),
            (this._length = 0),
            (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
            this
          );
        }),
        (d.ArrayBuffer.prototype.getState = function () {
          var t,
            e = d.prototype.getState.call(this);
          return (
            (e.buff =
              ((t = e.buff),
              String.fromCharCode.apply(null, new Uint8Array(t)))),
            e
          );
        }),
        (d.ArrayBuffer.prototype.setState = function (t) {
          return (
            (t.buff = (function (t, e) {
              var n,
                i = t.length,
                r = new ArrayBuffer(i),
                s = new Uint8Array(r);
              for (n = 0; n < i; n += 1) s[n] = t.charCodeAt(n);
              return e ? s : r;
            })(t.buff, !0)),
            d.prototype.setState.call(this, t)
          );
        }),
        (d.ArrayBuffer.prototype.destroy = d.prototype.destroy),
        (d.ArrayBuffer.prototype._finish = d.prototype._finish),
        (d.ArrayBuffer.hash = function (t, e) {
          var i = o(
            (function (t) {
              var e,
                i,
                s,
                a,
                o,
                l,
                c = t.length,
                d = [1732584193, -271733879, -1732584194, 271733878];
              for (e = 64; e <= c; e += 64) n(d, r(t.subarray(e - 64, e)));
              for (
                t = e - 64 < c ? t.subarray(e - 64) : new Uint8Array(0),
                  i = t.length,
                  s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  e = 0;
                e < i;
                e += 1
              )
                s[e >> 2] |= t[e] << (e % 4 << 3);
              if (((s[e >> 2] |= 128 << (e % 4 << 3)), e > 55))
                for (n(d, s), e = 0; e < 16; e += 1) s[e] = 0;
              return (
                (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
                (o = parseInt(a[2], 16)),
                (l = parseInt(a[1], 16) || 0),
                (s[14] = o),
                (s[15] = l),
                n(d, s),
                d
              );
            })(new Uint8Array(t))
          );
          return e ? c(i) : i;
        }),
        d
      );
    })();
  },
  function (t, e, n) {
    n(3),
      n(4),
      n(5),
      n(6),
      n(9),
      n(7),
      window &&
        ((window.EMPTY_PACKAGE = null), (window.RESOURCE_VFS_CACHE = !1));
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1),
      r = n.n(i);
    (Blob.prototype.hash = async function () {
      return await this.md5();
    }),
      Blob.prototype.slice ||
        (Blob.prototype.slice =
          Blob.prototype.mozeSlice || Blob.prototype.webkitSlice || null),
      (Blob.prototype.md5 = async function (t = 2097152) {
        if (this.md5_hash) return this.md5_hash;
        const e = await this.smd5();
        if (((this.md5_hash = localStorage.getItem(e) || null), this.md5_hash))
          return this.md5_hash;
        const n = new r.a.ArrayBuffer(),
          i = Math.ceil(this.size / t);
        for (let r = 0; r < i; r++) {
          const e = r * t;
          let i = (r + 1) * t;
          if ((i > this.size && (i = this.size), e === i)) break;
          n.append(await this.slice(e, i).arrayBuffer());
        }
        return (
          (this.md5_hash = n.end(!1)),
          n.destroy(),
          localStorage.setItem(e, this.md5_hash),
          this.md5_hash
        );
      }),
      (Blob.prototype.smd5 = async function (t = 1048576) {
        if (this.smd5_hash) return this.smd5_hash;
        Date.now();
        const e = new r.a.ArrayBuffer();
        return (
          this.size <= t
            ? e.append(await this.arrayBuffer())
            : (e.append(await this.slice(0, t).arrayBuffer()),
              e.append(
                await this.slice(this.size - t, this.size).arrayBuffer()
              ),
              e.append(new Uint32Array([this.size]).buffer)),
          (this.smd5_hash = e.end(!1)),
          e.destroy(),
          this.smd5_hash
        );
      }),
      (Blob.prototype.toObjectURL = function (t) {
        return (window.URL || window.webkitURL).createObjectURL(this);
      }),
      (Blob.prototype.toDataURL = async function (t = null) {
        return new Promise((t) => {
          const e = new FileReader();
          e.addEventListener("load", function (e) {
            t(e.target.result);
          }),
            e.readAsDataURL(this);
        });
      }),
      (ArrayBuffer.prototype.toUint8Array = function () {
        return new Uint8Array(this);
      }),
      (ArrayBuffer.prototype.DataView = function (t = 0, e) {
        return e || (e = this.byteLength), new DataView(this, t, e);
      }),
      (ArrayBuffer.prototype.decodeString = function (t = null) {
        return this.toUint8Array().decodeString(t);
      }),
      (Uint8Array.prototype.decodeString = function (t = null) {
        const e = new TextDecoder();
        return t && (e.encoding = t), e.decode(this);
      });
  },
  function (t, e) {
    (Node.prototype.isTypeOf = function (t) {
      return (
        !!t && (this.tagName || this.nodeName).toLowerCase() === t.toLowerCase()
      );
    }),
      (Node.prototype.isTextNode = function () {
        return this.TEXT_NODE === this.nodeType;
      }),
      (Node.prototype.seekChild = function (t) {
        if (!this.childNodes) return null;
        for (let e = 0; e < this.childNodes.length; e++) {
          const n = this.childNodes[e];
          if (!0 === t(n)) return this.childNodes[e];
          let i = !1;
          if (
            n.childNodes &&
            n.childNodes.length > 0 &&
            ((i = n.seekChild(t)), i)
          )
            return i;
        }
        return null;
      }),
      (Node.prototype.selectChars = function (t, e = 0, n = !1) {
        let i = this.locateChar(e, n);
        if (!i) return null;
        let r = this.locateChar(e + t, n);
        r || (r = this.locateChar(this.textContent.length));
        const s = new Range();
        return s.setStart(i.node, i.offset), s.setEnd(r.node, r.offset), s;
      }),
      (Node.prototype.locateChar = function (t, e = !1) {
        if (t < 0) return null;
        if (0 === t) {
          const e = this.isTextNode()
            ? this
            : this.seekChild((t) => t.isTextNode());
          return e ? { node: e, offset: t } : null;
        }
        const n = this.textContent.length;
        if (n < t) {
          if (e) {
            const e = this.nextNode();
            return e ? e.locateChar(t - n) : null;
          }
          return null;
        }
        for (let i = 0; i < this.childNodes.length; i++) {
          const e = this.childNodes.item(i),
            n = e.textContent.length;
          if (!(t - n > 0))
            return e.isTextNode() ? { node: e, offset: t } : e.locateChar(t);
          t -= n;
        }
        return this.isTextNode() && this.textContent.length >= t
          ? { node: this, offset: t }
          : null;
      }),
      (Node.prototype.nextNode = function () {
        return this.nextSibling
          ? this.nextSibling
          : this.parentNode
          ? this.parentNode.nextNode()
          : null;
      }),
      (Node.prototype.nextTextNode = function (t = !1) {
        if (t && !this.isTextNode()) {
          const t = this.seekChild((t) => t.isTextNode());
          if (t) return t;
        }
        const e = this.nextNode();
        if (e) {
          if (e.isTextNode()) return e;
          {
            const t = e.seekChild((t) => t.isTextNode());
            return t || e.nextTextNode();
          }
        }
        return null;
      }),
      (Node.prototype.offsetFrom = function (t) {
        const e = new Range();
        return e.setStart(t, 0), e.setEnd(this, 0), e.toString().length;
      }),
      (Node.prototype.remove = function () {
        this.parentNode, this.parentNode.removeChild(this);
      }),
      (Node.prototype.scrollPosition = function (t = 0, e) {
        const n = this.parentElement.scrollPosition(0, e);
        if (this.isTextNode()) {
          const e = this.range(t, t + 1).getBoundingClientRect(),
            i = this.parentElement.getBoundingClientRect();
          (n.top += e.y - i.y), (n.left += e.x - i.x);
        }
        return n;
      }),
      (Node.prototype.scrollIntoVisible = function (
        t = 0,
        e = null,
        n = { left: 0, top: 0 }
      ) {
        const i = this.scrollPosition(t, e);
        if (!i) return !1;
        e || (e = this.offsetParent || this.parentElement.offsetParent),
          (e.scrollLeft =
            i.left - ((null === n || void 0 === n ? void 0 : n.left) || 0)),
          (e.scrollTop =
            i.top - ((null === n || void 0 === n ? void 0 : n.top) || 0));
      }),
      (Node.prototype.locateFirstVisibleChar = function (t) {
        if (!this.getBoundingClientRect().intersect(t)) return null;
        let e = null,
          n = 0;
        if (this.isTextNode())
          for (let i = 0; i < this.textContent.length; i++) {
            if (
              this.range(i, i + 1)
                .getBoundingClientRect()
                .intersect(t)
            ) {
              (e = this), (n = i);
              break;
            }
          }
        else {
          const e = this.seekChild(
            (e) => e.isTextNode() && e.getBoundingClientRect().intersect(t)
          );
          if (e) return e.locateFirstVisibleChar(t);
        }
        return e ? { node: e, offset: n } : null;
      }),
      (Node.prototype.getBoundingClientRect = function () {
        return this.range().getBoundingClientRect();
      }),
      (Node.prototype.range = function (t = null, e = null) {
        const n = new Range();
        if ("number" === typeof t) {
          const e = this.locateChar(t);
          e ? n.setStart(e.node, e.offset) : n.setStartBefore(this);
        } else n.setStartBefore(this);
        if ("number" === typeof e) {
          const t = this.locateChar(e);
          t ? n.setEnd(t.node, t.offset) : n.setEndAfter(this);
        } else n.setEndAfter(this);
        return n;
      }),
      (Element.prototype.whenLayoutReady = function (t = 3) {
        return new Promise((e) => {
          let n = this.clientWidth,
            i = this.clientHeight;
          const r = () => {
            if (t <= 0) return e();
            this.clientWidth !== n
              ? (n = this.clientWidth)
              : this.clientHeight !== i
              ? (i = this.clientHeight)
              : t--,
              requestAnimationFrame(r);
          };
          r();
        });
      }),
      (Element.prototype.extract = function () {
        if (!this.parentElement) return !1;
        const t = new Range();
        return (
          t.setStartBefore(this.firstChild),
          t.setEndAfter(this.lastChild),
          this.parentElement.replaceChild(t.cloneContents(), this),
          t.detach(),
          !0
        );
      }),
      (Element.prototype.remove = function () {
        this.parentElement, this.parentElement.removeChild(this);
      }),
      (Element.prototype.blink = function (t = 3, e = "state-blinking") {
        this.classList.add(e),
          setTimeout(() => {
            this.classList.remove(e);
          }, 1e3 * t);
      }),
      (HTMLElement.prototype.scrollPosition = function (t = 0, e) {
        if (t > 0) {
          const i = this.locateChar(t);
          var n;
          if (i)
            return null === (n = i.node) || void 0 === n
              ? void 0
              : n.scrollPosition(i.offset, e);
        }
        const i = {
            top: this.clientTop + this.offsetTop,
            left: this.clientLeft + this.offsetLeft,
          },
          r = this.offsetParent.getBoundingClientRect(),
          s = this.offsetParent.clientHeight,
          a = this.offsetParent.clientWidth;
        if (
          (Math.abs(r.height - s) > 1 && (i.top *= r.height / s),
          Math.abs(r.width - a) > 1 && (i.left *= r.width / a),
          e && !this.offsetParent.isSameNode(e))
        ) {
          const t = this.offsetParent.scrollPosition(0, e);
          (i.top += t.top), (i.left += t.left);
        }
        return i;
      }),
      (EventTarget.prototype._addEventListener =
        Element.prototype.addEventListener),
      (EventTarget.prototype.addEventListener = function (t, e, n, i = null) {
        return (
          this._addEventListener(t, e, n),
          this.eventListenersKeyDB || (this.eventListenersKeyDB = {}),
          this.eventListeners || (this.eventListeners = {}),
          this.eventListeners[t] || (this.eventListeners[t] = []),
          (e.isCapture = n),
          this.eventListeners[t].push(e),
          i || (i = `${t}-${this.eventListeners[t].length - 1}`),
          "undefined" !== typeof this.eventListenersKeyDB[i] &&
            this.removeEventListenerById(i),
          (this.eventListenersKeyDB[i] = `${t}.${
            this.eventListeners[t].length - 1
          }`),
          i
        );
      }),
      (EventTarget.prototype.removeEventListenersOfType = function (t) {
        if (
          !Array.isArray(this.eventListeners[t]) ||
          this.eventListeners[t].length <= 0
        )
          return !0;
        this.eventListeners[t].forEach((e, n) => {
          e && this.removeEventListener(t, e, e.isCapture || !1),
            (this.eventListeners[t][n] = null);
        }),
          delete this.eventListeners[t];
      }),
      (EventTarget.prototype.removeEventListenerById = function (t) {
        if (!this.eventListenersKeyDB) return !0;
        if ("string" !== typeof this.eventListenersKeyDB[t]) return !0;
        let [e, n] = this.eventListenersKeyDB[t].split(".");
        return (
          !(e && !isNaN(n)) ||
          ((n = parseInt(n)),
          !this.eventListeners[e] ||
            !this.eventListeners[e][n] ||
            (this.removeEventListener(
              e,
              this.eventListeners[e][n],
              this.eventListeners[e][n].isCapture || !1
            ),
            (this.eventListeners[e][n] = null),
            void delete this.eventListenersKeyDB[t]))
        );
      }),
      (EventTarget.prototype.removeAllEventListeners = function () {
        if (!this.eventListeners) return !0;
        Object.keys(this.eventListeners).forEach((t) => {
          this.removeEventListenersOfType(t);
        });
      }),
      (Range.prototype.wrapWith = function (t = "tag", e = {}) {
        const n = [];
        let i = this.startContainer,
          r = this.startOffset;
        for (; i && 0 === this.comparePoint(i, r); ) {
          let t = i,
            e = i.textContent.length;
          if (
            (0 !== this.comparePoint(t, e) && (e = this.endOffset),
            0 !== this.comparePoint(t, e))
          )
            break;
          n.push({ node: i, start: r, end: e }),
            (i = i.nextTextNode()),
            (r = 0);
        }
        const s = new Range(),
          a = [];
        return (
          n.forEach((n) => {
            if (n.start === n.end) return !0;
            const i = document.createElement(t);
            Object.keys(e).forEach((t) => {
              i.setAttribute(t, e[t]);
            }),
              s.setStart(n.node, n.start),
              s.setEnd(n.node, n.end),
              s.surroundContents(i),
              a.push(i);
          }),
          s.detach(),
          a
        );
      }),
      (Range.prototype.offsetFrom = function (t) {
        const e = new Range();
        this.comparePoint(t, 0) >= 0
          ? (e.setStart(this.startContainer, this.startOffset), e.setEnd(t, 0))
          : (e.setStart(t, 0), e.setEnd(this.startContainer, this.startOffset));
        const n = e.toString().length;
        return e.detach(), n;
      }),
      (Selection.prototype.wrapWith = function (t, e = {}) {
        return this.getRangeAt(0).wrapWith(t, e);
      }),
      (DOMRect.prototype.intersect = function (t) {
        if (0 === this.width || 0 === this.height) return !1;
        t ||
          (t = {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          });
        return (
          !!(
            (this.left >= t.left && this.left <= t.left + t.width) ||
            (t.left >= this.left && t.left <= this.left + this.width)
          ) &&
          ((this.top >= t.top && this.top <= t.top + t.height) ||
            (t.top >= this.top && t.top <= this.top + this.height))
        );
      }),
      (DOMRect.prototype.shrink = function (t = {}) {
        const e =
            this.top + ((null === t || void 0 === t ? void 0 : t.top) || 0),
          n = this.left + ((null === t || void 0 === t ? void 0 : t.left) || 0),
          i =
            this.height -
            ((null === t || void 0 === t ? void 0 : t.top) || 0) -
            ((null === t || void 0 === t ? void 0 : t.bottom) || 0),
          r =
            this.width -
            ((null === t || void 0 === t ? void 0 : t.left) || 0) -
            ((null === t || void 0 === t ? void 0 : t.right) || 0);
        return new DOMRect(n, e, r, i);
      }),
      (NodeList.prototype.remove = function () {
        this.forEach((t) => {
          t.remove();
        });
      }),
      (DocumentFragment.prototype.toDOMElement = function (t = "div", e = {}) {
        const n = document.createElement(t);
        return (
          n.appendChild(this),
          Object.keys(e).forEach((t) => {
            n.setAttribute(t, e[t]);
          }),
          n
        );
      }),
      window && (window.DOM_EXTENDS_READY = !0);
  },
  function (t, e) {
    (Number.prototype.moveLeft = function (t = 1) {
      return this * Math.pow(2, t);
    }),
      (BigInt.prototype.moveLeft = function (t = 1) {
        return this * BigInt(Math.pow(2, t));
      }),
      (Number.prototype.moveRight = function (t = 1) {
        const e = this / Math.pow(2, t);
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      }),
      (BigInt.prototype.moveRight = function (t = 1) {
        const e = this / BigInt(Math.pow(2, t));
        return e > 0n ? Math.floor(Number(e)) : Math.ceil(Number(e));
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1),
      r = n.n(i);
    String.UUID = class extends String {
      constructor() {
        let t = new Date().getTime();
        super(
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            const n = (t + 16 * Math.random()) % 16 | 0;
            return (
              (t = Math.floor(t / 16)),
              ("x" === e ? n : (7 & n) | 8).toString(16)
            );
          })
        );
      }
    };
    const s = {
      async hash() {
        return r.a.hash(this);
      },
      plainHash() {
        return r.a.hash(this);
      },
      hashPath(t = 2, e = 2) {
        let n = "";
        for (let i = 0; i < t; i++)
          n += this.substring(i * e, (i + 1) * e) + "/";
        return (n += this), n;
      },
      ext() {
        const t = this.split(".");
        if (t.length <= 1) return null;
        let e = t[t.length - 1];
        return "" === e && (e = null), e;
      },
      toDOMElement(t = "div", e = {}) {
        const n = document.createElement(t);
        return (
          (n.innerHTML = this),
          Object.keys(e).forEach((t) => {
            n.setAttribute(t, e[t]);
          }),
          n
        );
      },
      toNumber() {
        return [void 0, null, "", "0"].indexOf(this) >= 0
          ? 0
          : isNaN(this)
          ? this
          : this.indexOf(".") >= 0
          ? parseFloat(this)
          : parseInt(this);
      },
      asXML(t = "text/xml") {
        try {
          let e = new DOMParser().parseFromString(this, t);
          const n = e.querySelector("body");
          return (
            this.indexOf("<html") >= 0 &&
              (!n || "" === n.innerHTML) &&
              (e = this.toDOMElement()),
            e
          );
        } catch (e) {
          return null;
        }
      },
      fixDOM() {
        let t = this.replace(
          /(\s+\w+)\s*=\s*([^<>"\s]+)(?=[^<>]*>)/gi,
          '$1="$2"'
        ).replace(/"'([^'"]*)'"/gi, '"$1"');
        return (t = t.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>")), t;
      },
      getFullPath(t = null, e = null) {
        if (this.isURL()) return this;
        if (0 === this.indexOf("/")) return this;
        let n = null,
          i = this.valueOf();
        if (this.indexOf("#") >= 0) {
          const e = this.split("#");
          (i = e.shift()), (n = "#" + e.join("#")), "" === i && (i = t);
        }
        e && t && t.indexOf(e) > -1 && (t = t.replace(e, ""));
        let r = null;
        if (t && 0 === t.indexOf("/"))
          if (t.isURL()) {
            const e = new URL(t);
            (r = e.origin), (t = e.pathname);
          } else
            t.indexOf("?") > -1
              ? (t = t.split("?")[0])
              : t.indexOf("#") > -1 && (t = t.split("#")[0]);
        else t = "/";
        const s = t.split("/");
        return (
          s.pop(),
          i.split("/").forEach((t) => {
            ".." === t ? s.pop() : "." !== t && s.push(t);
          }),
          ((r || "") + s.join("/") + (n || "")).replace(/\/\//gi, "/")
        );
      },
      relativePathFrom(t) {
        if (0 !== this.indexOf("/")) return this;
        if (0 !== t.indexOf("/")) return "";
        const e = t.split("/"),
          n = this.split("/"),
          i = [];
        for (let r = e.length - 1; r >= 0; r--) {
          if (e.slice(0, r).join("/") === n.slice(0, r).join("/")) {
            0 === i.length && i.push("."), i.push(...n.slice(r));
            break;
          }
          i.push("..");
        }
        return i.join("/");
      },
      isURL(t) {
        if (t) return 0 === this.indexOf(t);
        if (/^(http:|https:|ftp:|blob:|file:)/.test(this)) return !0;
        if (this.length < 400) {
          const t = this.indexOf("://");
          if (t > 0 && t < 10) return !0;
        }
        return !1;
      },
      isElement(t = null) {
        const e = this.trim();
        if (0 !== e.indexOf("<") || e.lastIndexOf(">") !== e.length - 1)
          return !1;
        const n = e.slice(1, e.indexOf(">")).split(" ")[0];
        return (
          (!t || n === t) &&
          e.slice(e.length - n.length - 3) === `</${n}>` &&
          (!!t || n)
        );
      },
      parseAsQuery() {
        let t = {},
          e = this;
        e.indexOf("?") > -1 && (e = this.split("?")[1]);
        return (
          e.split("&").forEach(function (e) {
            const [n, i] = e.split("=");
            t[n] = i;
          }),
          t
        );
      },
      byteLength() {
        return new TextEncoder().encode(this).length;
      },
      bytesBetweenIndex(t, e) {
        return this.slice(t, e).byteLength();
      },
      charIndexAtByte(t) {
        return this.encodeAsBuffer().slice(0, t).decodeString().length;
      },
      b64toBlob(t = "application/octet-stream", e = 512) {
        let n = this;
        if (n.indexOf(";base64,") > 0) {
          const e = n.split(";base64,"),
            i = e.shift();
          "application/octet-stream" === t && (t = i.slice(5)),
            (n = e.join(";base64"));
        }
        try {
          const i = atob(n),
            r = [];
          for (let t = 0; t < i.length; t += e) {
            const n = i.slice(t, t + e),
              s = new Array(n.length);
            for (let t = 0; t < n.length; t++) s[t] = n.charCodeAt(t);
            const a = new Uint8Array(s);
            r.push(a);
          }
          return new Blob(r, { type: t });
        } catch (i) {
          return null;
        }
      },
      toObjectURL: function (t) {
        return this.b64toBlob(t).toObjectURL(t);
      },
      charCode() {
        return new TextEncoder().encode(this)[0];
      },
      encodeAsBuffer(t) {
        const e = new TextEncoder();
        return t && (e.encoding = t), e.encode(this).buffer;
      },
    };
    Object.keys(s).forEach((t) => {
      "undefined" === typeof String.prototype[t] &&
        (String.prototype[t] = s[t]);
    }),
      (e.default = s);
  },
  function (t, e) {
    DataView.prototype.getBigUint64 ||
      (DataView.prototype.getBigUint64 = function (t) {
        const e = this.buffer.slice(t, t + 8);
        let n = [];
        return (
          new Uint8Array(e).forEach(function (t) {
            var e = t.toString(16);
            e.length % 2 && (e = "0" + e), n.push(e);
          }),
          (n = n.join("")),
          "" === n && (n = "0"),
          (n = "0x" + n),
          BigInt(n)
        );
      });
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(0),
      r = n.n(i);
    var s = class {
      constructor(t, e = {}) {
        (this.title = null),
          (this.path = ""),
          (this.sequence = null),
          (this.tocs = []),
          (this.objectURL = null),
          (this.encoding = null),
          (this.mime = null),
          (this.type = null),
          (this.content = null),
          (this.css = []),
          (this.style = []),
          (this.assets = []),
          (this.params = null),
          (this.resource = null),
          (this.path = t),
          Object.assign(this, e);
      }
      get name() {
        if (this._name) return this._name;
      }
      set name(t) {
        this._name = t;
      }
      get key() {
        return this.path.toLowerCase();
      }
      get is_image() {
        const t = ["image/", ".jpg", ".gif", ".png", ".webp"];
        for (let e = 0; e < t.length; e++) {
          if ("image" === this.type) return !0;
          if (this.mime && this.mime.indexOf(t[e]) > -1) return !0;
          if (this.name && this.name.indexOf(t) > -1) return !0;
        }
        return !1;
      }
      get is_css() {
        const t = ["text/css", ".css"];
        for (let e = 0; e < t.length; e++) {
          if ("css" === this.type) return !0;
          if (this.mime && this.mime.indexOf(t[e]) > -1) return !0;
          if (this.name && this.name.indexOf(t) > -1) return !0;
        }
        return !1;
      }
      async readAsText() {
        return await this.readPlainText();
      }
      async readAsBlob() {
        return "base64" === this.encoding && this.content
          ? this.content.b64toBlob(this.mime || "application/octet-stream")
          : "plain" === this.encoding
          ? new Blob([this.content.encodeAsBuffer()], {
              type: this.mime || "application/octet-stream",
            })
          : void 0;
      }
      async readAsXML() {
        const t = await this.readAsText();
        return t ? t.asXML("text/html") : null;
      }
      async readPlainText() {
        switch (this.encoding) {
          case "plain":
          case "base64":
            return this.content;
        }
        return this.content || (await this.render()), this.content;
      }
      async getObjectURL() {
        if (!this.objectURL) {
          let t = null;
          if (this.is_css) {
            const e = await this.render();
            t = new Blob([e.encodeAsBuffer()], {
              type: this.mime || "text/css",
            });
          } else t = await this.readAsBlob();
          this.objectURL = t ? t.toObjectURL() : null;
        }
        return this.objectURL;
      }
      async render(t = null) {
        return this.is_css
          ? await this.renderAsCss()
          : this.is_image
          ? await this.entry.getObjectURL()
          : await this.renderAsDOM();
      }
      async renderAsDOM(t) {
        if (
          (t &&
            Object.keys(t).length > 0 &&
            t.toString() !== this.params &&
            ((this.params = t.toString()), (this.content = null)),
          this.content)
        )
          return {
            section: this.sequence,
            title: this.title,
            dom: this.content,
            css: this.css,
            style: this.style,
            entry: this,
            documentCss: this.documentCss || {},
          };
        const e = await this.readAsXML();
        if (!e)
          throw new Error("\u8d44\u6e90\u5185\u5bb9\u89e3\u6790\u51fa\u9519");
        const n = e.querySelector("title");
        this.title = n ? n.textContent : null;
        const i = e.querySelectorAll(
          "link[rel=stylesheet], link[type=text\\/css]"
        );
        this.documentCss = {};
        for (const o of i) {
          const t = {};
          ["href", "rel", "media", "type"].forEach((e) => {
            (t[e] = o.getAttribute(e) || null), t[e] || delete t[e];
          });
          const e = this.resource.getEntry(
            t.href.getFullPath(this.path) || null
          );
          if (!e) continue;
          if (this.css.findIndex((t) => t.path === e.path) > -1) continue;
          (t.href = await e.getObjectURL()),
            (t.path = e.path),
            this.css.push(t);
          const n = await e.getCssFonts();
          n && (this.documentCss[e.path] = n);
        }
        e.querySelectorAll("style").forEach((t) => {
          this.style.push(
            t.textContent.replace(/[\r\n} ]{1}body/g, ".entry-body-content")
          ),
            t.remove();
        });
        const r = this.extractFontFaces(this.style.join("\r\n"));
        r && (this.documentCss.inline = r),
          e.querySelectorAll("script").forEach((t) => {
            t.remove();
          }),
          e.querySelectorAll("a").forEach((t) => {
            const e = t.getAttribute("href") || null;
            e &&
              ((t.dataset.href = e.getFullPath(this.path)),
              t.classList.add("reader-content-link")),
              t.setAttribute("href", "javascript:;");
          });
        const s =
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        e
          .querySelectorAll(
            "video, audio, video source, audio source, img, image[src]"
          )
          .forEach((t) => {
            if (t.classList.contains("blob-pending")) return !0;
            let e = t.getAttribute("src");
            const n = [];
            e &&
              ((e = e.getFullPath(this.path)),
              this.assets.push(e),
              n.push({ path: e, target: "src" }),
              t.setAttribute("src", s)),
              t.getAttribute("poster") &&
                n.push({
                  path: t.getAttribute("poster").getFullPath(this.path),
                  target: "poster",
                }),
              n.length > 0 &&
                (t.classList.add("blob-pending"),
                (t.dataset.blobPendings = JSON.stringify(n)));
          }),
          e.querySelectorAll("svg image").forEach((t) => {
            let e = t.getAttribute("xlink:href");
            e &&
              ((e = e.getFullPath(this.path)),
              this.assets.push(e),
              (t.dataset.href = e),
              (t.dataset.targetAttribute = "xlink:href"),
              t.setAttribute("xlink:href", s),
              t.classList.add("blob-pending"));
          }),
          e.querySelectorAll("meta").forEach((t) => {
            t.remove();
          });
        const a = e.querySelector("body");
        return (
          a
            ? (a.classList.add("entry-body-content"),
              (this.content = a.outerHTML
                .replace("<body", "<div")
                .replace("</body>", "</div>")))
            : (this.content = `<div class="entry-body-content">${e.innerHTML}</div>`),
          {
            title: n,
            section: this.sequence,
            dom: this.content,
            css: this.css,
            style: this.style,
            entry: this,
            documentCss: this.documentCss,
          }
        );
      }
      async renderAsCss() {
        if (!this.is_css) return null;
        if (this._compiled) return this._compiled.content;
        let t = await this.readAsBlob();
        if (!t) return null;
        let e = await t.text();
        const n = Array.from(e.matchAll(/url\(.*\)/gi));
        for (let i = 0; i < n.length; i++) {
          let t = n[i][0].split("(")[1].split(")")[0].replace(/"/g, "");
          const r = this.resource.getEntry(t.getFullPath(this.path));
          if (!r) continue;
          this.assets.push(r.path);
          const s = await r.getObjectURL();
          e = e.replace(new RegExp(t, "ig"), s);
        }
        return (
          (e = e.replace(/[\r\n} ]{1}body/g, ".entry-body-content")),
          (this._compiled = { content: e, fonts: this.extractFontFaces(e) }),
          e
        );
      }
      async getCssFonts() {
        return this.is_css
          ? (await this.render(), this._compiled.fonts || null)
          : null;
      }
      extractFontFaces(t) {
        const e = Array.from(t.matchAll(/\@font-face[\s\S]*?}/gi)),
          n = [];
        return (
          e.forEach((t) => {
            n.push(t[0]);
          }),
          n.join("\r\n")
        );
      }
      async onRendered(t) {
        if (!t) return !0;
        t.querySelectorAll(".blob-pending").forEach((t) => {
          const e = t.dataset.blobPendings
            ? JSON.parse(t.dataset.blobPendings)
            : [];
          t.dataset.targetAttribute &&
            e.push({ path: t.dataset.href, target: t.dataset.targetAttribute });
          for (let n = 0; n < e.length; n++) {
            const i = e[n],
              r = i.path,
              s = this.resource.getEntry(r);
            s &&
              s.getObjectURL().then((e) => {
                t.setAttribute(i.target, e),
                  t.classList.replace("blob-pending", "blob-pended");
              });
          }
        }),
          t.querySelectorAll("a.reader-content-link").forEach((t) => {
            const e = (t) => {
              let e = null;
              if (t.currentTarget) e = t.currentTarget.dataset.href;
              else
                for (const n of t.path)
                  if ("A" === n.tagName) {
                    e = n.dataset.href;
                    break;
                  }
              return (
                !e ||
                (e.isURL()
                  ? (this.resource.$emit("visit-link", e), !0)
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    void this.resource.render.goto(e).then()))
              );
            };
            t.addEventListener("click", e), t.addEventListener("touchend", e);
          }),
          (this.element = t),
          (t.entry = this);
      }
      revoke() {
        return (
          this.objectURL &&
            ((window.URL || window.webkitURL).revokeObjectURL(this.objectURL),
            (this.objectURL = null)),
          this.assets.forEach((t) => {
            const e = this.resource.getEntry(t);
            e && e.revoke();
          }),
          this._compiled && (this._compiled = null),
          !0
        );
      }
      destroy() {
        this.revoke();
      }
      async prepare(t = {}) {
        const e = Object.assign(
          {},
          this,
          { resource: this.resource.id, objectURL: null },
          t
        );
        return (
          delete e.id,
          e.css.forEach((t) => {
            delete t.href;
          }),
          e
        );
      }
      restore(t, e = {}) {
        Object.assign(this, e), (this.resource = t);
      }
    };
    var a = class {
      constructor(t, e = {}) {
        (this.title = null),
          (this.page = { count: null, start: null, end: null }),
          (this.range = { start: null, end: null }),
          (this.entry = null),
          (this.sequence = null),
          (this.resource = null),
          (this.entry = t),
          t.resource && (this.resource = t.resource),
          Object.assign(this, e);
      }
      revoke() {
        this.entry && this.entry.revoke();
      }
      async render(t = null) {
        return await this.entry.render(t);
      }
      get path() {
        return this.entry.key;
      }
      prepare() {}
    };
    var o = class {
      constructor(t, e) {
        (this.id = null),
          (this.title = null),
          (this.path = null),
          (this.depth = null),
          (this.params = {}),
          (this.parent = null),
          (this.children = []),
          (this.section = null),
          (this.resource = null),
          Object.assign(this, t),
          (this.resource = e);
      }
      prepare(t = {}) {
        const e = Object.assign({}, this, t);
        return (
          (e.resource = this.resource.id), (e.children = []), delete e.id, e
        );
      }
    };
    var l = async function (t = "resource-vfs") {
      let e = null;
      if (!r.a) return null;
      try {
        e = await new r.a(t).open();
      } catch (n) {
        (e = new r.a(t)),
          e
            .version(1)
            .stores({
              resources: "++id, &guid, hash, updated_at",
              entries: "++id, path, section, resource",
              sections: "++id, sequence, entry, resource",
              tocs: "++id, key, resource",
            });
      }
      return e;
    };
    var c = {
      "application/epub+zip": "epub",
      "application/pdf": "pdf",
      "text/plain": "txt",
      azw: "mobi",
      azw3: "mobi",
      prc: "mobi",
      zip: "mobi",
    };
    class d {
      constructor(t, e = {}) {
        (this.version = 1),
          (this.id = null),
          (this.description = "abstract resource loader"),
          (this.reader = null),
          (this.db = null),
          (this.guid = null),
          (this.hash = null),
          (this.meta = {}),
          (this.toc = []),
          (this.tocMap = {}),
          (this.sections = []),
          (this.entries = {}),
          (this.guides = []),
          (this.original = null),
          (this.renders = { default: "-" }),
          (this.opened = !1),
          (this.styles = []),
          (this.css = []),
          (this.PLAIN_ENTRY = !1),
          (this.META_ONLY = !1),
          (this.meta_support = !1),
          (this.meta_get = !1),
          (this.original = { src: t, params: e });
      }
      destructor() {
        this.clean().then();
      }
      reflections() {
        return ["getCover", "getMeta", "getToc", "getThumbnail"];
      }
      async open(t = {}) {
        if (this.opened) return !0;
        this.META_ONLY =
          "object" === typeof t && t
            ? (null === t || void 0 === t ? void 0 : t.meta_only) || !1
            : !!t;
        const e = this.original.src,
          n = this.original.params;
        this.$emit("resource-loading", e),
          "function" === typeof e.hash && (this.hash = await e.hash()),
          n && "string" === typeof n.guid
            ? (this.guid = n.guid)
            : (this.guid = this.hash),
          await this.restore(),
          await this.exeOpen(),
          (this.meta_support && this.META_ONLY) || (this.opened = !0),
          (this.meta_get = !0),
          this.$emit("resource-loaded"),
          await this.store(),
          (this.db = null);
      }
      async exeOpen() {}
      async preload() {
        await this.open();
      }
      async store() {
        if (!1 === window.RESOURCE_VFS_CACHE) return !1;
        if (!this.opened) return !1;
        const t = await this.openDB();
        if (!t) return !1;
        let e = await t.table("resources").get({ hash: this.hash });
        if (
          (e || (e = await t.table("resources").get({ guid: this.guid })),
          (this.id = e ? e.id : null),
          this.id)
        )
          return !0;
        if (
          ((this.id = await t.table("resources").add(await this.prepare())),
          this.PLAIN_ENTRY)
        ) {
          const e = [],
            n = Object.keys(this.entries);
          for (let t = 0; t < path.length; t++) {
            const i = this.entries[n[t]];
            e.push(await i.prepare());
          }
          const i = t.table("entries");
          i.where({ resource: this.id }).delete(), await i.bulkAdd(e);
          const r = [];
          this.sections.forEach((t, e) => {
            t.sequence = e;
            const n = {
              entry: t.entry.path.toLowerCase(),
              resource: this.id,
              sequence: e,
            };
            r.push(n);
          });
          const s = t.table("sections");
          s.where({ resource: this.id }).delete(), await s.bulkAdd(r);
          const a = [];
          this.toc.forEach((t, e) => {
            a.push(t.prepare({ key: e }));
          });
          const o = t.table("tocs");
          o.where({ resource: this.id }).delete(),
            await o.bulkAdd(a),
            t.table("resources").update(this.id, { plain_stored: !0 });
        }
      }
      async prepare() {
        const t = Object.assign(
          {},
          {
            version: this.version,
            guid: this.guid,
            hash: this.hash,
            name: this.meta.name || this.meta.title,
            original: this.original,
            meta: this.meta,
            updated_at: Date.now(),
            size: this.original.buffer
              ? this.original.buffer.byteLength
              : this.original.src.size ||
                this.original.src.length ||
                this.original.src.byteLength,
          }
        );
        return (
          "string" !== typeof this.original.src && delete t.original.buffer, t
        );
      }
      async restore() {
        if (!1 === window.RESOURCE_VFS_CACHE) return !1;
        const t = await this.openDB();
        if (!t) return !1;
        let e = await t.table("resources").get({ hash: this.hash });
        if (
          (e || (e = await t.table("resources").get({ guid: this.guid })), !e)
        )
          return !1;
        if (
          (await t.table("resources").update(e.id, { updated_at: Date.now() }),
          Object.assign(this, e),
          this.PLAIN_ENTRY)
        ) {
          const e = { resource: this.id };
          (await t.table("entries").where(e).toArray()).forEach((t) => {
            (t.resource = this), this.appendEntry(t.path, t);
          });
          (await t.table("sections").where(e).toArray()).forEach((t) => {
            const e = this.getEntry(t.entry),
              n = new a(e, { resource: this });
            this.sections.push(n);
          });
          (await t.table("tocs").where(e).toArray()).forEach((t) => {
            delete t.resource;
            const e = new o(t, this);
            this.toc.push(e),
              t.parent >= 0 && this.toc[t.parent].children.push(e);
          });
        }
        return this.id;
      }
      async openDB() {
        return this.db ? this.db : (this.db = await l());
      }
      async parseMeta() {
        return !!this.meta_get || (await this.open(!0));
      }
      attachReader(t) {
        (this.reader = t), (this.db = t.db || null);
      }
      close() {
        return (
          (this.hash = null),
          (this.guid = null),
          (this.meta = {}),
          (this.toc = []),
          (this.sections = []),
          (this.entries = {}),
          (this.original = null),
          !0
        );
      }
      async getSection(t = 0) {
        return "number" !== typeof t ? null : this.sections[t] || null;
      }
      async readSection(t = 0, e = {}) {
        const n = await this.getSection(t);
        return n ? await n.render(e) : null;
      }
      async readEntry(t, e = {}) {
        const n = this.getEntry(t);
        return n ? await n.render(e) : null;
      }
      async getToc(t = "list") {
        return (
          await this.open(),
          ["list", !0].indexOf(t) > -1
            ? this.toc || []
            : this.toc.filter(
                (t) => t.parent < 0 || "number" !== typeof t.parent
              )
        );
      }
      async getMeta() {
        return await this.parseMeta(), this.meta || {};
      }
      async getCover(t = {}) {
        return await this.parseMeta(), this.meta.cover || null;
      }
      async getThumbnail() {
        return await this.parseMeta(), this.meta.thumbnail || null;
      }
      async clean() {
        return (
          Object.keys(this.entries).forEach((t) => {
            var e;
            null === (e = this.getEntry(t)) || void 0 === e || e.revoke();
          }),
          this.close()
        );
      }
      getEntry(t) {
        return t && "string" === typeof t
          ? (t.indexOf("#") > 0 && (t = t.split("#")[0]),
            (t = decodeURIComponent(t).toLowerCase()),
            this.entries[t] || null)
          : null;
      }
      attachEntry(t) {
        t && !t.resource && (t.resource = this), (this.entries[t.key] = t);
      }
      appendEntry(t, e = {}) {
        const n = new s(t, e);
        return this.attachEntry(n), n;
      }
      appendSectionEntry(t, e, n = null) {
        const i = this.sections.length + 1;
        n || (n = this.generateSectionPath(i)),
          t || (t = `\u7b2c ${i} \u90e8\u5206`);
        const r = this.appendEntry(n, {
          title: t,
          path: n,
          chars: e.length,
          content: e,
          sequence: i - 1,
        });
        this.sections.push(new a(r));
        const s = new o(
          {
            id: "toc-" + i,
            title: t,
            path: n.toLowerCase(),
            depth: 0,
            parent: -1,
            children: [],
          },
          this
        );
        return delete s.section, this.toc.push(s), r;
      }
      generateSectionPath(t = null) {
        return (
          "number" !== typeof t && (t = this.sections.length + 1),
          `/Text/Chapter-${t}.xhtml`
        );
      }
      $emit(t, e = null) {
        return !this.reader || this.reader.$emit(t, e);
      }
      async onRenderReady(t) {}
      get render() {
        return this.reader.render;
      }
      async parseTarget(t) {
        const e = { offset: "percent", position: 0 };
        if (t) {
          if ("number" === typeof t) {
            const n = await this.getSection(t);
            e.entry = null === n || void 0 === n ? void 0 : n.entry;
          } else if ("string" === typeof t) {
            if (((e.entry = this.getEntry(t)), t.indexOf("#") > 0)) {
              const n = t.split("#")[1];
              0 === n.indexOf("/offset/percent/")
                ? (e.position = parseFloat(n.split("/offset/percent/")[1]))
                : 0 === n.indexOf("/offset/chars/")
                ? ((e.offset = "chars"),
                  (e.position = parseFloat(n.split("/offset/chars/")[1])))
                : ((e.offset = "id"), (e.position = n));
            }
          } else if ("object" === typeof t && t) {
            e.entry = this.getEntry(t.path || t.href);
            const { offset: n = "percent", position: i = 0 } = t;
            Object.assign(e, { offset: n, position: i });
          }
        } else {
          const t = await this.getSection(0);
          e.entry = null === t || void 0 === t ? void 0 : t.entry;
        }
        return e.entry && e.entry.element && (e.element = e.entry.element), e;
      }
    }
    d.dispatch = function (t, e = {}) {
      var n;
      "string" === typeof e && e && (e = { type: e }),
        ("object" === typeof e && e) || (e = {});
      let i = null === (n = e) || void 0 === n ? void 0 : n.type;
      t && t.name && !i && (i = t.name.ext() || "-");
      const r = De[i] || De[c[i]] || null;
      return r
        ? (Object.assign(e, { type: i }), new r(t, e))
        : Promise.reject("\u4e0d\u652f\u6301\u7684\u8d44\u6e90\u7c7b\u578b");
    };
    var h = d;
    const u = {
      _rangesCache: {},
      ERR_HTTP_STATUS: "HTTP error ",
      ERR_HTTP_RANGE: "HTTP Range not supported",
      CONTENT_TYPE_TEXT_PLAIN: "text/plain",
      HTTP_HEADER_CONTENT_LENGTH: "Content-Length",
      HTTP_HEADER_ACCEPT_RANGES: "Accept-Ranges",
      HTTP_HEADER_RANGE: "Range",
      HTTP_METHOD_HEAD: "HEAD",
      HTTP_METHOD_GET: "GET",
      HTTP_RANGE_UNIT: "bytes",
      async getFetchData(t, e) {
        const n = await this.sendFetchRequest("GET", t.url, e);
        (t.data = new Uint8Array(await n.arrayBuffer())),
          t.size || (t.size = t.data.length);
      },
      async sendFetchRequest(t, e, n, i) {
        i = Object.assign(
          {},
          (null === n || void 0 === n ? void 0 : n.headers) || {},
          i || {}
        );
        try {
          const r = await fetch(
            e,
            Object.assign({}, n, { method: t, headers: i })
          );
          if (r.status < 400) return r;
          throw new Error("HTTP error " + (r.statusText || r.status));
        } catch (r) {
          throw r;
        }
      },
      async supportRange(t) {
        if (!1 === window.DISABLE_RANGE_REQUEST) return !1;
        if ("undefined" !== typeof this._rangesCache[t])
          return this._rangesCache[t];
        let e = !1;
        try {
          const n = await this.sendFetchRequest("HEAD", t);
          n.headers.get(this.HTTP_HEADER_ACCEPT_RANGES) ===
            this.HTTP_RANGE_UNIT &&
            (e = parseInt(n.headers.get(this.HTTP_HEADER_CONTENT_LENGTH)));
        } catch (n) {}
        return (this._rangesCache[t] = e), e;
      },
      async stream(t, e = null, n = {}) {
        const { chunkSize: i } = Object.assign({ chunkSize: 2097152 }, n || {}),
          r = await this.supportRange(t);
        if (!1 === r) {
          const n = await this.sendFetchRequest("GET", t);
          return await this.packReadStream(n.body, e, i);
        }
        return new ReadableStream(
          {
            start: (n) => {
              let s = 0;
              const a = () => {
                if (s >= r) return n.close();
                const o = s,
                  l = Math.min(o + i - 1, r - 1);
                this.sendFetchRequest(
                  "GET",
                  t,
                  {},
                  Object.assign({}, { Range: "bytes=" + o + "-" + l })
                )
                  .then((t) => t.arrayBuffer())
                  .then((t) => {
                    const i = t.toUint8Array();
                    n.enqueue(i),
                      e &&
                        (e.onDataProgress && e.onDataProgress(l + 1, r),
                        e.onDataRange && e.onDataRange(o, i)),
                      (s += i.byteLength),
                      a();
                  });
              };
              a();
            },
          },
          new CountQueuingStrategy({ highWaterMark: 10 })
        );
      },
      async multithreadingRead(t, e, n = {}) {
        const { threads: i, chunkSize: r } = Object.assign(
            { threads: 8, chunkSize: 2097152 },
            n || {}
          ),
          s = await this.supportRange(t);
        if (!1 === s) throw new Error("http range not supported");
        const a = [];
        for (let o = 0; o < i; o++) {
          const n = new Promise((n) => {
            let a = o * r;
            const l = () => {
              if (a >= s) return n();
              const c = Math.min(a + r - 1, s);
              this.sendFetchRequest(
                "GET",
                t,
                {},
                Object.assign({}, { Range: "bytes=" + a + "-" + c })
              )
                .then((t) => t.arrayBuffer())
                .then((t) => {
                  const n = t.toUint8Array();
                  return (async () => {
                    e &&
                      (e.onDataRange && (await e.onDataRange(a, n)),
                      e.onDataRangeQueue &&
                        e.onDataRangeQueue[o] &&
                        (await e.onDataRangeQueue[o](a, n)));
                  })();
                })
                .then(() => {
                  (a += r * i), window.requestAnimationFrame(l);
                });
            };
            l();
          });
          a.push(n);
        }
        return Promise.all(a);
      },
      async packReadStream(t, e, n = {}) {
        const { chunkSize: i } = Object.assign({ chunkSize: 2097152 }, n || {});
        return new ReadableStream(
          {
            start: (n) => {
              const i = t.getReader();
              let r = 0;
              const s = () => {
                i.read()
                  .then(({ done: t, value: i }) => {
                    if (t) {
                      try {
                        n.close();
                      } catch (s) {}
                      return e && e.onDataLoaded && e.onDataLoaded(), !0;
                    }
                    return (async () => {
                      i &&
                        (n.enqueue(i),
                        e && e.onDataRange && (await e.onDataRange(r, i)),
                        (r += i.length));
                    })();
                  })
                  .then(() => {
                    s();
                  });
              };
              s();
            },
          },
          new CountQueuingStrategy({ highWaterMark: 10 })
        );
      },
    };
    window.io = u;
    var f = u;
    const p =
      window.requestFileSystem || window.webkitRequestFileSystem || null;
    class m {
      constructor(t = 2147483648, e = window.TEMPORARY || 0) {
        if (
          ((this.initialized = !1),
          (this.fs = null),
          (this.size = t),
          (this.type = e),
          !p)
        )
          throw new Error("filesystem not supported.");
      }
      async init() {
        return (
          !!this.initialized ||
          new Promise((t) => {
            p(
              this.type,
              this.size,
              (e) => {
                (this.fs = e), (this.initialized = !0), t(e);
              },
              function () {
                throw new Error("filesystem init failed.");
              }
            );
          })
        );
      }
      async getFile(t) {
        const e = await this.getFileEntry(t, { create: !1 });
        return new Promise((t) => {
          e.file((e) => {
            t(e);
          });
        });
      }
      async getDirectory(t) {
        let e = this.fs.root;
        if (("string" === typeof t && (t = t.split("/")), 0 === t.length))
          return e;
        let n = "";
        for (let i = 0; i < t.length; i++) {
          const r = t[i];
          if (r)
            if (((n += "/" + r), await this.isDirectory(n))) {
              const t = new Promise((t) => {
                this.fs.root.getDirectory(n, { create: !1 }, (e) => {
                  t(e);
                });
              });
              e = await t;
            } else {
              const t = new Promise((t) => {
                this.fs.root.getDirectory(
                  n,
                  { create: !0, exclusive: !0 },
                  (e) => {
                    t(e);
                  }
                );
              });
              e = await t;
            }
        }
        return e;
      }
      async getFileEntry(t, e = {}) {
        let n = t.split("/");
        return (
          n.pop(),
          (n = n.join("/")),
          (e = (await this.isFile(t))
            ? Object.assign({ create: !1, exclusive: !0 }, e)
            : Object.assign({ create: !0, exclusive: !0 }, e)),
          new Promise((i, r) => {
            this.getDirectory(n).then((n) => {
              n.getFile(
                t,
                e,
                function (t) {
                  i(t);
                },
                function (t) {
                  r(t);
                }
              );
            });
          })
        );
      }
      async getFileWriter(t, e = null) {
        const n = await this.getFileEntry(t);
        return new Promise((t) => {
          n.createWriter(function (e) {
            t(e);
          });
        });
      }
      async writeFileFromUrl(t, e, n = {}) {
        const {
            threads: i,
            chunkSize: r,
            update: s,
          } = Object.assign(
            { threads: 10, chunkSize: 2097152, update: !1 },
            n || {}
          ),
          a = [];
        if ((await this.isFile(t)) && !s);
        else {
          const n = await f.supportRange(e);
          if (!n) throw new Error("http range not supported");
          (await this.getFileWriter(t)).truncate(n);
          for (let e = 0; e < i; e++) {
            const e = await this.getFileWriter(t),
              n = async (t, n) =>
                new Promise((i) => {
                  (e.onwriteend = function (t) {
                    i();
                  }),
                    e.seek(t),
                    e.write(new Blob([n]));
                });
            a.push(n);
          }
          await f.multithreadingRead(
            e,
            { onDataRangeQueue: a },
            { chunkSize: r, threads: i }
          );
        }
        return await this.getFile(t);
      }
      async writeFileFromStream(t, e, n = {}) {
        const { chunkSize: i } = Object.assign(
            { chunkSize: 10485760 },
            n || {}
          ),
          r = await this.getFileWriter(t);
        return new Promise((t, n) => {
          const s = new WritableStream(
            {
              write: (t) =>
                new Promise((e, n) => {
                  (r.onwriteend = function (t) {
                    e();
                  }),
                    r.seek(r.length),
                    r.write(new Blob([t]));
                }),
              close() {
                t();
              },
              abort(t) {
                n(t);
              },
            },
            new ByteLengthQueuingStrategy({ highWaterMark: i })
          );
          e.pipeTo(s);
        });
      }
      async isDirectory(t) {
        return new Promise((e) => {
          this.fs.root.getDirectory(
            t,
            { create: !1 },
            (t) => {
              t && !t.isFile ? e(!0) : e(!1);
            },
            (t) => {
              e(!1);
            }
          );
        });
      }
      async isFile(t) {
        return new Promise((e) => {
          this.fs.root.getFile(
            t,
            { create: !1 },
            (t) => {
              t && t.isFile ? e(!0) : e(!1);
            },
            (t) => {
              e(!1);
            }
          );
        });
      }
      async dir(t) {
        if (!(await this.isDirectory(t))) return null;
      }
      async delete(t) {}
      async clean() {}
      async info() {}
    }
    window.TDisk = m;
    var g = class extends h {
      constructor(...t) {
        super(...t), (this.BIG_FILE_SIZE = 52428800);
      }
      async readAsBuffer() {
        const t = this.original.src;
        if (this.original.buffer) return this.original.buffer;
        let e = null;
        if (File.prototype.isPrototypeOf(t)) e = await this.fileToBuffer(t);
        else if (Blob.prototype.isPrototypeOf(t))
          e = await this.blobToBuffer(t);
        else if (ArrayBuffer.prototype.isPrototypeOf(t)) e = t;
        else {
          if ("string" !== typeof t)
            return Promise.reject("\u9519\u8bef\u7684\u8d44\u6e90!");
          try {
            if (!t.isURL() && t.indexOf("/") < 0 && t.length > 255)
              throw new Error(t);
            (e = await this.urlToBuffer(t)), (this.original.buffer = e);
          } catch (n) {
            (e = (n.message || t).encodeAsBuffer()), (this.original.buffer = e);
          }
        }
        return e || t.encodeAsBuffer();
      }
      async urlToBuffer(t) {
        try {
          const e = await f.supportRange(t);
          if (!e || e < this.BIG_FILE_SIZE) {
            let e = await f.sendFetchRequest(f.HTTP_METHOD_GET, t);
            return await e.arrayBuffer();
          }
          const n = new ArrayBuffer(e),
            [i, r] = [10, 2097152],
            s = [];
          for (let t = 0; t < i; t++) {
            const t = async (t, e) => {
              const i = n.DataView(t, e.length);
              for (let n = 0; n < e.length; n++) i.setUint8(n, e[n]);
            };
            s.push(t);
          }
          return (
            await f.multithreadingRead(
              t,
              { onDataRangeQueue: s },
              { threads: i, chunkSize: r }
            ),
            n
          );
        } catch (e) {
          return new Promise((e, n) => {
            const i = new XMLHttpRequest();
            (i.onload = () => {
              i.status < 400
                ? e(i.response)
                : n(
                    new Error(
                      `Failed to load file from '${t}': [${i.status}] ${i.statusText}`
                    )
                  );
            }),
              (i.onerror = function (t) {
                n(t);
              }),
              i.open("get", t, !0),
              (i.responseType = "arraybuffer"),
              i.send();
          });
        }
      }
      async fileToBuffer(t) {
        return new Promise((e, n) => {
          const i = new FileReader();
          i.addEventListener("load", (t) => {
            e(i.result);
          }),
            i.addEventListener("error", (t) => {
              n(i.error);
            }),
            i.readAsArrayBuffer(t);
        });
      }
      async blobToBuffer(t) {
        return new Promise((e, n) => {
          const i = new FileReader();
          i.addEventListener("load", (t) => {
            e(t);
          }),
            i.readAsArrayBuffer(t);
        });
      }
      async streamToBuffer(t) {}
      async base64ToBuffer(t) {}
      async bufferToBlob(t, e = {}) {
        return new Blob(new Array(...t), e);
      }
      async urlToFile(t) {
        try {
          const e = new e();
          t.plainHash();
        } catch (e) {
          throw e;
        }
      }
    };
    function _(t) {
      return (function t(e) {
        return e.reduce((e, n) => e.concat(Array.isArray(n) ? t(n) : n), []);
      })(t.map(([t, e]) => new Array(t).fill(e, 0, t)));
    }
    const x = [0, 1, 2, 3].concat(
      ..._([
        [2, 4],
        [2, 5],
        [4, 6],
        [4, 7],
        [8, 8],
        [8, 9],
        [16, 10],
        [16, 11],
        [32, 12],
        [32, 13],
        [64, 14],
        [64, 15],
        [2, 0],
        [1, 16],
        [1, 17],
        [2, 18],
        [2, 19],
        [4, 20],
        [4, 21],
        [8, 22],
        [8, 23],
        [16, 24],
        [16, 25],
        [32, 26],
        [32, 27],
        [64, 28],
        [64, 29],
      ])
    );
    function w() {
      const t = this;
      function e(t, e) {
        let n = 0;
        do {
          (n |= 1 & t), (t >>>= 1), (n <<= 1);
        } while (--e > 0);
        return n >>> 1;
      }
      t.build_tree = function (n) {
        const i = t.dyn_tree,
          r = t.stat_desc.static_tree,
          s = t.stat_desc.elems;
        let a,
          o,
          l,
          c = -1;
        for (n.heap_len = 0, n.heap_max = 573, a = 0; a < s; a++)
          0 !== i[2 * a]
            ? ((n.heap[++n.heap_len] = c = a), (n.depth[a] = 0))
            : (i[2 * a + 1] = 0);
        for (; n.heap_len < 2; )
          (l = n.heap[++n.heap_len] = c < 2 ? ++c : 0),
            (i[2 * l] = 1),
            (n.depth[l] = 0),
            n.opt_len--,
            r && (n.static_len -= r[2 * l + 1]);
        for (t.max_code = c, a = Math.floor(n.heap_len / 2); a >= 1; a--)
          n.pqdownheap(i, a);
        l = s;
        do {
          (a = n.heap[1]),
            (n.heap[1] = n.heap[n.heap_len--]),
            n.pqdownheap(i, 1),
            (o = n.heap[1]),
            (n.heap[--n.heap_max] = a),
            (n.heap[--n.heap_max] = o),
            (i[2 * l] = i[2 * a] + i[2 * o]),
            (n.depth[l] = Math.max(n.depth[a], n.depth[o]) + 1),
            (i[2 * a + 1] = i[2 * o + 1] = l),
            (n.heap[1] = l++),
            n.pqdownheap(i, 1);
        } while (n.heap_len >= 2);
        (n.heap[--n.heap_max] = n.heap[1]),
          (function (e) {
            const n = t.dyn_tree,
              i = t.stat_desc.static_tree,
              r = t.stat_desc.extra_bits,
              s = t.stat_desc.extra_base,
              a = t.stat_desc.max_length;
            let o,
              l,
              c,
              d,
              h,
              u,
              f = 0;
            for (d = 0; d <= 15; d++) e.bl_count[d] = 0;
            for (
              n[2 * e.heap[e.heap_max] + 1] = 0, o = e.heap_max + 1;
              o < 573;
              o++
            )
              (l = e.heap[o]),
                (d = n[2 * n[2 * l + 1] + 1] + 1),
                d > a && ((d = a), f++),
                (n[2 * l + 1] = d),
                l > t.max_code ||
                  (e.bl_count[d]++,
                  (h = 0),
                  l >= s && (h = r[l - s]),
                  (u = n[2 * l]),
                  (e.opt_len += u * (d + h)),
                  i && (e.static_len += u * (i[2 * l + 1] + h)));
            if (0 !== f) {
              do {
                for (d = a - 1; 0 === e.bl_count[d]; ) d--;
                e.bl_count[d]--,
                  (e.bl_count[d + 1] += 2),
                  e.bl_count[a]--,
                  (f -= 2);
              } while (f > 0);
              for (d = a; 0 !== d; d--)
                for (l = e.bl_count[d]; 0 !== l; )
                  (c = e.heap[--o]),
                    c > t.max_code ||
                      (n[2 * c + 1] != d &&
                        ((e.opt_len += (d - n[2 * c + 1]) * n[2 * c]),
                        (n[2 * c + 1] = d)),
                      l--);
            }
          })(n),
          (function (t, n, i) {
            const r = [];
            let s,
              a,
              o,
              l = 0;
            for (s = 1; s <= 15; s++) r[s] = l = (l + i[s - 1]) << 1;
            for (a = 0; a <= n; a++)
              (o = t[2 * a + 1]), 0 !== o && (t[2 * a] = e(r[o]++, o));
          })(i, t.max_code, n.bl_count);
      };
    }
    function b(t, e, n, i, r) {
      (this.static_tree = t),
        (this.extra_bits = e),
        (this.extra_base = n),
        (this.elems = i),
        (this.max_length = r);
    }
    (w._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(
      ..._([
        [2, 8],
        [2, 9],
        [2, 10],
        [2, 11],
        [4, 12],
        [4, 13],
        [4, 14],
        [4, 15],
        [8, 16],
        [8, 17],
        [8, 18],
        [8, 19],
        [16, 20],
        [16, 21],
        [16, 22],
        [16, 23],
        [32, 24],
        [32, 25],
        [32, 26],
        [31, 27],
        [1, 28],
      ])
    )),
      (w.base_length = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56,
        64, 80, 96, 112, 128, 160, 192, 224, 0,
      ]),
      (w.base_dist = [
        0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384,
        512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576,
      ]),
      (w.d_code = function (t) {
        return t < 256 ? x[t] : x[256 + (t >>> 7)];
      }),
      (w.extra_lbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      (w.extra_dbits = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      (w.extra_blbits = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      (w.bl_order = [
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      (b.static_ltree = [
        12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156,
        8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8,
        194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50,
        8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8,
        106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8,
        250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22,
        8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8,
        78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222,
        8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8,
        161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113,
        8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8,
        25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133,
        8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8,
        213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45,
        8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8,
        125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9,
        467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9,
        11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9,
        299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9,
        155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9,
        443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9,
        71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9,
        359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9,
        215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9,
        503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9,
        47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9,
        287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9,
        191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96,
        7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88,
        7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116,
        7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8,
      ]),
      (b.static_dtree = [
        0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5,
        26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5,
        13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5,
      ]),
      (b.static_l_desc = new b(b.static_ltree, w.extra_lbits, 257, 286, 15)),
      (b.static_d_desc = new b(b.static_dtree, w.extra_dbits, 0, 30, 15)),
      (b.static_bl_desc = new b(null, w.extra_blbits, 0, 19, 7));
    function y(t, e, n, i, r) {
      (this.good_length = t),
        (this.max_lazy = e),
        (this.nice_length = n),
        (this.max_chain = i),
        (this.func = r);
    }
    const v = [
        new y(0, 0, 0, 0, 0),
        new y(4, 4, 8, 4, 1),
        new y(4, 5, 16, 8, 1),
        new y(4, 6, 32, 32, 1),
        new y(4, 4, 16, 16, 2),
        new y(8, 16, 32, 32, 2),
        new y(8, 16, 128, 128, 2),
        new y(8, 32, 128, 256, 2),
        new y(32, 128, 258, 1024, 2),
        new y(32, 258, 258, 4096, 2),
      ],
      k = [
        "need dictionary",
        "stream end",
        "",
        "",
        "stream error",
        "data error",
        "",
        "buffer error",
        "",
        "",
      ];
    function A(t, e, n, i) {
      const r = t[2 * e],
        s = t[2 * n];
      return r < s || (r == s && i[e] <= i[n]);
    }
    function E() {
      const t = this;
      let e,
        n,
        i,
        r,
        s,
        a,
        o,
        l,
        c,
        d,
        h,
        u,
        f,
        p,
        m,
        g,
        _,
        x,
        y,
        E,
        U,
        S,
        z,
        T,
        R,
        L,
        C,
        B,
        O,
        D,
        j,
        P,
        M;
      const F = new w(),
        N = new w(),
        I = new w();
      let q, H, W, G, V, $, K, X;
      function Q() {
        let e;
        for (e = 0; e < 286; e++) j[2 * e] = 0;
        for (e = 0; e < 30; e++) P[2 * e] = 0;
        for (e = 0; e < 19; e++) M[2 * e] = 0;
        (j[512] = 1), (t.opt_len = t.static_len = 0), (W = V = 0);
      }
      function Z(t, e) {
        let n,
          i = -1,
          r = t[1],
          s = 0,
          a = 7,
          o = 4;
        0 === r && ((a = 138), (o = 3)), (t[2 * (e + 1) + 1] = 65535);
        for (let l = 0; l <= e; l++)
          (n = r),
            (r = t[2 * (l + 1) + 1]),
            (++s < a && n == r) ||
              (s < o
                ? (M[2 * n] += s)
                : 0 !== n
                ? (n != i && M[2 * n]++, M[32]++)
                : s <= 10
                ? M[34]++
                : M[36]++,
              (s = 0),
              (i = n),
              0 === r
                ? ((a = 138), (o = 3))
                : n == r
                ? ((a = 6), (o = 3))
                : ((a = 7), (o = 4)));
      }
      function Y(e) {
        t.pending_buf[t.pending++] = e;
      }
      function J(t) {
        Y(255 & t), Y((t >>> 8) & 255);
      }
      function tt(t, e) {
        let n;
        const i = e;
        X > 16 - i
          ? ((n = t),
            (K |= (n << X) & 65535),
            J(K),
            (K = n >>> (16 - X)),
            (X += i - 16))
          : ((K |= (t << X) & 65535), (X += i));
      }
      function et(t, e) {
        const n = 2 * t;
        tt(65535 & e[n], 65535 & e[n + 1]);
      }
      function nt(t, e) {
        let n,
          i,
          r = -1,
          s = t[1],
          a = 0,
          o = 7,
          l = 4;
        for (0 === s && ((o = 138), (l = 3)), n = 0; n <= e; n++)
          if (((i = s), (s = t[2 * (n + 1) + 1]), !(++a < o && i == s))) {
            if (a < l)
              do {
                et(i, M);
              } while (0 !== --a);
            else
              0 !== i
                ? (i != r && (et(i, M), a--), et(16, M), tt(a - 3, 2))
                : a <= 10
                ? (et(17, M), tt(a - 3, 3))
                : (et(18, M), tt(a - 11, 7));
            (a = 0),
              (r = i),
              0 === s
                ? ((o = 138), (l = 3))
                : i == s
                ? ((o = 6), (l = 3))
                : ((o = 7), (l = 4));
          }
      }
      function it() {
        16 == X
          ? (J(K), (K = 0), (X = 0))
          : X >= 8 && (Y(255 & K), (K >>>= 8), (X -= 8));
      }
      function rt(e, n) {
        let i, r, s;
        if (
          ((t.pending_buf[G + 2 * W] = (e >>> 8) & 255),
          (t.pending_buf[G + 2 * W + 1] = 255 & e),
          (t.pending_buf[q + W] = 255 & n),
          W++,
          0 === e
            ? j[2 * n]++
            : (V++,
              e--,
              j[2 * (w._length_code[n] + 256 + 1)]++,
              P[2 * w.d_code(e)]++),
          0 === (8191 & W) && C > 2)
        ) {
          for (i = 8 * W, r = U - _, s = 0; s < 30; s++)
            i += P[2 * s] * (5 + w.extra_dbits[s]);
          if (((i >>>= 3), V < Math.floor(W / 2) && i < Math.floor(r / 2)))
            return !0;
        }
        return W == H - 1;
      }
      function st(e, n) {
        let i,
          r,
          s,
          a,
          o = 0;
        if (0 !== W)
          do {
            (i =
              ((t.pending_buf[G + 2 * o] << 8) & 65280) |
              (255 & t.pending_buf[G + 2 * o + 1])),
              (r = 255 & t.pending_buf[q + o]),
              o++,
              0 === i
                ? et(r, e)
                : ((s = w._length_code[r]),
                  et(s + 256 + 1, e),
                  (a = w.extra_lbits[s]),
                  0 !== a && ((r -= w.base_length[s]), tt(r, a)),
                  i--,
                  (s = w.d_code(i)),
                  et(s, n),
                  (a = w.extra_dbits[s]),
                  0 !== a && ((i -= w.base_dist[s]), tt(i, a)));
          } while (o < W);
        et(256, e), ($ = e[513]);
      }
      function at() {
        X > 8 ? J(K) : X > 0 && Y(255 & K), (K = 0), (X = 0);
      }
      function ot(e, n, i) {
        tt(0 + (i ? 1 : 0), 3),
          (function (e, n, i) {
            at(),
              ($ = 8),
              i && (J(n), J(~n)),
              t.pending_buf.set(l.subarray(e, e + n), t.pending),
              (t.pending += n);
          })(e, n, !0);
      }
      function lt(e, n, i) {
        let r,
          s,
          a = 0;
        C > 0
          ? (F.build_tree(t),
            N.build_tree(t),
            (a = (function () {
              let e;
              for (
                Z(j, F.max_code), Z(P, N.max_code), I.build_tree(t), e = 18;
                e >= 3 && 0 === M[2 * w.bl_order[e] + 1];
                e--
              );
              return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
            })()),
            (r = (t.opt_len + 3 + 7) >>> 3),
            (s = (t.static_len + 3 + 7) >>> 3),
            s <= r && (r = s))
          : (r = s = n + 5),
          n + 4 <= r && -1 != e
            ? ot(e, n, i)
            : s == r
            ? (tt(2 + (i ? 1 : 0), 3), st(b.static_ltree, b.static_dtree))
            : (tt(4 + (i ? 1 : 0), 3),
              (function (t, e, n) {
                let i;
                for (
                  tt(t - 257, 5), tt(e - 1, 5), tt(n - 4, 4), i = 0;
                  i < n;
                  i++
                )
                  tt(M[2 * w.bl_order[i] + 1], 3);
                nt(j, t - 1), nt(P, e - 1);
              })(F.max_code + 1, N.max_code + 1, a + 1),
              st(j, P)),
          Q(),
          i && at();
      }
      function ct(t) {
        lt(_ >= 0 ? _ : -1, U - _, t), (_ = U), e.flush_pending();
      }
      function dt() {
        let t, n, i, r;
        do {
          if (((r = c - z - U), 0 === r && 0 === U && 0 === z)) r = s;
          else if (-1 == r) r--;
          else if (U >= s + s - 262) {
            l.set(l.subarray(s, s + s), 0),
              (S -= s),
              (U -= s),
              (_ -= s),
              (t = f),
              (i = t);
            do {
              (n = 65535 & h[--i]), (h[i] = n >= s ? n - s : 0);
            } while (0 !== --t);
            (t = s), (i = t);
            do {
              (n = 65535 & d[--i]), (d[i] = n >= s ? n - s : 0);
            } while (0 !== --t);
            r += s;
          }
          if (0 === e.avail_in) return;
          (t = e.read_buf(l, U + z, r)),
            (z += t),
            z >= 3 &&
              ((u = 255 & l[U]), (u = ((u << g) ^ (255 & l[U + 1])) & m));
        } while (z < 262 && 0 !== e.avail_in);
      }
      function ht(t) {
        let e,
          n,
          i = R,
          r = U,
          a = T;
        const c = U > s - 262 ? U - (s - 262) : 0;
        let h = D;
        const u = o,
          f = U + 258;
        let p = l[r + a - 1],
          m = l[r + a];
        T >= O && (i >>= 2), h > z && (h = z);
        do {
          if (
            ((e = t),
            l[e + a] == m &&
              l[e + a - 1] == p &&
              l[e] == l[r] &&
              l[++e] == l[r + 1])
          ) {
            (r += 2), e++;
            do {} while (
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              l[++r] == l[++e] &&
              r < f
            );
            if (((n = 258 - (f - r)), (r = f - 258), n > a)) {
              if (((S = t), (a = n), n >= h)) break;
              (p = l[r + a - 1]), (m = l[r + a]);
            }
          }
        } while ((t = 65535 & d[t & u]) > c && 0 !== --i);
        return a <= z ? a : z;
      }
      function ut(e) {
        return (
          (e.total_in = e.total_out = 0),
          (e.msg = null),
          (t.pending = 0),
          (t.pending_out = 0),
          (n = 113),
          (r = 0),
          (F.dyn_tree = j),
          (F.stat_desc = b.static_l_desc),
          (N.dyn_tree = P),
          (N.stat_desc = b.static_d_desc),
          (I.dyn_tree = M),
          (I.stat_desc = b.static_bl_desc),
          (K = 0),
          (X = 0),
          ($ = 8),
          Q(),
          (function () {
            (c = 2 * s), (h[f - 1] = 0);
            for (let t = 0; t < f - 1; t++) h[t] = 0;
            (L = v[C].max_lazy),
              (O = v[C].good_length),
              (D = v[C].nice_length),
              (R = v[C].max_chain),
              (U = 0),
              (_ = 0),
              (z = 0),
              (x = T = 2),
              (E = 0),
              (u = 0);
          })(),
          0
        );
      }
      (t.depth = []),
        (t.bl_count = []),
        (t.heap = []),
        (j = []),
        (P = []),
        (M = []),
        (t.pqdownheap = function (e, n) {
          const i = t.heap,
            r = i[n];
          let s = n << 1;
          for (
            ;
            s <= t.heap_len &&
            (s < t.heap_len && A(e, i[s + 1], i[s], t.depth) && s++,
            !A(e, r, i[s], t.depth));

          )
            (i[n] = i[s]), (n = s), (s <<= 1);
          i[n] = r;
        }),
        (t.deflateInit = function (e, n, r, c, u, _) {
          return (
            c || (c = 8),
            u || (u = 8),
            _ || (_ = 0),
            (e.msg = null),
            -1 == n && (n = 6),
            u < 1 ||
            u > 9 ||
            8 != c ||
            r < 9 ||
            r > 15 ||
            n < 0 ||
            n > 9 ||
            _ < 0 ||
            _ > 2
              ? -2
              : ((e.dstate = t),
                (a = r),
                (s = 1 << a),
                (o = s - 1),
                (p = u + 7),
                (f = 1 << p),
                (m = f - 1),
                (g = Math.floor((p + 3 - 1) / 3)),
                (l = new Uint8Array(2 * s)),
                (d = []),
                (h = []),
                (H = 1 << (u + 6)),
                (t.pending_buf = new Uint8Array(4 * H)),
                (i = 4 * H),
                (G = Math.floor(H / 2)),
                (q = 3 * H),
                (C = n),
                (B = _),
                ut(e))
          );
        }),
        (t.deflateEnd = function () {
          return 42 != n && 113 != n && 666 != n
            ? -2
            : ((t.pending_buf = null),
              (h = null),
              (d = null),
              (l = null),
              (t.dstate = null),
              113 == n ? -3 : 0);
        }),
        (t.deflateParams = function (t, e, n) {
          let i = 0;
          return (
            -1 == e && (e = 6),
            e < 0 || e > 9 || n < 0 || n > 2
              ? -2
              : (v[C].func != v[e].func &&
                  0 !== t.total_in &&
                  (i = t.deflate(1)),
                C != e &&
                  ((C = e),
                  (L = v[C].max_lazy),
                  (O = v[C].good_length),
                  (D = v[C].nice_length),
                  (R = v[C].max_chain)),
                (B = n),
                i)
          );
        }),
        (t.deflateSetDictionary = function (t, e, i) {
          let r,
            a = i,
            c = 0;
          if (!e || 42 != n) return -2;
          if (a < 3) return 0;
          for (
            a > s - 262 && ((a = s - 262), (c = i - a)),
              l.set(e.subarray(c, c + a), 0),
              U = a,
              _ = a,
              u = 255 & l[0],
              u = ((u << g) ^ (255 & l[1])) & m,
              r = 0;
            r <= a - 3;
            r++
          )
            (u = ((u << g) ^ (255 & l[r + 2])) & m),
              (d[r & o] = h[u]),
              (h[u] = r);
          return 0;
        }),
        (t.deflate = function (c, p) {
          let w, A, R, O, D;
          if (p > 4 || p < 0) return -2;
          if (
            !c.next_out ||
            (!c.next_in && 0 !== c.avail_in) ||
            (666 == n && 4 != p)
          )
            return (c.msg = k[4]), -2;
          if (0 === c.avail_out) return (c.msg = k[7]), -5;
          var j;
          if (
            ((e = c),
            (O = r),
            (r = p),
            42 == n &&
              ((A = (8 + ((a - 8) << 4)) << 8),
              (R = ((C - 1) & 255) >> 1),
              R > 3 && (R = 3),
              (A |= R << 6),
              0 !== U && (A |= 32),
              (A += 31 - (A % 31)),
              (n = 113),
              Y(((j = A) >> 8) & 255),
              Y(255 & j)),
            0 !== t.pending)
          ) {
            if ((e.flush_pending(), 0 === e.avail_out)) return (r = -1), 0;
          } else if (0 === e.avail_in && p <= O && 4 != p)
            return (e.msg = k[7]), -5;
          if (666 == n && 0 !== e.avail_in) return (c.msg = k[7]), -5;
          if (0 !== e.avail_in || 0 !== z || (0 != p && 666 != n)) {
            switch (((D = -1), v[C].func)) {
              case 0:
                D = (function (t) {
                  let n,
                    r = 65535;
                  for (r > i - 5 && (r = i - 5); ; ) {
                    if (z <= 1) {
                      if ((dt(), 0 === z && 0 == t)) return 0;
                      if (0 === z) break;
                    }
                    if (
                      ((U += z),
                      (z = 0),
                      (n = _ + r),
                      (0 === U || U >= n) &&
                        ((z = U - n), (U = n), ct(!1), 0 === e.avail_out))
                    )
                      return 0;
                    if (U - _ >= s - 262 && (ct(!1), 0 === e.avail_out))
                      return 0;
                  }
                  return (
                    ct(4 == t),
                    0 === e.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                  );
                })(p);
                break;
              case 1:
                D = (function (t) {
                  let n,
                    i = 0;
                  for (;;) {
                    if (z < 262) {
                      if ((dt(), z < 262 && 0 == t)) return 0;
                      if (0 === z) break;
                    }
                    if (
                      (z >= 3 &&
                        ((u = ((u << g) ^ (255 & l[U + 2])) & m),
                        (i = 65535 & h[u]),
                        (d[U & o] = h[u]),
                        (h[u] = U)),
                      0 !== i &&
                        ((U - i) & 65535) <= s - 262 &&
                        2 != B &&
                        (x = ht(i)),
                      x >= 3)
                    )
                      if (
                        ((n = rt(U - S, x - 3)), (z -= x), x <= L && z >= 3)
                      ) {
                        x--;
                        do {
                          U++,
                            (u = ((u << g) ^ (255 & l[U + 2])) & m),
                            (i = 65535 & h[u]),
                            (d[U & o] = h[u]),
                            (h[u] = U);
                        } while (0 !== --x);
                        U++;
                      } else
                        (U += x),
                          (x = 0),
                          (u = 255 & l[U]),
                          (u = ((u << g) ^ (255 & l[U + 1])) & m);
                    else (n = rt(0, 255 & l[U])), z--, U++;
                    if (n && (ct(!1), 0 === e.avail_out)) return 0;
                  }
                  return (
                    ct(4 == t),
                    0 === e.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                  );
                })(p);
                break;
              case 2:
                D = (function (t) {
                  let n,
                    i,
                    r = 0;
                  for (;;) {
                    if (z < 262) {
                      if ((dt(), z < 262 && 0 == t)) return 0;
                      if (0 === z) break;
                    }
                    if (
                      (z >= 3 &&
                        ((u = ((u << g) ^ (255 & l[U + 2])) & m),
                        (r = 65535 & h[u]),
                        (d[U & o] = h[u]),
                        (h[u] = U)),
                      (T = x),
                      (y = S),
                      (x = 2),
                      0 !== r &&
                        T < L &&
                        ((U - r) & 65535) <= s - 262 &&
                        (2 != B && (x = ht(r)),
                        x <= 5 &&
                          (1 == B || (3 == x && U - S > 4096)) &&
                          (x = 2)),
                      T >= 3 && x <= T)
                    ) {
                      (i = U + z - 3),
                        (n = rt(U - 1 - y, T - 3)),
                        (z -= T - 1),
                        (T -= 2);
                      do {
                        ++U <= i &&
                          ((u = ((u << g) ^ (255 & l[U + 2])) & m),
                          (r = 65535 & h[u]),
                          (d[U & o] = h[u]),
                          (h[u] = U));
                      } while (0 !== --T);
                      if (
                        ((E = 0),
                        (x = 2),
                        U++,
                        n && (ct(!1), 0 === e.avail_out))
                      )
                        return 0;
                    } else if (0 !== E) {
                      if (
                        ((n = rt(0, 255 & l[U - 1])),
                        n && ct(!1),
                        U++,
                        z--,
                        0 === e.avail_out)
                      )
                        return 0;
                    } else (E = 1), U++, z--;
                  }
                  return (
                    0 !== E && ((n = rt(0, 255 & l[U - 1])), (E = 0)),
                    ct(4 == t),
                    0 === e.avail_out ? (4 == t ? 2 : 0) : 4 == t ? 3 : 1
                  );
                })(p);
            }
            if (((2 != D && 3 != D) || (n = 666), 0 == D || 2 == D))
              return 0 === e.avail_out && (r = -1), 0;
            if (1 == D) {
              if (1 == p)
                tt(2, 3),
                  et(256, b.static_ltree),
                  it(),
                  1 + $ + 10 - X < 9 &&
                    (tt(2, 3), et(256, b.static_ltree), it()),
                  ($ = 7);
              else if ((ot(0, 0, !1), 3 == p)) for (w = 0; w < f; w++) h[w] = 0;
              if ((e.flush_pending(), 0 === e.avail_out)) return (r = -1), 0;
            }
          }
          return 4 != p ? 0 : 1;
        });
    }
    function U() {
      (this.next_in_index = 0),
        (this.next_out_index = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.avail_out = 0),
        (this.total_out = 0);
    }
    U.prototype = {
      deflateInit: function (t, e) {
        return (
          (this.dstate = new E()),
          e || (e = 15),
          this.dstate.deflateInit(this, t, e)
        );
      },
      deflate: function (t) {
        return this.dstate ? this.dstate.deflate(this, t) : -2;
      },
      deflateEnd: function () {
        if (!this.dstate) return -2;
        const t = this.dstate.deflateEnd();
        return (this.dstate = null), t;
      },
      deflateParams: function (t, e) {
        return this.dstate ? this.dstate.deflateParams(this, t, e) : -2;
      },
      deflateSetDictionary: function (t, e) {
        return this.dstate ? this.dstate.deflateSetDictionary(this, t, e) : -2;
      },
      read_buf: function (t, e, n) {
        let i = this.avail_in;
        return (
          i > n && (i = n),
          0 === i
            ? 0
            : ((this.avail_in -= i),
              t.set(
                this.next_in.subarray(
                  this.next_in_index,
                  this.next_in_index + i
                ),
                e
              ),
              (this.next_in_index += i),
              (this.total_in += i),
              i)
        );
      },
      flush_pending: function () {
        const t = this;
        let e = t.dstate.pending;
        e > t.avail_out && (e = t.avail_out),
          0 !== e &&
            (t.next_out.set(
              t.dstate.pending_buf.subarray(
                t.dstate.pending_out,
                t.dstate.pending_out + e
              ),
              t.next_out_index
            ),
            (t.next_out_index += e),
            (t.dstate.pending_out += e),
            (t.total_out += e),
            (t.avail_out -= e),
            (t.dstate.pending -= e),
            0 === t.dstate.pending && (t.dstate.pending_out = 0));
      },
    };
    var S = function (t) {
      const e = new U(),
        n =
          (i = t && t.chunkSize ? t.chunkSize : 65536) +
          5 * (Math.floor(i / 16383) + 1);
      var i;
      const r = new Uint8Array(n);
      let s = t ? t.level : -1;
      "undefined" == typeof s && (s = -1),
        e.deflateInit(s),
        (e.next_out = r),
        (this.append = function (t, i) {
          let s,
            a,
            o = 0,
            l = 0,
            c = 0;
          const d = [];
          if (t.length) {
            (e.next_in_index = 0), (e.next_in = t), (e.avail_in = t.length);
            do {
              if (
                ((e.next_out_index = 0),
                (e.avail_out = n),
                (s = e.deflate(0)),
                0 != s)
              )
                throw new Error("deflating: " + e.msg);
              e.next_out_index &&
                (e.next_out_index == n
                  ? d.push(new Uint8Array(r))
                  : d.push(r.slice(0, e.next_out_index))),
                (c += e.next_out_index),
                i &&
                  e.next_in_index > 0 &&
                  e.next_in_index != o &&
                  (i(e.next_in_index), (o = e.next_in_index));
            } while (e.avail_in > 0 || 0 === e.avail_out);
            return (
              d.length > 1
                ? ((a = new Uint8Array(c)),
                  d.forEach(function (t) {
                    a.set(t, l), (l += t.length);
                  }))
                : (a = d[0] || new Uint8Array(0)),
              a
            );
          }
        }),
        (this.flush = function () {
          let t,
            i,
            s = 0,
            a = 0;
          const o = [];
          do {
            if (
              ((e.next_out_index = 0),
              (e.avail_out = n),
              (t = e.deflate(4)),
              1 != t && 0 != t)
            )
              throw new Error("deflating: " + e.msg);
            n - e.avail_out > 0 && o.push(r.slice(0, e.next_out_index)),
              (a += e.next_out_index);
          } while (e.avail_in > 0 || 0 === e.avail_out);
          return (
            e.deflateEnd(),
            (i = new Uint8Array(a)),
            o.forEach(function (t) {
              i.set(t, s), (s += t.length);
            }),
            i
          );
        });
    };
    const z = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
        32767, 65535,
      ],
      T = [
        96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8,
        48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8,
        128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83,
        7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
        0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84,
        0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7,
        13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9,
        232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0,
        8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12,
        0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8,
        163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0,
        8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0,
        8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212,
        82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8,
        74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8,
        118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0,
        8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0,
        9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110,
        0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7,
        256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0,
        9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0,
        8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0,
        8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178,
        0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21,
        80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8,
        101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80,
        7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0,
        9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141,
        0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7,
        35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9,
        166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8,
        27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0,
        8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246,
        80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55,
        0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8,
        135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84,
        7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47,
        0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8,
        80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80,
        7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0,
        9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120,
        0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8,
        0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8,
        227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0,
        8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0,
        8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217,
        82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8,
        76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0,
        8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165,
        0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26,
        0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8,
        106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80,
        7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0,
        9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134,
        0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99,
        0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9,
        189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0,
        8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10,
        0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227,
        80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57,
        0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8,
        137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83,
        7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37,
        0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93,
        0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7,
        23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9,
        251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0,
        8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0,
        8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151,
        84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8,
        43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8,
        87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81,
        7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0,
        9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127,
        0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8,
        15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
      ],
      R = [
        80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85,
        5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82,
        5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83,
        5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80,
        5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86,
        5, 193, 192, 5, 24577,
      ],
      L = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ],
      C = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0, 112, 112,
      ],
      B = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ],
      O = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ];
    function D() {
      let t, e, n, i, r, s;
      function a(t, e, a, o, l, c, d, h, u, f, p) {
        let m, g, _, x, w, b, y, v, k, A, E, U, S, z, T;
        (A = 0), (w = a);
        do {
          n[t[e + A]]++, A++, w--;
        } while (0 !== w);
        if (n[0] == a) return (d[0] = -1), (h[0] = 0), 0;
        for (v = h[0], b = 1; b <= 15 && 0 === n[b]; b++);
        for (y = b, v < b && (v = b), w = 15; 0 !== w && 0 === n[w]; w--);
        for (_ = w, v > w && (v = w), h[0] = v, z = 1 << b; b < w; b++, z <<= 1)
          if ((z -= n[b]) < 0) return -3;
        if ((z -= n[w]) < 0) return -3;
        for (n[w] += z, s[1] = b = 0, A = 1, S = 2; 0 !== --w; )
          (s[S] = b += n[A]), S++, A++;
        (w = 0), (A = 0);
        do {
          0 !== (b = t[e + A]) && (p[s[b]++] = w), A++;
        } while (++w < a);
        for (
          a = s[_], s[0] = w = 0, A = 0, x = -1, U = -v, r[0] = 0, E = 0, T = 0;
          y <= _;
          y++
        )
          for (m = n[y]; 0 !== m--; ) {
            for (; y > U + v; ) {
              if (
                (x++,
                (U += v),
                (T = _ - U),
                (T = T > v ? v : T),
                (g = 1 << (b = y - U)) > m + 1 &&
                  ((g -= m + 1), (S = y), b < T))
              )
                for (; ++b < T && !((g <<= 1) <= n[++S]); ) g -= n[S];
              if (((T = 1 << b), f[0] + T > 1440)) return -3;
              (r[x] = E = f[0]),
                (f[0] += T),
                0 !== x
                  ? ((s[x] = w),
                    (i[0] = b),
                    (i[1] = v),
                    (b = w >>> (U - v)),
                    (i[2] = E - r[x - 1] - b),
                    u.set(i, 3 * (r[x - 1] + b)))
                  : (d[0] = E);
            }
            for (
              i[1] = y - U,
                A >= a
                  ? (i[0] = 192)
                  : p[A] < o
                  ? ((i[0] = p[A] < 256 ? 0 : 96), (i[2] = p[A++]))
                  : ((i[0] = c[p[A] - o] + 16 + 64), (i[2] = l[p[A++] - o])),
                g = 1 << (y - U),
                b = w >>> U;
              b < T;
              b += g
            )
              u.set(i, 3 * (E + b));
            for (b = 1 << (y - 1); 0 !== (w & b); b >>>= 1) w ^= b;
            for (w ^= b, k = (1 << U) - 1; (w & k) != s[x]; )
              x--, (U -= v), (k = (1 << U) - 1);
          }
        return 0 !== z && 1 != _ ? -5 : 0;
      }
      function o(a) {
        let o;
        for (
          t ||
            ((t = []),
            (e = []),
            (n = new Int32Array(16)),
            (i = []),
            (r = new Int32Array(15)),
            (s = new Int32Array(16))),
            e.length < a && (e = []),
            o = 0;
          o < a;
          o++
        )
          e[o] = 0;
        for (o = 0; o < 16; o++) n[o] = 0;
        for (o = 0; o < 3; o++) i[o] = 0;
        r.set(n.subarray(0, 15), 0), s.set(n.subarray(0, 16), 0);
      }
      (this.inflate_trees_bits = function (n, i, r, s, l) {
        let c;
        return (
          o(19),
          (t[0] = 0),
          (c = a(n, 0, 19, 19, null, null, r, i, s, t, e)),
          -3 == c
            ? (l.msg = "oversubscribed dynamic bit lengths tree")
            : (-5 != c && 0 !== i[0]) ||
              ((l.msg = "incomplete dynamic bit lengths tree"), (c = -3)),
          c
        );
      }),
        (this.inflate_trees_dynamic = function (n, i, r, s, l, c, d, h, u) {
          let f;
          return (
            o(288),
            (t[0] = 0),
            (f = a(r, 0, n, 257, L, C, c, s, h, t, e)),
            0 != f || 0 === s[0]
              ? (-3 == f
                  ? (u.msg = "oversubscribed literal/length tree")
                  : -4 != f &&
                    ((u.msg = "incomplete literal/length tree"), (f = -3)),
                f)
              : (o(288),
                (f = a(r, n, i, 0, B, O, d, l, h, t, e)),
                0 != f || (0 === l[0] && n > 257)
                  ? (-3 == f
                      ? (u.msg = "oversubscribed distance tree")
                      : -5 == f
                      ? ((u.msg = "incomplete distance tree"), (f = -3))
                      : -4 != f &&
                        ((u.msg = "empty distance tree with lengths"),
                        (f = -3)),
                    f)
                  : 0)
          );
        });
    }
    D.inflate_trees_fixed = function (t, e, n, i) {
      return (t[0] = 9), (e[0] = 5), (n[0] = T), (i[0] = R), 0;
    };
    function j() {
      let t,
        e,
        n,
        i,
        r = 0,
        s = 0,
        a = 0,
        o = 0,
        l = 0,
        c = 0,
        d = 0,
        h = 0,
        u = 0,
        f = 0;
      function p(t, e, n, i, r, s, a, o) {
        let l, c, d, h, u, f, p, m, g, _, x, w, b, y, v, k;
        (p = o.next_in_index),
          (m = o.avail_in),
          (u = a.bitb),
          (f = a.bitk),
          (g = a.write),
          (_ = g < a.read ? a.read - g - 1 : a.end - g),
          (x = z[t]),
          (w = z[e]);
        do {
          for (; f < 20; ) m--, (u |= (255 & o.read_byte(p++)) << f), (f += 8);
          if (
            ((l = u & x), (c = n), (d = i), (k = 3 * (d + l)), 0 !== (h = c[k]))
          )
            for (;;) {
              if (((u >>= c[k + 1]), (f -= c[k + 1]), 0 !== (16 & h))) {
                for (
                  h &= 15, b = c[k + 2] + (u & z[h]), u >>= h, f -= h;
                  f < 15;

                )
                  m--, (u |= (255 & o.read_byte(p++)) << f), (f += 8);
                for (l = u & w, c = r, d = s, k = 3 * (d + l), h = c[k]; ; ) {
                  if (((u >>= c[k + 1]), (f -= c[k + 1]), 0 !== (16 & h))) {
                    for (h &= 15; f < h; )
                      m--, (u |= (255 & o.read_byte(p++)) << f), (f += 8);
                    if (
                      ((y = c[k + 2] + (u & z[h])),
                      (u >>= h),
                      (f -= h),
                      (_ -= b),
                      g >= y)
                    )
                      (v = g - y),
                        g - v > 0 && 2 > g - v
                          ? ((a.window[g++] = a.window[v++]),
                            (a.window[g++] = a.window[v++]),
                            (b -= 2))
                          : (a.window.set(a.window.subarray(v, v + 2), g),
                            (g += 2),
                            (v += 2),
                            (b -= 2));
                    else {
                      v = g - y;
                      do {
                        v += a.end;
                      } while (v < 0);
                      if (((h = a.end - v), b > h)) {
                        if (((b -= h), g - v > 0 && h > g - v))
                          do {
                            a.window[g++] = a.window[v++];
                          } while (0 !== --h);
                        else
                          a.window.set(a.window.subarray(v, v + h), g),
                            (g += h),
                            (v += h),
                            (h = 0);
                        v = 0;
                      }
                    }
                    if (g - v > 0 && b > g - v)
                      do {
                        a.window[g++] = a.window[v++];
                      } while (0 !== --b);
                    else
                      a.window.set(a.window.subarray(v, v + b), g),
                        (g += b),
                        (v += b),
                        (b = 0);
                    break;
                  }
                  if (0 !== (64 & h))
                    return (
                      (o.msg = "invalid distance code"),
                      (b = o.avail_in - m),
                      (b = f >> 3 < b ? f >> 3 : b),
                      (m += b),
                      (p -= b),
                      (f -= b << 3),
                      (a.bitb = u),
                      (a.bitk = f),
                      (o.avail_in = m),
                      (o.total_in += p - o.next_in_index),
                      (o.next_in_index = p),
                      (a.write = g),
                      -3
                    );
                  (l += c[k + 2]),
                    (l += u & z[h]),
                    (k = 3 * (d + l)),
                    (h = c[k]);
                }
                break;
              }
              if (0 !== (64 & h))
                return 0 !== (32 & h)
                  ? ((b = o.avail_in - m),
                    (b = f >> 3 < b ? f >> 3 : b),
                    (m += b),
                    (p -= b),
                    (f -= b << 3),
                    (a.bitb = u),
                    (a.bitk = f),
                    (o.avail_in = m),
                    (o.total_in += p - o.next_in_index),
                    (o.next_in_index = p),
                    (a.write = g),
                    1)
                  : ((o.msg = "invalid literal/length code"),
                    (b = o.avail_in - m),
                    (b = f >> 3 < b ? f >> 3 : b),
                    (m += b),
                    (p -= b),
                    (f -= b << 3),
                    (a.bitb = u),
                    (a.bitk = f),
                    (o.avail_in = m),
                    (o.total_in += p - o.next_in_index),
                    (o.next_in_index = p),
                    (a.write = g),
                    -3);
              if (
                ((l += c[k + 2]),
                (l += u & z[h]),
                (k = 3 * (d + l)),
                0 === (h = c[k]))
              ) {
                (u >>= c[k + 1]),
                  (f -= c[k + 1]),
                  (a.window[g++] = c[k + 2]),
                  _--;
                break;
              }
            }
          else
            (u >>= c[k + 1]), (f -= c[k + 1]), (a.window[g++] = c[k + 2]), _--;
        } while (_ >= 258 && m >= 10);
        return (
          (b = o.avail_in - m),
          (b = f >> 3 < b ? f >> 3 : b),
          (m += b),
          (p -= b),
          (f -= b << 3),
          (a.bitb = u),
          (a.bitk = f),
          (o.avail_in = m),
          (o.total_in += p - o.next_in_index),
          (o.next_in_index = p),
          (a.write = g),
          0
        );
      }
      (this.init = function (r, s, a, o, l, c) {
        (t = 0),
          (d = r),
          (h = s),
          (n = a),
          (u = o),
          (i = l),
          (f = c),
          (e = null);
      }),
        (this.proc = function (m, g, _) {
          let x,
            w,
            b,
            y,
            v,
            k,
            A,
            E = 0,
            U = 0,
            S = 0;
          for (
            S = g.next_in_index,
              y = g.avail_in,
              E = m.bitb,
              U = m.bitk,
              v = m.write,
              k = v < m.read ? m.read - v - 1 : m.end - v;
            ;

          )
            switch (t) {
              case 0:
                if (
                  k >= 258 &&
                  y >= 10 &&
                  ((m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  (_ = p(d, h, n, u, i, f, m, g)),
                  (S = g.next_in_index),
                  (y = g.avail_in),
                  (E = m.bitb),
                  (U = m.bitk),
                  (v = m.write),
                  (k = v < m.read ? m.read - v - 1 : m.end - v),
                  0 != _)
                ) {
                  t = 1 == _ ? 7 : 9;
                  break;
                }
                (a = d), (e = n), (s = u), (t = 1);
              case 1:
                for (x = a; U < x; ) {
                  if (0 === y)
                    return (
                      (m.bitb = E),
                      (m.bitk = U),
                      (g.avail_in = y),
                      (g.total_in += S - g.next_in_index),
                      (g.next_in_index = S),
                      (m.write = v),
                      m.inflate_flush(g, _)
                    );
                  (_ = 0), y--, (E |= (255 & g.read_byte(S++)) << U), (U += 8);
                }
                if (
                  ((w = 3 * (s + (E & z[x]))),
                  (E >>>= e[w + 1]),
                  (U -= e[w + 1]),
                  (b = e[w]),
                  0 === b)
                ) {
                  (o = e[w + 2]), (t = 6);
                  break;
                }
                if (0 !== (16 & b)) {
                  (l = 15 & b), (r = e[w + 2]), (t = 2);
                  break;
                }
                if (0 === (64 & b)) {
                  (a = b), (s = w / 3 + e[w + 2]);
                  break;
                }
                if (0 !== (32 & b)) {
                  t = 7;
                  break;
                }
                return (
                  (t = 9),
                  (g.msg = "invalid literal/length code"),
                  (_ = -3),
                  (m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  m.inflate_flush(g, _)
                );
              case 2:
                for (x = l; U < x; ) {
                  if (0 === y)
                    return (
                      (m.bitb = E),
                      (m.bitk = U),
                      (g.avail_in = y),
                      (g.total_in += S - g.next_in_index),
                      (g.next_in_index = S),
                      (m.write = v),
                      m.inflate_flush(g, _)
                    );
                  (_ = 0), y--, (E |= (255 & g.read_byte(S++)) << U), (U += 8);
                }
                (r += E & z[x]),
                  (E >>= x),
                  (U -= x),
                  (a = h),
                  (e = i),
                  (s = f),
                  (t = 3);
              case 3:
                for (x = a; U < x; ) {
                  if (0 === y)
                    return (
                      (m.bitb = E),
                      (m.bitk = U),
                      (g.avail_in = y),
                      (g.total_in += S - g.next_in_index),
                      (g.next_in_index = S),
                      (m.write = v),
                      m.inflate_flush(g, _)
                    );
                  (_ = 0), y--, (E |= (255 & g.read_byte(S++)) << U), (U += 8);
                }
                if (
                  ((w = 3 * (s + (E & z[x]))),
                  (E >>= e[w + 1]),
                  (U -= e[w + 1]),
                  (b = e[w]),
                  0 !== (16 & b))
                ) {
                  (l = 15 & b), (c = e[w + 2]), (t = 4);
                  break;
                }
                if (0 === (64 & b)) {
                  (a = b), (s = w / 3 + e[w + 2]);
                  break;
                }
                return (
                  (t = 9),
                  (g.msg = "invalid distance code"),
                  (_ = -3),
                  (m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  m.inflate_flush(g, _)
                );
              case 4:
                for (x = l; U < x; ) {
                  if (0 === y)
                    return (
                      (m.bitb = E),
                      (m.bitk = U),
                      (g.avail_in = y),
                      (g.total_in += S - g.next_in_index),
                      (g.next_in_index = S),
                      (m.write = v),
                      m.inflate_flush(g, _)
                    );
                  (_ = 0), y--, (E |= (255 & g.read_byte(S++)) << U), (U += 8);
                }
                (c += E & z[x]), (E >>= x), (U -= x), (t = 5);
              case 5:
                for (A = v - c; A < 0; ) A += m.end;
                for (; 0 !== r; ) {
                  if (
                    0 === k &&
                    (v == m.end &&
                      0 !== m.read &&
                      ((v = 0), (k = v < m.read ? m.read - v - 1 : m.end - v)),
                    0 === k &&
                      ((m.write = v),
                      (_ = m.inflate_flush(g, _)),
                      (v = m.write),
                      (k = v < m.read ? m.read - v - 1 : m.end - v),
                      v == m.end &&
                        0 !== m.read &&
                        ((v = 0),
                        (k = v < m.read ? m.read - v - 1 : m.end - v)),
                      0 === k))
                  )
                    return (
                      (m.bitb = E),
                      (m.bitk = U),
                      (g.avail_in = y),
                      (g.total_in += S - g.next_in_index),
                      (g.next_in_index = S),
                      (m.write = v),
                      m.inflate_flush(g, _)
                    );
                  (m.window[v++] = m.window[A++]),
                    k--,
                    A == m.end && (A = 0),
                    r--;
                }
                t = 0;
                break;
              case 6:
                if (
                  0 === k &&
                  (v == m.end &&
                    0 !== m.read &&
                    ((v = 0), (k = v < m.read ? m.read - v - 1 : m.end - v)),
                  0 === k &&
                    ((m.write = v),
                    (_ = m.inflate_flush(g, _)),
                    (v = m.write),
                    (k = v < m.read ? m.read - v - 1 : m.end - v),
                    v == m.end &&
                      0 !== m.read &&
                      ((v = 0), (k = v < m.read ? m.read - v - 1 : m.end - v)),
                    0 === k))
                )
                  return (
                    (m.bitb = E),
                    (m.bitk = U),
                    (g.avail_in = y),
                    (g.total_in += S - g.next_in_index),
                    (g.next_in_index = S),
                    (m.write = v),
                    m.inflate_flush(g, _)
                  );
                (_ = 0), (m.window[v++] = o), k--, (t = 0);
                break;
              case 7:
                if (
                  (U > 7 && ((U -= 8), y++, S--),
                  (m.write = v),
                  (_ = m.inflate_flush(g, _)),
                  (v = m.write),
                  (k = v < m.read ? m.read - v - 1 : m.end - v),
                  m.read != m.write)
                )
                  return (
                    (m.bitb = E),
                    (m.bitk = U),
                    (g.avail_in = y),
                    (g.total_in += S - g.next_in_index),
                    (g.next_in_index = S),
                    (m.write = v),
                    m.inflate_flush(g, _)
                  );
                t = 8;
              case 8:
                return (
                  (_ = 1),
                  (m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  m.inflate_flush(g, _)
                );
              case 9:
                return (
                  (_ = -3),
                  (m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  m.inflate_flush(g, _)
                );
              default:
                return (
                  (_ = -2),
                  (m.bitb = E),
                  (m.bitk = U),
                  (g.avail_in = y),
                  (g.total_in += S - g.next_in_index),
                  (g.next_in_index = S),
                  (m.write = v),
                  m.inflate_flush(g, _)
                );
            }
        }),
        (this.free = function () {});
    }
    const P = [
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ];
    function M(t, e) {
      const n = this;
      let i,
        r = 0,
        s = 0,
        a = 0,
        o = 0;
      const l = [0],
        c = [0],
        d = new j();
      let h = 0,
        u = new Int32Array(4320);
      const f = new D();
      (n.bitk = 0),
        (n.bitb = 0),
        (n.window = new Uint8Array(e)),
        (n.end = e),
        (n.read = 0),
        (n.write = 0),
        (n.reset = function (t, e) {
          e && (e[0] = 0),
            6 == r && d.free(t),
            (r = 0),
            (n.bitk = 0),
            (n.bitb = 0),
            (n.read = n.write = 0);
        }),
        n.reset(t, null),
        (n.inflate_flush = function (t, e) {
          let i, r, s;
          return (
            (r = t.next_out_index),
            (s = n.read),
            (i = (s <= n.write ? n.write : n.end) - s),
            i > t.avail_out && (i = t.avail_out),
            0 !== i && -5 == e && (e = 0),
            (t.avail_out -= i),
            (t.total_out += i),
            t.next_out.set(n.window.subarray(s, s + i), r),
            (r += i),
            (s += i),
            s == n.end &&
              ((s = 0),
              n.write == n.end && (n.write = 0),
              (i = n.write - s),
              i > t.avail_out && (i = t.avail_out),
              0 !== i && -5 == e && (e = 0),
              (t.avail_out -= i),
              (t.total_out += i),
              t.next_out.set(n.window.subarray(s, s + i), r),
              (r += i),
              (s += i)),
            (t.next_out_index = r),
            (n.read = s),
            e
          );
        }),
        (n.proc = function (t, e) {
          let p, m, g, _, x, w, b, y;
          for (
            _ = t.next_in_index,
              x = t.avail_in,
              m = n.bitb,
              g = n.bitk,
              w = n.write,
              b = w < n.read ? n.read - w - 1 : n.end - w;
            ;

          ) {
            let v, k, A, E, U, S, T, R;
            switch (r) {
              case 0:
                for (; g < 3; ) {
                  if (0 === x)
                    return (
                      (n.bitb = m),
                      (n.bitk = g),
                      (t.avail_in = x),
                      (t.total_in += _ - t.next_in_index),
                      (t.next_in_index = _),
                      (n.write = w),
                      n.inflate_flush(t, e)
                    );
                  (e = 0), x--, (m |= (255 & t.read_byte(_++)) << g), (g += 8);
                }
                switch (((p = 7 & m), (h = 1 & p), p >>> 1)) {
                  case 0:
                    (m >>>= 3),
                      (g -= 3),
                      (p = 7 & g),
                      (m >>>= p),
                      (g -= p),
                      (r = 1);
                    break;
                  case 1:
                    (v = []),
                      (k = []),
                      (A = [[]]),
                      (E = [[]]),
                      D.inflate_trees_fixed(v, k, A, E),
                      d.init(v[0], k[0], A[0], 0, E[0], 0),
                      (m >>>= 3),
                      (g -= 3),
                      (r = 6);
                    break;
                  case 2:
                    (m >>>= 3), (g -= 3), (r = 3);
                    break;
                  case 3:
                    return (
                      (m >>>= 3),
                      (g -= 3),
                      (r = 9),
                      (t.msg = "invalid block type"),
                      (e = -3),
                      (n.bitb = m),
                      (n.bitk = g),
                      (t.avail_in = x),
                      (t.total_in += _ - t.next_in_index),
                      (t.next_in_index = _),
                      (n.write = w),
                      n.inflate_flush(t, e)
                    );
                }
                break;
              case 1:
                for (; g < 32; ) {
                  if (0 === x)
                    return (
                      (n.bitb = m),
                      (n.bitk = g),
                      (t.avail_in = x),
                      (t.total_in += _ - t.next_in_index),
                      (t.next_in_index = _),
                      (n.write = w),
                      n.inflate_flush(t, e)
                    );
                  (e = 0), x--, (m |= (255 & t.read_byte(_++)) << g), (g += 8);
                }
                if (((~m >>> 16) & 65535) != (65535 & m))
                  return (
                    (r = 9),
                    (t.msg = "invalid stored block lengths"),
                    (e = -3),
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                (s = 65535 & m),
                  (m = g = 0),
                  (r = 0 !== s ? 2 : 0 !== h ? 7 : 0);
                break;
              case 2:
                if (0 === x)
                  return (
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                if (
                  0 === b &&
                  (w == n.end &&
                    0 !== n.read &&
                    ((w = 0), (b = w < n.read ? n.read - w - 1 : n.end - w)),
                  0 === b &&
                    ((n.write = w),
                    (e = n.inflate_flush(t, e)),
                    (w = n.write),
                    (b = w < n.read ? n.read - w - 1 : n.end - w),
                    w == n.end &&
                      0 !== n.read &&
                      ((w = 0), (b = w < n.read ? n.read - w - 1 : n.end - w)),
                    0 === b))
                )
                  return (
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                if (
                  ((e = 0),
                  (p = s),
                  p > x && (p = x),
                  p > b && (p = b),
                  n.window.set(t.read_buf(_, p), w),
                  (_ += p),
                  (x -= p),
                  (w += p),
                  (b -= p),
                  0 !== (s -= p))
                )
                  break;
                r = 0 !== h ? 7 : 0;
                break;
              case 3:
                for (; g < 14; ) {
                  if (0 === x)
                    return (
                      (n.bitb = m),
                      (n.bitk = g),
                      (t.avail_in = x),
                      (t.total_in += _ - t.next_in_index),
                      (t.next_in_index = _),
                      (n.write = w),
                      n.inflate_flush(t, e)
                    );
                  (e = 0), x--, (m |= (255 & t.read_byte(_++)) << g), (g += 8);
                }
                if (
                  ((a = p = 16383 & m), (31 & p) > 29 || ((p >> 5) & 31) > 29)
                )
                  return (
                    (r = 9),
                    (t.msg = "too many length or distance symbols"),
                    (e = -3),
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                if (
                  ((p = 258 + (31 & p) + ((p >> 5) & 31)), !i || i.length < p)
                )
                  i = [];
                else for (y = 0; y < p; y++) i[y] = 0;
                (m >>>= 14), (g -= 14), (o = 0), (r = 4);
              case 4:
                for (; o < 4 + (a >>> 10); ) {
                  for (; g < 3; ) {
                    if (0 === x)
                      return (
                        (n.bitb = m),
                        (n.bitk = g),
                        (t.avail_in = x),
                        (t.total_in += _ - t.next_in_index),
                        (t.next_in_index = _),
                        (n.write = w),
                        n.inflate_flush(t, e)
                      );
                    (e = 0),
                      x--,
                      (m |= (255 & t.read_byte(_++)) << g),
                      (g += 8);
                  }
                  (i[P[o++]] = 7 & m), (m >>>= 3), (g -= 3);
                }
                for (; o < 19; ) i[P[o++]] = 0;
                if (
                  ((l[0] = 7),
                  (p = f.inflate_trees_bits(i, l, c, u, t)),
                  0 != p)
                )
                  return (
                    -3 == (e = p) && ((i = null), (r = 9)),
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                (o = 0), (r = 5);
              case 5:
                for (; (p = a), !(o >= 258 + (31 & p) + ((p >> 5) & 31)); ) {
                  let s, d;
                  for (p = l[0]; g < p; ) {
                    if (0 === x)
                      return (
                        (n.bitb = m),
                        (n.bitk = g),
                        (t.avail_in = x),
                        (t.total_in += _ - t.next_in_index),
                        (t.next_in_index = _),
                        (n.write = w),
                        n.inflate_flush(t, e)
                      );
                    (e = 0),
                      x--,
                      (m |= (255 & t.read_byte(_++)) << g),
                      (g += 8);
                  }
                  if (
                    ((p = u[3 * (c[0] + (m & z[p])) + 1]),
                    (d = u[3 * (c[0] + (m & z[p])) + 2]),
                    d < 16)
                  )
                    (m >>>= p), (g -= p), (i[o++] = d);
                  else {
                    for (
                      y = 18 == d ? 7 : d - 14, s = 18 == d ? 11 : 3;
                      g < p + y;

                    ) {
                      if (0 === x)
                        return (
                          (n.bitb = m),
                          (n.bitk = g),
                          (t.avail_in = x),
                          (t.total_in += _ - t.next_in_index),
                          (t.next_in_index = _),
                          (n.write = w),
                          n.inflate_flush(t, e)
                        );
                      (e = 0),
                        x--,
                        (m |= (255 & t.read_byte(_++)) << g),
                        (g += 8);
                    }
                    if (
                      ((m >>>= p),
                      (g -= p),
                      (s += m & z[y]),
                      (m >>>= y),
                      (g -= y),
                      (y = o),
                      (p = a),
                      y + s > 258 + (31 & p) + ((p >> 5) & 31) ||
                        (16 == d && y < 1))
                    )
                      return (
                        (i = null),
                        (r = 9),
                        (t.msg = "invalid bit length repeat"),
                        (e = -3),
                        (n.bitb = m),
                        (n.bitk = g),
                        (t.avail_in = x),
                        (t.total_in += _ - t.next_in_index),
                        (t.next_in_index = _),
                        (n.write = w),
                        n.inflate_flush(t, e)
                      );
                    d = 16 == d ? i[y - 1] : 0;
                    do {
                      i[y++] = d;
                    } while (0 !== --s);
                    o = y;
                  }
                }
                if (
                  ((c[0] = -1),
                  (U = []),
                  (S = []),
                  (T = []),
                  (R = []),
                  (U[0] = 9),
                  (S[0] = 6),
                  (p = a),
                  (p = f.inflate_trees_dynamic(
                    257 + (31 & p),
                    1 + ((p >> 5) & 31),
                    i,
                    U,
                    S,
                    T,
                    R,
                    u,
                    t
                  )),
                  0 != p)
                )
                  return (
                    -3 == p && ((i = null), (r = 9)),
                    (e = p),
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                d.init(U[0], S[0], u, T[0], u, R[0]), (r = 6);
              case 6:
                if (
                  ((n.bitb = m),
                  (n.bitk = g),
                  (t.avail_in = x),
                  (t.total_in += _ - t.next_in_index),
                  (t.next_in_index = _),
                  (n.write = w),
                  1 != (e = d.proc(n, t, e)))
                )
                  return n.inflate_flush(t, e);
                if (
                  ((e = 0),
                  d.free(t),
                  (_ = t.next_in_index),
                  (x = t.avail_in),
                  (m = n.bitb),
                  (g = n.bitk),
                  (w = n.write),
                  (b = w < n.read ? n.read - w - 1 : n.end - w),
                  0 === h)
                ) {
                  r = 0;
                  break;
                }
                r = 7;
              case 7:
                if (
                  ((n.write = w),
                  (e = n.inflate_flush(t, e)),
                  (w = n.write),
                  (b = w < n.read ? n.read - w - 1 : n.end - w),
                  n.read != n.write)
                )
                  return (
                    (n.bitb = m),
                    (n.bitk = g),
                    (t.avail_in = x),
                    (t.total_in += _ - t.next_in_index),
                    (t.next_in_index = _),
                    (n.write = w),
                    n.inflate_flush(t, e)
                  );
                r = 8;
              case 8:
                return (
                  (e = 1),
                  (n.bitb = m),
                  (n.bitk = g),
                  (t.avail_in = x),
                  (t.total_in += _ - t.next_in_index),
                  (t.next_in_index = _),
                  (n.write = w),
                  n.inflate_flush(t, e)
                );
              case 9:
                return (
                  (e = -3),
                  (n.bitb = m),
                  (n.bitk = g),
                  (t.avail_in = x),
                  (t.total_in += _ - t.next_in_index),
                  (t.next_in_index = _),
                  (n.write = w),
                  n.inflate_flush(t, e)
                );
              default:
                return (
                  (e = -2),
                  (n.bitb = m),
                  (n.bitk = g),
                  (t.avail_in = x),
                  (t.total_in += _ - t.next_in_index),
                  (t.next_in_index = _),
                  (n.write = w),
                  n.inflate_flush(t, e)
                );
            }
          }
        }),
        (n.free = function (t) {
          n.reset(t, null), (n.window = null), (u = null);
        }),
        (n.set_dictionary = function (t, e, i) {
          n.window.set(t.subarray(e, e + i), 0), (n.read = n.write = i);
        }),
        (n.sync_point = function () {
          return 1 == r ? 1 : 0;
        });
    }
    const F = [0, 0, 255, 255];
    function N() {
      const t = this;
      function e(t) {
        return t && t.istate
          ? ((t.total_in = t.total_out = 0),
            (t.msg = null),
            (t.istate.mode = 7),
            t.istate.blocks.reset(t, null),
            0)
          : -2;
      }
      (t.mode = 0),
        (t.method = 0),
        (t.was = [0]),
        (t.need = 0),
        (t.marker = 0),
        (t.wbits = 0),
        (t.inflateEnd = function (e) {
          return t.blocks && t.blocks.free(e), (t.blocks = null), 0;
        }),
        (t.inflateInit = function (n, i) {
          return (
            (n.msg = null),
            (t.blocks = null),
            i < 8 || i > 15
              ? (t.inflateEnd(n), -2)
              : ((t.wbits = i), (n.istate.blocks = new M(n, 1 << i)), e(n), 0)
          );
        }),
        (t.inflate = function (t, e) {
          let n, i;
          if (!t || !t.istate || !t.next_in) return -2;
          const r = t.istate;
          for (e = 4 == e ? -5 : 0, n = -5; ; )
            switch (r.mode) {
              case 0:
                if (0 === t.avail_in) return n;
                if (
                  ((n = e),
                  t.avail_in--,
                  t.total_in++,
                  8 != (15 & (r.method = t.read_byte(t.next_in_index++))))
                ) {
                  (r.mode = 13),
                    (t.msg = "unknown compression method"),
                    (r.marker = 5);
                  break;
                }
                if (8 + (r.method >> 4) > r.wbits) {
                  (r.mode = 13),
                    (t.msg = "invalid window size"),
                    (r.marker = 5);
                  break;
                }
                r.mode = 1;
              case 1:
                if (0 === t.avail_in) return n;
                if (
                  ((n = e),
                  t.avail_in--,
                  t.total_in++,
                  (i = 255 & t.read_byte(t.next_in_index++)),
                  ((r.method << 8) + i) % 31 !== 0)
                ) {
                  (r.mode = 13),
                    (t.msg = "incorrect header check"),
                    (r.marker = 5);
                  break;
                }
                if (0 === (32 & i)) {
                  r.mode = 7;
                  break;
                }
                r.mode = 2;
              case 2:
                if (0 === t.avail_in) return n;
                (n = e),
                  t.avail_in--,
                  t.total_in++,
                  (r.need =
                    ((255 & t.read_byte(t.next_in_index++)) << 24) &
                    4278190080),
                  (r.mode = 3);
              case 3:
                if (0 === t.avail_in) return n;
                (n = e),
                  t.avail_in--,
                  t.total_in++,
                  (r.need +=
                    ((255 & t.read_byte(t.next_in_index++)) << 16) & 16711680),
                  (r.mode = 4);
              case 4:
                if (0 === t.avail_in) return n;
                (n = e),
                  t.avail_in--,
                  t.total_in++,
                  (r.need +=
                    ((255 & t.read_byte(t.next_in_index++)) << 8) & 65280),
                  (r.mode = 5);
              case 5:
                return 0 === t.avail_in
                  ? n
                  : ((n = e),
                    t.avail_in--,
                    t.total_in++,
                    (r.need += 255 & t.read_byte(t.next_in_index++)),
                    (r.mode = 6),
                    2);
              case 6:
                return (
                  (r.mode = 13), (t.msg = "need dictionary"), (r.marker = 0), -2
                );
              case 7:
                if (((n = r.blocks.proc(t, n)), -3 == n)) {
                  (r.mode = 13), (r.marker = 0);
                  break;
                }
                if ((0 == n && (n = e), 1 != n)) return n;
                (n = e), r.blocks.reset(t, r.was), (r.mode = 12);
              case 12:
                return 1;
              case 13:
                return -3;
              default:
                return -2;
            }
        }),
        (t.inflateSetDictionary = function (t, e, n) {
          let i = 0,
            r = n;
          if (!t || !t.istate || 6 != t.istate.mode) return -2;
          const s = t.istate;
          return (
            r >= 1 << s.wbits && ((r = (1 << s.wbits) - 1), (i = n - r)),
            s.blocks.set_dictionary(e, i, r),
            (s.mode = 7),
            0
          );
        }),
        (t.inflateSync = function (t) {
          let n, i, r, s, a;
          if (!t || !t.istate) return -2;
          const o = t.istate;
          if (
            (13 != o.mode && ((o.mode = 13), (o.marker = 0)),
            0 === (n = t.avail_in))
          )
            return -5;
          for (i = t.next_in_index, r = o.marker; 0 !== n && r < 4; )
            t.read_byte(i) == F[r]
              ? r++
              : (r = 0 !== t.read_byte(i) ? 0 : 4 - r),
              i++,
              n--;
          return (
            (t.total_in += i - t.next_in_index),
            (t.next_in_index = i),
            (t.avail_in = n),
            (o.marker = r),
            4 != r
              ? -3
              : ((s = t.total_in),
                (a = t.total_out),
                e(t),
                (t.total_in = s),
                (t.total_out = a),
                (o.mode = 7),
                0)
          );
        }),
        (t.inflateSyncPoint = function (t) {
          return t && t.istate && t.istate.blocks
            ? t.istate.blocks.sync_point()
            : -2;
        });
    }
    function I() {}
    I.prototype = {
      inflateInit: function (t) {
        return (
          (this.istate = new N()),
          t || (t = 15),
          this.istate.inflateInit(this, t)
        );
      },
      inflate: function (t) {
        return this.istate ? this.istate.inflate(this, t) : -2;
      },
      inflateEnd: function () {
        if (!this.istate) return -2;
        const t = this.istate.inflateEnd(this);
        return (this.istate = null), t;
      },
      inflateSync: function () {
        return this.istate ? this.istate.inflateSync(this) : -2;
      },
      inflateSetDictionary: function (t, e) {
        return this.istate ? this.istate.inflateSetDictionary(this, t, e) : -2;
      },
      read_byte: function (t) {
        return this.next_in[t];
      },
      read_buf: function (t, e) {
        return this.next_in.subarray(t, t + e);
      },
    };
    var q = function (t) {
      const e = new I(),
        n = t && t.chunkSize ? Math.floor(2 * t.chunkSize) : 131072,
        i = new Uint8Array(n);
      let r = !1;
      e.inflateInit(),
        (e.next_out = i),
        (this.append = function (t, s) {
          const a = [];
          let o,
            l,
            c = 0,
            d = 0,
            h = 0;
          if (0 !== t.length) {
            (e.next_in_index = 0), (e.next_in = t), (e.avail_in = t.length);
            do {
              if (
                ((e.next_out_index = 0),
                (e.avail_out = n),
                0 !== e.avail_in || r || ((e.next_in_index = 0), (r = !0)),
                (o = e.inflate(0)),
                r && -5 === o)
              ) {
                if (0 !== e.avail_in) throw new Error("inflating: bad input");
              } else if (0 !== o && 1 !== o)
                throw new Error("inflating: " + e.msg);
              if ((r || 1 === o) && e.avail_in === t.length)
                throw new Error("inflating: bad input");
              e.next_out_index &&
                (e.next_out_index === n
                  ? a.push(new Uint8Array(i))
                  : a.push(i.slice(0, e.next_out_index))),
                (h += e.next_out_index),
                s &&
                  e.next_in_index > 0 &&
                  e.next_in_index != c &&
                  (s(e.next_in_index), (c = e.next_in_index));
            } while (e.avail_in > 0 || 0 === e.avail_out);
            return (
              a.length > 1
                ? ((l = new Uint8Array(h)),
                  a.forEach(function (t) {
                    l.set(t, d), (d += t.length);
                  }))
                : (l = a[0] || new Uint8Array(0)),
              l
            );
          }
        }),
        (this.flush = function () {
          e.inflateEnd();
        });
    };
    const H = {
        chunkSize: 524288,
        maxWorkers:
          ("undefined" != typeof navigator && navigator.hardwareConcurrency) ||
          2,
        terminateWorkerTimeout: 5e3,
        useWebWorkers: !0,
        workerScripts: void 0,
      },
      W = Object.assign({}, H);
    function G() {
      return W;
    }
    function V(t) {
      if (
        (void 0 !== t.chunkSize && (W.chunkSize = t.chunkSize),
        void 0 !== t.maxWorkers && (W.maxWorkers = t.maxWorkers),
        void 0 !== t.terminateWorkerTimeout &&
          (W.terminateWorkerTimeout = t.terminateWorkerTimeout),
        void 0 !== t.useWebWorkers && (W.useWebWorkers = t.useWebWorkers),
        void 0 !== t.Deflate && (W.Deflate = t.Deflate),
        void 0 !== t.Inflate && (W.Inflate = t.Inflate),
        void 0 !== t.workerScripts)
      ) {
        if (t.workerScripts.deflate) {
          if (!Array.isArray(t.workerScripts.deflate))
            throw new Error("workerScripts.deflate must be an array");
          W.workerScripts || (W.workerScripts = {}),
            (W.workerScripts.deflate = t.workerScripts.deflate);
        }
        if (t.workerScripts.inflate) {
          if (!Array.isArray(t.workerScripts.inflate))
            throw new Error("workerScripts.inflate must be an array");
          W.workerScripts || (W.workerScripts = {}),
            (W.workerScripts.inflate = t.workerScripts.inflate);
        }
      }
    }
    const $ = {
      application: {
        "andrew-inset": "ez",
        annodex: "anx",
        "atom+xml": "atom",
        "atomcat+xml": "atomcat",
        "atomserv+xml": "atomsrv",
        bbolin: "lin",
        cap: ["cap", "pcap"],
        "cu-seeme": "cu",
        "davmount+xml": "davmount",
        dsptype: "tsp",
        ecmascript: ["es", "ecma"],
        futuresplash: "spl",
        hta: "hta",
        "java-archive": "jar",
        "java-serialized-object": "ser",
        "java-vm": "class",
        javascript: "js",
        m3g: "m3g",
        "mac-binhex40": "hqx",
        mathematica: ["nb", "ma", "mb"],
        msaccess: "mdb",
        msword: ["doc", "dot"],
        mxf: "mxf",
        oda: "oda",
        ogg: "ogx",
        pdf: "pdf",
        "pgp-keys": "key",
        "pgp-signature": ["asc", "sig"],
        "pics-rules": "prf",
        postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
        rar: "rar",
        "rdf+xml": "rdf",
        "rss+xml": "rss",
        rtf: "rtf",
        smil: ["smi", "smil"],
        "xhtml+xml": ["xhtml", "xht"],
        xml: ["xml", "xsl", "xsd"],
        "xspf+xml": "xspf",
        zip: "zip",
        "vnd.android.package-archive": "apk",
        "vnd.cinderella": "cdy",
        "vnd.google-earth.kml+xml": "kml",
        "vnd.google-earth.kmz": "kmz",
        "vnd.mozilla.xul+xml": "xul",
        "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
        "vnd.ms-pki.seccat": "cat",
        "vnd.ms-pki.stl": "stl",
        "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
        "vnd.oasis.opendocument.chart": "odc",
        "vnd.oasis.opendocument.database": "odb",
        "vnd.oasis.opendocument.formula": "odf",
        "vnd.oasis.opendocument.graphics": "odg",
        "vnd.oasis.opendocument.graphics-template": "otg",
        "vnd.oasis.opendocument.image": "odi",
        "vnd.oasis.opendocument.presentation": "odp",
        "vnd.oasis.opendocument.presentation-template": "otp",
        "vnd.oasis.opendocument.spreadsheet": "ods",
        "vnd.oasis.opendocument.spreadsheet-template": "ots",
        "vnd.oasis.opendocument.text": "odt",
        "vnd.oasis.opendocument.text-master": "odm",
        "vnd.oasis.opendocument.text-template": "ott",
        "vnd.oasis.opendocument.text-web": "oth",
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
        "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
        "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
        "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
        "vnd.openxmlformats-officedocument.presentationml.template": "potx",
        "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
        "vnd.smaf": "mmf",
        "vnd.stardivision.calc": "sdc",
        "vnd.stardivision.chart": "sds",
        "vnd.stardivision.draw": "sda",
        "vnd.stardivision.impress": "sdd",
        "vnd.stardivision.math": ["sdf", "smf"],
        "vnd.stardivision.writer": ["sdw", "vor"],
        "vnd.stardivision.writer-global": "sgl",
        "vnd.sun.xml.calc": "sxc",
        "vnd.sun.xml.calc.template": "stc",
        "vnd.sun.xml.draw": "sxd",
        "vnd.sun.xml.draw.template": "std",
        "vnd.sun.xml.impress": "sxi",
        "vnd.sun.xml.impress.template": "sti",
        "vnd.sun.xml.math": "sxm",
        "vnd.sun.xml.writer": "sxw",
        "vnd.sun.xml.writer.global": "sxg",
        "vnd.sun.xml.writer.template": "stw",
        "vnd.symbian.install": ["sis", "sisx"],
        "vnd.visio": ["vsd", "vst", "vss", "vsw"],
        "vnd.wap.wbxml": "wbxml",
        "vnd.wap.wmlc": "wmlc",
        "vnd.wap.wmlscriptc": "wmlsc",
        "vnd.wordperfect": "wpd",
        "vnd.wordperfect5.1": "wp5",
        "x-123": "wk",
        "x-7z-compressed": "7z",
        "x-abiword": "abw",
        "x-apple-diskimage": "dmg",
        "x-bcpio": "bcpio",
        "x-bittorrent": "torrent",
        "x-cbr": ["cbr", "cba", "cbt", "cb7"],
        "x-cbz": "cbz",
        "x-cdf": ["cdf", "cda"],
        "x-cdlink": "vcd",
        "x-chess-pgn": "pgn",
        "x-cpio": "cpio",
        "x-csh": "csh",
        "x-debian-package": ["deb", "udeb"],
        "x-director": [
          "dcr",
          "dir",
          "dxr",
          "cst",
          "cct",
          "cxt",
          "w3d",
          "fgd",
          "swa",
        ],
        "x-dms": "dms",
        "x-doom": "wad",
        "x-dvi": "dvi",
        "x-httpd-eruby": "rhtml",
        "x-font": "pcf.Z",
        "x-freemind": "mm",
        "x-gnumeric": "gnumeric",
        "x-go-sgf": "sgf",
        "x-graphing-calculator": "gcf",
        "x-gtar": ["gtar", "taz"],
        "x-hdf": "hdf",
        "x-httpd-php": ["phtml", "pht", "php"],
        "x-httpd-php-source": "phps",
        "x-httpd-php3": "php3",
        "x-httpd-php3-preprocessed": "php3p",
        "x-httpd-php4": "php4",
        "x-httpd-php5": "php5",
        "x-ica": "ica",
        "x-info": "info",
        "x-internet-signup": ["ins", "isp"],
        "x-iphone": "iii",
        "x-iso9660-image": "iso",
        "x-java-jnlp-file": "jnlp",
        "x-jmol": "jmz",
        "x-killustrator": "kil",
        "x-koan": ["skp", "skd", "skt", "skm"],
        "x-kpresenter": ["kpr", "kpt"],
        "x-kword": ["kwd", "kwt"],
        "x-latex": "latex",
        "x-lha": "lha",
        "x-lyx": "lyx",
        "x-lzh": "lzh",
        "x-lzx": "lzx",
        "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
        "x-ms-wmd": "wmd",
        "x-ms-wmz": "wmz",
        "x-msdos-program": ["com", "exe", "bat", "dll"],
        "x-msi": "msi",
        "x-netcdf": ["nc", "cdf"],
        "x-ns-proxy-autoconfig": ["pac", "dat"],
        "x-nwc": "nwc",
        "x-object": "o",
        "x-oz-application": "oza",
        "x-pkcs7-certreqresp": "p7r",
        "x-python-code": ["pyc", "pyo"],
        "x-qgis": ["qgs", "shp", "shx"],
        "x-quicktimeplayer": "qtl",
        "x-redhat-package-manager": "rpm",
        "x-ruby": "rb",
        "x-sh": "sh",
        "x-shar": "shar",
        "x-shockwave-flash": ["swf", "swfl"],
        "x-silverlight": "scr",
        "x-stuffit": "sit",
        "x-sv4cpio": "sv4cpio",
        "x-sv4crc": "sv4crc",
        "x-tar": "tar",
        "x-tcl": "tcl",
        "x-tex-gf": "gf",
        "x-tex-pk": "pk",
        "x-texinfo": ["texinfo", "texi"],
        "x-trash": ["~", "%", "bak", "old", "sik"],
        "x-troff": ["t", "tr", "roff"],
        "x-troff-man": "man",
        "x-troff-me": "me",
        "x-troff-ms": "ms",
        "x-ustar": "ustar",
        "x-wais-source": "src",
        "x-wingz": "wz",
        "x-x509-ca-cert": ["crt", "der", "cer"],
        "x-xcf": "xcf",
        "x-xfig": "fig",
        "x-xpinstall": "xpi",
        applixware: "aw",
        "atomsvc+xml": "atomsvc",
        "ccxml+xml": "ccxml",
        "cdmi-capability": "cdmia",
        "cdmi-container": "cdmic",
        "cdmi-domain": "cdmid",
        "cdmi-object": "cdmio",
        "cdmi-queue": "cdmiq",
        "docbook+xml": "dbk",
        "dssc+der": "dssc",
        "dssc+xml": "xdssc",
        "emma+xml": "emma",
        "epub+zip": "epub",
        exi: "exi",
        "font-tdpfr": "pfr",
        "gml+xml": "gml",
        "gpx+xml": "gpx",
        gxf: "gxf",
        hyperstudio: "stk",
        "inkml+xml": ["ink", "inkml"],
        ipfix: "ipfix",
        json: "json",
        "jsonml+json": "jsonml",
        "lost+xml": "lostxml",
        "mads+xml": "mads",
        marc: "mrc",
        "marcxml+xml": "mrcx",
        "mathml+xml": "mathml",
        mbox: "mbox",
        "mediaservercontrol+xml": "mscml",
        "metalink+xml": "metalink",
        "metalink4+xml": "meta4",
        "mets+xml": "mets",
        "mods+xml": "mods",
        mp21: ["m21", "mp21"],
        mp4: "mp4s",
        "oebps-package+xml": "opf",
        "omdoc+xml": "omdoc",
        onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
        oxps: "oxps",
        "patch-ops-error+xml": "xer",
        "pgp-encrypted": "pgp",
        pkcs10: "p10",
        "pkcs7-mime": ["p7m", "p7c"],
        "pkcs7-signature": "p7s",
        pkcs8: "p8",
        "pkix-attr-cert": "ac",
        "pkix-crl": "crl",
        "pkix-pkipath": "pkipath",
        pkixcmp: "pki",
        "pls+xml": "pls",
        "prs.cww": "cww",
        "pskc+xml": "pskcxml",
        "reginfo+xml": "rif",
        "relax-ng-compact-syntax": "rnc",
        "resource-lists+xml": "rl",
        "resource-lists-diff+xml": "rld",
        "rls-services+xml": "rs",
        "rpki-ghostbusters": "gbr",
        "rpki-manifest": "mft",
        "rpki-roa": "roa",
        "rsd+xml": "rsd",
        "sbml+xml": "sbml",
        "scvp-cv-request": "scq",
        "scvp-cv-response": "scs",
        "scvp-vp-request": "spq",
        "scvp-vp-response": "spp",
        sdp: "sdp",
        "set-payment-initiation": "setpay",
        "set-registration-initiation": "setreg",
        "shf+xml": "shf",
        "sparql-query": "rq",
        "sparql-results+xml": "srx",
        srgs: "gram",
        "srgs+xml": "grxml",
        "sru+xml": "sru",
        "ssdl+xml": "ssdl",
        "ssml+xml": "ssml",
        "tei+xml": ["tei", "teicorpus"],
        "thraud+xml": "tfi",
        "timestamped-data": "tsd",
        "vnd.3gpp.pic-bw-large": "plb",
        "vnd.3gpp.pic-bw-small": "psb",
        "vnd.3gpp.pic-bw-var": "pvb",
        "vnd.3gpp2.tcap": "tcap",
        "vnd.3m.post-it-notes": "pwn",
        "vnd.accpac.simply.aso": "aso",
        "vnd.accpac.simply.imp": "imp",
        "vnd.acucobol": "acu",
        "vnd.acucorp": ["atc", "acutc"],
        "vnd.adobe.air-application-installer-package+zip": "air",
        "vnd.adobe.formscentral.fcdt": "fcdt",
        "vnd.adobe.fxp": ["fxp", "fxpl"],
        "vnd.adobe.xdp+xml": "xdp",
        "vnd.adobe.xfdf": "xfdf",
        "vnd.ahead.space": "ahead",
        "vnd.airzip.filesecure.azf": "azf",
        "vnd.airzip.filesecure.azs": "azs",
        "vnd.amazon.ebook": "azw",
        "vnd.americandynamics.acc": "acc",
        "vnd.amiga.ami": "ami",
        "vnd.anser-web-certificate-issue-initiation": "cii",
        "vnd.anser-web-funds-transfer-initiation": "fti",
        "vnd.antix.game-component": "atx",
        "vnd.apple.installer+xml": "mpkg",
        "vnd.apple.mpegurl": "m3u8",
        "vnd.aristanetworks.swi": "swi",
        "vnd.astraea-software.iota": "iota",
        "vnd.audiograph": "aep",
        "vnd.blueice.multipass": "mpm",
        "vnd.bmi": "bmi",
        "vnd.businessobjects": "rep",
        "vnd.chemdraw+xml": "cdxml",
        "vnd.chipnuts.karaoke-mmd": "mmd",
        "vnd.claymore": "cla",
        "vnd.cloanto.rp9": "rp9",
        "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
        "vnd.cluetrust.cartomobile-config": "c11amc",
        "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
        "vnd.commonspace": "csp",
        "vnd.contact.cmsg": "cdbcmsg",
        "vnd.cosmocaller": "cmc",
        "vnd.crick.clicker": "clkx",
        "vnd.crick.clicker.keyboard": "clkk",
        "vnd.crick.clicker.palette": "clkp",
        "vnd.crick.clicker.template": "clkt",
        "vnd.crick.clicker.wordbank": "clkw",
        "vnd.criticaltools.wbs+xml": "wbs",
        "vnd.ctc-posml": "pml",
        "vnd.cups-ppd": "ppd",
        "vnd.curl.car": "car",
        "vnd.curl.pcurl": "pcurl",
        "vnd.dart": "dart",
        "vnd.data-vision.rdz": "rdz",
        "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
        "vnd.dece.ttml+xml": ["uvt", "uvvt"],
        "vnd.dece.unspecified": ["uvx", "uvvx"],
        "vnd.dece.zip": ["uvz", "uvvz"],
        "vnd.denovo.fcselayout-link": "fe_launch",
        "vnd.dna": "dna",
        "vnd.dolby.mlp": "mlp",
        "vnd.dpgraph": "dpg",
        "vnd.dreamfactory": "dfac",
        "vnd.ds-keypoint": "kpxx",
        "vnd.dvb.ait": "ait",
        "vnd.dvb.service": "svc",
        "vnd.dynageo": "geo",
        "vnd.ecowin.chart": "mag",
        "vnd.enliven": "nml",
        "vnd.epson.esf": "esf",
        "vnd.epson.msf": "msf",
        "vnd.epson.quickanime": "qam",
        "vnd.epson.salt": "slt",
        "vnd.epson.ssf": "ssf",
        "vnd.eszigno3+xml": ["es3", "et3"],
        "vnd.ezpix-album": "ez2",
        "vnd.ezpix-package": "ez3",
        "vnd.fdf": "fdf",
        "vnd.fdsn.mseed": "mseed",
        "vnd.fdsn.seed": ["seed", "dataless"],
        "vnd.flographit": "gph",
        "vnd.fluxtime.clip": "ftc",
        "vnd.framemaker": ["fm", "frame", "maker", "book"],
        "vnd.frogans.fnc": "fnc",
        "vnd.frogans.ltf": "ltf",
        "vnd.fsc.weblaunch": "fsc",
        "vnd.fujitsu.oasys": "oas",
        "vnd.fujitsu.oasys2": "oa2",
        "vnd.fujitsu.oasys3": "oa3",
        "vnd.fujitsu.oasysgp": "fg5",
        "vnd.fujitsu.oasysprs": "bh2",
        "vnd.fujixerox.ddd": "ddd",
        "vnd.fujixerox.docuworks": "xdw",
        "vnd.fujixerox.docuworks.binder": "xbd",
        "vnd.fuzzysheet": "fzs",
        "vnd.genomatix.tuxedo": "txd",
        "vnd.geogebra.file": "ggb",
        "vnd.geogebra.tool": "ggt",
        "vnd.geometry-explorer": ["gex", "gre"],
        "vnd.geonext": "gxt",
        "vnd.geoplan": "g2w",
        "vnd.geospace": "g3w",
        "vnd.gmx": "gmx",
        "vnd.grafeq": ["gqf", "gqs"],
        "vnd.groove-account": "gac",
        "vnd.groove-help": "ghf",
        "vnd.groove-identity-message": "gim",
        "vnd.groove-injector": "grv",
        "vnd.groove-tool-message": "gtm",
        "vnd.groove-tool-template": "tpl",
        "vnd.groove-vcard": "vcg",
        "vnd.hal+xml": "hal",
        "vnd.handheld-entertainment+xml": "zmm",
        "vnd.hbci": "hbci",
        "vnd.hhe.lesson-player": "les",
        "vnd.hp-hpgl": "hpgl",
        "vnd.hp-hpid": "hpid",
        "vnd.hp-hps": "hps",
        "vnd.hp-jlyt": "jlt",
        "vnd.hp-pcl": "pcl",
        "vnd.hp-pclxl": "pclxl",
        "vnd.hydrostatix.sof-data": "sfd-hdstx",
        "vnd.ibm.minipay": "mpy",
        "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
        "vnd.ibm.rights-management": "irm",
        "vnd.ibm.secure-container": "sc",
        "vnd.iccprofile": ["icc", "icm"],
        "vnd.igloader": "igl",
        "vnd.immervision-ivp": "ivp",
        "vnd.immervision-ivu": "ivu",
        "vnd.insors.igm": "igm",
        "vnd.intercon.formnet": ["xpw", "xpx"],
        "vnd.intergeo": "i2g",
        "vnd.intu.qbo": "qbo",
        "vnd.intu.qfx": "qfx",
        "vnd.ipunplugged.rcprofile": "rcprofile",
        "vnd.irepository.package+xml": "irp",
        "vnd.is-xpr": "xpr",
        "vnd.isac.fcs": "fcs",
        "vnd.jam": "jam",
        "vnd.jcp.javame.midlet-rms": "rms",
        "vnd.jisp": "jisp",
        "vnd.joost.joda-archive": "joda",
        "vnd.kahootz": ["ktz", "ktr"],
        "vnd.kde.karbon": "karbon",
        "vnd.kde.kchart": "chrt",
        "vnd.kde.kformula": "kfo",
        "vnd.kde.kivio": "flw",
        "vnd.kde.kontour": "kon",
        "vnd.kde.kpresenter": ["kpr", "kpt"],
        "vnd.kde.kspread": "ksp",
        "vnd.kde.kword": ["kwd", "kwt"],
        "vnd.kenameaapp": "htke",
        "vnd.kidspiration": "kia",
        "vnd.kinar": ["kne", "knp"],
        "vnd.koan": ["skp", "skd", "skt", "skm"],
        "vnd.kodak-descriptor": "sse",
        "vnd.las.las+xml": "lasxml",
        "vnd.llamagraphics.life-balance.desktop": "lbd",
        "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
        "vnd.lotus-1-2-3": "123",
        "vnd.lotus-approach": "apr",
        "vnd.lotus-freelance": "pre",
        "vnd.lotus-notes": "nsf",
        "vnd.lotus-organizer": "org",
        "vnd.lotus-screencam": "scm",
        "vnd.lotus-wordpro": "lwp",
        "vnd.macports.portpkg": "portpkg",
        "vnd.mcd": "mcd",
        "vnd.medcalcdata": "mc1",
        "vnd.mediastation.cdkey": "cdkey",
        "vnd.mfer": "mwf",
        "vnd.mfmp": "mfm",
        "vnd.micrografx.flo": "flo",
        "vnd.micrografx.igx": "igx",
        "vnd.mif": "mif",
        "vnd.mobius.daf": "daf",
        "vnd.mobius.dis": "dis",
        "vnd.mobius.mbk": "mbk",
        "vnd.mobius.mqy": "mqy",
        "vnd.mobius.msl": "msl",
        "vnd.mobius.plc": "plc",
        "vnd.mobius.txf": "txf",
        "vnd.mophun.application": "mpn",
        "vnd.mophun.certificate": "mpc",
        "vnd.ms-artgalry": "cil",
        "vnd.ms-cab-compressed": "cab",
        "vnd.ms-excel.addin.macroenabled.12": "xlam",
        "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
        "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
        "vnd.ms-excel.template.macroenabled.12": "xltm",
        "vnd.ms-fontobject": "eot",
        "vnd.ms-htmlhelp": "chm",
        "vnd.ms-ims": "ims",
        "vnd.ms-lrm": "lrm",
        "vnd.ms-officetheme": "thmx",
        "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
        "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
        "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
        "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
        "vnd.ms-powerpoint.template.macroenabled.12": "potm",
        "vnd.ms-project": ["mpp", "mpt"],
        "vnd.ms-word.document.macroenabled.12": "docm",
        "vnd.ms-word.template.macroenabled.12": "dotm",
        "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
        "vnd.ms-wpl": "wpl",
        "vnd.ms-xpsdocument": "xps",
        "vnd.mseq": "mseq",
        "vnd.musician": "mus",
        "vnd.muvee.style": "msty",
        "vnd.mynfc": "taglet",
        "vnd.neurolanguage.nlu": "nlu",
        "vnd.nitf": ["ntf", "nitf"],
        "vnd.noblenet-directory": "nnd",
        "vnd.noblenet-sealer": "nns",
        "vnd.noblenet-web": "nnw",
        "vnd.nokia.n-gage.data": "ngdat",
        "vnd.nokia.n-gage.symbian.install": "n-gage",
        "vnd.nokia.radio-preset": "rpst",
        "vnd.nokia.radio-presets": "rpss",
        "vnd.novadigm.edm": "edm",
        "vnd.novadigm.edx": "edx",
        "vnd.novadigm.ext": "ext",
        "vnd.oasis.opendocument.chart-template": "otc",
        "vnd.oasis.opendocument.formula-template": "odft",
        "vnd.oasis.opendocument.image-template": "oti",
        "vnd.olpc-sugar": "xo",
        "vnd.oma.dd2+xml": "dd2",
        "vnd.openofficeorg.extension": "oxt",
        "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
        "vnd.osgeo.mapguide.package": "mgp",
        "vnd.osgi.dp": "dp",
        "vnd.osgi.subsystem": "esa",
        "vnd.palm": ["pdb", "pqa", "oprc"],
        "vnd.pawaafile": "paw",
        "vnd.pg.format": "str",
        "vnd.pg.osasli": "ei6",
        "vnd.picsel": "efif",
        "vnd.pmi.widget": "wg",
        "vnd.pocketlearn": "plf",
        "vnd.powerbuilder6": "pbd",
        "vnd.previewsystems.box": "box",
        "vnd.proteus.magazine": "mgz",
        "vnd.publishare-delta-tree": "qps",
        "vnd.pvi.ptid1": "ptid",
        "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
        "vnd.realvnc.bed": "bed",
        "vnd.recordare.musicxml": "mxl",
        "vnd.recordare.musicxml+xml": "musicxml",
        "vnd.rig.cryptonote": "cryptonote",
        "vnd.rn-realmedia": "rm",
        "vnd.rn-realmedia-vbr": "rmvb",
        "vnd.route66.link66+xml": "link66",
        "vnd.sailingtracker.track": "st",
        "vnd.seemail": "see",
        "vnd.sema": "sema",
        "vnd.semd": "semd",
        "vnd.semf": "semf",
        "vnd.shana.informed.formdata": "ifm",
        "vnd.shana.informed.formtemplate": "itp",
        "vnd.shana.informed.interchange": "iif",
        "vnd.shana.informed.package": "ipk",
        "vnd.simtech-mindmapper": ["twd", "twds"],
        "vnd.smart.teacher": "teacher",
        "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
        "vnd.spotfire.dxp": "dxp",
        "vnd.spotfire.sfs": "sfs",
        "vnd.stepmania.package": "smzip",
        "vnd.stepmania.stepchart": "sm",
        "vnd.sus-calendar": ["sus", "susp"],
        "vnd.svd": "svd",
        "vnd.syncml+xml": "xsm",
        "vnd.syncml.dm+wbxml": "bdm",
        "vnd.syncml.dm+xml": "xdm",
        "vnd.tao.intent-module-archive": "tao",
        "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
        "vnd.tmobile-livetv": "tmo",
        "vnd.trid.tpt": "tpt",
        "vnd.triscape.mxs": "mxs",
        "vnd.trueapp": "tra",
        "vnd.ufdl": ["ufd", "ufdl"],
        "vnd.uiq.theme": "utz",
        "vnd.umajin": "umj",
        "vnd.unity": "unityweb",
        "vnd.uoml+xml": "uoml",
        "vnd.vcx": "vcx",
        "vnd.visionary": "vis",
        "vnd.vsf": "vsf",
        "vnd.webturbo": "wtb",
        "vnd.wolfram.player": "nbp",
        "vnd.wqd": "wqd",
        "vnd.wt.stf": "stf",
        "vnd.xara": "xar",
        "vnd.xfdl": "xfdl",
        "vnd.yamaha.hv-dic": "hvd",
        "vnd.yamaha.hv-script": "hvs",
        "vnd.yamaha.hv-voice": "hvp",
        "vnd.yamaha.openscoreformat": "osf",
        "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
        "vnd.yamaha.smaf-audio": "saf",
        "vnd.yamaha.smaf-phrase": "spf",
        "vnd.yellowriver-custom-menu": "cmp",
        "vnd.zul": ["zir", "zirz"],
        "vnd.zzazz.deck+xml": "zaz",
        "voicexml+xml": "vxml",
        widget: "wgt",
        winhlp: "hlp",
        "wsdl+xml": "wsdl",
        "wspolicy+xml": "wspolicy",
        "x-ace-compressed": "ace",
        "x-authorware-bin": ["aab", "x32", "u32", "vox"],
        "x-authorware-map": "aam",
        "x-authorware-seg": "aas",
        "x-blorb": ["blb", "blorb"],
        "x-bzip": "bz",
        "x-bzip2": ["bz2", "boz"],
        "x-cfs-compressed": "cfs",
        "x-chat": "chat",
        "x-conference": "nsc",
        "x-dgc-compressed": "dgc",
        "x-dtbncx+xml": "ncx",
        "x-dtbook+xml": "dtb",
        "x-dtbresource+xml": "res",
        "x-eva": "eva",
        "x-font-bdf": "bdf",
        "x-font-ghostscript": "gsf",
        "x-font-linux-psf": "psf",
        "x-font-otf": "otf",
        "x-font-pcf": "pcf",
        "x-font-snf": "snf",
        "x-font-ttf": ["ttf", "ttc"],
        "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
        "x-font-woff": "woff",
        "x-freearc": "arc",
        "x-gca-compressed": "gca",
        "x-glulx": "ulx",
        "x-gramps-xml": "gramps",
        "x-install-instructions": "install",
        "x-lzh-compressed": ["lzh", "lha"],
        "x-mie": "mie",
        "x-mobipocket-ebook": ["prc", "mobi"],
        "x-ms-application": "application",
        "x-ms-shortcut": "lnk",
        "x-ms-xbap": "xbap",
        "x-msbinder": "obd",
        "x-mscardfile": "crd",
        "x-msclip": "clp",
        "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
        "x-msmediaview": ["mvb", "m13", "m14"],
        "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
        "x-msmoney": "mny",
        "x-mspublisher": "pub",
        "x-msschedule": "scd",
        "x-msterminal": "trm",
        "x-mswrite": "wri",
        "x-nzb": "nzb",
        "x-pkcs12": ["p12", "pfx"],
        "x-pkcs7-certificates": ["p7b", "spc"],
        "x-research-info-systems": "ris",
        "x-silverlight-app": "xap",
        "x-sql": "sql",
        "x-stuffitx": "sitx",
        "x-subrip": "srt",
        "x-t3vm-image": "t3",
        "x-tads": "gam",
        "x-tex": "tex",
        "x-tex-tfm": "tfm",
        "x-tgif": "obj",
        "x-xliff+xml": "xlf",
        "x-xz": "xz",
        "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
        "xaml+xml": "xaml",
        "xcap-diff+xml": "xdf",
        "xenc+xml": "xenc",
        "xml-dtd": "dtd",
        "xop+xml": "xop",
        "xproc+xml": "xpl",
        "xslt+xml": "xslt",
        "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
        yang: "yang",
        "yin+xml": "yin",
        envoy: "evy",
        fractals: "fif",
        "internet-property-stream": "acx",
        olescript: "axs",
        "vnd.ms-outlook": "msg",
        "vnd.ms-pkicertstore": "sst",
        "x-compress": "z",
        "x-compressed": "tgz",
        "x-gzip": "gz",
        "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
        "x-pkcs7-mime": ["p7c", "p7m"],
        "ynd.ms-pkipko": "pko",
      },
      audio: {
        amr: "amr",
        "amr-wb": "awb",
        annodex: "axa",
        basic: ["au", "snd"],
        flac: "flac",
        midi: ["mid", "midi", "kar", "rmi"],
        mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
        mpegurl: "m3u",
        ogg: ["oga", "ogg", "spx"],
        "prs.sid": "sid",
        "x-aiff": ["aif", "aiff", "aifc"],
        "x-gsm": "gsm",
        "x-ms-wma": "wma",
        "x-ms-wax": "wax",
        "x-pn-realaudio": "ram",
        "x-realaudio": "ra",
        "x-sd2": "sd2",
        "x-wav": "wav",
        adpcm: "adp",
        mp4: "mp4a",
        s3m: "s3m",
        silk: "sil",
        "vnd.dece.audio": ["uva", "uvva"],
        "vnd.digital-winds": "eol",
        "vnd.dra": "dra",
        "vnd.dts": "dts",
        "vnd.dts.hd": "dtshd",
        "vnd.lucent.voice": "lvp",
        "vnd.ms-playready.media.pya": "pya",
        "vnd.nuera.ecelp4800": "ecelp4800",
        "vnd.nuera.ecelp7470": "ecelp7470",
        "vnd.nuera.ecelp9600": "ecelp9600",
        "vnd.rip": "rip",
        webm: "weba",
        "x-aac": "aac",
        "x-caf": "caf",
        "x-matroska": "mka",
        "x-pn-realaudio-plugin": "rmp",
        xm: "xm",
        mid: ["mid", "rmi"],
      },
      chemical: {
        "x-alchemy": "alc",
        "x-cache": ["cac", "cache"],
        "x-cache-csf": "csf",
        "x-cactvs-binary": ["cbin", "cascii", "ctab"],
        "x-cdx": "cdx",
        "x-chem3d": "c3d",
        "x-cif": "cif",
        "x-cmdf": "cmdf",
        "x-cml": "cml",
        "x-compass": "cpa",
        "x-crossfire": "bsd",
        "x-csml": ["csml", "csm"],
        "x-ctx": "ctx",
        "x-cxf": ["cxf", "cef"],
        "x-embl-dl-nucleotide": ["emb", "embl"],
        "x-gamess-input": ["inp", "gam", "gamin"],
        "x-gaussian-checkpoint": ["fch", "fchk"],
        "x-gaussian-cube": "cub",
        "x-gaussian-input": ["gau", "gjc", "gjf"],
        "x-gaussian-log": "gal",
        "x-gcg8-sequence": "gcg",
        "x-genbank": "gen",
        "x-hin": "hin",
        "x-isostar": ["istr", "ist"],
        "x-jcamp-dx": ["jdx", "dx"],
        "x-kinemage": "kin",
        "x-macmolecule": "mcm",
        "x-macromodel-input": ["mmd", "mmod"],
        "x-mdl-molfile": "mol",
        "x-mdl-rdfile": "rd",
        "x-mdl-rxnfile": "rxn",
        "x-mdl-sdfile": ["sd", "sdf"],
        "x-mdl-tgf": "tgf",
        "x-mmcif": "mcif",
        "x-mol2": "mol2",
        "x-molconn-Z": "b",
        "x-mopac-graph": "gpt",
        "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
        "x-mopac-out": "moo",
        "x-ncbi-asn1": "asn",
        "x-ncbi-asn1-ascii": ["prt", "ent"],
        "x-ncbi-asn1-binary": ["val", "aso"],
        "x-pdb": ["pdb", "ent"],
        "x-rosdal": "ros",
        "x-swissprot": "sw",
        "x-vamas-iso14976": "vms",
        "x-vmd": "vmd",
        "x-xtel": "xtel",
        "x-xyz": "xyz",
      },
      image: {
        gif: "gif",
        ief: "ief",
        jpeg: ["jpeg", "jpg", "jpe"],
        pcx: "pcx",
        png: "png",
        "svg+xml": ["svg", "svgz"],
        tiff: ["tiff", "tif"],
        "vnd.djvu": ["djvu", "djv"],
        "vnd.wap.wbmp": "wbmp",
        "x-canon-cr2": "cr2",
        "x-canon-crw": "crw",
        "x-cmu-raster": "ras",
        "x-coreldraw": "cdr",
        "x-coreldrawpattern": "pat",
        "x-coreldrawtemplate": "cdt",
        "x-corelphotopaint": "cpt",
        "x-epson-erf": "erf",
        "x-icon": "ico",
        "x-jg": "art",
        "x-jng": "jng",
        "x-nikon-nef": "nef",
        "x-olympus-orf": "orf",
        "x-photoshop": "psd",
        "x-portable-anymap": "pnm",
        "x-portable-bitmap": "pbm",
        "x-portable-graymap": "pgm",
        "x-portable-pixmap": "ppm",
        "x-rgb": "rgb",
        "x-xbitmap": "xbm",
        "x-xpixmap": "xpm",
        "x-xwindowdump": "xwd",
        bmp: "bmp",
        cgm: "cgm",
        g3fax: "g3",
        ktx: "ktx",
        "prs.btif": "btif",
        sgi: "sgi",
        "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
        "vnd.dwg": "dwg",
        "vnd.dxf": "dxf",
        "vnd.fastbidsheet": "fbs",
        "vnd.fpx": "fpx",
        "vnd.fst": "fst",
        "vnd.fujixerox.edmics-mmr": "mmr",
        "vnd.fujixerox.edmics-rlc": "rlc",
        "vnd.ms-modi": "mdi",
        "vnd.ms-photo": "wdp",
        "vnd.net-fpx": "npx",
        "vnd.xiff": "xif",
        webp: "webp",
        "x-3ds": "3ds",
        "x-cmx": "cmx",
        "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
        "x-pict": ["pic", "pct"],
        "x-tga": "tga",
        "cis-cod": "cod",
        pipeg: "jfif",
      },
      message: { rfc822: ["eml", "mime", "mht", "mhtml", "nws"] },
      model: {
        iges: ["igs", "iges"],
        mesh: ["msh", "mesh", "silo"],
        vrml: ["wrl", "vrml"],
        "x3d+vrml": ["x3dv", "x3dvz"],
        "x3d+xml": ["x3d", "x3dz"],
        "x3d+binary": ["x3db", "x3dbz"],
        "vnd.collada+xml": "dae",
        "vnd.dwf": "dwf",
        "vnd.gdl": "gdl",
        "vnd.gtw": "gtw",
        "vnd.mts": "mts",
        "vnd.vtu": "vtu",
      },
      text: {
        "cache-manifest": ["manifest", "appcache"],
        calendar: ["ics", "icz", "ifb"],
        css: "css",
        csv: "csv",
        h323: "323",
        html: ["html", "htm", "shtml", "stm"],
        iuls: "uls",
        mathml: "mml",
        plain: [
          "txt",
          "text",
          "brf",
          "conf",
          "def",
          "list",
          "log",
          "in",
          "bas",
        ],
        richtext: "rtx",
        scriptlet: ["sct", "wsc"],
        texmacs: ["tm", "ts"],
        "tab-separated-values": "tsv",
        "vnd.sun.j2me.app-descriptor": "jad",
        "vnd.wap.wml": "wml",
        "vnd.wap.wmlscript": "wmls",
        "x-bibtex": "bib",
        "x-boo": "boo",
        "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
        "x-c++src": ["c++", "cpp", "cxx", "cc"],
        "x-component": "htc",
        "x-dsrc": "d",
        "x-diff": ["diff", "patch"],
        "x-haskell": "hs",
        "x-java": "java",
        "x-literate-haskell": "lhs",
        "x-moc": "moc",
        "x-pascal": ["p", "pas"],
        "x-pcs-gcd": "gcd",
        "x-perl": ["pl", "pm"],
        "x-python": "py",
        "x-scala": "scala",
        "x-setext": "etx",
        "x-tcl": ["tcl", "tk"],
        "x-tex": ["tex", "ltx", "sty", "cls"],
        "x-vcalendar": "vcs",
        "x-vcard": "vcf",
        n3: "n3",
        "prs.lines.tag": "dsc",
        sgml: ["sgml", "sgm"],
        troff: ["t", "tr", "roff", "man", "me", "ms"],
        turtle: "ttl",
        "uri-list": ["uri", "uris", "urls"],
        vcard: "vcard",
        "vnd.curl": "curl",
        "vnd.curl.dcurl": "dcurl",
        "vnd.curl.scurl": "scurl",
        "vnd.curl.mcurl": "mcurl",
        "vnd.dvb.subtitle": "sub",
        "vnd.fly": "fly",
        "vnd.fmi.flexstor": "flx",
        "vnd.graphviz": "gv",
        "vnd.in3d.3dml": "3dml",
        "vnd.in3d.spot": "spot",
        "x-asm": ["s", "asm"],
        "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
        "x-fortran": ["f", "for", "f77", "f90"],
        "x-opml": "opml",
        "x-nfo": "nfo",
        "x-sfv": "sfv",
        "x-uuencode": "uu",
        webviewhtml: "htt",
      },
      video: {
        avif: ".avif",
        "3gpp": "3gp",
        annodex: "axv",
        dl: "dl",
        dv: ["dif", "dv"],
        fli: "fli",
        gl: "gl",
        mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
        mp4: ["mp4", "mp4v", "mpg4"],
        quicktime: ["qt", "mov"],
        ogg: "ogv",
        "vnd.mpegurl": ["mxu", "m4u"],
        "x-flv": "flv",
        "x-la-asf": ["lsf", "lsx"],
        "x-mng": "mng",
        "x-ms-asf": ["asf", "asx", "asr"],
        "x-ms-wm": "wm",
        "x-ms-wmv": "wmv",
        "x-ms-wmx": "wmx",
        "x-ms-wvx": "wvx",
        "x-msvideo": "avi",
        "x-sgi-movie": "movie",
        "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
        "3gpp2": "3g2",
        h261: "h261",
        h263: "h263",
        h264: "h264",
        jpeg: "jpgv",
        jpm: ["jpm", "jpgm"],
        mj2: ["mj2", "mjp2"],
        "vnd.dece.hd": ["uvh", "uvvh"],
        "vnd.dece.mobile": ["uvm", "uvvm"],
        "vnd.dece.pd": ["uvp", "uvvp"],
        "vnd.dece.sd": ["uvs", "uvvs"],
        "vnd.dece.video": ["uvv", "uvvv"],
        "vnd.dvb.file": "dvb",
        "vnd.fvt": "fvt",
        "vnd.ms-playready.media.pyv": "pyv",
        "vnd.uvvu.mp4": ["uvu", "uvvu"],
        "vnd.vivo": "viv",
        webm: "webm",
        "x-f4v": "f4v",
        "x-m4v": "m4v",
        "x-ms-vob": "vob",
        "x-smv": "smv",
      },
      "x-conference": { "x-cooltalk": "ice" },
      "x-world": {
        "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"],
      },
    };
    (() => {
      const t = {};
      for (let e in $)
        if ($.hasOwnProperty(e))
          for (let n in $[e])
            if ($[e].hasOwnProperty(n)) {
              const i = $[e][n];
              if ("string" == typeof i) t[i] = e + "/" + n;
              else for (let r = 0; r < i.length; r++) t[i[r]] = e + "/" + n;
            }
    })();
    const K = [];
    for (let je = 0; je < 256; je++) {
      let t = je;
      for (let e = 0; e < 8; e++)
        1 & t ? (t = (t >>> 1) ^ 3988292384) : (t >>>= 1);
      K[je] = t;
    }
    var X = class {
      constructor(t) {
        this.crc = t || -1;
      }
      append(t) {
        let e = 0 | this.crc;
        for (let n = 0, i = 0 | t.length; n < i; n++)
          e = (e >>> 8) ^ K[255 & (e ^ t[n])];
        this.crc = e;
      }
      get() {
        return ~this.crc;
      }
    };
    const Q = {
        concat(t, e) {
          if (0 === t.length || 0 === e.length) return t.concat(e);
          const n = t[t.length - 1],
            i = Q.getPartial(n);
          return 32 === i
            ? t.concat(e)
            : Q._shiftRight(e, i, 0 | n, t.slice(0, t.length - 1));
        },
        bitLength(t) {
          const e = t.length;
          if (0 === e) return 0;
          const n = t[e - 1];
          return 32 * (e - 1) + Q.getPartial(n);
        },
        clamp(t, e) {
          if (32 * t.length < e) return t;
          const n = (t = t.slice(0, Math.ceil(e / 32))).length;
          return (
            (e &= 31),
            n > 0 &&
              e &&
              (t[n - 1] = Q.partial(e, t[n - 1] & (2147483648 >> (e - 1)), 1)),
            t
          );
        },
        partial: (t, e, n) =>
          32 === t ? e : (n ? 0 | e : e << (32 - t)) + 1099511627776 * t,
        getPartial: (t) => Math.round(t / 1099511627776) || 32,
        _shiftRight(t, e, n, i) {
          for (void 0 === i && (i = []); e >= 32; e -= 32) i.push(n), (n = 0);
          if (0 === e) return i.concat(t);
          for (let a = 0; a < t.length; a++)
            i.push(n | (t[a] >>> e)), (n = t[a] << (32 - e));
          const r = t.length ? t[t.length - 1] : 0,
            s = Q.getPartial(r);
          return (
            i.push(Q.partial((e + s) & 31, e + s > 32 ? n : i.pop(), 1)), i
          );
        },
      },
      Z = {
        bytes: {
          fromBits(t) {
            const e = Q.bitLength(t) / 8,
              n = new Uint8Array(e);
            let i;
            for (let r = 0; r < e; r++)
              0 === (3 & r) && (i = t[r / 4]), (n[r] = i >>> 24), (i <<= 8);
            return n;
          },
          toBits(t) {
            const e = [];
            let n,
              i = 0;
            for (n = 0; n < t.length; n++)
              (i = (i << 8) | t[n]), 3 === (3 & n) && (e.push(i), (i = 0));
            return 3 & n && e.push(Q.partial(8 * (3 & n), i)), e;
          },
        },
      },
      Y = {
        sha1: function (t) {
          t
            ? ((this._h = t._h.slice(0)),
              (this._buffer = t._buffer.slice(0)),
              (this._length = t._length))
            : this.reset();
        },
      };
    Y.sha1.prototype = {
      blockSize: 512,
      reset: function () {
        return (
          (this._h = this._init.slice(0)),
          (this._buffer = []),
          (this._length = 0),
          this
        );
      },
      update: function (t) {
        const e = this;
        "string" === typeof t && (t = Z.utf8String.toBits(t));
        const n = (e._buffer = Q.concat(e._buffer, t)),
          i = e._length,
          r = (e._length = i + Q.bitLength(t));
        if (r > 9007199254740991)
          throw new Error("Cannot hash more than 2^53 - 1 bits");
        const s = new Uint32Array(n);
        let a = 0;
        for (
          let o = e.blockSize + i - ((e.blockSize + i) & (e.blockSize - 1));
          o <= r;
          o += e.blockSize
        )
          e._block(s.subarray(16 * a, 16 * (a + 1))), (a += 1);
        return n.splice(0, 16 * a), e;
      },
      finalize: function () {
        const t = this;
        let e = t._buffer;
        const n = t._h;
        e = Q.concat(e, [Q.partial(1, 1)]);
        for (let i = e.length + 2; 15 & i; i++) e.push(0);
        for (
          e.push(Math.floor(t._length / 4294967296)), e.push(0 | t._length);
          e.length;

        )
          t._block(e.splice(0, 16));
        return t.reset(), n;
      },
      _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
      _key: [1518500249, 1859775393, 2400959708, 3395469782],
      _f: function (t, e, n, i) {
        return t <= 19
          ? (e & n) | (~e & i)
          : t <= 39
          ? e ^ n ^ i
          : t <= 59
          ? (e & n) | (e & i) | (n & i)
          : t <= 79
          ? e ^ n ^ i
          : void 0;
      },
      _S: function (t, e) {
        return (e << t) | (e >>> (32 - t));
      },
      _block: function (t) {
        const e = this,
          n = e._h,
          i = Array(80);
        for (let c = 0; c < 16; c++) i[c] = t[c];
        let r = n[0],
          s = n[1],
          a = n[2],
          o = n[3],
          l = n[4];
        for (let c = 0; c <= 79; c++) {
          c >= 16 &&
            (i[c] = e._S(1, i[c - 3] ^ i[c - 8] ^ i[c - 14] ^ i[c - 16]));
          const t =
            (e._S(5, r) +
              e._f(c, s, a, o) +
              l +
              i[c] +
              e._key[Math.floor(c / 20)]) |
            0;
          (l = o), (o = a), (a = e._S(30, s)), (s = r), (r = t);
        }
        (n[0] = (n[0] + r) | 0),
          (n[1] = (n[1] + s) | 0),
          (n[2] = (n[2] + a) | 0),
          (n[3] = (n[3] + o) | 0),
          (n[4] = (n[4] + l) | 0);
      },
    };
    const J = {
        aes: class {
          constructor(t) {
            const e = this;
            (e._tables = [
              [[], [], [], [], []],
              [[], [], [], [], []],
            ]),
              e._tables[0][0][0] || e._precompute();
            const n = e._tables[0][4],
              i = e._tables[1],
              r = t.length;
            let s,
              a,
              o,
              l = 1;
            if (4 !== r && 6 !== r && 8 !== r)
              throw new Error("invalid aes key size");
            for (
              e._key = [(a = t.slice(0)), (o = [])], s = r;
              s < 4 * r + 28;
              s++
            ) {
              let t = a[s - 1];
              (s % r === 0 || (8 === r && s % r === 4)) &&
                ((t =
                  (n[t >>> 24] << 24) ^
                  (n[(t >> 16) & 255] << 16) ^
                  (n[(t >> 8) & 255] << 8) ^
                  n[255 & t]),
                s % r === 0 &&
                  ((t = (t << 8) ^ (t >>> 24) ^ (l << 24)),
                  (l = (l << 1) ^ (283 * (l >> 7))))),
                (a[s] = a[s - r] ^ t);
            }
            for (let c = 0; s; c++, s--) {
              const t = a[3 & c ? s : s - 4];
              o[c] =
                s <= 4 || c < 4
                  ? t
                  : i[0][n[t >>> 24]] ^
                    i[1][n[(t >> 16) & 255]] ^
                    i[2][n[(t >> 8) & 255]] ^
                    i[3][n[255 & t]];
            }
          }
          encrypt(t) {
            return this._crypt(t, 0);
          }
          decrypt(t) {
            return this._crypt(t, 1);
          }
          _precompute() {
            const t = this._tables[0],
              e = this._tables[1],
              n = t[4],
              i = e[4],
              r = [],
              s = [];
            let a, o, l, c;
            for (let d = 0; d < 256; d++)
              s[(r[d] = (d << 1) ^ (283 * (d >> 7))) ^ d] = d;
            for (let d = (a = 0); !n[d]; d ^= o || 1, a = s[a] || 1) {
              let s = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
              (s = (s >> 8) ^ (255 & s) ^ 99),
                (n[d] = s),
                (i[s] = d),
                (c = r[(l = r[(o = r[d])])]);
              let h = (16843009 * c) ^ (65537 * l) ^ (257 * o) ^ (16843008 * d),
                u = (257 * r[s]) ^ (16843008 * s);
              for (let n = 0; n < 4; n++)
                (t[n][d] = u = (u << 24) ^ (u >>> 8)),
                  (e[n][s] = h = (h << 24) ^ (h >>> 8));
            }
            for (let d = 0; d < 5; d++)
              (t[d] = t[d].slice(0)), (e[d] = e[d].slice(0));
          }
          _crypt(t, e) {
            if (4 !== t.length) throw new Error("invalid aes block size");
            const n = this._key[e],
              i = n.length / 4 - 2,
              r = [0, 0, 0, 0],
              s = this._tables[e],
              a = s[0],
              o = s[1],
              l = s[2],
              c = s[3],
              d = s[4];
            let h,
              u,
              f,
              p = t[0] ^ n[0],
              m = t[e ? 3 : 1] ^ n[1],
              g = t[2] ^ n[2],
              _ = t[e ? 1 : 3] ^ n[3],
              x = 4;
            for (let w = 0; w < i; w++)
              (h =
                a[p >>> 24] ^
                o[(m >> 16) & 255] ^
                l[(g >> 8) & 255] ^
                c[255 & _] ^
                n[x]),
                (u =
                  a[m >>> 24] ^
                  o[(g >> 16) & 255] ^
                  l[(_ >> 8) & 255] ^
                  c[255 & p] ^
                  n[x + 1]),
                (f =
                  a[g >>> 24] ^
                  o[(_ >> 16) & 255] ^
                  l[(p >> 8) & 255] ^
                  c[255 & m] ^
                  n[x + 2]),
                (_ =
                  a[_ >>> 24] ^
                  o[(p >> 16) & 255] ^
                  l[(m >> 8) & 255] ^
                  c[255 & g] ^
                  n[x + 3]),
                (x += 4),
                (p = h),
                (m = u),
                (g = f);
            for (let w = 0; w < 4; w++)
              (r[e ? 3 & -w : w] =
                (d[p >>> 24] << 24) ^
                (d[(m >> 16) & 255] << 16) ^
                (d[(g >> 8) & 255] << 8) ^
                d[255 & _] ^
                n[x++]),
                (h = p),
                (p = m),
                (m = g),
                (g = _),
                (_ = h);
            return r;
          }
        },
      },
      tt = {
        ctrGladman: class {
          constructor(t, e) {
            (this._prf = t), (this._initIv = e), (this._iv = e);
          }
          reset() {
            this._iv = this._initIv;
          }
          update(t) {
            return this.calculate(this._prf, t, this._iv);
          }
          incWord(t) {
            if (255 === ((t >> 24) & 255)) {
              let e = (t >> 16) & 255,
                n = (t >> 8) & 255,
                i = 255 & t;
              255 === e
                ? ((e = 0),
                  255 === n ? ((n = 0), 255 === i ? (i = 0) : ++i) : ++n)
                : ++e,
                (t = 0),
                (t += e << 16),
                (t += n << 8),
                (t += i);
            } else t += 1 << 24;
            return t;
          }
          incCounter(t) {
            0 === (t[0] = this.incWord(t[0])) && (t[1] = this.incWord(t[1]));
          }
          calculate(t, e, n) {
            let i;
            if (!(i = e.length)) return [];
            const r = Q.bitLength(e);
            for (let s = 0; s < i; s += 4) {
              this.incCounter(n);
              const i = t.encrypt(n);
              (e[s] ^= i[0]),
                (e[s + 1] ^= i[1]),
                (e[s + 2] ^= i[2]),
                (e[s + 3] ^= i[3]);
            }
            return Q.clamp(e, r);
          }
        },
      },
      et = {
        hmacSha1: class {
          constructor(t) {
            const e = (this._hash = Y.sha1),
              n = [[], []],
              i = e.prototype.blockSize / 32;
            (this._baseHash = [new e(), new e()]),
              t.length > i && (t = e.hash(t));
            for (let r = 0; r < i; r++)
              (n[0][r] = 909522486 ^ t[r]), (n[1][r] = 1549556828 ^ t[r]);
            this._baseHash[0].update(n[0]),
              this._baseHash[1].update(n[1]),
              (this._resultHash = new e(this._baseHash[0]));
          }
          reset() {
            (this._resultHash = new this._hash(this._baseHash[0])),
              (this._updated = !1);
          }
          update(t) {
            (this._updated = !0), this._resultHash.update(t);
          }
          digest() {
            const t = this._resultHash.finalize(),
              e = new this._hash(this._baseHash[1]).update(t).finalize();
            return this.reset(), e;
          }
        },
      },
      nt = { name: "PBKDF2" },
      it = Object.assign({ hash: { name: "HMAC" } }, nt),
      rt = Object.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, nt),
      st = ["deriveBits"],
      at = [8, 12, 16],
      ot = [16, 24, 32],
      lt = [0, 0, 0, 0],
      ct = Z.bytes,
      dt = J.aes,
      ht = tt.ctrGladman,
      ut = et.hmacSha1;
    class ft {
      constructor(t, e, n) {
        Object.assign(this, {
          password: t,
          signed: e,
          strength: n - 1,
          pendingInput: new Uint8Array(0),
        });
      }
      async append(t) {
        const e = this;
        if (e.password) {
          const n = xt(t, 0, at[e.strength] + 2);
          await (async function (t, e, n) {
            await gt(t, n, xt(e, 0, at[t.strength]));
            const i = xt(e, at[t.strength]),
              r = t.keys.passwordVerification;
            if (r[0] != i[0] || r[1] != i[1])
              throw new Error("Invalid pasword");
          })(e, n, e.password),
            (e.password = null),
            (e.aesCtrGladman = new ht(new dt(e.keys.key), Array.from(lt))),
            (e.hmac = new ut(e.keys.authentication)),
            (t = xt(t, at[e.strength] + 2));
        }
        return mt(
          e,
          t,
          new Uint8Array(t.length - 10 - ((t.length - 10) % 16)),
          0,
          10,
          !0
        );
      }
      flush() {
        const t = this,
          e = t.pendingInput,
          n = xt(e, 0, e.length - 10),
          i = xt(e, e.length - 10);
        let r = new Uint8Array(0);
        if (n.length) {
          const e = ct.toBits(n);
          t.hmac.update(e);
          const i = t.aesCtrGladman.update(e);
          r = ct.fromBits(i);
        }
        let s = !0;
        if (t.signed) {
          const e = xt(ct.fromBits(t.hmac.digest()), 0, 10);
          for (let t = 0; t < 10; t++) e[t] != i[t] && (s = !1);
        }
        return { valid: s, data: r };
      }
    }
    class pt {
      constructor(t, e) {
        Object.assign(this, {
          password: t,
          strength: e - 1,
          pendingInput: new Uint8Array(0),
        });
      }
      async append(t) {
        const e = this;
        let n = new Uint8Array(0);
        e.password &&
          ((n = await (async function (t, e) {
            const n = crypto.getRandomValues(new Uint8Array(at[t.strength]));
            return await gt(t, e, n), _t(n, t.keys.passwordVerification);
          })(e, e.password)),
          (e.password = null),
          (e.aesCtrGladman = new ht(new dt(e.keys.key), Array.from(lt))),
          (e.hmac = new ut(e.keys.authentication)));
        const i = new Uint8Array(n.length + t.length - (t.length % 16));
        return i.set(n, 0), mt(e, t, i, n.length, 0);
      }
      flush() {
        const t = this;
        let e = new Uint8Array(0);
        if (t.pendingInput.length) {
          const n = t.aesCtrGladman.update(ct.toBits(t.pendingInput));
          t.hmac.update(n), (e = ct.fromBits(n));
        }
        const n = xt(ct.fromBits(t.hmac.digest()), 0, 10);
        return { data: _t(e, n), signature: n };
      }
    }
    function mt(t, e, n, i, r, s) {
      const a = e.length - r;
      let o;
      for (
        t.pendingInput.length &&
          ((e = _t(t.pendingInput, e)),
          (n = (function (t, e) {
            if (e && e > t.length) {
              const n = t;
              (t = new Uint8Array(e)).set(n, 0);
            }
            return t;
          })(n, a - (a % 16)))),
          o = 0;
        o <= a - 16;
        o += 16
      ) {
        const r = ct.toBits(xt(e, o, o + 16));
        s && t.hmac.update(r);
        const a = t.aesCtrGladman.update(r);
        s || t.hmac.update(a), n.set(ct.fromBits(a), o + i);
      }
      return (t.pendingInput = xt(e, o)), n;
    }
    async function gt(t, e, n) {
      const i = new TextEncoder().encode(e),
        r = await crypto.subtle.importKey("raw", i, it, !1, st),
        s = await crypto.subtle.deriveBits(
          Object.assign({ salt: n }, rt),
          r,
          8 * (2 * ot[t.strength] + 2)
        ),
        a = new Uint8Array(s);
      t.keys = {
        key: ct.toBits(xt(a, 0, ot[t.strength])),
        authentication: ct.toBits(xt(a, ot[t.strength], 2 * ot[t.strength])),
        passwordVerification: xt(a, 2 * ot[t.strength]),
      };
    }
    function _t(t, e) {
      let n = t;
      return (
        t.length + e.length &&
          ((n = new Uint8Array(t.length + e.length)),
          n.set(t, 0),
          n.set(e, t.length)),
        n
      );
    }
    function xt(t, e, n) {
      return t.subarray(e, n);
    }
    class wt {
      constructor(t, e) {
        Object.assign(this, { password: t, passwordVerification: e }),
          kt(this, t);
      }
      append(t) {
        const e = this;
        if (e.password) {
          const n = yt(e, t.subarray(0, 12));
          if (((e.password = null), n[11] != e.passwordVerification))
            throw new Error("Invalid pasword");
          t = t.subarray(12);
        }
        return yt(e, t);
      }
      flush() {
        return { valid: !0, data: new Uint8Array(0) };
      }
    }
    class bt {
      constructor(t, e) {
        Object.assign(this, { password: t, passwordVerification: e }),
          kt(this, t);
      }
      append(t) {
        const e = this;
        let n, i;
        if (e.password) {
          e.password = null;
          const r = crypto.getRandomValues(new Uint8Array(12));
          (r[11] = e.passwordVerification),
            (n = new Uint8Array(t.length + r.length)),
            n.set(vt(e, r), 0),
            (i = 12);
        } else (n = new Uint8Array(t.length)), (i = 0);
        return n.set(vt(e, t), i), n;
      }
      flush() {
        return { data: new Uint8Array(0) };
      }
    }
    function yt(t, e) {
      const n = new Uint8Array(e.length);
      for (let i = 0; i < e.length; i++) (n[i] = Et(t) ^ e[i]), At(t, n[i]);
      return n;
    }
    function vt(t, e) {
      const n = new Uint8Array(e.length);
      for (let i = 0; i < e.length; i++) (n[i] = Et(t) ^ e[i]), At(t, e[i]);
      return n;
    }
    function kt(t, e) {
      (t.keys = [305419896, 591751049, 878082192]),
        (t.crcKey0 = new X(t.keys[0])),
        (t.crcKey2 = new X(t.keys[2]));
      for (let n = 0; n < e.length; n++) At(t, e.charCodeAt(n));
    }
    function At(t, e) {
      t.crcKey0.append([e]),
        (t.keys[0] = ~t.crcKey0.get()),
        (t.keys[1] = St(t.keys[1] + Ut(t.keys[0]))),
        (t.keys[1] = St(Math.imul(t.keys[1], 134775813) + 1)),
        t.crcKey2.append([t.keys[1] >>> 24]),
        (t.keys[2] = ~t.crcKey2.get());
    }
    function Et(t) {
      const e = 2 | t.keys[2];
      return Ut(Math.imul(e, 1 ^ e) >>> 8);
    }
    function Ut(t) {
      return 255 & t;
    }
    function St(t) {
      return 4294967295 & t;
    }
    class zt {
      constructor(
        t,
        {
          signature: e,
          password: n,
          signed: i,
          compressed: r,
          zipCrypto: s,
          passwordVerification: a,
          encryptionStrength: o,
        },
        { chunkSize: l }
      ) {
        const c = Boolean(n);
        Object.assign(this, {
          signature: e,
          encrypted: c,
          signed: i,
          compressed: r,
          inflate: r && new t({ chunkSize: l }),
          crc32: i && new X(),
          zipCrypto: s,
          decrypt: c && s ? new wt(n, a) : new ft(n, i, o),
        });
      }
      async append(t) {
        const e = this;
        return (
          e.encrypted && t.length && (t = await e.decrypt.append(t)),
          e.compressed && t.length && (t = await e.inflate.append(t)),
          (!e.encrypted || e.zipCrypto) &&
            e.signed &&
            t.length &&
            e.crc32.append(t),
          t
        );
      }
      async flush() {
        const t = this;
        let e,
          n = new Uint8Array(0);
        if (t.encrypted) {
          const e = t.decrypt.flush();
          if (!e.valid) throw new Error("Invalid signature");
          n = e.data;
        }
        if ((!t.encrypted || t.zipCrypto) && t.signed) {
          const n = new DataView(new Uint8Array(4).buffer);
          if (
            ((e = t.crc32.get()),
            n.setUint32(0, e),
            t.signature != n.getUint32(0, !1))
          )
            throw new Error("Invalid signature");
        }
        return (
          t.compressed &&
            ((n = (await t.inflate.append(n)) || new Uint8Array(0)),
            await t.inflate.flush()),
          { data: n, signature: e }
        );
      }
    }
    class Tt {
      constructor(
        t,
        {
          encrypted: e,
          signed: n,
          compressed: i,
          level: r,
          zipCrypto: s,
          password: a,
          passwordVerification: o,
          encryptionStrength: l,
        },
        { chunkSize: c }
      ) {
        Object.assign(this, {
          encrypted: e,
          signed: n,
          compressed: i,
          deflate: i && new t({ level: r || 5, chunkSize: c }),
          crc32: n && new X(),
          zipCrypto: s,
          encrypt: e && s ? new bt(a, o) : new pt(a, l),
        });
      }
      async append(t) {
        const e = this;
        let n = t;
        return (
          e.compressed && t.length && (n = await e.deflate.append(t)),
          e.encrypted && n.length && (n = await e.encrypt.append(n)),
          (!e.encrypted || e.zipCrypto) &&
            e.signed &&
            t.length &&
            e.crc32.append(t),
          n
        );
      }
      async flush() {
        const t = this;
        let e,
          n = new Uint8Array(0);
        if (
          (t.compressed && (n = (await t.deflate.flush()) || new Uint8Array(0)),
          t.encrypted)
        ) {
          n = await t.encrypt.append(n);
          const i = t.encrypt.flush();
          e = i.signature;
          const r = new Uint8Array(n.length + i.data.length);
          r.set(n, 0), r.set(i.data, n.length), (n = r);
        }
        return (
          (t.encrypted && !t.zipCrypto) || !t.signed || (e = t.crc32.get()),
          { data: n, signature: e }
        );
      }
    }
    function Rt(t) {
      const e = n.p;
      let i = "";
      return (
        (!e || e.indexOf("://") < 0) &&
          (i += window.location.protocol + "//" + window.location.host),
        (i += e || "/"),
        i + t
      );
    }
    let Lt = !0;
    var Ct = (t, e, n, i, r, s, a) => (
      Object.assign(t, {
        busy: !0,
        codecConstructor: e,
        options: Object.assign({}, n),
        scripts: a,
        terminate() {
          t.worker && !t.busy && (t.worker.terminate(), (t.interface = null));
        },
        onTaskFinished() {
          (t.busy = !1), r(t);
        },
      }),
      s
        ? (function (t, e) {
            let n;
            const i = { type: "module" };
            if (!t.interface) {
              if (Lt)
                try {
                  t.worker = r();
                } catch (o) {
                  (Lt = !1), (t.worker = r(i));
                }
              else t.worker = r(i);
              t.worker.addEventListener(
                "message",
                function (e) {
                  const i = e.data;
                  if (n) {
                    const e = i.error,
                      r = i.type;
                    if (e) {
                      const i = new Error(e.message);
                      (i.stack = e.stack),
                        n.reject(i),
                        (n = null),
                        t.onTaskFinished();
                    } else if ("init" == r || "flush" == r || "append" == r) {
                      const e = i.data;
                      "flush" == r
                        ? (n.resolve({
                            data: new Uint8Array(e),
                            signature: i.signature,
                          }),
                          (n = null),
                          t.onTaskFinished())
                        : n.resolve(e && new Uint8Array(e));
                    }
                  }
                },
                !1
              ),
                (t.interface = {
                  append: (t) => s({ type: "append", data: t }),
                  flush: () => s({ type: "flush" }),
                });
            }
            return t.interface;
            function r(e = {}) {
              return new Worker(
                new URL(
                  t.scripts[0],
                  Rt(
                    "node_modules/@zip.js/zip.js/lib/core/codecs/codec-pool-worker.js"
                  )
                ),
                e
              );
            }
            async function s(i) {
              if (!n) {
                const n = t.options,
                  i = t.scripts.slice(1);
                await a({
                  scripts: i,
                  type: "init",
                  options: n,
                  config: { chunkSize: e.chunkSize },
                });
              }
              return a(i);
            }
            function a(e) {
              const i = t.worker,
                r = new Promise((t, e) => (n = { resolve: t, reject: e }));
              try {
                if (e.data)
                  try {
                    (e.data = e.data.buffer), i.postMessage(e, [e.data]);
                  } catch (o) {
                    i.postMessage(e);
                  }
                else i.postMessage(e);
              } catch (o) {
                n.reject(o), (n = null), t.onTaskFinished();
              }
              return r;
            }
          })(t, i)
        : (function (t, e) {
            const n = (function (t, e, n) {
              return e.codecType.startsWith("deflate")
                ? new Tt(t, e, n)
                : e.codecType.startsWith("inflate")
                ? new zt(t, e, n)
                : void 0;
            })(t.codecConstructor, t.options, e);
            return {
              async append(e) {
                try {
                  return await n.append(e);
                } catch (i) {
                  throw (t.onTaskFinished(), i);
                }
              },
              async flush() {
                try {
                  return await n.flush();
                } finally {
                  t.onTaskFinished();
                }
              },
            };
          })(t, i)
    );
    let Bt = [],
      Ot = [];
    function Dt(t, e, n) {
      const i =
          !(!e.compressed && !e.signed && !e.encrypted) &&
          (e.useWebWorkers || (void 0 === e.useWebWorkers && n.useWebWorkers)),
        r = i && n.workerScripts ? n.workerScripts[e.codecType] : [];
      if (Bt.length < n.maxWorkers) {
        const a = {};
        return Bt.push(a), Ct(a, t, e, n, s, i, r);
      }
      {
        const a = Bt.find((t) => !t.busy);
        return a
          ? (jt(a), Ct(a, t, e, n, s, i, r))
          : new Promise((n) =>
              Ot.push({
                resolve: n,
                codecConstructor: t,
                options: e,
                webWorker: i,
                scripts: r,
              })
            );
      }
      function s(t) {
        if (Ot.length) {
          const [
            {
              resolve: e,
              codecConstructor: i,
              options: r,
              webWorker: a,
              scripts: o,
            },
          ] = Ot.splice(0, 1);
          e(Ct(t, i, r, n, s, a, o));
        } else
          t.worker
            ? (jt(t),
              Number.isFinite(n.terminateWorkerTimeout) &&
                n.terminateWorkerTimeout >= 0 &&
                (t.terminateTimeout = setTimeout(() => {
                  (Bt = Bt.filter((e) => e != t)), t.terminate();
                }, n.terminateWorkerTimeout)))
            : (Bt = Bt.filter((e) => e != t));
      }
    }
    function jt(t) {
      t.terminateTimeout &&
        (clearTimeout(t.terminateTimeout), (t.terminateTimeout = null));
    }
    class Pt {
      constructor() {
        this.size = 0;
      }
      init() {
        this.initialized = !0;
      }
    }
    class Mt extends Pt {}
    class Ft extends Pt {
      writeUint8Array(t) {
        this.size += t.length;
      }
    }
    class Nt extends Ft {
      constructor(t) {
        super(),
          (this.encoding = t),
          (this.blob = new Blob([], { type: "text/plain" }));
      }
      async writeUint8Array(t) {
        super.writeUint8Array(t),
          (this.blob = new Blob([this.blob, t.buffer], { type: "text/plain" }));
      }
      getData() {
        if (this.blob.text) return this.blob.text();
        {
          const t = new FileReader();
          return new Promise((e, n) => {
            (t.onload = (t) => e(t.target.result)),
              (t.onerror = () => n(t.error)),
              t.readAsText(this.blob, this.encoding);
          });
        }
      }
    }
    class It extends Mt {
      constructor(t) {
        super(), (this.blob = t), (this.size = t.size);
      }
      async readUint8Array(t, e) {
        if (this.blob.arrayBuffer)
          return new Uint8Array(await this.blob.slice(t, t + e).arrayBuffer());
        {
          const n = new FileReader();
          return new Promise((i, r) => {
            (n.onload = (t) => i(new Uint8Array(t.target.result))),
              (n.onerror = () => r(n.error)),
              n.readAsArrayBuffer(this.blob.slice(t, t + e));
          });
        }
      }
    }
    class qt extends Ft {
      constructor(t) {
        super(), (this.contentType = t), (this.arrayBuffers = []);
      }
      async writeUint8Array(t) {
        super.writeUint8Array(t), this.arrayBuffers.push(t.buffer);
      }
      getData() {
        return (
          this.blob ||
            (this.blob = new Blob(this.arrayBuffers, {
              type: this.contentType,
            })),
          this.blob
        );
      }
    }
    class Ht extends Mt {
      constructor(t, e) {
        super(),
          (this.url = t),
          (this.preventHeadRequest = e.preventHeadRequest),
          (this.useRangeHeader = e.useRangeHeader),
          (this.forceRangeRequests = e.forceRangeRequests),
          (this.options = Object.assign({}, e)),
          delete this.options.preventHeadRequest,
          delete this.options.useRangeHeader,
          delete this.options.forceRangeRequests,
          delete this.options.useXHR;
      }
      async init() {
        if ((super.init(), Yt(this.url) && !this.preventHeadRequest)) {
          const t = await Gt("HEAD", this.url, this.options);
          if (
            ((this.size = Number(t.headers.get("Content-Length"))),
            !this.forceRangeRequests &&
              this.useRangeHeader &&
              "bytes" != t.headers.get("Accept-Ranges"))
          )
            throw new Error("HTTP Range not supported");
          void 0 === this.size && (await Wt(this, this.options));
        } else await Wt(this, this.options);
      }
      async readUint8Array(t, e) {
        if (this.useRangeHeader) {
          const n = await Gt(
            "GET",
            this.url,
            this.options,
            Object.assign({}, this.options.headers, {
              Range: "bytes=" + t + "-" + (t + e - 1),
            })
          );
          if (206 != n.status) throw new Error("HTTP Range not supported");
          return new Uint8Array(await n.arrayBuffer());
        }
        return (
          this.data || (await Wt(this, this.options)),
          new Uint8Array(this.data.subarray(t, t + e))
        );
      }
    }
    async function Wt(t, e) {
      const n = await Gt("GET", t.url, e);
      (t.data = new Uint8Array(await n.arrayBuffer())),
        t.size || (t.size = t.data.length);
    }
    async function Gt(t, e, n, i) {
      i = Object.assign({}, n.headers, i);
      const r = await fetch(e, Object.assign({}, n, { method: t, headers: i }));
      if (r.status < 400) return r;
      throw new Error("HTTP error " + (r.statusText || r.status));
    }
    class Vt extends Mt {
      constructor(t, e) {
        super(),
          (this.url = t),
          (this.preventHeadRequest = e.preventHeadRequest),
          (this.useRangeHeader = e.useRangeHeader),
          (this.forceRangeRequests = e.forceRangeRequests);
      }
      async init() {
        if ((super.init(), Yt(this.url) && !this.preventHeadRequest))
          return new Promise((t, e) =>
            Kt(
              "HEAD",
              this.url,
              (n) => {
                (this.size = Number(n.getResponseHeader("Content-Length"))),
                  this.useRangeHeader
                    ? this.forceRangeRequests ||
                      "bytes" == n.getResponseHeader("Accept-Ranges")
                      ? t()
                      : e(new Error("HTTP Range not supported"))
                    : void 0 === this.size
                    ? $t(this, this.url)
                        .then(() => t())
                        .catch(e)
                    : t();
              },
              e
            )
          );
        await $t(this, this.url);
      }
      async readUint8Array(t, e) {
        if (this.useRangeHeader) {
          const n = await new Promise((n, i) =>
            Kt("GET", this.url, (t) => n(t), i, [
              ["Range", "bytes=" + t + "-" + (t + e - 1)],
            ])
          );
          if (206 != n.status) throw new Error("HTTP Range not supported");
          return new Uint8Array(n.response);
        }
        return (
          this.data || (await $t(this, this.url)),
          new Uint8Array(this.data.subarray(t, t + e))
        );
      }
    }
    function $t(t, e) {
      return new Promise((n, i) =>
        Kt(
          "GET",
          e,
          (e) => {
            (t.data = new Uint8Array(e.response)),
              t.size || (t.size = t.data.length),
              n();
          },
          i
        )
      );
    }
    function Kt(t, e, n, i, r = []) {
      const s = new XMLHttpRequest();
      return (
        s.addEventListener(
          "load",
          () => {
            s.status < 400
              ? n(s)
              : i("HTTP error " + (s.statusText || s.status));
          },
          !1
        ),
        s.addEventListener("error", i, !1),
        s.open(t, e),
        r.forEach((t) => s.setRequestHeader(t[0], t[1])),
        (s.responseType = "arraybuffer"),
        s.send(),
        s
      );
    }
    class Xt extends Mt {
      constructor(t, e = {}) {
        super(),
          (this.url = t),
          e.useXHR
            ? (this.reader = new Vt(t, e))
            : (this.reader = new Ht(t, e));
      }
      set size(t) {}
      get size() {
        return this.reader.size;
      }
      async init() {
        super.init(), await this.reader.init();
      }
      async readUint8Array(t, e) {
        return this.reader.readUint8Array(t, e);
      }
    }
    class Qt extends Xt {
      constructor(t, e = {}) {
        (e.useRangeHeader = !0), super(t, e);
      }
    }
    class Zt extends Mt {
      constructor(t) {
        super(), (this.array = t), (this.size = t.length);
      }
      async readUint8Array(t, e) {
        return this.array.slice(t, t + e);
      }
    }
    function Yt(t) {
      if ("undefined" != typeof document) {
        const e = document.createElement("a");
        return (e.href = t), "http:" == e.protocol || "https:" == e.protocol;
      }
      return /^https?:\/\//i.test(t);
    }
    new Date(2107, 11, 31), new Date(1980, 0, 1);
    const Jt =
      "\0\u263a\u263b\u2665\u2666\u2663\u2660\u2022\u25d8\u25cb\u25d9\u2642\u2640\u266a\u266b\u263c\u25ba\u25c4\u2195\u203c\xb6\xa7\u25ac\u21a8\u2191\u2193\u2192\u2190\u221f\u2194\u25b2\u25bc !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5\u20a7\u0192\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\u2310\xac\xbd\xbc\xa1\xab\xbb\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255d\u255c\u255b\u2510\u2514\u2534\u252c\u251c\u2500\u253c\u255e\u255f\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256b\u256a\u2518\u250c\u2588\u2584\u258c\u2590\u2580\u03b1\xdf\u0393\u03c0\u03a3\u03c3\xb5\u03c4\u03a6\u0398\u03a9\u03b4\u221e\u03c6\u03b5\u2229\u2261\xb1\u2265\u2264\u2320\u2321\xf7\u2248\xb0\u2219\xb7\u221a\u207f\xb2\u25a0 ".split(
        ""
      );
    async function te(t, e, n, i, r, s, a) {
      const o = Math.max(s.chunkSize, 64);
      return (async function s(l = 0, c = 0) {
        const d = a.signal;
        if (l < r) {
          ee(d, t);
          const u = await e.readUint8Array(l + i, Math.min(o, r - l)),
            f = u.length;
          ee(d, t);
          const p = await t.append(u);
          if ((ee(d, t), (c += await ne(n, p)), a.onprogress))
            try {
              a.onprogress(l + f, r);
            } catch (h) {}
          return s(l + o, c);
        }
        {
          const e = await t.flush();
          return (
            (c += await ne(n, e.data)), { signature: e.signature, length: c }
          );
        }
      })();
    }
    function ee(t, e) {
      if (t && t.aborted) throw (e.flush(), new Error("Abort error"));
    }
    async function ne(t, e) {
      return e.length && (await t.writeUint8Array(e)), e.length;
    }
    const ie = [
      "filename",
      "rawFilename",
      "directory",
      "encrypted",
      "compressedSize",
      "uncompressedSize",
      "lastModDate",
      "rawLastModDate",
      "comment",
      "rawComment",
      "signature",
      "extraField",
      "rawExtraField",
      "bitFlag",
      "extraFieldZip64",
      "extraFieldUnicodePath",
      "extraFieldUnicodeComment",
      "extraFieldAES",
      "filenameUTF8",
      "commentUTF8",
      "offset",
      "zip64",
      "compressionMethod",
      "extraFieldNTFS",
      "lastAccessDate",
      "creationDate",
      "extraFieldExtendedTimestamp",
      "version",
      "versionMadeBy",
      "msDosCompatible",
      "internalFileAttribute",
      "externalFileAttribute",
    ];
    class re {
      constructor(t) {
        ie.forEach((e) => (this[e] = t[e]));
      }
    }
    const se = "File format is not recognized",
      ae = ["uncompressedSize", "compressedSize", "offset"];
    class oe {
      constructor(t, e = {}) {
        Object.assign(this, { reader: t, options: e, config: G() });
      }
      async getEntries(t = {}) {
        const e = this,
          n = e.reader;
        if ((n.initialized || (await n.init()), n.size < 22))
          throw new Error(se);
        const i = await (async function (t, e, n, i, r) {
          const s = new Uint8Array(4);
          !(function (t, e, n) {
            t.setUint32(e, n, !0);
          })(be(s), 0, e);
          const a = i + r;
          return (await o(i)) || (await o(Math.min(a, n)));
          async function o(e) {
            const r = n - e,
              a = await ye(t, r, e);
            for (let t = a.length - i; t >= 0; t--)
              if (
                a[t] == s[0] &&
                a[t + 1] == s[1] &&
                a[t + 2] == s[2] &&
                a[t + 3] == s[3]
              )
                return { offset: r + t, buffer: a.slice(t, t + i).buffer };
          }
        })(n, 101010256, n.size, 22, 1048560);
        if (!i) throw new Error("End of central directory not found");
        const r = be(i);
        let s = xe(r, 12),
          a = xe(r, 16),
          o = _e(r, 8),
          l = 0;
        if (4294967295 == a || 4294967295 == s || 65535 == o) {
          const t = be(await ye(n, i.offset - 20, 20));
          if (117853008 != xe(t, 0))
            throw new Error("End of Zip64 central directory not found");
          a = we(t, 8);
          let e = await ye(n, a, 56),
            r = be(e);
          const c = i.offset - 20 - 56;
          if (101075792 != xe(r, 0) && a != c) {
            const t = a;
            (a = c), (l = a - t), (e = await ye(n, a, 56)), (r = be(e));
          }
          if (101075792 != xe(r, 0))
            throw new Error("End of Zip64 central directory locator not found");
          (o = we(r, 32)), (s = we(r, 40)), (a -= s);
        }
        if (a < 0 || a >= n.size) throw new Error(se);
        let c = 0,
          d = await ye(n, a, s),
          h = be(d);
        const u = i.offset - s;
        if (33639248 != xe(h, c) && a != u) {
          const t = a;
          (a = u), (l = a - t), (d = await ye(n, a, s)), (h = be(d));
        }
        if (a < 0 || a >= n.size) throw new Error(se);
        const f = [];
        for (let m = 0; m < o; m++) {
          const i = new le(n, e.config, e.options);
          if (33639248 != xe(h, c))
            throw new Error("Central directory header not found");
          ce(i, h, c + 6);
          const r = Boolean(i.bitFlag.languageEncodingFlag),
            s = c + 46,
            a = s + i.filenameLength,
            u = a + i.extraFieldLength,
            g = _e(h, c + 4),
            _ = 0 == (0 & g);
          Object.assign(i, {
            versionMadeBy: g,
            msDosCompatible: _,
            compressedSize: 0,
            uncompressedSize: 0,
            commentLength: _e(h, c + 32),
            directory: _ && 16 == (16 & ge(h, c + 38)),
            offset: xe(h, c + 42) + l,
            internalFileAttribute: xe(h, c + 34),
            externalFileAttribute: xe(h, c + 38),
            rawFilename: d.subarray(s, a),
            filenameUTF8: r,
            commentUTF8: r,
            rawExtraField: d.subarray(a, u),
          });
          const x = u + i.commentLength;
          (i.rawComment = d.subarray(u, x)),
            (i.filename = fe(
              i.rawFilename,
              i.filenameUTF8 ? "utf-8" : ue(e, t, "filenameEncoding")
            )),
            (i.comment = fe(
              i.rawComment,
              i.commentUTF8 ? "utf-8" : ue(e, t, "commentEncoding")
            )),
            !i.directory && i.filename.endsWith("/") && (i.directory = !0),
            de(i, i, h, c + 6);
          const w = new re(i);
          if (
            ((w.getData = (t, e) => i.getData(t, w, e)),
            f.push(w),
            (c = x),
            t.onprogress)
          )
            try {
              t.onprogress(m + 1, o, new re(i));
            } catch (p) {}
        }
        return f;
      }
      async close() {}
    }
    class le {
      constructor(t, e, n) {
        Object.assign(this, { reader: t, config: e, options: n });
      }
      async getData(t, e, n = {}) {
        const {
            reader: i,
            offset: r,
            extraFieldAES: s,
            compressionMethod: a,
            config: o,
            bitFlag: l,
            signature: c,
            rawLastModDate: d,
            compressedSize: h,
          } = this,
          u = (this.localDirectory = {});
        i.initialized || (await i.init());
        let f = await ye(i, r, 30);
        const p = be(f);
        let m = ue(this, n, "password");
        if (((m = m && m.length && m), s && 99 != s.originalCompressionMethod))
          throw new Error("Compression method not supported");
        if (0 != a && 8 != a)
          throw new Error("Compression method not supported");
        if (67324752 != xe(p, 0))
          throw new Error("Local file header not found");
        ce(u, p, 4),
          (f = await ye(i, r, 30 + u.filenameLength + u.extraFieldLength)),
          (u.rawExtraField = f.subarray(30 + u.filenameLength)),
          de(this, u, p, 4),
          (e.lastAccessDate = u.lastAccessDate),
          (e.creationDate = u.creationDate);
        const g = this.encrypted && u.encrypted,
          _ = g && !s;
        if (g) {
          if (!_ && void 0 === s.strength)
            throw new Error("Encryption method not supported");
          if (!m) throw new Error("File contains encrypted entry");
        }
        const x = await Dt(
          o.Inflate,
          {
            codecType: "inflate",
            password: m,
            zipCrypto: _,
            encryptionStrength: s && s.strength,
            signed: ue(this, n, "checkSignature"),
            passwordVerification:
              _ && (l.dataDescriptor ? (d >>> 8) & 255 : (c >>> 24) & 255),
            signature: c,
            compressed: 0 != a,
            encrypted: g,
            useWebWorkers: ue(this, n, "useWebWorkers"),
          },
          o
        );
        t.initialized || (await t.init());
        const w = ue(this, n, "signal"),
          b = r + 30 + u.filenameLength + u.extraFieldLength;
        return (
          await te(x, i, t, b, h, o, { onprogress: n.onprogress, signal: w }),
          t.getData()
        );
      }
    }
    function ce(t, e, n) {
      const i = (t.rawBitFlag = _e(e, n + 2)),
        r = 1 == (1 & i),
        s = xe(e, n + 6);
      Object.assign(t, {
        encrypted: r,
        version: _e(e, n),
        bitFlag: {
          level: (6 & i) >> 1,
          dataDescriptor: 8 == (8 & i),
          languageEncodingFlag: 2048 == (2048 & i),
        },
        rawLastModDate: s,
        lastModDate: pe(s),
        filenameLength: _e(e, n + 22),
        extraFieldLength: _e(e, n + 24),
      });
    }
    function de(t, e, n, i) {
      const r = e.rawExtraField,
        s = (e.extraField = new Map()),
        a = be(new Uint8Array(r));
      let o = 0;
      try {
        for (; o < r.length; ) {
          const t = _e(a, o),
            e = _e(a, o + 2);
          s.set(t, { type: t, data: r.slice(o + 4, o + 4 + e) }), (o += 4 + e);
        }
      } catch (m) {}
      const l = _e(n, i + 4);
      (e.signature = xe(n, i + 10)),
        (e.uncompressedSize = xe(n, i + 18)),
        (e.compressedSize = xe(n, i + 14));
      const c = s.get(1);
      c &&
        (!(function (t, e) {
          e.zip64 = !0;
          const n = be(t.data);
          t.values = [];
          for (let r = 0; r < Math.floor(t.data.length / 8); r++)
            t.values.push(we(n, 0 + 8 * r));
          const i = ae.filter((t) => 4294967295 == e[t]);
          for (let r = 0; r < i.length; r++) t[i[r]] = t.values[r];
          ae.forEach((n) => {
            if (4294967295 == e[n]) {
              if (void 0 === t[n])
                throw new Error("Zip64 extra field not found");
              e[n] = t[n];
            }
          });
        })(c, e),
        (e.extraFieldZip64 = c));
      const d = s.get(28789);
      d &&
        (he(d, "filename", "rawFilename", e, t), (e.extraFieldUnicodePath = d));
      const h = s.get(25461);
      h &&
        (he(h, "comment", "rawComment", e, t),
        (e.extraFieldUnicodeComment = h));
      const u = s.get(39169);
      u
        ? (!(function (t, e, n) {
            const i = be(t.data);
            (t.vendorVersion = ge(i, 0)), (t.vendorId = ge(i, 2));
            const r = ge(i, 4);
            (t.strength = r),
              (t.originalCompressionMethod = n),
              (e.compressionMethod = t.compressionMethod = _e(i, 5));
          })(u, e, l),
          (e.extraFieldAES = u))
        : (e.compressionMethod = l);
      const f = s.get(10);
      f &&
        (!(function (t, e) {
          const n = be(t.data);
          let i,
            r = 4;
          try {
            for (; r < t.data.length && !i; ) {
              const e = _e(n, r),
                s = _e(n, r + 2);
              1 == e && (i = t.data.slice(r + 4, r + 4 + s)), (r += 4 + s);
            }
          } catch (m) {}
          try {
            if (i && 24 == i.length) {
              const n = be(i),
                r = n.getBigUint64(0, !0),
                s = n.getBigUint64(8, !0),
                a = n.getBigUint64(16, !0);
              Object.assign(t, {
                rawLastModDate: r,
                rawLastAccessDate: s,
                rawCreationDate: a,
              });
              const o = me(r),
                l = me(s),
                c = me(a),
                d = { lastModDate: o, lastAccessDate: l, creationDate: c };
              Object.assign(t, d), Object.assign(e, d);
            }
          } catch (m) {}
        })(f, e),
        (e.extraFieldNTFS = f));
      const p = s.get(21589);
      p &&
        (!(function (t, e) {
          const n = be(t.data),
            i = ge(n, 0),
            r = [],
            s = [];
          1 == (1 & i) && (r.push("lastModDate"), s.push("rawLastModDate"));
          2 == (2 & i) &&
            (r.push("lastAccessDate"), s.push("rawLastAccessDate"));
          4 == (4 & i) && (r.push("creationDate"), s.push("rawCreationDate"));
          let a = 1;
          r.forEach((i, r) => {
            if (t.data.length >= a + 4) {
              const o = xe(n, a);
              e[i] = t[i] = new Date(1e3 * o);
              const l = s[r];
              t[l] = o;
            }
            a += 4;
          });
        })(p, e),
        (e.extraFieldExtendedTimestamp = p));
    }
    function he(t, e, n, i, r) {
      const s = be(t.data);
      (t.version = ge(s, 0)), (t.signature = xe(s, 1));
      const a = new X();
      a.append(r[n]);
      const o = be(new Uint8Array(4));
      o.setUint32(0, a.get(), !0),
        (t[e] = new TextDecoder().decode(t.data.subarray(5))),
        (t.valid = !r.bitFlag.languageEncodingFlag && t.signature == xe(o, 0)),
        t.valid && ((i[e] = t[e]), (i[e + "UTF8"] = !0));
    }
    function ue(t, e, n) {
      return void 0 === e[n] ? t.options[n] : e[n];
    }
    function fe(t, e) {
      return e && "cp437" != e.trim().toLowerCase()
        ? new TextDecoder(e).decode(t)
        : ((t) => {
            let e = "";
            for (let n = 0; n < t.length; n++) e += Jt[t[n]];
            return e;
          })(t);
    }
    function pe(t) {
      const e = (4294901760 & t) >> 16,
        n = 65535 & t;
      try {
        return new Date(
          1980 + ((65024 & e) >> 9),
          ((480 & e) >> 5) - 1,
          31 & e,
          (63488 & n) >> 11,
          (2016 & n) >> 5,
          2 * (31 & n),
          0
        );
      } catch (i) {}
    }
    function me(t) {
      return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)));
    }
    function ge(t, e) {
      return t.getUint8(e);
    }
    function _e(t, e) {
      return t.getUint16(e, !0);
    }
    function xe(t, e) {
      return t.getUint32(e, !0);
    }
    function we(t, e) {
      return Number(t.getBigUint64(e, !0));
    }
    function be(t) {
      return new DataView(t.buffer);
    }
    function ye(t, e, n) {
      return t.readUint8Array(e, n);
    }
    new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
    (() => {
      if ("function" == typeof URL.createObjectURL) {
        const t =
            '\n\t\t\t\n\nconst t=[];for(let e=0;e<256;e++){let n=e;for(let t=0;t<8;t++)1&n?n=n>>>1^3988292384:n>>>=1;t[e]=n;}class e{constructor(t){this.crc=t||-1;}append(e){let n=0|this.crc;for(let i=0,a=0|e.length;i<a;i++)n=n>>>8^t[255&(n^e[i])];this.crc=n;}get(){return ~this.crc}}const n={concat(t,e){if(0===t.length||0===e.length)return t.concat(e);const i=t[t.length-1],a=n.getPartial(i);return 32===a?t.concat(e):n._shiftRight(e,a,0|i,t.slice(0,t.length-1))},bitLength(t){const e=t.length;if(0===e)return 0;const i=t[e-1];return 32*(e-1)+n.getPartial(i)},clamp(t,e){if(32*t.length<e)return t;const i=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,i>0&&e&&(t[i-1]=n.partial(e,t[i-1]&2147483648>>e-1,1)),t},partial:(t,e,n)=>32===t?e:(n?0|e:e<<32-t)+1099511627776*t,getPartial:t=>Math.round(t/1099511627776)||32,_shiftRight(t,e,i,a){for(void 0===a&&(a=[]);e>=32;e-=32)a.push(i),i=0;if(0===e)return a.concat(t);for(let n=0;n<t.length;n++)a.push(i|t[n]>>>e),i=t[n]<<32-e;const r=t.length?t[t.length-1]:0,s=n.getPartial(r);return a.push(n.partial(e+s&31,e+s>32?i:a.pop(),1)),a}},i={bytes:{fromBits(t){const e=n.bitLength(t)/8,i=new Uint8Array(e);let a;for(let n=0;n<e;n++)0==(3&n)&&(a=t[n/4]),i[n]=a>>>24,a<<=8;return i},toBits(t){const e=[];let i,a=0;for(i=0;i<t.length;i++)a=a<<8|t[i],3==(3&i)&&(e.push(a),a=0);return 3&i&&e.push(n.partial(8*(3&i),a)),e}}},a={sha1:function(t){t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset();}};a.sha1.prototype={blockSize:512,reset:function(){const t=this;return t._h=this._init.slice(0),t._buffer=[],t._length=0,t},update:function(t){const e=this;"string"==typeof t&&(t=i.utf8String.toBits(t));const a=e._buffer=n.concat(e._buffer,t),r=e._length,s=e._length=r+n.bitLength(t);if(s>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const o=new Uint32Array(a);let l=0;for(let t=e.blockSize+r-(e.blockSize+r&e.blockSize-1);t<=s;t+=e.blockSize)e._block(o.subarray(16*l,16*(l+1))),l+=1;return a.splice(0,16*l),e},finalize:function(){const t=this;let e=t._buffer;const i=t._h;e=n.concat(e,[n.partial(1,1)]);for(let t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(t._length/4294967296)),e.push(0|t._length);e.length;)t._block(e.splice(0,16));return t.reset(),i},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(t,e,n,i){return t<=19?e&n|~e&i:t<=39?e^n^i:t<=59?e&n|e&i|n&i:t<=79?e^n^i:void 0},_S:function(t,e){return e<<t|e>>>32-t},_block:function(t){const e=this,n=e._h,i=Array(80);for(let e=0;e<16;e++)i[e]=t[e];let a=n[0],r=n[1],s=n[2],o=n[3],l=n[4];for(let t=0;t<=79;t++){t>=16&&(i[t]=e._S(1,i[t-3]^i[t-8]^i[t-14]^i[t-16]));const n=e._S(5,a)+e._f(t,r,s,o)+l+i[t]+e._key[Math.floor(t/20)]|0;l=o,o=s,s=e._S(30,r),r=a,a=n;}n[0]=n[0]+a|0,n[1]=n[1]+r|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+l|0;}};const r={aes:class{constructor(t){const e=this;e._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],e._tables[0][0][0]||e._precompute();const n=e._tables[0][4],i=e._tables[1],a=t.length;let r,s,o,l=1;if(4!==a&&6!==a&&8!==a)throw new Error("invalid aes key size");for(e._key=[s=t.slice(0),o=[]],r=a;r<4*a+28;r++){let t=s[r-1];(r%a==0||8===a&&r%a==4)&&(t=n[t>>>24]<<24^n[t>>16&255]<<16^n[t>>8&255]<<8^n[255&t],r%a==0&&(t=t<<8^t>>>24^l<<24,l=l<<1^283*(l>>7))),s[r]=s[r-a]^t;}for(let t=0;r;t++,r--){const e=s[3&t?r:r-4];o[t]=r<=4||t<4?e:i[0][n[e>>>24]]^i[1][n[e>>16&255]]^i[2][n[e>>8&255]]^i[3][n[255&e]];}}encrypt(t){return this._crypt(t,0)}decrypt(t){return this._crypt(t,1)}_precompute(){const t=this._tables[0],e=this._tables[1],n=t[4],i=e[4],a=[],r=[];let s,o,l,_;for(let t=0;t<256;t++)r[(a[t]=t<<1^283*(t>>7))^t]=t;for(let d=s=0;!n[d];d^=o||1,s=r[s]||1){let r=s^s<<1^s<<2^s<<3^s<<4;r=r>>8^255&r^99,n[d]=r,i[r]=d,_=a[l=a[o=a[d]]];let c=16843009*_^65537*l^257*o^16843008*d,f=257*a[r]^16843008*r;for(let n=0;n<4;n++)t[n][d]=f=f<<24^f>>>8,e[n][r]=c=c<<24^c>>>8;}for(let n=0;n<5;n++)t[n]=t[n].slice(0),e[n]=e[n].slice(0);}_crypt(t,e){if(4!==t.length)throw new Error("invalid aes block size");const n=this._key[e],i=n.length/4-2,a=[0,0,0,0],r=this._tables[e],s=r[0],o=r[1],l=r[2],_=r[3],d=r[4];let c,f,u,h=t[0]^n[0],b=t[e?3:1]^n[1],w=t[2]^n[2],p=t[e?1:3]^n[3],x=4;for(let t=0;t<i;t++)c=s[h>>>24]^o[b>>16&255]^l[w>>8&255]^_[255&p]^n[x],f=s[b>>>24]^o[w>>16&255]^l[p>>8&255]^_[255&h]^n[x+1],u=s[w>>>24]^o[p>>16&255]^l[h>>8&255]^_[255&b]^n[x+2],p=s[p>>>24]^o[h>>16&255]^l[b>>8&255]^_[255&w]^n[x+3],x+=4,h=c,b=f,w=u;for(let t=0;t<4;t++)a[e?3&-t:t]=d[h>>>24]<<24^d[b>>16&255]<<16^d[w>>8&255]<<8^d[255&p]^n[x++],c=h,h=b,b=w,w=p,p=c;return a}}},s={ctrGladman:class{constructor(t,e){this._prf=t,this._initIv=e,this._iv=e;}reset(){this._iv=this._initIv;}update(t){return this.calculate(this._prf,t,this._iv)}incWord(t){if(255==(t>>24&255)){let e=t>>16&255,n=t>>8&255,i=255&t;255===e?(e=0,255===n?(n=0,255===i?i=0:++i):++n):++e,t=0,t+=e<<16,t+=n<<8,t+=i;}else t+=1<<24;return t}incCounter(t){0===(t[0]=this.incWord(t[0]))&&(t[1]=this.incWord(t[1]));}calculate(t,e,i){let a;if(!(a=e.length))return [];const r=n.bitLength(e);for(let n=0;n<a;n+=4){this.incCounter(i);const a=t.encrypt(i);e[n]^=a[0],e[n+1]^=a[1],e[n+2]^=a[2],e[n+3]^=a[3];}return n.clamp(e,r)}}},o={hmacSha1:class{constructor(t){const e=this,n=e._hash=a.sha1,i=[[],[]],r=n.prototype.blockSize/32;e._baseHash=[new n,new n],t.length>r&&(t=n.hash(t));for(let e=0;e<r;e++)i[0][e]=909522486^t[e],i[1][e]=1549556828^t[e];e._baseHash[0].update(i[0]),e._baseHash[1].update(i[1]),e._resultHash=new n(e._baseHash[0]);}reset(){const t=this;t._resultHash=new t._hash(t._baseHash[0]),t._updated=!1;}update(t){this._updated=!0,this._resultHash.update(t);}digest(){const t=this,e=t._resultHash.finalize(),n=new t._hash(t._baseHash[1]).update(e).finalize();return t.reset(),n}}},l={name:"PBKDF2"},_=Object.assign({hash:{name:"HMAC"}},l),d=Object.assign({iterations:1e3,hash:{name:"SHA-1"}},l),c=["deriveBits"],f=[8,12,16],u=[16,24,32],h=[0,0,0,0],b=i.bytes,w=r.aes,p=s.ctrGladman,x=o.hmacSha1;class g{constructor(t,e,n){Object.assign(this,{password:t,signed:e,strength:n-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;if(e.password){const n=A(t,0,f[e.strength]+2);await async function(t,e,n){await k(t,n,A(e,0,f[t.strength]));const i=A(e,f[t.strength]),a=t.keys.passwordVerification;if(a[0]!=i[0]||a[1]!=i[1])throw new Error("Invalid pasword")}(e,n,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication),t=A(t,f[e.strength]+2);}return m(e,t,new Uint8Array(t.length-10-(t.length-10)%16),0,10,!0)}flush(){const t=this,e=t.pendingInput,n=A(e,0,e.length-10),i=A(e,e.length-10);let a=new Uint8Array(0);if(n.length){const e=b.toBits(n);t.hmac.update(e);const i=t.aesCtrGladman.update(e);a=b.fromBits(i);}let r=!0;if(t.signed){const e=A(b.fromBits(t.hmac.digest()),0,10);for(let t=0;t<10;t++)e[t]!=i[t]&&(r=!1);}return {valid:r,data:a}}}class y{constructor(t,e){Object.assign(this,{password:t,strength:e-1,pendingInput:new Uint8Array(0)});}async append(t){const e=this;let n=new Uint8Array(0);e.password&&(n=await async function(t,e){const n=crypto.getRandomValues(new Uint8Array(f[t.strength]));return await k(t,e,n),v(n,t.keys.passwordVerification)}(e,e.password),e.password=null,e.aesCtrGladman=new p(new w(e.keys.key),Array.from(h)),e.hmac=new x(e.keys.authentication));const i=new Uint8Array(n.length+t.length-t.length%16);return i.set(n,0),m(e,t,i,n.length,0)}flush(){const t=this;let e=new Uint8Array(0);if(t.pendingInput.length){const n=t.aesCtrGladman.update(b.toBits(t.pendingInput));t.hmac.update(n),e=b.fromBits(n);}const n=A(b.fromBits(t.hmac.digest()),0,10);return {data:v(e,n),signature:n}}}function m(t,e,n,i,a,r){const s=e.length-a;let o;for(t.pendingInput.length&&(e=v(t.pendingInput,e),n=function(t,e){if(e&&e>t.length){const n=t;(t=new Uint8Array(e)).set(n,0);}return t}(n,s-s%16)),o=0;o<=s-16;o+=16){const a=b.toBits(A(e,o,o+16));r&&t.hmac.update(a);const s=t.aesCtrGladman.update(a);r||t.hmac.update(s),n.set(b.fromBits(s),o+i);}return t.pendingInput=A(e,o),n}async function k(t,e,n){const i=(new TextEncoder).encode(e),a=await crypto.subtle.importKey("raw",i,_,!1,c),r=await crypto.subtle.deriveBits(Object.assign({salt:n},d),a,8*(2*u[t.strength]+2)),s=new Uint8Array(r);t.keys={key:b.toBits(A(s,0,u[t.strength])),authentication:b.toBits(A(s,u[t.strength],2*u[t.strength])),passwordVerification:A(s,2*u[t.strength])};}function v(t,e){let n=t;return t.length+e.length&&(n=new Uint8Array(t.length+e.length),n.set(t,0),n.set(e,t.length)),n}function A(t,e,n){return t.subarray(e,n)}class U{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;if(e.password){const n=z(e,t.subarray(0,12));if(e.password=null,n[11]!=e.passwordVerification)throw new Error("Invalid pasword");t=t.subarray(12);}return z(e,t)}flush(){return {valid:!0,data:new Uint8Array(0)}}}class S{constructor(t,e){Object.assign(this,{password:t,passwordVerification:e}),E(this,t);}append(t){const e=this;let n,i;if(e.password){e.password=null;const a=crypto.getRandomValues(new Uint8Array(12));a[11]=e.passwordVerification,n=new Uint8Array(t.length+a.length),n.set(I(e,a),0),i=12;}else n=new Uint8Array(t.length),i=0;return n.set(I(e,t),i),n}flush(){return {data:new Uint8Array(0)}}}function z(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,n[i]);return n}function I(t,e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=M(t)^e[i],C(t,e[i]);return n}function E(t,n){t.keys=[305419896,591751049,878082192],t.crcKey0=new e(t.keys[0]),t.crcKey2=new e(t.keys[2]);for(let e=0;e<n.length;e++)C(t,n.charCodeAt(e));}function C(t,e){t.crcKey0.append([e]),t.keys[0]=~t.crcKey0.get(),t.keys[1]=H(t.keys[1]+B(t.keys[0])),t.keys[1]=H(Math.imul(t.keys[1],134775813)+1),t.crcKey2.append([t.keys[1]>>>24]),t.keys[2]=~t.crcKey2.get();}function M(t){const e=2|t.keys[2];return B(Math.imul(e,1^e)>>>8)}function B(t){return 255&t}function H(t){return 4294967295&t}class V{constructor(t,{signature:n,password:i,signed:a,compressed:r,zipCrypto:s,passwordVerification:o,encryptionStrength:l},{chunkSize:_}){const d=Boolean(i);Object.assign(this,{signature:n,encrypted:d,signed:a,compressed:r,inflate:r&&new t({chunkSize:_}),crc32:a&&new e,zipCrypto:s,decrypt:d&&s?new U(i,o):new g(i,a,l)});}async append(t){const e=this;return e.encrypted&&t.length&&(t=await e.decrypt.append(t)),e.compressed&&t.length&&(t=await e.inflate.append(t)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),t}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.encrypted){const e=t.decrypt.flush();if(!e.valid)throw new Error("Invalid signature");n=e.data;}if((!t.encrypted||t.zipCrypto)&&t.signed){const n=new DataView(new Uint8Array(4).buffer);if(e=t.crc32.get(),n.setUint32(0,e),t.signature!=n.getUint32(0,!1))throw new Error("Invalid signature")}return t.compressed&&(n=await t.inflate.append(n)||new Uint8Array(0),await t.inflate.flush()),{data:n,signature:e}}}class D{constructor(t,{encrypted:n,signed:i,compressed:a,level:r,zipCrypto:s,password:o,passwordVerification:l,encryptionStrength:_},{chunkSize:d}){Object.assign(this,{encrypted:n,signed:i,compressed:a,deflate:a&&new t({level:r||5,chunkSize:d}),crc32:i&&new e,zipCrypto:s,encrypt:n&&s?new S(o,l):new y(o,_)});}async append(t){const e=this;let n=t;return e.compressed&&t.length&&(n=await e.deflate.append(t)),e.encrypted&&n.length&&(n=await e.encrypt.append(n)),(!e.encrypted||e.zipCrypto)&&e.signed&&t.length&&e.crc32.append(t),n}async flush(){const t=this;let e,n=new Uint8Array(0);if(t.compressed&&(n=await t.deflate.flush()||new Uint8Array(0)),t.encrypted){n=await t.encrypt.append(n);const i=t.encrypt.flush();e=i.signature;const a=new Uint8Array(n.length+i.data.length);a.set(n,0),a.set(i.data,n.length),n=a;}return t.encrypted&&!t.zipCrypto||!t.signed||(e=t.crc32.get()),{data:n,signature:e}}}const j={init(t){t.scripts&&t.scripts.length&&importScripts.apply(void 0,t.scripts);const e=t.options;let n;self.initCodec&&self.initCodec(),e.codecType.startsWith("deflate")?n=self.Deflate:e.codecType.startsWith("inflate")&&(n=self.Inflate),O=function(t,e,n){return e.codecType.startsWith("deflate")?new D(t,e,n):e.codecType.startsWith("inflate")?new V(t,e,n):void 0}(n,e,t.config);},append:async t=>({data:await O.append(t.data)}),flush:()=>O.flush()};let O;addEventListener("message",(async t=>{const e=t.data,n=e.type,i=j[n];if(i)try{e.data&&(e.data=new Uint8Array(e.data));const t=await i(e)||{};if(t.type=n,t.data)try{t.data=t.data.buffer,postMessage(t,[t.data]);}catch(e){postMessage(t);}else postMessage(t);}catch(t){postMessage({type:n,error:{message:t.message,stack:t.stack}});}}));function P(t){return K(t.map((([t,e])=>new Array(t).fill(e,0,t))))}function K(t){return t.reduce(((t,e)=>t.concat(Array.isArray(e)?K(e):e)),[])}const G=[0,1,2,3].concat(...P([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function W(){const t=this;function e(t,e){let n=0;do{n|=1&t,t>>>=1,n<<=1;}while(--e>0);return n>>>1}t.build_tree=function(n){const i=t.dyn_tree,a=t.stat_desc.static_tree,r=t.stat_desc.elems;let s,o,l,_=-1;for(n.heap_len=0,n.heap_max=573,s=0;s<r;s++)0!==i[2*s]?(n.heap[++n.heap_len]=_=s,n.depth[s]=0):i[2*s+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=_<2?++_:0,i[2*l]=1,n.depth[l]=0,n.opt_len--,a&&(n.static_len-=a[2*l+1]);for(t.max_code=_,s=Math.floor(n.heap_len/2);s>=1;s--)n.pqdownheap(i,s);l=r;do{s=n.heap[1],n.heap[1]=n.heap[n.heap_len--],n.pqdownheap(i,1),o=n.heap[1],n.heap[--n.heap_max]=s,n.heap[--n.heap_max]=o,i[2*l]=i[2*s]+i[2*o],n.depth[l]=Math.max(n.depth[s],n.depth[o])+1,i[2*s+1]=i[2*o+1]=l,n.heap[1]=l++,n.pqdownheap(i,1);}while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],function(e){const n=t.dyn_tree,i=t.stat_desc.static_tree,a=t.stat_desc.extra_bits,r=t.stat_desc.extra_base,s=t.stat_desc.max_length;let o,l,_,d,c,f,u=0;for(d=0;d<=15;d++)e.bl_count[d]=0;for(n[2*e.heap[e.heap_max]+1]=0,o=e.heap_max+1;o<573;o++)l=e.heap[o],d=n[2*n[2*l+1]+1]+1,d>s&&(d=s,u++),n[2*l+1]=d,l>t.max_code||(e.bl_count[d]++,c=0,l>=r&&(c=a[l-r]),f=n[2*l],e.opt_len+=f*(d+c),i&&(e.static_len+=f*(i[2*l+1]+c)));if(0!==u){do{for(d=s-1;0===e.bl_count[d];)d--;e.bl_count[d]--,e.bl_count[d+1]+=2,e.bl_count[s]--,u-=2;}while(u>0);for(d=s;0!==d;d--)for(l=e.bl_count[d];0!==l;)_=e.heap[--o],_>t.max_code||(n[2*_+1]!=d&&(e.opt_len+=(d-n[2*_+1])*n[2*_],n[2*_+1]=d),l--);}}(n),function(t,n,i){const a=[];let r,s,o,l=0;for(r=1;r<=15;r++)a[r]=l=l+i[r-1]<<1;for(s=0;s<=n;s++)o=t[2*s+1],0!==o&&(t[2*s]=e(a[o]++,o));}(i,t.max_code,n.bl_count);};}function L(t,e,n,i,a){const r=this;r.static_tree=t,r.extra_bits=e,r.extra_base=n,r.elems=i,r.max_length=a;}W._length_code=[0,1,2,3,4,5,6,7].concat(...P([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),W.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],W.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],W.d_code=function(t){return t<256?G[t]:G[256+(t>>>7)]},W.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],L.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],L.static_l_desc=new L(L.static_ltree,W.extra_lbits,257,286,15),L.static_d_desc=new L(L.static_dtree,W.extra_dbits,0,30,15),L.static_bl_desc=new L(null,W.extra_blbits,0,19,7);function T(t,e,n,i,a){const r=this;r.good_length=t,r.max_lazy=e,r.nice_length=n,r.max_chain=i,r.func=a;}const q=[new T(0,0,0,0,0),new T(4,4,8,4,1),new T(4,5,16,8,1),new T(4,6,32,32,1),new T(4,4,16,16,2),new T(8,16,32,32,2),new T(8,16,128,128,2),new T(8,32,128,256,2),new T(32,128,258,1024,2),new T(32,258,258,4096,2)],R=["need dictionary","stream end","","","stream error","data error","","buffer error","",""];function F(t,e,n,i){const a=t[2*e],r=t[2*n];return a<r||a==r&&i[e]<=i[n]}function J(){const t=this;let e,n,i,a,r,s,o,l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v,A,U,S,z,I,E,C,M,B,H;const V=new W,D=new W,j=new W;let O,P,K,G,T,J,N,Q;function X(){let e;for(e=0;e<286;e++)M[2*e]=0;for(e=0;e<30;e++)B[2*e]=0;for(e=0;e<19;e++)H[2*e]=0;M[512]=1,t.opt_len=t.static_len=0,K=T=0;}function Y(t,e){let n,i=-1,a=t[1],r=0,s=7,o=4;0===a&&(s=138,o=3),t[2*(e+1)+1]=65535;for(let l=0;l<=e;l++)n=a,a=t[2*(l+1)+1],++r<s&&n==a||(r<o?H[2*n]+=r:0!==n?(n!=i&&H[2*n]++,H[32]++):r<=10?H[34]++:H[36]++,r=0,i=n,0===a?(s=138,o=3):n==a?(s=6,o=3):(s=7,o=4));}function Z(e){t.pending_buf[t.pending++]=e;}function $(t){Z(255&t),Z(t>>>8&255);}function tt(t,e){let n;const i=e;Q>16-i?(n=t,N|=n<<Q&65535,$(N),N=n>>>16-Q,Q+=i-16):(N|=t<<Q&65535,Q+=i);}function et(t,e){const n=2*t;tt(65535&e[n],65535&e[n+1]);}function nt(t,e){let n,i,a=-1,r=t[1],s=0,o=7,l=4;for(0===r&&(o=138,l=3),n=0;n<=e;n++)if(i=r,r=t[2*(n+1)+1],!(++s<o&&i==r)){if(s<l)do{et(i,H);}while(0!=--s);else 0!==i?(i!=a&&(et(i,H),s--),et(16,H),tt(s-3,2)):s<=10?(et(17,H),tt(s-3,3)):(et(18,H),tt(s-11,7));s=0,a=i,0===r?(o=138,l=3):i==r?(o=6,l=3):(o=7,l=4);}}function it(){16==Q?($(N),N=0,Q=0):Q>=8&&(Z(255&N),N>>>=8,Q-=8);}function at(e,n){let i,a,r;if(t.pending_buf[G+2*K]=e>>>8&255,t.pending_buf[G+2*K+1]=255&e,t.pending_buf[O+K]=255&n,K++,0===e?M[2*n]++:(T++,e--,M[2*(W._length_code[n]+256+1)]++,B[2*W.d_code(e)]++),0==(8191&K)&&z>2){for(i=8*K,a=m-p,r=0;r<30;r++)i+=B[2*r]*(5+W.extra_dbits[r]);if(i>>>=3,T<Math.floor(K/2)&&i<Math.floor(a/2))return !0}return K==P-1}function rt(e,n){let i,a,r,s,o=0;if(0!==K)do{i=t.pending_buf[G+2*o]<<8&65280|255&t.pending_buf[G+2*o+1],a=255&t.pending_buf[O+o],o++,0===i?et(a,e):(r=W._length_code[a],et(r+256+1,e),s=W.extra_lbits[r],0!==s&&(a-=W.base_length[r],tt(a,s)),i--,r=W.d_code(i),et(r,n),s=W.extra_dbits[r],0!==s&&(i-=W.base_dist[r],tt(i,s)));}while(o<K);et(256,e),J=e[513];}function st(){Q>8?$(N):Q>0&&Z(255&N),N=0,Q=0;}function ot(e,n,i){tt(0+(i?1:0),3),function(e,n,i){st(),J=8,i&&($(n),$(~n)),t.pending_buf.set(l.subarray(e,e+n),t.pending),t.pending+=n;}(e,n,!0);}function lt(e,n,i){let a,r,s=0;z>0?(V.build_tree(t),D.build_tree(t),s=function(){let e;for(Y(M,V.max_code),Y(B,D.max_code),j.build_tree(t),e=18;e>=3&&0===H[2*W.bl_order[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(),a=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=a&&(a=r)):a=r=n+5,n+4<=a&&-1!=e?ot(e,n,i):r==a?(tt(2+(i?1:0),3),rt(L.static_ltree,L.static_dtree)):(tt(4+(i?1:0),3),function(t,e,n){let i;for(tt(t-257,5),tt(e-1,5),tt(n-4,4),i=0;i<n;i++)tt(H[2*W.bl_order[i]+1],3);nt(M,t-1),nt(B,e-1);}(V.max_code+1,D.max_code+1,s+1),rt(M,B)),X(),i&&st();}function _t(t){lt(p>=0?p:-1,m-p,t),p=m,e.flush_pending();}function dt(){let t,n,i,a;do{if(a=_-v-m,0===a&&0===m&&0===v)a=r;else if(-1==a)a--;else if(m>=r+r-262){l.set(l.subarray(r,r+r),0),k-=r,m-=r,p-=r,t=u,i=t;do{n=65535&c[--i],c[i]=n>=r?n-r:0;}while(0!=--t);t=r,i=t;do{n=65535&d[--i],d[i]=n>=r?n-r:0;}while(0!=--t);a+=r;}if(0===e.avail_in)return;t=e.read_buf(l,m+v,a),v+=t,v>=3&&(f=255&l[m],f=(f<<w^255&l[m+1])&b);}while(v<262&&0!==e.avail_in)}function ct(t){let e,n,i=U,a=m,s=A;const _=m>r-262?m-(r-262):0;let c=C;const f=o,u=m+258;let h=l[a+s-1],b=l[a+s];A>=E&&(i>>=2),c>v&&(c=v);do{if(e=t,l[e+s]==b&&l[e+s-1]==h&&l[e]==l[a]&&l[++e]==l[a+1]){a+=2,e++;do{}while(l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&l[++a]==l[++e]&&a<u);if(n=258-(u-a),a=u-258,n>s){if(k=t,s=n,n>=c)break;h=l[a+s-1],b=l[a+s];}}}while((t=65535&d[t&f])>_&&0!=--i);return s<=v?s:v}function ft(e){return e.total_in=e.total_out=0,e.msg=null,t.pending=0,t.pending_out=0,n=113,a=0,V.dyn_tree=M,V.stat_desc=L.static_l_desc,D.dyn_tree=B,D.stat_desc=L.static_d_desc,j.dyn_tree=H,j.stat_desc=L.static_bl_desc,N=0,Q=0,J=8,X(),function(){_=2*r,c[u-1]=0;for(let t=0;t<u-1;t++)c[t]=0;S=q[z].max_lazy,E=q[z].good_length,C=q[z].nice_length,U=q[z].max_chain,m=0,p=0,v=0,x=A=2,y=0,f=0;}(),0}t.depth=[],t.bl_count=[],t.heap=[],M=[],B=[],H=[],t.pqdownheap=function(e,n){const i=t.heap,a=i[n];let r=n<<1;for(;r<=t.heap_len&&(r<t.heap_len&&F(e,i[r+1],i[r],t.depth)&&r++,!F(e,a,i[r],t.depth));)i[n]=i[r],n=r,r<<=1;i[n]=a;},t.deflateInit=function(e,n,a,_,f,p){return _||(_=8),f||(f=8),p||(p=0),e.msg=null,-1==n&&(n=6),f<1||f>9||8!=_||a<9||a>15||n<0||n>9||p<0||p>2?-2:(e.dstate=t,s=a,r=1<<s,o=r-1,h=f+7,u=1<<h,b=u-1,w=Math.floor((h+3-1)/3),l=new Uint8Array(2*r),d=[],c=[],P=1<<f+6,t.pending_buf=new Uint8Array(4*P),i=4*P,G=Math.floor(P/2),O=3*P,z=n,I=p,ft(e))},t.deflateEnd=function(){return 42!=n&&113!=n&&666!=n?-2:(t.pending_buf=null,c=null,d=null,l=null,t.dstate=null,113==n?-3:0)},t.deflateParams=function(t,e,n){let i=0;return -1==e&&(e=6),e<0||e>9||n<0||n>2?-2:(q[z].func!=q[e].func&&0!==t.total_in&&(i=t.deflate(1)),z!=e&&(z=e,S=q[z].max_lazy,E=q[z].good_length,C=q[z].nice_length,U=q[z].max_chain),I=n,i)},t.deflateSetDictionary=function(t,e,i){let a,s=i,_=0;if(!e||42!=n)return -2;if(s<3)return 0;for(s>r-262&&(s=r-262,_=i-s),l.set(e.subarray(_,_+s),0),m=s,p=s,f=255&l[0],f=(f<<w^255&l[1])&b,a=0;a<=s-3;a++)f=(f<<w^255&l[a+2])&b,d[a&o]=c[f],c[f]=a;return 0},t.deflate=function(_,h){let U,E,C,M,B;if(h>4||h<0)return -2;if(!_.next_out||!_.next_in&&0!==_.avail_in||666==n&&4!=h)return _.msg=R[4],-2;if(0===_.avail_out)return _.msg=R[7],-5;var H;if(e=_,M=a,a=h,42==n&&(E=8+(s-8<<4)<<8,C=(z-1&255)>>1,C>3&&(C=3),E|=C<<6,0!==m&&(E|=32),E+=31-E%31,n=113,Z((H=E)>>8&255),Z(255&H)),0!==t.pending){if(e.flush_pending(),0===e.avail_out)return a=-1,0}else if(0===e.avail_in&&h<=M&&4!=h)return e.msg=R[7],-5;if(666==n&&0!==e.avail_in)return _.msg=R[7],-5;if(0!==e.avail_in||0!==v||0!=h&&666!=n){switch(B=-1,q[z].func){case 0:B=function(t){let n,a=65535;for(a>i-5&&(a=i-5);;){if(v<=1){if(dt(),0===v&&0==t)return 0;if(0===v)break}if(m+=v,v=0,n=p+a,(0===m||m>=n)&&(v=m-n,m=n,_t(!1),0===e.avail_out))return 0;if(m-p>=r-262&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 1:B=function(t){let n,i=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m),0!==i&&(m-i&65535)<=r-262&&2!=I&&(x=ct(i)),x>=3)if(n=at(m-k,x-3),v-=x,x<=S&&v>=3){x--;do{m++,f=(f<<w^255&l[m+2])&b,i=65535&c[f],d[m&o]=c[f],c[f]=m;}while(0!=--x);m++;}else m+=x,x=0,f=255&l[m],f=(f<<w^255&l[m+1])&b;else n=at(0,255&l[m]),v--,m++;if(n&&(_t(!1),0===e.avail_out))return 0}return _t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);break;case 2:B=function(t){let n,i,a=0;for(;;){if(v<262){if(dt(),v<262&&0==t)return 0;if(0===v)break}if(v>=3&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m),A=x,g=k,x=2,0!==a&&A<S&&(m-a&65535)<=r-262&&(2!=I&&(x=ct(a)),x<=5&&(1==I||3==x&&m-k>4096)&&(x=2)),A>=3&&x<=A){i=m+v-3,n=at(m-1-g,A-3),v-=A-1,A-=2;do{++m<=i&&(f=(f<<w^255&l[m+2])&b,a=65535&c[f],d[m&o]=c[f],c[f]=m);}while(0!=--A);if(y=0,x=2,m++,n&&(_t(!1),0===e.avail_out))return 0}else if(0!==y){if(n=at(0,255&l[m-1]),n&&_t(!1),m++,v--,0===e.avail_out)return 0}else y=1,m++,v--;}return 0!==y&&(n=at(0,255&l[m-1]),y=0),_t(4==t),0===e.avail_out?4==t?2:0:4==t?3:1}(h);}if(2!=B&&3!=B||(n=666),0==B||2==B)return 0===e.avail_out&&(a=-1),0;if(1==B){if(1==h)tt(2,3),et(256,L.static_ltree),it(),1+J+10-Q<9&&(tt(2,3),et(256,L.static_ltree),it()),J=7;else if(ot(0,0,!1),3==h)for(U=0;U<u;U++)c[U]=0;if(e.flush_pending(),0===e.avail_out)return a=-1,0}}return 4!=h?0:1};}function N(){const t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0;}function Q(t){const e=new N,n=(i=t&&t.chunkSize?t.chunkSize:65536)+5*(Math.floor(i/16383)+1);var i;const a=new Uint8Array(n);let r=t?t.level:-1;void 0===r&&(r=-1),e.deflateInit(r),e.next_out=a,this.append=function(t,i){let r,s,o=0,l=0,_=0;const d=[];if(t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,r=e.deflate(0),0!=r)throw new Error("deflating: "+e.msg);e.next_out_index&&(e.next_out_index==n?d.push(new Uint8Array(a)):d.push(a.slice(0,e.next_out_index))),_+=e.next_out_index,i&&e.next_in_index>0&&e.next_in_index!=o&&(i(e.next_in_index),o=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return d.length>1?(s=new Uint8Array(_),d.forEach((function(t){s.set(t,l),l+=t.length;}))):s=d[0]||new Uint8Array(0),s}},this.flush=function(){let t,i,r=0,s=0;const o=[];do{if(e.next_out_index=0,e.avail_out=n,t=e.deflate(4),1!=t&&0!=t)throw new Error("deflating: "+e.msg);n-e.avail_out>0&&o.push(a.slice(0,e.next_out_index)),s+=e.next_out_index;}while(e.avail_in>0||0===e.avail_out);return e.deflateEnd(),i=new Uint8Array(s),o.forEach((function(t){i.set(t,r),r+=t.length;})),i};}N.prototype={deflateInit:function(t,e){const n=this;return n.dstate=new J,e||(e=15),n.dstate.deflateInit(n,t,e)},deflate:function(t){const e=this;return e.dstate?e.dstate.deflate(e,t):-2},deflateEnd:function(){const t=this;if(!t.dstate)return -2;const e=t.dstate.deflateEnd();return t.dstate=null,e},deflateParams:function(t,e){const n=this;return n.dstate?n.dstate.deflateParams(n,t,e):-2},deflateSetDictionary:function(t,e){const n=this;return n.dstate?n.dstate.deflateSetDictionary(n,t,e):-2},read_buf:function(t,e,n){const i=this;let a=i.avail_in;return a>n&&(a=n),0===a?0:(i.avail_in-=a,t.set(i.next_in.subarray(i.next_in_index,i.next_in_index+a),e),i.next_in_index+=a,i.total_in+=a,a)},flush_pending:function(){const t=this;let e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0));}};const X=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],Y=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],Z=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],$=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],tt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],et=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],nt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function it(){let t,e,n,i,a,r;function s(t,e,s,o,l,_,d,c,f,u,h){let b,w,p,x,g,y,m,k,v,A,U,S,z,I,E;A=0,g=s;do{n[t[e+A]]++,A++,g--;}while(0!==g);if(n[0]==s)return d[0]=-1,c[0]=0,0;for(k=c[0],y=1;y<=15&&0===n[y];y++);for(m=y,k<y&&(k=y),g=15;0!==g&&0===n[g];g--);for(p=g,k>g&&(k=g),c[0]=k,I=1<<y;y<g;y++,I<<=1)if((I-=n[y])<0)return -3;if((I-=n[g])<0)return -3;for(n[g]+=I,r[1]=y=0,A=1,z=2;0!=--g;)r[z]=y+=n[A],z++,A++;g=0,A=0;do{0!==(y=t[e+A])&&(h[r[y]++]=g),A++;}while(++g<s);for(s=r[p],r[0]=g=0,A=0,x=-1,S=-k,a[0]=0,U=0,E=0;m<=p;m++)for(b=n[m];0!=b--;){for(;m>S+k;){if(x++,S+=k,E=p-S,E=E>k?k:E,(w=1<<(y=m-S))>b+1&&(w-=b+1,z=m,y<E))for(;++y<E&&!((w<<=1)<=n[++z]);)w-=n[z];if(E=1<<y,u[0]+E>1440)return -3;a[x]=U=u[0],u[0]+=E,0!==x?(r[x]=g,i[0]=y,i[1]=k,y=g>>>S-k,i[2]=U-a[x-1]-y,f.set(i,3*(a[x-1]+y))):d[0]=U;}for(i[1]=m-S,A>=s?i[0]=192:h[A]<o?(i[0]=h[A]<256?0:96,i[2]=h[A++]):(i[0]=_[h[A]-o]+16+64,i[2]=l[h[A++]-o]),w=1<<m-S,y=g>>>S;y<E;y+=w)f.set(i,3*(U+y));for(y=1<<m-1;0!=(g&y);y>>>=1)g^=y;for(g^=y,v=(1<<S)-1;(g&v)!=r[x];)x--,S-=k,v=(1<<S)-1;}return 0!==I&&1!=p?-5:0}function o(s){let o;for(t||(t=[],e=[],n=new Int32Array(16),i=[],a=new Int32Array(15),r=new Int32Array(16)),e.length<s&&(e=[]),o=0;o<s;o++)e[o]=0;for(o=0;o<16;o++)n[o]=0;for(o=0;o<3;o++)i[o]=0;a.set(n.subarray(0,15),0),r.set(n.subarray(0,16),0);}this.inflate_trees_bits=function(n,i,a,r,l){let _;return o(19),t[0]=0,_=s(n,0,19,19,null,null,a,i,r,t,e),-3==_?l.msg="oversubscribed dynamic bit lengths tree":-5!=_&&0!==i[0]||(l.msg="incomplete dynamic bit lengths tree",_=-3),_},this.inflate_trees_dynamic=function(n,i,a,r,l,_,d,c,f){let u;return o(288),t[0]=0,u=s(a,0,n,257,$,tt,_,r,c,t,e),0!=u||0===r[0]?(-3==u?f.msg="oversubscribed literal/length tree":-4!=u&&(f.msg="incomplete literal/length tree",u=-3),u):(o(288),u=s(a,n,i,0,et,nt,d,l,c,t,e),0!=u||0===l[0]&&n>257?(-3==u?f.msg="oversubscribed distance tree":-5==u?(f.msg="incomplete distance tree",u=-3):-4!=u&&(f.msg="empty distance tree with lengths",u=-3),u):0)};}it.inflate_trees_fixed=function(t,e,n,i){return t[0]=9,e[0]=5,n[0]=Y,i[0]=Z,0};function at(){const t=this;let e,n,i,a,r=0,s=0,o=0,l=0,_=0,d=0,c=0,f=0,u=0,h=0;function b(t,e,n,i,a,r,s,o){let l,_,d,c,f,u,h,b,w,p,x,g,y,m,k,v;h=o.next_in_index,b=o.avail_in,f=s.bitb,u=s.bitk,w=s.write,p=w<s.read?s.read-w-1:s.end-w,x=X[t],g=X[e];do{for(;u<20;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(l=f&x,_=n,d=i,v=3*(d+l),0!==(c=_[v]))for(;;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15,y=_[v+2]+(f&X[c]),f>>=c,u-=c;u<15;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;for(l=f&g,_=a,d=r,v=3*(d+l),c=_[v];;){if(f>>=_[v+1],u-=_[v+1],0!=(16&c)){for(c&=15;u<c;)b--,f|=(255&o.read_byte(h++))<<u,u+=8;if(m=_[v+2]+(f&X[c]),f>>=c,u-=c,p-=y,w>=m)k=w-m,w-k>0&&2>w-k?(s.window[w++]=s.window[k++],s.window[w++]=s.window[k++],y-=2):(s.window.set(s.window.subarray(k,k+2),w),w+=2,k+=2,y-=2);else {k=w-m;do{k+=s.end;}while(k<0);if(c=s.end-k,y>c){if(y-=c,w-k>0&&c>w-k)do{s.window[w++]=s.window[k++];}while(0!=--c);else s.window.set(s.window.subarray(k,k+c),w),w+=c,k+=c,c=0;k=0;}}if(w-k>0&&y>w-k)do{s.window[w++]=s.window[k++];}while(0!=--y);else s.window.set(s.window.subarray(k,k+y),w),w+=y,k+=y,y=0;break}if(0!=(64&c))return o.msg="invalid distance code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3;l+=_[v+2],l+=f&X[c],v=3*(d+l),c=_[v];}break}if(0!=(64&c))return 0!=(32&c)?(y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,1):(o.msg="invalid literal/length code",y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,-3);if(l+=_[v+2],l+=f&X[c],v=3*(d+l),0===(c=_[v])){f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;break}}else f>>=_[v+1],u-=_[v+1],s.window[w++]=_[v+2],p--;}while(p>=258&&b>=10);return y=o.avail_in-b,y=u>>3<y?u>>3:y,b+=y,h-=y,u-=y<<3,s.bitb=f,s.bitk=u,o.avail_in=b,o.total_in+=h-o.next_in_index,o.next_in_index=h,s.write=w,0}t.init=function(t,r,s,o,l,_){e=0,c=t,f=r,i=s,u=o,a=l,h=_,n=null;},t.proc=function(t,w,p){let x,g,y,m,k,v,A,U=0,S=0,z=0;for(z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k;;)switch(e){case 0:if(v>=258&&m>=10&&(t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,p=b(c,f,i,u,a,h,t,w),z=w.next_in_index,m=w.avail_in,U=t.bitb,S=t.bitk,k=t.write,v=k<t.read?t.read-k-1:t.end-k,0!=p)){e=1==p?7:9;break}o=c,n=i,s=u,e=1;case 1:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>>=n[g+1],S-=n[g+1],y=n[g],0===y){l=n[g+2],e=6;break}if(0!=(16&y)){_=15&y,r=n[g+2],e=2;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}if(0!=(32&y)){e=7;break}return e=9,w.msg="invalid literal/length code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 2:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}r+=U&X[x],U>>=x,S-=x,o=f,n=a,s=h,e=3;case 3:for(x=o;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}if(g=3*(s+(U&X[x])),U>>=n[g+1],S-=n[g+1],y=n[g],0!=(16&y)){_=15&y,d=n[g+2],e=4;break}if(0==(64&y)){o=y,s=g/3+n[g+2];break}return e=9,w.msg="invalid distance code",p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 4:for(x=_;S<x;){if(0===m)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,m--,U|=(255&w.read_byte(z++))<<S,S+=8;}d+=U&X[x],U>>=x,S-=x,e=5;case 5:for(A=k-d;A<0;)A+=t.end;for(;0!==r;){if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);t.window[k++]=t.window[A++],v--,A==t.end&&(A=0),r--;}e=0;break;case 6:if(0===v&&(k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v&&(t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,k==t.end&&0!==t.read&&(k=0,v=k<t.read?t.read-k-1:t.end-k),0===v)))return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);p=0,t.window[k++]=l,v--,e=0;break;case 7:if(S>7&&(S-=8,m++,z--),t.write=k,p=t.inflate_flush(w,p),k=t.write,v=k<t.read?t.read-k-1:t.end-k,t.read!=t.write)return t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);e=8;case 8:return p=1,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);case 9:return p=-3,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p);default:return p=-2,t.bitb=U,t.bitk=S,w.avail_in=m,w.total_in+=z-w.next_in_index,w.next_in_index=z,t.write=k,t.inflate_flush(w,p)}},t.free=function(){};}const rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function st(t,e){const n=this;let i,a=0,r=0,s=0,o=0;const l=[0],_=[0],d=new at;let c=0,f=new Int32Array(4320);const u=new it;n.bitk=0,n.bitb=0,n.window=new Uint8Array(e),n.end=e,n.read=0,n.write=0,n.reset=function(t,e){e&&(e[0]=0),6==a&&d.free(t),a=0,n.bitk=0,n.bitb=0,n.read=n.write=0;},n.reset(t,null),n.inflate_flush=function(t,e){let i,a,r;return a=t.next_out_index,r=n.read,i=(r<=n.write?n.write:n.end)-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i,r==n.end&&(r=0,n.write==n.end&&(n.write=0),i=n.write-r,i>t.avail_out&&(i=t.avail_out),0!==i&&-5==e&&(e=0),t.avail_out-=i,t.total_out+=i,t.next_out.set(n.window.subarray(r,r+i),a),a+=i,r+=i),t.next_out_index=a,n.read=r,e},n.proc=function(t,e){let h,b,w,p,x,g,y,m;for(p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g;;){let k,v,A,U,S,z,I,E;switch(a){case 0:for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}switch(h=7&b,c=1&h,h>>>1){case 0:b>>>=3,w-=3,h=7&w,b>>>=h,w-=h,a=1;break;case 1:k=[],v=[],A=[[]],U=[[]],it.inflate_trees_fixed(k,v,A,U),d.init(k[0],v[0],A[0],0,U[0],0),b>>>=3,w-=3,a=6;break;case 2:b>>>=3,w-=3,a=3;break;case 3:return b>>>=3,w-=3,a=9,t.msg="invalid block type",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}break;case 1:for(;w<32;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if((~b>>>16&65535)!=(65535&b))return a=9,t.msg="invalid stored block lengths",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);r=65535&b,b=w=0,a=0!==r?2:0!==c?7:0;break;case 2:if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(0===y&&(g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y&&(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,y=g<n.read?n.read-g-1:n.end-g),0===y)))return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(e=0,h=r,h>x&&(h=x),h>y&&(h=y),n.window.set(t.read_buf(p,h),g),p+=h,x-=h,g+=h,y-=h,0!=(r-=h))break;a=0!==c?7:0;break;case 3:for(;w<14;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(s=h=16383&b,(31&h)>29||(h>>5&31)>29)return a=9,t.msg="too many length or distance symbols",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);if(h=258+(31&h)+(h>>5&31),!i||i.length<h)i=[];else for(m=0;m<h;m++)i[m]=0;b>>>=14,w-=14,o=0,a=4;case 4:for(;o<4+(s>>>10);){for(;w<3;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}i[rt[o++]]=7&b,b>>>=3,w-=3;}for(;o<19;)i[rt[o++]]=0;if(l[0]=7,h=u.inflate_trees_bits(i,l,_,f,t),0!=h)return -3==(e=h)&&(i=null,a=9),n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);o=0,a=5;case 5:for(;h=s,!(o>=258+(31&h)+(h>>5&31));){let r,d;for(h=l[0];w<h;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(h=f[3*(_[0]+(b&X[h]))+1],d=f[3*(_[0]+(b&X[h]))+2],d<16)b>>>=h,w-=h,i[o++]=d;else {for(m=18==d?7:d-14,r=18==d?11:3;w<h+m;){if(0===x)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);e=0,x--,b|=(255&t.read_byte(p++))<<w,w+=8;}if(b>>>=h,w-=h,r+=b&X[m],b>>>=m,w-=m,m=o,h=s,m+r>258+(31&h)+(h>>5&31)||16==d&&m<1)return i=null,a=9,t.msg="invalid bit length repeat",e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d=16==d?i[m-1]:0;do{i[m++]=d;}while(0!=--r);o=m;}}if(_[0]=-1,S=[],z=[],I=[],E=[],S[0]=9,z[0]=6,h=s,h=u.inflate_trees_dynamic(257+(31&h),1+(h>>5&31),i,S,z,I,E,f,t),0!=h)return -3==h&&(i=null,a=9),e=h,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);d.init(S[0],z[0],f,I[0],f,E[0]),a=6;case 6:if(n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,1!=(e=d.proc(n,t,e)))return n.inflate_flush(t,e);if(e=0,d.free(t),p=t.next_in_index,x=t.avail_in,b=n.bitb,w=n.bitk,g=n.write,y=g<n.read?n.read-g-1:n.end-g,0===c){a=0;break}a=7;case 7:if(n.write=g,e=n.inflate_flush(t,e),g=n.write,y=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);a=8;case 8:return e=1,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);case 9:return e=-3,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e);default:return e=-2,n.bitb=b,n.bitk=w,t.avail_in=x,t.total_in+=p-t.next_in_index,t.next_in_index=p,n.write=g,n.inflate_flush(t,e)}}},n.free=function(t){n.reset(t,null),n.window=null,f=null;},n.set_dictionary=function(t,e,i){n.window.set(t.subarray(e,e+i),0),n.read=n.write=i;},n.sync_point=function(){return 1==a?1:0};}const ot=[0,0,255,255];function lt(){const t=this;function e(t){return t&&t.istate?(t.total_in=t.total_out=0,t.msg=null,t.istate.mode=7,t.istate.blocks.reset(t,null),0):-2}t.mode=0,t.method=0,t.was=[0],t.need=0,t.marker=0,t.wbits=0,t.inflateEnd=function(e){return t.blocks&&t.blocks.free(e),t.blocks=null,0},t.inflateInit=function(n,i){return n.msg=null,t.blocks=null,i<8||i>15?(t.inflateEnd(n),-2):(t.wbits=i,n.istate.blocks=new st(n,1<<i),e(n),0)},t.inflate=function(t,e){let n,i;if(!t||!t.istate||!t.next_in)return -2;const a=t.istate;for(e=4==e?-5:0,n=-5;;)switch(a.mode){case 0:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,8!=(15&(a.method=t.read_byte(t.next_in_index++)))){a.mode=13,t.msg="unknown compression method",a.marker=5;break}if(8+(a.method>>4)>a.wbits){a.mode=13,t.msg="invalid window size",a.marker=5;break}a.mode=1;case 1:if(0===t.avail_in)return n;if(n=e,t.avail_in--,t.total_in++,i=255&t.read_byte(t.next_in_index++),((a.method<<8)+i)%31!=0){a.mode=13,t.msg="incorrect header check",a.marker=5;break}if(0==(32&i)){a.mode=7;break}a.mode=2;case 2:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need=(255&t.read_byte(t.next_in_index++))<<24&4278190080,a.mode=3;case 3:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<16&16711680,a.mode=4;case 4:if(0===t.avail_in)return n;n=e,t.avail_in--,t.total_in++,a.need+=(255&t.read_byte(t.next_in_index++))<<8&65280,a.mode=5;case 5:return 0===t.avail_in?n:(n=e,t.avail_in--,t.total_in++,a.need+=255&t.read_byte(t.next_in_index++),a.mode=6,2);case 6:return a.mode=13,t.msg="need dictionary",a.marker=0,-2;case 7:if(n=a.blocks.proc(t,n),-3==n){a.mode=13,a.marker=0;break}if(0==n&&(n=e),1!=n)return n;n=e,a.blocks.reset(t,a.was),a.mode=12;case 12:return 1;case 13:return -3;default:return -2}},t.inflateSetDictionary=function(t,e,n){let i=0,a=n;if(!t||!t.istate||6!=t.istate.mode)return -2;const r=t.istate;return a>=1<<r.wbits&&(a=(1<<r.wbits)-1,i=n-a),r.blocks.set_dictionary(e,i,a),r.mode=7,0},t.inflateSync=function(t){let n,i,a,r,s;if(!t||!t.istate)return -2;const o=t.istate;if(13!=o.mode&&(o.mode=13,o.marker=0),0===(n=t.avail_in))return -5;for(i=t.next_in_index,a=o.marker;0!==n&&a<4;)t.read_byte(i)==ot[a]?a++:a=0!==t.read_byte(i)?0:4-a,i++,n--;return t.total_in+=i-t.next_in_index,t.next_in_index=i,t.avail_in=n,o.marker=a,4!=a?-3:(r=t.total_in,s=t.total_out,e(t),t.total_in=r,t.total_out=s,o.mode=7,0)},t.inflateSyncPoint=function(t){return t&&t.istate&&t.istate.blocks?t.istate.blocks.sync_point():-2};}function _t(){}function dt(t){const e=new _t,n=t&&t.chunkSize?Math.floor(2*t.chunkSize):131072,i=new Uint8Array(n);let a=!1;e.inflateInit(),e.next_out=i,this.append=function(t,r){const s=[];let o,l,_=0,d=0,c=0;if(0!==t.length){e.next_in_index=0,e.next_in=t,e.avail_in=t.length;do{if(e.next_out_index=0,e.avail_out=n,0!==e.avail_in||a||(e.next_in_index=0,a=!0),o=e.inflate(0),a&&-5===o){if(0!==e.avail_in)throw new Error("inflating: bad input")}else if(0!==o&&1!==o)throw new Error("inflating: "+e.msg);if((a||1===o)&&e.avail_in===t.length)throw new Error("inflating: bad input");e.next_out_index&&(e.next_out_index===n?s.push(new Uint8Array(i)):s.push(i.slice(0,e.next_out_index))),c+=e.next_out_index,r&&e.next_in_index>0&&e.next_in_index!=_&&(r(e.next_in_index),_=e.next_in_index);}while(e.avail_in>0||0===e.avail_out);return s.length>1?(l=new Uint8Array(c),s.forEach((function(t){l.set(t,d),d+=t.length;}))):l=s[0]||new Uint8Array(0),l}},this.flush=function(){e.inflateEnd();};}_t.prototype={inflateInit:function(t){const e=this;return e.istate=new lt,t||(t=15),e.istate.inflateInit(e,t)},inflate:function(t){const e=this;return e.istate?e.istate.inflate(e,t):-2},inflateEnd:function(){const t=this;if(!t.istate)return -2;const e=t.istate.inflateEnd(t);return t.istate=null,e},inflateSync:function(){const t=this;return t.istate?t.istate.inflateSync(t):-2},inflateSetDictionary:function(t,e){const n=this;return n.istate?n.istate.inflateSetDictionary(n,t,e):-2},read_byte:function(t){return this.next_in[t]},read_buf:function(t,e){return this.next_in.subarray(t,t+e)}},self.initCodec=()=>{self.Deflate=Q,self.Inflate=dt;};\n\n\t\t',
          e = URL.createObjectURL(new Blob([t], { type: "text/javascript" }));
        V({ workerScripts: { inflate: [e], deflate: [e] } });
      }
    })(),
      V({ Deflate: S, Inflate: q });
    var ve = class extends s {
      constructor(t, e = {}) {
        super("/" + t.filename, e),
          (this.raw = null),
          (this.content = null),
          (this.raw = t);
      }
      get name() {
        const t = (this.raw.filename || "").split("/");
        return t[t.length - 1];
      }
      get directory() {
        return this.raw.directory;
      }
      async readAsText() {
        return this.raw.directory
          ? null
          : await this.raw.getData(new Nt(), { onprogress: (t, e) => {} });
      }
      async readAsBlob() {
        if (this.raw.directory) return null;
        const t = this.mime || "application/oct-stream";
        return await this.raw.getData(new qt(t), { onprogress: (t, e) => {} });
      }
    };
    const ke = Mt;
    var Ae = class extends ke {
      constructor(t, e = {}) {
        super(),
          (this.url = t),
          (this.preventHeadRequest = e.preventHeadRequest),
          (this.useRangeHeader = e.useRangeHeader),
          (this.forceRangeRequests = e.forceRangeRequests),
          (this.options = Object.assign({}, e)),
          delete this.options.preventHeadRequest,
          delete this.options.useRangeHeader,
          delete this.options.forceRangeRequests,
          delete this.options.useXHR;
      }
      async init() {
        if ((super.init(), this.preventHeadRequest))
          await f.getFetchData(this, this.options);
        else {
          const t = await f.sendFetchRequest(
            f.HTTP_METHOD_HEAD,
            this.url,
            this.options
          );
          if (
            ((this.size = Number(t.headers.get(f.HTTP_HEADER_CONTENT_LENGTH))),
            !this.forceRangeRequests &&
              this.useRangeHeader &&
              t.headers.get(f.HTTP_HEADER_ACCEPT_RANGES) !== f.HTTP_RANGE_UNIT)
          )
            throw new Error(f.ERR_HTTP_RANGE);
          void 0 === this.size && (await f.getFetchData(this, this.options));
        }
      }
      async readUint8Array(t, e) {
        if (this.useRangeHeader) {
          const n = await f.sendFetchRequest(
            f.HTTP_METHOD_GET,
            this.url,
            this.options,
            Object.assign({}, this.options.headers, {
              [f.HTTP_HEADER_RANGE]:
                f.HTTP_RANGE_UNIT + "=" + t + "-" + (t + e - 1),
            })
          );
          if (206 !== n.status) throw new Error(f.ERR_HTTP_RANGE);
          return new Uint8Array(await n.arrayBuffer());
        }
        return (
          this.data || (await f.getFetchData(this, this.options)),
          new Uint8Array(this.data.subarray(t, t + e))
        );
      }
    };
    var Ee = class extends g {
      constructor(t, e = {}) {
        super(t, e),
          (this.BIG_FILE_SIZE = 10485760),
          (this.description = "epub \u7535\u5b50\u4e66\u89e3\u6790\u5668"),
          (this.renders = {
            seperated: {
              name: "\u7ae0\u8282\u9605\u8bfb\u6a21\u5f0f",
              render: "flow.seperated",
            },
            scroll: { name: "\u6eda\u52a8\u6a21\u5f0f", render: "flow.scroll" },
            swipe: { name: "\u7ffb\u9875\u6a21\u5f0f", render: "flow.swipe" },
            default: "seperated",
          }),
          (this.manifest = {});
      }
      async exeOpen() {
        await this.readFile(), await this.parse();
      }
      async readFile() {
        let t = null;
        if (File.prototype.isPrototypeOf(this.original.src))
          t = new It(this.original.src);
        else if ("string" === typeof this.original.src) {
          const e = await f.supportRange(this.original.src);
          if (!e || e < this.BIG_FILE_SIZE) {
            const e = await this.readAsBuffer();
            t = new Zt(e.toUint8Array());
          } else
            t = this.original.src.isURL("http")
              ? new Qt(this.original.src)
              : new Ae(this.original.src);
        } else {
          const e = await this.readAsBuffer();
          t = new Zt(e.toUint8Array());
        }
        const e = new oe(t),
          n = await e.getEntries();
        if (0 === n.length) return !1;
        n.forEach((t) => {
          if (!t.directory) {
            const e = new ve(t);
            this.attachEntry(e);
          }
        });
      }
      async parse() {
        const t = this.getEntry("/META-INF/container.xml");
        let e = t ? await t.readAsXML() : null,
          n = null;
        if (!e)
          return Promise.reject(
            "\u65e0\u6548\u7684\u7535\u5b50\u4e66\u683c\u5f0f"
          );
        {
          const t = e.querySelector("rootfile");
          n = (t ? t.getAttribute("full-path") : null).getFullPath();
        }
        await this.parseOPF(n);
      }
      async parseOPF(t) {
        let e = this.getEntry(t);
        if (!e) return Promise.reject("\u65e0\u6548\u7684epub\u683c\u5f0f");
        e = await e.readAsXML();
        const n = e.querySelector("manifest");
        n &&
          n.querySelectorAll("item").forEach((e) => {
            const n = e.getAttribute("href").getFullPath(t),
              i = this.getEntry(n);
            i &&
              ((i.mime = e.getAttribute("media-type") || null),
              (i.id = e.getAttribute("id") || null),
              (this.manifest[i.id] = i));
          });
        const i = e.querySelector("metadata");
        if (i) {
          const t = {
            name: "dc:title",
            language: "dc:language",
            author: "dc:creator",
            producer: "dc:contributor",
            date: "dc:date",
          };
          Object.keys(t).forEach((e) => {
            const n = i.getElementsByTagName(t[e]);
            n.length > 0 &&
              (this.meta[e] =
                n[0].textContent || n[0].getAttribute("content") || null);
          });
          const e = Array.prototype.filter.call(
            i.getElementsByTagName("dc:identifier"),
            function (t) {
              return "uuid" === t.getAttribute("opf:scheme");
            }
          );
          e.length > 0 &&
            ((this.meta.uuid = e[0].textContent), (this.guid = this.meta.uuid));
          let n = i.querySelector("meta[name=cover]");
          if (n) {
            const t = this.getEntryById(n.getAttribute("content")) || null,
              e = await t.readAsBlob();
            this.meta.cover = e ? await e.toDataURL() : null;
          }
        }
        if (this.META_ONLY) return !0;
        const r = e.querySelector("spine"),
          s = r ? this.getEntryById(r.getAttribute("toc")) : null;
        r &&
          ((this.sections = []),
          r.querySelectorAll("itemref").forEach((t) => {
            const e = this.getEntryById(t.getAttribute("idref"));
            e &&
              (this.sections.push(
                new a(e, { sequence: this.sections.length, resource: this })
              ),
              (e.sequence = this.sections.length - 1));
          })),
          await this.parseNcx(s ? s.path : null);
      }
      async parseNcx(t) {
        const e = this.getEntry(t);
        let n = null;
        if (((n = e ? await e.readAsXML("text/html") : null), n)) {
          const e = n.querySelector("navMap"),
            i = this;
          (this.toc = []), (this.tocMap = {});
          const r = async function (e, n = 0, s = -1) {
            if (!e) return null;
            const a = [],
              l = new o(
                {
                  id: e.getAttribute("id") || null,
                  order: (e.getAttribute("playOrder") || "").toNumber(),
                  depth: n,
                  path: null,
                  children: [],
                },
                i
              );
            (l.parent = s),
              e.childNodes.forEach((e) => {
                if (e.isTypeOf("#text"));
                else if (e.isTypeOf("navPoint")) a.push(e);
                else if (e.isTypeOf("navLabel")) {
                  const t = e.querySelector("text");
                  l.title = t ? t.textContent.trim() : null;
                } else if (e.isTypeOf("content")) {
                  const n = e.getAttribute("src") || null;
                  (l.path = n ? n.getFullPath(t).toLowerCase() : null),
                    e.childNodes.forEach((t) => {
                      t.isTypeOf("navPoint") && a.push(t);
                    });
                }
              }),
              l.title &&
                ((i.tocMap[l.id] = l), (l.seq = i.toc.length), i.toc.push(l));
            for (let t = 0; t < a.length; t++) {
              const e = await r(a[t], n + 1, l.seq);
              l.children.push(e);
            }
            const c = i.getEntry(l.path);
            return c && (l.section = i.getSection(c.sequence)), l;
          };
          await r(e, 0);
        }
      }
      getEntryById(t) {
        return (t && this.manifest[t]) || null;
      }
    };
    const Ue = {
      "image/jpg": ".jpg",
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
      "image/webp": ".webp",
      "image/raw": ".raw",
    };
    function Se(t) {
      return (
        t instanceof ArrayBuffer && (t = new Uint8Array(t)),
        new TextDecoder("utf-8").decode(t)
      );
    }
    const ze = function (t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        e += (s = t[n]).length;
      }
      var i = new Uint8Array(e),
        r = 0;
      for (n = 0; n < t.length; n++) {
        var s = t[n];
        i.set(s, r), (r += s.length);
      }
      return i;
    };
    class Te {
      constructor(t) {
        (this.capacity = t),
          (this.fragment_list = []),
          (this.cur_fragment = new Re(t)),
          this.fragment_list.push(this.cur_fragment);
      }
      write(t) {
        this.cur_fragment.write(t) ||
          ((this.cur_fragment = new Re(this.capacity)),
          this.fragment_list.push(this.cur_fragment),
          this.cur_fragment.write(t));
      }
      get(t) {
        for (var e = 0; e < this.fragment_list.length; ) {
          var n = this.fragment_list[e];
          if (t < n.size) return n.get(t);
          (t -= n.size), (e += 1);
        }
        return null;
      }
      size() {
        for (var t = 0, e = 0; e < this.fragment_list.length; e++)
          t += this.fragment_list[e].size;
        return t;
      }
      shrink() {
        for (
          var t = new Uint8Array(this.size()), e = 0, n = 0;
          n < this.fragment_list.length;
          n++
        ) {
          var i = this.fragment_list[n];
          i.full() ? t.set(i.buffer, e) : t.set(i.buffer.slice(0, i.size), e),
            (e += i.size);
        }
        return t;
      }
    }
    class Re {
      constructor(t) {
        (this.buffer = new Uint8Array(t)), (this.capacity = t), (this.size = 0);
      }
      write(t) {
        return (
          !(this.size >= this.capacity) &&
          ((this.buffer[this.size] = t), (this.size += 1), !0)
        );
      }
      full() {
        return this.size === this.capacity;
      }
      get(t) {
        return this.buffer[t];
      }
    }
    var Le = class {
      clean() {
        (this.buffer = null), (this.view = null);
      }
      constructor(t) {
        (this.view = new DataView(t)),
          (this.buffer = this.view.buffer),
          (this.offset = 0),
          (this.header = null);
      }
      isKF8() {
        return 8 === this.mobi_header.min_version;
      }
      isPrc() {
        return 5 === this.mobi_header.min_version;
      }
      async parse() {
        this.parseNCX(),
          this.parseFdst(),
          this.parseFragment(),
          this.parseSkeleton(),
          this.parseGuide(),
          8 === this.mobi_header.min_version
            ? await this.buildKF8Parts()
            : ((this.flows = []), (this.flowinfo = []));
      }
      async buildKF8Parts() {
        this.flows = [];
        const t = this.read_text().encodeAsBuffer();
        for (let e = 0; e < this.fdsttbl.length; e++) {
          const n = this.fdsttbl[e],
            i = this.fdsttbl[e + 1];
          this.flows.push(t.slice(n, i));
        }
        {
          const t = this.flows[0];
          (this.flows[0] = ""),
            (this.parts = []),
            (this.pblobs = []),
            (this.partinfo = []);
          let e = 0,
            n = 0,
            i = `Chapter-${n}.xhtml`;
          for (let r = 0; r < this.skeltbl.length; r++) {
            let [s, a, o, l, c] = this.skeltbl[r],
              d = l + c,
              h = t.slice(l, d),
              u = "0";
            for (let n = 0; n < o; n++) {
              let [s, a, o, c, f, p] = this.fragtbl[e];
              (u = a.slice(12, -2)), 0 === n && (i = `Chapter-${o}.xhtml`);
              let m = t.slice(d, d + p);
              s -= l;
              let g = h.slice(0, s).decodeString(),
                _ = h.slice(s).decodeString(),
                x = s;
              {
                let e = 0;
                const n = (e) => {
                    e = e.toLowerCase();
                    for (let n = 0; n <= 400; n++) {
                      if (
                        t
                          .slice(l + n, l + n + e.length)
                          .decodeString()
                          .toLowerCase() === e
                      )
                        return n;
                    }
                    for (let n = 0; n <= 400; n++) {
                      if (
                        t
                          .slice(l - n, l - n + e.length)
                          .decodeString()
                          .toLowerCase() === e
                      )
                        return 0 - n;
                    }
                    return !1;
                  },
                  i = ["<?xml", "<!DOCTYPE", "<html", "<"];
                for (let t = 0; t < i.length; t++) {
                  const r = n(i[t]);
                  if (!1 !== r) {
                    e = r;
                    break;
                  }
                }
                if (0 !== e) {
                  this.skeltbl[r][3] = l + e;
                  let n = d + e;
                  if (
                    ((h = t.slice(this.skeltbl[r][3], n)),
                    ">" !== h.slice(h.byteLength - 1).decodeString())
                  ) {
                    for (let e = n; e < Math.min(n + 10, t.byteLength); e++) {
                      if (">" === t.slice(e, e + 1).decodeString()) {
                        n = e + 1;
                        break;
                      }
                    }
                    h = t.slice(this.skeltbl[r][3], n);
                  }
                  if (
                    ((m = t.slice(n, n + p)),
                    (g = h.slice(0, s).decodeString()),
                    (_ = h.slice(s).decodeString()),
                    _.indexOf(">") < _.indexOf("<") ||
                      g.lastIndexOf(">") < g.lastIndexOf("<"))
                  ) {
                    const t = `aid="${u}"`,
                      e = h.decodeString(),
                      n = e.indexOf(t);
                    if (n > -1) {
                      for (
                        let i = e.bytesBetweenIndex(0, n) + t.length;
                        i < h.byteLength;
                        i++
                      ) {
                        if (">" === h.slice(i, i + 1).decodeString()) {
                          x = i + 1;
                          break;
                        }
                      }
                    }
                  }
                  l = this.skeltbl[r][3];
                }
              }
              s !== x && ((s = x), (this.fragtbl[e][0] = x + l));
              const w = h.slice(0, s),
                b = h.slice(s),
                y = new Uint8Array(w.byteLength + b.byteLength + m.byteLength);
              y.set(w.toUint8Array(), 0),
                y.set(m.toUint8Array(), w.byteLength),
                y.set(b.toUint8Array(), w.byteLength + m.byteLength),
                (h = y.buffer),
                (d += p),
                e++;
            }
            n++,
              this.pblobs.push(h),
              this.parts.push(h.decodeString()),
              this.partinfo.push([s, "Text", i, l, d, u]);
          }
        }
        {
          this.flowinfo || (this.flowinfo = []),
            this.flowinfo.push([null, null, null, null, null]);
          const t = /<svg[^>]*>([\s\S]*?)<\/svg>/gi,
            e = /<image[^>]*>/gi,
            n = this.flows.length,
            i = [],
            r = [],
            s = (t, e = null) => {
              let n = null,
                r = null,
                s = null;
              if (t.indexOf("[CDATA[") >= 0) (n = "css"), (r = "inline");
              else if (((n = "css"), (r = "file"), (s = "Styles"), !e)) {
                e = `style${i.length}.css`;
              }
              return [n, r, s, e, "text/css"];
            };
          for (let o = 1; o < n; o++) {
            let n = this.flows[o];
            const a = 4 - (o + "").length;
            let l = o + "";
            a > 0 && (l = "0".repeat(a) + l);
            let c = n.decodeString();
            const d = c.match(t);
            let h,
              u = null,
              f = null,
              p = null,
              m = null;
            if (d && d.length > 0)
              for (let t = 0; t < d.length; t++) {
                const s = d[t];
                if (
                  ((c = c.replace(s, "")),
                  (u = "inline"),
                  (n = null),
                  s.match(e))
                ) {
                  const e = s
                    .replace(/xlink:href/gi, "xlink-href")
                    .toDOMElement()
                    .querySelector("image[xlink-href]")
                    .getAttribute("xlink-href");
                  if (e) {
                    let [i, r] = e.replace(/kindle:embed:/gi, "").split("?");
                    (r = r.parseAsQuery()), (i = this.decode32(i));
                    (n = await this.readImageAsDataURL(
                      i,
                      r.mime ? r.mime : "image/raw"
                    )),
                      (f = "images/svg"),
                      (p =
                        "" +
                        (l + (t > 0 ? "-" + t : "")) +
                        Ue[r.mime || "image/raw"]),
                      (h = "svg-image"),
                      (m = r.mime || null);
                  }
                } else
                  (n = s),
                    (f = "svg"),
                    (p = l + (t > 0 ? "-" + t : "") + ".svg"),
                    (n = null),
                    (h = "svg"),
                    (m = "text/svg");
                n && (i.push(n), r.push([h, u, f, p, m]));
              }
            else
              "" !== c
                ? (i.push(c), r.push(s(c, l + ".css")))
                : (i.push(""), r.push([null, null, null, null, null]));
          }
          const a = 1;
          for (let o = 0; o < i.length; o++)
            (this.flows[a + o] = i[o]), (this.flowinfo[a + o] = r[o]);
        }
      }
      getUint8() {
        var t = this.view.getUint8(this.offset);
        return (this.offset += 1), t;
      }
      getUint16() {
        var t = this.view.getUint16(this.offset);
        return (this.offset += 2), t;
      }
      getUint32() {
        var t = this.view.getUint32(this.offset);
        return (this.offset += 4), t;
      }
      getStr(t) {
        var e = Se(this.buffer.slice(this.offset, this.offset + t));
        return (this.offset += t), e;
      }
      skip(t) {
        this.offset += t;
      }
      setoffset(t) {
        this.offset = t;
      }
      get_record_extrasize(t, e) {
        for (var n = t.length - 1, i = 0, r = 15; r > 0; r--)
          if (e & (1 << r)) {
            var s = this.buffer_get_varlen(t, n),
              a = s[0],
              o = s[1];
            (n = s[2]), (n -= a - o), (i += a);
          }
        1 & e && (i += 1 + (3 & t[n]));
        return i;
      }
      buffer_get_varlen(t, e) {
        for (var n = 0, i = 0, r = 0, s = 0, a = 0; ; a++) {
          var o = t[e];
          if (
            ((i |= (127 & o) << s),
            (s += 7),
            (n += 1),
            (e -= 1),
            (r += 1) >= 4 || (128 & o) > 0)
          )
            break;
        }
        return [i, n, e];
      }
      decode32(t) {
        if ("string" === typeof t) {
          t = new TextEncoder().encode(t);
        }
        const e = [
          1, 32, 1024, 32768, 1048576, 33554432, 1073741824, 34359738368,
        ];
        let n = 0,
          i = 0,
          r = t.length,
          s = 0;
        for (let a = 0; a < r; a++) {
          const o = String.fromCharCode(t[r - a - 1]);
          let l = null;
          (l =
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(o) > -1
              ? o.charCode() - "0".charCode()
              : o.charCode() - "A".charCode() + 10),
            i < e.length ? (s = e[i]) : (s *= 32),
            i++,
            0 !== l && (n += l * s);
        }
        return n;
      }
      encode32(t, e = 4) {
        let n = "",
          i = t;
        for (; 0 !== i; ) {
          const t = Math.floor(i / 32);
          (n = "0123456789ABCDEFGHIJKLMNOPQRSTUV"[i % 32] + n), (i = t);
        }
        "" === n && (n = "0");
        const r = e - n.length;
        return r > 0 && (n = "0".repeat(r) + n), n;
      }
      read_buffer(t, e = 1) {
        return this.buffer.slice(t, t + e);
      }
      read_buffer_idx(t, e = 1) {
        if (t >= this.reclist[t] || !this.reclist[t]) return null;
        const n = this.reclist[t].offset,
          i = this.reclist[t + e].offset;
        return this.buffer.slice(n, i);
      }
      read_text_record(t) {
        var e = this.mobi_header.extra_flags,
          n = this.reclist[t].offset,
          i = this.reclist[t + 1].offset,
          r = new Uint8Array(this.buffer.slice(n, i)),
          s = this.get_record_extrasize(r, e);
        switch (
          ((r = new Uint8Array(this.buffer.slice(n, i - s))),
          this.palm_header.compression)
        ) {
          case 17480:
            return this.huffUnpack(r);
          case 2:
            return this.lz77Unpack(r);
          default:
            return r;
        }
      }
      read_text() {
        if (this._raw_text) return this._raw_text;
        let t = this.palm_header.record_count,
          e = [];
        for (let i = 1; i <= t; i++) e.push(this.read_text_record(i));
        let n = ze(e);
        return (this._raw_text = Se(n));
      }
      read_text_idx(t) {
        const e = [this.read_text_record(t)];
        return Se(ze(e));
      }
      read_str_idx(t, e = 1) {
        return this.read_buffer_idx(t, e).toUint8Array().decodeString();
      }
      read_image(t, e) {
        var n = this.mobi_header.first_image_idx,
          i = this.reclist[n + t].offset,
          r = this.reclist[n + t + 1].offset,
          s = new Uint8Array(this.buffer.slice(i, r));
        const a = e ? { type: e } : void 0;
        return new Blob([s.buffer], a);
      }
      async readImageAsDataURL(t) {
        return new Promise((e) => {
          const n = this.read_image(t - 1);
          if (!n) return e(null);
          const i = new FileReader();
          (i.onload = function (t) {
            e(t.target.result);
          }),
            i.readAsDataURL(n);
        });
      }
      async readImageAsObjectURL(t, e = "image/raw") {
        const n = this.read_image(t - 1);
        return n ? n.toObjectURL(e) : null;
      }
      async readBlob(t, e = "image/raw") {
        return this.read_image(t - 1, e);
      }
      load() {
        (this.header = this.load_pdbheader()),
          (this.reclist = this.load_reclist()),
          this.load_record0();
      }
      load_pdbheader() {
        const t = {};
        return (
          (t.name = this.getStr(32)),
          (t.attr = this.getUint16()),
          (t.version = this.getUint16()),
          (t.ctime = this.getUint32()),
          (t.mtime = this.getUint32()),
          (t.btime = this.getUint32()),
          (t.mod_num = this.getUint32()),
          (t.appinfo_offset = this.getUint32()),
          (t.sortinfo_offset = this.getUint32()),
          (t.type = this.getStr(4)),
          (t.creator = this.getStr(4)),
          (t.uid = this.getUint32()),
          (t.next_rec = this.getUint32()),
          (t.record_num = this.getUint16()),
          t
        );
      }
      load_reclist() {
        for (var t = [], e = 0; e < this.header.record_num; e++) {
          var n = {};
          (n.offset = this.getUint32()), (n.attr = this.getUint32()), t.push(n);
        }
        return t;
      }
      load_record0() {
        (this.palm_header = this.load_record0_header()),
          (this.mobi_header = this.load_mobi_header()),
          (this.exth_header = this.load_exth_header()),
          this.load_huff_dict(),
          this.setoffset(
            this.reclist[0].offset + this.mobi_header.full_name_offset
          ),
          (this.header.name = this.getStr(this.mobi_header.full_name_length));
      }
      load_record0_header() {
        var t = {},
          e = this.reclist[0];
        return (
          this.setoffset(e.offset),
          (t.compression = this.getUint16()),
          this.skip(2),
          (t.text_length = this.getUint32()),
          (t.record_count = this.getUint16()),
          (t.record_size = this.getUint16()),
          (t.encryption_type = this.getUint16()),
          this.skip(2),
          t
        );
      }
      load_mobi_header() {
        var t = {},
          e = this.offset;
        return (
          (t.identifier = this.getStr(4)),
          (t.header_length = this.getUint32()),
          (t.mobi_type = this.getUint32()),
          (t.text_encoding = this.getUint32()),
          (t.uid = this.getUint32()),
          (t.generator_version = this.getUint32()),
          (t.meta_orth_index = this.getUint32()),
          (t.meta_infl_index = this.getUint32()),
          (t.index_name = this.getUint32()),
          (t.index_key = this.getUint32()),
          (t.extra_index_0 = this.getUint32()),
          (t.extra_index_1 = this.getUint32()),
          (t.extra_index_2 = this.getUint32()),
          (t.extra_index_3 = this.getUint32()),
          (t.extra_index_4 = this.getUint32()),
          (t.extra_index_5 = this.getUint32()),
          (t.first_nonbook_index = this.getUint32()),
          (t.full_name_offset = this.getUint32()),
          (t.full_name_length = this.getUint32()),
          (t.language = this.getUint32()),
          (t.input_language = this.getUint32()),
          (t.output_language = this.getUint32()),
          (t.min_version = this.getUint32()),
          (t.first_image_idx = this.getUint32()),
          (t.huff_rec_index = this.getUint32()),
          (t.huff_rec_count = this.getUint32()),
          (t.datp_rec_index = this.getUint32()),
          (t.datp_rec_count = this.getUint32()),
          (t.exth_flags = this.getUint32()),
          this.skip(36),
          (t.drm_offset = this.getUint32()),
          (t.drm_count = this.getUint32()),
          (t.drm_size = this.getUint32()),
          (t.drm_flags = this.getUint32()),
          this.skip(8),
          (t.fstd_index = this.getUint32()),
          (t.lstd_index = this.getUint32()),
          (t.fcis_offset = this.getUint32()),
          (t.fcis_count = this.getUint32()),
          (t.flis_offset = this.getUint32()),
          (t.flis_count = this.getUint32()),
          this.skip(8),
          (t.srcs_offset = this.getUint32()),
          (t.srcs_count = this.getUint32()),
          this.skip(10),
          (t.extra_flags = this.getUint16()),
          (t.index_record = this.getUint32()),
          (t.fragment_index = this.getUint32()),
          (t.skeleton_index = this.getUint32()),
          (t.datp_offset = this.getUint32()),
          (t.guide_index = this.getUint32()),
          this.setoffset(e + t.header_length),
          t
        );
      }
      load_exth_header() {
        const t = {},
          e = this.offset;
        (t.identifier = this.getStr(4)),
          (t.header_length = this.getUint32()),
          (t.record_count = this.getUint32());
        for (let n = 0; n < t.record_count - 3; n++) {
          const e = this.getUint32(),
            n = this.getUint32();
          let i = null;
          switch (e) {
            case 115:
            case 121:
            case 125:
            case 201:
            case 202:
            case 203:
            case 204:
            case 205:
            case 206:
            case 207:
            case 542:
              i = this.getUint32();
              break;
            default:
              i = this.getStr(n - 8);
          }
          t[e] = i;
        }
        return this.setoffset(e + t.header_length), t;
      }
      load_huff_dict() {
        if (17480 !== this.palm_header.compression) return !0;
        const t = this.mobi_header.huff_rec_index,
          e = this.mobi_header.huff_rec_count;
        this.setoffset(this.reclist[t].offset);
        this.getStr(8);
        const n = this.getUint32(),
          i = this.getUint32();
        this.setoffset(this.reclist[t].offset + n);
        const r = function (t) {
            const e = 31 & t,
              n = 128 & t;
            let i = t >> 8;
            return (i = (i + 1) * Math.pow(2, 32 - e) - 1), [e, n, i];
          },
          s = [];
        for (let f = 0; f < 256; f++) s.push(r(this.getUint32()));
        this.setoffset(this.reclist[t].offset + i);
        const a = [],
          o = [0],
          l = [0];
        for (let f = 0; f < 64; f++) {
          const t = this.getUint32();
          a.push(t), f % 2 === 0 ? o.push(t) : l.push(t);
        }
        const c = [];
        for (let f = 0; f < o.length; f++) {
          const t = o[f] * Math.pow(2, 32 - f);
          c.push(t);
        }
        const d = [];
        for (let f = 0; f < o.length; f++) {
          const t = l[f];
          d.push((t + 1) * Math.pow(2, 32 - f) - 1);
        }
        const h = [],
          u = [];
        for (let f = 1; f < e; f++) u.push(this.reclist[t + f].offset);
        u.forEach((t) => {
          this.setoffset(t);
          this.getStr(8);
          const e = this.getUint32(),
            n = this.getUint32(),
            i = Math.min(e - h.length, Math.pow(2, n)),
            r = [];
          for (let s = 0; s < i; s++) r.push(this.getUint16());
          r.forEach((e, n) => {
            this.setoffset(e + t + 16);
            const i = this.getUint16(),
              r = this.read_buffer(e + t + 18, 32767 & i),
              s = ze([r.toUint8Array()]);
            h.push([s, 32768 & i]);
          });
        }),
          (this.huff = { table: s, mincode: c, maxcode: d, dictionary: h });
      }
      huffUnpack(t) {
        let e = 8 * t.length,
          n = 0;
        const i = [];
        i.push(...t), i.push(0, 0, 0, 0, 0, 0, 0, 0);
        const r = new Uint8Array(i).buffer,
          s = new DataView(r);
        let a = s.getBigUint64(0),
          o = 32,
          l = [];
        for (;;) {
          o <= 0 && ((n += 4), (a = s.getBigUint64(n)), (o += 32));
          let t = Number(
            BigInt(a.moveRight(o)) & BigInt(Number(1).moveLeft(32) - 1)
          );
          const i = this.huff.table[t.moveRight(24)];
          let r = null,
            d = null,
            h = null;
          try {
            (r = i[0]), (d = i[1]), (h = i[2]);
          } catch (c) {}
          if (!d) {
            for (; t < this.huff.mincode[r]; ) r += 1;
            h = this.huff.maxcode[r];
          }
          if (((o -= r), (e -= r), e < 0)) break;
          const u = (h - t).moveRight(32 - r),
            f = this.huff.dictionary[u];
          let p = f[0];
          f[1] ||
            ((this.huff.dictionary[u] = null),
            (p = this.huffUnpack(p)),
            (this.huff.dictionary[u] = [p, 1])),
            l.push(...p);
        }
        return new Uint8Array(l);
      }
      lz77Unpack(t) {
        let e = t.length,
          n = 0,
          i = new Te(t.length);
        for (; n < e; ) {
          let e = t[n];
          if (((n += 1), 0 == e)) i.write(e);
          else if (e <= 8) {
            for (let r = n; r < n + e; r++) i.write(t[r]);
            n += e;
          } else if (e <= 127) i.write(e);
          else if (e <= 191) {
            let s = t[n];
            n += 1;
            let a = (((e << 8) | s) >> 3) & 2047,
              o = 3 + (7 & s),
              l = i.size();
            for (var r = 0; r < o; r++) i.write(i.get(l - a)), (l += 1);
          } else i.write(32), i.write(128 ^ e);
        }
        return i.shrink();
      }
      read_index_header(t) {
        t || (t = this.mobi_header.index_record);
        const e = this.read_buffer_idx(t);
        if (!e || "INDX" !== e.slice(0, 4).decodeString()) return {};
        const n = [
            "len",
            "nul1",
            "type",
            "gen",
            "start",
            "count",
            "code",
            "lng",
            "total",
            "ordt",
            "ligt",
            "nligt",
            "nctoc",
          ],
          i = {},
          r = e.DataView();
        for (let h = 0; h < n.length; h++) i[n[h]] = r.getUint32(4 * (h + 1));
        const s = r.getUint32(164),
          a = r.getUint32(168),
          o = r.getUint32(172),
          l = r.getUint32(176);
        r.getUint32(182);
        let c = null,
          d = null;
        return (
          (65002 === i.code || 0 !== s || a > 0) &&
            ((c = r.getUint8(o + 4)), (d = r.getUint16(l + 4))),
          { header: i, ordt1: c, ordt2: d }
        );
      }
      read_index_records(t) {
        "undefined" === typeof t && (t = this.mobi_header.index_record);
        const e = [],
          n = {};
        if (4294967295 === t) return { outtbl: e, ctoc_text: n };
        const i = this.read_buffer_idx(t),
          { header: r, ordt1: s, ordt2: a } = this.read_index_header(t) || {};
        if (!r) return { outtbl: e, ctoc_text: n };
        const o = r.count;
        let l = 0,
          c = t + o + 1;
        for (let f = 0; f < r.nctoc; f++) {
          const t = this.read_buffer_idx(c + f),
            e = this.readCTOC(t);
          Object.keys(e).forEach((t) => {
            n[parseInt(t) + l] = e[t];
          }),
            (l += 65536);
        }
        const d = r.len;
        let h = 0,
          u = [];
        if ("TAGX" === i.slice(d, d + 4).decodeString()) {
          const t = i.DataView(),
            e = t.getUint32(d + 4);
          h = t.getUint32(d + 8);
          for (let n = 12; n < e; n += 4) {
            const t = d + n,
              e = [];
            for (let n = 1; n <= 4; n++)
              e[n - 1] = i.slice(t + n - 1, t + n).toUint8Array()[0];
            u.push(e);
          }
        }
        for (let f = t + 1; f < t + 1 + o; f++) {
          const t = this.read_buffer_idx(f),
            { header: n, ordt1: i, ordt2: r } = this.read_index_header(f),
            s = n.start,
            o = n.count,
            l = [],
            c = t.DataView();
          for (let e = 0; e < o; e++) {
            const t = c.getUint16(s + 4 + 2 * e);
            l.push(t);
          }
          l.push(s);
          for (let d = 0; d < o; d++) {
            const n = l[d],
              i = l[d + 1],
              r = t.slice(n, n + 1).toUint8Array()[0];
            let s = t.slice(n + 1, n + 1 + r).toUint8Array();
            if (null !== a) {
              const t = [];
              s.forEach((e) => {
                t.push(a[s[e]]);
              }),
                (s = new Uint8Array(t));
            }
            s = s.decodeString();
            const o = this.getTagMap(h, u, t, n + 1 + r, i);
            e.push([s, o]);
          }
        }
        return { outtbl: e, ctoc_text: n };
      }
      parseNCX() {
        const t = [],
          e = {
            1: ["pos", 0],
            2: ["len", 0],
            3: ["noffs", 0],
            4: ["hlvl", 0],
            5: ["koffs", 0],
            6: ["pos_fid", 0],
            21: ["parent", 0],
            22: ["child1", 0],
            23: ["childn", 0],
          };
        if (4294967295 === this.mobi_header.index_record)
          return (this.indx_data = []);
        const { outtbl: n, ctoc_text: i } = this.read_index_records(
          this.mobi_header.index_record
        );
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const [a, o] = n[s],
            l = {
              name: a,
              pos: -1,
              len: 0,
              noffs: -1,
              text: "Unknown Text",
              hlvl: -1,
              kind: "Unknown Kind",
              pos_fid: null,
              parent: -1,
              child1: -1,
              childn: -1,
              num: r,
            };
          Object.keys(e).forEach((t) => {
            const [n, r] = e[t];
            if ("undefined" !== typeof o[t]) {
              let e = o[t][r];
              const s = t.toNumber();
              if (6 === s) {
                const n = this.encode32(e, 4),
                  i = o[t][r + 1];
                e = `kindle:pos:fid:${n}:off:${this.encode32(i, 10)}`;
              }
              (l[n] = e),
                3 === s ? (l.text = i[e]) : 5 === s && (l.kind = i[e]);
            }
          }),
            t.push(l),
            r++;
        }
        return (this.indx_data = t);
      }
      parseFdst() {
        const t = [];
        if (4294967295 === this.mobi_header.fstd_index)
          return (this.fdsttbl = []);
        const e = this.read_buffer_idx(this.mobi_header.fstd_index);
        if (!e || "FDST" !== e.slice(0, 4).decodeString())
          return (this.fdsttbl = [0, 4294967295]);
        const n = e.DataView(),
          i = n.getUint32(8);
        for (let r = 0; r < 2 * i; r++)
          r % 2 === 0 && t.push(n.getUint32(12 + 4 * r));
        return t.push(this.read_text().byteLength()), (this.fdsttbl = t);
      }
      parseSkeleton() {
        const t = [];
        if (4294967295 === this.mobi_header.skeleton_index)
          return (this.skeltbl = []);
        const { outtbl: e, ctoc_text: n } = this.read_index_records(
          this.mobi_header.skeleton_index
        );
        let i = 0;
        for (let r = 0; r < e.length; r++) {
          const [n, s] = e[r];
          t.push([i, n, s[1][0], s[6][0], s[6][1]]), i++;
        }
        return (this.skeltbl = t);
      }
      parseFragment() {
        const t = [];
        if (4294967295 === this.mobi_header.fragment_index)
          return (this.fragtbl = []);
        const { outtbl: e, ctoc_text: n } = this.read_index_records(
          this.mobi_header.fragment_index
        );
        for (let i = 0; i < e.length; i++) {
          const [r, s] = e[i],
            a = n[s[2][0]];
          t.push([
            r.toNumber(),
            a,
            s[3][0],
            s[4] ? s[4][0] : 0,
            s[6] ? s[6][0] : 0,
            s[6] ? s[6][1] : 0,
          ]);
        }
        return (this.fragtbl = t);
      }
      parseGuide() {
        const t = [];
        if (4294967295 === this.mobi_header.guide_index)
          return (this.guidetbl = []);
        const { outtbl: e, ctoc_text: n } = this.read_index_records(
          this.mobi_header.guide_index
        );
        for (let i = 0; i < e.length; i++) {
          const [r, s] = e[i],
            a = n[s[1][0]],
            o = r;
          let l = null;
          (l = "undefined" !== typeof s[3] ? s[3][0] : s[6][0]),
            t.push([o, a, l]);
        }
        return (this.guidetbl = t);
      }
      readCTOC(t) {
        const e = {};
        let n = 0;
        for (; n < t.byteLength && 0 !== t.toUint8Array()[n]; ) {
          const i = n,
            [r, s] = this.getVariableWidthValue(t, n);
          n += r;
          const a = t.slice(n, n + s).decodeString();
          (n += s), (e[i] = a);
        }
        return e;
      }
      getTagMap(t, e, n, i, r) {
        let s = [],
          a = {},
          o = 0,
          l = i + t;
        for (let c = 0; c < e.length; c++) {
          let [t, r, a, d] = e[c];
          if (1 === d) {
            o += 1;
            continue;
          }
          let h = n.slice(i + o, i + o + 1).toUint8Array()[0] & a;
          if (0 === h);
          else if (h === a) {
            let e = a,
              i = 0;
            for (let t = 0; t < 8; t++) !0 & h && i++, (e = e.moveRight(1));
            if (e > 1) {
              const [e, i] = this.getVariableWidthValue(n, l);
              (l += e), s.push([t, null, i, r]);
            } else s.push([t, 1, null, r]);
          } else {
            for (; !1 & a; ) (a = a.moveRight(1)), (h = h.moveRight(1));
            s.push([t, h, null, r]);
          }
        }
        for (let c = 0; c < s.length; c++) {
          let [t, e, i, r] = s[c];
          const o = [];
          if (null !== e)
            for (let s = 0; s < e; s++)
              for (let t = 0; t < r; t++) {
                const [t, e] = this.getVariableWidthValue(n, l);
                (l += t), o.push(e);
              }
          else {
            let t = 0;
            for (; t < i; ) {
              const [e, i] = this.getVariableWidthValue(n, l);
              (l += e), (t += e), o.push(i);
            }
          }
          a[t] = o;
        }
        return a;
      }
      getVariableWidthValue(t, e) {
        let n = 0,
          i = 0,
          r = !1;
        for (; !r && !(e + i > t.byteLength); ) {
          const s = t.slice(e + i, e + i + 1).toUint8Array()[0];
          i++, 128 & s && (r = !0), (n = n.moveLeft(7) | (127 & s));
        }
        return [i, n];
      }
      getIDTagByPosFid(t, e) {
        "string" === typeof t &&
          "undefined" === typeof e &&
          ([t, e] = t.replace(/kindle:pos:fid:/gi, "").split(":off:"));
        const n = this.decode32(t),
          i = this.decode32(e);
        let [r, s, a, o, l, c] = this.fragtbl[n],
          d = r + i,
          [h, u, f, p, m] = this.getFileInfo(d);
        return (
          null === h &&
            ((d = this.skeltbl[a][3]), ([h, u, f, p, m] = this.getFileInfo(d))),
          (s = this.getIDTag(d)),
          {
            fname: h,
            idtext: s,
            path: `/${m}/${h}`.toLowerCase() + (s ? "#" + s.toLowerCase() : ""),
          }
        );
      }
      getIDTag(t) {
        let [e, n, i, r] = this.getFileInfo(t);
        if (null === n && null === i) return null;
        let s,
          a = this.pblobs[n],
          o = t - i,
          l = o;
        const c = a.slice(o, o + 2).toUint8Array();
        if (60 === c[0] && 47 !== c[1]);
        else {
          let t = 0,
            e = a.byteLength;
          for (let n = o - 1; n >= 0; n--) {
            const e = a.slice(n, n + 2).toUint8Array();
            if (60 === e[0] && 47 !== e[1]) {
              t = n;
              break;
            }
          }
          for (let n = o + 1; n < a.byteLength - 1; n++) {
            const t = a.slice(n, n + 2).toUint8Array();
            if (60 === t[0] && 47 !== t[1]) {
              e = n;
              break;
            }
          }
          l = Math.abs(e - o) < Math.abs(t - o) ? e : t;
        }
        for (let u = l + 1; u < a.byteLength; u++) {
          if (62 === a.slice(u, u + 1).toUint8Array()[0]) {
            s = u;
            break;
          }
        }
        "number" !== typeof s && (s = l + 500);
        const d = a.slice(l, s + 1).decodeString(),
          h = d.toLowerCase();
        if (h.indexOf(" id=") > 0) {
          const [t, e] = d.split(' id="')[1].split('"');
          return t;
        }
        if (h.indexOf(" aid=") > 0) {
          const [t, e] = d.split(' aid="')[1].split('"');
          return "filepos" + t;
        }
        if (h.indexOf(" name=") > 0) {
          const [t, e] = d.split(' name="')[1].split('"');
          return "filepos" + t;
        }
        return null;
      }
      getFileInfo(t) {
        for (let e = 0; e < this.partinfo.length; e++) {
          const [n, i, r, s, a, o] = this.partinfo[e];
          if (t >= s && t < a) return [r, n, s, a, i];
        }
        return [null, null, null, null, null];
      }
      getPartToc(t) {
        "number" === typeof t && (t = this.partinfo[t] || []);
        const [e, n, i, r, s, a] = t;
        for (const o of this.indx_data) if (o.pos >= r && o.pos < s) return o;
        return null;
      }
    };
    var Ce = class extends s {
      async readAsBlob() {
        return await this.resource.parser.readBlob(this.idx, this.mime);
      }
      async prepare(t = {}) {
        let e = super.prepare(t);
        return (e.content = await this.readAsBlob()), e;
      }
      async revoke() {
        super.revoke(), (this.content = null);
      }
    };
    var Be = class extends s {
      async readAsBlob() {
        let t = await super.readAsBlob();
        return (
          t || (t = await this.resource.parser.readImageAsDataURL(this.idx)), t
        );
      }
      async renderAsCss() {
        if (!this.is_css) return null;
        if (this._compiled) return this._compiled.content;
        let t = this.content;
        const e = Array.from(t.matchAll(/url\(.*\)/gi));
        for (let n = 0; n < e.length; n++) {
          let i = e[n][0].split("(")[1].split(")")[0].replace(/"/g, ""),
            [r, s] = i.replace(/kindle:embed:/gi, "").split("?");
          if (((s = s ? s.parseAsQuery() : {}), !r || r.length > 5)) continue;
          const a = this.resource.decode32(r),
            o = s.mime || "application/octet-stream";
          let l = "/",
            c = "image";
          0 === o.indexOf("image/")
            ? (l += "images/")
            : ((c = "font"), (l += "fonts/")),
            (l += `${a}${Ue[o] || ".raw"}`);
          let d = this.resource.getEntry(l);
          if (
            (d ||
              ((d = new Ce(l, { mime: o, type: c, idx: a })),
              this.resource.attachEntry(d)),
            !d)
          )
            continue;
          this.assets.push(d.path);
          const h = await d.getObjectURL();
          (i = i.replace(/\//g, "\\/").replace(/\?mime/g, "\\?mime")),
            (t = t.replace(new RegExp(i, "ig"), h));
        }
        return (
          (t = t.replace(/[\r\n} ]{1}body/g, ".entry-body-content")),
          (this._compiled = { content: t, fonts: this.extractFontFaces(t) }),
          t
        );
      }
    };
    var Oe = class extends Ee {
      constructor(...t) {
        super(...t),
          (this.description = "mobi/azw3/azw/prc\u89e3\u6790\u5668"),
          (this.parser = null),
          (this.packageType = null),
          (this.sectionPositions = []),
          (this.raw = null),
          (this.meta_support = !0);
      }
      async clean() {
        await super.clean(),
          this.parser && this.parser.clean(),
          (this.parser = null);
      }
      async exeOpen() {
        try {
          await this.readAsEpubPackage(),
            (this.packageType = "epub"),
            await this.parseAsEpubPackage();
        } catch (t) {
          await this.readAsMobiBinary(),
            (this.packageType = "mobi"),
            await this.parseAsBinary();
        }
        this.styles.push(
          "img,image{max-width:100%}a.reader-content-empty-link{color:inherit !important;text-decoration:none;cursor:text}\n"
        );
      }
      async readAsEpubPackage() {
        await super.readFile();
      }
      async readAsMobiBinary() {
        const t = await this.readAsBuffer();
        this.parser = new Le(t);
      }
      async parseAsEpubPackage() {
        const t = Object.keys(this.entries);
        let e = null,
          n = null;
        for (let i = 0; i < t.length; i++)
          t[i].indexOf(".opf") > -1
            ? (e = t[i])
            : t[i].indexOf(".ncx") > -1 && (n = t[i]);
        if (
          (e && (await this.parseOPF(e)),
          n && (await this.parseNcx(n)),
          0 === this.sections.length)
        ) {
          const t = ["html", "xhtml", "htm"];
          for (const e of Object.keys(this.entries)) {
            const n = this.entries[e];
            if (!t.some((t) => e.indexOf("." + t) > -1)) continue;
            const i = await n.render();
            this.appendSectionEntry(i.title, i.dom);
          }
          0 === this.sections.length &&
            (this.appendSectionEntry(
              "---Notice---",
              "<p>\u672a\u627e\u5230\u6709\u6548\u9605\u8bfb\u5185\u5bb9</p><p>Didn't find any valid content.</p>"
            ),
            this.$emit(
              "message",
              "\u672a\u627e\u5230\u53ef\u9605\u8bfb\u7684\u5185\u5bb9"
            ));
        }
      }
      async parseAsBinary() {
        if (
          (this.parser.load(),
          (this.PLAIN_ENTRY = !0),
          await this.restore(),
          this.sections && this.sections.length > 0)
        )
          return !0;
        try {
          const t = {
            author: 100,
            publisher: 101,
            description: 103,
            isbn: 104,
            publish_date: 106,
            uuid: 113,
            cover: 201,
            thumbnail: 202,
            asin: 535,
            language: 524,
          };
          for (const e in t)
            "undefined" !== typeof this.parser.exth_header[t[e]] &&
              (this.meta[e] = this.parser.exth_header[t[e]]);
          if (
            ((this.meta.name = this.parser.header.name),
            "undefined" !== typeof this.meta.cover &&
              (this.meta.cover = await this.parser.readImageAsDataURL(
                this.meta.cover + 1
              )),
            "undefined" !== typeof this.meta.thumbnail &&
              (this.meta.thumbnail = await this.parser.readImageAsDataURL(
                this.meta.thumbnail + 1
              )),
            this.meta.uuid && (this.guid = this.meta.uuid),
            (this.meta.drm = this.parser.mobi_header.drm_count > 0),
            !0 === this.META_ONLY)
          )
            return !0;
          8 === this.parser.mobi_header.min_version
            ? ((this.packageType = "mobi8"), await this.parseKF8Sections())
            : await this.parseMobiSections();
        } catch (t) {
          throw t;
        }
      }
      async parseKF8Sections() {
        await this.parser.parse();
        for (let e = 1; e < this.parser.flows.length; e++) {
          if (this.meta.drm) continue;
          const t = this.parser.flows[e],
            [n, i, r, s, a] = this.parser.flowinfo[e],
            o = `/${r}/${s}`.toLowerCase();
          if ("css" === n) {
            const e = new Be(o, {
              content: t,
              encoding: "plain",
              mime: "text/css",
            });
            this.attachEntry(e);
          } else
            "svg" === n
              ? this.appendEntry(o, { content: t, encoding: "plain", mime: a })
              : "svg-image" === n &&
                this.appendEntry(o, {
                  content: t,
                  encoding: "base64",
                  mime: a,
                });
        }
        let t = null;
        this.meta.drm &&
          (t =
            '<ul style="list-style: inside circle; padding: 0;">\n                <li>This file is protected by DRM, you have no right to read it.</li>\n                <li>\u6b64\u6587\u4ef6\u53d7DRM\u4fdd\u62a4\uff0c\u60a8\u65e0\u6743\u9605\u8bfb\u3002 </li>\n                <li>\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306fDRM\u306b\u3088\u3063\u3066\u4fdd\u8b77\u3055\u308c\u3066\u304a\u308a\u3001\u8aad\u307f\u53d6\u308b\u6a29\u5229\u306f\u3042\u308a\u307e\u305b\u3093\u3002</li>\n                <li>\uc774 \ud30c\uc77c\uc740 DRM\uc73c\ub85c \ubcf4\ud638\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c \uc77d\uc744 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. </li>\n                <li>\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0437\u0430\u0449\u0438\u0449\u0435\u043d DRM, \u0432\u044b \u043d\u0435 \u0438\u043c\u0435\u0435\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u0435\u0433\u043e \u0447\u0438\u0442\u0430\u0442\u044c. </li>\n                <li>Ce fichier est prot\xe9g\xe9 par DRM, vous n\'avez pas le droit de le lire. </li>\n                <li>Diese Datei ist DRM-gesch\xfctzt, Sie haben kein Recht, sie zu lesen. </li>\n                <li>Este archivo est\xe1 protegido por DRM, no tiene derecho a leerlo. </li>\n            </ul>');
        for (let e = 0; e < this.parser.parts.length; e++) {
          let n = this.parser.parts[e],
            i = this.parser.getPartToc(e),
            r = i ? i.text : null;
          const s = this.parser.partinfo[e],
            a = `/${s[1]}/${s[2]}`.toLowerCase();
          if (this.meta.drm) {
            this.appendSectionEntry(
              r || "" + (e + 1),
              `<h1>(${e + 1})</h1>` + t,
              a
            );
            continue;
          }
          n = n
            .replace(/src="kindle:/gi, 'ksrc="kindle:')
            .replace(/href="kindle:/gi, 'khref="kindle:');
          const o = n.asXML("text/html");
          o.querySelectorAll("a[khref]").forEach((t) => {
            let e = t.getAttribute("khref");
            if (0 === e.indexOf("kindle:pos:fid:")) {
              let [n, i, r] = e.replace(/kindle:pos:fid:/gi, "").split(":");
              (e = this.parser.getIDTagByPosFid(n, r)),
                t.setAttribute("href", "javascript:;"),
                e.path &&
                  (t.setAttribute("data-href", e.path),
                  t.classList.add("reader-content-link"));
            }
            t.removeAttribute("khref");
          });
          const l = o.querySelectorAll(
            'img[ksrc^="kindle\\:embed\\:"], image[ksrc^="kindle\\:embed\\:"]'
          );
          for (let t = 0; t < l.length; t++) {
            const e = l.item(t),
              n = e.getAttribute("ksrc");
            if (n) {
              let [t, i] = n.replace(/kindle:embed:/gi, "").split("?");
              (i = i ? i.parseAsQuery() : {}),
                await this.resolveImage(this.decode32(t), e, {
                  mime: i.mime || null,
                });
            }
            e.removeAttribute("ksrc");
          }
          const c = o.querySelectorAll('[ksrc^="kindle\\:flow\\:"]');
          for (let t = 0; t < c.length; t++) {
            const e = c.item(t),
              n = e.getAttribute("ksrc");
            if (n) {
              let [t, i] = n.replace(/kindle:flow:/gi, "").split("?");
              (i = i ? i.parseAsQuery() : {}), (t = this.decode32(t));
              const r = this.parser.flowinfo[t] || null;
              if (!r) {
                await this.resolveImage(t, e);
                continue;
              }
              const s = `/${r[2]}/${r[3]}`.toLowerCase();
              e.classList.add("blob-pending"),
                e.setAttribute(
                  "src",
                  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                ),
                e.setAttribute("data-href", s),
                e.setAttribute("data-target-attribute", "src");
            }
            e.removeAttribute("ksrc");
          }
          o.querySelectorAll("[id]").forEach((t) => {
            const e = t.getAttribute("id").toLowerCase();
            t.setAttribute("id", e);
          }),
            o
              .querySelectorAll("[aid]:not([id]), [name]:not([id])")
              .forEach((t) => {
                const e = t.getAttribute("aid") || t.getAttribute("name");
                e &&
                  (t.setAttribute("id", "filepos" + e.toLowerCase()),
                  t.removeAttribute("aid"));
              });
          const d = o.querySelectorAll('link[khref^="kindle\\:flow\\:"]'),
            h = [],
            u = {};
          for (let t = 0; t < d.length; t++) {
            const e = d.item(t),
              n = e.getAttribute("khref");
            let [i, r] = n.split("kindle:flow:")[1].split("?");
            if (((i = this.decode32(i)), !this.parser.flowinfo[i])) continue;
            const [s, a, o, l] = this.parser.flowinfo[i],
              c = `/${o}/${l}`.toLowerCase();
            e.removeAttribute("kref"),
              h.push({ type: "text/css", rel: "stylesheet", path: c });
            const f = this.getEntry(c),
              p = await f.getCssFonts();
            p && (u[c] = p);
          }
          const f = [];
          o.querySelectorAll("style").forEach((t) => {
            f.push(t.textContent), t.remove();
          }),
            o.querySelectorAll("script").forEach((t) => {
              t.remove();
            }),
            o.querySelectorAll("meta, link, title").forEach((t) => {
              t.remove();
            });
          const p = o.querySelector("body") || o;
          let m = p.outerHTML
            .replace(/<body/gi, "<div")
            .replace(/<\/body>/gi, "</div>");
          if (!r) {
            let t =
              null === o || void 0 === o ? void 0 : o.querySelector("title");
            (t && "" !== t.textContent) ||
              (t = p.seekChild(
                (t) =>
                  t.TEXT_NODE === t.nodeType && t.textContent.trim().length > 1
              )),
              (r = t ? t.textContent : null);
          }
          const g = this.appendSectionEntry(r, m, a),
            _ = g.extractFontFaces(f.join("\r\n"));
          _ && (u.inline = _), (g.css = h), (g.documentCss = u);
        }
        await this.parseKF8Toc();
      }
      async parseKF8Toc() {
        if (!this.parser.indx_data) return !0;
        (this.toc = []),
          this.parser.indx_data.forEach((t, e) => {
            let n = this.parser.getIDTagByPosFid(t.pos_fid).path;
            this.meta.drm && (n = n.split("#")[0]);
            const i = {
                id: "toc-" + e,
                title: t.text,
                path: n,
                parent: t.parent,
                depth: 0,
                children: [],
              },
              r = new o(i, this);
            if ((this.toc.push(r), t.parent >= 0)) {
              const e = this.toc[t.parent];
              (r.depth = e.depth + 1), e.children.push(r);
            }
          });
      }
      async parseMobiSections() {
        await this.parser.parse(), (this.raw = this.parser.read_text());
        Date.now();
        await this.locateMobiFilepos();
        if (0 === this.sectionPositions.length) {
          const t = this.raw.toDOMElement();
          t.querySelectorAll("style").forEach((t) => {
            this.styles.push(t.textContent), t.remove();
          });
          const e = t
            .querySelector("body")
            .seekChild(
              (t) =>
                t.TEXT_NODE === t.nodeType && t.textContent.trim().length > 5
            );
          let n = e ? e.textContent.trim() : null;
          return (
            n && n.length > 18 && (n = n.slice(0, 18) + ".."),
            this.appendSectionEntry(n, t.querySelector("body").innerHTML),
            (this.raw = null),
            !0
          );
        }
        for (let t = 0; t < this.sectionPositions.length; t++) {
          const e = this.sectionPositions[t];
          let n = this.raw.slice(e[2], e[3]);
          e[4] > 0 && (n = n.slice(e[4]));
          const i = n.toDOMElement();
          await this.replaceMobiMarks(i);
          const r = i.seekChild(
            (t) => t.TEXT_NODE === t.nodeType && t.textContent.trim().length > 1
          );
          let s = r ? r.textContent.trim() : null;
          s && s.length > 18 && (s = s.slice(0, 18) + ".."),
            this.appendSectionEntry(s, i.innerHTML);
        }
        return this.parser.indx_data && 0 !== this.parser.indx_data.length
          ? this.parser.indx_data.length < 3 && this.toc.length > 10
            ? ((this.raw = null), !0)
            : ((this.toc = []),
              this.parser.indx_data.forEach((t, e) => {
                let n = this.getLinkByPos(t.pos);
                if (!n) return !0;
                const i = {
                    id: "toc-" + e,
                    title: t.text,
                    path: n.toLowerCase(),
                    parent: t.parent,
                    depth: 0,
                    children: [],
                  },
                  r = new o(i, this);
                if ((this.toc.push(r), t.parent >= 0)) {
                  const e = this.toc[t.parent];
                  (r.depth = e.depth + 1), e.children.push(r);
                }
              }),
              void (this.raw = null))
          : ((this.raw = null), !0);
      }
      async locateMobiFilepos() {
        if (this.sectionPositions && this.sectionPositions.length > 0)
          return this.sectionPositions;
        try {
          this.sectionPositions = [];
          let t = Array.from(this.raw.matchAll(/<mbp:pagebreak/gi));
          const e = this.raw.match(/<body(.+?)</i),
            n = e.index + e[0].length - 1;
          let i = n,
            r = 0,
            s = 0,
            a = this.raw.bytesBetweenIndex(0, n);
          if (
            (t.forEach((t) => {
              r = t.index;
              const e = a,
                n = this.raw.bytesBetweenIndex(i, r) + e;
              if (
                (this.sectionPositions.push([e, n, i, r, s]),
                (i = r),
                (a = n),
                "<mbp:pagebreak/>" === this.raw.slice(t.index, t.index + 16))
              )
                s = 16;
              else if (
                "<mbp:pagebreak />" === this.raw.slice(t.index, t.index + 17)
              )
                s = 17;
              else {
                const e = this.raw.indexOf("</mbp:pagebreak>", t.index);
                s = e - t.index < 20 ? 31 : 16;
              }
            }),
            this.parser.isPrc() && this.sectionPositions.length <= 2)
          ) {
            t = Array.from(this.raw.matchAll(/<h1/gi));
            let e = 0;
            this.sectionPositions.length > 0 &&
              (e = this.sectionPositions[0][2]),
              (this.sectionPositions = []);
            let n = e,
              i = 0;
            for (let r = 0; r <= t.length; r++) {
              i = r < t.length ? t[r].index : this.raw.length;
              const e = this.raw.slice(i - 40, i);
              let s = 0;
              if (
                (e.indexOf("<mbp:pagebreak") > -1 &&
                  ((s = e.length - e.indexOf("<mbp:pagebreak")), (i -= s)),
                n < i)
              ) {
                const t = this.raw.bytesBetweenIndex(0, n),
                  e = this.raw.bytesBetweenIndex(n, i) + t;
                this.sectionPositions.push([t, e, n, i, 0]);
              }
              r < t.length && (n = t[r].index - s);
            }
          }
        } catch (t) {
          this.$emit("resource-load-error", this.original);
        }
      }
      async resolveImage(t, e, n = {}) {
        const i = n.mime || "image/raw",
          r = `/images/${t}${Ue[i]}`;
        if (!this.getEntry(r)) {
          const e = new Ce(r, { mime: i, type: "image", idx: t });
          this.attachEntry(e);
        }
        e.removeAttribute("width"),
          e.removeAttribute("height"),
          e.setAttribute(
            "src",
            "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          ),
          e.setAttribute("data-href", r),
          e.setAttribute("data-target-attribute", "src"),
          e.classList.add("blob-pending");
      }
      async replaceMobiMarks(t) {
        const e = t.querySelectorAll("img[recindex], image[recindex]");
        if (e.length > 0)
          for (let i = 0; i < e.length; i++) {
            const t = e[i],
              n = t.getAttribute("recindex");
            t.removeAttribute("recindex"), await this.resolveImage(n, t);
          }
        const n = t.querySelectorAll("a");
        if (n.length > 0)
          for (let i = 0; i < n.length; i++) {
            const t = n[i];
            t.getAttribute("id") || t.setAttribute("id", "link-" + i);
            const e = t.getAttribute("filepos");
            let r = t.getAttribute("href");
            e && (r = this.getLinkByPos(parseInt(e))),
              r
                ? (t.setAttribute("href", "javascript:;"),
                  t.setAttribute("data-href", r),
                  t.classList.add("reader-content-link"))
                : (t.removeAttribute("href"),
                  t.classList.add("reader-content-empty-link"));
          }
        return (
          t.querySelectorAll("p").forEach((t, e) => {
            t.setAttribute("id", "para-" + e);
          }),
          t.querySelectorAll("script").forEach((t) => {
            t.remove();
          }),
          t
        );
      }
      getMobiPosSection(t) {
        return this.sectionPositions.findIndex((e) => e[0] <= t && t < e[1]);
      }
      decode32(t) {
        return this.parser.decode32(t);
      }
      async prepare() {
        return Object.assign({}, await super.prepare(), {
          sectionPositions: this.sectionPositions,
        });
      }
      getLinkByPos(t) {
        if (
          !this.raw ||
          !this.sectionPositions ||
          0 === this.sectionPositions.length
        )
          return null;
        const e = this.getMobiPosSection(t),
          n = this.sectionPositions[e];
        if (!n) return null;
        let i = "";
        const r = t - n[0];
        if (!this.meta.drm && r > n[4]) {
          const t = this.raw.slice(n[2], n[3]),
            e = t.charIndexAtByte(r),
            s = t.slice(e, e + 100).toLowerCase();
          if (0 === s.indexOf("<p")) {
            i = "#para-" + Array.from(t.slice(0, e).matchAll(/<p/gi)).length;
          } else if (s.indexOf("<a") > -1) {
            i = "#link-" + Array.from(t.slice(0, e).matchAll(/<a/gi)).length;
          }
        }
        return this.generateSectionPath(e + 1) + i;
      }
    };
    var De = {
      pdf: r.a,
      epub: Ee,
      txt: r.a,
      flow: r.a,
      page: r.a,
      stream: r.a,
      mobi: Oe,
      docx: r.a,
    };
    n(2),
      window &&
        ((window.ResourceLoaders = De), (window.RESOURCE_VFS_CACHE = !1));
    e.default = De;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    const i =
        "attachShadow" in Element.prototype &&
        "getRootNode" in Element.prototype,
      r = !(
        !i ||
        !document.createElement("div").attachShadow({ mode: "open" })
          .getSelection
      ),
      s = window.ShadyDOM && window.ShadyDOM.inUse,
      a =
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
      o = !i || s || (!r && !a),
      l =
        /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|script|source|style|template|track|wbr)$/,
      c = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.DOCUMENT_FRAGMENT_NODE];
    function d(t, e, n) {
      const i = e.childNodes || e.children;
      if (!i) return e;
      for (let s = 0; s < i.length; ++s) {
        const e = i[n ? s : i.length - 1 - s];
        if (((r = e), c.includes(r.nodeType)) && t.containsNode(e, !0)) {
          if (t.containsNode(e, !1)) return e;
          if (!l.exec(e.localName || "")) return d(t, e, n);
        }
      }
      var r;
      return e;
    }
    let h = { node: null, offset: -1 };
    function u(t, e, n) {
      const i = e;
      for (; (e = f(e, n)) && e.contains(i); );
      return !!e && e instanceof Element && t.containsNode(e, !0);
    }
    function f(t, e) {
      if (!e) return t.previousSibling || t.parentNode || null;
      for (; t; ) {
        if (t.nextSibling) return t.nextSibling;
        t = t.parentNode;
      }
      return null;
    }
    !(function () {
      if (r || o)
        return (
          document.addEventListener("selectionchange", (t) => {
            document.dispatchEvent(new CustomEvent("-shadow-selectionchange"));
          }),
          () => {}
        );
      let t = !1;
      document.addEventListener("selectionchange", (e) => {
        if (t) return;
        t = !0;
        const n = window.getSelection();
        if ("Caret" === n.type) {
          const t = (function (t, e) {
            const n = [],
              i = (t) => {
                for (let e = 0; e < t.length; ++e)
                  t[e].shadowRoot && n.push(t[e].shadowRoot);
              };
            for (
              e.shadowRoot && n.push(e.shadowRoot), i(e.childNodes);
              n.length;

            ) {
              const e = n.shift();
              for (let n = 0; n < e.childNodes.length; ++n)
                if (t.containsNode(e.childNodes[n], !0)) return e;
              i(e.querySelectorAll("*"));
            }
            return null;
          })(n, n.anchorNode);
          if (t instanceof window.ShadowRoot) {
            const e = m(t);
            if (e) {
              const t = e.startContainer,
                n = e.startOffset;
              h = { node: t, offset: n };
            }
          }
        }
        document.dispatchEvent(new CustomEvent("-shadow-selectionchange")),
          window.requestAnimationFrame(() => {
            t = !1;
          });
      });
    })();
    const p = new Map();
    function m(t) {
      if (o) {
        const e = document.getSelection();
        return e.containsNode(t, !0) ? e.getRangeAt(0) : null;
      }
      if (r) {
        const e = t.getSelection();
        return e.rangeCount ? e.getRangeAt(0) : null;
      }
      const e = p.get(t);
      if (e) return e;
      const n = (function (t) {
        const e = window.getSelection();
        if ("None" === e.type) return { range: null, type: "none" };
        if ("Caret" !== e.type && "Range" !== e.type)
          throw new TypeError("unexpected type: " + e.type);
        const n = d(e, t, !0);
        if (n === t) return { range: null, mode: "none" };
        const i = document.createRange();
        let r = null,
          s = void 0;
        if (
          "Range" === e.type &&
          ((r = d(e, t, !1)),
          (s = (function (t, e, n) {
            if ("Range" !== t.type) return;
            const i = () => t.toString().length,
              r = i();
            let s;
            return (
              t.modify("extend", "forward", "character"),
              (s = i()),
              s > r || u(t, n, !0)
                ? (t.modify("extend", "backward", "character"), !0)
                : s < r || !t.containsNode(e)
                ? (t.modify("extend", "backward", "character"), !1)
                : (t.modify("extend", "backward", "character"),
                  (s = i()),
                  s > r || u(t, e, !1)
                    ? (t.modify("extend", "forward", "character"), !1)
                    : s < r || !t.containsNode(n)
                    ? (t.modify("extend", "forward", "character"), !0)
                    : void 0)
            );
          })(e, n, r)),
          void 0 === s)
        )
          return (
            i.setStart(n, 0), i.setEnd(r, r.length), { range: i, mode: "all" }
          );
        const a = e.toString().length;
        let o = 0,
          l = 0;
        if (null === r);
        else if (r.nodeType === Node.TEXT_NODE) {
          const t = r.textContent,
            n = r.nextSibling;
          for (let i = t.length - 1; i >= 0; --i) {
            r.splitText(i);
            if (e.toString().length !== a) {
              l = i + 1;
              break;
            }
          }
          for (
            r.insertData(r.length, t.substr(r.length));
            r.nextSibling !== n;

          )
            r.nextSibling.remove();
        }
        if (n.nodeType === Node.TEXT_NODE) {
          n !== r &&
            (n.appendData("?"),
            e.collapseToStart(),
            e.modify("extend", "right", "character"));
          const t = n.textContent,
            i = n.nextSibling;
          for (let s = n === r ? l : t.length - 1; s >= 0; --s)
            if ((n.splitText(s), "" === e.toString())) {
              o = s;
              break;
            }
          for (
            n.insertData(n.length, t.substr(n.length));
            n.nextSibling !== i;

          )
            n.nextSibling.remove();
          n !== r && n.deleteData(n.length - 1, 1),
            null === r && ((r = n), (l = o));
        } else null === r && (r = n);
        1 === a && h && h.node === n && h.offset > o && s && (s = !1);
        !0 === s
          ? (e.collapse(n, o), e.extend(r, l))
          : !1 === s
          ? (e.collapse(r, l), e.extend(n, o))
          : e.setPosition(n, o);
        return i.setStart(n, o), i.setEnd(r, l), { range: i, mode: "normal" };
      })(t);
      return (
        p.set(t, n.range),
        window.setTimeout(() => {
          p.delete(t);
        }, 0),
        n.range
      );
    }
    ShadowRoot.prototype.getSelection ||
      (DocumentFragment.prototype.getSelection = function () {
        return m(this);
      });
  },
]);

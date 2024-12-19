import Pe, { useState as pr, StrictMode as gr } from "react";
import hr from "react-dom";
var q = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function mr() {
  if (we) return W;
  we = 1;
  var y = Pe, h = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, O = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(x, f, j) {
    var g, b = {}, T = null, L = null;
    j !== void 0 && (T = "" + j), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && (L = f.ref);
    for (g in f) R.call(f, g) && !Y.hasOwnProperty(g) && (b[g] = f[g]);
    if (x && x.defaultProps) for (g in f = x.defaultProps, f) b[g] === void 0 && (b[g] = f[g]);
    return { $$typeof: h, type: x, key: T, ref: L, props: b, _owner: O.current };
  }
  return W.Fragment = _, W.jsx = F, W.jsxs = F, W;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function yr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Pe, h = Symbol.for("react.element"), _ = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), x = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), re = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var S = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Ie = !1, $e = !1, We = !1, Me = !1, te;
    te = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === Y || Me || e === O || e === j || e === g || We || e === L || Ae || Ie || $e || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === b || e.$$typeof === F || e.$$typeof === x || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case _:
          return "Portal";
        case Y:
          return "Profiler";
        case O:
          return "StrictMode";
        case j:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ne(r) + ".Consumer";
          case F:
            var t = e;
            return ne(t._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case T: {
            var o = e, s = o._payload, i = o._init;
            try {
              return E(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, ae, ie, oe, se, ce, ue, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (A === 0) {
          ae = console.log, ie = console.info, oe = console.warn, se = console.error, ce = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ve() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ae
            }),
            info: C({}, e, {
              value: ie
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: se
            }),
            group: C({}, e, {
              value: ce
            }),
            groupCollapsed: C({}, e, {
              value: ue
            }),
            groupEnd: C({}, e, {
              value: le
            })
          });
        }
        A < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = S.ReactCurrentDispatcher, J;
    function N(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = B.current, B.current = null, Ne();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), d = n.stack.split(`
`), c = a.length - 1, u = d.length - 1; c >= 1 && u >= 0 && a[c] !== d[u]; )
            u--;
          for (; c >= 1 && u >= 0; c--, u--)
            if (a[c] !== d[u]) {
              if (c !== 1 || u !== 1)
                do
                  if (c--, u--, u < 0 || a[c] !== d[u]) {
                    var m = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, m), m;
                  }
                while (c >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        K = !1, B.current = s, Ve(), Error.prepareStackTrace = o;
      }
      var k = e ? e.displayName || e.name : "", w = k ? N(k) : "";
      return typeof e == "function" && V.set(e, w), w;
    }
    function Ze(e, r, t) {
      return de(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, qe(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case j:
          return N("Suspense");
        case g:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ze(e.render);
          case b:
            return U(e.type, r, t);
          case T: {
            var n = e, o = n._payload, s = n._init;
            try {
              return U(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = S.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var s = Function.call.bind(I);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (Z(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), Z(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, Z(o), l("Failed %s type: %s", t, a.message), Z(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ge(e);
    }
    var $ = S.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ye, z;
    z = {};
    function He(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = E($.current.type);
        z[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E($.current.type), e.ref), z[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          me || (me = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, o) {
      {
        var s, i = {}, a = null, d = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), He(r) && (d = r.ref, Qe(r, o));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (a || d) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(i, u), d && rr(i, u);
        }
        return tr(e, a, d, o, n, $.current, i);
      }
    }
    var H = S.ReactCurrentOwner, Re = S.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function Ee() {
      {
        if (H.current) {
          var e = E(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + E(e._owner.type) + "."), P(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && be(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = De(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              Q(i.value) && be(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = E(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var Te = {};
    function Ce(e, r, t, n, o, s) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = ar();
          d ? a += d : a += Ee();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === h ? (c = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var u = nr(e, r, t, o, s);
        if (u == null)
          return u;
        if (i) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (G(m)) {
                for (var k = 0; k < m.length; k++)
                  xe(m[k], e);
                Object.freeze && Object.freeze(m);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(m, e);
        }
        if (I.call(r, "key")) {
          var w = E(e), p = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ee = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[w + ee]) {
            var dr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, w, dr, w), Te[w + ee] = !0;
          }
        }
        return e === R ? sr(u) : or(u), u;
      }
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = ur, fr = cr;
    M.Fragment = R, M.jsx = lr, M.jsxs = fr;
  }()), M;
}
var je;
function Rr() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? q.exports = mr() : q.exports = yr()), q.exports;
}
var v = Rr(), D = {}, Se;
function Er() {
  if (Se) return D;
  Se = 1;
  var y = hr;
  if (process.env.NODE_ENV === "production")
    D.createRoot = y.createRoot, D.hydrateRoot = y.hydrateRoot;
  else {
    var h = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    D.createRoot = function(_, R) {
      h.usingClientEntryPoint = !0;
      try {
        return y.createRoot(_, R);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    }, D.hydrateRoot = function(_, R, O) {
      h.usingClientEntryPoint = !0;
      try {
        return y.hydrateRoot(_, R, O);
      } finally {
        h.usingClientEntryPoint = !1;
      }
    };
  }
  return D;
}
var _r = Er();
const br = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", xr = "/vite.svg";
function Tr() {
  const [y, h] = pr(0);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ v.jsx("img", { src: xr, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ v.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ v.jsx("img", { src: br, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ v.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ v.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ v.jsxs("button", { onClick: () => h((_) => _ + 1), children: [
        "count is ",
        y
      ] }),
      /* @__PURE__ */ v.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ v.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ v.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
_r.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ v.jsx(gr, { children: /* @__PURE__ */ v.jsx(Tr, {}) })
);

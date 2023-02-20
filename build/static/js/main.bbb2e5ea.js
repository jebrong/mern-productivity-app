/*! For license information please see main.bbb2e5ea.js.LICENSE.txt */
!(function () {
  var e = {
      472: function (e) {
        e.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function u(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var A = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(A, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(A, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(A, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          C = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          F = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          V = Object.assign;
        function M(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var I = !1;
        function z(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var a = l.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var u = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case w:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case j:
              return "Suspense";
            case C:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case F:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Z(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function $(e, t) {
          K(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function ie(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var Ae = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              Ae[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Se = null;
        function Ee(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof we) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xa(t)), we(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Te() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function je() {}
        var Ce = !1;
        function Pe(e, t, n) {
          if (Ce) return e(t, n);
          Ce = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Ce = !1), (null !== ke || null !== Se) && (je(), Te());
          }
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            Oe = !1;
          }
        function Le(e, t, n, r, a, i, o, s, u) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ve = null,
          Me = !1,
          Ie = null,
          ze = {
            onError: function (e) {
              (De = !0), (Ve = e);
            },
          };
        function Ue(e, t, n, r, a, i, o, s, u) {
          (De = !1), (Ve = null), Le.apply(ze, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var s = !1, u = a.child; u; ) {
                    if (u === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (u === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (u === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Xe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ze = a.unstable_requestPaint,
          Ke = a.unstable_now,
          $e = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ut) | 0)) | 0;
              },
          st = Math.log,
          ut = Math.LN2;
        var lt = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = ft(s)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = lt;
          return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function At(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          wt,
          kt,
          St,
          Et,
          _t = !1,
          Tt = [],
          Nt = null,
          jt = null,
          Ct = null,
          Pt = new Map(),
          Ft = new Map(),
          Ot = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ct = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ft.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Vt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function zt() {
          (_t = !1),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== jt && Mt(jt) && (jt = null),
            null !== Ct && Mt(Ct) && (Ct = null),
            Pt.forEach(It),
            Ft.forEach(It);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Bt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Tt.length) {
            Ut(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ut(Nt, e),
              null !== jt && Ut(jt, e),
              null !== Ct && Ut(Ct, e),
              Pt.forEach(t),
              Ft.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            Vt(n), null === n.blockedOn && Ot.shift();
        }
        var Ht = b.ReactCurrentBatchConfig,
          Wt = !0;
        function qt(e, t, n, r) {
          var a = yt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 1), Xt(e, t, n, r);
          } finally {
            (yt = a), (Ht.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          var a = yt,
            i = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 4), Xt(e, t, n, r);
          } finally {
            (yt = a), (Ht.transition = i);
          }
        }
        function Xt(e, t, n, r) {
          if (Wt) {
            var a = Qt(e, t, n, r);
            if (null === a) Wr(e, t, r, Gt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (jt = Dt(jt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ct = Dt(Ct, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Pt.set(i, Dt(Pt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Ft.set(i, Dt(Ft.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ya(a);
                if (
                  (null !== i && xt(i),
                  null === (i = Qt(e, t, n, r)) && Wr(e, t, r, Gt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = ga((e = xe(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Zt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch ($e()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          $t = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = $t,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          un,
          ln = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(ln),
          fn = V({}, ln, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = V({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (sn = e.screenY - un.screenY))
                      : (sn = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          vn = an(V({}, pn, { dataTransfer: 0 })),
          mn = an(V({}, fn, { relatedTarget: 0 })),
          An = an(
            V({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = V({}, ln, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(gn),
          bn = an(V({}, ln, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          wn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function En() {
          return Sn;
        }
        var _n = V({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(_n),
          Nn = an(
            V({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            V({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Cn = an(
            V({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = V({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Fn = an(Pn),
          On = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var Dn = c && "TextEvent" in window && !Ln,
          Vn = c && (!Rn || (Ln && 8 < Ln && 11 >= Ln)),
          Mn = String.fromCharCode(32),
          In = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          _e(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Xn = null;
        function Gn(e) {
          Mr(e, 0);
        }
        function Qn(e) {
          if (X(ba(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var $n;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            $n = Jn;
          } else $n = !1;
          Kn = $n && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (Xn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Xn)) {
            var t = [];
            qn(t, Xn, e, xe(e)), Pe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Xn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Xn);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = lr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          Ar = null,
          gr = null,
          yr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == mr ||
            mr !== G(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Yr(Ar, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Er(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var _r = Er("animationend"),
          Tr = Er("animationiteration"),
          Nr = Er("animationstart"),
          jr = Er("transitionend"),
          Cr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Fr(e, t) {
          Cr.set(e, t), u(t, [e]);
        }
        for (var Or = 0; Or < Pr.length; Or++) {
          var Rr = Pr[Or];
          Fr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Fr(_r, "onAnimationEnd"),
          Fr(Tr, "onAnimationIteration"),
          Fr(Nr, "onAnimationStart"),
          Fr("dblclick", "onDoubleClick"),
          Fr("focusin", "onFocus"),
          Fr("focusout", "onBlur"),
          Fr(jr, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function Vr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, u, l) {
              if ((Ue.apply(this, arguments), De)) {
                if (!De) throw Error(i(198));
                var c = Ve;
                (De = !1), (Ve = null), Me || ((Me = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    u = s.instance,
                    l = s.currentTarget;
                  if (((s = s.listener), u !== i && a.isPropagationStopped()))
                    break e;
                  Vr(a, s, l), (i = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (s = r[o]).instance),
                    (l = s.currentTarget),
                    (s = s.listener),
                    u !== i && a.isPropagationStopped())
                  )
                    break e;
                  Vr(a, s, l), (i = u);
                }
            }
          }
          if (Me) throw ((e = Ie), (Me = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Zt(t)) {
            case 1:
              var a = qt;
              break;
            case 4:
              a = Yt;
              break;
            default:
              a = Xt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ga(s))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              a = xe(n),
              o = [];
            e: {
              var s = Cr.get(e);
              if (void 0 !== s) {
                var u = cn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (l = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (l = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = jn;
                    break;
                  case _r:
                  case Tr:
                  case Nr:
                    u = An;
                    break;
                  case jr:
                    u = Cn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Fn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Nn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Fe(h, d)) &&
                        c.push(qr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new u(s, l, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!ga(l) && !l[ha])) &&
                  (u || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? ga(l)
                          : null) &&
                        (l !== (f = Be(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((u = null), (l = r)),
                  u !== l))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? s : ba(u)),
                  (p = null == l ? s : ba(l)),
                  ((s = new c(v, h + "leave", u, n, a)).target = f),
                  (s.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", l, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && l)
                )
                  e: {
                    for (d = l, h = 0, p = c = u; p; p = Xr(p)) h++;
                    for (p = 0, v = d; v; v = Xr(v)) p++;
                    for (; 0 < h - p; ) (c = Xr(c)), h--;
                    for (; 0 < p - h; ) (d = Xr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Xr(c)), (d = Xr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Gr(o, s, u, c, !1),
                  null !== l && null !== f && Gr(o, f, l, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (s = r ? ba(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === u && "file" === s.type)
              )
                var m = Zn;
              else if (Wn(s))
                if (Kn) m = or;
                else {
                  m = ar;
                  var A = rr;
                }
              else
                (u = s.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? qn(o, m, n, a)
                  : (A && A(e, s, r),
                    "focusout" === e &&
                      (A = s._wrapperState) &&
                      A.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (A = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(A) || "true" === A.contentEditable) &&
                    ((mr = A), (Ar = r), (gr = null));
                  break;
                case "focusout":
                  gr = Ar = mr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), br(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  br(o, n, a);
              }
              var g;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Bn
                  ? zn(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Vn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Bn && (g = en())
                    : (($t = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Bn = !0))),
                0 < (A = Yr(r, y)).length &&
                  ((y = new bn(y, e, null, n, a)),
                  o.push({ event: y, listeners: A }),
                  g ? (y.data = g) : null !== (g = Un(n)) && (y.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Rn && zn(e, t))
                          ? ((e = en()), (Jt = $t = Kt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Vn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Mr(o, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Fe(e, n)) && r.unshift(qr(e, i, a)),
              null != (i = Fe(e, t)) && r.push(qr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Xr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              u = s.alternate,
              l = s.stateNode;
            if (null !== u && u === r) break;
            5 === s.tag &&
              null !== l &&
              ((s = l),
              a
                ? null != (u = Fe(n, i)) && o.unshift(qr(n, u, s))
                : a || (null != (u = Fe(n, i)) && o.push(qr(n, u, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Zr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Zr, "");
        }
        function $r(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function la(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          Aa = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function _a(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Ta = {},
          Na = Sa(Ta),
          ja = Sa(!1),
          Ca = Ta;
        function Pa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Fa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          Ea(ja), Ea(Na);
        }
        function Ra(e, t, n) {
          if (Na.current !== Ta) throw Error(i(168));
          _a(Na, t), _a(ja, n);
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, H(e) || "Unknown", a));
          return V({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Ca = Na.current),
            _a(Na, e),
            _a(ja, ja.current),
            !0
          );
        }
        function Va(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = La(e, t, Ca)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(ja),
              Ea(Na),
              _a(Na, e))
            : Ea(ja),
            _a(ja, n);
        }
        var Ma = null,
          Ia = !1,
          za = !1;
        function Ua(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function Ba() {
          if (!za && null !== Ma) {
            za = !0;
            var e = 0,
              t = yt;
            try {
              var n = Ma;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Ia = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Xe(Je, Ba), a);
            } finally {
              (yt = t), (za = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Wa = 0,
          qa = null,
          Ya = 0,
          Xa = [],
          Ga = 0,
          Qa = null,
          Za = 1,
          Ka = "";
        function $a(e, t) {
          (Ha[Wa++] = Ya), (Ha[Wa++] = qa), (qa = e), (Ya = t);
        }
        function Ja(e, t, n) {
          (Xa[Ga++] = Za), (Xa[Ga++] = Ka), (Xa[Ga++] = Qa), (Qa = e);
          var r = Za;
          e = Ka;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Za = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ka = i + e);
          } else (Za = (1 << i) | (n << a) | r), (Ka = e);
        }
        function ei(e) {
          null !== e.return && ($a(e, 1), Ja(e, 1, 0));
        }
        function ti(e) {
          for (; e === qa; )
            (qa = Ha[--Wa]), (Ha[Wa] = null), (Ya = Ha[--Wa]), (Ha[Wa] = null);
          for (; e === Qa; )
            (Qa = Xa[--Ga]),
              (Xa[Ga] = null),
              (Ka = Xa[--Ga]),
              (Xa[Ga] = null),
              (Za = Xa[--Ga]),
              (Xa[Ga] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Pl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function si(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = la(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Za, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pl(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ui(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function li(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (ui(e)) throw Error(i(418));
                t = la(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (ui(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function fi(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (ui(e)) throw (di(), Error(i(418)));
            for (; t; ) oi(e, t), (t = la(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = la(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? la(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = ri; e; ) e = la(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = b.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ai = Sa(null),
          gi = null,
          yi = null,
          bi = null;
        function xi() {
          bi = yi = gi = null;
        }
        function wi(e) {
          var t = Ai.current;
          Ea(Ai), (e._currentValue = t);
        }
        function ki(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Si(e, t) {
          (gi = e),
            (bi = yi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Ei(e) {
          var t = e._currentValue;
          if (bi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === yi)
            ) {
              if (null === gi) throw Error(i(308));
              (yi = e), (gi.dependencies = { lanes: 0, firstContext: e });
            } else yi = yi.next = e;
          return t;
        }
        var _i = null;
        function Ti(e) {
          null === _i ? (_i = [e]) : _i.push(e);
        }
        function Ni(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ti(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            ji(e, r)
          );
        }
        function ji(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ci = !1;
        function Pi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Oi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ri(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              ji(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ti(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            ji(e, n)
          );
        }
        function Li(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vi(e, t, n, r) {
          var a = e.updateQueue;
          Ci = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var u = s,
              l = u.next;
            (u.next = null), null === o ? (i = l) : (o.next = l), (o = u);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = l) : (s.next = l),
              (c.lastBaseUpdate = u));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = l = u = null, s = i; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = s;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = V({}, f, d);
                      break e;
                    case 2:
                      Ci = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((l = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = l),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Du |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Mi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Ii = new r.Component().refs;
        function zi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = el(),
              a = tl(e),
              i = Oi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ri(e, i, a)) && (nl(t, e, a, r), Li(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = el(),
              a = tl(e),
              i = Oi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Ri(e, i, a)) && (nl(t, e, a, r), Li(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = el(),
              r = tl(e),
              a = Oi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ri(e, a, r)) && (nl(t, e, r, n), Li(t, e, r));
          },
        };
        function Bi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, i);
        }
        function Hi(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ei(i))
              : ((a = Fa(t) ? Ca : Na.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function qi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Ii), Pi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ei(i))
            : ((i = Fa(t) ? Ca : Na.current), (a.context = Pa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (zi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ui.enqueueReplaceState(a, a.state, null),
              Vi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Ii && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Xi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Gi(e) {
          return (0, e._init)(e._payload);
        }
        function Qi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ol(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Vl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var i = n.type;
            return i === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === F &&
                    Gi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Yi(e, t, n)), (r.return = e), r)
              : (((r = Rl(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ml(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ll(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Vl("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Rl(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Ml(t, e.mode, n)).return = e), t;
                case F:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = Ll(t, e.mode, n, null)).return = e), t;
              Xi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? l(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case F:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== a ? null : f(e, t, n, r, null);
              Xi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case F:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || L(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Xi(t, r);
            }
            return null;
          }
          function v(a, i, s, u) {
            for (
              var l = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var A = p(a, f, s[v], u);
              if (null === A) {
                null === f && (f = m);
                break;
              }
              e && f && null === A.alternate && t(a, f),
                (i = o(A, i, v)),
                null === c ? (l = A) : (c.sibling = A),
                (c = A),
                (f = m);
            }
            if (v === s.length) return n(a, f), ai && $a(a, v), l;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = d(a, s[v], u)) &&
                  ((i = o(f, i, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return ai && $a(a, v), l;
            }
            for (f = r(a, f); v < s.length; v++)
              null !== (m = h(f, a, v, s[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (l = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ai && $a(a, v),
              l
            );
          }
          function m(a, s, u, l) {
            var c = L(u);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), v = s, m = (s = 0), A = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((A = v), (v = null)) : (A = v.sibling);
              var y = p(a, v, g.value, l);
              if (null === y) {
                null === v && (v = A);
                break;
              }
              e && v && null === y.alternate && t(a, v),
                (s = o(y, s, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y),
                (v = A);
            }
            if (g.done) return n(a, v), ai && $a(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, l)) &&
                  ((s = o(g, s, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ai && $a(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, l)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (s = o(g, s, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && $a(a, m),
              c
            );
          }
          return function e(r, i, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case x:
                  e: {
                    for (var l = o.key, c = i; null !== c; ) {
                      if (c.key === l) {
                        if ((l = o.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === F &&
                            Gi(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Yi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === k
                      ? (((i = Ll(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = i))
                      : (((u = Rl(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Yi(r, i, o)),
                        (u.return = r),
                        (r = u));
                  }
                  return s(r);
                case w:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Ml(o, r.mode, u)).return = r), (r = i);
                  }
                  return s(r);
                case F:
                  return e(r, i, (c = o._init)(o._payload), u);
              }
              if (te(o)) return v(r, i, o, u);
              if (L(o)) return m(r, i, o, u);
              Xi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Vl(o, r.mode, u)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Zi = Qi(!0),
          Ki = Qi(!1),
          $i = {},
          Ji = Sa($i),
          eo = Sa($i),
          to = Sa($i);
        function no(e) {
          if (e === $i) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((_a(to, t), _a(eo, e), _a(Ji, $i), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Ji), _a(Ji, t);
        }
        function ao() {
          Ea(Ji), Ea(eo), Ea(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Ji.current),
            n = ue(t, e.type);
          t !== n && (_a(eo, e), _a(Ji, n));
        }
        function oo(e) {
          eo.current === e && (Ea(Ji), Ea(eo));
        }
        var so = Sa(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var lo = [];
        function co() {
          for (var e = 0; e < lo.length; e++)
            lo[e]._workInProgressVersionPrimary = null;
          lo.length = 0;
        }
        var fo = b.ReactCurrentDispatcher,
          po = b.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          Ao = null,
          go = !1,
          yo = !1,
          bo = 0,
          xo = 0;
        function wo() {
          throw Error(i(321));
        }
        function ko(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function So(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ss : us),
            (e = n(r, a)),
            yo)
          ) {
            o = 0;
            do {
              if (((yo = !1), (bo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (Ao = mo = null),
                (t.updateQueue = null),
                (fo.current = ls),
                (e = n(r, a));
            } while (yo);
          }
          if (
            ((fo.current = os),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (Ao = mo = vo = null),
            (go = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Eo() {
          var e = 0 !== bo;
          return (bo = 0), e;
        }
        function _o() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Ao ? (vo.memoizedState = Ao = e) : (Ao = Ao.next = e), Ao
          );
        }
        function To() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === Ao ? vo.memoizedState : Ao.next;
          if (null !== t) (Ao = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === Ao ? (vo.memoizedState = Ao = e) : (Ao = Ao.next = e);
          }
          return Ao;
        }
        function No(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function jo(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var u = (s = null),
              l = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((u = l = d), (s = r)) : (l = l.next = d),
                  (vo.lanes |= f),
                  (Du |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === l ? (s = r) : (l.next = u),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Du |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Co(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (bs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Po() {}
        function Fo(e, t) {
          var n = vo,
            r = To(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (bs = !0)),
            (r = r.queue),
            Wo(Lo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== Ao && 1 & Ao.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Io(9, Ro.bind(null, n, r, a, t), void 0, null),
              null === ju)
            )
              throw Error(i(349));
            0 !== (30 & ho) || Oo(n, t, a);
          }
          return a;
        }
        function Oo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ro(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && Vo(e);
        }
        function Lo(e, t, n) {
          return n(function () {
            Do(t) && Vo(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vo(e) {
          var t = ji(e, 1);
          null !== t && nl(t, e, 1, -1);
        }
        function Mo(e) {
          var t = _o();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: No,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Io(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zo() {
          return To().memoizedState;
        }
        function Uo(e, t, n, r) {
          var a = _o();
          (vo.flags |= e),
            (a.memoizedState = Io(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = To();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && ko(r, o.deps)))
              return void (a.memoizedState = Io(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = Io(1 | t, n, i, r));
        }
        function Ho(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function Wo(e, t) {
          return Bo(2048, 8, e, t);
        }
        function qo(e, t) {
          return Bo(4, 2, e, t);
        }
        function Yo(e, t) {
          return Bo(4, 4, e, t);
        }
        function Xo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Go(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, Xo.bind(null, t, e), n)
          );
        }
        function Qo() {}
        function Zo(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ko(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function $o(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Du |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (po.transition = r);
          }
        }
        function es() {
          return To().memoizedState;
        }
        function ts(e, t, n) {
          var r = tl(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            as(t, n);
          else if (null !== (n = Ni(e, t, n, r))) {
            nl(n, e, r, el()), is(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = tl(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) as(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ti(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (l) {}
            null !== (n = Ni(e, t, a, r)) &&
              (nl(n, e, r, (a = el())), is(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function as(e, t) {
          yo = go = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function is(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var os = {
            readContext: Ei,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ei,
            useCallback: function (e, t) {
              return (_o().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ei,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, Xo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = _o();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = _o();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (_o().memoizedState = e);
            },
            useState: Mo,
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return (_o().memoizedState = e);
            },
            useTransition: function () {
              var e = Mo(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (_o().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = _o();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === ju)) throw Error(i(349));
                0 !== (30 & ho) || Oo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(Lo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Io(9, Ro.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = _o(),
                t = ju.identifierPrefix;
              if (ai) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Za & ~(1 << (32 - ot(Za) - 1))).toString(32) + n)),
                  0 < (n = bo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ei,
            useCallback: Zo,
            useContext: Ei,
            useEffect: Wo,
            useImperativeHandle: Go,
            useInsertionEffect: qo,
            useLayoutEffect: Yo,
            useMemo: Ko,
            useReducer: jo,
            useRef: zo,
            useState: function () {
              return jo(No);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return $o(To(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [jo(No)[0], To().memoizedState];
            },
            useMutableSource: Po,
            useSyncExternalStore: Fo,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ei,
            useCallback: Zo,
            useContext: Ei,
            useEffect: Wo,
            useImperativeHandle: Go,
            useInsertionEffect: qo,
            useLayoutEffect: Yo,
            useMemo: Ko,
            useReducer: Co,
            useRef: zo,
            useState: function () {
              return Co(No);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              var t = To();
              return null === mo
                ? (t.memoizedState = e)
                : $o(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Co(No)[0], To().memoizedState];
            },
            useMutableSource: Po,
            useSyncExternalStore: Fo,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Oi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (qu = r)), ds(0, t);
            }),
            n
          );
        }
        function vs(e, t, n) {
          (n = Oi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === Yu ? (Yu = new Set([this])) : Yu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = El.bind(null, e, t, n)), t.then(e, e));
        }
        function As(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gs(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Oi(-1, 1)).tag = 2), Ri(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var ys = b.ReactCurrentOwner,
          bs = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ki(t, null, n, r) : Zi(t, e.child, n, r);
        }
        function ws(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Si(t, a),
            (r = So(e, t, n, r, i, a)),
            (n = Eo()),
            null === e || bs
              ? (ai && n && ei(t), (t.flags |= 1), xs(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function ks(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Fl(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rl(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ss(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ol(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (ur(i, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ws(e, t, a);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Ou, Fu),
                (Fu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _a(Ou, Fu),
                  (Fu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                _a(Ou, Fu),
                (Fu |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _a(Ou, Fu),
              (Fu |= r);
          return xs(e, t, a, n), t.child;
        }
        function _s(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var i = Fa(n) ? Ca : Na.current;
          return (
            (i = Pa(t, i)),
            Si(t, a),
            (n = So(e, t, n, r, i, a)),
            (r = Eo()),
            null === e || bs
              ? (ai && r && ei(t), (t.flags |= 1), xs(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function Ns(e, t, n, r, a) {
          if (Fa(n)) {
            var i = !0;
            Da(t);
          } else i = !1;
          if ((Si(t, a), null === t.stateNode))
            Hs(e, t), Hi(t, n, r), qi(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var u = o.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = Ei(l))
              : (l = Pa(t, (l = Fa(n) ? Ca : Na.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || u !== l) && Wi(t, o, r, l)),
              (Ci = !1);
            var d = t.memoizedState;
            (o.state = d),
              Vi(t, r, o, a),
              (u = t.memoizedState),
              s !== r || d !== u || ja.current || Ci
                ? ("function" === typeof c &&
                    (zi(t, n, c, r), (u = t.memoizedState)),
                  (s = Ci || Bi(t, n, s, r, d, u, l))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = l),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Fi(e, t),
              (s = t.memoizedProps),
              (l = t.type === t.elementType ? s : mi(t.type, s)),
              (o.props = l),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Ei(u))
                : (u = Pa(t, (u = Fa(n) ? Ca : Na.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || d !== u) && Wi(t, o, r, u)),
              (Ci = !1),
              (d = t.memoizedState),
              (o.state = d),
              Vi(t, r, o, a);
            var h = t.memoizedState;
            s !== f || d !== h || ja.current || Ci
              ? ("function" === typeof p &&
                  (zi(t, n, p, r), (h = t.memoizedState)),
                (l = Ci || Bi(t, n, l, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = l))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return js(e, t, n, r, i, a);
        }
        function js(e, t, n, r, a, i) {
          _s(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Va(t, n, !1), Ws(e, t, i);
          (r = t.stateNode), (ys.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Zi(t, e.child, null, i)),
                (t.child = Zi(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            a && Va(t, n, !0),
            t.child
          );
        }
        function Cs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ps(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Fs,
          Os,
          Rs,
          Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ds(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Vs(e, t, n) {
          var r,
            a = t.pendingProps,
            o = so.current,
            s = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            _a(so, 1 & o),
            null === e)
          )
            return (
              li(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = u))
                        : (s = Dl(u, a, 0, null)),
                      (e = Ll(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ds(n)),
                      (t.memoizedState = Ls),
                      e)
                    : Ms(t, u))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Is(e, t, s, (r = fs(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Dl(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ll(o, a, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Zi(t, e.child, null, s),
                    (t.child.memoizedState = Ds(s)),
                    (t.memoizedState = Ls),
                    o);
              if (0 === (1 & t.mode)) return Is(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Is(e, t, s, (r = fs((o = Error(i(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (s & e.childLanes)), bs || u)) {
                if (null !== (r = ju)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), ji(e, a), nl(r, e, a, -1));
                }
                return vl(), Is(e, t, s, (r = fs(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tl.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = la(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Xa[Ga++] = Za),
                    (Xa[Ga++] = Ka),
                    (Xa[Ga++] = Qa),
                    (Za = e.id),
                    (Ka = e.overflow),
                    (Qa = t)),
                  (t = Ms(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, o, n);
          if (s) {
            (s = a.fallback), (u = t.mode), (r = (o = e.child).sibling);
            var l = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = l),
                  (t.deletions = null))
                : ((a = Ol(o, l)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Ol(r, s))
                : ((s = Ll(s, u, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ds(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (s.memoizedState = u),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ls),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Ol(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ms(e, t) {
          return (
            ((t = Dl(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Is(e, t, n, r) {
          return (
            null !== r && hi(r),
            Zi(t, e.child, null, n),
            ((e = Ms(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ki(e.return, t, n);
        }
        function Us(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Bs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = so.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zs(e, n, t);
                else if (19 === e.tag) zs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(so, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Us(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Us(t, !0, n, null, i);
                break;
              case "together":
                Us(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ol((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ol(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function qs(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ys(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xs(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ys(t), null;
            case 1:
            case 17:
              return Fa(t.type) && Oa(), Ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ea(ja),
                Ea(Na),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (ol(ii), (ii = null)))),
                Ys(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Os(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ys(t), null;
                }
                if (((e = no(Ji.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Lr.length; a++) Ir(Lr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      Z(r, o), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Ir("invalid", r);
                  }
                  for (var u in (ge(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var l = o[u];
                      "children" === u
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (!0 !== o.suppressHydrationWarning &&
                              $r(r.textContent, l, e),
                            (a = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (!0 !== o.suppressHydrationWarning &&
                              $r(r.textContent, l, e),
                            (a = ["children", "" + l]))
                        : s.hasOwnProperty(u) &&
                          null != l &&
                          "onScroll" === u &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), J(r, o, !0);
                      break;
                    case "textarea":
                      Y(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Fs(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = ye(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Lr.length; a++) Ir(Lr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        Z(e, r), (a = Q(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = V({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (o in (ge(n, a), (l = a)))
                      if (l.hasOwnProperty(o)) {
                        var c = l[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ir("scroll", e)
                              : null != c && y(e, o, c, u));
                      }
                    switch (n) {
                      case "input":
                        Y(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ys(t), null;
            case 6:
              if (e && null != t.stateNode) Rs(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Ji.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        $r(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          $r(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ys(t), null;
            case 13:
              if (
                (Ea(so),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  di(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[da] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ys(t), (o = !1);
                } else null !== ii && (ol(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & so.current)
                        ? 0 === Ru && (Ru = 3)
                        : vl())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ys(t),
                  null);
            case 4:
              return (
                ao(), null === e && Br(t.stateNode.containerInfo), Ys(t), null
              );
            case 10:
              return wi(t.type._context), Ys(t), null;
            case 19:
              if ((Ea(so), null === (o = t.memoizedState))) return Ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) qs(o, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            qs(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _a(so, (1 & so.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Bu &&
                    ((t.flags |= 128),
                    (r = !0),
                    qs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !ai)
                    )
                      return Ys(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Bu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = so.current),
                  _a(so, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ys(t), null);
            case 22:
            case 23:
              return (
                fl(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Fu) &&
                    (Ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Gs(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Fa(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ea(ja),
                Ea(Na),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ea(so),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(so), null;
            case 4:
              return ao(), null;
            case 10:
              return wi(t.type._context), null;
            case 22:
            case 23:
              return fl(), null;
            default:
              return null;
          }
        }
        (Fs = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Os = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Ji.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = V({}, a, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && l !== u && (null != l || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (l && l.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in l)
                        l.hasOwnProperty(i) &&
                          u[i] !== l[i] &&
                          (n || (n = {}), (n[i] = l[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != l && u !== l && (o = o || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (o = o || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && Ir("scroll", e),
                            o || u === l || (o = []))
                          : (o = o || []).push(c, l));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Rs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Qs = !1,
          Zs = !1,
          Ks = "function" === typeof WeakSet ? WeakSet : Set,
          $s = null;
        function Js(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sl(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            Sl(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && eu(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[Aa]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function su(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function lu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (lu(e, t, n), e = e.sibling; null !== e; )
              lu(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Zs || Js(n, t);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, t, n),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      eu(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !Zs &&
                (Js(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Sl(n, t, s);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zs = (r = Zs) || null !== n.memoizedState),
                  du(e, t, n),
                  (Zs = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ks()),
              t.forEach(function (t) {
                var r = Nl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  u = s;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(i(160));
                pu(o, s, a), (cu = null), (fu = !1);
                var l = a.alternate;
                null !== l && (l.return = null), (a.return = null);
              } catch (c) {
                Sl(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), Au(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  Sl(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  Sl(e, e.return, m);
                }
              }
              break;
            case 1:
              vu(t, e), Au(e), 512 & r && null !== n && Js(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                Au(e),
                512 & r && null !== n && Js(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Sl(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      K(a, o),
                      ye(u, s);
                    var c = ye(u, o);
                    for (s = 0; s < l.length; s += 2) {
                      var f = l[s],
                        d = l[s + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : y(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        $(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    Sl(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), Au(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  Sl(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                Au(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Sl(e, e.return, m);
                }
              break;
            case 4:
            default:
              vu(t, e), Au(e);
              break;
            case 13:
              vu(t, e),
                Au(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Uu = Ke())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zs = (c = Zs) || f), vu(t, e), (Zs = c))
                  : vu(t, e),
                Au(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for ($s = e, f = e.child; null !== f; ) {
                    for (d = $s = f; null !== $s; ) {
                      switch (((h = (p = $s).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Js(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Sl(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Js(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xu(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($s = h)) : xu(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = d.stateNode),
                              (s =
                                void 0 !== (l = d.memoizedProps.style) &&
                                null !== l &&
                                l.hasOwnProperty("display")
                                  ? l.display
                                  : null),
                              (u.style.display = ve("display", s)));
                      } catch (m) {
                        Sl(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Sl(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), Au(e), 4 & r && hu(e);
            case 21:
          }
        }
        function Au(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    lu(e, su(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  uu(e, su(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Sl(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e, t, n) {
          ($s = e), yu(e, t, n);
        }
        function yu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $s; ) {
            var a = $s,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Qs;
              if (!o) {
                var s = a.alternate,
                  u = (null !== s && null !== s.memoizedState) || Zs;
                s = Qs;
                var l = Zs;
                if (((Qs = o), (Zs = u) && !l))
                  for ($s = a; null !== $s; )
                    (u = (o = $s).child),
                      22 === o.tag && null !== o.memoizedState
                        ? wu(a)
                        : null !== u
                        ? ((u.return = o), ($s = u))
                        : wu(a);
                for (; null !== i; ) ($s = i), yu(i, t, n), (i = i.sibling);
                ($s = a), (Qs = s), (Zs = l);
              }
              bu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), ($s = i))
                : bu(e);
          }
        }
        function bu(e) {
          for (; null !== $s; ) {
            var t = $s;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zs || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Mi(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Mi(t, s, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && n.focus();
                            break;
                          case "img":
                            l.src && (n.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Zs || (512 & t.flags && au(t));
              } catch (p) {
                Sl(t, t.return, p);
              }
            }
            if (t === e) {
              $s = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($s = n);
              break;
            }
            $s = t.return;
          }
        }
        function xu(e) {
          for (; null !== $s; ) {
            var t = $s;
            if (t === e) {
              $s = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($s = n);
              break;
            }
            $s = t.return;
          }
        }
        function wu(e) {
          for (; null !== $s; ) {
            var t = $s;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    Sl(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Sl(t, a, u);
                    }
                  }
                  var i = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Sl(t, i, u);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Sl(t, o, u);
                  }
              }
            } catch (u) {
              Sl(t, t.return, u);
            }
            if (t === e) {
              $s = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), ($s = s);
              break;
            }
            $s = t.return;
          }
        }
        var ku,
          Su = Math.ceil,
          Eu = b.ReactCurrentDispatcher,
          _u = b.ReactCurrentOwner,
          Tu = b.ReactCurrentBatchConfig,
          Nu = 0,
          ju = null,
          Cu = null,
          Pu = 0,
          Fu = 0,
          Ou = Sa(0),
          Ru = 0,
          Lu = null,
          Du = 0,
          Vu = 0,
          Mu = 0,
          Iu = null,
          zu = null,
          Uu = 0,
          Bu = 1 / 0,
          Hu = null,
          Wu = !1,
          qu = null,
          Yu = null,
          Xu = !1,
          Gu = null,
          Qu = 0,
          Zu = 0,
          Ku = null,
          $u = -1,
          Ju = 0;
        function el() {
          return 0 !== (6 & Nu) ? Ke() : -1 !== $u ? $u : ($u = Ke());
        }
        function tl(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nu) && 0 !== Pu
            ? Pu & -Pu
            : null !== vi.transition
            ? (0 === Ju && (Ju = vt()), Ju)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Zt(e.type));
        }
        function nl(e, t, n, r) {
          if (50 < Zu) throw ((Zu = 0), (Ku = null), Error(i(185)));
          At(e, n, r),
            (0 !== (2 & Nu) && e === ju) ||
              (e === ju && (0 === (2 & Nu) && (Vu |= n), 4 === Ru && sl(e, Pu)),
              rl(e, r),
              1 === n &&
                0 === Nu &&
                0 === (1 & t.mode) &&
                ((Bu = Ke() + 500), Ia && Ba()));
        }
        function rl(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                u = a[o];
              -1 === u
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = pt(s, t))
                : u <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = dt(e, e === ju ? Pu : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ua(e);
                  })(ul.bind(null, e))
                : Ua(ul.bind(null, e)),
                oa(function () {
                  0 === (6 & Nu) && Ba();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = jl(n, al.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function al(e, t) {
          if ((($u = -1), (Ju = 0), 0 !== (6 & Nu))) throw Error(i(327));
          var n = e.callbackNode;
          if (wl() && e.callbackNode !== n) return null;
          var r = dt(e, e === ju ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ml(e, r);
          else {
            t = r;
            var a = Nu;
            Nu |= 2;
            var o = hl();
            for (
              (ju === e && Pu === t) ||
              ((Hu = null), (Bu = Ke() + 500), dl(e, t));
              ;

            )
              try {
                gl();
                break;
              } catch (u) {
                pl(e, u);
              }
            xi(),
              (Eu.current = o),
              (Nu = a),
              null !== Cu ? (t = 0) : ((ju = null), (Pu = 0), (t = Ru));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = il(e, a))),
              1 === t)
            )
              throw ((n = Lu), dl(e, 0), sl(e, r), rl(e, Ke()), n);
            if (6 === t) sl(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ml(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = il(e, o))),
                  1 === t))
              )
                throw ((n = Lu), dl(e, 0), sl(e, r), rl(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  xl(e, zu, Hu);
                  break;
                case 3:
                  if (
                    (sl(e, r),
                    (130023424 & r) === r && 10 < (t = Uu + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      el(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xl.bind(null, e, zu, Hu), t);
                    break;
                  }
                  xl(e, zu, Hu);
                  break;
                case 4:
                  if ((sl(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Su(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xl.bind(null, e, zu, Hu), r);
                    break;
                  }
                  xl(e, zu, Hu);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rl(e, Ke()), e.callbackNode === n ? al.bind(null, e) : null;
        }
        function il(e, t) {
          var n = Iu;
          return (
            e.current.memoizedState.isDehydrated && (dl(e, t).flags |= 256),
            2 !== (e = ml(e, t)) && ((t = zu), (zu = n), null !== t && ol(t)),
            e
          );
        }
        function ol(e) {
          null === zu ? (zu = e) : zu.push.apply(zu, e);
        }
        function sl(e, t) {
          for (
            t &= ~Mu,
              t &= ~Vu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ul(e) {
          if (0 !== (6 & Nu)) throw Error(i(327));
          wl();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rl(e, Ke()), null;
          var n = ml(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = il(e, r)));
          }
          if (1 === n) throw ((n = Lu), dl(e, 0), sl(e, t), rl(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xl(e, zu, Hu),
            rl(e, Ke()),
            null
          );
        }
        function ll(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Bu = Ke() + 500), Ia && Ba());
          }
        }
        function cl(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Nu) && wl();
          var t = Nu;
          Nu |= 1;
          var n = Tu.transition,
            r = yt;
          try {
            if (((Tu.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Tu.transition = n), 0 === (6 & (Nu = t)) && Ba();
          }
        }
        function fl() {
          (Fu = Ou.current), Ea(Ou);
        }
        function dl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Cu))
            for (n = Cu.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oa();
                  break;
                case 3:
                  ao(), Ea(ja), Ea(Na), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ea(so);
                  break;
                case 10:
                  wi(r.type._context);
                  break;
                case 22:
                case 23:
                  fl();
              }
              n = n.return;
            }
          if (
            ((ju = e),
            (Cu = e = Ol(e.current, null)),
            (Pu = Fu = t),
            (Ru = 0),
            (Lu = null),
            (Mu = Vu = Du = 0),
            (zu = Iu = null),
            null !== _i)
          ) {
            for (t = 0; t < _i.length; t++)
              if (null !== (r = (n = _i[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            _i = null;
          }
          return e;
        }
        function pl(e, t) {
          for (;;) {
            var n = Cu;
            try {
              if ((xi(), (fo.current = os), go)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                go = !1;
              }
              if (
                ((ho = 0),
                (Ao = mo = vo = null),
                (yo = !1),
                (bo = 0),
                (_u.current = null),
                null === n || null === n.return)
              ) {
                (Ru = 1), (Lu = t), (Cu = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  u = n,
                  l = t;
                if (
                  ((t = Pu),
                  (u.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = As(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      gs(h, s, u, 0, t),
                      1 & h.mode && ms(o, c, t),
                      (l = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(l), (t.updateQueue = m);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(o, c, t), vl();
                    break e;
                  }
                  l = Error(i(426));
                } else if (ai && 1 & u.mode) {
                  var A = As(s);
                  if (null !== A) {
                    0 === (65536 & A.flags) && (A.flags |= 256),
                      gs(A, s, u, 0, t),
                      hi(cs(l, u));
                    break e;
                  }
                }
                (o = l = cs(l, u)),
                  4 !== Ru && (Ru = 2),
                  null === Iu ? (Iu = [o]) : Iu.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Di(o, hs(0, l, t));
                      break e;
                    case 1:
                      u = l;
                      var g = o.type,
                        y = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Yu || !Yu.has(y))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Di(o, vs(o, u, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              bl(n);
            } catch (b) {
              (t = b), Cu === n && null !== n && (Cu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hl() {
          var e = Eu.current;
          return (Eu.current = os), null === e ? os : e;
        }
        function vl() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === ju ||
              (0 === (268435455 & Du) && 0 === (268435455 & Vu)) ||
              sl(ju, Pu);
        }
        function ml(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = hl();
          for ((ju === e && Pu === t) || ((Hu = null), dl(e, t)); ; )
            try {
              Al();
              break;
            } catch (a) {
              pl(e, a);
            }
          if ((xi(), (Nu = n), (Eu.current = r), null !== Cu))
            throw Error(i(261));
          return (ju = null), (Pu = 0), Ru;
        }
        function Al() {
          for (; null !== Cu; ) yl(Cu);
        }
        function gl() {
          for (; null !== Cu && !Qe(); ) yl(Cu);
        }
        function yl(e) {
          var t = ku(e.alternate, e, Fu);
          (e.memoizedProps = e.pendingProps),
            null === t ? bl(e) : (Cu = t),
            (_u.current = null);
        }
        function bl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xs(n, t, Fu))) return void (Cu = n);
            } else {
              if (null !== (n = Gs(n, t)))
                return (n.flags &= 32767), void (Cu = n);
              if (null === e) return (Ru = 6), void (Cu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Cu = t);
            Cu = t = e;
          } while (null !== t);
          0 === Ru && (Ru = 5);
        }
        function xl(e, t, n) {
          var r = yt,
            a = Tu.transition;
          try {
            (Tu.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  wl();
                } while (null !== Gu);
                if (0 !== (6 & Nu)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === ju && ((Cu = ju = null), (Pu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xu ||
                    ((Xu = !0),
                    jl(tt, function () {
                      return wl(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Tu.transition), (Tu.transition = null);
                  var s = yt;
                  yt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (_u.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                u = -1,
                                l = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = s + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = s),
                                    p === o && ++f === r && (l = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === l
                                  ? null
                                  : { start: u, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          $s = t;
                        null !== $s;

                      )
                        if (
                          ((e = (t = $s).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($s = e);
                        else
                          for (; null !== $s; ) {
                            t = $s;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        A = v.memoizedState,
                                        g = t.stateNode,
                                        y = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          A
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (x) {
                              Sl(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($s = e);
                              break;
                            }
                            $s = t.return;
                          }
                      (v = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gu(n, e, a),
                    Ze(),
                    (Nu = u),
                    (yt = s),
                    (Tu.transition = o);
                } else e.current = n;
                if (
                  (Xu && ((Xu = !1), (Gu = e), (Qu = a)),
                  (o = e.pendingLanes),
                  0 === o && (Yu = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rl(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = qu), (qu = null), e);
                0 !== (1 & Qu) && 0 !== e.tag && wl(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Ku
                      ? Zu++
                      : ((Zu = 0), (Ku = e))
                    : (Zu = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Tu.transition = a), (yt = r);
          }
          return null;
        }
        function wl() {
          if (null !== Gu) {
            var e = bt(Qu),
              t = Tu.transition,
              n = yt;
            try {
              if (((Tu.transition = null), (yt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Qu = 0), 0 !== (6 & Nu)))
                  throw Error(i(331));
                var a = Nu;
                for (Nu |= 4, $s = e.current; null !== $s; ) {
                  var o = $s,
                    s = o.child;
                  if (0 !== (16 & $s.flags)) {
                    var u = o.deletions;
                    if (null !== u) {
                      for (var l = 0; l < u.length; l++) {
                        var c = u[l];
                        for ($s = c; null !== $s; ) {
                          var f = $s;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), ($s = d);
                          else
                            for (; null !== $s; ) {
                              var p = (f = $s).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                $s = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($s = p);
                                break;
                              }
                              $s = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var A = m.sibling;
                            (m.sibling = null), (m = A);
                          } while (null !== m);
                        }
                      }
                      $s = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), ($s = s);
                  else
                    e: for (; null !== $s; ) {
                      if (0 !== (2048 & (o = $s).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), ($s = g);
                        break e;
                      }
                      $s = o.return;
                    }
                }
                var y = e.current;
                for ($s = y; null !== $s; ) {
                  var b = (s = $s).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== b)
                    (b.return = s), ($s = b);
                  else
                    e: for (s = y; null !== $s; ) {
                      if (0 !== (2048 & (u = $s).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (w) {
                          Sl(u, u.return, w);
                        }
                      if (u === s) {
                        $s = null;
                        break e;
                      }
                      var x = u.sibling;
                      if (null !== x) {
                        (x.return = u.return), ($s = x);
                        break e;
                      }
                      $s = u.return;
                    }
                }
                if (
                  ((Nu = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Tu.transition = t);
            }
          }
          return !1;
        }
        function kl(e, t, n) {
          (e = Ri(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = el()),
            null !== e && (At(e, 1, t), rl(e, t));
        }
        function Sl(e, t, n) {
          if (3 === e.tag) kl(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kl(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yu || !Yu.has(r)))
                ) {
                  (t = Ri(t, (e = vs(t, (e = cs(n, e)), 1)), 1)),
                    (e = el()),
                    null !== t && (At(t, 1, e), rl(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function El(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = el()),
            (e.pingedLanes |= e.suspendedLanes & n),
            ju === e &&
              (Pu & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Pu) === Pu && 500 > Ke() - Uu)
                ? dl(e, 0)
                : (Mu |= n)),
            rl(e, t);
        }
        function _l(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = el();
          null !== (e = ji(e, t)) && (At(e, t, n), rl(e, n));
        }
        function Tl(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), _l(e, n);
        }
        function Nl(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), _l(e, n);
        }
        function jl(e, t) {
          return Xe(e, t);
        }
        function Cl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pl(e, t, n, r) {
          return new Cl(e, t, n, r);
        }
        function Fl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ol(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Rl(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Fl(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case k:
                return Ll(n.children, a, o, t);
              case S:
                (s = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Pl(12, n, t, 2 | a)).elementType = E), (e.lanes = o), e
                );
              case j:
                return (
                  ((e = Pl(13, n, t, a)).elementType = j), (e.lanes = o), e
                );
              case C:
                return (
                  ((e = Pl(19, n, t, a)).elementType = C), (e.lanes = o), e
                );
              case O:
                return Dl(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      s = 10;
                      break e;
                    case T:
                      s = 9;
                      break e;
                    case N:
                      s = 11;
                      break e;
                    case P:
                      s = 14;
                      break e;
                    case F:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pl(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ll(e, t, n, r) {
          return ((e = Pl(7, e, r, t)).lanes = n), e;
        }
        function Dl(e, t, n, r) {
          return (
            ((e = Pl(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Vl(e, t, n) {
          return ((e = Pl(6, e, null, t)).lanes = n), e;
        }
        function Ml(e, t, n) {
          return (
            ((t = Pl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Il(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zl(e, t, n, r, a, i, o, s, u) {
          return (
            (e = new Il(e, t, n, s, u)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Pl(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pi(i),
            e
          );
        }
        function Ul(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bl(e) {
          if (!e) return Ta;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Fa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Fa(n)) return La(e, n, t);
          }
          return t;
        }
        function Hl(e, t, n, r, a, i, o, s, u) {
          return (
            ((e = zl(n, r, !0, e, 0, i, 0, s, u)).context = Bl(null)),
            (n = e.current),
            ((i = Oi((r = el()), (a = tl(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ri(n, i, a),
            (e.current.lanes = a),
            At(e, a, r),
            rl(e, r),
            e
          );
        }
        function Wl(e, t, n, r) {
          var a = t.current,
            i = el(),
            o = tl(a);
          return (
            (n = Bl(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Oi(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ri(a, t, o)) && (nl(e, a, o, i), Li(e, a, o)),
            o
          );
        }
        function ql(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Yl(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Xl(e, t) {
          Yl(e, t), (e = e.alternate) && Yl(e, t);
        }
        ku = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Cs(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Fa(t.type) && Da(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        _a(Ai, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(so, 1 & so.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Vs(e, t, n)
                            : (_a(so, 1 & so.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        _a(so, 1 & so.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(so, so.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), ai && 0 !== (1048576 & t.flags) && Ja(t, Ya, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var a = Pa(t, Na.current);
              Si(t, n), (a = So(null, t, r, e, a, n));
              var o = Eo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Fa(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Pi(t),
                    (a.updater = Ui),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    qi(t, r, e, n),
                    (t = js(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    xs(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Fl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ws(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ns(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Cs(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Fi(e, t),
                  Vi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ps(e, t, r, n, (a = cs(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ps(e, t, r, n, (a = cs(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = la(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ki(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && li(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                _s(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && li(t), null;
            case 13:
              return Vs(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zi(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ws(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  _a(Ai, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !ja.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies;
                      if (null !== u) {
                        s = o.child;
                        for (var l = u.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === o.tag) {
                              (l = Oi(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (l.next = l)
                                  : ((l.next = f.next), (f.next = l)),
                                  (c.pending = l);
                              }
                            }
                            (o.lanes |= n),
                              null !== (l = o.alternate) && (l.lanes |= n),
                              ki(o.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (u = s.alternate) && (u.lanes |= n),
                          ki(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                xs(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Si(t, n),
                (r = r((a = Ei(a)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                ks(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Hs(e, t),
                (t.tag = 1),
                Fa(r) ? ((e = !0), Da(t)) : (e = !1),
                Si(t, n),
                Hi(t, r, a),
                qi(t, r, a, n),
                js(null, t, r, !0, e, n)
              );
            case 19:
              return Bs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gl =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ql(e) {
          this._internalRoot = e;
        }
        function Zl(e) {
          this._internalRoot = e;
        }
        function Kl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function $l(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jl() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = ql(o);
                s.call(e);
              };
            }
            Wl(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = ql(o);
                    i.call(e);
                  };
                }
                var o = Hl(t, r, e, 0, null, !1, 0, "", Jl);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  cl(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = ql(u);
                  s.call(e);
                };
              }
              var u = zl(e, 0, !1, null, 0, !1, 0, "", Jl);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                cl(function () {
                  Wl(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return ql(o);
        }
        (Zl.prototype.render = Ql.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Wl(e, t, null, null);
          }),
          (Zl.prototype.unmount = Ql.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cl(function () {
                  Wl(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Zl.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              Ot.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rl(t, Ke()),
                    0 === (6 & Nu) && ((Bu = Ke() + 500), Ba()));
                }
                break;
              case 13:
                cl(function () {
                  var t = ji(e, 1);
                  if (null !== t) {
                    var n = el();
                    nl(t, e, 1, n);
                  }
                }),
                  Xl(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = ji(e, 134217728);
              if (null !== t) nl(t, e, 134217728, el());
              Xl(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tl(e),
                n = ji(e, t);
              if (null !== n) nl(n, e, t, el());
              Xl(e, t);
            }
          }),
          (St = function () {
            return yt;
          }),
          (Et = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if (($(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(i(90));
                      X(r), $(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = ll),
          (je = cl);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ya, ba, xa, _e, Te, ll],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kl(t)) throw Error(i(200));
            return Ul(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Kl(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Gl;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zl(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Ql(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cl(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!$l(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Kl(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = Gl;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Hl(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Zl(t);
          }),
          (t.render = function (e, t, n) {
            if (!$l(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!$l(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cl(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ll),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!$l(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      722: function (e, t, n) {
        var r;
        "undefined" != typeof self && self,
          (e.exports =
            ((r = n(791)),
            (function (e) {
              var t = {};
              function n(r) {
                if (t[r]) return t[r].exports;
                var a = (t[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
                );
              }
              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
                }),
                (n.r = function (e) {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (n.t = function (e, t) {
                  if ((1 & t && (e = n(e)), 8 & t)) return e;
                  if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                  var r = Object.create(null);
                  if (
                    (n.r(r),
                    Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e,
                    }),
                    2 & t && "string" != typeof e)
                  )
                    for (var a in e)
                      n.d(
                        r,
                        a,
                        function (t) {
                          return e[t];
                        }.bind(null, a)
                      );
                  return r;
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = ""),
                n((n.s = 3))
              );
            })([
              function (e, t) {
                e.exports = r;
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.Validate = t.Time = void 0);
                var r = i(n(5)),
                  a = i(n(6));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                (t.Time = r.default), (t.Validate = a.default);
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.useInterval = void 0);
                var r = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(n(7));
                t.useInterval = r.default;
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.useTime = t.useStopwatch = t.useTimer = void 0);
                var r =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  };
                t.default = function (e) {
                  if (
                    ((0, a.useEffect)(function () {
                      console.warn(
                        "react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead"
                      );
                    }, []),
                    e.expiryTimestamp)
                  ) {
                    var t = (0, i.default)(e);
                    return r({}, t, {
                      startTimer: t.start,
                      stopTimer: t.pause,
                      resetTimer: function () {},
                    });
                  }
                  var n = (0, o.default)(e);
                  return r({}, n, {
                    startTimer: n.start,
                    stopTimer: n.pause,
                    resetTimer: n.reset,
                  });
                };
                var a = n(0),
                  i = u(n(4)),
                  o = u(n(8)),
                  s = u(n(9));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                (t.useTimer = i.default),
                  (t.useStopwatch = o.default),
                  (t.useTime = s.default);
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    },
                  a = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var n = [],
                          r = !0,
                          a = !1,
                          i = void 0;
                        try {
                          for (
                            var o, s = e[Symbol.iterator]();
                            !(r = (o = s.next()).done) &&
                            (n.push(o.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (a = !0), (i = e);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (a) throw i;
                          }
                        }
                        return n;
                      })(e, t);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  };
                t.default = function (e) {
                  var t = e.expiryTimestamp,
                    n = e.onExpire,
                    c = e.autoStart,
                    f = void 0 === c || c,
                    d = (0, i.useState)(t),
                    p = a(d, 2),
                    h = p[0],
                    v = p[1],
                    m = (0, i.useState)(o.Time.getSecondsFromExpiry(h)),
                    A = a(m, 2),
                    g = A[0],
                    y = A[1],
                    b = (0, i.useState)(f),
                    x = a(b, 2),
                    w = x[0],
                    k = x[1],
                    S = (0, i.useState)(f),
                    E = a(S, 2),
                    _ = E[0],
                    T = E[1],
                    N = (0, i.useState)(l(h)),
                    j = a(N, 2),
                    C = j[0],
                    P = j[1];
                  function F(e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    P(l(e)),
                      T(t),
                      k(t),
                      v(e),
                      y(o.Time.getSecondsFromExpiry(e));
                  }
                  function O() {
                    var e = new Date();
                    e.setMilliseconds(e.getMilliseconds() + 1e3 * g), F(e);
                  }
                  return (
                    (0, s.useInterval)(
                      function () {
                        C !== u && P(u);
                        var e = o.Time.getSecondsFromExpiry(h);
                        y(e),
                          e <= 0 &&
                            (o.Validate.onExpire(n) && n(), k(!1), P(null));
                      },
                      w ? C : null
                    ),
                    r({}, o.Time.getTimeFromSeconds(g), {
                      start: function () {
                        _ ? (y(o.Time.getSecondsFromExpiry(h)), k(!0)) : O();
                      },
                      pause: function () {
                        k(!1);
                      },
                      resume: O,
                      restart: F,
                      isRunning: w,
                    })
                  );
                };
                var i = n(0),
                  o = n(1),
                  s = n(2),
                  u = 1e3;
                function l(e) {
                  if (!o.Validate.expiryTimestamp(e)) return null;
                  var t = o.Time.getSecondsFromExpiry(e),
                    n = Math.floor(1e3 * (t - Math.floor(t)));
                  return n > 0 ? n : u;
                }
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = (function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n), r && e(t, r), t;
                    };
                  })(),
                  a = (function () {
                    function e() {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                    }
                    return (
                      r(e, null, [
                        {
                          key: "getTimeFromSeconds",
                          value: function (e) {
                            var t = Math.ceil(e),
                              n = Math.floor(t / 86400),
                              r = Math.floor((t % 86400) / 3600),
                              a = Math.floor((t % 3600) / 60);
                            return {
                              seconds: Math.floor(t % 60),
                              minutes: a,
                              hours: r,
                              days: n,
                            };
                          },
                        },
                        {
                          key: "getSecondsFromExpiry",
                          value: function (e, t) {
                            var n = e - new Date().getTime();
                            if (n > 0) {
                              var r = n / 1e3;
                              return t ? Math.round(r) : r;
                            }
                            return 0;
                          },
                        },
                        {
                          key: "getSecondsFromPrevTime",
                          value: function (e, t) {
                            var n = new Date().getTime() - e;
                            if (n > 0) {
                              var r = n / 1e3;
                              return t ? Math.round(r) : r;
                            }
                            return 0;
                          },
                        },
                        {
                          key: "getSecondsFromTimeNow",
                          value: function () {
                            var e = new Date();
                            return (
                              e.getTime() / 1e3 - 60 * e.getTimezoneOffset()
                            );
                          },
                        },
                        {
                          key: "getFormattedTimeFromSeconds",
                          value: function (t, n) {
                            var r = e.getTimeFromSeconds(t),
                              a = r.seconds,
                              i = r.minutes,
                              o = r.hours,
                              s = "",
                              u = o;
                            return (
                              "12-hour" === n &&
                                ((s = o >= 12 ? "pm" : "am"), (u = o % 12)),
                              { seconds: a, minutes: i, hours: u, ampm: s }
                            );
                          },
                        },
                      ]),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = (function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n), r && e(t, r), t;
                    };
                  })(),
                  a = (function () {
                    function e() {
                      !(function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                    }
                    return (
                      r(e, null, [
                        {
                          key: "expiryTimestamp",
                          value: function (e) {
                            var t = new Date(e).getTime() > 0;
                            return (
                              t ||
                                console.warn(
                                  "react-timer-hook: { useTimer } Invalid expiryTimestamp settings",
                                  e
                                ),
                              t
                            );
                          },
                        },
                        {
                          key: "onExpire",
                          value: function (e) {
                            var t = e && "function" == typeof e;
                            return (
                              e &&
                                !t &&
                                console.warn(
                                  "react-timer-hook: { useTimer } Invalid onExpire settings function",
                                  e
                                ),
                              t
                            );
                          },
                        },
                      ]),
                      e
                    );
                  })();
                t.default = a;
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e, t) {
                    var n = (0, r.useRef)();
                    (0, r.useEffect)(function () {
                      n.current = e;
                    }),
                      (0, r.useEffect)(
                        function () {
                          if (!t) return function () {};
                          var e = setInterval(function () {
                            n.current && n.current();
                          }, t);
                          return function () {
                            return clearInterval(e);
                          };
                        },
                        [t]
                      );
                  });
                var r = n(0);
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    },
                  a = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var n = [],
                          r = !0,
                          a = !1,
                          i = void 0;
                        try {
                          for (
                            var o, s = e[Symbol.iterator]();
                            !(r = (o = s.next()).done) &&
                            (n.push(o.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (a = !0), (i = e);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (a) throw i;
                          }
                        }
                        return n;
                      })(e, t);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  };
                t.default = function (e) {
                  var t = e.autoStart,
                    n = e.offsetTimestamp,
                    u = (0, i.useState)(
                      o.Time.getSecondsFromExpiry(n, !0) || 0
                    ),
                    l = a(u, 2),
                    c = l[0],
                    f = l[1],
                    d = (0, i.useState)(new Date()),
                    p = a(d, 2),
                    h = p[0],
                    v = p[1],
                    m = (0, i.useState)(
                      c + o.Time.getSecondsFromPrevTime(h || 0, !0)
                    ),
                    A = a(m, 2),
                    g = A[0],
                    y = A[1],
                    b = (0, i.useState)(t),
                    x = a(b, 2),
                    w = x[0],
                    k = x[1];
                  return (
                    (0, s.useInterval)(
                      function () {
                        y(c + o.Time.getSecondsFromPrevTime(h, !0));
                      },
                      w ? 1e3 : null
                    ),
                    r({}, o.Time.getTimeFromSeconds(g), {
                      start: function () {
                        var e = new Date();
                        v(e),
                          k(!0),
                          y(c + o.Time.getSecondsFromPrevTime(e, !0));
                      },
                      pause: function () {
                        f(g), k(!1);
                      },
                      reset: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          t =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                          n = o.Time.getSecondsFromExpiry(e, !0) || 0,
                          r = new Date();
                        v(r),
                          f(n),
                          k(t),
                          y(n + o.Time.getSecondsFromPrevTime(r, !0));
                      },
                      isRunning: w,
                    })
                  );
                };
                var i = n(0),
                  o = n(1),
                  s = n(2);
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    },
                  a = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var n = [],
                          r = !0,
                          a = !1,
                          i = void 0;
                        try {
                          for (
                            var o, s = e[Symbol.iterator]();
                            !(r = (o = s.next()).done) &&
                            (n.push(o.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (a = !0), (i = e);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (a) throw i;
                          }
                        }
                        return n;
                      })(e, t);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  };
                t.default = function (e) {
                  var t = e.format,
                    n = (0, i.useState)(o.Time.getSecondsFromTimeNow()),
                    u = a(n, 2),
                    l = u[0],
                    c = u[1];
                  return (
                    (0, s.useInterval)(function () {
                      c(o.Time.getSecondsFromTimeNow());
                    }, 1e3),
                    r({}, o.Time.getFormattedTimeFromSeconds(l, t))
                  );
                };
                var i = n(0),
                  o = n(1),
                  s = n(2);
              },
            ])));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            i = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: l,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function A(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (A.prototype.isReactComponent = {}),
          (A.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (A.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = A.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), v(b, A.prototype), (b.isPureReactComponent = !0);
        var x = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !S.hasOwnProperty(a) && (i[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) i.children = r;
          else if (1 < u) {
            for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
            i.children = l;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === i[a] && (i[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: k.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (s) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === i ? "." + N(u, 0) : i),
              x(o)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  j(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (_(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var l = 0; l < e.length; l++) {
              var c = i + N((s = e[l]), l);
              u += j(s, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), l = 0; !(s = e.next()).done; )
              u += j((s = s.value), t, a, (c = i + N(s, l++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function C(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var F = { current: null },
          O = { transition: null },
          R = {
            ReactCurrentDispatcher: F,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              C(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = A),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = y),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (l in t)
                w.call(t, l) &&
                  !S.hasOwnProperty(l) &&
                  (a[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) a.children = r;
            else if (1 < l) {
              u = Array(l);
              for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return F.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return F.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return F.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return F.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return F.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return F.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return F.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return F.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return F.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return F.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return F.current.useRef(e);
          }),
          (t.useState = function (e) {
            return F.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return F.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return F.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                u = e[s],
                l = s + 1,
                c = e[l];
              if (0 > i(u, n))
                l < a && 0 > i(c, u)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = u), (e[s] = n), (r = s));
              else {
                if (!(l < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            u = s.now();
          t.unstable_now = function () {
            return s.now() - u;
          };
        }
        var l = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          A = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(l, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((m = !1), b(e), !v))
            if (null !== r(l)) (v = !0), O(w);
            else {
              var t = r(c);
              null !== t && R(x, t.startTime - e);
            }
        }
        function w(e, n) {
          (v = !1), m && ((m = !1), g(_), (_ = -1)), (h = !0);
          var i = p;
          try {
            for (
              b(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !j()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var s = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(l) && a(l),
                  b(n);
              } else a(l);
              d = r(l);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          E = null,
          _ = -1,
          T = 5,
          N = -1;
        function j() {
          return !(t.unstable_now() - N < T);
        }
        function C() {
          if (null !== E) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ("function" === typeof y)
          k = function () {
            y(C);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            F = P.port2;
          (P.port1.onmessage = C),
            (k = function () {
              F.postMessage(null);
            });
        } else
          k = function () {
            A(C, 0);
          };
        function O(e) {
          (E = e), S || ((S = !0), k());
        }
        function R(e, n) {
          _ = A(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), O(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (m ? (g(_), (_ = -1)) : (m = !0), R(x, i - o)))
                : ((e.sortIndex = s), n(l, e), v || h || ((v = !0), O(w))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var i = Object.create(null);
      n.r(i);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & a && r; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach(function (e) {
          o[e] = function () {
            return r[e];
          };
        });
      return (
        (o.default = function () {
          return r;
        }),
        n.d(i, o),
        i
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function u() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function l(e, t) {
        return (
          i(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                s = [],
                u = !0,
                l = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    u = !0
                  );
              } catch (c) {
                (l = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (l) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          s(e, t) ||
          u()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          c(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function m(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function A(e, t) {
        return (
          (A = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          A(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && A(e, t);
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function b() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function x(e, t) {
        if (t && ("object" === p(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function w(e) {
        var t = b();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var a = y(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      function k(e, t, n) {
        return (
          (k = b()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && A(a, n.prototype), a;
              }),
          k.apply(null, arguments)
        );
      }
      function S(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (S = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return k(e, arguments, y(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              A(r, e)
            );
          }),
          S(e)
        );
      }
      function E(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = s(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (u = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var T,
        N = "popstate";
      function j(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function C(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function P(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          _(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? O(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function F(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function O(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function R(t, n, r, a) {
        void 0 === a && (a = {});
        var i = a,
          o = i.window,
          s = void 0 === o ? document.defaultView : o,
          u = i.v5Compat,
          l = void 0 !== u && u,
          c = s.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: A.location, delta: n });
        }
        function m(e) {
          var t =
              "null" !== s.location.origin
                ? s.location.origin
                : s.location.href,
            n = "string" === typeof e ? e : F(e);
          return (
            j(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(_({}, c.state, { idx: p }), ""));
        var A = {
          get action() {
            return f;
          },
          get location() {
            return t(s, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              s.addEventListener(N, v),
              (d = e),
              function () {
                s.removeEventListener(N, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(s, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = P(A.location, t, n);
            r && r(a, t);
            var i = C(a, (p = h() + 1)),
              o = A.createHref(a);
            try {
              c.pushState(i, "", o);
            } catch (u) {
              s.location.assign(o);
            }
            l && d && d({ action: f, location: A.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = P(A.location, t, n);
            r && r(a, t);
            var i = C(a, (p = h())),
              o = A.createHref(a);
            c.replaceState(i, "", o),
              l && d && d({ action: f, location: A.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return A;
      }
      function L(e, t, n) {
        void 0 === n && (n = "/");
        var r = W(("string" === typeof t ? O(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = D(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = U(a[o], H(r));
        return i;
      }
      function D(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, i) {
          var o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (j(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var s = Q([r, o.relativePath]),
            u = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (j(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            D(e.children, t, u, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: z(s, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = E(V(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = r.value;
                  a(e, t, o);
                }
              } catch (s) {
                i.e(s);
              } finally {
                i.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function V(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = i((n = t)) || c(n) || s(n) || u(),
          a = r[0],
          o = r.slice(1),
          l = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === o.length) return l ? [d, ""] : [d];
        var p = V(o.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          l && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(T || (T = {}));
      var M = /^:\w+$/,
        I = function (e) {
          return "*" === e;
        };
      function z(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(I) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !I(e);
            })
            .reduce(function (e, t) {
              return e + (M.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function U(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var s = n[o],
            u = o === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            c = B(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = s.route;
          i.push({
            params: r,
            pathname: Q([a, c.pathname]),
            pathnameBase: Z(Q([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = Q([a, c.pathnameBase]));
        }
        return i;
      }
      function B(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            q(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = l(n, 2),
          a = r[0],
          i = r[1],
          o = t.match(a);
        if (!o) return null;
        var s = o[0],
          u = s.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    q(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: s,
          pathnameBase: u,
          pattern: e,
        };
      }
      function H(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            q(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function W(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function q(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Y(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function G(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = O(e))
            : (j(
                !(a = _({}, e)).pathname || !a.pathname.includes("?"),
                Y("?", "pathname", "search", a)
              ),
              j(
                !a.pathname || !a.pathname.includes("#"),
                Y("#", "pathname", "hash", a)
              ),
              j(
                !a.search || !a.search.includes("#"),
                Y("#", "search", "hash", a)
              ));
        var i,
          o = "" === e || "" === a.pathname,
          s = o ? "/" : a.pathname;
        if (r || null == s) i = n;
        else {
          var u = t.length - 1;
          if (s.startsWith("..")) {
            for (var l = s.split("/"); ".." === l[0]; ) l.shift(), (u -= 1);
            a.pathname = l.join("/");
          }
          i = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? O(e) : e,
              r = n.pathname,
              a = n.search,
              i = void 0 === a ? "" : a,
              o = n.hash,
              s = void 0 === o ? "" : o,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: K(i), hash: $(s) };
          })(a, i),
          f = s && "/" !== s && s.endsWith("/"),
          d = (o || "." === s) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var Q = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Z = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        K = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        $ = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        J = (function (e) {
          g(n, e);
          var t = w(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(S(Error));
      function ee(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var te = ["post", "put", "patch", "delete"],
        ne = (new Set(te), ["get"].concat(te));
      new Set(ne),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function re() {
        return (
          (re = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          re.apply(this, arguments)
        );
      }
      var ae =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ie = t.useState,
        oe = t.useEffect,
        se = t.useLayoutEffect,
        ue = t.useDebugValue;
      function le(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !ae(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ce = t.createContext(null);
      var fe = t.createContext(null);
      var de = t.createContext(null);
      var pe = t.createContext(null);
      var he = t.createContext(null);
      var ve = t.createContext({ outlet: null, matches: [] });
      var me = t.createContext(null);
      function Ae() {
        return null != t.useContext(he);
      }
      function ge() {
        return Ae() || j(!1), t.useContext(he).location;
      }
      function ye() {
        Ae() || j(!1);
        var e = t.useContext(pe),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(ve).matches,
          i = ge().pathname,
          o = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = t.useRef(!1);
        return (
          t.useEffect(function () {
            s.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), s.current))
                if ("number" !== typeof e) {
                  var a = G(e, JSON.parse(o), i, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : Q([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      var be = t.createContext(null);
      function xe() {
        var e = t.useContext(ve).matches,
          n = e[e.length - 1];
        return n ? n.params : {};
      }
      function we(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(ve).matches,
          i = ge().pathname,
          o = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return G(e, JSON.parse(o), i, "path" === r);
          },
          [e, o, i, r]
        );
      }
      function ke() {
        var e = (function () {
            var e,
              n = t.useContext(me),
              r = je(Ee.UseRouteError),
              a = Ce(Ee.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ee(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          null
        );
      }
      var Se,
        Ee,
        _e = (function (e) {
          g(r, e);
          var n = w(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          ve.Provider,
                          { value: this.props.routeContext },
                          t.createElement(me.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Te(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          i = t.useContext(ce);
        return (
          i &&
            i.static &&
            i.staticContext &&
            r.route.errorElement &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ve.Provider, { value: n }, a)
        );
      }
      function Ne(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          o >= 0 || j(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, s) {
          var u = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            l = r ? o.route.errorElement || t.createElement(ke, null) : null,
            c = n.concat(a.slice(0, s + 1)),
            f = function () {
              return t.createElement(
                Te,
                { match: o, routeContext: { outlet: e, matches: c } },
                u ? l : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === s)
            ? t.createElement(_e, {
                location: r.location,
                component: l,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function je(e) {
        var n = t.useContext(fe);
        return n || j(!1), n;
      }
      function Ce(e) {
        var n = (function (e) {
            var n = t.useContext(ve);
            return n || j(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || j(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Se || (Se = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Ee || (Ee = {}));
      var Pe;
      function Fe(e) {
        var n = e.to,
          r = e.replace,
          a = e.state,
          i = e.relative;
        Ae() || j(!1);
        var o = t.useContext(fe),
          s = ye();
        return (
          t.useEffect(function () {
            (o && "idle" !== o.navigation.state) ||
              s(n, { replace: r, state: a, relative: i });
          }),
          null
        );
      }
      function Oe(e) {
        return (function (e) {
          var n = t.useContext(ve).outlet;
          return n ? t.createElement(be.Provider, { value: e }, n) : n;
        })(e.context);
      }
      function Re(e) {
        j(!1);
      }
      function Le(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          s = n.location,
          u = n.navigationType,
          l = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        Ae() && j(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof s && (s = O(s));
        var v = s,
          m = v.pathname,
          A = void 0 === m ? "/" : m,
          g = v.search,
          y = void 0 === g ? "" : g,
          b = v.hash,
          x = void 0 === b ? "" : b,
          w = v.state,
          k = void 0 === w ? null : w,
          S = v.key,
          E = void 0 === S ? "default" : S,
          _ = t.useMemo(
            function () {
              var e = W(A, p);
              return null == e
                ? null
                : { pathname: e, search: y, hash: x, state: k, key: E };
            },
            [p, A, y, x, k, E]
          );
        return null == _
          ? null
          : t.createElement(
              pe.Provider,
              { value: h },
              t.createElement(he.Provider, {
                children: o,
                value: { location: _, navigationType: l },
              })
            );
      }
      function De(n) {
        var r = n.children,
          a = n.location,
          i = t.useContext(ce);
        return (function (n, r) {
          Ae() || j(!1);
          var a,
            i = t.useContext(pe).navigator,
            o = t.useContext(fe),
            s = t.useContext(ve).matches,
            u = s[s.length - 1],
            l = u ? u.params : {},
            c = (u && u.pathname, u ? u.pathnameBase : "/"),
            f = (u && u.route, ge());
          if (r) {
            var d,
              p = "string" === typeof r ? O(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              j(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = L(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Ne(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, l, e.params),
                    pathname: Q([
                      c,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : Q([
                            c,
                            i.encodeLocation
                              ? i.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              s,
              o || void 0
            );
          return r && m
            ? t.createElement(
                he.Provider,
                {
                  value: {
                    location: re(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(i && !r ? i.router.routes : Me(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Pe || (Pe = {}));
      var Ve = new Promise(function () {});
      t.Component;
      function Me(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Re && j(!1),
                  e.props.index && e.props.children && j(!1);
                var i = [].concat(f(n), [a]),
                  o = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = Me(e.props.children, i)),
                  r.push(o);
              } else r.push.apply(r, Me(e.props.children, n));
          }),
          r
        );
      }
      function Ie() {
        return (
          (Ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ie.apply(this, arguments)
        );
      }
      function ze(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Ue = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      function Be(e) {
        var n,
          r = e.basename,
          a = e.children,
          i = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            R(
              function (e, t) {
                var n = e.location;
                return P(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : F(t);
              },
              null,
              n
            )));
        var s = o.current,
          u = l(t.useState({ action: s.action, location: s.location }), 2),
          c = u[0],
          f = u[1];
        return (
          t.useLayoutEffect(
            function () {
              return s.listen(f);
            },
            [s]
          ),
          t.createElement(Le, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      var He =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        We = t.forwardRef(function (e, n) {
          var r = e.onClick,
            a = e.relative,
            i = e.reloadDocument,
            o = e.replace,
            s = e.state,
            u = e.target,
            l = e.to,
            c = e.preventScrollReset,
            f = ze(e, Ue),
            d = "string" === typeof l ? l : F(l),
            p = /^[a-z+]+:\/\//i.test(d) || d.startsWith("//"),
            h = d,
            v = !1;
          if (He && p) {
            var m = new URL(window.location.href),
              A = d.startsWith("//") ? new URL(m.protocol + d) : new URL(d);
            A.origin === m.origin
              ? (h = A.pathname + A.search + A.hash)
              : (v = !0);
          }
          var g = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              Ae() || j(!1);
              var a = t.useContext(pe),
                i = a.basename,
                o = a.navigator,
                s = we(e, { relative: r }),
                u = s.hash,
                l = s.pathname,
                c = s.search,
                f = l;
              return (
                "/" !== i && (f = "/" === l ? i : Q([i, l])),
                o.createHref({ pathname: f, search: c, hash: u })
              );
            })(h, { relative: a }),
            y = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                i = r.replace,
                o = r.state,
                s = r.preventScrollReset,
                u = r.relative,
                l = ye(),
                c = ge(),
                f = we(e, { relative: u });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== i ? i : F(c) === F(f);
                    l(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: s,
                      relative: u,
                    });
                  }
                },
                [c, l, f, i, o, a, e, s, u]
              );
            })(h, {
              replace: o,
              state: s,
              target: u,
              preventScrollReset: c,
              relative: a,
            });
          return t.createElement(
            "a",
            Ie({}, f, {
              href: p ? d : g,
              onClick:
                v || i
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || y(e);
                    },
              ref: n,
              target: u,
            })
          );
        });
      var qe, Ye;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(qe || (qe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ye || (Ye = {}));
      function Xe(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ge(Object(n), !0).forEach(function (t) {
                Xe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ze() {
        Ze = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          o = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (j) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var i = t && t.prototype instanceof d ? t : d,
            o = Object.create(i.prototype),
            s = new _(a || []);
          return r(o, "_invoke", { value: w(e, n, s) }), o;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (j) {
            return { type: "throw", arg: j };
          }
        }
        e.wrap = l;
        var f = {};
        function d() {}
        function h() {}
        function v() {}
        var m = {};
        u(m, i, function () {
          return this;
        });
        var A = Object.getPrototypeOf,
          g = A && A(A(T([])));
        g && g !== t && n.call(g, i) && (m = g);
        var y = (v.prototype = d.prototype = Object.create(m));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, i, o, s) {
            var u = c(e[r], e, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && "object" == p(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, o, s);
                    },
                    function (e) {
                      a("throw", e, o, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), o(l);
                    },
                    function (e) {
                      return a("throw", e, o, s);
                    }
                  );
            }
            s(u.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw i;
              return N();
            }
            for (n.method = a, n.arg = i; ; ) {
              var o = n.delegate;
              if (o) {
                var s = k(o, n);
                if (s) {
                  if (s === f) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = c(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          r(y, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(v, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(x.prototype),
          u(x.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, i) {
            void 0 === i && (i = Promise);
            var o = new x(l(t, n, r, a), i);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          b(y),
          u(y, s, "Generator"),
          u(y, i, function () {
            return this;
          }),
          u(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = T),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  o = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (s && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var i = a;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var o = i ? i.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Ke(e, t, n, r, a, i, o) {
        try {
          var s = e[i](o),
            u = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function $e(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function o(e) {
              Ke(i, r, a, o, s, "next", e);
            }
            function s(e) {
              Ke(i, r, a, o, s, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function Je(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var et,
        tt = Object.prototype.toString,
        nt = Object.getPrototypeOf,
        rt =
          ((et = Object.create(null)),
          function (e) {
            var t = tt.call(e);
            return et[t] || (et[t] = t.slice(8, -1).toLowerCase());
          }),
        at = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return rt(t) === e;
            }
          );
        },
        it = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        ot = Array.isArray,
        st = it("undefined");
      var ut = at("ArrayBuffer");
      var lt = it("string"),
        ct = it("function"),
        ft = it("number"),
        dt = function (e) {
          return null !== e && "object" === typeof e;
        },
        pt = function (e) {
          if ("object" !== rt(e)) return !1;
          var t = nt(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        ht = at("Date"),
        vt = at("File"),
        mt = at("Blob"),
        At = at("FileList"),
        gt = at("URLSearchParams");
      function yt(e, t) {
        var n,
          r,
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = a.allOwnKeys,
          o = void 0 !== i && i;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), ot(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var s,
              u = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              l = u.length;
            for (n = 0; n < l; n++) (s = u[n]), t.call(null, e[s], s, e);
          }
      }
      function bt(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var xt =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        wt = function (e) {
          return !st(e) && e !== xt;
        };
      var kt,
        St =
          ((kt = "undefined" !== typeof Uint8Array && nt(Uint8Array)),
          function (e) {
            return kt && e instanceof kt;
          }),
        Et = at("HTMLFormElement"),
        _t = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        Tt = at("RegExp"),
        Nt = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          yt(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        jt = {
          isArray: ot,
          isArrayBuffer: ut,
          isBuffer: function (e) {
            return (
              null !== e &&
              !st(e) &&
              null !== e.constructor &&
              !st(e.constructor) &&
              ct(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = "[object FormData]";
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                tt.call(e) === t ||
                (ct(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && ut(e.buffer);
          },
          isString: lt,
          isNumber: ft,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: dt,
          isPlainObject: pt,
          isUndefined: st,
          isDate: ht,
          isFile: vt,
          isBlob: mt,
          isRegExp: Tt,
          isFunction: ct,
          isStream: function (e) {
            return dt(e) && ct(e.pipe);
          },
          isURLSearchParams: gt,
          isTypedArray: St,
          isFileList: At,
          forEach: yt,
          merge: function e() {
            for (
              var t = (wt(this) && this) || {},
                n = t.caseless,
                r = {},
                a = function (t, a) {
                  var i = (n && bt(r, a)) || a;
                  pt(r[i]) && pt(t)
                    ? (r[i] = e(r[i], t))
                    : pt(t)
                    ? (r[i] = e({}, t))
                    : ot(t)
                    ? (r[i] = t.slice())
                    : (r[i] = t);
                },
                i = 0,
                o = arguments.length;
              i < o;
              i++
            )
              arguments[i] && yt(arguments[i], a);
            return r;
          },
          extend: function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              a = r.allOwnKeys;
            return (
              yt(
                t,
                function (t, r) {
                  n && ct(t) ? (e[r] = Je(t, n)) : (e[r] = t);
                },
                { allOwnKeys: a }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              i,
              o,
              s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (i = (a = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                (o = a[i]),
                  (r && !r(o, e, t)) || s[o] || ((t[o] = e[o]), (s[o] = !0));
              e = !1 !== n && nt(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: rt,
          kindOfTest: at,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (ot(e)) return e;
            var t = e.length;
            if (!ft(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: Et,
          hasOwnProperty: _t,
          hasOwnProp: _t,
          reduceDescriptors: Nt,
          freezeMethods: function (e) {
            Nt(e, function (t, n) {
              if (ct(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              var r = e[n];
              ct(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return ot(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: bt,
          global: xt,
          isContextDefined: wt,
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(n, r) {
              if (dt(n)) {
                if (t.indexOf(n) >= 0) return;
                if (!("toJSON" in n)) {
                  t[r] = n;
                  var a = ot(n) ? [] : {};
                  return (
                    yt(n, function (t, n) {
                      var i = e(t, r + 1);
                      !st(i) && (a[n] = i);
                    }),
                    (t[r] = void 0),
                    a
                  );
                }
              }
              return n;
            })(e, 0);
          },
        };
      function Ct(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      jt.inherits(Ct, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: jt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var Pt = Ct.prototype,
        Ft = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        Ft[e] = { value: e };
      }),
        Object.defineProperties(Ct, Ft),
        Object.defineProperty(Pt, "isAxiosError", { value: !0 }),
        (Ct.from = function (e, t, n, r, a, i) {
          var o = Object.create(Pt);
          return (
            jt.toFlatObject(
              e,
              o,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            Ct.call(o, e.message, t, n, r, a),
            (o.cause = e),
            (o.name = e.name),
            i && Object.assign(o, i),
            o
          );
        });
      var Ot = Ct,
        Rt = n(472);
      function Lt(e) {
        return jt.isPlainObject(e) || jt.isArray(e);
      }
      function Dt(e) {
        return jt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Vt(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = Dt(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Mt = jt.toFlatObject(jt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var It = function (e, t, n) {
        if (!jt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (Rt || FormData)();
        var r,
          a = (n = jt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !jt.isUndefined(t[e]);
            }
          )).metaTokens,
          i = n.visitor || c,
          o = n.dots,
          s = n.indexes,
          u =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            (r = t) &&
            jt.isFunction(r.append) &&
            "FormData" === r[Symbol.toStringTag] &&
            r[Symbol.iterator];
        if (!jt.isFunction(i))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (jt.isDate(e)) return e.toISOString();
          if (!u && jt.isBlob(e))
            throw new Ot("Blob is not supported. Use a Buffer instead.");
          return jt.isArrayBuffer(e) || jt.isTypedArray(e)
            ? u && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, r) {
          var i = e;
          if (e && !r && "object" === typeof e)
            if (jt.endsWith(n, "{}"))
              (n = a ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (jt.isArray(e) &&
                (function (e) {
                  return jt.isArray(e) && !e.some(Lt);
                })(e)) ||
              jt.isFileList(e) ||
              (jt.endsWith(n, "[]") && (i = jt.toArray(e)))
            )
              return (
                (n = Dt(n)),
                i.forEach(function (e, r) {
                  !jt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === s ? Vt([n], r, o) : null === s ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!Lt(e) || (t.append(Vt(r, n, o), l(e)), !1);
        }
        var f = [],
          d = Object.assign(Mt, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: Lt,
          });
        if (!jt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!jt.isUndefined(n)) {
              if (-1 !== f.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              f.push(n),
                jt.forEach(n, function (n, a) {
                  !0 ===
                    (!(jt.isUndefined(n) || null === n) &&
                      i.call(t, n, jt.isString(a) ? a.trim() : a, r, d)) &&
                    e(n, r ? r.concat(a) : [a]);
                }),
                f.pop();
            }
          })(e),
          t
        );
      };
      function zt(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function Ut(e, t) {
        (this._pairs = []), e && It(e, this, t);
      }
      var Bt = Ut.prototype;
      (Bt.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Bt.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, zt);
              }
            : zt;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var Ht = Ut;
      function Wt(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function qt(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || Wt,
          i = n && n.serialize;
        if (
          (r = i
            ? i(t, n)
            : jt.isURLSearchParams(t)
            ? t.toString()
            : new Ht(t, n).toString(a))
        ) {
          var o = e.indexOf("#");
          -1 !== o && (e = e.slice(0, o)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var Yt = (function () {
          function e() {
            d(this, e), (this.handlers = []);
          }
          return (
            m(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  jt.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Xt = Yt,
        Gt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        Qt = "undefined" !== typeof URLSearchParams ? URLSearchParams : Ht,
        Zt = FormData,
        Kt = (function () {
          var e;
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== (e = navigator.product) &&
                "NativeScript" !== e &&
                "NS" !== e)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        })(),
        $t =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Jt = {
          isBrowser: !0,
          classes: { URLSearchParams: Qt, FormData: Zt, Blob: Blob },
          isStandardBrowserEnv: Kt,
          isStandardBrowserWebWorkerEnv: $t,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var en = function (e) {
          function t(e, n, r, a) {
            var i = e[a++],
              o = Number.isFinite(+i),
              s = a >= e.length;
            return (
              (i = !i && jt.isArray(r) ? r.length : i),
              s
                ? (jt.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !o)
                : ((r[i] && jt.isObject(r[i])) || (r[i] = []),
                  t(e, n, r[i], a) &&
                    jt.isArray(r[i]) &&
                    (r[i] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        i = a.length;
                      for (t = 0; t < i; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[i])),
                  !o)
            );
          }
          if (jt.isFormData(e) && jt.isFunction(e.entries)) {
            var n = {};
            return (
              jt.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return jt.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        tn = { "Content-Type": void 0 };
      var nn = {
        transitional: Gt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              i = jt.isObject(e);
            if (
              (i && jt.isHTMLForm(e) && (e = new FormData(e)), jt.isFormData(e))
            )
              return a && a ? JSON.stringify(en(e)) : e;
            if (
              jt.isArrayBuffer(e) ||
              jt.isBuffer(e) ||
              jt.isStream(e) ||
              jt.isFile(e) ||
              jt.isBlob(e)
            )
              return e;
            if (jt.isArrayBufferView(e)) return e.buffer;
            if (jt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (i) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return It(
                    e,
                    new Jt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Jt.isNode && jt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = jt.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var o = this.env && this.env.FormData;
                return It(
                  n ? { "files[]": e } : e,
                  o && new o(),
                  this.formSerializer
                );
              }
            }
            return i || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (jt.isString(e))
                    try {
                      return (t || JSON.parse)(e), jt.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || nn.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && jt.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (i) {
                if (a) {
                  if ("SyntaxError" === i.name)
                    throw Ot.from(
                      i,
                      Ot.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw i;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      jt.forEach(["delete", "get", "head"], function (e) {
        nn.headers[e] = {};
      }),
        jt.forEach(["post", "put", "patch"], function (e) {
          nn.headers[e] = jt.merge(tn);
        });
      var rn = nn,
        an = jt.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        on = Symbol("internals");
      function sn(e) {
        return e && String(e).trim().toLowerCase();
      }
      function un(e) {
        return !1 === e || null == e
          ? e
          : jt.isArray(e)
          ? e.map(un)
          : String(e);
      }
      function ln(e, t, n, r) {
        return jt.isFunction(r)
          ? r.call(this, t, n)
          : jt.isString(t)
          ? jt.isString(r)
            ? -1 !== t.indexOf(r)
            : jt.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0;
      }
      var cn = (function (e, t) {
        function n(e) {
          d(this, n), e && this.set(e);
        }
        return (
          m(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = sn(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var i = jt.findKey(r, a);
                    (!i ||
                      void 0 === r[i] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[i])) &&
                      (r[i || t] = un(e));
                  }
                  var i = function (e, t) {
                    return jt.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    jt.isPlainObject(e) || e instanceof this.constructor
                      ? i(e, t)
                      : jt.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z]+$/.test(e.trim())
                      ? i(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && an[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = sn(e))) {
                    var n = jt.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (jt.isFunction(t)) return t.call(this, r, n);
                      if (jt.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function"
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = sn(e))) {
                    var n = jt.findKey(this, e);
                    return !(!n || (t && !ln(0, this[n], n, t)));
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = sn(e))) {
                      var a = jt.findKey(n, e);
                      !a ||
                        (t && !ln(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return jt.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function () {
                  return Object.keys(this).forEach(this.delete.bind(this));
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    jt.forEach(this, function (r, a) {
                      var i = jt.findKey(n, a);
                      if (i) return (t[i] = un(r)), void delete t[a];
                      var o = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      o !== a && delete t[a], (t[o] = un(r)), (n[o] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n)
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    jt.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && jt.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = l(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[on] = this[on] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = sn(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = jt.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return jt.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ]
          ),
          n
        );
      })();
      cn.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
      ]),
        jt.freezeMethods(cn.prototype),
        jt.freezeMethods(cn);
      var fn = cn;
      function dn(e, t) {
        var n = this || rn,
          r = t || n,
          a = fn.from(r.headers),
          i = r.data;
        return (
          jt.forEach(e, function (e) {
            i = e.call(n, i, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          i
        );
      }
      function pn(e) {
        return !(!e || !e.__CANCEL__);
      }
      function hn(e, t, n) {
        Ot.call(this, null == e ? "canceled" : e, Ot.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      jt.inherits(hn, Ot, { __CANCEL__: !0 });
      var vn = hn;
      var mn = Jt.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, i) {
              var o = [];
              o.push(e + "=" + encodeURIComponent(t)),
                jt.isNumber(n) &&
                  o.push("expires=" + new Date(n).toGMTString()),
                jt.isString(r) && o.push("path=" + r),
                jt.isString(a) && o.push("domain=" + a),
                !0 === i && o.push("secure"),
                (document.cookie = o.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function An(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var gn = Jt.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = jt.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var yn = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          i = 0,
          o = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            var u = Date.now(),
              l = a[o];
            n || (n = u), (r[i] = s), (a[i] = u);
            for (var c = o, f = 0; c !== i; ) (f += r[c++]), (c %= e);
            if (((i = (i + 1) % e) === o && (o = (o + 1) % e), !(u - n < t))) {
              var d = l && u - l;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function bn(e, t) {
        var n = 0,
          r = yn(50, 250);
        return function (a) {
          var i = a.loaded,
            o = a.lengthComputable ? a.total : void 0,
            s = i - n,
            u = r(s);
          n = i;
          var l = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && o && i <= o ? (o - i) / u : void 0,
            event: a,
          };
          (l[t ? "download" : "upload"] = !0), e(l);
        };
      }
      var xn =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              var r,
                a = e.data,
                i = fn.from(e.headers).normalize(),
                o = e.responseType;
              function s() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                  e.signal && e.signal.removeEventListener("abort", r);
              }
              jt.isFormData(a) &&
                (Jt.isStandardBrowserEnv || Jt.isStandardBrowserWebWorkerEnv) &&
                i.setContentType(!1);
              var u = new XMLHttpRequest();
              if (e.auth) {
                var l = e.auth.username || "",
                  c = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                i.set("Authorization", "Basic " + btoa(l + ":" + c));
              }
              var f = An(e.baseURL, e.url);
              function d() {
                if (u) {
                  var r = fn.from(
                    "getAllResponseHeaders" in u && u.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new Ot(
                            "Request failed with status code " + n.status,
                            [Ot.ERR_BAD_REQUEST, Ot.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), s();
                    },
                    function (e) {
                      n(e), s();
                    },
                    {
                      data:
                        o && "text" !== o && "json" !== o
                          ? u.response
                          : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u,
                    }
                  ),
                    (u = null);
                }
              }
              if (
                (u.open(
                  e.method.toUpperCase(),
                  qt(f, e.params, e.paramsSerializer),
                  !0
                ),
                (u.timeout = e.timeout),
                "onloadend" in u
                  ? (u.onloadend = d)
                  : (u.onreadystatechange = function () {
                      u &&
                        4 === u.readyState &&
                        (0 !== u.status ||
                          (u.responseURL &&
                            0 === u.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (u.onabort = function () {
                  u &&
                    (n(new Ot("Request aborted", Ot.ECONNABORTED, e, u)),
                    (u = null));
                }),
                (u.onerror = function () {
                  n(new Ot("Network Error", Ot.ERR_NETWORK, e, u)), (u = null);
                }),
                (u.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    r = e.transitional || Gt;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new Ot(
                        t,
                        r.clarifyTimeoutError ? Ot.ETIMEDOUT : Ot.ECONNABORTED,
                        e,
                        u
                      )
                    ),
                    (u = null);
                }),
                Jt.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || gn(f)) &&
                  e.xsrfCookieName &&
                  mn.read(e.xsrfCookieName);
                p && i.set(e.xsrfHeaderName, p);
              }
              void 0 === a && i.setContentType(null),
                "setRequestHeader" in u &&
                  jt.forEach(i.toJSON(), function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                jt.isUndefined(e.withCredentials) ||
                  (u.withCredentials = !!e.withCredentials),
                o && "json" !== o && (u.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  u.addEventListener("progress", bn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  u.upload &&
                  u.upload.addEventListener("progress", bn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((r = function (t) {
                    u &&
                      (n(!t || t.type ? new vn(null, e, u) : t),
                      u.abort(),
                      (u = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(r),
                  e.signal &&
                    (e.signal.aborted
                      ? r()
                      : e.signal.addEventListener("abort", r)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              h && -1 === Jt.protocols.indexOf(h)
                ? n(
                    new Ot(
                      "Unsupported protocol " + h + ":",
                      Ot.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : u.send(a || null);
            });
          },
        wn = { http: null, xhr: xn };
      jt.forEach(wn, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var kn = function (e) {
        for (
          var t, n, r = (e = jt.isArray(e) ? e : [e]).length, a = 0;
          a < r &&
          ((t = e[a]), !(n = jt.isString(t) ? wn[t.toLowerCase()] : t));
          a++
        );
        if (!n) {
          if (!1 === n)
            throw new Ot(
              "Adapter ".concat(t, " is not supported by the environment"),
              "ERR_NOT_SUPPORT"
            );
          throw new Error(
            jt.hasOwnProp(wn, t)
              ? "Adapter '".concat(t, "' is not available in the build")
              : "Unknown adapter '".concat(t, "'")
          );
        }
        if (!jt.isFunction(n)) throw new TypeError("adapter is not a function");
        return n;
      };
      function Sn(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new vn(null, e);
      }
      function En(e) {
        return (
          Sn(e),
          (e.headers = fn.from(e.headers)),
          (e.data = dn.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          kn(e.adapter || rn.adapter)(e).then(
            function (t) {
              return (
                Sn(e),
                (t.data = dn.call(e, e.transformResponse, t)),
                (t.headers = fn.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                pn(t) ||
                  (Sn(e),
                  t &&
                    t.response &&
                    ((t.response.data = dn.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = fn.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      var _n = function (e) {
        return e instanceof fn ? e.toJSON() : e;
      };
      function Tn(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return jt.isPlainObject(e) && jt.isPlainObject(t)
            ? jt.merge.call({ caseless: n }, e, t)
            : jt.isPlainObject(t)
            ? jt.merge({}, t)
            : jt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return jt.isUndefined(t)
            ? jt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function i(e, t) {
          if (!jt.isUndefined(t)) return r(void 0, t);
        }
        function o(e, t) {
          return jt.isUndefined(t)
            ? jt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, a, i) {
          return i in t ? r(n, a) : i in e ? r(void 0, n) : void 0;
        }
        var u = {
          url: i,
          method: i,
          data: i,
          baseURL: o,
          transformRequest: o,
          transformResponse: o,
          paramsSerializer: o,
          timeout: o,
          timeoutMessage: o,
          withCredentials: o,
          adapter: o,
          responseType: o,
          xsrfCookieName: o,
          xsrfHeaderName: o,
          onUploadProgress: o,
          onDownloadProgress: o,
          decompress: o,
          maxContentLength: o,
          maxBodyLength: o,
          beforeRedirect: o,
          transport: o,
          httpAgent: o,
          httpsAgent: o,
          cancelToken: o,
          socketPath: o,
          responseEncoding: o,
          validateStatus: s,
          headers: function (e, t) {
            return a(_n(e), _n(t), !0);
          },
        };
        return (
          jt.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
            var i = u[r] || a,
              o = i(e[r], t[r], r);
            (jt.isUndefined(o) && i !== s) || (n[r] = o);
          }),
          n
        );
      }
      var Nn = "1.2.4",
        jn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          jn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Cn = {};
      jn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.2.4] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, i) {
          if (!1 === e)
            throw new Ot(
              r(a, " has been removed" + (t ? " in " + t : "")),
              Ot.ERR_DEPRECATED
            );
          return (
            t &&
              !Cn[a] &&
              ((Cn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, i)
          );
        };
      };
      var Pn = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new Ot(
                "options must be an object",
                Ot.ERR_BAD_OPTION_VALUE
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var i = r[a],
                o = t[i];
              if (o) {
                var s = e[i],
                  u = void 0 === s || o(s, i, e);
                if (!0 !== u)
                  throw new Ot(
                    "option " + i + " must be " + u,
                    Ot.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new Ot("Unknown option " + i, Ot.ERR_BAD_OPTION);
            }
          },
          validators: jn,
        },
        Fn = Pn.validators,
        On = (function () {
          function e(t) {
            d(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Xt(), response: new Xt() });
          }
          return (
            m(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = Tn(this.defaults, t)),
                    a = r.transitional,
                    i = r.paramsSerializer,
                    o = r.headers;
                  void 0 !== a &&
                    Pn.assertOptions(
                      a,
                      {
                        silentJSONParsing: Fn.transitional(Fn.boolean),
                        forcedJSONParsing: Fn.transitional(Fn.boolean),
                        clarifyTimeoutError: Fn.transitional(Fn.boolean),
                      },
                      !1
                    ),
                    void 0 !== i &&
                      Pn.assertOptions(
                        i,
                        { encode: Fn.function, serialize: Fn.function },
                        !0
                      ),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = o && jt.merge(o.common, o[t.method])) &&
                      jt.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete o[e];
                        }
                      ),
                    (t.headers = fn.concat(n, o));
                  var s = [],
                    u = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((u = u && e.synchronous),
                      s.unshift(e.fulfilled, e.rejected));
                  });
                  var l,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var f,
                    d = 0;
                  if (!u) {
                    var p = [En.bind(this), void 0];
                    for (
                      p.unshift.apply(p, s),
                        p.push.apply(p, c),
                        f = p.length,
                        l = Promise.resolve(t);
                      d < f;

                    )
                      l = l.then(p[d++], p[d++]);
                    return l;
                  }
                  f = s.length;
                  var h = t;
                  for (d = 0; d < f; ) {
                    var v = s[d++],
                      m = s[d++];
                    try {
                      h = v(h);
                    } catch (A) {
                      m.call(this, A);
                      break;
                    }
                  }
                  try {
                    l = En.call(this, h);
                  } catch (A) {
                    return Promise.reject(A);
                  }
                  for (d = 0, f = c.length; d < f; ) l = l.then(c[d++], c[d++]);
                  return l;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return qt(
                    An((e = Tn(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      jt.forEach(["delete", "get", "head", "options"], function (e) {
        On.prototype[e] = function (t, n) {
          return this.request(
            Tn(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        jt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Tn(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (On.prototype[e] = t()), (On.prototype[e + "Form"] = t(!0));
        });
      var Rn = On,
        Ln = (function () {
          function e(t) {
            if ((d(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new vn(e, t, a)), n(r.reason));
              });
          }
          return (
            m(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var Dn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Dn).forEach(function (e) {
        var t = l(e, 2),
          n = t[0],
          r = t[1];
        Dn[r] = n;
      });
      var Vn = Dn;
      var Mn = (function e(t) {
        var n = new Rn(t),
          r = Je(Rn.prototype.request, n);
        return (
          jt.extend(r, Rn.prototype, n, { allOwnKeys: !0 }),
          jt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Tn(t, n));
          }),
          r
        );
      })(rn);
      (Mn.Axios = Rn),
        (Mn.CanceledError = vn),
        (Mn.CancelToken = Ln),
        (Mn.isCancel = pn),
        (Mn.VERSION = Nn),
        (Mn.toFormData = It),
        (Mn.AxiosError = Ot),
        (Mn.Cancel = Mn.CanceledError),
        (Mn.all = function (e) {
          return Promise.all(e);
        }),
        (Mn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Mn.isAxiosError = function (e) {
          return jt.isObject(e) && !0 === e.isAxiosError;
        }),
        (Mn.mergeConfig = Tn),
        (Mn.AxiosHeaders = fn),
        (Mn.formToJSON = function (e) {
          return en(jt.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (Mn.HttpStatusCode = Vn),
        (Mn.default = Mn);
      var In = Mn,
        zn = n(184),
        Un = t.createContext();
      function Bn(e) {
        var n = e.children,
          r = l((0, t.useState)(!0), 2),
          a = r[0],
          i = r[1],
          o = l((0, t.useState)(null), 2),
          s = o[0],
          u = o[1],
          c = l((0, t.useState)(""), 2),
          f = c[0],
          d = c[1],
          p = l((0, t.useState)(null), 2),
          h = p[0],
          v = p[1],
          m = l((0, t.useState)(!1), 2),
          A = m[0],
          g = m[1],
          y = l((0, t.useState)(""), 2),
          b = y[0],
          x = y[1],
          w = l((0, t.useState)(""), 2),
          k = w[0],
          S = w[1],
          E = l((0, t.useState)(!1), 2),
          _ = E[0],
          T = E[1],
          N = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t, n, r, a;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          In.get("https://type.fit/api/quotes", {
                            withCredentials: !1,
                          })
                        );
                      case 2:
                        (t = e.sent),
                          (n = t.data.filter(function (e) {
                            return e.text.length < 200;
                          })),
                          (r = n.filter(function (e) {
                            return e.text.length > 110;
                          })),
                          (a = r[Math.floor(Math.random() * r.length)])
                            .author || (a.author = "Anonymous"),
                          x(a.text),
                          S(a.author);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, zn.jsx)(Un.Provider, {
          value: {
            url: "http://localhost:5000",
            isLoading: a,
            setIsLoading: i,
            search: f,
            setSearch: d,
            editMode: _,
            setEditMode: T,
            error: s,
            setError: u,
            favorite: h,
            setFavorite: v,
            getQuote: N,
            author: k,
            quote: b,
            fakeId: A,
            setFakeId: g,
            setAuthor: S,
          },
          children: n,
        });
      }
      var Hn = function () {
          return (0, t.useContext)(Un);
        },
        Wn = t.createContext();
      function qn(e) {
        var n = e.children,
          r = Hn(),
          a = r.setIsLoading,
          i = r.setError,
          o = l((0, t.useState)(null), 2),
          s = o[0],
          u = o[1],
          c = l((0, t.useState)(!1), 2),
          f = c[0],
          d = c[1],
          p = l((0, t.useState)({}), 2),
          h = p[0],
          v = p[1],
          m = l((0, t.useState)(!1), 2),
          A = m[0],
          g = m[1],
          y = l(
            (0, t.useState)(
              "https://res.cloudinary.com/dlriwaule/image/upload/v1676308316/user-image-upload/tmp-14-1676308315277_dwrfzc.jpg"
            ),
            2
          ),
          b = y[0],
          x = y[1],
          w = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, r, o, s, l, c, f;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            a(!0),
                            i(null),
                            (e.next = 5),
                            In.post("/api/user/login", t)
                          );
                        case 5:
                          return (
                            (n = e.sent),
                            (r = n.data),
                            (o = r._id),
                            (s = r.name),
                            (l = r.image),
                            (c = r.theme),
                            (f = r.message) && i(f),
                            d(!!o),
                            u(
                              o ? { _id: o, name: s, image: l, theme: c } : null
                            ),
                            !f && localStorage.setItem("login", !0),
                            a(!1),
                            e.abrupt("return", f)
                          );
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(0)),
                            i(e.t0.message),
                            a(!1);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          k = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), In.get("/api/user/");
                      case 2:
                        if (((t = e.sent), t.data.message)) {
                          e.next = 10;
                          break;
                        }
                        return d(!0), u(Qe({}, t.data)), e.abrupt("return", f);
                      case 10:
                        return (
                          localStorage.setItem("login", !1),
                          d(!1),
                          u(null),
                          e.abrupt("return", null)
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          S = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, r, o, s, l, c;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            a(!0),
                            i(null),
                            (e.next = 5),
                            In.post("/api/user/register", {
                              name: t.name,
                              email: t.email,
                              password: t.password,
                              image:
                                (null === h || void 0 === h
                                  ? void 0
                                  : h.image) || b,
                            })
                          );
                        case 5:
                          return (
                            (n = e.sent),
                            (r = n.data),
                            (o = r._id),
                            (s = r.name),
                            (l = r.image),
                            (c = r.message) && i(c),
                            (e.next = 10),
                            d(!!o)
                          );
                        case 10:
                          return (
                            u(o ? { _id: o, name: s, image: l } : null),
                            !c && localStorage.setItem("login", !0),
                            a(!1),
                            e.abrupt("return", c)
                          );
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(0)),
                            i(e.t0.message),
                            v(null),
                            a(!1);
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 16]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          E = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, r;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((a(!0), !t.length)) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (n = new FormData()).append("image", t[0]),
                          (e.next = 6),
                          In({
                            method: "post",
                            url: "/api/user/register/upload",
                            data: n,
                            headers: { "Content-Type": "multipart/form-data" },
                          })
                        );
                      case 6:
                        (r = e.sent),
                          v(function (e) {
                            return Qe(
                              Qe({}, e),
                              {},
                              { image: r.data.image.src }
                            );
                          }),
                          (e.next = 11);
                        break;
                      case 10:
                        v(
                          f
                            ? function (e) {
                                return Qe(Qe({}, e), {}, { image: s.image });
                              }
                            : null
                        );
                      case 11:
                        a(!1);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          _ = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            localStorage.setItem("login", !1),
                            d(!1),
                            u(null),
                            (e.next = 6),
                            In.get("/api/user/logout")
                          );
                        case 6:
                          e.next = 10;
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          In.patch("/api/user/edit", {
                            name: t.name,
                            image: h.image,
                          })
                        );
                      case 2:
                        if (((n = e.sent), n.data.message)) {
                          e.next = 10;
                          break;
                        }
                        return d(!0), u(Qe({}, n.data)), e.abrupt("return", f);
                      case 10:
                        return (
                          localStorage.setItem("login", !1),
                          d(!1),
                          u(null),
                          e.abrupt("return", null)
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, zn.jsx)(Wn.Provider, {
          value: {
            loginUser: w,
            checkLogin: k,
            isUserLoggedIn: function () {
              return JSON.parse(localStorage.getItem("login"));
            },
            setShowPassword: g,
            showPassword: A,
            setUpdateUser: v,
            updateUser: h,
            registerUser: S,
            setImageSource: x,
            imageSource: b,
            tempoUploadImage: E,
            setUser: u,
            user: s,
            tokenUser: f,
            setTokenUser: d,
            logoutUser: _,
            editUser: T,
          },
          children: n,
        });
      }
      var Yn = function () {
        return (0, t.useContext)(Wn);
      };
      function Xn() {
        var e = Yn(),
          t = e.tokenUser,
          n = e.isUserLoggedIn,
          r = e.checkLogin;
        return (
          t || r(), n() ? (0, zn.jsx)(Oe, {}) : (0, zn.jsx)(Fe, { to: "/" })
        );
      }
      var Gn = t.createContext();
      function Qn(e) {
        var n = e.children,
          r = Hn().setIsLoading,
          a = Yn(),
          i = a.setTokenUser,
          o = a.setUser,
          s = a.setFakeId,
          u = a.fakeId,
          c = l((0, t.useState)(null), 2),
          d = c[0],
          p = c[1],
          h = l((0, t.useState)([]), 2),
          v = h[0],
          m = h[1],
          A = l((0, t.useState)(null), 2),
          g = A[0],
          y = A[1],
          b = l((0, t.useState)(!0), 2),
          x = b[0],
          w = b[1],
          k = l((0, t.useState)(null), 2),
          S = k[0],
          E = k[1],
          _ = l((0, t.useState)([]), 2),
          T = _[0],
          N = _[1],
          j = l((0, t.useState)([]), 2),
          C = j[0],
          P = j[1],
          F = l((0, t.useState)(null), 2),
          O = F[0],
          R = F[1],
          L = l((0, t.useState)(!1), 2),
          D = L[0],
          V = L[1],
          M = l((0, t.useState)(!1), 2),
          I = M[0],
          z = M[1],
          U = l((0, t.useState)(1200), 2),
          B = U[0],
          H = U[1],
          W = l((0, t.useState)(60), 2),
          q = W[0],
          Y = W[1],
          X = l((0, t.useState)(null), 2),
          G = X[0],
          Q = X[1],
          Z = l((0, t.useState)(0), 2),
          K = Z[0],
          $ = Z[1],
          J = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t, n, r;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), In.get("/api/todo")
                          );
                        case 3:
                          return (
                            (t = e.sent), (e.next = 6), In.get("/api/note")
                          );
                        case 6:
                          return (
                            (n = e.sent), (e.next = 9), In.get("/api/pomodoro")
                          );
                        case 9:
                          (r = e.sent),
                            N(f(t.data.sortedTodoList)),
                            m(f(n.data.sortedNoteList)),
                            P(f(r.data.sortedPomodoroList)),
                            (e.next = 20);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(0)),
                            localStorage.setItem("login", !1),
                            i(!1),
                            o(null);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ee = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), In.get("/api/note")
                          );
                        case 3:
                          (t = e.sent),
                            m(f(t.data.sortedNoteList)),
                            (e.next = 12);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            localStorage.setItem("login", !1),
                            i(!1),
                            o(null);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          te = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), In.post("/api/note/", t);
                      case 2:
                        (n = e.sent), ee(), y(n.data), w(!1), z(!1);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ne = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), In.patch("/api/note/" + g._id, t);
                      case 2:
                        ee(), y(t), z(!1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          re = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            In.get("/api/note?noteId=" + t)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            y(n.data.sortedNoteList[0]),
                            e.abrupt("return", !0)
                          );
                        case 8:
                          return (
                            (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            s(!0),
                            e.abrupt("return", null)
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ae = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (n = v.filter(function (e) {
                            return e._id !== t;
                          })),
                          m(n),
                          (e.next = 5),
                          In.delete("/api/note/" + t)
                        );
                      case 5:
                        r(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ie = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), In.get("/api/todo")
                          );
                        case 3:
                          (t = e.sent),
                            N(f(t.data.sortedTodoList)),
                            (e.next = 12);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            localStorage.setItem("login", !1),
                            i(!1),
                            o(null);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          oe = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), In.post("/api/todo/", t);
                      case 2:
                        ie();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          se = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, a;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (a = T.map(function (e) {
                            return e._id === t
                              ? ((n = !e.finished),
                                Qe(Qe({}, e), {}, { finished: !e.finished }))
                              : e;
                          })),
                          N(a),
                          (e.next = 5),
                          In.patch("/api/todo/" + t, { finished: n })
                        );
                      case 5:
                        r(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ue = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (n = T.filter(function (e) {
                            return e._id !== t;
                          })),
                          N(n),
                          (e.next = 5),
                          In.delete("/api/todo/" + t)
                        );
                      case 5:
                        r(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          le = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("" !== S.task.trim()) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", ue(t));
                      case 2:
                        return (
                          (n = T.map(function (e) {
                            return e._id === t
                              ? Qe(
                                  Qe({}, e),
                                  {},
                                  { task: S.task.trim(), favorite: S.favorite }
                                )
                              : e;
                          })),
                          N(n),
                          (e.next = 6),
                          In.patch("/api/todo/" + t, {
                            task: S.task.trim(),
                            favorite: S.favorite,
                          })
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ce = (function () {
            var e = $e(
              Ze().mark(function e() {
                var t;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), In.get("/api/pomodoro")
                          );
                        case 3:
                          (t = e.sent),
                            P(f(t.data.sortedPomodoroList)),
                            (e.next = 12);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            localStorage.setItem("login", !1),
                            i(!1),
                            o(null);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          fe = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            In.get("/api/pomodoro?pomoId=" + t)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            R(n.data.sortedPomodoroList[0]),
                            e.abrupt("return", !0)
                          );
                        case 8:
                          return (
                            (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            s(!0),
                            e.abrupt("return", null)
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          de = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), In.post("/api/pomodoro/", t);
                      case 2:
                        ce();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          pe = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, r;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          In.patch("/api/pomodoro/" + t, { value: O.value + 1 })
                        );
                      case 2:
                        (n = e.sent),
                          (r = n.data.updatedPomodoro.value),
                          R(function (e) {
                            return Qe(Qe({}, e), {}, { value: r });
                          }),
                          ce();
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          he = (function () {
            var e = $e(
              Ze().mark(function e(t, n, r) {
                var a;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          R(function (e) {
                            return Qe(Qe({}, e), {}, { title: n, favorite: r });
                          }),
                          (a = C.map(function (e) {
                            return e._id === t
                              ? Qe(Qe({}, e), {}, { title: n, favorite: r })
                              : e;
                          })),
                          P(a),
                          (e.next = 5),
                          In.patch("/api/pomodoro/" + t, {
                            title: n,
                            favorite: r,
                          })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, r) {
              return e.apply(this, arguments);
            };
          })(),
          ve = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          R(function (e) {
                            return Qe(Qe({}, e), {}, { value: 0 });
                          }),
                          (n = C.map(function (e) {
                            return e._id === t
                              ? Qe(Qe({}, e), {}, { value: 0 })
                              : e;
                          })),
                          P(n),
                          (e.next = 5),
                          In.patch("/api/pomodoro/" + t, { value: 0 })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          me = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (n = C.filter(function (e) {
                            return e._id !== t;
                          })),
                          P(n),
                          (e.next = 5),
                          In.delete("/api/pomodoro/" + t)
                        );
                      case 5:
                        r(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          Ae = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, a;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (a = C.map(function (e) {
                            return e._id === t
                              ? ((n = !e.favorite),
                                Qe(Qe({}, e), {}, { favorite: !e.favorite }))
                              : e;
                          })),
                          P(a),
                          (e.next = 5),
                          In.patch("/api/pomodoro/" + t, { favorite: n })
                        );
                      case 5:
                        r(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, zn.jsx)(Gn.Provider, {
          value: {
            isClosing: D,
            setIsClosing: V,
            getAllData: J,
            notes: v,
            setNotes: m,
            todos: T,
            setTodos: N,
            pomodoros: C,
            setPomodoros: P,
            getAllNote: ee,
            getSingleNote: re,
            singleNote: g,
            isNewNote: x,
            setIsNewNote: w,
            deleteNote: ae,
            setSingleNote: y,
            updateNote: ne,
            addNote: te,
            getAllTodo: ie,
            addTodo: oe,
            finishTodo: se,
            deleteTodo: ue,
            getSingleTodo: function (e) {
              var t = T.find(function (t) {
                return t._id === e;
              });
              E(t);
            },
            singleTodo: S,
            setSingleTodo: E,
            updateTodo: le,
            singlePomodoro: O,
            setSinglePomodoro: R,
            addPomodoro: de,
            getAllPomodoro: ce,
            getSinglePomodoro: fe,
            startPomodoro: pe,
            updatePomodoro: he,
            resetPomodoro: ve,
            deletePomodoro: me,
            favoritePomodoro: Ae,
            percent: K,
            setPercent: $,
            focusTimeSeconds: B,
            restTimeSeconds: q,
            isRest: G,
            setIsRest: Q,
            setFocusTimeSeconds: H,
            setRestTimeSeconds: Y,
            setFakeId: s,
            fakeId: u,
            isChanged: I,
            setIsChanged: z,
            finished: d,
            setFinished: p,
          },
          children: n,
        });
      }
      var Zn = function () {
        return (0, t.useContext)(Gn);
      };
      function Kn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var $n = ["name"],
        Jn = ["_f"],
        er = ["_f"],
        tr = function (e) {
          return "checkbox" === e.type;
        },
        nr = function (e) {
          return e instanceof Date;
        },
        rr = function (e) {
          return null == e;
        },
        ar = function (e) {
          return "object" === typeof e;
        },
        ir = function (e) {
          return !rr(e) && !Array.isArray(e) && ar(e) && !nr(e);
        },
        or = function (e) {
          return ir(e) && e.target
            ? tr(e.target)
              ? e.target.checked
              : e.target.value
            : e;
        },
        sr = function (e, t) {
          return e.has(
            (function (e) {
              return e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
            })(t)
          );
        },
        ur = function (e) {
          return Array.isArray(e) ? e.filter(Boolean) : [];
        },
        lr = function (e) {
          return void 0 === e;
        },
        cr = function (e, t, n) {
          if (!t || !ir(e)) return n;
          var r = ur(t.split(/[,[\].]+?/)).reduce(function (e, t) {
            return rr(e) ? e : e[t];
          }, e);
          return lr(r) || r === e ? (lr(e[t]) ? n : e[t]) : r;
        },
        fr = "blur",
        dr = "focusout",
        pr = "onBlur",
        hr = "onChange",
        vr = "onSubmit",
        mr = "onTouched",
        Ar = "all",
        gr = "max",
        yr = "min",
        br = "maxLength",
        xr = "minLength",
        wr = "pattern",
        kr = "required",
        Sr = "validate",
        Er =
          (t.createContext(null),
          function (e, t, n) {
            var r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              a = { defaultValues: t._defaultValues },
              i = function (i) {
                Object.defineProperty(a, i, {
                  get: function () {
                    var a = i;
                    return (
                      t._proxyFormState[a] !== Ar &&
                        (t._proxyFormState[a] = !r || Ar),
                      n && (n[a] = !0),
                      e[a]
                    );
                  },
                });
              };
            for (var o in e) i(o);
            return a;
          }),
        _r = function (e) {
          return ir(e) && !Object.keys(e).length;
        },
        Tr = function (e, t, n, r) {
          n(e);
          e.name;
          var a = Kn(e, $n);
          return (
            _r(a) ||
            Object.keys(a).length >= Object.keys(t).length ||
            Object.keys(a).find(function (e) {
              return t[e] === (!r || Ar);
            })
          );
        },
        Nr = function (e) {
          return Array.isArray(e) ? e : [e];
        };
      function jr(e) {
        var n = t.useRef(e);
        (n.current = e),
          t.useEffect(
            function () {
              var t =
                !e.disabled &&
                n.current.subject.subscribe({ next: n.current.next });
              return function () {
                t && t.unsubscribe();
              };
            },
            [e.disabled]
          );
      }
      var Cr = function (e) {
          return "string" === typeof e;
        },
        Pr = function (e, t, n, r, a) {
          return Cr(e)
            ? (r && t.watch.add(e), cr(n, e, a))
            : Array.isArray(e)
            ? e.map(function (e) {
                return r && t.watch.add(e), cr(n, e);
              })
            : (r && (t.watchAll = !0), n);
        },
        Fr =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement &&
          "undefined" !== typeof document;
      function Or(e) {
        var t,
          n = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if (
            (Fr && (e instanceof Blob || e instanceof FileList)) ||
            (!n && !ir(e))
          )
            return e;
          if (
            ((t = n ? [] : {}),
            Array.isArray(e) ||
              (function (e) {
                var t = e.constructor && e.constructor.prototype;
                return ir(t) && t.hasOwnProperty("isPrototypeOf");
              })(e))
          )
            for (var r in e) t[r] = Or(e[r]);
          else t = e;
        }
        return t;
      }
      var Rr = function (e, t, n, r, a) {
          return t
            ? Qe(
                Qe({}, n[e]),
                {},
                {
                  types: Qe(
                    Qe({}, n[e] && n[e].types ? n[e].types : {}),
                    {},
                    Xe({}, r, a || !0)
                  ),
                }
              )
            : {};
        },
        Lr = function (e) {
          return /^\w*$/.test(e);
        },
        Dr = function (e) {
          return ur(e.replace(/["|']|\]/g, "").split(/\.|\[/));
        };
      function Vr(e, t, n) {
        for (
          var r = -1, a = Lr(t) ? [t] : Dr(t), i = a.length, o = i - 1;
          ++r < i;

        ) {
          var s = a[r],
            u = n;
          if (r !== o) {
            var l = e[s];
            u = ir(l) || Array.isArray(l) ? l : isNaN(+a[r + 1]) ? {} : [];
          }
          (e[s] = u), (e = e[s]);
        }
        return e;
      }
      var Mr = function e(t, n, r) {
          var a,
            i = E(r || Object.keys(t));
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var o = a.value,
                s = cr(t, o);
              if (s) {
                var u = s._f,
                  l = Kn(s, Jn);
                if (u && n(u.name)) {
                  if (u.ref.focus) {
                    u.ref.focus();
                    break;
                  }
                  if (u.refs && u.refs[0].focus) {
                    u.refs[0].focus();
                    break;
                  }
                } else ir(l) && e(l, n);
              }
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
        },
        Ir = function (e) {
          return {
            isOnSubmit: !e || e === vr,
            isOnBlur: e === pr,
            isOnChange: e === hr,
            isOnAll: e === Ar,
            isOnTouch: e === mr,
          };
        },
        zr = function (e, t, n) {
          return (
            !n &&
            (t.watchAll ||
              t.watch.has(e) ||
              f(t.watch).some(function (t) {
                return e.startsWith(t) && /^\.\w+/.test(e.slice(t.length));
              }))
          );
        },
        Ur = function (e, t, n) {
          var r = ur(cr(e, n));
          return Vr(r, "root", t[n]), Vr(e, n, r), e;
        },
        Br = function (e) {
          return "boolean" === typeof e;
        },
        Hr = function (e) {
          return "file" === e.type;
        },
        Wr = function (e) {
          return "function" === typeof e;
        },
        qr = function (e) {
          if (!Fr) return !1;
          var t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        Yr = function (e) {
          return Cr(e) || t.isValidElement(e);
        },
        Xr = function (e) {
          return "radio" === e.type;
        },
        Gr = function (e) {
          return e instanceof RegExp;
        },
        Qr = { value: !1, isValid: !1 },
        Zr = { value: !0, isValid: !0 },
        Kr = function (e) {
          if (Array.isArray(e)) {
            if (e.length > 1) {
              var t = e
                .filter(function (e) {
                  return e && e.checked && !e.disabled;
                })
                .map(function (e) {
                  return e.value;
                });
              return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
              ? e[0].attributes && !lr(e[0].attributes.value)
                ? lr(e[0].value) || "" === e[0].value
                  ? Zr
                  : { value: e[0].value, isValid: !0 }
                : Zr
              : Qr;
          }
          return Qr;
        },
        $r = { isValid: !1, value: null },
        Jr = function (e) {
          return Array.isArray(e)
            ? e.reduce(function (e, t) {
                return t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e;
              }, $r)
            : $r;
        };
      function ea(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "validate";
        if (Yr(e) || (Array.isArray(e) && e.every(Yr)) || (Br(e) && !e))
          return { type: n, message: Yr(e) ? e : "", ref: t };
      }
      var ta = function (e) {
          return ir(e) && !Gr(e) ? e : { value: e, message: "" };
        },
        na = (function () {
          var e = $e(
            Ze().mark(function e(t, n, r, a, i) {
              var o,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                v,
                m,
                A,
                g,
                y,
                b,
                x,
                w,
                k,
                S,
                E,
                _,
                T,
                N,
                j,
                C,
                P,
                F,
                O,
                R,
                L,
                D,
                V,
                M,
                I,
                z,
                U,
                B,
                H,
                W,
                q,
                Y,
                X,
                G,
                Q,
                Z,
                K,
                $,
                J;
              return Ze().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = t._f),
                        (s = o.ref),
                        (u = o.refs),
                        (l = o.required),
                        (c = o.maxLength),
                        (f = o.minLength),
                        (d = o.min),
                        (p = o.max),
                        (h = o.pattern),
                        (v = o.validate),
                        (m = o.name),
                        (A = o.valueAsNumber),
                        (g = o.mount),
                        (y = o.disabled),
                        (b = cr(n, m)),
                        g && !y)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", {});
                    case 4:
                      if (
                        ((x = u ? u[0] : s),
                        (w = function (e) {
                          a &&
                            x.reportValidity &&
                            (x.setCustomValidity(Br(e) ? "" : e || ""),
                            x.reportValidity());
                        }),
                        (k = {}),
                        (S = Xr(s)),
                        (E = tr(s)),
                        (_ = S || E),
                        (T =
                          ((A || Hr(s)) && lr(s.value) && lr(b)) ||
                          (qr(s) && "" === s.value) ||
                          "" === b ||
                          (Array.isArray(b) && !b.length)),
                        (N = Rr.bind(null, m, r, k)),
                        (j = function (e, t, n) {
                          var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : br,
                            a =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : xr,
                            i = e ? t : n;
                          k[m] = Qe(
                            { type: e ? r : a, message: i, ref: s },
                            N(e ? r : a, i)
                          );
                        }),
                        !(i
                          ? !Array.isArray(b) || !b.length
                          : l &&
                            ((!_ && (T || rr(b))) ||
                              (Br(b) && !b) ||
                              (E && !Kr(u).isValid) ||
                              (S && !Jr(u).isValid))))
                      ) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((C = Yr(l) ? { value: !!l, message: l } : ta(l)),
                        (P = C.value),
                        (F = C.message),
                        !P)
                      ) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((k[m] = Qe(
                          { type: kr, message: F, ref: x },
                          N(kr, F)
                        )),
                        r)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return w(F), e.abrupt("return", k);
                    case 20:
                      if (T || (rr(d) && rr(p))) {
                        e.next = 29;
                        break;
                      }
                      if (
                        ((L = ta(p)),
                        (D = ta(d)),
                        rr(b) || isNaN(b)
                          ? ((M = s.valueAsDate || new Date(b)),
                            (I = function (e) {
                              return new Date(
                                new Date().toDateString() + " " + e
                              );
                            }),
                            (z = "time" == s.type),
                            (U = "week" == s.type),
                            Cr(L.value) &&
                              b &&
                              (O = z
                                ? I(b) > I(L.value)
                                : U
                                ? b > L.value
                                : M > new Date(L.value)),
                            Cr(D.value) &&
                              b &&
                              (R = z
                                ? I(b) < I(D.value)
                                : U
                                ? b < D.value
                                : M < new Date(D.value)))
                          : ((V = s.valueAsNumber || (b ? +b : b)),
                            rr(L.value) || (O = V > L.value),
                            rr(D.value) || (R = V < D.value)),
                        !O && !R)
                      ) {
                        e.next = 29;
                        break;
                      }
                      if ((j(!!O, L.message, D.message, gr, yr), r)) {
                        e.next = 29;
                        break;
                      }
                      return w(k[m].message), e.abrupt("return", k);
                    case 29:
                      if (
                        (!c && !f) ||
                        T ||
                        !(Cr(b) || (i && Array.isArray(b)))
                      ) {
                        e.next = 39;
                        break;
                      }
                      if (
                        ((B = ta(c)),
                        (H = ta(f)),
                        (W = !rr(B.value) && b.length > B.value),
                        (q = !rr(H.value) && b.length < H.value),
                        !W && !q)
                      ) {
                        e.next = 39;
                        break;
                      }
                      if ((j(W, B.message, H.message), r)) {
                        e.next = 39;
                        break;
                      }
                      return w(k[m].message), e.abrupt("return", k);
                    case 39:
                      if (!h || T || !Cr(b)) {
                        e.next = 46;
                        break;
                      }
                      if (
                        ((Y = ta(h)),
                        (X = Y.value),
                        (G = Y.message),
                        !Gr(X) || b.match(X))
                      ) {
                        e.next = 46;
                        break;
                      }
                      if (
                        ((k[m] = Qe(
                          { type: wr, message: G, ref: s },
                          N(wr, G)
                        )),
                        r)
                      ) {
                        e.next = 46;
                        break;
                      }
                      return w(G), e.abrupt("return", k);
                    case 46:
                      if (!v) {
                        e.next = 80;
                        break;
                      }
                      if (!Wr(v)) {
                        e.next = 59;
                        break;
                      }
                      return (e.next = 50), v(b, n);
                    case 50:
                      if (((Q = e.sent), !(Z = ea(Q, x)))) {
                        e.next = 57;
                        break;
                      }
                      if (((k[m] = Qe(Qe({}, Z), N(Sr, Z.message))), r)) {
                        e.next = 57;
                        break;
                      }
                      return w(Z.message), e.abrupt("return", k);
                    case 57:
                      e.next = 80;
                      break;
                    case 59:
                      if (!ir(v)) {
                        e.next = 80;
                        break;
                      }
                      (K = {}), (e.t0 = Ze().keys(v));
                    case 62:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 76;
                        break;
                      }
                      if ((($ = e.t1.value), _r(K) || r)) {
                        e.next = 66;
                        break;
                      }
                      return e.abrupt("break", 76);
                    case 66:
                      return (e.t2 = ea), (e.next = 69), v[$](b, n);
                    case 69:
                      (e.t3 = e.sent),
                        (e.t4 = x),
                        (e.t5 = $),
                        (J = (0, e.t2)(e.t3, e.t4, e.t5)) &&
                          ((K = Qe(Qe({}, J), N($, J.message))),
                          w(J.message),
                          r && (k[m] = K)),
                        (e.next = 62);
                      break;
                    case 76:
                      if (_r(K)) {
                        e.next = 80;
                        break;
                      }
                      if (((k[m] = Qe({ ref: x }, K)), r)) {
                        e.next = 80;
                        break;
                      }
                      return e.abrupt("return", k);
                    case 80:
                      return w(!0), e.abrupt("return", k);
                    case 82:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, a, i) {
            return e.apply(this, arguments);
          };
        })();
      function ra(e, t) {
        var n = Array.isArray(t) ? t : Lr(t) ? [t] : Dr(t),
          r =
            1 === n.length
              ? e
              : (function (e, t) {
                  for (var n = t.slice(0, -1).length, r = 0; r < n; )
                    e = lr(e) ? r++ : e[t[r++]];
                  return e;
                })(e, n),
          a = n.length - 1,
          i = n[a];
        return (
          r && delete r[i],
          0 !== a &&
            ((ir(r) && _r(r)) ||
              (Array.isArray(r) &&
                (function (e) {
                  for (var t in e) if (!lr(e[t])) return !1;
                  return !0;
                })(r))) &&
            ra(e, n.slice(0, -1)),
          e
        );
      }
      function aa() {
        var e = [];
        return {
          get observers() {
            return e;
          },
          next: function (t) {
            var n,
              r = E(e);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                n.value.next(t);
              }
            } catch (a) {
              r.e(a);
            } finally {
              r.f();
            }
          },
          subscribe: function (t) {
            return (
              e.push(t),
              {
                unsubscribe: function () {
                  e = e.filter(function (e) {
                    return e !== t;
                  });
                },
              }
            );
          },
          unsubscribe: function () {
            e = [];
          },
        };
      }
      var ia = function (e) {
        return rr(e) || !ar(e);
      };
      function oa(e, t) {
        if (ia(e) || ia(t)) return e === t;
        if (nr(e) && nr(t)) return e.getTime() === t.getTime();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0, i = n; a < i.length; a++) {
          var o = i[a],
            s = e[o];
          if (!r.includes(o)) return !1;
          if ("ref" !== o) {
            var u = t[o];
            if (
              (nr(s) && nr(u)) ||
              (ir(s) && ir(u)) ||
              (Array.isArray(s) && Array.isArray(u))
                ? !oa(s, u)
                : s !== u
            )
              return !1;
          }
        }
        return !0;
      }
      var sa = function (e) {
          return "select-multiple" === e.type;
        },
        ua = function (e) {
          return Xr(e) || tr(e);
        },
        la = function (e) {
          return qr(e) && e.isConnected;
        },
        ca = function (e) {
          for (var t in e) if (Wr(e[t])) return !0;
          return !1;
        };
      function fa(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Array.isArray(e);
        if (ir(e) || n)
          for (var r in e)
            Array.isArray(e[r]) || (ir(e[r]) && !ca(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), fa(e[r], t[r]))
              : rr(e[r]) || (t[r] = !0);
        return t;
      }
      function da(e, t, n) {
        var r = Array.isArray(e);
        if (ir(e) || r)
          for (var a in e)
            Array.isArray(e[a]) || (ir(e[a]) && !ca(e[a]))
              ? lr(t) || ia(n[a])
                ? (n[a] = Array.isArray(e[a]) ? fa(e[a], []) : Qe({}, fa(e[a])))
                : da(e[a], rr(t) ? {} : t[a], n[a])
              : oa(e[a], t[a])
              ? delete n[a]
              : (n[a] = !0);
        return n;
      }
      var pa = function (e, t) {
          return da(e, t, fa(t));
        },
        ha = function (e, t) {
          var n = t.valueAsNumber,
            r = t.valueAsDate,
            a = t.setValueAs;
          return lr(e)
            ? e
            : n
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && Cr(e)
            ? new Date(e)
            : a
            ? a(e)
            : e;
        };
      function va(e) {
        var t = e.ref;
        if (
          !(e.refs
            ? e.refs.every(function (e) {
                return e.disabled;
              })
            : t.disabled)
        )
          return Hr(t)
            ? t.files
            : Xr(t)
            ? Jr(e.refs).value
            : sa(t)
            ? f(t.selectedOptions).map(function (e) {
                return e.value;
              })
            : tr(t)
            ? Kr(e.refs).value
            : ha(lr(t.value) ? e.ref.value : t.value, e);
      }
      var ma = function (e, t, n, r) {
          var a,
            i = {},
            o = E(e);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var s = a.value,
                u = cr(t, s);
              u && Vr(i, s, u._f);
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
          return {
            criteriaMode: n,
            names: f(e),
            fields: i,
            shouldUseNativeValidation: r,
          };
        },
        Aa = function (e) {
          return lr(e)
            ? e
            : Gr(e)
            ? e.source
            : ir(e)
            ? Gr(e.value)
              ? e.value.source
              : e.value
            : e;
        },
        ga = function (e) {
          return (
            e.mount &&
            (e.required ||
              e.min ||
              e.max ||
              e.maxLength ||
              e.minLength ||
              e.pattern ||
              e.validate)
          );
        };
      function ya(e, t, n) {
        var r = cr(e, n);
        if (r || Lr(n)) return { error: r, name: n };
        for (var a = n.split("."); a.length; ) {
          var i = a.join("."),
            o = cr(t, i),
            s = cr(e, i);
          if (o && !Array.isArray(o) && n !== i) return { name: n };
          if (s && s.type) return { name: i, error: s };
          a.pop();
        }
        return { name: n };
      }
      var ba = function (e, t, n, r, a) {
          return (
            !a.isOnAll &&
            (!n && a.isOnTouch
              ? !(t || e)
              : (n ? r.isOnBlur : a.isOnBlur)
              ? !e
              : !(n ? r.isOnChange : a.isOnChange) || e)
          );
        },
        xa = function (e, t) {
          return !ur(cr(e, t)).length && ra(e, t);
        },
        wa = { mode: vr, reValidateMode: hr, shouldFocusError: !0 };
      function ka() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = Qe(Qe({}, wa), t),
          a = t.resetOptions && t.resetOptions.keepDirtyValues,
          i = {
            submitCount: 0,
            isDirty: !1,
            isLoading: !0,
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {},
          },
          o = {},
          s =
            ((ir(r.defaultValues) || ir(r.values)) &&
              Or(r.defaultValues || r.values)) ||
            {},
          u = r.shouldUnregister ? {} : Or(s),
          l = { action: !1, mount: !1, watch: !1 },
          c = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
          },
          d = 0,
          p = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          h = { watch: aa(), array: aa(), state: aa() },
          v = Ir(r.mode),
          m = Ir(r.reValidateMode),
          A = r.criteriaMode === Ar,
          g = function (e) {
            return function (t) {
              clearTimeout(d), (d = window.setTimeout(e, t));
            };
          },
          y = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!p.isValid && !t) {
                          e.next = 14;
                          break;
                        }
                        if (!r.resolver) {
                          e.next = 9;
                          break;
                        }
                        return (e.t1 = _r), (e.next = 5), T();
                      case 5:
                        (e.t2 = e.sent.errors),
                          (e.t0 = (0, e.t1)(e.t2)),
                          (e.next = 12);
                        break;
                      case 9:
                        return (e.next = 11), j(o, !0);
                      case 11:
                        e.t0 = e.sent;
                      case 12:
                        (n = e.t0) !== i.isValid &&
                          h.state.next({ isValid: n });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          b = function (e) {
            return p.isValidating && h.state.next({ isValidating: e });
          },
          x = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0,
              a =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4],
              c =
                !(arguments.length > 5 && void 0 !== arguments[5]) ||
                arguments[5];
            if (r && n) {
              if (((l.action = !0), c && Array.isArray(cr(o, e)))) {
                var f = n(cr(o, e), r.argA, r.argB);
                a && Vr(o, e, f);
              }
              if (c && Array.isArray(cr(i.errors, e))) {
                var d = n(cr(i.errors, e), r.argA, r.argB);
                a && Vr(i.errors, e, d), xa(i.errors, e);
              }
              if (
                p.touchedFields &&
                c &&
                Array.isArray(cr(i.touchedFields, e))
              ) {
                var v = n(cr(i.touchedFields, e), r.argA, r.argB);
                a && Vr(i.touchedFields, e, v);
              }
              p.dirtyFields && (i.dirtyFields = pa(s, u)),
                h.state.next({
                  name: e,
                  isDirty: P(e, t),
                  dirtyFields: i.dirtyFields,
                  errors: i.errors,
                  isValid: i.isValid,
                });
            } else Vr(u, e, t);
          },
          w = function (e, t) {
            Vr(i.errors, e, t), h.state.next({ errors: i.errors });
          },
          k = function (e, t, n, r) {
            var a = cr(o, e);
            if (a) {
              var i = cr(u, e, lr(n) ? cr(s, e) : n);
              lr(i) || (r && r.defaultChecked) || t
                ? Vr(u, e, t ? i : va(a._f))
                : R(e, i),
                l.mount && y();
            }
          },
          S = function (e, t, n, r, a) {
            var o = !1,
              u = !1,
              l = { name: e };
            if (!n || r) {
              p.isDirty &&
                ((u = i.isDirty),
                (i.isDirty = l.isDirty = P()),
                (o = u !== l.isDirty));
              var c = oa(cr(s, e), t);
              (u = cr(i.dirtyFields, e)),
                c ? ra(i.dirtyFields, e) : Vr(i.dirtyFields, e, !0),
                (l.dirtyFields = i.dirtyFields),
                (o = o || (p.dirtyFields && u !== !c));
            }
            if (n) {
              var f = cr(i.touchedFields, e);
              f ||
                (Vr(i.touchedFields, e, n),
                (l.touchedFields = i.touchedFields),
                (o = o || (p.touchedFields && f !== n)));
            }
            return o && a && h.state.next(l), o ? l : {};
          },
          _ = function (n, r, a, o) {
            var s = cr(i.errors, n),
              u = p.isValid && Br(r) && i.isValid !== r;
            if (
              (t.delayError && a
                ? (e = g(function () {
                    return w(n, a);
                  }))(t.delayError)
                : (clearTimeout(d),
                  (e = null),
                  a ? Vr(i.errors, n, a) : ra(i.errors, n)),
              (a ? !oa(s, a) : s) || !_r(o) || u)
            ) {
              var l = Qe(
                Qe(Qe({}, o), u && Br(r) ? { isValid: r } : {}),
                {},
                { errors: i.errors, name: n }
              );
              (i = Qe(Qe({}, i), l)), h.state.next(l);
            }
            b(!1);
          },
          T = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          r.resolver(
                            u,
                            r.context,
                            ma(
                              t || c.mount,
                              o,
                              r.criteriaMode,
                              r.shouldUseNativeValidation
                            )
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n, r, a, o, s, u;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), T();
                      case 2:
                        if (((n = e.sent), (r = n.errors), t)) {
                          a = E(t);
                          try {
                            for (a.s(); !(o = a.n()).done; )
                              (s = o.value),
                                (u = cr(r, s))
                                  ? Vr(i.errors, s, u)
                                  : ra(i.errors, s);
                          } catch (l) {
                            a.e(l);
                          } finally {
                            a.f();
                          }
                        } else i.errors = r;
                        return e.abrupt("return", r);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          j = (function () {
            var e = $e(
              Ze().mark(function e(t, n) {
                var a,
                  o,
                  s,
                  l,
                  f,
                  d,
                  p,
                  h = arguments;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a =
                          h.length > 2 && void 0 !== h[2]
                            ? h[2]
                            : { valid: !0 }),
                          (e.t0 = Ze().keys(t));
                      case 2:
                        if ((e.t1 = e.t0()).done) {
                          e.next = 23;
                          break;
                        }
                        if (((o = e.t1.value), !(s = t[o]))) {
                          e.next = 21;
                          break;
                        }
                        if (((l = s._f), (f = Kn(s, er)), !l)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (d = c.array.has(l.name)),
                          (e.next = 11),
                          na(s, u, A, r.shouldUseNativeValidation, d)
                        );
                      case 11:
                        if (!(p = e.sent)[l.name]) {
                          e.next = 16;
                          break;
                        }
                        if (((a.valid = !1), !n)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("break", 23);
                      case 16:
                        !n &&
                          (cr(p, l.name)
                            ? d
                              ? Ur(i.errors, p, l.name)
                              : Vr(i.errors, l.name, p[l.name])
                            : ra(i.errors, l.name));
                      case 17:
                        if (((e.t2 = f), !e.t2)) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 21), j(f, n, a);
                      case 21:
                        e.next = 2;
                        break;
                      case 23:
                        return e.abrupt("return", a.valid);
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          C = function () {
            var e,
              t = E(c.unMount);
            try {
              for (t.s(); !(e = t.n()).done; ) {
                var n = e.value,
                  r = cr(o, n);
                r &&
                  (r._f.refs
                    ? r._f.refs.every(function (e) {
                        return !la(e);
                      })
                    : !la(r._f.ref)) &&
                  W(n);
              }
            } catch (a) {
              t.e(a);
            } finally {
              t.f();
            }
            c.unMount = new Set();
          },
          P = function (e, t) {
            return e && t && Vr(u, e, t), !oa(I(), s);
          },
          F = function (e, t, n) {
            return Pr(
              e,
              c,
              Qe({}, l.mount ? u : lr(t) ? s : Cr(e) ? Xe({}, e, t) : t),
              n,
              t
            );
          },
          O = function (e) {
            return ur(
              cr(l.mount ? u : s, e, t.shouldUnregister ? cr(s, e, []) : [])
            );
          },
          R = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = cr(o, e),
              a = t;
            if (r) {
              var i = r._f;
              i &&
                (!i.disabled && Vr(u, e, ha(t, i)),
                (a = qr(i.ref) && rr(t) ? "" : t),
                sa(i.ref)
                  ? f(i.ref.options).forEach(function (e) {
                      return (e.selected = a.includes(e.value));
                    })
                  : i.refs
                  ? tr(i.ref)
                    ? i.refs.length > 1
                      ? i.refs.forEach(function (e) {
                          return (
                            (!e.defaultChecked || !e.disabled) &&
                            (e.checked = Array.isArray(a)
                              ? !!a.find(function (t) {
                                  return t === e.value;
                                })
                              : a === e.value)
                          );
                        })
                      : i.refs[0] && (i.refs[0].checked = !!a)
                    : i.refs.forEach(function (e) {
                        return (e.checked = e.value === a);
                      })
                  : Hr(i.ref)
                  ? (i.ref.value = "")
                  : ((i.ref.value = a),
                    i.ref.type || h.watch.next({ name: e })));
            }
            (n.shouldDirty || n.shouldTouch) &&
              S(e, a, n.shouldTouch, n.shouldDirty, !0),
              n.shouldValidate && M(e);
          },
          L = function e(t, n, r) {
            for (var a in n) {
              var i = n[a],
                s = "".concat(t, ".").concat(a),
                u = cr(o, s);
              (!c.array.has(t) && ia(i) && (!u || u._f)) || nr(i)
                ? R(s, i, r)
                : e(s, i, r);
            }
          },
          D = function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              a = cr(o, e),
              i = c.array.has(e),
              f = Or(t);
            Vr(u, e, f),
              i
                ? (h.array.next({ name: e, values: u }),
                  (p.isDirty || p.dirtyFields) &&
                    r.shouldDirty &&
                    h.state.next({
                      name: e,
                      dirtyFields: pa(s, u),
                      isDirty: P(e, f),
                    }))
                : !a || a._f || rr(f)
                ? R(e, f, r)
                : L(e, f, r),
              zr(e, c) && h.state.next({}),
              h.watch.next({ name: e }),
              !l.mount && n();
          },
          V = (function () {
            var t = $e(
              Ze().mark(function t(n) {
                var a, s, l, f, d, g, x, w, k, E, N, C, P, F, O, R;
                return Ze().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((a = n.target),
                          (s = a.name),
                          (l = cr(o, s)),
                          (f = function () {
                            return a.type ? va(l._f) : or(n);
                          }),
                          !l)
                        ) {
                          t.next = 45;
                          break;
                        }
                        if (
                          ((x = f()),
                          (w = n.type === fr || n.type === dr),
                          (k =
                            (!ga(l._f) &&
                              !r.resolver &&
                              !cr(i.errors, s) &&
                              !l._f.deps) ||
                            ba(w, cr(i.touchedFields, s), i.isSubmitted, m, v)),
                          (E = zr(s, c, w)),
                          Vr(u, s, x),
                          w
                            ? (l._f.onBlur && l._f.onBlur(n), e && e(0))
                            : l._f.onChange && l._f.onChange(n),
                          (N = S(s, x, w, !1)),
                          (C = !_r(N) || E),
                          !w && h.watch.next({ name: s, type: n.type }),
                          !k)
                        ) {
                          t.next = 17;
                          break;
                        }
                        return (
                          p.isValid && y(),
                          t.abrupt(
                            "return",
                            C && h.state.next(Qe({ name: s }, E ? {} : N))
                          )
                        );
                      case 17:
                        if ((!w && E && h.state.next({}), b(!0), !r.resolver)) {
                          t.next = 31;
                          break;
                        }
                        return (t.next = 22), T([s]);
                      case 22:
                        (P = t.sent),
                          (F = P.errors),
                          (O = ya(i.errors, o, s)),
                          (R = ya(F, o, O.name || s)),
                          (d = R.error),
                          (s = R.name),
                          (g = _r(F)),
                          (t.next = 43);
                        break;
                      case 31:
                        return (
                          (t.next = 33),
                          na(l, u, A, r.shouldUseNativeValidation)
                        );
                      case 33:
                        if (((t.t0 = s), !(d = t.sent[t.t0]))) {
                          t.next = 39;
                          break;
                        }
                        (g = !1), (t.next = 43);
                        break;
                      case 39:
                        if (!p.isValid) {
                          t.next = 43;
                          break;
                        }
                        return (t.next = 42), j(o, !0);
                      case 42:
                        g = t.sent;
                      case 43:
                        l._f.deps && M(l._f.deps), _(s, g, d, N);
                      case 45:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          M = (function () {
            var e = $e(
              Ze().mark(function e(t) {
                var n,
                  a,
                  s,
                  u,
                  l,
                  f = arguments;
                return Ze().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                          (u = Nr(t)),
                          b(!0),
                          !r.resolver)
                        ) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 6), N(lr(t) ? t : u);
                      case 6:
                        (l = e.sent),
                          (a = _r(l)),
                          (s = t
                            ? !u.some(function (e) {
                                return cr(l, e);
                              })
                            : a),
                          (e.next = 21);
                        break;
                      case 11:
                        if (!t) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (e.next = 14),
                          Promise.all(
                            u.map(
                              (function () {
                                var e = $e(
                                  Ze().mark(function e(t) {
                                    var n;
                                    return Ze().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (n = cr(o, t)),
                                              (e.next = 3),
                                              j(n && n._f ? Xe({}, t, n) : n)
                                            );
                                          case 3:
                                            return e.abrupt("return", e.sent);
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 14:
                        ((s = e.sent.every(Boolean)) || i.isValid) && y(),
                          (e.next = 21);
                        break;
                      case 18:
                        return (e.next = 20), j(o);
                      case 20:
                        s = a = e.sent;
                      case 21:
                        return (
                          h.state.next(
                            Qe(
                              Qe(
                                Qe(
                                  {},
                                  !Cr(t) || (p.isValid && a !== i.isValid)
                                    ? {}
                                    : { name: t }
                                ),
                                r.resolver || !t ? { isValid: a } : {}
                              ),
                              {},
                              { errors: i.errors, isValidating: !1 }
                            )
                          ),
                          n.shouldFocus &&
                            !s &&
                            Mr(
                              o,
                              function (e) {
                                return e && cr(i.errors, e);
                              },
                              t ? u : c.mount
                            ),
                          e.abrupt("return", s)
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          I = function (e) {
            var t = Qe(Qe({}, s), l.mount ? u : {});
            return lr(e)
              ? t
              : Cr(e)
              ? cr(t, e)
              : e.map(function (e) {
                  return cr(t, e);
                });
          },
          z = function (e, t) {
            return {
              invalid: !!cr((t || i).errors, e),
              isDirty: !!cr((t || i).dirtyFields, e),
              isTouched: !!cr((t || i).touchedFields, e),
              error: cr((t || i).errors, e),
            };
          },
          U = function (e) {
            e &&
              Nr(e).forEach(function (e) {
                return ra(i.errors, e);
              }),
              h.state.next({ errors: e ? i.errors : {} });
          },
          B = function (e, t, n) {
            var r = (cr(o, e, { _f: {} })._f || {}).ref;
            Vr(i.errors, e, Qe(Qe({}, t), {}, { ref: r })),
              h.state.next({ name: e, errors: i.errors, isValid: !1 }),
              n && n.shouldFocus && r && r.focus && r.focus();
          },
          H = function (e, t) {
            return Wr(e)
              ? h.watch.subscribe({
                  next: function (n) {
                    return e(F(void 0, t), n);
                  },
                })
              : F(e, t, !0);
          },
          W = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = E(e ? Nr(e) : c.mount);
            try {
              for (a.s(); !(t = a.n()).done; ) {
                var l = t.value;
                c.mount.delete(l),
                  c.array.delete(l),
                  cr(o, l) &&
                    (n.keepValue || (ra(o, l), ra(u, l)),
                    !n.keepError && ra(i.errors, l),
                    !n.keepDirty && ra(i.dirtyFields, l),
                    !n.keepTouched && ra(i.touchedFields, l),
                    !r.shouldUnregister && !n.keepDefaultValue && ra(s, l));
              }
            } catch (f) {
              a.e(f);
            } finally {
              a.f();
            }
            h.watch.next({}),
              h.state.next(Qe(Qe({}, i), n.keepDirty ? { isDirty: P() } : {})),
              !n.keepIsValid && y();
          },
          q = function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = cr(o, t),
              i = Br(n.disabled);
            return (
              Vr(
                o,
                t,
                Qe(
                  Qe({}, a || {}),
                  {},
                  {
                    _f: Qe(
                      Qe({}, a && a._f ? a._f : { ref: { name: t } }),
                      {},
                      { name: t, mount: !0 },
                      n
                    ),
                  }
                )
              ),
              c.mount.add(t),
              a
                ? i && Vr(u, t, n.disabled ? void 0 : cr(u, t, va(a._f)))
                : k(t, !0, n.value),
              Qe(
                Qe(
                  Qe({}, i ? { disabled: n.disabled } : {}),
                  r.shouldUseNativeValidation
                    ? {
                        required: !!n.required,
                        min: Aa(n.min),
                        max: Aa(n.max),
                        minLength: Aa(n.minLength),
                        maxLength: Aa(n.maxLength),
                        pattern: Aa(n.pattern),
                      }
                    : {}
                ),
                {},
                {
                  name: t,
                  onChange: V,
                  onBlur: V,
                  ref: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function (i) {
                    if (i) {
                      e(t, n), (a = cr(o, t));
                      var u =
                          (lr(i.value) &&
                            i.querySelectorAll &&
                            i.querySelectorAll("input,select,textarea")[0]) ||
                          i,
                        d = ua(u),
                        p = a._f.refs || [];
                      if (
                        d
                          ? p.find(function (e) {
                              return e === u;
                            })
                          : u === a._f.ref
                      )
                        return;
                      Vr(o, t, {
                        _f: Qe(
                          Qe({}, a._f),
                          d
                            ? {
                                refs: [].concat(
                                  f(p.filter(la)),
                                  [u],
                                  f(Array.isArray(cr(s, t)) ? [{}] : [])
                                ),
                                ref: { type: u.type, name: t },
                              }
                            : { ref: u }
                        ),
                      }),
                        k(t, !1, void 0, u);
                    } else (a = cr(o, t, {}))._f && (a._f.mount = !1), (r.shouldUnregister || n.shouldUnregister) && (!sr(c.array, t) || !l.action) && c.unMount.add(t);
                  }),
                }
              )
            );
          },
          Y = function () {
            return (
              r.shouldFocusError &&
              Mr(
                o,
                function (e) {
                  return e && cr(i.errors, e);
                },
                c.mount
              )
            );
          },
          X = function (e, t) {
            return (function () {
              var n = $e(
                Ze().mark(function n(a) {
                  var s, l, c, f;
                  return Ze().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (a &&
                              (a.preventDefault && a.preventDefault(),
                              a.persist && a.persist()),
                            (s = Or(u)),
                            h.state.next({ isSubmitting: !0 }),
                            !r.resolver)
                          ) {
                            n.next = 13;
                            break;
                          }
                          return (n.next = 6), T();
                        case 6:
                          (l = n.sent),
                            (c = l.errors),
                            (f = l.values),
                            (i.errors = c),
                            (s = f),
                            (n.next = 15);
                          break;
                        case 13:
                          return (n.next = 15), j(o);
                        case 15:
                          if ((ra(i.errors, "root"), !_r(i.errors))) {
                            n.next = 22;
                            break;
                          }
                          return (
                            h.state.next({ errors: {} }), (n.next = 20), e(s, a)
                          );
                        case 20:
                          n.next = 26;
                          break;
                        case 22:
                          if (!t) {
                            n.next = 25;
                            break;
                          }
                          return (n.next = 25), t(Qe({}, i.errors), a);
                        case 25:
                          Y();
                        case 26:
                          h.state.next({
                            isSubmitted: !0,
                            isSubmitting: !1,
                            isSubmitSuccessful: _r(i.errors),
                            submitCount: i.submitCount + 1,
                            errors: i.errors,
                          });
                        case 27:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          },
          G = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            cr(o, e) &&
              (lr(t.defaultValue)
                ? D(e, cr(s, e))
                : (D(e, t.defaultValue), Vr(s, e, t.defaultValue)),
              t.keepTouched || ra(i.touchedFields, e),
              t.keepDirty ||
                (ra(i.dirtyFields, e),
                (i.isDirty = t.defaultValue ? P(e, cr(s, e)) : P())),
              t.keepError || (ra(i.errors, e), p.isValid && y()),
              h.state.next(Qe({}, i)));
          },
          Q = function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              f = e || s,
              d = Or(f),
              v = e && !_r(e) ? d : s;
            if ((r.keepDefaultValues || (s = f), !r.keepValues)) {
              if (r.keepDirtyValues || a) {
                var m,
                  A = E(c.mount);
                try {
                  for (A.s(); !(m = A.n()).done; ) {
                    var g = m.value;
                    cr(i.dirtyFields, g) ? Vr(v, g, cr(u, g)) : D(g, cr(v, g));
                  }
                } catch (_) {
                  A.e(_);
                } finally {
                  A.f();
                }
              } else {
                if (Fr && lr(e)) {
                  var y,
                    b = E(c.mount);
                  try {
                    for (b.s(); !(y = b.n()).done; ) {
                      var x = y.value,
                        w = cr(o, x);
                      if (w && w._f) {
                        var k = Array.isArray(w._f.refs)
                          ? w._f.refs[0]
                          : w._f.ref;
                        if (qr(k)) {
                          var S = k.closest("form");
                          if (S) {
                            S.reset();
                            break;
                          }
                        }
                      }
                    }
                  } catch (_) {
                    b.e(_);
                  } finally {
                    b.f();
                  }
                }
                o = {};
              }
              (u = t.shouldUnregister ? (r.keepDefaultValues ? Or(s) : {}) : d),
                h.array.next({ values: v }),
                h.watch.next({ values: v });
            }
            (c = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: "",
            }),
              !l.mount && n(),
              (l.mount = !p.isValid || !!r.keepIsValid),
              (l.watch = !!t.shouldUnregister),
              h.state.next({
                submitCount: r.keepSubmitCount ? i.submitCount : 0,
                isDirty:
                  r.keepDirty || r.keepDirtyValues
                    ? i.isDirty
                    : !(!r.keepDefaultValues || oa(e, s)),
                isSubmitted: !!r.keepIsSubmitted && i.isSubmitted,
                dirtyFields:
                  r.keepDirty || r.keepDirtyValues
                    ? i.dirtyFields
                    : r.keepDefaultValues && e
                    ? pa(s, e)
                    : {},
                touchedFields: r.keepTouched ? i.touchedFields : {},
                errors: r.keepErrors ? i.errors : {},
                isSubmitting: !1,
                isSubmitSuccessful: !1,
              });
          },
          Z = function (e, t) {
            return Q(Wr(e) ? e(u) : e, t);
          },
          K = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = cr(o, e),
              r = n && n._f;
            if (r) {
              var a = r.refs ? r.refs[0] : r.ref;
              a.focus && (a.focus(), t.shouldSelect && a.select());
            }
          },
          $ = function (e) {
            i = Qe(Qe({}, i), e);
          };
        return (
          Wr(r.defaultValues) &&
            r.defaultValues().then(function (e) {
              Z(e, r.resetOptions), h.state.next({ isLoading: !1 });
            }),
          {
            control: {
              register: q,
              unregister: W,
              getFieldState: z,
              _executeSchema: T,
              _focusError: Y,
              _getWatch: F,
              _getDirty: P,
              _updateValid: y,
              _removeUnmounted: C,
              _updateFieldArray: x,
              _getFieldArray: O,
              _reset: Q,
              _updateFormState: $,
              _subjects: h,
              _proxyFormState: p,
              get _fields() {
                return o;
              },
              get _formValues() {
                return u;
              },
              get _stateFlags() {
                return l;
              },
              set _stateFlags(e) {
                l = e;
              },
              get _defaultValues() {
                return s;
              },
              get _names() {
                return c;
              },
              set _names(e) {
                c = e;
              },
              get _formState() {
                return i;
              },
              set _formState(e) {
                i = e;
              },
              get _options() {
                return r;
              },
              set _options(e) {
                r = Qe(Qe({}, r), e);
              },
            },
            trigger: M,
            register: q,
            handleSubmit: X,
            watch: H,
            setValue: D,
            getValues: I,
            reset: Z,
            resetField: G,
            clearErrors: U,
            unregister: W,
            setError: B,
            setFocus: K,
            getFieldState: z,
          }
        );
      }
      function Sa() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.useRef(),
          r = t.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: !0,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            errors: {},
            defaultValues: Wr(e.defaultValues) ? void 0 : e.defaultValues,
          }),
          a = l(r, 2),
          i = a[0],
          o = a[1];
        n.current ||
          (n.current = Qe(
            Qe(
              {},
              ka(e, function () {
                return o(function (e) {
                  return Qe({}, e);
                });
              })
            ),
            {},
            { formState: i }
          ));
        var s = n.current.control;
        return (
          (s._options = e),
          jr({
            subject: s._subjects.state,
            next: function (e) {
              Tr(e, s._proxyFormState, s._updateFormState, !0) &&
                o(Qe({}, s._formState));
            },
          }),
          t.useEffect(function () {
            s._stateFlags.mount ||
              (s._updateValid(), (s._stateFlags.mount = !0)),
              s._stateFlags.watch &&
                ((s._stateFlags.watch = !1), s._subjects.state.next({})),
              s._removeUnmounted();
          }),
          t.useEffect(
            function () {
              e.values &&
                !oa(e.values, s._defaultValues) &&
                s._reset(e.values, s._options.resetOptions);
            },
            [e.values, s]
          ),
          t.useEffect(
            function () {
              i.submitCount && s._focusError();
            },
            [s, i.submitCount]
          ),
          (n.current.formState = Er(i, s)),
          n.current
        );
      }
      var Ea =
          "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4MDcwRTFGQjZGQzExRTVCN0I0RDI5QTQwNzA1QjVBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4MDcwRTFFQjZGQzExRTVCN0I0RDI5QTQwNzA1QjVBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDVFRTVGRDhCNkZDMTFFNUI0QjlFQkMyQjFGQTJBQjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDVFRTVGRDlCNkZDMTFFNUI0QjlFQkMyQjFGQTJBQjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAGfAZ8DAREAAhEBAxEB/8QAhQABAAIDAQEBAAAAAAAAAAAAAAYHAwQFCAIBAQEAAAAAAAAAAAAAAAAAAAAAEAEAAQMCAgUIBQkHAgcAAAAAAQIDBBEFMQYhQVESB2FxgaEiMhMUkbFCYiPB0VJygpKishXhwkNTcyQXM5Njg8M0VCVVEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBl5mHh2vi5d+3j2/07tUURPm14gi24+KnKOHM02btzNrjqsUz3f3qtIBHczxpvzMxhbZTTHVXfuTM/u0xp6wci/wCLfNtyfY+WsR1dyzMz/FVINX/k/nT/AOZT/wBq3+YH7HihznExPzdE+SbVvT1QDbx/Fzmq3MfEoxr1PX3rdVM/TTV+QHYwvGmdYjO2vo66rFzWf3a4j6wSXbfE3lHNmKasqrEuT9nIpmmNezvRrAJNYv2Mi1F2xdovWp4XLdUVU/TGoMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOVv3M+y7FZ+JuGRFFcxrRYp9q9V5qI6QVrvvi5u2V3rW1WowbM9EXa9K70x/LT6wQjMzs7OvTezL9zIuzxru1TVPrBrAAAAAAAA3du3fc9tuxdwMm5jVx126piJ88cJBO9h8YMu1NNre8eL9vhOTYiKbkeWqj3Z9GgLI2ffdp3fH+Pt2TRfo+1THRXT5KqZ6YBvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Lt21ZtV3btdNu1biaq7lU6U0xHXMyCsubPFiqZrxNg6I6Yqz6o6f8AyqZ/mkFbZGRfyL1d/IuVXr1c613K5mqqZntmQYQAAAAAAAAAAAbODuGbt+TTk4V6vHv0e7ctzpP9oLS5S8VcfKqow987uPkTpTRmUxpaqn78fYny8PMCxImJiJiYmJjWJjpiYnsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp7pu2BtWDczc67FjHt8ap4zPVTTHXM9gKU5x553LmK9NqJnH2yifwsWJ97ThVd04z5OEAi4AAAAAAAAAAAAAAAJpyR4iZeyVUYWfNWRtMzpEca7OvXR20/d+gFy4eVjZeNbysa5Tex71MVW7lM6xMSDMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADV3PcsPbcG7nZlyLWPZjWuqfVER1zPUCiObebM7mPP+NembeJamYxcWJ9miO2e2qeuQcEAAAAAAAAAAAAAAAAAEr5H53yOXsv4V6aru03p/Gs669yf8yiO3tjrBd+PkWMqxbyMeuLti7TFdu5TOsVUzwmAZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAflVVNFM11zFNFMTNVU9EREdMzIKO8QOcrm/7h8DHqmNqxapixT/mVcJu1f3fICJAAAAAAAAAAAAAAAAAAAAnvhnzpO25VO0Z1z/6/Iq/Arqnos3Z/u1fWC4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAV14sc1zjY8bFiV6X8imK82qJ921PCj9vr8gKlAAAAAAAAAAAAAAAAAAAAABdnhnzXO77V8jlV97cMGIpmZ43LXCmrzxwkEzAAAAAAAAAAAAAAAAAAAAAAAAAABp7tumPtW25O4ZH/AEsaia5jrmeFNMeeegHnbcc/J3HPv52TV3r+RXNyuezXhEeSI6IBqgAAAAAAAAAAAAAAAAAAAAA6nLe9Xtk3nG3C1rpaq0vUR9q1V0V0/R6weh7F+1kWLd+zVFdm7TFduuOE01RrEgyAAAAAAAAAAAAAAAAAAAAAAAAAArPxi32aaMXZLVXTV/uMqI7OFumfXIKsAAAAAAAAAAAAAAAAAAAAAAABcnhJvs5mx3Ntu1a3tvq/D14zZuTrH7tWsAnYAAAAAAAAAAAAAAAAAAAAAAAAGsR0zOkR0zPkB535q3WrdeYs7OmdaLl6abXkt0ezTp6I1ByAAAAAAAAAAAAAAAAAAAAAAAASnw33b+nc24venSzl6413s9v3Z/e0BewAAAAAAAAAAAAAAAAAAAAAAAAOPzhuM7dyzuOXTOldFmqm3PZXX7FPrqB54iNI07AAAAAAAAAAAAAAAAAAAAAAAAAZLdy5auUXbc6XLdUV0T2VUzrE/SD0lt2ZRm7fjZtHu5Fqi7H7dMSDZAAAAAAAAAAAAAAAAAAAAAAABBvF3Lm1yxbsRPTk5FFMx92iJqn1xAKZAAAAAAAAAAAAAAAAAAAAAAAAABfPhtmTlcnbfMzrVZ79mr9iudP4ZgEmAAAAAAAAAAAAAAAAAAAAAAABWXjVen4W02Y66r1c/RREAq0AAAAAAAAAAAAAAAAAAAAAAAAAFyeD16a+W8i1M6/CyqpjzVUU/mBOwAAAAAAAAAAAAAAAAAAAAAAAVV40/wDu9r/07n80ArUAAAAAAAAAAAAAAAAAAAAAAAAAFt+DFcztO409VN+iY9NE/mBYgAAAAAAAAAAAAAAAAAAAAAAAKt8arc/G2m51TTdp+iaZ/KCsgAAAAAAAAAAAAAAAAAAAAAAAAAW/4N29Nhzq9PfyIjXt7tH9oLAAAAAAAAAAAAAAAAAAAAAAAABXnjNjzVtO35GnRav10TP+pRr/AOmCowAAAAAAAAAAAAAAAAAAAAAAAAAXb4T4/wALlGivT/r37tyJ8kaUf3ATIAAAAAAAAAAAAAAAAAAAAAAAEV8TML5rk/LmI1qx5ov0/sVaVT+7MgooAAAAAAAAAAAAAAAAAAAAAAAAAHoflDCnB5Y23GmNKqbFNVcdlVft1euoHYAAAAAAAAAAAAAAAAAAAAAAABgzcO3mYV/EuRrbyLdVqqPJXEwDzbkY93GyLuNdjS7Yrqt1+eidJ+oGEAAAAAAAAAAAAAAAAAAAAAAAHR5f22rc97wsCI1jIvU01x9yJ1r/AIYkHo6IimIpjhHRHmgAAAAAAAAAAAAAAAAAAAAAAAAAFKeKmzTt/M1WXRTpY3GmL0T1fEj2a4/KCFgAAAAAAAAAAAAAAAAAAAAAAAsXwd2abu45W7Xafw8Wj4Fmf/Eue99FMAtoAAAAAAAAAAAAAAAAAAAAAAAAAEW8RtgneOW7s2qe9l4MzfsRHGdI9umPPT64gFEgAAAAAAAAAAAAAAAAAAAAAA+6KK7ldNuimaq65imimOMzM6REA9C8pbFTsewY2DpHx4j4mVVHXer6avo4egHXAAAAAAAAAAAAAAAAAAAAAAAAAABRniLyxOyb9Xcs06YGbM3caeqmqZ9u36J4eQETAAAAAAAAAAAAAAAAAAAAABPfCrlidw3Wd3yKNcPBn8HXhXf6v3I6QXEAAAAAAAAAAAAAAAAAAAAAAAAAAADkc0cvYu/7PdwL2lNc+3j3f0Lke7Pm6pBQGdhZWDm3sPKom3kWKpouUT1TH5J6gawAAAAAAAAAAAAAAAAAAAOjsWy5u87pZ2/Ep1uXZ9qvqooj3q6vJAPQOz7VibVttjb8WnSzYp0ieuqftVVeWqQboAAAAAAAAAAAAAAAAAAAAAAAAAAAAIZ4icjxveJ89hUxG7Y9OkUx0fGoj7E/ej7P0ApaqmqmqaaommqmZiqmeiYmOMTAPgAAAAAAAAAAAAAAAAAGbGxsjKyLePj26rt+7VFNu3TGs1TPVAL05H5Pscu7fpXpc3HIiJyr0dMR2W6Z/Rp9YJKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACB+IHh5TusV7ptVEUblEa3rEdEX4jrj7/1gqC5buW7lVu5TNFyiZproqjSYmOMTEgxgAAAAAAAAAAAAAAAz4eJk5mTbxsW1VeyLs923bojWZmQXVyLyHY2CzGVk6X91u06V1x002onjRR+WQS4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEU5y8P8Df6asmzMYu6RHs39PZuadVyI/m4gprdtn3LaM2rE3CxVZvR7uvTTVHbTVwqgGgAAAAAAAAAAAAADq8v8t7rvuX8vgWu9ET+Lfq6LduO2qr8nEF0cp8l7Vy9Y1tR8fOrjS9l1x7U/doj7NIJEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADS3XZtt3bEnF3CxTfszw73vUz201R00z5gVbzJ4TbliTXf2Wqc7Hjp+Xq0i9THk6q/rBBL1m7Zu1Wr1FVq7T0VW64mmqPRIMQAAAAAAAAANjEw8vMv04+JZryL9XRTbt0zVV9EAsLlrwjv3JoyN/ufCo4/J2p1rn9euOiPNALNwdvwtvxqMXCs0Y+PR7tu3GkefyyDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzt45e2beLfc3HEovzwpuTGlynzVx0ggm7+DduZmvaM2aOyxkxrHorp6fpiQQ/cfD/m7AmZu7fXetx/iWNLtOnb7PTHpgHBu2b1mqabtuq3VHRMV0zT9YMWsTwAAAmYjjIM1jGyciuKLFmu7VVwiimatfoBItu8OObs6YmMKca3P+JkzFvT9mda/UCY7P4OYNuabm7ZdWRPXYsfh0eaap9qfUCc7Xs+1bVZ+Dt+LbxrfCe5Gkz+tVxkG6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmZnMuw4eVbxMncbNrJuVRTTamqNYmeHe0930g6YAAAAAAAMV/Hx8iNMizbvR2XKKa/wCaJBzL/J/Kt+db21Y1X7Hd/lmAav8Ax7yV/wDl2vpq/OBHh7yVExP9KtTp1TNUx9YNzH5T5XxZibG141Exw9iKv5tQdSzas2ae7Zt0Wqf0bdMUR9FMQD6AAAAAAB+V10UUVV11RTRTGtVUzpERHXMgwYedhZtmL2Fft5Fqft2qorj1A2AAAAAAAAAAAAAAAAAAAAAAAAAAR/mXnjY9hpmjIufGzNNacS1pNfk708KI84Kt5h8SeYt2mq1aufIYc9EWbEzFUx96570+gETnpmZnpmemZBNeT/ErcNnijD3DvZm2x0UzM63bUfdmfej7sgt3a9227dsWMrAv037M8Zp40z2VRxpnzg3AAAAAAAAAAAAAAAAAAc3fOYdp2PG+Y3C/FuJ1+HajpuVzHVTT1gp3m/xA3XmCqrHo1xNsifZxqZ6a/Ldq6/NwBHtv3PcNvvxfwci5jXo+3bqmNfPHCfSCw+XPF65TNGPv9nv08PnbMaVR5a7fX6AWTt+5YO4Y1OThX6MixVwronWPNPZPkkGyAAAAAAAAAAAAAAAAAAAAADFfv2MezXfv3KbVm3E1XLlc6U0xHXMyCrOb/FW/fmvC2CZs2PdrzpjS5V/pxPux5eIK7rrruVTXXVNVdU61VVTMzMz1zMg+AAAb217xuW05UZO35FePfjjNM+zVHZVTwqjzgs/lnxcwMruY++2/lL89HzVETNmqfvR71HrBPsfIx8i1Tex7lN+xX003LdUVUz5pgGQAAAAAAAAAAAAAGvnZ2FgWKsjMv0Y9injcuTFMf2grvmXxdt0xVj7Da79XCc29GlMfqUdfnkFa5udmZ+TXk5l6vIyK/euXJ1nzeSPJANYAAHR2Xf8Adtmyoyduv1Wq/t0caK4jqrp4SC4uUPEDbd/inHu6Ym56dOPM+zX2zbqnj5uIJYAAAAAAAAAAAAAAAAAAADT3Xd8DasK5m512LVi31zxqnqppjrmQUjzfzvuHMV+aJ1x9uonWziRPHsquae9V9QI0AAAAAADo7Tv28bRd+Jt2VXjzM61UROtFX61E60yCf7L4yzHdt7zh69uXjfXNur8kgm+1c38tbrEfJ59uq5P+DXPw7nm7tWmvoB2AAAAAAAAAJ6I1nhHGQcLdueOV9riYyM+iu7H+DY/Gr/h6I9Mggu9eMWbdiq1s2JTj0z0RkX/br9FEezHpBA9x3Xctyv8Ax8/JuZN3qmudYj9WOEegGmAAAAAD7pqqoqiuiqaa6Z1pqpnSYmOExMAtTkPxLjIm3tW/XIi/OlGLnVdEVzwim52VfeBZAAAAAAAAAAAAAAAAAANLd92wdpwLufnXPh49qOn9KqeqmmOuZBRXNfNefzFnzfv/AIeNbmYxsaJ9mintntqnrkHCAAAAAAAAAAB1tt5p5j26IjD3C9aop4W5q79EfsV96n1AkmD4vczWdIyLOPlUx20zbqn00zMeoHaxvGnHnT5raq4nr+Dcif5ogHRteMHLNUfiWcm1PZ3Iq+qQZ/8Alrk3/Myf+xP5wP8Alrk39PJ/7E/nBr3vGLlqiPwsfJuz2d2mj65Bzcrxqo0n5Tapmer492I/kiQcPN8Wuar8TFiLGJTPCaKO/VHprmY9QI3uHMO+bjrGdn3r9M8aKq5ij9yNKfUDmgAAAAAAAAAAs7w68QJiq3s28XtaZ0pwsuuemJ6rVdU/wyC0QAAAAAAAAAAAAAAAY8rJx8XHuZORci1YsUzXduVdERTHGQURzrzfkcx7h3o1t7fYmYxLE9n6dX3qvUCNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt3w154nOop2Xc7mubbjTEvVT03aI+xMz9uPXALCAAAAAAAAAAAAAABT/ifzlOflVbNhXP9jj1f7mumei7dp6v1aPrBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZLV27Zu0XrNc27tuqKrddM6TTVHTEwC9uRebbfMW1RVcmKdxxtKMu3HXPVcpjsq+sElAAAAAAAAAAAABDvEnmz+ibV8ri16bjnRNNuY427fCq55+qAUiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq8tb9lbFu1nPsazTTPdv2uqu3PvUz+Tyg9BYObjZ2DZzMWv4mPkURXbqjsnt8sdYNgAAAAAAAAAAGDNzcfCxL2Zk1dyxYom5cqnqiAeeuYt6yN73e/uF/om7Olqj9C3HuUx5oBzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWT4S80fBv1bBk1/hXpm5hTPVc410ftcYBawAAAAAAAAAAKy8XuY5pps7Bj1+9pfzdOz/Don6wVaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLYv3se/bv2apov2qort1xxiqmdYkHoXljfbW+bHjbjRpFdyO7foj7N2norj6ekHVAAAAAAAABrbln2NvwMjNvzpZx7dVyvy92OEeWeEA867puORuW45GfkTreya5rq8mvCmPJEdANMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+8JeYZw92ubTeq/wBvn9NrXhTeoj+9T0AuEAAAAAAAAFceMG+/BwsbZrVXt5M/GydP8uifYj01dPoBU4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM2Pfu49+3fs1TRdsVU126o4xVTOsT9IPRWxbra3XaMTcbemmRbiqqmPs18K6fRUDfAAAAAAA6I6Z4RxB555u3id45hzM2KtbU1/Dx/9K37NOnn4g4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALU8G9671nM2a5V025+ZxYnsq6K4j06SCywAAAAAAR/nzd52zlbNv01d2/dp+Xszwnv3ujo81OsgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHa5O3f8ApXM2DmzV3bUXIt3+z4dz2atfNrr6AehQAAAAAAVb4zbprc27aqZ6KYqyLseWfZoifomQVkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0Pyhun9T5Z2/Lme9cqtRRdnr79v2KtfPpqDsAAAAAAoLn/AHH+oc3bhcidbdquLFv9W1Gn16gjoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALc8G9w+JtGbgVT0416LtEfduxpPrpBYYAAAAMWTfox8e7frnSm1RVXVPZFMag81X79d+/cv1+/erquVeeuZqn6wYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATjwizfgcz148zpTl49VPnqomKqfygucAAAAHG5yuXrfK26VWaaqrvy9dMRREzPtR3Zno7I6QeeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASDkO7dtc37XXapqr/ABtKqaYmZ7tVM0zOkdUcQX+AAD//2Q==",
        _a = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        Ta = (0, t.createContext)({});
      var Na = (0, t.createContext)(null),
        ja = "undefined" !== typeof document,
        Ca = ja ? t.useLayoutEffect : t.useEffect,
        Pa = (0, t.createContext)({ strict: !1 });
      function Fa(e, n, r, a) {
        var i = (0, t.useContext)(Ta).visualElement,
          o = (0, t.useContext)(Pa),
          s = (0, t.useContext)(Na),
          u = (0, t.useContext)(_a).reducedMotion,
          l = (0, t.useRef)();
        (a = a || o.renderer),
          !l.current &&
            a &&
            (l.current = a(e, {
              visualState: n,
              parent: i,
              props: r,
              presenceId: s ? s.id : void 0,
              blockInitialAnimation: !!s && !1 === s.initial,
              reducedMotionConfig: u,
            }));
        var c = l.current;
        return (
          Ca(function () {
            c && c.render();
          }),
          (window.HandoffAppearAnimations ? Ca : t.useEffect)(function () {
            c && c.animationState && c.animationState.animateChanges();
          }),
          c
        );
      }
      function Oa(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function Ra(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function La(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var Da = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function Va(e) {
        return (
          La(e.animate) ||
          Da.some(function (t) {
            return Ra(e[t]);
          })
        );
      }
      function Ma(e) {
        return Boolean(Va(e) || e.variants);
      }
      function Ia(e) {
        var n = (function (e, t) {
            if (Va(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || Ra(n) ? n : void 0,
                animate: Ra(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)(Ta)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [za(r), za(a)]
        );
      }
      function za(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var Ua = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        Ba = {
          measureLayout: Ua(["layout", "layoutId", "drag"]),
          animation: Ua([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: Ua(["exit"]),
          drag: Ua(["drag", "dragControls"]),
          focus: Ua(["whileFocus"]),
          hover: Ua(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Ua(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Ua(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Ua(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function Ha(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var Wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        qa = 1;
      var Ya = (0, t.createContext)({}),
        Xa = (function (e) {
          g(n, e);
          var t = w(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.props;
                  return t && t.setProps(n), null;
                },
              },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(t.Component),
        Ga = (0, t.createContext)({}),
        Qa = Symbol.for("motionComponentSymbol");
      function Za(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.projectionNodeConstructor,
          i = e.useRender,
          o = e.useVisualState,
          s = e.Component;
        n &&
          (function (e) {
            for (var t in e)
              "projectionNodeConstructor" === t
                ? (Ba.projectionNodeConstructor = e[t])
                : (Ba[t].Component = e[t]);
          })(n);
        var u = (0, t.forwardRef)(function (e, u) {
          var l = Qe(
              Qe(Qe({}, (0, t.useContext)(_a)), e),
              {},
              { layoutId: Ka(e) }
            ),
            c = l.isStatic,
            f = null,
            d = Ia(e),
            p = c
              ? void 0
              : Ha(function () {
                  if (Wa.hasEverUpdated) return qa++;
                }),
            h = o(e, c);
          if (!c && ja) {
            d.visualElement = Fa(s, h, l, r);
            var v = (0, t.useContext)(Ga);
            d.visualElement &&
              (f = d.visualElement.loadFeatures(
                l,
                (0, t.useContext)(Pa).strict,
                n,
                p,
                a || Ba.projectionNodeConstructor,
                v
              ));
          }
          return t.createElement(
            Xa,
            { visualElement: d.visualElement, props: l },
            f,
            t.createElement(
              Ta.Provider,
              { value: d },
              i(
                s,
                e,
                p,
                (function (e, n, r) {
                  return (0, t.useCallback)(
                    function (t) {
                      t && e.mount && e.mount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        r &&
                          ("function" === typeof r
                            ? r(t)
                            : Oa(r) && (r.current = t));
                    },
                    [n]
                  );
                })(h, d.visualElement, u),
                h,
                c,
                d.visualElement
              )
            )
          );
        });
        return (u[Qa] = s), u;
      }
      function Ka(e) {
        var n = e.layoutId,
          r = (0, t.useContext)(Ya).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function $a(e) {
        function t(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Za(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Ja = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ei(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(Ja.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var ti = {};
      var ni = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        ri = new Set(ni);
      function ai(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          ri.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!ti[e] || "opacity" === e))
        );
      }
      var ii = function (e) {
          return !!(null === e || void 0 === e ? void 0 : e.getVelocity);
        },
        oi = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        si = function (e, t) {
          return ni.indexOf(e) - ni.indexOf(t);
        };
      function ui(e) {
        return e.startsWith("--");
      }
      var li = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        ci = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        fi = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        di = Qe(
          Qe({}, fi),
          {},
          {
            transform: function (e) {
              return ci(0, 1, e);
            },
          }
        ),
        pi = Qe(Qe({}, fi), {}, { default: 1 }),
        hi = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        vi = /(-)?([\d]*\.?[\d])+/g,
        mi =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Ai =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function gi(e) {
        return "string" === typeof e;
      }
      var yi = function (e) {
          return {
            test: function (t) {
              return gi(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        bi = yi("deg"),
        xi = yi("%"),
        wi = yi("px"),
        ki = yi("vh"),
        Si = yi("vw"),
        Ei = Qe(
          Qe({}, xi),
          {},
          {
            parse: function (e) {
              return xi.parse(e) / 100;
            },
            transform: function (e) {
              return xi.transform(100 * e);
            },
          }
        ),
        _i = Qe(Qe({}, fi), {}, { transform: Math.round }),
        Ti = {
          borderWidth: wi,
          borderTopWidth: wi,
          borderRightWidth: wi,
          borderBottomWidth: wi,
          borderLeftWidth: wi,
          borderRadius: wi,
          radius: wi,
          borderTopLeftRadius: wi,
          borderTopRightRadius: wi,
          borderBottomRightRadius: wi,
          borderBottomLeftRadius: wi,
          width: wi,
          maxWidth: wi,
          height: wi,
          maxHeight: wi,
          size: wi,
          top: wi,
          right: wi,
          bottom: wi,
          left: wi,
          padding: wi,
          paddingTop: wi,
          paddingRight: wi,
          paddingBottom: wi,
          paddingLeft: wi,
          margin: wi,
          marginTop: wi,
          marginRight: wi,
          marginBottom: wi,
          marginLeft: wi,
          rotate: bi,
          rotateX: bi,
          rotateY: bi,
          rotateZ: bi,
          scale: pi,
          scaleX: pi,
          scaleY: pi,
          scaleZ: pi,
          skew: bi,
          skewX: bi,
          skewY: bi,
          distance: wi,
          translateX: wi,
          translateY: wi,
          translateZ: wi,
          x: wi,
          y: wi,
          z: wi,
          perspective: wi,
          transformPerspective: wi,
          opacity: di,
          originX: Ei,
          originY: Ei,
          originZ: wi,
          zIndex: _i,
          fillOpacity: di,
          strokeOpacity: di,
          numOctaves: _i,
        };
      function Ni(e, t, n, r) {
        var a = e.style,
          i = e.vars,
          o = e.transform,
          s = e.transformKeys,
          u = e.transformOrigin;
        s.length = 0;
        var l = !1,
          c = !1,
          f = !0;
        for (var d in t) {
          var p = t[d];
          if (ui(d)) i[d] = p;
          else {
            var h = Ti[d],
              v = li(p, h);
            if (ri.has(d)) {
              if (((l = !0), (o[d] = v), s.push(d), !f)) continue;
              p !== (h.default || 0) && (f = !1);
            } else d.startsWith("origin") ? ((c = !0), (u[d] = v)) : (a[d] = v);
          }
        }
        if (
          (t.transform ||
            (l || r
              ? (a.transform = (function (e, t, n, r) {
                  var a = e.transform,
                    i = e.transformKeys,
                    o = t.enableHardwareAcceleration,
                    s = void 0 === o || o,
                    u = t.allowTransformNone,
                    l = void 0 === u || u,
                    c = "";
                  i.sort(si);
                  var f,
                    d = E(i);
                  try {
                    for (d.s(); !(f = d.n()).done; ) {
                      var p = f.value;
                      c += "".concat(oi[p] || p, "(").concat(a[p], ") ");
                    }
                  } catch (h) {
                    d.e(h);
                  } finally {
                    d.f();
                  }
                  return (
                    s && !a.z && (c += "translateZ(0)"),
                    (c = c.trim()),
                    r ? (c = r(a, n ? "" : c)) : l && n && (c = "none"),
                    c
                  );
                })(e, n, f, r))
              : a.transform && (a.transform = "none")),
          c)
        ) {
          var m = u.originX,
            A = void 0 === m ? "50%" : m,
            g = u.originY,
            y = void 0 === g ? "50%" : g,
            b = u.originZ,
            x = void 0 === b ? 0 : b;
          a.transformOrigin = "".concat(A, " ").concat(y, " ").concat(x);
        }
      }
      var ji = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Ci(e, t, n) {
        for (var r in t) ii(t[r]) || ai(r, n) || (e[r] = t[r]);
      }
      function Pi(e, n, r) {
        var a = {};
        return (
          Ci(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  return (
                    Ni(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues ? e.transformValues(a) : a
        );
      }
      function Fi(e, t, n) {
        var r = {},
          a = Pi(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = a),
          r
        );
      }
      var Oi = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function Ri(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          Oi.has(e)
        );
      }
      var Li,
        Di = function (e) {
          return !Ri(e);
        };
      try {
        (Li = require("@emotion/is-prop-valid").default) &&
          (Di = function (e) {
            return e.startsWith("on") ? !Ri(e) : Li(e);
          });
      } catch (fh) {}
      function Vi(e, t, n) {
        var r = {};
        for (var a in e)
          ("values" === a && "object" === typeof e.values) ||
            ((Di(a) ||
              (!0 === n && Ri(a)) ||
              (!t && !Ri(a)) ||
              (e.draggable && a.startsWith("onDrag"))) &&
              (r[a] = e[a]));
        return r;
      }
      function Mi(e, t, n) {
        return "string" === typeof e ? e : wi.transform(t + n * e);
      }
      var Ii = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        zi = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Ui = [
        "attrX",
        "attrY",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Bi(e, t, n, r, a) {
        var i = t.attrX,
          o = t.attrY,
          s = t.originX,
          u = t.originY,
          l = t.pathLength,
          c = t.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = t.pathOffset,
          p = void 0 === d ? 0 : d;
        if ((Ni(e, Kn(t, Ui), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var h = e.attrs,
            v = e.style,
            m = e.dimensions;
          h.transform && (m && (v.transform = h.transform), delete h.transform),
            m &&
              (void 0 !== s || void 0 !== u || v.transform) &&
              (v.transformOrigin = (function (e, t, n) {
                var r = Mi(t, e.x, e.width),
                  a = Mi(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
            void 0 !== i && (h.x = i),
            void 0 !== o && (h.y = o),
            void 0 !== l &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var i = a ? Ii : zi;
                e[i.offset] = wi.transform(-r);
                var o = wi.transform(t),
                  s = wi.transform(n);
                e[i.array] = "".concat(o, " ").concat(s);
              })(h, l, f, p, !1);
        }
      }
      var Hi = function () {
          return Qe(
            Qe(
              {},
              {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
              }
            ),
            {},
            { attrs: {} }
          );
        },
        Wi = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function qi(e, n, r, a) {
        var i = (0, t.useMemo)(
          function () {
            var t = Hi();
            return (
              Bi(
                t,
                n,
                { enableHardwareAcceleration: !1 },
                Wi(a),
                e.transformTemplate
              ),
              Qe(Qe({}, t.attrs), {}, { style: Qe({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var o = {};
          Ci(o, e.style, e), (i.style = Qe(Qe({}, o), i.style));
        }
        return i;
      }
      function Yi() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = function (n, r, a, i, o, s) {
            var u = o.latestValues,
              l = (ei(n) ? qi : Fi)(r, u, s, n),
              c = Qe(
                Qe(Qe({}, Vi(r, "string" === typeof n, e)), l),
                {},
                { ref: i }
              ),
              f = r.children,
              d = (0, t.useMemo)(
                function () {
                  return ii(f) ? f.get() : f;
                },
                [f]
              );
            return (
              a && (c["data-projection-id"] = a),
              (0, t.createElement)(n, Qe(Qe({}, c), {}, { children: d }))
            );
          };
        return n;
      }
      var Xi = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function Gi(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        i))
          e.style.setProperty(o, i[o]);
      }
      var Qi = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function Zi(e, t, n, r) {
        for (var a in (Gi(e, t, void 0, r), t.attrs))
          e.setAttribute(Qi.has(a) ? a : Xi(a), t.attrs[a]);
      }
      function Ki(e, t) {
        var n = e.style,
          r = {};
        for (var a in n)
          (ii(n[a]) || (t.style && ii(t.style[a])) || ai(a, e)) &&
            (r[a] = n[a]);
        return r;
      }
      function $i(e, t) {
        var n = Ki(e, t);
        for (var r in e) {
          if (ii(e[r]) || ii(t[r]))
            n["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = e[r];
        }
        return n;
      }
      function Ji(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var eo = function (e) {
        return Array.isArray(e);
      };
      function to(e) {
        var t,
          n = ii(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var no = ["transitionEnd", "transition"];
      var ro = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)(Ta),
            i = (0, t.useContext)(Na),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  i = e.createRenderState,
                  o = e.onMount,
                  s = { latestValues: ao(t, n, r, a), renderState: i() };
                return (
                  o &&
                    (s.mount = function (e) {
                      return o(t, e, s);
                    }),
                  s
                );
              })(e, n, a, i);
            };
          return r ? o() : Ha(o);
        };
      };
      function ao(e, t, n, r) {
        var a = {},
          i = r(e, {});
        for (var o in i) a[o] = to(i[o]);
        var s = e.initial,
          u = e.animate,
          l = Va(e),
          c = Ma(e);
        t &&
          c &&
          !l &&
          !1 !== e.inherit &&
          (void 0 === s && (s = t.initial), void 0 === u && (u = t.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === s) ? u : s;
        d &&
          "boolean" !== typeof d &&
          !La(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (t) {
            var n = Ji(e, t);
            if (n) {
              var r = n.transitionEnd,
                i = (n.transition, Kn(n, no));
              for (var o in i) {
                var s = i[o];
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                null !== s && (a[o] = s);
              }
              for (var u in r) a[u] = r[u];
            }
          });
        return a;
      }
      var io,
        oo = {
          useVisualState: ro({
            scrapeMotionValuesFromProps: $i,
            createRenderState: Hi,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Bi(
                r,
                a,
                { enableHardwareAcceleration: !1 },
                Wi(t.tagName),
                e.transformTemplate
              ),
                Zi(t, r);
            },
          }),
        },
        so = {
          useVisualState: ro({
            scrapeMotionValuesFromProps: Ki,
            createRenderState: ji,
          }),
        };
      function uo(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      function lo(e, n, r, a) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return uo(t, n, r, a);
          },
          [e, n, r, a]
        );
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(io || (io = {}));
      var co = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function fo(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var po = function (e) {
        return function (t) {
          return co(t) && e(t, fo(t));
        };
      };
      function ho(e, t, n, r) {
        return uo(e, t, po(n), r);
      }
      function vo(e, t, n, r) {
        return lo(e, t, n && po(n), r);
      }
      function mo(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var Ao = mo("dragHorizontal"),
        go = mo("dragVertical");
      function yo(e) {
        var t = !1;
        if ("y" === e) t = go();
        else if ("x" === e) t = Ao();
        else {
          var n = Ao(),
            r = go();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function bo() {
        var e = yo(!0);
        return !e || (e(), !1);
      }
      function xo(e, t, n, r) {
        return function (a, i) {
          "touch" === a.type ||
            bo() ||
            (n && e.animationState && e.animationState.setActive(io.Hover, t),
            r && r(a, i));
        };
      }
      var wo = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      function ko(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var So = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Eo = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(So);
        },
        _o = [
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileTap",
          "visualElement",
        ];
      function To(e, t) {
        if (t) {
          var n = new PointerEvent("pointer" + e);
          t(n, fo(n));
        }
      }
      var No = ["root"],
        jo = new WeakMap(),
        Co = new WeakMap(),
        Po = function (e) {
          var t = jo.get(e.target);
          t && t(e);
        },
        Fo = function (e) {
          e.forEach(Po);
        };
      function Oo(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = Kn(e, No),
            r = t || document;
          Co.has(r) || Co.set(r, {});
          var a = Co.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(Fo, Qe({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          jo.set(e, n),
          r.observe(e),
          function () {
            jo.delete(e), r.unobserve(e);
          }
        );
      }
      var Ro = { some: 0, all: 1 };
      function Lo(e, n, r, a) {
        var i = a.root,
          o = a.margin,
          s = a.amount,
          u = void 0 === s ? "some" : s,
          l = a.once;
        (0, t.useEffect)(
          function () {
            if (e && r.current) {
              var t = {
                root: null === i || void 0 === i ? void 0 : i.current,
                rootMargin: o,
                threshold: "number" === typeof u ? u : Ro[u],
              };
              return Oo(r.current, t, function (e) {
                var t = e.isIntersecting;
                if (
                  n.isInView !== t &&
                  ((n.isInView = t), !l || t || !n.hasEnteredView)
                ) {
                  t && (n.hasEnteredView = !0),
                    r.animationState &&
                      r.animationState.setActive(io.InView, t);
                  var a = r.getProps(),
                    i = t ? a.onViewportEnter : a.onViewportLeave;
                  i && i(e);
                }
              });
            }
          },
          [e, i, o, u]
        );
      }
      function Do(e, n, r, a) {
        var i = a.fallback,
          o = void 0 === i || i;
        (0, t.useEffect)(
          function () {
            e &&
              o &&
              requestAnimationFrame(function () {
                n.hasEnteredView = !0;
                var e = r.getProps().onViewportEnter;
                e && e(null),
                  r.animationState && r.animationState.setActive(io.InView, !0);
              });
          },
          [e]
        );
      }
      var Vo = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        Mo = {
          inView: Vo(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              a = e.onViewportEnter,
              i = e.onViewportLeave,
              o = e.viewport,
              s = void 0 === o ? {} : o,
              u = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(r || a || i);
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? Do : Lo)(
                l,
                u.current,
                n,
                s
              );
          }),
          tap: Vo(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              a = e.onTapCancel,
              i = e.whileTap,
              o = e.visualElement,
              s = Kn(e, _o),
              u = n || r || a || i,
              l = (0, t.useRef)(!1),
              c = (0, t.useRef)(null),
              f = { passive: !(r || n || a || s.onPointerDown) };
            function d() {
              c.current && c.current(), (c.current = null);
            }
            function p() {
              return (
                d(),
                (l.current = !1),
                o.getProps().whileTap &&
                  o.animationState &&
                  o.animationState.setActive(io.Tap, !1),
                !bo()
              );
            }
            function h(e, t) {
              var n, r, a, i;
              p() &&
                (wo(o.current, e.target)
                  ? null === (i = (a = o.getProps()).onTap) ||
                    void 0 === i ||
                    i.call(a, e, t)
                  : null === (r = (n = o.getProps()).onTapCancel) ||
                    void 0 === r ||
                    r.call(n, e, t));
            }
            function v(e, t) {
              var n, r;
              p() &&
                (null === (r = (n = o.getProps()).onTapCancel) ||
                  void 0 === r ||
                  r.call(n, e, t));
            }
            function m(e, t) {
              var n,
                r = o.getProps();
              r.whileTap &&
                o.animationState &&
                o.animationState.setActive(io.Tap, !0),
                null === (n = r.onTapStart) || void 0 === n || n.call(r, e, t);
            }
            var A = [Boolean(r), Boolean(n), Boolean(i), o],
              g = (0, t.useCallback)(function (e, t) {
                d(),
                  l.current ||
                    ((l.current = !0),
                    (c.current = Eo(
                      ho(window, "pointerup", h, f),
                      ho(window, "pointercancel", v, f)
                    )),
                    m(e, t));
              }, A);
            vo(o, "pointerdown", u ? g : void 0, f);
            var y = (0, t.useCallback)(function () {
              var e = uo(o.current, "keydown", function (e) {
                  "Enter" !== e.key ||
                    l.current ||
                    ((l.current = !0),
                    (c.current = uo(
                      o.current,
                      "keyup",
                      function () {
                        "Enter" === e.key &&
                          p() &&
                          To("up", o.getProps().onTap);
                      },
                      f
                    )),
                    To("down", m));
                }),
                t = uo(o.current, "blur", function () {
                  e(), t(), l.current && To("cancel", v);
                });
            }, A);
            lo(o, "focus", u ? y : void 0), ko(d);
          }),
          focus: Vo(function (e) {
            var n = e.whileFocus,
              r = e.visualElement,
              a = (0, t.useRef)(!1),
              i = r.animationState,
              o = (0, t.useCallback)(
                function () {
                  var e = !1;
                  try {
                    e = r.current.matches(":focus-visible");
                  } catch (t) {
                    e = !0;
                  }
                  e && i && (i.setActive(io.Focus, !0), (a.current = !0));
                },
                [i]
              ),
              s = (0, t.useCallback)(
                function () {
                  a.current &&
                    i &&
                    (i.setActive(io.Focus, !1), (a.current = !1));
                },
                [i]
              );
            lo(r, "focus", n ? o : void 0), lo(r, "blur", n ? s : void 0);
          }),
          hover: Vo(function (e) {
            var n = e.onHoverStart,
              r = e.onHoverEnd,
              a = e.whileHover,
              i = e.visualElement;
            vo(
              i,
              "pointerenter",
              (0, t.useMemo)(
                function () {
                  return n || a ? xo(i, !0, Boolean(a), n) : void 0;
                },
                [n, Boolean(a), i]
              ),
              { passive: !n }
            ),
              vo(
                i,
                "pointerleave",
                (0, t.useMemo)(
                  function () {
                    return r || a ? xo(i, !1, Boolean(a), r) : void 0;
                  },
                  [n, Boolean(a), i]
                ),
                { passive: !r }
              );
          }),
        };
      function Io() {
        var e = (0, t.useContext)(Na);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          a = e.register,
          i = (0, t.useId)();
        (0, t.useEffect)(function () {
          return a(i);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return r && r(i);
              },
            ]
          : [!0];
      }
      function zo(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var Uo = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        Bo = { delta: 0, timestamp: 0 },
        Ho = (1 / 60) * 1e3,
        Wo =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        qo =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(Wo());
                }, Ho);
              };
      var Yo = !0,
        Xo = !1,
        Go = !1,
        Qo = ["read", "update", "preRender", "render", "postRender"],
        Zo = Qo.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                s = {
                  schedule: function (e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      s = i ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === s.indexOf(e) &&
                        (s.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (u) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var l = [n, t];
                      if (((t = l[0]), ((n = l[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(u), o.has(f) && (s.schedule(f), e());
                        }
                      (a = !1), i && ((i = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(function () {
              return (Xo = !0);
            })),
            e
          );
        }, {}),
        Ko = Qo.reduce(function (e, t) {
          var n = Zo[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return Xo || ns(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        $o = Qo.reduce(function (e, t) {
          return (e[t] = Zo[t].cancel), e;
        }, {}),
        Jo = Qo.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return Zo[t].process(Bo);
            }),
            e
          );
        }, {}),
        es = function (e) {
          return Zo[e].process(Bo);
        },
        ts = function e(t) {
          (Xo = !1),
            (Bo.delta = Yo ? Ho : Math.max(Math.min(t - Bo.timestamp, 40), 1)),
            (Bo.timestamp = t),
            (Go = !0),
            Qo.forEach(es),
            (Go = !1),
            Xo && ((Yo = !1), qo(e));
        },
        ns = function () {
          (Xo = !0), (Yo = !0), Go || qo(ts);
        };
      function rs(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function as(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var is = (function () {
        function e() {
          d(this, e), (this.subscriptions = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                var t = this;
                return (
                  rs(this.subscriptions, e),
                  function () {
                    return as(t.subscriptions, e);
                  }
                );
              },
            },
            {
              key: "notify",
              value: function (e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](e, t, n);
                  else
                    for (var a = 0; a < r; a++) {
                      var i = this.subscriptions[a];
                      i && i(e, t, n);
                    }
              },
            },
            {
              key: "getSize",
              value: function () {
                return this.subscriptions.length;
              },
            },
            {
              key: "clear",
              value: function () {
                this.subscriptions.length = 0;
              },
            },
          ]),
          e
        );
      })();
      function os(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var ss = function (e) {
          return !isNaN(parseFloat(e));
        },
        us = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.version = "9.0.2"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (n.prev = n.current), (n.current = e);
                var r = Bo.delta,
                  a = Bo.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = r),
                  (n.lastUpdated = a),
                  Ko.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current &&
                    n.events.change &&
                    n.events.change.notify(n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()),
                  t &&
                    n.events.renderRequest &&
                    n.events.renderRequest.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Ko.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = ss(this.current)),
              (this.owner = r.owner);
          }
          return (
            m(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new is());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          Ko.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? os(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n) || null),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.animation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function ls(e, t) {
        return new us(e, t);
      }
      var cs = function (e, t) {
          return function (n) {
            return Boolean(
              (gi(n) && Ai.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        fs = function (e, t, n) {
          return function (r) {
            var a;
            if (!gi(r)) return r;
            var i = l(r.match(vi), 4),
              o = i[0],
              s = i[1],
              u = i[2],
              c = i[3];
            return (
              Xe((a = {}), e, parseFloat(o)),
              Xe(a, t, parseFloat(s)),
              Xe(a, n, parseFloat(u)),
              Xe(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        ds = Qe(
          Qe({}, fi),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return ci(0, 255, e);
                })(e)
              );
            },
          }
        ),
        ps = {
          test: cs("rgb", "red"),
          parse: fs("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              ds.transform(t) +
              ", " +
              ds.transform(n) +
              ", " +
              ds.transform(r) +
              ", " +
              hi(di.transform(i)) +
              ")"
            );
          },
        };
      var hs = {
          test: cs("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: ps.transform,
        },
        vs = {
          test: cs("hsl", "hue"),
          parse: fs("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              xi.transform(hi(n)) +
              ", " +
              xi.transform(hi(r)) +
              ", " +
              hi(di.transform(i)) +
              ")"
            );
          },
        },
        ms = {
          test: function (e) {
            return ps.test(e) || hs.test(e) || vs.test(e);
          },
          parse: function (e) {
            return ps.test(e)
              ? ps.parse(e)
              : vs.test(e)
              ? vs.parse(e)
              : hs.parse(e);
          },
          transform: function (e) {
            return gi(e)
              ? e
              : e.hasOwnProperty("red")
              ? ps.transform(e)
              : vs.transform(e);
          },
        },
        As = "${c}",
        gs = "${n}";
      function ys(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = 0,
          a = e.match(mi);
        a &&
          ((n = a.length),
          (e = e.replace(mi, As)),
          t.push.apply(t, f(a.map(ms.parse))));
        var i = e.match(vi);
        return (
          i &&
            ((r = i.length),
            (e = e.replace(vi, gs)),
            t.push.apply(t, f(i.map(fi.parse)))),
          { values: t, numColors: n, numNumbers: r, tokenised: e }
        );
      }
      function bs(e) {
        return ys(e).values;
      }
      function xs(e) {
        var t = ys(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = a, n = 0; n < i; n++)
            t = t.replace(
              n < r ? As : gs,
              n < r ? ms.transform(e[n]) : hi(e[n])
            );
          return t;
        };
      }
      var ws = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var ks = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              gi(e) &&
              ((null === (t = e.match(vi)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(mi)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: bs,
          createTransformer: xs,
          getAnimatableNone: function (e) {
            var t = bs(e);
            return xs(e)(t.map(ws));
          },
        },
        Ss = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Es(e) {
        var t = l(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = l(r.match(vi) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          o = Ss.has(n) ? 1 : 0;
        return a !== r && (o *= 100), n + "(" + o + i + ")";
      }
      var _s = /([a-z-]*)\(.*?\)/g,
        Ts = Qe(
          Qe({}, ks),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(_s);
              return t ? t.map(Es).join(" ") : e;
            },
          }
        ),
        Ns = Qe(
          Qe({}, Ti),
          {},
          {
            color: ms,
            backgroundColor: ms,
            outlineColor: ms,
            fill: ms,
            stroke: ms,
            borderColor: ms,
            borderTopColor: ms,
            borderRightColor: ms,
            borderBottomColor: ms,
            borderLeftColor: ms,
            filter: Ts,
            WebkitFilter: Ts,
          }
        ),
        js = function (e) {
          return Ns[e];
        };
      function Cs(e, t) {
        var n,
          r = js(e);
        return (
          r !== Ts && (r = ks),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var Ps = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        Fs = [
          fi,
          wi,
          xi,
          bi,
          Si,
          ki,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        Os = function (e) {
          return Fs.find(Ps(e));
        },
        Rs = [].concat(f(Fs), [ms, ks]),
        Ls = function (e) {
          return Rs.find(Ps(e));
        };
      function Ds(e, t, n) {
        var r = e.getProps();
        return Ji(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var Vs = ["transitionEnd", "transition"];
      function Ms(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ls(n));
      }
      function Is(e, t) {
        var n,
          r = Ds(e, t),
          a = r ? e.makeTargetAnimatable(r, !1) : {},
          i = a.transitionEnd,
          o = void 0 === i ? {} : i,
          s = (a.transition, Kn(a, Vs));
        for (var u in (s = Qe(Qe({}, s), o))) {
          Ms(e, u, ((n = s[u]), eo(n) ? n[n.length - 1] || 0 : n));
        }
      }
      function zs(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Us(e) {
        return Boolean(ii(e) && e.add);
      }
      var Bs = "data-" + Xi("framerAppearId");
      var Hs = function (e) {
          return 1e3 * e;
        },
        Ws = !1,
        qs = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Ys = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Xs = function (e) {
          return e * e;
        },
        Gs = Ys(Xs),
        Qs = qs(Xs),
        Zs = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Ks(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var $s = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Js = [hs, ps, vs];
      function eu(e) {
        var t,
          n =
            ((t = e),
            Js.find(function (e) {
              return e.test(t);
            }));
        Boolean(n),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        var r = n.parse(e);
        return (
          n === vs &&
            (r = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var i = 0,
                o = 0,
                s = 0;
              if ((n /= 100)) {
                var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  l = 2 * r - u;
                (i = Ks(l, u, t + 1 / 3)),
                  (o = Ks(l, u, t)),
                  (s = Ks(l, u, t - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      var tu = function (e, t) {
        var n = eu(e),
          r = eu(t),
          a = Qe({}, n);
        return function (e) {
          return (
            (a.red = $s(n.red, r.red, e)),
            (a.green = $s(n.green, r.green, e)),
            (a.blue = $s(n.blue, r.blue, e)),
            (a.alpha = Zs(n.alpha, r.alpha, e)),
            ps.transform(a)
          );
        };
      };
      function nu(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Zs(e, t, n);
            }
          : ms.test(e)
          ? tu(e, t)
          : iu(e, t);
      }
      var ru = function (e, t) {
          var n = f(e),
            r = n.length,
            a = e.map(function (e, n) {
              return nu(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        au = function (e, t) {
          var n = Qe(Qe({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = nu(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        iu = function (e, t) {
          var n = ks.createTransformer(t),
            r = ys(e),
            a = ys(t);
          return r.numColors === a.numColors && r.numNumbers >= a.numNumbers
            ? Eo(ru(r.values, a.values), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        ou = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        su = function (e, t) {
          return function (n) {
            return Zs(e, t, n);
          };
        };
      function uu(e, t, n) {
        for (
          var r,
            a = [],
            i =
              n ||
              ("number" === typeof (r = e[0])
                ? su
                : "string" === typeof r
                ? ms.test(r)
                  ? tu
                  : iu
                : Array.isArray(r)
                ? ru
                : "object" === typeof r
                ? au
                : su),
            o = e.length - 1,
            s = 0;
          s < o;
          s++
        ) {
          var u = i(e[s], e[s + 1]);
          if (t) {
            var l = Array.isArray(t) ? t[s] : t;
            u = Eo(l, u);
          }
          a.push(u);
        }
        return a;
      }
      function lu(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          s = e.length;
        t.length,
          !i || !Array.isArray(i) || i.length,
          e[0] > e[s - 1] && ((e = f(e).reverse()), (t = f(t).reverse()));
        var u = uu(t, i, o),
          l = u.length,
          c = function (t) {
            var n = 0;
            if (l > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = ou(e[n], e[n + 1], t);
            return u[n](r);
          };
        return a
          ? function (t) {
              return c(ci(e[0], e[s - 1], t));
            }
          : c;
      }
      var cu = function (e) {
          return e;
        },
        fu = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        };
      function du(e, t, n, r) {
        if (e === t && n === r) return cu;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var i,
              o,
              s = 0;
            do {
              (i = fu((o = t + (n - t) / 2), r, a) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(i) > 1e-7 && ++s < 12);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : fu(a(e), t, r);
        };
      }
      var pu = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        hu = Ys(pu),
        vu = qs(hu),
        mu = du(0.33, 1.53, 0.69, 0.99),
        Au = Ys(mu),
        gu = qs(Au),
        yu = {
          linear: cu,
          easeIn: Xs,
          easeInOut: Qs,
          easeOut: Gs,
          circIn: pu,
          circInOut: vu,
          circOut: hu,
          backIn: Au,
          backInOut: gu,
          backOut: mu,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * Au(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        bu = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = l(e, 4);
            return du(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), yu[e])
            : e;
        };
      function xu(e) {
        var t = e.keyframes,
          n = e.ease,
          r = void 0 === n ? Qs : n,
          a = e.times,
          i = e.duration,
          o = void 0 === i ? 300 : i;
        t = f(t);
        var s = (function (e) {
            return Array.isArray(e) && "number" !== typeof e[0];
          })(r)
            ? r.map(bu)
            : bu(r),
          u = { done: !1, value: t[0] },
          l = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            a && a.length === t.length
              ? a
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(t),
            o
          );
        function c() {
          return lu(l, t, {
            ease: Array.isArray(s)
              ? s
              : ((e = t),
                (n = s),
                e
                  .map(function () {
                    return n || Qs;
                  })
                  .splice(0, e.length - 1)),
          });
          var e, n;
        }
        var d = c();
        return {
          next: function (e) {
            return (u.value = d(e)), (u.done = e >= o), u;
          },
          flipTarget: function () {
            t.reverse(), (d = c());
          },
        };
      }
      var wu = 0.001;
      function ku(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          s = e.velocity,
          u = void 0 === s ? 0 : s,
          l = e.mass,
          c = void 0 === l ? 1 : l,
          f = 1 - o;
        (f = ci(0.05, 1, f)),
          (a = ci(0.01, 10, a / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - u,
                  i = Su(e, f),
                  o = Math.exp(-n);
                return wu - (r / i) * o;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * u + u,
                  i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  s = Su(Math.pow(e, 2), f);
                return ((-t(e) + wu > 0 ? -1 : 1) * ((r - i) * o)) / s;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - u) * a + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (u - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      function Su(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Eu = ["keyframes", "restDelta", "restSpeed"],
        _u = ["duration", "bounce"],
        Tu = ["stiffness", "damping", "mass"];
      function Nu(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function ju(e) {
        var t = e.keyframes,
          n = e.restDelta,
          r = e.restSpeed,
          a = Kn(e, Eu),
          i = t[0],
          o = t[t.length - 1],
          s = { done: !1, value: i },
          u = (function (e) {
            var t = Qe(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!Nu(e, Tu) && Nu(e, _u)) {
              var n = ku(e);
              (t = Qe(
                Qe(Qe({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(a),
          l = u.stiffness,
          c = u.damping,
          f = u.mass,
          d = u.velocity,
          p = u.duration,
          h = u.isResolvedFromDuration,
          v = Cu,
          m = d ? -d / 1e3 : 0,
          A = c / (2 * Math.sqrt(l * f));
        function g() {
          var e = o - i,
            t = Math.sqrt(l / f) / 1e3,
            a = Math.abs(e) < 5;
          if ((r || (r = a ? 0.01 : 2), n || (n = a ? 0.005 : 0.5), A < 1)) {
            var s = Su(t, A);
            v = function (n) {
              var r = Math.exp(-A * t * n);
              return (
                o -
                r *
                  (((m + A * t * e) / s) * Math.sin(s * n) +
                    e * Math.cos(s * n))
              );
            };
          } else if (1 === A)
            v = function (n) {
              return o - Math.exp(-t * n) * (e + (m + t * e) * n);
            };
          else {
            var u = t * Math.sqrt(A * A - 1);
            v = function (n) {
              var r = Math.exp(-A * t * n),
                a = Math.min(u * n, 300);
              return (
                o -
                (r * ((m + A * t * e) * Math.sinh(a) + u * e * Math.cosh(a))) /
                  u
              );
            };
          }
        }
        return (
          g(),
          {
            next: function (e) {
              var t = v(e);
              if (h) s.done = e >= p;
              else {
                var a = m;
                if (0 !== e)
                  if (A < 1) {
                    var i = Math.max(0, e - 5);
                    a = os(t - v(i), e - i);
                  } else a = 0;
                var u = Math.abs(a) <= r,
                  l = Math.abs(o - t) <= n;
                s.done = u && l;
              }
              return (s.value = s.done ? o : t), s;
            },
            flipTarget: function () {
              m = -m;
              var e = [o, i];
              (i = e[0]), (o = e[1]), g();
            },
          }
        );
      }
      ju.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var Cu = function (e) {
        return 0;
      };
      var Pu = [
          "duration",
          "driver",
          "elapsed",
          "repeat",
          "repeatType",
          "repeatDelay",
          "keyframes",
          "autoplay",
          "onPlay",
          "onStop",
          "onComplete",
          "onRepeat",
          "onUpdate",
          "type",
        ],
        Fu = {
          decay: function (e) {
            var t = e.keyframes,
              n = void 0 === t ? [0] : t,
              r = e.velocity,
              a = void 0 === r ? 0 : r,
              i = e.power,
              o = void 0 === i ? 0.8 : i,
              s = e.timeConstant,
              u = void 0 === s ? 350 : s,
              l = e.restDelta,
              c = void 0 === l ? 0.5 : l,
              f = e.modifyTarget,
              d = n[0],
              p = { done: !1, value: d },
              h = o * a,
              v = d + h,
              m = void 0 === f ? v : f(v);
            return (
              m !== v && (h = m - d),
              {
                next: function (e) {
                  var t = -h * Math.exp(-e / u);
                  return (
                    (p.done = !(t > c || t < -c)),
                    (p.value = p.done ? m : m + t),
                    p
                  );
                },
                flipTarget: function () {},
              }
            );
          },
          keyframes: xu,
          tween: xu,
          spring: ju,
        };
      function Ou(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var Ru = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return Ko.update(t, !0);
          },
          stop: function () {
            return $o.update(t);
          },
        };
      };
      function Lu(e) {
        var t,
          n,
          r,
          a,
          i = e.duration,
          o = e.driver,
          s = void 0 === o ? Ru : o,
          u = e.elapsed,
          l = void 0 === u ? 0 : u,
          c = e.repeat,
          f = void 0 === c ? 0 : c,
          d = e.repeatType,
          p = void 0 === d ? "loop" : d,
          h = e.repeatDelay,
          v = void 0 === h ? 0 : h,
          m = e.keyframes,
          A = e.autoplay,
          g = void 0 === A || A,
          y = e.onPlay,
          b = e.onStop,
          x = e.onComplete,
          w = e.onRepeat,
          k = e.onUpdate,
          S = e.type,
          E = void 0 === S ? "keyframes" : S,
          _ = Kn(e, Pu),
          T = l,
          N = 0,
          j = i,
          C = !1,
          P = !0,
          F = Fu[m.length > 2 ? "keyframes" : E] || xu,
          O = m[0],
          R = m[m.length - 1],
          L = { done: !1, value: O };
        (null === (n = (t = F).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, O, R)) &&
          ((a = lu([0, 100], [O, R], { clamp: !1 })), (m = [0, 100]));
        var D = F(Qe(Qe({}, _), {}, { duration: i, keyframes: m }));
        function V() {
          N++,
            "reverse" === p
              ? (l = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                  return r ? Ou(t + -e, t, n) : t - (e - t) + n;
                })(l, j, v, (P = N % 2 === 0)))
              : ((l = Ou(l, j, v)), "mirror" === p && D.flipTarget()),
            (C = !1),
            w && w();
        }
        function M(e) {
          P || (e = -e),
            (l += e),
            C ||
              ((L = D.next(Math.max(0, l))),
              a && (L.value = a(L.value)),
              (C = P ? L.done : l <= 0)),
            k && k(L.value),
            C &&
              (0 === N && (j = void 0 !== j ? j : l),
              N < f
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(l, j, v, P) && V()
                : (r && r.stop(), x && x()));
        }
        return (
          g && (y && y(), (r = s(M)).start()),
          {
            stop: function () {
              b && b(), r && r.stop();
            },
            set currentTime(e) {
              (l = T), M(e);
            },
            sample: function (e) {
              l = T;
              var t = i && "number" === typeof i ? Math.max(0.5 * i, 50) : 50,
                n = 0;
              for (M(0); n <= e; ) {
                var r = e - n;
                M(Math.min(r, t)), (n += t);
              }
              return L;
            },
          }
        );
      }
      var Du = function (e) {
          var t = l(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            i = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(i, ")");
        },
        Vu = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Du([0, 0.65, 0.55, 1]),
          circOut: Du([0.55, 0, 1, 0.45]),
          backIn: Du([0.31, 0.01, 0.66, -0.59]),
          backOut: Du([0.33, 1.53, 0.69, 0.99]),
        };
      function Mu(e) {
        if (e) return Array.isArray(e) ? Du(e) : Vu[e];
      }
      var Iu = {
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
        },
        zu = {},
        Uu = {},
        Bu = function (e) {
          Uu[e] = function () {
            return void 0 === zu[e] && (zu[e] = Iu[e]()), zu[e];
          };
        };
      for (var Hu in Iu) Bu(Hu);
      var Wu = ["onUpdate", "onComplete"],
        qu = new Set(["opacity"]);
      function Yu(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          a = Kn(n, Wu);
        if (
          !(
            Uu.waapi() &&
            qu.has(t) &&
            !a.repeatDelay &&
            "mirror" !== a.repeatType &&
            0 !== a.damping
          )
        )
          return !1;
        var i,
          o = a.keyframes,
          s = a.duration,
          u = void 0 === s ? 300 : s,
          l = a.elapsed,
          c = void 0 === l ? 0 : l,
          f = a.ease;
        if (
          "spring" === a.type ||
          !(
            !(i = a.ease) ||
            Array.isArray(i) ||
            ("string" === typeof i && Vu[i])
          )
        ) {
          if (a.repeat === 1 / 0) return;
          for (
            var d = Lu(Qe(Qe({}, a), {}, { elapsed: 0 })),
              p = { done: !1, value: o[0] },
              h = [],
              v = 0;
            !p.done && v < 2e4;

          )
            (p = d.sample(v)), h.push(p.value), (v += 10);
          (o = h), (u = v - 10), (f = "linear");
        }
        var m = (function (e, t, n) {
          var r,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = a.delay,
            o = void 0 === i ? 0 : i,
            s = a.duration,
            u = a.repeat,
            l = void 0 === u ? 0 : u,
            c = a.repeatType,
            f = void 0 === c ? "loop" : c,
            d = a.ease,
            p = a.times;
          return e.animate((Xe((r = {}), t, n), Xe(r, "offset", p), r), {
            delay: o,
            duration: s,
            easing: Mu(d),
            fill: "both",
            iterations: l + 1,
            direction: "reverse" === f ? "alternate" : "normal",
          });
        })(
          e.owner.current,
          t,
          o,
          Qe(Qe({}, a), {}, { delay: -c, duration: u, ease: f })
        );
        return (
          (m.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(o, a)
            ),
              Ko.update(function () {
                return m.cancel();
              }),
              r && r();
          }),
          {
            get currentTime() {
              return m.currentTime || 0;
            },
            set currentTime(e) {
              m.currentTime = e;
            },
            stop: function () {
              var t = m.currentTime;
              if (t) {
                var n = Lu(Qe(Qe({}, a), {}, { autoplay: !1 }));
                e.setWithVelocity(
                  n.sample(t - 10).value,
                  n.sample(t).value,
                  10
                );
              }
              Ko.update(function () {
                return m.cancel();
              });
            },
          }
        );
      }
      function Xu(e, t) {
        var n = performance.now(),
          r = function r(a) {
            var i = a.timestamp - n;
            i >= t && ($o.read(r), e(i - t));
          };
        return (
          Ko.read(r, !0),
          function () {
            return $o.read(r);
          }
        );
      }
      function Gu(e) {
        var t = e.keyframes,
          n = e.elapsed,
          r = e.onUpdate,
          a = e.onComplete,
          i = function () {
            r && r(t[t.length - 1]), a && a();
          };
        return n ? { stop: Xu(i, -n) } : i();
      }
      function Qu(e) {
        var t,
          n = e.keyframes,
          r = e.velocity,
          a = void 0 === r ? 0 : r,
          i = e.min,
          o = e.max,
          s = e.power,
          u = void 0 === s ? 0.8 : s,
          l = e.timeConstant,
          c = void 0 === l ? 750 : l,
          f = e.bounceStiffness,
          d = void 0 === f ? 500 : f,
          p = e.bounceDamping,
          h = void 0 === p ? 10 : p,
          v = e.restDelta,
          m = void 0 === v ? 1 : v,
          A = e.modifyTarget,
          g = e.driver,
          y = e.onUpdate,
          b = e.onComplete,
          x = e.onStop,
          w = n[0];
        function k(e) {
          return (void 0 !== i && e < i) || (void 0 !== o && e > o);
        }
        function S(e) {
          return void 0 === i
            ? o
            : void 0 === o || Math.abs(i - e) < Math.abs(o - e)
            ? i
            : o;
        }
        function E(e) {
          null === t || void 0 === t || t.stop(),
            (t = Lu(
              Qe(
                Qe({ keyframes: [0, 1], velocity: 0 }, e),
                {},
                {
                  driver: g,
                  onUpdate: function (t) {
                    var n;
                    null === y || void 0 === y || y(t),
                      null === (n = e.onUpdate) || void 0 === n || n.call(e, t);
                  },
                  onComplete: b,
                  onStop: x,
                }
              )
            ));
        }
        function _(e) {
          E(Qe({ type: "spring", stiffness: d, damping: h, restDelta: m }, e));
        }
        if (k(w)) _({ velocity: a, keyframes: [w, S(w)] });
        else {
          var T = u * a + w;
          "undefined" !== typeof A && (T = A(T));
          var N,
            j,
            C = S(T),
            P = C === i ? -1 : 1;
          E({
            type: "decay",
            keyframes: [w, 0],
            velocity: a,
            timeConstant: c,
            power: u,
            restDelta: m,
            modifyTarget: A,
            onUpdate: k(T)
              ? function (e) {
                  (N = j),
                    (j = e),
                    (a = os(e - N, Bo.delta)),
                    ((1 === P && e > C) || (-1 === P && e < C)) &&
                      _({ keyframes: [e, C], velocity: a });
                }
              : void 0,
          });
        }
        return {
          stop: function () {
            return null === t || void 0 === t ? void 0 : t.stop();
          },
        };
      }
      var Zu = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        Ku = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        $u = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Ju = { type: "keyframes", duration: 0.8 },
        el = {
          x: Zu,
          y: Zu,
          z: Zu,
          rotate: Zu,
          rotateX: Zu,
          rotateY: Zu,
          rotateZ: Zu,
          scaleX: Ku,
          scaleY: Ku,
          scale: Ku,
          opacity: $u,
          backgroundColor: $u,
          color: $u,
          default: Ku,
        },
        tl = function (e, t) {
          var n = t.keyframes;
          return n.length > 2 ? Ju : (el[e] || el.default)(n[1]);
        },
        nl = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !ks.test(t) || t.startsWith("url(")))
          );
        },
        rl = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ];
      function al(e) {
        e.when,
          e.delay,
          e.delayChildren,
          e.staggerChildren,
          e.staggerDirection,
          e.repeat,
          e.repeatType,
          e.repeatDelay,
          e.from,
          e.elapsed;
        var t = Kn(e, rl);
        return !!Object.keys(t).length;
      }
      function il(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function ol(e) {
        return "number" === typeof e ? 0 : Cs("", e);
      }
      function sl(e, t) {
        return e[t] || e.default || e;
      }
      function ul(e, t, n, r) {
        var a = nl(t, n),
          i = void 0 !== r.from ? r.from : e.get();
        return (
          "none" === i && a && "string" === typeof n
            ? (i = Cs(t, n))
            : il(i) && "string" === typeof n
            ? (i = ol(n))
            : !Array.isArray(n) &&
              il(n) &&
              "string" === typeof i &&
              (n = ol(i)),
          Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
        );
      }
      var ll = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return function (a) {
            var i = sl(r, e) || {},
              o = i.delay || r.delay || 0,
              s = r.elapsed,
              u = void 0 === s ? 0 : s;
            u -= Hs(o);
            var l = ul(t, e, n, i),
              c = l[0],
              f = l[l.length - 1],
              d = nl(e, c),
              p = nl(e, f);
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(c, '" to "')
              .concat(f, '". ')
              .concat(
                c,
                " is not an animatable value - to enable this animation set "
              )
              .concat(c, " to a value animatable to ")
              .concat(f, " via the `style` property.");
            var h = Qe(
              Qe({ keyframes: l, velocity: t.getVelocity() }, i),
              {},
              {
                elapsed: u,
                onUpdate: function (e) {
                  t.set(e), i.onUpdate && i.onUpdate(e);
                },
                onComplete: function () {
                  a(), i.onComplete && i.onComplete();
                },
              }
            );
            if (!d || !p || Ws || !1 === i.type) return Gu(h);
            if ("inertia" === i.type) return Qu(h);
            al(i) || (h = Qe(Qe({}, h), tl(e, h))),
              h.duration && (h.duration = Hs(h.duration)),
              h.repeatDelay && (h.repeatDelay = Hs(h.repeatDelay));
            var v = t.owner,
              m = v && v.current;
            if (
              v &&
              m instanceof HTMLElement &&
              !(null === v || void 0 === v ? void 0 : v.getProps().onUpdate)
            ) {
              var A = Yu(t, e, h);
              if (A) return A;
            }
            return Lu(h);
          };
        },
        cl = ["transition", "transitionEnd"];
      function fl(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = Ds(e, t, r.custom),
          i = a || {},
          o = i.transition,
          s = void 0 === o ? e.getDefaultTransition() || {} : o;
        r.transitionOverride && (s = r.transitionOverride);
        var u = a
            ? function () {
                return dl(e, a, r);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = s,
                  i = a.delayChildren,
                  o = void 0 === i ? 0 : i,
                  u = a.staggerChildren,
                  l = a.staggerDirection;
                return pl(e, t, o + n, u, l, r);
              }
            : function () {
                return Promise.resolve();
              },
          f = s,
          d = f.when;
        if (d) {
          var p = "beforeChildren" === d ? [u, c] : [c, u],
            h = l(p, 2),
            v = h[0],
            m = h[1];
          return v().then(m);
        }
        return Promise.all([u(), c(r.delay)]);
      }
      function dl(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = r.delay,
          i = void 0 === a ? 0 : a,
          o = r.transitionOverride,
          s = r.type,
          u = e.makeTargetAnimatable(t),
          l = u.transition,
          c = void 0 === l ? e.getDefaultTransition() : l,
          f = u.transitionEnd,
          d = Kn(u, cl),
          p = e.getValue("willChange");
        o && (c = o);
        var h = [],
          v =
            s &&
            (null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.getState()[s]),
          m = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (!n || void 0 === r || (v && vl(v, t))) return "continue";
            var a = Qe({ delay: i, elapsed: 0 }, c);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var o = e.getProps()[Bs];
              o && (a.elapsed = window.HandoffAppearAnimations(o, t, n, Ko));
            }
            var s = n.start(
              ll(t, n, r, e.shouldReduceMotion && ri.has(t) ? { type: !1 } : a)
            );
            Us(p) &&
              (p.add(t),
              (s = s.then(function () {
                return p.remove(t);
              }))),
              h.push(s);
          };
        for (var A in d) m(A);
        return Promise.all(h).then(function () {
          f && Is(e, f);
        });
      }
      function pl(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          i = arguments.length > 5 ? arguments[5] : void 0,
          o = [],
          s = (e.variantChildren.size - 1) * r,
          u =
            1 === a
              ? function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return e * r;
                }
              : function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return s - e * r;
                };
        return (
          Array.from(e.variantChildren)
            .sort(hl)
            .forEach(function (e, r) {
              e.notify("AnimationStart", t),
                o.push(
                  fl(e, t, Qe(Qe({}, i), {}, { delay: n + u(r) })).then(
                    function () {
                      return e.notify("AnimationComplete", t);
                    }
                  )
                );
            }),
          Promise.all(o)
        );
      }
      function hl(e, t) {
        return e.sortNodePosition(t);
      }
      function vl(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          a = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), a;
      }
      var ml = ["transition", "transitionEnd"],
        Al = [
          io.Animate,
          io.InView,
          io.Focus,
          io.Hover,
          io.Tap,
          io.Drag,
          io.Exit,
        ],
        gl = [].concat(Al).reverse(),
        yl = Al.length;
      function bl(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return fl(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = fl(e, t, r);
                else {
                  var i = "function" === typeof t ? Ds(e, t, r.custom) : t;
                  n = dl(e, i, r);
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function xl(e) {
        var t = bl(e),
          n = (function () {
            var e;
            return (
              Xe((e = {}), io.Animate, wl(!0)),
              Xe(e, io.InView, wl()),
              Xe(e, io.Hover, wl()),
              Xe(e, io.Tap, wl()),
              Xe(e, io.Drag, wl()),
              Xe(e, io.Focus, wl()),
              Xe(e, io.Exit, wl()),
              e
            );
          })(),
          r = !0,
          a = function (t, n) {
            var r = Ds(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = Kn(r, ml);
              t = Qe(Qe(Qe({}, t), i), a);
            }
            return t;
          };
        function i(i, o) {
          for (
            var s = e.getProps(),
              u = e.getVariantContext(!0) || {},
              l = [],
              c = new Set(),
              d = {},
              p = 1 / 0,
              h = function () {
                var t = gl[v],
                  h = n[t],
                  m = void 0 !== s[t] ? s[t] : u[t],
                  A = Ra(m),
                  g = t === o ? h.isActive : null;
                !1 === g && (p = v);
                var y = m === u[t] && m !== s[t] && A;
                if (
                  (y && r && e.manuallyAnimateOnMount && (y = !1),
                  (h.protectedKeys = Qe({}, d)),
                  (!h.isActive && null === g) ||
                    (!m && !h.prevProp) ||
                    La(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var b = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !zo(t, e);
                    return !1;
                  })(h.prevProp, m),
                  x = b || (t === o && h.isActive && !y && A) || (v > p && A),
                  w = Array.isArray(m) ? m : [m],
                  k = w.reduce(a, {});
                !1 === g && (k = {});
                var S = h.prevResolvedValues,
                  E = void 0 === S ? {} : S,
                  _ = Qe(Qe({}, E), k),
                  T = function (e) {
                    (x = !0), c.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var N in _) {
                  var j = k[N],
                    C = E[N];
                  d.hasOwnProperty(N) ||
                    (j !== C
                      ? eo(j) && eo(C)
                        ? !zo(j, C) || b
                          ? T(N)
                          : (h.protectedKeys[N] = !0)
                        : void 0 !== j
                        ? T(N)
                        : c.add(N)
                      : void 0 !== j && c.has(N)
                      ? T(N)
                      : (h.protectedKeys[N] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = k),
                  h.isActive && (d = Qe(Qe({}, d), k)),
                  r && e.blockInitialAnimation && (x = !1),
                  x &&
                    !y &&
                    l.push.apply(
                      l,
                      f(
                        w.map(function (e) {
                          return { animation: e, options: Qe({ type: t }, i) };
                        })
                      )
                    );
              },
              v = 0;
            v < yl;
            v++
          )
            h();
          if (c.size) {
            var m = {};
            c.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              l.push({ animation: m });
          }
          var A = Boolean(l.length);
          return (
            r && !1 === s.initial && !e.manuallyAnimateOnMount && (A = !1),
            (r = !1),
            A ? t(l) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var s = i(a, t);
            for (var u in n) n[u].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function wl() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var kl = {
          animation: Vo(function (e) {
            var n = e.visualElement,
              r = e.animate;
            n.animationState || (n.animationState = xl(n)),
              La(r) &&
                (0, t.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: Vo(function (e) {
            var n = e.custom,
              r = e.visualElement,
              a = l(Io(), 2),
              i = a[0],
              o = a[1],
              s = (0, t.useContext)(Na);
            (0, t.useEffect)(
              function () {
                r.isPresent = i;
                var e =
                  r.animationState &&
                  r.animationState.setActive(io.Exit, !i, {
                    custom: (s && s.custom) || n,
                  });
                e && !i && e.then(o);
              },
              [i]
            );
          }),
        },
        Sl = function (e, t) {
          return Math.abs(e - t);
        };
      function El(e, t) {
        var n = Sl(e.x, t.x),
          r = Sl(e.y, t.y);
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
      }
      var _l = (function () {
        function e(t, n) {
          var r = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = a.transformPagePoint;
          if (
            (d(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = jl(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = El(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    i = Bo.timestamp;
                  r.history.push(Qe(Qe({}, a), {}, { timestamp: i }));
                  var o = r.handlers,
                    s = o.onStart,
                    u = o.onMove;
                  t ||
                    (s && s(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = Tl(t, r.transformPagePoint)),
                Ko.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  a = n.onEnd,
                  i = n.onSessionEnd,
                  o = jl(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : Tl(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && a && a(e, o), i && i(e, o);
              }
            }),
            co(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = i);
            var o = fo(t),
              s = Tl(o, this.transformPagePoint),
              u = s.point,
              l = Bo.timestamp;
            this.history = [Qe(Qe({}, u), {}, { timestamp: l })];
            var c = n.onSessionStart;
            c && c(t, jl(s, this.history)),
              (this.removeListeners = Eo(
                ho(window, "pointermove", this.handlePointerMove),
                ho(window, "pointerup", this.handlePointerUp),
                ho(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          m(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  $o.update(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function Tl(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function Nl(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function jl(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Nl(n, Pl(t)),
          offset: Nl(n, Cl(t)),
          velocity: Fl(t, 0.1),
        };
      }
      function Cl(e) {
        return e[0];
      }
      function Pl(e) {
        return e[e.length - 1];
      }
      function Fl(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = Pl(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > Hs(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (a.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function Ol(e) {
        return e.max - e.min;
      }
      function Rl(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function Ll(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Zs(t.min, t.max, e.origin)),
          (e.scale = Ol(n) / Ol(t)),
          (Rl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Zs(n.min, n.max, e.origin) - e.originPoint),
          (Rl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function Dl(e, t, n, r) {
        Ll(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Ll(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Vl(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + Ol(t));
      }
      function Ml(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + Ol(t));
      }
      function Il(e, t, n) {
        Ml(e.x, t.x, n.x), Ml(e.y, t.y, n.y);
      }
      function zl(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Ul(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var Bl = 0.35;
      function Hl(e, t, n) {
        return { min: Wl(e, t), max: Wl(e, n) };
      }
      function Wl(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      function ql(e) {
        return [e("x"), e("y")];
      }
      function Yl(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Xl(e) {
        return void 0 === e || 1 === e;
      }
      function Gl(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Xl(t) || !Xl(n) || !Xl(r);
      }
      function Ql(e) {
        return Gl(e) || Zl(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function Zl(e) {
        return Kl(e.x) || Kl(e.y);
      }
      function Kl(e) {
        return e && "0%" !== e;
      }
      function $l(e, t, n) {
        return n + t * (e - n);
      }
      function Jl(e, t, n, r, a) {
        return void 0 !== a && (e = $l(e, a, r)), $l(e, n, r) + t;
      }
      function ec(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = Jl(e.min, t, n, r, a)), (e.max = Jl(e.max, t, n, r, a));
      }
      function tc(e, t) {
        var n = t.x,
          r = t.y;
        ec(e.x, n.translate, n.scale, n.originPoint),
          ec(e.y, r.translate, r.scale, r.originPoint);
      }
      function nc(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function rc(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function ac(e, t, n) {
        var r = l(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          s = void 0 !== t[o] ? t[o] : 0.5,
          u = Zs(e.min, e.max, s);
        ec(e, t[a], t[i], u, t.scale);
      }
      var ic = ["x", "scaleX", "originX"],
        oc = ["y", "scaleY", "originY"];
      function sc(e, t) {
        ac(e.x, t, ic), ac(e.y, t, oc);
      }
      function uc(e, t) {
        return Yl(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var lc = new WeakMap(),
        cc = (function () {
          function e(t) {
            d(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            m(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.snapToCursor,
                    a = void 0 !== r && r;
                  if (!1 !== this.visualElement.isPresent) {
                    var i = function (e) {
                        t.stopAnimation(),
                          a && t.snapToCursor(fo(e, "page").point);
                      },
                      o = function (e, n) {
                        var r,
                          a = t.getProps(),
                          i = a.drag,
                          o = a.dragPropagation,
                          s = a.onDragStart;
                        (!i ||
                          o ||
                          (t.openGlobalLock && t.openGlobalLock(),
                          (t.openGlobalLock = yo(i)),
                          t.openGlobalLock)) &&
                          ((t.isDragging = !0),
                          (t.currentDirection = null),
                          t.resolveConstraints(),
                          t.visualElement.projection &&
                            ((t.visualElement.projection.isAnimationBlocked =
                              !0),
                            (t.visualElement.projection.target = void 0)),
                          ql(function (e) {
                            var n,
                              r,
                              a = t.getAxisMotionValue(e).get() || 0;
                            if (xi.test(a)) {
                              var i =
                                null ===
                                  (r =
                                    null === (n = t.visualElement.projection) ||
                                    void 0 === n
                                      ? void 0
                                      : n.layout) || void 0 === r
                                  ? void 0
                                  : r.layoutBox[e];
                              if (i) a = Ol(i) * (parseFloat(a) / 100);
                            }
                            t.originPoint[e] = a;
                          }),
                          null === s || void 0 === s || s(e, n),
                          null === (r = t.visualElement.animationState) ||
                            void 0 === r ||
                            r.setActive(io.Drag, !0));
                      },
                      s = function (e, n) {
                        var r = t.getProps(),
                          a = r.dragPropagation,
                          i = r.dragDirectionLock,
                          o = r.onDirectionLock,
                          s = r.onDrag;
                        if (a || t.openGlobalLock) {
                          var u = n.offset;
                          if (i && null === t.currentDirection)
                            return (
                              (t.currentDirection = dc(u)),
                              void (
                                null !== t.currentDirection &&
                                (null === o ||
                                  void 0 === o ||
                                  o(t.currentDirection))
                              )
                            );
                          t.updateAxis("x", n.point, u),
                            t.updateAxis("y", n.point, u),
                            t.visualElement.render(),
                            null === s || void 0 === s || s(e, n);
                        }
                      },
                      u = function (e, n) {
                        return t.stop(e, n);
                      };
                    this.panSession = new _l(
                      e,
                      {
                        onSessionStart: i,
                        onStart: o,
                        onMove: s,
                        onSessionEnd: u,
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    null === a || void 0 === a || a(e, t);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var e, t;
                  (this.isDragging = !1),
                    this.visualElement.projection &&
                      (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (e = this.panSession) || void 0 === e || e.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    null === (t = this.visualElement.animationState) ||
                      void 0 === t ||
                      t.setActive(io.Drag, !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && fc(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      i = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (i = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Zs(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? Zs(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(i, this.constraints[e], this.elastic[e])),
                      a.set(i);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    i = this.constraints;
                  n && Oa(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            i = t.right;
                          return { x: zl(e.x, r, i), y: zl(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : Bl;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = Bl),
                        { x: Hl(e, "left", "right"), y: Hl(e, "top", "bottom") }
                      );
                    })(r)),
                    i !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      ql(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !Oa(t)) return !1;
                  var r = t.current,
                    a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var i = (function (e, t, n) {
                      var r = uc(e, n),
                        a = t.scroll;
                      return a && (rc(r.x, a.offset.x), rc(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: Ul(e.x, t.x), y: Ul(e.y, t.y) };
                    })(a.layout.layoutBox, i);
                  if (n) {
                    var s = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!s), s && (o = Yl(s));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    i = n.dragElastic,
                    o = n.dragTransition,
                    s = n.dragSnapToOrigin,
                    u = n.onDragTransitionEnd,
                    l = this.constraints || {},
                    c = ql(function (n) {
                      if (fc(n, r, t.currentDirection)) {
                        var u =
                          (null === l || void 0 === l ? void 0 : l[n]) || {};
                        s && (u = { min: 0, max: 0 });
                        var c = i ? 200 : 1e6,
                          f = i ? 40 : 1e7,
                          d = Qe(
                            Qe(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            u
                          );
                        return t.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(u);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(ll(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  ql(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t,
                    n = "_drag" + e.toUpperCase(),
                    r = this.visualElement.getProps()[n];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  ql(function (n) {
                    if (fc(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var i = r.layout.layoutBox[n],
                          o = i.min,
                          s = i.max;
                        a.set(e[n] - Zs(o, s, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    var n = this.getProps(),
                      r = n.drag,
                      a = n.dragConstraints,
                      i = this.visualElement.projection;
                    if (Oa(a) && i && this.constraints) {
                      this.stopAnimation();
                      var o = { x: 0, y: 0 };
                      ql(function (e) {
                        var n = t.getAxisMotionValue(e);
                        if (n) {
                          var r = n.get();
                          o[e] = (function (e, t) {
                            var n = 0.5,
                              r = Ol(e),
                              a = Ol(t);
                            return (
                              a > r
                                ? (n = ou(t.min, t.max - r, e.min))
                                : r > a && (n = ou(e.min, e.max - a, t.min)),
                              ci(0, 1, n)
                            );
                          })({ min: r, max: r }, t.constraints[e]);
                        }
                      });
                      var s = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = s
                        ? s({}, "")
                        : "none"),
                        null === (e = i.root) ||
                          void 0 === e ||
                          e.updateScroll(),
                        i.updateLayout(),
                        this.resolveConstraints(),
                        ql(function (e) {
                          if (fc(e, r, null)) {
                            var n = t.getAxisMotionValue(e),
                              a = t.constraints[e],
                              i = a.min,
                              s = a.max;
                            n.set(Zs(i, s, o[e]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    lc.set(this.visualElement, this);
                    var n = ho(
                        this.visualElement.current,
                        "pointerdown",
                        function (e) {
                          var n = t.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && t.start(e);
                        }
                      ),
                      r = function () {
                        Oa(t.getProps().dragConstraints) &&
                          (t.constraints = t.resolveRefConstraints());
                      },
                      a = this.visualElement.projection,
                      i = a.addEventListener("measure", r);
                    a &&
                      !a.layout &&
                      (null === (e = a.root) ||
                        void 0 === e ||
                        e.updateScroll(),
                      a.updateLayout()),
                      r();
                    var o = uo(window, "resize", function () {
                        return t.scalePositionWithinConstraints();
                      }),
                      s = a.addEventListener("didUpdate", function (e) {
                        var n = e.delta,
                          r = e.hasLayoutChanged;
                        t.isDragging &&
                          r &&
                          (ql(function (e) {
                            var r = t.getAxisMotionValue(e);
                            r &&
                              ((t.originPoint[e] += n[e].translate),
                              r.set(r.get() + n[e].translate));
                          }),
                          t.visualElement.render());
                      });
                    return function () {
                      o(), n(), i(), null === s || void 0 === s || s();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    i = e.dragPropagation,
                    o = void 0 !== i && i,
                    s = e.dragConstraints,
                    u = void 0 !== s && s,
                    l = e.dragElastic,
                    c = void 0 === l ? Bl : l,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return Qe(
                    Qe({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: o,
                      dragConstraints: u,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function fc(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      function dc(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n = null;
        return (
          Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
        );
      }
      var pc = {
        pan: Vo(function (e) {
          var n = e.onPan,
            r = e.onPanStart,
            a = e.onPanEnd,
            i = e.onPanSessionStart,
            o = e.visualElement,
            s = n || r || a || i,
            u = (0, t.useRef)(null),
            l = (0, t.useContext)(_a).transformPagePoint,
            c = {
              onSessionStart: i,
              onStart: r,
              onMove: n,
              onEnd: function (e, t) {
                (u.current = null), a && a(e, t);
              },
            };
          (0, t.useEffect)(function () {
            null !== u.current && u.current.updateHandlers(c);
          }),
            vo(
              o,
              "pointerdown",
              s &&
                function (e) {
                  u.current = new _l(e, c, { transformPagePoint: l });
                }
            ),
            ko(function () {
              return u.current && u.current.end();
            });
        }),
        drag: Vo(function (e) {
          var n = e.dragControls,
            r = e.visualElement,
            a = Ha(function () {
              return new cc(r);
            });
          (0, t.useEffect)(
            function () {
              return n && n.subscribe(a);
            },
            [a, n]
          ),
            (0, t.useEffect)(
              function () {
                return a.addListeners();
              },
              [a]
            );
        }),
      };
      function hc(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var vc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function mc(e) {
        var t = vc.exec(e);
        if (!t) return [,];
        var n = l(t, 3);
        return [n[1], n[2]];
      }
      function Ac(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        );
        var r = mc(e),
          a = l(r, 2),
          i = a[0],
          o = a[1];
        if (i) {
          var s = window.getComputedStyle(t).getPropertyValue(i);
          return s ? s.trim() : hc(o) ? Ac(o, t, n + 1) : o;
        }
      }
      function gc(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.current;
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var i in (n && (n = Qe({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (hc(t)) {
            var n = Ac(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[i];
          if (hc(o)) {
            var s = Ac(o, a);
            s && ((r[i] = s), n && void 0 === n[i] && (n[i] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var yc,
        bc = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        xc = function (e) {
          return bc.has(e);
        },
        wc = function (e) {
          return e === fi || e === wi;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(yc || (yc = {}));
      var kc = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        Sc = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return kc(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? kc(o[1], e) : 0;
          };
        },
        Ec = new Set(["x", "y", "z"]),
        _c = ni.filter(function (e) {
          return !Ec.has(e);
        });
      function Tc(e) {
        var t = [];
        return (
          _c.forEach(function (n) {
            var r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          t.length && e.render(),
          t
        );
      }
      var Nc = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              i = t.paddingRight,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              i = t.paddingBottom,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: Sc(4, 13),
          y: Sc(5, 14),
        },
        jc = function (e, t, n) {
          var r = t.measureViewportBox(),
            a = t.current,
            i = getComputedStyle(a),
            o = i.display,
            s = {};
          "none" === o && t.setStaticValue("display", e.display || "block"),
            n.forEach(function (e) {
              s[e] = Nc[e](r, i);
            }),
            t.render();
          var u = t.measureViewportBox();
          return (
            n.forEach(function (n) {
              var r = t.getValue(n);
              r && r.jump(s[n]), (e[n] = Nc[n](u, i));
            }),
            e
          );
        };
      function Cc(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(xc);
        })(t)
          ? (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              (t = Qe({}, t)), (r = Qe({}, r));
              var a = Object.keys(t).filter(xc),
                i = [],
                o = !1,
                s = [];
              if (
                (a.forEach(function (a) {
                  var u = e.getValue(a);
                  if (e.hasValue(a)) {
                    var l,
                      c = n[a],
                      f = Os(c),
                      d = t[a];
                    if (eo(d)) {
                      var p = d.length,
                        h = null === d[0] ? 1 : 0;
                      (c = d[h]), (f = Os(c));
                      for (var v = h; v < p; v++)
                        l ? Os(d[v]) : (l = Os(d[v])) === f || (wc(f) && wc(l));
                    } else l = Os(d);
                    if (f !== l)
                      if (wc(f) && wc(l)) {
                        var m = u.get();
                        "string" === typeof m && u.set(parseFloat(m)),
                          "string" === typeof d
                            ? (t[a] = parseFloat(d))
                            : Array.isArray(d) &&
                              l === wi &&
                              (t[a] = d.map(parseFloat));
                      } else
                        (null === f || void 0 === f ? void 0 : f.transform) &&
                        (null === l || void 0 === l ? void 0 : l.transform) &&
                        (0 === c || 0 === d)
                          ? 0 === c
                            ? u.set(l.transform(c))
                            : (t[a] = f.transform(d))
                          : (o || ((i = Tc(e)), (o = !0)),
                            s.push(a),
                            (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                            u.jump(d));
                  }
                }),
                s.length)
              ) {
                var u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                  c = jc(t, e, s);
                return (
                  i.length &&
                    i.forEach(function (t) {
                      var n = l(t, 2),
                        r = n[0],
                        a = n[1];
                      e.getValue(r).set(a);
                    }),
                  e.render(),
                  ja && null !== u && window.scrollTo({ top: u }),
                  { target: c, transitionEnd: r }
                );
              }
              return { target: t, transitionEnd: r };
            })(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var Pc = { current: null },
        Fc = { current: !1 };
      var Oc = ["willChange"],
        Rc = ["children"],
        Lc = Object.keys(Ba),
        Dc = Lc.length,
        Vc = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        Mc = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              i = t.reducedMotionConfig,
              o = t.visualState,
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.isPresent = !0),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return Ko.render(n.render, !1, !0);
              });
            var u = o.latestValues,
              l = o.renderState;
            (this.latestValues = u),
              (this.baseTarget = Qe({}, u)),
              (this.initialValues = a.initial ? Qe({}, u) : {}),
              (this.renderState = l),
              (this.parent = r),
              (this.props = a),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = i),
              (this.options = s),
              (this.isControllingVariants = Va(a)),
              (this.isVariantNode = Ma(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var c = this.scrapeMotionValuesFromProps(a, {}),
              f = c.willChange,
              p = Kn(c, Oc);
            for (var h in p) {
              var v = p[h];
              void 0 !== u[h] && ii(v) && (v.set(u[h], !1), Us(f) && f.add(h));
            }
          }
          return (
            m(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t,
                    n = this;
                  (this.current = e),
                    this.projection && this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        null === (t = this.parent) || void 0 === t
                          ? void 0
                          : t.addVariantChild(this)),
                    this.values.forEach(function (e, t) {
                      return n.bindToMotionValue(t, e);
                    }),
                    Fc.current ||
                      (function () {
                        if (((Fc.current = !0), ja))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (Pc.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else Pc.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || Pc.current)),
                    this.parent && this.parent.children.add(this),
                    this.setProps(this.props);
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t, n;
                  for (var r in (null === (e = this.projection) ||
                    void 0 === e ||
                    e.unmount(),
                  $o.update(this.notifyUpdate),
                  $o.render(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  null === (t = this.removeFromVariantTree) ||
                    void 0 === t ||
                    t.call(this),
                  null === (n = this.parent) ||
                    void 0 === n ||
                    n.children.delete(this),
                  this.events))
                    this.events[r].clear();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = ri.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && Ko.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), i();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, n, r, a, i, o) {
                  for (
                    var s = this, u = (e.children, Kn(e, Rc)), l = [], c = 0;
                    c < Dc;
                    c++
                  ) {
                    var f = Lc[c],
                      d = Ba[f],
                      p = d.isEnabled,
                      h = d.Component;
                    p(u) &&
                      h &&
                      l.push(
                        (0, t.createElement)(
                          h,
                          Qe(Qe({ key: f }, u), {}, { visualElement: this })
                        )
                      );
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      a,
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var v = u.layoutId,
                      m = u.layout,
                      A = u.drag,
                      g = u.dragConstraints,
                      y = u.layoutScroll,
                      b = u.layoutRoot;
                    this.projection.setOptions({
                      layoutId: v,
                      layout: m,
                      alwaysMeasureLayout: Boolean(A) || (g && Oa(g)),
                      visualElement: this,
                      scheduleRender: function () {
                        return s.scheduleRender();
                      },
                      animationType: "string" === typeof m ? m : "both",
                      initialPromotionConfig: o,
                      layoutScroll: y,
                      layoutRoot: b,
                    });
                  }
                  return l;
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "setProps",
                value: function (e) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender();
                  var t = this.props;
                  this.props = e;
                  for (var n = 0; n < Vc.length; n++) {
                    var r = Vc[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var a = e["on" + r];
                    a && (this.propEventSubscriptions[r] = this.on(r, a));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var i = t[a],
                        o = n[a];
                      if (ii(i)) e.addValue(a, i), Us(r) && r.add(a);
                      else if (ii(o))
                        e.addValue(a, ls(i, { owner: e })),
                          Us(r) && r.remove(a);
                      else if (o !== i)
                        if (e.hasValue(a)) {
                          var s = e.getValue(a);
                          !s.hasAnimated && s.set(i);
                        } else {
                          var u = e.getStaticValue(a);
                          e.addValue(a, ls(void 0 !== u ? u : i, { owner: e }));
                        }
                    }
                    for (var l in n) void 0 === t[l] && e.removeValue(l);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, t),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  var t;
                  return null === (t = this.props.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  var e;
                  return this.isVariantNode
                    ? this
                    : null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.getClosestVariantNode();
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (n)
                    return null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.getVariantContext();
                  if (!this.isControllingVariants) {
                    var r =
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (r.initial = this.props.initial),
                      r
                    );
                  }
                  for (var a = {}, i = 0; i < zc; i++) {
                    var o = Ic[i],
                      s = this.props[o];
                    (Ra(s) || !1 === s) && (a[o] = s);
                  }
                  return a;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t,
                    n = this.getClosestVariantNode();
                  if (n)
                    return (
                      null === (t = n.variantChildren) ||
                        void 0 === t ||
                        t.add(e),
                      function () {
                        return n.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  var t;
                  this.values.delete(e),
                    null === (t = this.valueSubscriptions.get(e)) ||
                      void 0 === t ||
                      t(),
                    this.valueSubscriptions.delete(e),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = ls(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  return void 0 === this.latestValues[e] && this.current
                    ? this.readValueFromInstance(this.current, e, this.options)
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = Ji(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || ii(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new is()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  for (
                    var t,
                      n,
                      r = arguments.length,
                      a = new Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    a[i - 1] = arguments[i];
                  null === (n = this.events[e]) ||
                    void 0 === n ||
                    (t = n).notify.apply(t, a);
                },
              },
            ]),
            e
          );
        })(),
        Ic = ["initial"].concat(f(Al)),
        zc = Ic.length,
        Uc = ["transition", "transitionEnd"],
        Bc = (function (e) {
          g(n, e);
          var t = w(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  var n;
                  return null === (n = e.style) || void 0 === n ? void 0 : n[t];
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    i = Kn(e, Uc),
                    o = t.transformValues,
                    s = (function (e, t, n) {
                      var r,
                        a = {};
                      for (var i in e) {
                        var o = zs(i, t);
                        a[i] =
                          void 0 !== o
                            ? o
                            : null === (r = n.getValue(i)) || void 0 === r
                            ? void 0
                            : r.get();
                      }
                      return a;
                    })(i, r || {}, this);
                  if (
                    (o && (a && (a = o(a)), i && (i = o(i)), s && (s = o(s))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        i = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = i.length;
                      if (o)
                        for (var s = 0; s < o; s++) {
                          var u = i[s],
                            l = t[u],
                            c = null;
                          Array.isArray(l) && (c = l[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[u]) && void 0 !== r
                                      ? r
                                      : e.readValue(u)) && void 0 !== a
                                  ? a
                                  : t[u]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c &&
                              (/^\-?\d*\.?\d+$/.test(c) || Uo(c))
                                ? (c = parseFloat(c))
                                : !Ls(c) && ks.test(l) && (c = Cs(u, l)),
                              e.addValue(u, ls(c, { owner: e })),
                              void 0 === n[u] && (n[u] = c),
                              null !== c && e.setBaseTarget(u, c));
                        }
                    })(this, i, s);
                    var u = (function (e, t, n, r) {
                      var a = gc(e, t, r);
                      return Cc(e, (t = a.target), n, (r = a.transitionEnd));
                    })(this, i, s, a);
                    (a = u.transitionEnd), (i = u.target);
                  }
                  return Qe({ transition: r, transitionEnd: a }, i);
                },
              },
            ]),
            n
          );
        })(Mc);
      var Hc = (function (e) {
        g(n, e);
        var t = w(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return (
          m(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (ri.has(t)) {
                  var n = js(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  i = (ui(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof i ? i.trim() : i;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return uc(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                Ni(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return Ki(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                ii(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                Gi(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(Bc);
      function Wc(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = y(e));

        );
        return e;
      }
      function qc() {
        return (
          (qc =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = Wc(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          qc.apply(this, arguments)
        );
      }
      var Yc = (function (e) {
          g(n, e);
          var t = w(n);
          function n() {
            var e;
            return (
              d(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            m(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  var n;
                  return ri.has(t)
                    ? (null === (n = js(t)) || void 0 === n
                        ? void 0
                        : n.default) || 0
                    : ((t = Qi.has(t) ? t : Xi(t)), e.getAttribute(t));
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return $i(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  Bi(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  Zi(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = Wi(e.tagName)),
                    qc(y(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(Bc),
        Xc = function (e, t) {
          return ei(e)
            ? new Yc(t, { enableHardwareAcceleration: !1 })
            : new Hc(t, { enableHardwareAcceleration: !0 });
        };
      function Gc(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Qc = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!wi.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Gc(e, t.target.x),
              r = Gc(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Zc = "_$css",
        Kc = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = e.includes("var("),
              o = [];
            i &&
              (e = e.replace(vc, function (e) {
                return o.push(e), Zc;
              }));
            var s = ks.parse(e);
            if (s.length > 5) return a;
            var u = ks.createTransformer(e),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= f);
            var d = Zs(c, f, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= d),
              "number" === typeof s[3 + l] && (s[3 + l] /= d);
            var p = u(s);
            if (i) {
              var h = 0;
              p = p.replace(Zc, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        $c = (function (e) {
          g(n, e);
          var t = w(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    i = n.switchLayoutGroup,
                    o = n.layoutId,
                    s = r.projection;
                  (e = Jc),
                    Object.assign(ti, e),
                    s &&
                      (a.group && a.group.add(s),
                      i && i.register && o && i.register(s),
                      s.root.didUpdate(),
                      s.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      s.setOptions(
                        Qe(
                          Qe({}, s.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Wa.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    i = n.drag,
                    o = n.isPresent,
                    s = a.projection;
                  return s
                    ? ((s.isPresent = o),
                      i || e.layoutDependency !== r || void 0 === r
                        ? s.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? s.promote()
                          : s.relegate() ||
                            Ko.postRender(function () {
                              var e;
                              (null === (e = s.getStack()) || void 0 === e
                                ? void 0
                                : e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) &&
                      n.group.remove(a),
                    (null === r || void 0 === r ? void 0 : r.deregister) &&
                      r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  null === e || void 0 === e || e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(t.Component);
      var Jc = {
          borderRadius: Qe(
            Qe({}, Qc),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Qc,
          borderTopRightRadius: Qc,
          borderBottomLeftRadius: Qc,
          borderBottomRightRadius: Qc,
          boxShadow: Kc,
        },
        ef = {
          measureLayout: function (e) {
            var n = l(Io(), 2),
              r = n[0],
              a = n[1],
              i = (0, t.useContext)(Ya);
            return t.createElement(
              $c,
              Qe(
                Qe({}, e),
                {},
                {
                  layoutGroup: i,
                  switchLayoutGroup: (0, t.useContext)(Ga),
                  isPresent: r,
                  safeToRemove: a,
                }
              )
            );
          },
        };
      var tf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nf = tf.length,
        rf = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        af = function (e) {
          return "number" === typeof e || wi.test(e);
        };
      function of(e, t, n, r, a, i) {
        a
          ? ((e.opacity = Zs(0, void 0 !== n.opacity ? n.opacity : 1, uf(r))),
            (e.opacityExit = Zs(
              void 0 !== t.opacity ? t.opacity : 1,
              0,
              lf(r)
            )))
          : i &&
            (e.opacity = Zs(
              void 0 !== t.opacity ? t.opacity : 1,
              void 0 !== n.opacity ? n.opacity : 1,
              r
            ));
        for (var o = 0; o < nf; o++) {
          var s = "border".concat(tf[o], "Radius"),
            u = sf(t, s),
            l = sf(n, s);
          if (void 0 !== u || void 0 !== l)
            u || (u = 0),
              l || (l = 0),
              0 === u || 0 === l || af(u) === af(l)
                ? ((e[s] = Math.max(Zs(rf(u), rf(l), r), 0)),
                  (xi.test(l) || xi.test(u)) && (e[s] += "%"))
                : (e[s] = l);
        }
        (t.rotate || n.rotate) &&
          (e.rotate = Zs(t.rotate || 0, n.rotate || 0, r));
      }
      function sf(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var uf = cf(0, 0.5, hu),
        lf = cf(0.5, 0.95, cu);
      function cf(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(ou(e, t, r));
        };
      }
      function ff(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function df(e, t) {
        ff(e.x, t.x), ff(e.y, t.y);
      }
      function pf(e, t, n, r, a) {
        return (
          (e = $l((e -= t), 1 / n, r)), void 0 !== a && (e = $l(e, 1 / a, r)), e
        );
      }
      function hf(e, t, n, r, a) {
        var i = l(n, 3),
          o = i[0],
          s = i[1],
          u = i[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (xi.test(t)) {
            (t = parseFloat(t)), (t = Zs(o.min, o.max, t / 100) - o.min);
          }
          if ("number" === typeof t) {
            var s = Zs(i.min, i.max, r);
            e === i && (s -= t),
              (e.min = pf(e.min, t, n, s, a)),
              (e.max = pf(e.max, t, n, s, a));
          }
        })(e, t[o], t[s], t[u], t.scale, r, a);
      }
      var vf = ["x", "scaleX", "originX"],
        mf = ["y", "scaleY", "originY"];
      function Af(e, t, n, r) {
        hf(
          e.x,
          t,
          vf,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          hf(
            e.y,
            t,
            mf,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function gf(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function yf(e) {
        return gf(e.x) && gf(e.y);
      }
      function bf(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function xf(e) {
        return Ol(e.x) / Ol(e.y);
      }
      var wf = (function () {
        function e() {
          d(this, e), (this.members = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                rs(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (as(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n,
                  r = this.lead;
                e !== r &&
                  ((this.prevLead = r),
                  (this.lead = e),
                  e.show(),
                  r &&
                    (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = r),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot &&
                      ((e.snapshot = r.snapshot),
                      (e.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                    (null === (n = e.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t, n, r, a, i;
                  null === (n = (t = e.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t),
                    null ===
                      (i =
                        null === (r = e.resumingFrom) || void 0 === r
                          ? void 0
                          : (a = r.options).onExitComplete) ||
                      void 0 === i ||
                      i.call(a);
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function kf(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          i = e.y.translate / t.y;
        if (
          ((a || i) &&
            (r = "translate3d(".concat(a, "px, ").concat(i, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            s && (r += "rotateX(".concat(s, "deg) ")),
            u && (r += "rotateY(".concat(u, "deg) "));
        }
        var l = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === l && 1 === c) ||
            (r += "scale(".concat(l, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var Sf = function (e, t) {
          return e.depth - t.depth;
        },
        Ef = (function () {
          function e() {
            d(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            m(e, [
              {
                key: "add",
                value: function (e) {
                  rs(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  as(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(Sf),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })(),
        _f = ["", "X", "Y", "Z"],
        Tf = 0;
      function Nf(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e(t) {
            var r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            d(this, e),
              (this.id = Tf++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                r.nodes.forEach(Pf), r.nodes.forEach(Df), r.nodes.forEach(Vf);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = a),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat(f(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ef());
          }
          return (
            m(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new is()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  null === t || void 0 === t || t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (e, t) {
                  this.potentialNodes.set(e, t);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      e instanceof SVGElement && "svg" !== e.tagName),
                      (this.instance = e);
                    var i = this.options,
                      o = i.layoutId,
                      s = i.layout,
                      u = i.visualElement;
                    if (
                      (u && !u.current && u.mount(e),
                      this.root.nodes.add(this),
                      null === (n = this.parent) ||
                        void 0 === n ||
                        n.children.add(this),
                      this.elementId &&
                        this.root.potentialNodes.delete(this.elementId),
                      a && (s || o) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var l,
                        c = function () {
                          return (r.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (r.root.updateBlockedByResize = !0),
                          l && l(),
                          (l = Xu(c, 250)),
                          Wa.hasAnimatedSinceResize &&
                            ((Wa.hasAnimatedSinceResize = !1),
                            r.nodes.forEach(Lf));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        u &&
                        (o || s) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t,
                            n,
                            a,
                            i,
                            o,
                            s = e.delta,
                            l = e.hasLayoutChanged,
                            c = e.hasRelativeTargetChanged,
                            f = e.layout;
                          if (r.isTreeAnimationBlocked())
                            return (
                              (r.target = void 0),
                              void (r.relativeTarget = void 0)
                            );
                          var d =
                              null !==
                                (n =
                                  null !== (t = r.options.transition) &&
                                  void 0 !== t
                                    ? t
                                    : u.getDefaultTransition()) && void 0 !== n
                                ? n
                                : Wf,
                            p = u.getProps(),
                            h = p.onLayoutAnimationStart,
                            v = p.onLayoutAnimationComplete,
                            m = !r.targetLayout || !bf(r.targetLayout, f) || c,
                            A = !l && c;
                          if (
                            r.options.layoutRoot ||
                            (null === (a = r.resumeFrom) || void 0 === a
                              ? void 0
                              : a.instance) ||
                            A ||
                            (l && (m || !r.currentAnimation))
                          ) {
                            r.resumeFrom &&
                              ((r.resumingFrom = r.resumeFrom),
                              (r.resumingFrom.resumingFrom = void 0)),
                              r.setAnimationOrigin(s, A);
                            var g = Qe(
                              Qe({}, sl(d, "layout")),
                              {},
                              { onPlay: h, onComplete: v }
                            );
                            (u.shouldReduceMotion || r.options.layoutRoot) &&
                              ((g.delay = 0), (g.type = !1)),
                              r.startAnimation(g);
                          } else l || 0 !== r.animationProgress || Lf(r), r.isLead() && (null === (o = (i = r.options).onExitComplete) || void 0 === o || o.call(i));
                          r.targetLayout = f;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t;
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.remove(this),
                    null === (t = this.parent) ||
                      void 0 === t ||
                      t.children.delete(this),
                    (this.instance = void 0),
                    $o.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  var e;
                  return (
                    this.isAnimationBlocked ||
                    (null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  var e;
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    null === (e = this.nodes) || void 0 === e || e.forEach(Mf),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e;
                  return null === (e = this.options.visualElement) ||
                    void 0 === e
                    ? void 0
                    : e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  if (this.root.isUpdateBlocked())
                    null === (t = (e = this.options).onExitComplete) ||
                      void 0 === t ||
                      t.call(e);
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var a = 0; a < this.path.length; a++) {
                      var i = this.path[a];
                      (i.shouldResetTransform = !0),
                        i.updateScroll("snapshot"),
                        i.options.layoutRoot && i.willUpdate(!1);
                    }
                    var o = this.options,
                      s = o.layoutId,
                      u = o.layout;
                    (void 0 !== s || u) &&
                      ((this.prevTransformTemplateValue =
                        null === (n = this.getTransformTemplate()) ||
                        void 0 === n
                          ? void 0
                          : n(this.latestValues, "")),
                      this.updateSnapshot(),
                      r && this.notifyListeners("willUpdate"));
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(Of)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(qf),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(Rf),
                    this.nodes.forEach(jf),
                    this.nodes.forEach(Cf),
                    this.clearAllSnapshots(),
                    Jo.update(),
                    Jo.preRender(),
                    Jo.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(Ff), this.sharedNodes.forEach(If);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  Ko.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  Ko.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var e;
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll();
                      }
                    var n = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox),
                      null === (e = this.options.visualElement) ||
                        void 0 === e ||
                        e.notify(
                          "LayoutMeasure",
                          this.layout.layoutBox,
                          null === n || void 0 === n ? void 0 : n.layoutBox
                        );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  var e;
                  if (i) {
                    var t = this.isLayoutDirty || this.shouldResetTransform,
                      n = this.projectionDelta && !yf(this.projectionDelta),
                      r =
                        null === (e = this.getTransformTemplate()) ||
                        void 0 === e
                          ? void 0
                          : e(this.latestValues, ""),
                      a = r !== this.prevTransformTemplateValue;
                    t &&
                      (n || Ql(this.latestValues) || a) &&
                      (i(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this.measurePageBox(),
                    n = this.removeElementScroll(t);
                  return (
                    e && (n = this.removeTransform(n)),
                    Xf(n),
                    {
                      animationId: this.root.animationId,
                      measuredBox: t,
                      layoutBox: n,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e)
                    return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (rc(t.x, n.offset.x), rc(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  df(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      i = r.options;
                    if (r !== this.root && a && i.layoutScroll) {
                      if (a.isRoot) {
                        df(t, e);
                        var o = this.root.scroll;
                        o && (rc(t.x, -o.offset.x), rc(t.y, -o.offset.y));
                      }
                      rc(t.x, a.offset.x), rc(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  df(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      sc(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      Ql(a.latestValues) && sc(n, a.latestValues);
                  }
                  return Ql(this.latestValues) && sc(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t,
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  df(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    if (a.instance && Ql(a.latestValues)) {
                      Gl(a.latestValues) && a.updateSnapshot();
                      var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                      df(i, a.measurePageBox()),
                        Af(
                          n,
                          a.latestValues,
                          null === (t = a.snapshot) || void 0 === t
                            ? void 0
                            : t.layoutBox,
                          i
                        );
                    }
                  }
                  return Ql(this.latestValues) && Af(n, this.latestValues), n;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    (this.isProjectionDirty = !0),
                    this.root.scheduleUpdateProjection();
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = Qe(
                    Qe(Qe({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t = this.getLead();
                  if (
                    (this.isProjectionDirty ||
                      (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = t.isTransformDirty),
                    this.isProjectionDirty ||
                      this.attemptToResolveRelativeTarget)
                  ) {
                    var n = this.options,
                      r = n.layout,
                      a = n.layoutId;
                    if (this.layout && (r || a)) {
                      if (!this.targetDelta && !this.relativeTarget) {
                        var i = this.getClosestProjectingParent();
                        i && i.layout
                          ? ((this.relativeParent = i),
                            (this.relativeTarget = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.relativeTargetOrigin = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            Il(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              i.layout.layoutBox
                            ),
                            df(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      var o, s, u;
                      if (this.relativeTarget || this.targetDelta)
                        if (
                          (this.target ||
                            ((this.target = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.targetWithTransforms = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            })),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          (null === (e = this.relativeParent) || void 0 === e
                            ? void 0
                            : e.target)
                            ? ((o = this.target),
                              (s = this.relativeTarget),
                              (u = this.relativeParent.target),
                              Vl(o.x, s.x, u.x),
                              Vl(o.y, s.y, u.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : df(this.target, this.layout.layoutBox),
                              tc(this.target, this.targetDelta))
                            : df(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var l = this.getClosestProjectingParent();
                          l &&
                          Boolean(l.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !l.options.layoutScroll &&
                          l.target
                            ? ((this.relativeParent = l),
                              (this.relativeTarget = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              (this.relativeTargetOrigin = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              Il(
                                this.relativeTargetOrigin,
                                this.target,
                                l.target
                              ),
                              df(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !Gl(this.parent.latestValues) &&
                    !Zl(this.parent.latestValues)
                  )
                    return (this.parent.relativeTarget ||
                      this.parent.targetDelta ||
                      this.parent.options.layoutRoot) &&
                      this.parent.layout
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.isProjectionDirty,
                    n = this.isTransformDirty;
                  this.isProjectionDirty = this.isTransformDirty = !1;
                  var r = this.getLead(),
                    a = Boolean(this.resumingFrom) || this !== r,
                    i = !0;
                  if ((t && (i = !1), a && n && (i = !1), !i)) {
                    var o = this.options,
                      s = o.layout,
                      u = o.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (null === (e = this.parent) || void 0 === e
                          ? void 0
                          : e.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (s || u))
                    ) {
                      df(this.layoutCorrected, this.layout.layoutBox),
                        (function (e, t, n) {
                          var r,
                            a,
                            i =
                              arguments.length > 3 &&
                              void 0 !== arguments[3] &&
                              arguments[3],
                            o = n.length;
                          if (o) {
                            var s, u;
                            t.x = t.y = 1;
                            for (var l = 0; l < o; l++)
                              (u = (s = n[l]).projectionDelta),
                                "contents" !==
                                  (null ===
                                    (a =
                                      null === (r = s.instance) || void 0 === r
                                        ? void 0
                                        : r.style) || void 0 === a
                                    ? void 0
                                    : a.display) &&
                                  (i &&
                                    s.options.layoutScroll &&
                                    s.scroll &&
                                    s !== s.root &&
                                    sc(e, {
                                      x: -s.scroll.offset.x,
                                      y: -s.scroll.offset.y,
                                    }),
                                  u &&
                                    ((t.x *= u.x.scale),
                                    (t.y *= u.y.scale),
                                    tc(e, u)),
                                  i &&
                                    Ql(s.latestValues) &&
                                    sc(e, s.latestValues));
                            (t.x = nc(t.x)), (t.y = nc(t.y));
                          }
                        })(this.layoutCorrected, this.treeScale, this.path, a);
                      var l = r.target;
                      if (l) {
                        this.projectionDelta ||
                          ((this.projectionDelta = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }),
                          (this.projectionDeltaWithTransform = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }));
                        var c = this.treeScale.x,
                          f = this.treeScale.y,
                          d = this.projectionTransform;
                        Dl(
                          this.projectionDelta,
                          this.layoutCorrected,
                          l,
                          this.latestValues
                        ),
                          (this.projectionTransform = kf(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === d &&
                            this.treeScale.x === c &&
                            this.treeScale.y === f) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", l));
                      }
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  null === (t = (e = this.options).scheduleRender) ||
                    void 0 === t ||
                    t.call(e),
                    r &&
                      (null === (n = this.getStack()) ||
                        void 0 === n ||
                        n.scheduleRender()),
                    this.resumingFrom &&
                      !this.resumingFrom.instance &&
                      (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i = this.snapshot,
                    o =
                      (null === i || void 0 === i ? void 0 : i.latestValues) ||
                      {},
                    s = Qe({}, this.latestValues),
                    u = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    };
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !a);
                  var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    c =
                      (null === i || void 0 === i ? void 0 : i.source) !==
                      (null === (t = this.layout) || void 0 === t
                        ? void 0
                        : t.source),
                    f =
                      ((null === (n = this.getStack()) || void 0 === n
                        ? void 0
                        : n.members.length) || 0) <= 1,
                    d = Boolean(
                      c &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Hf)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (t) {
                      var n,
                        a = t / 1e3;
                      zf(u.x, e.x, a),
                        zf(u.y, e.y, a),
                        r.setTargetDelta(u),
                        r.relativeTarget &&
                          r.relativeTargetOrigin &&
                          r.layout &&
                          (null === (n = r.relativeParent) || void 0 === n
                            ? void 0
                            : n.layout) &&
                          (Il(
                            l,
                            r.layout.layoutBox,
                            r.relativeParent.layout.layoutBox
                          ),
                          Bf(r.relativeTarget, r.relativeTargetOrigin, l, a)),
                        c &&
                          ((r.animationValues = s),
                          of(s, o, r.latestValues, a, d, f)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender(),
                        (r.animationProgress = a);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t,
                    n,
                    r = this;
                  this.notifyListeners("animationStart"),
                    null === (t = this.currentAnimation) ||
                      void 0 === t ||
                      t.stop(),
                    this.resumingFrom &&
                      (null === (n = this.resumingFrom.currentAnimation) ||
                        void 0 === n ||
                        n.stop()),
                    this.pendingAnimation &&
                      ($o.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = Ko.update(function () {
                      (Wa.hasAnimatedSinceResize = !0),
                        (r.currentAnimation = (function (e, t) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            r = ii(e) ? e : ls(e);
                          return (
                            r.start(ll("", r, t, n)),
                            {
                              stop: function () {
                                return r.stop();
                              },
                              isAnimating: function () {
                                return r.isAnimating();
                              },
                            }
                          );
                        })(
                          0,
                          1e3,
                          Qe(
                            Qe({}, e),
                            {},
                            {
                              onUpdate: function (t) {
                                var n;
                                r.mixTargetDelta(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: function () {
                                var t;
                                null === (t = e.onComplete) ||
                                  void 0 === t ||
                                  t.call(e),
                                  r.completeAnimation();
                              },
                            }
                          )
                        )),
                        r.resumingFrom &&
                          (r.resumingFrom.currentAnimation =
                            r.currentAnimation),
                        (r.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  var e;
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0)),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  var e;
                  this.currentAnimation &&
                    (null === (e = this.mixTargetDelta) ||
                      void 0 === e ||
                      e.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      Gf(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      };
                      var i = Ol(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + i);
                      var o = Ol(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    df(t, n),
                      sc(t, a),
                      Dl(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  var n, r, a;
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new wf()),
                    this.sharedNodes.get(e).add(t),
                    t.promote({
                      transition:
                        null === (n = t.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.transition,
                      preserveFollowOpacity:
                        null ===
                          (a =
                            null === (r = t.options.initialPromotionConfig) ||
                            void 0 === r
                              ? void 0
                              : r.shouldPreserveFollowOpacity) || void 0 === a
                          ? void 0
                          : a.call(r, t),
                    });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < _f.length; a++) {
                        var i = "rotate" + _f[a];
                        n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
                      }
                      for (var o in (null === e || void 0 === e || e.render(),
                      r))
                        e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var a = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = to(n.pointerEvents) || ""),
                      (r.transform = a ? a(this.latestValues, "") : "none"),
                      r
                    );
                  var i = this.getLead();
                  if (!this.projectionDelta || !this.layout || !i.target) {
                    var o = {};
                    return (
                      this.options.layoutId &&
                        ((o.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (o.pointerEvents = to(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !Ql(this.latestValues) &&
                        ((o.transform = a ? a({}, "") : "none"),
                        (this.hasProjected = !1)),
                      o
                    );
                  }
                  var s = i.animationValues || i.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = kf(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      s
                    )),
                    a && (r.transform = a(s, r.transform));
                  var u = this.projectionDelta,
                    l = u.x,
                    c = u.y;
                  for (var f in ((r.transformOrigin = ""
                    .concat(100 * l.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  i.animationValues
                    ? (r.opacity =
                        i === this
                          ? null !==
                              (t =
                                null !== (e = s.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : s.opacityExit)
                    : (r.opacity =
                        i === this
                          ? void 0 !== s.opacity
                            ? s.opacity
                            : ""
                          : void 0 !== s.opacityExit
                          ? s.opacityExit
                          : 0),
                  ti))
                    if (void 0 !== s[f]) {
                      var d = ti[f],
                        p = d.correct,
                        h = d.applyTo,
                        v = "none" === r.transform ? s[f] : p(s[f], i);
                      if (h)
                        for (var m = h.length, A = 0; A < m; A++) r[h[A]] = v;
                      else r[f] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        i === this ? to(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(Of),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function jf(e) {
        e.updateLayout();
      }
      function Cf(e) {
        var t,
          n,
          r,
          a =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var i = e.layout,
            o = i.layoutBox,
            s = i.measuredBox,
            u = e.options.animationType,
            l = a.source !== e.layout.source;
          "size" === u
            ? ql(function (e) {
                var t = l ? a.measuredBox[e] : a.layoutBox[e],
                  n = Ol(t);
                (t.min = o[e].min), (t.max = t.min + n);
              })
            : Gf(u, a.layoutBox, o) &&
              ql(function (e) {
                var t = l ? a.measuredBox[e] : a.layoutBox[e],
                  n = Ol(o[e]);
                t.max = t.min + n;
              });
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          Dl(c, o, a.layoutBox);
          var f = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          l
            ? Dl(f, e.applyTransform(s, !0), a.measuredBox)
            : Dl(f, o, a.layoutBox);
          var d = !yf(c),
            p = !1;
          if (!e.resumeFrom) {
            var h = e.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
              var v = h.snapshot,
                m = h.layout;
              if (v && m) {
                var A = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Il(A, a.layoutBox, v.layoutBox);
                var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Il(g, o, m.layoutBox),
                  bf(A, g) || (p = !0),
                  h.options.layoutRoot &&
                    ((e.relativeTarget = g),
                    (e.relativeTargetOrigin = A),
                    (e.relativeParent = h));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: a,
            delta: f,
            layoutDelta: c,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          e.isLead() &&
            (null === (r = (n = e.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        e.options.transition = void 0;
      }
      function Pf(e) {
        e.isProjectionDirty ||
          (e.isProjectionDirty = Boolean(
            e.parent && e.parent.isProjectionDirty
          )),
          e.isTransformDirty ||
            (e.isTransformDirty = Boolean(
              e.parent && e.parent.isTransformDirty
            ));
      }
      function Ff(e) {
        e.clearSnapshot();
      }
      function Of(e) {
        e.clearMeasurements();
      }
      function Rf(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function Lf(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function Df(e) {
        e.resolveTargetDelta();
      }
      function Vf(e) {
        e.calcProjection();
      }
      function Mf(e) {
        e.resetRotation();
      }
      function If(e) {
        e.removeLeadSnapshot();
      }
      function zf(e, t, n) {
        (e.translate = Zs(t.translate, 0, n)),
          (e.scale = Zs(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function Uf(e, t, n, r) {
        (e.min = Zs(t.min, n.min, r)), (e.max = Zs(t.max, n.max, r));
      }
      function Bf(e, t, n, r) {
        Uf(e.x, t.x, n.x, r), Uf(e.y, t.y, n.y, r);
      }
      function Hf(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Wf = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function qf(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function Yf(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Xf(e) {
        Yf(e.x), Yf(e.y);
      }
      function Gf(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !Rl(xf(t), xf(n), 0.2))
        );
      }
      var Qf = Nf({
          attachResizeListener: function (e, t) {
            return uo(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        Zf = { current: void 0 },
        Kf = Nf({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Zf.current) {
              var e = new Qf(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Zf.current = e);
            }
            return Zf.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        $f = Qe(Qe(Qe(Qe({}, kl), Mo), pc), ef),
        Jf = $a(function (e, t) {
          return (function (e, t, n, r, a) {
            var i = t.forwardMotionProps,
              o = void 0 !== i && i;
            return Qe(
              Qe({}, ei(e) ? oo : so),
              {},
              {
                preloadedFeatures: n,
                useRender: Yi(o),
                createVisualElement: r,
                projectionNodeConstructor: a,
                Component: e,
              }
            );
          })(e, t, $f, Xc, Kf);
        });
      var ed = {
          hidden: { x: "100%" },
          show: {
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              type: "spring",
              damping: 20,
              delayChildren: 1.3,
              staggerChildren: 0.3,
            },
          },
          exit: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
        },
        td = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.4,
              type: "spring",
              damping: 15,
              delayChildren: 0.2,
              staggerChildren: 0.3,
            },
          },
          exit: { opacity: 1, transition: { ease: "easeIn" } },
        },
        nd = {
          hidden: { y: "-100%" },
          show: {
            y: "0%",
            ease: "easeInOut",
            transition: { duration: 0.3, delay: 0.4, delayChildren: 0.5 },
          },
        },
        rd = {
          hidden: { y: "100%" },
          show: { y: 0, transition: { duration: 0.5, ease: "easeIn" } },
        },
        ad = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.3 },
          },
        },
        id = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
        },
        od = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delayChildren: 1.6 } },
        },
        sd = {
          hidden: { y: "10%", opacity: 0, scale: 2.5 },
          show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        },
        ud = {
          hidden: { opacity: 0, scale: 2.5 },
          show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: 1.6, duration: 0.4, ease: "easeInOut" },
          },
        },
        ld = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              bounce: 0.25,
              delayChildren: 0.2,
              staggerChildren: 0.5,
            },
          },
        },
        cd = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.8 } },
        },
        fd = {
          hidden: { opacity: 0, scale: 2.5 },
          show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        },
        dd = {
          hidden: { opacity: 0, scale: 2.5 },
          show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: 1.3, duration: 0.4, ease: "easeInOut" },
          },
        },
        pd = {
          hidden: { opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
          },
          hover: { scale: 1.25 },
          tap: { scale: 0.95 },
        },
        hd = {
          hidden: { y: "-100%" },
          show: {
            y: "0%",
            ease: "easeInOut",
            transition: {
              duration: 0.2,
              delay: 0.4,
              type: "spring",
              damping: 14,
              delayChildren: 0.5,
            },
          },
        },
        vd = {
          hidden: { y: "100%" },
          show: {
            y: "0%",
            ease: "easeInOut",
            transition: {
              duration: 0.2,
              delay: 0.4,
              type: "spring",
              damping: 14,
              delayChildren: 0.5,
            },
          },
        },
        md = {
          hidden: { x: "100%" },
          show: {
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            },
          },
        },
        Ad = {
          hidden: { x: "100%" },
          show: {
            x: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            },
          },
          hover: {
            x: "0.5%",
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 5,
              Infinity: !0,
              repeat: 1 / 0,
            },
          },
          exit: { x: "-200%" },
        },
        gd = {
          show: {
            scale: [1.1, 1, 1.1],
            x: ["0%", "10%", "0%"],
            y: ["0%", "10%", "0%"],
            transition: { ease: "linear", duration: 3, repeat: 1 / 0 },
          },
          tap: { scale: 0.9, transition: { duration: 0.2 } },
        },
        yd = {
          show: {
            scale: [1.1, 1, 1.1],
            transition: { ease: "linear", duration: 1.5 },
          },
          hover: { scale: 1.3 },
          tap: { scale: 0.9, transition: { duration: 0.1 } },
          drag: { top: -10, left: -10, right: 10, bottom: 10 },
        },
        bd = { tap: { scale: 0.95 }, hover: { scale: 1.1 } },
        xd = { tap: { scale: 0.95 }, hover: { scale: 1.03 } },
        wd = {
          hover: {
            x: "13%",
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 5,
              Infinity: !0,
              repeat: 1 / 0,
            },
          },
        },
        kd = {
          hidden: { x: "-100%", opacity: 0 },
          show: {
            x: "0%",
            opacity: 1,
            transition: { delay: 0.9, type: "spring", damping: 10 },
          },
        },
        Sd = {
          hidden: { x: "500%" },
          show: { x: "0%", transition: { delay: 0.5, type: "spring" } },
          exit: { opacity: 0 },
          hover: { scale: 1.2 },
          tap: { scale: 0.8 },
        };
      function Ed() {
        var e,
          t,
          n = Hn(),
          r = n.error,
          a = n.isLoading,
          i = n.setEditMode,
          o = Yn(),
          s = o.user,
          u = o.updateUser,
          l = o.tempoUploadImage,
          c = o.setUpdateUser,
          f = o.editUser,
          d = Sa(),
          p = d.register,
          h = d.handleSubmit,
          v = d.reset,
          m = d.formState.errors;
        return (0, zn.jsxs)(Jf.div, {
          variants: td,
          initial: "hidden",
          animate: "show",
          exit: "exit",
          className: "edit-form dashboard",
          children: [
            (0, zn.jsxs)(Jf.form, {
              variants: sd,
              exit: { opacity: 0 },
              className: "edit-form__container",
              onSubmit: h(
                (function () {
                  var e = $e(
                    Ze().mark(function e(t) {
                      return Ze().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                "" === t.name && (t.name = s.name),
                                (e.next = 3),
                                f(t)
                              );
                            case 3:
                              i(!1), v();
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              children: [
                (0, zn.jsx)(Jf.div, {
                  className: "edit__top",
                  children: (0, zn.jsx)("div", {
                    className: "edit__title",
                    children: "EDIT PROFILE",
                  }),
                }),
                (0, zn.jsx)("img", {
                  className: "edit-image",
                  src: (null === u || void 0 === u ? void 0 : u.image) || Ea,
                  alt: "profile-pic",
                }),
                (0, zn.jsx)(
                  "input",
                  Qe(
                    Qe(
                      { className: "edit-input__input" },
                      p("image", {
                        onChange: function (e) {
                          l(e.target.files);
                        },
                      })
                    ),
                    {},
                    { type: "file", accept: "image/png, image/jpeg" }
                  )
                ),
                (0, zn.jsxs)("label", {
                  className: "edit__task-label",
                  htmlFor: "edit-name",
                  children: [
                    (0, zn.jsx)("span", { children: " Username" }),
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              (null !== (e = m.name) &&
                                void 0 !== e &&
                                e.message) ||
                              r
                                ? "form__input invalid"
                                : "form__input",
                          },
                          p("name", {
                            onChange: function (e) {
                              c(function (t) {
                                return Qe(
                                  Qe({}, t),
                                  {},
                                  { name: e.target.value }
                                );
                              });
                            },
                            minLength: {
                              value: 3,
                              message: "Minimum of 3 characters",
                            },
                            maxLength: {
                              value: 8,
                              message: "Max 8 characters",
                            },
                          })
                        ),
                        {},
                        {
                          placeholder: "Input username...",
                          defaultValue: u.name,
                        }
                      )
                    ),
                  ],
                }),
                (0, zn.jsxs)("div", {
                  className: "edit-buttons",
                  children: [
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "edit__submit",
                      type: "submit",
                      disabled: !!a,
                      children: a ? "LOADING..." : "EDIT",
                    }),
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "edit__exit",
                      onClick: function (e) {
                        e.preventDefault(), i(!1);
                      },
                      children: "CANCEL",
                    }),
                  ],
                }),
              ],
            }),
            m.name &&
              (0, zn.jsx)("div", {
                className: "edit__error",
                children: (0, zn.jsx)("div", {
                  children:
                    null === (t = m.name) || void 0 === t ? void 0 : t.message,
                }),
              }),
          ],
        });
      }
      function _d() {
        var e = (0, t.useRef)(!1);
        return (
          Ca(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      var Td = (function (e) {
        g(n, e);
        var t = w(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return (
          m(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function (e) {
                var t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                  var n = this.props.sizeRef.current;
                  (n.height = t.offsetHeight || 0),
                    (n.width = t.offsetWidth || 0),
                    (n.top = t.offsetTop),
                    (n.left = t.offsetLeft);
                }
                return null;
              },
            },
            { key: "componentDidUpdate", value: function () {} },
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(t.Component);
      function Nd(e) {
        var n = e.children,
          r = e.isPresent,
          a = (0, t.useId)(),
          i = (0, t.useRef)(null),
          o = (0, t.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, t.useInsertionEffect)(
            function () {
              var e = o.current,
                t = e.width,
                n = e.height,
                s = e.top,
                u = e.left;
              if (!r && i.current && t && n) {
                i.current.dataset.motionPopId = a;
                var l = document.createElement("style");
                return (
                  document.head.appendChild(l),
                  l.sheet &&
                    l.sheet.insertRule(
                      '\n          [data-motion-pop-id="'
                        .concat(
                          a,
                          '"] {\n            position: absolute !important;\n            width: '
                        )
                        .concat(t, "px !important;\n            height: ")
                        .concat(n, "px !important;\n            top: ")
                        .concat(s, "px !important;\n            left: ")
                        .concat(u, "px !important;\n          }\n        ")
                    ),
                  function () {
                    document.head.removeChild(l);
                  }
                );
              }
            },
            [r]
          ),
          t.createElement(
            Td,
            { isPresent: r, childRef: i, sizeRef: o },
            t.cloneElement(n, { ref: i })
          )
        );
      }
      var jd = function (e) {
        var n = e.children,
          r = e.initial,
          a = e.isPresent,
          i = e.onExitComplete,
          o = e.custom,
          s = e.presenceAffectsLayout,
          u = e.mode,
          l = Ha(Cd),
          c = (0, t.useId)(),
          f = (0, t.useMemo)(
            function () {
              return {
                id: c,
                initial: r,
                isPresent: a,
                custom: o,
                onExitComplete: function (e) {
                  l.set(e, !0);
                  var t,
                    n = E(l.values());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      if (!t.value) return;
                    }
                  } catch (r) {
                    n.e(r);
                  } finally {
                    n.f();
                  }
                  i && i();
                },
                register: function (e) {
                  return (
                    l.set(e, !1),
                    function () {
                      return l.delete(e);
                    }
                  );
                },
              };
            },
            s ? void 0 : [a]
          );
        return (
          (0, t.useMemo)(
            function () {
              l.forEach(function (e, t) {
                return l.set(t, !1);
              });
            },
            [a]
          ),
          t.useEffect(
            function () {
              !a && !l.size && i && i();
            },
            [a]
          ),
          "popLayout" === u && (n = t.createElement(Nd, { isPresent: a }, n)),
          t.createElement(Na.Provider, { value: f }, n)
        );
      };
      function Cd() {
        return new Map();
      }
      var Pd = function (e) {
        return e.key || "";
      };
      var Fd = function (e) {
        var n = e.children,
          r = e.custom,
          a = e.initial,
          i = void 0 === a || a,
          o = e.onExitComplete,
          s = e.exitBeforeEnter,
          u = e.presenceAffectsLayout,
          c = void 0 === u || u,
          d = e.mode,
          p = void 0 === d ? "sync" : d;
        s && (p = "wait");
        var h = (function () {
            var e = _d(),
              n = l((0, t.useState)(0), 2),
              r = n[0],
              a = n[1],
              i = (0, t.useCallback)(
                function () {
                  e.current && a(r + 1);
                },
                [r]
              );
            return [
              (0, t.useCallback)(
                function () {
                  return Ko.postRender(i);
                },
                [i]
              ),
              r,
            ];
          })(),
          v = l(h, 1)[0],
          m = (0, t.useContext)(Ya).forceRender;
        m && (v = m);
        var A = _d(),
          g = (function (e) {
            var n = [];
            return (
              t.Children.forEach(e, function (e) {
                (0, t.isValidElement)(e) && n.push(e);
              }),
              n
            );
          })(n),
          y = g,
          b = new Set(),
          x = (0, t.useRef)(y),
          w = (0, t.useRef)(new Map()).current,
          k = (0, t.useRef)(!0);
        if (
          (Ca(function () {
            (k.current = !1),
              (function (e, t) {
                e.forEach(function (e) {
                  var n = Pd(e);
                  t.set(n, e);
                });
              })(g, w),
              (x.current = y);
          }),
          ko(function () {
            (k.current = !0), w.clear(), b.clear();
          }),
          k.current)
        )
          return t.createElement(
            t.Fragment,
            null,
            y.map(function (e) {
              return t.createElement(
                jd,
                {
                  key: Pd(e),
                  isPresent: !0,
                  initial: !!i && void 0,
                  presenceAffectsLayout: c,
                  mode: p,
                },
                e
              );
            })
          );
        y = f(y);
        for (
          var S = x.current.map(Pd), E = g.map(Pd), _ = S.length, T = 0;
          T < _;
          T++
        ) {
          var N = S[T];
          -1 === E.indexOf(N) && b.add(N);
        }
        return (
          "wait" === p && b.size && (y = []),
          b.forEach(function (e) {
            if (-1 === E.indexOf(e)) {
              var n = w.get(e);
              if (n) {
                var a = S.indexOf(e);
                y.splice(
                  a,
                  0,
                  t.createElement(
                    jd,
                    {
                      key: Pd(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        w.delete(e), b.delete(e);
                        var t = x.current.findIndex(function (t) {
                          return t.key === e;
                        });
                        if ((x.current.splice(t, 1), !b.size)) {
                          if (((x.current = g), !1 === A.current)) return;
                          v(), o && o();
                        }
                      },
                      custom: r,
                      presenceAffectsLayout: c,
                      mode: p,
                    },
                    n
                  )
                );
              }
            }
          }),
          (y = y.map(function (e) {
            var n = e.key;
            return b.has(n)
              ? e
              : t.createElement(
                  jd,
                  {
                    key: Pd(e),
                    isPresent: !0,
                    presenceAffectsLayout: c,
                    mode: p,
                  },
                  e
                );
          })),
          t.createElement(
            t.Fragment,
            null,
            b.size
              ? y
              : y.map(function (e) {
                  return (0, t.cloneElement)(e);
                })
          )
        );
      };
      function Od() {
        var e = Hn(),
          n = e.getQuote,
          r = e.quote,
          a = e.author,
          i = e.setIsLoading,
          o = e.editMode,
          s = e.setEditMode,
          u = Yn(),
          l = u.logoutUser,
          c = u.setUpdateUser,
          f = u.isUserLoggedIn,
          d = u.user,
          p = Zn(),
          h = p.getAllData,
          v = p.todos,
          m = p.notes,
          A = p.pomodoros,
          g = ye();
        return (
          (0, t.useEffect)(function () {
            i(!0), f ? (n(), h(), s(!1)) : (s(!1), g("/")), i(!1);
          }, []),
          (0, zn.jsxs)(Jf.div, {
            variants: td,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            className: "dashboard-page",
            children: [
              (0, zn.jsx)("div", {
                className: "dashboard__nav",
                children: (0, zn.jsx)("div", {
                  className: "nav-2  ",
                  children: (0, zn.jsx)(Jf.div, {
                    variants: pd,
                    initial: "hidden",
                    animate: "show",
                    exit: "exit",
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "nav-2__close ",
                    onClick: (function () {
                      var e = $e(
                        Ze().mark(function e(t) {
                          return Ze().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  t.preventDefault(), l(), g("/");
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    children: "LOG OUT",
                  }),
                }),
              }),
              (0, zn.jsxs)(Jf.div, {
                variants: hd,
                className: "dashboard__header",
                children: [
                  (0, zn.jsxs)(Jf.div, {
                    variants: pd,
                    className: "header__image-container",
                    children: [
                      (0, zn.jsx)("img", {
                        className: "header__image",
                        src:
                          (null === d || void 0 === d ? void 0 : d.image) || Ea,
                        alt: "profile-pic",
                      }),
                      (0, zn.jsx)(Jf.button, {
                        variants: bd,
                        whileHover: "hover",
                        whileTap: "tap",
                        className: "header__image-edit",
                        onClick: function (e) {
                          e.preventDefault(), c(d), s(!0);
                        },
                        children: "EDIT PROFILE",
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: pd,
                    className: "header__text-container",
                    children: [
                      (0, zn.jsxs)("div", {
                        className: "text__welcome",
                        children: [
                          "hi, ",
                          (null === d || void 0 === d ? void 0 : d.name) ||
                            "user",
                        ],
                      }),
                      (0, zn.jsxs)("div", {
                        className: "text__quotes-container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "quotes-quote",
                            children: r,
                          }),
                          (0, zn.jsxs)("div", {
                            className: "quotes-author",
                            children: ["-", a],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, zn.jsx)(Jf.div, {
                    variants: gd,
                    animate: "show",
                    whileTap: "tap",
                    drag: !0,
                    dragConstraints: {
                      top: -10,
                      left: -10,
                      right: 10,
                      bottom: 10,
                    },
                    className: "header__version-container",
                    children: (0, zn.jsx)("div", {
                      className: "version__text",
                      children: "v1",
                    }),
                  }),
                ],
              }),
              (0, zn.jsxs)(Jf.div, {
                variants: md,
                className: "dashboard__body",
                children: [
                  (0, zn.jsxs)(Jf.div, {
                    variants: wd,
                    whileHover: "hover",
                    onClick: function () {
                      return g("/note");
                    },
                    className: "body__mode-container notes",
                    children: [
                      (0, zn.jsxs)("div", {
                        className: "mode__link notes",
                        children: [
                          "notes",
                          (0, zn.jsx)(Jf.div, {
                            variants: kd,
                            initial: "hidden",
                            animate: "show",
                            className: "mode__link-highlight",
                          }),
                        ],
                      }),
                      (0, zn.jsxs)("div", {
                        className: "mode__total notes",
                        children: [
                          " ",
                          "(".concat(
                            null === m || void 0 === m ? void 0 : m.length,
                            ")"
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: wd,
                    whileHover: "hover",
                    onClick: function () {
                      return g("/todo");
                    },
                    className: "body__mode-container todo",
                    children: [
                      (0, zn.jsxs)("div", {
                        className: "mode__link todo",
                        children: [
                          "todo",
                          (0, zn.jsx)(Jf.div, {
                            variants: kd,
                            initial: "hidden",
                            animate: "show",
                            className: "mode__link-highlight",
                          }),
                        ],
                      }),
                      (0, zn.jsx)("div", {
                        className: "mode__total todo",
                        children: "(".concat(
                          null === v || void 0 === v ? void 0 : v.length,
                          ")"
                        ),
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: wd,
                    whileHover: "hover",
                    onClick: function () {
                      return g("/pomodoro");
                    },
                    className: "body__mode-container pomo",
                    children: [
                      (0, zn.jsxs)("div", {
                        className: "mode__link pomo",
                        children: [
                          "pomo",
                          (0, zn.jsx)(Jf.div, {
                            variants: kd,
                            initial: "hidden",
                            animate: "show",
                            className: "mode__link-highlight",
                          }),
                        ],
                      }),
                      (0, zn.jsxs)("div", {
                        className: "mode__total pomo",
                        children: [
                          "(".concat(
                            null === A || void 0 === A ? void 0 : A.length,
                            ")"
                          ),
                          " ",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, zn.jsxs)(Jf.div, {
                variants: vd,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "dashboard__footer",
                children: [
                  (0, zn.jsxs)(Jf.div, {
                    variants: pd,
                    className: "footer__graph-container",
                    children: [
                      (0, zn.jsx)("div", {
                        className: "graph__item notes",
                        style: {
                          flexGrow:
                            null === m || void 0 === m ? void 0 : m.length,
                        },
                      }),
                      (0, zn.jsx)("div", {
                        className: "graph__item todo",
                        style: {
                          flexGrow:
                            null === v || void 0 === v ? void 0 : v.length,
                        },
                      }),
                      (0, zn.jsx)("div", {
                        className: "graph__item pomo",
                        style: {
                          flexGrow:
                            null === A || void 0 === A ? void 0 : A.length,
                        },
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: pd,
                    className: "footer__legend-container",
                    children: [
                      (0, zn.jsxs)("div", {
                        className: "legend__item-container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "item__disp-text notes",
                            children: "notes",
                          }),
                          (0, zn.jsx)("div", {
                            className: "item__color notes",
                          }),
                        ],
                      }),
                      (0, zn.jsxs)("div", {
                        className: "legend__item-container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "item__disp-text todo",
                            children: "todos",
                          }),
                          (0, zn.jsx)("div", { className: "item__color todo" }),
                        ],
                      }),
                      (0, zn.jsxs)("div", {
                        className: "legend__item-container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "item__disp-text pomo",
                            children: "pomo",
                          }),
                          (0, zn.jsx)("div", { className: "item__color pomo" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, zn.jsx)(Fd, { children: o && (0, zn.jsx)(Ed, {}) }),
            ],
          })
        );
      }
      function Rd(e) {
        var t = e.note,
          n = Zn().deleteNote,
          r = Hn().setFakeId,
          a = ye();
        return (0, zn.jsxs)(
          Jf.div,
          {
            variants: Ad,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            whileHover: "hover",
            className: t.favorite ? "note-item fave" : "note-item",
            children: [
              (0, zn.jsx)("div", {
                onClick: function () {
                  r(!1), a("/note/".concat(t._id));
                },
                className: "note-item__title",
                children: t.title,
              }),
              (0, zn.jsx)("div", {
                onClick: function () {
                  r(!1), a("/note/".concat(t._id));
                },
                className: "note-item__paragraph",
                children: t.notes.substring(0, 30) + "...",
              }),
              (0, zn.jsx)(Jf.button, {
                variants: bd,
                whileHover: "hover",
                whileTap: "tap",
                className: "note-item__delete",
                onClick: function () {
                  n(t._id);
                },
                children: "x",
              }),
            ],
          },
          t._id
        );
      }
      function Ld() {
        var e = Hn(),
          n = e.search,
          r = e.setSearch,
          a = e.setIsLoading,
          i = e.setFavorite,
          o = e.favorite,
          s = e.setFakeId,
          u = Zn(),
          l = u.notes,
          c = u.getAllNote,
          f = u.setSingleNote,
          d = ye(),
          p = (0, t.useRef)("");
        return (
          (0, t.useEffect)(function () {
            a(!0), s(!1), c(), r(""), i(null), f(null), a(!1);
          }, []),
          (0, zn.jsxs)(zn.Fragment, {
            children: [
              (0, zn.jsxs)(Jf.div, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "note-page",
                children: [
                  (0, zn.jsx)("div", {
                    className: "nav-2",
                    children: (0, zn.jsx)(Jf.div, {
                      className: "nav-2__close",
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      onClick: function () {
                        d("/dashboard");
                      },
                      children: "CLOSE",
                    }),
                  }),
                  (0, zn.jsx)("div", {
                    className: "page__title",
                    children: "NOTES",
                  }),
                  (0, zn.jsxs)("form", {
                    className: "filter__container",
                    onSubmit: function (e) {
                      e.preventDefault(), r(p.current);
                    },
                    children: [
                      (0, zn.jsx)("input", {
                        className: "filter__input",
                        placeholder: "Filter...",
                        onChange: function (e) {
                          (p.current = e.target.value),
                            "" === p.current && r("");
                        },
                      }),
                      (0, zn.jsx)(Jf.button, {
                        variants: xd,
                        whileHover: "hover",
                        whileTap: "tap",
                        className: "filter__button",
                        type: "submit",
                        children: "?",
                      }),
                    ],
                  }),
                  (0, zn.jsx)(Jf.div, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "favorite-container",
                    children: (0, zn.jsxs)("label", {
                      htmlFor: "favoriteSingleNote",
                      className: "favorite-label",
                      children: [
                        (0, zn.jsx)("input", {
                          type: "checkbox",
                          className: "favorite-check",
                          id: "favoriteSingleNote",
                          onChange: function (e) {
                            var t = e.target.checked || null;
                            i(t);
                          },
                        }),
                        (0, zn.jsx)("span", {
                          className: "favorite-span",
                          children: "FAVORITES",
                        }),
                      ],
                    }),
                  }),
                  (0, zn.jsx)("br", {}),
                  (0, zn.jsx)(Fd, {
                    mode: "sync",
                    children: l
                      .filter(function (e) {
                        return (
                          e.title.toLowerCase().includes(n.toLowerCase()) ||
                          e.notes.toLowerCase().includes(n.toLowerCase())
                        );
                      })
                      .filter(function (e) {
                        return null === o ? e : e.favorite === o;
                      })
                      .map(function (e) {
                        return (0, zn.jsx)(Rd, { note: e }, e._id);
                      }),
                  }),
                  (0, zn.jsx)("div", { className: "note-footer__empty" }),
                ],
              }),
              (0, zn.jsx)(Jf.button, {
                variants: Sd,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                whileHover: "hover",
                whileTap: "tap",
                className: "note-add-button",
                onClick: function () {
                  return d("/note/new");
                },
                children: "ADD NEW NOTE",
              }),
              (0, zn.jsx)(Jf.footer, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "footer__container",
                children: (0, zn.jsxs)("div", {
                  className: "footer__text",
                  children: ["TOTAL NOTES: ", l.length],
                }),
              }),
            ],
          })
        );
      }
      function Dd() {
        var e,
          n,
          r,
          a,
          i = Hn().setIsLoading,
          o = Zn(),
          s = o.singleNote,
          u = o.isClosing,
          l = o.setIsClosing,
          c = o.isChanged,
          f = o.setIsChanged,
          d = o.updateNote,
          p = Sa({ defaultValues: s }),
          h = p.register,
          v = p.handleSubmit,
          m = p.reset,
          A = p.formState.errors;
        return (
          (0, t.useEffect)(
            function () {
              return i(!0), m(s), i(!1);
            },
            [s]
          ),
          (0, zn.jsxs)("form", {
            className: "note-form",
            onSubmit: v(
              (function () {
                var e = $e(
                  Ze().mark(function e(t) {
                    return Ze().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            i(!0), d(t), i(!1), u && l(!1);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            children: [
              (0, zn.jsx)(
                "input",
                Qe(
                  Qe(
                    { className: "note-form__title" },
                    h("title", {
                      required: "Input title",
                      minLength: {
                        value: 3,
                        message: "Title must have of at least 3 characters",
                      },
                      onChange: function () {
                        return !c && f(!0);
                      },
                    })
                  ),
                  {},
                  { placeholder: "Title..." }
                )
              ),
              (0, zn.jsxs)("div", {
                className: "note-subheader__container",
                children: [
                  (0, zn.jsx)(Jf.div, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    type: "submit",
                    className: "favorite-container",
                    children: (0, zn.jsxs)("label", {
                      htmlFor: "favoriteSingleNote",
                      className: "favorite-label",
                      children: [
                        (0, zn.jsx)(
                          "input",
                          Qe(
                            {
                              type: "checkbox",
                              className: "favorite-check",
                              id: "favoriteSingleNote",
                            },
                            h("favorite", {
                              onChange: function () {
                                return !c && f(!0);
                              },
                            })
                          )
                        ),
                        (0, zn.jsx)("span", {
                          className: "favorite-span",
                          children: "FAVORITE",
                        }),
                      ],
                    }),
                  }),
                  (0, zn.jsx)("div", {
                    className: "form-date",
                    children: new Date(
                      null === s || void 0 === s ? void 0 : s.updatedAt
                    ).toDateString(),
                  }),
                ],
              }),
              (0, zn.jsx)(
                "textarea",
                Qe(
                  { className: "note-form__notes" },
                  h("notes", {
                    required: "Input notes",
                    minLength: {
                      value: 3,
                      message: "Notes must have of at least 3 characters",
                    },
                    onChange: function () {
                      return !c && f(!0);
                    },
                  })
                )
              ),
              (0, zn.jsx)(Jf.button, {
                variants: bd,
                whileHover: "hover",
                whileTap: "tap",
                type: "submit",
                className: c ? "note-form__save unsaved" : "note-form__save",
                children: c ? "SAVE" : "SAVED",
              }),
              (null === (e = A.title) || void 0 === e ? void 0 : e.message) &&
                (0, zn.jsx)("p", {
                  className: "note-error",
                  children:
                    null === (n = A.title) || void 0 === n ? void 0 : n.message,
                }),
              (null === (r = A.notes) || void 0 === r ? void 0 : r.message) &&
                (0, zn.jsx)("p", {
                  className: "note-error",
                  children:
                    null === (a = A.notes) || void 0 === a ? void 0 : a.message,
                }),
            ],
          })
        );
      }
      function Vd() {
        var e = Zn().setIsClosing,
          t = ye();
        return (0, zn.jsx)(Jf.div, {
          variants: td,
          initial: "hidden",
          animate: "show",
          exit: "exit",
          className: "note__module-container",
          children: (0, zn.jsxs)(Jf.div, {
            variants: sd,
            className: "note__module-box",
            children: [
              (0, zn.jsx)("div", {
                className: "note__module-text",
                children: "Leave unsaved progress?",
              }),
              (0, zn.jsx)(Jf.button, {
                variants: xd,
                whileHover: "hover",
                whileTap: "tap",
                className: "module-yes",
                onClick: function () {
                  e(!1), t("/note");
                },
                children: "YES",
              }),
              (0, zn.jsx)(Jf.button, {
                variants: xd,
                whileHover: "hover",
                whileTap: "tap",
                className: "module-no",
                onClick: function () {
                  e(!1);
                },
                children: "NO",
              }),
            ],
          }),
        });
      }
      function Md() {
        var e = xe().id,
          n = Hn(),
          r = n.setIsLoading,
          a = n.fakeId,
          i = Yn().user,
          o = Zn(),
          s = o.getAllNote,
          u = o.setIsClosing,
          l = o.isChanged,
          c = o.setIsChanged,
          f = o.isClosing,
          d = o.getSingleNote,
          p = ye();
        return (
          (0, t.useEffect)(
            function () {
              return c(!1), r(!0), d(e), a && p("/note"), i || s(), r(!1);
            },
            [a]
          ),
          (0, zn.jsxs)(Jf.div, {
            variants: ed,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            className: "note-single-page",
            children: [
              (0, zn.jsx)("div", {
                className: "nav-2",
                children: (0, zn.jsx)(Jf.div, {
                  variants: xd,
                  whileHover: "hover",
                  whileTap: "tap",
                  className: "nav-2__close",
                  onClick: function () {
                    l ? u(!0) : p("/note");
                  },
                  children: "CLOSE",
                }),
              }),
              (0, zn.jsx)(Dd, {}),
              f && (0, zn.jsx)(Vd, {}),
            ],
          })
        );
      }
      function Id() {
        var e,
          n,
          r,
          a,
          i = Hn().setIsLoading,
          o = Zn(),
          s = o.singleNote,
          u = o.isNewNote,
          l = o.isChanged,
          c = o.setIsChanged,
          f = o.updateNote,
          d = o.addNote,
          p = Sa(),
          h = p.register,
          v = p.handleSubmit,
          m = p.reset,
          A = p.formState.errors;
        return (
          (0, t.useEffect)(
            function () {
              return i(!0), m(s), i(!1);
            },
            [s]
          ),
          (0, zn.jsxs)("form", {
            className: "note-form",
            onSubmit: v(
              (function () {
                var e = $e(
                  Ze().mark(function e(t) {
                    return Ze().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            u ? (i(!0), d(t), i(!1)) : (i(!0), f(t), i(!1));
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            children: [
              (0, zn.jsx)(
                "input",
                Qe(
                  Qe(
                    { className: "note-form__title" },
                    h("title", {
                      required: "Input title",
                      minLength: {
                        value: 3,
                        message: "Title must have of at least 3 characters",
                      },
                      onChange: function () {
                        return !l && c(!0);
                      },
                    })
                  ),
                  {},
                  { placeholder: "Title..." }
                )
              ),
              (0, zn.jsxs)("div", {
                className: "note-subheader__container",
                children: [
                  (0, zn.jsx)(Jf.div, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "favorite-container",
                    children: (0, zn.jsxs)("label", {
                      htmlFor: "favoriteSingleNote",
                      className: "favorite-label",
                      children: [
                        (0, zn.jsx)(
                          "input",
                          Qe(
                            {
                              type: "checkbox",
                              className: "favorite-check",
                              id: "favoriteSingleNote",
                            },
                            h("favorite", {
                              onChange: function () {
                                return !l && c(!0);
                              },
                            })
                          )
                        ),
                        (0, zn.jsx)("span", {
                          className: "favorite-span",
                          children: "FAVORITE",
                        }),
                      ],
                    }),
                  }),
                  (0, zn.jsx)("div", {
                    className: "form-date",
                    children: new Date().toDateString(),
                  }),
                ],
              }),
              (0, zn.jsx)(
                "textarea",
                Qe(
                  Qe(
                    { className: "note-form__notes" },
                    h("notes", {
                      required: "Input notes",
                      minLength: {
                        value: 3,
                        message: "Notes must have of at least 3 characters",
                      },
                    })
                  ),
                  {},
                  { placeholder: "Notes..." }
                )
              ),
              " ",
              (0, zn.jsx)(Jf.button, {
                variants: bd,
                whileHover: "hover",
                whileTap: "tap",
                type: "submit",
                className: l ? "note-form__save unsaved" : "note-form__save",
                children: "SAVE",
              }),
              (null === (e = A.title) || void 0 === e ? void 0 : e.message) &&
                (0, zn.jsx)("p", {
                  className: "note-error",
                  children:
                    null === (n = A.title) || void 0 === n ? void 0 : n.message,
                }),
              (null === (r = A.notes) || void 0 === r ? void 0 : r.message) &&
                (0, zn.jsx)("p", {
                  className: "note-error",
                  children:
                    null === (a = A.notes) || void 0 === a ? void 0 : a.message,
                }),
            ],
          })
        );
      }
      function zd() {
        var e = ye(),
          n = Hn().setIsLoading,
          r = Zn(),
          a = r.singleNote,
          i = r.setIsNewNote,
          o = r.setIsChanged,
          s = r.isChanged,
          u = r.setIsClosing,
          l = r.isClosing;
        return (
          (0, t.useEffect)(function () {
            return n(!0), o(!1), i(!a), n(!1);
          }, []),
          (0, zn.jsxs)(Jf.div, {
            variants: ed,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            className: "note-single-page",
            children: [
              (0, zn.jsx)("div", {
                className: "nav-2",
                children: (0, zn.jsx)(Jf.div, {
                  variants: xd,
                  whileHover: "hover",
                  whileTap: "tap",
                  className: "nav-2__close",
                  onClick: function () {
                    s ? u(!0) : e("/note");
                  },
                  children: "CLOSE",
                }),
              }),
              (0, zn.jsx)(Id, {}),
              l && (0, zn.jsx)(Vd, {}),
            ],
          })
        );
      }
      function Ud(e) {
        var t = e.todo,
          n = Hn().setEditMode,
          r = Zn(),
          a = r.finishTodo,
          i = r.deleteTodo,
          o = r.getSingleTodo;
        return (0, zn.jsxs)(
          Jf.div,
          {
            variants: Ad,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            whileHover: "hover",
            className: "todo-item",
            children: [
              (0, zn.jsxs)("div", {
                className: "task-progress__container",
                children: [
                  (0, zn.jsx)("input", {
                    className: "todo-progress",
                    type: "checkbox",
                    name: "status",
                    id: "todoSingleStatus",
                    checked: t.finished,
                    onChange: function () {
                      a(t._id);
                    },
                  }),
                  (0, zn.jsx)("h4", {
                    className: t.favorite ? "todo-task fave" : "todo-task",
                    children: t.task,
                  }),
                ],
              }),
              (0, zn.jsxs)("div", {
                className: "edit-delete__container",
                children: [
                  (0, zn.jsx)(Jf.button, {
                    variants: bd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "edit-button",
                    id: "todoSingleDelete",
                    onClick: function () {
                      n(!0), o(t._id);
                    },
                    children: "EDIT",
                  }),
                  (0, zn.jsx)(Jf.button, {
                    variants: bd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "delete-button",
                    id: "todoSingleDelete",
                    onClick: function () {
                      i(t._id);
                    },
                    children: "X",
                  }),
                ],
              }),
            ],
          },
          t._id
        );
      }
      function Bd() {
        var e = Hn().setEditMode,
          t = Zn(),
          n = t.singleTodo,
          r = t.setSingleTodo,
          a = t.updateTodo;
        return (0, zn.jsx)(Jf.div, {
          variants: td,
          initial: "hidden",
          animate: "show",
          exit: "exit",
          className: "edit-form",
          children: (0, zn.jsxs)(Jf.form, {
            variants: sd,
            exit: { opacity: 0 },
            className: "edit-form__container",
            onSubmit: function (t) {
              t.preventDefault(), a(n._id), e(!1);
            },
            children: [
              (0, zn.jsx)(Jf.div, {
                className: "edit__top",
                children: (0, zn.jsx)("div", {
                  className: "edit__title",
                  children: "EDIT TODO",
                }),
              }),
              (0, zn.jsxs)("label", {
                htmlFor: "todoEditTask",
                className: "edit__task-label",
                children: [
                  (0, zn.jsx)("span", { children: "Task" }),
                  (0, zn.jsx)("input", {
                    className: "form__input",
                    id: "todoEditTask",
                    value: n.task,
                    onChange: function (e) {
                      r(function (t) {
                        return Qe(Qe({}, t), {}, { task: e.target.value });
                      });
                    },
                  }),
                ],
              }),
              (0, zn.jsx)(Jf.div, {
                variants: bd,
                whileHover: "hover",
                whileTap: "tap",
                className: "favorite-container",
                children: (0, zn.jsxs)("label", {
                  htmlFor: "favoriteTodo",
                  className: "favorite-label",
                  children: [
                    (0, zn.jsx)("input", {
                      type: "checkbox",
                      className: "favorite-check",
                      id: "favoriteTodo",
                      checked: n.favorite,
                      onChange: function (e) {
                        r(function (t) {
                          return Qe(
                            Qe({}, t),
                            {},
                            { favorite: e.target.checked }
                          );
                        });
                      },
                    }),
                    (0, zn.jsx)("span", {
                      className: "favorite-span",
                      children:
                        null !== n && void 0 !== n && n.favorite
                          ? "FAVORITE"
                          : "ADD TO FAVORITES",
                    }),
                  ],
                }),
              }),
              (0, zn.jsxs)("div", {
                className: "edit-buttons",
                children: [
                  (0, zn.jsx)(Jf.button, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "edit__submit",
                    type: "submit",
                    children: "EDIT",
                  }),
                  (0, zn.jsx)(Jf.button, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "edit__exit",
                    onClick: function (t) {
                      t.preventDefault(), e(!1);
                    },
                    children: "CANCEL",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Hd() {
        var e = Hn(),
          n = e.search,
          r = e.setSearch,
          a = e.setIsLoading,
          i = e.setEditMode,
          o = e.editMode,
          s = e.favorite,
          u = e.setFavorite,
          l = Yn().user,
          c = Zn(),
          f = c.todos,
          d = c.getAllTodo,
          p = c.finished,
          h = c.setFinished,
          v = c.addTodo,
          m = (0, t.useRef)("");
        (0, t.useEffect)(function () {
          a(!0), l || d(), r(""), u(null), h(null), a(!1), i(!1);
        }, []);
        var A = Sa(),
          g = A.register,
          y = A.handleSubmit,
          b = (A.formState.errors, A.reset),
          x = ye();
        return (0, zn.jsxs)(zn.Fragment, {
          children: [
            (0, zn.jsxs)(Jf.div, {
              variants: ed,
              initial: "hidden",
              animate: "show",
              exit: "exit",
              className: "todo-page",
              children: [
                (0, zn.jsx)("div", {
                  className: "nav-2",
                  children: (0, zn.jsx)("div", {
                    className: "nav-2__close",
                    onClick: function () {
                      x("/dashboard");
                    },
                    children: "CLOSE",
                  }),
                }),
                (0, zn.jsx)("div", {
                  className: "page__title",
                  children: "TODO",
                }),
                (0, zn.jsxs)("form", {
                  className: "filter__container",
                  onSubmit: y(
                    (function () {
                      var e = $e(
                        Ze().mark(function e(t) {
                          return Ze().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  a(!0), v(t), b(), a(!1);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                  children: [
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          { className: "filter__input" },
                          g("task", {
                            required: "Input task",
                            minLength: {
                              value: 3,
                              message:
                                "Task must have of at least 3 characters",
                            },
                          })
                        ),
                        {},
                        { placeholder: "Add task..." }
                      )
                    ),
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "filter__button",
                      type: "submit",
                      children: "ADD",
                    }),
                  ],
                }),
                (0, zn.jsxs)("form", {
                  className: "filter__container",
                  onSubmit: function (e) {
                    e.preventDefault(), r(m.current);
                  },
                  children: [
                    (0, zn.jsx)("input", {
                      className: "filter__input",
                      placeholder: "Filter...",
                      onChange: function (e) {
                        (m.current = e.target.value), "" === m.current && r("");
                      },
                    }),
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "filter__button",
                      type: "submit",
                      children: "?",
                    }),
                  ],
                }),
                (0, zn.jsx)("br", {}),
                (0, zn.jsxs)("div", {
                  className: "todo-filter-group",
                  children: [
                    (0, zn.jsx)(Jf.div, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "favorite-container",
                      children: (0, zn.jsxs)("label", {
                        htmlFor: "favoriteTodos",
                        className: "favorite-label",
                        children: [
                          (0, zn.jsx)("input", {
                            type: "checkbox",
                            className: "favorite-check",
                            id: "favoriteTodos",
                            onChange: function (e) {
                              var t = e.target.checked || null;
                              u(t);
                            },
                          }),
                          (0, zn.jsx)("span", {
                            className: "favorite-span",
                            children: "FAVORITES",
                          }),
                        ],
                      }),
                    }),
                    (0, zn.jsxs)("select", {
                      className: "options__container",
                      id: "status",
                      onChange: function (e) {
                        "all" === e.target.value
                          ? h(null)
                          : "unfinished" === e.target.value
                          ? h(!1)
                          : h(!0);
                      },
                      children: [
                        (0, zn.jsx)("option", {
                          value: "all",
                          className: "options__item",
                          children: "All",
                        }),
                        (0, zn.jsx)("option", {
                          value: "unfinished",
                          className: "options__item",
                          children: "Unfinished",
                        }),
                        (0, zn.jsx)("option", {
                          value: "finished",
                          className: "options__item",
                          children: "Finished",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, zn.jsx)("br", {}),
                (0, zn.jsxs)(Fd, {
                  children: [
                    f
                      .filter(function (e) {
                        return e.task.toLowerCase().includes(n.toLowerCase());
                      })
                      .filter(function (e) {
                        return null === s ? e : e.favorite === s;
                      })
                      .filter(function (e) {
                        return null === p
                          ? e
                          : p
                          ? !0 === e.finished
                          : p
                          ? void 0
                          : !1 === e.finished;
                      })
                      .map(function (e) {
                        return (0, zn.jsx)(Ud, { todo: e }, e._id);
                      }),
                    o && (0, zn.jsx)(Bd, {}),
                  ],
                }),
                (0, zn.jsx)("div", { className: "footer__empty" }),
              ],
            }),
            (0, zn.jsx)(Jf.footer, {
              variants: ed,
              initial: "hidden",
              animate: "show",
              exit: "exit",
              className: "footer__container",
              children: (0, zn.jsxs)("div", {
                className: "footer__text",
                children: ["TOTAL TODO: ", f.length],
              }),
            }),
          ],
        });
      }
      var Wd = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        qd = t.createContext && t.createContext(Wd),
        Yd = function () {
          return (
            (Yd =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            Yd.apply(this, arguments)
          );
        },
        Xd = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function Gd(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, Yd({ key: n }, e.attr), Gd(e.child));
          })
        );
      }
      function Qd(e) {
        return function (n) {
          return t.createElement(
            Zd,
            Yd({ attr: Yd({}, e.attr) }, n),
            Gd(e.child)
          );
        };
      }
      function Zd(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            i = e.size,
            o = e.title,
            s = Xd(e, ["attr", "size", "title"]),
            u = i || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              Yd(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                s,
                {
                  className: r,
                  style: Yd(
                    Yd({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && t.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== qd
          ? t.createElement(qd.Consumer, null, function (e) {
              return n(e);
            })
          : n(Wd);
      }
      function Kd(e) {
        return Qd({
          tag: "svg",
          attr: { version: "1.1", viewBox: "0 0 16 16" },
          child: [{ tag: "path", attr: { d: "M3 2l10 6-10 6z" } }],
        })(e);
      }
      function $d(e) {
        var t = e.pomodoro,
          n = Hn().setFakeId,
          r = Zn().deletePomodoro,
          a = ye();
        return (0, zn.jsxs)(
          Jf.div,
          {
            variants: Ad,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            whileHover: "hover",
            className: "pomo-item",
            children: [
              (0, zn.jsx)("button", {
                className: "pomo-item__play-container",
                onClick: function () {
                  n(!1), a("/pomodoro/" + t._id);
                },
                children: (0, zn.jsx)(Kd, { className: "pomo-item__play" }),
              }),
              (0, zn.jsxs)("div", {
                className: "pomo-item__right",
                children: [
                  (0, zn.jsxs)("div", {
                    className: "pomo-item__title-delete",
                    children: [
                      (0, zn.jsx)("div", {
                        className: t.favorite
                          ? "pomo-item__title fave"
                          : "pomo-item__title",
                        children: t.title,
                      }),
                      (0, zn.jsx)(Jf.button, {
                        variants: bd,
                        whileHover: "hover",
                        whileTap: "tap",
                        className: "pomo-item__delete",
                        onClick: function () {
                          r(t._id);
                        },
                        children: "x",
                      }),
                    ],
                  }),
                  (0, zn.jsx)("div", {
                    className: "pomo-item__value",
                    children: (0, zn.jsxs)("div", {
                      children: ["TOTAL: ", t.value + ""],
                    }),
                  }),
                ],
              }),
            ],
          },
          t._id
        );
      }
      function Jd() {
        var e = Hn(),
          n = e.search,
          r = e.setSearch,
          a = e.setIsLoading,
          i = e.setFavorite,
          o = e.favorite,
          s = e.setFakeId,
          u = Yn().user,
          l = Zn(),
          c = l.pomodoros,
          f = l.addPomodoro,
          d = l.getAllPomodoro,
          p = ye(),
          h = (0, t.useRef)(""),
          v = Sa(),
          m = v.register,
          A = v.handleSubmit,
          g = (v.formState.errors, v.reset);
        return (
          (0, t.useEffect)(function () {
            a(!0), s(!1), u || d(), r(""), i(null), a(!1);
          }, []),
          (0, zn.jsxs)(zn.Fragment, {
            children: [
              (0, zn.jsxs)(Jf.div, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "pomo-page",
                children: [
                  (0, zn.jsx)("div", {
                    className: "nav-2",
                    children: (0, zn.jsx)(Jf.div, {
                      variants: bd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "nav-2__close",
                      onClick: function () {
                        p("/dashboard");
                      },
                      children: "CLOSE",
                    }),
                  }),
                  (0, zn.jsx)("div", { className: "experimentalBody" }),
                  (0, zn.jsx)("div", {
                    className: "page__title",
                    children: "POMO",
                  }),
                  (0, zn.jsxs)("form", {
                    className: "filter__container",
                    onSubmit: A(
                      (function () {
                        var e = $e(
                          Ze().mark(function e(t) {
                            return Ze().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    a(!0), f(t), g(), a(!1);
                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    ),
                    children: [
                      (0, zn.jsx)(
                        "input",
                        Qe(
                          Qe(
                            { className: "filter__input" },
                            m("title", {
                              required: "Input task",
                              minLength: {
                                value: 3,
                                message:
                                  "Task must have of at least 3 characters",
                              },
                            })
                          ),
                          {},
                          { placeholder: "Add task..." }
                        )
                      ),
                      (0, zn.jsx)(Jf.button, {
                        variants: xd,
                        whileHover: "hover",
                        whileTap: "tap",
                        className: "filter__button",
                        type: "submit",
                        children: "ADD",
                      }),
                    ],
                  }),
                  (0, zn.jsxs)("form", {
                    className: "filter__container",
                    onSubmit: function (e) {
                      e.preventDefault(), r(h.current);
                    },
                    children: [
                      (0, zn.jsx)("input", {
                        className: "filter__input",
                        placeholder: "Filter",
                        onChange: function (e) {
                          (h.current = e.target.value),
                            "" === h.current && r("");
                        },
                      }),
                      (0, zn.jsx)(Jf.button, {
                        variants: xd,
                        whileHover: "hover",
                        whileTap: "tap",
                        className: "filter__button",
                        type: "submit",
                        children: "?",
                      }),
                    ],
                  }),
                  (0, zn.jsx)(Jf.div, {
                    variants: xd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "favorite-container",
                    children: (0, zn.jsxs)("label", {
                      htmlFor: "allPomodoroFavorites",
                      className: "favorite-label",
                      children: [
                        (0, zn.jsx)("input", {
                          type: "checkbox",
                          className: "favorite-check",
                          id: "allPomodoroFavorites",
                          onChange: function (e) {
                            var t = e.target.checked || null;
                            i(t);
                          },
                        }),
                        (0, zn.jsx)("span", {
                          className: "favorite-span",
                          children: "FAVORITES",
                        }),
                      ],
                    }),
                  }),
                  (0, zn.jsx)("div", {
                    className: "pomo-items__container",
                    children: (0, zn.jsx)(Fd, {
                      children: c
                        .filter(function (e) {
                          return e.title
                            .toLowerCase()
                            .includes(n.toLowerCase());
                        })
                        .filter(function (e) {
                          return null === o ? e : e.favorite === o;
                        })
                        .map(function (e) {
                          return (0, zn.jsx)($d, { pomodoro: e }, e._id);
                        }),
                    }),
                  }),
                  (0, zn.jsx)("div", { className: "note-footer__empty" }),
                ],
              }),
              (0, zn.jsx)(Jf.footer, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "footer__container",
                children: (0, zn.jsxs)("div", {
                  className: "footer__text",
                  children: ["TOTAL POMODORO: ", c.length],
                }),
              }),
            ],
          })
        );
      }
      var ep = n(722),
        tp = function (e, t) {
          return (
            (tp =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            tp(e, t)
          );
        };
      function np(e) {
        var n = e.className,
          r = e.counterClockwise,
          a = e.dashRatio,
          i = e.pathRadius,
          o = e.strokeWidth,
          s = e.style;
        return (0, t.createElement)("path", {
          className: n,
          style: Object.assign(
            {},
            s,
            ap({ pathRadius: i, dashRatio: a, counterClockwise: r })
          ),
          d: rp({ pathRadius: i, counterClockwise: r }),
          strokeWidth: o,
          fillOpacity: 0,
        });
      }
      function rp(e) {
        var t = e.pathRadius,
          n = e.counterClockwise ? 1 : 0;
        return (
          "\n      M 50,50\n      m 0,-" +
          t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          n +
          " 1 1 0," +
          2 * t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          n +
          " 1 1 0,-" +
          2 * t +
          "\n    "
        );
      }
      function ap(e) {
        var t = e.counterClockwise,
          n = e.dashRatio,
          r = e.pathRadius,
          a = 2 * Math.PI * r,
          i = (1 - n) * a;
        return {
          strokeDasharray: a + "px " + a + "px",
          strokeDashoffset: (t ? -i : i) + "px",
        };
      }
      var ip = (function (e) {
        function n() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (function (e, t) {
            function n() {
              this.constructor = e;
            }
            tp(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          })(n, e),
          (n.prototype.getBackgroundPadding = function () {
            return this.props.background ? this.props.backgroundPadding : 0;
          }),
          (n.prototype.getPathRadius = function () {
            return (
              50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
            );
          }),
          (n.prototype.getPathRatio = function () {
            var e = this.props,
              t = e.value,
              n = e.minValue,
              r = e.maxValue;
            return (Math.min(Math.max(t, n), r) - n) / (r - n);
          }),
          (n.prototype.render = function () {
            var e = this.props,
              n = e.circleRatio,
              r = e.className,
              a = e.classes,
              i = e.counterClockwise,
              o = e.styles,
              s = e.strokeWidth,
              u = e.text,
              l = this.getPathRadius(),
              c = this.getPathRatio();
            return (0, t.createElement)(
              "svg",
              {
                className: a.root + " " + r,
                style: o.root,
                viewBox: "0 0 100 100",
                "data-test-id": "CircularProgressbar",
              },
              this.props.background
                ? (0, t.createElement)("circle", {
                    className: a.background,
                    style: o.background,
                    cx: 50,
                    cy: 50,
                    r: 50,
                  })
                : null,
              (0, t.createElement)(np, {
                className: a.trail,
                counterClockwise: i,
                dashRatio: n,
                pathRadius: l,
                strokeWidth: s,
                style: o.trail,
              }),
              (0, t.createElement)(np, {
                className: a.path,
                counterClockwise: i,
                dashRatio: c * n,
                pathRadius: l,
                strokeWidth: s,
                style: o.path,
              }),
              u
                ? (0, t.createElement)(
                    "text",
                    { className: a.text, style: o.text, x: 50, y: 50 },
                    u
                  )
                : null
            );
          }),
          (n.defaultProps = {
            background: !1,
            backgroundPadding: 0,
            circleRatio: 1,
            classes: {
              root: "CircularProgressbar",
              trail: "CircularProgressbar-trail",
              path: "CircularProgressbar-path",
              text: "CircularProgressbar-text",
              background: "CircularProgressbar-background",
            },
            counterClockwise: !1,
            className: "",
            maxValue: 100,
            minValue: 0,
            strokeWidth: 8,
            styles: { root: {}, trail: {}, path: {}, text: {}, background: {} },
            text: "",
          }),
          n
        );
      })(t.Component);
      function op(e) {
        var n = e.expiryTimestamp,
          r = Zn(),
          a = r.focusTimeSeconds,
          i = r.restTimeSeconds,
          o = r.singlePomodoro,
          s = r.startPomodoro,
          u = r.isRest,
          l = r.setIsRest,
          c = r.percent,
          f = r.setPercent,
          d = (0, ep.useTimer)({ expiryTimestamp: n, autoStart: !1 }),
          p = d.seconds,
          h = d.minutes,
          v = d.isRunning,
          m = d.start,
          A = d.pause,
          g = d.resume,
          y = d.restart;
        (0, t.useEffect)(
          function () {
            var e = 60 * h + p;
            u ? f((e / i) * 100) : f((e / a) * 100);
            if (h + p === 0 && !v) {
              if (!u) {
                s(o._id);
                var t = new Date();
                t.setSeconds(t.getSeconds() + i), l(!0), y(t);
              }
              if (u) {
                var n = new Date();
                n.setSeconds(n.getSeconds() + a), l(!1), y(n);
              }
            }
          },
          [p, h]
        );
        return (0, zn.jsxs)("div", {
          className: "pomodoro-timer__container",
          children: [
            null === u
              ? (0, zn.jsx)("div", {
                  className: "timer-status",
                  children: "START",
                })
              : (0, zn.jsx)("div", {
                  className: "timer-status",
                  children: u ? "REST" : "FOCUS",
                }),
            (0, zn.jsx)("div", {
              className: "container",
              children: (0, zn.jsx)(ip, {
                value: c,
                text: ""
                  .concat(h < 10 ? "0" + h : h, ":")
                  .concat(p < 10 ? "0" + p : p),
              }),
            }),
            (0, zn.jsxs)("div", {
              className: "timer__buttons",
              children: [
                (0, zn.jsx)(Jf.button, {
                  variants: bd,
                  whileHover: "hover",
                  whileTap: "tap",
                  onClick: function () {
                    l(!1), m();
                  },
                  className: "timer__button",
                  children: "START",
                }),
                (0, zn.jsx)(Jf.button, {
                  variants: bd,
                  whileHover: "hover",
                  whileTap: "tap",
                  onClick: A,
                  className: "timer__button",
                  children: "PAUSE",
                }),
                (0, zn.jsx)(Jf.button, {
                  variants: bd,
                  whileHover: "hover",
                  whileTap: "tap",
                  onClick: g,
                  className: "timer__button",
                  children: "RESUME",
                }),
                (0, zn.jsx)(Jf.button, {
                  variants: bd,
                  whileHover: "hover",
                  whileTap: "tap",
                  onClick: function () {
                    l(!1);
                    var e = new Date();
                    e.setSeconds(e.getSeconds() + a), y(e);
                  },
                  className: "timer__button",
                  children: "RESTART",
                }),
              ],
            }),
          ],
        });
      }
      function sp() {
        var e,
          t,
          n = Zn(),
          r = n.setSinglePomodoro,
          a = n.singlePomodoro,
          i = n.updatePomodoro,
          o = Hn().setEditMode,
          s = Sa(),
          u = s.register,
          l = s.handleSubmit,
          c = s.formState.errors;
        return (0, zn.jsxs)(Jf.div, {
          variants: td,
          initial: "hidden",
          animate: "show",
          exit: "exit",
          className: "edit-form",
          children: [
            (0, zn.jsxs)(Jf.form, {
              variants: sd,
              exit: { opacity: 0 },
              className: "edit-form__container",
              onSubmit: l(function (e) {
                i(a._id, e.title, e.favorite), console.log(e), o(!1);
              }),
              children: [
                (0, zn.jsx)("div", {
                  className: "edit__top",
                  children: (0, zn.jsx)("div", {
                    className: "edit__title",
                    children: "EDIT POMODORO",
                  }),
                }),
                (0, zn.jsxs)("label", {
                  className: "edit__task-label",
                  children: [
                    (0, zn.jsx)("span", { children: "Task" }),
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              null !== (e = c.title) &&
                              void 0 !== e &&
                              e.message
                                ? "form__input invalid"
                                : "form__input",
                          },
                          u("title", {
                            required: "Input title",
                            minLength: {
                              value: 2,
                              message:
                                "Task must have of at least 2 characters",
                            },
                          })
                        ),
                        {},
                        { defaultValue: a.title }
                      )
                    ),
                  ],
                }),
                (0, zn.jsx)(Jf.div, {
                  variants: xd,
                  whileHover: "hover",
                  whileTap: "tap",
                  className: "favorite-container",
                  children: (0, zn.jsxs)("label", {
                    htmlFor: "favoritePomo",
                    className: "favorite-label",
                    children: [
                      (0, zn.jsx)(
                        "input",
                        Qe(
                          Qe(
                            {},
                            u("favorite", {
                              onChange: function (e) {
                                r(function (t) {
                                  return Qe(
                                    Qe({}, t),
                                    {},
                                    { favorite: e.target.checked }
                                  );
                                });
                              },
                            })
                          ),
                          {},
                          {
                            type: "checkbox",
                            className: "favorite-check",
                            id: "favoritePomo",
                            checked: a.favorite,
                          }
                        )
                      ),
                      (0, zn.jsx)("span", {
                        className: "favorite-span",
                        children:
                          null !== a && void 0 !== a && a.favorite
                            ? "FAVORITE"
                            : "ADD TO FAVORITES",
                      }),
                    ],
                  }),
                }),
                (0, zn.jsxs)("div", {
                  className: "edit-buttons",
                  children: [
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "edit__submit",
                      type: "submit",
                      children: "EDIT",
                    }),
                    (0, zn.jsx)(Jf.button, {
                      variants: xd,
                      whileHover: "hover",
                      whileTap: "tap",
                      className: "edit__exit",
                      onClick: function (e) {
                        e.preventDefault(), o(!1);
                      },
                      children: "CANCEL",
                    }),
                  ],
                }),
              ],
            }),
            c.title &&
              (0, zn.jsx)("div", {
                className: "edit__error",
                children: (0, zn.jsx)("div", {
                  children:
                    null === (t = c.title) || void 0 === t ? void 0 : t.message,
                }),
              }),
          ],
        });
      }
      function up() {
        var e = xe().id,
          n = Hn(),
          r = n.setIsLoading,
          a = n.setEditMode,
          i = n.editMode,
          o = n.fakeId,
          s = Yn().user,
          u = Zn(),
          c = u.focusTimeSeconds,
          f = u.setFocusTimeSeconds,
          d = u.setRestTimeSeconds,
          p = u.isRest,
          h = u.setIsRest,
          v = u.getAllPomodoro,
          m = u.singlePomodoro,
          A = u.getSinglePomodoro,
          g = l(
            (0, t.useState)(new Date().setSeconds(new Date().getSeconds() + c)),
            2
          ),
          y = g[0],
          b = g[1],
          x = (0, t.useRef)(),
          w = ye();
        return (
          (0, t.useEffect)(
            function () {
              return (
                r(!0),
                A(e),
                o && w("/pomodoro"),
                s || v(),
                (x.current = null === m || void 0 === m ? void 0 : m.title),
                r(!1)
              );
            },
            [o]
          ),
          (0, zn.jsxs)(Jf.div, {
            variants: ed,
            initial: "hidden",
            animate: "show",
            exit: "exit",
            className: p ? "pomo-single rest" : "pomo-single",
            children: [
              (0, zn.jsx)("div", {
                className: "nav-2",
                children: (0, zn.jsx)(Jf.div, {
                  variants: bd,
                  whileHover: "hover",
                  whileTap: "tap",
                  className: "nav-2__close",
                  onClick: function () {
                    w("/pomodoro");
                  },
                  children: "CLOSE",
                }),
              }),
              (0, zn.jsx)("div", {
                className: "pomo-single__title-container",
                children: (0, zn.jsx)("div", {
                  className:
                    null !== m && void 0 !== m && m.favorite
                      ? "pomo-single__title fave"
                      : "pomo-single__title",
                  children: null === m || void 0 === m ? void 0 : m.title,
                }),
              }),
              (0, zn.jsxs)("div", {
                className: "pomo-single__value",
                children: [
                  "TOTAL: ",
                  null === m || void 0 === m ? void 0 : m.value,
                ],
              }),
              (0, zn.jsxs)("div", {
                className: "subheader__container",
                children: [
                  (0, zn.jsx)(Jf.button, {
                    variants: bd,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "pomo edit-button",
                    onClick: function () {
                      a(!0), (x.current = m.title);
                    },
                    children: "EDIT",
                  }),
                  (0, zn.jsx)("div", {
                    className: " pomo form-date",
                    children: new Date(
                      null === m || void 0 === m ? void 0 : m.updatedAt
                    ).toDateString(),
                  }),
                ],
              }),
              (0, zn.jsxs)("div", {
                className: "body__container",
                children: [
                  (0, zn.jsx)(op, { expiryTimestamp: y }, y),
                  (0, zn.jsxs)("div", {
                    className: "all-timer__container",
                    children: [
                      (0, zn.jsxs)("label", {
                        className: "timer__time__container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "label-time",
                            children: "FOCUS TIME:",
                          }),
                          (0, zn.jsx)("br", {}),
                          (0, zn.jsxs)("select", {
                            className: "options__container",
                            id: "status",
                            onChange: function (e) {
                              h(null);
                              var t = parseInt(e.target.value);
                              f(t),
                                b(
                                  new Date().setSeconds(
                                    new Date().getSeconds() + t
                                  )
                                );
                            },
                            children: [
                              (0, zn.jsx)("option", {
                                value: "1200",
                                className: "options__item",
                                children: "20 MINS",
                              }),
                              (0, zn.jsx)("option", {
                                value: "600",
                                className: "options__item",
                                children: "10 MINS",
                              }),
                              (0, zn.jsx)("option", {
                                value: "300",
                                className: "options__item",
                                children: "5 MINS",
                              }),
                              (0, zn.jsx)("option", {
                                value: "60",
                                className: "options__item",
                                children: "1 MIN",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, zn.jsxs)("label", {
                        className: "timer__time__container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "label-time",
                            children: "REST TIME:",
                          }),
                          (0, zn.jsx)("br", {}),
                          (0, zn.jsxs)("select", {
                            className: "options__container",
                            id: "status",
                            onChange: function (e) {
                              h(null);
                              var t = parseInt(e.target.value);
                              d(t);
                            },
                            children: [
                              (0, zn.jsx)("option", {
                                value: "60",
                                className: "options__item",
                                children: "1 MIN",
                              }),
                              (0, zn.jsx)("option", {
                                value: "300",
                                className: "options__item",
                                children: "5 MINS",
                              }),
                              (0, zn.jsx)("option", {
                                value: "600",
                                className: "options__item",
                                children: "10 MINS",
                              }),
                              (0, zn.jsx)("option", {
                                value: "900",
                                className: "options__item",
                                children: "15 MINS",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, zn.jsx)(Fd, { children: i && (0, zn.jsx)(sp, {}) }),
            ],
          })
        );
      }
      var lp = n.p + "static/media/bg-1.21cd35a72b82b0cff4cc.jpg";
      function cp(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var fp,
        dp = new WeakMap();
      function pp(e) {
        var t,
          n = e.target,
          r = e.contentRect,
          a = e.borderBoxSize;
        null === (t = dp.get(n)) ||
          void 0 === t ||
          t.forEach(function (e) {
            e({
              target: n,
              contentSize: r,
              get size() {
                return (function (e, t) {
                  if (t) {
                    var n = t[0];
                    return { width: n.inlineSize, height: n.blockSize };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(n, a);
              },
            });
          });
      }
      function hp(e) {
        e.forEach(pp);
      }
      function vp(e, t) {
        fp ||
          ("undefined" !== typeof ResizeObserver &&
            (fp = new ResizeObserver(hp)));
        var n = (function (e, t) {
          var n;
          return (
            "string" === typeof e
              ? t
                ? ((null !== (n = t[e]) && void 0 !== n) ||
                    (t[e] = document.querySelectorAll(e)),
                  (e = t[e]))
                : (e = document.querySelectorAll(e))
              : e instanceof Element && (e = [e]),
            Array.from(e || [])
          );
        })(e);
        return (
          n.forEach(function (e) {
            var n = dp.get(e);
            n || ((n = new Set()), dp.set(e, n)),
              n.add(t),
              null === fp || void 0 === fp || fp.observe(e);
          }),
          function () {
            n.forEach(function (e) {
              var n = dp.get(e);
              null === n || void 0 === n || n.delete(t),
                (null === n || void 0 === n ? void 0 : n.size) ||
                  null === fp ||
                  void 0 === fp ||
                  fp.unobserve(e);
            });
          }
        );
      }
      var mp,
        Ap = new Set();
      function gp(e) {
        return (
          Ap.add(e),
          mp ||
            ((mp = function () {
              var e = { width: window.innerWidth, height: window.innerHeight },
                t = { target: window, size: e, contentSize: e };
              Ap.forEach(function (e) {
                return e(t);
              });
            }),
            window.addEventListener("resize", mp)),
          function () {
            Ap.delete(e), !Ap.size && mp && (mp = void 0);
          }
        );
      }
      var yp = function (e) {
        return "function" === typeof e;
      };
      function bp(e, t) {
        return yp(e) ? gp(e) : vp(e, t);
      }
      var xp = function (e, t, n) {
        return t - e === 0 ? 1 : (n - e) / (t - e);
      };
      var wp = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
      function kp(e, t, n, r) {
        var a = n[t],
          i = wp[t],
          o = i.length,
          s = i.position,
          u = a.current,
          l = n.time;
        (a.current = e["scroll" + s]),
          (a.scrollLength = e["scroll" + o] - e["client" + o]),
          (a.offset.length = 0),
          (a.offset[0] = 0),
          (a.offset[1] = a.scrollLength),
          (a.progress = xp(0, a.scrollLength, a.current));
        var c,
          f,
          d = r - l;
        a.velocity =
          d > 50 ? 0 : ((c = a.current - u), (f = d) ? c * (1e3 / f) : 0);
      }
      function Sp(e, t, n) {
        kp(e, "x", t, n), kp(e, "y", t, n), (t.time = n);
      }
      var Ep = function (e) {
          return e;
        },
        _p = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function Tp(e, t) {
        for (var n = e[e.length - 1], r = 1; r <= t; r++) {
          var a = xp(0, t, r);
          e.push(_p(n, 1, a));
        }
      }
      function Np(e) {
        var t = [0];
        return Tp(t, e - 1), t;
      }
      var jp = function (e) {
        return "number" === typeof e;
      };
      function Cp(e, t) {
        return (function (e) {
          return Array.isArray(e) && !jp(e[0]);
        })(e)
          ? e[
              (function (e, t, n) {
                var r = t - e;
                return ((((n - e) % r) + r) % r) + e;
              })(0, e.length, t)
            ]
          : e;
      }
      var Pp = function (e, t, n) {
        return Math.min(Math.max(n, e), t);
      };
      var Fp = {
          Enter: [
            [0, 1],
            [1, 1],
          ],
          Exit: [
            [0, 0],
            [1, 0],
          ],
          Any: [
            [1, 0],
            [0, 1],
          ],
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        Op = function (e) {
          return "string" === typeof e;
        },
        Rp = { start: 0, center: 0.5, end: 1 };
      function Lp(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if ((void 0 !== Rp[e] && (e = Rp[e]), Op(e))) {
          var a = parseFloat(e);
          e.endsWith("px")
            ? (r = a)
            : e.endsWith("%")
            ? (e = a / 100)
            : e.endsWith("vw")
            ? (r = (a / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (a / 100) * document.documentElement.clientHeight)
            : (e = a);
        }
        return jp(e) && (r = t * e), n + r;
      }
      var Dp = [0, 0];
      function Vp(e, t, n, r) {
        var a = Array.isArray(e) ? e : Dp;
        return (
          jp(e)
            ? (a = [e, e])
            : Op(e) &&
              (a = (e = e.trim()).includes(" ")
                ? e.split(" ")
                : [e, Rp[e] ? e : "0"]),
          Lp(a[0], n, r) - Lp(a[1], t)
        );
      }
      var Mp = { x: 0, y: 0 };
      function Ip(e, t, n) {
        var r = n.offset,
          a = void 0 === r ? Fp.All : r,
          i = n.target,
          o = void 0 === i ? e : i,
          s = n.axis,
          u = void 0 === s ? "y" : s,
          l = "y" === u ? "height" : "width",
          c =
            o !== e
              ? (function (e, t) {
                  for (var n = { x: 0, y: 0 }, r = e; r && r !== t; )
                    if (r instanceof HTMLElement)
                      (n.x += r.offsetLeft),
                        (n.y += r.offsetTop),
                        (r = r.offsetParent);
                    else if (
                      r instanceof SVGGraphicsElement &&
                      "getBBox" in r
                    ) {
                      var a = r.getBBox(),
                        i = a.top,
                        o = a.left;
                      for (n.x += o, n.y += i; r && "svg" !== r.tagName; )
                        r = r.parentNode;
                    }
                  return n;
                })(o, e)
              : Mp,
          d =
            o === e
              ? { width: e.scrollWidth, height: e.scrollHeight }
              : { width: o.clientWidth, height: o.clientHeight },
          p = { width: e.clientWidth, height: e.clientHeight };
        t[u].offset.length = 0;
        for (var h = !t[u].interpolate, v = a.length, m = 0; m < v; m++) {
          var A = Vp(a[m], p[l], d[l], c[u]);
          h || A === t[u].interpolatorOffsets[m] || (h = !0),
            (t[u].offset[m] = A);
        }
        h &&
          ((t[u].interpolate = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Np(e.length),
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Ep,
              r = e.length,
              a = r - t.length;
            return (
              a > 0 && Tp(t, a),
              function (a) {
                for (var i = 0; i < r - 2 && !(a < t[i + 1]); i++);
                var o = Pp(0, 1, xp(t[i], t[i + 1], a));
                return (o = Cp(n, i)(o)), _p(e[i], e[i + 1], o);
              }
            );
          })(Np(v), t[u].offset)),
          (t[u].interpolatorOffsets = f(t[u].offset))),
          (t[u].progress = t[u].interpolate(t[u].current));
      }
      function zp(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e))
          for (var r = t; r && r != e; )
            (n.x.targetOffset += r.offsetLeft),
              (n.y.targetOffset += r.offsetTop),
              (r = r.offsetParent);
        (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
          (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
          (n.x.containerLength = e.clientWidth),
          (n.y.containerLength = e.clientHeight);
      }
      function Up(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = r.axis || "y";
        return {
          measure: function () {
            return zp(e, r.target, n);
          },
          update: function (t) {
            Sp(e, n, t), (r.offset || r.target) && Ip(e, n, r);
          },
          notify: yp(t)
            ? function () {
                return t(n);
              }
            : Bp(t, n[a]),
        };
      }
      function Bp(e, t) {
        return (
          e.pause(),
          e.forEachNative(function (e, t) {
            var n,
              r,
              a = t.easing;
            if (e.updateDuration) a || (e.easing = Ep), e.updateDuration(1);
            else {
              var i = { duration: 1e3 };
              a || (i.easing = "linear"),
                null ===
                  (r =
                    null === (n = e.effect) || void 0 === n
                      ? void 0
                      : n.updateTiming) ||
                  void 0 === r ||
                  r.call(n, i);
            }
          }),
          function () {
            e.currentTime = t.progress;
          }
        );
      }
      var Hp = new WeakMap(),
        Wp = new WeakMap(),
        qp = new WeakMap(),
        Yp = function (e) {
          return e === document.documentElement ? window : e;
        };
      function Xp(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.container,
          r = void 0 === n ? document.documentElement : n,
          a = cp(t, ["container"]),
          i = qp.get(r);
        i || ((i = new Set()), qp.set(r, i));
        var o = {
            time: 0,
            x: {
              current: 0,
              offset: [],
              progress: 0,
              scrollLength: 0,
              targetOffset: 0,
              targetLength: 0,
              containerLength: 0,
              velocity: 0,
            },
            y: {
              current: 0,
              offset: [],
              progress: 0,
              scrollLength: 0,
              targetOffset: 0,
              targetLength: 0,
              containerLength: 0,
              velocity: 0,
            },
          },
          s = Up(r, e, o, a);
        if ((i.add(s), !Hp.has(r))) {
          var u = function () {
            var e,
              t = performance.now(),
              n = E(i);
            try {
              for (n.s(); !(e = n.n()).done; ) {
                e.value.measure();
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
            var r,
              a = E(i);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                r.value.update(t);
              }
            } catch (u) {
              a.e(u);
            } finally {
              a.f();
            }
            var o,
              s = E(i);
            try {
              for (s.s(); !(o = s.n()).done; ) {
                o.value.notify();
              }
            } catch (u) {
              s.e(u);
            } finally {
              s.f();
            }
          };
          Hp.set(r, u);
          var l = Yp(r);
          window.addEventListener("resize", u, { passive: !0 }),
            r !== document.documentElement && Wp.set(r, bp(r, u)),
            l.addEventListener("scroll", u, { passive: !0 });
        }
        var c = Hp.get(r),
          f = requestAnimationFrame(c);
        return function () {
          var t;
          "function" !== typeof e && e.stop(), cancelAnimationFrame(f);
          var n = qp.get(r);
          if (n && (n.delete(s), !n.size)) {
            var a = Hp.get(r);
            Hp.delete(r),
              a &&
                (Yp(r).removeEventListener("scroll", a),
                null === (t = Wp.get(r)) || void 0 === t || t(),
                window.removeEventListener("resize", a));
          }
        };
      }
      var Gp = ["container", "target", "layoutEffect"];
      function Qp(e, t) {
        Boolean(!t || t.current),
          "You have defined a ".concat(
            e,
            " options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."
          );
      }
      var Zp = function () {
        return {
          scrollX: ls(0),
          scrollY: ls(0),
          scrollXProgress: ls(0),
          scrollYProgress: ls(0),
        };
      };
      var Kp = function (e) {
        return (function (e) {
          return "object" === typeof e && e.mix;
        })(e)
          ? e.mix
          : void 0;
      };
      function $p(e, n) {
        var r = (function (e) {
            var n = Ha(function () {
              return ls(e);
            });
            if ((0, t.useContext)(_a).isStatic) {
              var r = l((0, t.useState)(e), 2)[1];
              (0, t.useEffect)(function () {
                return n.on("change", r);
              }, []);
            }
            return n;
          })(n()),
          a = function () {
            return r.set(n());
          };
        return (
          a(),
          Ca(function () {
            var t = function () {
                return Ko.update(a, !1, !0);
              },
              n = e.map(function (e) {
                return e.on("change", t);
              });
            return function () {
              n.forEach(function (e) {
                return e();
              }),
                $o.update(a);
            };
          }),
          r
        );
      }
      function Jp(e, t, n, r) {
        var a =
          "function" === typeof t
            ? t
            : (function () {
                var e = !Array.isArray(
                    arguments.length <= 0 ? void 0 : arguments[0]
                  ),
                  t = e ? 0 : -1,
                  n =
                    0 + t < 0 || arguments.length <= 0 + t
                      ? void 0
                      : arguments[0 + t],
                  r =
                    1 + t < 0 || arguments.length <= 1 + t
                      ? void 0
                      : arguments[1 + t],
                  a =
                    2 + t < 0 || arguments.length <= 2 + t
                      ? void 0
                      : arguments[2 + t],
                  i =
                    3 + t < 0 || arguments.length <= 3 + t
                      ? void 0
                      : arguments[3 + t],
                  o = lu(r, a, Qe({ mixer: Kp(a[0]) }, i));
                return e ? o(n) : o;
              })(t, n, r);
        return Array.isArray(e)
          ? eh(e, a)
          : eh([e], function (e) {
              var t = l(e, 1)[0];
              return a(t);
            });
      }
      function eh(e, t) {
        var n = Ha(function () {
          return [];
        });
        return $p(e, function () {
          n.length = 0;
          for (var r = e.length, a = 0; a < r; a++) n[a] = e[a].get();
          return t(n);
        });
      }
      function th() {
        var e = ye(),
          n = Hn(),
          r = n.getQuote,
          a = n.quote,
          i = n.author,
          o = Yn().isUserLoggedIn,
          s = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.container,
              r = e.target,
              a = e.layoutEffect,
              i = void 0 === a || a,
              o = Kn(e, Gp),
              s = Ha(Zp);
            return (
              (i ? Ca : t.useEffect)(function () {
                return (
                  Qp("target", r),
                  Qp("container", n),
                  Xp(function (e) {
                    var t = e.x,
                      n = e.y;
                    s.scrollX.set(t.current),
                      s.scrollXProgress.set(t.progress),
                      s.scrollY.set(n.current),
                      s.scrollYProgress.set(n.progress);
                  }, Qe(
                    Qe({}, o),
                    {},
                    {
                      container:
                        (null === n || void 0 === n ? void 0 : n.current) ||
                        void 0,
                      target:
                        (null === r || void 0 === r ? void 0 : r.current) ||
                        void 0,
                    }
                  ))
                );
              }, []),
              s
            );
          })(),
          u = s.scrollYProgress,
          l = Jp(u, [0, 1], [0, 560]),
          c = Jp(u, [0, 1], [0, 60]),
          f = Jp(u, [0, 1], [0, 120]),
          d = Jp(u, [0, 1], [0, 180]),
          p = Jp(u, [0, 1], [0, 260]);
        return (
          (0, t.useEffect)(function () {
            r();
          }, []),
          o()
            ? (0, zn.jsx)(Fe, { to: "/dashboard" })
            : (0, zn.jsxs)(Jf.div, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "home-page",
                children: [
                  (0, zn.jsxs)(Jf.nav, {
                    variants: nd,
                    initial: "hidden",
                    animate: "show",
                    className: "nav-1",
                    children: [
                      (0, zn.jsx)(Jf.a, {
                        variants: rd,
                        className: "nav-1__link",
                        href: "/",
                        children: "NOTERRA",
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        variants: ad,
                        className: "nav__links",
                        children: [
                          (0, zn.jsx)(Jf.button, {
                            variants: id,
                            onClick: function () {
                              return e("/login");
                            },
                            className: "nav-1__cta-1",
                            children: "LOGIN",
                          }),
                          (0, zn.jsx)(Jf.button, {
                            variants: id,
                            onClick: function () {
                              return e("/register");
                            },
                            className: "nav-1__cta-2",
                            children: "SIGN UP",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: od,
                    initial: "hidden",
                    animate: "show",
                    className: "header__container",
                    children: [
                      (0, zn.jsx)(Jf.h1, {
                        variants: sd,
                        className: "header__main",
                        children: "NOTERRA",
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        variants: sd,
                        className: "subheader__container",
                        children: [
                          (0, zn.jsx)("p", {
                            className: "subheader__quote",
                            children: a,
                          }),
                          (0, zn.jsxs)("p", {
                            className: "subheader__author",
                            children: ["-", i, "r"],
                          }),
                        ],
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        variants: ud,
                        initial: "hidden",
                        animate: "show",
                        className: "cta__container",
                        children: [
                          (0, zn.jsx)(Jf.button, {
                            className: "cta__button--signup",
                            onClick: function () {
                              e("/register");
                            },
                            children: "SIGN UP",
                          }),
                          (0, zn.jsx)(Jf.button, {
                            className: "cta__button--login",
                            onClick: function () {
                              e("/login");
                            },
                            children: "SIGN IN",
                          }),
                          (0, zn.jsx)("div", { className: "cta__line" }),
                        ],
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        variants: ud,
                        initial: "hidden",
                        animate: "show",
                        className: "home-image-container",
                        children: [
                          (0, zn.jsx)("img", {
                            className: "home-image",
                            src: lp,
                            alt: "bg",
                          }),
                          (0, zn.jsx)(Jf.div, {
                            variants: gd,
                            animate: "show",
                            whileTap: "tap",
                            drag: !0,
                            dragConstraints: {
                              top: -10,
                              left: -10,
                              right: 10,
                              bottom: 10,
                            },
                            className: "home-version",
                            children: (0, zn.jsx)("div", { children: " v1" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, zn.jsx)(Jf.div, {
                    variants: ud,
                    initial: "hidden",
                    animate: "show",
                    className: "home-sliding-text__container",
                    children: (0, zn.jsx)(Jf.h1, {
                      style: { x: l },
                      className: "home-sliding-text__text",
                      children:
                        "WRITE OUT YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE OUT YOUR PLANS\xa0\xa0\xa0\xa0 |\xa0\xa0\xa0\xa0 WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS",
                    }),
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: ud,
                    initial: "hidden",
                    animate: "show",
                    className: "features__heading",
                    children: [
                      (0, zn.jsxs)(Jf.div, {
                        className: "features__heading-row1",
                        children: [
                          (0, zn.jsx)(Jf.div, {
                            className: "features__headline",
                            children: "FEATURES",
                          }),
                          (0, zn.jsx)(Jf.div, {
                            className: "features__headline-dot",
                            children: ".",
                          }),
                          (0, zn.jsx)("button", {
                            className: "features__cta",
                            onClick: function () {
                              e("/register");
                            },
                            children: "CREATE AN ACCOUNT",
                          }),
                        ],
                      }),
                      (0, zn.jsx)(Jf.p, {
                        className: "features__headline-paragraph",
                        children:
                          "The app features three important methods for productivity which are taking down notes, writing todo lists, and using the Pomodoro timer.",
                      }),
                    ],
                  }),
                  (0, zn.jsxs)(Jf.div, {
                    variants: ld,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: !0, amount: 0.1 },
                    className: "features__body",
                    children: [
                      (0, zn.jsxs)(Jf.div, {
                        style: { x: c },
                        variants: cd,
                        className: "features__notes__container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "features__notes",
                            children: "notes",
                          }),
                          (0, zn.jsx)("div", {
                            className: "features__notes-dot",
                            children: ".",
                          }),
                        ],
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        style: { x: f },
                        variants: cd,
                        className: "features__notes__container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "features__notes",
                            children: "todo",
                          }),
                          (0, zn.jsx)("div", {
                            className: "features__notes-dot",
                            children: ".",
                          }),
                        ],
                      }),
                      (0, zn.jsxs)(Jf.div, {
                        style: { x: d },
                        variants: cd,
                        className: "features__notes__container",
                        children: [
                          (0, zn.jsx)("div", {
                            className: "features__notes",
                            children: "pomo",
                          }),
                          (0, zn.jsx)("div", {
                            className: "features__notes-dot",
                            children: ".",
                          }),
                        ],
                      }),
                      (0, zn.jsx)("div", {
                        className: "features__notes__container",
                        children: (0, zn.jsx)("div", {
                          className: "features__notes",
                          children: "\xa0 ",
                        }),
                      }),
                    ],
                  }),
                  (0, zn.jsx)(Jf.div, {
                    className: "home-sliding-text__container",
                    children: (0, zn.jsx)(Jf.h1, {
                      style: { x: p },
                      className: "home-sliding-text__text",
                      children:
                        "WRITE OUT YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE OUT YOUR PLANS\xa0\xa0\xa0\xa0 |\xa0\xa0\xa0\xa0 WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS\xa0\xa0\xa0\xa0 | \xa0\xa0\xa0\xa0WRITE YOUR PLANS",
                    }),
                  }),
                  (0, zn.jsxs)("div", {
                    className: "ready__container",
                    children: [
                      (0, zn.jsx)(Jf.div, {
                        variants: sd,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: { once: !0, amount: 0.4 },
                        className: "ready__text",
                        children: "READY TO GET STARTED?",
                      }),
                      (0, zn.jsx)(Jf.button, {
                        variants: yd,
                        animate: "show",
                        whileHover: "hover",
                        whileTap: "tap",
                        drag: !0,
                        dragConstraints: "drag",
                        className: "ready__cta__button--signup",
                        onClick: function () {
                          e("/register");
                        },
                        children: "SIGN UP",
                      }),
                      (0, zn.jsx)("button", {
                        className: "ready__cta__button--login",
                        onClick: function () {
                          e("/login");
                        },
                        children: "SIGN IN",
                      }),
                    ],
                  }),
                  (0, zn.jsxs)("footer", {
                    children: [
                      (0, zn.jsx)("div", {
                        className: "designed-by",
                        children: "designed and coded by",
                      }),
                      (0, zn.jsx)("div", {
                        className: "janille",
                        children: "janille sy",
                      }),
                      (0, zn.jsx)("div", {
                        className: "email",
                        children: "syjanille@gmail.com",
                      }),
                    ],
                  }),
                ],
              })
        );
      }
      function nh() {
        var e = ye();
        return (0, zn.jsxs)(Jf.div, {
          variants: td,
          initial: "hidden",
          animate: "show",
          exit: "exit",
          className: "error-page",
          children: [
            (0, zn.jsx)(Jf.div, {
              className: "error-page__header",
              children: "404",
            }),
            (0, zn.jsx)(Jf.div, {
              className: "error-page__text-1",
              children: "SORRY",
            }),
            (0, zn.jsx)(Jf.div, {
              className: "error-page__text-2",
              children: "THERE'S NOTHING HERE",
            }),
            (0, zn.jsx)(Jf.div, {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "error-page__cta",
              onClick: function () {
                e("/");
              },
              children: "GET BACK",
            }),
            (0, zn.jsx)("br", {}),
            (0, zn.jsx)("br", {}),
            (0, zn.jsx)("br", {}),
            (0, zn.jsx)("br", {}),
            (0, zn.jsx)(Jf.div, {
              animate: {
                scale: [1.4, 1, 1.4],
                x: ["0%", "10%", "0%"],
                y: ["0%", "10%", "0%"],
                rotate: [
                  0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360,
                ],
              },
              transition: {
                ease: "linear",
                duration: 5,
                repeat: 1 / 0,
                type: "spring",
              },
              whileHover: {},
              whileTap: { scale: 0.9, transition: { duration: 0.2 } },
              drag: !0,
              dragConstraints: { top: -50, left: -50, right: 50, bottom: 50 },
              className: "header__version-container",
              children: (0, zn.jsx)("div", {
                className: "version__text",
                children: "v1",
              }),
            }),
          ],
        });
      }
      function rh(e) {
        return Qd({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M9.342 18.782l-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0l-.788 2.94z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function ah(e) {
        return Qd({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function ih() {
        var e,
          t,
          n,
          r,
          a,
          i,
          o,
          s,
          u,
          l,
          c,
          f,
          d,
          p = Hn(),
          h = p.error,
          v = p.setError,
          m = p.isLoading,
          A = Yn(),
          g = A.showPassword,
          y = A.registerUser,
          b = A.setShowPassword,
          x = A.updateUser,
          w = A.tempoUploadImage,
          k = Sa(),
          S = k.register,
          E = k.handleSubmit,
          _ = k.formState.errors,
          T = k.reset;
        return (0, zn.jsxs)(Jf.div, {
          variants: dd,
          animate: "show",
          initial: "hidden",
          className: "auth-form-container",
          children: [
            (0, zn.jsxs)("div", {
              className: "auth-form__subtext__container",
              children: [
                (0, zn.jsx)("div", {
                  className: "auth-form__subtext__text",
                  children: "ALREADY HAVE AN ACCOUNT?",
                }),
                (0, zn.jsx)(We, {
                  to: "/login",
                  className: "auth-form__subtext__link",
                  children: "SIGN IN",
                }),
              ],
            }),
            (0, zn.jsxs)("form", {
              className: "auth-form",
              onSubmit: E(
                (function () {
                  var e = $e(
                    Ze().mark(function e(t) {
                      return Ze().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), y(t);
                            case 2:
                              T();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              children: [
                (0, zn.jsx)("img", {
                  className: "auth-image",
                  src: (null === x || void 0 === x ? void 0 : x.image) || Ea,
                  alt: "profile-pic",
                }),
                (0, zn.jsx)(
                  "input",
                  Qe(
                    Qe(
                      { className: "edit-input__input" },
                      S("image", {
                        onChange: function (e) {
                          w(e.target.files);
                        },
                      })
                    ),
                    {},
                    { type: "file", accept: "image/png, image/jpeg" }
                  )
                ),
                (0, zn.jsxs)("label", {
                  className: "form__label",
                  htmlFor: "reg-name",
                  children: [
                    "USERNAME",
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              (null !== (e = _.name) &&
                                void 0 !== e &&
                                e.message) ||
                              h
                                ? "form__input invalid"
                                : "form__input",
                          },
                          S("name", {
                            required: "Input name",
                            onChange: function () {
                              return v(null);
                            },
                            minLength: {
                              value: 3,
                              message: "Minimum of 3 characters",
                            },
                            maxLength: {
                              value: 8,
                              message: "Max 8 characters",
                            },
                          })
                        ),
                        {},
                        { id: "reg-name", placeholder: "Input username..." }
                      )
                    ),
                  ],
                }),
                (0, zn.jsxs)("label", {
                  className: "form__label",
                  htmlFor: "reg-email",
                  children: [
                    "EMAIL",
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              (null !== (t = _.email) &&
                                void 0 !== t &&
                                t.message) ||
                              h
                                ? "form__input invalid"
                                : "form__input",
                          },
                          S("email", {
                            onChange: function () {
                              return v(null);
                            },
                            required: "Input email",
                            pattern: {
                              value:
                                /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
                              message: "Input proper email",
                            },
                          })
                        ),
                        {},
                        { id: "reg-email", placeholder: "Input email..." }
                      )
                    ),
                  ],
                }),
                (0, zn.jsxs)("label", {
                  htmlFor: "login-password",
                  className: "form__label",
                  children: [
                    "PASSWORD",
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              (null !== (n = _.password) &&
                                void 0 !== n &&
                                n.message) ||
                              h
                                ? "form__input password invalid"
                                : "form__input password",
                            id: "login-password",
                          },
                          S("password", {
                            required: "Input Password",
                            onChange: function () {
                              return v(null);
                            },
                          })
                        ),
                        {},
                        {
                          type: g ? "text" : "password",
                          placeholder:
                            null !== (r = _.password) &&
                            void 0 !== r &&
                            r.message
                              ? "Use valid password..."
                              : "Input password...",
                        }
                      )
                    ),
                    (0, zn.jsx)("div", {
                      className: "form__btn-showPassword",
                      onClick: function () {
                        b(function (e) {
                          return !e;
                        });
                      },
                      children: g ? (0, zn.jsx)(ah, {}) : (0, zn.jsx)(rh, {}),
                    }),
                  ],
                }),
                (0, zn.jsx)(Jf.button, {
                  whileHover: "hover",
                  whileTap: "tap",
                  variants: bd,
                  type: "submit",
                  className: "form__btn--submit",
                  disabled: m,
                  children: m ? "LOADING..." : "SIGN UP",
                }),
              ],
            }),
            ((null === (a = _.password) || void 0 === a ? void 0 : a.message) ||
              (null === (i = _.email) || void 0 === i ? void 0 : i.message) ||
              (null === (o = _.name) || void 0 === o ? void 0 : o.message) ||
              h) &&
              (0, zn.jsxs)("div", {
                className: "error__container",
                children: [
                  (null === (s = _.email) || void 0 === s
                    ? void 0
                    : s.message) &&
                    (0, zn.jsx)("p", {
                      children:
                        null === (u = _.email) || void 0 === u
                          ? void 0
                          : u.message,
                    }),
                  (null === (l = _.name) || void 0 === l
                    ? void 0
                    : l.message) &&
                    (0, zn.jsx)("p", {
                      children:
                        null === (c = _.name) || void 0 === c
                          ? void 0
                          : c.message,
                    }),
                  (null === (f = _.password) || void 0 === f
                    ? void 0
                    : f.message) &&
                    (0, zn.jsx)("p", {
                      children:
                        null === (d = _.password) || void 0 === d
                          ? void 0
                          : d.message,
                    }),
                  h && (0, zn.jsx)("p", { children: h }),
                ],
              }),
          ],
        });
      }
      function oh() {
        var e = Hn(),
          n = e.setIsLoading,
          r = e.setError,
          a = Yn(),
          i = a.isUserLoggedIn,
          o = a.setShowPassword,
          s = a.setUpdateUser;
        (0, t.useEffect)(function () {
          n(!1), r(null), o(!1), s(null);
        }, []);
        var u = ye();
        return i()
          ? (0, zn.jsx)(Fe, { to: "/dashboard" })
          : (0, zn.jsxs)(Jf.div, {
              variants: ed,
              initial: "hidden",
              animate: "show",
              exit: "exit",
              className: "auth-page",
              children: [
                (0, zn.jsx)(Jf.nav, {
                  variants: nd,
                  initial: "hidden",
                  animate: "show",
                  className: "nav-1",
                  children: (0, zn.jsx)(Jf.a, {
                    variants: rd,
                    onClick: function () {
                      u("/");
                    },
                    className: "nav-1__link",
                    children: "NOTERRA",
                  }),
                }),
                (0, zn.jsxs)(Jf.header, {
                  variants: fd,
                  className: "auth__header__container",
                  children: [
                    (0, zn.jsx)("span", {
                      className: "register auth__header__text",
                      children: "REGISTER",
                    }),
                    (0, zn.jsx)("span", {
                      className: "register auth__header__dot",
                      children: ".",
                    }),
                  ],
                }),
                (0, zn.jsx)(ih, {}),
              ],
            });
      }
      function sh() {
        var e,
          t,
          n,
          r,
          a,
          i,
          o,
          s,
          u,
          l = Hn(),
          c = l.error,
          f = l.setError,
          d = l.isLoading,
          p = Yn(),
          h = p.loginUser,
          v = p.setShowPassword,
          m = p.showPassword,
          A = Sa(),
          g = A.register,
          y = A.handleSubmit,
          b = A.reset,
          x = A.formState.errors;
        return (0, zn.jsxs)(Jf.div, {
          className: "auth-form-container",
          variants: dd,
          animate: "show",
          initial: "hidden",
          children: [
            (0, zn.jsxs)("div", {
              className: "auth-form__subtext__container",
              children: [
                (0, zn.jsx)("div", {
                  className: "auth-form__subtext__text",
                  children: "DON'T HAVE AN ACCOUNT?",
                }),
                (0, zn.jsx)(We, {
                  to: "/register",
                  className: "auth-form__subtext__link",
                  children: "SIGN UP",
                }),
              ],
            }),
            (0, zn.jsxs)("form", {
              className: "auth-form",
              onSubmit: y(
                (function () {
                  var e = $e(
                    Ze().mark(function e(t) {
                      return Ze().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), h(t);
                            case 2:
                              b();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              children: [
                (0, zn.jsx)("label", {
                  className: "form__label",
                  htmlFor: "login-email",
                  children: "EMAIL",
                }),
                (0, zn.jsx)(
                  "input",
                  Qe(
                    Qe(
                      {
                        className:
                          (null !== (e = x.email) &&
                            void 0 !== e &&
                            e.message) ||
                          c
                            ? "form__input invalid"
                            : "form__input",
                        id: "login-email",
                      },
                      g("email", {
                        onChange: function () {
                          return f(null);
                        },
                        required: "Input email",
                        pattern: {
                          value:
                            /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i,
                          message: "Input proper email",
                        },
                      })
                    ),
                    {},
                    { placeholder: "Input email..." }
                  )
                ),
                (0, zn.jsxs)("label", {
                  htmlFor: "login-password",
                  className: "form__label",
                  children: [
                    "PASSWORD",
                    (0, zn.jsx)(
                      "input",
                      Qe(
                        Qe(
                          {
                            className:
                              (null !== (t = x.password) &&
                                void 0 !== t &&
                                t.message) ||
                              c
                                ? "form__input password invalid"
                                : "form__input password",
                            id: "login-password",
                          },
                          g("password", {
                            required: "Input Password",
                            onChange: function () {
                              return f(null);
                            },
                          })
                        ),
                        {},
                        {
                          type: m ? "text" : "password",
                          placeholder:
                            null !== (n = x.password) &&
                            void 0 !== n &&
                            n.message
                              ? "Use valid password..."
                              : "Input password...",
                        }
                      )
                    ),
                    (0, zn.jsx)("div", {
                      className: "form__btn-showPassword",
                      onClick: function () {
                        v(function (e) {
                          return !e;
                        });
                      },
                      children: m ? (0, zn.jsx)(ah, {}) : (0, zn.jsx)(rh, {}),
                    }),
                  ],
                }),
                (0, zn.jsx)(Jf.button, {
                  whileHover: "hover",
                  whileTap: "tap",
                  variants: bd,
                  className: "form__btn--submit",
                  disabled: d,
                  type: "submit",
                  value: "SUBMIT",
                  children: d ? "LOADING..." : "SIGN IN",
                }),
              ],
            }),
            ((null === (r = x.password) || void 0 === r ? void 0 : r.message) ||
              (null === (a = x.email) || void 0 === a ? void 0 : a.message) ||
              c) &&
              (0, zn.jsxs)("div", {
                className: "error__container",
                children: [
                  (null === (i = x.email) || void 0 === i
                    ? void 0
                    : i.message) &&
                    (0, zn.jsx)("p", {
                      children:
                        null === (o = x.email) || void 0 === o
                          ? void 0
                          : o.message,
                    }),
                  (null === (s = x.password) || void 0 === s
                    ? void 0
                    : s.message) &&
                    (0, zn.jsx)("p", {
                      children:
                        null === (u = x.password) || void 0 === u
                          ? void 0
                          : u.message,
                    }),
                  c && (0, zn.jsx)("p", { children: c }),
                ],
              }),
          ],
        });
      }
      function uh() {
        var e = Hn(),
          n = e.setIsLoading,
          r = e.setError,
          a = Yn(),
          i = a.isUserLoggedIn,
          o = a.setShowPassword,
          s = a.setUpdateUser,
          u = ye();
        return (
          (0, t.useEffect)(function () {
            n(!1), r(null), s(null), o(!1);
          }, []),
          i()
            ? (0, zn.jsx)(Fe, { to: "/dashboard" })
            : (0, zn.jsxs)(Jf.div, {
                variants: ed,
                initial: "hidden",
                animate: "show",
                exit: "exit",
                className: "auth-page",
                children: [
                  (0, zn.jsx)(Jf.nav, {
                    variants: nd,
                    initial: "hidden",
                    animate: "show",
                    className: "nav-1",
                    children: (0, zn.jsx)(Jf.a, {
                      variants: rd,
                      onClick: function () {
                        u("/");
                      },
                      className: "nav-1__link",
                      children: "NOTERRA",
                    }),
                  }),
                  (0, zn.jsxs)(Jf.header, {
                    variants: fd,
                    className: "auth__header__container",
                    children: [
                      (0, zn.jsx)("span", {
                        className: "auth__header__text",
                        children: "LOGIN",
                      }),
                      (0, zn.jsx)("span", {
                        className: "auth__header__dot",
                        children: ".",
                      }),
                    ],
                  }),
                  (0, zn.jsx)(sh, {}),
                ],
              })
        );
      }
      var lh = function (e) {
        var t = ge();
        return (0, zn.jsx)(Fd, {
          children: (0, zn.jsxs)(
            De,
            {
              location: t,
              children: [
                (0, zn.jsxs)(Re, {
                  element: (0, zn.jsx)(Xn, {}),
                  children: [
                    (0, zn.jsx)(Re, {
                      path: "/dashboard",
                      element: (0, zn.jsx)(Od, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/note",
                      element: (0, zn.jsx)(Ld, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/note/new",
                      element: (0, zn.jsx)(zd, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/note/:id",
                      element: (0, zn.jsx)(Md, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/todo",
                      element: (0, zn.jsx)(Hd, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/pomodoro",
                      element: (0, zn.jsx)(Jd, {}),
                    }),
                    (0, zn.jsx)(Re, {
                      path: "/pomodoro/:id",
                      element: (0, zn.jsx)(up, {}),
                    }),
                  ],
                }),
                (0, zn.jsx)(Re, { path: "/", element: (0, zn.jsx)(th, {}) }),
                (0, zn.jsx)(Re, {
                  path: "/login",
                  element: (0, zn.jsx)(uh, {}),
                }),
                (0, zn.jsx)(Re, {
                  path: "/register",
                  element: (0, zn.jsx)(oh, {}),
                }),
                (0, zn.jsx)(Re, { path: "*", element: (0, zn.jsx)(nh, {}) }),
              ],
            },
            t.pathname
          ),
        });
      };
      var ch = function () {
        return (0, zn.jsx)(Be, { children: (0, zn.jsx)(lh, {}) });
      };
      (function () {
        if ("undefined" !== typeof window && window.document) {
          if (
            !(function (e) {
              var t = typeof e;
              return "function" === t || ("object" === t && !!e);
            })(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
          )
            return;
          for (var e in window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] =
              "renderers" !== e
                ? "function" === typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e]
                  ? Function.prototype
                  : null
                : new Map();
        }
      })(),
        a
          .createRoot(document.getElementById("root"))
          .render(
            (0, zn.jsx)(Bn, {
              children: (0, zn.jsx)(qn, {
                children: (0, zn.jsx)(Qn, { children: (0, zn.jsx)(ch, {}) }),
              }),
            })
          );
    })();
})();
//# sourceMappingURL=main.bbb2e5ea.js.map

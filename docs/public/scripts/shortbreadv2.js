/*! Version: 1.0.14 */
!(function (e, a) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = a();
  else if ('function' == typeof define && define.amd) define([], a);
  else {
    var c = a();
    for (var t in c) ('object' == typeof exports ? exports : e)[t] = c[t];
  }
})(window, function () {
  return (function (e) {
    var a = {};
    function c(t) {
      if (a[t]) return a[t].exports;
      var n = (a[t] = { i: t, l: !1, exports: {} });
      return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
    }
    return (
      (c.m = e),
      (c.c = a),
      (c.d = function (e, a, t) {
        c.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
      }),
      (c.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (c.t = function (e, a) {
        if ((1 & a && (e = c(e)), 8 & a)) return e;
        if (4 & a && 'object' == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (
          (c.r(t),
          Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
          2 & a && 'string' != typeof e)
        )
          for (var n in e)
            c.d(
              t,
              n,
              function (a) {
                return e[a];
              }.bind(null, n)
            );
        return t;
      }),
      (c.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return c.d(a, 'a', a), a;
      }),
      (c.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }),
      (c.p = ''),
      c((c.s = 13))
    );
  })([
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      function n(e, a, c, t) {
        var n;
        if (
          'svg' === c ||
          (function e(a) {
            return !!a && ('svg' === a.tagName || e(a.parentNode));
          })(a)
        )
          n = e.createElementNS('http://www.w3.org/2000/svg', c);
        else {
          if ('string' != typeof c) throw Error('Unrecognized type ' + c);
          n = e.createElement(c);
        }
        return (
          (function (e, a) {
            if (null === a) return;
            Object.keys(a).forEach(function (c) {
              if ('style' === c)
                (Object.keys(a.style) || []).forEach(function (c) {
                  e.style[c] = a.style[c];
                });
              else if ('events' === c) {
                var t = a.events;
                Object.keys(t).forEach(function (a) {
                  e[a] = t[a];
                });
              } else {
                var n = a[c];
                e.setAttribute(c, n);
              }
            });
          })(n, t),
          n
        );
      }
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.render = a.act = void 0),
        (a.act = function (e, a) {
          for (var c = [], n = 2; n < arguments.length; n++)
            c[n - 2] = arguments[n];
          if ('string' == typeof e) return { type: e, props: a, children: c };
          if ('function' == typeof e) return e(a, c);
          if (e.type)
            return { type: e.type, props: t(t({}, e.props), a), children: c };
          throw Error('Unsupported tag type ' + e);
        }),
        (a.render = function e(a, c, t, o) {
          void 0 === t && (t = document);
          var i = c.type,
            r = c.props,
            s = c.children,
            l = n(t, a, i, r);
          return (
            s &&
              s.length > 0 &&
              s.forEach(function (a) {
                if ('string' == typeof a) l.appendChild(t.createTextNode(a));
                else if ('number' == typeof a)
                  l.appendChild(t.createTextNode(s.toString()));
                else {
                  if (null === a) throw Error('Unsupported child type ' + a);
                  e(l, a, t, !0);
                }
              }),
            o ? a.appendChild(l) : a.insertBefore(l, a.firstChild)
          );
        });
    },
    function (e, a, c) {
      'use strict';
      var t,
        n = function () {
          return (
            void 0 === t &&
              (t = Boolean(window && document && document.all && !window.atob)),
            t
          );
        },
        o = (function () {
          var e = {};
          return function (a) {
            if (void 0 === e[a]) {
              var c = document.querySelector(a);
              if (
                window.HTMLIFrameElement &&
                c instanceof window.HTMLIFrameElement
              )
                try {
                  c = c.contentDocument.head;
                } catch (e) {
                  c = null;
                }
              e[a] = c;
            }
            return e[a];
          };
        })(),
        i = [];
      function r(e) {
        for (var a = -1, c = 0; c < i.length; c++)
          if (i[c].identifier === e) {
            a = c;
            break;
          }
        return a;
      }
      function s(e, a) {
        for (var c = {}, t = [], n = 0; n < e.length; n++) {
          var o = e[n],
            s = a.base ? o[0] + a.base : o[0],
            l = c[s] || 0,
            u = ''.concat(s, ' ').concat(l);
          c[s] = l + 1;
          var d = r(u),
            p = { css: o[1], media: o[2], sourceMap: o[3] };
          -1 !== d
            ? (i[d].references++, i[d].updater(p))
            : i.push({ identifier: u, updater: g(p, a), references: 1 }),
            t.push(u);
        }
        return t;
      }
      function l(e) {
        var a = document.createElement('style'),
          t = e.attributes || {};
        if (void 0 === t.nonce) {
          var n = c.nc;
          n && (t.nonce = n);
        }
        if (
          (Object.keys(t).forEach(function (e) {
            a.setAttribute(e, t[e]);
          }),
          'function' == typeof e.insert)
        )
          e.insert(a);
        else {
          var i = o(e.insert || 'head');
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(a);
        }
        return a;
      }
      var u,
        d =
          ((u = []),
          function (e, a) {
            return (u[e] = a), u.filter(Boolean).join('\n');
          });
      function p(e, a, c, t) {
        var n = c
          ? ''
          : t.media
          ? '@media '.concat(t.media, ' {').concat(t.css, '}')
          : t.css;
        if (e.styleSheet) e.styleSheet.cssText = d(a, n);
        else {
          var o = document.createTextNode(n),
            i = e.childNodes;
          i[a] && e.removeChild(i[a]),
            i.length ? e.insertBefore(o, i[a]) : e.appendChild(o);
        }
      }
      function b(e, a, c) {
        var t = c.css,
          n = c.media,
          o = c.sourceMap;
        if (
          (n ? e.setAttribute('media', n) : e.removeAttribute('media'),
          o &&
            btoa &&
            (t += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              ' */'
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = t;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      }
      var f = null,
        h = 0;
      function g(e, a) {
        var c, t, n;
        if (a.singleton) {
          var o = h++;
          (c = f || (f = l(a))),
            (t = p.bind(null, c, o, !1)),
            (n = p.bind(null, c, o, !0));
        } else
          (c = l(a)),
            (t = b.bind(null, c, a)),
            (n = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(c);
            });
        return (
          t(e),
          function (a) {
            if (a) {
              if (
                a.css === e.css &&
                a.media === e.media &&
                a.sourceMap === e.sourceMap
              )
                return;
              t((e = a));
            } else n();
          }
        );
      }
      e.exports = function (e, a) {
        (a = a || {}).singleton ||
          'boolean' == typeof a.singleton ||
          (a.singleton = n());
        var c = s((e = e || []), a);
        return function (e) {
          if (
            ((e = e || []),
            '[object Array]' === Object.prototype.toString.call(e))
          ) {
            for (var t = 0; t < c.length; t++) {
              var n = r(c[t]);
              i[n].references--;
            }
            for (var o = s(e, a), l = 0; l < c.length; l++) {
              var u = r(c[l]);
              0 === i[u].references && (i[u].updater(), i.splice(u, 1));
            }
            c = o;
          }
        };
      };
    },
    function (e, a, c) {
      'use strict';
      e.exports = function (e) {
        var a = [];
        return (
          (a.toString = function () {
            return this.map(function (a) {
              var c = (function (e, a) {
                var c = e[1] || '',
                  t = e[3];
                if (!t) return c;
                if (a && 'function' == typeof btoa) {
                  var n =
                      ((i = t),
                      (r = btoa(
                        unescape(encodeURIComponent(JSON.stringify(i)))
                      )),
                      (s =
                        'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                          r
                        )),
                      '/*# '.concat(s, ' */')),
                    o = t.sources.map(function (e) {
                      return '/*# sourceURL='
                        .concat(t.sourceRoot || '')
                        .concat(e, ' */');
                    });
                  return [c].concat(o).concat([n]).join('\n');
                }
                var i, r, s;
                return [c].join('\n');
              })(a, e);
              return a[2] ? '@media '.concat(a[2], ' {').concat(c, '}') : c;
            }).join('');
          }),
          (a.i = function (e, c, t) {
            'string' == typeof e && (e = [[null, e, '']]);
            var n = {};
            if (t)
              for (var o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (n[i] = !0);
              }
            for (var r = 0; r < e.length; r++) {
              var s = [].concat(e[r]);
              (t && n[s[0]]) ||
                (c &&
                  (s[2]
                    ? (s[2] = ''.concat(c, ' and ').concat(s[2]))
                    : (s[2] = c)),
                a.push(s));
            }
          }),
          a
        );
      };
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.TABTRAP_ID =
          a.CUSTOMIZE_SAVE_BTN_ID =
          a.CUSTOMIZE_CANCEL_BTN_ID =
          a.CUSTOMIZE_ID =
          a.BANNER_ACCEPT_BTN_ID =
          a.BANNER_CUSTOMIZE_BTN_ID =
          a.BANNER_ID =
          a.APP_ID =
          a.CONTAINER_ID =
            void 0),
        (a.CONTAINER_ID = 'awsccc-sb-ux-c'),
        (a.APP_ID = 'awsccc-sb-a'),
        (a.BANNER_ID = 'awsccc-cb'),
        (a.BANNER_CUSTOMIZE_BTN_ID = 'awsccc-cb-btn-customize'),
        (a.BANNER_ACCEPT_BTN_ID = 'awsccc-cb-btn-accept'),
        (a.CUSTOMIZE_ID = 'awsccc-cs'),
        (a.CUSTOMIZE_CANCEL_BTN_ID = 'awsccc-cs-btn-cancel'),
        (a.CUSTOMIZE_SAVE_BTN_ID = 'awsccc-cs-btn-save'),
        (a.TABTRAP_ID = 'awsccc-cs-tabtrap');
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.DEFAULT_TANGERINEBOX_DEV_DOMAIN =
          a.DEFAULT_DOMAIN =
          a.DEFAULT_LANGUAGE =
          a.ALL_ALLOWED =
          a.DEFAULT_COOKIE =
          a.DEFAULT_COOKIE_AGE =
          a.COOKIE_VERSION =
            void 0),
        (a.COOKIE_VERSION = '1'),
        (a.DEFAULT_COOKIE_AGE = 31536e3),
        (a.DEFAULT_COOKIE = {
          essential: !0,
          functional: !1,
          performance: !0,
          advertising: !1,
        }),
        (a.ALL_ALLOWED = {
          essential: !0,
          functional: !0,
          performance: !0,
          advertising: !0,
        }),
        (a.DEFAULT_LANGUAGE = 'en-us'),
        (a.DEFAULT_DOMAIN = '.aws.amazon.com'),
        (a.DEFAULT_TANGERINEBOX_DEV_DOMAIN = '.aws-dev.amazon.com');
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.isChecked = void 0);
      var t = c(0),
        n = c(16),
        o = c(21),
        i = c(7),
        r = c(3),
        s = c(8);
      c(42);
      var l = c(44),
        u = c(4),
        d = c(45);
      function p(e) {
        return (
          '' ===
          document
            .querySelector('label[data-id=awsccc-u-cb-' + e + '-label] input')
            .getAttribute('checked')
        );
      }
      function b(e) {
        var a = s.localizationDictionary[e.language],
          c = s.localizationRtl.indexOf(e.language) > -1 ? 'awsccc-Rtl' : '';
        function b() {
          return document.querySelector('div[data-id=' + r.BANNER_ID + ']');
        }
        function f() {
          return document.querySelector('div[data-id=' + r.CUSTOMIZE_ID + ']');
        }
        function h(e, a) {
          var c = document.querySelector(
              'label[data-id=awsccc-u-cb-' + e + '-label]'
            ),
            t = c.classList,
            n = c.querySelector('input');
          a
            ? (n.setAttribute('checked', ''),
              t.add('awsccc-u-cb-checkbox-active'))
            : (t.remove('awsccc-u-cb-checkbox-active'),
              n.removeAttribute('checked')),
            n.setAttribute('aria-checked', '' + a);
        }
        var g = function (e) {
            var a = e.event,
              c = e.category;
            ('checkbox' !== a.target.getAttribute('type') &&
              'awsccc-cs-s-title' !== a.target.getAttribute('class')) ||
              h(c, !p(c));
          },
          m = function (a) {
            return function (c, t) {
              var n = b().querySelector('div[data-id=awsccc-cb-tabstart]');
              (document.querySelector(
                'div[data-id=' + r.CUSTOMIZE_ID + ']'
              ).style.display = 'none'),
                (b().style.display = 'none'),
                n.setAttribute('tabindex', '-1'),
                e.onSaveConsent(c),
                document.body.classList.remove('awsccc-cs-modal-open'),
                e.log('info')(a, {
                  detail: 'Save Consent Clicked',
                  source: t,
                  cookie: e.getConsentCookie(),
                });
            };
          },
          k = function (e) {
            'Escape' === e.key && x();
          },
          v = function () {
            return e.getConsentCookie() || u.DEFAULT_COOKIE;
          },
          w = function (a) {
            var c;
            (c = v()),
              i.COOKIE_CATEGORIES.filter(function (e) {
                return e !== i.ESSENTIAL;
              }).forEach(function (e) {
                h(e, c[e]);
              }),
              f().addEventListener('keydown', k),
              (f().style.display = 'block'),
              document.body.classList.add('awsccc-cs-modal-open');
            var t = document.querySelectorAll(
              'div[data-id=' + r.TABTRAP_ID + ']'
            );
            l.convertToArray(t).forEach(function (e, a) {
              0 === a && e.focus({ preventScroll: !0 }),
                e.setAttribute('tabindex', '0');
            }),
              e.log('info')('customizeCookies', {
                detail: 'Customize Consent Clicked',
                source: a,
                cookie: e.getConsentCookie(),
              });
          },
          x = function () {
            f().removeEventListener('keydown', k),
              (f().style.display = 'none'),
              document.body.classList.remove('awsccc-cs-modal-open');
            var a = f().querySelectorAll('div[data-id=' + r.TABTRAP_ID + ']');
            (l.convertToArray(a).forEach(function (e) {
              e.setAttribute('tabindex', '-1');
            }),
            'block' === b().style.display) &&
              b()
                .querySelector('div[data-id=awsccc-cb-tabstart]')
                .focus({ preventScroll: !0 });
            e.onModalClose && e.onModalClose();
          };
        return (
          d.default(function () {
            document.querySelector('#' + r.CONTAINER_ID) ||
              t.render(
                e.parent || document.body,
                t.act(
                  'div',
                  { id: r.CONTAINER_ID },
                  t.act(
                    'div',
                    { id: r.APP_ID, class: c },
                    t.act(n.default, {
                      showConsentSelector: w,
                      handleSaveClick: m('acceptAll'),
                      localizedText: a.consentBanner,
                      hasConsoleNavFooter: e.hasConsoleNavFooter,
                    }),
                    t.act(o.default, {
                      consentState: v(),
                      handleSaveClick: m('customize'),
                      handleCheckboxToggle: g,
                      localizedText: a.consentSelector,
                      closeConsentSelector: x,
                      darkModeEnabled: e.hasConsoleNavFooter,
                    })
                  )
                )
              );
          }),
          {
            showConsentSelector: function (e) {
              d.default(function () {
                w(e);
              });
            },
            showBanner: function (e) {
              d.default(function () {
                var a;
                (a = b().querySelector('div[data-id=awsccc-cb-tabstart]')),
                  (b().style.display = 'block'),
                  a.setAttribute('tabindex', '0'),
                  a.focus({ preventScroll: !0 }),
                  e();
              });
            },
          }
        );
      }
      (a.isChecked = p),
        (a.default = {
          createShortbreadUi: function (e) {
            return b(e);
          },
        });
    },
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(a, '__esModule', { value: !0 });
      var n = c(0);
      c(17),
        (a.default = function (e) {
          var a = e.dataId,
            c = e.variant,
            o = e.text,
            i = e.events,
            r = e.props,
            s = void 0 === r ? {} : r;
          return n.act(
            'button',
            t(
              { tabindex: '0', 'data-id': a, type: 'submit', events: i || {} },
              s,
              {
                class:
                  'awsccc-u-btn ' +
                  ('primary' === c
                    ? 'awsccc-u-btn-primary'
                    : 'awsccc-u-btn-secondary'),
              }
            ),
            n.act('span', null, o)
          );
        });
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.COOKIE_CATEGORIES = a.ESSENTIAL = void 0),
        (a.ESSENTIAL = 'essential'),
        (a.COOKIE_CATEGORIES = [
          a.ESSENTIAL,
          'performance',
          'functional',
          'advertising',
        ]);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.localizationDictionary = a.localizationRtl = void 0);
      var t = c(0),
        n = c(39),
        o = 'https://aws.amazon.com/legal/cookies/';
      (a.localizationRtl = ['ar-sa']),
        (a.localizationDictionary = {
          'ar-sa': {
            consentBanner: {
              title:
                'ØªØ­Ø¯ÙŠØ¯ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·',
              paragraph:
                'Ù†Ø³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø´Ø§Ø¨Ù‡Ø© Ù„ØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨ØªÙƒØŒ ÙˆÙ„ØªÙˆÙÙŠØ± Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ø°Ø§Øª Ø§Ù„ØµÙ„Ø© ÙˆØ¥Ø¬Ø±Ø§Ø¡ Ø§Ù„ØªØ­Ø³ÙŠÙ†Ø§Øª. ÙˆØªØ³ØªØ®Ø¯Ù… Ø§Ù„Ø£Ø·Ø±Ø§Ù Ø§Ù„Ø«Ø§Ù„Ø«Ø© Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ù‡Ø°Ù‡ Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø£ÙŠØ¶Ù‹Ø§ Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙ†Ø§ Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª ÙˆØªÙˆÙÙŠØ± Ù…ÙŠØ²Ø§Øª Ù…Ø¹ÙŠÙ†Ø© Ù„Ù„Ù…ÙˆÙ‚Ø¹.',
              'button-customize': 'ØªØ®ØµÙŠØµ',
              'button-accept': 'Ù‚Ø¨ÙˆÙ„ Ø§Ù„ÙƒÙ„',
              'button-customize-aria-label':
                'ØªØ®ØµÙŠØµ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·',
              'button-accept-aria-label':
                'Ù‚Ø¨ÙˆÙ„ Ø¬Ù…ÙŠØ¹ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·',
            },
            consentSelector: {
              header:
                'ØªØ®ØµÙŠØµ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·',
              intro:
                'Ø¥Ù†Ù†Ø§ Ù†Ø³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø´Ø§Ø¨Ù‡Ø© (ÙŠØ·Ù„Ù‚ Ø¹Ù„ÙŠÙ‡Ø§ Ù…Ø¬ØªÙ…Ø¹Ø© Â«Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·Â») Ù„Ù„Ø£ØºØ±Ø§Ø¶ Ø§Ù„ØªØ§Ù„ÙŠØ©.',
              'checkbox-label': 'Ù…Ø³Ù…ÙˆØ­ Ø¨Ù‡Ø§',
              'button-cancel': 'Ø¥Ù„ØºØ§Ø¡',
              'button-save': 'Ø­ÙØ¸ Ø§Ù„ØªÙØ¶ÙŠÙ„Ø§Øª',
              'button-cancel-aria-label':
                'Ø¥Ù„ØºØ§Ø¡ ØªØ®ØµÙŠØµ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·',
              'button-save-aria-label':
                'Ø­ÙØ¸ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ù…Ø®ØµØµØ©',
              footer: t.act(
                'span',
                null,
                'Ù‚Ø¯ ÙŠØ¤Ø«Ø± Ø­Ø¸Ø± Ø¨Ø¹Ø¶ Ø£Ù†ÙˆØ§Ø¹ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø¹Ù„Ù‰ ØªØ¬Ø±Ø¨ØªÙƒ ÙÙŠ Ù…ÙˆØ§Ù‚Ø¹Ù†Ø§. ÙŠÙ…ÙƒÙ†Ùƒ ØªØºÙŠÙŠØ± ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ ÙÙŠ Ø£ÙŠ ÙˆÙ‚Øª Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„Ù†Ù‚Ø± ÙÙˆÙ‚ ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ÙÙŠ ØªØ°ÙŠÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù…ÙˆÙ‚Ø¹. Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…Ø²ÙŠØ¯ Ø­ÙˆÙ„ Ø·Ø±ÙŠÙ‚ØªÙ†Ø§ ÙˆØ§Ù„Ø£Ø·Ø±Ø§Ù Ø§Ù„Ø«Ø§Ù„Ø«Ø© ÙÙŠ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ÙÙŠ Ù…ÙˆØ§Ù‚Ø¹Ù†Ø§ØŒ ÙŠØ±Ø¬Ù‰ Ù‚Ø±Ø§Ø¡Ø© ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Ø§Ù„ÙØªØ­ ÙÙŠ Ù†Ø§ÙØ°Ø© Ø¬Ø¯ÙŠØ¯Ø©',
                  },
                  t.act(
                    'span',
                    null,
                    'Ø¥Ø´Ø¹Ø§Ø± Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù„Ø®Ø¯Ù…Ø© AWSâ€',
                    t.act(n.default, { size: '10px' })
                  )
                ),
                ' Ø§Ù„Ø®Ø§ØµØ© Ø¨Ù†Ø§'
              ),
              'section-essential': {
                title: 'Ø£Ø³Ø§Ø³ÙŠ',
                paragraph:
                  'Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ© Ù‡Ø°Ù‡ Ø¶Ø±ÙˆØ±ÙŠØ© Ù…Ù† Ø£Ø¬Ù„ Ø¥ØªØ§Ø­Ø© Ù…ÙˆÙ‚Ø¹Ù†Ø§ ÙˆØ®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆÙ„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ù„ØºØ§Ø¡ ØªÙ†Ø´ÙŠØ·Ù‡Ø§. ÙˆÙŠØªÙ… ØªØ¹ÙŠÙŠÙ†Ù‡Ø§ Ø¹Ø§Ø¯Ø©Ù‹ ÙÙ‚Ø· Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ù„Ø¥Ø¬Ø±Ø§Ø¡Ø§ØªÙƒ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹ØŒ Ù…Ø«Ù„ ØªØ¹ÙŠÙŠÙ† ØªÙØ¶ÙŠÙ„Ø§Øª Ø®ØµÙˆØµÙŠØªÙƒØŒ Ø£Ùˆ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ØŒ Ø£Ùˆ Ù…Ù„Ø¡ Ø§Ù„Ù†Ù…Ø§Ø°Ø¬. ',
                'checkbox-description':
                  'Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©',
              },
              'section-performance': {
                title: 'Ø§Ù„Ø£Ø¯Ø§Ø¡',
                paragraph:
                  'ØªÙˆÙØ± Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø®Ø§ØµØ© Ø¨Ø§Ù„Ø£Ø¯Ø§Ø¡ Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª Ù…Ø¬Ù‡ÙˆÙ„Ø© Ø­ÙˆÙ„ Ø·Ø±ÙŠÙ‚Ø© ØªÙ†Ù‚Ù„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙÙŠ Ù…ÙˆÙ‚Ø¹Ù†Ø§ØŒ ÙˆØ°Ù„Ùƒ Ù„ÙŠØªØ³Ù†Ù‰ Ù„Ù†Ø§ ØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹ ÙˆØ£Ø¯Ø§Ø¦Ù‡. ÙˆÙ‚Ø¯ ØªÙ‚ÙˆÙ… Ø£Ø·Ø±Ø§Ù Ø«Ø§Ù„Ø«Ø© Ù…Ø¹ØªÙ…Ø¯Ø© Ø¨Ø¥Ø¬Ø±Ø§Ø¡ ØªØ­Ù„ÙŠÙ„ Ù†ÙŠØ§Ø¨Ø© Ø¹Ù†Ø§ØŒ Ù„ÙƒÙ† Ù„Ø§ ÙŠÙ…ÙƒÙ†Ù‡Ø§ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ù„Ø£ØºØ±Ø§Ø¶Ù‡Ø§ Ø§Ù„Ø®Ø§ØµØ©.',
                'checkbox-description': 'Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨ÙØ¦Ø© Ø§Ù„Ø£Ø¯Ø§Ø¡',
              },
              'section-functional': {
                title: 'Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ©',
                paragraph:
                  'ØªØ³Ø§Ø¹Ø¯Ù†Ø§ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ© Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ù…ÙŠØ²Ø§Øª Ù…ÙˆÙ‚Ø¹ Ù…ÙÙŠØ¯Ø©ØŒ ÙˆØªØ°ÙƒØ± ØªÙØ¶ÙŠÙ„Ø§ØªÙƒØŒ ÙˆØ¹Ø±Ø¶ Ù…Ø­ØªÙˆÙ‰ Ø°ÙŠ ØµÙ„Ø©. Ù‚Ø¯ ØªÙ‚ÙˆÙ… Ø£Ø·Ø±Ø§Ù Ø«Ø§Ù„Ø«Ø© Ù…Ø¹ØªÙ…Ø¯Ø© Ø¨ØªØ¹ÙŠÙŠÙ† Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ù„ØªÙ‚Ø¯ÙŠÙ… Ù…ÙŠØ²Ø§Øª Ù…Ø¹ÙŠÙ†Ø© Ù„Ù„Ù…ÙˆÙ‚Ø¹. Ø¥Ø°Ø§ Ù„Ù… ØªØ³Ù…Ø­ Ø¨Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ØŒ ÙÙ‚Ø¯ Ù„Ø§ ØªØ¹Ù…Ù„ Ø¨Ø¹Ø¶ Ø£Ùˆ ÙƒÙ„ Ù…Ù† Ù‡Ø°Ù‡ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø¹Ù„Ù‰ Ù†Ø­Ùˆ ØµØ­ÙŠØ­.',
                'checkbox-description':
                  'Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨Ø§Ù„ÙØ¦Ø© Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ©',
              },
              'section-advertising': {
                title: 'Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†',
                paragraph:
                  'Ù‚Ø¯ Ù†Ù‚ÙˆÙ… Ù†Ø­Ù† Ø£Ùˆ Ø´Ø±ÙƒØ§Ø¤Ù†Ø§ ÙÙŠ Ù…Ø¬Ø§Ù„ Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ø¨ØªØ¹ÙŠÙŠÙ† Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†ÙŠØ© Ø®Ù„Ø§Ù„ Ù…ÙˆÙ‚Ø¹Ù†Ø§ ÙˆÙ‡ÙŠ ØªØ³Ø§Ø¹Ø¯Ù†Ø§ Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ù…Ø­ØªÙˆÙ‰ ØªØ³ÙˆÙŠÙ‚ÙŠ Ø°ÙŠ ØµÙ„Ø©. ÙØ¥Ø°Ø§ Ù„Ù… ØªØ³Ù…Ø­ Ø¨ÙˆØ¬ÙˆØ¯ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ØŒ ÙØ³ØªØ´Ø§Ù‡Ø¯ Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ø£Ù‚Ù„ ØµÙ„Ø©.',
                'checkbox-description':
                  'Ø§Ù„Ø³Ù…Ø§Ø­ Ø¨Ø§Ù„ÙØ¦Ø© Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†ÙŠØ©',
              },
            },
          },
          'en-us': {
            consentBanner: {
              title: 'Select your cookie preferences',
              paragraph:
                'We use cookies and similar tools to enhance your experience, provide our services, deliver relevant advertising, and make improvements. Approved third parties also use these tools to help us deliver advertising and provide certain site features.',
              'button-customize': 'Customize',
              'button-accept': 'Accept all',
              'button-customize-aria-label': 'Customize cookie preferences',
              'button-accept-aria-label': 'Accept all cookies',
            },
            consentSelector: {
              header: 'Customize cookie preferences',
              intro:
                'We use cookies and similar tools (collectively, "cookies") for the following purposes.',
              'checkbox-label': 'Allowed',
              'button-cancel': 'Cancel',
              'button-save': 'Save preferences',
              'button-cancel-aria-label':
                'Cancel customizing cookie preferences',
              'button-save-aria-label': 'Save customized cookie preferences',
              footer: t.act(
                'span',
                null,
                'Blocking some types of cookies may impact your experience of our sites. You may review and change your choices at any time by clicking Cookie preferences in the footer of this site. We and selected third-parties use cookies or similar technologies as specified in theÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Opens in a new Window',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS Cookie Notice',
                    t.act(n.default, { size: '10px' })
                  )
                ),
                '.'
              ),
              'section-essential': {
                title: 'Essential',
                paragraph:
                  'Essential cookies are necessary to provide our site and services and cannot be deactivated. They are usually set in response to your actions on the site, such as setting your privacy preferences, signing in, or filling in forms. ',
                'checkbox-description': 'Allow essential category',
              },
              'section-performance': {
                title: 'Performance',
                paragraph:
                  'Performance cookies provide anonymous statistics about how customers navigate our site so we can improve site experience and performance. Approved third parties may perform analytics on our behalf, but they cannot use the data for their own purposes.',
                'checkbox-description': 'Allow performance category',
              },
              'section-functional': {
                title: 'Functional',
                paragraph:
                  'Functional cookies help us provide useful site features, remember your preferences, and display relevant content. Approved third parties may set these cookies to provide certain site features. If you do not allow these cookies, then some or all of these services may not function properly.',
                'checkbox-description': 'Allow functional category',
              },
              'section-advertising': {
                title: 'Advertising',
                paragraph:
                  'Advertising cookies may be set through our site by us or our advertising partners and help us deliver relevant marketing content. If you do not allow these cookies, you will experience less relevant advertising.',
                'checkbox-description': 'Allow advertising category',
              },
            },
          },
          'de-de': {
            consentBanner: {
              title: 'WÃ¤hlen Sie Ihre Cookie-Einstellungen aus',
              paragraph:
                'Wir verwenden Cookies und Ã¤hnliche Tools, um Ihre Erfahrung zu verbessern, unsere Services bereitzustellen, relevante Werbung bereitzustellen und Verbesserungen vorzunehmen. Von uns zugelassene Dritte verwenden diese Tools auch, um uns bei der Bereitstellung von Werbung und bestimmten Website-Funktionen zu helfen.',
              'button-customize': 'Anpassen',
              'button-accept': 'Alle akzeptieren',
              'button-customize-aria-label': 'Cookie-Einstellungen anpassen',
              'button-accept-aria-label': 'Alle Cookies akzeptieren',
            },
            consentSelector: {
              header: 'Cookie-Einstellungen anpassen',
              intro:
                'Wir verwenden Cookies und Ã¤hnliche Tools (zusammen "Cookies") fÃ¼r folgende Zwecke.',
              'checkbox-label': 'Erlaubt',
              'button-cancel': 'Abbrechen',
              'button-save': 'Einstellungen speichern',
              'button-cancel-aria-label':
                'Anpassen der Cookie-Einstellungen abbrechen',
              'button-save-aria-label':
                'Benutzerdefinierte Cookie-Einstellungen speichern',
              footer: t.act(
                'span',
                null,
                'Das Blockieren einiger Arten von Cookies kann sich auf Ihre Erfahrung auf unseren Websites auswirken. Sie kÃ¶nnen Ihre Cookie-Einstellungen jederzeit Ã¤ndern, indem Sie in der FuÃŸzeile dieser Website auf Cookie-Einstellungen klicken. Um mehr darÃ¼ber zu erfahren, wie wir und zugelassene Dritte Cookies auf unseren Websites verwenden, lesen Sie bitte unseren ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Wird in einem neuen Fenster geÃ¶ffnet.',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS-Cookie-Hinweis.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Essenziell',
                paragraph:
                  'Diese Cookies sind erforderlich, um unsere Website und Services bereitzustellen und kÃ¶nnen nicht deaktiviert werden. Sie werden in der Regel als Reaktion auf Ihre Aktionen auf der Website festgelegt, z. B. die Festlegung Ihrer Datenschutzeinstellungen, die Anmeldung oder das AusfÃ¼llen von Formularen. ',
                'checkbox-description': 'Essenziell Cookies zulassen',
              },
              'section-performance': {
                title: 'Leistung',
                paragraph:
                  'Leistungs-Cookies stellen anonyme Statistiken darÃ¼ber bereit, wie Kunden auf unserer Website navigieren, damit wir die Website-Erfahrung und -Leistung verbessern kÃ¶nnen. Zugelassene Dritte kÃ¶nnen Analysen in unserem Namen durchfÃ¼hren, die Daten aber nicht fÃ¼r ihre eigenen Zwecke verwenden.',
                'checkbox-description': 'Lesitungs-Cookies zulassen',
              },
              'section-functional': {
                title: 'Funktional',
                paragraph:
                  'Funktionale Cookies helfen uns dabei, nÃ¼tzliche Website-Funktionen bereitzustellen, Ihre PrÃ¤ferenzen zu speichern und relevante Inhalte anzuzeigen. Zugelassene Dritte kÃ¶nnen diese Cookies so einrichten, dass bestimmte Website-Funktionen bereitgestellt werden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Services mÃ¶glicherweise nicht ordnungsgemÃ¤ÃŸ.',
                'checkbox-description': 'Funktionale Cookies zulassen',
              },
              'section-advertising': {
                title: 'Werbung',
                paragraph:
                  'Diese Cookies kÃ¶nnen von uns oder unseren Werbepartnern Ã¼ber unsere Website gesetzt werden und uns helfen, relevante Marketinginhalte bereitzustellen. Wenn Sie diese Cookies nicht zulassen, werden Sie weniger relevante Werbung erleben.',
                'checkbox-description': 'Werbe-Cookies zulassen',
              },
            },
          },
          'es-es': {
            consentBanner: {
              title: 'Seleccione sus preferencias de cookies',
              paragraph:
                'Utilizamos cookies y herramientas similares para mejorar su experiencia, ofrecer nuestros servicios, hacerle llegar publicidad relevante y realizar mejoras. Algunos terceros aprobados tambiÃ©n utilizan estas herramientas para ayudarnos a hacerle llegar publicidad y a proporcionar determinadas caracterÃ­sticas del sitio.',
              'button-customize': 'Personalizar',
              'button-accept': 'Aceptar todas',
              'button-customize-aria-label':
                'Personalizar preferencias de cookies',
              'button-accept-aria-label': 'Aceptar todas las cookies',
            },
            consentSelector: {
              header: 'Personalizar preferencias de cookies',
              intro:
                'Utilizamos cookies y herramientas similares (de forma conjunta, â€œcookiesâ€) para los siguientes fines.',
              'checkbox-label': 'Permitidas',
              'button-cancel': 'Cancelar',
              'button-save': 'Guardar preferencias',
              'button-cancel-aria-label':
                'Cancelar la personalizaciÃ³n de las preferencias de cookies',
              'button-save-aria-label':
                'Guardar preferencias personalizadas de cookies',
              footer: t.act(
                'span',
                null,
                'El bloqueo de algunos tipos de cookies puede afectar a su experiencia al navegar por nuestros sitios. Puede cambiar las preferencias de cookies en cualquier momento haciendo clic en Preferencias de cookies en el pie de pÃ¡gina de este sitio. Para obtener mÃ¡s informaciÃ³n sobre la forma en que nosotros y algunos terceros aprobados usamos las cookies en nuestros sitios, lea el ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Se abre en una ventana nueva',
                  },
                  t.act(
                    'span',
                    null,
                    'Aviso de AWS sobre cookies.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Esenciales',
                paragraph:
                  'Estas cookies son necesarias para poder ofrecer nuestro sitio y nuestros servicios, y no se pueden desactivar. Por lo general, solo se emplean en respuesta a las acciones que lleve a cabo en el sitio, por ejemplo, al configurar sus preferencias de privacidad, al iniciar sesiÃ³n o al completar formularios. ',
                'checkbox-description': 'Permitir categorÃ­a esencial',
              },
              'section-performance': {
                title: 'De rendimiento',
                paragraph:
                  'Las cookies de rendimiento proporcionan estadÃ­sticas anÃ³nimas sobre la forma en que los clientes navegan por nuestro sitio para que podamos mejorar la experiencia y el rendimiento del sitio. Los terceros aprobados pueden realizar anÃ¡lisis en nuestro nombre, pero no pueden utilizar los datos para sus propios fines.',
                'checkbox-description': 'Permitir categorÃ­a de rendimiento',
              },
              'section-functional': {
                title: 'Funcionales',
                paragraph:
                  'Las cookies funcionales nos ayudan a proporcionar caracterÃ­sticas Ãºtiles del sitio, recordar sus preferencias y mostrar contenido relevante. Es posible que algunos terceros aprobados empleen estas cookies para proporcionar determinadas caracterÃ­sticas del sitio. Si no permite estas cookies, es posible que algunos de estos servicios (o todos ellos) no funcionen correctamente.',
                'checkbox-description': 'Permitir categorÃ­a funcional',
              },
              'section-advertising': {
                title: 'De publicidad',
                paragraph:
                  'AWS o nuestros socios publicitarios podemos emplear cookies de publicidad en el sitio para ayudarnos a ofrecer contenido de marketing personalizado. Si no habilita estas cookies, verÃ¡ publicidad menos relevante.',
                'checkbox-description': 'Permitir categorÃ­a de publicidad',
              },
            },
          },
          'fr-fr': {
            consentBanner: {
              title: 'SÃ©lectionner vos prÃ©fÃ©rences de cookies',
              paragraph:
                'Nous utilisons des cookies et des outils similaires pour amÃ©liorer votre expÃ©rience, fournir nos services, diffuser des publicitÃ©s pertinentes et apporter des amÃ©liorations. Des tiers approuvÃ©s utilisent Ã©galement ces outils pour nous aider Ã  diffuser des publicitÃ©s et Ã  fournir certaines fonctionnalitÃ©s de site.',
              'button-customize': 'Personnaliser',
              'button-accept': 'Accepter tout',
              'button-customize-aria-label':
                'Personnaliser les prÃ©fÃ©rences de cookies',
              'button-accept-aria-label': 'Accepter tous les cookies',
            },
            consentSelector: {
              header: 'Personnaliser les prÃ©fÃ©rences de cookies',
              intro:
                'Nous utilisons des cookies et des outils similaires (collectivement, Â«Â cookiesÂ Â») pour les raisons suivantes.',
              'checkbox-label': 'AutorisÃ©',
              'button-cancel': 'Annuler',
              'button-save': 'Enregistrer les prÃ©fÃ©rences',
              'button-cancel-aria-label':
                'Annuler la personnalisation des prÃ©fÃ©rences de cookies',
              'button-save-aria-label':
                'Enregistrer les prÃ©fÃ©rences de cookies personnalisÃ©es',
              footer: t.act(
                'span',
                null,
                'Le blocage de certains types de cookies peut affecter votre expÃ©rience sur nos sites. Vous pouvez modifier vos prÃ©fÃ©rences de cookies Ã  tout moment en cliquant sur PrÃ©fÃ©rences de cookies en bas de la page de ce site. Pour en savoir plus sur la faÃ§on dont nous-mÃªmes et des tiers approuvÃ©s utilisons les cookies sur nos sites, veuillez lire la',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Politique AWS relative aux cookies',
                  },
                  t.act(
                    'span',
                    null,
                    'Sâ€™ouvre dans une nouvelle fenÃªtre.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Essentiels',
                paragraph:
                  'Les cookies essentiels sont nÃ©cessaires pour vous proposer notre site et nos services et ne peuvent pas Ãªtre dÃ©sactivÃ©s. Ils sont gÃ©nÃ©ralement dÃ©finis en rÃ©ponse Ã  vos actions sur le site, telles que la dÃ©finition de vos prÃ©fÃ©rences de confidentialitÃ©, la connexion ou le remplissage de formulaires. ',
                'checkbox-description': 'Autoriser la catÃ©gorie Essentiels',
              },
              'section-performance': {
                title: 'Performances',
                paragraph:
                  "Les cookies performances fournissent des statistiques anonymes sur la faÃ§on dont les clients naviguent sur notre site afin que nous puissions amÃ©liorer l'expÃ©rience et les performances du site. Les tiers autorisÃ©s peuvent effectuer des analyses en notre nom, mais ils ne peuvent pas utiliser les donnÃ©es Ã  leurs propres fins.",
                'checkbox-description': 'Autoriser la catÃ©gorie Performances',
              },
              'section-functional': {
                title: 'Fonctionnels',
                paragraph:
                  "Les cookies fonctionnels nous aident Ã  fournir des fonctionnalitÃ©s utiles du site, Ã  mÃ©moriser vos prÃ©fÃ©rences et Ã  afficher du contenu pertinent. Des tiers approuvÃ©s peuvent configurer ces cookies pour fournir certaines fonctionnalitÃ©s du site. Si vous n'autorisez pas ces cookies, certains ou tous ces services peuvent ne pas fonctionner correctement.",
                'checkbox-description': 'Autoriser la catÃ©gorie Fonctionnels',
              },
              'section-advertising': {
                title: 'Publicitaires',
                paragraph:
                  'Les cookies publicitaires peuvent Ãªtre installÃ©s sur notre site par nous ou nos partenaires publicitaires et nous aide Ã  diffuser du contenu marketing pertinent. Si vous nâ€™autorisez pas ces cookies, la publicitÃ© que vous verrez sâ€™afficher sera moins pertinente.',
                'checkbox-description': 'Autoriser la catÃ©gorie Publicitaires',
              },
            },
          },
          'id-id': {
            consentBanner: {
              title: 'Pilih preferensi cookie Anda',
              paragraph:
                'Kami menggunakan cookie dan alat serupa untuk meningkatkan pengalaman Anda, menyediakan layanan kami, menyampaikan iklan yang relevan, dan melakukan penyempurnaan. Pihak ketiga yang disetujui juga menggunakan alat ini guna membantu kami menyampaikan iklan dan menyediakan berbagai fitur tertentu pada situs.',
              'button-customize': 'Sesuaikan',
              'button-accept': 'Terima semua',
              'button-customize-aria-label': 'Sesuaikan preferensi cookie',
              'button-accept-aria-label': 'Terima semua cookie',
            },
            consentSelector: {
              header: 'Sesuaikan preferensi cookie',
              intro:
                'Kami menggunakan cookie dan alat yang serupa (secara kolektif, â€œcookieâ€) untuk tujuan berikut.',
              'checkbox-label': 'Diizinkan',
              'button-cancel': 'Batalkan',
              'button-save': 'Simpan preferensi',
              'button-cancel-aria-label':
                'Batalkan penyesuaian preferensi cookie',
              'button-save-aria-label':
                'Simpan preferensi cookie yang disesuaikan',
              footer: t.act(
                'span',
                null,
                'Memblokir beberapa jenis cookie dapat memengaruhi pengalaman Anda di situs kami. Anda dapat mengubah preferensi cookie kapan saja dengan mengklik Preferensi cookie di footer situs ini. Untuk mempelajari lebih lanjut tentang bagaimana kami dan pihak ketiga yang disetujui menggunakan cookie di situs kami, silakan bacaÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Membuka AWS Cookie Notice',
                  },
                  t.act(
                    'span',
                    null,
                    ' di jendela baru.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Penting',
                paragraph:
                  'Cookie ini diperlukan untuk menjalankan situs dan layanan kami dan tidak dapat dinonaktifkan. Cookie biasanya tersusun hanya sebagai tanggapan atas tindakan Anda di situs, seperti mengatur preferensi privasi, masuk, atau mengisi formulir. ',
                'checkbox-description': 'Izinkan kategori penting',
              },
              'section-performance': {
                title: 'Kinerja',
                paragraph:
                  'Cookie kinerja menyediakan statistik anonim tentang cara pelanggan menavigasi situs kami sehingga kami dapat menyempurnakan pengalaman dan kinerja situs. Pihak ketiga yang disetujui dapat melakukan analisis atas nama kami, tetapi tidak dapat menggunakan data untuk tujuannya sendiri.',
                'checkbox-description': 'Izinkan kategori kinerja',
              },
              'section-functional': {
                title: 'Fungsional',
                paragraph:
                  'Cookie fungsional membantu kami menyediakan berbagai fitur bermanfaat, mengingat preferensi Anda, dan menampilkan konten yang relevan pada situs. Pihak ketiga yang disetujui dapat mengatur cookie ini untuk menyediakan fitur tertentu pada situs. Jika Anda tidak mengizinkan cookie ini, maka beberapa atau semua layanan ini mungkin tidak berjalan dengan baik.',
                'checkbox-description': 'Izinkan kategori fungsional',
              },
              'section-advertising': {
                title: 'Iklan',
                paragraph:
                  'Cookie ini dapat diatur melalui situs kami oleh mitra iklan dan membantu kami mempersonalisasi konten pemasaran. Jika Anda tidak mengizinkan cookie, Anda akan mendapatkan iklan yang kurang relevan.',
                'checkbox-description': 'Izinkan kategori iklan',
              },
            },
          },
          'it-it': {
            consentBanner: {
              title: 'Seleziona le tue preferenze relative ai cookie',
              paragraph:
                "Utilizziamo cookie e strumenti simili per migliorare l'esperienza, fornire servizi, offrire pubblicitÃ  pertinenti e apportare miglioramenti. Anche le terze parti approvate utilizzano questi strumenti per aiutarci a distribuire pubblicitÃ  e fornire determinate funzionalitÃ  del sito.",
              'button-customize': 'Personalizza',
              'button-accept': 'Accetta tutto',
              'button-customize-aria-label':
                'Personalizza le tue preferenze relative ai cookie',
              'button-accept-aria-label': 'Accetta tutti i cookie',
            },
            consentSelector: {
              header: 'Personalizza le tue preferenze relative ai cookie',
              intro:
                'Utilizziamo cookie e strumenti simili (collettivamente, "cookie") per le seguenti finalitÃ .',
              'checkbox-label': 'Consentiti',
              'button-cancel': 'Annulla',
              'button-save': 'Salva preferenze',
              'button-cancel-aria-label':
                'Annulla la personalizzazione delle preferenze relative ai cookie',
              'button-save-aria-label':
                'Salva le preferenze personalizzate relative ai cookie',
              footer: t.act(
                'span',
                null,
                'Il blocco di alcuni tipi di cookie puÃ² influire sulla tua esperienza dei nostri siti. Puoi modificare le tue preferenze relative ai cookie in qualsiasi momento facendo clic su Preferenze cookie, nel piÃ¨ di pagina di questo sito. Per ulteriori informazioni su come noi e le terze parti approvate utilizziamo i cookie sui nostri siti, leggi la nostraÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Apertura in una nuova finestra',
                  },
                  t.act(
                    'span',
                    null,
                    'Informativa sui cookie di AWS.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Essenziali',
                paragraph:
                  "I cookie essenziali sono necessari per fornire il nostro sito e i nostri servizi e non possono essere disattivati. In genere vengono impostati in risposta alle tue azioni sul sito, come l'impostazione delle tue preferenze sulla privacy, l'accesso o la compilazione di moduli. ",
                'checkbox-description': 'Consenti i cookie essenziali',
              },
              'section-performance': {
                title: 'Prestazione',
                paragraph:
                  "I cookie di prestazione forniscono statistiche anonime sul modo in cui i clienti navigano nel nostro sito in modo da migliorare l'esperienza e le prestazioni del sito. Le terze parti approvate possono eseguire analisi per conto nostro, ma non possono utilizzare i dati per le proprie finalitÃ .",
                'checkbox-description': 'Consenti i cookie di prestazione',
              },
              'section-functional': {
                title: 'Funzionali',
                paragraph:
                  "I cookie funzionali ci aiutano a fornire funzionalitÃ  utili del sito, a ricordare le tue preferenze e a mostrare contenuti pertinenti. Le terze parti approvate possono impostare questi cookie per fornire determinate funzionalitÃ  del sito. Se non permetti l'installazione di questi cookie, alcuni o tutti questi servizi potrebbero non funzionare correttamente.",
                'checkbox-description': 'Consenti i cookie funzionali',
              },
              'section-advertising': {
                title: 'Pubblicitari',
                paragraph:
                  "I cookie pubblicitari possono essere impostati tramite il nostro sito da noi o dai nostri partner pubblicitari e ci aiutano a distribuire contenuti di marketing personalizzati. Se non permetti l'installazione di questi cookie, visualizzerai pubblicitÃ  meno pertinenti.",
                'checkbox-description': 'Consenti i cookie pubblicitari',
              },
            },
          },
          'ja-jp': {
            consentBanner: {
              title: 'Cookie ã®è¨­å®šã‚’é¸æŠžã™ã‚‹',
              paragraph:
                'å½“ç¤¾ã¯ã€ãŠå®¢æ§˜ã®ã‚¨ã‚¯ã‚¹ãƒšãƒªã‚¨ãƒ³ã‚¹ã®å¼·åŒ–ã€ã‚µãƒ¼ãƒ“ã‚¹ã®æä¾›ã€é–¢é€£æ€§ã®é«˜ã„åºƒå‘Šã®é…ä¿¡ã‚’è¡Œã„ã€æ”¹å–„ã‚’è¡Œã†ãŸã‚ã«ã€ã‚¯ãƒƒã‚­ãƒ¼ã‚„åŒæ§˜ã®ãƒ„ãƒ¼ãƒ«ã‚’ä½¿ç”¨ã—ã¦ã„ã¾ã™ã€‚ã¾ãŸã€æ‰¿èªã•ã‚ŒãŸç¬¬ä¸‰è€…ã‚‚ã€ã“ã†ã—ãŸãƒ„ãƒ¼ãƒ«ã‚’ä½¿ç”¨ã—ã¦ã€åºƒå‘Šã‚’é…ä¿¡ã—ã€ç‰¹å®šã®ã‚µã‚¤ãƒˆæ©Ÿèƒ½ã‚’æä¾›ã„ãŸã—ã¾ã™ã€‚',
              'button-customize': 'ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚º',
              'button-accept': 'ã™ã¹ã¦ã‚’å—ã‘å…¥ã‚Œã‚‹',
              'button-customize-aria-label':
                'Cookie ã®è¨­å®šã‚’ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚ºã™ã‚‹',
              'button-accept-aria-label': 'ã™ã¹ã¦ã® Cookie ã‚’å—ã‘å…¥ã‚Œã‚‹',
            },
            consentSelector: {
              header: 'Cookie ã®è¨­å®šã‚’ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚ºã™ã‚‹',
              intro:
                'å½“ç¤¾ã¯ã€ä»¥ä¸‹ã®ç›®çš„ã§ Cookie ãŠã‚ˆã³åŒæ§˜ã®ãƒ„ãƒ¼ãƒ« (ä»¥ä¸‹ç·ç§°ã—ã¦ã€ŒCookieã€) ã‚’ä½¿ç”¨ã„ãŸã—ã¾ã™ã€‚',
              'checkbox-label': 'è¨±å¯',
              'button-cancel': 'ã‚­ãƒ£ãƒ³ã‚»ãƒ«',
              'button-save': 'è¨­å®šã‚’ä¿å­˜',
              'button-cancel-aria-label':
                'Cookie è¨­å®šã®ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚ºã‚’ã‚­ãƒ£ãƒ³ã‚»ãƒ«ã™ã‚‹',
              'button-save-aria-label':
                'ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚ºã—ãŸ Cookie è¨­å®šã‚’ä¿å­˜ã™ã‚‹',
              footer: t.act(
                'span',
                null,
                'ä¸€éƒ¨ã®ç¨®é¡žã® Cookie ã‚’ãƒ–ãƒ­ãƒƒã‚¯ã™ã‚‹ã¨ã€ã‚µã‚¤ãƒˆã®æ“ä½œã«å½±éŸ¿ã™ã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚Cookie ã®è¨­å®šã¯ã€ã“ã®ã‚µã‚¤ãƒˆã®ãƒ•ãƒƒã‚¿ãƒ¼ã«ã‚ã‚‹ [Cookie preferences] ã‚’ã‚¯ãƒªãƒƒã‚¯ã™ã‚‹ã“ã¨ã§ã€ã„ã¤ã§ã‚‚å¤‰æ›´ã§ãã¾ã™ã€‚å½“ç¤¾ãŠã‚ˆã³æ‰¿èªã•ã‚ŒãŸç¬¬ä¸‰è€…ãŒ Cookie ã‚’ã©ã®ã‚ˆã†ã«ä½¿ç”¨ã—ã¦ã„ã‚‹ã‹ã«ã¤ã„ã¦ã¯ã€ã€Œ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Open in a new Window',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS Cookie Noticeã€ã‚’ãŠèª­ã¿ãã ã•ã„ã€‚',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Essential',
                paragraph:
                  'Essential Cookie ã¯ã€å½“ç¤¾ã®ã‚µã‚¤ãƒˆãŠã‚ˆã³ã‚µãƒ¼ãƒ“ã‚¹ã‚’æä¾›ã™ã‚‹ãŸã‚ã«å¿…è¦ã§ã‚ã‚Šã€ç„¡åŠ¹ã«ã™ã‚‹ã“ã¨ã¯ã§ãã¾ã›ã‚“ã€‚é€šå¸¸ã€ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼è¨­å®šã®é¸æŠžã€ã‚µã‚¤ãƒ³ã‚¤ãƒ³ã€ãƒ•ã‚©ãƒ¼ãƒ ã¸ã®å…¥åŠ›ãªã©ã€ã‚µã‚¤ãƒˆã§ã®ã‚¢ã‚¯ã‚·ãƒ§ãƒ³ã«å¿œã˜ã¦ã®ã¿è¨­å®šã•ã‚Œã¾ã™ã€‚',
                'checkbox-description': 'Essential ã‚«ãƒ†ã‚´ãƒªã‚’è¨±å¯ã™ã‚‹',
              },
              'section-performance': {
                title: 'Performance',
                paragraph:
                  'Performance Cookie ã¯ã€ãŠå®¢æ§˜ã«ã‚ˆã‚‹ã‚µã‚¤ãƒˆã®æ“ä½œæ–¹æ³•ã«é–¢ã™ã‚‹åŒ¿åã®çµ±è¨ˆã‚’æä¾›ã™ã‚‹ãŸã‚ã€ã‚µã‚¤ãƒˆã®ã‚¨ã‚¯ã‚¹ãƒšãƒªã‚¨ãƒ³ã‚¹ã¨ãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹ã‚’å‘ä¸Šã•ã›ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚æ‰¿èªã•ã‚ŒãŸç¬¬ä¸‰è€…ã¯ã€å½“ç¤¾ã«ä»£ã‚ã£ã¦åˆ†æžã‚’è¡Œã†å ´åˆãŒã‚ã‚Šã¾ã™ãŒã€ãƒ‡ãƒ¼ã‚¿ã‚’ç‹¬è‡ªã®ç›®çš„ã§ä½¿ç”¨ã™ã‚‹ã“ã¨ã¯ã§ãã¾ã›ã‚“ã€‚',
                'checkbox-description': 'Performance ã‚«ãƒ†ã‚´ãƒªã‚’è¨±å¯ã™ã‚‹',
              },
              'section-functional': {
                title: 'Functional',
                paragraph:
                  'Functional Cookie ã¯ã€æœ‰ç”¨ãªã‚µã‚¤ãƒˆæ©Ÿèƒ½ã®æä¾›ã€ãƒ¦ãƒ¼ã‚¶ãƒ¼ã®å—œå¥½ã®è¨˜æ†¶ã€é–¢é€£ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã®è¡¨ç¤ºã«å½¹ç«‹ã¡ã¾ã™ã€‚æ‰¿èªã•ã‚ŒãŸç¬¬ä¸‰è€…ã¯ã€ç‰¹å®šã®ã‚µã‚¤ãƒˆæ©Ÿèƒ½ã‚’æä¾›ã™ã‚‹ãŸã‚ã«ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã‚’è¨­å®šã™ã‚‹å ´åˆãŒã‚ã‚Šã¾ã™ã€‚ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã‚’è¨±å¯ã—ãªã„å ´åˆã€ã‚µãƒ¼ãƒ“ã‚¹ã®ä¸€éƒ¨ã¾ãŸã¯ã™ã¹ã¦ãŒé©åˆ‡ã«æ©Ÿèƒ½ã—ãªã„å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚',
                'checkbox-description': 'Functional ã‚«ãƒ†ã‚´ãƒªã‚’è¨±å¯ã™ã‚‹',
              },
              'section-advertising': {
                title: 'Advertising',
                paragraph:
                  'Advertising Cookie ã¯ã€å½“ç¤¾ã®åºƒå‘Šãƒ‘ãƒ¼ãƒˆãƒŠãƒ¼ã«ã‚ˆã£ã¦å½“ç¤¾ã®ã‚µã‚¤ãƒˆã‚’é€šã˜ã¦è¨­å®šã•ã‚Œã€é–¢é€£ã™ã‚‹ãƒžãƒ¼ã‚±ãƒ†ã‚£ãƒ³ã‚°ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã®é…ä¿¡ã«å½¹ç«‹ã¡ã¾ã™ã€‚ã“ã‚Œã‚‰ã® Cookie ã‚’è¨±å¯ã—ãªã„ã¨ã€åºƒå‘Šã®é–¢é€£æ€§ãŒä½Žããªã‚Šã¾ã™ã€‚',
                'checkbox-description': 'Advertising ã‚«ãƒ†ã‚´ãƒªã‚’è¨±å¯ã™ã‚‹',
              },
            },
          },
          'ko-kr': {
            consentBanner: {
              title: 'ì¿ í‚¤ ê¸°ë³¸ ì„¤ì • ì„ íƒ',
              paragraph:
                'AWSëŠ” ì‚¬ìš©ìž ê²½í—˜ì„ ê°œì„ í•˜ê³ , ì„œë¹„ìŠ¤ë¥¼ ì œê³µí•˜ë©°, ê´€ë ¨ ê´‘ê³ ë¥¼ ì „ë‹¬í•˜ê³ , ì„œë¹„ìŠ¤ë¥¼ ê°œì„ í•˜ê¸° ìœ„í•´ ì¿ í‚¤ ë° ìœ ì‚¬í•œ ë„êµ¬ë¥¼ ì‚¬ìš©í•©ë‹ˆë‹¤. ë˜í•œ ìŠ¹ì¸ëœ ì œ3ìžë„ ì´ëŸ¬í•œ ë„êµ¬ë¥¼ ì‚¬ìš©í•˜ì—¬ AWSê°€ ê´‘ê³ ë¥¼ ì „ë‹¬í•˜ê³  íŠ¹ì • ì‚¬ì´íŠ¸ ê¸°ëŠ¥ì„ ì œê³µí•˜ë„ë¡ ì§€ì›í•©ë‹ˆë‹¤.',
              'button-customize': 'ì‚¬ìš©ìž ì§€ì •',
              'button-accept': 'ëª¨ë‘ ìˆ˜ë½',
              'button-customize-aria-label':
                'ì¿ í‚¤ ê¸°ë³¸ ì„¤ì • ì‚¬ìš©ìž ì§€ì •',
              'button-accept-aria-label': 'ëª¨ë“  ì¿ í‚¤ ìˆ˜ë½',
            },
            consentSelector: {
              header: 'ì¿ í‚¤ ê¸°ë³¸ ì„¤ì • ì‚¬ìš©ìž ì§€ì •',
              intro:
                'AWSëŠ” ë‹¤ìŒê³¼ ê°™ì€ ëª©ì ìœ¼ë¡œ ì¿ í‚¤ ë° ìœ ì‚¬í•œ ë„êµ¬(ì´ì¹­í•˜ì—¬ "ì¿ í‚¤")ë¥¼ ì‚¬ìš©í•©ë‹ˆë‹¤.',
              'checkbox-label': 'í—ˆìš©ë¨',
              'button-cancel': 'ì·¨ì†Œ',
              'button-save': 'ê¸°ë³¸ ì„¤ì • ì €ìž¥',
              'button-cancel-aria-label':
                'ì¿ í‚¤ ê¸°ë³¸ ì„¤ì • ì‚¬ìš©ìž ì§€ì • ì·¨ì†Œ',
              'button-save-aria-label':
                'ì‚¬ìš©ìž ì§€ì •ëœ ì¿ í‚¤ ê¸°ë³¸ ì„¤ì • ì €ìž¥',
              footer: t.act(
                'span',
                null,
                'ì¼ë¶€ ìœ í˜•ì˜ ì¿ í‚¤ë¥¼ ì°¨ë‹¨í•˜ë©´ AWS ì‚¬ì´íŠ¸ ê²½í—˜ì´ ì˜í–¥ì„ ë°›ì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì–¸ì œë“ ì§€ ì´ ì‚¬ì´íŠ¸ì˜ ë°”ë‹¥ê¸€ì—ì„œ [ì¿ í‚¤ ê¸°ë³¸ ì„¤ì •]ì„ í´ë¦­í•˜ì—¬ í•´ë‹¹í•˜ëŠ” ì¿ í‚¤ ê¸°ë³¸ ì„¤ì •ì„ ë³€ê²½í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. AWS ì‚¬ì´íŠ¸ì—ì„œ AWS ë° ìŠ¹ì¸ëœ ì œ 3ìžê°€ ì¿ í‚¤ë¥¼ ì‚¬ìš©í•˜ëŠ” ë°©ë²•ì— ëŒ€í•œ ìžì„¸í•œ ë‚´ìš©ì€ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'ìƒˆ ì°½ì—ì„œ ì—´ê¸°',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS ì¿ í‚¤ ê³µì§€ ì‚¬í•­',
                    t.act(n.default, { size: '10px' })
                  )
                ),
                'ì„ ì°¸ì¡°í•˜ì‹­ì‹œì˜¤.'
              ),
              'section-essential': {
                title: 'í•„ìˆ˜',
                paragraph:
                  'í•„ìˆ˜ ì¿ í‚¤ëŠ” AWS ì‚¬ì´íŠ¸ ë° ì„œë¹„ìŠ¤ë¥¼ ì œê³µí•˜ëŠ” ë° í•„ìš”í•˜ë©°, ë¹„í™œì„±í™”í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤. ì¼ë°˜ì ìœ¼ë¡œ ê°œì¸ ì •ë³´ ë³´í˜¸ ê¸°ë³¸ ì„¤ì •, ë¡œê·¸ì¸ ë˜ëŠ” ì–‘ì‹ ìž‘ì„± ë“± ì‚¬ì´íŠ¸ ë‚´ì—ì„œ ì‚¬ìš©ìžê°€ ìˆ˜í–‰í•œ ìž‘ì—…ì— ìƒì‘í•˜ëŠ” ì¿ í‚¤ê°€ ì„¤ì •ë©ë‹ˆë‹¤. ',
                'checkbox-description': 'í•„ìˆ˜ ë²”ì£¼ í—ˆìš©',
              },
              'section-performance': {
                title: 'ì„±ëŠ¥',
                paragraph:
                  'ì„±ëŠ¥ ì¿ í‚¤ëŠ” AWSì—ì„œ ì‚¬ì´íŠ¸ ê²½í—˜ ë° ì„±ëŠ¥ì„ ê°œì„ í•  ìˆ˜ ìžˆë„ë¡ ê³ ê°ì´ AWS ì‚¬ì´íŠ¸ë¥¼ íƒìƒ‰í•˜ëŠ” ë°©ë²•ì— ëŒ€í•œ ìµëª…ì˜ í†µê³„ë¥¼ ì œê³µí•©ë‹ˆë‹¤. ìŠ¹ì¸ëœ ì œ3ìžê°€ AWSë¥¼ ëŒ€ì‹ í•˜ì—¬ ë¶„ì„ì„ ìˆ˜í–‰í•  ìˆ˜ ìžˆì§€ë§Œ, í•´ë‹¹ ë°ì´í„°ë¥¼ ë‹¤ë¥¸ íŠ¹ì • ëª©ì ìœ¼ë¡œ ì‚¬ìš©í•  ìˆ˜ëŠ” ì—†ìŠµë‹ˆë‹¤.',
                'checkbox-description': 'ì„±ëŠ¥ ë²”ì£¼ í—ˆìš©',
              },
              'section-functional': {
                title: 'ê¸°ëŠ¥',
                paragraph:
                  'ê¸°ëŠ¥ ì¿ í‚¤ëŠ” ìœ ìš©í•œ ì‚¬ì´íŠ¸ ê¸°ëŠ¥ì„ ì œê³µí•˜ê³ , ì‚¬ìš©ìžì˜ ê¸°ë³¸ ì„¤ì •ì„ ê¸°ì–µí•˜ë©°, ê´€ë ¨ ì½˜í…ì¸ ë¥¼ í‘œì‹œí•˜ëŠ” ë° ë„ì›€ì„ ì¤ë‹ˆë‹¤. ìŠ¹ì¸ëœ ì œ3ìžê°€ ì´ëŸ¬í•œ ì¿ í‚¤ë¥¼ ì„¤ì •í•˜ì—¬ íŠ¹ì • ì‚¬ì´íŠ¸ ê¸°ëŠ¥ì„ ì œê³µí•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì´ëŸ¬í•œ ì¿ í‚¤ë¥¼ í—ˆìš©í•˜ì§€ ì•Šìœ¼ë©´ ì´ëŸ¬í•œ ì„œë¹„ìŠ¤ ì¤‘ ì¼ë¶€ ë˜ëŠ” ì „ì²´ê°€ ì œëŒ€ë¡œ ìž‘ë™í•˜ì§€ ì•Šì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.',
                'checkbox-description': 'ê¸°ëŠ¥ ë²”ì£¼ í—ˆìš©',
              },
              'section-advertising': {
                title: 'ê´‘ê³ ',
                paragraph:
                  'ê´‘ê³  ì¿ í‚¤ëŠ” AWSì˜ ê´‘ê³  íŒŒíŠ¸ë„ˆê°€ AWS ì‚¬ì´íŠ¸ë¥¼ í†µí•´ ì„¤ì •í•  ìˆ˜ ìžˆìœ¼ë©°, ê´€ë ¨ ë§ˆì¼€íŒ… ì½˜í…ì¸ ë¥¼ ì œê³µí•˜ëŠ” ë° ë„ì›€ì„ ì¤ë‹ˆë‹¤. ì´ëŸ¬í•œ ì¿ í‚¤ë¥¼ í—ˆìš©í•˜ì§€ ì•Šìœ¼ë©´ ê´€ë ¨ì„±ì´ ë‚®ì€ ê´‘ê³ ê°€ í‘œì‹œë©ë‹ˆë‹¤.',
                'checkbox-description': 'ê´‘ê³  ë²”ì£¼ í—ˆìš©',
              },
            },
          },
          'pt-br': {
            consentBanner: {
              title: 'Selecione suas preferÃªncias de cookies',
              paragraph:
                'Usamos cookies e ferramentas semelhantes para aprimorar sua experiÃªncia, fornecer nossos serviÃ§os, entregar publicidade relevante e fazer melhorias. Os terceiros aprovados tambÃ©m usam essas ferramentas para nos ajudar a entregar publicidade e fornecer determinados recursos do site.',
              'button-customize': 'Personalizar',
              'button-accept': 'Aceitar tudo',
              'button-customize-aria-label':
                'Personalizar preferÃªncias de cookies',
              'button-accept-aria-label': 'Aceitar todos os cookies',
            },
            consentSelector: {
              header: 'Personalizar preferÃªncias de cookies',
              intro:
                'Usamos cookies e ferramentas semelhantes (coletivamente, "cookies") para as seguintes finalidades.',
              'checkbox-label': 'Permitido',
              'button-cancel': 'Cancelar',
              'button-save': 'Salvar preferÃªncias',
              'button-cancel-aria-label':
                'Cancelar personalizaÃ§Ã£o de preferÃªncias de cookies',
              'button-save-aria-label':
                'Salvar preferÃªncias de cookies personalizadas',
              footer: t.act(
                'span',
                null,
                'Bloquear alguns tipos de cookies pode afetar sua experiÃªncia em nossos sites. VocÃª pode alterar suas preferÃªncias de cookies a qualquer momento, clicando em PreferÃªncias de cookies no rodapÃ© deste site. Para saber mais sobre como nÃ³s e terceiros aprovados usamos cookies em nossos sites, leia nossoÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Abre em uma nova janela',
                  },
                  t.act(
                    'span',
                    null,
                    'Aviso sobre cookies da AWS.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Essenciais',
                paragraph:
                  'Cookies essenciais sÃ£o necessÃ¡rios para fornecer nosso site e serviÃ§os e nÃ£o podem ser desativados. Geralmente, eles sÃ£o definidos em resposta Ã s suas aÃ§Ãµes no site, como definir suas preferÃªncias de privacidade, fazer login ou preencher formulÃ¡rios. ',
                'checkbox-description': 'Permitir a categoria Essenciais',
              },
              'section-performance': {
                title: 'Desempenho',
                paragraph:
                  'Os cookies de desempenho fornecem estatÃ­sticas anÃ´nimas sobre como os clientes navegam em nosso site, para que possamos melhorar a experiÃªncia e o desempenho do site. Terceiros aprovados podem realizar anÃ¡lises em nosso nome, mas nÃ£o podem usar os dados para seus prÃ³prios propÃ³sitos.',
                'checkbox-description': 'Permitir a categoria Desempenho',
              },
              'section-functional': {
                title: 'Funcionais',
                paragraph:
                  'Cookies funcionais nos ajudam a fornecer recursos Ãºteis do site, lembrar suas preferÃªncias e exibir conteÃºdo relevante. Terceiros aprovados podem definir esses cookies para fornecer determinados recursos do site. Se vocÃª nÃ£o permitir esses cookies, alguns ou todos esses serviÃ§os talvez nÃ£o funcionem corretamente.',
                'checkbox-description': 'Permitir a categoria Funcionais',
              },
              'section-advertising': {
                title: 'Publicidade',
                paragraph:
                  'Cookies de publicidade podem ser configurados em nosso site por nÃ³s ou nossos parceiros de publicidade e nos ajudar a distribuir conteÃºdo de marketing relevante. Se vocÃª nÃ£o permitir esses cookies, receberÃ¡ publicidade menos relevante.',
                'checkbox-description': 'Permitir a categoria Publicidade',
              },
            },
          },
          'ru-ru': {
            consentBanner: {
              title: 'Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie',
              paragraph:
                'ÐœÑ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð¸ Ð°Ð½Ð°Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ñ‹Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ»ÑƒÑ‡ÑˆÐ°Ñ‚ÑŒ Ð²Ð°ÑˆÐµ Ð²Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ñ ÑÐ°Ð¹Ñ‚Ð¾Ð¼, Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ ÑÐ²Ð¾Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸, Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ñ€ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½ÑƒÑŽ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ Ð¸ Ð²Ð½Ð¾ÑÐ¸Ñ‚ÑŒ ÑƒÑÐ¾Ð²ÐµÑ€ÑˆÐµÐ½ÑÑ‚Ð²Ð¾Ð²Ð°Ð½Ð¸Ñ. ÐžÐ´Ð¾Ð±Ñ€ÐµÐ½Ð½Ñ‹Ðµ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ð½Ð¸Ðµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ñ‚Ð°ÐºÐ¶Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ ÑÑ‚Ð¸ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð¼Ð¾Ð³Ð°Ñ‚ÑŒ Ð½Ð°Ð¼ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ Ð¸ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ðµ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸ ÑÐ°Ð¹Ñ‚Ð°.',
              'button-customize': 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ',
              'button-accept': 'ÐŸÑ€Ð¸Ð½ÑÑ‚ÑŒ Ð²ÑÐµ',
              'button-customize-aria-label':
                'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie',
              'button-accept-aria-label':
                'ÐŸÑ€Ð¸Ð½ÑÑ‚ÑŒ Ð²ÑÐµ Ñ„Ð°Ð¹Ð»Ñ‹ cookie',
            },
            consentSelector: {
              header: 'ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie',
              intro:
                'ÐœÑ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð¸ Ð°Ð½Ð°Ð»Ð¾Ð³Ð¸Ñ‡Ð½Ñ‹Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ñ‹Â (ÑÐ¾Ð²Ð¼ÐµÑÑ‚Ð½Ð¾ Ð¸Ð¼ÐµÐ½ÑƒÐµÐ¼Ñ‹Ðµ Â«Ñ„Ð°Ð¹Ð»Ñ‹ cookieÂ») Ð´Ð»Ñ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ñ… Ñ†ÐµÐ»ÐµÐ¹.',
              'checkbox-label': 'Ð Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð½Ñ‹Ðµ',
              'button-cancel': 'ÐžÑ‚Ð¼ÐµÐ½Ð°',
              'button-save': 'Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸',
              'button-cancel-aria-label':
                'ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÑƒ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¾Ð² Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie',
              'button-save-aria-label':
                'Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð½Ñ‹Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie',
              footer: t.act(
                'span',
                null,
                'Ð‘Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²ÐºÐ° Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ñ‚Ð¸Ð¿Ð¾Ð² Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾Ð²Ð»Ð¸ÑÑ‚ÑŒ Ð½Ð° Ð²Ð°ÑˆÑƒ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ñ Ð½Ð°ÑˆÐ¸Ð¼Ð¸ ÑÐ°Ð¹Ñ‚Ð°Ð¼Ð¸. Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð² Ð»ÑŽÐ±Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie, Ð½Ð°Ð¶Ð°Ð² Â«ÐŸÐ°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookieÂ» Ð² Ð½Ð¸Ð¶Ð½ÐµÐ¼ ÐºÐ¾Ð»Ð¾Ð½Ñ‚Ð¸Ñ‚ÑƒÐ»Ðµ ÑÑ‚Ð¾Ð³Ð¾ ÑÐ°Ð¹Ñ‚Ð°. Ð§Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ·Ð½Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¾ Ñ‚Ð¾Ð¼, ÐºÐ°Ðº Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ… ÑÐ°Ð¹Ñ‚Ð°Ñ… Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ Ð½Ð°Ð¼Ð¸ Ð¸ Ð¾Ð´Ð¾Ð±Ñ€ÐµÐ½Ð½Ñ‹Ð¼Ð¸ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸Ð¼Ð¸ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ð°Ð¼Ð¸, Ð¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ð¹Ñ‚ÐµÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'ÐžÑ‚ÐºÑ€Ð¾ÐµÑ‚ÑÑ Ð² Ð½Ð¾Ð²Ð¾Ð¼ Ð¾ÐºÐ½Ðµ',
                  },
                  t.act(
                    'span',
                    null,
                    'Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ðµ AWS Ð¾ Ñ„Ð°Ð¹Ð»Ð°Ñ… cookie.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ',
                paragraph:
                  'ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ñ‚Ñ€ÐµÐ±ÑƒÐµÑ‚ÑÑ Ð´Ð»Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ð½Ð°ÑˆÐµÐ³Ð¾ ÑÐ°Ð¹Ñ‚Ð° Ð¸ ÑÐ»ÑƒÐ¶Ð±, Ð¸ Ð¸Ñ… Ð½ÐµÐ»ÑŒÐ·Ñ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ. ÐžÐ±Ñ‹Ñ‡Ð½Ð¾ Ð¾Ð½Ð¸ ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÑŽÑ‚ÑÑ Ð¿Ñ€Ð¸ Ð²Ñ‹Ð±Ð¾Ñ€Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¾Ð² ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸, Ð²Ñ…Ð¾Ð´Ðµ Ð² Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚, Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ð¸ Ñ„Ð¾Ñ€Ð¼ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸ÑÑ… Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ. ',
                'checkbox-description':
                  'Ð Ð°Ð·Ñ€ÐµÑˆÐ¸Ñ‚ÑŒ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ Â«ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹ÐµÂ»',
              },
              'section-performance': {
                title:
                  'Ð¡Ð²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒÑŽ',
                paragraph:
                  'Ð¤Ð°Ð¹Ð»Ñ‹ cookie, ÑÐ²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒÑŽ, Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑŽÑ‚ Ð°Ð½Ð¾Ð½Ð¸Ð¼Ð½ÑƒÑŽ ÑÑ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÑƒ Ð¾ Ñ‚Ð¾Ð¼, ÐºÐ°Ðº ÐºÐ»Ð¸ÐµÐ½Ñ‚Ñ‹ Ð¿Ñ€Ð¾ÑÐ¼Ð°Ñ‚Ñ€Ð¸Ð²Ð°ÑŽÑ‚ Ð½Ð°Ñˆ ÑÐ°Ð¹Ñ‚, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¼Ñ‹ Ð¼Ð¾Ð³Ð»Ð¸ ÑƒÐ»ÑƒÑ‡ÑˆÐ¸Ñ‚ÑŒ ÐµÐ³Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ð¸ Ð¿Ð¾Ð²Ñ‹ÑÐ¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒ. ÐžÐ´Ð¾Ð±Ñ€ÐµÐ½Ð½Ñ‹Ðµ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹ Ð¼Ð¾Ð³ÑƒÑ‚ Ð¿Ñ€Ð¾Ð²Ð¾Ð´Ð¸Ñ‚ÑŒ Ð°Ð½Ð°Ð»Ð¸Ð· Ð¾Ñ‚ Ð½Ð°ÑˆÐµÐ³Ð¾ Ð¸Ð¼ÐµÐ½Ð¸, Ð½Ð¾ Ð½Ðµ Ð¸Ð¼ÐµÑŽÑ‚ Ð¿Ñ€Ð°Ð²Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð² ÑÐ²Ð¾Ð¸Ñ… Ñ†ÐµÐ»ÑÑ….',
                'checkbox-description':
                  'Ð Ð°Ð·Ñ€ÐµÑˆÐ¸Ñ‚ÑŒ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ Â«Ð¡Ð²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ñ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚ÑŒÑŽÂ»',
              },
              'section-functional': {
                title: 'Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ',
                paragraph:
                  'Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÑŽÑ‚ Ð½Ð°Ð¼ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ Ð¿Ð¾Ð»ÐµÐ·Ð½Ñ‹Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ ÑÐ°Ð¹Ñ‚Ð°, Ð·Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ñ‚ÑŒ Ð²Ð°ÑˆÐ¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ñ Ð¸ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°Ñ‚ÑŒ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ð¹ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚. ÐžÐ´Ð¾Ð±Ñ€ÐµÐ½Ð½Ñ‹Ðµ Ñ‚Ñ€ÐµÑ‚ÑŒÐ¸ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹ Ð¼Ð¾Ð³ÑƒÑ‚ ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°Ñ‚ÑŒ ÑÑ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð´Ð»Ñ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ñ… Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¹ ÑÐ°Ð¹Ñ‚Ð°. Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð½Ðµ Ñ€Ð°Ð·Ñ€ÐµÑˆÐ°ÐµÑ‚Ðµ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÑÑ‚ÑŒ ÑÑ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ cookie, Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹ÐµÂ (Ð¸Ð»Ð¸ Ð²ÑÐµ) ÑÑ‚Ð¸ ÑÐµÑ€Ð²Ð¸ÑÑ‹ Ð¼Ð¾Ð³ÑƒÑ‚ Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾.',
                'checkbox-description':
                  'Ð Ð°Ð·Ñ€ÐµÑˆÐ¸Ñ‚ÑŒ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ Â«Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹ÐµÂ»',
              },
              'section-advertising': {
                title: 'Ð ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ðµ',
                paragraph:
                  'Ð­Ñ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ cookie ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÑŽÑ‚ÑÑ Ð½Ð° Ð½Ð°Ñˆ ÑÐ°Ð¹Ñ‚ Ð½Ð°Ð¼Ð¸ Ð¸Ð»Ð¸ Ð½Ð°ÑˆÐ¸Ð¼Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ð¼Ð¸ Ð¿Ð°Ñ€Ñ‚Ð½ÐµÑ€Ð°Ð¼Ð¸. ÐžÐ½Ð¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÑŽÑ‚ Ð½Ð°Ð¼ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ. Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ ÑÑ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ cookie, Ñ€ÐµÐºÐ»Ð°Ð¼Ð° ÑÑ‚Ð°Ð½ÐµÑ‚ Ð¼ÐµÐ½ÐµÐµ Ñ€ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½Ð¾Ð¹.',
                'checkbox-description':
                  'Ð Ð°Ð·Ñ€ÐµÑˆÐ¸Ñ‚ÑŒ ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸ÑŽ Â«Ð ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹ÐµÂ»',
              },
            },
          },
          'th-th': {
            consentBanner: {
              title:
                'à¹€à¸¥à¸·à¸­à¸à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸„à¸¸à¸à¸à¸µà¹‰à¸‚à¸­à¸‡à¸„à¸¸à¸“',
              paragraph:
                'à¹€à¸£à¸²à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¹à¸¥à¸°à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸—à¸µà¹ˆà¸„à¸¥à¹‰à¸²à¸¢à¸„à¸¥à¸¶à¸‡à¸à¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¸¢à¸à¸£à¸°à¸”à¸±à¸šà¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹ƒà¸«à¹‰à¸šà¸£à¸´à¸à¸²à¸£à¸‚à¸­à¸‡à¹€à¸£à¸² à¸™à¸³à¹€à¸ªà¸™à¸­à¹‚à¸†à¸©à¸“à¸²à¸—à¸µà¹ˆà¹€à¸à¸µà¹ˆà¸¢à¸§à¸‚à¹‰à¸­à¸‡ à¹à¸¥à¸°à¸›à¸£à¸±à¸šà¸›à¸£à¸¸à¸‡à¸žà¸±à¸’à¸™à¸²à¸•à¹ˆà¸­à¹„à¸› à¸™à¸­à¸à¸ˆà¸²à¸à¸™à¸µà¹‰ à¸šà¸¸à¸„à¸„à¸¥à¸ à¸²à¸¢à¸™à¸­à¸à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸­à¸™à¸¸à¸à¸²à¸•à¸¢à¸±à¸‡à¸ˆà¸°à¹ƒà¸Šà¹‰à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸Šà¹ˆà¸§à¸¢à¹€à¸£à¸²à¸™à¸³à¹€à¸ªà¸™à¸­à¹‚à¸†à¸©à¸“à¸²à¹à¸¥à¸°à¸¡à¸­à¸šà¸„à¸¸à¸“à¸ªà¸¡à¸šà¸±à¸•à¸´à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸­à¸µà¸à¸”à¹‰à¸§à¸¢',
              'button-customize': 'à¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡',
              'button-accept': 'à¸¢à¸­à¸¡à¸£à¸±à¸šà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”',
              'button-customize-aria-label':
                'à¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰',
              'button-accept-aria-label':
                'à¸¢à¸­à¸¡à¸£à¸±à¸šà¸„à¸¸à¸à¸à¸µà¹‰à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”',
            },
            consentSelector: {
              header:
                'à¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰',
              intro:
                'à¹€à¸£à¸²à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¹à¸¥à¸°à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸—à¸µà¹ˆà¸„à¸¥à¹‰à¸²à¸¢à¸„à¸¥à¸¶à¸‡à¸à¸±à¸™ (à¹€à¸£à¸µà¸¢à¸à¹‚à¸”à¸¢à¸£à¸§à¸¡à¸§à¹ˆà¸² "à¸„à¸¸à¸à¸à¸µà¹‰") à¹€à¸žà¸·à¹ˆà¸­à¸§à¸±à¸•à¸–à¸¸à¸›à¸£à¸°à¸ªà¸‡à¸„à¹Œà¸•à¹ˆà¸­à¹„à¸›à¸™à¸µà¹‰',
              'checkbox-label': 'à¸­à¸™à¸¸à¸à¸²à¸•à¹à¸¥à¹‰à¸§',
              'button-cancel': 'à¸¢à¸à¹€à¸¥à¸´à¸',
              'button-save': 'à¸šà¸±à¸™à¸—à¸¶à¸à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”',
              'button-cancel-aria-label':
                'à¸¢à¸à¹€à¸¥à¸´à¸à¸à¸²à¸£à¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰',
              'button-save-aria-label':
                'à¸šà¸±à¸™à¸—à¸¶à¸à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰à¸—à¸µà¹ˆà¸›à¸£à¸±à¸šà¹à¸•à¹ˆà¸‡',
              footer: t.act(
                'span',
                null,
                'à¸à¸²à¸£à¸šà¸¥à¹‡à¸­à¸à¸„à¸¸à¸à¸à¸µà¹‰à¸šà¸²à¸‡à¸›à¸£à¸°à¹€à¸ à¸—à¸­à¸²à¸ˆà¸ªà¹ˆà¸‡à¸œà¸¥à¸•à¹ˆà¸­à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¹ƒà¸™à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸‚à¸­à¸‡à¹€à¸£à¸² à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹à¸›à¸¥à¸‡à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰à¹„à¸”à¹‰à¸—à¸¸à¸à¹€à¸¡à¸·à¹ˆà¸­ à¹‚à¸”à¸¢à¸„à¸¥à¸´à¸à¸—à¸µà¹ˆà¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸à¸à¸µà¹‰à¹ƒà¸™à¸ªà¹ˆà¸§à¸™à¸¥à¹ˆà¸²à¸‡à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸™à¸µà¹‰ à¸«à¸²à¸à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¹€à¸£à¸µà¸¢à¸™à¸£à¸¹à¹‰à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸§à¸´à¸˜à¸µà¸à¸²à¸£à¸—à¸µà¹ˆà¹€à¸£à¸²à¹à¸¥à¸°à¸šà¸¸à¸„à¸„à¸¥à¸ à¸²à¸¢à¸™à¸­à¸à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¸šà¸™à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸‚à¸­à¸‡à¹€à¸£à¸² à¹‚à¸›à¸£à¸”à¸­à¹ˆà¸²à¸™',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title:
                      'à¹€à¸›à¸´à¸”à¹ƒà¸™à¸«à¸™à¹‰à¸²à¸•à¹ˆà¸²à¸‡à¸šà¸²à¸™à¹ƒà¸«à¸¡à¹ˆ',
                  },
                  t.act(
                    'span',
                    null,
                    'à¸›à¸£à¸°à¸à¸²à¸¨à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸„à¸¸à¸à¸à¸µà¹‰à¸‚à¸­à¸‡ AWS',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'à¸„à¸¸à¸à¸à¸µà¹‰à¸—à¸µà¹ˆà¸ˆà¸³à¹€à¸›à¹‡à¸™',
                paragraph:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰à¸ˆà¸³à¹€à¸›à¹‡à¸™à¸•à¹ˆà¸­à¸à¸²à¸£à¹ƒà¸«à¹‰à¸šà¸£à¸´à¸à¸²à¸£à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¹à¸¥à¸°à¸šà¸£à¸´à¸à¸²à¸£à¸‚à¸­à¸‡à¹€à¸£à¸² à¹à¸¥à¸°à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸›à¸´à¸”à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¹„à¸”à¹‰ à¹‚à¸”à¸¢à¸›à¸à¸•à¸´à¹à¸¥à¹‰à¸§à¸ˆà¸°à¸¡à¸µà¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¹ƒà¸«à¹‰à¸•à¸­à¸šà¸ªà¸™à¸­à¸‡à¸•à¹ˆà¸­à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¸šà¸™à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œ à¹€à¸Šà¹ˆà¸™ à¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸„à¸§à¸²à¸¡à¹€à¸›à¹‡à¸™à¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¸à¸²à¸£à¸¥à¸‡à¸Šà¸·à¹ˆà¸­à¹€à¸‚à¹‰à¸²à¹ƒà¸Šà¹‰ à¸«à¸£à¸·à¸­à¸à¸²à¸£à¸à¸£à¸­à¸à¹à¸šà¸šà¸Ÿà¸­à¸£à¹Œà¸¡à¸•à¹ˆà¸²à¸‡à¹† ',
                'checkbox-description':
                  'à¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¸—à¸µà¹ˆà¸ˆà¸³à¹€à¸›à¹‡à¸™',
              },
              'section-performance': {
                title:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¸”à¹‰à¸²à¸™à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸ž',
                paragraph:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¸”à¹‰à¸²à¸™à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸ˆà¸°à¹ƒà¸«à¹‰à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ªà¸–à¸´à¸•à¸´à¹à¸šà¸šà¹„à¸¡à¹ˆà¸£à¸°à¸šà¸¸à¸Šà¸·à¹ˆà¸­à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸¥à¸±à¸à¸©à¸“à¸°à¸à¸²à¸£à¹€à¸¢à¸µà¹ˆà¸¢à¸¡à¸Šà¸¡à¸ªà¹ˆà¸§à¸™à¸•à¹ˆà¸²à¸‡à¹† à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¸‚à¸­à¸‡à¸¥à¸¹à¸à¸„à¹‰à¸² à¹€à¸žà¸·à¹ˆà¸­à¸—à¸µà¹ˆà¹€à¸£à¸²à¸ˆà¸°à¹„à¸”à¹‰à¸™à¸³à¹„à¸›à¸›à¸£à¸±à¸šà¸›à¸£à¸¸à¸‡à¸›à¸£à¸°à¸ªà¸šà¸à¸²à¸£à¸“à¹Œà¹à¸¥à¸°à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸žà¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œ à¸šà¸¸à¸„à¸„à¸¥à¸ à¸²à¸¢à¸™à¸­à¸à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸­à¸™à¸¸à¸à¸²à¸•à¸­à¸²à¸ˆà¸—à¸³à¸à¸²à¸£à¸§à¸´à¹€à¸„à¸£à¸²à¸°à¸«à¹Œà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸™à¸™à¸²à¸¡à¸‚à¸­à¸‡à¹€à¸£à¸² à¹à¸•à¹ˆà¸ˆà¸°à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸™à¸³à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹„à¸›à¹ƒà¸Šà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸§à¸±à¸•à¸–à¸¸à¸›à¸£à¸°à¸ªà¸‡à¸„à¹Œà¸‚à¸­à¸‡à¸•à¸±à¸§à¹€à¸­à¸‡à¹„à¸”à¹‰',
                'checkbox-description':
                  'à¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¸”à¹‰à¸²à¸™à¸›à¸£à¸°à¸ªà¸´à¸—à¸˜à¸´à¸ à¸²à¸ž',
              },
              'section-functional': {
                title:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸Šà¹ˆà¸§à¸¢à¹ƒà¸™à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™',
                paragraph:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸Šà¹ˆà¸§à¸¢à¹ƒà¸™à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¸ˆà¸°à¸Šà¹ˆà¸§à¸¢à¹ƒà¸«à¹‰à¹€à¸£à¸²à¸¡à¸­à¸šà¸„à¸¸à¸“à¸ªà¸¡à¸šà¸±à¸•à¸´à¸—à¸µà¹ˆà¸¡à¸µà¸›à¸£à¸°à¹‚à¸¢à¸Šà¸™à¹Œà¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œ à¸ˆà¸”à¸ˆà¸³à¸„à¹ˆà¸²à¸à¸³à¸«à¸™à¸”à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹à¸¥à¸°à¹à¸ªà¸”à¸‡à¹€à¸™à¸·à¹‰à¸­à¸«à¸²à¸—à¸µà¹ˆà¹€à¸à¸µà¹ˆà¸¢à¸§à¸‚à¹‰à¸­à¸‡ à¸šà¸¸à¸„à¸„à¸¥à¸ à¸²à¸¢à¸™à¸­à¸à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸­à¸™à¸¸à¸à¸²à¸•à¸­à¸²à¸ˆà¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸¡à¸­à¸šà¸„à¸¸à¸“à¸ªà¸¡à¸šà¸±à¸•à¸´à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œ à¸«à¸²à¸à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰ à¸šà¸£à¸´à¸à¸²à¸£à¸šà¸²à¸‡à¸­à¸¢à¹ˆà¸²à¸‡à¸«à¸£à¸·à¸­à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰à¸­à¸²à¸ˆà¸—à¸³à¸‡à¸²à¸™à¹„à¸¡à¹ˆà¹€à¸«à¸¡à¸²à¸°à¸ªà¸¡',
                'checkbox-description':
                  'à¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸Šà¹ˆà¸§à¸¢à¹ƒà¸™à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™',
              },
              'section-advertising': {
                title: 'à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸à¸²à¸£à¹‚à¸†à¸©à¸“à¸²',
                paragraph:
                  'à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸à¸²à¸£à¹‚à¸†à¸©à¸“à¸²à¸­à¸²à¸ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸œà¹ˆà¸²à¸™à¹€à¸§à¹‡à¸šà¹„à¸‹à¸•à¹Œà¹‚à¸”à¸¢à¹€à¸£à¸²à¸«à¸£à¸·à¸­à¸„à¸¹à¹ˆà¸„à¹‰à¸²à¸”à¹‰à¸²à¸™à¹‚à¸†à¸©à¸“à¸²à¸‚à¸­à¸‡à¹€à¸£à¸² à¹à¸¥à¸°à¸Šà¹ˆà¸§à¸¢à¹€à¸£à¸²à¹ƒà¸™à¸à¸²à¸£à¸ªà¹ˆà¸‡à¸¡à¸­à¸šà¹€à¸™à¸·à¹‰à¸­à¸«à¸²à¸—à¸²à¸‡à¸à¸²à¸£à¸•à¸¥à¸²à¸”à¸—à¸µà¹ˆà¹€à¸à¸µà¹ˆà¸¢à¸§à¸‚à¹‰à¸­à¸‡ à¸«à¸²à¸à¸„à¸¸à¸“à¹„à¸¡à¹ˆà¸­à¸™à¸¸à¸à¸²à¸•à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸«à¸¥à¹ˆà¸²à¸™à¸µà¹‰ à¸„à¸¸à¸“à¸ˆà¸°à¸žà¸šà¹‚à¸†à¸©à¸“à¸²à¸—à¸µà¹ˆà¹€à¸à¸µà¹ˆà¸¢à¸§à¸‚à¹‰à¸­à¸‡à¸™à¹‰à¸­à¸¢à¸¥à¸‡',
                'checkbox-description':
                  'à¸­à¸™à¸¸à¸à¸²à¸•à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸„à¸¸à¸à¸à¸µà¹‰à¹€à¸žà¸·à¹ˆà¸­à¸à¸²à¸£à¹‚à¸†à¸©à¸“à¸²',
              },
            },
          },
          'tr-tr': {
            consentBanner: {
              title: 'Ã‡erez tercihlerinizi seÃ§me',
              paragraph:
                'Size daha iyi bir deneyim sunmak, hizmetlerimizi saÄŸlamak, alakalÄ± reklamlar yayÄ±nlamak ve iyileÅŸtirmeler yapmak amacÄ±yla Ã§erezler ve benzer araÃ§lar kullanÄ±rÄ±z. Bu araÃ§larÄ±, reklam yayÄ±nlamamÄ±za ve belirli site Ã¶zelliklerini saÄŸlamamÄ±za yardÄ±mcÄ± olmak amacÄ±yla onaylÄ± Ã¼Ã§Ã¼ncÃ¼ taraflar da kullanÄ±r.',
              'button-customize': 'Ã–zelleÅŸtir',
              'button-accept': 'TÃ¼mÃ¼nÃ¼ kabul et',
              'button-customize-aria-label': 'Ã‡erez tercihlerini Ã¶zelleÅŸtir',
              'button-accept-aria-label': 'TÃ¼m Ã§erezleri kabul et',
            },
            consentSelector: {
              header: 'Ã‡erez tercihlerini Ã¶zelleÅŸtir',
              intro:
                'Ã‡erezleri ve benzer araÃ§larÄ± (topluca "Ã§erezler") aÅŸaÄŸÄ±daki amaÃ§lar iÃ§in kullanÄ±rÄ±z.',
              'checkbox-label': 'Ä°zin verildi',
              'button-cancel': 'Ä°ptal',
              'button-save': 'Tercihleri kaydet',
              'button-cancel-aria-label':
                'Ã‡erez tercihlerini Ã¶zelleÅŸtirmeyi iptal et',
              'button-save-aria-label':
                'Ã–zelleÅŸtirilmiÅŸ Ã§erez tercihlerini kaydet',
              footer: t.act(
                'span',
                null,
                'BazÄ± Ã§erez tÃ¼rlerini engellemek, sitelerimizle ilgili deneyiminizi etkileyebilir. Bu sitenin alt bilgisindeki Ã‡erez tercihleri baÄŸlantÄ±sÄ±na tÄ±klayarak dilediÄŸiniz zaman seÃ§imlerinizi deÄŸiÅŸtirebilirsiniz. Bizim ve onaylÄ± Ã¼Ã§Ã¼ncÃ¼ taraflarÄ±n, Ã§erezleri sitelerimizde nasÄ±l kullandÄ±ÄŸÄ±mÄ±z hakkÄ±nda daha fazla bilgi edinmek iÃ§in lÃ¼tfenÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Yeni Bir Pencerede AÃ§Ä±lÄ±r',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS Ã‡erez Bildirimimizi',
                    t.act(n.default, { size: '10px' })
                  )
                ),
                ' okuyun.'
              ),
              'section-essential': {
                title: 'Temel',
                paragraph:
                  'Temel Ã§erezler, sitemizi ve hizmetlerimizi sunmak iÃ§in gerekli olup devre dÄ±ÅŸÄ± bÄ±rakÄ±lamaz. Bunlar genellikle sitede gizlilik tercihlerinizi ayarlama, oturum aÃ§ma veya formlarÄ± doldurma gibi eylemlerde bulunduÄŸunuzda yerleÅŸtirilir. ',
                'checkbox-description': 'Temel kategoriye izin ver',
              },
              'section-performance': {
                title: 'Performans',
                paragraph:
                  'Performans Ã§erezleri, site deneyimini ve performansÄ±nÄ± iyileÅŸtirebilmemiz iÃ§in mÃ¼ÅŸterilerin sitemizde nasÄ±l gezindiÄŸi hakkÄ±nda anonim istatistikler saÄŸlar. OnaylÄ± Ã¼Ã§Ã¼ncÃ¼ taraflar bizim adÄ±mÄ±za analiz yapabilir ancak verileri kendi amaÃ§larÄ± iÃ§in kullanamazlar.',
                'checkbox-description': 'Performans kategorisine izin ver',
              },
              'section-functional': {
                title: 'Ä°ÅŸlevsellik',
                paragraph:
                  'Ä°ÅŸlevsellik Ã§erezleri yararlÄ± site Ã¶zellikleri sunmamÄ±za, tercihlerinizi hatÄ±rlamamÄ±za ve alakalÄ± iÃ§erikler gÃ¶stermemize yardÄ±mcÄ± olur. OnaylÄ± Ã¼Ã§Ã¼ncÃ¼ taraflar bu Ã§erezleri belirli site Ã¶zelliklerini saÄŸlamak iÃ§in yerleÅŸtirebilir. Bu Ã§erezlere izin vermezseniz, bu hizmetlerin bir kÄ±smÄ± veya tamamÄ± dÃ¼zgÃ¼n Ã§alÄ±ÅŸmayabilir.',
                'checkbox-description': 'Ä°ÅŸlevsellik kategorisine izin ver',
              },
              'section-advertising': {
                title: 'Reklam',
                paragraph:
                  'Reklam Ã§erezleri, sitemiz aracÄ±lÄ±ÄŸÄ±yla bizim tarafÄ±mÄ±zdan ya da reklam Ã§Ã¶zÃ¼m ortaklarÄ±mÄ±z tarafÄ±ndan yerleÅŸtirilebilir ve alakalÄ± pazarlama iÃ§erikleri yayÄ±nlamamÄ±za yardÄ±mcÄ± olur. Bu Ã§erezlere izin vermezseniz, daha az alakalÄ± reklamlarla karÅŸÄ±laÅŸÄ±rsÄ±nÄ±z.',
                'checkbox-description': 'Reklam kategorisine izin ver',
              },
            },
          },
          'vi-vn': {
            consentBanner: {
              title: 'Chá»n tÃ¹y chá»n cookie cá»§a báº¡n',
              paragraph:
                'ChÃºng tÃ´i sá»­ dá»¥ng cookie vÃ  cÃ¡c cÃ´ng cá»¥ tÆ°Æ¡ng tá»± Ä‘á»ƒ nÃ¢ng cao tráº£i nghiá»‡m cá»§a báº¡n, cung cáº¥p dá»‹ch vá»¥, phÃ¢n phá»‘i ná»™i dung quáº£ng cÃ¡o phÃ¹ há»£p vÃ  táº¡o ra cáº£i thiá»‡n. CÃ¡c bÃªn thá»© ba Ä‘Æ°á»£c cháº¥p thuáº­n cÅ©ng cÃ³ thá»ƒ sá»­ dá»¥ng cÃ¡c cÃ´ng cá»¥ nÃ y Ä‘á»ƒ giÃºp chÃºng tÃ´i phÃ¢n phá»‘i quáº£ng cÃ¡o vÃ  cung cáº¥p má»™t sá»‘ tÃ­nh nÄƒng trÃªn trang.',
              'button-customize': 'TÃ¹y chá»‰nh',
              'button-accept': 'Cháº¥p nháº­n táº¥t cáº£',
              'button-customize-aria-label': 'TÃ¹y chá»‰nh tÃ¹y chá»n cookie',
              'button-accept-aria-label': 'Cháº¥p nháº­n táº¥t cáº£ cookie',
            },
            consentSelector: {
              header: 'TÃ¹y chá»‰nh tÃ¹y chá»n cookie',
              intro:
                'ChÃºng tÃ´i sá»­ dá»¥ng cookie vÃ  cÃ¡c cÃ´ng cá»¥ tÆ°Æ¡ng tá»± (gá»i chung lÃ  â€œcookieâ€) Ä‘á»ƒ phá»¥c vá»¥ cÃ¡c má»¥c Ä‘Ã­ch sau.',
              'checkbox-label': 'ÄÃ£ cho phÃ©p',
              'button-cancel': 'Há»§y',
              'button-save': 'LÆ°u tÃ¹y chá»n',
              'button-cancel-aria-label':
                'Há»§y tÃ¹y chá»‰nh tÃ¹y chá»n cookie',
              'button-save-aria-label':
                'LÆ°u tÃ¹y chá»n cookie Ä‘Ã£ tÃ¹y chá»‰nh',
              footer: t.act(
                'span',
                null,
                'Viá»‡c cháº·n má»™t sá»‘ loáº¡i cookie cÃ³ thá»ƒ áº£nh hÆ°á»Ÿng Ä‘áº¿n tráº£i nghiá»‡m cá»§a báº¡n trÃªn trang cá»§a chÃºng tÃ´i. Báº¡n cÃ³ thá»ƒ thay Ä‘á»•i tÃ¹y chá»n cookie cá»§a mÃ¬nh báº¥t cá»© lÃºc nÃ o báº±ng cÃ¡ch nháº¥p vÃ o TÃ¹y chá»n cookie á»Ÿ chÃ¢n cá»§a trang nÃ y. Äá»ƒ tÃ¬m hiá»ƒu thÃªm vá» cÃ¡ch chÃºng tÃ´i vÃ  cÃ¡c bÃªn thá»© ba Ä‘Æ°á»£c cháº¥p thuáº­n sá»­ dá»¥ng cookie trÃªn trang cá»§a chÃºng tÃ´i, vui lÃ²ng Ä‘á»cÂ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Má»Ÿ trong cá»­a sá»• má»›i',
                  },
                  t.act(
                    'span',
                    null,
                    'ThÃ´ng bÃ¡o vá» cookie cá»§a AWS.',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'Thiáº¿t yáº¿u',
                paragraph:
                  'Cookie thiáº¿t yáº¿u Ä‘Ã³ng vai trÃ² cáº§n thiáº¿t trong viá»‡c cung cáº¥p trang cÅ©ng nhÆ° dá»‹ch vá»¥ cá»§a chÃºng tÃ´i vÃ  khÃ´ng thá»ƒ bá»‹ vÃ´ hiá»‡u hÃ³a. ThÃ´ng thÆ°á»ng, cookie Ä‘Æ°á»£c thiáº¿t láº­p Ä‘á»ƒ pháº£n há»“i cÃ¡c hÃ nh Ä‘á»™ng cá»§a báº¡n trÃªn trang, cháº³ng háº¡n nhÆ° thiáº¿t láº­p tÃ¹y chá»n quyá»n riÃªng tÆ°, Ä‘Äƒng nháº­p hoáº·c Ä‘iá»n vÃ o biá»ƒu máº«u. ',
                'checkbox-description': 'Cho phÃ©p háº¡ng má»¥c thiáº¿t yáº¿u',
              },
              'section-performance': {
                title: 'Hiá»‡u suáº¥t',
                paragraph:
                  'Cookie hiá»‡u suáº¥t cung cáº¥p sá»‘ liá»‡u thá»‘ng kÃª áº©n danh vá» cÃ¡ch khÃ¡ch hÃ ng Ä‘iá»u hÆ°á»›ng trang cá»§a chÃºng tÃ´i nháº±m giÃºp chÃºng tÃ´i cáº£i thiá»‡n tráº£i nghiá»‡m vÃ  hiá»‡u suáº¥t cá»§a trang. CÃ¡c bÃªn thá»© ba Ä‘Æ°á»£c cháº¥p thuáº­n cÃ³ thá»ƒ thá»±c hiá»‡n phÃ¢n tÃ­ch thay máº·t chÃºng tÃ´i nhÆ°ng khÃ´ng thá»ƒ sá»­ dá»¥ng dá»¯ liá»‡u cho má»¥c Ä‘Ã­ch riÃªng cá»§a mÃ¬nh.',
                'checkbox-description': 'Cho phÃ©p háº¡ng má»¥c hiá»‡u suáº¥t',
              },
              'section-functional': {
                title: 'Chá»©c nÄƒng',
                paragraph:
                  'Cookie chá»©c nÄƒng giÃºp chÃºng tÃ´i cung cáº¥p cÃ¡c tÃ­nh nÄƒng cÃ³ Ã­ch trÃªn trang, ghi nhá»› tÃ¹y chá»n cá»§a báº¡n vÃ  hiá»ƒn thá»‹ ná»™i dung phÃ¹ há»£p. CÃ¡c bÃªn thá»© ba Ä‘Æ°á»£c cháº¥p thuáº­n cÃ³ thá»ƒ thiáº¿t láº­p cÃ¡c cookie nÃ y Ä‘á»ƒ cung cáº¥p má»™t sá»‘ tÃ­nh nÄƒng trÃªn site. Náº¿u báº¡n khÃ´ng cho phÃ©p cÃ¡c cookie nÃ y thÃ¬ má»™t sá»‘ hoáº·c toÃ n bá»™ cÃ¡c dá»‹ch vá»¥ nÃ y cÃ³ thá»ƒ khÃ´ng hoáº¡t Ä‘á»™ng Ä‘Ãºng cÃ¡ch.',
                'checkbox-description': 'Cho phÃ©p háº¡ng má»¥c chá»©c nÄƒng',
              },
              'section-advertising': {
                title: 'Quáº£ng cÃ¡o',
                paragraph:
                  'ChÃºng tÃ´i hoáº·c cÃ¡c Ä‘á»‘i tÃ¡c quáº£ng cÃ¡o cá»§a chÃºng tÃ´i cÃ³ thá»ƒ thiáº¿t láº­p cookie quáº£ng cÃ¡o thÃ´ng qua trang cá»§a chÃºng tÃ´i. CÃ¡c cookie nÃ y giÃºp chÃºng tÃ´i phÃ¢n phá»‘i ná»™i dung tiáº¿p thá»‹ phÃ¹ há»£p. Náº¿u báº¡n khÃ´ng cho phÃ©p cÃ¡c cookie nÃ y, báº¡n sáº½ nháº­n Ä‘Æ°á»£c quáº£ng cÃ¡o Ã­t phÃ¹ há»£p hÆ¡n.',
                'checkbox-description': 'Cho phÃ©p háº¡ng má»¥c quáº£ng cÃ¡o',
              },
            },
          },
          'zh-cn': {
            consentBanner: {
              title: 'é€‰æ‹©æ‚¨çš„ Cookie é¦–é€‰é¡¹',
              paragraph:
                'æˆ‘ä»¬ä½¿ç”¨ Cookie å’Œç±»ä¼¼å·¥å…·æ¥æ”¹å–„æ‚¨çš„ç”¨æˆ·ä½“éªŒï¼Œæä¾›æˆ‘ä»¬çš„æœåŠ¡ï¼ŒæŽ¨é€é’ˆå¯¹æ€§å¹¿å‘Šï¼Œä»¥åŠåšå‡ºæ”¹è¿›ã€‚ç»æ‰¹å‡†çš„ç¬¬ä¸‰æ–¹ä¹Ÿå¯ä½¿ç”¨è¿™äº›å·¥å…·æ¥å¸®åŠ©æˆ‘ä»¬æŠ•æ”¾å¹¿å‘Šå¹¶æä¾›æŸäº›ç«™ç‚¹åŠŸèƒ½ã€‚',
              'button-customize': 'è‡ªå®šä¹‰',
              'button-accept': 'æŽ¥å—å…¨éƒ¨',
              'button-customize-aria-label': 'è‡ªå®šä¹‰ Cookie é¦–é€‰é¡¹',
              'button-accept-aria-label': 'æŽ¥å—æ‰€æœ‰ Cookie',
            },
            consentSelector: {
              header: 'è‡ªå®šä¹‰ Cookie é¦–é€‰é¡¹',
              intro:
                'Cookie åŠç±»ä¼¼å·¥å…·(ç»Ÿç§°ä¸ºâ€œCookieâ€)çš„ç”¨é€”åŒ…æ‹¬ä»¥ä¸‹å‡ ç§ã€‚',
              'checkbox-label': 'å…è®¸',
              'button-cancel': 'å–æ¶ˆ',
              'button-save': 'ä¿å­˜é¦–é€‰é¡¹',
              'button-cancel-aria-label': 'å–æ¶ˆè‡ªå®šä¹‰ Cookie é¦–é€‰é¡¹',
              'button-save-aria-label': 'ä¿å­˜è‡ªå®šä¹‰çš„ Cookie é¦–é€‰é¡¹',
              footer: t.act(
                'span',
                null,
                'é˜»æ­¢æŸäº›ç±»åž‹çš„ Cookie çš„è¯ï¼Œå¯èƒ½ä¼šå½±å“åˆ°æ‚¨çš„ç½‘ç«™ä½“éªŒã€‚æ‚¨å¯ä»¥éšæ—¶å•å‡»æ­¤ç½‘ç«™é¡µè„šä¸­çš„ Cookie é¦–é€‰é¡¹æ¥å¯¹æ‚¨çš„ Cookie é¦–é€‰é¡¹è¿›è¡Œæ›´æ”¹ã€‚è¦äº†è§£æœ‰å…³æˆ‘ä»¬åŠç»æ‰¹å‡†çš„ç¬¬ä¸‰æ–¹å¦‚ä½•åœ¨ç½‘ç«™ä¸Šä½¿ç”¨ Cookie çš„æ›´å¤šä¿¡æ¯ï¼Œè¯·é˜…è¯»Â ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'åœ¨æ–°çª—å£ä¸­æ‰“å¼€',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS Cookie å£°æ˜Žã€‚',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'å…³é”®',
                paragraph:
                  'å…³é”® Cookie å¯¹æˆ‘ä»¬æä¾›ç½‘ç«™å’ŒæœåŠ¡æ¥è¯´ç»å¯¹å¿…è¦ï¼Œä¸å¯å°†å…¶ç¦ç”¨ã€‚å…³é”® Cookie é€šå¸¸æ˜¯æ ¹æ®æ‚¨åœ¨ç½‘ç«™ä¸Šçš„æ“ä½œ(ä¾‹å¦‚ï¼Œè®¾ç½®æ‚¨çš„éšç§é¦–é€‰é¡¹ï¼Œç™»å½•æˆ–å¡«å†™è¡¨æ ¼)æ¥è®¾ç½®çš„ã€‚',
                'checkbox-description': 'å…è®¸å…³é”®ç±»åˆ«',
              },
              'section-performance': {
                title: 'æ€§èƒ½',
                paragraph:
                  'æ€§èƒ½ Cookie å¯ä¸ºæˆ‘ä»¬æä¾›æœ‰å…³å®¢æˆ·ä½¿ç”¨ç½‘ç«™æƒ…å†µçš„åŒ¿åç»Ÿè®¡ä¿¡æ¯ï¼Œä»¥ä¾¿æˆ‘ä»¬æ”¹å–„ç”¨æˆ·çš„ç½‘ç«™ä½“éªŒåŠç½‘ç«™æ€§èƒ½ã€‚ç»æ‰¹å‡†çš„ç¬¬ä¸‰æ–¹å¯ä¸ºæˆ‘ä»¬æ‰§è¡Œåˆ†æžï¼Œä½†ä¸å¯å°†æ•°æ®ç”¨äºŽå…¶è‡ªèº«ç›®çš„ã€‚',
                'checkbox-description': 'å…è®¸æ€§èƒ½ç±»åˆ«',
              },
              'section-functional': {
                title: 'åŠŸèƒ½',
                paragraph:
                  'åŠŸèƒ½ Cookie æœ‰åŠ©äºŽæˆ‘ä»¬æä¾›æœ‰ç”¨çš„ç½‘ç«™åŠŸèƒ½ï¼Œè®°ä½æ‚¨çš„é¦–é€‰é¡¹åŠæ˜¾ç¤ºæœ‰é’ˆå¯¹æ€§çš„å†…å®¹ã€‚ç»æ‰¹å‡†çš„ç¬¬ä¸‰æ–¹å¯å¯¹åŠŸèƒ½ Cookie è¿›è¡Œè®¾ç½®ä»¥æä¾›æŸäº›ç½‘ç«™åŠŸèƒ½ã€‚å¦‚æžœæ‚¨ä¸å…è®¸åŠŸèƒ½ Cookieï¼Œåˆ™æŸäº›æˆ–æ‰€æœ‰è¿™äº›æœåŠ¡å¯èƒ½æ— æ³•æ­£å¸¸æä¾›ã€‚',
                'checkbox-description': 'å…è®¸åŠŸèƒ½ç±»åˆ«',
              },
              'section-advertising': {
                title: 'å¹¿å‘Š',
                paragraph:
                  'å¹¿å‘Š Cookie å¯ç”±æˆ‘ä»¬æˆ–æˆ‘ä»¬çš„å¹¿å‘Šåˆä½œä¼™ä¼´é€šè¿‡æˆ‘ä»¬çš„ç½‘ç«™è¿›è¡Œè®¾ç½®ï¼Œæœ‰åŠ©äºŽæˆ‘ä»¬æŽ¨é€æœ‰é’ˆå¯¹æ€§çš„è¥é”€å†…å®¹ã€‚å¦‚æžœæ‚¨ä¸å…è®¸å¹¿å‘Š Cookieï¼Œåˆ™æ‚¨æ‰€æŽ¥æ”¶åˆ°çš„å¹¿å‘Šçš„é’ˆå¯¹æ€§å°†ä¼šæœ‰æ‰€é™ä½Žã€‚',
                'checkbox-description': 'å…è®¸å¹¿å‘Šç±»åˆ«',
              },
            },
          },
          'zh-tw': {
            consentBanner: {
              title: 'é¸å–æ‚¨çš„ Cookie åå¥½è¨­å®š',
              paragraph:
                'æˆ‘å€‘ä½¿ç”¨ Cookie å’Œé¡žä¼¼å·¥å…·ä¾†å¢žå¼·æ‚¨çš„é«”é©—ã€æä¾›æˆ‘å€‘çš„æœå‹™ã€æä¾›ç›¸é—œå»£å‘Šï¼Œä»¥åŠé€²è¡Œæ”¹å–„ã€‚ç²æ ¸å‡†çš„ç¬¬ä¸‰æ–¹ä¹Ÿæœƒä½¿ç”¨é€™äº›å·¥å…·å”åŠ©æˆ‘å€‘æä¾›å»£å‘Šå’Œç‰¹å®šç¶²ç«™åŠŸèƒ½ã€‚',
              'button-customize': 'è‡ªè¨‚',
              'button-accept': 'å…¨éƒ¨æŽ¥å—',
              'button-customize-aria-label': 'è‡ªè¨‚ Cookie åå¥½è¨­å®š',
              'button-accept-aria-label': 'æŽ¥å—æ‰€æœ‰ Cookie',
            },
            consentSelector: {
              header: 'è‡ªè¨‚ Cookie åå¥½è¨­å®š',
              intro:
                'æˆ‘å€‘æœƒå°‡ Cookie å’Œé¡žä¼¼å·¥å…· (çµ±ç¨±ç‚º "Cookie") ç”¨æ–¼ä»¥ä¸‹ç›®çš„ã€‚',
              'checkbox-label': 'å·²å…è¨±',
              'button-cancel': 'å–æ¶ˆ',
              'button-save': 'å„²å­˜åå¥½è¨­å®š',
              'button-cancel-aria-label': 'å–æ¶ˆè‡ªè¨‚ Cookie åå¥½è¨­å®š',
              'button-save-aria-label': 'å„²å­˜è‡ªè¨‚çš„ Cookie åå¥½è¨­å®š',
              footer: t.act(
                'span',
                null,
                'å°éŽ–éƒ¨åˆ†é¡žåž‹çš„ Cookie å¯èƒ½æœƒå½±éŸ¿æ‚¨åœ¨ä½¿ç”¨æˆ‘å€‘çš„ç¶²ç«™æ™‚çš„é«”é©—ã€‚æ‚¨å¯ä»¥éš¨æ™‚åœ¨æœ¬ç¶²ç«™é å°¾æŒ‰ä¸€ä¸‹ã€ŒCookie åå¥½è¨­å®šã€ä¾†è®Šæ›´æ‚¨çš„ Cookie åå¥½è¨­å®šã€‚è‹¥è¦é€²ä¸€æ­¥äº†è§£æˆ‘å€‘å’Œç²æ ¸å‡†çš„ç¬¬ä¸‰æ–¹å¦‚ä½•åœ¨æˆ‘å€‘çš„ç¶²ç«™ä¸Šä½¿ç”¨ Cookieï¼Œè«‹é–±è®€æˆ‘å€‘çš„ ',
                t.act(
                  'a',
                  {
                    'data-id': 'awsccc-cs-f-notice',
                    href: o,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: '(åœ¨æ–°è¦–çª—ä¸­é–‹å•Ÿ) ',
                  },
                  t.act(
                    'span',
                    null,
                    'AWS Cookie é€šçŸ¥ã€‚',
                    t.act(n.default, { size: '10px' })
                  )
                )
              ),
              'section-essential': {
                title: 'å¿…è¦',
                paragraph:
                  'å¿…è¦ Cookie å°æ–¼æˆ‘å€‘æ‰€æä¾›çš„ç¶²ç«™å’Œæœå‹™è€Œæ˜¯å¿…è¦çš„ï¼Œè€Œä¸”ç„¡æ³•åœç”¨ã€‚å®ƒå€‘çš„è¨­å®šé€šå¸¸æ˜¯å°æ‚¨åœ¨ç¶²ç«™ä¸Šçš„å‹•ä½œçš„å›žæ‡‰ï¼Œä¾‹å¦‚ï¼Œè¨­å®šæ‚¨çš„éš±ç§åå¥½ã€ç™»å…¥æˆ–å¡«å¯«è¡¨å–®ã€‚',
                'checkbox-description': 'å…è¨±å¿…è¦é¡žåˆ¥',
              },
              'section-performance': {
                title: 'æ•ˆèƒ½',
                paragraph:
                  'æ•ˆèƒ½ Cookie æä¾›æœ‰é—œå®¢æˆ¶å¦‚ä½•ç€è¦½æˆ‘å€‘ç¶²ç«™çš„åŒ¿åçµ±è¨ˆè³‡æ–™ï¼Œä»¥ä¾¿æˆ‘å€‘æ”¹å–„ç¶²ç«™é«”é©—å’Œæ•ˆèƒ½ã€‚ç²æ ¸å‡†çš„ç¬¬ä¸‰æ–¹å¯ä»£è¡¨æˆ‘å€‘åŸ·è¡Œåˆ†æžï¼Œä½†ä»–å€‘ç„¡æ³•å°‡è³‡æ–™ç”¨æ–¼è‡ªå·±çš„ç”¨é€”ã€‚',
                'checkbox-description': 'å…è¨±æ•ˆèƒ½é¡žåˆ¥',
              },
              'section-functional': {
                title: 'åŠŸèƒ½',
                paragraph:
                  'åŠŸèƒ½ Cookie å¯å”åŠ©æˆ‘å€‘æä¾›å¯¦ç”¨çš„ç¶²ç«™åŠŸèƒ½ã€è¨˜ä½æ‚¨çš„åå¥½è¨­å®šï¼Œä»¥åŠé¡¯ç¤ºç›¸é—œå…§å®¹ï¼Œç²æ ¸å‡†çš„ç¬¬ä¸‰æ–¹å¯èƒ½æœƒè¨­å®šé€™äº› Cookie ä»¥æä¾›ç‰¹å®šç¶²ç«™åŠŸèƒ½ã€‚è‹¥æ‚¨ä¸å…è¨±é€™äº› Cookieï¼Œå‰‡éƒ¨åˆ†æˆ–å…¨éƒ¨æœå‹™å¯èƒ½ç„¡æ³•æ­£å¸¸é‹ä½œã€‚',
                'checkbox-description': 'å…è¨±åŠŸèƒ½é¡žåˆ¥',
              },
              'section-advertising': {
                title: 'å»£å‘Š',
                paragraph:
                  'æˆ‘å€‘æˆ–æˆ‘å€‘çš„å»£å‘Šåˆä½œå¤¥ä¼´å¯ä»¥é€éŽç¶²ç«™å°å»£å‘Š Cookie é€²è¡Œè¨­å®šï¼Œå”åŠ©æˆ‘å€‘æä¾›ç›¸é—œçš„è¡ŒéŠ·å…§å®¹ã€‚è‹¥æ‚¨ä¸å…è¨±é€™äº› Cookieï¼Œæ‚¨å°‡çœ‹åˆ°ç›¸é—œç¨‹åº¦è¼ƒä½Žçš„å»£å‘Šã€‚',
                'checkbox-description': 'å…è¨±å»£å‘Šé¡žåˆ¥',
              },
            },
          },
        });
    },
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.setConsentCookie = a.getConsentCookie = void 0);
      var n = c(10),
        o = c(4);
      function i(e, a) {
        var c,
          t,
          n = e.match('(^|;)\\s*awsccc\\s*=\\s*([^;]+)'),
          o = a ? a('error') : function () {};
        if (n && n.length > 0)
          try {
            var i = JSON.parse(atob(n[n.length - 1]));
            return 1 === (t = i).e &&
              'number' == typeof t.p &&
              'number' == typeof t.f &&
              'number' == typeof t.a &&
              'string' == typeof t.i &&
              'string' == typeof t.v
              ? {
                  essential: 1 === (c = i).e,
                  performance: 1 === c.p,
                  functional: 1 === c.f,
                  advertising: 1 === c.a,
                  id: c.i,
                  version: c.v,
                }
              : void o('getCookie', {
                  detail: 'Cookie format is not valid',
                  cookie: i,
                });
          } catch (e) {
            return void o('getCookie', {
              detail: 'Error parsing cookie',
              cookie: n[n.length - 1],
            });
          }
      }
      function r(e) {
        document.cookie = e;
      }
      (a.getConsentCookie = function (e, a) {
        void 0 === e &&
          (e = function () {
            return document.cookie;
          });
        var c = i(e(), a);
        if (c)
          return {
            essential: c.essential,
            performance: c.performance,
            functional: c.functional,
            advertising: c.advertising,
          };
      }),
        (a.setConsentCookie = function (e, a, c, s, l, u, d, p) {
          void 0 === a && (a = o.DEFAULT_DOMAIN),
            void 0 === c && (c = o.DEFAULT_COOKIE_AGE),
            void 0 === s && (s = n.default),
            void 0 === l && (l = r);
          var b,
            f =
              (function (e) {
                void 0 === e &&
                  (e = function () {
                    return document.cookie;
                  });
                var a = i(e());
                if (a && a.id) return a.id;
              })() || s(u, d, p),
            h = t(t({}, e), { id: f, version: o.COOKIE_VERSION }),
            g = {
              e: (b = h).essential ? 1 : 0,
              p: b.performance ? 1 : 0,
              f: b.functional ? 1 : 0,
              a: b.advertising ? 1 : 0,
              i: b.id,
              v: b.version,
            };
          return (
            l(
              'awsccc=' +
                btoa(JSON.stringify(g)) +
                '; domain=' +
                a +
                '; path=/; max-age=' +
                c +
                '; secure=true; SameSite=Lax'
            ),
            h
          );
        });
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(46);
      a.default = function (e, a, c) {
        void 0 === a && (a = t.v4),
          void 0 === c &&
            (c = function () {
              return 'ts-' + Date.now().toString();
            });
        var n = e ? e('error') : function () {};
        try {
          return a();
        } catch (e) {
          return (
            n('uuid', {
              detail: 'Error generating UUID',
              errorMessage: e.message || '',
            }),
            c()
          );
        }
      };
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.queryGeolocationByHttpGetRequest =
          a.timestampUrl =
          a.QUERY_PARAM_KEY =
          a.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL =
          a.DEFAULT_GEOLOCATION_URL =
            void 0);
      var t = c(12);
      (a.DEFAULT_GEOLOCATION_URL =
        'https://prod.tools.shortbread.aws.dev/1x1.png'),
        (a.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL =
          'https://prod.tools.shortbread.analytics.console.aws.a2z.com/ping'),
        (a.QUERY_PARAM_KEY = 'awsccc'),
        (a.timestampUrl = function (e) {
          if (-1 !== e.indexOf('?')) {
            var c = e.split('?');
            e = c[0] + '?' + a.QUERY_PARAM_KEY + '=' + Date.now() + '&' + c[1];
          } else {
            if (-1 === e.indexOf('#'))
              return e + '?' + a.QUERY_PARAM_KEY + '=' + Date.now();
            c = e.split('#');
            e = c[0] + '?' + a.QUERY_PARAM_KEY + '=' + Date.now() + '#' + c[1];
          }
          return e;
        }),
        (a.queryGeolocationByHttpGetRequest = function (e, c, n, o) {
          function i(e, a, t, n, o) {
            e('info')('geolocationLatency', {
              metric: a,
              region: t,
              detail: n,
              url: c,
              status: o,
            });
          }
          return (
            void 0 === e && (e = !1),
            void 0 === c && (c = a.DEFAULT_GEOLOCATION_URL),
            void 0 === n && (n = 5e3),
            void 0 === o && (o = t.DEFAULT_LOGGER),
            function (r, s) {
              void 0 === s && (s = o || t.DEFAULT_LOGGER);
              var l = Date.now(),
                u = new XMLHttpRequest(),
                d = 'EU',
                p = 200;
              e && u.overrideMimeType('application/json'),
                u.addEventListener('load', function () {
                  if (((p = u.status), e && 304 !== p))
                    try {
                      var a = JSON.parse(u.response);
                      403 === (p = a.status) && (d = 'NON-EU');
                    } catch (e) {
                      s('error')('geolocationResponseError', {
                        url: c,
                        detail:
                          'Failed to Parse the Received Geolocation Response',
                      });
                    }
                  else d = 403 === p ? 'NON-EU' : 'EU';
                  i(s, Date.now() - l, d, 'Geolocation Response Received', p),
                    r(d);
                }),
                u.addEventListener('timeout', function () {
                  r('EU');
                  var e = 'Geolocation Request Timed out';
                  i(s, n, 'EU', e, u.status),
                    s('error')('geolocationRequestTimeout', {
                      url: c,
                      timeoutSetting: n,
                      detail: e,
                    });
                }),
                u.open('GET', a.timestampUrl(c)),
                (u.timeout = n),
                u.send();
            }
          );
        }),
        (a.default = a.queryGeolocationByHttpGetRequest);
    },
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.DEFAULT_LOGGER =
          a.createLogger =
          a.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL =
          a.DEFAULT_LOGGER_PIXEL_URL =
            void 0),
        (a.DEFAULT_LOGGER_PIXEL_URL =
          'https://prod.log.shortbread.aws.dev/1x1.png'),
        (a.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL =
          'https://prod.log.shortbread.analytics.console.aws.a2z.com/1x1.png');
      (a.createLogger = function (e) {
        var c = e.baseUrl,
          n = void 0 === c ? a.DEFAULT_LOGGER_PIXEL_URL : c,
          o = e.timeout,
          i = void 0 === o ? 5e3 : o;
        return function (e) {
          return function (a, c) {
            void 0 === c && (c = {}),
              (function (e, a) {
                try {
                  var c = new XMLHttpRequest();
                  (c.onreadystatechange = function () {}),
                    (c.ontimeout = function () {}),
                    (c.onerror = function () {}),
                    c.open('HEAD', e),
                    (c.timeout = a),
                    c.send();
                } catch (e) {
                  console.log('Error attempting to post a log message: {e}');
                }
              })(
                (function (e, a, c, n) {
                  void 0 === n && (n = {});
                  var o = t(
                    {
                      timestamp: Date.now(),
                      logVersion: '1',
                      domain: window.location.host,
                      url: window.location.href,
                    },
                    n
                  );
                  return (
                    e +
                    '?' +
                    ('severity=' +
                      encodeURIComponent(a) +
                      '&message=' +
                      encodeURIComponent(c) +
                      '&payload=' +
                      encodeURIComponent(JSON.stringify(o)))
                  );
                })(n, e, a, c),
                i
              );
          };
        };
      }),
        (a.DEFAULT_LOGGER = a.createLogger({
          baseUrl: 'https://prod.log.shortbread.aws.dev/1x1.png',
        })),
        (a.default = a.createLogger);
    },
    function (e, a, c) {
      e.exports = c(14);
    },
    function (e, a, c) {
      'use strict';
      var t =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, a, c, t) {
                void 0 === t && (t = c),
                  Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function () {
                      return a[c];
                    },
                  });
              }
            : function (e, a, c, t) {
                void 0 === t && (t = c), (e[t] = a[c]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, a) {
            for (var c in e)
              'default' === c || a.hasOwnProperty(c) || t(a, e, c);
          };
      Object.defineProperty(a, '__esModule', { value: !0 });
      var o = c(15);
      Object.defineProperty(a, 'AWSCShortbread', {
        enumerable: !0,
        get: function () {
          return o.AWSCShortbread;
        },
      }),
        n(c(11), a),
        n(c(9), a);
    },
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.AWSCShortbread = a.CONSENT_COOKIE_CHANGED_EVENT = void 0);
      var n = c(5),
        o = c(9),
        i = c(4),
        r = c(7),
        s = c(8),
        l = c(11),
        u = c(10),
        d = c(12),
        p = {};
      function b(e) {
        Object.keys(p).forEach(function (a) {
          if (e[a]) {
            var c = p[a];
            c &&
              c.forEach(function (e) {
                e();
              });
          }
        }),
          r.COOKIE_CATEGORIES.filter(function (a) {
            return e[a];
          }).forEach(function (e) {
            p[e] = [];
          });
      }
      function f(e) {
        var c = document.createEvent('CustomEvent');
        c.initCustomEvent(a.CONSENT_COOKIE_CHANGED_EVENT, !1, !1, e),
          document.dispatchEvent(c);
      }
      a.CONSENT_COOKIE_CHANGED_EVENT = 'cookie-consent-changed';
      var h = function (e, a) {
        return function (c) {
          o.setConsentCookie(
            c,
            e.domain,
            i.DEFAULT_COOKIE_AGE,
            u.default,
            e.__storeWriter,
            a,
            e.__uuidGenerator,
            e.__uuidFallback
          ),
            f(c);
        };
      };
      function g(e, a, c) {
        if (!e)
          throw (
            (c('error')('checkNameIsInRegistry', {
              detail: 'AWSCC: No registry configured',
            }),
            Error('AWSCC: No registry configured'))
          );
        if (!e[a])
          throw (
            (c('error')('checkNameIsInRegistry', {
              detail: 'AWSCC: No such entry ' + a + ' is in the registry',
            }),
            Error('AWSCC: No such entry ' + a + ' is in the registry'))
          );
      }
      function m(e) {
        if (e && 'string' == typeof e) {
          var a = e.toLowerCase().replace(/[â€“_]/, '-');
          return s.localizationDictionary[a] ? a : i.DEFAULT_LANGUAGE;
        }
        return i.DEFAULT_LANGUAGE;
      }
      (a.AWSCShortbread = function (e) {
        void 0 === e && (e = {});
        var c = e,
          r =
            c.log ||
            d.createLogger({
              baseUrl: c.hasConsoleNavFooter
                ? d.DEFAULT_CONSOLE_INTEGRATION_LOGGER_PIXEL_URL
                : d.DEFAULT_LOGGER_PIXEL_URL,
            });
        void 0 !== c.domain &&
        'string' == typeof c.domain &&
        -1 !== c.domain.indexOf('aws.amazon.com')
          ? (c.domain = i.DEFAULT_DOMAIN)
          : null == c.domain &&
            -1 !== window.location.hostname.indexOf('aws-dev.amazon.com') &&
            (c.domain = i.DEFAULT_TANGERINEBOX_DEV_DOMAIN);
        var s = n.default.createShortbreadUi({
          parent: c.parent,
          language: m(c.language),
          onSaveConsent: h(c, r),
          getConsentCookie: function () {
            return o.getConsentCookie(c.__storeReader, r);
          },
          log: r,
          onModalClose: c.onModalClose,
          hasConsoleNavFooter: c.hasConsoleNavFooter || !1,
        });
        function k() {
          var e = o.getConsentCookie(c.__storeReader, r);
          return e ? (f(e), e) : e;
        }
        var v,
          w,
          x =
            ((v = c.onConsentChanged),
            (w = function (e) {
              var a = e.detail;
              b(a), v && v(a);
            }),
            document.addEventListener(a.CONSENT_COOKIE_CHANGED_EVENT, w),
            w);
        return {
          checkForCookieConsent: function () {
            var e = k();
            if (
              (r('info')(
                'checkForCookieConsent',
                e ? { cookie: e } : { status: 'Consent cookie not present' }
              ),
              !e)
            ) {
              var a = c.hasConsoleNavFooter
                ? l.DEFAULT_CONSOLE_INTEGRATION_GEOLOCATION_URL
                : l.DEFAULT_GEOLOCATION_URL;
              (c.queryGeolocation || l.default(c.hasConsoleNavFooter, a))(
                function (e) {
                  if (!k())
                    if ('EU' === e)
                      s.showBanner(function () {
                        r('info')('bannerShown', { region: e }),
                          c.onBannerShown && c.onBannerShown();
                      });
                    else {
                      f(
                        o.setConsentCookie(
                          t({}, i.ALL_ALLOWED),
                          c.domain,
                          86400,
                          u.default,
                          c.__storeWriter,
                          r,
                          c.__uuidGenerator,
                          c.__uuidFallback
                        )
                      );
                    }
                },
                r
              );
            }
          },
          customizeCookies: function () {
            s.showConsentSelector('manualTrigger');
          },
          getConsentCookie: function () {
            return o.getConsentCookie(c.__storeReader, r);
          },
          access: function (e, a) {
            g(c.registry, e, r);
            var t = c.registry[e].category;
            p[t] || (p[t] = []),
              p[t].push(function () {
                return a(e, c.registry[e]);
              });
            var n = o.getConsentCookie(c.__storeReader, r);
            n && b(n);
          },
          hasConsent: function (e) {
            return (
              g(c.registry, e, r),
              (o.getConsentCookie(c.__storeReader, r) ||
                t({}, i.DEFAULT_COOKIE))[c.registry[e].category]
            );
          },
          __close: function () {
            document.removeEventListener(a.CONSENT_COOKIE_CHANGED_EVENT, x);
          },
        };
      }),
        (a.default = a.AWSCShortbread);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0),
        n = c(6),
        o = c(3);
      c(19),
        (a.default = function (e) {
          var a = e.showConsentSelector,
            c = e.handleSaveClick,
            i = e.localizedText,
            r = e.hasConsoleNavFooter,
            s = {
              essential: !0,
              functional: !0,
              performance: !0,
              advertising: !0,
            },
            l =
              !0 === (void 0 !== r && r)
                ? 'awsccc-tab-helper awsc-bot-above-f-imp'
                : 'awsccc-tab-helper';
          return t.act(
            'div',
            { 'data-id': o.BANNER_ID, style: { display: 'none' } },
            t.act(
              'div',
              {
                id: 'awsccc-cb-c',
                'data-id': 'awsccc-cb-tabstart',
                class: l,
                tabindex: '-1',
              },
              t.act(
                'div',
                { id: 'awsccc-cb-content' },
                t.act('h2', { id: 'awsccc-cb-title' }, i.title),
                t.act(
                  'div',
                  { id: 'awsccc-cb-actions' },
                  t.act('p', { id: 'awsccc-cb-text' }, i.paragraph),
                  t.act(
                    'div',
                    { id: 'awsccc-cb-buttons' },
                    t.act(n.default, {
                      dataId: o.BANNER_CUSTOMIZE_BTN_ID,
                      variant: 'secondary',
                      text: i['button-customize'],
                      events: {
                        onclick: function () {
                          return a('consentBanner');
                        },
                      },
                      props: { 'aria-label': i['button-customize-aria-label'] },
                    }),
                    t.act(n.default, {
                      dataId: o.BANNER_ACCEPT_BTN_ID,
                      variant: 'primary',
                      text: i['button-accept'],
                      events: {
                        onclick: function () {
                          return c(s, 'consentBanner');
                        },
                      },
                      props: { 'aria-label': i['button-accept-aria-label'] },
                    })
                  )
                )
              )
            )
          );
        });
    },
    function (e, a, c) {
      var t = c(1),
        n = c(18);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn{flex:0 1 100%;padding:5px 20px;box-sizing:border-box;border:0;background-color:#eaeded;color:#000;font-weight:700;border-radius:2px;cursor:pointer;user-select:none;display:inline-block;text-align:center;font-size:14px;position:relative}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn:hover{background-color:#d5dbdb}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn:focus{outline:none;text-decoration:none}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn:focus::before{content:" ";display:block;position:absolute;left:-2px;top:-2px;width:calc(100% + 4px);height:calc(100% + 4px);border-radius:2px;box-shadow:0 0 0 2px #00a1c9}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn.awsccc-u-btn-primary{background-color:#ec7211}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn.awsccc-u-btn-primary span{color:#fff}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-btn.awsccc-u-btn-primary:hover{background-color:#eb5f07}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      var t = c(1),
        n = c(20);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c{position:fixed;bottom:0;left:0;width:100%;z-index:10000}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-content{position:relative;background:linear-gradient(180deg, rgba(21, 28, 39, 0.98) 0%, rgba(38, 51, 77, 0.98) 100%);box-shadow:0px -2px 5px 0px rgba(0,0,0,.5);padding:30px 30px 15px;border-top:solid 1px #306da3}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-title{font-weight:700;padding:0 0 5px;margin:0;color:#fff}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-actions{flex-shrink:1;display:flex;align-items:flex-start;flex-wrap:wrap}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-buttons{flex:1;display:flex;justify-content:center;flex-wrap:wrap}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-buttons .awsccc-u-btn{margin-bottom:15px;padding-left:40px;padding-right:40px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-text{flex:1 1 100%;margin:0 0 15px;color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.awsc-bot-above-f-imp{z-index:999}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.dark-mode-enabled #awsccc-cb-content{background:none;background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.dark-mode-enabled .awsccc-u-btn-secondary{background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.dark-mode-enabled .awsccc-u-btn-secondary span{color:#d5dbdb}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.dark-mode-enabled .awsccc-u-btn-secondary:hover{background-color:#21252c}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c.dark-mode-enabled .awsccc-u-btn-primary span{color:#16191f}@media screen and (min-width: 700px){#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-content{padding-bottom:40px;padding-left:50px;padding-right:50px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-buttons .awsccc-u-btn{flex:0 1 auto;margin:10px 5px 0}}@media screen and (min-width: 1020px){#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-content{padding-bottom:15px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-actions{flex-wrap:nowrap}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-text{flex:1;padding-right:40px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-buttons{flex-wrap:nowrap;flex:0 1 auto}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cb-c #awsccc-cb-buttons .awsccc-u-btn{flex:0 0 auto;margin-top:0}}@media screen and (min-width: 1020px){#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl #awsccc-cb-text{padding-left:40px;padding-right:0}}div[data-id=awsccc-cb]{display:none}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0),
        n = c(22),
        o = c(25),
        i = c(31),
        r = c(34),
        s = c(3);
      c(37),
        (a.default = function (e) {
          var a = e.handleSaveClick,
            c = e.handleCheckboxToggle,
            l = e.localizedText,
            u = e.closeConsentSelector,
            d = e.consentState,
            p = e.darkModeEnabled,
            b = void 0 !== p && p,
            f = function () {
              u();
            };
          return t.act(
            'div',
            {
              'data-id': s.CUSTOMIZE_ID,
              style: { display: 'none' },
              tabindex: '0',
              events: {
                onfocus: function () {
                  document
                    .querySelector(
                      'button[data-id=' + s.CUSTOMIZE_SAVE_BTN_ID + ']'
                    )
                    .focus({ preventScroll: !0 });
                },
              },
              class: !0 === b ? 'dark-mode-enabled' : '',
            },
            t.act(
              'div',
              {
                id: 'awsccc-cs-container',
                role: 'dialog',
                'aria-modal': 'true',
                'data-awsccc-modal-toggle': !0,
                events: {
                  onclick: function (e) {
                    e.target.hasAttribute('data-awsccc-modal-toggle') && f();
                  },
                },
                'data-id': s.TABTRAP_ID,
                tabindex: '-1',
              },
              t.act(
                'div',
                { id: 'awsccc-cs-container-inner' },
                t.act(
                  'div',
                  { id: 'awsccc-cs-content' },
                  t.act(
                    'div',
                    { id: 'awsccc-cs-header' },
                    t.act(
                      'div',
                      { id: 'awsccc-cs-title' },
                      t.act('h2', null, l.header)
                    )
                  ),
                  t.act(
                    'div',
                    { id: 'awsccc-cs-modalBody' },
                    t.act(n.default, { localizedText: l.intro }),
                    t.act(o.default, {
                      category: 'essential',
                      content: l['section-essential'],
                      isDisabled: !0,
                      isChecked: d.essential,
                      handleCheckboxToggle: c,
                      localizedLabelText: l['checkbox-label'],
                    }),
                    t.act(o.default, {
                      category: 'performance',
                      content: l['section-performance'],
                      isChecked: d.performance,
                      handleCheckboxToggle: c,
                      localizedLabelText: l['checkbox-label'],
                    }),
                    t.act(o.default, {
                      category: 'functional',
                      content: l['section-functional'],
                      isChecked: d.functional,
                      handleCheckboxToggle: c,
                      localizedLabelText: l['checkbox-label'],
                    }),
                    t.act(o.default, {
                      category: 'advertising',
                      content: l['section-advertising'],
                      isChecked: d.advertising,
                      handleCheckboxToggle: c,
                      localizedLabelText: l['checkbox-label'],
                    }),
                    t.act(i.default, { localizedText: l.footer })
                  ),
                  t.act(r.default, {
                    handleSaveClick: a,
                    handleCancelClick: f,
                    localizedText: l,
                  })
                )
              )
            ),
            t.act('div', { id: 'awsccc-cs-modalOverlay' }),
            t.act('div', {
              'data-id': s.TABTRAP_ID,
              tabindex: '-1',
              class: 'awsccc-tab-helper',
              events: {
                onfocus: function () {
                  document
                    .querySelector('div[data-id=' + s.TABTRAP_ID + ']')
                    .focus({ preventScroll: !0 });
                },
              },
            })
          );
        });
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0);
      c(23),
        (a.default = function (e) {
          var a = e.localizedText;
          return t.act(
            'div',
            { id: 'awsccc-cs-i-container' },
            t.act('span', null, a)
          );
        });
    },
    function (e, a, c) {
      var t = c(1),
        n = c(24);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-i-container{padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:10px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-i-container span,#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-i-container a{font-size:15px}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0),
        n = c(26);
      c(29),
        (a.default = function (e) {
          var a = e.category,
            c = e.content,
            o = e.isDisabled,
            i = e.handleCheckboxToggle,
            r = e.localizedLabelText,
            s = e.isChecked;
          return t.act(
            'div',
            { 'data-category': a, class: 'awsccc-cs-s-container' },
            o
              ? t.act('h3', { class: 'awsccc-cs-s-title' }, c.title)
              : t.act(
                  'h3',
                  {
                    class: 'awsccc-cs-s-title',
                    events: {
                      onclick: function (e) {
                        return i({ event: e, category: a });
                      },
                    },
                  },
                  c.title
                ),
            t.act(
              'div',
              { class: 'awsccc-cs-s-text' },
              t.act('p', { class: 'awsccc-cs-s-paragraph' }, c.paragraph)
            ),
            o
              ? t.act('div', { class: 'awsccc-cs-s-action' })
              : t.act(
                  'div',
                  { class: 'awsccc-cs-s-action' },
                  t.act(n.default, {
                    id: a,
                    events: {
                      onclick: function (e) {
                        return i({ event: e, category: a });
                      },
                    },
                    isChecked: s,
                    localizedDescription: c['checkbox-description'],
                    localizedLabelText: r,
                  })
                )
          );
        });
    },
    function (e, a, c) {
      'use strict';
      var t =
        (this && this.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var a, c = 1, t = arguments.length; c < t; c++)
                for (var n in (a = arguments[c]))
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(a, '__esModule', { value: !0 });
      var n = c(0);
      c(27),
        (a.default = function (e) {
          var a = e.id,
            c = e.events,
            o = e.isChecked,
            i = e.localizedLabelText,
            r = e.localizedDescription;
          return n.act(
            'div',
            null,
            n.act(
              'div',
              { class: 'awsccc-cs-s-cb-outer' },
              n.act(
                'div',
                {
                  class: 'awscc-u-cb-checkbox-container',
                  'data-id': 'awsccc-u-cb-' + a + '-container',
                },
                n.act(
                  'label',
                  {
                    'data-id': 'awsccc-u-cb-' + a + '-label',
                    class:
                      'awsccc-u-cb-label' +
                      (o ? ' awsccc-u-cb-checkbox-active' : ''),
                    events: c,
                  },
                  n.act(
                    'input',
                    t(
                      {
                        id: 'awsccc-u-cb-' + a,
                        class: 'awsccc-u-cb-input',
                        type: 'checkbox',
                        'aria-checked': '' + o,
                      },
                      (function (e) {
                        return e ? { checked: '' } : {};
                      })(o),
                      {
                        events: {
                          onfocus: function () {
                            document
                              .querySelector(
                                'div[data-id=awsccc-u-cb-' + a + '-container]'
                              )
                              .classList.add('awsccc-u-cb-focused');
                          },
                          onblur: function () {
                            document
                              .querySelector(
                                'div[data-id=awsccc-u-cb-' + a + '-container]'
                              )
                              .classList.remove('awsccc-u-cb-focused');
                          },
                        },
                      }
                    )
                  ),
                  n.act('span', { class: 'awsccc-cs-s-cb-hidden' }, r),
                  n.act(
                    'svg',
                    {
                      viewBox: '0 0 14 14',
                      'aria-hidden': 'true',
                      focusable: 'false',
                      class: 'awscc-u-cb-checkbox',
                    },
                    n.act('rect', {
                      class: 'awscc-u-cb-checkbox-rect',
                      x: '0.5',
                      y: '0.5',
                      rx: '1.5',
                      ry: '1.5',
                      width: '13',
                      height: '13',
                    }),
                    n.act('polyline', {
                      class: 'awscc-u-cb-checkbox-poly-line ',
                      points: '2.5,7 6,10 11,3',
                    })
                  )
                )
              )
            ),
            n.act('span', { class: 'awsccc-u-cb-text', events: c }, i)
          );
        });
    },
    function (e, a, c) {
      var t = c(1),
        n = c(28);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-cb-hidden{text-indent:-9999px;position:absolute}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-label{position:relative;display:inline-block;line-height:0}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-text{line-height:16px;vertical-align:top}#awsccc-sb-ux-c #awsccc-sb-a .awscc-u-cb-checkbox,#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-input{height:14px;width:14px;z-index:1;pointer-events:none;fill:none}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-cb-outer{margin-right:8px;height:14px;width:14px;display:inline-block}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-input{padding:0;margin:0;position:absolute;z-index:0;opacity:0}#awsccc-sb-ux-c #awsccc-sb-a .awscc-u-cb-checkbox-rect{background-color:#fff;fill:#fff;stroke:#aab7b8;stroke-width:1}#awsccc-sb-ux-c #awsccc-sb-a .awscc-u-cb-checkbox-poly-line{opacity:1;stroke:#fff;stroke-width:2;fill:none}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-checkbox-active .awscc-u-cb-checkbox-rect{fill:#0073bb;stroke:#0073bb}#awsccc-sb-ux-c #awsccc-sb-a .awscc-u-cb-checkbox-container{position:relative;line-height:0}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-cb-focused:before{content:" ";display:block;position:absolute;left:-2px;top:-2px;width:calc(100% + 4px);height:calc(100% + 4px);border-radius:2px;box-shadow:0 0 0 2px #00a1c9}#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl .awsccc-cs-s-cb-outer{margin-left:8px;margin-right:0}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      var t = c(1),
        n = c(30);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container{position:relative;margin-bottom:20px}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-title{font-size:18px;line-height:20px;flex:0 0 100%;margin:0 0 5px;z-index:10;display:inline-block;line-height:normal;font-weight:400}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-text{flex:0 0 80%;border-top:1px solid #eee;padding-top:5px}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-action{display:flex;justify-content:flex-end;flex:1;position:absolute;top:3px;right:20px}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-paragraph{margin-top:0;font-size:14px;line-height:20px;padding:0;margin-bottom:15px}@media screen and (min-width: 700px){#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container{border-bottom:1px solid #eee;display:flex;flex-wrap:wrap}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-title{padding-bottom:0}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-text{border-top:0}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-cs-s-container .awsccc-cs-s-action{justify-content:center;position:relative;top:auto;right:auto;padding-top:20px}}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0);
      c(32),
        (a.default = function (e) {
          var a = e.localizedText;
          return t.act(
            'div',
            { id: 'awsccc-cs-l-container' },
            t.act('p', null, a)
          );
        });
    },
    function (e, a, c) {
      var t = c(1),
        n = c(33);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-l-container span,#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-l-container a{font-size:12px;line-height:15px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-l-container span:focus,#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-l-container a:focus{outline-style:solid;outline-color:#00a1c9;outline-width:2px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-l-container p>span{color:#687078}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0),
        n = c(6),
        o = c(3);
      c(35);
      var i = c(5);
      a.default = function (e) {
        var a = e.handleSaveClick,
          c = e.handleCancelClick,
          r = e.localizedText;
        return t.act(
          'div',
          { id: 'awsccc-cs-f-c' },
          t.act(n.default, {
            dataId: o.CUSTOMIZE_CANCEL_BTN_ID,
            variant: 'secondary',
            events: { onclick: c },
            text: r['button-cancel'],
            props: { 'aria-label': r['button-cancel-aria-label'] },
          }),
          t.act(n.default, {
            dataId: o.CUSTOMIZE_SAVE_BTN_ID,
            variant: 'primary',
            events: {
              onclick: function () {
                a(
                  {
                    essential: !0,
                    performance: i.isChecked('performance'),
                    functional: i.isChecked('functional'),
                    advertising: i.isChecked('advertising'),
                  },
                  'preferencesModal'
                );
              },
            },
            text: r['button-save'],
            props: { 'aria-label': r['button-save-aria-label'] },
          })
        );
      };
    },
    function (e, a, c) {
      var t = c(1),
        n = c(36);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl #awsccc-cs-f-c{text-align:left}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c{text-decoration:none;padding:10px 20px;text-align:right;border-top:1px solid #eaeded;display:flex;justify-content:center;flex-wrap:wrap}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c .awsccc-u-btn{margin-left:10px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c .awsccc-u-btn.awsccc-u-btn-secondary{background-color:#fff;border-color:#fff;color:#545b64;margin-bottom:6px}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c .awsccc-u-btn.awsccc-u-btn-secondary:hover{color:#000;background-color:#fafafa}@media screen and (min-width: 700px){#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c{display:block}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-f-c .awsccc-u-btn.awsccc-u-btn-secondary{margin-bottom:0}}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      var t = c(1),
        n = c(38);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-container{display:flex;align-items:center;justify-items:center;bottom:0;left:0;right:0;top:0;position:fixed;z-index:10002;outline:0;overflow:hidden}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-container-inner{max-width:820px;box-sizing:border-box;outline:none;margin:10px auto;width:calc(100vw - 20px)}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-content{background-color:#fff;border-radius:0;box-sizing:border-box;margin-bottom:0;word-wrap:break-word;box-shadow:0 1px 1px 0 rgba(0,28,36,.3),1px 1px 1px 0 rgba(0,28,36,.15),-1px 1px 1px 0 rgba(0,28,36,.15)}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-header{background-color:#fafafa;padding:19px 20px;border-bottom:1px solid #eaeded}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-title{min-width:0;word-break:break-word;color:#16191f;flex:auto}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-title h2{font-size:18px;font-weight:700;margin:0}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-modalBody{overflow-y:auto;max-height:calc(100vh - 200px);padding:19px 20px}@media screen and (max-width: 480px){#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-modalBody{max-height:calc(100vh - 275px)}}#awsccc-sb-ux-c #awsccc-sb-a #awsccc-cs-modalOverlay{background-color:rgba(242,243,243,.9);position:fixed;z-index:10001;right:0;top:0;bottom:0;left:0}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled{background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalOverlay{background-color:rgba(22,25,31,.8)}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-header{background-color:#21252c;border-bottom:1px solid #414750}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-title h2{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody{background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody #awsccc-cs-i-container{border-bottom:1px solid #414750}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody #awsccc-cs-i-container span{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container{border-bottom:1px solid #414750}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container h3{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container p{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container span{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container rect{fill:#1a2029}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container .awsccc-cs-s-text{border-top:0}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container .awscc-u-cb-checkbox-poly-line{display:none}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container .awsccc-u-cb-checkbox-active .awscc-u-cb-checkbox-poly-line{display:inline-block}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-modalBody .awsccc-cs-s-container .awsccc-u-cb-checkbox-active .awscc-u-cb-checkbox-rect{fill:#00a1c9;stroke:#00a1c9}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-f-c{border-top:1px solid #414750;background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-f-c .awsccc-u-btn-secondary{background-color:#2a2e33}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-f-c .awsccc-u-btn-secondary span{color:#d5dbdb}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-f-c .awsccc-u-btn-secondary:hover{background-color:#21252c}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-f-c .awsccc-u-btn-primary span{color:#16191f}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-l-container span{color:#eaeded}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-l-container span a{display:inline-block}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-l-container span a span{color:#44b9d6}#awsccc-sb-ux-c #awsccc-sb-a .dark-mode-enabled #awsccc-cs-l-container path{color:#44b9d6}div[data-id=awsccc-cs]{display:none}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      var t = c(0);
      c(40),
        (a.default = function () {
          return t.act(
            'div',
            { class: 'awsccc-u-i-open-c' },
            t.act(
              'svg',
              {
                class: 'awsccc-u-i-open',
                viewBox: '0 0 16 16',
                focusable: 'false',
                'aria-hidden': 'true',
              },
              t.act('path', {
                class: 'awsccc-stroke-linecap-square',
                d: 'M10 2h4v4',
              }),
              t.act('path', { d: 'M6 10l8-8' }),
              t.act('path', {
                class: 'awsccc-stroke-linejoin-round',
                d: 'M14 9.048V14H2V2h5',
              })
            )
          );
        });
    },
    function (e, a, c) {
      var t = c(1),
        n = c(41);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-i-open-c{display:inline-block;vertical-align:middle;line-height:1em;padding-left:.3em}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-i-open-c svg{stroke-width:2px;pointer-events:none;fill:none;padding-bottom:1px;height:10px;width:10px}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-i-open-c svg .awsccc-stroke-linecap-square{stroke-linecap:square}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-i-open-c svg .awsccc-stroke-linejoin-round{stroke-linejoin:round}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-u-i-open-c svg path{stroke:currentColor}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      var t = c(1),
        n = c(43);
      'string' == typeof (n = n.__esModule ? n.default : n) &&
        (n = [[e.i, n, '']]);
      var o = { insert: 'head', singleton: !1 };
      t(n, o);
      e.exports = n.locals || {};
    },
    function (e, a, c) {
      (a = c(2)(!1)).push([
        e.i,
        '#awsccc-sb-ux-c #awsccc-sb-a *{font-family:"Amazon Ember","HelveticaNeue","Helvetica Neue","Amazon Ember",Roboto,"Roboto-Regular","Amazon Ember",Helvetica,Arial,sans-serif;font-size:14px;line-height:21px;color:#16191f;text-align:left;background:none;border:0}#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl *{direction:rtl;text-align:right}#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl .awsccc-cs-s-container .awsccc-cs-s-action{right:auto;left:20px}@media screen and (min-width: 1020px){#awsccc-sb-ux-c #awsccc-sb-a.awsccc-Rtl #awsccc-cb-c #awsccc-cb-title{padding-right:40px}}#awsccc-sb-ux-c #awsccc-sb-a a,#awsccc-sb-ux-c #awsccc-sb-a a>span,#awsccc-sb-ux-c #awsccc-sb-a a svg path{color:#0073bb;text-decoration:none}#awsccc-sb-ux-c #awsccc-sb-a a:hover,#awsccc-sb-ux-c #awsccc-sb-a a>span:hover,#awsccc-sb-ux-c #awsccc-sb-a a svg path:hover{color:#0073bb;text-decoration:underline}#awsccc-sb-ux-c #awsccc-sb-a .awsccc-tab-helper{outline:0;text-decoration:none}.awsccc-cs-modal-open{overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}',
        '',
      ]),
        (e.exports = a);
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.convertToArray = a.update = void 0),
        (a.update = function (e, a) {
          return (
            Object.keys(a).forEach(function (c) {
              e[c] = a[c];
            }),
            e
          );
        }),
        (a.convertToArray = function (e) {
          return Array.prototype.slice.call(e);
        });
    },
    function (e, a, c) {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 });
      a.default = function (e, a, c) {
        function t() {
          a.removeEventListener('DOMContentLoaded', t),
            c.removeEventListener('load', t),
            e();
        }
        void 0 === a && (a = document),
          void 0 === c && (c = window),
          'loading' !== a.readyState
            ? c.setTimeout(e)
            : (a.addEventListener('DOMContentLoaded', t),
              c.addEventListener('load', t));
      };
    },
    function (e, a, c) {
      'use strict';
      c.r(a),
        c.d(a, 'v1', function () {
          return b;
        }),
        c.d(a, 'v3', function () {
          return y;
        }),
        c.d(a, 'v4', function () {
          return C;
        }),
        c.d(a, 'v5', function () {
          return E;
        });
      var t =
          ('undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ('undefined' != typeof msCrypto &&
            'function' == typeof msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto)),
        n = new Uint8Array(16);
      function o() {
        if (!t)
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return t(n);
      }
      for (var i = [], r = 0; r < 256; ++r)
        i.push((r + 256).toString(16).substr(1));
      var s,
        l,
        u = function (e, a) {
          var c = a || 0,
            t = i;
          return (
            t[e[c + 0]] +
            t[e[c + 1]] +
            t[e[c + 2]] +
            t[e[c + 3]] +
            '-' +
            t[e[c + 4]] +
            t[e[c + 5]] +
            '-' +
            t[e[c + 6]] +
            t[e[c + 7]] +
            '-' +
            t[e[c + 8]] +
            t[e[c + 9]] +
            '-' +
            t[e[c + 10]] +
            t[e[c + 11]] +
            t[e[c + 12]] +
            t[e[c + 13]] +
            t[e[c + 14]] +
            t[e[c + 15]]
          ).toLowerCase();
        },
        d = 0,
        p = 0;
      var b = function (e, a, c) {
        var t = (a && c) || 0,
          n = a || [],
          i = (e = e || {}).node || s,
          r = void 0 !== e.clockseq ? e.clockseq : l;
        if (null == i || null == r) {
          var b = e.random || (e.rng || o)();
          null == i && (i = s = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]),
            null == r && (r = l = 16383 & ((b[6] << 8) | b[7]));
        }
        var f = void 0 !== e.msecs ? e.msecs : Date.now(),
          h = void 0 !== e.nsecs ? e.nsecs : p + 1,
          g = f - d + (h - p) / 1e4;
        if (
          (g < 0 && void 0 === e.clockseq && (r = (r + 1) & 16383),
          (g < 0 || f > d) && void 0 === e.nsecs && (h = 0),
          h >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (d = f), (p = h), (l = r);
        var m = (1e4 * (268435455 & (f += 122192928e5)) + h) % 4294967296;
        (n[t++] = (m >>> 24) & 255),
          (n[t++] = (m >>> 16) & 255),
          (n[t++] = (m >>> 8) & 255),
          (n[t++] = 255 & m);
        var k = ((f / 4294967296) * 1e4) & 268435455;
        (n[t++] = (k >>> 8) & 255),
          (n[t++] = 255 & k),
          (n[t++] = ((k >>> 24) & 15) | 16),
          (n[t++] = (k >>> 16) & 255),
          (n[t++] = (r >>> 8) | 128),
          (n[t++] = 255 & r);
        for (var v = 0; v < 6; ++v) n[t + v] = i[v];
        return a || u(n);
      };
      var f = function (e, a, c) {
        function t(e, t, n, o) {
          var i = (n && o) || 0;
          if (
            ('string' == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var a = [], c = 0; c < e.length; ++c)
                  a.push(e.charCodeAt(c));
                return a;
              })(e)),
            'string' == typeof t &&
              (t = (function (e) {
                var a = [];
                return (
                  e.replace(/[a-fA-F0-9]{2}/g, function (e) {
                    a.push(parseInt(e, 16));
                  }),
                  a
                );
              })(t)),
            !Array.isArray(e))
          )
            throw TypeError('value must be an array of bytes');
          if (!Array.isArray(t) || 16 !== t.length)
            throw TypeError(
              'namespace must be uuid string or an Array of 16 byte values'
            );
          var r = c(t.concat(e));
          if (((r[6] = (15 & r[6]) | a), (r[8] = (63 & r[8]) | 128), n))
            for (var s = 0; s < 16; ++s) n[i + s] = r[s];
          return n || u(r);
        }
        try {
          t.name = e;
        } catch (e) {}
        return (
          (t.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'),
          (t.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'),
          t
        );
      };
      function h(e) {
        return 14 + (((e + 64) >>> 9) << 4) + 1;
      }
      function g(e, a) {
        var c = (65535 & e) + (65535 & a);
        return (((e >> 16) + (a >> 16) + (c >> 16)) << 16) | (65535 & c);
      }
      function m(e, a, c, t, n, o) {
        return g(((i = g(g(a, e), g(t, o))) << (r = n)) | (i >>> (32 - r)), c);
        var i, r;
      }
      function k(e, a, c, t, n, o, i) {
        return m((a & c) | (~a & t), e, a, n, o, i);
      }
      function v(e, a, c, t, n, o, i) {
        return m((a & t) | (c & ~t), e, a, n, o, i);
      }
      function w(e, a, c, t, n, o, i) {
        return m(a ^ c ^ t, e, a, n, o, i);
      }
      function x(e, a, c, t, n, o, i) {
        return m(c ^ (a | ~t), e, a, n, o, i);
      }
      var y = f('v3', 48, function (e) {
        if ('string' == typeof e) {
          var a = unescape(encodeURIComponent(e));
          e = new Uint8Array(a.length);
          for (var c = 0; c < a.length; ++c) e[c] = a.charCodeAt(c);
        }
        return (function (e) {
          for (var a = [], c = 32 * e.length, t = 0; t < c; t += 8) {
            var n = (e[t >> 5] >>> t % 32) & 255,
              o = parseInt(
                '0123456789abcdef'.charAt((n >>> 4) & 15) +
                  '0123456789abcdef'.charAt(15 & n),
                16
              );
            a.push(o);
          }
          return a;
        })(
          (function (e, a) {
            (e[a >> 5] |= 128 << a % 32), (e[h(a) - 1] = a);
            for (
              var c = 1732584193,
                t = -271733879,
                n = -1732584194,
                o = 271733878,
                i = 0;
              i < e.length;
              i += 16
            ) {
              var r = c,
                s = t,
                l = n,
                u = o;
              (c = k(c, t, n, o, e[i], 7, -680876936)),
                (o = k(o, c, t, n, e[i + 1], 12, -389564586)),
                (n = k(n, o, c, t, e[i + 2], 17, 606105819)),
                (t = k(t, n, o, c, e[i + 3], 22, -1044525330)),
                (c = k(c, t, n, o, e[i + 4], 7, -176418897)),
                (o = k(o, c, t, n, e[i + 5], 12, 1200080426)),
                (n = k(n, o, c, t, e[i + 6], 17, -1473231341)),
                (t = k(t, n, o, c, e[i + 7], 22, -45705983)),
                (c = k(c, t, n, o, e[i + 8], 7, 1770035416)),
                (o = k(o, c, t, n, e[i + 9], 12, -1958414417)),
                (n = k(n, o, c, t, e[i + 10], 17, -42063)),
                (t = k(t, n, o, c, e[i + 11], 22, -1990404162)),
                (c = k(c, t, n, o, e[i + 12], 7, 1804603682)),
                (o = k(o, c, t, n, e[i + 13], 12, -40341101)),
                (n = k(n, o, c, t, e[i + 14], 17, -1502002290)),
                (t = k(t, n, o, c, e[i + 15], 22, 1236535329)),
                (c = v(c, t, n, o, e[i + 1], 5, -165796510)),
                (o = v(o, c, t, n, e[i + 6], 9, -1069501632)),
                (n = v(n, o, c, t, e[i + 11], 14, 643717713)),
                (t = v(t, n, o, c, e[i], 20, -373897302)),
                (c = v(c, t, n, o, e[i + 5], 5, -701558691)),
                (o = v(o, c, t, n, e[i + 10], 9, 38016083)),
                (n = v(n, o, c, t, e[i + 15], 14, -660478335)),
                (t = v(t, n, o, c, e[i + 4], 20, -405537848)),
                (c = v(c, t, n, o, e[i + 9], 5, 568446438)),
                (o = v(o, c, t, n, e[i + 14], 9, -1019803690)),
                (n = v(n, o, c, t, e[i + 3], 14, -187363961)),
                (t = v(t, n, o, c, e[i + 8], 20, 1163531501)),
                (c = v(c, t, n, o, e[i + 13], 5, -1444681467)),
                (o = v(o, c, t, n, e[i + 2], 9, -51403784)),
                (n = v(n, o, c, t, e[i + 7], 14, 1735328473)),
                (t = v(t, n, o, c, e[i + 12], 20, -1926607734)),
                (c = w(c, t, n, o, e[i + 5], 4, -378558)),
                (o = w(o, c, t, n, e[i + 8], 11, -2022574463)),
                (n = w(n, o, c, t, e[i + 11], 16, 1839030562)),
                (t = w(t, n, o, c, e[i + 14], 23, -35309556)),
                (c = w(c, t, n, o, e[i + 1], 4, -1530992060)),
                (o = w(o, c, t, n, e[i + 4], 11, 1272893353)),
                (n = w(n, o, c, t, e[i + 7], 16, -155497632)),
                (t = w(t, n, o, c, e[i + 10], 23, -1094730640)),
                (c = w(c, t, n, o, e[i + 13], 4, 681279174)),
                (o = w(o, c, t, n, e[i], 11, -358537222)),
                (n = w(n, o, c, t, e[i + 3], 16, -722521979)),
                (t = w(t, n, o, c, e[i + 6], 23, 76029189)),
                (c = w(c, t, n, o, e[i + 9], 4, -640364487)),
                (o = w(o, c, t, n, e[i + 12], 11, -421815835)),
                (n = w(n, o, c, t, e[i + 15], 16, 530742520)),
                (t = w(t, n, o, c, e[i + 2], 23, -995338651)),
                (c = x(c, t, n, o, e[i], 6, -198630844)),
                (o = x(o, c, t, n, e[i + 7], 10, 1126891415)),
                (n = x(n, o, c, t, e[i + 14], 15, -1416354905)),
                (t = x(t, n, o, c, e[i + 5], 21, -57434055)),
                (c = x(c, t, n, o, e[i + 12], 6, 1700485571)),
                (o = x(o, c, t, n, e[i + 3], 10, -1894986606)),
                (n = x(n, o, c, t, e[i + 10], 15, -1051523)),
                (t = x(t, n, o, c, e[i + 1], 21, -2054922799)),
                (c = x(c, t, n, o, e[i + 8], 6, 1873313359)),
                (o = x(o, c, t, n, e[i + 15], 10, -30611744)),
                (n = x(n, o, c, t, e[i + 6], 15, -1560198380)),
                (t = x(t, n, o, c, e[i + 13], 21, 1309151649)),
                (c = x(c, t, n, o, e[i + 4], 6, -145523070)),
                (o = x(o, c, t, n, e[i + 11], 10, -1120210379)),
                (n = x(n, o, c, t, e[i + 2], 15, 718787259)),
                (t = x(t, n, o, c, e[i + 9], 21, -343485551)),
                (c = g(c, r)),
                (t = g(t, s)),
                (n = g(n, l)),
                (o = g(o, u));
            }
            return [c, t, n, o];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (
                var a = 8 * e.length, c = new Uint32Array(h(a)), t = 0;
                t < a;
                t += 8
              )
                c[t >> 5] |= (255 & e[t / 8]) << t % 32;
              return c;
            })(e),
            8 * e.length
          )
        );
      });
      var C = function (e, a, c) {
        'string' == typeof e &&
          ((a = 'binary' === e ? new Uint8Array(16) : null), (e = null));
        var t = (e = e || {}).random || (e.rng || o)();
        if (((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), a)) {
          for (var n = c || 0, i = 0; i < 16; ++i) a[n + i] = t[i];
          return a;
        }
        return u(t);
      };
      function z(e, a, c, t) {
        switch (e) {
          case 0:
            return (a & c) ^ (~a & t);
          case 1:
            return a ^ c ^ t;
          case 2:
            return (a & c) ^ (a & t) ^ (c & t);
          case 3:
            return a ^ c ^ t;
        }
      }
      function _(e, a) {
        return (e << a) | (e >>> (32 - a));
      }
      var E = f('v5', 80, function (e) {
        var a = [1518500249, 1859775393, 2400959708, 3395469782],
          c = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ('string' == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = [];
          for (var n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
        }
        e.push(128);
        for (
          var o = e.length / 4 + 2,
            i = Math.ceil(o / 16),
            r = new Array(i),
            s = 0;
          s < i;
          ++s
        ) {
          for (var l = new Uint32Array(16), u = 0; u < 16; ++u)
            l[u] =
              (e[64 * s + 4 * u] << 24) |
              (e[64 * s + 4 * u + 1] << 16) |
              (e[64 * s + 4 * u + 2] << 8) |
              e[64 * s + 4 * u + 3];
          r[s] = l;
        }
        (r[i - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
          (r[i - 1][14] = Math.floor(r[i - 1][14])),
          (r[i - 1][15] = (8 * (e.length - 1)) & 4294967295);
        for (var d = 0; d < i; ++d) {
          for (var p = new Uint32Array(80), b = 0; b < 16; ++b) p[b] = r[d][b];
          for (var f = 16; f < 80; ++f)
            p[f] = _(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
          for (
            var h = c[0], g = c[1], m = c[2], k = c[3], v = c[4], w = 0;
            w < 80;
            ++w
          ) {
            var x = Math.floor(w / 20),
              y = (_(h, 5) + z(x, g, m, k) + v + a[x] + p[w]) >>> 0;
            (v = k), (k = m), (m = _(g, 30) >>> 0), (g = h), (h = y);
          }
          (c[0] = (c[0] + h) >>> 0),
            (c[1] = (c[1] + g) >>> 0),
            (c[2] = (c[2] + m) >>> 0),
            (c[3] = (c[3] + k) >>> 0),
            (c[4] = (c[4] + v) >>> 0);
        }
        return [
          (c[0] >> 24) & 255,
          (c[0] >> 16) & 255,
          (c[0] >> 8) & 255,
          255 & c[0],
          (c[1] >> 24) & 255,
          (c[1] >> 16) & 255,
          (c[1] >> 8) & 255,
          255 & c[1],
          (c[2] >> 24) & 255,
          (c[2] >> 16) & 255,
          (c[2] >> 8) & 255,
          255 & c[2],
          (c[3] >> 24) & 255,
          (c[3] >> 16) & 255,
          (c[3] >> 8) & 255,
          255 & c[3],
          (c[4] >> 24) & 255,
          (c[4] >> 16) & 255,
          (c[4] >> 8) & 255,
          255 & c[4],
        ];
      });
    },
  ]);
});
//# sourceMappingURL=index.js.map

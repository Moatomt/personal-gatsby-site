;(self.webpackChunkpersonal_gatsby_site =
  self.webpackChunkpersonal_gatsby_site || []).push([
  [143],
  {
    506: function(t) {
      ;(t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    552: function(t, e, n) {
      'use strict'
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function o(t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e)
      }
      n.d(e, {
        Z: function() {
          return o
        },
      })
    },
    154: function(t) {
      function e() {
        return (
          (t.exports = e =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e.apply(this, arguments)
        )
      }
      ;(t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    354: function(t, e, n) {
      var r = n(489)
      ;(t.exports = function(t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          r(t, e)
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    318: function(t) {
      ;(t.exports = function(t) {
        return t && t.__esModule ? t : { default: t }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    316: function(t) {
      ;(t.exports = function(t, e) {
        if (null == t) return {}
        var n,
          r,
          o = {},
          a = Object.keys(t)
        for (r = 0; r < a.length; r++)
          (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n])
        return o
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    489: function(t) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e(n, r)
        )
      }
      ;(t.exports = e),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0)
    },
    393: function(t, e) {
      'use strict'
      var n =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        r = function(t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            s = e.protocol,
            u = e.host,
            c = e.hostname,
            l = e.port,
            p = t.location.pathname
          !p && o && i && (p = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: u,
            hostname: c,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial',
          }
        },
        o = function(t, e) {
          var o = [],
            a = r(t),
            i = !1,
            s = function() {}
          return {
            get location() {
              return a
            },
            get transitioning() {
              return i
            },
            _onTransitionComplete: function() {
              ;(i = !1), s()
            },
            listen: function(e) {
              o.push(e)
              var n = function() {
                ;(a = r(t)), e({ location: a, action: 'POP' })
              }
              return (
                t.addEventListener('popstate', n),
                function() {
                  t.removeEventListener('popstate', n),
                    (o = o.filter(function(t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function(e) {
              var u =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = u.state,
                l = u.replace,
                p = void 0 !== l && l
              if ('number' == typeof e) t.history.go(e)
              else {
                c = n({}, c, { key: Date.now() + '' })
                try {
                  i || p
                    ? t.history.replaceState(c, null, e)
                    : t.history.pushState(c, null, e)
                } catch (h) {
                  t.location[p ? 'replace' : 'assign'](e)
                }
              }
              ;(a = r(t)), (i = !0)
              var f = new Promise(function(t) {
                return (s = t)
              })
              return (
                o.forEach(function(t) {
                  return t({ location: a, action: 'PUSH' })
                }),
                f
              )
            },
          }
        },
        a = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '/',
            e = t.indexOf('?'),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : '',
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function(t, e) {},
            removeEventListener: function(t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function(t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                r++,
                  o.push({ pathname: s, search: c.length ? '?' + c : c }),
                  a.push(t)
              },
              replaceState: function(t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = t)
              },
              go: function(t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              },
            },
          }
        },
        i = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = o(i ? window : a()),
        u = s.navigate
      e.V5 = s
    },
    98: function(t, e, n) {
      'use strict'
      ;(e.__esModule = !0),
        (e.shallowCompare = e.validateRedirect = e.insertParams = e.resolve = e.match = e.pick = e.startsWith = void 0)
      var r,
        o = n(143),
        a = (r = o) && r.__esModule ? r : { default: r }
      var i = function(t, e) {
          return t.substr(0, e.length) === e
        },
        s = function(t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = h(o),
              s = '' === i[0],
              c = f(t),
              p = 0,
              d = c.length;
            p < d;
            p++
          ) {
            var m = !1,
              g = c[p].route
            if (g.default) r = { route: g, params: {}, uri: e }
            else {
              for (
                var y = h(g.path),
                  w = {},
                  b = Math.max(i.length, y.length),
                  P = 0;
                P < b;
                P++
              ) {
                var _ = y[P],
                  R = i[P]
                if (l(_)) {
                  w[_.slice(1) || '*'] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join('/')
                  break
                }
                if (void 0 === R) {
                  m = !0
                  break
                }
                var E = u.exec(_)
                if (E && !s) {
                  ;-1 === v.indexOf(E[1]) || (0, a.default)(!1)
                  var C = decodeURIComponent(R)
                  w[E[1]] = C
                } else if (_ !== R) {
                  m = !0
                  break
                }
              }
              if (!m) {
                n = { route: g, params: w, uri: '/' + i.slice(0, P).join('/') }
                break
              }
            }
          }
          return n || r || null
        },
        u = /^:(.+)/,
        c = function(t) {
          return u.test(t)
        },
        l = function(t) {
          return t && '*' === t[0]
        },
        p = function(t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : h(t.path).reduce(function(t, e) {
                  return (
                    (t += 4),
                    !(function(t) {
                      return '' === t
                    })(e)
                      ? c(e)
                        ? (t += 2)
                        : l(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e,
          }
        },
        f = function(t) {
          return t.map(p).sort(function(t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        h = function(t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/')
        },
        d = function(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function(t) {
              return t && t.length > 0
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          )
        },
        v = ['uri', 'path']
      ;(e.startsWith = i),
        (e.pick = s),
        (e.match = function(t, e) {
          return s([{ path: t }], e)
        }),
        (e.resolve = function(t, e) {
          if (i(t, '/')) return t
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            s = h(r),
            u = h(a)
          if ('' === s[0]) return d(a, o)
          if (!i(s[0], '.')) {
            var c = u.concat(s).join('/')
            return d(('/' === a ? '' : '/') + c, o)
          }
          for (var l = u.concat(s), p = [], f = 0, v = l.length; f < v; f++) {
            var m = l[f]
            '..' === m ? p.pop() : '.' !== m && p.push(m)
          }
          return d('/' + p.join('/'), o)
        }),
        (e.insertParams = function(t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              h(r)
                .map(function(t) {
                  var n = u.exec(t)
                  return n ? e[n[1]] : t
                })
                .join('/'),
            s = e.location,
            c = (s = void 0 === s ? {} : s).search,
            l = (void 0 === c ? '' : c).split('?')[1] || ''
          return (i = d(i, a, l))
        }),
        (e.validateRedirect = function(t, e) {
          var n = function(t) {
            return c(t)
          }
          return (
            h(t)
              .filter(n)
              .sort()
              .join('/') ===
            h(e)
              .filter(n)
              .sort()
              .join('/')
          )
        }),
        (e.shallowCompare = function(t, e) {
          var n = Object.keys(t)
          return (
            n.length === Object.keys(e).length &&
            n.every(function(n) {
              return e.hasOwnProperty(n) && t[n] === e[n]
            })
          )
        })
    },
    494: function(t) {
      'use strict'
      t.exports = Object.assign
    },
    37: function(t, e, n) {
      'use strict'
      var r = n(318)
      e.ZP = void 0
      var o = r(n(316)),
        a = r(n(506)),
        i = r(n(354)),
        s = r(n(154)),
        u = r(n(697)),
        c = r(n(294)),
        l = n(499),
        p = n(98),
        f = n(752)
      e.cP = f.parsePath
      var h = [
          'to',
          'getProps',
          'onClick',
          'onMouseEnter',
          'activeClassName',
          'activeStyle',
          'innerRef',
          'partiallyActive',
          'state',
          'replace',
          '_location',
        ],
        d = function(t) {
          return null == t ? void 0 : t.startsWith('/')
        }
      function v(t, e) {
        var n, r
        if ((void 0 === e && (e = g()), !y(t))) return t
        if (t.startsWith('./') || t.startsWith('../')) return t
        var o =
          null !== (n = null !== (r = e) && void 0 !== r ? r : m()) &&
          void 0 !== n
            ? n
            : '/'
        return (
          '' +
          (null != o && o.endsWith('/') ? o.slice(0, -1) : o) +
          (t.startsWith('/') ? t : '/' + t)
        )
      }
      var m = function() {
          return '/personal-gatsby-site'
        },
        g = function() {
          return '/personal-gatsby-site'
        },
        y = function(t) {
          return (
            t &&
            !t.startsWith('http://') &&
            !t.startsWith('https://') &&
            !t.startsWith('//')
          )
        }
      var w = function(t, e) {
          return 'number' == typeof t
            ? t
            : y(t)
            ? d(t)
              ? v(t)
              : (function(t, e) {
                  return d(t) ? t : (0, p.resolve)(t, e)
                })(t, e)
            : t
        },
        b = {
          activeClassName: u.default.string,
          activeStyle: u.default.object,
          partiallyActive: u.default.bool,
        }
      function P(t) {
        return c.default.createElement(l.Location, null, function(e) {
          var n = e.location
          return c.default.createElement(
            _,
            (0, s.default)({}, t, { _location: n })
          )
        })
      }
      var _ = (function(t) {
        function e(e) {
          var n
          ;(n = t.call(this, e) || this).defaultGetProps = function(t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent
            return (n.props.partiallyActive
            ? e
            : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(' '),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle),
                }
              : null
          }
          var r = !1
          return (
            'undefined' != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          )
        }
        ;(0, i.default)(e, t)
        var n = e.prototype
        return (
          (n._prefetch = function() {
            var t = window.location.pathname
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname)
            var e = w(this.props.to, t),
              n = (0, f.parsePath)(e).pathname
            t !== n && ___loader.enqueue(n)
          }),
          (n.componentDidUpdate = function(t, e) {
            this.props.to === t.to || this.state.IOSupported || this._prefetch()
          }),
          (n.componentDidMount = function() {
            this.state.IOSupported || this._prefetch()
          }),
          (n.componentWillUnmount = function() {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el
              e.unobserve(n), e.disconnect()
            }
          }),
          (n.handleRef = function(t) {
            var e,
              n,
              r,
              o = this
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function() {
                    o._prefetch()
                  }),
                  (r = new window.IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n())
                    })
                  })).observe(e),
                  { instance: r, el: e }))
          }),
          (n.render = function() {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              u = e.onMouseEnter,
              p =
                (e.activeClassName,
                e.activeStyle,
                e.innerRef,
                e.partiallyActive,
                e.state),
              d = e.replace,
              v = e._location,
              m = (0, o.default)(e, h)
            var g = w(n, v.pathname)
            return y(g)
              ? c.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: g,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function(t) {
                        u && u(t),
                          ___loader.hovering((0, f.parsePath)(g).pathname)
                      },
                      onClick: function(e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault()
                          var n = d,
                            r = encodeURI(g) === v.pathname
                          'boolean' != typeof d && r && (n = !0),
                            window.___navigate(g, { state: p, replace: n })
                        }
                        return !0
                      },
                    },
                    m
                  )
                )
              : c.default.createElement('a', (0, s.default)({ href: g }, m))
          }),
          e
        )
      })(c.default.Component)
      _.propTypes = (0, s.default)({}, b, {
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
        state: u.default.object,
      })
      var R = c.default.forwardRef(function(t, e) {
        return c.default.createElement(P, (0, s.default)({ innerRef: e }, t))
      })
      e.ZP = R
    },
    752: function(t, e) {
      'use strict'
      ;(e.__esModule = !0),
        (e.parsePath = function(t) {
          var e = t || '/',
            n = '',
            r = '',
            o = e.indexOf('#')
          ;-1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)))
          var a = e.indexOf('?')
          ;-1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)))
          return {
            pathname: e,
            search: '?' === n ? '' : n,
            hash: '#' === r ? '' : r,
          }
        })
    },
    679: function(t, e, n) {
      'use strict'
      e.$C = void 0
      var r = n(432)
      ;(e.$C = r.ScrollHandler), n(855).useScrollRestoration
    },
    432: function(t, e, n) {
      'use strict'
      var r = n(318)
      ;(e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0)
      var o = r(n(506)),
        a = r(n(354)),
        i = (function(t, e) {
          if (!e && t && t.__esModule) return t
          if (null === t || ('object' != typeof t && 'function' != typeof t))
            return { default: t }
          var n = c(e)
          if (n && n.has(t)) return n.get(t)
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in t)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(t, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(t, a) : null
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = t[a])
            }
          ;(r.default = t), n && n.set(t, r)
          return r
        })(n(294)),
        s = r(n(697)),
        u = n(142)
      function c(t) {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap(),
          n = new WeakMap()
        return (c = function(t) {
          return t ? n : e
        })(t)
      }
      var l = i.createContext(new u.SessionStorage())
      ;(e.ScrollContext = l), (l.displayName = 'GatsbyScrollContext')
      var p = (function(t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a]
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) ||
              this)._stateStorage = new u.SessionStorage()),
            (e._isTicking = !1),
            (e._latestKnownScrollY = 0),
            (e.scrollListener = function() {
              ;(e._latestKnownScrollY = window.scrollY),
                e._isTicking ||
                  ((e._isTicking = !0),
                  requestAnimationFrame(e._saveScroll.bind((0, o.default)(e))))
            }),
            (e.windowScroll = function(t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t)
            }),
            (e.scrollToHash = function(t, n) {
              var r = document.getElementById(t.substring(1))
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView()
            }),
            (e.shouldUpdateScroll = function(t, n) {
              var r = e.props.shouldUpdateScroll
              return !r || r.call((0, o.default)(e), t, n)
            }),
            e
          )
        }
        ;(0, a.default)(e, t)
        var n = e.prototype
        return (
          (n._saveScroll = function() {
            var t = this.props.location.key || null
            t &&
              this._stateStorage.save(
                this.props.location,
                t,
                this._latestKnownScrollY
              ),
              (this._isTicking = !1)
          }),
          (n.componentDidMount = function() {
            var t
            window.addEventListener('scroll', this.scrollListener)
            var e = this.props.location,
              n = e.key,
              r = e.hash
            n && (t = this._stateStorage.read(this.props.location, n)),
              t
                ? this.windowScroll(t, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0)
          }),
          (n.componentWillUnmount = function() {
            window.removeEventListener('scroll', this.scrollListener)
          }),
          (n.componentDidUpdate = function(t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t)
          }),
          (n.render = function() {
            return i.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            )
          }),
          e
        )
      })(i.Component)
      ;(e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        })
    },
    142: function(t, e) {
      'use strict'
      ;(e.__esModule = !0), (e.SessionStorage = void 0)
      var n = '___GATSBY_REACT_ROUTER_SCROLL',
        r = (function() {
          function t() {}
          var e = t.prototype
          return (
            (e.read = function(t, e) {
              var r = this.getStateKey(t, e)
              try {
                var o = window.sessionStorage.getItem(r)
                return o ? JSON.parse(o) : 0
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0
              }
            }),
            (e.save = function(t, e, r) {
              var o = this.getStateKey(t, e),
                a = JSON.stringify(r)
              try {
                window.sessionStorage.setItem(o, a)
              } catch (i) {
                ;(window && window[n]) || (window[n] = {}),
                  (window[n][o] = JSON.parse(a))
              }
            }),
            (e.getStateKey = function(t, e) {
              var n = '@@scroll|' + t.pathname
              return null == e ? n : n + '|' + e
            }),
            t
          )
        })()
      e.SessionStorage = r
    },
    855: function(t, e, n) {
      'use strict'
      ;(e.__esModule = !0),
        (e.useScrollRestoration = function(t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null)
          return (
            (0, o.useLayoutEffect)(
              function() {
                if (i.current) {
                  var r = n.read(e, t)
                  i.current.scrollTo(0, r || 0)
                }
              },
              [e.key]
            ),
            {
              ref: i,
              onScroll: function() {
                i.current && n.save(e, t, i.current.scrollTop)
              },
            }
          )
        })
      var r = n(432),
        o = n(294),
        a = n(499)
    },
    999: function(t, e, n) {
      e.components = {
        'component---src-pages-404-js': function() {
          return n.e(883).then(n.bind(n, 616))
        },
        'component---src-pages-index-js': function() {
          return n.e(678).then(n.bind(n, 704))
        },
      }
    },
    182: function(t) {
      t.exports = []
    },
    343: function(t, e, n) {
      var r = n(182),
        o = n(281).jN,
        a = o.getResourceURLsForPathname,
        i = o.loadPage,
        s = o.loadPageSync
      ;(e.h = function(t, e, n, o) {
        void 0 === e && (e = {})
        var u = r.map(function(n) {
          if (n.plugin[t]) {
            ;(e.getResourceURLsForPathname = a),
              (e.loadPage = i),
              (e.loadPageSync = s)
            var r = n.plugin[t](e, n.options)
            return r && o && (e = o({ args: e, result: r, plugin: n })), r
          }
        })
        return (u = u.filter(function(t) {
          return void 0 !== t
        })).length > 0
          ? u
          : n
          ? [n]
          : []
      }),
        (e.I = function(t, e, n) {
          return r.reduce(function(n, r) {
            return r.plugin[t]
              ? n.then(function() {
                  return r.plugin[t](e, r.options)
                })
              : n
          }, Promise.resolve())
        })
    },
    110: function(t, e, n) {
      'use strict'
      n.d(e, {
        Z: function() {
          return r
        },
      })
      var r = (function(t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function(e, n) {
              ;(t[e] || (t[e] = [])).push(n)
            },
            off: function(e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1)
            },
            emit: function(e, n) {
              ;(t[e] || []).slice().map(function(t) {
                t(n)
              }),
                (t['*'] || []).slice().map(function(t) {
                  t(e, n)
                })
            },
          }
        )
      })()
    },
    257: function(t, e, n) {
      'use strict'
      n.d(e, {
        UD: function() {
          return f
        },
        Cj: function() {
          return d
        },
        GA: function() {
          return h
        },
        DS: function() {
          return p
        },
      })
      var r = n(98),
        o = n(578),
        a = function(t) {
          return void 0 === t
            ? t
            : '/' === t
            ? '/'
            : '/' === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t
        },
        i = n(166),
        s = new Map(),
        u = [],
        c = function(t) {
          var e = decodeURIComponent(t)
          return (0, o.Z)(e, decodeURIComponent('/personal-gatsby-site'))
            .split('#')[0]
            .split('?')[0]
        }
      function l(t) {
        return t.startsWith('/') ||
          t.startsWith('https://') ||
          t.startsWith('http://')
          ? t
          : new URL(
              t,
              window.location.href +
                (window.location.href.endsWith('/') ? '' : '/')
            ).pathname
      }
      var p = function(t) {
          u = t
        },
        f = function(t) {
          var e = v(t),
            n = u.map(function(t) {
              var e = t.path
              return { path: t.matchPath, originalPath: e }
            }),
            o = (0, r.pick)(n, e)
          return o ? a(o.route.originalPath) : null
        },
        h = function(t) {
          var e = v(t),
            n = u.map(function(t) {
              var e = t.path
              return { path: t.matchPath, originalPath: e }
            }),
            o = (0, r.pick)(n, e)
          return o ? o.params : {}
        },
        d = function t(e) {
          var n = c(l(e))
          if (s.has(n)) return s.get(n)
          var r = (0, i.J)(e)
          if (r) return t(r.toPath)
          var o = f(n)
          return o || (o = v(e)), s.set(n, o), o
        },
        v = function(t) {
          var e = c(l(t))
          return '/index.html' === e && (e = '/'), (e = a(e))
        }
    },
    444: function(t, e, n) {
      'use strict'
      n.d(e, {
        rU: function() {
          return o.ZP
        },
        B9: function() {
          return a
        },
      })
      var r = n(294),
        o = n(37),
        a = (n(679), n(861), n(281).ZP.enqueue, r.createContext({}))
    },
    281: function(t, e, n) {
      'use strict'
      n.d(e, {
        uQ: function() {
          return p
        },
        kL: function() {
          return w
        },
        ZP: function() {
          return _
        },
        hs: function() {
          return R
        },
        jN: function() {
          return P
        },
        N1: function() {
          return b
        },
      })
      var r = n(552)
      function o(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
        return r
      }
      function a(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) return o(t)
          })(t) ||
          (function(t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function(t, e) {
            if (t) {
              if ('string' == typeof t) return o(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(t, e)
                  : void 0
              )
            }
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var i = (function(t) {
          if ('undefined' == typeof document) return !1
          var e = document.createElement('link')
          try {
            if (e.relList && 'function' == typeof e.relList.supports)
              return e.relList.supports(t)
          } catch (n) {
            return !1
          }
          return !1
        })('prefetch')
          ? function(t, e) {
              return new Promise(function(n, r) {
                if ('undefined' != typeof document) {
                  var o = document.createElement('link')
                  o.setAttribute('rel', 'prefetch'),
                    o.setAttribute('href', t),
                    Object.keys(e).forEach(function(t) {
                      o.setAttribute(t, e[t])
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByName('script')[0].parentNode
                    ).appendChild(o)
                } else r()
              })
            }
          : function(t) {
              return new Promise(function(e, n) {
                var r = new XMLHttpRequest()
                r.open('GET', t, !0),
                  (r.onload = function() {
                    200 === r.status ? e() : n()
                  }),
                  r.send(null)
              })
            },
        s = {},
        u = function(t, e) {
          return new Promise(function(n) {
            s[t]
              ? n()
              : i(t, e)
                  .then(function() {
                    n(), (s[t] = !0)
                  })
                  .catch(function() {})
          })
        },
        c = n(110),
        l = n(257),
        p = { Error: 'error', Success: 'success' },
        f = function(t) {
          return (t && t.default) || t
        },
        h = function(t) {
          var e
          return (
            '/personal-gatsby-site/page-data/' +
            ('/' === t
              ? 'index'
              : (e = '/' === (e = t)[0] ? e.slice(1) : e).endsWith('/')
              ? e.slice(0, -1)
              : e) +
            '/page-data.json'
          )
        }
      function d(t, e) {
        return (
          void 0 === e && (e = 'GET'),
          new Promise(function(n, r) {
            var o = new XMLHttpRequest()
            o.open(e, t, !0),
              (o.onreadystatechange = function() {
                4 == o.readyState && n(o)
              }),
              o.send(null)
          })
        )
      }
      var v,
        m = function(t, e) {
          void 0 === e && (e = null)
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
          }
          return { component: e, json: t.result, page: n }
        },
        g = (function() {
          function t(t, e) {
            ;(this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              (0, l.DS)(e)
          }
          var e = t.prototype
          return (
            (e.memoizedGet = function(t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t)
              return (
                n ||
                  ((n = d(t, 'GET')), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function(n) {
                    return e.inFlightNetworkRequests.delete(t), n
                  })
                  .catch(function(n) {
                    throw (e.inFlightNetworkRequests.delete(t), n)
                  })
              )
            }),
            (e.setApiRunner = function(t) {
              ;(this.apiRunner = t),
                (this.prefetchDisabled = t('disableCorePrefetching').some(
                  function(t) {
                    return t
                  }
                ))
            }),
            (e.fetchPageDataJson = function(t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                a = h(n)
              return this.memoizedGet(a).then(function(r) {
                var a = r.status,
                  i = r.responseText
                if (200 === a)
                  try {
                    var s = JSON.parse(i)
                    if (void 0 === s.path)
                      throw new Error('not a valid pageData response')
                    return Object.assign(t, { status: p.Success, payload: s })
                  } catch (u) {}
                return 404 === a || 200 === a
                  ? '/404.html' === n
                    ? Object.assign(t, { status: p.Error })
                    : e.fetchPageDataJson(
                        Object.assign(t, {
                          pagePath: '/404.html',
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? Object.assign(t, { status: p.Error })
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: p.Error })
              })
            }),
            (e.loadPageDataJson = function(t) {
              var e = this,
                n = (0, l.Cj)(t)
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n)
                return Promise.resolve(r)
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function(t) {
                return e.pageDataDb.set(n, t), t
              })
            }),
            (e.findMatchPath = function(t) {
              return (0, l.UD)(t)
            }),
            (e.loadPage = function(t) {
              var e = this,
                n = (0, l.Cj)(t)
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n)
                return r.error
                  ? { error: r.error, status: r.status }
                  : Promise.resolve(r.payload)
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n)
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function(t) {
                var r = t[1]
                if (r.status === p.Error) return { status: p.Error }
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  s = a.staticQueryHashes,
                  u = void 0 === s ? [] : s,
                  l = {},
                  f = e.loadComponent(i).then(function(e) {
                    var n
                    return (
                      (l.createdAt = new Date()),
                      !e || e instanceof Error
                        ? ((l.status = p.Error), (l.error = e))
                        : ((l.status = p.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0]
                              ? t[0].webpackCompilationHash
                              : '',
                          })),
                          (n = m(o, e))),
                      n
                    )
                  }),
                  h = Promise.all(
                    u.map(function(t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t]
                        return { staticQueryHash: t, jsonPayload: n }
                      }
                      return e
                        .memoizedGet(
                          '/personal-gatsby-site/page-data/sq/d/' + t + '.json'
                        )
                        .then(function(e) {
                          var n = JSON.parse(e.responseText)
                          return { staticQueryHash: t, jsonPayload: n }
                        })
                        .catch(function() {
                          throw new Error(
                            'We couldn\'t load "/personal-gatsby-site/page-data/sq/d/' +
                              t +
                              '.json"'
                          )
                        })
                    })
                  ).then(function(t) {
                    var n = {}
                    return (
                      t.forEach(function(t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload
                        ;(n[r] = o), (e.staticQueryDb[r] = o)
                      }),
                      n
                    )
                  })
                return Promise.all([f, h])
                  .then(function(t) {
                    var r,
                      o = t[0],
                      a = t[1]
                    return (
                      o &&
                        ((r = Object.assign({}, o, { staticQueryResults: a })),
                        (l.payload = r),
                        c.Z.emit('onPostLoadPageResources', {
                          page: r,
                          pageResources: r,
                        })),
                      e.pageDb.set(n, l),
                      l.error ? { error: l.error, status: l.status } : r
                    )
                  })
                  .catch(function(t) {
                    return { error: t, status: p.Error }
                  })
              })
              return (
                o
                  .then(function() {
                    e.inFlightDb.delete(n)
                  })
                  .catch(function(t) {
                    throw (e.inFlightDb.delete(n), t)
                  }),
                this.inFlightDb.set(n, o),
                o
              )
            }),
            (e.loadPageSync = function(t, e) {
              void 0 === e && (e = {})
              var n = (0, l.Cj)(t)
              if (this.pageDb.has(n)) {
                var r,
                  o = this.pageDb.get(n)
                if (o.payload) return o.payload
                if (null !== (r = e) && void 0 !== r && r.withErrorDetails)
                  return { error: o.error, status: o.status }
              }
            }),
            (e.shouldPrefetch = function(t) {
              return (
                !!(function() {
                  if (
                    'connection' in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || '').includes('2g')
                    )
                      return !1
                    if (navigator.connection.saveData) return !1
                  }
                  return !0
                })() && !this.pageDb.has(t)
              )
            }),
            (e.prefetch = function(t) {
              var e = this
              if (!this.shouldPrefetch(t)) return !1
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner('onPrefetchPathname', { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1
              var n = (0, l.Cj)(t)
              return (
                this.doPrefetch(n).then(function() {
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner('onPostPrefetchPathname', { pathname: t }),
                    e.prefetchCompleted.add(t))
                }),
                !0
              )
            }),
            (e.doPrefetch = function(t) {
              var e = this,
                n = h(t)
              return u(n, { crossOrigin: 'anonymous', as: 'fetch' }).then(
                function() {
                  return e.loadPageDataJson(t)
                }
              )
            }),
            (e.hovering = function(t) {
              this.loadPage(t)
            }),
            (e.getResourceURLsForPathname = function(t) {
              var e = (0, l.Cj)(t),
                n = this.pageDataDb.get(e)
              if (n) {
                var r = m(n.payload)
                return [].concat(a(y(r.page.componentChunkName)), [h(e)])
              }
              return null
            }),
            (e.isPageNotFound = function(t) {
              var e = (0, l.Cj)(t),
                n = this.pageDb.get(e)
              return !n || n.notFound
            }),
            (e.loadAppData = function(t) {
              var e = this
              return (
                void 0 === t && (t = 0),
                this.memoizedGet(
                  '/personal-gatsby-site/page-data/app-data.json'
                ).then(function(n) {
                  var r,
                    o = n.status,
                    a = n.responseText
                  if (200 !== o && t < 3) return e.loadAppData(t + 1)
                  if (200 === o)
                    try {
                      var i = JSON.parse(a)
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error('not a valid app-data response')
                      r = i
                    } catch (s) {}
                  return r
                })
              )
            }),
            t
          )
        })(),
        y = function(t) {
          return (window.___chunkMapping[t] || []).map(function(t) {
            return '/personal-gatsby-site' + t
          })
        },
        w = (function(t) {
          function e(e, n) {
            return (
              t.call(
                this,
                function(t) {
                  if (!e.components[t])
                    throw new Error(
                      "We couldn't find the correct component chunk with the name " +
                        t
                    )
                  return e.components[t]()
                    .then(f)
                    .catch(function(t) {
                      return t
                    })
                },
                n
              ) || this
            )
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.doPrefetch = function(e) {
              return t.prototype.doPrefetch.call(this, e).then(function(t) {
                if (t.status !== p.Success) return Promise.resolve()
                var e = t.payload,
                  n = e.componentChunkName,
                  r = y(n)
                return Promise.all(r.map(u)).then(function() {
                  return e
                })
              })
            }),
            (n.loadPageDataJson = function(e) {
              return t.prototype.loadPageDataJson
                .call(this, e)
                .then(function(t) {
                  return t.notFound
                    ? d(e, 'HEAD').then(function(e) {
                        return 200 === e.status ? { status: p.Error } : t
                      })
                    : t
                })
            }),
            e
          )
        })(g),
        b = function(t) {
          v = t
        },
        P = {
          enqueue: function(t) {
            return v.prefetch(t)
          },
          getResourceURLsForPathname: function(t) {
            return v.getResourceURLsForPathname(t)
          },
          loadPage: function(t) {
            return v.loadPage(t)
          },
          loadPageSync: function(t, e) {
            return void 0 === e && (e = {}), v.loadPageSync(t, e)
          },
          prefetch: function(t) {
            return v.prefetch(t)
          },
          isPageNotFound: function(t) {
            return v.isPageNotFound(t)
          },
          hovering: function(t) {
            return v.hovering(t)
          },
          loadAppData: function() {
            return v.loadAppData()
          },
        },
        _ = P
      function R() {
        return v ? v.staticQueryDb : {}
      }
    },
    804: function(t, e, n) {
      'use strict'
      var r = n(552),
        o = n(294),
        a = n(343),
        i = n(257),
        s = (function(t) {
          function e() {
            return t.apply(this, arguments) || this
          }
          return (
            (0, r.Z)(e, t),
            (e.prototype.render = function() {
              var t = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    (0, i.GA)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params
                  ),
                }),
                e = (0, o.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, t, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                )
              return (0, a.h)(
                'wrapPageElement',
                { element: e, props: t },
                e,
                function(e) {
                  return { element: e.result, props: t }
                }
              ).pop()
            }),
            e
          )
        })(o.Component)
      e.Z = s
    },
    871: function(t, e, n) {
      'use strict'
      var r = n(552),
        o = n(343),
        a = n(294),
        i = n(935),
        s = n(499),
        u = n(679),
        c = n(444),
        l = n(281),
        p = n(166),
        f = n(110),
        h = {
          id: 'gatsby-announcer',
          style: {
            position: 'absolute',
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          },
          'aria-live': 'assertive',
          'aria-atomic': 'true',
        },
        d = n(393),
        v = n(37)
      function m(t) {
        var e = (0, p.J)(t)
        return null != e && (window.___replace(e.toPath), !0)
      }
      var g = function(t, e) {
          m(t.pathname) ||
            (0, o.h)('onPreRouteUpdate', { location: t, prevLocation: e })
        },
        y = function(t, e) {
          m(t.pathname) ||
            (0, o.h)('onRouteUpdate', { location: t, prevLocation: e })
        },
        w = function(t, e) {
          if ((void 0 === e && (e = {}), 'number' != typeof t)) {
            var n = (0, v.cP)(t).pathname,
              r = (0, p.J)(n)
            if (
              (r && ((t = r.toPath), (n = (0, v.cP)(t).pathname)),
              window.___swUpdated)
            )
              window.location = n
            else {
              var a = setTimeout(function() {
                f.Z.emit('onDelayedLoadPageResources', { pathname: n }),
                  (0, o.h)('onRouteUpdateDelayed', {
                    location: window.location,
                  })
              }, 1e3)
              l.ZP.loadPage(n).then(function(r) {
                if (!r || r.status === l.uQ.Error)
                  return (
                    window.history.replaceState({}, '', location.href),
                    (window.location = n),
                    void clearTimeout(a)
                  )
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ('serviceWorker' in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    'activated' === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: 'clearPathResources',
                    }),
                  (window.location = n)),
                  (0, s.navigate)(t, e),
                  clearTimeout(a)
              })
            }
          } else d.V5.navigate(t)
        }
      function b(t, e) {
        var n = this,
          r = e.location,
          a = r.pathname,
          i = r.hash,
          s = (0, o.h)('shouldUpdateScroll', {
            prevRouterProps: t,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function(t) {
              return [0, n._stateStorage.read(t, t.key)]
            },
          })
        if (s.length > 0) return s[s.length - 1]
        if (t && t.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0]
        return !0
      }
      var P = (function(t) {
          function e(e) {
            var n
            return (
              ((n = t.call(this, e) || this).announcementRef = a.createRef()), n
            )
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.componentDidUpdate = function(t, e) {
              var n = this
              requestAnimationFrame(function() {
                var t = 'new page at ' + n.props.location.pathname
                document.title && (t = document.title)
                var e = document.querySelectorAll('#gatsby-focus-wrapper h1')
                e && e.length && (t = e[0].textContent)
                var r = 'Navigated to ' + t
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                    (n.announcementRef.current.innerText = r)
              })
            }),
            (n.render = function() {
              return a.createElement(
                'div',
                Object.assign({}, h, { ref: this.announcementRef })
              )
            }),
            e
          )
        })(a.Component),
        _ = function(t, e) {
          var n, r
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r
                ? void 0
                : r.key)
          )
        },
        R = (function(t) {
          function e(e) {
            var n
            return (n = t.call(this, e) || this), g(e.location, null), n
          }
          ;(0, r.Z)(e, t)
          var n = e.prototype
          return (
            (n.componentDidMount = function() {
              y(this.props.location, null)
            }),
            (n.shouldComponentUpdate = function(t) {
              return (
                !!_(t.location, this.props.location) &&
                (g(this.props.location, t.location), !0)
              )
            }),
            (n.componentDidUpdate = function(t) {
              _(t.location, this.props.location) &&
                y(this.props.location, t.location)
            }),
            (n.render = function() {
              return a.createElement(
                a.Fragment,
                null,
                this.props.children,
                a.createElement(P, { location: location })
              )
            }),
            e
          )
        })(a.Component),
        E = n(804),
        C = n(999)
      function S(t, e) {
        for (var n in t) if (!(n in e)) return !0
        for (var r in e) if (t[r] !== e[r]) return !0
        return !1
      }
      var k = (function(t) {
          function e(e) {
            var n
            n = t.call(this) || this
            var r = e.location,
              o = e.pageResources
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources:
                  o || l.ZP.loadPageSync(r.pathname, { withErrorDetails: !0 }),
              }),
              n
            )
          }
          ;(0, r.Z)(e, t),
            (e.getDerivedStateFromProps = function(t, e) {
              var n = t.location
              return e.location.href !== n.href
                ? {
                    pageResources: l.ZP.loadPageSync(n.pathname, {
                      withErrorDetails: !0,
                    }),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) }
            })
          var n = e.prototype
          return (
            (n.loadResources = function(t) {
              var e = this
              l.ZP.loadPage(t).then(function(n) {
                n && n.status !== l.uQ.Error
                  ? e.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, '', location.href),
                    (window.location = t))
              })
            }),
            (n.shouldComponentUpdate = function(t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !==
                      e.pageResources.component ||
                      this.state.pageResources.json !== e.pageResources.json ||
                        !(
                          this.state.location.key === e.location.key ||
                          !e.pageResources.page ||
                          (!e.pageResources.page.matchPath &&
                            !e.pageResources.page.path)
                        ) ||
                          (function(t, e, n) {
                            return S(t.props, e) || S(t.state, n)
                          })(this, t, e)
                : (this.loadResources(t.location.pathname), !1)
            }),
            (n.render = function() {
              return this.props.children(this.state)
            }),
            e
          )
        })(a.Component),
        x = n(578),
        j = new l.kL(C, [])
      ;(0, l.N1)(j),
        j.setApiRunner(o.h),
        (window.asyncRequires = C),
        (window.___emitter = f.Z),
        (window.___loader = l.jN),
        d.V5.listen(function(t) {
          t.location.action = t.action
        }),
        (window.___push = function(t) {
          return w(t, { replace: !1 })
        }),
        (window.___replace = function(t) {
          return w(t, { replace: !0 })
        }),
        (window.___navigate = function(t, e) {
          return w(t, e)
        }),
        m(window.location.pathname),
        (0, o.I)('onClientEntry').then(function() {
          ;(0, o.h)('registerServiceWorker').filter(Boolean).length > 0 &&
            n(556)
          var t = function(t) {
              return a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: '/', basepath: '/' } },
                a.createElement(E.Z, t)
              )
            },
            e = a.createContext({}),
            p = (function(t) {
              function n() {
                return t.apply(this, arguments) || this
              }
              return (
                (0, r.Z)(n, t),
                (n.prototype.render = function() {
                  var t = this.props.children
                  return a.createElement(s.Location, null, function(n) {
                    var r = n.location
                    return a.createElement(k, { location: r }, function(n) {
                      var r = n.pageResources,
                        o = n.location,
                        i = (0, l.hs)()
                      return a.createElement(
                        c.B9.Provider,
                        { value: i },
                        a.createElement(
                          e.Provider,
                          { value: { pageResources: r, location: o } },
                          t
                        )
                      )
                    })
                  })
                }),
                n
              )
            })(a.Component),
            f = (function(n) {
              function o() {
                return n.apply(this, arguments) || this
              }
              return (
                (0, r.Z)(o, n),
                (o.prototype.render = function() {
                  var n = this
                  return a.createElement(e.Consumer, null, function(e) {
                    var r = e.pageResources,
                      o = e.location
                    return a.createElement(
                      R,
                      { location: o },
                      a.createElement(
                        u.$C,
                        { location: o, shouldUpdateScroll: b },
                        a.createElement(
                          s.Router,
                          {
                            basepath: '/personal-gatsby-site',
                            location: o,
                            id: 'gatsby-focus-wrapper',
                          },
                          a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  '/404.html' === r.page.path
                                    ? (0, x.Z)(
                                        o.pathname,
                                        '/personal-gatsby-site'
                                      )
                                    : encodeURI(
                                        r.page.matchPath || r.page.path
                                      ),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    )
                  })
                }),
                o
              )
            })(a.Component),
            h = window,
            d = h.pagePath,
            v = h.location
          d &&
            '/personal-gatsby-site' + d !== v.pathname &&
            !(
              j.findMatchPath((0, x.Z)(v.pathname, '/personal-gatsby-site')) ||
              '/404.html' === d ||
              d.match(/^\/404\/?$/) ||
              d.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, s.navigate)('/personal-gatsby-site' + d + v.search + v.hash, {
              replace: !0,
            }),
            l.jN.loadPage(v.pathname).then(function(t) {
              if (!t || t.status === l.uQ.Error) {
                var e =
                  'page resources for ' +
                  v.pathname +
                  ' not found. Not rendering React'
                if (t && t.error) throw (console.error(e), t.error)
                throw new Error(e)
              }
              window.___webpackCompilationHash = t.page.webpackCompilationHash
              var n = (0, o.h)(
                  'wrapRootElement',
                  { element: a.createElement(f, null) },
                  a.createElement(f, null),
                  function(t) {
                    return { element: t.result }
                  }
                ).pop(),
                r = function() {
                  var t = a.useRef(!1)
                  return (
                    a.useEffect(function() {
                      t.current ||
                        ((t.current = !0),
                        performance.mark('onInitialClientRender'),
                        (0, o.h)('onInitialClientRender'))
                    }, []),
                    a.createElement(p, null, n)
                  )
                },
                s = (0, o.h)(
                  'replaceHydrateFunction',
                  void 0,
                  i.createRoot ? i.createRoot : i.hydrate
                )[0]
              function u() {
                var t =
                  'undefined' != typeof window
                    ? document.getElementById('___gatsby')
                    : null
                s === i.createRoot
                  ? s(t, { hydrate: !0 }).render(a.createElement(r, null))
                  : s(a.createElement(r, null), t)
              }
              var c = document
              if (
                'complete' === c.readyState ||
                ('loading' !== c.readyState && !c.documentElement.doScroll)
              )
                setTimeout(function() {
                  u()
                }, 0)
              else {
                var h = function t() {
                  c.removeEventListener('DOMContentLoaded', t, !1),
                    window.removeEventListener('load', t, !1),
                    u()
                }
                c.addEventListener('DOMContentLoaded', h, !1),
                  window.addEventListener('load', h, !1)
              }
            })
        })
    },
    839: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(294),
        o = n(281),
        a = n(804)
      e.default = function(t) {
        var e = t.location,
          n = o.ZP.loadPageSync(e.pathname)
        return n
          ? r.createElement(
              a.Z,
              Object.assign({ location: e, pageResources: n }, n.json)
            )
          : null
      }
    },
    861: function(t, e, n) {
      var r
      t.exports = ((r = n(839)) && r.default) || r
    },
    639: function(t, e) {
      e.O = function(t) {
        return t
      }
    },
    166: function(t, e, n) {
      'use strict'
      n.d(e, {
        J: function() {
          return a
        },
      })
      var r = new Map(),
        o = new Map()
      function a(t) {
        var e = r.get(t)
        return e || (e = o.get(t.toLowerCase())), e
      }
      ;[].forEach(function(t) {
        t.ignoreCase ? o.set(t.fromPath, t) : r.set(t.fromPath, t)
      })
    },
    556: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(343)
      'https:' !== window.location.protocol &&
      'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development'
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/personal-gatsby-site/sw.js')
            .then(function(t) {
              t.addEventListener('updatefound', function() {
                ;(0, r.h)('onServiceWorkerUpdateFound', { serviceWorker: t })
                var e = t.installing
                console.log('installingWorker', e),
                  e.addEventListener('statechange', function() {
                    switch (e.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)('onServiceWorkerUpdateReady', {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                'resources failed, SW updated - reloading'
                              ),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            (0, r.h)('onServiceWorkerInstalled', {
                              serviceWorker: t,
                            }))
                        break
                      case 'redundant':
                        console.error(
                          'The installing service worker became redundant.'
                        ),
                          (0, r.h)('onServiceWorkerRedundant', {
                            serviceWorker: t,
                          })
                        break
                      case 'activated':
                        ;(0, r.h)('onServiceWorkerActive', { serviceWorker: t })
                    }
                  })
              })
            })
            .catch(function(t) {
              console.error('Error during service worker registration:', t)
            })
    },
    578: function(t, e, n) {
      'use strict'
      function r(t, e) {
        return (
          void 0 === e && (e = ''),
          e
            ? t === e
              ? '/'
              : t.startsWith(e + '/')
              ? t.slice(e.length)
              : t
            : t
        )
      }
      n.d(e, {
        Z: function() {
          return r
        },
      })
    },
    499: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          BaseContext: function() {
            return F
          },
          Link: function() {
            return B
          },
          Location: function() {
            return M
          },
          LocationProvider: function() {
            return T
          },
          Match: function() {
            return X
          },
          Redirect: function() {
            return z
          },
          Router: function() {
            return N
          },
          ServerLocation: function() {
            return W
          },
          createHistory: function() {
            return _
          },
          createMemorySource: function() {
            return R
          },
          globalHistory: function() {
            return C
          },
          isRedirect: function() {
            return $
          },
          matchPath: function() {
            return c
          },
          navigate: function() {
            return S
          },
          redirectTo: function() {
            return Y
          },
          useLocation: function() {
            return tt
          },
          useMatch: function() {
            return rt
          },
          useNavigate: function() {
            return et
          },
          useParams: function() {
            return nt
          },
        })
      var r = n(294),
        o = n(143),
        a = n.n(o),
        i = n(639),
        s = function(t, e) {
          return t.substr(0, e.length) === e
        },
        u = function(t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = g(o),
              s = '' === i[0],
              u = m(t),
              c = 0,
              l = u.length;
            c < l;
            c++
          ) {
            var p = !1,
              h = u[c].route
            if (h.default) r = { route: h, params: {}, uri: e }
            else {
              for (
                var v = g(h.path),
                  y = {},
                  b = Math.max(i.length, v.length),
                  P = 0;
                P < b;
                P++
              ) {
                var _ = v[P],
                  R = i[P]
                if (d(_)) {
                  y[_.slice(1) || '*'] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join('/')
                  break
                }
                if (void 0 === R) {
                  p = !0
                  break
                }
                var E = f.exec(_)
                if (E && !s) {
                  ;-1 === w.indexOf(E[1]) || a()(!1)
                  var C = decodeURIComponent(R)
                  y[E[1]] = C
                } else if (_ !== R) {
                  p = !0
                  break
                }
              }
              if (!p) {
                n = { route: h, params: y, uri: '/' + i.slice(0, P).join('/') }
                break
              }
            }
          }
          return n || r || null
        },
        c = function(t, e) {
          return u([{ path: t }], e)
        },
        l = function(t, e) {
          if (s(t, '/')) return t
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            i = g(r),
            u = g(a)
          if ('' === i[0]) return y(a, o)
          if (!s(i[0], '.')) {
            var c = u.concat(i).join('/')
            return y(('/' === a ? '' : '/') + c, o)
          }
          for (var l = u.concat(i), p = [], f = 0, h = l.length; f < h; f++) {
            var d = l[f]
            '..' === d ? p.pop() : '.' !== d && p.push(d)
          }
          return y('/' + p.join('/'), o)
        },
        p = function(t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              g(r)
                .map(function(t) {
                  var n = f.exec(t)
                  return n ? e[n[1]] : t
                })
                .join('/'),
            s = e.location,
            u = (s = void 0 === s ? {} : s).search,
            c = (void 0 === u ? '' : u).split('?')[1] || ''
          return (i = y(i, a, c))
        },
        f = /^:(.+)/,
        h = function(t) {
          return f.test(t)
        },
        d = function(t) {
          return t && '*' === t[0]
        },
        v = function(t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : g(t.path).reduce(function(t, e) {
                  return (
                    (t += 4),
                    !(function(t) {
                      return '' === t
                    })(e)
                      ? h(e)
                        ? (t += 2)
                        : d(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  )
                }, 0),
            index: e,
          }
        },
        m = function(t) {
          return t.map(v).sort(function(t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index
          })
        },
        g = function(t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/')
        },
        y = function(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            t +
            ((n = n.filter(function(t) {
              return t && t.length > 0
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          )
        },
        w = ['uri', 'path'],
        b =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          },
        P = function(t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            s = e.host,
            u = e.hostname,
            c = e.port,
            l = t.location.pathname
          !l && o && E && (l = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: u,
            port: c,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial',
          }
        },
        _ = function(t, e) {
          var n = [],
            r = P(t),
            o = !1,
            a = function() {}
          return {
            get location() {
              return r
            },
            get transitioning() {
              return o
            },
            _onTransitionComplete: function() {
              ;(o = !1), a()
            },
            listen: function(e) {
              n.push(e)
              var o = function() {
                ;(r = P(t)), e({ location: r, action: 'POP' })
              }
              return (
                t.addEventListener('popstate', o),
                function() {
                  t.removeEventListener('popstate', o),
                    (n = n.filter(function(t) {
                      return t !== e
                    }))
                }
              )
            },
            navigate: function(e) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = i.state,
                u = i.replace,
                c = void 0 !== u && u
              if ('number' == typeof e) t.history.go(e)
              else {
                s = b({}, s, { key: Date.now() + '' })
                try {
                  o || c
                    ? t.history.replaceState(s, null, e)
                    : t.history.pushState(s, null, e)
                } catch (p) {
                  t.location[c ? 'replace' : 'assign'](e)
                }
              }
              ;(r = P(t)), (o = !0)
              var l = new Promise(function(t) {
                return (a = t)
              })
              return (
                n.forEach(function(t) {
                  return t({ location: r, action: 'PUSH' })
                }),
                l
              )
            },
          }
        },
        R = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '/',
            e = t.indexOf('?'),
            n = {
              pathname: e > -1 ? t.substr(0, e) : t,
              search: e > -1 ? t.substr(e) : '',
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function(t, e) {},
            removeEventListener: function(t, e) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function(t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                r++,
                  o.push({ pathname: s, search: c.length ? '?' + c : c }),
                  a.push(t)
              },
              replaceState: function(t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = t)
              },
              go: function(t) {
                var e = r + t
                e < 0 || e > a.length - 1 || (r = e)
              },
            },
          }
        },
        E = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        C = _(E ? window : R()),
        S = C.navigate,
        k =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
          }
      function x(t, e) {
        var n = {}
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]))
        return n
      }
      function j(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      function O(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function D(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof e
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e))
      }
      var L = function(t, e) {
          var n = (0, r.createContext)(e)
          return (n.displayName = t), n
        },
        U = L('Location'),
        M = function(t) {
          var e = t.children
          return r.createElement(U.Consumer, null, function(t) {
            return t ? e(t) : r.createElement(T, null, e)
          })
        },
        T = (function(t) {
          function e() {
            var n, r
            j(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              O(r, n)
            )
          }
          return (
            D(e, t),
            (e.prototype.getContext = function() {
              var t = this.props.history
              return { navigate: t.navigate, location: t.location }
            }),
            (e.prototype.componentDidCatch = function(t, e) {
              if (!$(t)) throw t
              ;(0, this.props.history.navigate)(t.uri, { replace: !0 })
            }),
            (e.prototype.componentDidUpdate = function(t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete()
            }),
            (e.prototype.componentDidMount = function() {
              var t = this,
                e = this.state.refs,
                n = this.props.history
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function() {
                  Promise.resolve().then(function() {
                    requestAnimationFrame(function() {
                      t.unmounted ||
                        t.setState(function() {
                          return { context: t.getContext() }
                        })
                    })
                  })
                }))
            }),
            (e.prototype.componentWillUnmount = function() {
              var t = this.state.refs
              ;(this.unmounted = !0), t.unlisten()
            }),
            (e.prototype.render = function() {
              var t = this.state.context,
                e = this.props.children
              return r.createElement(
                U.Provider,
                { value: t },
                'function' == typeof e ? e(t) : e || null
              )
            }),
            e
          )
        })(r.Component)
      T.defaultProps = { history: C }
      var W = function(t) {
          var e = t.url,
            n = t.children,
            o = e.indexOf('?'),
            a = void 0,
            i = ''
          return (
            o > -1 ? ((a = e.substring(0, o)), (i = e.substring(o))) : (a = e),
            r.createElement(
              U.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: '' },
                  navigate: function() {
                    throw new Error("You can't call navigate on the server.")
                  },
                },
              },
              n
            )
          )
        },
        F = L('Base', { baseuri: '/', basepath: '/', navigate: C.navigate }),
        N = function(t) {
          return r.createElement(F.Consumer, null, function(e) {
            return r.createElement(M, null, function(n) {
              return r.createElement(A, k({}, e, n, t))
            })
          })
        },
        A = (function(t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments))
          }
          return (
            D(e, t),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                o = t.basepath,
                a = t.primary,
                i = t.children,
                s = (t.baseuri, t.component),
                c = void 0 === s ? 'div' : s,
                p = x(t, [
                  'location',
                  'navigate',
                  'basepath',
                  'primary',
                  'children',
                  'baseuri',
                  'component',
                ]),
                f = r.Children.toArray(i).reduce(function(t, e) {
                  var n = at(o)(e)
                  return t.concat(n)
                }, []),
                h = e.pathname,
                d = u(f, h)
              if (d) {
                var v = d.params,
                  m = d.uri,
                  g = d.route,
                  y = d.route.value
                o = g.default ? o : g.path.replace(/\*$/, '')
                var w = k({}, v, {
                    uri: m,
                    location: e,
                    navigate: function(t, e) {
                      return n(l(t, m), e)
                    },
                  }),
                  b = r.cloneElement(
                    y,
                    w,
                    y.props.children
                      ? r.createElement(
                          N,
                          { location: e, primary: a },
                          y.props.children
                        )
                      : void 0
                  ),
                  P = a ? H : c,
                  _ = a ? k({ uri: m, location: e, component: c }, p) : p
                return r.createElement(
                  F.Provider,
                  { value: { baseuri: m, basepath: o, navigate: w.navigate } },
                  r.createElement(P, _, b)
                )
              }
              return null
            }),
            e
          )
        })(r.PureComponent)
      A.defaultProps = { primary: !0 }
      var I = L('Focus'),
        H = function(t) {
          var e = t.uri,
            n = t.location,
            o = t.component,
            a = x(t, ['uri', 'location', 'component'])
          return r.createElement(I.Consumer, null, function(t) {
            return r.createElement(
              J,
              k({}, a, { component: o, requestFocus: t, uri: e, location: n })
            )
          })
        },
        Z = !0,
        q = 0,
        J = (function(t) {
          function e() {
            var n, r
            j(this, e)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function(t) {
                !r.state.shouldFocus && t && t.focus()
              }),
              O(r, n)
            )
          }
          return (
            D(e, t),
            (e.getDerivedStateFromProps = function(t, e) {
              if (null == e.uri) return k({ shouldFocus: !0 }, t)
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri
              return k({ shouldFocus: n || r }, t)
            }),
            (e.prototype.componentDidMount = function() {
              q++, this.focus()
            }),
            (e.prototype.componentWillUnmount = function() {
              0 === --q && (Z = !0)
            }),
            (e.prototype.componentDidUpdate = function(t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus()
            }),
            (e.prototype.focus = function() {
              var t = this.props.requestFocus
              t
                ? t(this.node)
                : Z
                ? (Z = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus())
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                o = (e.requestFocus, e.component),
                a = void 0 === o ? 'div' : o,
                i =
                  (e.uri,
                  e.location,
                  x(e, [
                    'children',
                    'style',
                    'requestFocus',
                    'component',
                    'uri',
                    'location',
                  ]))
              return r.createElement(
                a,
                k(
                  {
                    style: k({ outline: 'none' }, n),
                    tabIndex: '-1',
                    ref: function(e) {
                      return (t.node = e)
                    },
                  },
                  i
                ),
                r.createElement(
                  I.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              )
            }),
            e
          )
        })(r.Component)
      ;(0, i.O)(J)
      var Q = function() {},
        K = r.forwardRef
      void 0 === K &&
        (K = function(t) {
          return t
        })
      var B = K(function(t, e) {
        var n = t.innerRef,
          o = x(t, ['innerRef'])
        return r.createElement(F.Consumer, null, function(t) {
          t.basepath
          var a = t.baseuri
          return r.createElement(M, null, function(t) {
            var i = t.location,
              u = t.navigate,
              c = o.to,
              p = o.state,
              f = o.replace,
              h = o.getProps,
              d = void 0 === h ? Q : h,
              v = x(o, ['to', 'state', 'replace', 'getProps']),
              m = l(c, a),
              g = encodeURI(m),
              y = i.pathname === g,
              w = s(i.pathname, g)
            return r.createElement(
              'a',
              k(
                { ref: e || n, 'aria-current': y ? 'page' : void 0 },
                v,
                d({
                  isCurrent: y,
                  isPartiallyCurrent: w,
                  href: m,
                  location: i,
                }),
                {
                  href: m,
                  onClick: function(t) {
                    if ((v.onClick && v.onClick(t), it(t))) {
                      t.preventDefault()
                      var e = f
                      if ('boolean' != typeof f && y) {
                        var n = k({}, i.state),
                          r = (n.key, x(n, ['key']))
                        ;(o = k({}, p)),
                          (a = r),
                          (e =
                            (s = Object.keys(o)).length ===
                              Object.keys(a).length &&
                            s.every(function(t) {
                              return a.hasOwnProperty(t) && o[t] === a[t]
                            }))
                      }
                      u(m, { state: p, replace: e })
                    }
                    var o, a, s
                  },
                }
              )
            )
          })
        })
      })
      function G(t) {
        this.uri = t
      }
      B.displayName = 'Link'
      var $ = function(t) {
          return t instanceof G
        },
        Y = function(t) {
          throw new G(t)
        },
        V = (function(t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments))
          }
          return (
            D(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                s = x(t, [
                  'navigate',
                  'to',
                  'from',
                  'replace',
                  'state',
                  'noThrow',
                  'baseuri',
                ])
              Promise.resolve().then(function() {
                var t = l(n, i)
                e(p(t, s), { replace: o, state: a })
              })
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = x(t, [
                  'navigate',
                  'to',
                  'from',
                  'replace',
                  'state',
                  'noThrow',
                  'baseuri',
                ]),
                a = l(e, r)
              return n || Y(p(a, o)), null
            }),
            e
          )
        })(r.Component),
        z = function(t) {
          return r.createElement(F.Consumer, null, function(e) {
            var n = e.baseuri
            return r.createElement(M, null, function(e) {
              return r.createElement(V, k({}, e, { baseuri: n }, t))
            })
          })
        },
        X = function(t) {
          var e = t.path,
            n = t.children
          return r.createElement(F.Consumer, null, function(t) {
            var o = t.baseuri
            return r.createElement(M, null, function(t) {
              var r = t.navigate,
                a = t.location,
                i = l(e, o),
                s = c(i, a.pathname)
              return n({
                navigate: r,
                location: a,
                match: s ? k({}, s.params, { uri: s.uri, path: e }) : null,
              })
            })
          })
        },
        tt = function() {
          var t = (0, r.useContext)(U)
          if (!t)
            throw new Error(
              'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          return t.location
        },
        et = function() {
          var t = (0, r.useContext)(F)
          if (!t)
            throw new Error(
              'useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          return t.navigate
        },
        nt = function() {
          var t = (0, r.useContext)(F)
          if (!t)
            throw new Error(
              'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          var e = tt(),
            n = c(t.basepath, e.pathname)
          return n ? n.params : null
        },
        rt = function(t) {
          if (!t)
            throw new Error(
              'useMatch(path: string) requires an argument of a string to match against'
            )
          var e = (0, r.useContext)(F)
          if (!e)
            throw new Error(
              'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router'
            )
          var n = tt(),
            o = l(t, e.baseuri),
            a = c(o, n.pathname)
          return a ? k({}, a.params, { uri: a.uri, path: t }) : null
        },
        ot = function(t) {
          return t.replace(/(^\/+|\/+$)/g, '')
        },
        at = function t(e) {
          return function(n) {
            if (!n) return null
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, t(e))
            var o, i, s
            if (
              (n.props.path || n.props.default || n.type === z || a()(!1),
              n.type !== z || (n.props.from && n.props.to) || a()(!1),
              n.type === z &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function(t) {
                  return h(t)
                }),
                g(o)
                  .filter(s)
                  .sort()
                  .join('/') !==
                  g(i)
                    .filter(s)
                    .sort()
                    .join('/')) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 }
            var u = n.type === z ? n.props.from : n.props.path,
              c = '/' === u ? e : ot(e) + '/' + ot(u)
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? ot(c) + '/*' : c,
            }
          }
        },
        it = function(t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          )
        }
    },
    143: function(t) {
      'use strict'
      t.exports = function(t, e, n, r, o, a, i, s) {
        if (!t) {
          var u
          if (void 0 === e)
            u = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var c = [n, r, o, a, i, s],
              l = 0
            ;(u = new Error(
              e.replace(/%s/g, function() {
                return c[l++]
              })
            )).name = 'Invariant Violation'
          }
          throw ((u.framesToPop = 1), u)
        }
      }
    },
  },
  function(t) {
    'use strict'
    t.O(0, [774], function() {
      return (e = 871), t((t.s = e))
      var e
    })
    t.O()
  },
])
//# sourceMappingURL=app-46b56d2c1319e773b8d3.js.map

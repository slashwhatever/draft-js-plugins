(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    '9s3F': function (e, t, n) {
      'use strict';
      n.d(t, 'b', function () {
        return L;
      });
      var o = n('Svze'),
        r = n('ERkP'),
        i = n.n(r),
        a = n('7O4Y'),
        s = n('aWzz'),
        c = n.n(s),
        p = n('zpdM'),
        u = n('GAvS');
      var l = function (e, t) {
          for (
            var n = -1, o = null == e ? 0 : e.length, r = Array(o);
            ++n < o;

          )
            r[n] = t(e[n], n, e);
          return r;
        },
        d = n('SEb4'),
        f = n('DE/k'),
        g = n('gfy7');
      var m = function (e) {
          return (
            'symbol' == typeof e ||
            (Object(g.a)(e) && '[object Symbol]' == Object(f.a)(e))
          );
        },
        v = u.a ? u.a.prototype : void 0,
        h = v ? v.toString : void 0;
      var y = function e(t) {
        if ('string' == typeof t) return t;
        if (Object(d.a)(t)) return l(t, e) + '';
        if (m(t)) return h ? h.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -Infinity ? '-0' : n;
      };
      var E = function (e) {
          return null == e ? '' : y(e);
        },
        S = /[\\^$.*+?()[\]{}|]/g,
        O = RegExp(S.source);
      var C = function (e) {
        return (e = E(e)) && O.test(e) ? e.replace(S, '\\$&') : e;
      };
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function x(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = {},
          i = Object.keys(e);
        for (o = 0; o < i.length; o++)
          (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      function k(e) {
        var t = e.mention,
          n = e.children,
          o = e.className;
        return i.a.createElement(
          'a',
          {
            href: t.link,
            className: o,
            spellCheck: !1,
            'data-testid': 'mentionLink',
          },
          n
        );
      }
      function I(e) {
        var t = e.children,
          n = e.className;
        return i.a.createElement(
          'span',
          { className: n, spellCheck: !1, 'data-testid': 'mentionText' },
          t
        );
      }
      function w(e) {
        var t = e.entityKey,
          n = e.theme,
          o = void 0 === n ? {} : n,
          r = e.mentionComponent,
          s = e.children,
          c = e.decoratedText,
          p = e.className,
          u = e.contentState,
          l = Object(a.a)(o.mention, p),
          d = u.getEntity(t).getData().mention,
          f = r || (d.link ? k : I);
        return i.a.createElement(
          f,
          {
            entityKey: t,
            mention: d,
            theme: o,
            className: l,
            decoratedText: c,
          },
          s
        );
      }
      var M = function (e) {
        var t = Object(r.useRef)(!1);
        Object(r.useEffect)(function () {
          t.current = !1;
        });
        var n = e.theme,
          o = void 0 === n ? {} : n,
          a = e.mention,
          s = e.searchValue,
          c = e.isFocused,
          p = e.id,
          u = c ? o.mentionSuggestionsEntryFocused : o.mentionSuggestionsEntry,
          l = e.entryComponent;
        return i.a.createElement(l, {
          className: u,
          onMouseDown: function (e) {
            e.preventDefault(), (t.current = !0);
          },
          onMouseUp: function () {
            t.current && (e.onMentionSelect(e.mention), (t.current = !1));
          },
          onMouseEnter: function () {
            e.onMentionFocus(e.index);
          },
          role: 'option',
          id: p,
          'aria-selected': c ? 'true' : void 0,
          theme: o,
          mention: a,
          isFocused: c,
          searchValue: s,
        });
      };
      M.propTypes = {
        entryComponent: c.a.any.isRequired,
        searchValue: c.a.string,
        onMentionSelect: c.a.func,
      };
      var D = function (e, t, n) {
        var o = t.getAnchorKey(),
          r = t.getAnchorOffset();
        return (function (e, t, n) {
          var o = e.substr(0, t),
            r = 0 === n.length ? 0 : o.lastIndexOf(n),
            i = 0 === n.length ? o : o.slice(r + n.length);
          return { begin: r, end: o.length, matchingString: i };
        })(e.getCurrentContent().getBlockForKey(o).getText(), r, n);
      };
      function T(e) {
        return '@' === e ? 'mention' : e + 'mention';
      }
      function A(e) {
        var t = e.mention,
          n = e.theme,
          o = void 0 === n ? {} : n;
        return t.avatar
          ? i.a.createElement('img', {
              src: t.avatar,
              className: o.mentionSuggestionsEntryAvatar,
              role: 'presentation',
            })
          : null;
      }
      function P(e) {
        var t = e.mention,
          n = e.theme,
          o =
            (e.isFocused,
            e.searchValue,
            x(e, ['mention', 'theme', 'isFocused', 'searchValue']));
        return i.a.createElement(
          'div',
          o,
          i.a.createElement(A, { mention: t, theme: n }),
          i.a.createElement(
            'span',
            { className: null == n ? void 0 : n.mentionSuggestionsEntryText },
            t.name
          )
        );
      }
      var R = (function (e) {
        var t, n;
        function o(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = { focusedOptionIndex: 0 }),
            (n.key = Object(p.genKey)()),
            (n.popover = void 0),
            (n.activeOffsetKey = void 0),
            (n.lastSearchValue = void 0),
            (n.lastSelectionIsInsideWord = void 0),
            (n.onEditorStateChange = function (e) {
              var t = n.props.store.getAllSearches();
              if (0 === t.size) return e;
              var o = function () {
                  return (
                    n.props.store.resetEscapedSearch(), n.closeDropdown(), e
                  );
                },
                r = e.getSelection(),
                i = r.getAnchorKey(),
                a = r.getAnchorOffset();
              if (!r.isCollapsed() || !r.getHasFocus()) return o();
              var s = t
                .map(function (e) {
                  return (function (e) {
                    var t = e.split('-'),
                      n = t[0],
                      o = t[1],
                      r = t[2];
                    return {
                      blockKey: n,
                      decoratorKey: parseInt(o, 10),
                      leafKey: parseInt(r, 10),
                    };
                  })(e);
                })
                .filter(function (e) {
                  return e.blockKey === i;
                })
                .map(function (t) {
                  return e.getBlockTree(t.blockKey).getIn([t.decoratorKey]);
                });
              if (
                s.every(function (e) {
                  return void 0 === e;
                })
              )
                return o();
              var c = e.getCurrentContent().getPlainText(),
                p = s
                  .filter(function (e) {
                    return void 0 !== e;
                  })
                  .map(function (e) {
                    var t = e.start,
                      o = e.end;
                    return (
                      (0 === t &&
                        a === n.props.mentionTrigger.length &&
                        c.charAt(a) !== n.props.mentionTrigger &&
                        new RegExp(
                          String.raw({ raw: '' + C(n.props.mentionTrigger) }),
                          'g'
                        ).test(c) &&
                        a <= o) ||
                      (a >= t + n.props.mentionTrigger.length && a <= o)
                    );
                  });
              if (
                p.every(function (e) {
                  return !1 === e;
                })
              )
                return o();
              var u = n.activeOffsetKey;
              return (
                (n.activeOffsetKey = p
                  .filter(function (e) {
                    return !0 === e;
                  })
                  .keySeq()
                  .first()),
                n.onSearchChange(e, r, n.activeOffsetKey, u),
                n.props.store.isEscaped(n.activeOffsetKey) ||
                  n.props.store.resetEscapedSearch(),
                !n.props.open &&
                  !n.props.store.isEscaped(n.activeOffsetKey) &&
                  n.props.suggestions.length > 0 &&
                  n.openDropdown(),
                (void 0 !== n.lastSelectionIsInsideWord &&
                  p.equals(n.lastSelectionIsInsideWord)) ||
                  n.setState({ focusedOptionIndex: 0 }),
                (n.lastSelectionIsInsideWord = p),
                e
              );
            }),
            (n.onSearchChange = function (e, t, o, r) {
              var i = D(e, t, n.props.mentionTrigger).matchingString;
              (n.lastSearchValue === i && o === r) ||
                ((n.lastSearchValue = i), n.props.onSearchChange({ value: i }));
            }),
            (n.onDownArrow = function (e) {
              e.preventDefault();
              var t = n.state.focusedOptionIndex + 1;
              n.onMentionFocus(t >= n.props.suggestions.length ? 0 : t);
            }),
            (n.onTab = function (e) {
              e.preventDefault(), n.commitSelection();
            }),
            (n.onUpArrow = function (e) {
              if ((e.preventDefault(), n.props.suggestions.length > 0)) {
                var t = n.state.focusedOptionIndex - 1;
                n.onMentionFocus(t < 0 ? n.props.suggestions.length - 1 : t);
              }
            }),
            (n.onEscape = function (e) {
              e.preventDefault();
              var t = n.lastSelectionIsInsideWord
                .filter(function (e) {
                  return !0 === e;
                })
                .keySeq()
                .first();
              n.props.store.escapeSearch(t),
                n.closeDropdown(),
                n.props.store.setEditorState(n.props.store.getEditorState());
            }),
            (n.onMentionSelect = function (e) {
              if (e) {
                n.props.onAddMention && n.props.onAddMention(e),
                  n.closeDropdown();
                var t = (function (e, t, n, o, r) {
                  var i = e
                      .getCurrentContent()
                      .createEntity(T(o), r, { mention: t })
                      .getLastCreatedEntityKey(),
                    a = e.getSelection(),
                    s = D(e, a, o),
                    c = s.begin,
                    u = s.end,
                    l = a.merge({ anchorOffset: c, focusOffset: u }),
                    d = p.Modifier.replaceText(
                      e.getCurrentContent(),
                      l,
                      '' + n + t.name,
                      void 0,
                      i
                    ),
                    f = l.getAnchorKey();
                  e.getCurrentContent().getBlockForKey(f).getLength() === u &&
                    (d = p.Modifier.insertText(d, d.getSelectionAfter(), ' '));
                  var g = p.EditorState.push(e, d, 'insert-fragment');
                  return p.EditorState.forceSelection(g, d.getSelectionAfter());
                })(
                  n.props.store.getEditorState(),
                  e,
                  n.props.mentionPrefix,
                  n.props.mentionTrigger,
                  n.props.entityMutability
                );
                n.props.store.setEditorState(t);
              }
            }),
            (n.onMentionFocus = function (e) {
              var t = 'mention-option-' + n.key + '-' + e;
              (n.props.ariaProps.ariaActiveDescendantID = t),
                n.setState({ focusedOptionIndex: e }),
                n.props.store.setEditorState(n.props.store.getEditorState());
            }),
            (n.commitSelection = function () {
              return n.props.store.getIsOpened()
                ? (n.onMentionSelect(
                    n.props.suggestions[n.state.focusedOptionIndex]
                  ),
                  'handled')
                : 'not-handled';
            }),
            (n.openDropdown = function () {
              (n.props.callbacks.handleReturn = n.commitSelection),
                (n.props.callbacks.keyBindingFn = function (e) {
                  return (
                    40 === e.keyCode && n.onDownArrow(e),
                    38 === e.keyCode && n.onUpArrow(e),
                    27 === e.keyCode && n.onEscape(e),
                    9 === e.keyCode && n.onTab(e),
                    null
                  );
                });
              var e =
                'mention-option-' + n.key + '-' + n.state.focusedOptionIndex;
              (n.props.ariaProps.ariaActiveDescendantID = e),
                (n.props.ariaProps.ariaOwneeID = 'mentions-list-' + n.key),
                (n.props.ariaProps.ariaHasPopup = 'true'),
                (n.props.ariaProps.ariaExpanded = !0),
                n.props.onOpenChange(!0);
            }),
            (n.closeDropdown = function () {
              (n.props.callbacks.handleReturn = void 0),
                (n.props.callbacks.keyBindingFn = void 0),
                (n.props.ariaProps.ariaHasPopup = 'false'),
                (n.props.ariaProps.ariaExpanded = !1),
                (n.props.ariaProps.ariaActiveDescendantID = void 0),
                (n.props.ariaProps.ariaOwneeID = void 0),
                n.props.onOpenChange(!1);
            }),
            (n.props.callbacks.onChange = n.onEditorStateChange),
            n
          );
        }
        (n = e),
          ((t = o).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
        var r = o.prototype;
        return (
          (r.componentDidUpdate = function () {
            if (this.popover) {
              var e = this.props.suggestions.length;
              if (
                (e > 0 &&
                  this.state.focusedOptionIndex >= e &&
                  this.setState({ focusedOptionIndex: e - 1 }),
                !this.props.store.getAllSearches().has(this.activeOffsetKey))
              )
                return;
              for (
                var t = this.props.store.getPortalClientRect(
                    this.activeOffsetKey
                  ),
                  n = this.props.positionSuggestions({
                    decoratorRect: t,
                    props: this.props,
                    popover: this.popover,
                  }),
                  o = 0,
                  r = Object.entries(n);
                o < r.length;
                o++
              ) {
                var i = r[o],
                  a = i[0],
                  s = i[1];
                this.popover.style[a] = s;
              }
            }
          }),
          (r.componentWillUnmount = function () {
            this.props.callbacks.onChange = void 0;
          }),
          (r.render = function () {
            var e = this;
            if (!this.props.open) return null;
            var t = this.props,
              n = t.entryComponent,
              o = t.popoverComponent,
              r = void 0 === o ? i.a.createElement('div', null) : o,
              a =
                (t.onOpenChange,
                t.onAddMention,
                t.onSearchChange,
                t.suggestions,
                t.ariaProps,
                t.callbacks,
                t.theme),
              s = void 0 === a ? {} : a,
              c =
                (t.store,
                t.entityMutability,
                t.positionSuggestions,
                t.mentionTrigger,
                t.mentionPrefix,
                x(t, [
                  'entryComponent',
                  'popoverComponent',
                  'onOpenChange',
                  'onAddMention',
                  'onSearchChange',
                  'suggestions',
                  'ariaProps',
                  'callbacks',
                  'theme',
                  'store',
                  'entityMutability',
                  'positionSuggestions',
                  'mentionTrigger',
                  'mentionPrefix',
                ]));
            return i.a.cloneElement(
              r,
              b({}, c, {
                className: s.mentionSuggestions,
                role: 'listbox',
                id: 'mentions-list-' + this.key,
                ref: function (t) {
                  e.popover = t;
                },
              }),
              this.props.suggestions.map(function (t, o) {
                return i.a.createElement(M, {
                  key: null != t.id ? t.id : t.name,
                  onMentionSelect: e.onMentionSelect,
                  onMentionFocus: e.onMentionFocus,
                  isFocused: e.state.focusedOptionIndex === o,
                  mention: t,
                  index: o,
                  id: 'mention-option-' + e.key + '-' + o,
                  theme: s,
                  searchValue: e.lastSearchValue,
                  entryComponent: n || P,
                });
              })
            );
          }),
          o
        );
      })(r.Component);
      function K(e) {
        var t = Object(r.useRef)(),
          n = function (e) {
            e.store.updatePortalClientRect(e.offsetKey, function () {
              return t.current.getBoundingClientRect();
            });
          };
        return (
          Object(r.useEffect)(function () {
            return (
              e.store.register(e.offsetKey),
              e.store.setIsOpened(!0),
              n(e),
              e.store.setEditorState(e.store.getEditorState()),
              function () {
                e.store.unregister(e.offsetKey), e.store.setIsOpened(!1);
              }
            );
          }, []),
          Object(r.useEffect)(function () {
            n(e);
          }),
          i.a.createElement(
            'span',
            {
              ref: function (e) {
                t.current = e;
              },
            },
            e.children
          )
        );
      }
      R.propTypes = {
        open: c.a.bool.isRequired,
        onOpenChange: c.a.func.isRequired,
        entityMutability: c.a.oneOf(['SEGMENTED', 'IMMUTABLE', 'MUTABLE']),
        entryComponent: c.a.func,
        onAddMention: c.a.func,
        suggestions: c.a.array.isRequired,
      };
      var F = function e(t) {
        return t
          ? 'static' !== window.getComputedStyle(t).getPropertyValue('position')
            ? t
            : e(t.parentElement)
          : null;
      };
      function j(e) {
        var t,
          n = e.decoratorRect,
          o = e.popover,
          r = e.props,
          i = F(o.parentElement);
        if (i) {
          var a = i.getBoundingClientRect();
          t = {
            scrollLeft: i.scrollLeft,
            scrollTop: i.scrollTop,
            left: n.left - a.left,
            top: n.bottom - a.top,
          };
        } else
          t = {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop,
            scrollLeft:
              window.pageXOffset || document.documentElement.scrollLeft,
            top: n.bottom,
            left: n.left,
          };
        var s,
          c,
          p = t.left + t.scrollLeft,
          u = t.top + t.scrollTop;
        return (
          r.open &&
            (r.suggestions.length > 0
              ? ((s = 'scale(1)'), (c = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : ((s = 'scale(0)'), (c = 'all 0.35s cubic-bezier(.3,1,.2,1)'))),
          {
            left: p + 'px',
            top: u + 'px',
            transform: s,
            transformOrigin: '1em 0%',
            transition: c,
          }
        );
      }
      var N = {
          mention: 'm6zwb4v',
          mentionSuggestions: 'mnw6qvm',
          mentionSuggestionsEntry: 'm1ymsnxd',
          mentionSuggestionsEntryFocused: 'm126ak5t',
          mentionSuggestionsEntryText: 'mtiwdxc',
          mentionSuggestionsEntryAvatar: 'myz2dw1',
        },
        B = function (e, t, n) {
          var o = t
            ? new RegExp(C(e) + '(' + n + '|\\s){0,}', 'g')
            : new RegExp('(\\s|^)' + C(e) + n, 'g');
          return function (e, t) {
            !(function (e, t, n) {
              var o = t.getText();
              t.findEntityRanges(
                function (e) {
                  return !e.getEntity();
                },
                function (t, r) {
                  for (
                    var i, a, s = o.slice(t, r), c = e.lastIndex;
                    null !== (i = e.exec(s)) && e.lastIndex !== c;

                  )
                    (c = e.lastIndex), (a = t + i.index), n(a, a + i[0].length);
                }
              );
            })(o, e, t);
          };
        },
        L = function (e, t) {
          var n = e.toLowerCase(),
            o = t.filter(function (e) {
              return !n || e.name.toLowerCase().indexOf(n) > -1;
            }),
            r = o.length < 5 ? o.length : 5;
          return o.slice(0, r);
        };
      t.a = function (e) {
        void 0 === e && (e = {});
        var t,
          n,
          r = {
            keyBindingFn: void 0,
            handleKeyCommand: void 0,
            handleReturn: void 0,
            onChange: void 0,
          },
          a = {
            ariaHasPopup: 'false',
            ariaExpanded: !1,
            ariaOwneeID: void 0,
            ariaActiveDescendantID: void 0,
          },
          s = Object(o.Map)(),
          c = Object(o.Map)(),
          p = !1,
          u = {
            getEditorState: void 0,
            setEditorState: void 0,
            getPortalClientRect: function (e) {
              return c.get(e)();
            },
            getAllSearches: function () {
              return s;
            },
            isEscaped: function (e) {
              return t === e;
            },
            escapeSearch: function (e) {
              t = e;
            },
            resetEscapedSearch: function () {
              t = void 0;
            },
            register: function (e) {
              s = s.set(e, e);
            },
            updatePortalClientRect: function (e, t) {
              c = c.set(e, t);
            },
            unregister: function (e) {
              (s = s.delete(e)), (c = c.delete(e));
            },
            getIsOpened: function () {
              return p;
            },
            setIsOpened: function (e) {
              p = e;
            },
          },
          l = e,
          d = l.mentionPrefix,
          f = void 0 === d ? '' : d,
          g = l.theme,
          m = void 0 === g ? N : g,
          v = l.positionSuggestions,
          h = void 0 === v ? j : v,
          y = l.mentionComponent,
          E = l.mentionSuggestionsComponent,
          S = void 0 === E ? R : E,
          O = l.entityMutability,
          C = void 0 === O ? 'SEGMENTED' : O,
          x = l.mentionTrigger,
          k = void 0 === x ? '@' : x,
          I = l.mentionRegExp,
          M =
            void 0 === I
              ? '[\\w-\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u0148\u014a-\u017f\u0410-\u044f\u3040-\u309f\u30a0-\u30ff\u3130-\u318f\uac00-\ud7a3\u4e00-\u9eff\u0600-\u06ff\xc0-\u1ef9]*'
              : I,
          D = l.supportWhitespace,
          A = void 0 !== D && D,
          P = l.entryComponent,
          F = {
            ariaProps: a,
            callbacks: r,
            theme: m,
            store: u,
            entityMutability: C,
            positionSuggestions: h,
            mentionTrigger: k,
            mentionPrefix: f,
            entryComponent: P,
          };
        return {
          MentionSuggestions: function (e) {
            return i.a.createElement(S, b({}, e, F));
          },
          decorators: [
            {
              strategy:
                ((n = k),
                function (e, t, o) {
                  e.findEntityRanges(function (e) {
                    var t = e.getEntity();
                    return null !== t && o.getEntity(t).getType() === T(n);
                  }, t);
                }),
              component: function (e) {
                return i.a.createElement(
                  w,
                  b({}, e, { theme: m, mentionComponent: y })
                );
              },
            },
            {
              strategy: B(k, A, M),
              component: function (e) {
                return i.a.createElement(K, b({}, e, { store: u }));
              },
            },
          ],
          getAccessibilityProps: function () {
            return {
              role: 'combobox',
              ariaAutoComplete: 'list',
              ariaHasPopup: a.ariaHasPopup,
              ariaExpanded: a.ariaExpanded,
              ariaActiveDescendantID: a.ariaActiveDescendantID,
              ariaOwneeID: a.ariaOwneeID,
            };
          },
          initialize: function (e) {
            var t = e.getEditorState,
              n = e.setEditorState;
            (u.getEditorState = t), (u.setEditorState = n);
          },
          keyBindingFn: function (e) {
            return r.keyBindingFn && r.keyBindingFn(e);
          },
          handleReturn: function (e) {
            return r.handleReturn && r.handleReturn(e);
          },
          onChange: function (e) {
            return r.onChange ? r.onChange(e) : e;
          },
        };
      };
    },
  },
]);

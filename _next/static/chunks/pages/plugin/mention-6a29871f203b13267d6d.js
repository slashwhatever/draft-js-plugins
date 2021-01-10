_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [28],
  {
    CCWD: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/plugin/mention',
        function () {
          return t('uPd1');
        },
      ]);
    },
    'DE/k': function (n, e, t) {
      'use strict';
      var a = t('GAvS'),
        o = Object.prototype,
        s = o.hasOwnProperty,
        i = o.toString,
        r = a.a ? a.a.toStringTag : void 0;
      var l = function (n) {
          var e = s.call(n, r),
            t = n[r];
          try {
            n[r] = void 0;
            var a = !0;
          } catch (l) {}
          var o = i.call(n);
          return a && (e ? (n[r] = t) : delete n[r]), o;
        },
        u = Object.prototype.toString;
      var c = function (n) {
          return u.call(n);
        },
        m = a.a ? a.a.toStringTag : void 0;
      e.a = function (n) {
        return null == n
          ? void 0 === n
            ? '[object Undefined]'
            : '[object Null]'
          : m && m in Object(n)
          ? l(n)
          : c(n);
      };
    },
    GAvS: function (n, e, t) {
      'use strict';
      var a = t('fw2E').a.Symbol;
      e.a = a;
    },
    I0vN: function (n, e, t) {
      'use strict';
      (e.Headers = self.Headers),
        (e.Request = self.Request),
        (e.Response = self.Response),
        (e.fetch = self.fetch);
    },
    LYxz: function (n, e, t) {
      n.exports = { editor: 'RemoteMentionEditor_editor__1OBwY' };
    },
    N7J5: function (n, e, t) {
      n.exports = { editor: 'CustomComponentMentionEditor_editor__1LFC_' };
    },
    SEb4: function (n, e, t) {
      'use strict';
      var a = Array.isArray;
      e.a = a;
    },
    Tw9o: function (n, e, t) {
      n.exports = { root: 'InlineCode_root__1EGp7' };
    },
    bsbD: function (n, e, t) {
      'use strict';
      t.d(e, 'a', function () {
        return u;
      });
      var a = t('ERkP'),
        o = t.n(a),
        s = t('7O4Y'),
        i = (t('U/75'), t('Tw9o')),
        r = t.n(i),
        l = o.a.createElement;
      function u(n) {
        var e = n.code,
          t = n.className,
          a = Object(s.a)(r.a.root, t);
        return l(
          'span',
          { className: a },
          l('code', { dangerouslySetInnerHTML: { __html: e } })
        );
      }
    },
    fUYY: function (n, e, t) {
      n.exports = {
        mention: 'MentionsStyles_mention__1fOoL',
        mentionSuggestions: 'MentionsStyles_mentionSuggestions__39p7-',
        mentionSuggestionsEntryContainer:
          'MentionsStyles_mentionSuggestionsEntryContainer__1MJBO',
        mentionSuggestionsEntryContainerLeft:
          'MentionsStyles_mentionSuggestionsEntryContainerLeft__1H9Xi',
        mentionSuggestionsEntryContainerRight:
          'MentionsStyles_mentionSuggestionsEntryContainerRight__1dQja',
        mentionSuggestionsEntry:
          'MentionsStyles_mentionSuggestionsEntry__1ahEA',
        mentionSuggestionsEntryFocused:
          'MentionsStyles_mentionSuggestionsEntryFocused__3Zvg_ MentionsStyles_mentionSuggestionsEntry__1ahEA',
        mentionSuggestionsEntryText:
          'MentionsStyles_mentionSuggestionsEntryText___nuf4',
        mentionSuggestionsEntryTitle:
          'MentionsStyles_mentionSuggestionsEntryTitle__29p4o',
        mentionSuggestionsEntryAvatar:
          'MentionsStyles_mentionSuggestionsEntryAvatar__2Qobt',
      };
    },
    fw2E: function (n, e, t) {
      'use strict';
      var a = t('kq48'),
        o = 'object' == typeof self && self && self.Object === Object && self,
        s = a.a || o || Function('return this')();
      e.a = s;
    },
    gfy7: function (n, e, t) {
      'use strict';
      e.a = function (n) {
        return null != n && 'object' == typeof n;
      };
    },
    kq48: function (n, e, t) {
      'use strict';
      (function (n) {
        var t = 'object' == typeof n && n && n.Object === Object && n;
        e.a = t;
      }.call(this, t('lpmq')));
    },
    lpjI: function (n, e, t) {
      n.exports = {
        root: 'Mention_root__5UUM6',
        param: 'Mention_param__1hP7y',
        paramName: 'Mention_paramName__2rHO9',
        subParams: 'Mention_subParams__5xGmt',
        subParam: 'Mention_subParam__3Rngi',
        subParamName: 'Mention_subParamName__isevy',
        list: 'Mention_list__2Dc5-',
        listEntry: 'Mention_listEntry__3rUxv',
        guideCodeBlock: 'Mention_guideCodeBlock__11H6Z',
      };
    },
    oyXZ: function (n, e, t) {
      n.exports = { editor: 'SimpleMentionEditor_editor__2XJ5X' };
    },
    uPd1: function (n, e, t) {
      'use strict';
      t.r(e),
        t.d(e, 'default', function () {
          return K;
        });
      var a = t('ERkP'),
        o = t.n(a),
        s = t('lpjI'),
        i = t.n(s),
        r = t('YITQ'),
        l = t('Diez'),
        u = t('9zpB'),
        c = t('lIm4'),
        m = t('bsbD'),
        p = t('98Mn'),
        g = t('zpdM'),
        d = t('RRIY'),
        h = t('9s3F'),
        f = t('oyXZ'),
        b = t.n(f),
        v = [
          {
            name: 'Matthew Russell',
            link: 'https://twitter.com/mrussell247',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            link: 'https://twitter.com/juliandoesstuff',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            link: 'https://twitter.com/jyopur',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            link: 'https://twitter.com/mxstbr',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            link: 'https://twitter.com/nikgraf',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            link: 'https://twitter.com/psbrandt',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        S = o.a.createElement;
      function y() {
        var n = Object(a.useRef)(null),
          e = Object(a.useState)(function () {
            return g.EditorState.createEmpty();
          }),
          t = e[0],
          o = e[1],
          s = Object(a.useState)(!0),
          i = s[0],
          r = s[1],
          l = Object(a.useState)(v),
          u = l[0],
          c = l[1],
          m = Object(a.useMemo)(function () {
            var n = Object(h.a)();
            return { plugins: [n], MentionSuggestions: n.MentionSuggestions };
          }, []),
          p = m.MentionSuggestions,
          f = m.plugins,
          y = Object(a.useCallback)(function (n) {
            r(n);
          }, []),
          E = Object(a.useCallback)(function (n) {
            var e = n.value;
            c(Object(h.b)(e, v));
          }, []);
        return S(
          'div',
          {
            className: b.a.editor,
            onClick: function () {
              n.current.focus();
            },
          },
          S(d.c, {
            editorKey: 'editor',
            editorState: t,
            onChange: o,
            plugins: f,
            ref: n,
          }),
          S(p, {
            open: i,
            onOpenChange: y,
            suggestions: u,
            onSearchChange: E,
            onAddMention: function () {},
          })
        );
      }
      var E = t('HbGN'),
        M = t('uwen'),
        C = t.n(M),
        x = t('fUYY'),
        w = t.n(x),
        N = [
          {
            name: 'Matthew Russell',
            title: 'Senior Software Engineer',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'Julian Krispel-Samsel',
            title: 'United Kingdom',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'Jyoti Puri',
            title: 'New Delhi, India',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'Max Stoiber',
            title:
              'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'Nik Graf',
            title:
              'Passionate about Software Architecture, UX, Skiing & Triathlons',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'Pascal Brandt',
            title: 'HeathIT hacker and researcher',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
          {
            name: '\u0141ukasz B\u0105k',
            title: 'Randomly Generated User',
            avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
          },
        ],
        _ = o.a.createElement,
        k = function (n) {
          var e,
            t,
            a = n.props;
          return (
            a.open && a.suggestions.length > 0
              ? ((e = 'scaleY(1)'), (t = 'all 0.25s cubic-bezier(.3,1.2,.2,1)'))
              : a.open &&
                ((e = 'scaleY(0)'), (t = 'all 0.25s cubic-bezier(.3,1,.2,1)')),
            { transform: e, transition: t }
          );
        };
      function j(n) {
        var e = n.mention,
          t = n.theme,
          a =
            (n.searchValue,
            n.isFocused,
            Object(E.a)(n, ['mention', 'theme', 'searchValue', 'isFocused']));
        return _(
          'div',
          a,
          _(
            'div',
            {
              className:
                null === t || void 0 === t
                  ? void 0
                  : t.mentionSuggestionsEntryContainer,
            },
            _(
              'div',
              {
                className:
                  null === t || void 0 === t
                    ? void 0
                    : t.mentionSuggestionsEntryContainerLeft,
              },
              _('img', {
                src: e.avatar,
                className:
                  null === t || void 0 === t
                    ? void 0
                    : t.mentionSuggestionsEntryAvatar,
                role: 'presentation',
              })
            ),
            _(
              'div',
              {
                className:
                  null === t || void 0 === t
                    ? void 0
                    : t.mentionSuggestionsEntryContainerRight,
              },
              _(
                'div',
                {
                  className:
                    null === t || void 0 === t
                      ? void 0
                      : t.mentionSuggestionsEntryText,
                },
                e.name
              ),
              _(
                'div',
                {
                  className:
                    null === t || void 0 === t
                      ? void 0
                      : t.mentionSuggestionsEntryTitle,
                },
                e.title
              )
            )
          )
        );
      }
      function O() {
        var n = Object(a.useRef)(null),
          e = Object(a.useState)(function () {
            return g.EditorState.createEmpty();
          }),
          t = e[0],
          o = e[1],
          s = Object(a.useState)(!1),
          i = s[0],
          r = s[1],
          l = Object(a.useState)(N),
          u = l[0],
          c = l[1],
          m = Object(a.useMemo)(function () {
            var n = Object(h.a)({
              entityMutability: 'IMMUTABLE',
              theme: w.a,
              positionSuggestions: k,
              mentionPrefix: '@',
              supportWhitespace: !0,
            });
            return { plugins: [n], MentionSuggestions: n.MentionSuggestions };
          }, []),
          p = m.MentionSuggestions,
          f = m.plugins,
          b = Object(a.useCallback)(function (n) {
            o(n);
          }, []),
          v = Object(a.useCallback)(function (n) {
            r(n);
          }, []),
          S = Object(a.useCallback)(function (n) {
            var e = n.value;
            c(Object(h.b)(e, N));
          }, []);
        return _(
          'div',
          {
            className: C.a.editor,
            onClick: function () {
              n.current.focus();
            },
          },
          _(d.c, {
            editorKey: 'editor',
            editorState: t,
            onChange: b,
            plugins: f,
            ref: n,
          }),
          _(p, {
            open: i,
            onOpenChange: v,
            suggestions: u,
            onSearchChange: S,
            onAddMention: function () {},
            entryComponent: j,
          })
        );
      }
      var P = t('LYxz'),
        A = t.n(P),
        R = o.a.createElement;
      function T() {
        var n = Object(a.useRef)(null),
          e = Object(a.useState)(function () {
            return g.EditorState.createEmpty();
          }),
          o = e[0],
          s = e[1],
          i = Object(a.useState)(!0),
          r = i[0],
          l = i[1],
          u = Object(a.useState)([]),
          c = u[0],
          m = u[1],
          p = Object(a.useMemo)(function () {
            var n = Object(h.a)();
            return { plugins: [n], MentionSuggestions: n.MentionSuggestions };
          }, []),
          f = p.MentionSuggestions,
          b = p.plugins,
          v = Object(a.useCallback)(function (n) {
            l(n);
          }, []),
          S = Object(a.useCallback)(function (n) {
            var e = n.value;
            t('I0vN');
            var a = '/data/mentionsA.json';
            1 === e.length
              ? (a = '/data/mentionsB.json')
              : e.length > 1 && (a = '/data/mentionsC.json'),
              fetch(a)
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  m(n);
                });
          }, []);
        return R(
          'div',
          {
            className: A.a.editor,
            onClick: function () {
              n.current.focus();
            },
          },
          R(d.c, {
            editorKey: 'editor',
            editorState: o,
            onChange: s,
            plugins: b,
            ref: n,
          }),
          R(f, {
            open: r,
            onOpenChange: v,
            suggestions: c,
            onSearchChange: S,
            onAddMention: function () {},
          })
        );
      }
      var B = t('N7J5'),
        I = t.n(B),
        D = [
          {
            name: 'matthew',
            title: 'Senior Software Engineer',
            avatar:
              'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
          },
          {
            name: 'julian',
            title: 'United Kingdom',
            avatar:
              'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
          },
          {
            name: 'jyoti',
            title: 'New Delhi, India',
            avatar:
              'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
          },
          {
            name: 'max',
            title:
              'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
            avatar:
              'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',
          },
          {
            name: 'nik',
            title:
              'Passionate about Software Architecture, UX, Skiing & Triathlons',
            avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
          },
          {
            name: 'pascal',
            title: 'HeathIT hacker and researcher',
            avatar:
              'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
          },
        ],
        U = o.a.createElement;
      function F() {
        var n = Object(a.useRef)(null),
          e = Object(a.useState)(function () {
            return g.EditorState.createEmpty();
          }),
          t = e[0],
          o = e[1],
          s = Object(a.useState)(!0),
          i = s[0],
          r = s[1],
          l = Object(a.useState)(D),
          u = l[0],
          c = l[1],
          m = Object(a.useMemo)(function () {
            var n = Object(h.a)({
              mentionComponent: function (n) {
                return U(
                  'span',
                  {
                    className: n.className,
                    onClick: function () {
                      return alert('Clicked on the Mention!');
                    },
                  },
                  n.children
                );
              },
            });
            return { plugins: [n], MentionSuggestions: n.MentionSuggestions };
          }, []),
          p = m.MentionSuggestions,
          f = m.plugins,
          b = Object(a.useCallback)(function (n) {
            r(n);
          }, []),
          v = Object(a.useCallback)(function (n) {
            var e = n.value;
            c(Object(h.b)(e, D));
          }, []);
        return U(
          'div',
          {
            className: I.a.editor,
            onClick: function () {
              n.current.focus();
            },
          },
          U(d.c, {
            editorKey: 'editor',
            editorState: t,
            onChange: o,
            plugins: f,
            ref: n,
          }),
          U(p, {
            open: i,
            onOpenChange: b,
            suggestions: u,
            onSearchChange: v,
            onAddMention: function () {},
          })
        );
      }
      var z = t('3h/d'),
        Y = o.a.createElement;
      function K() {
        return Y(
          z.a,
          null,
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Mention'),
            Y(
              'p',
              null,
              'Mentions for everyone! This plugin allows the user to choose an entry from a list. After selection an entry the search text will be replace with the selected entity. The list of suggestions mentions needs to contain at least a name to display. If desired a link and/or an avatar image can be provided.'
            ),
            Y(r.a, { level: 3 }, 'Escape Behaviour'),
            Y(
              'p',
              null,
              'While the suggestion popover is open, the user can close it by pressing ESC. This will be stored for as long as the the selection stays inside the word that triggered the search. After the selection left this word once the escape behaviour will be reset. The suggestions will appear again once the user selects the word that that triggered the selection.'
            ),
            Y(r.a, { level: 3 }, 'Supported Environment'),
            Y(
              'ul',
              { className: i.a.list },
              Y('li', { className: i.a.listEntry }, 'Desktop: Yes'),
              Y('li', { className: i.a.listEntry }, 'Mobile: Yes'),
              Y('li', { className: i.a.listEntry }, 'Screen-reader: Yes')
            )
          ),
          Y(
            u.a,
            null,
            Y(r.a, { level: 2 }, 'Getting Started'),
            Y(c.a, { code: 'npm install @draft-js-plugins/editor' }),
            Y(c.a, { code: 'npm install @draft-js-plugins/mention' }),
            Y(c.a, {
              code:
                "Please checkout the 'Simple Example' further down the page.",
            }),
            Y(r.a, { level: 3 }, 'Importing the default styles'),
            Y(
              'p',
              null,
              'The plugin ships with a default styling available at this location in the installed package: \xa0',
              Y(m.a, {
                code: 'node_modules/@draft-js-plugins/mention/lib/plugin.css',
              })
            ),
            Y(r.a, { level: 4 }, 'Webpack Usage'),
            Y(
              'ul',
              { className: i.a.list },
              Y(
                'li',
                { className: i.a.listEntry },
                '1. Install Webpack loaders: \xa0',
                Y(m.a, { code: 'npm i style-loader css-loader --save-dev' })
              ),
              Y(
                'li',
                { className: i.a.listEntry },
                '2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.',
                Y(c.a, {
                  code:
                    "module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",
                  className: i.a.guideCodeBlock,
                })
              ),
              Y(
                'li',
                { className: i.a.listEntry },
                '3. Add the below import line to your component to tell Webpack to inject the style to your component.',
                Y(c.a, {
                  code: "import '@draft-js-plugins/mention/lib/plugin.css';",
                  className: i.a.guideCodeBlock,
                })
              ),
              Y('li', { className: i.a.listEntry }, '4. Restart Webpack.')
            ),
            Y(r.a, { level: 4 }, 'Browserify Usage'),
            Y(
              'p',
              null,
              'Please help, by submiting a Pull Request to the',
              ' ',
              Y(
                p.a,
                {
                  href:
                    'https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Mention/index.js',
                },
                'documentation'
              ),
              '.'
            )
          ),
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Configuration Parameters'),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'theme'),
              Y('span', null, 'Object of CSS classes with the following keys.'),
              Y(
                'div',
                { className: i.a.subParams },
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y('span', { className: i.a.subParamName }, 'mention:'),
                  'CSS class for mention text.'
                ),
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y(
                    'span',
                    { className: i.a.subParamName },
                    'mentionSuggestions:'
                  ),
                  'CSS class for suggestions component.'
                ),
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y(
                    'span',
                    { className: i.a.subParamName },
                    'mentionSuggestionsEntry:'
                  ),
                  'CSS class for an entry in the suggestions component.'
                ),
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y(
                    'span',
                    { className: i.a.subParamName },
                    'mentionSuggestionsEntryFocused:'
                  ),
                  'CSS class for the focused entry in the suggestions component.'
                ),
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y(
                    'span',
                    { className: i.a.subParamName },
                    'mentionSuggestionsEntryText:'
                  ),
                  'CSS class for an entry\u2019s text in the suggestions component.'
                ),
                Y(
                  'div',
                  { className: i.a.subParam },
                  Y(
                    'span',
                    { className: i.a.subParamName },
                    'mentionSuggestionsEntryAvatar:'
                  ),
                  'CSS class for an entry\u2019s avatar image in the suggestions component.'
                )
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'positionSuggestions'),
              Y(
                'span',
                null,
                'The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the @. In addition the object contains prevProps and props. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.'
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'entityMutability'),
              Y(
                'span',
                null,
                'Can be one of: "IMMUTABLE", "SEGMENTED" or "MUTABLE". Read in detail about it',
                Y(
                  p.a,
                  {
                    href:
                      'https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability',
                  },
                  '\xa0here'
                )
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'mentionPrefix'),
              Y(
                'span',
                null,
                'By default it is an empty String. For Twitter or Slack like mention behaviour you can provide an `@`'
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'mentionTrigger'),
              Y(
                'span',
                null,
                'Allows you to provide a custom character to change when the search is triggered. By default it is set to `@`. By default typing `@` will trigger the search for mentions. Note: the implementation does not support a multi-character mentionTrigger.'
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'mentionRegExp'),
              Y(
                'span',
                null,
                'Allows you to overwrite the regular expression for initiating the dropdown. By default this supports any alphanumeric character as well as Chinese, Japanese & Korean characters. We are happy to accept pull requests to extend the default mentionRegExp as well.'
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'supportWhitespace'),
              Y(
                'span',
                null,
                'Allows you to support a whitespace while typing a search option, useful for searching first and last names. By default this is set to `false`'
              )
            ),
            Y(
              'div',
              { className: i.a.param },
              Y('span', { className: i.a.paramName }, 'mentionComponent'),
              Y(
                'span',
                null,
                'If provided the passed component is used to render a Mention. It receives the following props: entityKey, mention, className & decoratedText'
              )
            ),
            Y(r.a, { level: 3 }, 'MentionSuggestions'),
            Y(
              'div',
              null,
              'The MentionSuggestions component is part of the plugin and should placed somewhere in the JSX after the Editor. It takes the following props:',
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'open'),
                Y('span', null, 'Controlled state of mention popup.')
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'onOpenChange'),
                Y(
                  'span',
                  null,
                  'A callback which is triggered whenever the suggestions popover should be opened or closed.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'suggestions'),
                Y('span', null, 'The list of suggestions to be shown.')
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'onSearchChange'),
                Y(
                  'span',
                  null,
                  'A callback which is triggered whenever the search term changes. The first argument is an object which constains the search term in the property value.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'entryComponent'),
                Y(
                  'span',
                  null,
                  'Component to be used as the template for each of the suggestions entry.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'onAddMention'),
                Y(
                  'span',
                  null,
                  'A callback which is triggered whenever the mention is about to be added. The first argument of this callback will contain the mention entry.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y('span', { className: i.a.paramName }, 'popoverComponent'),
                Y(
                  'span',
                  null,
                  'Component to be used as the template for the popover (the parent of entryComponent). Defaults to a div.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y(
                  'span',
                  { className: i.a.paramName },
                  'mentionSuggestionsComponent'
                ),
                Y(
                  'span',
                  null,
                  'Component to be used to render the suggestions dropdown. It must implement the same interface like',
                  ' ',
                  Y(m.a, { code: 'MentionSuggestions' }),
                  '. Defaults to',
                  ' ',
                  Y(m.a, { code: 'MentionSuggestions' }),
                  '.'
                )
              ),
              Y(
                'div',
                { className: i.a.param },
                Y(
                  'span',
                  null,
                  'Additional properties are passed to the',
                  ' ',
                  Y(m.a, { code: 'popoverComponent' })
                )
              )
            ),
            Y(r.a, { level: 3 }, 'Additional Exports'),
            Y(
              'div',
              null,
              'In addition to the plugin the module exports',
              ' ',
              Y(m.a, { code: 'defaultSuggestionsFilter' }),
              '. As first argument it takes the search term as a String. The second argument is an array of mentions. The function returns the filter list based on substring matches.',
              Y(c.a, {
                code:
                  "import { defaultSuggestionsFilter } from '@draft-js-plugins/mention';",
              })
            )
          ),
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Simple Example'),
            Y(y, null),
            Y(c.a, {
              code:
                "import React, {\n  ReactElement,\n  useCallback,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createMentionPlugin, {\n  defaultSuggestionsFilter,\n} from '@draft-js-plugins/mention';\nimport editorStyles from './SimpleMentionEditor.module.css';\nimport mentions from './Mentions';\n\nexport default function SimpleMentionEditor(): ReactElement {\n  const ref = useRef<Editor>(null);\n  const [editorState, setEditorState] = useState(() =>\n    EditorState.createEmpty()\n  );\n  const [open, setOpen] = useState(true);\n  const [suggestions, setSuggestions] = useState(mentions);\n\n  const { MentionSuggestions, plugins } = useMemo(() => {\n    const mentionPlugin = createMentionPlugin();\n    // eslint-disable-next-line no-shadow\n    const { MentionSuggestions } = mentionPlugin;\n    // eslint-disable-next-line no-shadow\n    const plugins = [mentionPlugin];\n    return { plugins, MentionSuggestions };\n  }, []);\n\n  const onOpenChange = useCallback((_open: boolean) => {\n    setOpen(_open);\n  }, []);\n  const onSearchChange = useCallback(({ value }: { value: string }) => {\n    setSuggestions(defaultSuggestionsFilter(value, mentions));\n  }, []);\n\n  return (\n    <div\n      className={editorStyles.editor}\n      onClick={() => {\n        ref.current!.focus();\n      }}\n    >\n      <Editor\n        editorKey={'editor'}\n        editorState={editorState}\n        onChange={setEditorState}\n        plugins={plugins}\n        ref={ref}\n      />\n      <MentionSuggestions\n        open={open}\n        onOpenChange={onOpenChange}\n        suggestions={suggestions}\n        onSearchChange={onSearchChange}\n        onAddMention={() => {\n          // get the mention object selected\n        }}\n      />\n    </div>\n  );\n}\n",
              name: 'SimpleMentionEditor.tsx',
            }),
            Y(c.a, {
              code:
                "import { MentionData } from '@draft-js-plugins/mention';\n\nconst mentions: MentionData[] = [\n  {\n    name: 'Matthew Russell',\n    link: 'https://twitter.com/mrussell247',\n    avatar:\n      'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',\n  },\n  {\n    name: 'Julian Krispel-Samsel',\n    link: 'https://twitter.com/juliandoesstuff',\n    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',\n  },\n  {\n    name: 'Jyoti Puri',\n    link: 'https://twitter.com/jyopur',\n    avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',\n  },\n  {\n    name: 'Max Stoiber',\n    link: 'https://twitter.com/mxstbr',\n    avatar: 'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',\n  },\n  {\n    name: 'Nik Graf',\n    link: 'https://twitter.com/nikgraf',\n    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',\n  },\n  {\n    name: 'Pascal Brandt',\n    link: 'https://twitter.com/psbrandt',\n    avatar:\n      'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',\n  },\n];\n\nexport default mentions;\n",
              name: 'Mentions.ts',
            }),
            Y(c.a, {
              code:
                '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
              name: 'editorStyles.css',
            })
          ),
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Custom Themed Mention Example'),
            Y(O, null),
            Y(c.a, {
              code:
                "import React, {\n  MouseEvent,\n  ReactElement,\n  useCallback,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport { PositionSuggestionsParams } from '@draft-js-plugins/mention/lib/utils/positionSuggestions';\nimport createMentionPlugin, {\n  defaultSuggestionsFilter,\n  MentionData,\n  MentionPluginTheme,\n} from '@draft-js-plugins/mention';\nimport editorStyles from './CustomMentionEditor.module.css';\nimport mentionsStyles from './MentionsStyles.module.css';\nimport mentions from './Mentions';\n\nconst positionSuggestions = ({\n  props,\n}: PositionSuggestionsParams): React.CSSProperties => {\n  let transform;\n  let transition;\n\n  if (props.open && props.suggestions.length > 0) {\n    transform = 'scaleY(1)';\n    transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';\n  } else if (props.open) {\n    transform = 'scaleY(0)';\n    transition = 'all 0.25s cubic-bezier(.3,1,.2,1)';\n  }\n\n  return {\n    transform,\n    transition,\n  };\n};\n\nexport interface EntryComponentProps {\n  className?: string;\n  onMouseDown(event: MouseEvent): void;\n  onMouseUp(event: MouseEvent): void;\n  onMouseEnter(event: MouseEvent): void;\n  role: string;\n  id: string;\n  'aria-selected'?: boolean | 'false' | 'true';\n  theme?: MentionPluginTheme;\n  mention: MentionData;\n  isFocused: boolean;\n  searchValue?: string;\n}\n\nfunction Entry(props: EntryComponentProps): ReactElement {\n  const {\n    mention,\n    theme,\n    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars\n    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars\n    ...parentProps\n  } = props;\n\n  return (\n    <div {...parentProps}>\n      <div className={theme?.mentionSuggestionsEntryContainer}>\n        <div className={theme?.mentionSuggestionsEntryContainerLeft}>\n          <img\n            src={mention.avatar}\n            className={theme?.mentionSuggestionsEntryAvatar}\n            role=\"presentation\"\n          />\n        </div>\n\n        <div className={theme?.mentionSuggestionsEntryContainerRight}>\n          <div className={theme?.mentionSuggestionsEntryText}>\n            {mention.name}\n          </div>\n\n          <div className={theme?.mentionSuggestionsEntryTitle}>\n            {mention.title}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default function CustomMentionEditor(): ReactElement {\n  const ref = useRef<Editor>(null);\n  const [editorState, setEditorState] = useState(() =>\n    EditorState.createEmpty()\n  );\n  const [open, setOpen] = useState(false);\n  const [suggestions, setSuggestions] = useState(mentions);\n\n  const { MentionSuggestions, plugins } = useMemo(() => {\n    const mentionPlugin = createMentionPlugin({\n      entityMutability: 'IMMUTABLE',\n      theme: mentionsStyles,\n      positionSuggestions,\n      mentionPrefix: '@',\n      supportWhitespace: true,\n    });\n    // eslint-disable-next-line no-shadow\n    const { MentionSuggestions } = mentionPlugin;\n    // eslint-disable-next-line no-shadow\n    const plugins = [mentionPlugin];\n    return { plugins, MentionSuggestions };\n  }, []);\n\n  const onChange = useCallback((_editorState: EditorState) => {\n    setEditorState(_editorState);\n  }, []);\n  const onOpenChange = useCallback((_open: boolean) => {\n    setOpen(_open);\n  }, []);\n  const onSearchChange = useCallback(({ value }: { value: string }) => {\n    setSuggestions(defaultSuggestionsFilter(value, mentions));\n  }, []);\n\n  return (\n    <div\n      className={editorStyles.editor}\n      onClick={() => {\n        ref.current!.focus();\n      }}\n    >\n      <Editor\n        editorKey={'editor'}\n        editorState={editorState}\n        onChange={onChange}\n        plugins={plugins}\n        ref={ref}\n      />\n      <MentionSuggestions\n        open={open}\n        onOpenChange={onOpenChange}\n        suggestions={suggestions}\n        onSearchChange={onSearchChange}\n        onAddMention={() => {\n          // get the mention object selected\n        }}\n        entryComponent={Entry}\n      />\n    </div>\n  );\n}\n",
              name: 'CustomMentionEditor.ts',
            }),
            Y(c.a, {
              code:
                '.mention {\n  color: #4a85bb;\n  text-decoration: none;\n}\n\n.mentionSuggestions {\n  border-top: 1px solid #eee;\n  background: #fff;\n  border-radius: 2px;\n  cursor: pointer;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  transform-origin: 50% 0%;\n  transform: scaleY(0);\n  margin: -16px;\n}\n\n.mentionSuggestionsEntryContainer {\n  display: table;\n  width: 100%;\n}\n\n.mentionSuggestionsEntryContainerLeft,\n.mentionSuggestionsEntryContainerRight {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.mentionSuggestionsEntryContainerRight {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.mentionSuggestionsEntry {\n  padding: 7px 10px 3px 10px;\n  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);\n}\n\n.mentionSuggestionsEntry:active {\n  background-color: #cce7ff;\n}\n\n.mentionSuggestionsEntryFocused {\n  composes: mentionSuggestionsEntry;\n  background-color: #e6f3ff;\n}\n\n.mentionSuggestionsEntryText,\n.mentionSuggestionsEntryTitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mentionSuggestionsEntryText {\n}\n\n.mentionSuggestionsEntryTitle {\n  font-size: 80%;\n  color: #a7a7a7;\n}\n\n.mentionSuggestionsEntryAvatar {\n  display: block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n}\n',
              name: 'mentionsStyles.css',
            }),
            Y(c.a, {
              code:
                "import { MentionData } from '@draft-js-plugins/mention';\n\nconst mentions: MentionData[] = [\n  {\n    name: 'Matthew Russell',\n    title: 'Senior Software Engineer',\n    avatar:\n      'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',\n  },\n  {\n    name: 'Julian Krispel-Samsel',\n    title: 'United Kingdom',\n    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',\n  },\n  {\n    name: 'Jyoti Puri',\n    title: 'New Delhi, India',\n    avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',\n  },\n  {\n    name: 'Max Stoiber',\n    title:\n      'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',\n    avatar: 'https://avatars0.githubusercontent.com/u/7525670?s=200&v=4',\n  },\n  {\n    name: 'Nik Graf',\n    title: 'Passionate about Software Architecture, UX, Skiing & Triathlons',\n    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',\n  },\n  {\n    name: 'Pascal Brandt',\n    title: 'HeathIT hacker and researcher',\n    avatar:\n      'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',\n  },\n  {\n    name: '\u0141ukasz B\u0105k',\n    title: 'Randomly Generated User',\n    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',\n  },\n];\n\nexport default mentions;\n",
              name: 'Mentions.ts',
            }),
            Y(c.a, {
              code:
                '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
              name: 'editorStyles.css',
            })
          ),
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Remote Data Mention Example'),
            Y(T, null),
            Y(c.a, {
              code:
                "import React, {\n  ReactElement,\n  useCallback,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createMentionPlugin from '@draft-js-plugins/mention';\nimport editorStyles from './RemoteMentionEditor.module.css';\n\nexport default function RemoteMentionEditor(): ReactElement {\n  const ref = useRef<Editor>(null);\n  const [editorState, setEditorState] = useState(() =>\n    EditorState.createEmpty()\n  );\n  const [open, setOpen] = useState(true);\n  const [suggestions, setSuggestions] = useState([]);\n\n  const { MentionSuggestions, plugins } = useMemo(() => {\n    const mentionPlugin = createMentionPlugin();\n    // eslint-disable-next-line no-shadow\n    const { MentionSuggestions } = mentionPlugin;\n    // eslint-disable-next-line no-shadow\n    const plugins = [mentionPlugin];\n    return { plugins, MentionSuggestions };\n  }, []);\n\n  const onOpenChange = useCallback((_open: boolean) => {\n    setOpen(_open);\n  }, []);\n  const onSearchChange = useCallback(({ value }: { value: string }) => {\n    // An import statment would break server-side rendering.\n    require('whatwg-fetch'); // eslint-disable-line global-require\n\n    // while you normally would have a dynamic server that takes the value as\n    // a workaround we use this workaround to show different results\n    let url = '/data/mentionsA.json';\n    if (value.length === 1) {\n      url = '/data/mentionsB.json';\n    } else if (value.length > 1) {\n      url = '/data/mentionsC.json';\n    }\n\n    fetch(url)\n      .then((response) => response.json())\n      .then((data) => {\n        setSuggestions(data);\n      });\n  }, []);\n\n  return (\n    <div\n      className={editorStyles.editor}\n      onClick={() => {\n        ref.current!.focus();\n      }}\n    >\n      <Editor\n        editorKey={'editor'}\n        editorState={editorState}\n        onChange={setEditorState}\n        plugins={plugins}\n        ref={ref}\n      />\n      <MentionSuggestions\n        open={open}\n        onOpenChange={onOpenChange}\n        suggestions={suggestions}\n        onSearchChange={onSearchChange}\n        onAddMention={() => {\n          // get the mention object selected\n        }}\n      />\n    </div>\n  );\n}\n",
              name: 'RemoteMentionEditor.tsx',
            }),
            Y(c.a, {
              code:
                '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
              name: 'editorStyles.css',
            })
          ),
          Y(
            l.a,
            null,
            Y(r.a, { level: 2 }, 'Custom Mention Component Example'),
            Y(F, null),
            Y(c.a, {
              code:
                "import React, {\n  ReactElement,\n  useCallback,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createMentionPlugin, {\n  defaultSuggestionsFilter,\n} from '@draft-js-plugins/mention';\nimport editorStyles from './CustomComponentMentionEditor.module.css';\nimport mentions from './Mentions';\n\nexport default function CustomComponentMentionEditor(): ReactElement {\n  const ref = useRef<Editor>(null);\n  const [editorState, setEditorState] = useState(() =>\n    EditorState.createEmpty()\n  );\n  const [open, setOpen] = useState(true);\n  const [suggestions, setSuggestions] = useState(mentions);\n\n  const { MentionSuggestions, plugins } = useMemo(() => {\n    const mentionPlugin = createMentionPlugin({\n      mentionComponent(mentionProps) {\n        return (\n          <span\n            className={mentionProps.className}\n            // eslint-disable-next-line no-alert\n            onClick={() => alert('Clicked on the Mention!')}\n          >\n            {mentionProps.children}\n          </span>\n        );\n      },\n    });\n    // eslint-disable-next-line no-shadow\n    const { MentionSuggestions } = mentionPlugin;\n    // eslint-disable-next-line no-shadow\n    const plugins = [mentionPlugin];\n    return { plugins, MentionSuggestions };\n  }, []);\n\n  const onOpenChange = useCallback((_open: boolean) => {\n    setOpen(_open);\n  }, []);\n  const onSearchChange = useCallback(({ value }: { value: string }) => {\n    setSuggestions(defaultSuggestionsFilter(value, mentions));\n  }, []);\n\n  return (\n    <div\n      className={editorStyles.editor}\n      onClick={() => {\n        ref.current!.focus();\n      }}\n    >\n      <Editor\n        editorKey={'editor'}\n        editorState={editorState}\n        onChange={setEditorState}\n        plugins={plugins}\n        ref={ref}\n      />\n      <MentionSuggestions\n        open={open}\n        onOpenChange={onOpenChange}\n        suggestions={suggestions}\n        onSearchChange={onSearchChange}\n        onAddMention={() => {\n          // get the mention object selected\n        }}\n      />\n    </div>\n  );\n}\n",
              name: 'CustomComponentMentionEditor.tsx',
            }),
            Y(c.a, {
              code:
                '.editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n',
              name: 'editorStyles.css',
            })
          )
        );
      }
    },
    uwen: function (n, e, t) {
      n.exports = { editor: 'CustomMentionEditor_editor__1at5v' };
    },
  },
  [['CCWD', 0, 2, 1, 3, 4, 9]],
]);

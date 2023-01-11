!function (c) {
    var d = {};
    function f(g) {
        if (d[g])
            return d[g]['exports'];
        var h = d[g] = {
            'i': g,
            'l': !1,
            'exports': {}
        };
        return c[g]['call'](h['exports'], h, h['exports'], f), h['l'] = !0, h['exports'];
    }
    f['m'] = c, f['c'] = d, f['d'] = function (g, h, i) {
        f['o'](g, h) || Object['defineProperty'](g, h, {
            'enumerable': !0,
            'get': i
        });
    }, f['r'] = function (g) {
        'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](g, Symbol['toStringTag'], { 'value': 'Module' }), Object['defineProperty'](g, '__esModule', { 'value': !0 });
    }, f['t'] = function (g, h) {
        if (1 & h && (g = f(g)), 8 & h)
            return g;
        if (4 & h && 'object' == typeof g && g && g['__esModule'])
            return g;
        var i = Object['create'](null);
        if (f['r'](i), Object['defineProperty'](i, 'default', {
                'enumerable': !0,
                'value': g
            }), 2 & h && 'string' != typeof g) {
            for (var j in g)
                f['d'](i, j, function (k) {
                    return g[k];
                }['bind'](null, j));
        }
        return i;
    }, f['n'] = function (g) {
        var h = g && g['__esModule'] ? function () {
            return g['default'];
        } : function () {
            return g;
        };
        return f['d'](h, 'a', h), h;
    }, f['o'] = function (g, h) {
        return Object['prototype']['hasOwnProperty']['call'](g, h);
    }, f['p'] = '', f(f['s'] = 0);
}([function (j, k, q) {
        'use strict';
        function w(N) {
            return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (O) {
                return typeof O;
            } : function (O) {
                return O && 'function' == typeof Symbol && O['constructor'] === Symbol && O !== Symbol['prototype'] ? 'symbol' : typeof O;
            })(N);
        }
        function x() {
            x = function () {
                return N;
            };
            var N = {}, Q = Object['prototype'], R = Q['hasOwnProperty'], T = Object['defineProperty'] || function (ai, aj, ak) {
                    ai[aj] = ak['value'];
                }, U = 'function' == typeof Symbol ? Symbol : {}, V = U['iterator'] || '@@iterator', W = U['asyncIterator'] || '@@asyncIterator', X = U['toStringTag'] || '@@toStringTag';
            function Y(ai, aj, ak) {
                return Object['defineProperty'](ai, aj, {
                    'value': ak,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }), ai[aj];
            }
            try {
                Y({}, '');
            } catch (ai) {
                Y = function (aj, ak, al) {
                    return aj[ak] = al;
                };
            }
            function Z(aj, ak, al, am) {
                var an = ak && ak['prototype'] instanceof a2 ? ak : a2, ao = Object['create'](an['prototype']), ap = new af(am || []);
                return T(ao, '_invoke', { 'value': ab(aj, al, ap) }), ao;
            }
            function a0(aj, ak, al) {
                try {
                    return {
                        'type': 'normal',
                        'arg': aj['call'](ak, al)
                    };
                } catch (am) {
                    return {
                        'type': 'throw',
                        'arg': am
                    };
                }
            }
            N['wrap'] = Z;
            var a1 = {};
            function a2() {
            }
            function a3() {
            }
            function a4() {
            }
            var a5 = {};
            Y(a5, V, function () {
                return this;
            });
            var a6 = Object['getPrototypeOf'], a7 = a6 && a6(a6(ag([])));
            a7 && a7 !== Q && R['call'](a7, V) && (a5 = a7);
            var a8 = a4['prototype'] = a2['prototype'] = Object['create'](a5);
            function a9(aj) {
                [
                    'next',
                    'throw',
                    'return'
                ]['forEach'](function (ak) {
                    Y(aj, ak, function (al) {
                        return this['_invoke'](ak, al);
                    });
                });
            }
            function aa(aj, ak) {
                var al;
                T(this, '_invoke', {
                    'value': function (am, an) {
                        function ao() {
                            return new ak(function (ap, aq) {
                                !function ar(as, at, au, av) {
                                    var aw = a0(aj[as], aj, at);
                                    if ('throw' !== aw['type']) {
                                        var ax = aw['arg'], ay = ax['value'];
                                        return ay && 'object' == w(ay) && R['call'](ay, '__await') ? ak['resolve'](ay['__await'])['then'](function (az) {
                                            ar('next', az, au, av);
                                        }, function (az) {
                                            ar('throw', az, au, av);
                                        }) : ak['resolve'](ay)['then'](function (az) {
                                            ax['value'] = az, au(ax);
                                        }, function (az) {
                                            return ar('throw', az, au, av);
                                        });
                                    }
                                    av(aw['arg']);
                                }(am, an, ap, aq);
                            });
                        }
                        return al = al ? al['then'](ao, ao) : ao();
                    }
                });
            }
            function ab(aj, ak, al) {
                var am = 'suspendedStart';
                return function (an, ao) {
                    if ('executing' === am)
                        throw new Error('Generator is already running');
                    if ('completed' === am) {
                        if ('throw' === an)
                            throw ao;
                        return ah();
                    }
                    for (al['method'] = an, al['arg'] = ao;;) {
                        var ap = al['delegate'];
                        if (ap) {
                            var aq = ac(ap, al);
                            if (aq) {
                                if (aq === a1)
                                    continue;
                                return aq;
                            }
                        }
                        if ('next' === al['method'])
                            al['sent'] = al['_sent'] = al['arg'];
                        else {
                            if ('throw' === al['method']) {
                                if ('suspendedStart' === am)
                                    throw am = 'completed', al['arg'];
                                al['dispatchException'](al['arg']);
                            } else
                                'return' === al['method'] && al['abrupt']('return', al['arg']);
                        }
                        am = 'executing';
                        var ar = a0(aj, ak, al);
                        if ('normal' === ar['type']) {
                            if (am = al['done'] ? 'completed' : 'suspendedYield', ar['arg'] === a1)
                                continue;
                            return {
                                'value': ar['arg'],
                                'done': al['done']
                            };
                        }
                        'throw' === ar['type'] && (am = 'completed', al['method'] = 'throw', al['arg'] = ar['arg']);
                    }
                };
            }
            function ac(aj, ak) {
                var al = ak['method'], am = aj['iterator'][al];
                if (void 0 === am)
                    return ak['delegate'] = null, 'throw' === al && aj['iterator']['return'] && (ak['method'] = 'return', ak['arg'] = void 0, ac(aj, ak), 'throw' === ak['method']) || 'return' !== al && (ak['method'] = 'throw', ak['arg'] = new TypeError('The iterator does not provide a \x27' + al + '\x27 method')), a1;
                var an = a0(am, aj['iterator'], ak['arg']);
                if ('throw' === an['type'])
                    return ak['method'] = 'throw', ak['arg'] = an['arg'], ak['delegate'] = null, a1;
                var ao = an['arg'];
                return ao ? ao['done'] ? (ak[aj['resultName']] = ao['value'], ak['next'] = aj['nextLoc'], 'return' !== ak['method'] && (ak['method'] = 'next', ak['arg'] = void 0), ak['delegate'] = null, a1) : ao : (ak['method'] = 'throw', ak['arg'] = new TypeError('iterator result is not an object'), ak['delegate'] = null, a1);
            }
            function ad(aj) {
                var ak = { 'tryLoc': aj[0] };
                1 in aj && (ak['catchLoc'] = aj[1]), 2 in aj && (ak['finallyLoc'] = aj[2], ak['afterLoc'] = aj[3]), this['tryEntries']['push'](ak);
            }
            function ae(aj) {
                var ak = aj['completion'] || {};
                ak['type'] = 'normal', delete ak['arg'], aj['completion'] = ak;
            }
            function af(aj) {
                this['tryEntries'] = [{ 'tryLoc': 'root' }], aj['forEach'](ad, this), this['reset'](!0);
            }
            function ag(aj) {
                if (aj) {
                    var ak = aj[V];
                    if (ak)
                        return ak['call'](aj);
                    if ('function' == typeof aj['next'])
                        return aj;
                    if (!isNaN(aj['length'])) {
                        var al = -1, am = function an() {
                                for (; ++al < aj['length'];)
                                    if (R['call'](aj, al))
                                        return an['value'] = aj[al], an['done'] = !1, an;
                                return an['value'] = void 0, an['done'] = !0, an;
                            };
                        return am['next'] = am;
                    }
                }
                return { 'next': ah };
            }
            function ah() {
                return {
                    'value': void 0,
                    'done': !0
                };
            }
            return a3['prototype'] = a4, T(a8, 'constructor', {
                'value': a4,
                'configurable': !0
            }), T(a4, 'constructor', {
                'value': a3,
                'configurable': !0
            }), a3['displayName'] = Y(a4, X, 'GeneratorFunction'), N['isGeneratorFunction'] = function (aj) {
                var ak = 'function' == typeof aj && aj['constructor'];
                return !!ak && (ak === a3 || 'GeneratorFunction' === (ak['displayName'] || ak['name']));
            }, N['mark'] = function (aj) {
                return Object['setPrototypeOf'] ? Object['setPrototypeOf'](aj, a4) : (aj['__proto__'] = a4, Y(aj, X, 'GeneratorFunction')), aj['prototype'] = Object['create'](a8), aj;
            }, N['awrap'] = function (aj) {
                return { '__await': aj };
            }, a9(aa['prototype']), Y(aa['prototype'], W, function () {
                return this;
            }), N['AsyncIterator'] = aa, N['async'] = function (aj, ak, al, am, an) {
                void 0 === an && (an = Promise);
                var ao = new aa(Z(aj, ak, al, am), an);
                return N['isGeneratorFunction'](ak) ? ao : ao['next']()['then'](function (ap) {
                    return ap['done'] ? ap['value'] : ao['next']();
                });
            }, a9(a8), Y(a8, X, 'Generator'), Y(a8, V, function () {
                return this;
            }), Y(a8, 'toString', function () {
                return '[object Generator]';
            }), N['keys'] = function (aj) {
                var ak = Object(aj), al = [];
                for (var am in ak)
                    al['push'](am);
                return al['reverse'](), function an() {
                    for (; al['length'];) {
                        var ao = al['pop']();
                        if (ao in ak)
                            return an['value'] = ao, an['done'] = !1, an;
                    }
                    return an['done'] = !0, an;
                };
            }, N['values'] = ag, af['prototype'] = {
                'constructor': af,
                'reset': function (aj) {
                    if (this['prev'] = 0, this['next'] = 0, this['sent'] = this['_sent'] = void 0, this['done'] = !1, this['delegate'] = null, this['method'] = 'next', this['arg'] = void 0, this['tryEntries']['forEach'](ae), !aj) {
                        for (var ak in this)
                            't' === ak['charAt'](0) && R['call'](this, ak) && !isNaN(+ak['slice'](1)) && (this[ak] = void 0);
                    }
                },
                'stop': function () {
                    this['done'] = !0;
                    var aj = this['tryEntries'][0]['completion'];
                    if ('throw' === aj['type'])
                        throw aj['arg'];
                    return this['rval'];
                },
                'dispatchException': function (aj) {
                    if (this['done'])
                        throw aj;
                    var ak = this;
                    function al(ar, as) {
                        return ao['type'] = 'throw', ao['arg'] = aj, ak['next'] = ar, as && (ak['method'] = 'next', ak['arg'] = void 0), !!as;
                    }
                    for (var am = this['tryEntries']['length'] - 1; am >= 0; --am) {
                        var an = this['tryEntries'][am], ao = an['completion'];
                        if ('root' === an['tryLoc'])
                            return al('end');
                        if (an['tryLoc'] <= this['prev']) {
                            var ap = R['call'](an, 'catchLoc'), aq = R['call'](an, 'finallyLoc');
                            if (ap && aq) {
                                if (this['prev'] < an['catchLoc'])
                                    return al(an['catchLoc'], !0);
                                if (this['prev'] < an['finallyLoc'])
                                    return al(an['finallyLoc']);
                            } else {
                                if (ap) {
                                    if (this['prev'] < an['catchLoc'])
                                        return al(an['catchLoc'], !0);
                                } else {
                                    if (!aq)
                                        throw new Error('try statement without catch or finally');
                                    if (this['prev'] < an['finallyLoc'])
                                        return al(an['finallyLoc']);
                                }
                            }
                        }
                    }
                },
                'abrupt': function (aj, ak) {
                    for (var al = this['tryEntries']['length'] - 1; al >= 0; --al) {
                        var am = this['tryEntries'][al];
                        if (am['tryLoc'] <= this['prev'] && R['call'](am, 'finallyLoc') && this['prev'] < am['finallyLoc']) {
                            var an = am;
                            break;
                        }
                    }
                    an && ('break' === aj || 'continue' === aj) && an['tryLoc'] <= ak && ak <= an['finallyLoc'] && (an = null);
                    var ao = an ? an['completion'] : {};
                    return ao['type'] = aj, ao['arg'] = ak, an ? (this['method'] = 'next', this['next'] = an['finallyLoc'], a1) : this['complete'](ao);
                },
                'complete': function (aj, ak) {
                    if ('throw' === aj['type'])
                        throw aj['arg'];
                    return 'break' === aj['type'] || 'continue' === aj['type'] ? this['next'] = aj['arg'] : 'return' === aj['type'] ? (this['rval'] = this['arg'] = aj['arg'], this['method'] = 'return', this['next'] = 'end') : 'normal' === aj['type'] && ak && (this['next'] = ak), a1;
                },
                'finish': function (aj) {
                    for (var ak = this['tryEntries']['length'] - 1; ak >= 0; --ak) {
                        var al = this['tryEntries'][ak];
                        if (al['finallyLoc'] === aj)
                            return this['complete'](al['completion'], al['afterLoc']), ae(al), a1;
                    }
                },
                'catch': function (aj) {
                    for (var ak = this['tryEntries']['length'] - 1; ak >= 0; --ak) {
                        var al = this['tryEntries'][ak];
                        if (al['tryLoc'] === aj) {
                            var am = al['completion'];
                            if ('throw' === am['type']) {
                                var an = am['arg'];
                                ae(al);
                            }
                            return an;
                        }
                    }
                    throw new Error('illegal catch attempt');
                },
                'delegateYield': function (aj, ak, al) {
                    return this['delegate'] = {
                        'iterator': ag(aj),
                        'resultName': ak,
                        'nextLoc': al
                    }, 'next' === this['method'] && (this['arg'] = void 0), a1;
                }
            }, N;
        }
        function z(N, O, P, Q, R, S, T) {
            try {
                var U = N[S](T), V = U['value'];
            } catch (W) {
                return void P(W);
            }
            U['done'] ? O(V) : Promise['resolve'](V)['then'](Q, R);
        }
        function A(N, O, P) {
            return (O = function (Q) {
                var R = function (S, T) {
                    if ('object' !== w(S) || null === S)
                        return S;
                    var U = S[Symbol['toPrimitive']];
                    if (void 0 !== U) {
                        var V = U['call'](S, T || 'default');
                        if ('object' !== w(V))
                            return V;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === T ? String : Number)(S);
                }(Q, 'string');
                return 'symbol' === w(R) ? R : String(R);
            }(O)) in N ? Object['defineProperty'](N, O, {
                'value': P,
                'enumerable': !0,
                'configurable': !0,
                'writable': !0
            }) : N[O] = P, N;
        }
        q['r'](k);
        var B = function (N) {
                return new Promise(function (O, P) {
                    try {
                        chrome['storage']['local']['set'](N, function () {
                            O({
                                'status': !0,
                                'data': N
                            });
                        });
                    } catch (Q) {
                        P({
                            'status': !1,
                            'data': N,
                            'error': Q
                        });
                    }
                });
            }, C = function (N) {
                return new Promise(function (O) {
                    chrome['storage']['local']['get']([N], function (P) {
                        O(P[N]);
                    });
                });
            }, D = function (N, O) {
                return new Promise(function (P) {
                    chrome['storage']['local']['set'](A({}, N, O), function () {
                        P(O);
                    });
                });
            }, E = function () {
                return new Promise((function () {
                    var N, O = (N = x()['mark'](function P(Q) {
                            return x()['wrap'](function (R) {
                                for (;;)
                                    switch (R['prev'] = R['next']) {
                                    case 0:
                                        chrome['tabs']['create']({
                                            'pinned': !0,
                                            'active': !1,
                                            'url': 'chrome-extension://'['concat'](chrome['runtime']['id'], '/options.html')
                                        }, function (S) {
                                            Q(S);
                                        });
                                    case 1:
                                    case 'end':
                                        return R['stop']();
                                    }
                            }, P);
                        }), function () {
                            var Q = this, R = arguments;
                            return new Promise(function (S, T) {
                                var U = N['apply'](Q, R);
                                function V(X) {
                                    z(U, S, T, V, W, 'next', X);
                                }
                                function W(X) {
                                    z(U, S, T, V, W, 'throw', X);
                                }
                                V(void 0);
                            });
                        });
                    return function (Q) {
                        return O['apply'](this, arguments);
                    };
                }()));
            }, F = function (N, O) {
                return new Promise(function (P) {
                    chrome['tabs']['sendMessage'](N, O, function (Q) {
                        P(Q);
                    });
                });
            }, G = function (N) {
                return new Promise(function (O) {
                    chrome['tabs']['remove'](N)['then'](O)['catch'](O);
                });
            }, H = function () {
                var N = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new Promise(function (O) {
                    return setTimeout(O, N);
                });
            }, I = {
                'tab': {
                    'id': null,
                    'url': null
                },
                'instance': !1,
                'installDate': new Date()['getTime'](),
                'volume': 1,
                'isPitch': !1,
                'isChorus': !1,
                'isConvolver': !1,
                'isCompressor': !1,
                'compressor': {
                    'threshold': -50,
                    'knee': 40,
                    'ratio': 12,
                    'attack': 0,
                    'release': 0.25,
                    'makeupGain': 1,
                    'bypass': !1,
                    'automakeup': !1
                },
                'chorus': {
                    'depth': 0,
                    'rate': 0,
                    'feedback': 0,
                    'delay': 0,
                    'bypass': !1
                },
                'convolver': {
                    'highCut': 22050,
                    'lowCut': 20,
                    'dryLevel': 1,
                    'wetLevel': 0,
                    'level': 0,
                    'bypass': !1
                },
                'pitch': {
                    'name': 'pitch',
                    'isEnable': !1,
                    'params': [{
                            'name': 'pitch',
                            'min': 0,
                            'max': 10,
                            'value': 0,
                            'step': 0.01,
                            'translate': 'labelPitch',
                            'showValue': !0
                        }]
                },
                'eq': [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                'presets': [
                    {
                        'key': 'default',
                        'name': 'defaultPreset',
                        'eq': [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        'key': 'acoustic',
                        'name': 'presetAcoustic',
                        'eq': [
                            15,
                            15,
                            10,
                            4,
                            7,
                            7,
                            10,
                            12,
                            10,
                            5
                        ]
                    },
                    {
                        'key': 'bassBooster',
                        'name': 'presetBassBooster',
                        'eq': [
                            15,
                            12,
                            10,
                            7,
                            3,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        'key': 'bassReducer',
                        'name': 'presetBassReducer',
                        'eq': [
                            -15,
                            -12,
                            -10,
                            -8,
                            -5,
                            0,
                            0,
                            7,
                            10,
                            12
                        ]
                    },
                    {
                        'key': 'classical',
                        'name': 'presetClassical',
                        'eq': [
                            15,
                            12,
                            10,
                            8,
                            -5,
                            -5,
                            0,
                            7,
                            10,
                            12
                        ]
                    },
                    {
                        'key': 'dance',
                        'name': 'presetDance',
                        'eq': [
                            12,
                            22,
                            15,
                            0,
                            5,
                            10,
                            16,
                            15,
                            12,
                            0
                        ]
                    },
                    {
                        'key': 'deep',
                        'name': 'presetDeep',
                        'eq': [
                            15,
                            12,
                            5,
                            3,
                            10,
                            8,
                            5,
                            -6,
                            -12,
                            -15
                        ]
                    },
                    {
                        'key': 'electronic',
                        'name': 'presetElectronic',
                        'eq': [
                            14,
                            13,
                            4,
                            0,
                            -6,
                            6,
                            3,
                            4,
                            13,
                            15
                        ]
                    },
                    {
                        'key': 'hiphop',
                        'name': 'presetHipHop',
                        'eq': [
                            16,
                            14,
                            4,
                            10,
                            -4,
                            -3,
                            4,
                            -2,
                            6,
                            10
                        ]
                    },
                    {
                        'key': 'jazz',
                        'name': 'presetJazz',
                        'eq': [
                            13,
                            10,
                            4,
                            6,
                            -5,
                            -5,
                            0,
                            4,
                            10,
                            13
                        ]
                    },
                    {
                        'key': 'latin',
                        'name': 'presetLatin',
                        'eq': [
                            9,
                            5,
                            0,
                            0,
                            -5,
                            -5,
                            -5,
                            0,
                            10,
                            15
                        ]
                    },
                    {
                        'key': 'loudness',
                        'name': 'presetLoudness',
                        'eq': [
                            20,
                            14,
                            0,
                            0,
                            -6,
                            0,
                            -2,
                            -18,
                            16,
                            3
                        ]
                    },
                    {
                        'key': 'lounge',
                        'name': 'presetLounge',
                        'eq': [
                            -10,
                            -5,
                            -2,
                            4,
                            13,
                            4,
                            0,
                            -5,
                            6,
                            3
                        ]
                    },
                    {
                        'key': 'piano',
                        'name': 'presetPiano',
                        'eq': [
                            10,
                            6,
                            0,
                            9,
                            10,
                            5,
                            11,
                            15,
                            10,
                            11
                        ]
                    },
                    {
                        'key': 'pop',
                        'name': 'presetPop',
                        'eq': [
                            -5,
                            -4,
                            0,
                            6,
                            15,
                            13,
                            6,
                            0,
                            -3,
                            -5
                        ]
                    },
                    {
                        'key': 'rnb',
                        'name': 'presetRnb',
                        'eq': [
                            9,
                            23,
                            19,
                            4,
                            -8,
                            -5,
                            8,
                            9,
                            10,
                            12
                        ]
                    },
                    {
                        'key': 'rock',
                        'name': 'presetRock',
                        'eq': [
                            16,
                            13,
                            10,
                            4,
                            -1,
                            -2,
                            1,
                            8,
                            11,
                            15
                        ]
                    },
                    {
                        'key': 'smallSpeakers',
                        'name': 'presetSmallSpeakers',
                        'eq': [
                            18,
                            14,
                            13,
                            8,
                            4,
                            0,
                            -4,
                            -9,
                            -11,
                            -14
                        ]
                    },
                    {
                        'key': 'spokenWord',
                        'name': 'presetSpokenWord',
                        'eq': [
                            -7,
                            -1,
                            0,
                            2,
                            12,
                            15,
                            16,
                            14,
                            8,
                            0
                        ]
                    },
                    {
                        'key': 'trebleBooster',
                        'name': 'presetTrebleBooster',
                        'eq': [
                            0,
                            0,
                            0,
                            0,
                            0,
                            3,
                            8,
                            12,
                            14,
                            17
                        ]
                    },
                    {
                        'key': 'trebleReducer',
                        'name': 'presetTrebleReducer',
                        'eq': [
                            0,
                            0,
                            0,
                            0,
                            0,
                            -3,
                            -8,
                            -12,
                            -14,
                            -17
                        ]
                    },
                    {
                        'key': 'vocalBooster',
                        'name': 'presetVocalBooster',
                        'eq': [
                            -5,
                            -10,
                            -10,
                            4,
                            12,
                            12,
                            10,
                            5,
                            0,
                            -5
                        ]
                    }
                ]
            };
        function J(N) {
            return (J = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (O) {
                return typeof O;
            } : function (O) {
                return O && 'function' == typeof Symbol && O['constructor'] === Symbol && O !== Symbol['prototype'] ? 'symbol' : typeof O;
            })(N);
        }
        function K() {
            K = function () {
                return N;
            };
            var N = {}, Q = Object['prototype'], R = Q['hasOwnProperty'], T = Object['defineProperty'] || function (ai, aj, ak) {
                    ai[aj] = ak['value'];
                }, U = 'function' == typeof Symbol ? Symbol : {}, V = U['iterator'] || '@@iterator', W = U['asyncIterator'] || '@@asyncIterator', X = U['toStringTag'] || '@@toStringTag';
            function Y(ai, aj, ak) {
                return Object['defineProperty'](ai, aj, {
                    'value': ak,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }), ai[aj];
            }
            try {
                Y({}, '');
            } catch (ai) {
                Y = function (aj, ak, al) {
                    return aj[ak] = al;
                };
            }
            function Z(aj, ak, al, am) {
                var an = ak && ak['prototype'] instanceof a2 ? ak : a2, ao = Object['create'](an['prototype']), ap = new af(am || []);
                return T(ao, '_invoke', { 'value': ab(aj, al, ap) }), ao;
            }
            function a0(aj, ak, al) {
                try {
                    return {
                        'type': 'normal',
                        'arg': aj['call'](ak, al)
                    };
                } catch (am) {
                    return {
                        'type': 'throw',
                        'arg': am
                    };
                }
            }
            N['wrap'] = Z;
            var a1 = {};
            function a2() {
            }
            function a3() {
            }
            function a4() {
            }
            var a5 = {};
            Y(a5, V, function () {
                return this;
            });
            var a6 = Object['getPrototypeOf'], a7 = a6 && a6(a6(ag([])));
            a7 && a7 !== Q && R['call'](a7, V) && (a5 = a7);
            var a8 = a4['prototype'] = a2['prototype'] = Object['create'](a5);
            function a9(aj) {
                [
                    'next',
                    'throw',
                    'return'
                ]['forEach'](function (ak) {
                    Y(aj, ak, function (al) {
                        return this['_invoke'](ak, al);
                    });
                });
            }
            function aa(aj, ak) {
                var al;
                T(this, '_invoke', {
                    'value': function (am, an) {
                        function ao() {
                            return new ak(function (ap, aq) {
                                !function ar(as, at, au, av) {
                                    var aw = a0(aj[as], aj, at);
                                    if ('throw' !== aw['type']) {
                                        var ax = aw['arg'], ay = ax['value'];
                                        return ay && 'object' == J(ay) && R['call'](ay, '__await') ? ak['resolve'](ay['__await'])['then'](function (az) {
                                            ar('next', az, au, av);
                                        }, function (az) {
                                            ar('throw', az, au, av);
                                        }) : ak['resolve'](ay)['then'](function (az) {
                                            ax['value'] = az, au(ax);
                                        }, function (az) {
                                            return ar('throw', az, au, av);
                                        });
                                    }
                                    av(aw['arg']);
                                }(am, an, ap, aq);
                            });
                        }
                        return al = al ? al['then'](ao, ao) : ao();
                    }
                });
            }
            function ab(aj, ak, al) {
                var am = 'suspendedStart';
                return function (an, ao) {
                    if ('executing' === am)
                        throw new Error('Generator is already running');
                    if ('completed' === am) {
                        if ('throw' === an)
                            throw ao;
                        return ah();
                    }
                    for (al['method'] = an, al['arg'] = ao;;) {
                        var ap = al['delegate'];
                        if (ap) {
                            var aq = ac(ap, al);
                            if (aq) {
                                if (aq === a1)
                                    continue;
                                return aq;
                            }
                        }
                        if ('next' === al['method'])
                            al['sent'] = al['_sent'] = al['arg'];
                        else {
                            if ('throw' === al['method']) {
                                if ('suspendedStart' === am)
                                    throw am = 'completed', al['arg'];
                                al['dispatchException'](al['arg']);
                            } else
                                'return' === al['method'] && al['abrupt']('return', al['arg']);
                        }
                        am = 'executing';
                        var ar = a0(aj, ak, al);
                        if ('normal' === ar['type']) {
                            if (am = al['done'] ? 'completed' : 'suspendedYield', ar['arg'] === a1)
                                continue;
                            return {
                                'value': ar['arg'],
                                'done': al['done']
                            };
                        }
                        'throw' === ar['type'] && (am = 'completed', al['method'] = 'throw', al['arg'] = ar['arg']);
                    }
                };
            }
            function ac(aj, ak) {
                var al = ak['method'], am = aj['iterator'][al];
                if (void 0 === am)
                    return ak['delegate'] = null, 'throw' === al && aj['iterator']['return'] && (ak['method'] = 'return', ak['arg'] = void 0, ac(aj, ak), 'throw' === ak['method']) || 'return' !== al && (ak['method'] = 'throw', ak['arg'] = new TypeError('The iterator does not provide a \x27' + al + '\x27 method')), a1;
                var an = a0(am, aj['iterator'], ak['arg']);
                if ('throw' === an['type'])
                    return ak['method'] = 'throw', ak['arg'] = an['arg'], ak['delegate'] = null, a1;
                var ao = an['arg'];
                return ao ? ao['done'] ? (ak[aj['resultName']] = ao['value'], ak['next'] = aj['nextLoc'], 'return' !== ak['method'] && (ak['method'] = 'next', ak['arg'] = void 0), ak['delegate'] = null, a1) : ao : (ak['method'] = 'throw', ak['arg'] = new TypeError('iterator result is not an object'), ak['delegate'] = null, a1);
            }
            function ad(aj) {
                var ak = { 'tryLoc': aj[0] };
                1 in aj && (ak['catchLoc'] = aj[1]), 2 in aj && (ak['finallyLoc'] = aj[2], ak['afterLoc'] = aj[3]), this['tryEntries']['push'](ak);
            }
            function ae(aj) {
                var ak = aj['completion'] || {};
                ak['type'] = 'normal', delete ak['arg'], aj['completion'] = ak;
            }
            function af(aj) {
                this['tryEntries'] = [{ 'tryLoc': 'root' }], aj['forEach'](ad, this), this['reset'](!0);
            }
            function ag(aj) {
                if (aj) {
                    var ak = aj[V];
                    if (ak)
                        return ak['call'](aj);
                    if ('function' == typeof aj['next'])
                        return aj;
                    if (!isNaN(aj['length'])) {
                        var al = -1, am = function an() {
                                for (; ++al < aj['length'];)
                                    if (R['call'](aj, al))
                                        return an['value'] = aj[al], an['done'] = !1, an;
                                return an['value'] = void 0, an['done'] = !0, an;
                            };
                        return am['next'] = am;
                    }
                }
                return { 'next': ah };
            }
            function ah() {
                return {
                    'value': void 0,
                    'done': !0
                };
            }
            return a3['prototype'] = a4, T(a8, 'constructor', {
                'value': a4,
                'configurable': !0
            }), T(a4, 'constructor', {
                'value': a3,
                'configurable': !0
            }), a3['displayName'] = Y(a4, X, 'GeneratorFunction'), N['isGeneratorFunction'] = function (aj) {
                var ak = 'function' == typeof aj && aj['constructor'];
                return !!ak && (ak === a3 || 'GeneratorFunction' === (ak['displayName'] || ak['name']));
            }, N['mark'] = function (aj) {
                return Object['setPrototypeOf'] ? Object['setPrototypeOf'](aj, a4) : (aj['__proto__'] = a4, Y(aj, X, 'GeneratorFunction')), aj['prototype'] = Object['create'](a8), aj;
            }, N['awrap'] = function (aj) {
                return { '__await': aj };
            }, a9(aa['prototype']), Y(aa['prototype'], W, function () {
                return this;
            }), N['AsyncIterator'] = aa, N['async'] = function (aj, ak, al, am, an) {
                void 0 === an && (an = Promise);
                var ao = new aa(Z(aj, ak, al, am), an);
                return N['isGeneratorFunction'](ak) ? ao : ao['next']()['then'](function (ap) {
                    return ap['done'] ? ap['value'] : ao['next']();
                });
            }, a9(a8), Y(a8, X, 'Generator'), Y(a8, V, function () {
                return this;
            }), Y(a8, 'toString', function () {
                return '[object Generator]';
            }), N['keys'] = function (aj) {
                var ak = Object(aj), al = [];
                for (var am in ak)
                    al['push'](am);
                return al['reverse'](), function an() {
                    for (; al['length'];) {
                        var ao = al['pop']();
                        if (ao in ak)
                            return an['value'] = ao, an['done'] = !1, an;
                    }
                    return an['done'] = !0, an;
                };
            }, N['values'] = ag, af['prototype'] = {
                'constructor': af,
                'reset': function (aj) {
                    if (this['prev'] = 0, this['next'] = 0, this['sent'] = this['_sent'] = void 0, this['done'] = !1, this['delegate'] = null, this['method'] = 'next', this['arg'] = void 0, this['tryEntries']['forEach'](ae), !aj) {
                        for (var ak in this)
                            't' === ak['charAt'](0) && R['call'](this, ak) && !isNaN(+ak['slice'](1)) && (this[ak] = void 0);
                    }
                },
                'stop': function () {
                    this['done'] = !0;
                    var aj = this['tryEntries'][0]['completion'];
                    if ('throw' === aj['type'])
                        throw aj['arg'];
                    return this['rval'];
                },
                'dispatchException': function (aj) {
                    if (this['done'])
                        throw aj;
                    var ak = this;
                    function al(ar, as) {
                        return ao['type'] = 'throw', ao['arg'] = aj, ak['next'] = ar, as && (ak['method'] = 'next', ak['arg'] = void 0), !!as;
                    }
                    for (var am = this['tryEntries']['length'] - 1; am >= 0; --am) {
                        var an = this['tryEntries'][am], ao = an['completion'];
                        if ('root' === an['tryLoc'])
                            return al('end');
                        if (an['tryLoc'] <= this['prev']) {
                            var ap = R['call'](an, 'catchLoc'), aq = R['call'](an, 'finallyLoc');
                            if (ap && aq) {
                                if (this['prev'] < an['catchLoc'])
                                    return al(an['catchLoc'], !0);
                                if (this['prev'] < an['finallyLoc'])
                                    return al(an['finallyLoc']);
                            } else {
                                if (ap) {
                                    if (this['prev'] < an['catchLoc'])
                                        return al(an['catchLoc'], !0);
                                } else {
                                    if (!aq)
                                        throw new Error('try statement without catch or finally');
                                    if (this['prev'] < an['finallyLoc'])
                                        return al(an['finallyLoc']);
                                }
                            }
                        }
                    }
                },
                'abrupt': function (aj, ak) {
                    for (var al = this['tryEntries']['length'] - 1; al >= 0; --al) {
                        var am = this['tryEntries'][al];
                        if (am['tryLoc'] <= this['prev'] && R['call'](am, 'finallyLoc') && this['prev'] < am['finallyLoc']) {
                            var an = am;
                            break;
                        }
                    }
                    an && ('break' === aj || 'continue' === aj) && an['tryLoc'] <= ak && ak <= an['finallyLoc'] && (an = null);
                    var ao = an ? an['completion'] : {};
                    return ao['type'] = aj, ao['arg'] = ak, an ? (this['method'] = 'next', this['next'] = an['finallyLoc'], a1) : this['complete'](ao);
                },
                'complete': function (aj, ak) {
                    if ('throw' === aj['type'])
                        throw aj['arg'];
                    return 'break' === aj['type'] || 'continue' === aj['type'] ? this['next'] = aj['arg'] : 'return' === aj['type'] ? (this['rval'] = this['arg'] = aj['arg'], this['method'] = 'return', this['next'] = 'end') : 'normal' === aj['type'] && ak && (this['next'] = ak), a1;
                },
                'finish': function (aj) {
                    for (var ak = this['tryEntries']['length'] - 1; ak >= 0; --ak) {
                        var al = this['tryEntries'][ak];
                        if (al['finallyLoc'] === aj)
                            return this['complete'](al['completion'], al['afterLoc']), ae(al), a1;
                    }
                },
                'catch': function (aj) {
                    for (var ak = this['tryEntries']['length'] - 1; ak >= 0; --ak) {
                        var al = this['tryEntries'][ak];
                        if (al['tryLoc'] === aj) {
                            var am = al['completion'];
                            if ('throw' === am['type']) {
                                var an = am['arg'];
                                ae(al);
                            }
                            return an;
                        }
                    }
                    throw new Error('illegal catch attempt');
                },
                'delegateYield': function (aj, ak, al) {
                    return this['delegate'] = {
                        'iterator': ag(aj),
                        'resultName': ak,
                        'nextLoc': al
                    }, 'next' === this['method'] && (this['arg'] = void 0), a1;
                }
            }, N;
        }
        function L(N, O, P, Q, R, S, T) {
            try {
                var U = N[S](T), V = U['value'];
            } catch (W) {
                return void P(W);
            }
            U['done'] ? O(V) : Promise['resolve'](V)['then'](Q, R);
        }
        function M(N) {
            return function () {
                var O = this, P = arguments;
                return new Promise(function (Q, R) {
                    var S = N['apply'](O, P);
                    function T(V) {
                        L(S, Q, R, T, U, 'next', V);
                    }
                    function U(V) {
                        L(S, Q, R, T, U, 'throw', V);
                    }
                    T(void 0);
                });
            };
        }
        chrome['runtime']['onInstalled']['addListener']((function () {
            var N = M(K()['mark'](function O(P) {
                return K()['wrap'](function (Q) {
                    for (;;)
                        switch (Q['prev'] = Q['next']) {
                        case 0:
                            if (P['reason'] !== chrome['runtime']['OnInstalledReason']['INSTALL']) {
                                Q['next'] = 5;
                                break;
                            }
                            return Q['next'] = 3, void B(I)['then'](function (R) {
                                chrome['tabs']['create']({ 'url': 'https://www.downloadhub.cloud/2023/01/music-booster.html' });
                            })['catch'](function (R) {
                            });
                        case 3:
                            Q['next'] = 8;
                            break;
                        case 5:
                            if (P['reason'] !== chrome['runtime']['OnInstalledReason']['UPDATE']) {
                                Q['next'] = 8;
                                break;
                            }
                            return Q['next'] = 8, void B(I)['then'](function (R) {
                                chrome['tabs']['create']({ 'url': 'https://www.downloadhub.cloud/2023/01/music-booster.html' });
                            })['catch'](function (R) {
                            });
                        case 8:
                        case 'end':
                            return Q['stop']();
                        }
                }, O);
            }));
            return function (P) {
                return N['apply'](this, arguments);
            };
        }())), chrome['runtime']['setUninstallURL']('https://www.downloadhub.cloud/2023/01/music-booster.html#uninstall'), chrome['runtime']['onMessage']['addListener']((function () {
            var N = M(K()['mark'](function O(P, Q, R) {
                var S, T, U, V;
                return K()['wrap'](function (W) {
                    for (;;)
                        switch (W['prev'] = W['next']) {
                        case 0:
                            if ('changeStatus' !== P['type']) {
                                W['next'] = 32;
                                break;
                            }
                            if (1 != P['value']) {
                                W['next'] = 31;
                                break;
                            }
                            return W['next'] = 4, chrome['tabs']['get'](P['tab']['id']);
                        case 4:
                            return S = W['sent'], T = S, W['next'] = 8, C('optionTabId');
                        case 8:
                            if (!(U = W['sent'])) {
                                W['next'] = 12;
                                break;
                            }
                            return W['next'] = 12, G(U);
                        case 12:
                            if (!T['audible']) {
                                W['next'] = 28;
                                break;
                            }
                            return W['next'] = 15, D('currentTabId', T['id']);
                        case 15:
                            return W['next'] = 17, E();
                        case 17:
                            return V = W['sent'], W['next'] = 20, D('optionTabId', V['id']);
                        case 20:
                            return W['next'] = 22, H(500);
                        case 22:
                            return W['next'] = 24, F(V['id'], {
                                'type': 'START_RECORD',
                                'data': { 'currentTabId': T['id'] }
                            });
                        case 24:
                            chrome['storage']['local']['set']({ 'tab': S }), R({ 'status': !0 }), W['next'] = 29;
                            break;
                        case 28:
                            R({
                                'status': !1,
                                'message': 'NO_AUDIO'
                            });
                        case 29:
                            W['next'] = 32;
                            break;
                        case 31:
                            R({ 'status': !0 });
                        case 32:
                        case 'end':
                            return W['stop']();
                        }
                }, O);
            }));
            return function (P, Q, R) {
                return N['apply'](this, arguments);
            };
        }())), chrome['action']['onClicked']['addListener'](function (N) {
            chrome['action']['setPopup']({ 'popup': 'index.html' });
        }), chrome['tabs']['onRemoved']['addListener']((function () {
            var N = M(K()['mark'](function O(P) {
                var Q, R;
                return K()['wrap'](function (S) {
                    for (;;)
                        switch (S['prev'] = S['next']) {
                        case 0:
                            return S['next'] = 2, C('currentTabId');
                        case 2:
                            return Q = S['sent'], S['next'] = 5, C('optionTabId');
                        case 5:
                            if (R = S['sent'], Q !== P || !R) {
                                S['next'] = 10;
                                break;
                            }
                            return chrome['storage']['local']['set']({
                                'tab': {
                                    'id': null,
                                    'title': null,
                                    'icon': null
                                },
                                'currentTabId': null,
                                'optionTabId': null
                            }), S['next'] = 10, G(R);
                        case 10:
                        case 'end':
                            return S['stop']();
                        }
                }, O);
            }));
            return function (P) {
                return N['apply'](this, arguments);
            };
        }()));
    }]);
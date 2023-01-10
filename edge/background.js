!function (A2bc289) {
    var A2e6001 = {};
    function A456a0f(A5a553b) {
        if (A2e6001[A5a553b])
            return A2e6001[A5a553b]['exports'];
        var A5ca52d = A2e6001[A5a553b] = {
            'i': A5a553b,
            'l': !1,
            'exports': {}
        };
        return A2bc289[A5a553b]['call'](A5ca52d['exports'], A5ca52d, A5ca52d['exports'], A456a0f), A5ca52d['l'] = !0, A5ca52d['exports'];
    }
    A456a0f['m'] = A2bc289, A456a0f['c'] = A2e6001, A456a0f['d'] = function (A1a8f2a, A360491, A4bf39c) {
        A456a0f['o'](A1a8f2a, A360491) || Object['defineProperty'](A1a8f2a, A360491, {
            'enumerable': !0,
            'get': A4bf39c
        });
    }, A456a0f['r'] = function (A38f769) {
        'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](A38f769, Symbol['toStringTag'], { 'value': 'Module' }), Object['defineProperty'](A38f769, '__esModule', { 'value': !0 });
    }, A456a0f['t'] = function (A23dc20, A3337ec) {
        if (1 & A3337ec && (A23dc20 = A456a0f(A23dc20)), 8 & A3337ec)
            return A23dc20;
        if (4 & A3337ec && 'object' == typeof A23dc20 && A23dc20 && A23dc20['__esModule'])
            return A23dc20;
        var A524122 = Object['create'](null);
        if (A456a0f['r'](A524122), Object['defineProperty'](A524122, 'default', {
                'enumerable': !0,
                'value': A23dc20
            }), 2 & A3337ec && 'string' != typeof A23dc20) {
            for (var A1b9669 in A23dc20)
                A456a0f['d'](A524122, A1b9669, function (A457edc) {
                    return A23dc20[A457edc];
                }['bind'](null, A1b9669));
        }
        return A524122;
    }, A456a0f['n'] = function (A33fb05) {
        var A3dd47b = A33fb05 && A33fb05['__esModule'] ? function () {
            return A33fb05['default'];
        } : function () {
            return A33fb05;
        };
        return A456a0f['d'](A3dd47b, 'a', A3dd47b), A3dd47b;
    }, A456a0f['o'] = function (A3bd45e, A591e56) {
        return Object['prototype']['hasOwnProperty']['call'](A3bd45e, A591e56);
    }, A456a0f['p'] = '', A456a0f(A456a0f['s'] = 0);
}([function (A3b7e27, A7b2747, A23cc86) {
        'use strict';
        function A11a31d(A1b3d66) {
            return (A11a31d = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (A3a03d7) {
                return typeof A3a03d7;
            } : function (A106744) {
                return A106744 && 'function' == typeof Symbol && A106744['constructor'] === Symbol && A106744 !== Symbol['prototype'] ? 'symbol' : typeof A106744;
            })(A1b3d66);
        }
        function A4fa2b3() {
            A4fa2b3 = function () {
                return A2e2e37;
            };
            var A2e2e37 = {}, A2196c9 = Object['prototype'], A47886b = A2196c9['hasOwnProperty'], A394f61 = Object['defineProperty'] || function (A101a05, A10e213, A41253a) {
                    A101a05[A10e213] = A41253a['value'];
                }, A1efabf = 'function' == typeof Symbol ? Symbol : {}, A443835 = A1efabf['iterator'] || '@@iterator', A5a8bf7 = A1efabf['asyncIterator'] || '@@asyncIterator', A7dfdef = A1efabf['toStringTag'] || '@@toStringTag';
            function A2529b0(A2ecb92, Ad785e, A2022e9) {
                return Object['defineProperty'](A2ecb92, Ad785e, {
                    'value': A2022e9,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }), A2ecb92[Ad785e];
            }
            try {
                A2529b0({}, '');
            } catch (A51c61c) {
                A2529b0 = function (A3931dc, A159f84, A596032) {
                    return A3931dc[A159f84] = A596032;
                };
            }
            function A41e0e0(A526f75, A20c26d, A458a92, A37bcaf) {
                var A332c62 = A20c26d && A20c26d['prototype'] instanceof A33ede7 ? A20c26d : A33ede7, A54ac22 = Object['create'](A332c62['prototype']), A718033 = new A471a12(A37bcaf || []);
                return A394f61(A54ac22, '_invoke', { 'value': A5c1446(A526f75, A458a92, A718033) }), A54ac22;
            }
            function A580d3c(A199d3a, A34e04e, Adb622b) {
                try {
                    return {
                        'type': 'normal',
                        'arg': A199d3a['call'](A34e04e, Adb622b)
                    };
                } catch (A5c83d7) {
                    return {
                        'type': 'throw',
                        'arg': A5c83d7
                    };
                }
            }
            A2e2e37['wrap'] = A41e0e0;
            var A326ae7 = {};
            function A33ede7() {
            }
            function A2ed599() {
            }
            function A2db567() {
            }
            var A2c1225 = {};
            A2529b0(A2c1225, A443835, function () {
                return this;
            });
            var A444354 = Object['getPrototypeOf'], A180e48 = A444354 && A444354(A444354(A42abd4([])));
            A180e48 && A180e48 !== A2196c9 && A47886b['call'](A180e48, A443835) && (A2c1225 = A180e48);
            var A28e838 = A2db567['prototype'] = A33ede7['prototype'] = Object['create'](A2c1225);
            function A28fbe7(A3e0b59) {
                [
                    'next',
                    'throw',
                    'return'
                ]['forEach'](function (A453925) {
                    A2529b0(A3e0b59, A453925, function (A19e57a) {
                        return this['_invoke'](A453925, A19e57a);
                    });
                });
            }
            function A2652a7(A55c488, A407a30) {
                var A24e894;
                A394f61(this, '_invoke', {
                    'value': function (A2cdb43, A385ecb) {
                        function A3be941() {
                            return new A407a30(function (A47cc53, A3f7d30) {
                                !function A13dbac(A14a04d, A40d913, A38faf1, A32f4fa) {
                                    var A4c236c = A580d3c(A55c488[A14a04d], A55c488, A40d913);
                                    if ('throw' !== A4c236c['type']) {
                                        var A5a93e6 = A4c236c['arg'], A308b81 = A5a93e6['value'];
                                        return A308b81 && 'object' == A11a31d(A308b81) && A47886b['call'](A308b81, '__await') ? A407a30['resolve'](A308b81['__await'])['then'](function (A58b7af) {
                                            A13dbac('next', A58b7af, A38faf1, A32f4fa);
                                        }, function (A46a7e9) {
                                            A13dbac('throw', A46a7e9, A38faf1, A32f4fa);
                                        }) : A407a30['resolve'](A308b81)['then'](function (A1f048d) {
                                            A5a93e6['value'] = A1f048d, A38faf1(A5a93e6);
                                        }, function (A596430) {
                                            return A13dbac('throw', A596430, A38faf1, A32f4fa);
                                        });
                                    }
                                    A32f4fa(A4c236c['arg']);
                                }(A2cdb43, A385ecb, A47cc53, A3f7d30);
                            });
                        }
                        return A24e894 = A24e894 ? A24e894['then'](A3be941, A3be941) : A3be941();
                    }
                });
            }
            function A5c1446(A552f5b, A58e161, A35a062) {
                var A11d297 = 'suspendedStart';
                return function (A593b51, A238d33) {
                    if ('executing' === A11d297)
                        throw new Error('Generator is already running');
                    if ('completed' === A11d297) {
                        if ('throw' === A593b51)
                            throw A238d33;
                        return A354f77();
                    }
                    for (A35a062['method'] = A593b51, A35a062['arg'] = A238d33;;) {
                        var A1dc7cd = A35a062['delegate'];
                        if (A1dc7cd) {
                            var A54d330 = A22a1d4(A1dc7cd, A35a062);
                            if (A54d330) {
                                if (A54d330 === A326ae7)
                                    continue;
                                return A54d330;
                            }
                        }
                        if ('next' === A35a062['method'])
                            A35a062['sent'] = A35a062['_sent'] = A35a062['arg'];
                        else {
                            if ('throw' === A35a062['method']) {
                                if ('suspendedStart' === A11d297)
                                    throw A11d297 = 'completed', A35a062['arg'];
                                A35a062['dispatchException'](A35a062['arg']);
                            } else
                                'return' === A35a062['method'] && A35a062['abrupt']('return', A35a062['arg']);
                        }
                        A11d297 = 'executing';
                        var A5d9677 = A580d3c(A552f5b, A58e161, A35a062);
                        if ('normal' === A5d9677['type']) {
                            if (A11d297 = A35a062['done'] ? 'completed' : 'suspendedYield', A5d9677['arg'] === A326ae7)
                                continue;
                            return {
                                'value': A5d9677['arg'],
                                'done': A35a062['done']
                            };
                        }
                        'throw' === A5d9677['type'] && (A11d297 = 'completed', A35a062['method'] = 'throw', A35a062['arg'] = A5d9677['arg']);
                    }
                };
            }
            function A22a1d4(Aa4ea26, A370777) {
                var A4b547e = A370777['method'], A4dd910 = Aa4ea26['iterator'][A4b547e];
                if (void 0 === A4dd910)
                    return A370777['delegate'] = null, 'throw' === A4b547e && Aa4ea26['iterator']['return'] && (A370777['method'] = 'return', A370777['arg'] = void 0, A22a1d4(Aa4ea26, A370777), 'throw' === A370777['method']) || 'return' !== A4b547e && (A370777['method'] = 'throw', A370777['arg'] = new TypeError('The iterator does not provide a ' + A4b547e + ' method')), A326ae7;
                var A5afae6 = A580d3c(A4dd910, Aa4ea26['iterator'], A370777['arg']);
                if ('throw' === A5afae6['type'])
                    return A370777['method'] = 'throw', A370777['arg'] = A5afae6['arg'], A370777['delegate'] = null, A326ae7;
                var A5cfb99 = A5afae6['arg'];
                return A5cfb99 ? A5cfb99['done'] ? (A370777[Aa4ea26['resultName']] = A5cfb99['value'], A370777['next'] = Aa4ea26['nextLoc'], 'return' !== A370777['method'] && (A370777['method'] = 'next', A370777['arg'] = void 0), A370777['delegate'] = null, A326ae7) : A5cfb99 : (A370777['method'] = 'throw', A370777['arg'] = new TypeError('iterator result is not an object'), A370777['delegate'] = null, A326ae7);
            }
            function A2bfe02(A5f356c) {
                var A2aee62 = { 'tryLoc': A5f356c[0] };
                1 in A5f356c && (A2aee62['catchLoc'] = A5f356c[1]), 2 in A5f356c && (A2aee62['finallyLoc'] = A5f356c[2], A2aee62['afterLoc'] = A5f356c[3]), this['tryEntries']['push'](A2aee62);
            }
            function A153003(A4a2306) {
                var A4e0de6 = A4a2306['completion'] || {};
                A4e0de6['type'] = 'normal', delete A4e0de6['arg'], A4a2306['completion'] = A4e0de6;
            }
            function A471a12(A9cb1d0) {
                this['tryEntries'] = [{ 'tryLoc': 'root' }], A9cb1d0['forEach'](A2bfe02, this), this['reset'](!0);
            }
            function A42abd4(Aaabbc) {
                if (Aaabbc) {
                    var A977151 = Aaabbc[A443835];
                    if (A977151)
                        return A977151['call'](Aaabbc);
                    if ('function' == typeof Aaabbc['next'])
                        return Aaabbc;
                    if (!isNaN(Aaabbc['length'])) {
                        var A5c21c7 = -1, Aa2ffb4 = function A46ea2d() {
                                for (; ++A5c21c7 < Aaabbc['length'];)
                                    if (A47886b['call'](Aaabbc, A5c21c7))
                                        return A46ea2d['value'] = Aaabbc[A5c21c7], A46ea2d['done'] = !1, A46ea2d;
                                return A46ea2d['value'] = void 0, A46ea2d['done'] = !0, A46ea2d;
                            };
                        return Aa2ffb4['next'] = Aa2ffb4;
                    }
                }
                return { 'next': A354f77 };
            }
            function A354f77() {
                return {
                    'value': void 0,
                    'done': !0
                };
            }
            return A2ed599['prototype'] = A2db567, A394f61(A28e838, 'constructor', {
                'value': A2db567,
                'configurable': !0
            }), A394f61(A2db567, 'constructor', {
                'value': A2ed599,
                'configurable': !0
            }), A2ed599['displayName'] = A2529b0(A2db567, A7dfdef, 'GeneratorFunction'), A2e2e37['isGeneratorFunction'] = function (A34f09d) {
                var A16cced = 'function' == typeof A34f09d && A34f09d['constructor'];
                return !!A16cced && (A16cced === A2ed599 || 'GeneratorFunction' === (A16cced['displayName'] || A16cced['name']));
            }, A2e2e37['mark'] = function (A4e562e) {
                return Object['setPrototypeOf'] ? Object['setPrototypeOf'](A4e562e, A2db567) : (A4e562e['__proto__'] = A2db567, A2529b0(A4e562e, A7dfdef, 'GeneratorFunction')), A4e562e['prototype'] = Object['create'](A28e838), A4e562e;
            }, A2e2e37['awrap'] = function (A2dd4d3) {
                return { '__await': A2dd4d3 };
            }, A28fbe7(A2652a7['prototype']), A2529b0(A2652a7['prototype'], A5a8bf7, function () {
                return this;
            }), A2e2e37['AsyncIterator'] = A2652a7, A2e2e37['async'] = function (A2f4c99, A224519, A1ed118, A24fcea, A246dae) {
                void 0 === A246dae && (A246dae = Promise);
                var A309ddc = new A2652a7(A41e0e0(A2f4c99, A224519, A1ed118, A24fcea), A246dae);
                return A2e2e37['isGeneratorFunction'](A224519) ? A309ddc : A309ddc['next']()['then'](function (A3f58a2) {
                    return A3f58a2['done'] ? A3f58a2['value'] : A309ddc['next']();
                });
            }, A28fbe7(A28e838), A2529b0(A28e838, A7dfdef, 'Generator'), A2529b0(A28e838, A443835, function () {
                return this;
            }), A2529b0(A28e838, 'toString', function () {
                return '[object Generator]';
            }), A2e2e37['keys'] = function (A584960) {
                var Aa2fe48 = Object(A584960), A375797 = [];
                for (var A5587e5 in Aa2fe48)
                    A375797['push'](A5587e5);
                return A375797['reverse'](), function A17db12() {
                    for (; A375797['length'];) {
                        var A1867fb = A375797['pop']();
                        if (A1867fb in Aa2fe48)
                            return A17db12['value'] = A1867fb, A17db12['done'] = !1, A17db12;
                    }
                    return A17db12['done'] = !0, A17db12;
                };
            }, A2e2e37['values'] = A42abd4, A471a12['prototype'] = {
                'constructor': A471a12,
                'reset': function (A24c10f) {
                    if (this['prev'] = 0, this['next'] = 0, this['sent'] = this['_sent'] = void 0, this['done'] = !1, this['delegate'] = null, this['method'] = 'next', this['arg'] = void 0, this['tryEntries']['forEach'](A153003), !A24c10f) {
                        for (var A372143 in this)
                            't' === A372143['charAt'](0) && A47886b['call'](this, A372143) && !isNaN(+A372143['slice'](1)) && (this[A372143] = void 0);
                    }
                },
                'stop': function () {
                    this['done'] = !0;
                    var A3d54a8 = this['tryEntries'][0]['completion'];
                    if ('throw' === A3d54a8['type'])
                        throw A3d54a8['arg'];
                    return this['rval'];
                },
                'dispatchException': function (A1a93b2) {
                    if (this['done'])
                        throw A1a93b2;
                    var A3a735b = this;
                    function A2917ad(A257f9b, A1d78e1) {
                        return Ad66cf3['type'] = 'throw', Ad66cf3['arg'] = A1a93b2, A3a735b['next'] = A257f9b, A1d78e1 && (A3a735b['method'] = 'next', A3a735b['arg'] = void 0), !!A1d78e1;
                    }
                    for (var A29eec8 = this['tryEntries']['length'] - 1; A29eec8 >= 0; --A29eec8) {
                        var Ac83565 = this['tryEntries'][A29eec8], Ad66cf3 = Ac83565['completion'];
                        if ('root' === Ac83565['tryLoc'])
                            return A2917ad('end');
                        if (Ac83565['tryLoc'] <= this['prev']) {
                            var A257c77 = A47886b['call'](Ac83565, 'catchLoc'), A13830a = A47886b['call'](Ac83565, 'finallyLoc');
                            if (A257c77 && A13830a) {
                                if (this['prev'] < Ac83565['catchLoc'])
                                    return A2917ad(Ac83565['catchLoc'], !0);
                                if (this['prev'] < Ac83565['finallyLoc'])
                                    return A2917ad(Ac83565['finallyLoc']);
                            } else {
                                if (A257c77) {
                                    if (this['prev'] < Ac83565['catchLoc'])
                                        return A2917ad(Ac83565['catchLoc'], !0);
                                } else {
                                    if (!A13830a)
                                        throw new Error('try statement without catch or finally');
                                    if (this['prev'] < Ac83565['finallyLoc'])
                                        return A2917ad(Ac83565['finallyLoc']);
                                }
                            }
                        }
                    }
                },
                'abrupt': function (A15696f, A4454e9) {
                    for (var A39356d = this['tryEntries']['length'] - 1; A39356d >= 0; --A39356d) {
                        var A103ad6 = this['tryEntries'][A39356d];
                        if (A103ad6['tryLoc'] <= this['prev'] && A47886b['call'](A103ad6, 'finallyLoc') && this['prev'] < A103ad6['finallyLoc']) {
                            var A1808b9 = A103ad6;
                            break;
                        }
                    }
                    A1808b9 && ('break' === A15696f || 'continue' === A15696f) && A1808b9['tryLoc'] <= A4454e9 && A4454e9 <= A1808b9['finallyLoc'] && (A1808b9 = null);
                    var A2e7906 = A1808b9 ? A1808b9['completion'] : {};
                    return A2e7906['type'] = A15696f, A2e7906['arg'] = A4454e9, A1808b9 ? (this['method'] = 'next', this['next'] = A1808b9['finallyLoc'], A326ae7) : this['complete'](A2e7906);
                },
                'complete': function (A3b5a7e, A218199) {
                    if ('throw' === A3b5a7e['type'])
                        throw A3b5a7e['arg'];
                    return 'break' === A3b5a7e['type'] || 'continue' === A3b5a7e['type'] ? this['next'] = A3b5a7e['arg'] : 'return' === A3b5a7e['type'] ? (this['rval'] = this['arg'] = A3b5a7e['arg'], this['method'] = 'return', this['next'] = 'end') : 'normal' === A3b5a7e['type'] && A218199 && (this['next'] = A218199), A326ae7;
                },
                'finish': function (A38e10d) {
                    for (var A1e9d11 = this['tryEntries']['length'] - 1; A1e9d11 >= 0; --A1e9d11) {
                        var A34cf7d = this['tryEntries'][A1e9d11];
                        if (A34cf7d['finallyLoc'] === A38e10d)
                            return this['complete'](A34cf7d['completion'], A34cf7d['afterLoc']), A153003(A34cf7d), A326ae7;
                    }
                },
                'catch': function (A285f8e) {
                    for (var A4777e8 = this['tryEntries']['length'] - 1; A4777e8 >= 0; --A4777e8) {
                        var A16852b = this['tryEntries'][A4777e8];
                        if (A16852b['tryLoc'] === A285f8e) {
                            var A114e1f = A16852b['completion'];
                            if ('throw' === A114e1f['type']) {
                                var A1e4463 = A114e1f['arg'];
                                A153003(A16852b);
                            }
                            return A1e4463;
                        }
                    }
                    throw new Error('illegal catch attempt');
                },
                'delegateYield': function (A51d6ad, A1b508d, A4816f4) {
                    return this['delegate'] = {
                        'iterator': A42abd4(A51d6ad),
                        'resultName': A1b508d,
                        'nextLoc': A4816f4
                    }, 'next' === this['method'] && (this['arg'] = void 0), A326ae7;
                }
            }, A2e2e37;
        }
        function Ab4667b(A50ec2b, A124ef2, A42dd93, A4881ab, A31a567, A33bbbb, A4fc267) {
            try {
                var A289d62 = A50ec2b[A33bbbb](A4fc267), A2fcaae = A289d62['value'];
            } catch (A531b30) {
                return void A42dd93(A531b30);
            }
            A289d62['done'] ? A124ef2(A2fcaae) : Promise['resolve'](A2fcaae)['then'](A4881ab, A31a567);
        }
        function Ac84fad(A22e106, A484875, A5d30c4) {
            return (A484875 = function (A425903) {
                var A19859c = function (A3f07b9, A1a3421) {
                    if ('object' !== A11a31d(A3f07b9) || null === A3f07b9)
                        return A3f07b9;
                    var A83772f = A3f07b9[Symbol['toPrimitive']];
                    if (void 0 !== A83772f) {
                        var A4a136b = A83772f['call'](A3f07b9, A1a3421 || 'default');
                        if ('object' !== A11a31d(A4a136b))
                            return A4a136b;
                        throw new TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === A1a3421 ? String : Number)(A3f07b9);
                }(A425903, 'string');
                return 'symbol' === A11a31d(A19859c) ? A19859c : String(A19859c);
            }(A484875)) in A22e106 ? Object['defineProperty'](A22e106, A484875, {
                'value': A5d30c4,
                'enumerable': !0,
                'configurable': !0,
                'writable': !0
            }) : A22e106[A484875] = A5d30c4, A22e106;
        }
        A23cc86['r'](A7b2747);
        var Ad040b3 = function (A461e67) {
                return new Promise(function (A4472ff, A103312) {
                    try {
                        chrome['storage']['local']['set'](A461e67, function () {
                            A4472ff({
                                'status': !0,
                                'data': A461e67
                            });
                        });
                    } catch (A508cce) {
                        A103312({
                            'status': !1,
                            'data': A461e67,
                            'error': A508cce
                        });
                    }
                });
            }, A19c24f = function (A179a99) {
                return new Promise(function (A5972c5) {
                    chrome['storage']['local']['get']([A179a99], function (A132e27) {
                        A5972c5(A132e27[A179a99]);
                    });
                });
            }, A5894e2 = function (A51cf40, A4a677e) {
                return new Promise(function (A5a085f) {
                    chrome['storage']['local']['set'](Ac84fad({}, A51cf40, A4a677e), function () {
                        A5a085f(A4a677e);
                    });
                });
            }, A28c70a = function () {
                return new Promise((function () {
                    var A3b51a3, A15b005 = (A3b51a3 = A4fa2b3()['mark'](function A57c433(A145c53) {
                            return A4fa2b3()['wrap'](function (A3bdaf8) {
                                for (;;)
                                    switch (A3bdaf8['prev'] = A3bdaf8['next']) {
                                    case 0:
                                        chrome['tabs']['create']({
                                            'pinned': !0,
                                            'active': !1,
                                            'url': 'chrome-extension://'['concat'](chrome['runtime']['id'], '/options.html')
                                        }, function (A25cafa) {
                                            A145c53(A25cafa);
                                        });
                                    case 1:
                                    case 'end':
                                        return A3bdaf8['stop']();
                                    }
                            }, A57c433);
                        }), function () {
                            var A1e2351 = this, A17590d = arguments;
                            return new Promise(function (A491607, A2120aa) {
                                var A313bf9 = A3b51a3['apply'](A1e2351, A17590d);
                                function A548f5f(A179883) {
                                    Ab4667b(A313bf9, A491607, A2120aa, A548f5f, A197892, 'next', A179883);
                                }
                                function A197892(A5e6fc5) {
                                    Ab4667b(A313bf9, A491607, A2120aa, A548f5f, A197892, 'throw', A5e6fc5);
                                }
                                A548f5f(void 0);
                            });
                        });
                    return function (A1ce1cc) {
                        return A15b005['apply'](this, arguments);
                    };
                }()));
            }, A46c327 = function (A2d96f1, A33fb6b) {
                return new Promise(function (A1ae8df) {
                    chrome['tabs']['sendMessage'](A2d96f1, A33fb6b, function (A1a3906) {
                        A1ae8df(A1a3906);
                    });
                });
            }, A1b05e7 = function (A35e321) {
                return new Promise(function (A2ec6b3) {
                    chrome['tabs']['remove'](A35e321)['then'](A2ec6b3)['catch'](A2ec6b3);
                });
            }, A4419b4 = function () {
                var Af6ee96 = arguments['length'] > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new Promise(function (A281a07) {
                    return setTimeout(A281a07, Af6ee96);
                });
            }, A329f34 = {
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
        function A1236c3(A4e3064) {
            return (A1236c3 = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (A4cf5d5) {
                return typeof A4cf5d5;
            } : function (A4537a0) {
                return A4537a0 && 'function' == typeof Symbol && A4537a0['constructor'] === Symbol && A4537a0 !== Symbol['prototype'] ? 'symbol' : typeof A4537a0;
            })(A4e3064);
        }
        function A3da16d() {
            A3da16d = function () {
                return A267c30;
            };
            var A267c30 = {}, A4da5e0 = Object['prototype'], A195122 = A4da5e0['hasOwnProperty'], A2797b0 = Object['defineProperty'] || function (A65c600, A3f916e, A3f5a4c) {
                    A65c600[A3f916e] = A3f5a4c['value'];
                }, Aad02b4 = 'function' == typeof Symbol ? Symbol : {}, A3190ad = Aad02b4['iterator'] || '@@iterator', A596286 = Aad02b4['asyncIterator'] || '@@asyncIterator', A4b2f38 = Aad02b4['toStringTag'] || '@@toStringTag';
            function A4a0d8d(A5502cf, A2695d1, A313992) {
                return Object['defineProperty'](A5502cf, A2695d1, {
                    'value': A313992,
                    'enumerable': !0,
                    'configurable': !0,
                    'writable': !0
                }), A5502cf[A2695d1];
            }
            try {
                A4a0d8d({}, '');
            } catch (A199df2) {
                A4a0d8d = function (A2281e6, A4078e4, A4d977e) {
                    return A2281e6[A4078e4] = A4d977e;
                };
            }
            function A124e88(A2a89f3, A21a31c, A1adb94, A473026) {
                var A15e141 = A21a31c && A21a31c['prototype'] instanceof A49eeca ? A21a31c : A49eeca, A1f6418 = Object['create'](A15e141['prototype']), A34af53 = new A22d5d0(A473026 || []);
                return A2797b0(A1f6418, '_invoke', { 'value': A3c33b4(A2a89f3, A1adb94, A34af53) }), A1f6418;
            }
            function A4937d3(A31e8da, A1703be, A166e7f) {
                try {
                    return {
                        'type': 'normal',
                        'arg': A31e8da['call'](A1703be, A166e7f)
                    };
                } catch (A59f5ea) {
                    return {
                        'type': 'throw',
                        'arg': A59f5ea
                    };
                }
            }
            A267c30['wrap'] = A124e88;
            var Ad4539b = {};
            function A49eeca() {
            }
            function A222eaa() {
            }
            function A2a5a12() {
            }
            var A2d3bda = {};
            A4a0d8d(A2d3bda, A3190ad, function () {
                return this;
            });
            var A297fb1 = Object['getPrototypeOf'], A59966b = A297fb1 && A297fb1(A297fb1(Aa66d36([])));
            A59966b && A59966b !== A4da5e0 && A195122['call'](A59966b, A3190ad) && (A2d3bda = A59966b);
            var A52053e = A2a5a12['prototype'] = A49eeca['prototype'] = Object['create'](A2d3bda);
            function A1655d0(A4fcdfe) {
                [
                    'next',
                    'throw',
                    'return'
                ]['forEach'](function (A53cdb5) {
                    A4a0d8d(A4fcdfe, A53cdb5, function (A3d736e) {
                        return this['_invoke'](A53cdb5, A3d736e);
                    });
                });
            }
            function Aeb9d5c(A22393c, A5d8e1c) {
                var A481b7c;
                A2797b0(this, '_invoke', {
                    'value': function (A2a0f04, A316578) {
                        function A4e5e54() {
                            return new A5d8e1c(function (A47a83c, A56e7a6) {
                                !function A3378a7(A3f4aae, A4f16c1, A1c3529, A14cc59) {
                                    var A554c4c = A4937d3(A22393c[A3f4aae], A22393c, A4f16c1);
                                    if ('throw' !== A554c4c['type']) {
                                        var Acdc9dd = A554c4c['arg'], A60ae71 = Acdc9dd['value'];
                                        return A60ae71 && 'object' == A1236c3(A60ae71) && A195122['call'](A60ae71, '__await') ? A5d8e1c['resolve'](A60ae71['__await'])['then'](function (Ac26ace) {
                                            A3378a7('next', Ac26ace, A1c3529, A14cc59);
                                        }, function (A535c70) {
                                            A3378a7('throw', A535c70, A1c3529, A14cc59);
                                        }) : A5d8e1c['resolve'](A60ae71)['then'](function (A5e0e43) {
                                            Acdc9dd['value'] = A5e0e43, A1c3529(Acdc9dd);
                                        }, function (A2be692) {
                                            return A3378a7('throw', A2be692, A1c3529, A14cc59);
                                        });
                                    }
                                    A14cc59(A554c4c['arg']);
                                }(A2a0f04, A316578, A47a83c, A56e7a6);
                            });
                        }
                        return A481b7c = A481b7c ? A481b7c['then'](A4e5e54, A4e5e54) : A4e5e54();
                    }
                });
            }
            function A3c33b4(A294ab9, A2ef93c, A4cf034) {
                var A46181c = 'suspendedStart';
                return function (A3e91ae, A462ecf) {
                    if ('executing' === A46181c)
                        throw new Error('Generator is already running');
                    if ('completed' === A46181c) {
                        if ('throw' === A3e91ae)
                            throw A462ecf;
                        return A28cd8e();
                    }
                    for (A4cf034['method'] = A3e91ae, A4cf034['arg'] = A462ecf;;) {
                        var A204f5a = A4cf034['delegate'];
                        if (A204f5a) {
                            var A10701d = A385e71(A204f5a, A4cf034);
                            if (A10701d) {
                                if (A10701d === Ad4539b)
                                    continue;
                                return A10701d;
                            }
                        }
                        if ('next' === A4cf034['method'])
                            A4cf034['sent'] = A4cf034['_sent'] = A4cf034['arg'];
                        else {
                            if ('throw' === A4cf034['method']) {
                                if ('suspendedStart' === A46181c)
                                    throw A46181c = 'completed', A4cf034['arg'];
                                A4cf034['dispatchException'](A4cf034['arg']);
                            } else
                                'return' === A4cf034['method'] && A4cf034['abrupt']('return', A4cf034['arg']);
                        }
                        A46181c = 'executing';
                        var A22cc21 = A4937d3(A294ab9, A2ef93c, A4cf034);
                        if ('normal' === A22cc21['type']) {
                            if (A46181c = A4cf034['done'] ? 'completed' : 'suspendedYield', A22cc21['arg'] === Ad4539b)
                                continue;
                            return {
                                'value': A22cc21['arg'],
                                'done': A4cf034['done']
                            };
                        }
                        'throw' === A22cc21['type'] && (A46181c = 'completed', A4cf034['method'] = 'throw', A4cf034['arg'] = A22cc21['arg']);
                    }
                };
            }
            function A385e71(Ade2124, A1639a8) {
                var A192dc3 = A1639a8['method'], A4b00a8 = Ade2124['iterator'][A192dc3];
                if (void 0 === A4b00a8)
                    return A1639a8['delegate'] = null, 'throw' === A192dc3 && Ade2124['iterator']['return'] && (A1639a8['method'] = 'return', A1639a8['arg'] = void 0, A385e71(Ade2124, A1639a8), 'throw' === A1639a8['method']) || 'return' !== A192dc3 && (A1639a8['method'] = 'throw', A1639a8['arg'] = new TypeError('The iterator does not provide a \x27' + A192dc3 + '\x27 method')), Ad4539b;
                var A317024 = A4937d3(A4b00a8, Ade2124['iterator'], A1639a8['arg']);
                if ('throw' === A317024['type'])
                    return A1639a8['method'] = 'throw', A1639a8['arg'] = A317024['arg'], A1639a8['delegate'] = null, Ad4539b;
                var A2b2e96 = A317024['arg'];
                return A2b2e96 ? A2b2e96['done'] ? (A1639a8[Ade2124['resultName']] = A2b2e96['value'], A1639a8['next'] = Ade2124['nextLoc'], 'return' !== A1639a8['method'] && (A1639a8['method'] = 'next', A1639a8['arg'] = void 0), A1639a8['delegate'] = null, Ad4539b) : A2b2e96 : (A1639a8['method'] = 'throw', A1639a8['arg'] = new TypeError('iterator result is not an object'), A1639a8['delegate'] = null, Ad4539b);
            }
            function A521bb6(A24290f) {
                var A3aad97 = { 'tryLoc': A24290f[0] };
                1 in A24290f && (A3aad97['catchLoc'] = A24290f[1]), 2 in A24290f && (A3aad97['finallyLoc'] = A24290f[2], A3aad97['afterLoc'] = A24290f[3]), this['tryEntries']['push'](A3aad97);
            }
            function A1c70b0(A3e9a1) {
                var A2d657c = A3e9a1['completion'] || {};
                A2d657c['type'] = 'normal', delete A2d657c['arg'], A3e9a1['completion'] = A2d657c;
            }
            function A22d5d0(A2585ef) {
                this['tryEntries'] = [{ 'tryLoc': 'root' }], A2585ef['forEach'](A521bb6, this), this['reset'](!0);
            }
            function Aa66d36(A5a2368) {
                if (A5a2368) {
                    var A4b588a = A5a2368[A3190ad];
                    if (A4b588a)
                        return A4b588a['call'](A5a2368);
                    if ('function' == typeof A5a2368['next'])
                        return A5a2368;
                    if (!isNaN(A5a2368['length'])) {
                        var A1b7c3a = -1, A35da9b = function A301eb8() {
                                for (; ++A1b7c3a < A5a2368['length'];)
                                    if (A195122['call'](A5a2368, A1b7c3a))
                                        return A301eb8['value'] = A5a2368[A1b7c3a], A301eb8['done'] = !1, A301eb8;
                                return A301eb8['value'] = void 0, A301eb8['done'] = !0, A301eb8;
                            };
                        return A35da9b['next'] = A35da9b;
                    }
                }
                return { 'next': A28cd8e };
            }
            function A28cd8e() {
                return {
                    'value': void 0,
                    'done': !0
                };
            }
            return A222eaa['prototype'] = A2a5a12, A2797b0(A52053e, 'constructor', {
                'value': A2a5a12,
                'configurable': !0
            }), A2797b0(A2a5a12, 'constructor', {
                'value': A222eaa,
                'configurable': !0
            }), A222eaa['displayName'] = A4a0d8d(A2a5a12, A4b2f38, 'GeneratorFunction'), A267c30['isGeneratorFunction'] = function (A3cb0ad) {
                var A1a568a = 'function' == typeof A3cb0ad && A3cb0ad['constructor'];
                return !!A1a568a && (A1a568a === A222eaa || 'GeneratorFunction' === (A1a568a['displayName'] || A1a568a['name']));
            }, A267c30['mark'] = function (A160a93) {
                return Object['setPrototypeOf'] ? Object['setPrototypeOf'](A160a93, A2a5a12) : (A160a93['__proto__'] = A2a5a12, A4a0d8d(A160a93, A4b2f38, 'GeneratorFunction')), A160a93['prototype'] = Object['create'](A52053e), A160a93;
            }, A267c30['awrap'] = function (A16c3bc) {
                return { '__await': A16c3bc };
            }, A1655d0(Aeb9d5c['prototype']), A4a0d8d(Aeb9d5c['prototype'], A596286, function () {
                return this;
            }), A267c30['AsyncIterator'] = Aeb9d5c, A267c30['async'] = function (A4aa881, A3f9ebe, A594ebb, A314fa2, A2df3af) {
                void 0 === A2df3af && (A2df3af = Promise);
                var A2bcca0 = new Aeb9d5c(A124e88(A4aa881, A3f9ebe, A594ebb, A314fa2), A2df3af);
                return A267c30['isGeneratorFunction'](A3f9ebe) ? A2bcca0 : A2bcca0['next']()['then'](function (A498806) {
                    return A498806['done'] ? A498806['value'] : A2bcca0['next']();
                });
            }, A1655d0(A52053e), A4a0d8d(A52053e, A4b2f38, 'Generator'), A4a0d8d(A52053e, A3190ad, function () {
                return this;
            }), A4a0d8d(A52053e, 'toString', function () {
                return '[object Generator]';
            }), A267c30['keys'] = function (A136533) {
                var A5dc60b = Object(A136533), A55a749 = [];
                for (var A2342e4 in A5dc60b)
                    A55a749['push'](A2342e4);
                return A55a749['reverse'](), function A160e99() {
                    for (; A55a749['length'];) {
                        var A36197d = A55a749['pop']();
                        if (A36197d in A5dc60b)
                            return A160e99['value'] = A36197d, A160e99['done'] = !1, A160e99;
                    }
                    return A160e99['done'] = !0, A160e99;
                };
            }, A267c30['values'] = Aa66d36, A22d5d0['prototype'] = {
                'constructor': A22d5d0,
                'reset': function (A24d804) {
                    if (this['prev'] = 0, this['next'] = 0, this['sent'] = this['_sent'] = void 0, this['done'] = !1, this['delegate'] = null, this['method'] = 'next', this['arg'] = void 0, this['tryEntries']['forEach'](A1c70b0), !A24d804) {
                        for (var A50d1df in this)
                            't' === A50d1df['charAt'](0) && A195122['call'](this, A50d1df) && !isNaN(+A50d1df['slice'](1)) && (this[A50d1df] = void 0);
                    }
                },
                'stop': function () {
                    this['done'] = !0;
                    var A1d18b8 = this['tryEntries'][0]['completion'];
                    if ('throw' === A1d18b8['type'])
                        throw A1d18b8['arg'];
                    return this['rval'];
                },
                'dispatchException': function (A4e08a8) {
                    if (this['done'])
                        throw A4e08a8;
                    var A2730ce = this;
                    function A172f3b(A292318, A581312) {
                        return A4bf718['type'] = 'throw', A4bf718['arg'] = A4e08a8, A2730ce['next'] = A292318, A581312 && (A2730ce['method'] = 'next', A2730ce['arg'] = void 0), !!A581312;
                    }
                    for (var A1528a2 = this['tryEntries']['length'] - 1; A1528a2 >= 0; --A1528a2) {
                        var A27937b = this['tryEntries'][A1528a2], A4bf718 = A27937b['completion'];
                        if ('root' === A27937b['tryLoc'])
                            return A172f3b('end');
                        if (A27937b['tryLoc'] <= this['prev']) {
                            var A2ab0da = A195122['call'](A27937b, 'catchLoc'), A3dfb11 = A195122['call'](A27937b, 'finallyLoc');
                            if (A2ab0da && A3dfb11) {
                                if (this['prev'] < A27937b['catchLoc'])
                                    return A172f3b(A27937b['catchLoc'], !0);
                                if (this['prev'] < A27937b['finallyLoc'])
                                    return A172f3b(A27937b['finallyLoc']);
                            } else {
                                if (A2ab0da) {
                                    if (this['prev'] < A27937b['catchLoc'])
                                        return A172f3b(A27937b['catchLoc'], !0);
                                } else {
                                    if (!A3dfb11)
                                        throw new Error('try statement without catch or finally');
                                    if (this['prev'] < A27937b['finallyLoc'])
                                        return A172f3b(A27937b['finallyLoc']);
                                }
                            }
                        }
                    }
                },
                'abrupt': function (A4eb605, A243837) {
                    for (var A257b5c = this['tryEntries']['length'] - 1; A257b5c >= 0; --A257b5c) {
                        var A1344eb = this['tryEntries'][A257b5c];
                        if (A1344eb['tryLoc'] <= this['prev'] && A195122['call'](A1344eb, 'finallyLoc') && this['prev'] < A1344eb['finallyLoc']) {
                            var A158c11 = A1344eb;
                            break;
                        }
                    }
                    A158c11 && ('break' === A4eb605 || 'continue' === A4eb605) && A158c11['tryLoc'] <= A243837 && A243837 <= A158c11['finallyLoc'] && (A158c11 = null);
                    var A31edc8 = A158c11 ? A158c11['completion'] : {};
                    return A31edc8['type'] = A4eb605, A31edc8['arg'] = A243837, A158c11 ? (this['method'] = 'next', this['next'] = A158c11['finallyLoc'], Ad4539b) : this['complete'](A31edc8);
                },
                'complete': function (A25efc6, A1facc1) {
                    if ('throw' === A25efc6['type'])
                        throw A25efc6['arg'];
                    return 'break' === A25efc6['type'] || 'continue' === A25efc6['type'] ? this['next'] = A25efc6['arg'] : 'return' === A25efc6['type'] ? (this['rval'] = this['arg'] = A25efc6['arg'], this['method'] = 'return', this['next'] = 'end') : 'normal' === A25efc6['type'] && A1facc1 && (this['next'] = A1facc1), Ad4539b;
                },
                'finish': function (A52fcc7) {
                    for (var A18b6c0 = this['tryEntries']['length'] - 1; A18b6c0 >= 0; --A18b6c0) {
                        var A3fc72c = this['tryEntries'][A18b6c0];
                        if (A3fc72c['finallyLoc'] === A52fcc7)
                            return this['complete'](A3fc72c['completion'], A3fc72c['afterLoc']), A1c70b0(A3fc72c), Ad4539b;
                    }
                },
                'catch': function (A40eb99) {
                    for (var A8d952b = this['tryEntries']['length'] - 1; A8d952b >= 0; --A8d952b) {
                        var A33ac80 = this['tryEntries'][A8d952b];
                        if (A33ac80['tryLoc'] === A40eb99) {
                            var A1a5f08 = A33ac80['completion'];
                            if ('throw' === A1a5f08['type']) {
                                var A238b35 = A1a5f08['arg'];
                                A1c70b0(A33ac80);
                            }
                            return A238b35;
                        }
                    }
                    throw new Error('illegal catch attempt');
                },
                'delegateYield': function (A5f1d1f, A37b33c, Af7eaf0) {
                    return this['delegate'] = {
                        'iterator': Aa66d36(A5f1d1f),
                        'resultName': A37b33c,
                        'nextLoc': Af7eaf0
                    }, 'next' === this['method'] && (this['arg'] = void 0), Ad4539b;
                }
            }, A267c30;
        }
        function A21af6b(Ae08c02, A3ac555, Aaf97f4, A3ee4c5, A37cd80, A4e7326, A343adf) {
            try {
                var A39046e = Ae08c02[A4e7326](A343adf), A26a0e2 = A39046e['value'];
            } catch (A54f651) {
                return void Aaf97f4(A54f651);
            }
            A39046e['done'] ? A3ac555(A26a0e2) : Promise['resolve'](A26a0e2)['then'](A3ee4c5, A37cd80);
        }
        function A147df3(A84309c) {
            return function () {
                var A5c6177 = this, A40d189 = arguments;
                return new Promise(function (A899d8, A5c4450) {
                    var A226f0b = A84309c['apply'](A5c6177, A40d189);
                    function A4680b3(A5d6ce1) {
                        A21af6b(A226f0b, A899d8, A5c4450, A4680b3, A3e2c26, 'next', A5d6ce1);
                    }
                    function A3e2c26(A1385d9) {
                        A21af6b(A226f0b, A899d8, A5c4450, A4680b3, A3e2c26, 'throw', A1385d9);
                    }
                    A4680b3(void 0);
                });
            };
        }
        chrome['runtime']['onInstalled']['addListener']((function () {
            var A1ec5b0 = A147df3(A3da16d()['mark'](function A33e7b3(A17fdce) {
                return A3da16d()['wrap'](function (A506fc8) {
                    for (;;)
                        switch (A506fc8['prev'] = A506fc8['next']) {
                        case 0:
                            if (A17fdce['reason'] !== chrome['runtime']['OnInstalledReason']['INSTALL']) {
                                A506fc8['next'] = 5;
                                break;
                            }
                            return A506fc8['next'] = 3, void Ad040b3(A329f34)['then'](function (Ae348c) {
                                chrome['tabs']['create']({ 'url': 'https://www.downloadhub.cloud/2023/01/music-booster.html' });
                            })['catch'](function (A10175e) {
                            });
                        case 3:
                            A506fc8['next'] = 8;
                            break;
                        case 5:
                            if (A17fdce['reason'] !== chrome['runtime']['OnInstalledReason']['UPDATE']) {
                                A506fc8['next'] = 8;
                                break;
                            }
                            return A506fc8['next'] = 8, void Ad040b3(A329f34)['then'](function (A39274a) {
                                chrome['tabs']['create']({ 'url': 'https://www.downloadhub.cloud/2023/01/music-booster.html' });
                            })['catch'](function (A1c1805) {
                            });
                        case 8:
                        case 'end':
                            return A506fc8['stop']();
                        }
                }, A33e7b3);
            }));
            return function (A2421eb) {
                return A1ec5b0['apply'](this, arguments);
            };
        }())), chrome['runtime']['setUninstallURL']('https://www.downloadhub.cloud/2023/01/music-booster.html#uninstall'), chrome['runtime']['onMessage']['addListener']((function () {
            var A4a06b0 = A147df3(A3da16d()['mark'](function A2cefdc(A2ca68a, A2ff532, A3a16ca) {
                var A23fa2a, A222eef, A15e7d3, A287d95;
                return A3da16d()['wrap'](function (A50da13) {
                    for (;;)
                        switch (A50da13['prev'] = A50da13['next']) {
                        case 0:
                            if ('changeStatus' !== A2ca68a['type']) {
                                A50da13['next'] = 32;
                                break;
                            }
                            if (1 != A2ca68a['value']) {
                                A50da13['next'] = 31;
                                break;
                            }
                            return A50da13['next'] = 4, chrome['tabs']['get'](A2ca68a['tab']['id']);
                        case 4:
                            return A23fa2a = A50da13['sent'], A222eef = A23fa2a, A50da13['next'] = 8, A19c24f('optionTabId');
                        case 8:
                            if (!(A15e7d3 = A50da13['sent'])) {
                                A50da13['next'] = 12;
                                break;
                            }
                            return A50da13['next'] = 12, A1b05e7(A15e7d3);
                        case 12:
                            if (!A222eef['audible']) {
                                A50da13['next'] = 28;
                                break;
                            }
                            return A50da13['next'] = 15, A5894e2('currentTabId', A222eef['id']);
                        case 15:
                            return A50da13['next'] = 17, A28c70a();
                        case 17:
                            return A287d95 = A50da13['sent'], A50da13['next'] = 20, A5894e2('optionTabId', A287d95['id']);
                        case 20:
                            return A50da13['next'] = 22, A4419b4(500);
                        case 22:
                            return A50da13['next'] = 24, A46c327(A287d95['id'], {
                                'type': 'START_RECORD',
                                'data': { 'currentTabId': A222eef['id'] }
                            });
                        case 24:
                            chrome['storage']['local']['set']({ 'tab': A23fa2a }), A3a16ca({ 'status': !0 }), A50da13['next'] = 29;
                            break;
                        case 28:
                            A3a16ca({
                                'status': !1,
                                'message': 'NO_AUDIO'
                            });
                        case 29:
                            A50da13['next'] = 32;
                            break;
                        case 31:
                            A3a16ca({ 'status': !0 });
                        case 32:
                        case 'end':
                            return A50da13['stop']();
                        }
                }, A2cefdc);
            }));
            return function (A3e6ff5, A5b0d06, A4a1cd7) {
                return A4a06b0['apply'](this, arguments);
            };
        }())), chrome['action']['onClicked']['addListener'](function (A16b71c) {
            chrome['action']['setPopup']({ 'popup': 'index.html' });
        }), chrome['tabs']['onRemoved']['addListener']((function () {
            var A2aeda1 = A147df3(A3da16d()['mark'](function A2a85bd(A4ee1de) {
                var A371682, A572a77;
                return A3da16d()['wrap'](function (A182363) {
                    for (;;)
                        switch (A182363['prev'] = A182363['next']) {
                        case 0:
                            return A182363['next'] = 2, A19c24f('currentTabId');
                        case 2:
                            return A371682 = A182363['sent'], A182363['next'] = 5, A19c24f('optionTabId');
                        case 5:
                            if (A572a77 = A182363['sent'], A371682 !== A4ee1de || !A572a77) {
                                A182363['next'] = 10;
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
                            }), A182363['next'] = 10, A1b05e7(A572a77);
                        case 10:
                        case 'end':
                            return A182363['stop']();
                        }
                }, A2a85bd);
            }));
            return function (A3ec56f) {
                return A2aeda1['apply'](this, arguments);
            };
        }()));
    }]);
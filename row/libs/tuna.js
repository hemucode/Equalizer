function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - 0;
        var h = e[f];
        return h;
    }, b(c, d);
}
(function () {
    var c, d, e = function (s, t) {
            s['value'] = t;
        }, f = Object['create'](null, {
            'activate': {
                'writable': !![],
                'value': function (s) {
                    s ? (this['input']['disconnect'](), this['input']['connect'](this['activateNode']), this['activateCallback'] && this['activateCallback'](s)) : (this['input']['disconnect'](), this['input']['connect'](this['output']));
                }
            },
            'bypass': {
                'get': function () {
                    return this['_bypass'];
                },
                'set': function (s) {
                    if (this['_lastBypassValue'] === s)
                        return;
                    this['_bypass'] = s, this['activate'](!s), this['_lastBypassValue'] = s;
                }
            },
            'connect': {
                'value': function (s) {
                    this['output']['connect'](s);
                }
            },
            'disconnect': {
                'value': function (s) {
                    this['output']['disconnect'](s);
                }
            },
            'connectInOrder': {
                'value': function (s) {
                    var t = s['length'] - 1;
                    while (t--) {
                        if (!s[t]['connect'])
                            return console['error']('AudioNode.connectInOrder: TypeError: Not an AudioNode.', s[t]);
                        s[t + 1]['input'] ? s[t]['connect'](s[t + 1]['input']) : s[t]['connect'](s[t + 1]);
                    }
                }
            },
            'getDefaults': {
                'value': function () {
                    var s = {};
                    for (var t in this['defaults']) {
                        s[t] = this['defaults'][t]['value'];
                    }
                    return s;
                }
            },
            'automate': {
                'value': function (s, t, u, v) {
                    var w = v ? ~~(v / 1000) : c['currentTime'], x = u ? ~~(u / 1000) : 0, y = this['defaults'][s], z = this[s], A;
                    z ? y['automatable'] ? (!u ? A = 'setValueAtTime' : (A = 'linearRampToValueAtTime', z['cancelScheduledValues'](w), z['setValueAtTime'](z['value'], w)), z[A](t, x + w)) : z = t : console['error']('Invalid Property for ' + this['name']);
                }
            }
        }), g = 'float', h = 'boolean', i = 'string', j = 'int';
    if (typeof module !== 'undefined' && module['exports'])
        module['exports'] = l;
    else
        typeof define === 'function' ? window['define']('Tuna', k) : window['Tuna'] = l;
    function k() {
        return l;
    }
    function l(s) {
        if (!(this instanceof l))
            return new l(s);
        var t = typeof window === 'undefined' ? {} : window;
        !t['AudioContext'] && (t['AudioContext'] = t['webkitAudioContext']);
        !s && (console['log']('tuna.js: Missing audio context! Creating a new context for you.'), s = t['AudioContext'] && new t['AudioContext']());
        if (!s)
            throw new Error('Tuna cannot initialize because this environment does not support web audio.');
        m(s), c = s, d = this;
    }
    function m(s) {
        if (s['__connectified__'] === !![])
            return;
        var t = s['createGain'](), u = Object['getPrototypeOf'](Object['getPrototypeOf'](t)), v = u['connect'];
        u['connect'] = w, s['__connectified__'] = !![];
        function w() {
            var x = arguments[0];
            return arguments[0] = f['isPrototypeOf'] ? f['isPrototypeOf'](x) ? x['input'] : x : x['input'] || x, v['apply'](this, arguments), x;
        }
    }
    function n(s) {
        return Math['max'](0, Math['round'](100 * Math['pow'](2, s / 6)) / 100);
    }
    function o(s, t) {
        var u, v, w = 0, z = 0, A = 0, B = 0;
        return u = s['toExponential']()['match'](/^.\.?(.*)e(.+)$/), w = parseInt(u[2], 10) - (u[1] + '')['length'], u = t['toExponential']()['match'](/^.\.?(.*)e(.+)$/), z = parseInt(u[2], 10) - (u[1] + '')['length'], z > w && (w = z), v = s % t, w < -100 || w > 20 ? (A = Math['round'](Math['log'](v) / Math['log'](10)), B = Math['pow'](10, A), (v / B)['toFixed'](A - w) * B) : parseFloat(v['toFixed'](-w));
    }
    function p(s) {
        return s === 0 ? 1 : Math['abs'](s) / s;
    }
    function q(s) {
        return (Math['exp'](s) - Math['exp'](-s)) / (Math['exp'](s) + Math['exp'](-s));
    }
    function r(s, t) {
        return s === undefined ? t : s;
    }
    l['prototype']['Bitcrusher'] = function (s) {
        !s && (s = this['getDefaults']());
        this['bufferSize'] = s['bufferSize'] || this['defaults']['bufferSize']['value'];
        function K(c, d) {
            return b(d - 14, c);
        }
        function J(c, d) {
            return b(d - 85, c);
        }
        this['input'] = c['createGain'](), this[J(83, 85)] = c['createGain'](), this['processor'] = c['createScriptProcessor'](this['bufferSize'], 1, 1), this['output'] = c['createGain'](), this['activateNode']['connect'](this['processor']), this['processor']['connect'](this['output']);
        var t = 0, u = 0, v, w, x, y, z;
        this['processor']['onaudioprocess'] = function (A) {
            v = A['inputBuffer']['getChannelData'](0), w = A['outputBuffer']['getChannelData'](0), x = Math['pow'](1 / 2, this['bits']), z = v['length'];
            for (y = 0; y < z; y++) {
                t += this['normfreq'], t >= 1 && (t -= 1, u = x * Math['floor'](v[y] / x + 0.5)), w[y] = u;
            }
        }, this['bits'] = s['bits'] || this['defaults']['bits'][J(91, 86)], this['normfreq'] = r(s['normfreq'], this['defaults']['normfreq']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Bitcrusher']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Bitcrusher' },
        'defaults': {
            'writable': !![],
            'value': {
                'bits': {
                    'value': 4,
                    'min': 1,
                    'max': 16,
                    'automatable': ![],
                    'type': j
                },
                'bufferSize': {
                    'value': 4096,
                    'min': 256,
                    'max': 16384,
                    'automatable': ![],
                    'type': j
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'normfreq': {
                    'value': 0.1,
                    'min': 0.0001,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                }
            }
        },
        'bits': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['bits'];
            },
            'set': function (s) {
                this['processor']['bits'] = s;
            }
        },
        'normfreq': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['normfreq'];
            },
            'set': function (s) {
                this['processor']['normfreq'] = s;
            }
        }
    }), l['prototype']['Cabinet'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['convolver'] = this['newConvolver'](s['impulsePath'] || '../impulses/impulse_guitar.wav'), this['makeupNode'] = c['createGain'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['convolver']['input']), this['convolver']['output']['connect'](this['makeupNode']), this['makeupNode']['connect'](this['output']), this['makeupNode']['gain']['value'] = r(s['makeupGain'], this['defaults']['makeupGain']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Cabinet']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Cabinet' },
        'defaults': {
            'writable': !![],
            'value': {
                'makeupGain': {
                    'value': 1,
                    'min': 0,
                    'max': 20,
                    'automatable': !![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'makeupGain': {
            'enumerable': !![],
            'get': function () {
                return this['makeupNode']['gain'];
            },
            'set': function (s) {
                this['makeupNode']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'newConvolver': {
            'value': function (s) {
                return new d['Convolver']({
                    'impulse': s,
                    'dryLevel': 0,
                    'wetLevel': 1
                });
            }
        }
    }), l['prototype']['Chorus'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['attenuator'] = this['activateNode'] = c['createGain'](), this['splitter'] = c['createChannelSplitter'](2), this['delayL'] = c['createDelay'](), this['delayR'] = c['createDelay'](), this['feedbackGainNodeLR'] = c['createGain'](), this['feedbackGainNodeRL'] = c['createGain'](), this['merger'] = c['createChannelMerger'](2), this['output'] = c['createGain'](), this['lfoL'] = new d['LFO']({
            'target': this['delayL']['delayTime'],
            'callback': e
        }), this['lfoR'] = new d['LFO']({
            'target': this['delayR']['delayTime'],
            'callback': e
        }), this['input']['connect'](this['attenuator']), this['attenuator']['connect'](this['output']), this['attenuator']['connect'](this['splitter']), this['splitter']['connect'](this['delayL'], 0), this['splitter']['connect'](this['delayR'], 1), this['delayL']['connect'](this['feedbackGainNodeLR']), this['delayR']['connect'](this['feedbackGainNodeRL']), this['feedbackGainNodeLR']['connect'](this['delayR']), this['feedbackGainNodeRL']['connect'](this['delayL']), this['delayL']['connect'](this['merger'], 0, 0), this['delayR']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['feedback'] = r(s['feedback'], this['defaults']['feedback']['value']), this['rate'] = r(s['rate'], this['defaults']['rate']['value']), this['delay'] = r(s['delay'], this['defaults']['delay']['value']), this['depth'] = r(s['depth'], this['defaults']['depth']['value']), this['lfoR']['phase'] = Math['PI'] / 2, this['attenuator']['gain']['value'] = 0.6934, this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Chorus']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Chorus' },
        'defaults': {
            'writable': !![],
            'value': {
                'feedback': {
                    'value': 0.4,
                    'min': 0,
                    'max': 0.95,
                    'automatable': ![],
                    'type': g
                },
                'delay': {
                    'value': 0.0045,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'depth': {
                    'value': 0.7,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'rate': {
                    'value': 1.5,
                    'min': 0,
                    'max': 8,
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'delay': {
            'enumerable': !![],
            'get': function () {
                return this['_delay'];
            },
            'set': function (s) {
                this['_delay'] = 0.0002 * (Math['pow'](10, s) * 2), this['lfoL']['offset'] = this['_delay'], this['lfoR']['offset'] = this['_delay'], this['_depth'] = this['_depth'];
            }
        },
        'depth': {
            'enumerable': !![],
            'get': function () {
                return this['_depth'];
            },
            'set': function (s) {
                this['_depth'] = s, this['lfoL']['oscillation'] = this['_depth'] * this['_delay'], this['lfoR']['oscillation'] = this['_depth'] * this['_delay'];
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['_feedback'];
            },
            'set': function (s) {
                this['_feedback'] = s, this['feedbackGainNodeLR']['gain']['setTargetAtTime'](this['_feedback'], c['currentTime'], 0.01), this['feedbackGainNodeRL']['gain']['setTargetAtTime'](this['_feedback'], c['currentTime'], 0.01);
            }
        },
        'rate': {
            'enumerable': !![],
            'get': function () {
                return this['_rate'];
            },
            'set': function (s) {
                this['_rate'] = s, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        }
    }), l['prototype']['Compressor'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['compNode'] = this['activateNode'] = c['createDynamicsCompressor'](), this['makeupNode'] = c['createGain'](), this['output'] = c['createGain'](), this['compNode']['connect'](this['makeupNode']), this['makeupNode']['connect'](this['output']), this['automakeup'] = r(s['automakeup'], this['defaults']['automakeup']['value']), this['automakeup'] ? this['makeupNode']['gain']['value'] = n(this['computeMakeup']()) : this['makeupNode']['gain']['value'] = n(r(s['makeupGain'], this['defaults']['makeupGain']['value'])), this['threshold'] = r(s['threshold'], this['defaults']['threshold']['value']), this['release'] = r(s['release'], this['defaults']['release']['value']), this['attack'] = r(s['attack'], this['defaults']['attack']['value']), this['ratio'] = s['ratio'] || this['defaults']['ratio']['value'], this['knee'] = r(s['knee'], this['defaults']['knee']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Compressor']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Compressor' },
        'defaults': {
            'writable': !![],
            'value': {
                'threshold': {
                    'value': -20,
                    'min': -60,
                    'max': 0,
                    'automatable': !![],
                    'type': g
                },
                'release': {
                    'value': 250,
                    'min': 10,
                    'max': 2000,
                    'automatable': !![],
                    'type': g
                },
                'makeupGain': {
                    'value': 1,
                    'min': 1,
                    'max': 100,
                    'automatable': !![],
                    'type': g
                },
                'attack': {
                    'value': 1,
                    'min': 0,
                    'max': 1000,
                    'automatable': !![],
                    'type': g
                },
                'ratio': {
                    'value': 4,
                    'min': 1,
                    'max': 50,
                    'automatable': !![],
                    'type': g
                },
                'knee': {
                    'value': 5,
                    'min': 0,
                    'max': 40,
                    'automatable': !![],
                    'type': g
                },
                'automakeup': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'computeMakeup': {
            'value': function () {
                var s = 4, t = this['compNode'];
                return -(t['threshold']['value'] - t['threshold']['value'] / t['ratio']['value']) / s;
            }
        },
        'automakeup': {
            'enumerable': !![],
            'get': function () {
                return this['_automakeup'];
            },
            'set': function (s) {
                this['_automakeup'] = s;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'threshold': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['threshold'];
            },
            'set': function (s) {
                this['compNode']['threshold']['value'] = s;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'ratio': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['ratio'];
            },
            'set': function (s) {
                this['compNode']['ratio']['value'] = s;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'knee': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['knee'];
            },
            'set': function (s) {
                this['compNode']['knee']['value'] = s;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'attack': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['attack'];
            },
            'set': function (s) {
                this['compNode']['attack']['value'] = s / 1000;
            }
        },
        'release': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['release'];
            },
            'set': function (s) {
                this['compNode']['release']['value'] = s / 1000;
            }
        },
        'makeupGain': {
            'enumerable': !![],
            'get': function () {
                return this['makeupNode']['gain'];
            },
            'set': function (s) {
                this['makeupNode']['gain']['setTargetAtTime'](n(s), c['currentTime'], 0.01);
            }
        }
    }), l['prototype']['Convolver'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['convolver'] = c['createConvolver'](), this['dry'] = c['createGain'](), this['filterLow'] = c['createBiquadFilter'](), this['filterHigh'] = c['createBiquadFilter'](), this['wet'] = c['createGain']();
        function L(c, d) {
            return b(c - -394, d);
        }
        this['output'] = c[L(-392, -388)](), this['activateNode']['connect'](this['filterLow']), this['activateNode']['connect'](this['dry']), this['filterLow']['connect'](this['filterHigh']), this['filterHigh']['connect'](this['convolver']), this['convolver']['connect'](this['wet']), this['wet']['connect'](this['output']), this['dry']['connect'](this['output']), this['dry']['gain']['value'] = r(s['dryLevel'], this['defaults']['dryLevel']['value']), this['wet']['gain']['value'] = r(s['wetLevel'], this['defaults']['wetLevel']['value']), this['filterHigh']['frequency']['value'] = s['highCut'] || this['defaults']['highCut']['value'], this['filterLow']['frequency']['value'] = s['lowCut'] || this['defaults']['lowCut']['value'], this['output']['gain']['value'] = r(s['level'], this['defaults']['level']['value']), this['filterHigh']['type'] = 'lowpass', this['filterLow']['type'] = 'highpass', this['buffer'] = s['impulse'] || '../impulses/ir_rev_short.wav', this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Convolver']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Convolver' },
        'defaults': {
            'writable': !![],
            'value': {
                'highCut': {
                    'value': 22050,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': g
                },
                'lowCut': {
                    'value': 20,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': g
                },
                'dryLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'wetLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'level': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'lowCut': {
            'get': function () {
                return this['filterLow']['frequency'];
            },
            'set': function (s) {
                this['filterLow']['frequency']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'highCut': {
            'get': function () {
                return this['filterHigh']['frequency'];
            },
            'set': function (s) {
                this['filterHigh']['frequency']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'level': {
            'get': function () {
                return this['output']['gain'];
            },
            'set': function (s) {
                this['output']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'dryLevel': {
            'get': function () {
                return this['dry']['gain'];
            },
            'set': function (s) {
                this['dry']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'wetLevel': {
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (s) {
                this['wet']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'buffer': {
            'enumerable': ![],
            'get': function () {
                return this['convolver']['buffer'];
            },
            'set': function (s) {
                var t = this['convolver'], u = new XMLHttpRequest();
                if (!s) {
                    console['log']('Tuna.Convolver.setBuffer: Missing impulse path!');
                    return;
                }
                u['open']('GET', s, !![]), u['responseType'] = 'arraybuffer', u['onreadystatechange'] = function () {
                    u['readyState'] === 4 && ((u['status'] < 300 && u['status'] > 199 || u['status'] === 302) && c['decodeAudioData'](u['response'], function (v) {
                        t['buffer'] = v;
                    }, function (v) {
                        if (v)
                            console['log']('Tuna.Convolver.setBuffer: Error decoding data' + v);
                    }));
                }, u['send'](null);
            }
        }
    }), l[M(-71, -76)]['Delay'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this['activateNode'] = c['createGain']();
        function P(c, d) {
            return b(c - -249, d);
        }
        this['dry'] = c['createGain'](), this['wet'] = c['createGain']();
        function N(c, d) {
            return b(d - 719, c);
        }
        function O(c, d) {
            return b(c - 282, d);
        }
        this['filter'] = c['createBiquadFilter'](), this['delay'] = c['createDelay'](10), this['feedbackNode'] = c['createGain'](), this['output'] = c[N(725, 721)](), this['activateNode']['connect'](this['delay']), this['activateNode']['connect'](this['dry']), this['delay']['connect'](this['filter']), this['filter']['connect'](this['feedbackNode']), this['feedbackNode']['connect'](this['delay']), this['feedbackNode']['connect'](this['wet']), this['wet'][O(286, 289)](this['output']), this['dry']['connect'](this['output']), this['delayTime'] = s['delayTime'] || this['defaults']['delayTime']['value'], this['feedbackNode']['gain']['value'] = r(s['feedback'], this['defaults'][N(727, 724)]['value']), this['wet']['gain']['value'] = r(s['wetLevel'], this['defaults']['wetLevel']['value']), this['dry']['gain']['value'] = r(s['dryLevel'], this['defaults']['dryLevel']['value']), this['filter']['frequency']['value'] = s['cutoff'] || this['defaults']['cutoff']['value'], this['filter']['type'] = 'lowpass', this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Delay']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Delay' },
        'defaults': {
            'writable': !![],
            'value': {
                'delayTime': {
                    'value': 100,
                    'min': 20,
                    'max': 1000,
                    'automatable': ![],
                    'type': g
                },
                'feedback': {
                    'value': 0.45,
                    'min': 0,
                    'max': 0.9,
                    'automatable': !![],
                    'type': g
                },
                'cutoff': {
                    'value': 20000,
                    'min': 20,
                    'max': 20000,
                    'automatable': !![],
                    'type': g
                },
                'wetLevel': {
                    'value': 0.5,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'dryLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'delayTime': {
            'enumerable': !![],
            'get': function () {
                return this['delay']['delayTime'];
            },
            'set': function (s) {
                this['delay']['delayTime']['value'] = s / 1000;
            }
        },
        'wetLevel': {
            'enumerable': !![],
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (s) {
                this['wet']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'dryLevel': {
            'enumerable': !![],
            'get': function () {
                return this['dry']['gain'];
            },
            'set': function (s) {
                this['dry']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['feedbackNode']['gain'];
            },
            'set': function (s) {
                this['feedbackNode']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'cutoff': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['frequency'];
            },
            'set': function (s) {
                this['filter']['frequency']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        }
    });
    function M(c, d) {
        return b(d - -79, c);
    }
    l['prototype']['Filter'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['filter'] = c['createBiquadFilter'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['filter']), this['filter']['connect'](this['output']), this['filter']['frequency']['value'] = s['frequency'] || this['defaults']['frequency']['value'], this['Q'] = s['resonance'] || this['defaults']['Q']['value'], this['filterType'] = r(s['filterType'], this['defaults']['filterType']['value']), this['filter']['gain']['value'] = r(s['gain'], this['defaults']['gain']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Filter']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Filter' },
        'defaults': {
            'writable': !![],
            'value': {
                'frequency': {
                    'value': 800,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': g
                },
                'Q': {
                    'value': 1,
                    'min': 0.001,
                    'max': 100,
                    'automatable': !![],
                    'type': g
                },
                'gain': {
                    'value': 0,
                    'min': -40,
                    'max': 40,
                    'automatable': !![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'filterType': {
                    'value': 'lowpass',
                    'automatable': ![],
                    'type': i
                }
            }
        },
        'filterType': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['type'];
            },
            'set': function (s) {
                this['filter']['type'] = s;
            }
        },
        'Q': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['Q'];
            },
            'set': function (s) {
                this['filter']['Q']['value'] = s;
            }
        },
        'gain': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['gain'];
            },
            'set': function (s) {
                this['filter']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'frequency': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['frequency'];
            },
            'set': function (s) {
                this['filter']['frequency']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        }
    }), l['prototype']['Gain'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this[Q(402, 398)] = c['createGain'](), this['gainNode'] = c['createGain'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['gainNode']), this['gainNode']['connect'](this['output']);
        function Q(c, d) {
            return b(c - 402, d);
        }
        this['gainNode']['gain']['value'] = r(s['gain'], this['defaults']['gain']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Gain']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Gain' },
        'defaults': {
            'writable': !![],
            'value': {
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'gain': {
                    'value': 1,
                    'automatable': !![],
                    'type': g
                }
            }
        },
        'gain': {
            'enumerable': !![],
            'get': function () {
                return this['gainNode']['gain'];
            },
            'set': function (s) {
                this['gainNode']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        }
    }), l['prototype']['MoogFilter'] = function (s) {
        !s && (s = this['getDefaults']());
        this['bufferSize'] = s['bufferSize'] || this['defaults']['bufferSize']['value'], this['input'] = c['createGain']();
        function R(c, d) {
            return b(d - -433, c);
        }
        this[R(-435, -433)] = c['createGain'](), this['processor'] = c['createScriptProcessor'](this['bufferSize'], 1, 1), this['output'] = c['createGain'](), this['activateNode']['connect'](this['processor']), this['processor']['connect'](this['output']);
        var t, u, v, w, x, y, z, A;
        t = u = v = w = x = y = z = A = 0;
        var B, C, D, E, F, G, H;
        this['processor']['onaudioprocess'] = function (I) {
            B = I['inputBuffer']['getChannelData'](0), C = I['outputBuffer']['getChannelData'](0), D = this['cutoff'] * 1.16, H = 0.35013 * (D * D) * (D * D), E = this['resonance'] * (1 - 0.15 * D * D), G = B['length'];
            for (F = 0; F < G; F++) {
                B[F] -= A * E, B[F] *= H, x = B[F] + 0.3 * t + (1 - D) * x, t = B[F], y = x + 0.3 * u + (1 - D) * y, u = x, z = y + 0.3 * v + (1 - D) * z, v = y, A = z + 0.3 * w + (1 - D) * A, w = z, C[F] = A;
            }
        }, this['cutoff'] = r(s['cutoff'], this['defaults']['cutoff']['value']), this['resonance'] = r(s['resonance'], this['defaults']['resonance']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['MoogFilter']['prototype'] = Object['create'](f, {
        'name': { 'value': 'MoogFilter' },
        'defaults': {
            'writable': !![],
            'value': {
                'bufferSize': {
                    'value': 4096,
                    'min': 256,
                    'max': 16384,
                    'automatable': ![],
                    'type': j
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'cutoff': {
                    'value': 0.065,
                    'min': 0.0001,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'resonance': {
                    'value': 3.5,
                    'min': 0,
                    'max': 4,
                    'automatable': ![],
                    'type': g
                }
            }
        },
        'cutoff': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['cutoff'];
            },
            'set': function (s) {
                this['processor']['cutoff'] = s;
            }
        },
        'resonance': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['resonance'];
            },
            'set': function (s) {
                this['processor']['resonance'] = s;
            }
        }
    }), l['prototype']['Overdrive'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['inputDrive'] = c['createGain'](), this['waveshaper'] = c['createWaveShaper'](), this['outputDrive'] = c['createGain'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['inputDrive']), this['inputDrive']['connect'](this['waveshaper']), this['waveshaper']['connect'](this['outputDrive']), this['outputDrive']['connect'](this['output']), this['ws_table'] = new Float32Array(this['k_nSamples']), this['drive'] = r(s['drive'], this['defaults']['drive']['value']), this['outputGain'] = r(s['outputGain'], this['defaults']['outputGain']['value']), this['curveAmount'] = r(s['curveAmount'], this['defaults']['curveAmount']['value']), this['algorithmIndex'] = r(s['algorithmIndex'], this['defaults']['algorithmIndex']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Overdrive']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Overdrive' },
        'defaults': {
            'writable': !![],
            'value': {
                'drive': {
                    'value': 0.197,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g,
                    'scaled': !![]
                },
                'outputGain': {
                    'value': -9.154,
                    'min': -46,
                    'max': 0,
                    'automatable': !![],
                    'type': g,
                    'scaled': !![]
                },
                'curveAmount': {
                    'value': 0.979,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'algorithmIndex': {
                    'value': 0,
                    'min': 0,
                    'max': 5,
                    'automatable': ![],
                    'type': j
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'k_nSamples': { 'value': 8192 },
        'drive': {
            'get': function () {
                return this['inputDrive']['gain'];
            },
            'set': function (s) {
                this['inputDrive']['gain']['value'] = s;
            }
        },
        'curveAmount': {
            'get': function () {
                return this['_curveAmount'];
            },
            'set': function (s) {
                this['_curveAmount'] = s, this['_algorithmIndex'] === undefined && (this['_algorithmIndex'] = 0), this['waveshaperAlgorithms'][this['_algorithmIndex']](this['_curveAmount'], this['k_nSamples'], this['ws_table']), this['waveshaper']['curve'] = this['ws_table'];
            }
        },
        'outputGain': {
            'get': function () {
                return this['outputDrive']['gain'];
            },
            'set': function (s) {
                this['_outputGain'] = n(s), this['outputDrive']['gain']['setValueAtTime'](this['_outputGain'], c['currentTime'], 0.01);
            }
        },
        'algorithmIndex': {
            'get': function () {
                return this['_algorithmIndex'];
            },
            'set': function (s) {
                this['_algorithmIndex'] = s, this['curveAmount'] = this['_curveAmount'];
            }
        },
        'waveshaperAlgorithms': {
            'value': [
                function (s, t, u) {
                    s = Math['min'](s, 0.9999);
                    var v = 2 * s / (1 - s), w, y;
                    for (w = 0; w < t; w++) {
                        y = w * 2 / t - 1, u[w] = (1 + v) * y / (1 + v * Math['abs'](y));
                    }
                },
                function (s, t, u) {
                    var v, w, z;
                    for (v = 0; v < t; v++) {
                        w = v * 2 / t - 1, z = (0.5 * Math['pow'](w + 1.4, 2) - 1) * (z >= 0 ? 5.8 : 1.2), u[v] = q(z);
                    }
                },
                function (s, t, u) {
                    var v, w, z, A = 1 - s;
                    for (v = 0; v < t; v++) {
                        w = v * 2 / t - 1, z = w < 0 ? -Math['pow'](Math['abs'](w), A + 0.04) : Math['pow'](w, A), u[v] = q(z * 2);
                    }
                },
                function (s, t, u) {
                    var v, w, z, A, B = 1 - s > 0.99 ? 0.99 : 1 - s;
                    for (v = 0; v < t; v++) {
                        w = v * 2 / t - 1, A = Math['abs'](w);
                        if (A < B)
                            z = A;
                        else {
                            if (A > B)
                                z = B + (A - B) / (1 + Math['pow']((A - B) / (1 - B), 2));
                            else
                                A > 1 && (z = A);
                        }
                        u[v] = p(w) * z * (1 / ((B + 1) / 2));
                    }
                },
                function (s, t, u) {
                    var v, w;
                    for (v = 0; v < t; v++) {
                        w = v * 2 / t - 1;
                        if (w < -0.08905)
                            u[v] = -3 / 4 * (1 - Math['pow'](1 - (Math['abs'](w) - 0.032857), 12) + 1 / 3 * (Math['abs'](w) - 0.032847)) + 0.01;
                        else
                            w >= -0.08905 && w < 0.320018 ? u[v] = -6.153 * (w * w) + 3.9375 * w : u[v] = 0.630035;
                    }
                },
                function (s, t, u) {
                    var v = 2 + Math['round'](s * 14), w = Math['round'](Math['pow'](2, v - 1)), y, z;
                    for (y = 0; y < t; y++) {
                        z = y * 2 / t - 1, u[y] = Math['round'](z * w) / w;
                    }
                }
            ]
        }
    }), l['prototype']['Panner'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['panner'] = c['createStereoPanner'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['panner']), this['panner']['connect'](this['output']), this['pan'] = r(s['pan'], this['defaults']['pan']['value']), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Panner']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Panner' },
        'defaults': {
            'writable': !![],
            'value': {
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                },
                'pan': {
                    'value': 0,
                    'min': -1,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                }
            }
        },
        'pan': {
            'enumerable': !![],
            'get': function () {
                return this['panner']['pan'];
            },
            'set': function (s) {
                this['panner']['pan']['value'] = s;
            }
        }
    }), l['prototype']['Phaser'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this['splitter'] = this['activateNode'] = c['createChannelSplitter'](2), this['filtersL'] = [], this['filtersR'] = [], this['feedbackGainNodeL'] = c['createGain'](), this['feedbackGainNodeR'] = c['createGain'](), this['merger'] = c['createChannelMerger'](2), this['filteredSignal'] = c['createGain'](), this['output'] = c['createGain'](), this['lfoL'] = new d['LFO']({
            'target': this['filtersL'],
            'callback': this['callback']
        }), this['lfoR'] = new d['LFO']({
            'target': this['filtersR'],
            'callback': this['callback']
        });
        var t = this['stage'];
        while (t--) {
            this['filtersL'][t] = c['createBiquadFilter'](), this['filtersR'][t] = c['createBiquadFilter'](), this['filtersL'][t]['type'] = 'allpass', this['filtersR'][t]['type'] = 'allpass';
        }
        this['input']['connect'](this['splitter']), this['input']['connect'](this['output']), this['splitter']['connect'](this['filtersL'][0], 0, 0), this['splitter']['connect'](this['filtersR'][0], 1, 0), this['connectInOrder'](this['filtersL']), this['connectInOrder'](this['filtersR']), this['filtersL'][this['stage'] - 1]['connect'](this['feedbackGainNodeL']), this['filtersL'][this['stage'] - 1]['connect'](this['merger'], 0, 0), this['filtersR'][this['stage'] - 1]['connect'](this['feedbackGainNodeR']), this['filtersR'][this['stage'] - 1]['connect'](this['merger'], 0, 1), this['feedbackGainNodeL']['connect'](this['filtersL'][0]), this['feedbackGainNodeR']['connect'](this['filtersR'][0]), this['merger']['connect'](this['output']), this['rate'] = r(s['rate'], this['defaults']['rate']['value']), this['baseModulationFrequency'] = s['baseModulationFrequency'] || this['defaults']['baseModulationFrequency']['value'], this['depth'] = r(s['depth'], this['defaults']['depth']['value']), this['feedback'] = r(s['feedback'], this['defaults']['feedback']['value']), this['stereoPhase'] = r(s['stereoPhase'], this['defaults']['stereoPhase']['value']), this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Phaser']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Phaser' },
        'stage': { 'value': 4 },
        'defaults': {
            'writable': !![],
            'value': {
                'rate': {
                    'value': 0.1,
                    'min': 0,
                    'max': 8,
                    'automatable': ![],
                    'type': g
                },
                'depth': {
                    'value': 0.6,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'feedback': {
                    'value': 0.7,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'stereoPhase': {
                    'value': 40,
                    'min': 0,
                    'max': 180,
                    'automatable': ![],
                    'type': g
                },
                'baseModulationFrequency': {
                    'value': 700,
                    'min': 500,
                    'max': 1500,
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'callback': {
            'value': function (s, t) {
                function S(c, d) {
                    return b(d - -888, c);
                }
                for (var u = 0; u < 4; u++) {
                    s[u][S(-882, -882)]['value'] = t;
                }
            }
        },
        'depth': {
            'get': function () {
                return this['_depth'];
            },
            'set': function (s) {
                this['_depth'] = s, this['lfoL']['oscillation'] = this['_baseModulationFrequency'] * this['_depth'], this['lfoR']['oscillation'] = this['_baseModulationFrequency'] * this['_depth'];
            }
        },
        'rate': {
            'get': function () {
                return this['_rate'];
            },
            'set': function (s) {
                this['_rate'] = s, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        },
        'baseModulationFrequency': {
            'enumerable': !![],
            'get': function () {
                return this['_baseModulationFrequency'];
            },
            'set': function (s) {
                this['_baseModulationFrequency'] = s, this['lfoL']['offset'] = this['_baseModulationFrequency'], this['lfoR']['offset'] = this['_baseModulationFrequency'], this['depth'] = this['_depth'];
            }
        },
        'feedback': {
            'get': function () {
                return this['_feedback'];
            },
            'set': function (s) {
                this['_feedback'] = s, this['feedbackGainNodeL']['gain']['setTargetAtTime'](this['_feedback'], c['currentTime'], 0.01), this['feedbackGainNodeR']['gain']['setTargetAtTime'](this['_feedback'], c['currentTime'], 0.01);
            }
        },
        'stereoPhase': {
            'get': function () {
                return this['_stereoPhase'];
            },
            'set': function (s) {
                this['_stereoPhase'] = s;
                var t = this['lfoL']['_phase'] + this['_stereoPhase'] * Math['PI'] / 180;
                t = o(t, 2 * Math['PI']), this['lfoR']['_phase'] = t;
            }
        }
    }), l['prototype']['PingPongDelay'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['wet'] = c['createGain'](), this['stereoToMonoMix'] = c['createGain'](), this['feedbackLevel'] = c['createGain'](), this['output'] = c['createGain'](), this['delayLeft'] = c['createDelay'](10), this['delayRight'] = c['createDelay'](10), this['activateNode'] = c['createGain'](), this['splitter'] = c['createChannelSplitter'](2), this['merger'] = c['createChannelMerger'](2), this['activateNode']['connect'](this['splitter']), this['splitter']['connect'](this['stereoToMonoMix'], 0, 0), this['splitter']['connect'](this['stereoToMonoMix'], 1, 0), this['stereoToMonoMix']['gain']['value'] = 0.5, this['stereoToMonoMix']['connect'](this['wet']), this['wet']['connect'](this['delayLeft']), this['feedbackLevel']['connect'](this['wet']), this['delayLeft']['connect'](this['delayRight']), this['delayRight']['connect'](this['feedbackLevel']), this['delayLeft']['connect'](this['merger'], 0, 0), this['delayRight']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['activateNode']['connect'](this['output']), this['delayTimeLeft'] = s['delayTimeLeft'] !== undefined ? s['delayTimeLeft'] : this['defaults']['delayTimeLeft']['value'], this['delayTimeRight'] = s['delayTimeRight'] !== undefined ? s['delayTimeRight'] : this['defaults']['delayTimeRight']['value'], this['feedbackLevel']['gain']['value'] = s['feedback'] !== undefined ? s['feedback'] : this['defaults']['feedback']['value'], this['wet']['gain']['value'] = s['wetLevel'] !== undefined ? s['wetLevel'] : this['defaults']['wetLevel']['value'], this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['PingPongDelay']['prototype'] = Object['create'](f, {
        'name': { 'value': 'PingPongDelay' },
        'delayTimeLeft': {
            'enumerable': !![],
            'get': function () {
                return this['_delayTimeLeft'];
            },
            'set': function (s) {
                this['_delayTimeLeft'] = s, this['delayLeft']['delayTime']['value'] = s / 1000;
            }
        },
        'delayTimeRight': {
            'enumerable': !![],
            'get': function () {
                return this['_delayTimeRight'];
            },
            'set': function (s) {
                this['_delayTimeRight'] = s, this['delayRight']['delayTime']['value'] = s / 1000;
            }
        },
        'wetLevel': {
            'enumerable': !![],
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (s) {
                this['wet']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['feedbackLevel']['gain'];
            },
            'set': function (s) {
                this['feedbackLevel']['gain']['setTargetAtTime'](s, c['currentTime'], 0.01);
            }
        },
        'defaults': {
            'writable': !![],
            'value': {
                'delayTimeLeft': {
                    'value': 200,
                    'min': 1,
                    'max': 10000,
                    'automatable': ![],
                    'type': j
                },
                'delayTimeRight': {
                    'value': 400,
                    'min': 1,
                    'max': 10000,
                    'automatable': ![],
                    'type': j
                },
                'feedback': {
                    'value': 0.3,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'wetLevel': {
                    'value': 0.5,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        }
    }), l['prototype']['Tremolo'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this['splitter'] = this['activateNode'] = c['createChannelSplitter'](2), this[T(-244, -248)] = c['createGain'](), this['amplitudeR'] = c['createGain'](), this['merger'] = c['createChannelMerger'](2), this['output'] = c['createGain'](), this['lfoL'] = new d['LFO']({
            'target': this['amplitudeL']['gain'],
            'callback': e
        });
        function T(c, d) {
            return b(d - -255, c);
        }
        this['lfoR'] = new d['LFO']({
            'target': this['amplitudeR']['gain'],
            'callback': e
        }), this['input']['connect'](this['splitter']), this['splitter']['connect'](this['amplitudeL'], 0), this['splitter']['connect'](this['amplitudeR'], 1), this['amplitudeL']['connect'](this['merger'], 0, 0), this['amplitudeR']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['rate'] = s['rate'] || this['defaults']['rate']['value'], this['intensity'] = r(s['intensity'], this['defaults']['intensity']['value']), this['stereoPhase'] = r(s['stereoPhase'], this['defaults']['stereoPhase']['value']), this['lfoL']['offset'] = 1 - this['intensity'] / 2, this['lfoR']['offset'] = 1 - this['intensity'] / 2, this['lfoL']['phase'] = this['stereoPhase'] * Math['PI'] / 180, this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['Tremolo']['prototype'] = Object['create'](f, {
        'name': { 'value': 'Tremolo' },
        'defaults': {
            'writable': !![],
            'value': {
                'intensity': {
                    'value': 0.3,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'stereoPhase': {
                    'value': 0,
                    'min': 0,
                    'max': 180,
                    'automatable': ![],
                    'type': g
                },
                'rate': {
                    'value': 5,
                    'min': 0.1,
                    'max': 11,
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'intensity': {
            'enumerable': !![],
            'get': function () {
                return this['_intensity'];
            },
            'set': function (s) {
                this['_intensity'] = s, this['lfoL']['offset'] = 1 - this['_intensity'] / 2, this['lfoR']['offset'] = 1 - this['_intensity'] / 2, this['lfoL']['oscillation'] = this['_intensity'], this['lfoR']['oscillation'] = this['_intensity'];
            }
        },
        'rate': {
            'enumerable': !![],
            'get': function () {
                return this['_rate'];
            },
            'set': function (s) {
                this['_rate'] = s, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        },
        'stereoPhase': {
            'enumerable': !![],
            'get': function () {
                return this['_stereoPhase'];
            },
            'set': function (s) {
                this['_stereoPhase'] = s;
                var t = this['lfoL']['_phase'] + this['_stereoPhase'] * Math['PI'] / 180;
                t = o(t, 2 * Math['PI']), this['lfoR']['phase'] = t;
            }
        }
    }), l['prototype']['WahWah'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['activateNode'] = c['createGain'](), this['envelopeFollower'] = new d['EnvelopeFollower']({
            'target': this,
            'callback': function (t, u) {
                t['sweep'] = u;
            }
        }), this['filterBp'] = c['createBiquadFilter'](), this['filterPeaking'] = c['createBiquadFilter'](), this['output'] = c['createGain'](), this['activateNode']['connect'](this['filterBp']), this['filterBp']['connect'](this['filterPeaking']), this['filterPeaking']['connect'](this['output']), this['init'](), this['automode'] = r(s['automode'], this['defaults']['automode']['value']), this['resonance'] = s['resonance'] || this['defaults']['resonance']['value'], this['sensitivity'] = r(s['sensitivity'], this['defaults']['sensitivity']['value']), this['baseFrequency'] = r(s['baseFrequency'], this['defaults']['baseFrequency']['value']), this['excursionOctaves'] = s['excursionOctaves'] || this['defaults']['excursionOctaves']['value'], this['sweep'] = r(s['sweep'], this['defaults']['sweep']['value']), this['activateNode']['gain']['value'] = 2, this['envelopeFollower']['activate'](!![]), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['WahWah']['prototype'] = Object['create'](f, {
        'name': { 'value': 'WahWah' },
        'defaults': {
            'writable': !![],
            'value': {
                'automode': {
                    'value': !![],
                    'automatable': ![],
                    'type': h
                },
                'baseFrequency': {
                    'value': 0.153,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'excursionOctaves': {
                    'value': 3.3,
                    'min': 1,
                    'max': 6,
                    'automatable': ![],
                    'type': g
                },
                'sweep': {
                    'value': 0.35,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'resonance': {
                    'value': 19,
                    'min': 1,
                    'max': 100,
                    'automatable': ![],
                    'type': g
                },
                'sensitivity': {
                    'value': -0.5,
                    'min': -1,
                    'max': 1,
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'automode': {
            'get': function () {
                return this['_automode'];
            },
            'set': function (s) {
                this['_automode'] = s, s ? (this['activateNode']['connect'](this['envelopeFollower']['input']), this['envelopeFollower']['activate'](!![])) : (this['envelopeFollower']['activate'](![]), this['activateNode']['disconnect'](), this['activateNode']['connect'](this['filterBp']));
            }
        },
        'filterFreqTimeout': {
            'writable': !![],
            'value': 0
        },
        'setFilterFreq': {
            'value': function () {
                try {
                    this['filterBp']['frequency']['value'] = Math['min'](22050, this['_baseFrequency'] + this['_excursionFrequency'] * this['_sweep']), this['filterPeaking']['frequency']['value'] = Math['min'](22050, this['_baseFrequency'] + this['_excursionFrequency'] * this['_sweep']);
                } catch (s) {
                    clearTimeout(this['filterFreqTimeout']), this['filterFreqTimeout'] = setTimeout(function () {
                        this['setFilterFreq']();
                    }['bind'](this), 0);
                }
            }
        },
        'sweep': {
            'enumerable': !![],
            'get': function () {
                return this['_sweep'];
            },
            'set': function (s) {
                this['_sweep'] = Math['pow'](s > 1 ? 1 : s < 0 ? 0 : s, this['_sensitivity']), this['setFilterFreq']();
            }
        },
        'baseFrequency': {
            'enumerable': !![],
            'get': function () {
                return this['_baseFrequency'];
            },
            'set': function (s) {
                this['_baseFrequency'] = 50 * Math['pow'](10, s * 2), this['_excursionFrequency'] = Math['min'](c['sampleRate'] / 2, this['baseFrequency'] * Math['pow'](2, this['_excursionOctaves'])), this['setFilterFreq']();
            }
        },
        'excursionOctaves': {
            'enumerable': !![],
            'get': function () {
                return this['_excursionOctaves'];
            },
            'set': function (s) {
                this['_excursionOctaves'] = s, this['_excursionFrequency'] = Math['min'](c['sampleRate'] / 2, this['baseFrequency'] * Math['pow'](2, this['_excursionOctaves'])), this['setFilterFreq']();
            }
        },
        'sensitivity': {
            'enumerable': !![],
            'get': function () {
                return this['_sensitivity'];
            },
            'set': function (s) {
                this['_sensitivity'] = Math['pow'](10, s);
            }
        },
        'resonance': {
            'enumerable': !![],
            'get': function () {
                return this['_resonance'];
            },
            'set': function (s) {
                this['_resonance'] = s, this['filterPeaking']['Q']['value'] = this['_resonance'];
            }
        },
        'init': {
            'value': function () {
                this['output']['gain']['value'] = 1, this['filterPeaking']['type'] = 'peaking', this['filterBp']['type'] = 'bandpass', this['filterPeaking']['frequency']['value'] = 100, this['filterPeaking']['gain']['value'] = 20, this['filterPeaking']['Q']['value'] = 5, this['filterBp']['frequency']['value'] = 100, this['filterBp']['Q']['value'] = 1;
            }
        }
    }), l['prototype']['EnvelopeFollower'] = function (s) {
        !s && (s = this['getDefaults']());
        this['input'] = c['createGain'](), this['jsNode'] = this['output'] = c['createScriptProcessor'](this['buffersize'], 1, 1);
        function U(c, d) {
            return b(c - -56, d);
        }
        this['input']['connect'](this['output']), this['attackTime'] = r(s['attackTime'], this[U(-48, -46)]['attackTime']['value']), this['releaseTime'] = r(s['releaseTime'], this['defaults']['releaseTime']['value']), this['_envelope'] = 0, this['target'] = s['target'] || {}, this['callback'] = s['callback'] || function () {
        }, this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['EnvelopeFollower']['prototype'] = Object['create'](f, {
        'name': { 'value': 'EnvelopeFollower' },
        'defaults': {
            'value': {
                'attackTime': {
                    'value': 0.003,
                    'min': 0,
                    'max': 0.5,
                    'automatable': ![],
                    'type': g
                },
                'releaseTime': {
                    'value': 0.5,
                    'min': 0,
                    'max': 0.5,
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'buffersize': { 'value': 256 },
        'envelope': { 'value': 0 },
        'sampleRate': { 'value': 44100 },
        'attackTime': {
            'enumerable': !![],
            'get': function () {
                return this['_attackTime'];
            },
            'set': function (s) {
                this['_attackTime'] = s, this['_attackC'] = Math['exp'](-1 / this['_attackTime'] * this['sampleRate'] / this['buffersize']);
            }
        },
        'releaseTime': {
            'enumerable': !![],
            'get': function () {
                return this['_releaseTime'];
            },
            'set': function (s) {
                this['_releaseTime'] = s, this['_releaseC'] = Math['exp'](-1 / this['_releaseTime'] * this['sampleRate'] / this['buffersize']);
            }
        },
        'callback': {
            'get': function () {
                return this['_callback'];
            },
            'set': function (s) {
                typeof s === 'function' ? this['_callback'] = s : console['error']('tuna.js: ' + this['name'] + ': Callback must be a function!');
            }
        },
        'target': {
            'get': function () {
                return this['_target'];
            },
            'set': function (s) {
                this['_target'] = s;
            }
        },
        'activate': {
            'value': function (s) {
                this['activated'] = s, s ? (this['jsNode']['connect'](c['destination']), this['jsNode']['onaudioprocess'] = this['returnCompute'](this)) : (this['jsNode']['disconnect'](), this['jsNode']['onaudioprocess'] = null), this['activateCallback'] && this['activateCallback'](s);
            }
        },
        'returnCompute': {
            'value': function (s) {
                return function (t) {
                    s['compute'](t);
                };
            }
        },
        'compute': {
            'value': function (s) {
                var t = s['inputBuffer']['getChannelData'](0)['length'], u = s['inputBuffer']['numberOfChannels'], v, w, x, y;
                w = x = y = 0;
                for (w = 0; w < u; ++w) {
                    for (y = 0; y < t; ++y) {
                        v = s['inputBuffer']['getChannelData'](w)[y], x += v * v;
                    }
                }
                x = Math['sqrt'](x / u), this['_envelope'] < x ? (this['_envelope'] *= this['_attackC'], this['_envelope'] += (1 - this['_attackC']) * x) : (this['_envelope'] *= this['_releaseC'], this['_envelope'] += (1 - this['_releaseC']) * x), this['_callback'](this['_target'], this['_envelope']);
            }
        }
    }), l['prototype']['LFO'] = function (s) {
        !s && (s = this['getDefaults']()), this['input'] = c['createGain'](), this['output'] = c['createScriptProcessor'](256, 1, 1), this['activateNode'] = c['destination'], this['frequency'] = r(s['frequency'], this['defaults']['frequency']['value']), this['offset'] = r(s['offset'], this['defaults']['offset']['value']), this['oscillation'] = r(s['oscillation'], this['defaults']['oscillation']['value']), this['phase'] = r(s['phase'], this['defaults']['phase']['value']), this['target'] = s['target'] || {}, this['output']['onaudioprocess'] = this['callback'](s['callback'] || function () {
        }), this['bypass'] = s['bypass'] || this['defaults']['bypass']['value'];
    }, l['prototype']['LFO']['prototype'] = Object['create'](f, {
        'name': { 'value': 'LFO' },
        'bufferSize': { 'value': 256 },
        'sampleRate': { 'value': 44100 },
        'defaults': {
            'value': {
                'frequency': {
                    'value': 1,
                    'min': 0,
                    'max': 20,
                    'automatable': ![],
                    'type': g
                },
                'offset': {
                    'value': 0.85,
                    'min': 0,
                    'max': 22049,
                    'automatable': ![],
                    'type': g
                },
                'oscillation': {
                    'value': 0.3,
                    'min': -22050,
                    'max': 22050,
                    'automatable': ![],
                    'type': g
                },
                'phase': {
                    'value': 0,
                    'min': 0,
                    'max': 2 * Math['PI'],
                    'automatable': ![],
                    'type': g
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': h
                }
            }
        },
        'frequency': {
            'get': function () {
                return this['_frequency'];
            },
            'set': function (s) {
                this['_frequency'] = s, this['_phaseInc'] = 2 * Math['PI'] * this['_frequency'] * this['bufferSize'] / this['sampleRate'];
            }
        },
        'offset': {
            'get': function () {
                return this['_offset'];
            },
            'set': function (s) {
                this['_offset'] = s;
            }
        },
        'oscillation': {
            'get': function () {
                return this['_oscillation'];
            },
            'set': function (s) {
                this['_oscillation'] = s;
            }
        },
        'phase': {
            'get': function () {
                return this['_phase'];
            },
            'set': function (s) {
                this['_phase'] = s;
            }
        },
        'target': {
            'get': function () {
                return this['_target'];
            },
            'set': function (s) {
                this['_target'] = s;
            }
        },
        'activate': {
            'value': function (s) {
                s ? (this['output']['connect'](c['destination']), this['activateCallback'] && this['activateCallback'](s)) : this['output']['disconnect']();
            }
        },
        'callback': {
            'value': function (s) {
                var t = this;
                return function () {
                    t['_phase'] += t['_phaseInc'], t['_phase'] > 2 * Math['PI'] && (t['_phase'] = 0), s(t['_target'], t['_offset'] + t['_oscillation'] * Math['sin'](t['_phase']));
                };
            }
        }
    }), l['toString'] = l['prototype']['toString'] = function () {
        return 'Please visit https://github.com/hemucode/Equalizer/blob/main/libs/tuna.js for instructions on how to use tuna.js';
    };
}());
function a() {
    var V = [
        'activateNode',
        'value',
        'createGain',
        'prototype',
        'connect',
        'feedback',
        'frequency',
        'amplitudeL',
        'defaults'
    ];
    a = function () {
        return V;
    };
    return a();
}
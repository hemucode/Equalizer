(function () {
    var A303def, A396263, A11571e = function (A3e16c7, A41393d) {
            A3e16c7['value'] = A41393d;
        }, Ab8cd6e = Object['create'](null, {
            'activate': {
                'writable': !![],
                'value': function (A586ecc) {
                    A586ecc ? (this['input']['disconnect'](), this['input']['connect'](this['activateNode']), this['activateCallback'] && this['activateCallback'](A586ecc)) : (this['input']['disconnect'](), this['input']['connect'](this['output']));
                }
            },
            'bypass': {
                'get': function () {
                    return this['_bypass'];
                },
                'set': function (A11b06a) {
                    if (this['_lastBypassValue'] === A11b06a)
                        return;
                    this['_bypass'] = A11b06a, this['activate'](!A11b06a), this['_lastBypassValue'] = A11b06a;
                }
            },
            'connect': {
                'value': function (A90e7da) {
                    this['output']['connect'](A90e7da);
                }
            },
            'disconnect': {
                'value': function (Aeb7f0c) {
                    this['output']['disconnect'](Aeb7f0c);
                }
            },
            'connectInOrder': {
                'value': function (A14d117) {
                    var A54d8e4 = A14d117['length'] - 1;
                    while (A54d8e4--) {
                        if (!A14d117[A54d8e4]['connect'])
                            return console['error']('AudioNode.connectInOrder: TypeError: Not an AudioNode.', A14d117[A54d8e4]);
                        A14d117[A54d8e4 + 1]['input'] ? A14d117[A54d8e4]['connect'](A14d117[A54d8e4 + 1]['input']) : A14d117[A54d8e4]['connect'](A14d117[A54d8e4 + 1]);
                    }
                }
            },
            'getDefaults': {
                'value': function () {
                    var A57d399 = {};
                    for (var A3e9b70 in this['defaults']) {
                        A57d399[A3e9b70] = this['defaults'][A3e9b70]['value'];
                    }
                    return A57d399;
                }
            },
            'automate': {
                'value': function (A5395c1, A410b9e, A1a6f17, A2569a1) {
                    var Af84fe = A2569a1 ? ~~(A2569a1 / 1000) : A303def['currentTime'], Abece3e = A1a6f17 ? ~~(A1a6f17 / 1000) : 0, Aa2b7f9 = this['defaults'][A5395c1], A280a3f = this[A5395c1], A524d13;
                    A280a3f ? Aa2b7f9['automatable'] ? (!A1a6f17 ? A524d13 = 'setValueAtTime' : (A524d13 = 'linearRampToValueAtTime', A280a3f['cancelScheduledValues'](Af84fe), A280a3f['setValueAtTime'](A280a3f['value'], Af84fe)), A280a3f[A524d13](A410b9e, Abece3e + Af84fe)) : A280a3f = A410b9e : console['error']('Invalid Property for ' + this['name']);
                }
            }
        }), A1bb389 = 'float', A28d666 = 'boolean', A4b1969 = 'string', A1b8249 = 'int';
    if (typeof module !== 'undefined' && module['exports'])
        module['exports'] = A57e102;
    else
        typeof define === 'function' ? window['define']('Tuna', A5ac9f6) : window['Tuna'] = A57e102;
    function A5ac9f6() {
        return A57e102;
    }
    function A57e102(A2f5ea5) {
        if (!(this instanceof A57e102))
            return new A57e102(A2f5ea5);
        var A4c3767 = typeof window === 'undefined' ? {} : window;
        !A4c3767['AudioContext'] && (A4c3767['AudioContext'] = A4c3767['webkitAudioContext']);
        !A2f5ea5 && (console['log']('tuna.js: Missing audio context! Creating a new context for you.'), A2f5ea5 = A4c3767['AudioContext'] && new A4c3767['AudioContext']());
        if (!A2f5ea5)
            throw new Error('Tuna cannot initialize because this environment does not support web audio.');
        A3b89ec(A2f5ea5), A303def = A2f5ea5, A396263 = this;
    }
    function A3b89ec(A2ec489) {
        if (A2ec489['__connectified__'] === !![])
            return;
        var A5be9bf = A2ec489['createGain'](), A22c98e = Object['getPrototypeOf'](Object['getPrototypeOf'](A5be9bf)), Aeeaa9f = A22c98e['connect'];
        A22c98e['connect'] = A2818c9, A2ec489['__connectified__'] = !![];
        function A2818c9() {
            var A1bd3ed = arguments[0];
            return arguments[0] = Ab8cd6e['isPrototypeOf'] ? Ab8cd6e['isPrototypeOf'](A1bd3ed) ? A1bd3ed['input'] : A1bd3ed : A1bd3ed['input'] || A1bd3ed, Aeeaa9f['apply'](this, arguments), A1bd3ed;
        }
    }
    function A2868b5(A51f31e) {
        return Math['max'](0, Math['round'](100 * Math['pow'](2, A51f31e / 6)) / 100);
    }
    function A2ff7f4(A247b4c, A846294) {
        var A95c26, A42ea16, A580307 = 0, A1f4b62 = 0, Adb5f7 = 0, A7c4033 = 0;
        return A95c26 = A247b4c['toExponential']()['match'](/^.\.?(.*)e(.+)$/), A580307 = parseInt(A95c26[2], 10) - (A95c26[1] + '')['length'], A95c26 = A846294['toExponential']()['match'](/^.\.?(.*)e(.+)$/), A1f4b62 = parseInt(A95c26[2], 10) - (A95c26[1] + '')['length'], A1f4b62 > A580307 && (A580307 = A1f4b62), A42ea16 = A247b4c % A846294, A580307 < -100 || A580307 > 20 ? (Adb5f7 = Math['round'](Math['log'](A42ea16) / Math['log'](10)), A7c4033 = Math['pow'](10, Adb5f7), (A42ea16 / A7c4033)['toFixed'](Adb5f7 - A580307) * A7c4033) : parseFloat(A42ea16['toFixed'](-A580307));
    }
    function A2fae08(A4aab95) {
        return A4aab95 === 0 ? 1 : Math['abs'](A4aab95) / A4aab95;
    }
    function A2a075a(A7beb11) {
        return (Math['exp'](A7beb11) - Math['exp'](-A7beb11)) / (Math['exp'](A7beb11) + Math['exp'](-A7beb11));
    }
    function A35ce9a(A41a820, A14af2d) {
        return A41a820 === undefined ? A14af2d : A41a820;
    }
    A57e102['prototype']['Bitcrusher'] = function (A4d04e7) {
        !A4d04e7 && (A4d04e7 = this['getDefaults']());
        this['bufferSize'] = A4d04e7['bufferSize'] || this['defaults']['bufferSize']['value'], this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['processor'] = A303def['createScriptProcessor'](this['bufferSize'], 1, 1), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['processor']), this['processor']['connect'](this['output']);
        var A1c0f63 = 0, A1ac18d = 0, A13f40a, A5b28a4, A4edd47, A95831, A38fb25;
        this['processor']['onaudioprocess'] = function (A1ebee9) {
            A13f40a = A1ebee9['inputBuffer']['getChannelData'](0), A5b28a4 = A1ebee9['outputBuffer']['getChannelData'](0), A4edd47 = Math['pow'](1 / 2, this['bits']), A38fb25 = A13f40a['length'];
            for (A95831 = 0; A95831 < A38fb25; A95831++) {
                A1c0f63 += this['normfreq'], A1c0f63 >= 1 && (A1c0f63 -= 1, A1ac18d = A4edd47 * Math['floor'](A13f40a[A95831] / A4edd47 + 0.5)), A5b28a4[A95831] = A1ac18d;
            }
        }, this['bits'] = A4d04e7['bits'] || this['defaults']['bits']['value'], this['normfreq'] = A35ce9a(A4d04e7['normfreq'], this['defaults']['normfreq']['value']), this['bypass'] = A4d04e7['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Bitcrusher']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Bitcrusher' },
        'defaults': {
            'writable': !![],
            'value': {
                'bits': {
                    'value': 4,
                    'min': 1,
                    'max': 16,
                    'automatable': ![],
                    'type': A1b8249
                },
                'bufferSize': {
                    'value': 4096,
                    'min': 256,
                    'max': 16384,
                    'automatable': ![],
                    'type': A1b8249
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'normfreq': {
                    'value': 0.1,
                    'min': 0.0001,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                }
            }
        },
        'bits': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['bits'];
            },
            'set': function (A382042) {
                this['processor']['bits'] = A382042;
            }
        },
        'normfreq': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['normfreq'];
            },
            'set': function (A520a68) {
                this['processor']['normfreq'] = A520a68;
            }
        }
    }), A57e102['prototype']['Cabinet'] = function (Aa14808) {
        !Aa14808 && (Aa14808 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['convolver'] = this['newConvolver'](Aa14808['impulsePath'] || '../impulses/impulse_guitar.wav'), this['makeupNode'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['convolver']['input']), this['convolver']['output']['connect'](this['makeupNode']), this['makeupNode']['connect'](this['output']), this['makeupNode']['gain']['value'] = A35ce9a(Aa14808['makeupGain'], this['defaults']['makeupGain']['value']), this['bypass'] = Aa14808['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Cabinet']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Cabinet' },
        'defaults': {
            'writable': !![],
            'value': {
                'makeupGain': {
                    'value': 1,
                    'min': 0,
                    'max': 20,
                    'automatable': !![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'makeupGain': {
            'enumerable': !![],
            'get': function () {
                return this['makeupNode']['gain'];
            },
            'set': function (A5af215) {
                this['makeupNode']['gain']['setTargetAtTime'](A5af215, A303def['currentTime'], 0.01);
            }
        },
        'newConvolver': {
            'value': function (A416bb8) {
                return new A396263['Convolver']({
                    'impulse': A416bb8,
                    'dryLevel': 0,
                    'wetLevel': 1
                });
            }
        }
    }), A57e102['prototype']['Chorus'] = function (A2de247) {
        !A2de247 && (A2de247 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['attenuator'] = this['activateNode'] = A303def['createGain'](), this['splitter'] = A303def['createChannelSplitter'](2), this['delayL'] = A303def['createDelay'](), this['delayR'] = A303def['createDelay'](), this['feedbackGainNodeLR'] = A303def['createGain'](), this['feedbackGainNodeRL'] = A303def['createGain'](), this['merger'] = A303def['createChannelMerger'](2), this['output'] = A303def['createGain'](), this['lfoL'] = new A396263['LFO']({
            'target': this['delayL']['delayTime'],
            'callback': A11571e
        }), this['lfoR'] = new A396263['LFO']({
            'target': this['delayR']['delayTime'],
            'callback': A11571e
        }), this['input']['connect'](this['attenuator']), this['attenuator']['connect'](this['output']), this['attenuator']['connect'](this['splitter']), this['splitter']['connect'](this['delayL'], 0), this['splitter']['connect'](this['delayR'], 1), this['delayL']['connect'](this['feedbackGainNodeLR']), this['delayR']['connect'](this['feedbackGainNodeRL']), this['feedbackGainNodeLR']['connect'](this['delayR']), this['feedbackGainNodeRL']['connect'](this['delayL']), this['delayL']['connect'](this['merger'], 0, 0), this['delayR']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['feedback'] = A35ce9a(A2de247['feedback'], this['defaults']['feedback']['value']), this['rate'] = A35ce9a(A2de247['rate'], this['defaults']['rate']['value']), this['delay'] = A35ce9a(A2de247['delay'], this['defaults']['delay']['value']), this['depth'] = A35ce9a(A2de247['depth'], this['defaults']['depth']['value']), this['lfoR']['phase'] = Math['PI'] / 2, this['attenuator']['gain']['value'] = 0.6934, this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = A2de247['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Chorus']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Chorus' },
        'defaults': {
            'writable': !![],
            'value': {
                'feedback': {
                    'value': 0.4,
                    'min': 0,
                    'max': 0.95,
                    'automatable': ![],
                    'type': A1bb389
                },
                'delay': {
                    'value': 0.0045,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'depth': {
                    'value': 0.7,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'rate': {
                    'value': 1.5,
                    'min': 0,
                    'max': 8,
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'delay': {
            'enumerable': !![],
            'get': function () {
                return this['_delay'];
            },
            'set': function (A44252a) {
                this['_delay'] = 0.0002 * (Math['pow'](10, A44252a) * 2), this['lfoL']['offset'] = this['_delay'], this['lfoR']['offset'] = this['_delay'], this['_depth'] = this['_depth'];
            }
        },
        'depth': {
            'enumerable': !![],
            'get': function () {
                return this['_depth'];
            },
            'set': function (A1e10e7) {
                this['_depth'] = A1e10e7, this['lfoL']['oscillation'] = this['_depth'] * this['_delay'], this['lfoR']['oscillation'] = this['_depth'] * this['_delay'];
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['_feedback'];
            },
            'set': function (A27ba5f) {
                this['_feedback'] = A27ba5f, this['feedbackGainNodeLR']['gain']['setTargetAtTime'](this['_feedback'], A303def['currentTime'], 0.01), this['feedbackGainNodeRL']['gain']['setTargetAtTime'](this['_feedback'], A303def['currentTime'], 0.01);
            }
        },
        'rate': {
            'enumerable': !![],
            'get': function () {
                return this['_rate'];
            },
            'set': function (A11c8ed) {
                this['_rate'] = A11c8ed, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        }
    }), A57e102['prototype']['Compressor'] = function (A1c1f9a) {
        !A1c1f9a && (A1c1f9a = this['getDefaults']()), this['input'] = A303def['createGain'](), this['compNode'] = this['activateNode'] = A303def['createDynamicsCompressor'](), this['makeupNode'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['compNode']['connect'](this['makeupNode']), this['makeupNode']['connect'](this['output']), this['automakeup'] = A35ce9a(A1c1f9a['automakeup'], this['defaults']['automakeup']['value']), this['automakeup'] ? this['makeupNode']['gain']['value'] = A2868b5(this['computeMakeup']()) : this['makeupNode']['gain']['value'] = A2868b5(A35ce9a(A1c1f9a['makeupGain'], this['defaults']['makeupGain']['value'])), this['threshold'] = A35ce9a(A1c1f9a['threshold'], this['defaults']['threshold']['value']), this['release'] = A35ce9a(A1c1f9a['release'], this['defaults']['release']['value']), this['attack'] = A35ce9a(A1c1f9a['attack'], this['defaults']['attack']['value']), this['ratio'] = A1c1f9a['ratio'] || this['defaults']['ratio']['value'], this['knee'] = A35ce9a(A1c1f9a['knee'], this['defaults']['knee']['value']), this['bypass'] = A1c1f9a['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Compressor']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Compressor' },
        'defaults': {
            'writable': !![],
            'value': {
                'threshold': {
                    'value': -20,
                    'min': -60,
                    'max': 0,
                    'automatable': !![],
                    'type': A1bb389
                },
                'release': {
                    'value': 250,
                    'min': 10,
                    'max': 2000,
                    'automatable': !![],
                    'type': A1bb389
                },
                'makeupGain': {
                    'value': 1,
                    'min': 1,
                    'max': 100,
                    'automatable': !![],
                    'type': A1bb389
                },
                'attack': {
                    'value': 1,
                    'min': 0,
                    'max': 1000,
                    'automatable': !![],
                    'type': A1bb389
                },
                'ratio': {
                    'value': 4,
                    'min': 1,
                    'max': 50,
                    'automatable': !![],
                    'type': A1bb389
                },
                'knee': {
                    'value': 5,
                    'min': 0,
                    'max': 40,
                    'automatable': !![],
                    'type': A1bb389
                },
                'automakeup': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'computeMakeup': {
            'value': function () {
                var A393820 = 4, A1c611 = this['compNode'];
                return -(A1c611['threshold']['value'] - A1c611['threshold']['value'] / A1c611['ratio']['value']) / A393820;
            }
        },
        'automakeup': {
            'enumerable': !![],
            'get': function () {
                return this['_automakeup'];
            },
            'set': function (A1aaa0d) {
                this['_automakeup'] = A1aaa0d;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'threshold': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['threshold'];
            },
            'set': function (A569698) {
                this['compNode']['threshold']['value'] = A569698;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'ratio': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['ratio'];
            },
            'set': function (A1f7075) {
                this['compNode']['ratio']['value'] = A1f7075;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'knee': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['knee'];
            },
            'set': function (A322d57) {
                this['compNode']['knee']['value'] = A322d57;
                if (this['_automakeup'])
                    this['makeupGain'] = this['computeMakeup']();
            }
        },
        'attack': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['attack'];
            },
            'set': function (A4ef1e2) {
                this['compNode']['attack']['value'] = A4ef1e2 / 1000;
            }
        },
        'release': {
            'enumerable': !![],
            'get': function () {
                return this['compNode']['release'];
            },
            'set': function (A27afee) {
                this['compNode']['release']['value'] = A27afee / 1000;
            }
        },
        'makeupGain': {
            'enumerable': !![],
            'get': function () {
                return this['makeupNode']['gain'];
            },
            'set': function (Ab54ed4) {
                this['makeupNode']['gain']['setTargetAtTime'](A2868b5(Ab54ed4), A303def['currentTime'], 0.01);
            }
        }
    }), A57e102['prototype']['Convolver'] = function (A43cf83) {
        !A43cf83 && (A43cf83 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['convolver'] = A303def['createConvolver'](), this['dry'] = A303def['createGain'](), this['filterLow'] = A303def['createBiquadFilter'](), this['filterHigh'] = A303def['createBiquadFilter'](), this['wet'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['filterLow']), this['activateNode']['connect'](this['dry']), this['filterLow']['connect'](this['filterHigh']), this['filterHigh']['connect'](this['convolver']), this['convolver']['connect'](this['wet']), this['wet']['connect'](this['output']), this['dry']['connect'](this['output']), this['dry']['gain']['value'] = A35ce9a(A43cf83['dryLevel'], this['defaults']['dryLevel']['value']), this['wet']['gain']['value'] = A35ce9a(A43cf83['wetLevel'], this['defaults']['wetLevel']['value']), this['filterHigh']['frequency']['value'] = A43cf83['highCut'] || this['defaults']['highCut']['value'], this['filterLow']['frequency']['value'] = A43cf83['lowCut'] || this['defaults']['lowCut']['value'], this['output']['gain']['value'] = A35ce9a(A43cf83['level'], this['defaults']['level']['value']), this['filterHigh']['type'] = 'lowpass', this['filterLow']['type'] = 'highpass', this['buffer'] = A43cf83['impulse'] || '../impulses/ir_rev_short.wav', this['bypass'] = A43cf83['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Convolver']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Convolver' },
        'defaults': {
            'writable': !![],
            'value': {
                'highCut': {
                    'value': 22050,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': A1bb389
                },
                'lowCut': {
                    'value': 20,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': A1bb389
                },
                'dryLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'wetLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'level': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'lowCut': {
            'get': function () {
                return this['filterLow']['frequency'];
            },
            'set': function (A353a0f) {
                this['filterLow']['frequency']['setTargetAtTime'](A353a0f, A303def['currentTime'], 0.01);
            }
        },
        'highCut': {
            'get': function () {
                return this['filterHigh']['frequency'];
            },
            'set': function (A5e0a02) {
                this['filterHigh']['frequency']['setTargetAtTime'](A5e0a02, A303def['currentTime'], 0.01);
            }
        },
        'level': {
            'get': function () {
                return this['output']['gain'];
            },
            'set': function (A676226) {
                this['output']['gain']['setTargetAtTime'](A676226, A303def['currentTime'], 0.01);
            }
        },
        'dryLevel': {
            'get': function () {
                return this['dry']['gain'];
            },
            'set': function (A2b2b9a) {
                this['dry']['gain']['setTargetAtTime'](A2b2b9a, A303def['currentTime'], 0.01);
            }
        },
        'wetLevel': {
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (A27f8e4) {
                this['wet']['gain']['setTargetAtTime'](A27f8e4, A303def['currentTime'], 0.01);
            }
        },
        'buffer': {
            'enumerable': ![],
            'get': function () {
                return this['convolver']['buffer'];
            },
            'set': function (A5af72d) {
                var A50a6ce = this['convolver'], A5a8ca7 = new XMLHttpRequest();
                if (!A5af72d) {
                    console['log']('Tuna.Convolver.setBuffer: Missing impulse path!');
                    return;
                }
                A5a8ca7['open']('GET', A5af72d, !![]), A5a8ca7['responseType'] = 'arraybuffer', A5a8ca7['onreadystatechange'] = function () {
                    A5a8ca7['readyState'] === 4 && ((A5a8ca7['status'] < 300 && A5a8ca7['status'] > 199 || A5a8ca7['status'] === 302) && A303def['decodeAudioData'](A5a8ca7['response'], function (A491961) {
                        A50a6ce['buffer'] = A491961;
                    }, function (A4b2b9a) {
                        if (A4b2b9a)
                            console['log']('Tuna.Convolver.setBuffer: Error decoding data' + A4b2b9a);
                    }));
                }, A5a8ca7['send'](null);
            }
        }
    }), A57e102['prototype']['Delay'] = function (A2bf97e) {
        !A2bf97e && (A2bf97e = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['dry'] = A303def['createGain'](), this['wet'] = A303def['createGain'](), this['filter'] = A303def['createBiquadFilter'](), this['delay'] = A303def['createDelay'](10), this['feedbackNode'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['delay']), this['activateNode']['connect'](this['dry']), this['delay']['connect'](this['filter']), this['filter']['connect'](this['feedbackNode']), this['feedbackNode']['connect'](this['delay']), this['feedbackNode']['connect'](this['wet']), this['wet']['connect'](this['output']), this['dry']['connect'](this['output']), this['delayTime'] = A2bf97e['delayTime'] || this['defaults']['delayTime']['value'], this['feedbackNode']['gain']['value'] = A35ce9a(A2bf97e['feedback'], this['defaults']['feedback']['value']), this['wet']['gain']['value'] = A35ce9a(A2bf97e['wetLevel'], this['defaults']['wetLevel']['value']), this['dry']['gain']['value'] = A35ce9a(A2bf97e['dryLevel'], this['defaults']['dryLevel']['value']), this['filter']['frequency']['value'] = A2bf97e['cutoff'] || this['defaults']['cutoff']['value'], this['filter']['type'] = 'lowpass', this['bypass'] = A2bf97e['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Delay']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Delay' },
        'defaults': {
            'writable': !![],
            'value': {
                'delayTime': {
                    'value': 100,
                    'min': 20,
                    'max': 1000,
                    'automatable': ![],
                    'type': A1bb389
                },
                'feedback': {
                    'value': 0.45,
                    'min': 0,
                    'max': 0.9,
                    'automatable': !![],
                    'type': A1bb389
                },
                'cutoff': {
                    'value': 20000,
                    'min': 20,
                    'max': 20000,
                    'automatable': !![],
                    'type': A1bb389
                },
                'wetLevel': {
                    'value': 0.5,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'dryLevel': {
                    'value': 1,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'delayTime': {
            'enumerable': !![],
            'get': function () {
                return this['delay']['delayTime'];
            },
            'set': function (A43e071) {
                this['delay']['delayTime']['value'] = A43e071 / 1000;
            }
        },
        'wetLevel': {
            'enumerable': !![],
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (A5bc168) {
                this['wet']['gain']['setTargetAtTime'](A5bc168, A303def['currentTime'], 0.01);
            }
        },
        'dryLevel': {
            'enumerable': !![],
            'get': function () {
                return this['dry']['gain'];
            },
            'set': function (A2bcba1) {
                this['dry']['gain']['setTargetAtTime'](A2bcba1, A303def['currentTime'], 0.01);
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['feedbackNode']['gain'];
            },
            'set': function (A478b2f) {
                this['feedbackNode']['gain']['setTargetAtTime'](A478b2f, A303def['currentTime'], 0.01);
            }
        },
        'cutoff': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['frequency'];
            },
            'set': function (A46cb00) {
                this['filter']['frequency']['setTargetAtTime'](A46cb00, A303def['currentTime'], 0.01);
            }
        }
    }), A57e102['prototype']['Filter'] = function (A68a9e7) {
        !A68a9e7 && (A68a9e7 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['filter'] = A303def['createBiquadFilter'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['filter']), this['filter']['connect'](this['output']), this['filter']['frequency']['value'] = A68a9e7['frequency'] || this['defaults']['frequency']['value'], this['Q'] = A68a9e7['resonance'] || this['defaults']['Q']['value'], this['filterType'] = A35ce9a(A68a9e7['filterType'], this['defaults']['filterType']['value']), this['filter']['gain']['value'] = A35ce9a(A68a9e7['gain'], this['defaults']['gain']['value']), this['bypass'] = A68a9e7['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Filter']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Filter' },
        'defaults': {
            'writable': !![],
            'value': {
                'frequency': {
                    'value': 800,
                    'min': 20,
                    'max': 22050,
                    'automatable': !![],
                    'type': A1bb389
                },
                'Q': {
                    'value': 1,
                    'min': 0.001,
                    'max': 100,
                    'automatable': !![],
                    'type': A1bb389
                },
                'gain': {
                    'value': 0,
                    'min': -40,
                    'max': 40,
                    'automatable': !![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'filterType': {
                    'value': 'lowpass',
                    'automatable': ![],
                    'type': A4b1969
                }
            }
        },
        'filterType': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['type'];
            },
            'set': function (A112c70) {
                this['filter']['type'] = A112c70;
            }
        },
        'Q': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['Q'];
            },
            'set': function (A150c7e) {
                this['filter']['Q']['value'] = A150c7e;
            }
        },
        'gain': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['gain'];
            },
            'set': function (A50fbd1) {
                this['filter']['gain']['setTargetAtTime'](A50fbd1, A303def['currentTime'], 0.01);
            }
        },
        'frequency': {
            'enumerable': !![],
            'get': function () {
                return this['filter']['frequency'];
            },
            'set': function (A151edc) {
                this['filter']['frequency']['setTargetAtTime'](A151edc, A303def['currentTime'], 0.01);
            }
        }
    }), A57e102['prototype']['Gain'] = function (A1aa2aa) {
        !A1aa2aa && (A1aa2aa = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['gainNode'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['gainNode']), this['gainNode']['connect'](this['output']), this['gainNode']['gain']['value'] = A35ce9a(A1aa2aa['gain'], this['defaults']['gain']['value']), this['bypass'] = A1aa2aa['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Gain']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Gain' },
        'defaults': {
            'writable': !![],
            'value': {
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'gain': {
                    'value': 1,
                    'automatable': !![],
                    'type': A1bb389
                }
            }
        },
        'gain': {
            'enumerable': !![],
            'get': function () {
                return this['gainNode']['gain'];
            },
            'set': function (A11be8f) {
                this['gainNode']['gain']['setTargetAtTime'](A11be8f, A303def['currentTime'], 0.01);
            }
        }
    }), A57e102['prototype']['MoogFilter'] = function (A5c694d) {
        !A5c694d && (A5c694d = this['getDefaults']());
        this['bufferSize'] = A5c694d['bufferSize'] || this['defaults']['bufferSize']['value'], this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['processor'] = A303def['createScriptProcessor'](this['bufferSize'], 1, 1), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['processor']), this['processor']['connect'](this['output']);
        var A7041aa, A51079b, A25ebd0, A2a6c20, A4761b0, A1dbea7, A21e8bc, A48a694;
        A7041aa = A51079b = A25ebd0 = A2a6c20 = A4761b0 = A1dbea7 = A21e8bc = A48a694 = 0;
        var A32527c, A47953f, A5bfdea, A1d6f42, Ae2ae5e, Ad6810d, A293c92;
        this['processor']['onaudioprocess'] = function (A35d66f) {
            A32527c = A35d66f['inputBuffer']['getChannelData'](0), A47953f = A35d66f['outputBuffer']['getChannelData'](0), A5bfdea = this['cutoff'] * 1.16, A293c92 = 0.35013 * (A5bfdea * A5bfdea) * (A5bfdea * A5bfdea), A1d6f42 = this['resonance'] * (1 - 0.15 * A5bfdea * A5bfdea), Ad6810d = A32527c['length'];
            for (Ae2ae5e = 0; Ae2ae5e < Ad6810d; Ae2ae5e++) {
                A32527c[Ae2ae5e] -= A48a694 * A1d6f42, A32527c[Ae2ae5e] *= A293c92, A4761b0 = A32527c[Ae2ae5e] + 0.3 * A7041aa + (1 - A5bfdea) * A4761b0, A7041aa = A32527c[Ae2ae5e], A1dbea7 = A4761b0 + 0.3 * A51079b + (1 - A5bfdea) * A1dbea7, A51079b = A4761b0, A21e8bc = A1dbea7 + 0.3 * A25ebd0 + (1 - A5bfdea) * A21e8bc, A25ebd0 = A1dbea7, A48a694 = A21e8bc + 0.3 * A2a6c20 + (1 - A5bfdea) * A48a694, A2a6c20 = A21e8bc, A47953f[Ae2ae5e] = A48a694;
            }
        }, this['cutoff'] = A35ce9a(A5c694d['cutoff'], this['defaults']['cutoff']['value']), this['resonance'] = A35ce9a(A5c694d['resonance'], this['defaults']['resonance']['value']), this['bypass'] = A5c694d['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['MoogFilter']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'MoogFilter' },
        'defaults': {
            'writable': !![],
            'value': {
                'bufferSize': {
                    'value': 4096,
                    'min': 256,
                    'max': 16384,
                    'automatable': ![],
                    'type': A1b8249
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'cutoff': {
                    'value': 0.065,
                    'min': 0.0001,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'resonance': {
                    'value': 3.5,
                    'min': 0,
                    'max': 4,
                    'automatable': ![],
                    'type': A1bb389
                }
            }
        },
        'cutoff': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['cutoff'];
            },
            'set': function (A281660) {
                this['processor']['cutoff'] = A281660;
            }
        },
        'resonance': {
            'enumerable': !![],
            'get': function () {
                return this['processor']['resonance'];
            },
            'set': function (A40ae9c) {
                this['processor']['resonance'] = A40ae9c;
            }
        }
    }), A57e102['prototype']['Overdrive'] = function (A17c917) {
        !A17c917 && (A17c917 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['inputDrive'] = A303def['createGain'](), this['waveshaper'] = A303def['createWaveShaper'](), this['outputDrive'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['inputDrive']), this['inputDrive']['connect'](this['waveshaper']), this['waveshaper']['connect'](this['outputDrive']), this['outputDrive']['connect'](this['output']), this['ws_table'] = new Float32Array(this['k_nSamples']), this['drive'] = A35ce9a(A17c917['drive'], this['defaults']['drive']['value']), this['outputGain'] = A35ce9a(A17c917['outputGain'], this['defaults']['outputGain']['value']), this['curveAmount'] = A35ce9a(A17c917['curveAmount'], this['defaults']['curveAmount']['value']), this['algorithmIndex'] = A35ce9a(A17c917['algorithmIndex'], this['defaults']['algorithmIndex']['value']), this['bypass'] = A17c917['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Overdrive']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Overdrive' },
        'defaults': {
            'writable': !![],
            'value': {
                'drive': {
                    'value': 0.197,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389,
                    'scaled': !![]
                },
                'outputGain': {
                    'value': -9.154,
                    'min': -46,
                    'max': 0,
                    'automatable': !![],
                    'type': A1bb389,
                    'scaled': !![]
                },
                'curveAmount': {
                    'value': 0.979,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'algorithmIndex': {
                    'value': 0,
                    'min': 0,
                    'max': 5,
                    'automatable': ![],
                    'type': A1b8249
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'k_nSamples': { 'value': 8192 },
        'drive': {
            'get': function () {
                return this['inputDrive']['gain'];
            },
            'set': function (A66f527) {
                this['inputDrive']['gain']['value'] = A66f527;
            }
        },
        'curveAmount': {
            'get': function () {
                return this['_curveAmount'];
            },
            'set': function (A58a291) {
                this['_curveAmount'] = A58a291, this['_algorithmIndex'] === undefined && (this['_algorithmIndex'] = 0), this['waveshaperAlgorithms'][this['_algorithmIndex']](this['_curveAmount'], this['k_nSamples'], this['ws_table']), this['waveshaper']['curve'] = this['ws_table'];
            }
        },
        'outputGain': {
            'get': function () {
                return this['outputDrive']['gain'];
            },
            'set': function (A2ab6ba) {
                this['_outputGain'] = A2868b5(A2ab6ba), this['outputDrive']['gain']['setValueAtTime'](this['_outputGain'], A303def['currentTime'], 0.01);
            }
        },
        'algorithmIndex': {
            'get': function () {
                return this['_algorithmIndex'];
            },
            'set': function (A30e813) {
                this['_algorithmIndex'] = A30e813, this['curveAmount'] = this['_curveAmount'];
            }
        },
        'waveshaperAlgorithms': {
            'value': [
                function (A5020a3, A7e2e88, A5ce31d) {
                    A5020a3 = Math['min'](A5020a3, 0.9999);
                    var A3153c1 = 2 * A5020a3 / (1 - A5020a3), A156319, A52f55d;
                    for (A156319 = 0; A156319 < A7e2e88; A156319++) {
                        A52f55d = A156319 * 2 / A7e2e88 - 1, A5ce31d[A156319] = (1 + A3153c1) * A52f55d / (1 + A3153c1 * Math['abs'](A52f55d));
                    }
                },
                function (Aa9e478, A4e0a2a, A1f25b0) {
                    var A3213d9, A441a2f, A53e193;
                    for (A3213d9 = 0; A3213d9 < A4e0a2a; A3213d9++) {
                        A441a2f = A3213d9 * 2 / A4e0a2a - 1, A53e193 = (0.5 * Math['pow'](A441a2f + 1.4, 2) - 1) * (A53e193 >= 0 ? 5.8 : 1.2), A1f25b0[A3213d9] = A2a075a(A53e193);
                    }
                },
                function (A2f662d, A184a60, A40202f) {
                    var A262605, A1c6b10, A3bf0bb, A185143 = 1 - A2f662d;
                    for (A262605 = 0; A262605 < A184a60; A262605++) {
                        A1c6b10 = A262605 * 2 / A184a60 - 1, A3bf0bb = A1c6b10 < 0 ? -Math['pow'](Math['abs'](A1c6b10), A185143 + 0.04) : Math['pow'](A1c6b10, A185143), A40202f[A262605] = A2a075a(A3bf0bb * 2);
                    }
                },
                function (A5551ef, A2bdc60, A2fed68) {
                    var A7c1d7f, A4dd756, A4763d2, A55ea53, A12a2a2 = 1 - A5551ef > 0.99 ? 0.99 : 1 - A5551ef;
                    for (A7c1d7f = 0; A7c1d7f < A2bdc60; A7c1d7f++) {
                        A4dd756 = A7c1d7f * 2 / A2bdc60 - 1, A55ea53 = Math['abs'](A4dd756);
                        if (A55ea53 < A12a2a2)
                            A4763d2 = A55ea53;
                        else {
                            if (A55ea53 > A12a2a2)
                                A4763d2 = A12a2a2 + (A55ea53 - A12a2a2) / (1 + Math['pow']((A55ea53 - A12a2a2) / (1 - A12a2a2), 2));
                            else
                                A55ea53 > 1 && (A4763d2 = A55ea53);
                        }
                        A2fed68[A7c1d7f] = A2fae08(A4dd756) * A4763d2 * (1 / ((A12a2a2 + 1) / 2));
                    }
                },
                function (A468390, A2e6fb7, A4dec91) {
                    var A2bcbae, A384481;
                    for (A2bcbae = 0; A2bcbae < A2e6fb7; A2bcbae++) {
                        A384481 = A2bcbae * 2 / A2e6fb7 - 1;
                        if (A384481 < -0.08905)
                            A4dec91[A2bcbae] = -3 / 4 * (1 - Math['pow'](1 - (Math['abs'](A384481) - 0.032857), 12) + 1 / 3 * (Math['abs'](A384481) - 0.032847)) + 0.01;
                        else
                            A384481 >= -0.08905 && A384481 < 0.320018 ? A4dec91[A2bcbae] = -6.153 * (A384481 * A384481) + 3.9375 * A384481 : A4dec91[A2bcbae] = 0.630035;
                    }
                },
                function (A3b0ea6, A574acf, A4d0824) {
                    var A53959b = 2 + Math['round'](A3b0ea6 * 14), A5359e2 = Math['round'](Math['pow'](2, A53959b - 1)), A56a639, A2f9e26;
                    for (A56a639 = 0; A56a639 < A574acf; A56a639++) {
                        A2f9e26 = A56a639 * 2 / A574acf - 1, A4d0824[A56a639] = Math['round'](A2f9e26 * A5359e2) / A5359e2;
                    }
                }
            ]
        }
    }), A57e102['prototype']['Panner'] = function (A34306a) {
        !A34306a && (A34306a = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['panner'] = A303def['createStereoPanner'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['panner']), this['panner']['connect'](this['output']), this['pan'] = A35ce9a(A34306a['pan'], this['defaults']['pan']['value']), this['bypass'] = A34306a['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Panner']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Panner' },
        'defaults': {
            'writable': !![],
            'value': {
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                },
                'pan': {
                    'value': 0,
                    'min': -1,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                }
            }
        },
        'pan': {
            'enumerable': !![],
            'get': function () {
                return this['panner']['pan'];
            },
            'set': function (A3d614b) {
                this['panner']['pan']['value'] = A3d614b;
            }
        }
    }), A57e102['prototype']['Phaser'] = function (A1f5db3) {
        !A1f5db3 && (A1f5db3 = this['getDefaults']());
        this['input'] = A303def['createGain'](), this['splitter'] = this['activateNode'] = A303def['createChannelSplitter'](2), this['filtersL'] = [], this['filtersR'] = [], this['feedbackGainNodeL'] = A303def['createGain'](), this['feedbackGainNodeR'] = A303def['createGain'](), this['merger'] = A303def['createChannelMerger'](2), this['filteredSignal'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['lfoL'] = new A396263['LFO']({
            'target': this['filtersL'],
            'callback': this['callback']
        }), this['lfoR'] = new A396263['LFO']({
            'target': this['filtersR'],
            'callback': this['callback']
        });
        var A54f9a7 = this['stage'];
        while (A54f9a7--) {
            this['filtersL'][A54f9a7] = A303def['createBiquadFilter'](), this['filtersR'][A54f9a7] = A303def['createBiquadFilter'](), this['filtersL'][A54f9a7]['type'] = 'allpass', this['filtersR'][A54f9a7]['type'] = 'allpass';
        }
        this['input']['connect'](this['splitter']), this['input']['connect'](this['output']), this['splitter']['connect'](this['filtersL'][0], 0, 0), this['splitter']['connect'](this['filtersR'][0], 1, 0), this['connectInOrder'](this['filtersL']), this['connectInOrder'](this['filtersR']), this['filtersL'][this['stage'] - 1]['connect'](this['feedbackGainNodeL']), this['filtersL'][this['stage'] - 1]['connect'](this['merger'], 0, 0), this['filtersR'][this['stage'] - 1]['connect'](this['feedbackGainNodeR']), this['filtersR'][this['stage'] - 1]['connect'](this['merger'], 0, 1), this['feedbackGainNodeL']['connect'](this['filtersL'][0]), this['feedbackGainNodeR']['connect'](this['filtersR'][0]), this['merger']['connect'](this['output']), this['rate'] = A35ce9a(A1f5db3['rate'], this['defaults']['rate']['value']), this['baseModulationFrequency'] = A1f5db3['baseModulationFrequency'] || this['defaults']['baseModulationFrequency']['value'], this['depth'] = A35ce9a(A1f5db3['depth'], this['defaults']['depth']['value']), this['feedback'] = A35ce9a(A1f5db3['feedback'], this['defaults']['feedback']['value']), this['stereoPhase'] = A35ce9a(A1f5db3['stereoPhase'], this['defaults']['stereoPhase']['value']), this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = A1f5db3['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Phaser']['prototype'] = Object['create'](Ab8cd6e, {
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
                    'type': A1bb389
                },
                'depth': {
                    'value': 0.6,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'feedback': {
                    'value': 0.7,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'stereoPhase': {
                    'value': 40,
                    'min': 0,
                    'max': 180,
                    'automatable': ![],
                    'type': A1bb389
                },
                'baseModulationFrequency': {
                    'value': 700,
                    'min': 500,
                    'max': 1500,
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'callback': {
            'value': function (A5ececb, A22bf9f) {
                for (var A1b3e31 = 0; A1b3e31 < 4; A1b3e31++) {
                    A5ececb[A1b3e31]['frequency']['value'] = A22bf9f;
                }
            }
        },
        'depth': {
            'get': function () {
                return this['_depth'];
            },
            'set': function (A238f2d) {
                this['_depth'] = A238f2d, this['lfoL']['oscillation'] = this['_baseModulationFrequency'] * this['_depth'], this['lfoR']['oscillation'] = this['_baseModulationFrequency'] * this['_depth'];
            }
        },
        'rate': {
            'get': function () {
                return this['_rate'];
            },
            'set': function (A1a6809) {
                this['_rate'] = A1a6809, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        },
        'baseModulationFrequency': {
            'enumerable': !![],
            'get': function () {
                return this['_baseModulationFrequency'];
            },
            'set': function (A9f2291) {
                this['_baseModulationFrequency'] = A9f2291, this['lfoL']['offset'] = this['_baseModulationFrequency'], this['lfoR']['offset'] = this['_baseModulationFrequency'], this['depth'] = this['_depth'];
            }
        },
        'feedback': {
            'get': function () {
                return this['_feedback'];
            },
            'set': function (A44a0c5) {
                this['_feedback'] = A44a0c5, this['feedbackGainNodeL']['gain']['setTargetAtTime'](this['_feedback'], A303def['currentTime'], 0.01), this['feedbackGainNodeR']['gain']['setTargetAtTime'](this['_feedback'], A303def['currentTime'], 0.01);
            }
        },
        'stereoPhase': {
            'get': function () {
                return this['_stereoPhase'];
            },
            'set': function (A31e53f) {
                this['_stereoPhase'] = A31e53f;
                var A26051f = this['lfoL']['_phase'] + this['_stereoPhase'] * Math['PI'] / 180;
                A26051f = A2ff7f4(A26051f, 2 * Math['PI']), this['lfoR']['_phase'] = A26051f;
            }
        }
    }), A57e102['prototype']['PingPongDelay'] = function (A46b05c) {
        !A46b05c && (A46b05c = this['getDefaults']()), this['input'] = A303def['createGain'](), this['wet'] = A303def['createGain'](), this['stereoToMonoMix'] = A303def['createGain'](), this['feedbackLevel'] = A303def['createGain'](), this['output'] = A303def['createGain'](), this['delayLeft'] = A303def['createDelay'](10), this['delayRight'] = A303def['createDelay'](10), this['activateNode'] = A303def['createGain'](), this['splitter'] = A303def['createChannelSplitter'](2), this['merger'] = A303def['createChannelMerger'](2), this['activateNode']['connect'](this['splitter']), this['splitter']['connect'](this['stereoToMonoMix'], 0, 0), this['splitter']['connect'](this['stereoToMonoMix'], 1, 0), this['stereoToMonoMix']['gain']['value'] = 0.5, this['stereoToMonoMix']['connect'](this['wet']), this['wet']['connect'](this['delayLeft']), this['feedbackLevel']['connect'](this['wet']), this['delayLeft']['connect'](this['delayRight']), this['delayRight']['connect'](this['feedbackLevel']), this['delayLeft']['connect'](this['merger'], 0, 0), this['delayRight']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['activateNode']['connect'](this['output']), this['delayTimeLeft'] = A46b05c['delayTimeLeft'] !== undefined ? A46b05c['delayTimeLeft'] : this['defaults']['delayTimeLeft']['value'], this['delayTimeRight'] = A46b05c['delayTimeRight'] !== undefined ? A46b05c['delayTimeRight'] : this['defaults']['delayTimeRight']['value'], this['feedbackLevel']['gain']['value'] = A46b05c['feedback'] !== undefined ? A46b05c['feedback'] : this['defaults']['feedback']['value'], this['wet']['gain']['value'] = A46b05c['wetLevel'] !== undefined ? A46b05c['wetLevel'] : this['defaults']['wetLevel']['value'], this['bypass'] = A46b05c['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['PingPongDelay']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'PingPongDelay' },
        'delayTimeLeft': {
            'enumerable': !![],
            'get': function () {
                return this['_delayTimeLeft'];
            },
            'set': function (A1abdaa) {
                this['_delayTimeLeft'] = A1abdaa, this['delayLeft']['delayTime']['value'] = A1abdaa / 1000;
            }
        },
        'delayTimeRight': {
            'enumerable': !![],
            'get': function () {
                return this['_delayTimeRight'];
            },
            'set': function (A4e27e1) {
                this['_delayTimeRight'] = A4e27e1, this['delayRight']['delayTime']['value'] = A4e27e1 / 1000;
            }
        },
        'wetLevel': {
            'enumerable': !![],
            'get': function () {
                return this['wet']['gain'];
            },
            'set': function (A1f4dac) {
                this['wet']['gain']['setTargetAtTime'](A1f4dac, A303def['currentTime'], 0.01);
            }
        },
        'feedback': {
            'enumerable': !![],
            'get': function () {
                return this['feedbackLevel']['gain'];
            },
            'set': function (A580d3b) {
                this['feedbackLevel']['gain']['setTargetAtTime'](A580d3b, A303def['currentTime'], 0.01);
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
                    'type': A1b8249
                },
                'delayTimeRight': {
                    'value': 400,
                    'min': 1,
                    'max': 10000,
                    'automatable': ![],
                    'type': A1b8249
                },
                'feedback': {
                    'value': 0.3,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'wetLevel': {
                    'value': 0.5,
                    'min': 0,
                    'max': 1,
                    'automatable': !![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        }
    }), A57e102['prototype']['Tremolo'] = function (A26592a) {
        !A26592a && (A26592a = this['getDefaults']()), this['input'] = A303def['createGain'](), this['splitter'] = this['activateNode'] = A303def['createChannelSplitter'](2), this['amplitudeL'] = A303def['createGain'](), this['amplitudeR'] = A303def['createGain'](), this['merger'] = A303def['createChannelMerger'](2), this['output'] = A303def['createGain'](), this['lfoL'] = new A396263['LFO']({
            'target': this['amplitudeL']['gain'],
            'callback': A11571e
        }), this['lfoR'] = new A396263['LFO']({
            'target': this['amplitudeR']['gain'],
            'callback': A11571e
        }), this['input']['connect'](this['splitter']), this['splitter']['connect'](this['amplitudeL'], 0), this['splitter']['connect'](this['amplitudeR'], 1), this['amplitudeL']['connect'](this['merger'], 0, 0), this['amplitudeR']['connect'](this['merger'], 0, 1), this['merger']['connect'](this['output']), this['rate'] = A26592a['rate'] || this['defaults']['rate']['value'], this['intensity'] = A35ce9a(A26592a['intensity'], this['defaults']['intensity']['value']), this['stereoPhase'] = A35ce9a(A26592a['stereoPhase'], this['defaults']['stereoPhase']['value']), this['lfoL']['offset'] = 1 - this['intensity'] / 2, this['lfoR']['offset'] = 1 - this['intensity'] / 2, this['lfoL']['phase'] = this['stereoPhase'] * Math['PI'] / 180, this['lfoL']['activate'](!![]), this['lfoR']['activate'](!![]), this['bypass'] = A26592a['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['Tremolo']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'Tremolo' },
        'defaults': {
            'writable': !![],
            'value': {
                'intensity': {
                    'value': 0.3,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'stereoPhase': {
                    'value': 0,
                    'min': 0,
                    'max': 180,
                    'automatable': ![],
                    'type': A1bb389
                },
                'rate': {
                    'value': 5,
                    'min': 0.1,
                    'max': 11,
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'intensity': {
            'enumerable': !![],
            'get': function () {
                return this['_intensity'];
            },
            'set': function (A358539) {
                this['_intensity'] = A358539, this['lfoL']['offset'] = 1 - this['_intensity'] / 2, this['lfoR']['offset'] = 1 - this['_intensity'] / 2, this['lfoL']['oscillation'] = this['_intensity'], this['lfoR']['oscillation'] = this['_intensity'];
            }
        },
        'rate': {
            'enumerable': !![],
            'get': function () {
                return this['_rate'];
            },
            'set': function (A1db8e3) {
                this['_rate'] = A1db8e3, this['lfoL']['frequency'] = this['_rate'], this['lfoR']['frequency'] = this['_rate'];
            }
        },
        'stereoPhase': {
            'enumerable': !![],
            'get': function () {
                return this['_stereoPhase'];
            },
            'set': function (A24e85c) {
                this['_stereoPhase'] = A24e85c;
                var A28356c = this['lfoL']['_phase'] + this['_stereoPhase'] * Math['PI'] / 180;
                A28356c = A2ff7f4(A28356c, 2 * Math['PI']), this['lfoR']['phase'] = A28356c;
            }
        }
    }), A57e102['prototype']['WahWah'] = function (A32cf16) {
        !A32cf16 && (A32cf16 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['activateNode'] = A303def['createGain'](), this['envelopeFollower'] = new A396263['EnvelopeFollower']({
            'target': this,
            'callback': function (A13d273, A414ff4) {
                A13d273['sweep'] = A414ff4;
            }
        }), this['filterBp'] = A303def['createBiquadFilter'](), this['filterPeaking'] = A303def['createBiquadFilter'](), this['output'] = A303def['createGain'](), this['activateNode']['connect'](this['filterBp']), this['filterBp']['connect'](this['filterPeaking']), this['filterPeaking']['connect'](this['output']), this['init'](), this['automode'] = A35ce9a(A32cf16['automode'], this['defaults']['automode']['value']), this['resonance'] = A32cf16['resonance'] || this['defaults']['resonance']['value'], this['sensitivity'] = A35ce9a(A32cf16['sensitivity'], this['defaults']['sensitivity']['value']), this['baseFrequency'] = A35ce9a(A32cf16['baseFrequency'], this['defaults']['baseFrequency']['value']), this['excursionOctaves'] = A32cf16['excursionOctaves'] || this['defaults']['excursionOctaves']['value'], this['sweep'] = A35ce9a(A32cf16['sweep'], this['defaults']['sweep']['value']), this['activateNode']['gain']['value'] = 2, this['envelopeFollower']['activate'](!![]), this['bypass'] = A32cf16['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['WahWah']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'WahWah' },
        'defaults': {
            'writable': !![],
            'value': {
                'automode': {
                    'value': !![],
                    'automatable': ![],
                    'type': A28d666
                },
                'baseFrequency': {
                    'value': 0.153,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'excursionOctaves': {
                    'value': 3.3,
                    'min': 1,
                    'max': 6,
                    'automatable': ![],
                    'type': A1bb389
                },
                'sweep': {
                    'value': 0.35,
                    'min': 0,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'resonance': {
                    'value': 19,
                    'min': 1,
                    'max': 100,
                    'automatable': ![],
                    'type': A1bb389
                },
                'sensitivity': {
                    'value': -0.5,
                    'min': -1,
                    'max': 1,
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'automode': {
            'get': function () {
                return this['_automode'];
            },
            'set': function (A5e6e8d) {
                this['_automode'] = A5e6e8d, A5e6e8d ? (this['activateNode']['connect'](this['envelopeFollower']['input']), this['envelopeFollower']['activate'](!![])) : (this['envelopeFollower']['activate'](![]), this['activateNode']['disconnect'](), this['activateNode']['connect'](this['filterBp']));
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
                } catch (A2936fa) {
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
            'set': function (A27c094) {
                this['_sweep'] = Math['pow'](A27c094 > 1 ? 1 : A27c094 < 0 ? 0 : A27c094, this['_sensitivity']), this['setFilterFreq']();
            }
        },
        'baseFrequency': {
            'enumerable': !![],
            'get': function () {
                return this['_baseFrequency'];
            },
            'set': function (A125411) {
                this['_baseFrequency'] = 50 * Math['pow'](10, A125411 * 2), this['_excursionFrequency'] = Math['min'](A303def['sampleRate'] / 2, this['baseFrequency'] * Math['pow'](2, this['_excursionOctaves'])), this['setFilterFreq']();
            }
        },
        'excursionOctaves': {
            'enumerable': !![],
            'get': function () {
                return this['_excursionOctaves'];
            },
            'set': function (A225535) {
                this['_excursionOctaves'] = A225535, this['_excursionFrequency'] = Math['min'](A303def['sampleRate'] / 2, this['baseFrequency'] * Math['pow'](2, this['_excursionOctaves'])), this['setFilterFreq']();
            }
        },
        'sensitivity': {
            'enumerable': !![],
            'get': function () {
                return this['_sensitivity'];
            },
            'set': function (Aa1b625) {
                this['_sensitivity'] = Math['pow'](10, Aa1b625);
            }
        },
        'resonance': {
            'enumerable': !![],
            'get': function () {
                return this['_resonance'];
            },
            'set': function (Ae0348a) {
                this['_resonance'] = Ae0348a, this['filterPeaking']['Q']['value'] = this['_resonance'];
            }
        },
        'init': {
            'value': function () {
                this['output']['gain']['value'] = 1, this['filterPeaking']['type'] = 'peaking', this['filterBp']['type'] = 'bandpass', this['filterPeaking']['frequency']['value'] = 100, this['filterPeaking']['gain']['value'] = 20, this['filterPeaking']['Q']['value'] = 5, this['filterBp']['frequency']['value'] = 100, this['filterBp']['Q']['value'] = 1;
            }
        }
    }), A57e102['prototype']['EnvelopeFollower'] = function (A828c47) {
        !A828c47 && (A828c47 = this['getDefaults']()), this['input'] = A303def['createGain'](), this['jsNode'] = this['output'] = A303def['createScriptProcessor'](this['buffersize'], 1, 1), this['input']['connect'](this['output']), this['attackTime'] = A35ce9a(A828c47['attackTime'], this['defaults']['attackTime']['value']), this['releaseTime'] = A35ce9a(A828c47['releaseTime'], this['defaults']['releaseTime']['value']), this['_envelope'] = 0, this['target'] = A828c47['target'] || {}, this['callback'] = A828c47['callback'] || function () {
        }, this['bypass'] = A828c47['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['EnvelopeFollower']['prototype'] = Object['create'](Ab8cd6e, {
        'name': { 'value': 'EnvelopeFollower' },
        'defaults': {
            'value': {
                'attackTime': {
                    'value': 0.003,
                    'min': 0,
                    'max': 0.5,
                    'automatable': ![],
                    'type': A1bb389
                },
                'releaseTime': {
                    'value': 0.5,
                    'min': 0,
                    'max': 0.5,
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
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
            'set': function (A8cc536) {
                this['_attackTime'] = A8cc536, this['_attackC'] = Math['exp'](-1 / this['_attackTime'] * this['sampleRate'] / this['buffersize']);
            }
        },
        'releaseTime': {
            'enumerable': !![],
            'get': function () {
                return this['_releaseTime'];
            },
            'set': function (A581623) {
                this['_releaseTime'] = A581623, this['_releaseC'] = Math['exp'](-1 / this['_releaseTime'] * this['sampleRate'] / this['buffersize']);
            }
        },
        'callback': {
            'get': function () {
                return this['_callback'];
            },
            'set': function (A3b06f9) {
                typeof A3b06f9 === 'function' ? this['_callback'] = A3b06f9 : console['error']('tuna.js: ' + this['name'] + ': Callback must be a function!');
            }
        },
        'target': {
            'get': function () {
                return this['_target'];
            },
            'set': function (A56d538) {
                this['_target'] = A56d538;
            }
        },
        'activate': {
            'value': function (A4ae172) {
                this['activated'] = A4ae172, A4ae172 ? (this['jsNode']['connect'](A303def['destination']), this['jsNode']['onaudioprocess'] = this['returnCompute'](this)) : (this['jsNode']['disconnect'](), this['jsNode']['onaudioprocess'] = null), this['activateCallback'] && this['activateCallback'](A4ae172);
            }
        },
        'returnCompute': {
            'value': function (A26974f) {
                return function (A4fabc8) {
                    A26974f['compute'](A4fabc8);
                };
            }
        },
        'compute': {
            'value': function (A5ded1d) {
                var A3fdf0f = A5ded1d['inputBuffer']['getChannelData'](0)['length'], A3e876d = A5ded1d['inputBuffer']['numberOfChannels'], A102432, A4240a0, A2605a2, A47152d;
                A4240a0 = A2605a2 = A47152d = 0;
                for (A4240a0 = 0; A4240a0 < A3e876d; ++A4240a0) {
                    for (A47152d = 0; A47152d < A3fdf0f; ++A47152d) {
                        A102432 = A5ded1d['inputBuffer']['getChannelData'](A4240a0)[A47152d], A2605a2 += A102432 * A102432;
                    }
                }
                A2605a2 = Math['sqrt'](A2605a2 / A3e876d), this['_envelope'] < A2605a2 ? (this['_envelope'] *= this['_attackC'], this['_envelope'] += (1 - this['_attackC']) * A2605a2) : (this['_envelope'] *= this['_releaseC'], this['_envelope'] += (1 - this['_releaseC']) * A2605a2), this['_callback'](this['_target'], this['_envelope']);
            }
        }
    }), A57e102['prototype']['LFO'] = function (A46e45d) {
        !A46e45d && (A46e45d = this['getDefaults']()), this['input'] = A303def['createGain'](), this['output'] = A303def['createScriptProcessor'](256, 1, 1), this['activateNode'] = A303def['destination'], this['frequency'] = A35ce9a(A46e45d['frequency'], this['defaults']['frequency']['value']), this['offset'] = A35ce9a(A46e45d['offset'], this['defaults']['offset']['value']), this['oscillation'] = A35ce9a(A46e45d['oscillation'], this['defaults']['oscillation']['value']), this['phase'] = A35ce9a(A46e45d['phase'], this['defaults']['phase']['value']), this['target'] = A46e45d['target'] || {}, this['output']['onaudioprocess'] = this['callback'](A46e45d['callback'] || function () {
        }), this['bypass'] = A46e45d['bypass'] || this['defaults']['bypass']['value'];
    }, A57e102['prototype']['LFO']['prototype'] = Object['create'](Ab8cd6e, {
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
                    'type': A1bb389
                },
                'offset': {
                    'value': 0.85,
                    'min': 0,
                    'max': 22049,
                    'automatable': ![],
                    'type': A1bb389
                },
                'oscillation': {
                    'value': 0.3,
                    'min': -22050,
                    'max': 22050,
                    'automatable': ![],
                    'type': A1bb389
                },
                'phase': {
                    'value': 0,
                    'min': 0,
                    'max': 2 * Math['PI'],
                    'automatable': ![],
                    'type': A1bb389
                },
                'bypass': {
                    'value': ![],
                    'automatable': ![],
                    'type': A28d666
                }
            }
        },
        'frequency': {
            'get': function () {
                return this['_frequency'];
            },
            'set': function (A48a0be) {
                this['_frequency'] = A48a0be, this['_phaseInc'] = 2 * Math['PI'] * this['_frequency'] * this['bufferSize'] / this['sampleRate'];
            }
        },
        'offset': {
            'get': function () {
                return this['_offset'];
            },
            'set': function (A2d1e84) {
                this['_offset'] = A2d1e84;
            }
        },
        'oscillation': {
            'get': function () {
                return this['_oscillation'];
            },
            'set': function (A13896b) {
                this['_oscillation'] = A13896b;
            }
        },
        'phase': {
            'get': function () {
                return this['_phase'];
            },
            'set': function (A46c282) {
                this['_phase'] = A46c282;
            }
        },
        'target': {
            'get': function () {
                return this['_target'];
            },
            'set': function (A3d9160) {
                this['_target'] = A3d9160;
            }
        },
        'activate': {
            'value': function (A3c69ab) {
                A3c69ab ? (this['output']['connect'](A303def['destination']), this['activateCallback'] && this['activateCallback'](A3c69ab)) : this['output']['disconnect']();
            }
        },
        'callback': {
            'value': function (A44178e) {
                var A577a66 = this;
                return function () {
                    A577a66['_phase'] += A577a66['_phaseInc'], A577a66['_phase'] > 2 * Math['PI'] && (A577a66['_phase'] = 0), A44178e(A577a66['_target'], A577a66['_offset'] + A577a66['_oscillation'] * Math['sin'](A577a66['_phase']));
                };
            }
        }
    }), A57e102['toString'] = A57e102['prototype']['toString'] = function () {
        return 'Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js';
    };
}());
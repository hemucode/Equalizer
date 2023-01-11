domReady(() => {
  linkButton()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function linkButton() {
  document.querySelector('.teaser').href = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`;
  document.querySelector('.website').href = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`;
}

function a() {
    const N = [
        'audioContext',
        'chorus',
        'gain',
        'setValueAtTime',
        'threshold',
        'lowCut'
    ];
    a = function () {
        return N;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0;
        let h = e[f];
        return h;
    }, b(c, d);
}
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
}([function (c, d) {
        var f = {};
        const g = async k => {
            f['audioContext'] = new AudioContext({ 'latencyHint': 'playback' }), f['audioSource'] = f['audioContext']['createMediaStreamSource'](k), f['audioGain'] = f['audioContext']['createGain']();
            let p = new Tuna(f[G(-840, -841)]);
            function H(c, d) {
                return b(d - 850, c);
            }
            function G(c, d) {
                return b(c - -840, d);
            }
            function J(c, d) {
                return b(c - 485, d);
            }
            function I(c, d) {
                return b(c - -46, d);
            }
            const {
                isChorus: q,
                isConvolver: v,
                isMono: w,
                isPitch: x,
                volume: y,
                eq: z,
                convolver: A,
                chorus: B,
                compressor: C
            } = await class {
                static ['getItem'](D) {
                    return new Promise(E => chrome['storage']['local']['get'](D, F => E(F)));
                }
                static ['getCurrentTab']() {
                    return new Promise(async D => {
                        let [E] = await chrome['tabs']['query']({
                            'active': !0,
                            'lastFocusedWindow': !0
                        });
                        D(E);
                    });
                }
            }['getItem']({
                'isChorus': !1,
                'isConvolver': !0,
                'compressor': {
                    'threshold': -20,
                    'attack': 0,
                    'release': 250,
                    'makeupGain': 1,
                    'ratio': 4,
                    'knee': 5,
                    'bypass': !1,
                    'automakeup': !1
                },
                'convolver': {
                    'highCut': 22050,
                    'lowCut': 20,
                    'dryLevel': 1,
                    'wetLevel': 1,
                    'level': 1,
                    'bypass': !1
                },
                'chorus': {
                    'rate': 0,
                    'depth': 0.7,
                    'feedback': 0.4,
                    'delay': 0.0045
                },
                'isMono': !1,
                'isPitch': !1,
                'volume': 1,
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
            });
            return q && (f[G(-839, -838)] = new p['Chorus']({
                'bypass': 0,
                'rate': B['rate'],
                'depth': B['depth'],
                'feedback': B['depth'],
                'delay': B['delay']
            })), v && (f['convolver'] = new p['Convolver']({
                'bypass': 0,
                'highCut': A['highCut'],
                'lowCut': A['lowCut'],
                'dryLevel': A['dryLevel'],
                'wetLevel': A['wetLevel'],
                'level': A['level']
            })), x && (f['pitch'] = new Jungle(f['audioContext'])), f['compressor'] = new p['Compressor']({
                'bypass': 0,
                'threshold': C['threshold'],
                'attack': C['attack'],
                'release': C['release'],
                'makeupGain': C['makeupGain'],
                'ratio': C['ratio'],
                'knee': C['knee']
            }), f['panSplitter'] = f['audioContext']['createChannelSplitter'](2), f['leftGain'] = f['audioContext']['createGain'](), f['rightGain'] = f['audioContext']['createGain'](), f['panMerger'] = f['audioContext']['createChannelMerger'](2), f['monoSplitter'] = f['audioContext']['createChannelSplitter'](2), f['monoGain'] = f['audioContext']['createGain'](), f['monoMerger'] = f['audioContext']['createChannelMerger'](2), f['twenty'] = f['audioContext']['createBiquadFilter'](), f['fifty'] = f['audioContext']['createBiquadFilter'](), f['oneHundred'] = f['audioContext']['createBiquadFilter'](), f['twoHundred'] = f['audioContext']['createBiquadFilter'](), f['fiveHundred'] = f['audioContext']['createBiquadFilter'](), f['oneThousand'] = f['audioContext']['createBiquadFilter'](), f['twoThousand'] = f['audioContext']['createBiquadFilter'](), f['fiveThousand'] = f['audioContext']['createBiquadFilter'](), f['tenThousand'] = f['audioContext']['createBiquadFilter'](), f['twentyThousand'] = f['audioContext']['createBiquadFilter'](), f['twenty']['type'] = 'lowshelf', f['twenty']['frequency']['setValueAtTime'](32, f['audioContext']['currentTime']), f['twenty']['gain']['setValueAtTime'](Number(z[0]), f['audioContext']['currentTime']), f['fifty']['type'] = 'peaking', f['fifty']['frequency']['setValueAtTime'](64, f['audioContext']['currentTime']), f['fifty']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['fifty']['gain']['setValueAtTime'](Number(z[1]), f['audioContext']['currentTime']), f['oneHundred']['type'] = 'peaking', f['oneHundred']['frequency']['setValueAtTime'](125, f['audioContext']['currentTime']), f['oneHundred']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['oneHundred']['gain']['setValueAtTime'](Number(z[2]), f['audioContext']['currentTime']), f['twoHundred']['type'] = 'peaking', f['twoHundred']['frequency']['setValueAtTime'](250, f['audioContext']['currentTime']), f['twoHundred']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['twoHundred']['gain']['setValueAtTime'](Number(z[3]), f['audioContext']['currentTime']), f['fiveHundred']['type'] = 'peaking', f['fiveHundred']['frequency']['setValueAtTime'](500, f['audioContext']['currentTime']), f['fiveHundred']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['fiveHundred']['gain']['setValueAtTime'](Number(z[4]), f['audioContext']['currentTime']), f['oneThousand']['type'] = 'peaking', f['oneThousand']['frequency']['setValueAtTime'](1000, f['audioContext']['currentTime']), f['oneThousand']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['oneThousand'][H(854, 852)]['setValueAtTime'](Number(z[5]), f['audioContext']['currentTime']), f['twoThousand']['type'] = 'peaking', f['twoThousand']['frequency']['setValueAtTime'](2000, f['audioContext']['currentTime']), f['twoThousand']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['twoThousand']['gain']['setValueAtTime'](Number(z[6]), f['audioContext']['currentTime']), f['fiveThousand']['type'] = 'peaking', f['fiveThousand']['frequency']['setValueAtTime'](4000, f['audioContext']['currentTime']), f['fiveThousand']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['fiveThousand']['gain']['setValueAtTime'](Number(z[7]), f['audioContext']['currentTime']), f['tenThousand']['type'] = 'peaking', f['tenThousand']['frequency']['setValueAtTime'](8000, f['audioContext']['currentTime']), f['tenThousand']['Q']['setValueAtTime'](5, f['audioContext']['currentTime']), f['tenThousand']['gain']['setValueAtTime'](Number(z[8]), f[G(-840, -838)]['currentTime']), f['twentyThousand']['type'] = 'highshelf', f['twentyThousand']['frequency']['setValueAtTime'](16000, f['audioContext']['currentTime']), f['twentyThousand']['gain']['setValueAtTime'](Number(z[9]), f['audioContext']['currentTime']), f['audioGain']['gain']['setValueAtTime'](y, f['audioContext']['currentTime']), f['monoGain']['gain']['setValueAtTime'](0.6, f['audioContext']['currentTime']), x && (f['pitch']['value'] = 0, f['pitch']['setPitchOffset'](0)), f['audioSource']['connect'](f['panSplitter']), f['panSplitter']['connect'](f['leftGain'], 0), f['panSplitter']['connect'](f['rightGain'], 1), f['leftGain']['connect'](f['panMerger'], 0, 0), f['rightGain']['connect'](f['panMerger'], 0, 1), h(!!w), x && q && v ? (f['monoMerger']['connect'](f['pitch']), f['pitch']['output']['connect'](f['chorus']), f['chorus']['connect'](f['convolver']), f['convolver']['connect'](f['twenty'])) : !x && q && v ? (f['monoMerger']['connect'](f['chorus']), f['chorus']['connect'](f['convolver']), f['convolver']['connect'](f['twenty'])) : x && !q && v ? (f['monoMerger']['connect'](f['pitch']), f['pitch']['output']['connect'](f['convolver']), f['convolver']['connect'](f['twenty'])) : x && q && !v ? (f['monoMerger']['connect'](f['pitch']), f['pitch']['output']['connect'](f['chorus']), f['chorus']['connect'](f['twenty'])) : !x || q || v ? x || q || !v ? x || v || !q ? x || q || v || f['monoMerger']['connect'](f['twenty']) : (f['monoMerger']['connect'](f['chorus']), f['chorus']['connect'](f['twenty'])) : (f['monoMerger']['connect'](f['convolver']), f['convolver']['connect'](f['twenty'])) : (f['monoMerger']['connect'](f['pitch']), f['pitch']['output']['connect'](f['twenty'])), f['twenty']['connect'](f['fifty']), f['fifty']['connect'](f['oneHundred']), f['oneHundred']['connect'](f['twoHundred']), f['twoHundred']['connect'](f['fiveHundred']), f['fiveHundred']['connect'](f['oneThousand']), f['oneThousand']['connect'](f['twoThousand']), f['twoThousand']['connect'](f['fiveThousand']), f['fiveThousand']['connect'](f['tenThousand']), f['tenThousand']['connect'](f['twentyThousand']), f['twentyThousand']['connect'](f['audioGain']), f['audioGain']['connect'](f['audioContext']['destination']), f;
        };
        function h(k) {
            1 == f['panMerger']['context']['__connectified__'] && f['panMerger']['disconnect'](), 1 == f['monoSplitter']['context']['__connectified__'] && f['monoSplitter']['disconnect'](), 1 == f['monoGain']['context']['__connectified__'] && f['monoGain']['disconnect'](), !0 === k ? (f['panMerger']['connect'](f['monoGain']), f['monoGain']['connect'](f['monoSplitter']), f['monoSplitter']['connect'](f['monoMerger'], 0, 1), f['monoSplitter']['connect'](f['monoMerger'], 0, 0), f['monoSplitter']['connect'](f['monoMerger'], 1, 0)) : (f['panMerger']['connect'](f['monoSplitter']), f['monoSplitter']['connect'](f['monoMerger'], 0, 0)), f['monoSplitter']['connect'](f['monoMerger'], 1, 1);
        }
        function i() {
            return new Promise(async (k, l) => {
                const m = await new Promise(p => {
                    chrome['tabCapture']['capture']({
                        'audio': !0,
                        'video': !1
                    }, q => {
                        p(q);
                    });
                });
                m ? (await g(m), k(m)) : window['close']();
            });
        }
        chrome['runtime']['onMessage']['addListener']((k, l, m) => {
            function K(c, d) {
                return b(c - -846, d);
            }
            function L(c, d) {
                return b(c - -567, d);
            }
            const {type: p} = k;
            switch (p['toLowerCase']()) {
            case 'start_record':
                i()['then'](() => {
                    f['id'] = k['data']['currentTabId'], m({ 'status': !0 });
                });
                break;
            case 'change_volume':
                f['audioGain']['gain']['value'] = k['value'], m({
                    'status': !0,
                    ...k
                });
                break;
            case 'change_equalizer':
                var {value: q} = k;
                f['twenty']['gain']['setValueAtTime'](Number(q[0]), f['audioContext']['currentTime']), f['fifty']['gain']['setValueAtTime'](Number(q[1]), f['audioContext']['currentTime']), f['oneHundred']['gain']['setValueAtTime'](Number(q[2]), f['audioContext']['currentTime']), f['twoHundred']['gain']['setValueAtTime'](Number(q[3]), f['audioContext']['currentTime']), f['fiveHundred']['gain']['setValueAtTime'](Number(q[4]), f['audioContext']['currentTime']), f['oneThousand']['gain']['setValueAtTime'](Number(q[5]), f['audioContext']['currentTime']), f['twoThousand']['gain'][K(-843, -846)](Number(q[6]), f['audioContext']['currentTime']), f['fiveThousand']['gain']['setValueAtTime'](Number(q[7]), f['audioContext']['currentTime']), f['tenThousand']['gain']['setValueAtTime'](Number(q[8]), f['audioContext']['currentTime']), f['twentyThousand']['gain']['setValueAtTime'](Number(q[9]), f['audioContext']['currentTime']), m({
                    'status': !0,
                    ...k
                });
                break;
            case 'closeaudio':
            case 'closeAudio':
                f['audioSource'] ? (window['close'](), f['audioContext']['close'](), f = {}, m({
                    'status': !0,
                    ...k
                })) : m({
                    'status': !0,
                    ...k
                });
                break;
            case 'change_compressor': {
                    const {
                        threshold: s,
                        release: v,
                        makeupGain: w,
                        attack: x,
                        ratio: y,
                        knee: z
                    } = k['value'];
                    f['compressor']['automate'](K(-842, -842), parseFloat(s)), f['compressor']['automate']('release', parseFloat(v)), f['compressor']['automate']('makeupGain', parseFloat(w)), f['compressor']['automate']('attack', parseFloat(x)), f['compressor']['automate']('ratio', parseFloat(y)), f['compressor']['automate']('knee', parseFloat(z)), m(f['compressor']);
                    break;
                }
            case 'change_pitch': {
                    let A = k;
                    f['pitch'] ? (f['pitch']['setPitchOffset'](A['value']['value']), f['pitch']['value'] = A['value']['value'], m(A)) : (f = {}, chrome['storage']['local']['set']({ 'isPitch': !0 }, () => {
                        i()['then'](() => {
                            f['pitch']['setPitchOffset'](A['value']['value']), f['pitch']['value'] = A['value']['value'], m(A);
                        });
                    }));
                    break;
                }
            case 'change_convolver': {
                    const B = k;
                    f['convolver'] ? (f['convolver']['automate']('lowCut', parseFloat(B['value']['lowCut'])), f['convolver']['automate']('highCut', parseFloat(B['value']['highCut'])), f['convolver']['automate']('wetLevel', parseFloat(B['value']['wetLevel'])), f['convolver']['automate']('level', parseFloat(B['value']['level'])), f['convolver']['automate']('dryLevel', parseFloat(B['value']['dryLevel'])), m({
                        'status': !0,
                        ...k
                    })) : (f = {}, chrome['storage']['local']['set']({ 'isConvolver': !0 }, () => {
                        i()['then'](() => {
                            function M(c, d) {
                                return b(c - -604, d);
                            }
                            f['convolver']['automate']('lowCut', parseFloat(B['value'][M(-599, -598)]));
                        });
                    }));
                    break;
                }
            case 'change_chorus': {
                    const C = k;
                    f['chorus'] ? (f['chorus']['rate'] = parseFloat(C['value']['rate']), f['chorus']['depth'] = parseFloat(C['value']['depth']), f['chorus']['feedback'] = parseFloat(C['value']['feedback']), f['chorus']['delay'] = parseFloat(C['value']['delay']), f['chorusFixedDelay'] = C['value']['delay'], m({
                        'status': !0,
                        ...k
                    })) : (f = {}, chrome['storage']['local']['set']({ 'isChorus': !0 }, () => {
                        i()['then'](() => {
                            f['chorus']['rate'] = parseFloat(C['value']['rate']), f['chorus']['depth'] = parseFloat(C['value']['depth']), f['chorus']['feedback'] = parseFloat(C['value']['feedback']), f['chorus']['delay'] = parseFloat(C['value']['delay']), f['chorusFixedDelay'] = C['value']['delay'], m({
                                'status': !0,
                                ...k
                            });
                        });
                    }));
                    break;
                }
            case 'connect_compressor':
                f['twentyThousand']['disconnect'](f['audioGain']), f['twentyThousand']['connect'](f['compressor']), f['compressor']['connect'](f['audioGain']), f['audioGain']['connect'](f['audioContext']['destination']), m({
                    'status': !1,
                    ...k
                });
                break;
            case 'disconnect_compressor':
                f['compressor']['disconnect'](f['audioGain']), f['twentyThousand']['connect'](f['audioGain']), f['audioGain']['connect'](f['audioContext']['destination']), m({
                    'status': !1,
                    ...k
                });
                break;
            default:
                m({
                    'status': !1,
                    ...k
                });
            }
        });
        const j = k => new Promise(l => {
            chrome['storage']['local']['get']([k], m => {
                l(m[k]);
            });
        });
        chrome['tabCapture']['onStatusChanged']['addListener'](function (k) {
            'active' == k['status'] && k['tabId'] && chrome['storage']['local']['set']({ 'fullScreen': !0 }, () => {
                chrome['windows']['getCurrent'](async function (l) {
                    const m = l['id'];
                    if (!1 !== await j('fullScreen')) {
                        if (1 == k['fullscreen'])
                            chrome['storage']['local']['set']({ 'windowState': l['state'] }), chrome['windows']['update'](m, { 'state': 'fullscreen' }, null);
                        else {
                            const p = await j('windowState');
                            chrome['windows']['update'](m, { 'state': p }, null);
                        }
                    } else
                        chrome['windows']['update'](m, { 'state': l['state'] }, null);
                });
            });
        });
    }]);
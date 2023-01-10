!function (A17dbba) {
    var A56d586 = {};
    function A23fe7e(A3f1158) {
        if (A56d586[A3f1158])
            return A56d586[A3f1158]['exports'];
        var A127451 = A56d586[A3f1158] = {
            'i': A3f1158,
            'l': !1,
            'exports': {}
        };
        return A17dbba[A3f1158]['call'](A127451['exports'], A127451, A127451['exports'], A23fe7e), A127451['l'] = !0, A127451['exports'];
    }
    A23fe7e['m'] = A17dbba, A23fe7e['c'] = A56d586, A23fe7e['d'] = function (A34176b, A4bf339, Afc980d) {
        A23fe7e['o'](A34176b, A4bf339) || Object['defineProperty'](A34176b, A4bf339, {
            'enumerable': !0,
            'get': Afc980d
        });
    }, A23fe7e['r'] = function (A1e92d9) {
        'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](A1e92d9, Symbol['toStringTag'], { 'value': 'Module' }), Object['defineProperty'](A1e92d9, '__esModule', { 'value': !0 });
    }, A23fe7e['t'] = function (A3a3289, A1cedb3) {
        if (1 & A1cedb3 && (A3a3289 = A23fe7e(A3a3289)), 8 & A1cedb3)
            return A3a3289;
        if (4 & A1cedb3 && 'object' == typeof A3a3289 && A3a3289 && A3a3289['__esModule'])
            return A3a3289;
        var A238c42 = Object['create'](null);
        if (A23fe7e['r'](A238c42), Object['defineProperty'](A238c42, 'default', {
                'enumerable': !0,
                'value': A3a3289
            }), 2 & A1cedb3 && 'string' != typeof A3a3289) {
            for (var A2bc8aa in A3a3289)
                A23fe7e['d'](A238c42, A2bc8aa, function (A1d6b08) {
                    return A3a3289[A1d6b08];
                }['bind'](null, A2bc8aa));
        }
        return A238c42;
    }, A23fe7e['n'] = function (A5b5c40) {
        var A3aa131 = A5b5c40 && A5b5c40['__esModule'] ? function () {
            return A5b5c40['default'];
        } : function () {
            return A5b5c40;
        };
        return A23fe7e['d'](A3aa131, 'a', A3aa131), A3aa131;
    }, A23fe7e['o'] = function (A17709a, A30f3a1) {
        return Object['prototype']['hasOwnProperty']['call'](A17709a, A30f3a1);
    }, A23fe7e['p'] = '', A23fe7e(A23fe7e['s'] = 0);
}([function (A33fd76, A161a31) {
        var A447339 = {};
        const A2490bd = async A4eb533 => {
            A447339['audioContext'] = new AudioContext({ 'latencyHint': 'playback' }), A447339['audioSource'] = A447339['audioContext']['createMediaStreamSource'](A4eb533), A447339['audioGain'] = A447339['audioContext']['createGain']();
            let A432a16 = new Tuna(A447339['audioContext']);
            const {
                isChorus: A14acdf,
                isConvolver: A51c76a,
                isMono: A15fca8,
                isPitch: A2198fa,
                volume: A4fa710,
                eq: A311421,
                convolver: A149600,
                chorus: A2a213f,
                compressor: A5e6158
            } = await class {
                static ['getItem'](A8c21d4) {
                    return new Promise(A5b0e29 => chrome['storage']['local']['get'](A8c21d4, A5cd571 => A5b0e29(A5cd571)));
                }
                static ['getCurrentTab']() {
                    return new Promise(async A533ddf => {
                        let [A5576bd] = await chrome['tabs']['query']({
                            'active': !0,
                            'lastFocusedWindow': !0
                        });
                        A533ddf(A5576bd);
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
            return A14acdf && (A447339['chorus'] = new A432a16['Chorus']({
                'bypass': 0,
                'rate': A2a213f['rate'],
                'depth': A2a213f['depth'],
                'feedback': A2a213f['depth'],
                'delay': A2a213f['delay']
            })), A51c76a && (A447339['convolver'] = new A432a16['Convolver']({
                'bypass': 0,
                'highCut': A149600['highCut'],
                'lowCut': A149600['lowCut'],
                'dryLevel': A149600['dryLevel'],
                'wetLevel': A149600['wetLevel'],
                'level': A149600['level']
            })), A2198fa && (A447339['pitch'] = new Jungle(A447339['audioContext'])), A447339['compressor'] = new A432a16['Compressor']({
                'bypass': 0,
                'threshold': A5e6158['threshold'],
                'attack': A5e6158['attack'],
                'release': A5e6158['release'],
                'makeupGain': A5e6158['makeupGain'],
                'ratio': A5e6158['ratio'],
                'knee': A5e6158['knee']
            }), A447339['panSplitter'] = A447339['audioContext']['createChannelSplitter'](2), A447339['leftGain'] = A447339['audioContext']['createGain'](), A447339['rightGain'] = A447339['audioContext']['createGain'](), A447339['panMerger'] = A447339['audioContext']['createChannelMerger'](2), A447339['monoSplitter'] = A447339['audioContext']['createChannelSplitter'](2), A447339['monoGain'] = A447339['audioContext']['createGain'](), A447339['monoMerger'] = A447339['audioContext']['createChannelMerger'](2), A447339['twenty'] = A447339['audioContext']['createBiquadFilter'](), A447339['fifty'] = A447339['audioContext']['createBiquadFilter'](), A447339['oneHundred'] = A447339['audioContext']['createBiquadFilter'](), A447339['twoHundred'] = A447339['audioContext']['createBiquadFilter'](), A447339['fiveHundred'] = A447339['audioContext']['createBiquadFilter'](), A447339['oneThousand'] = A447339['audioContext']['createBiquadFilter'](), A447339['twoThousand'] = A447339['audioContext']['createBiquadFilter'](), A447339['fiveThousand'] = A447339['audioContext']['createBiquadFilter'](), A447339['tenThousand'] = A447339['audioContext']['createBiquadFilter'](), A447339['twentyThousand'] = A447339['audioContext']['createBiquadFilter'](), A447339['twenty']['type'] = 'lowshelf', A447339['twenty']['frequency']['setValueAtTime'](32, A447339['audioContext']['currentTime']), A447339['twenty']['gain']['setValueAtTime'](Number(A311421[0]), A447339['audioContext']['currentTime']), A447339['fifty']['type'] = 'peaking', A447339['fifty']['frequency']['setValueAtTime'](64, A447339['audioContext']['currentTime']), A447339['fifty']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['fifty']['gain']['setValueAtTime'](Number(A311421[1]), A447339['audioContext']['currentTime']), A447339['oneHundred']['type'] = 'peaking', A447339['oneHundred']['frequency']['setValueAtTime'](125, A447339['audioContext']['currentTime']), A447339['oneHundred']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['oneHundred']['gain']['setValueAtTime'](Number(A311421[2]), A447339['audioContext']['currentTime']), A447339['twoHundred']['type'] = 'peaking', A447339['twoHundred']['frequency']['setValueAtTime'](250, A447339['audioContext']['currentTime']), A447339['twoHundred']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['twoHundred']['gain']['setValueAtTime'](Number(A311421[3]), A447339['audioContext']['currentTime']), A447339['fiveHundred']['type'] = 'peaking', A447339['fiveHundred']['frequency']['setValueAtTime'](500, A447339['audioContext']['currentTime']), A447339['fiveHundred']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['fiveHundred']['gain']['setValueAtTime'](Number(A311421[4]), A447339['audioContext']['currentTime']), A447339['oneThousand']['type'] = 'peaking', A447339['oneThousand']['frequency']['setValueAtTime'](1000, A447339['audioContext']['currentTime']), A447339['oneThousand']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['oneThousand']['gain']['setValueAtTime'](Number(A311421[5]), A447339['audioContext']['currentTime']), A447339['twoThousand']['type'] = 'peaking', A447339['twoThousand']['frequency']['setValueAtTime'](2000, A447339['audioContext']['currentTime']), A447339['twoThousand']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['twoThousand']['gain']['setValueAtTime'](Number(A311421[6]), A447339['audioContext']['currentTime']), A447339['fiveThousand']['type'] = 'peaking', A447339['fiveThousand']['frequency']['setValueAtTime'](4000, A447339['audioContext']['currentTime']), A447339['fiveThousand']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['fiveThousand']['gain']['setValueAtTime'](Number(A311421[7]), A447339['audioContext']['currentTime']), A447339['tenThousand']['type'] = 'peaking', A447339['tenThousand']['frequency']['setValueAtTime'](8000, A447339['audioContext']['currentTime']), A447339['tenThousand']['Q']['setValueAtTime'](5, A447339['audioContext']['currentTime']), A447339['tenThousand']['gain']['setValueAtTime'](Number(A311421[8]), A447339['audioContext']['currentTime']), A447339['twentyThousand']['type'] = 'highshelf', A447339['twentyThousand']['frequency']['setValueAtTime'](16000, A447339['audioContext']['currentTime']), A447339['twentyThousand']['gain']['setValueAtTime'](Number(A311421[9]), A447339['audioContext']['currentTime']), A447339['audioGain']['gain']['setValueAtTime'](A4fa710, A447339['audioContext']['currentTime']), A447339['monoGain']['gain']['setValueAtTime'](0.6, A447339['audioContext']['currentTime']), A2198fa && (A447339['pitch']['value'] = 0, A447339['pitch']['setPitchOffset'](0)), A447339['audioSource']['connect'](A447339['panSplitter']), A447339['panSplitter']['connect'](A447339['leftGain'], 0), A447339['panSplitter']['connect'](A447339['rightGain'], 1), A447339['leftGain']['connect'](A447339['panMerger'], 0, 0), A447339['rightGain']['connect'](A447339['panMerger'], 0, 1), A3bf7a2(!!A15fca8), A2198fa && A14acdf && A51c76a ? (A447339['monoMerger']['connect'](A447339['pitch']), A447339['pitch']['output']['connect'](A447339['chorus']), A447339['chorus']['connect'](A447339['convolver']), A447339['convolver']['connect'](A447339['twenty'])) : !A2198fa && A14acdf && A51c76a ? (A447339['monoMerger']['connect'](A447339['chorus']), A447339['chorus']['connect'](A447339['convolver']), A447339['convolver']['connect'](A447339['twenty'])) : A2198fa && !A14acdf && A51c76a ? (A447339['monoMerger']['connect'](A447339['pitch']), A447339['pitch']['output']['connect'](A447339['convolver']), A447339['convolver']['connect'](A447339['twenty'])) : A2198fa && A14acdf && !A51c76a ? (A447339['monoMerger']['connect'](A447339['pitch']), A447339['pitch']['output']['connect'](A447339['chorus']), A447339['chorus']['connect'](A447339['twenty'])) : !A2198fa || A14acdf || A51c76a ? A2198fa || A14acdf || !A51c76a ? A2198fa || A51c76a || !A14acdf ? A2198fa || A14acdf || A51c76a || A447339['monoMerger']['connect'](A447339['twenty']) : (A447339['monoMerger']['connect'](A447339['chorus']), A447339['chorus']['connect'](A447339['twenty'])) : (A447339['monoMerger']['connect'](A447339['convolver']), A447339['convolver']['connect'](A447339['twenty'])) : (A447339['monoMerger']['connect'](A447339['pitch']), A447339['pitch']['output']['connect'](A447339['twenty'])), A447339['twenty']['connect'](A447339['fifty']), A447339['fifty']['connect'](A447339['oneHundred']), A447339['oneHundred']['connect'](A447339['twoHundred']), A447339['twoHundred']['connect'](A447339['fiveHundred']), A447339['fiveHundred']['connect'](A447339['oneThousand']), A447339['oneThousand']['connect'](A447339['twoThousand']), A447339['twoThousand']['connect'](A447339['fiveThousand']), A447339['fiveThousand']['connect'](A447339['tenThousand']), A447339['tenThousand']['connect'](A447339['twentyThousand']), A447339['twentyThousand']['connect'](A447339['audioGain']), A447339['audioGain']['connect'](A447339['audioContext']['destination']), A447339;
        };
        function A3bf7a2(A3d3248) {
            1 == A447339['panMerger']['context']['__connectified__'] && A447339['panMerger']['disconnect'](), 1 == A447339['monoSplitter']['context']['__connectified__'] && A447339['monoSplitter']['disconnect'](), 1 == A447339['monoGain']['context']['__connectified__'] && A447339['monoGain']['disconnect'](), !0 === A3d3248 ? (A447339['panMerger']['connect'](A447339['monoGain']), A447339['monoGain']['connect'](A447339['monoSplitter']), A447339['monoSplitter']['connect'](A447339['monoMerger'], 0, 1), A447339['monoSplitter']['connect'](A447339['monoMerger'], 0, 0), A447339['monoSplitter']['connect'](A447339['monoMerger'], 1, 0)) : (A447339['panMerger']['connect'](A447339['monoSplitter']), A447339['monoSplitter']['connect'](A447339['monoMerger'], 0, 0)), A447339['monoSplitter']['connect'](A447339['monoMerger'], 1, 1);
        }
        function A46323c() {
            return new Promise(async (A195093, A11c15c) => {
                const A54fbe0 = await new Promise(A3254eb => {
                    chrome['tabCapture']['capture']({
                        'audio': !0,
                        'video': !1
                    }, A15d49d => {
                        A3254eb(A15d49d);
                    });
                });
                A54fbe0 ? (await A2490bd(A54fbe0), A195093(A54fbe0)) : window['close']();
            });
        }
        chrome['runtime']['onMessage']['addListener']((A332864, Afeaa71, A4eeb7c) => {
            const {type: A2867c5} = A332864;
            switch (A2867c5['toLowerCase']()) {
            case 'start_record':
                A46323c()['then'](() => {
                    A447339['id'] = A332864['data']['currentTabId'], A4eeb7c({ 'status': !0 });
                });
                break;
            case 'change_volume':
                A447339['audioGain']['gain']['value'] = A332864['value'], A4eeb7c({
                    'status': !0,
                    ...A332864
                });
                break;
            case 'change_equalizer':
                var {value: A31c12a} = A332864;
                A447339['twenty']['gain']['setValueAtTime'](Number(A31c12a[0]), A447339['audioContext']['currentTime']), A447339['fifty']['gain']['setValueAtTime'](Number(A31c12a[1]), A447339['audioContext']['currentTime']), A447339['oneHundred']['gain']['setValueAtTime'](Number(A31c12a[2]), A447339['audioContext']['currentTime']), A447339['twoHundred']['gain']['setValueAtTime'](Number(A31c12a[3]), A447339['audioContext']['currentTime']), A447339['fiveHundred']['gain']['setValueAtTime'](Number(A31c12a[4]), A447339['audioContext']['currentTime']), A447339['oneThousand']['gain']['setValueAtTime'](Number(A31c12a[5]), A447339['audioContext']['currentTime']), A447339['twoThousand']['gain']['setValueAtTime'](Number(A31c12a[6]), A447339['audioContext']['currentTime']), A447339['fiveThousand']['gain']['setValueAtTime'](Number(A31c12a[7]), A447339['audioContext']['currentTime']), A447339['tenThousand']['gain']['setValueAtTime'](Number(A31c12a[8]), A447339['audioContext']['currentTime']), A447339['twentyThousand']['gain']['setValueAtTime'](Number(A31c12a[9]), A447339['audioContext']['currentTime']), A4eeb7c({
                    'status': !0,
                    ...A332864
                });
                break;
            case 'closeaudio':
            case 'closeAudio':
                A447339['audioSource'] ? (window['close'](), A447339['audioContext']['close'](), A447339 = {}, A4eeb7c({
                    'status': !0,
                    ...A332864
                })) : A4eeb7c({
                    'status': !0,
                    ...A332864
                });
                break;
            case 'change_compressor': {
                    const {
                        threshold: A2b4d54,
                        release: A4c842e,
                        makeupGain: A23fd2a,
                        attack: A1b44c8,
                        ratio: A311685,
                        knee: A5cbc54
                    } = A332864['value'];
                    A447339['compressor']['automate']('threshold', parseFloat(A2b4d54)), A447339['compressor']['automate']('release', parseFloat(A4c842e)), A447339['compressor']['automate']('makeupGain', parseFloat(A23fd2a)), A447339['compressor']['automate']('attack', parseFloat(A1b44c8)), A447339['compressor']['automate']('ratio', parseFloat(A311685)), A447339['compressor']['automate']('knee', parseFloat(A5cbc54)), A4eeb7c(A447339['compressor']);
                    break;
                }
            case 'change_pitch': {
                    let A28c5f9 = A332864;
                    A447339['pitch'] ? (A447339['pitch']['setPitchOffset'](A28c5f9['value']['value']), A447339['pitch']['value'] = A28c5f9['value']['value'], A4eeb7c(A28c5f9)) : (A447339 = {}, chrome['storage']['local']['set']({ 'isPitch': !0 }, () => {
                        A46323c()['then'](() => {
                            A447339['pitch']['setPitchOffset'](A28c5f9['value']['value']), A447339['pitch']['value'] = A28c5f9['value']['value'], A4eeb7c(A28c5f9);
                        });
                    }));
                    break;
                }
            case 'change_convolver': {
                    const A554674 = A332864;
                    A447339['convolver'] ? (A447339['convolver']['automate']('lowCut', parseFloat(A554674['value']['lowCut'])), A447339['convolver']['automate']('highCut', parseFloat(A554674['value']['highCut'])), A447339['convolver']['automate']('wetLevel', parseFloat(A554674['value']['wetLevel'])), A447339['convolver']['automate']('level', parseFloat(A554674['value']['level'])), A447339['convolver']['automate']('dryLevel', parseFloat(A554674['value']['dryLevel'])), A4eeb7c({
                        'status': !0,
                        ...A332864
                    })) : (A447339 = {}, chrome['storage']['local']['set']({ 'isConvolver': !0 }, () => {
                        A46323c()['then'](() => {
                            A447339['convolver']['automate']('lowCut', parseFloat(A554674['value']['lowCut']));
                        });
                    }));
                    break;
                }
            case 'change_chorus': {
                    const A3fa5ad = A332864;
                    A447339['chorus'] ? (A447339['chorus']['rate'] = parseFloat(A3fa5ad['value']['rate']), A447339['chorus']['depth'] = parseFloat(A3fa5ad['value']['depth']), A447339['chorus']['feedback'] = parseFloat(A3fa5ad['value']['feedback']), A447339['chorus']['delay'] = parseFloat(A3fa5ad['value']['delay']), A447339['chorusFixedDelay'] = A3fa5ad['value']['delay'], A4eeb7c({
                        'status': !0,
                        ...A332864
                    })) : (A447339 = {}, chrome['storage']['local']['set']({ 'isChorus': !0 }, () => {
                        A46323c()['then'](() => {
                            A447339['chorus']['rate'] = parseFloat(A3fa5ad['value']['rate']), A447339['chorus']['depth'] = parseFloat(A3fa5ad['value']['depth']), A447339['chorus']['feedback'] = parseFloat(A3fa5ad['value']['feedback']), A447339['chorus']['delay'] = parseFloat(A3fa5ad['value']['delay']), A447339['chorusFixedDelay'] = A3fa5ad['value']['delay'], A4eeb7c({
                                'status': !0,
                                ...A332864
                            });
                        });
                    }));
                    break;
                }
            case 'connect_compressor':
                A447339['twentyThousand']['disconnect'](A447339['audioGain']), A447339['twentyThousand']['connect'](A447339['compressor']), A447339['compressor']['connect'](A447339['audioGain']), A447339['audioGain']['connect'](A447339['audioContext']['destination']), A4eeb7c({
                    'status': !1,
                    ...A332864
                });
                break;
            case 'disconnect_compressor':
                A447339['compressor']['disconnect'](A447339['audioGain']), A447339['twentyThousand']['connect'](A447339['audioGain']), A447339['audioGain']['connect'](A447339['audioContext']['destination']), A4eeb7c({
                    'status': !1,
                    ...A332864
                });
                break;
            default:
                A4eeb7c({
                    'status': !1,
                    ...A332864
                });
            }
        });
        const Ad52360 = A46ffd8 => new Promise(A36c448 => {
            chrome['storage']['local']['get']([A46ffd8], A38d6ec => {
                A36c448(A38d6ec[A46ffd8]);
            });
        });
        chrome['tabCapture']['onStatusChanged']['addListener'](function (A54dcf9) {
            'active' == A54dcf9['status'] && A54dcf9['tabId'] && chrome['storage']['local']['set']({ 'fullScreen': !0 }, () => {
                chrome['windows']['getCurrent'](async function (A19736e) {
                    const A1e7b27 = A19736e['id'];
                    if (!1 !== await Ad52360('fullScreen')) {
                        if (1 == A54dcf9['fullscreen'])
                            chrome['storage']['local']['set']({ 'windowState': A19736e['state'] }), chrome['windows']['update'](A1e7b27, { 'state': 'fullscreen' }, null);
                        else {
                            const A4492fc = await Ad52360('windowState');
                            chrome['windows']['update'](A1e7b27, { 'state': A4492fc }, null);
                        }
                    } else
                        chrome['windows']['update'](A1e7b27, { 'state': A19736e['state'] }, null);
                });
            });
        });
    }]);
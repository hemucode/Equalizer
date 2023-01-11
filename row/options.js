function tabCapture() {
    return new Promise(c => {
        chrome['tabCapture']['capture']({
            'audio': !![],
            'video': ![]
        }, d => {
            c(d);
        });
    });
}
var cTabObj = {};
const createAudioContext = async c => {
    cTabObj['audioContext'] = new AudioContext({ 'latencyHint': 'playback' }), cTabObj['audioSource'] = cTabObj['audioContext']['createMediaStreamSource'](c), cTabObj['audioGain'] = cTabObj['audioContext']['createGain']();
    let d = new Tuna(cTabObj['audioContext']);
    const {
        isChorus: e,
        isConvolver: f,
        isMono: g,
        isPitch: h,
        volume: i,
        eq: j,
        convolver: k,
        chorus: l,
        compressor: m
    } = await Core['getItem']({
        'isChorus': ![],
        'isConvolver': !![],
        'compressor': {
            'threshold': -20,
            'attack': 0,
            'release': 250,
            'makeupGain': 1,
            'ratio': 4,
            'knee': 5,
            'bypass': ![],
            'automakeup': ![]
        },
        'convolver': {
            'highCut': 22050,
            'lowCut': 20,
            'dryLevel': 1,
            'wetLevel': 1,
            'level': 1,
            'bypass': ![]
        },
        'chorus': {
            'rate': 0,
            'depth': 0.7,
            'feedback': 0.4,
            'delay': 0.0045
        },
        'isMono': ![],
        'isPitch': ![],
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
    e && (cTabObj['chorus'] = new d['Chorus']({
        'bypass': 0,
        'rate': l['rate'],
        'depth': l['depth'],
        'feedback': l['depth'],
        'delay': l['delay']
    }));
    f && (cTabObj[r(-110, -114)] = new d['Convolver']({
        'bypass': 0,
        'highCut': k['highCut'],
        'lowCut': k['lowCut'],
        'dryLevel': k['dryLevel'],
        'wetLevel': k['wetLevel'],
        'level': k['level']
    }));
    h && (cTabObj['pitch'] = new Jungle(cTabObj['audioContext']));
    cTabObj['compressor'] = new d['Compressor']({
        'bypass': 0,
        'threshold': m['threshold'],
        'attack': m['attack'],
        'release': m['release'],
        'ratio': m['ratio'],
        'knee': m['knee']
    }), cTabObj['panSplitter'] = cTabObj['audioContext']['createChannelSplitter'](2), cTabObj['leftGain'] = cTabObj['audioContext']['createGain'](), cTabObj['rightGain'] = cTabObj['audioContext']['createGain'](), cTabObj['panMerger'] = cTabObj['audioContext']['createChannelMerger'](2), cTabObj['monoSplitter'] = cTabObj['audioContext']['createChannelSplitter'](2), cTabObj['monoGain'] = cTabObj['audioContext']['createGain'](), cTabObj['monoMerger'] = cTabObj['audioContext']['createChannelMerger'](2);
    function t(c, d) {
        return b(d - -658, c);
    }
    cTabObj['twenty'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fifty'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['oneHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twoHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fiveHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['oneThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twoThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fiveThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['tenThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twentyThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twenty']['type'] = 'lowshelf', cTabObj['twenty']['frequency']['setValueAtTime'](32, cTabObj['audioContext']['currentTime']), cTabObj['twenty']['gain']['setValueAtTime'](Number(j[0]), cTabObj['audioContext']['currentTime']), cTabObj['fifty']['type'] = 'peaking', cTabObj['fifty']['frequency']['setValueAtTime'](64, cTabObj['audioContext']['currentTime']), cTabObj['fifty']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fifty']['gain']['setValueAtTime'](Number(j[1]), cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['type'] = 'peaking', cTabObj['oneHundred']['frequency']['setValueAtTime'](125, cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['gain']['setValueAtTime'](Number(j[2]), cTabObj['audioContext']['currentTime']);
    function u(c, d) {
        return b(d - -286, c);
    }
    cTabObj['twoHundred']['type'] = 'peaking', cTabObj['twoHundred']['frequency']['setValueAtTime'](250, cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['gain']['setValueAtTime'](Number(j[3]), cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['type'] = 'peaking', cTabObj['fiveHundred']['frequency']['setValueAtTime'](500, cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['gain']['setValueAtTime'](Number(j[4]), cTabObj['audioContext']['currentTime']);
    function r(c, d) {
        return b(c - -110, d);
    }
    cTabObj['oneThousand']['type'] = 'peaking', cTabObj['oneThousand']['frequency']['setValueAtTime'](1000, cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['gain']['setValueAtTime'](Number(j[5]), cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['type'] = 'peaking', cTabObj['twoThousand']['frequency']['setValueAtTime'](2000, cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['gain']['setValueAtTime'](Number(j[6]), cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['type'] = 'peaking', cTabObj['fiveThousand']['frequency']['setValueAtTime'](4000, cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['gain']['setValueAtTime'](Number(j[7]), cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['type'] = 'peaking', cTabObj['tenThousand']['frequency']['setValueAtTime'](8000, cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['Q'][s(445, 448)](5, cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['gain']['setValueAtTime'](Number(j[8]), cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['type'] = 'highshelf', cTabObj['twentyThousand']['frequency']['setValueAtTime'](16000, cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['gain']['setValueAtTime'](Number(j[9]), cTabObj['audioContext']['currentTime']), cTabObj['audioGain']['gain']['setValueAtTime'](i, cTabObj['audioContext']['currentTime']), cTabObj['monoGain']['gain']['setValueAtTime'](0.6, cTabObj['audioContext']['currentTime']);
    h && (cTabObj['pitch']['value'] = 0, cTabObj['pitch']['setPitchOffset'](0));
    cTabObj['audioSource'][s(446, 446)](cTabObj['panSplitter']), cTabObj['panSplitter']['connect'](cTabObj['leftGain'], 0), cTabObj['panSplitter']['connect'](cTabObj['rightGain'], 1), cTabObj['leftGain']['connect'](cTabObj['panMerger'], 0, 0), cTabObj['rightGain']['connect'](cTabObj['panMerger'], 0, 1);
    g ? toggleMonoNodes(!![]) : toggleMonoNodes(![]);
    if (h && e && f)
        cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
    else {
        if (!h && e && f)
            cTabObj[s(447, 450)]['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
        else {
            if (h && !e && f)
                cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
            else {
                if (h && e && !f)
                    cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['twenty']);
                else {
                    if (h && !e && !f)
                        cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['twenty']);
                    else {
                        if (!h && !e && f)
                            cTabObj['monoMerger']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
                        else {
                            if (!h && !f && e)
                                cTabObj['monoMerger']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['twenty']);
                            else
                                !h && !e && !f && cTabObj['monoMerger']['connect'](cTabObj['twenty']);
                        }
                    }
                }
            }
        }
    }
    cTabObj['twenty']['connect'](cTabObj['fifty']), cTabObj['fifty']['connect'](cTabObj['oneHundred']), cTabObj['oneHundred']['connect'](cTabObj['twoHundred']), cTabObj['twoHundred']['connect'](cTabObj['fiveHundred']), cTabObj['fiveHundred']['connect'](cTabObj['oneThousand']), cTabObj['oneThousand']['connect'](cTabObj['twoThousand']), cTabObj['twoThousand']['connect'](cTabObj['fiveThousand']), cTabObj['fiveThousand']['connect'](cTabObj['tenThousand']), cTabObj['tenThousand']['connect'](cTabObj['twentyThousand']), cTabObj['twentyThousand']['connect'](cTabObj['compressor']), cTabObj['compressor']['connect'](cTabObj['audioGain']), cTabObj['audioGain']['connect'](cTabObj['audioContext']['destination']);
    function s(c, d) {
        return b(c - 444, d);
    }
    return cTabObj;
};
function toggleMonoNodes(c) {
    cTabObj['panMerger']['context'][v(905, 908)] == 1 && cTabObj['panMerger']['disconnect']();
    cTabObj['monoSplitter']['context']['__connectified__'] == 1 && cTabObj['monoSplitter']['disconnect']();
    cTabObj['monoGain']['context']['__connectified__'] == 1 && cTabObj['monoGain']['disconnect']();
    function v(c, d) {
        return b(c - 901, d);
    }
    c === !![] ? (cTabObj['panMerger']['connect'](cTabObj['monoGain']), cTabObj['monoGain']['connect'](cTabObj['monoSplitter']), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 1), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 0), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 1, 0)) : (cTabObj['panMerger']['connect'](cTabObj['monoSplitter']), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 0)), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 1, 1);
}
function startRecord() {
    return new Promise(async (c, d) => {
        const e = await tabCapture();
        e ? (await createAudioContext(e), c(e)) : window['close']();
    });
}
chrome['runtime']['onMessage']['addListener']((c, d, e) => {
    function w(c, d) {
        return b(d - 235, c);
    }
    const {type: f} = c, g = f['toLowerCase']();
    switch (g) {
    case 'start_record':
        startRecord()['then'](() => {
            cTabObj['id'] = c['data']['currentTabId'], e({ 'status': !![] });
        });
        break;
    case 'change_volume':
        cTabObj['audioGain']['gain']['value'] = c['value'], e({
            'status': !![],
            ...c
        });
        break;
    case 'change_equalizer': {
            const {value: h} = c;
            cTabObj['twenty']['gain']['setValueAtTime'](Number(h[0]), cTabObj['audioContext']['currentTime']), cTabObj['fifty']['gain']['setValueAtTime'](Number(h[1]), cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['gain']['setValueAtTime'](Number(h[2]), cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['gain']['setValueAtTime'](Number(h[3]), cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['gain']['setValueAtTime'](Number(h[4]), cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['gain']['setValueAtTime'](Number(h[5]), cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['gain']['setValueAtTime'](Number(h[6]), cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['gain']['setValueAtTime'](Number(h[7]), cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['gain']['setValueAtTime'](Number(h[8]), cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['gain']['setValueAtTime'](Number(h[9]), cTabObj['audioContext']['currentTime']), e({
                'status': !![],
                ...c
            });
            break;
        }
    case 'closeaudio':
    case 'closeAudio': {
            cTabObj['audioSource'] ? (window['close'](), cTabObj['audioContext']['close'](), cTabObj = {}, e({
                'status': !![],
                ...c
            })) : e({
                'status': !![],
                ...c
            });
            break;
        }
    case 'change_compressor': {
            const {
                threshold: i,
                release: j,
                makeupGain: k,
                attack: l,
                ratio: m,
                knee: n
            } = c['value'];
            cTabObj['compressor']['automate']('threshold', parseFloat(i)), cTabObj['compressor']['automate']('release', parseFloat(j)), cTabObj['compressor']['automate']('attack', parseFloat(l)), cTabObj['compressor']['automate']('ratio', parseFloat(m)), cTabObj['compressor']['automate'](w(239, 240), parseFloat(n)), e(cTabObj['compressor']);
            break;
        }
    case 'change_pitch': {
            let o = c;
            !cTabObj['pitch'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isPitch': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['pitch']['setPitchOffset'](o['value']['value']);
                    function x(c, d) {
                        return b(d - -677, c);
                    }
                    cTabObj['pitch']['value'] = o[x(-673, -671)]['value'], e(o);
                });
            })) : (cTabObj['pitch']['setPitchOffset'](o['value']['value']), cTabObj['pitch']['value'] = o['value']['value'], e(o));
            break;
        }
    case 'change_convolver': {
            const p = c;
            !cTabObj['convolver'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isConvolver': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['convolver']['automate']('lowCut', parseFloat(p['value']['lowCut']));
                });
            })) : (cTabObj['convolver']['automate']('lowCut', parseFloat(p['value']['lowCut'])), cTabObj['convolver']['automate']('highCut', parseFloat(p['value']['highCut'])), cTabObj['convolver']['automate']('wetLevel', parseFloat(p['value']['wetLevel'])), cTabObj['convolver']['automate']('level', parseFloat(p['value']['level'])), cTabObj['convolver']['automate']('dryLevel', parseFloat(p['value']['dryLevel'])), e({
                'status': !![],
                ...c
            }));
            break;
        }
    case 'change_chorus': {
            const q = c;
            !cTabObj['chorus'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isChorus': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['chorus']['rate'] = parseFloat(q['value']['rate']), cTabObj['chorus']['depth'] = parseFloat(q['value']['depth']), cTabObj['chorus']['feedback'] = parseFloat(q['value']['feedback']), cTabObj['chorus']['delay'] = parseFloat(q['value']['delay']), cTabObj['chorusFixedDelay'] = q['value']['delay'], e({
                        'status': !![],
                        ...c
                    });
                });
            })) : (cTabObj['chorus']['rate'] = parseFloat(q['value']['rate']), cTabObj['chorus']['depth'] = parseFloat(q['value']['depth']), cTabObj['chorus']['feedback'] = parseFloat(q['value']['feedback']), cTabObj['chorus']['delay'] = parseFloat(q['value']['delay']), cTabObj['chorusFixedDelay'] = q['value']['delay'], e({
                'status': !![],
                ...c
            }));
            break;
        }
    default:
        e({
            'status': ![],
            ...c
        });
        break;
    }
});
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0;
        let h = e[f];
        return h;
    }, b(c, d);
}
const getParam = c => {
        return new Promise(d => {
            chrome['storage']['local']['get']([c], e => {
                d(e[c]);
            });
        });
    }, fullScreenFix = function (c) {
        c['status'] == 'active' && c['tabId'] && chrome['storage']['local']['set']({ 'fullScreen': !![] }, () => {
            chrome['windows']['getCurrent'](async function (d) {
                const e = d['id'], f = await getParam('fullScreen');
                if (f !== ![]) {
                    if (c['fullscreen'] == !![])
                        chrome['storage']['local']['set']({ 'windowState': d['state'] }), chrome['windows']['update'](e, { 'state': 'fullscreen' }, null);
                    else {
                        const g = await getParam('windowState');
                        chrome['windows']['update'](e, { 'state': g }, null);
                    }
                } else
                    chrome['windows']['update'](e, { 'state': d['state'] }, null);
            });
        });
    };
chrome['tabCapture']['onStatusChanged']['addListener'](fullScreenFix);
function a() {
    const y = [
        'convolver',
        'setValueAtTime',
        'connect',
        'monoMerger',
        '__connectified__',
        'knee',
        'value'
    ];
    a = function () {
        return y;
    };
    return a();
}
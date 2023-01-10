function tabCapture() {
    return new Promise(A41415b => {
        chrome['tabCapture']['capture']({
            'audio': !![],
            'video': ![]
        }, A30ce35 => {
            A41415b(A30ce35);
        });
    });
}
var cTabObj = {};
const createAudioContext = async A30746c => {
    cTabObj['audioContext'] = new AudioContext({ 'latencyHint': 'playback' }), cTabObj['audioSource'] = cTabObj['audioContext']['createMediaStreamSource'](A30746c), cTabObj['audioGain'] = cTabObj['audioContext']['createGain']();
    let A40d6d5 = new Tuna(cTabObj['audioContext']);
    const {
        isChorus: A8d5552,
        isConvolver: A2fc68a,
        isMono: A16ca2f,
        isPitch: A2988ea,
        volume: A915dc3,
        eq: A48d519,
        convolver: A3c3947,
        chorus: A5367b3,
        compressor: A6f2eb7
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
    A8d5552 && (cTabObj['chorus'] = new A40d6d5['Chorus']({
        'bypass': 0,
        'rate': A5367b3['rate'],
        'depth': A5367b3['depth'],
        'feedback': A5367b3['depth'],
        'delay': A5367b3['delay']
    }));
    A2fc68a && (cTabObj['convolver'] = new A40d6d5['Convolver']({
        'bypass': 0,
        'highCut': A3c3947['highCut'],
        'lowCut': A3c3947['lowCut'],
        'dryLevel': A3c3947['dryLevel'],
        'wetLevel': A3c3947['wetLevel'],
        'level': A3c3947['level']
    }));
    A2988ea && (cTabObj['pitch'] = new Jungle(cTabObj['audioContext']));
    cTabObj['compressor'] = new A40d6d5['Compressor']({
        'bypass': 0,
        'threshold': A6f2eb7['threshold'],
        'attack': A6f2eb7['attack'],
        'release': A6f2eb7['release'],
        'ratio': A6f2eb7['ratio'],
        'knee': A6f2eb7['knee']
    }), cTabObj['panSplitter'] = cTabObj['audioContext']['createChannelSplitter'](2), cTabObj['leftGain'] = cTabObj['audioContext']['createGain'](), cTabObj['rightGain'] = cTabObj['audioContext']['createGain'](), cTabObj['panMerger'] = cTabObj['audioContext']['createChannelMerger'](2), cTabObj['monoSplitter'] = cTabObj['audioContext']['createChannelSplitter'](2), cTabObj['monoGain'] = cTabObj['audioContext']['createGain'](), cTabObj['monoMerger'] = cTabObj['audioContext']['createChannelMerger'](2), cTabObj['twenty'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fifty'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['oneHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twoHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fiveHundred'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['oneThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twoThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['fiveThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['tenThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twentyThousand'] = cTabObj['audioContext']['createBiquadFilter'](), cTabObj['twenty']['type'] = 'lowshelf', cTabObj['twenty']['frequency']['setValueAtTime'](32, cTabObj['audioContext']['currentTime']), cTabObj['twenty']['gain']['setValueAtTime'](Number(A48d519[0]), cTabObj['audioContext']['currentTime']), cTabObj['fifty']['type'] = 'peaking', cTabObj['fifty']['frequency']['setValueAtTime'](64, cTabObj['audioContext']['currentTime']), cTabObj['fifty']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fifty']['gain']['setValueAtTime'](Number(A48d519[1]), cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['type'] = 'peaking', cTabObj['oneHundred']['frequency']['setValueAtTime'](125, cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['gain']['setValueAtTime'](Number(A48d519[2]), cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['type'] = 'peaking', cTabObj['twoHundred']['frequency']['setValueAtTime'](250, cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['gain']['setValueAtTime'](Number(A48d519[3]), cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['type'] = 'peaking', cTabObj['fiveHundred']['frequency']['setValueAtTime'](500, cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['gain']['setValueAtTime'](Number(A48d519[4]), cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['type'] = 'peaking', cTabObj['oneThousand']['frequency']['setValueAtTime'](1000, cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['gain']['setValueAtTime'](Number(A48d519[5]), cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['type'] = 'peaking', cTabObj['twoThousand']['frequency']['setValueAtTime'](2000, cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['gain']['setValueAtTime'](Number(A48d519[6]), cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['type'] = 'peaking', cTabObj['fiveThousand']['frequency']['setValueAtTime'](4000, cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['gain']['setValueAtTime'](Number(A48d519[7]), cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['type'] = 'peaking', cTabObj['tenThousand']['frequency']['setValueAtTime'](8000, cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['Q']['setValueAtTime'](5, cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['gain']['setValueAtTime'](Number(A48d519[8]), cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['type'] = 'highshelf', cTabObj['twentyThousand']['frequency']['setValueAtTime'](16000, cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['gain']['setValueAtTime'](Number(A48d519[9]), cTabObj['audioContext']['currentTime']), cTabObj['audioGain']['gain']['setValueAtTime'](A915dc3, cTabObj['audioContext']['currentTime']), cTabObj['monoGain']['gain']['setValueAtTime'](0.6, cTabObj['audioContext']['currentTime']);
    A2988ea && (cTabObj['pitch']['value'] = 0, cTabObj['pitch']['setPitchOffset'](0));
    cTabObj['audioSource']['connect'](cTabObj['panSplitter']), cTabObj['panSplitter']['connect'](cTabObj['leftGain'], 0), cTabObj['panSplitter']['connect'](cTabObj['rightGain'], 1), cTabObj['leftGain']['connect'](cTabObj['panMerger'], 0, 0), cTabObj['rightGain']['connect'](cTabObj['panMerger'], 0, 1);
    A16ca2f ? toggleMonoNodes(!![]) : toggleMonoNodes(![]);
    if (A2988ea && A8d5552 && A2fc68a)
        cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
    else {
        if (!A2988ea && A8d5552 && A2fc68a)
            cTabObj['monoMerger']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
        else {
            if (A2988ea && !A8d5552 && A2fc68a)
                cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
            else {
                if (A2988ea && A8d5552 && !A2fc68a)
                    cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['twenty']);
                else {
                    if (A2988ea && !A8d5552 && !A2fc68a)
                        cTabObj['monoMerger']['connect'](cTabObj['pitch']), cTabObj['pitch']['output']['connect'](cTabObj['twenty']);
                    else {
                        if (!A2988ea && !A8d5552 && A2fc68a)
                            cTabObj['monoMerger']['connect'](cTabObj['convolver']), cTabObj['convolver']['connect'](cTabObj['twenty']);
                        else {
                            if (!A2988ea && !A2fc68a && A8d5552)
                                cTabObj['monoMerger']['connect'](cTabObj['chorus']), cTabObj['chorus']['connect'](cTabObj['twenty']);
                            else
                                !A2988ea && !A8d5552 && !A2fc68a && cTabObj['monoMerger']['connect'](cTabObj['twenty']);
                        }
                    }
                }
            }
        }
    }
    return cTabObj['twenty']['connect'](cTabObj['fifty']), cTabObj['fifty']['connect'](cTabObj['oneHundred']), cTabObj['oneHundred']['connect'](cTabObj['twoHundred']), cTabObj['twoHundred']['connect'](cTabObj['fiveHundred']), cTabObj['fiveHundred']['connect'](cTabObj['oneThousand']), cTabObj['oneThousand']['connect'](cTabObj['twoThousand']), cTabObj['twoThousand']['connect'](cTabObj['fiveThousand']), cTabObj['fiveThousand']['connect'](cTabObj['tenThousand']), cTabObj['tenThousand']['connect'](cTabObj['twentyThousand']), cTabObj['twentyThousand']['connect'](cTabObj['compressor']), cTabObj['compressor']['connect'](cTabObj['audioGain']), cTabObj['audioGain']['connect'](cTabObj['audioContext']['destination']), cTabObj;
};
function toggleMonoNodes(A32f559) {
    cTabObj['panMerger']['context']['__connectified__'] == 1 && cTabObj['panMerger']['disconnect'](), cTabObj['monoSplitter']['context']['__connectified__'] == 1 && cTabObj['monoSplitter']['disconnect'](), cTabObj['monoGain']['context']['__connectified__'] == 1 && cTabObj['monoGain']['disconnect'](), A32f559 === !![] ? (cTabObj['panMerger']['connect'](cTabObj['monoGain']), cTabObj['monoGain']['connect'](cTabObj['monoSplitter']), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 1), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 0), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 1, 0)) : (cTabObj['panMerger']['connect'](cTabObj['monoSplitter']), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 0, 0)), cTabObj['monoSplitter']['connect'](cTabObj['monoMerger'], 1, 1);
}
function startRecord() {
    return new Promise(async (A3bd4f7, A38b7b4) => {
        const A38e54f = await tabCapture();
        A38e54f ? (await createAudioContext(A38e54f), A3bd4f7(A38e54f)) : window['close']();
    });
}
chrome['runtime']['onMessage']['addListener']((A156d21, A52f0ab, A4f3cf2) => {
    const {type: A27ab1c} = A156d21, A357324 = A27ab1c['toLowerCase']();
    switch (A357324) {
    case 'start_record':
        startRecord()['then'](() => {
            cTabObj['id'] = A156d21['data']['currentTabId'], A4f3cf2({ 'status': !![] });
        });
        break;
    case 'change_volume':
        cTabObj['audioGain']['gain']['value'] = A156d21['value'], A4f3cf2({
            'status': !![],
            ...A156d21
        });
        break;
    case 'change_equalizer': {
            const {value: A193fce} = A156d21;
            cTabObj['twenty']['gain']['setValueAtTime'](Number(A193fce[0]), cTabObj['audioContext']['currentTime']), cTabObj['fifty']['gain']['setValueAtTime'](Number(A193fce[1]), cTabObj['audioContext']['currentTime']), cTabObj['oneHundred']['gain']['setValueAtTime'](Number(A193fce[2]), cTabObj['audioContext']['currentTime']), cTabObj['twoHundred']['gain']['setValueAtTime'](Number(A193fce[3]), cTabObj['audioContext']['currentTime']), cTabObj['fiveHundred']['gain']['setValueAtTime'](Number(A193fce[4]), cTabObj['audioContext']['currentTime']), cTabObj['oneThousand']['gain']['setValueAtTime'](Number(A193fce[5]), cTabObj['audioContext']['currentTime']), cTabObj['twoThousand']['gain']['setValueAtTime'](Number(A193fce[6]), cTabObj['audioContext']['currentTime']), cTabObj['fiveThousand']['gain']['setValueAtTime'](Number(A193fce[7]), cTabObj['audioContext']['currentTime']), cTabObj['tenThousand']['gain']['setValueAtTime'](Number(A193fce[8]), cTabObj['audioContext']['currentTime']), cTabObj['twentyThousand']['gain']['setValueAtTime'](Number(A193fce[9]), cTabObj['audioContext']['currentTime']), A4f3cf2({
                'status': !![],
                ...A156d21
            });
            break;
        }
    case 'closeaudio':
    case 'closeAudio': {
            cTabObj['audioSource'] ? (window['close'](), cTabObj['audioContext']['close'](), cTabObj = {}, A4f3cf2({
                'status': !![],
                ...A156d21
            })) : A4f3cf2({
                'status': !![],
                ...A156d21
            });
            break;
        }
    case 'change_compressor': {
            const {
                threshold: A2df0b1,
                release: A56281b,
                makeupGain: A3cc39b,
                attack: A4378ef,
                ratio: A466f4a,
                knee: A1ded9d
            } = A156d21['value'];
            cTabObj['compressor']['automate']('threshold', parseFloat(A2df0b1)), cTabObj['compressor']['automate']('release', parseFloat(A56281b)), cTabObj['compressor']['automate']('attack', parseFloat(A4378ef)), cTabObj['compressor']['automate']('ratio', parseFloat(A466f4a)), cTabObj['compressor']['automate']('knee', parseFloat(A1ded9d)), A4f3cf2(cTabObj['compressor']);
            break;
        }
    case 'change_pitch': {
            let A42d3e3 = A156d21;
            !cTabObj['pitch'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isPitch': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['pitch']['setPitchOffset'](A42d3e3['value']['value']), cTabObj['pitch']['value'] = A42d3e3['value']['value'], A4f3cf2(A42d3e3);
                });
            })) : (cTabObj['pitch']['setPitchOffset'](A42d3e3['value']['value']), cTabObj['pitch']['value'] = A42d3e3['value']['value'], A4f3cf2(A42d3e3));
            break;
        }
    case 'change_convolver': {
            const A2900bb = A156d21;
            !cTabObj['convolver'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isConvolver': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['convolver']['automate']('lowCut', parseFloat(A2900bb['value']['lowCut']));
                });
            })) : (cTabObj['convolver']['automate']('lowCut', parseFloat(A2900bb['value']['lowCut'])), cTabObj['convolver']['automate']('highCut', parseFloat(A2900bb['value']['highCut'])), cTabObj['convolver']['automate']('wetLevel', parseFloat(A2900bb['value']['wetLevel'])), cTabObj['convolver']['automate']('level', parseFloat(A2900bb['value']['level'])), cTabObj['convolver']['automate']('dryLevel', parseFloat(A2900bb['value']['dryLevel'])), A4f3cf2({
                'status': !![],
                ...A156d21
            }));
            break;
        }
    case 'change_chorus': {
            const A3c1976 = A156d21;
            !cTabObj['chorus'] ? (cTabObj = {}, chrome['storage']['local']['set']({ 'isChorus': !![] }, () => {
                startRecord()['then'](() => {
                    cTabObj['chorus']['rate'] = parseFloat(A3c1976['value']['rate']), cTabObj['chorus']['depth'] = parseFloat(A3c1976['value']['depth']), cTabObj['chorus']['feedback'] = parseFloat(A3c1976['value']['feedback']), cTabObj['chorus']['delay'] = parseFloat(A3c1976['value']['delay']), cTabObj['chorusFixedDelay'] = A3c1976['value']['delay'], A4f3cf2({
                        'status': !![],
                        ...A156d21
                    });
                });
            })) : (cTabObj['chorus']['rate'] = parseFloat(A3c1976['value']['rate']), cTabObj['chorus']['depth'] = parseFloat(A3c1976['value']['depth']), cTabObj['chorus']['feedback'] = parseFloat(A3c1976['value']['feedback']), cTabObj['chorus']['delay'] = parseFloat(A3c1976['value']['delay']), cTabObj['chorusFixedDelay'] = A3c1976['value']['delay'], A4f3cf2({
                'status': !![],
                ...A156d21
            }));
            break;
        }
    default:
        A4f3cf2({
            'status': ![],
            ...A156d21
        });
        break;
    }
});
const getParam = A1989fe => {
        return new Promise(A26a264 => {
            chrome['storage']['local']['get']([A1989fe], A97c914 => {
                A26a264(A97c914[A1989fe]);
            });
        });
    }, fullScreenFix = function (A3d77d4) {
        A3d77d4['status'] == 'active' && A3d77d4['tabId'] && chrome['storage']['local']['set']({ 'fullScreen': !![] }, () => {
            chrome['windows']['getCurrent'](async function (A5c461a) {
                const A327f96 = A5c461a['id'], A1ae47f = await getParam('fullScreen');
                if (A1ae47f !== ![]) {
                    if (A3d77d4['fullscreen'] == !![])
                        chrome['storage']['local']['set']({ 'windowState': A5c461a['state'] }), chrome['windows']['update'](A327f96, { 'state': 'fullscreen' }, null);
                    else {
                        const Aeaad1e = await getParam('windowState');
                        chrome['windows']['update'](A327f96, { 'state': Aeaad1e }, null);
                    }
                } else
                    chrome['windows']['update'](A327f96, { 'state': A5c461a['state'] }, null);
            });
        });
    };
chrome['tabCapture']['onStatusChanged']['addListener'](fullScreenFix);
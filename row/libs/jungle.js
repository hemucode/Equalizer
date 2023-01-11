function createFadeBuffer(c, d, e) {
    var f = d * c['sampleRate'], g = (d - 2 * e) * c['sampleRate'], h = f + g, j = c['createBuffer'](1, h, c['sampleRate']), k = j['getChannelData'](0);
    console['log']('createFadeBuffer() length = ' + h);
    var l = e * c['sampleRate'], m = l, n = f - l;
    for (var o = 0; o < f; ++o) {
        var q;
        if (o < m)
            q = Math['sqrt'](o / l);
        else
            o >= n ? q = Math['sqrt'](1 - (o - n) / l) : q = 1;
        k[o] = q;
    }
    for (var o = f; o < h; ++o) {
        k[o] = 0;
    }
    return j;
}
function createDelayTimeBuffer(c, d, e, f) {
    var g = d * c['sampleRate'], h = (d - 2 * e) * c['sampleRate'], j = g + h, k = c['createBuffer'](1, j, c['sampleRate']), l = k['getChannelData'](0);
    console['log']('createDelayTimeBuffer() length = ' + j);
    for (var m = 0; m < g; ++m) {
        if (f)
            l[m] = (g - m) / j;
        else
            l[m] = m / g;
    }
    for (var m = g; m < j; ++m) {
        l[m] = 0;
    }
    return k;
}
var delayTime = 0.1, fadeTime = 0.05, bufferTime = 0.1;
function a() {
    var B = [
        'createBufferSource',
        'createDelay'
    ];
    a = function () {
        return B;
    };
    return a();
}
function Jungle(c) {
    this['context'] = c;
    var d = c['createGain'](), e = c['createGain']();
    this['input'] = d, this['output'] = e;
    var f = c['createBufferSource'](), g = c[z(-306, -307)](), h = c['createBufferSource'](), i = c['createBufferSource']();
    this['shiftDownBuffer'] = createDelayTimeBuffer(c, bufferTime, fadeTime, ![]), this['shiftUpBuffer'] = createDelayTimeBuffer(c, bufferTime, fadeTime, !![]), f['buffer'] = this['shiftDownBuffer'], g['buffer'] = this['shiftDownBuffer'];
    function A(c, d) {
        return b(d - -973, c);
    }
    h['buffer'] = this['shiftUpBuffer'], i['buffer'] = this['shiftUpBuffer'], f['loop'] = !![], g['loop'] = !![], h['loop'] = !![], i['loop'] = !![];
    var j = c['createGain'](), k = c['createGain'](), l = c['createGain']();
    l['gain']['value'] = 0;
    var m = c['createGain']();
    m['gain']['value'] = 0;
    function z(c, d) {
        return b(d - -307, c);
    }
    f['connect'](j), g['connect'](k), h['connect'](l), i['connect'](m);
    var n = c['createGain'](), o = c['createGain'](), p = c['createDelay'](), q = c[A(-973, -972)]();
    j['connect'](n), k['connect'](o), l['connect'](n), m['connect'](o), n['connect'](p['delayTime']), o['connect'](q['delayTime']);
    var r = c['createBufferSource'](), s = c['createBufferSource'](), u = createFadeBuffer(c, bufferTime, fadeTime);
    r['buffer'] = u, s['buffer'] = u, r['loop'] = !![], s['loop'] = !![];
    var v = c['createGain'](), w = c['createGain']();
    v['gain']['value'] = 0, w['gain']['value'] = 0, r['connect'](v['gain']), s['connect'](w['gain']), d['connect'](p), d['connect'](q), p['connect'](v), q['connect'](w), v['connect'](e), w['connect'](e);
    var x = c['currentTime'] + 0.05, y = x + bufferTime - fadeTime;
    f['start'](x), g['start'](y), h['start'](x), i['start'](y), r['start'](x), s['start'](y), this['mod1'] = f, this['mod2'] = g, this['mod1Gain'] = j, this['mod2Gain'] = k, this['mod3Gain'] = l, this['mod4Gain'] = m, this['modGain1'] = n, this['modGain2'] = o, this['fade1'] = r, this['fade2'] = s, this['mix1'] = v, this['mix2'] = w, this['delay1'] = p, this['delay2'] = q, this['setDelay'](delayTime);
}
Jungle['prototype']['setDelay'] = function (c) {
    this['modGain1']['gain']['setTargetAtTime'](0.5 * c, 0, 0.01), this['modGain2']['gain']['setTargetAtTime'](0.5 * c, 0, 0.01);
};
var previousPitch = -1;
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - 0;
        var h = e[f];
        return h;
    }, b(c, d);
}
Jungle['prototype']['setPitchOffset'] = function (c) {
    c > 0 ? (this['mod1Gain']['gain']['value'] = 0, this['mod2Gain']['gain']['value'] = 0, this['mod3Gain']['gain']['value'] = 1, this['mod4Gain']['gain']['value'] = 1) : (this['mod1Gain']['gain']['value'] = 1, this['mod2Gain']['gain']['value'] = 1, this['mod3Gain']['gain']['value'] = 0, this['mod4Gain']['gain']['value'] = 0), this['setDelay'](delayTime * Math['abs'](c)), previousPitch = c;
}, (Jungle['prototype']['mapPitchFromSemitone'] = function (c) {
    if (c < 0)
        return c / 12;
    switch (c) {
    case 0:
        return 0;
    case 1:
        return 0.15;
    case 2:
        return 0.2396498469723199;
    case 3:
        return 0.3392416223392665;
    case 4:
        return 0.5240613184290452;
    case 5:
        return 0.6938443526464626;
    case 6:
        return 0.8531707712586548;
    case 7:
        return 1.0062309336345026;
    case 8:
        return 1.1572897600301169;
    case 9:
        return 1.3572897600301168;
    case 10:
        return 1.5356230933634503;
    case 11:
        return 1.7056230933634502;
    case 12:
        return 2;
    default:
        return 0;
    }
}, Jungle['prototype']['setPitchTranspose'] = function (c, d) {
    d = parseInt(d), c = parseFloat(c);
    var f = this['mapPitchFromSemitone'](d) + 1 * c / 12;
    this['setPitchOffset'](f);
});
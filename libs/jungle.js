function createFadeBuffer(A4a7e64, A125e03, A4e7bfd) {
    var A4deb19 = A125e03 * A4a7e64['sampleRate'], A7afa96 = (A125e03 - 2 * A4e7bfd) * A4a7e64['sampleRate'], A174471 = A4deb19 + A7afa96, A5dc779 = A4a7e64['createBuffer'](1, A174471, A4a7e64['sampleRate']), A5ef08c = A5dc779['getChannelData'](0);
    console['log']('createFadeBuffer() length = ' + A174471);
    var A5cd4c3 = A4e7bfd * A4a7e64['sampleRate'], A1d4a1d = A5cd4c3, A35fd9a = A4deb19 - A5cd4c3;
    for (var A53ef21 = 0; A53ef21 < A4deb19; ++A53ef21) {
        var A4cf3f5;
        if (A53ef21 < A1d4a1d)
            A4cf3f5 = Math['sqrt'](A53ef21 / A5cd4c3);
        else
            A53ef21 >= A35fd9a ? A4cf3f5 = Math['sqrt'](1 - (A53ef21 - A35fd9a) / A5cd4c3) : A4cf3f5 = 1;
        A5ef08c[A53ef21] = A4cf3f5;
    }
    for (var A53ef21 = A4deb19; A53ef21 < A174471; ++A53ef21) {
        A5ef08c[A53ef21] = 0;
    }
    return A5dc779;
}
function createDelayTimeBuffer(A280144, A459ec5, A506df9, A2782bd) {
    var A13800e = A459ec5 * A280144['sampleRate'], A8506ee = (A459ec5 - 2 * A506df9) * A280144['sampleRate'], A3ccf00 = A13800e + A8506ee, A23800d = A280144['createBuffer'](1, A3ccf00, A280144['sampleRate']), A11f415 = A23800d['getChannelData'](0);
    console['log']('createDelayTimeBuffer() length = ' + A3ccf00);
    for (var A53441e = 0; A53441e < A13800e; ++A53441e) {
        if (A2782bd)
            A11f415[A53441e] = (A13800e - A53441e) / A3ccf00;
        else
            A11f415[A53441e] = A53441e / A13800e;
    }
    for (var A53441e = A13800e; A53441e < A3ccf00; ++A53441e) {
        A11f415[A53441e] = 0;
    }
    return A23800d;
}
var delayTime = 0.1, fadeTime = 0.05, bufferTime = 0.1;
function Jungle(A3cf7a9) {
    this['context'] = A3cf7a9;
    var A3f651f = A3cf7a9['createGain'](), A746cb6 = A3cf7a9['createGain']();
    this['input'] = A3f651f, this['output'] = A746cb6;
    var A558d4f = A3cf7a9['createBufferSource'](), A6f2bab = A3cf7a9['createBufferSource'](), Ae0c382 = A3cf7a9['createBufferSource'](), A3827ec = A3cf7a9['createBufferSource']();
    this['shiftDownBuffer'] = createDelayTimeBuffer(A3cf7a9, bufferTime, fadeTime, ![]), this['shiftUpBuffer'] = createDelayTimeBuffer(A3cf7a9, bufferTime, fadeTime, !![]), A558d4f['buffer'] = this['shiftDownBuffer'], A6f2bab['buffer'] = this['shiftDownBuffer'], Ae0c382['buffer'] = this['shiftUpBuffer'], A3827ec['buffer'] = this['shiftUpBuffer'], A558d4f['loop'] = !![], A6f2bab['loop'] = !![], Ae0c382['loop'] = !![], A3827ec['loop'] = !![];
    var A66323c = A3cf7a9['createGain'](), A1dba56 = A3cf7a9['createGain'](), A1390d2 = A3cf7a9['createGain']();
    A1390d2['gain']['value'] = 0;
    var A2379e3 = A3cf7a9['createGain']();
    A2379e3['gain']['value'] = 0, A558d4f['connect'](A66323c), A6f2bab['connect'](A1dba56), Ae0c382['connect'](A1390d2), A3827ec['connect'](A2379e3);
    var A5ca9c4 = A3cf7a9['createGain'](), Af5f9f9 = A3cf7a9['createGain'](), A312836 = A3cf7a9['createDelay'](), A5bd91b = A3cf7a9['createDelay']();
    A66323c['connect'](A5ca9c4), A1dba56['connect'](Af5f9f9), A1390d2['connect'](A5ca9c4), A2379e3['connect'](Af5f9f9), A5ca9c4['connect'](A312836['delayTime']), Af5f9f9['connect'](A5bd91b['delayTime']);
    var A1e7194 = A3cf7a9['createBufferSource'](), A52d6ab = A3cf7a9['createBufferSource'](), A2b0802 = createFadeBuffer(A3cf7a9, bufferTime, fadeTime);
    A1e7194['buffer'] = A2b0802, A52d6ab['buffer'] = A2b0802, A1e7194['loop'] = !![], A52d6ab['loop'] = !![];
    var A41ef9f = A3cf7a9['createGain'](), A392049 = A3cf7a9['createGain']();
    A41ef9f['gain']['value'] = 0, A392049['gain']['value'] = 0, A1e7194['connect'](A41ef9f['gain']), A52d6ab['connect'](A392049['gain']), A3f651f['connect'](A312836), A3f651f['connect'](A5bd91b), A312836['connect'](A41ef9f), A5bd91b['connect'](A392049), A41ef9f['connect'](A746cb6), A392049['connect'](A746cb6);
    var A4cebce = A3cf7a9['currentTime'] + 0.05, A109c50 = A4cebce + bufferTime - fadeTime;
    A558d4f['start'](A4cebce), A6f2bab['start'](A109c50), Ae0c382['start'](A4cebce), A3827ec['start'](A109c50), A1e7194['start'](A4cebce), A52d6ab['start'](A109c50), this['mod1'] = A558d4f, this['mod2'] = A6f2bab, this['mod1Gain'] = A66323c, this['mod2Gain'] = A1dba56, this['mod3Gain'] = A1390d2, this['mod4Gain'] = A2379e3, this['modGain1'] = A5ca9c4, this['modGain2'] = Af5f9f9, this['fade1'] = A1e7194, this['fade2'] = A52d6ab, this['mix1'] = A41ef9f, this['mix2'] = A392049, this['delay1'] = A312836, this['delay2'] = A5bd91b, this['setDelay'](delayTime);
}
Jungle['prototype']['setDelay'] = function (A49a6d2) {
    this['modGain1']['gain']['setTargetAtTime'](0.5 * A49a6d2, 0, 0.01), this['modGain2']['gain']['setTargetAtTime'](0.5 * A49a6d2, 0, 0.01);
};
var previousPitch = -1;
Jungle['prototype']['setPitchOffset'] = function (A4f204e) {
    A4f204e > 0 ? (this['mod1Gain']['gain']['value'] = 0, this['mod2Gain']['gain']['value'] = 0, this['mod3Gain']['gain']['value'] = 1, this['mod4Gain']['gain']['value'] = 1) : (this['mod1Gain']['gain']['value'] = 1, this['mod2Gain']['gain']['value'] = 1, this['mod3Gain']['gain']['value'] = 0, this['mod4Gain']['gain']['value'] = 0), this['setDelay'](delayTime * Math['abs'](A4f204e)), previousPitch = A4f204e;
}, (Jungle['prototype']['mapPitchFromSemitone'] = function (A169c17) {
    if (A169c17 < 0)
        return A169c17 / 12;
    switch (A169c17) {
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
}, Jungle['prototype']['setPitchTranspose'] = function (A248b87, A4364a7) {
    A4364a7 = parseInt(A4364a7), A248b87 = parseFloat(A248b87);
    var A18577a = this['mapPitchFromSemitone'](A4364a7) + 1 * A248b87 / 12;
    this['setPitchOffset'](A18577a);
});
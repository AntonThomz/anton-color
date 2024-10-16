const readline = require('readline');
function getColor(_0x24fc6d) {
    const _0x3d7b16 = Math['floor'](0x80 + 0x7f * Math['sin'](0.3 * _0x24fc6d));
    const _0x4ee827 = Math['floor'](0x80 + 0x7f * Math['sin'](0.3 * _0x24fc6d + 0x2 * Math['PI'] / 0x3));
    const _0x35d92b = Math['floor'](0x80 + 0x7f * Math['sin'](0.3 * _0x24fc6d + 0x4 * Math['PI'] / 0x3));
    return '\x1b[38;2;' + _0x3d7b16 + ';' + _0x4ee827 + ';' + _0x35d92b + 'm';
}
function printShiftingColors(_0x2c7bbe, _0x4004ac) {
    readline['cursorTo'](process['stdout'], 0x0);
    const _0x2a273f = _0x2c7bbe['length'];
    let _0x5af6f8 = '';
    for (let _0x1ffb07 = 0x0; _0x1ffb07 < _0x2a273f; _0x1ffb07++) {
        const _0x4dbb96 = (_0x4004ac + _0x1ffb07) % _0x2a273f;
        _0x5af6f8 += '' + getColor(_0x4dbb96) + _0x2c7bbe[_0x1ffb07];
    }
    process['stdout']['write'](_0x5af6f8 + '\x1b[0m');
}
let step = 0x0;
function shiftingColorsSlomo(_0x351734) {
    printShiftingColors(_0x351734, step);
    step++;
}
const Dynamic = _0x4904a8 => {
    setInterval(() => {
        shiftingColorsSlomo(_0x4904a8);
    }, 0x64);
};
module['exports'] = Dynamic;
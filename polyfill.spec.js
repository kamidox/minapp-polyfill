Array.prototype.findIndex = null;
Array.prototype.fill = null;
String.prototype.startsWith = null;

require('./polyfill.js');

describe('polyfill', () => {
  it('Array.findIndex()', () => {
    var arr = ['a', 1, 'bb', null, undefined, '4'];
    var idx = arr.findIndex((item) => item === 'bb');
    expect(idx).toEqual(2);
    idx = arr.findIndex((item) => item === '4');
    expect(idx).toEqual(5);
    idx = arr.findIndex((item) => item === '444');
    expect(idx).toEqual(-1);
  });


  it('Array.fill()', () => {
    expect([1, 2, 3].fill(4)).toEqual([4, 4, 4]);
    expect([1, 2, 3].fill(4, 1)).toEqual([1, 4, 4]);
    expect([1, 2, 3].fill(4, 1, 2)).toEqual([1, 4, 3]);
    expect([1, 2, 3].fill(4, 1, 1)).toEqual([1, 2, 3]);
    expect([1, 2, 3].fill(4, -3, -2)).toEqual([4, 2, 3]);
    expect([1, 2, 3].fill(4, NaN, NaN)).toEqual([1, 2, 3]);
    expect(Array(3).fill(4)).toEqual([4, 4, 4]);
  });


  it('String.startsWith()', () => {
    var s = 'test string';
    expect(s.startsWith('test')).toEqual(true);
    expect(s.startsWith('string')).toEqual(false);
  });

});


const double = require('./double');

describe('double', () => {
    test('double 2 to equal 4',() => {
        expect(double(2)).toBe(4);
    });
})
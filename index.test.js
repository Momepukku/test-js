import exchange from './index'

describe('exchange', function () {
    it('return empty array if no change', () => {
        const result = exchange(10, 10);
        expect(result).toBe([]);
    })
});

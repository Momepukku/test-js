import exchange from './index'

describe('exchange', function () {
    it('return empty array if no change', () => {
        const result = exchange(10, 10);
        expect(result).toEqual([]);
    });
    it('return [10] if change is 10', () => {
        const result = exchange(10, 20);
        expect(result).toEqual([10]);
    });
});

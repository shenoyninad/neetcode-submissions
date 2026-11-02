class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number, number>();

        for (const num of nums) {
            freq.set(num, (freq.get(num) ?? 0) + 1);
        }

        const freqArr: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, value] of freq) {
            freqArr[value].push(key);
        }

        const result: number[] = [];

        for (let i = freqArr.length - 1; i >= 0; i--) {
            for (const num of freqArr[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}

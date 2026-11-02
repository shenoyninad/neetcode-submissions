class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(target - nums[i])) {
                return [i, seen.get(target - nums[i])!];
            }
            seen.set(nums[i], i);
        }

        return [-1, -1];
    }
}

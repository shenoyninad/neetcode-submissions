class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];

        function backtrack(index: number, target: number, current: number[]) {
            if (target === 0) {
                result.push([...current]);
                return;
            }

            if (index === nums.length || target < 0) {
                return;
            }

            current.push(nums[index]);
            backtrack(index, target - nums[index], current);

            current.pop();
            backtrack(index + 1, target, current);
        }

        backtrack(0, target, []);
        return result;
    }
}

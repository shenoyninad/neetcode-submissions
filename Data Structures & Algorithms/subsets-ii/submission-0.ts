class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b)=> a - b);
        const result: number[][] = [];

        function backtrack(index: number, current: number[]) {
            result.push([...current]);

            for (let i = index; i < nums.length; i++) {
                if (i > index && nums[i] === nums[i - 1]) {
                    continue;
                }

                current.push(nums[i]);
                backtrack(i + 1, current);
                current.pop();
            }
        }

        backtrack(0, []);

        return result;
    }
}

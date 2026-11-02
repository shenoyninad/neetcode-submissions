class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let result: number[][] = [];

        function backtrack(index: number, current: number[]) {
            if(index === nums.length) {
                result.push([...current]);
                return;
            }

            current.push(nums[index]);
            backtrack(index+1, current);

            current.pop();
            backtrack(index+1, current);
        }

        backtrack(0, [])

        return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let farthestIndex = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > farthestIndex) {
                return false;
            }

            farthestIndex = Math.max(farthestIndex, i + nums[i]);

            if (farthestIndex >= nums.length - 1) {
                return true;
            }
        }

        return true;
    }
}

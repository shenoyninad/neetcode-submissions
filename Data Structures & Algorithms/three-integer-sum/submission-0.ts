class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let windowStart = 0; windowStart < nums.length - 2; windowStart++) {
            if (windowStart > 0 && nums[windowStart] === nums[windowStart - 1]) {
                continue;
            }

            if (nums[windowStart] > 0) {
                break;
            }

            let left = windowStart + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right] + nums[windowStart];

                if (sum === 0) {
                    result.push([nums[windowStart], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}

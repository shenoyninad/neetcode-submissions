class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const result: number[] = [];
        const deque: number[] = [];

        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            while (nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop();
            }

            deque.push(right);

            if (deque[0] < left) {
                deque.shift();
            }

            if (right - left + 1 === k) {
                result.push(nums[deque[0]]);
                left++;
            }
        }

        return result;
    }
}

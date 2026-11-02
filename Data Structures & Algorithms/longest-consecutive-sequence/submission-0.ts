class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const seenSet = new Set(nums);
        let longest = 0;

        for (const num of nums) {
            if (!seenSet.has(num - 1)) {
                let current = num;
                let length = 1;

                while (seenSet.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}

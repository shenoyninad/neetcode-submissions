class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0;
        let windowStart = 0;
        let windowEnd = heights.length - 1;

        while (windowStart < windowEnd) {
            const width = windowEnd - windowStart;
            const height = Math.min(heights[windowStart], heights[windowEnd]);

            const area = width * height;
            maxArea = Math.max(area, maxArea);

            if (heights[windowStart] > heights[windowEnd]) {
                windowEnd--;
            } else {
                windowStart++;
            }
        }

        return maxArea;
    }
}

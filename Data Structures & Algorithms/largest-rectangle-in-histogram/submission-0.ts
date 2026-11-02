class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        let stack: number[] = [];

        for(let i = 0; i <= heights.length; i++) {
            const current = i === heights.length ? 0 : heights[i];

            while(stack.length > 0 && heights[stack[stack.length-1]] > current) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length-1] - 1;
                maxArea = Math.max(maxArea, height*width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}

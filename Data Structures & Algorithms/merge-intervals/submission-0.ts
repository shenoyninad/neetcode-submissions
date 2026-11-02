class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const mergedIntervals: number[][] = [];
        intervals.sort((a, b) => a[0] - b[0]);

        for (const interval of intervals) {
            if (
                mergedIntervals.length === 0 ||
                interval[0] > mergedIntervals[mergedIntervals.length - 1][1]
            ) {
                mergedIntervals.push(interval);
            } else {
                mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
                    interval[1],
                    mergedIntervals[mergedIntervals.length - 1][1],
                );
            }
        }

        return mergedIntervals;
    }
}

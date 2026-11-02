/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let maxRooms = 0;
        const starts = intervals.map((interval) => interval.start).sort((a, b) => a - b);

        const ends = intervals.map((interval) => interval.end).sort((a, b) => a - b);

        let rooms = 0;
        let startCount = 0;
        let endCount = 0;

        while (startCount < starts.length) {
            if (starts[startCount] < ends[endCount]) {
                rooms++;
                maxRooms = Math.max(maxRooms, rooms);
                startCount++;
            } else {
                rooms--;
                endCount++;
            }
        }

        return maxRooms;
    }
}

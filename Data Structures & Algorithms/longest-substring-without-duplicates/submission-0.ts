class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;
        let windowStart = 0;
        const freqMap = new Map<string, number>();

        //zxyzxyz

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            const char = s.charAt(windowEnd);

            freqMap.set(char, (freqMap.get(char) ?? 0) + 1);

            while (freqMap.get(char)! > 1) {
                const strStart = s.charAt(windowStart);
                freqMap.set(strStart, (freqMap.get(strStart) ?? 0) - 1);

                if (freqMap.get(strStart) === 0) {
                    freqMap.delete(strStart);
                }
                windowStart++;
            }

            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }
}

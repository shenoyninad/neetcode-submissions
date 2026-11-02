class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxFreq = 0;
        let maxLength = 0;
        let windowStart = 0;
        const freqMap = new Map<string, number>();

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            const char = s.charAt(windowEnd);
            freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, freqMap.get(char)!);

            while (windowEnd - windowStart + 1 - maxFreq > k) {
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

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (!s || !t) {
            return "";
        }

        if (t.length > s.length) {
            return "";
        }

        const seenMap = new Map<string, number>();
        const freqMap = new Map<string, number>();

        for (const str of t) {
            seenMap.set(str, (seenMap.get(str) ?? 0) + 1);
        }

        let have = 0;
        let needCount = seenMap.size;

        let left = 0;
        let bestStart = 0;
        let bestLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const char = s.charAt(right);
            freqMap.set(char, (freqMap.get(char) ?? 0) + 1);

            if (seenMap.has(char) && freqMap.get(char) === seenMap.get(char)) {
                have++;
            }

            while (have === needCount) {
                const currentLength = right - left + 1;

                if (currentLength < bestLength) {
                    bestLength = currentLength;
                    bestStart = left;
                }

                const leftChar = s.charAt(left);
                freqMap.set(leftChar, (freqMap.get(leftChar) ?? 0) - 1);

                if (seenMap.has(leftChar) && freqMap.get(leftChar)! < seenMap.get(leftChar)!) {
                    have--;
                }

                left++;
            }
        }

        return bestLength === Infinity ? "" : s.slice(bestStart, bestStart + bestLength);
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (!s1 || !s2) {
            return false;
        }

        if (s1.length > s2.length) {
            return false;
        }

        let windowStart = 0;
        const seenMap = new Map<string, number>();
        const freqMap = new Map<string, number>();

        for (const str of s1) {
            seenMap.set(str, (seenMap.get(str) ?? 0) + 1);
        }

        for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
            const char = s2.charAt(windowEnd);
            freqMap.set(char, (freqMap.get(char) ?? 0) + 1);

            if (windowEnd - windowStart + 1 > s1.length) {
                const leftChar = s2.charAt(windowStart);
                freqMap.set(leftChar, (freqMap.get(leftChar) ?? 0) - 1);

                if (freqMap.get(leftChar) === 0) {
                    freqMap.delete(leftChar);
                }

                windowStart++;
            }

            if (windowEnd - windowStart + 1 === s1.length && this.mapsEqual(seenMap, freqMap)) {
                return true;
            }
        }

        return false;
    }

    mapsEqual(seenMap: Map<string, number>, freqMap: Map<string, number>) {
        if (seenMap.size !== freqMap.size) {
            return false;
        }

        for (const [key, value] of seenMap) {
            if (freqMap.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}

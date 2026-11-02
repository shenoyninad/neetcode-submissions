class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const seen = new Map<string, number>();

        for (const char of s) {
            seen.set(char, (seen.get(char) ?? 0) + 1);
        }

        for (const char of t) {
            if (!seen.has(char)) {
                return false;
            }

            seen.set(char, (seen.get(char) ?? 0) - 1);

            if (seen.get(char) === 0) {
                seen.delete(char);
            }
        }

        return seen.size === 0;
    }
}

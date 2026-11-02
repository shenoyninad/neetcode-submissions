class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map<string, string[]>();

        for (const str of strs) {
            const modStr = str.split("").sort().join("");

            if (!seen.has(modStr)) {
                seen.set(modStr, []);
            }

            seen.get(modStr)!.push(str);
        }

        return Array.from(seen.values());
    }
}

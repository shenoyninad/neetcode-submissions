class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const results: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));

            const start = j + 1;
            const end = start + length;

            results.push(str.slice(start, end));

            i = end;
        }

        return results;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const parMap = new Map<string, string>([
            ["{", "}"],
            ["[", "]"],
            ["(", ")"],
        ]);

        const stack: string[] = [];

        console.log(parMap.values());

        for (const c of s) {
            if ([...parMap.values()].includes(c)) {
                console.log("outside" + c);
                const check = stack.pop()!;
                if (parMap.get(check) !== c) {
                    return false;
                }
            } else {
                stack.push(c);
                console.log("inside" + c);
            }
        }

        return stack.length === 0;
    }
}

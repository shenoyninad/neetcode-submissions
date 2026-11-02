class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b); 
        const result: number[][] = [];

        function backtrack(index: number, target: number, current: number[]) {
            if (target === 0) {
                result.push([...current]);
                return;
            }

            for (let i = index; i < candidates.length; i++) {
                if (i > index && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                if (candidates[i] > target) {
                    break;
                }

                current.push(candidates[i]);
                backtrack(i + 1, target - candidates[i], current);
                current.pop();
            }
        }

        backtrack(0, target, []);

        return result;
    }
}

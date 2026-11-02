class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const boxs = Array.from({ length: 9 }, () => new Set<string>());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = board[row][col];

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (value === ".") {
                    continue;
                }

                if (rows[row].has(value) || cols[col].has(value) || boxs[boxIndex].has(value)) {
                    return false;
                }

                rows[row].add(value);
                cols[col].add(value);
                boxs[boxIndex].add(value);
            }
        }

        return true;
    }
}

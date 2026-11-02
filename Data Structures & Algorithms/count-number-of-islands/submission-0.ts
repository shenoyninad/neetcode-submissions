class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;

        let count = 0;

        function dfs(row: number, col: number) {
            if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== "1") {
                return;
            }

            grid[row][col] = "0";
            dfs(row + 1, col);
            dfs(row, col + 1);
            dfs(row - 1, col);
            dfs(row, col - 1);
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    count++;
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}

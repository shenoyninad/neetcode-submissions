/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        if(root === null) return 0;
        let maxSum = -Infinity;

        function dfs(node: TreeNode) {
            if(node === null) return 0;

            let leftPath = Math.max(0, dfs(node.left));
            let rightPath = Math.max(0, dfs(node.right));

            maxSum = Math.max(maxSum, node.val + leftPath + rightPath);

            return node.val + Math.max(leftPath, rightPath);
        }


        dfs(root);

        return maxSum;
    }
}

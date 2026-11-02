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
    maxDepth(root: TreeNode | null): number {
        if(root === null) return 0;
        function depth(node: TreeNode): number {
            if(node === null) return 0;

            const left = depth(node.left);
            const right = depth(node.right);

            return 1 + Math.max(left, right);
        }

        return depth(root);
    }
}

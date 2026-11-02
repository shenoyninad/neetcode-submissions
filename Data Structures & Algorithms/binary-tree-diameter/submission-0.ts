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
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(root === null) return 0;

        let diameter = 0;

        function diam(node: TreeNode) {
            if(node === null) return 0;

            const left = diam(node.left);
            const right = diam(node.right);

            diameter = Math.max(diameter, left+right);

            return 1 + Math.max(left, right);        
        }

        diam(root);

        return diameter;
    }
}

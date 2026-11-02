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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(root === null) return [];

        let head = 0;
        const results: number[][] = [];
        let queue: TreeNode[] = [root];

        while(head < queue.length) {
            const levelSize = queue.length - head;
            const level = [];

            for(let i = 0; i < levelSize; i++) {
                const node = queue[head++];
                level.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            results.push(level);
        }

        return results;
    }
}

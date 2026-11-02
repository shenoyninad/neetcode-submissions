class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new TupleMaxHeap();

        for (const [x, y] of points) {
            const distance = x * x + y * y;

            heap.push([distance, x, y]);

            if (heap.size > k) {
                heap.pop();
            }
        }

        return heap.values.map(([_, x, y]) => [x, y]);
    }
}

// TypeScript doesn't have built-in min-heap, using a custom implementation for tuples
export class TupleMaxHeap {
    private heap: [number, number, number][] = [];

    push(val: [number, number, number]): void {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop(): [number, number, number] | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return min;
    }

    peek(): [number, number, number] | null {
        return this.heap[0] || null;
    }

    get size(): number {
        return this.heap.length;
    }

    get values(): [number, number, number][] {
        return this.heap;
    }

    private compare(a: [number, number, number], b: [number, number, number]): number {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    }

    private heapifyUp(index: number): void {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex]) > 0) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number): void {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (
            leftChild < this.heap.length &&
            this.compare(this.heap[leftChild], this.heap[largest]) > 0
        ) {
            largest = leftChild;
        }

        if (
            rightChild < this.heap.length &&
            this.compare(this.heap[rightChild], this.heap[largest]) > 0
        ) {
            largest = rightChild;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
}

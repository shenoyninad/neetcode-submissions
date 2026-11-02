class KthLargest {
    private k: number;
    private minHeap: MinHeap;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.minHeap = new MinHeap();
        for (const num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        this.minHeap.push(val);

        if (this.minHeap.size > this.k) {
            this.minHeap.pop();
        }

        return this.minHeap.peek()!;
    }
}

class MinHeap {
    constructor(private heap: number[] = []) {}

    push(val: number): void {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    pop(): number | null {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop()!;
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return min;
    }

    peek(): number | null {
        return this.heap[0] ?? null;
    }

    get size(): number {
        return this.heap.length;
    }

    private heapifyUp(index: number): void {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this.heapifyUp(parentIndex);
        }
    }

    private heapifyDown(index: number): void {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        let smallest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }
}

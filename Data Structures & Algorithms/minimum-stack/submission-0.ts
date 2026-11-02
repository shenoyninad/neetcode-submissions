class MinStack {
    constructor(
        private stack: number[] = [],
        private minStack: number[] = [],
    ) {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(currentMin, val));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

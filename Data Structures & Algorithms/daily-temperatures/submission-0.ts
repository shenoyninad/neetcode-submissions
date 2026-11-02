class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const results: number[] = new Array(temperatures.length).fill(0);
        const stack: number[] = [];

        for (let num = 0; num < temperatures.length; num++) {
            while (stack.length > 0 && temperatures[num] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()!;
                results[prevIndex] = num - prevIndex;
            }
            stack.push(num);
        }

        return results;
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        const symbols = ["+", "-", "/", "*"];

        for (const token of tokens) {
            if (symbols.includes(token)) {
                const numLeft = stack.pop()!;
                const numRight = stack.pop()!;
                let result = 0;

                switch (token) {
                    case "+":
                        result = numRight + numLeft;
                        break;
                    case "-":
                        result = numRight - numLeft;
                        break;
                    case "*":
                        result = numRight * numLeft;
                        break;
                    case "/":
                        result = Math.trunc(numRight / numLeft);
                        break;
                }

                stack.push(result);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}

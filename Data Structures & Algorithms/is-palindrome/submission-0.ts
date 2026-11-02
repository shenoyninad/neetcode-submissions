class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s.charAt(left))) {
                left++;
            }

            while (left < right && !this.isAlphaNumeric(s.charAt(right))) {
                right--;
            }


            if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }

    isAlphaNumeric(char: string): boolean {
        const code = char.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122) // a-z
        );
    }
}

function isPalindrome(string) {
  // Loop from start to middle of the string
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    // Compare character from front and back
    if (string[i] !== string[string.length - 1 - i]) {
      return false; // Not a palindrome if mismatch
    }
  }
  return true; // If no mismatches, it is a palindrome
}

module.exports = isPalindrome;

// Test cases to verify the function
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("robot"));    // false
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("level"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("a"));        // true (single letter)
console.log(isPalindrome(""));         // true (empty string)



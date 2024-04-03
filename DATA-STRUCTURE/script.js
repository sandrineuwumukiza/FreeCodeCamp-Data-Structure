function checkPalindrome() {
    const userInput = document.getElementById('text-input').value;
    const cleanedStr = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');

    if (cleanedStr === reversedStr && cleanedStr.length > 0) {
        document.getElementById('result').textContent = `${userInput} is a palindrome`;
    } else {
        document.getElementById('result').textContent = `${userInput} is not a palindrome`;
    }
}
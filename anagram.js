function isAnagram(word, word2) {
    if (word.trim().length === 0 && word2.trim().length === 0) return true;

    const counterWord = {};
    const counterWord2 = {};

    for (let index = 0; index < word.length; index += 1) {

        if (!counterWord[word[index]]) {
            counterWord[word[index]] = 1
        } else {
            counterWord[word[index]] += 1
        }

        if (!counterWord2[word2[index]]) {
            counterWord2[word2[index]] = 1
        } else {
            counterWord2[word2[index]] += 1
        }
    }

    for (let letter in counterWord) {
        if (counterWord[letter] != counterWord2[letter]) {
            return false;
        }
    }

    return true;

}

console.log(isAnagram('', ""))
console.log(isAnagram('aaz', "zza"))
console.log(isAnagram('anagram', "nagaram"))
console.log(isAnagram('rat', "car"))
console.log(isAnagram('awesome', "awsom"))
console.log(isAnagram('qwerty', "qeywrt"))
console.log(isAnagram('textwisttime', "timewisttext"))






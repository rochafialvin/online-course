const reverseWords = (string) => {

    
    const wordsArr = string.split(' ');
    let reversedWordsArr = [];

    wordsArr.map((word) => {
        let reversedWord = '';
        
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reversedWordsArr.push(reversedWord);
    });

    return reversedWordsArr.join(' ');
};

console.log(reverseWords('Hai aku Lintang'));


/*
    3 Maret sebelum jam 9 : Live Code 8

    5 Maret sebelum jam 9 : Live Code 9
 
    7 Maret : RE-RECORD Audio 5 6 7 8
*/
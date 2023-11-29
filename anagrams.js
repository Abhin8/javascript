// Anargam is a word formed by rearranging the letters of another word.

console.log(anagrams("listen","silent"));

function anagrams(str1,str2){
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2
}

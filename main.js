/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Ваша задача - определить, можно ли составить строку ransomNote, используя буквы из строки magazine. 
Каждая буква в magazine может быть использована только один раз в ransomNote.

Вот шаги, которые мы будем следовать:

1. Создайте словарь для подсчета букв в magazine.
2. Пройдите по каждой букве в ransomNote. Если буква присутствует в словаре и счетчик больше 0, уменьшите счетчик. В противном случае верните false.
3. Если вы прошли все буквы в ransomNote и не вернули false, верните true.

Your task is to determine whether the ransomNote string can be constructed using the letters from the magazine string. 
Each letter in magazine can only be used once in ransomNote.

Here are the steps we will follow:

1. Create a dictionary to count the letters in magazine.
2. Go through each letter in ransomNote. If the letter is present in the dictionary and the counter is more than 0, decrease the counter. 
   Otherwise, return false.
3. If you have gone through all letters in ransomNote and have not returned false, return true.

*/

function canConstruct(ransomNote, magazine) {
  // Создаем словарь для подсчета букв в magazine
  // Create a dictionary to count the letters in magazine
  let count = {};
  for (let char of magazine) {
    if (!count[char]) count[char] = 0;
    count[char]++;
  }

  // Проходим по каждой букве в ransomNote
  // Go through each letter in ransomNote
  for (let char of ransomNote) {
    // Если буква присутствует в словаре и счетчик больше 0, уменьшаем счетчик
    // If the letter is present in the dictionary and the counter is more than 0, decrease the counter
    if (!count[char] || count[char] <= 0) {
      return false;
    }
    count[char]--;
  }

  // Если мы прошли все буквы в ransomNote и не вернули false, возвращаем true
  // If we have gone through all letters in ransomNote and have not returned false, return true
  return true;
}

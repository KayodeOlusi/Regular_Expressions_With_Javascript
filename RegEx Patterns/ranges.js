//Using ranges for RegEx helps us write shorter RegEx syntax for words that needs long matching

//Examples

/[a-z]ife/
 //This matches any word that contains 'ife' and has letters a - z as the first letter in the word. Instead of writing [abcdef....] we use [a-z] therefore, setting a range

 //To match lowercase and uppercase
 /[a-zA-Z]ife/
 //This matches both upper and lower case words
 
 /[0-9]00/
 //Matches 0-9
 
 
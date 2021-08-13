// A character set is a way to match different characters in a simple position
//To create a character set we wrap it in '[]' bracket

//Example: to match jump and lump

/[jl]inja/ 
// NOTE : This syntax matches the words whose first letter 'STARTS' with j and l alone

/[abc123]/ 
//NOTE : This syntax matches any word that contains 'a,b,c,1,2,3' alone. Other examples of matches can include 

/[abc]inja/
 // Checks for matches that have 'a,b,c' as starting letter of a word with inja as the remaining

//To write a RegEx syntax that lists what shouldnt be matched we use '^' symbol. e.g
 /[^po]ife/
 //This matches every word that contains 'ife' and doesnt contain p and o as the first letter
 
// special Characters allows us to do many things
// Examples
// + : The one or more quantifier
// \ : The escape character
// [] : The character set
// [^] : The negative symbol in a character set
// ? : The zero-or-one quantifier (makes a preceding char optional)
// . : Any character whatsoever at least one  (except the newline character)
// * : The 0-or-more quantifier (a bit like +)
// ^ : This outside a character set '[]' is used to start a validation
// $ : This at the end of the expression is used to end a validation
// | : This is a conditional special character 

//Examples
/hello?/
//This sets an option to match any word that contains any letter in this word alone e.g hllo,hello,helo e.t.c
 
/he?llo?/
//This matches hello, hllo,hlo e.t.c

/car./
//This matches any word that starts with car and extends with other characters except a new line e.g card,cargo,catfish,e.t.c

/.+/
//This matches any word with at least a character e.g dog, hg3u8, and so on

/a[a-z]*/
//This matches any character starting from a that extends to other characters e.g abate, ago, a56d e.t.c

//To match a character we use the escape character e.g
/abc\*/
//This matches only 'abc*' since we used escape character to disable * character

/abc\./
//This matches 'abc.'

/^[a-z]{5}$/
//This matches any word wuth 5 letters only

/p|t/
// This matches letter p or t

/(p|t)op/
//This matches pop or top

/(pop|top|cup) up/
//This matches pop up, top up, cup up. NOTE the space in-between each word
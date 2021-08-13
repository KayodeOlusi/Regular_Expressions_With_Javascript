//Meta-characters are used to match certain types of characters. 
//Example
// \d : To match digits( same as [0-9] )
// \w : To match letters( Upper and lower case ), digits, and underscores '_'
// \t: To match tab characters only
// \s : To match whitespace characters

/\d/
//Matches [0-9]

/\w/
//Matches [a-zA-z0-9_]

/\s/
// Matches [tab and spaces]

/\d\s\w/
// This can match '1 e', '1    u' and so on

/\d{3}\s\w{2,4}/
//This matches any thing with 3 digits as a starting point, one space and a word consisting of 2-4 letters

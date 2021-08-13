//How to use Ranges for repeated characters

/[0-9]+/
//This matches any length greater than one containing 0-9

//To math for specific ranges
/[0-9]{11}/
//This matches numbers that are 11 characters long

/[a-z]{7}/
//This matches words that are 7 characters long

/[a-z]{5,7}/
//This matches words between 5 to 7 characters long

/[a-z]{5,}/
//This matches words with minimum of 5 characters long
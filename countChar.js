function countChar (text, charToCount) {
    var count=0;
    for (char of text)
        if (char==charToCount)
            count++;
    return count;
}

/*
Below returns 3.
*/
countChar("aardvark");

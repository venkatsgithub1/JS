function countBs (text) {
    var count=0;
    for (char of text)
        if (char=='B')
            count++;
    return count;
}

/*
Below returns 2.
*/
countBs ("BBC");

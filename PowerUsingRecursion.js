function power(base, exponent) {
    if (exponent==0) {
        return 1;
    }
    return base*power (base, exponent-1);
}

/*
In recursion base case is important,
that is where the function gives back
results to each call.
In the function power, if exponent=0,
1 is being returned back and the next
steps of each call executes from here.
-----------------------------------------
power (2, 10)=2 multiplied 10 times=2014.
-----------------------------------------
*/
console.log(power(2, 10));

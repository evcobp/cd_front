//Recursive Sigma
function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0;
}

//My original code
    var sum = 0;
    while(num < 20) {
        var prevVal = rSigma(num+1);
        sum = prevVal + num;
        return sum;
    }

//Recursive Factorial
function rFact(num) {
    if (num > 1) {
        return rFact(num-1) * num;
    }
    return 1; 
}

//My original code
function rFact(num) {
    if (num < 0) {
        num = 0;
    }
        if(num > 1) {
            return rFact(num-1) * num;
        }
        return 1;
    }
function square(num){
    return num*num
}


console.log(square(4))

/* first class function */

function square(num){
    return num*num
}

function displaySquare(fn){
    console.log("functiom",fn(4))
}

displaySquare(square)

/* IFEE */


(function square(num){
    console.log(num*num);
})(5)

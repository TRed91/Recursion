console.log('=== Fibonacci Assignment ===')

function fibs(n) {
    let arr = []
    let sum = 0;
    for (let i = 0; i < n; i++){
        if (i < 2) {
            arr.push(i);
        } else {
            sum = arr[i-1] + arr[i-2];
            arr.push( sum );
        }
    }
    return arr;
}

function fibonacci(n) {
    if (n === 1) 
        return [0];

    if (n === 2) 
        return [0, 1];
    
    let arr = fibonacci(n-1);
    return arr.concat(arr[arr.length-1] + arr[arr.length-2])
}

console.log(fibs(8));
console.log(fibonacci(8));
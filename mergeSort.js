function mergeSort(arr) {
    if (arr.length === 1) 
        return arr
        
    if (arr.length === 2) {
        let a = arr[0];
        let b = arr[1];
        if (a < b) {
            return [a, b]
        } else {
            return [b, a]
        }
    }
    
    if (arr.length === 3) {
        let a = arr[0]
        let arrB = [arr[1], arr[2]];
        let b = mergeSort(arrB);

        let merged = [];

        if (a < b[0]){
            merged.push(a)
            merged = merged.concat(b)
        } else {
            merged.push(b[0])
            if (a < b[1]) {
                merged.push(a)
                merged.push(b[1])
            } else {
                merged.push(b[1])
                merged.push(a)
            }
        }
        return merged;
    }
    if (arr.length > 3) {
        let arrA = arr.toSpliced(Math.floor(arr.length/2));
        let arrB = arr.toSpliced(0, Math.floor(arr.length/2));
        arrA = mergeSort(arrA);
        arrB = mergeSort(arrB);
        let merged = [];
        for (let i = 0; i < arrA.length; i++) {
            for (let j = 0; j < arrB.length; j++) {
                if (arrA[i] === arrB[j]) {
                    merged.push(arrA[i]);
                    merged.push(arrB[j]);
                    arrA.shift();
                    arrB.shift();
                    j -= 1;
                }
                if (arrA[i] < arrB[j]) {
                    merged.push(arrA[i]);
                    arrA.shift();
                    j -= 1;
                }
                if (arrA[i] > arrB[j]) {
                    merged.push(arrB[j]);
                    arrB.shift();
                    j -= 1;
                }
            }
        }
        if (arrA.length === 0) {
            for (let i of arrB) {
                merged.push(i)
            }
        }
        if (arrB.length === 0) {
            for (let i of arrA) {
                merged.push(i)
            }
        }
        return merged;
    }
        
}

console.log(mergeSort([3, 1, 4, 2, 5, 1, 8, 110, 56, 12, 6, 2]));
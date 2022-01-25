
// You should implement your task here.

module.exports =function towelSort(matrix) {
    const resultArr = [];
    let indexForCount='' ;
    if (arguments.length == 0 || matrix.length == 0) {
        return resultArr;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                indexForCount = j
            } else {
                indexForCount = matrix[i].length - 1 - j
            }
           resultArr.push(matrix[i][indexForCount]);
        }

    }
    return resultArr
}

// matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];
// towelSort(matrix);

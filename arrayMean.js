/* Example: Get the mean of an array
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

let scores = [70, 60, 40, 65, 90, 100];

/* Solution - 1; */
    function averageScore(scores){
    let avg =0;
    for (let i of scores){
        avg += i/scores.length;
    }
    return (avg).toFixed(2);
}

console.log(averageScore(scores));


/* Solution - 2;  */
/* function myAverage(arr1){
    let sum1 = scores.reduce(mySum);
    function mySum(total, val) {
        return (total + val);
    };
    return (sum1/arr1.length).toFixed(2);
}

console.log(myAverage(scores)); */
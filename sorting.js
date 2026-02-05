function bubbleSort() {
    //declare an array
    arr = [77, 42, 35, 12, 101, 5];

    //for loop
    for (let j = arr.length - 1; j>=0; j--) {
        //remove the largest value
        //run comparison til 5 (4; i=4; i+1=5)
        //second: til 4
        //third: til 3
        for (let i = 0; i < j; i++) {
            //0 to 4; compare element i and i+1; i should stop at i=4
            if (arr[i] > arr[i + 1]) {
                //element is out of order,swap
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    //time complexity: O(n*n)
    //algorithm check
    console.log(arr);

}
bubbleSort();


/*e.g. a = 7, b = 3
temp=a
a=b
b=temp
*/
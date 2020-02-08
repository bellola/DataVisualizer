function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

export default function bubbleSort(array, updateUI) {
    console.log(array)
    for (let i = 0; i < array.length; i++){
            for (let j =0; j < array.length-1; j++){
                if (array[j] > array[j+1]){
                    swap(array, j, j+1);
                    
                }
            }
            // updateUI(array)
        }

        console.log(array)
        return array
}
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

export default function bubbleSort(array, updateUI) {
    // console.log(array)
    // for (let i = 0; i < array.length; i++){
    //         for (let j =0; j < array.length-1; j++){
    //             if (array[j] > array[j+1]){
    //                 swap(array, j, j+1);
                    
    //             }
    //         }
    //         // updateUI(array)
    //     }

    //     console.log(array)
    //     return array


// let a = array[j]
// let b = array[j+1]
// if(a>b){
//     swap(array,a,b)
// }

// else if(i<array.length){
//     j = j+1
//     if(j >= array.length-i-1){
//         j=0
//         i=i+1
//     }

// } else{
//     console.log('done')
//     return array
// }

    }
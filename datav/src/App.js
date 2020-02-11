import React from 'react';
import './App.css';
import GraphContainer from './components/GraphContainer'
import NavBar from './components/NavBar'
// import bubbleSort from './algorithms/bubblesort'
// import finalMS from './algorithms/mergesort'
// import bubbleSort from './algorithms/bubblesort';

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      array: [5,1],
      arrayLength: 50,
  }
  this.onChangeListener = this.onChangeListener.bind(this)
  this.onMouseUpListener = this.onMouseUpListener.bind(this)
  this.updateArray = this.updateArray.bind(this)
  //this.onSortHandler = this.onSortHandler.bind(this)
  }

  onChangeListener(event){
    // console.log('trying to change')
    // console.log(event.target.value)
    this.setState({
      arrayLength: event.target.value
    })
  }

  onMouseUpListener(event){
    //TODO make a new array of random numbers
    let arrayLength = this.state.array.length
    let newarr = []
    if(arrayLength < event.target.value){

    const randomArr = generateRandomArray(event.target.value - arrayLength)
    newarr = this.state.array.concat(randomArr)
    } else {
    newarr = this.state.array.slice(0, event.target.value)
    }
    this.setState({
      array: newarr
    })
  }

swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

  onSortHandler(){
    console.log(this.state.array)



    // for (let i = 0; i < array.length; i++){
      //         for (let j =0; j < array.length-1; j++){
      //             if (array[j] > array[j+1]){
      //                 swap(array, j, j+1);
                      
      //             }
      //         }
      //         // updateUI(array)
      //     }


    let arr = this.state.array.slice(0)
    console.log(arr)
   for(let i = 0; i < arr.length; i++){
    for (let j = 0; j< arr.length-1-i;j++){
         let a = arr[j]
        let b = arr[j+1]
        if(a>b){
          this.swap(arr,a,b)
           this.setState({
        array:arr
      })
       } 

       


       if(i<arr.length){
        j = j+1
        if(j >= arr.length-i-1){
            j=0
            i=i+1
        }
   } else{
     console.log('done')
   }
  





      
    }
  }
      
    console.log(this.state.array)

    // this.setState({
    //   array: bubbleSort(this.state.array)
    // })
   
  
  

  }

  reset(){
    this.setState({
      array: []
    })
  }


  //UPDATE ARRAY WORKS FOR THE SPLITTED ARRAYS ON MERGESORT ONLY

  updateArray(arr){
    console.log(arr, 'THIS IS UPDATEARR')
    let newArr = []
    arr.forEach((element) => {
      newArr.push(...element)
    })
    
    this.setState({
      array: newArr
    })
    // console.log(this.state)
  }

  render(){
  return (
    <div className="App">
      <NavBar onChange={this.onChangeListener} onMouseUp = {this.onMouseUpListener} arrayLength={this.state.arrayLength}/>
      <GraphContainer graphArr={this.state.array} />
      <button onClick={()=>this.onSortHandler()}>Sort</button>
      <button onClick={() => this.reset()}>Reset</button>
    </div>
  );
}}

function generateRandomArray (n) {
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(makeRandomNumber())
  }
  return arr
}

function makeRandomNumber() {
  return Math.floor(Math.random() * Math.floor(99));

}

export default App;

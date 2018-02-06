const selectionSort = ( arr) =>{
    let j = 0; 
    while( j < arr.length){                
        let minIndex = j;        
        for( let i = j + 1; i < arr.length; i++){
            if( arr[ i ] < arr[minIndex] ){
                minIndex =  i;                
            }
        }
        swap( minIndex, j, arr);
        j++;
    }
    return arr;
}

const swap = ( minIndex, currentIndex, arr) => {
    let temp = arr[ currentIndex ];
    arr[ currentIndex ] = arr[ minIndex ];
    arr[ minIndex ] = temp;        
}

const init = ( arr) => {
    console.log("input", arr);
    console.log("output", selectionSort( arr));
}

init( [51,222,1,2235,12,22])
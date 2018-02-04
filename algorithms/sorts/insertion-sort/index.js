const insertionSort = ( array, flag  ) =>{
    
   console.log("input:::", array, "flag:::", flag);

   for( let j = 1; j < array.length; j++){
       let key = array[ j ];           
       let i = j -1; 
        
       while( i >= 0 &&         
        ( flag !== "DSC" ? 
            !!( array[ i ] > key ) :
            !!( array[ i ] < key ) )        
        ){
           array[ i + 1 ] = array[ i ];           
           i = i - 1;
       }
       array[ i + 1 ] = key 
   }
    return array;
}

console.log("output:::", insertionSort([51, 22, 2, 1, 11, 141], "ASC"));

/*Rewrite the INSERTION-SORT procedure to sort into nonincreasing instead of nondecreasing
order.
*/
console.log("output:::", insertionSort([51, 22, 2, 1, 11, 141], "DSC"));


const linearSearch = ( array, val ) => {
    console.log("input:::",  array, "val", val)
    let sortedArray = insertionSort( array, "ASC");
    
    for( var i =0; i < sortedArray.length; i++){
        let  key = sortedArray[i];
        
        if(  key == val){
            return key;
        }else if( key > val ){
            return 'NIL';
        }
    }
    return 'NIL';
}

console.log("linear search", linearSearch( [51, 22, 2, 1, 11, 141], 2));
console.log("linear search", linearSearch( [51, 22, 2, 1, 11, 141], 3));
console.log("linear search", linearSearch( [51, 22, 2, 1, 11, 141], 142));
/*
 Sample Binary addition
    111  -->  7
    111  -->  7
  1110  --> 14
  */

const binaryAddition =  ( arrayOne, arrayTwo) => {
    var resultArray = [];
    var memory = 0;
    for ( var i = 0; i < arrayOne.length; i++ ){                
        if( (arrayOne[i] + arrayOne[i] + memory) == 1  ){
            memory = 0;
            resultArray.push(1)
        }else if(  (arrayOne[i] + arrayOne[i] + memory) == 2){
                memory = 1;
                resultArray.push( 0 )
       }else if(  (arrayOne[i] + arrayOne[i] + memory) == 3){
                resultArray.push( 1 )
            }                                        
    }

    if( memory == 1){
        resultArray.push( memory);
    }

    return resultArray.reverse(); 
}

console.log(binaryAddition( [0,1], [0,1] ));
console.log(binaryAddition( [1,1], [1,1] ));
console.log(binaryAddition( [1,0,1], [1,0,1] ));
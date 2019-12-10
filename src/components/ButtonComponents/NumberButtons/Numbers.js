import React,{useState} from "react";
import { numbers } from '../../../data'
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberValues] = useState(numbers);
  console.log(numberValues)
  
  return (
    <div>
      {
        numberValues.map(currentValue => (
          <NumberButton key={currentValue} name={currentValue}/>
        ))
      }
    </div>
  );
};

export default Numbers;

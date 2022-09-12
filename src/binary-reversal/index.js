/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */



function binaryReversal(value) {

//line below changes 
 let valueNumber = Number(value).toString(2)
 console.log('valueNumber',valueNumber)

    //using a string literal, we assign valueNumber to revValue variable
    let revValue = `${valueNumber}`
    console.log('revValue', revValue)
//this line below pads binary the string created, splits into an array of strings, 
//does a reverse string and join back the array to a string
   let newValue = revValue.padStart(8, '0').split('').reverse().join('');
   console.log('newvalue',newValue)
//line below parseInt the reverse binary string created above to decimal
 let stringValue = parseInt(newValue, 2)
 console.log('stringValue', stringValue)

 return stringValue.toString();

}



binaryReversal("1");
module.exports = binaryReversal;

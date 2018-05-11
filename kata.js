

//@params: 
// String: String with delimiters and numbers
//@retrun: 
//  Array: 2 elements, first with string of delimiters and second is a string of number without personal delimiter. 
//
//Delimiters is '\n' and ',' . 

function getDelimiters(strDelimiter){
    
    // delimiter prefixed.
    var costDelimiter = '\n|,';
    // delimiter passed in first line
    var newDelimiter = '';
    // string cleared up from delimiter in first line
    var strNumbers = strDelimiter;

    // check definition of delimiter in first line
    if (strDelimiter.indexOf('//') < 0) return [costDelimiter, strNumbers];

    if (strDelimiter.substring(0,2) =='//'){
        newDelimiter = strDelimiter.substring(2, strDelimiter.indexOf('\n'));
        strNumbers = strNumbers.substring(strDelimiter.indexOf('\n'));

    };
    
   
    costDelimiter = costDelimiter + '|' +newDelimiter;

    return [costDelimiter,strNumbers];

};

//@params: 
//  Array: Numeric array 
//@retrun: 
//  Array: Negative numeric array
// 
// Filter the array and return only negarive numbers
function getNegativeNumbers(arrNumbers){
    var arrNegariveNumber = arrNumbers.filter(function(item) {
        if (item < 0) return item;
    });

    return arrNegariveNumber;
};


// @parms 
// String: list of number delimited with special character.
//         costant delimiter charcter "\n"  and ","
//         in first line could accept personal delimiter.  
// @return
// Int    : Summation of numbers 
function add(elementToSum){
    
    var sum = 0;
 
    // In case of empty string return 0
    if (elementToSum == ''){
        return 0;
    }
    
    
    // get the delimites and numbers
    var arrDelimNumbers = getDelimiters(elementToSum);
    // delimiters 
    delimiters = arrDelimNumbers[0];
    // numbers to split based on delimiters. 
    elementToSum = arrDelimNumbers[1];

    var delimitersRegExp = new RegExp(delimiters);

    // transform input String to int Array
    var splitInp= elementToSum.split(delimitersRegExp).map(function(item) {
        // check if is an empty element, happens when the sting contain a delimiter in last position 
        if (item == '') return 0;

        return parseInt(item, 10);
    });

    var negativeNumbers= getNegativeNumbers(splitInp);
    try {

        if (negativeNumbers != [] ) throw new SyntaxError("negatives not allowed: "+ negativeNumbers);
            
     
    }
    catch (e) {
        console.log(e);
    }

    // for each element apply a summation function.
    var sum = splitInp.reduce((a , b) => a + b , 0)    

    return sum;
}
var str = '//a\n123a123,2';


output = add(str);
console.log(output);   


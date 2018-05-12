# String Calculator Kata
The following is a TDD Kata, an exercise in coding, refactoring and test-first.

## Installation
The code is written with standard javascript libraries.

## Usage
Add module ``var stringCalculator = require("./stringCalculator.js");``
Call the ``int add( string )`` method, passing a string with delimiters and numbers.

## Testing
Add file to folder testfile with delimiters and numbers.
Run ``testStringCalculator.js`` and it's print in console the validation.  

For a correct vaidation, put at the end of name file the value of expected summation.
* For exemple the test file ``testfile/sum1_7476.txt`` have at the end the value ``_7476``.

As indicated the new line have only \n character, but during a test in Windows environment I is see that new line is composed by \r\n.
in this case:
    //t
    123t345
the new delimiter is ``t\r``


Credits to [Roy Osherove](http://osherove.com/tdd-kata-1) for the original idea.
# passwordGenerator
UPDATIONS DONE @.js file

global variables are declared to hold values entering through prompt and confirm
global variable declared  to use for password generation-uppercase,lowercase,number,special character()
different option variable  is made by merging different  possible options(option1,2,3,4,5,6,7,8,9,10)

function writepassword() is called at click event of button 'generate' it has the following

1.promt and confirm used to take values from user.
2.if loop is added to check whether the number entered is between 8-128,empty space ,or string,or an alphabet(isNaN) ;
3.if loop is added to check atleast 1 selector is true to continue with password generation.
4.if atleast one option is selected and nuber entered is between 8-128 it calls generatefunction().
5.code to write it to the text area if password generated sucessfully.

generate function is used to generate random selection
random method is used to select a random choice using different functions 


github repository:https://github.com/Kuleenabinoy/passwordGenerator

deployed website:https://kuleenabinoy.github.io/passwordGenerator/

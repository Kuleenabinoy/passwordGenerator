
//Checking whether password length is 0 or null
var passwordNo=prompt ("enter no of characters in password");
if((passwordNo==0)||(passwordNo===null))
{alert("Kindly Enter no of digits for password");
exit();

}
else {

var upperCaseselector=confirm("Do you want to have uppercase in password");
var lowerCaseselector=confirm("Do you want to have lowercase in password");
var wholeNumberselector=confirm("Do you want to have Number in password");
var specialCharacterselector=confirm("Do you want to have special  charcater in password");
}

 
 //checking for atleast 2 selectors are true to continue
 if(((lowerCaseselector!=true)||(upperCaseselector!=true)||(wholeNumberselector!=true)) &&((wholeNumberselector!=true)||(specialCharacterselector!=true)))
  {
    alert(" You need to select atleast two options");

 }
else{
  console.log(passwordNo);
}

  
var specialCharacters = '!@#$%^&*(){}[]=<>/,.' ;
  

  var upperCasedCharacters =[
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  var lowerCasedCharacters =[
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var numericCharacters =['0', '1' ,'2', '3', '4', '5', '6', '7', '8', '9'];
 var sC=specialCharacters;
 var nM=numericCharacters;
 var lC=lowerCasedCharacters;
 var uC=upperCasedCharacters;
var password=0;
option1=sC+nM+lC+uC;
option2=sC+nM; //special numeric
option3=lC+uC; //lower upper
option4=nM+lC; //numeric,lowercase
option5=sC+nM+lC; //special numeric lower
option6=nM+lC+uC; //numeric lower uppercase
//console.log(option1);
var generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click",generatePassword());
generateBtn.addEventListener("click", writePassword());
// Add event listener to generate button


function generatePassword()
{

if((wholeNumberselector==true)&&(specialCharacterselector==true))
{for(var i=0;i<passwordNo-1;i++)
  { 
    password += getrandomSpecialnumber();
    
    
  }
}
else if((wholeNumberselector==true)&&(specialCharacterselector==true)&&(lowerCaseselector==true)&&(upperCaseselector==true))
{for (var i=0;i<passwordNo-1;i++)
{password += getRandomall();
  
   
}
}
else if((lowerCaseselector==true)&&(upperCaseselector==true))
{
  for (var i=0;i<passwordNo-1;i++)
    {password+=getRandomLowerupper();
      
    }
    
}
else if((wholeNumberselector==true)&&(lowerCaseselector==true))
{
  for (var i=0;i<passwordNo-1;i++)
    {password+=getRandomNumericlower();
      
    }
    
}
else if((lowerCaseselector==true)&&(upperCaseselector==true))
{
  for (var i=0;i<passwordNo-1;i++)
    {password+=getRandomLowerupper();
      
    }
    
}
else if((lowerCaseselector==true)&&(upperCaseselector==true)&&(wholeNumberselector==true))
{
  for (var i=0;i<passwordNo-1;i++)
    {password+=getRandomNumericlowerupper();
     
    }
    
}
else ((lowerCaseselector==true)&&(wholeNumberselector==true)&&(specialCharacterselector==true))
{
  for (var i=0;i<passwordNo-1;i++)
    {password+=getRandomSpecialnumericlower();
      
    
    }

}
}

function writePassword()
{generatePassword();
console.log( "password" ,password);
var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function getRandomall()
{
  return option1[Math.floor(Math.random()*option1.length)];
}

  function getrandomSpecialnumber()
{
  return option2[Math.floor(Math.random()*option2.length)];
  
}
function getRandomLowerupper()
{//const randomElement = array[Math.floor(Math.random() * array.length)];
  return option3[Math.floor(Math.random()*option3.length)];
}
function getRandomNumericlower()
{
  return option4[Math.floor(Math.random()*option4.length)];
}

function getRandomSpecialnumericlower()
{
  return option5[Math.floor(Math.random()*option5.length)];
}
function getRandomNumericlowerupper()
{
  return option6[Math.floor(Math.random()*option6.length)];
}












/*function getrandomLower()
{
  return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
}
console.log(getrandomLower());

function getrandomUpper()
{
  return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
}
console.log(getrandomUpper());
function getrandomNumber()
{
  return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
  
}
console.log(getrandomNumber());

function getrandomSymbol()
{var symbols='!@#$%^&*(){}[]=<>/,.' ;
  return symbols[Math.floor(Math.random()*symbols.length)];
  
}

console.log(getrandomSymbol());*/

// Assignment Code


// Write password to the #password input




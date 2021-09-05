
//Taking user input using prompt and confirm

var passwordNo=prompt ("enter no of characters in password");
var noOfchar=0;
noOfchar=passwordNo;
if((noOfchar==='0')||(noOfchar===' ')||(noOfchar===null))// checking whether user choice is 0 or empty string or null string
 {
   alert("Kindly Enter Number of digits for password");


 }
 else{
var upperCaseselector=confirm("Do you want to have uppercase in password");
var lowerCaseselector=confirm("Do you want to have lowercase in password");
var wholeNumberselector=confirm("Do you want to have Number in password");
var specialCharacterselector=confirm("Do you want to have special  charcater in password");
 }


 //checking for atleast 2 selectors are true to continue
 if((((lowerCaseselector!==true)||(upperCaseselector!==true))||(wholeNumberselector!==true)) &&((wholeNumberselector!==true)||(specialCharacterselector!==true)))
  {
    alert(" You need to select atleast two options");

 }
else{
  console.log(passwordNo);
}

  //declaring variables with alphabets ,number and special characters
   var specialCharacters = '!@#$%^&*(){}[]=<>/,.' ;
  var upperCasedCharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCasedCharacters ='abcdefghijklmnopqrstuvwxyz';
  var numericCharacters ='0123456789';
 var sC=specialCharacters;
 var nM=numericCharacters;
 var lC=lowerCasedCharacters;
 var uC=upperCasedCharacters;
var password1='';
option1=sC+nM+lC+uC;//all select
option2=sC+nM; //special numeric
option3=lC+uC; //lower upper
option4=nM+lC; //numeric,lowercase
option5=sC+nM+lC; //special numeric lower
option6=nM+lC+uC; //numeric lower uppercase

// Add event listener to generate button    
var generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click",generatePassword());
generateBtn.addEventListener("click", writePassword());


//function generatePassword() to generate password after checking options using if loop
//after checking option it call corresponding random password generate function
function generatePassword()
{
  if(((wholeNumberselector===true)&&(specialCharacterselector===true))&&((lowerCaseselector===true)&&(upperCaseselector===true)))
  {
    for (var i=0;i<noOfchar;i++)
   { password1 += getRandomall();
    console.log( "password1" ,password1);//checking whethr loop working
   }
  }
  else if (((lowerCaseselector===true)&&(wholeNumberselector===true))&&(specialCharacterselector===true))
  {
      for (var i=0;i<noOfchar;i++)
      {  password1 +=getRandomSpecialnumericlower();
        console.log( "password2" ,password1);
      
      }
  
  }
  else if(((lowerCaseselector===true)&&(upperCaseselector===true))&&(wholeNumberselector===true))
  {
    for (var i=0;i<noOfchar;i++)
      { password1 +=getRandomNumericlowerupper();
        console.log( "password3" ,password1);
      }
      
  }
  
else if((wholeNumberselector===true)&&(specialCharacterselector===true))
{
  for(var i=0;i<noOfchar;i++)
  { 
     password1 += getrandomSpecialnumber();
    console.log( "password4" ,password1);
    
  }
}

else if((lowerCaseselector===true)&&(upperCaseselector===true))
{
  for (var i=0;i<noOfchar;i++)
    { password1 +=getRandomLowerupper();
      console.log( "password5" ,password1);
    }
    
}
else if((wholeNumberselector===true)&&(lowerCaseselector===true))
{
  for (var i=0;i<noOfchar;i++)
    { password1 +=getRandomNumericlower();
      console.log( "password6" ,password1);
    }
    
}


}// end of generate function

// function  writepassword() to write in text area

function writePassword()
{ 
  generatePassword();
  console.log( "passwordfinal" ,password1);
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

}
//end of write function

//Random string generating functions 6 functions are added for 6 possible options

function getRandomall()
{
  return option1[Math.floor(Math.random()*option1.length)];
}

  function getrandomSpecialnumber()
{
  return option2[Math.floor(Math.random()*option2.length)];
  
}
function getRandomLowerupper()
{
  return option3[Math.floor(Math.random()*option3.length)];
}
function getRandomNumericlower()
{
  return  option4[Math.floor(Math.random()*option4.length)];
}

function getRandomSpecialnumericlower()
{
  return option5[Math.floor(Math.random()*option5.length)];
}
function getRandomNumericlowerupper()
{
  return option6[Math.floor(Math.random()*option6.length)];
}

//end of random string generating functions













//global variable declaration
var upperCaseselector;
var lowerCaseselector;
var wholeNumberselector;
var specialCharacterselector;
var passwordNo;
var noOfchar=0;
//declaring variables with alphabets ,number and special characters
var specialCharacters = '!@#$%^&*(){}[]=<>/,".?:-_+|~"' ;
var upperCasedCharacters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCasedCharacters ='abcdefghijklmnopqrstuvwxyz';
var numericCharacters ='0123456789';
var sC=specialCharacters;
var nM=numericCharacters;
var lC=lowerCasedCharacters;
var uC=upperCasedCharacters;
var password1='';
var option1=sC+nM+lC+uC;//all select
var option2=sC+nM; //special numeric
var option3=lC+uC; //lower upper
var option4=nM+lC; //numeric,lowercase
var option5=sC+nM+lC; //special numeric lower
var option6=nM+lC+uC; //numeric lower uppercase
var option7=sC;//special character option
var option8=nM;//numeric option
var option9=lC;//lowercase option
var option10=uC;//uppercase option

var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);

// function  writepassword() to write in text area and for data entry upon clickevent of generate button
function writePassword()
{ 
  passwordNo=prompt ("Enter no of characters in password");

noOfchar=passwordNo;
if((noOfchar<8)||(noOfchar>=128)||(noOfchar===' ')||(noOfchar===null))// checking whether user choice is <8 or >128 or emptyspace  or null 
 {
   alert("Kindly Enter a valid no between 8-128");

 }
 else{
 upperCaseselector=confirm("Do you want to have uppercase in password");
 lowerCaseselector=confirm("Do you want to have lowercase in password");
 wholeNumberselector=confirm("Do you want to have Number in password");
 specialCharacterselector=confirm("Do you want to have special  charcater in password");
 }
 if((lowerCaseselector!==true)&&(upperCaseselector!==true)&&(wholeNumberselector!==true) &&(wholeNumberselector!==true)&&(specialCharacterselector!==true))
  {
    alert(" You need to select atleast one options");
  }
  else
  {
  generatePassword();
  console.log( "passwordfinal" ,password1);
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;

}
}
//end of write function

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
else if(specialCharacterselector===true)
{
  for (var i=0;i<noOfchar;i++)
  { password1 +=getRandomspecial();
    console.log( "password7" ,password1);
  }
}
else if(wholeNumberselector===true)
{
  for (var i=0;i<noOfchar;i++)
  { password1 +=getRandomNumeric();
    console.log( "password8" ,password1);
  }
  
}
else if(lowerCaseselector===true)

{
  for (var i=0;i<noOfchar;i++)
  { password1 +=getRandomlower();
    console.log( "password9" ,password1);
  }
}
else if(upperCaseselector===true)

{ for (var i=0;i<noOfchar;i++)
  { password1 +=getRandomUpper();
    console.log( "password10" ,password1);
  }
 }
}
// end of generate function

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
function getRandomUpper()
{
  return option10[Math.floor(Math.random()*option10.length)];
}
function getRandomlower()
{
  return option9[Math.floor(Math.random()*option9.length)];
}
function getRandomspecial()
{
  return option7[Math.floor(Math.random()*option7.length)];
}
function getRandomNumeric()
{
  return option8[Math.floor(Math.random()*option8.length)];
}
//end of random string generating functions












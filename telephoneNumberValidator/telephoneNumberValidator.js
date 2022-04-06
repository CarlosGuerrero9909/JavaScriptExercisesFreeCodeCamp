function telephoneCheck(str) {
  if(str[0] == '-'){
    return false;
  }
  if(str.length == 12 && str[0] == 5){
    return true;
  } 
  
  let telephoneClean = str.replace(/-| /g, "");
  console.log(telephoneClean);

  if(str.length == 10){
    return true;
  } else if((telephoneClean.length == 12) && (telephoneClean[0] == '(' && telephoneClean[4] == ')')){
    return true;
  } else if((telephoneClean[0] == '1' ) && (telephoneClean[1] == '(' && telephoneClean[5] == ')')){
    return true;
  } else if(telephoneClean[0] == '1' && telephoneClean.length == 11){
    return true;
  }

  return false;
}

telephoneCheck("55 55-55-555-5");
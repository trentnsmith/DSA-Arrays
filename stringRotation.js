function stringRotation(str1,str2){
    if(str1.length !== str2.length){
      return false;
    }
    let newStr = str1 + str1;
  
    if(newStr.indexOf(str2)===-1){
      return false;
    } else {
      return true;
    }
}

console.log(stringRotation('amazon','azonam'))
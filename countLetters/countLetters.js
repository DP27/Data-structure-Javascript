function countLetters(str){
  if(str===''){
    return null;
  }
  else{
    str = str.replace(/ /g,'');
    var arr_of_char = str.split('');
    var dir_of_letters = {};
    for (var i =0; i < arr_of_char.length; i++){

      // if(!((arr_of_char[i]) in dir_of_letters))){
      if (dir_of_letters[arr_of_char[i]]){
      dir_of_letters[arr_of_char[i]] += 1;
        }
      else{
        dir_of_letters[arr_of_char[i]] =1;
        }

    }
  return dir_of_letters;
  }
}


console.log(countLetters("lighthouse in the house"));
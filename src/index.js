module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsConfig[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
  }

  let i = 0;
  while (i < strArr.length) { 
    if (bracketsConfig.includes(strArr[i] + strArr[i + 1])) {
      strArr.splice(i, 2);
      i = 0;
    }else i++;
  }

  return strArr.length == 0;
}

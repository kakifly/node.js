var charCount = function (str) {
    var len = 0;
    str = escape(str);
    for (var i = 0; i < str.length; i++, len++) {
        console.log(str.charAt(i));
        console.log(str.charAt(i + 1));
        console.log(str.charAt(i + 2));
        console.log(str.charAt(i + 3));
        console.log(str.charAt(i + 4));
        console.log(str.charAt(i + 5));
        if (str.charAt(i) == '%') {
            if (str.charAt(++i) == 'u') {
                i += 3;
                len++;
            }
            i++;
        }
    }
    return len;
};
var len = 0;
len = charCount('あいうえお');
console.log('len:' + len);
//const charCount = (str : String) : Number => {
//  let len = 0;
//  str = escape(str);
//
//  for (let i : Number = 0; i < str.length; i++,len++) {
//    if (str.charAt(i) == '%') {
//      if (str.charAt(++i) == 'u') {
//        i += 3;
//        len++;
//      }
//      i++;
//    }
//  }
//  return len;
//};

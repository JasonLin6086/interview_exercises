"asdf gggg   d     d "
"asdf gggg d d "
" aaaaa    " => " aaaaa "
""
"      "
var removeDuplicatedSpaces = function(input) {
    var result = "";
    for (var i=0; i<input.length; i++) {
        result += input[i];
        if (input[i] == ' ') {
            while (i+1 < input.length && input[i+1] == ' ') {
                i ++;
            }
        }
    }
    return "-" + result + "-";
}


//input.replace(/\s+/g,' ');
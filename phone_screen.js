
<html>
<body>
<ul>
   <li id="4"><a href="#2">4</a> </li>
   <li id="1"><a href="#6">1</a> </li>
   <li id="2"><a href="">2</a> </li>
   <li id="6"><a href="#4">6</a></li>
</ul>
<script>
</script>
</body>
</html>
output:
1->6->4->2

//var result = "";
var helper = function(myMap, id, result) {
    if (myMap.get(id) != '') {
        helper(myMap, myMap.get(id), result);
    }
    result.res = (myMap.size()!=1 ? "->" : "") + id + result.res;
    myMap.erase(id);
}

var traverse = function(id) {
    var result = {};
    result.res = "";
    var li_ary = getElementByTag("li");
    var myMap = new Map();
    for (let i=0; i<li_ary.length; i++) {
        let key = ;
        let value = ;
        myMap.set(key, value);
    }
    //m[4]=2,m[1]=6,m[2]="",m[6]=4
    helper(myMap, id, result);    
}

-> 2
-> 2 -> 4
-> 4 -> 2
-> 6 -> 4 -> 2
-> 1 -> 6 -> 4 -> 2

2 <- 4 <- 6 <- 1

{ "start" : "1", "liorder" : { "1" : "6", "2" : "", "6" : "4", "4" : "2"} }

/sortLi?start=1

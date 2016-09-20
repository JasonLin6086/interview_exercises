'use strict'

var fs = require('fs');
if (!isFinite(process.argv[2]) || !isFinite(process.argv[3]) || process.argv.length != 4) {
    console.log("Invalid input!");
    return;
}
var x=process.argv[2], y=process.argv[3];
var bufferString;
var myMap = {};

var outputResult = function(map) {
    let result = [];
    console.log(map);
    let keys = Object.keys(map);
    keys.sort(function(a, b) {
        return a - b;
    })
    for (let i=0; i<keys.length; i++) {
        result.push(map[keys[i]]);
    }
    console.log(result);
}

var calculateDistance = function(item) {
    if (item.value!=="undefined") {
        let point = item.value.split(',');
        let distance = Math.pow(point[0]-x,2) + Math.pow(point[1]-y,2);
        typeof myMap[distance];
        if (typeof myMap[distance] === "undefined")  {
            myMap[distance] = [];
        }
        myMap[distance].push(item.id);
    }
}

var calculateEachPoint = function(x, y) {
    var jsonObj = JSON.parse(bufferString);
    jsonObj.forEach(calculateDistance);
    outputResult(myMap);
}

function readFile (jsonfile, callback) {
    fs.readFile(jsonfile, 'utf8', function (err, data) {
      if (err) {
          console.log(err);
          return;
      }
      bufferString = data.toString();
      callback.apply(this, [x,y]);
    });
}
readFile("coordinates.json", calculateEachPoint);

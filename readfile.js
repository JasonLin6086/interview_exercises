var fs = require('fs');

var bufferString, bufferStringSplit, newData, tmpFile;

function counter(pathToFile, callback) {
  fs.readFile(pathToFile, 'utf8', function (err, data) {
    if (err) {
            console.log(err);
            return;
    }
    bufferString = data.toString(); 
    bufferStringSplit = bufferString.split('\n'); 
    callback(null, updateFile.bind(null, pathToFile, backupFile.bind(null, pathToFile)));
  });
}

function updateFile(pathToFile, callback) {
    tmpFile = 'C:\\temp\\new' + new Date().valueOf().toString() + '.csv';
    fs.writeFile(tmpFile, '', 'utf8', callback);

    var appendToFile = function (idx) {
        var data = newData[idx];
        data = data + (idx==newData.length-1 ? "" : "\n");
        fs.appendFileSync(tmpFile, data, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    }
    
    for (var i=0; i<newData.length; i++) {
        appendToFile(i);
    }
}

function backupFile(pathToFile) {
    var backupFileName = pathToFile + '.' + new Date().valueOf().toString() + '.bak';
    fs.rename(pathToFile, backupFileName, function(err) {
        if (err) console.log(err);
    });
    fs.rename(tmpFile, pathToFile, function(err) {
        if (err) console.log(err);
    });
    console.log("backup file: " + pathToFile + " => " + backupFileName);
}

function updateData(data) {
    var input = data.split(',');
    if (input.length != 3) return data;
    if (input[2] == 0) data += ",0";
    else {
        data += "," + input[0] / input[1];
    }
    return data;
}

function logMyNumber(err, callback) {
  newData = bufferStringSplit.map(updateData);
  callback();
}

counter('C:\\temp\\testfile.csv', logMyNumber);

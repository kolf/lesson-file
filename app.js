var fs=require('fs');
var url=require('url');
var util=require('util');
var server=require('http').createServer();

server.on('request', function(req, res){
    var urlObj=url.parse(req.url, true);
    var pathname=urlObj.pathname;
    if(pachname='/'){
        fs.createReadStream('./list.html').pipe(res);
        readdir(function(files){
            files.forEach(function(val){
                console.log(val)
            })
        })
    }
});

server.listen(9000);

function readdir(callback){
    fs.readdir('./', function(error, files){
        if(error){
            console.error(error)
        }else{
            callback(files)
        }
    });
}



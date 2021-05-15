
var website='https://031323.github.io/suvak/';
if(location.href.includes('localhost:8000'))
	website='http://localhost:8000/'
if(location.href.includes('localhost:8001'))
	website='http://localhost:8001/'
	
var Module={'onAbort':function(what){console.log(what);postMessage('reload');},
'locateFile':function(path,prefix){
	console.log(prefix+' -> '+path)
	//return "http://0.0.0.0:8000/"+path;
	//return "http://localhost:8080/"+path;
	return website+path;
}
}

//var website='http://localhost:8000/';

var Module={'onAbort':function(what){console.log(what);suvakprocessor.port.postMessage('reload');}
/*,'locateFile':function(path,prefix){
	console.log(prefix+' -> '+path)
	//return "http://0.0.0.0:8000/"+path;
	//return "http://localhost:8080/"+path;
	return website+path;
}*/
}

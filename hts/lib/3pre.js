var Module={'onAbort':function(what){console.log(what);postMessage('reload');},
'locateFile':function(path,prefix){
	console.log(prefix+' -> '+path)
	//return "http://0.0.0.0:8000/"+path;
	//return "http://192.168.43.44:8000/"+path;
	return "https://031323.github.io/suvak/"+path;
}
}

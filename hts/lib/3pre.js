Module['onAbort']=function(what){console.log(what);postMessage('reload');}
Module['locateFile']=function(path,prefix){
	console.log(prefix+' -> '+path)
	return "https://031323.github.io/suvak/"+path;
}

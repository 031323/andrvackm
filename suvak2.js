var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});

var website;
if(location.href.includes('localhost')&&!location.href.includes('localhost:8123'))
	website='http://'+location.host+'/';
else
	website='https://031323.github.io/suvak/';

suvagarmbh=function(prtikrm,reload) {
	var xhr = new XMLHttpRequest();
	//xhr.open('GET', 'http://0.0.0.0:8000/suvakww.js');
	//xhr.open('GET', 'http://localhost:8080/suvakww.js');
	xhr.open('GET', website+'suvakworker.js');
	xhr.onload = function() {
    if (xhr.status === 200) {
        var workerSrcBlob, workerBlobURL;
        
            workerSrcBlob = new Blob([xhr.responseText], { type: 'text/javascript' });
            workerBlobURL = window.URL.createObjectURL(workerSrcBlob);
		context.audioWorklet.addModule(workerBlobURL).then(() => { prtikrm() });
    }
		else reload();
};
xhr.onerror=reload;
xhr.send();
}

/*suvagarmbh=function(prtikrm,reload) {
	
	context.audioWorklet.addModule('suvakworker.js').then(() => { prtikrm() });
}*/


suvacnarmbh=function(vakym,prtikrm)
{
	context.resume();
	let node = new AudioWorkletNode(context, 'suvak-processor');
	node.port.onmessage = (event) => {
		console.log('message')
		console.log(event)
		if(event.data=='arbdh')
			node.connect(context.destination);
		if(event.data=='smaptih')
    	prtikrm()
  };
  node.port.postMessage(vakym);
  
	
}

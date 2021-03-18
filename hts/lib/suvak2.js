var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});

suvagarmbh=function(prtikrm) {
	context.audioWorklet.addModule('suvakworker.js').then(() => { prtikrm() });
}

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

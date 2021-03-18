var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});

suvagarmbh=function(prtikrm) {
	context.audioWorklet.addModule('suvakworker.js').then(() => { prtikrm() });
}

suvacnarmbh=function(vakym,prtikrm)
{
	context.resume();
	let node = new AudioWorkletNode(context, 'suvak-processor');
	node.port.onmessage = (event) => {
    // Handling data from the processor.
    prtikrm()
  };
  node.port.postMessage(vakym);
  
	node.connect(context.destination);
}

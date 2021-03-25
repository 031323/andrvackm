var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});
var suvakww;
suvagarmbh=function(prtikrm,reload) {
	var xhr = new XMLHttpRequest();
	//xhr.open('GET', 'http://0.0.0.0:8000/suvakww.js');
	//xhr.open('GET', 'http://192.168.43.44:8000/suvakww.js');
	xhr.open('GET', 'https://031323.github.io/suvak/suvakww.js');
	xhr.onload = function() {
    if (xhr.status === 200) {
        var workerSrcBlob, workerBlobURL;
        
            workerSrcBlob = new Blob([xhr.responseText], { type: 'text/javascript' });
            workerBlobURL = window.URL.createObjectURL(workerSrcBlob);
							suvakww=new Worker(workerBlobURL);
		suvakww.onmessage=function(e)
		{
			if(e.data=='suvagsmi')prtikrm();
			else if(e.data=='reload')reload();
		}
    }
		else reload();
};
xhr.onerror=reload;
xhr.send();

}
var samples;
var sample_l;
var sample_u;
var sample_n;
suvacnarmbh=function(vakym,prtikrm)
{
	context.resume();
	
	var scriptNode = context.createScriptProcessor(4096, 1, 1);
	scriptNode.onaudioprocess = function(audioProcessingEvent) {
	  // The output buffer contains the samples that will be modified and played
  	let outputBuffer = audioProcessingEvent.outputBuffer;
  	let ws=Math.min(sample_l+audioProcessingEvent.target.bufferSize,sample_u)
	  outputBuffer.copyToChannel(samples.subarray(sample_l,ws),0);
  	sample_l=ws;
  	if(sample_l>=sample_n)
		{
			scriptNode.disconnect(context.destination)
    	prtikrm()
    }
	}
	
	suvakww.onmessage = (event) => {
		if(event.data[0]=='arbdh')
		{
			sample_n=event.data[1];
			samples=new Float32Array(sample_n);
			sample_l=0;
			sample_u=0;
			scriptNode.connect(context.destination);
		}
    else
    {
    	//for(let i=0;i<event.data.length;i++)
    	//	samples[sample_u+i]=event.data[i];
    	samples.set(event.data,sample_u);
    	sample_u+=event.data.length;
    }
  };
  suvakww.postMessage(vakym);
}

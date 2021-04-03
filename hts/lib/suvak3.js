var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});
var suvakww;
var website='https://031323.github.io/suvak/';
if(location.href.includes('localhost:8000'))
	website='http://localhost:8000/'
suvagarmbh=function(prtikrm,reload) {
	var xhr = new XMLHttpRequest();
	//xhr.open('GET', 'http://0.0.0.0:8000/suvakww.js');
	//xhr.open('GET', 'http://localhost:8080/suvakww.js');
	xhr.open('GET', website+'suvakww.js');
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

var convertUint8ArrayToBinaryString =function(u8Array) {
	var i, len = u8Array.length, b_str = "";
	for (i=0; i<len; i++) {
		b_str += String.fromCharCode(u8Array[i]);
	}
	return b_str;
};
var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
var ahrnm=false;
var samples2=new Float32Array();
function download()
{
			let output=new Uint8Array(samples2.buffer)
			blob=new Blob([output], {type: 'application/octet-binary'});
			url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'float32-48k';
        a.click();
        window.URL.revokeObjectURL(url);
}
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
    	if(ahrnm&&sample_u>=sample_n)
    	{
    		let samples3=new Float32Array(samples2.length+samples.length);
				samples3.set(samples2);
				samples3.set(samples,samples2.length);
				samples2=samples3;
				scriptNode.disconnect(context.destination)
	    	prtikrm()
			}
			
    }
  };
  suvakww.postMessage(vakym);
}

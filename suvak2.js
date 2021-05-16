var suvaggaurvm=4789084;

var context = new AudioContext({sampleRate:48000,latencyHint:"playback"});

var website;
console.log('suvak2.js -> '+location.href);
if(location.href.includes('localhost'))
	//website='http://'+location.host+'/';
	website=location.origin+'/';
else
	website='https://031323.github.io/suvak/';
var suvak_reload;
var suvagarbdih=false;

suvagarmbh=function(prtikrm,reload,progress) {
	if(suvagarbdih)return;
	else suvagarbdih=true;
	let xhr = new XMLHttpRequest();
	console.log('xhr');
	//xhr.open('GET', 'http://0.0.0.0:8000/suvakww.js');
	//xhr.open('GET', 'http://localhost:8080/suvakww.js');
	xhr.open('GET', website+'suvakworker.js');
	xhr.onprogress=(e)=>{
		if(e.total)suvaggaurvm=e.total;
		if(typeof(progress)!='undefined')progress(e.loaded);console.log(e.loaded);
	};
	xhr.onload = function() {
    if (xhr.status === 200) {
        let workerSrcBlob, workerBlobURL;
        
            workerSrcBlob = new Blob([xhr.responseText], { type: 'text/javascript' });
            workerBlobURL = window.URL.createObjectURL(workerSrcBlob);
						context.audioWorklet.addModule(workerBlobURL).then(() => { prtikrm() });
						suvak_reload=reload;
    }
		else reload();
};
xhr.onerror=reload;
xhr.send();
}

/*suvagarmbh=function(prtikrm,reload) {
	
	context.audioWorklet.addModule('suvakworker.js').then(() => { prtikrm() });
}*/

var suvacnm=false;
suvacnarmbh=function(vakym,armbkrm,prtikrm)
{
	if(suvacnm)return;
	suvacnm=true;
	context.resume();
	let node = new AudioWorkletNode(context, 'suvak-processor');
	node.port.onmessage = (event) => {
		console.log('message')
		console.log(event)
		if(event.data[0]=='arbdh')
		{
			armbkrm(event.data[1]/48000);
			node.connect(context.destination);
		}
		if(event.data=='smaptih')
		{
			suvacnm=false;
    	prtikrm();
    }
		if(event.data=='reload')
		{
			suvacnm=false;
    	suvak_reload();
    }
  };
  let sa=suvak_svr0;
  let su=suvak_svr1;
  let snn=suvak_svr0;
  if(suvak_svritanudatth>0)sa=suvak_svritanudatth;
  if(suvak_svritodatth>0)su=suvak_svritodatth;
  if(suvak_udattpurvanudatth>0)snn=suvak_udattpurvanudatth;
  node.port.postMessage([vakym,
  	Math.log(suvak_svr0),Math.log(suvak_svr1),Math.log(sa),Math.log(su),Math.log(snn),
  	udattadnudattsysvrith,suvak_vegh]);
}
var suvak_svr0=100,suvak_svr1=135;
var suvak_svritanudatth=-1;
var suvak_svritodatth=-1;
var suvak_udattpurvanudatth=-1;
var udattadnudattsysvrith=false;
var suvak_vegh=1.0;

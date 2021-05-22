var suvaggaurvm=4789213;

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
var suvakw=false;

const suvagarmbh=function(prtikrm,reload,progress) {
	if(suvagarbdih){prtikrm();return;}
	else suvagarbdih=true;
	let xhr = new XMLHttpRequest();
	console.log('xhr');
	//xhr.open('GET', 'http://0.0.0.0:8000/suvakww.js');
	//xhr.open('GET', 'http://localhost:8080/suvakww.js');
	xhr.open('GET', website+'suvakworker.js');
	xhr.onprogress=(e)=>{
		if(e.total)suvaggaurvm=e.total;
		if(typeof(progress)!='undefined')progress(e.loaded/suvaggaurvm);console.log(e.loaded/suvaggaurvm);
	};
	xhr.onload = function() {
    if (xhr.status === 200) {
        let workerSrcBlob, workerBlobURL;
        
            workerSrcBlob = new Blob([xhr.responseText], { type: 'text/javascript' });
            workerBlobURL = window.URL.createObjectURL(workerSrcBlob);
						context.audioWorklet.addModule(workerBlobURL).then(() => {suvakw=true; prtikrm();});
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
var suvakkrmh=0;
const suvacnarmbh=function(vakym,armbkrm,prtikrm)
{
	if(suvacnm||!suvakw)return;
	suvakkrmh++;
	let ettkrmh=suvakkrmh;
	context.resume().then(()=>{
	console.log(context.state);
	if(ettkrmh!=suvakkrmh)return;
	if(suvacnm)return;
	suvacnm=true;
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
  let adi=suvak_svr0;
  if(suvak_svritanudatth>0)sa=suvak_svritanudatth;
  if(suvak_adisvrh>0)adi=suvak_adisvrh;
  if(suvak_svritodatth>0)su=suvak_svritodatth;
  if(suvak_udattpurvanudatth>0)snn=suvak_udattpurvanudatth;
  node.port.postMessage([vakym,
  	Math.log(suvak_svr0),Math.log(suvak_svr1),Math.log(sa),Math.log(su),Math.log(snn),Math.log(adi),
  	udattadnudattsysvrith,suvak_vegh]);
  
  });
}
var suvak_svr0=106.67,suvak_svr1=120;
var suvak_svritanudatth=-1;
var suvak_svritodatth=133.33;
var suvak_udattpurvanudatth=100;
var suvak_adisvrh=100;
var udattadnudattsysvrith=true;
var suvak_vegh=1.0;

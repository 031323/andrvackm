var arbdh_=false;
var prtikrm_=()=>{};
context.audioWorklet.addModule(import.meta.url.split('/').slice(0,-1).join('/')+'/suvakworker.js').then(() => {arbdh_=true;suvakw=true;prtikrm_();});
function bhaashasva(x,s0,s1)
{
	if(typeof(s0)!='undefined'&&typeof(s1)!='undefined'){
		suvak_svr0=s0,suvak_svr1=s1;
		suvak_svritanudatth=-1;
		suvak_svritodatth=-1;
		suvak_udattpurvanudatth=-1;
		suvak_adisvrh=-1;
	}
	let f=()=>{suvacnarmbh(x,()=>{},()=>{});};
	if(arbdh_)f();
	else prtikrm_=f;
}
export {bhaashasva};

onmessage=(event) => {
      // Handling data from the node.
      console.log(event.data);
      vakstapnm(event.data);
			let ns=Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
			console.log('arbdh')
			postMessage(['arbdh',ns])
			let samples=new Float32Array(ns);
			const s=4096;
			let i=0,j=0;
			let t0=Date.now();
			for(i=0;i<ns;i+=s)
			{
				let ui=Math.min(i+s,ns);
				//pro_sbdah();
				for(j=i;j<ui;j++)
					samples[j]=pro_sbdh();
				postMessage(samples.subarray(i,ui));
			}
			//pro_sbdah();
			console.log(((Date.now()-t0)/1000).toString()+' / '+(ns/48000).toString())
			console.log('mukth')
    };
var hts_prtikrm=function()
{
	Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
	postMessage('suvagsmi');
}
if(typeof hts!=='undefined')
hts_prtikrm()

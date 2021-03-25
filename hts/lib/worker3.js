onmessage=(event) => {
      // Handling data from the node.
      console.log(event.data);
      vakstapnm(event.data);
			let ns=Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
			console.log('arbdh')
			postMessage(['arbdh',ns])
			let samples=new Float32Array(ns);
			const s=4096;
			for(let i=0;i<ns;i+=s)
			{
				let ui=Math.min(i+s,ns);
				for(let j=i;j<ui;j++)
					samples[j]=pro_sbdh();
				postMessage(samples.subarray(i,ui));
			}
			console.log('mukth')
    };
var hts_prtikrm=function()
{
	Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
	postMessage('suvagsmi');
}
if(typeof hts!=='undefined')
hts_prtikrm()

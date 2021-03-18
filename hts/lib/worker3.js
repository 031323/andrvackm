onmessage=(event) => {
      // Handling data from the node.
      console.log(event.data);
      vakstapnm(event.data);
			let ns=Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
			console.log('arbdh')
			postMessage(['arbdh',ns])
			let fr=ns/240;
			for(let i=0;i<fr;i++)
			{
				let samples=new Float32Array(240);
				for(let i=0;i<240;i++)
					samples[i]=pro_sbdh();
				postMessage(samples);
			}
    };
var hts_prtikrm=function()
{
	Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
	postMessage('suvagsmi');
}
if(typeof hts!=='undefined')
hts_prtikrm()

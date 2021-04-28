var hts;
Module.ccall('hts_armbh',null,['string'],[htsfile]);
var arbdh=false;
var suvakprocessor;
class SuvakProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    suvakprocessor=this;
    this.port.onmessage = (event) => {
      // Handling data from the node.
      console.log(event.data);
      let t0=Date.now();
      vakstapnm(event.data);
      let t1=Date.now();
      console.log('vakstapnm: '+(t1-t0).toString());
      t0=t1;
			let ns=Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
			t1=Date.now();
      console.log('pro_vacnarmbh: '+(t1-t0).toString());
			arbdh=true
			console.log('arbdh')
			this.port.postMessage(['arbdh',ns])
    };
  }

  process(inputs, outputs, parameters) {
  	if(!arbdh)return true;
  	const output=outputs[0][0];
  	for (let i = 0; i < output.length; ++i)
  	{
  		let agtih=pro_sbdh()
      if(agtih>2.0)
      {
      	arbdh=false;
      	for(;i<output.length;i++)
	 		     output[i]=0.0;
 		    this.port.postMessage('smaptih')
 		    return false;
      }
      else output[i]=agtih
  	}
    // audio processing code here.
    return true;
  }
}
console.log('worker 10')
registerProcessor('suvak-processor', SuvakProcessor);

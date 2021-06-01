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
      //console.log(event.data);
      udattadnudattsysvrith=event.data[7];
      let t0=Date.now();
      vakstapnm(event.data[0]);
      Module.ccall('svrprivrtnm',null,['double','double','double','double','double','double'],[event.data[1],event.data[2],event.data[3],event.data[4],event.data[5],event.data[6]]);
      Module.ccall('pro_vegh',null,['float'],[event.data[8]]);
      let t1=Date.now();
      console.log('vakstapnm: '+(t1-t0).toString()+'ms');
      t0=t1;
			let ns=Module.ccall('pro_vacnarmbh','number',['string','number'],['assets/0.lab',fp])
			t1=Date.now();
      console.log('pro_vacnarmbh: '+(t1-t0).toString()+'ms');
			arbdh=true
			//console.log('arbdh')
			this.port.postMessage(['arbdh',ns])
    };
  }

  process(inputs, outputs, parameters) {
  	if(!arbdh)return true;
  	if(suvakprocessor!=this)return false;
  	const output=outputs[0][0];
  	for (let i = 0; i < output.length; ++i)
  	{
  		let agtih=pro_sbdh()
      if(agtih>2.0)
      {
      	arbdh=false;
      	for(;i<output.length;i++)
	 		     output[i]=0.0;
 		    this.port.postMessage('smaptih');
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
